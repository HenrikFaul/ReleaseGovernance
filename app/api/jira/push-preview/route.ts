import { NextRequest, NextResponse } from "next/server";

type JiraIssue = {
  key: string;
  summary: string;
  description?: string;
  labels?: string[];
  issueType?: string;
  parentKey?: string;
  url?: string;
};

function tokenize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((part) => part.length > 2);
}

function bestIssueMatch(release: any, issues: JiraIssue[]) {
  const releaseTokens = new Set(tokenize(`${release.version} ${release.releaseNotes || ""} ${release.deploymentComment || ""}`));
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

export async function POST(request: NextRequest) {
  try {
    const { projectKey, releases, existingIssues } = await request.json();

    const drafts = (releases || []).map((release: any) => {
      const { best, score } = bestIssueMatch(release, existingIssues || []);
      return {
        releaseId: release.id,
        version: release.version,
        issueType: "Story",
        summary: `${release.version} release follow-up`,
        description: [
          `Release: ${release.version}`,
          `Surfaces: ${(release.surfaces || []).join(", ")}`,
          `Status: ${release.status}`,
          release.deploymentComment ? `Deployment comment: ${release.deploymentComment}` : "",
          release.releaseNotes ? `Release notes: ${release.releaseNotes}` : "",
        ].filter(Boolean).join("\n\n"),
        parentKey: best?.parentKey || best?.key || (projectKey ? `${projectKey}-1` : ""),
        labels: ["releasegovernance", `release:${String(release.version).toLowerCase()}`],
        rationale: best
          ? `Best Jira similarity match: ${best.key} (${best.summary}) with score ${score}.`
          : "No meaningful Jira similarity match found, defaulting to project root parent.",
      };
    });

    return NextResponse.json({ drafts });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Push preview failed." },
      { status: 500 }
    );
  }
}
