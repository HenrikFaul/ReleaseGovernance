import { NextRequest, NextResponse } from "next/server";
import { ReleaseCandidate, ReleaseChangelog, Surface } from "@/lib/types";

function parseRepo(raw: string) {
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

function parseLatestChangelog(md: string): ReleaseChangelog | undefined {
  const lines = md.split(/\r?\n/);
  const start = lines.findIndex((line) => /^##\s+/.test(line));
  if (start === -1) return undefined;
  const title = lines[start].replace(/^##\s+/, "").trim();
  const excerpt: string[] = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (/^##\s+/.test(line)) break;
    if (!line) continue;
    excerpt.push(line.replace(/^[-*]\s+/, ""));
    if (excerpt.length >= 5) break;
  }
  return { title, excerpt };
}

function deriveVersion(changelog: ReleaseChangelog | undefined, commitDate: string, sha: string) {
  if (changelog?.title) {
    const versionMatch = changelog.title.match(/\[?([A-Za-z0-9._-]+)\]?/);
    if (versionMatch?.[1]) return versionMatch[1].startsWith("web-") ? versionMatch[1] : `web-${versionMatch[1]}`;
  }
  return `auto-${commitDate.slice(0, 10)}-${sha.slice(0, 7)}`;
}

function inferIntegrations(text: string) {
  const lower = text.toLowerCase();
  const list = ["supabase", "geoapify", "tomtom", "mapy", "jira", "github", "vercel"];
  return list.filter((token) => lower.includes(token));
}

function inferSurfaces(text: string): Surface[] {
  const lower = text.toLowerCase();
  const surfaces: Surface[] = ["web"];
  if (lower.includes("backend") || lower.includes("schema") || lower.includes("contract")) surfaces.push("backend", "shared-contract");
  return Array.from(new Set(surfaces));
}

function parseComparisonTimestamp(value?: string) {
  if (!value) return undefined;
  const normalized = /^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T00:00:00Z` : value;
  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

function githubHeaders(token?: string) {
  return { Accept: "application/vnd.github+json", "User-Agent": "releasegovernance", ...(token ? { Authorization: `Bearer ${token}` } : {}) };
}

export async function POST(request: NextRequest) {
  try {
    const { repoUrl, latestReleaseDate, githubToken } = await request.json();
    if (!repoUrl) return NextResponse.json({ error: "repoUrl is required." }, { status: 400 });
    const { owner, repo } = parseRepo(repoUrl);
    const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers: githubHeaders(githubToken), cache: "no-store" });
    if (!repoRes.ok) throw new Error(`GitHub repo lookup failed (${repoRes.status}).`);
    const repoData: any = await repoRes.json();
    const branch = repoData.default_branch || "main";
    const commitRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${branch}`, { headers: githubHeaders(githubToken), cache: "no-store" });
    if (!commitRes.ok) throw new Error(`GitHub commit lookup failed (${commitRes.status}).`);
    const commitData: any = await commitRes.json();
    const commitDate = commitData.commit?.committer?.date ?? new Date().toISOString();
    const releaseTimestamp = parseComparisonTimestamp(latestReleaseDate);
    const commitTimestamp = parseComparisonTimestamp(commitDate);
    if (releaseTimestamp && commitTimestamp && commitTimestamp <= releaseTimestamp) return NextResponse.json({ candidate: null });
    let changelog: ReleaseChangelog | undefined;
    for (const candidatePath of ["CHANGELOG.md", "changelog.md"]) {
      const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${candidatePath}`;
      const rawRes = await fetch(rawUrl, { cache: "no-store", headers: githubToken ? { Authorization: `Bearer ${githubToken}` } : undefined });
      if (rawRes.ok) {
        const text = await rawRes.text();
        changelog = parseLatestChangelog(text);
        if (changelog) break;
      }
    }
    const textSeed = `${commitData.commit?.message ?? ""} ${changelog?.title ?? ""} ${(changelog?.excerpt ?? []).join(" ")}`;
    const candidate: ReleaseCandidate = { id: `candidate_${commitData.sha.slice(0, 7)}`, version: deriveVersion(changelog, commitDate, commitData.sha), surfaces: inferSurfaces(textSeed), detectedAt: commitDate, backendChanged: /backend|schema|supabase|data/i.test(textSeed), sharedContractChanged: /contract|payload|schema|shared/i.test(textSeed), schemaChanged: /schema|migration|column|table/i.test(textSeed), integrationsChanged: inferIntegrations(textSeed), releaseNotes: changelog?.excerpt?.[0] ?? commitData.commit?.message ?? "Latest commit detected.", deploymentComment: commitData.commit?.message ?? "Latest GitHub commit detected.", changelog, commitMessage: commitData.commit?.message, commitUrl: commitData.html_url, source: { kind: "github", owner, repository: repo, ref: commitData.sha, url: commitData.html_url, label: `GitHub / ${owner}/${repo}` } };
    return NextResponse.json({ candidate });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Release detection failed." }, { status: 500 });
  }
}
