import { NextRequest, NextResponse } from "next/server";

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

function parseJiraUrl(raw: string) {
  const url = new URL(raw);
  const base = `${url.protocol}//${url.host}`;
  const projectMatch = url.pathname.match(/\/jira\/software\/projects\/([^\/?#]+)/i);
  if (projectMatch) return { base, kind: "project" as const, projectKey: projectMatch[1].toUpperCase() };
  if (url.pathname.includes("/browse/")) return { base, kind: "issue" as const, key: url.pathname.split("/browse/")[1] };
  const jql = url.searchParams.get("jql");
  if (jql) return { base, kind: "search" as const, jql };
  return { base, kind: "base" as const };
}

async function jiraFetch(url: string, email: string, apiToken: string) {
  const auth = Buffer.from(`${email}:${apiToken}`).toString("base64");
  const res = await fetch(url, { headers: { Authorization: `Basic ${auth}`, Accept: "application/json" }, cache: "no-store" });
  if (!res.ok) throw new Error(`Jira request failed (${res.status})`);
  return res.json();
}

function mapIssue(issue: any, base: string, source: "jira-url" | "jira-project") {
  return {
    id: `jira_${issue.key.toLowerCase()}`,
    key: issue.key,
    summary: issue.fields?.summary ?? issue.key,
    description: textify(issue.fields?.description),
    labels: issue.fields?.labels ?? [],
    url: `${base}/browse/${issue.key}`,
    source,
    issueType: issue.fields?.issuetype?.name,
    status: issue.fields?.status?.name,
    parentKey: issue.fields?.parent?.key,
    created: issue.fields?.created,
  };
}

async function jiraSearch(base: string, jql: string, email: string, apiToken: string, maxResults: number) {
  const url = `${base}/rest/api/3/search?jql=${encodeURIComponent(jql)}&fields=summary,description,labels,status,issuetype,parent,created&maxResults=${maxResults}`;
  const data = await jiraFetch(url, email, apiToken);
  return (data.issues ?? []).map((issue: any) => mapIssue(issue, base, "jira-project"));
}

export async function POST(request: NextRequest) {
  try {
    const { jiraUrl, email, apiToken, projectKey, maxResults, queryAll } = await request.json();
    if (!jiraUrl || !email || !apiToken) {
      return NextResponse.json({ error: "jiraUrl, email and apiToken are required." }, { status: 400 });
    }

    const parsed = parseJiraUrl(jiraUrl);
    const effectiveProjectKey = String(projectKey || (parsed.kind === "project" ? parsed.projectKey : "") || "").toUpperCase();
    const issueLimit = Math.max(1, Math.min(Number(maxResults) || 10, queryAll ? 100 : 100));

    if (parsed.kind === "issue") {
      const data = await jiraFetch(`${parsed.base}/rest/api/3/issue/${parsed.key}?fields=summary,description,labels,status,issuetype,parent,created`, email, apiToken);
      return NextResponse.json({ issues: [mapIssue(data, parsed.base, "jira-url")], diagnostics: { projectKey: effectiveProjectKey || data.key.split("-")[0] } });
    }

    if (parsed.kind === "project") {
      const issues = await jiraSearch(parsed.base, `project = ${parsed.projectKey} ORDER BY created ASC`, email, apiToken, issueLimit);
      return NextResponse.json({ issues, diagnostics: { projectKey: parsed.projectKey } });
    }

    if (parsed.kind === "search") {
      const issues = await jiraSearch(parsed.base, parsed.jql, email, apiToken, issueLimit);
      return NextResponse.json({ issues, diagnostics: { projectKey: effectiveProjectKey } });
    }

    if (!effectiveProjectKey) {
      return NextResponse.json({ error: "Base Jira URL requires projectKey." }, { status: 400 });
    }
    const issues = await jiraSearch(parsed.base, `project = ${effectiveProjectKey} ORDER BY created ASC`, email, apiToken, issueLimit);
    return NextResponse.json({ issues, diagnostics: { projectKey: effectiveProjectKey } });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unexpected Jira import error." }, { status: 500 });
  }
}
