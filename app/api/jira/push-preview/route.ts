import { NextRequest, NextResponse } from "next/server";
import { ImportedJiraIssue, ReleaseItem } from "@/lib/types";

function textify(node: any): string {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(textify).join(" ");
  if (typeof node === "object") {
    if (typeof node.text === "string") return node.text;
    if (Array.isArray(node.content)) return node.content.map(textify).join(" ");
  }
  return "";
}

function parseBaseJiraUrl(raw: string) {
  const url = new URL(raw);
  return `${url.protocol}//${url.host}`;
}

async function jiraFetch(url: string, email: string, apiToken: string) {
  const auth = Buffer.from(`${email}:${apiToken}`).toString("base64");
  const res = await fetch(url, { headers: { Authorization: `Basic ${auth}`, Accept: "application/json" }, cache: "no-store" });
  if (!res.ok) throw new Error(`Jira request failed (${res.status})`);
  return res.json();
}

async function jiraSearch(base: string, projectKey: string, email: string, apiToken: string) {
  const url = `${base}/rest/api/3/search?jql=${encodeURIComponent(`project = ${projectKey} ORDER BY updated DESC`)}&fields=summary,description,labels,status,issuetype,parent&maxResults=100`;
  const data = await jiraFetch(url, email, apiToken);
  return (data.issues ?? []).map((issue: any) => ({
    id: issue.id,
    key: issue.key,
    summary: issue.fields?.summary ?? issue.key,
    description: textify(issue.fields?.description),
    labels: issue.fields?.labels ?? [],
    status: issue.fields?.status?.name,
    issueType: issue.fields?.issuetype?.name,
    parentKey: issue.fields?.parent?.key,
    url: `${base}/browse/${issue.key}`,
    source: "jira-project" as const,
  }));
}

function tokenize(text: string) {
  return Array.from(new Set(text.toLowerCase().split(/[^a-z0-9]+/).filter((t) => t.length > 3)));
}

function scoreIssue(release: ReleaseItem, issue: ImportedJiraIssue) {
  const releaseTokens = tokenize(`${release.version} ${release.releaseNotes} ${release.deploymentComment ?? ""} ${(release.changelog?.excerpt ?? []).join(" ")} ${(release.integrationsChanged ?? []).join(" ")}`);
  const issueTokens = new Set(tokenize(`${issue.summary} ${issue.description ?? ""} ${(issue.labels ?? []).join(" ")}`));
  let score = 0;
  for (const token of releaseTokens) if (issueTokens.has(token)) score += 1;
  return score;
}

function buildDescription(release: ReleaseItem) {
  const lines = [
    `Release: ${release.version}`,
    `Surfaces: ${release.surfaces.join(", ")}`,
    `Shipped at: ${release.shippedAt}`,
    `Backend changed: ${String(release.backendChanged)}`,
    `Shared contract changed: ${String(release.sharedContractChanged)}`,
    `Schema changed: ${String(release.schemaChanged)}`,
    `Integrations changed: ${release.integrationsChanged.join(", ") || "none"}`,
    ``,
    `Release notes:`,
    release.releaseNotes,
  ];
  if (release.deploymentComment) lines.push("", "Deployment comment:", release.deploymentComment);
  if (release.changelog?.excerpt?.length) lines.push("", "CHANGELOG excerpt:", ...release.changelog.excerpt.map((line) => `- ${line}`));
  if (release.jiraLinks?.length) lines.push("", `Already linked Jira keys: ${release.jiraLinks.map((jira) => jira.key).join(", ")}`);
  return lines.join("\n");
}

export async function POST(request: NextRequest) {
  try {
    const { jiraUrl, email, apiToken, projectKey, releases, importedIssues } = await request.json();
    if (!jiraUrl || !email || !apiToken || !projectKey) {
      return NextResponse.json({ error: "jiraUrl, email, apiToken and projectKey are required." }, { status: 400 });
    }
    if (!Array.isArray(releases) || !releases.length) {
      return NextResponse.json({ error: "Select at least one release." }, { status: 400 });
    }

    const base = parseBaseJiraUrl(jiraUrl);
    const remoteIssues = await jiraSearch(base, projectKey, email, apiToken);
    const knownIssues: ImportedJiraIssue[] = [...remoteIssues, ...((importedIssues ?? []) as ImportedJiraIssue[])];

    const drafts = (releases as ReleaseItem[]).map((release) => {
      const ranked = knownIssues
        .map((issue) => ({ issue, score: scoreIssue(release, issue) }))
        .sort((a, b) => b.score - a.score)
        .filter((entry) => entry.score > 0);
      const best = ranked[0]?.issue;
      const existingSimilar = ranked.slice(0, 3).map((entry) => ({ key: entry.issue.key, summary: entry.issue.summary, issueType: entry.issue.issueType }));
      const labels = Array.from(new Set([
        "releasegovernance:auto-push",
        ...release.surfaces.map((surface) => `surface:${surface}`),
        ...release.integrationsChanged.map((integration) => `integration:${integration}`),
      ]));
      const summary = `${release.version} - ${release.releaseNotes.split(/[.!?]/)[0].slice(0, 110)}`;
      return {
        releaseId: release.id,
        releaseVersion: release.version,
        summary,
        description: buildDescription(release),
        issueType: best?.issueType || "Story",
        parentKey: best?.parentKey || best?.key,
        labels,
        rationale: best ? `Best parent / related issue suggestion: ${best.key} - ${best.summary}` : "No strong Jira match found; create as a fresh Story or choose a parent manually.",
        existingSimilar,
      };
    });

    return NextResponse.json({ drafts, preview: { matchedIssues: remoteIssues.length, analyzedReleases: releases.length } });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Push to Jira preview failed." }, { status: 500 });
  }
}
