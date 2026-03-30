import { NextRequest, NextResponse } from "next/server";
import { jiraFetch, jiraSearch, parseJiraUrl, projectLockedJql, toImportedIssue } from "@/lib/jira-import";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const jiraUrl: string | undefined = body.jiraUrl;
    const email: string | undefined = body.email;
    const apiToken: string | undefined = body.apiToken;
    const projectKey: string | undefined = body.projectKey;
    const maxResults = body.queryAll ? 100 : Math.max(1, Math.min(Number(body.maxResults) || 10, 100));

    if (!email || !apiToken) {
      return NextResponse.json({ error: "email and apiToken are required." }, { status: 400 });
    }

    const parsed = parseJiraUrl(jiraUrl);
    const base = parsed.base;
    const effectiveProjectKey =
      (projectKey || (parsed.kind === "project" ? parsed.projectKey : undefined) || (parsed.kind === "issue" ? parsed.key.split("-")[0] : undefined) || "").toUpperCase();

    if (!effectiveProjectKey && parsed.kind !== "search") {
      return NextResponse.json({ error: "projectKey is required when the Jira URL is only a base URL." }, { status: 400 });
    }

    if (parsed.kind === "issue") {
      const data = await jiraFetch(
        `${base}/rest/api/3/issue/${parsed.key}?fields=summary,description,labels,status,issuetype,parent,created`,
        email,
        apiToken
      );
      return NextResponse.json({ issues: [toImportedIssue(data, base, "jira-url")], diagnostics: { strategy: "single-issue", projectKey: effectiveProjectKey } });
    }

    const jql =
      parsed.kind === "search"
        ? projectLockedJql(effectiveProjectKey || "", parsed.jql)
        : projectLockedJql(effectiveProjectKey);

    const issues = await jiraSearch(base, jql, email, apiToken, maxResults);

    return NextResponse.json({
      issues,
      diagnostics: {
        strategy: parsed.kind === "project" ? "project-search" : parsed.kind === "search" ? "jql-search" : "base-url-plus-project-key",
        projectKey: effectiveProjectKey,
        count: issues.length,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected Jira import error." },
      { status: 500 }
    );
  }
}
