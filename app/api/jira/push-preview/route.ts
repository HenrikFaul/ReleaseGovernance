import { NextRequest, NextResponse } from "next/server";
import { jiraSearch, parseJiraUrl, projectLockedJql } from "@/lib/jira-import";

type JiraIssue = {
  key: string;
  summary: string;
  description?: string;
  labels?: string[];
  issueType?: string;
  parentKey?: string;
  status?: string;
  url?: string;
};

function tokenize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).filter((part) => part.length > 2);
}

function bestIssueMatch(release: any, issues: JiraIssue[]) {
  const releaseTokens = new Set(tokenize(`${release.version} ${release.releaseNotes || ""} ${release.deploymentComment || ""} ${(release.changelog?.excerpt || []).join(" ")}`));
  let best: JiraIssue | undefined;
  let bestScore = -1;
  for (const issue of issues) {
    const issueTokens = tokenize(`${issue.summary} ${issue.description || ""} ${(issue.labels || []).join(" ")}`);
    const score = issueTokens.reduce((acc, token) => acc + (releaseTokens.has(token) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      best = issue;
    }
  }
  return { best, score: bestScore };
}

async function loadCurrentIssues({ jiraUrl, email, apiToken, projectKey, existingIssues }: { jiraUrl?: string; email?: string; apiToken?: string; projectKey?: string; existingIssues?: JiraIssue[]; }) {
  const fallback = Array.isArray(existingIssues) ? existingIssues : [];
  if (!jiraUrl || !email || !apiToken || !projectKey) return fallback;
  try {
    const parsed = parseJiraUrl(jiraUrl);
    const fetched = await jiraSearch(parsed.base, projectLockedJql(projectKey), email, apiToken, 100);
    const merged = new Map<string, JiraIssue>();
    for (const issue of [...fallback, ...fetched]) {
      if (!issue?.key) continue;
      merged.set(issue.key, issue);
    }
    return Array.from(merged.values());
  } catch {
    return fallback;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { jiraUrl, email, apiToken, projectKey, releases, existingIssues } = await request.json();
    const currentIssues = await loadCurrentIssues({ jiraUrl, email, apiToken, projectKey, existingIssues });
    const drafts = (releases || []).map((release: any) => {
      const { best, score } = bestIssueMatch(release, currentIssues);
      return {
        releaseId: release.id,
        version: release.version,
        issueType: best?.issueType || "Story",
        summary: best ? `${release.version} · ${best.summary}` : `${release.version} release follow-up`,
        description: [`Release: ${release.version}`, `Surfaces: ${(release.surfaces || []).join(", ")}`, `Status: ${release.status}`, release.deploymentComment ? `Deployment comment: ${release.deploymentComment}` : "", release.releaseNotes ? `Release notes: ${release.releaseNotes}` : "", release.changelog?.title ? `Changelog: ${release.changelog.title}` : ""].filter(Boolean).join("\n\n"),
        parentKey: best?.parentKey || best?.key || (projectKey ? `${projectKey}-1` : ""),
        labels: Array.from(new Set(["releasegovernance", `release:${String(release.version).toLowerCase()}`, ...(best?.labels || []).slice(0, 3)])),
        rationale: best ? `Best Jira similarity match: ${best.key} (${best.summary}) with score ${score}.` : "No meaningful Jira similarity match found, defaulting to project root parent.",
      };
    });
    return NextResponse.json({ drafts, usedIssueCount: currentIssues.length });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Push preview failed." }, { status: 500 });
  }
}
