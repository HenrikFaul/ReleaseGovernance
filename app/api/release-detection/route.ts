import { NextRequest, NextResponse } from "next/server";
import { parseLatestProjectChangelog } from "@/lib/changelog";

function parseGitHubRepoUrl(raw: string) {
  const trimmed = raw.trim();
  if (/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(trimmed)) {
    const [owner, repo] = trimmed.replace(/\.git$/, "").split("/");
    return { owner, repo };
  }
  const url = new URL(trimmed);
  const parts = url.pathname.replace(/^\//, "").replace(/\.git$/, "").split("/");
  if (url.hostname !== "github.com" || parts.length < 2) throw new Error("Use a GitHub repository URL like https://github.com/owner/repo or owner/repo");
  return { owner: parts[0], repo: parts[1] };
}

async function githubFetch(url: string, token: string) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "releasegovernance",
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`GitHub request failed (${res.status})`);
  return res.json();
}

async function fetchRepoFile(owner: string, repo: string, filePath: string, token: string, ref?: string) {
  try {
    const suffix = ref ? `?ref=${encodeURIComponent(ref)}` : "";
    const data: any = await githubFetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}${suffix}`, token);
    if (data.content) return Buffer.from(String(data.content).replace(/\n/g, ""), "base64").toString("utf8");
  } catch {}
  return "";
}

function extractJiraKeys(text: string, projectKey?: string) {
  const matches = Array.from(new Set(text.match(/\b[A-Z][A-Z0-9]+-\d+\b/g) ?? []));
  if (!projectKey) return matches;
  return matches.filter((key) => key.startsWith(`${projectKey.toUpperCase()}-`));
}

function detectSurfaces(repoUrl: string, hostingProvider: string, combinedText: string) {
  const text = `${repoUrl} ${combinedText}`.toLowerCase();
  const surfaces = new Set<string>();
  if (text.includes("android") || repoUrl.toLowerCase().includes("mobile")) surfaces.add("mobile-android");
  else surfaces.add("web");
  if (hostingProvider === "supabase" || text.includes("supabase") || text.includes("schema") || text.includes("backend")) {
    surfaces.add("backend");
    surfaces.add("shared-contract");
  }
  return Array.from(surfaces);
}

async function probeHosting(provider: string, url: string, apiKey: string) {
  if (!url || !apiKey) return { ok: false, summary: "Missing hosting settings" };
  try {
    if (provider === "supabase") {
      const target = `${url.replace(/\/$/, "")}/auth/v1/settings`;
      const res = await fetch(target, { headers: { apikey: apiKey, Authorization: `Bearer ${apiKey}` }, cache: "no-store" });
      return { ok: res.status < 500, summary: `Supabase probe ${res.status}` };
    }
    const res = await fetch(url, { headers: { Authorization: `Bearer ${apiKey}` }, cache: "no-store" });
    return { ok: res.status < 500, summary: `${provider} probe ${res.status}` };
  } catch (error) {
    return { ok: false, summary: error instanceof Error ? error.message : "Hosting probe failed" };
  }
}

export async function POST(request: NextRequest) {
  try {
    const { projectId, projectSlug, projectKey, repoUrl, githubToken, hostingProvider, hostingUrl, hostingApiKey } = await request.json();
    if (!projectId || !projectSlug || !repoUrl || !githubToken || !hostingProvider || !hostingUrl || !hostingApiKey) {
      return NextResponse.json({ error: "projectId, projectSlug, repoUrl, githubToken, hostingProvider, hostingUrl and hostingApiKey are required." }, { status: 400 });
    }

    const { owner, repo } = parseGitHubRepoUrl(repoUrl);
    const commits: any[] = await githubFetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`, githubToken);
    const latestCommit = commits[0];
    if (!latestCommit) throw new Error("No commits found on repository.");

    const packageJsonRaw = await fetchRepoFile(owner, repo, "package.json", githubToken, latestCommit.sha);
    let version = "";
    try {
      if (packageJsonRaw) version = JSON.parse(packageJsonRaw).version ?? "";
    } catch {}

    const changelogRaw = (await fetchRepoFile(owner, repo, "CHANGELOG.md", githubToken, latestCommit.sha)) || (await fetchRepoFile(owner, repo, "changelog.md", githubToken, latestCommit.sha));
    const changelog = parseLatestProjectChangelog(changelogRaw, projectSlug);
    const combinedText = [
      latestCommit.commit?.message ?? "",
      changelog?.title ?? "",
      ...(changelog?.sections ?? []).flatMap((section) => [section.heading, ...section.bullets, ...section.prose]),
    ].join("\n");

    const jiraKeys = extractJiraKeys(combinedText, projectKey);
    const versionLabel = version ? `${repo.toLowerCase().includes("mobile") ? "mobile-android" : "web"}-v${version}` : `build-${String(latestCommit.sha).slice(0, 7)}`;
    const hosting = await probeHosting(hostingProvider, hostingUrl, hostingApiKey);
    const surfaces = detectSurfaces(repoUrl, hostingProvider, combinedText);

    const checks = [
      { key: "repo-url", label: "GitHub repo URL", present: Boolean(repoUrl), value: repoUrl },
      { key: "repo-token", label: "GitHub API token", present: Boolean(githubToken), value: githubToken ? "saved" : "missing" },
      { key: "commit", label: "Latest commit detected", present: Boolean(latestCommit.sha), value: String(latestCommit.sha).slice(0, 7) },
      { key: "version", label: "Release version detected", present: Boolean(versionLabel), value: versionLabel },
      { key: "changelog", label: "Latest CHANGELOG entry", present: Boolean(changelog), value: changelog?.title ?? "missing" },
      { key: "hosting-provider", label: "Hosting provider", present: Boolean(hostingProvider), value: hostingProvider },
      { key: "hosting-url", label: "Hosting URL", present: Boolean(hostingUrl), value: hostingUrl },
      { key: "hosting-key", label: "Hosting API key", present: Boolean(hostingApiKey), value: hostingApiKey ? "saved" : "missing" },
      { key: "hosting-deploy", label: "Hosting deployment check", present: hosting.ok, value: hosting.summary },
    ];

    return NextResponse.json({
      candidate: {
        id: `candidate_${projectId}_${String(latestCommit.sha).slice(0, 12)}`,
        version: versionLabel,
        surfaces,
        detectedAt: latestCommit.commit?.committer?.date ?? new Date().toISOString(),
        source: { kind: "github", owner, repository: repo, ref: latestCommit.sha, url: repoUrl, label: `${owner}/${repo}` },
        repoUrl,
        hostingProvider,
        hostingUrl,
        hostingSummary: hosting.summary,
        commitSha: latestCommit.sha,
        commitMessage: latestCommit.commit?.message ?? "",
        commitUrl: latestCommit.html_url,
        jiraKeys,
        changelog: changelog ?? undefined,
        releaseNotes: changelog?.title ?? `Detected from latest commit ${String(latestCommit.sha).slice(0, 7)}`,
        requiredChecks: checks,
        integrationsChanged: Array.from(new Set([hostingProvider, combinedText.toLowerCase().includes("supabase") ? "supabase" : "", combinedText.toLowerCase().includes("vercel") ? "vercel" : "", "github"].filter(Boolean))),
        backendChanged: surfaces.includes("backend"),
        sharedContractChanged: surfaces.includes("shared-contract"),
        schemaChanged: /schema|migration|rls|table|column/i.test(combinedText),
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Release detection failed." }, { status: 500 });
  }
}
