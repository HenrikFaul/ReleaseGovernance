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
  if (url.pathname.includes("/browse/")) return { base, kind: "issue" as const, key: url.pathname.split("/browse/")[1].split(/[?#]/)[0].toUpperCase() };
  const jql = url.searchParams.get("jql");
  if (jql) return { base, kind: "search" as const, jql };
  throw new Error("Unsupported Jira URL. Use a /browse/KEY URL, a /jira/software/projects/KEY URL, or an issues URL with ?jql=...");
}

async function jiraFetch(url: string, email: string, apiToken: string) {
  const auth = Buffer.from(`${email}:${apiToken}`).toString("base64");
  const res = await fetch(url, { headers: { Authorization: `Basic ${auth}`, Accept: "application/json" }, cache: "no-store" });
  if (!res.ok) throw new Error(`Jira request failed (${res.status})`);
  return res.json();
}

function projectLockedJql(projectKey: string, userJql?: string) {
  if (!userJql || !userJql.trim()) return `project = ${projectKey} ORDER BY created DESC`;
  if (/\bproject\s*=\s*[A-Z][A-Z0-9]*\b/i.test(userJql)) return userJql;
  return `project = ${projectKey} AND (${userJql}) ORDER BY created DESC`;
}

function toImportedIssue(issue: any, base: string, source: "jira-url" | "jira-project") {
  return {
    id: `jira_${String(issue.key).toLowerCase()}`,
    key: issue.key,
    summary: issue.fields?.summary ?? issue.key,
    description: textify(issue.fields?.description),
    labels: issue.fields?.labels ?? [],
    url: `${base}/browse/${issue.key}`,
    source,
    status: issue.fields?.status?.name ?? undefined,
    issueType: issue.fields?.issuetype?.name ?? undefined,
    created: issue.fields?.created ?? undefined,
    parentKey: issue.fields?.parent?.key ?? undefined,
  };
}

async function jiraSearch(base: string, jql: string, email: string, apiToken: string, maxResults: number) {
  let data: any = null;
  const urls = [
    `${base}/rest/api/3/search/jql?jql=${encodeURIComponent(jql)}&fields=summary,description,labels,status,issuetype,parent,created&maxResults=${maxResults}`,
    `${base}/rest/api/3/search?jql=${encodeURIComponent(jql)}&fields=summary,description,labels,status,issuetype,parent,created&maxResults=${maxResults}`,
  ];
  for (const url of urls) {
    try {
      data = await jiraFetch(url, email, apiToken);
      break;
    } catch {}
  }
  if (!data) throw new Error("Jira search failed.");
  return (data.issues ?? []).map((issue: any) => toImportedIssue(issue, base, "jira-project"));
}

export async function POST(request: NextRequest) {
  try {
    const { jiraUrl, email, apiToken, projectKey, maxResults = 10, queryAll = false } = await request.json();
    if (!email || !apiToken || !projectKey) {
      return NextResponse.json({ error: "email, apiToken and projectKey are required." }, { status: 400 });
    }
    const max = queryAll ? 100 : Math.max(1, Math.min(Number(maxResults) || 10, 100));
    const fallbackBase = jiraUrl ? parseJiraUrl(jiraUrl).base : undefined;
    const base = fallbackBase ?? "https://hobbeast.atlassian.net";
    const parsed = jiraUrl ? parseJiraUrl(jiraUrl) : { base, kind: "project" as const, projectKey };

    if (parsed.kind === "issue") {
      if (!parsed.key.startsWith(`${projectKey}-`)) {
        return NextResponse.json({ error: `Issue ${parsed.key} does not belong to project ${projectKey}.` }, { status: 400 });
      }
      const data = await jiraFetch(`${parsed.base}/rest/api/3/issue/${parsed.key}?fields=summary,description,labels,status,issuetype,parent,created`, email, apiToken);
      return NextResponse.json({ issues: [toImportedIssue(data, parsed.base, "jira-url")] });
    }

    if (parsed.kind === "project") {
      if (parsed.projectKey !== projectKey) {
        return NextResponse.json({ error: `Selected Jira project must be ${projectKey}.` }, { status: 400 });
      }
      const issues = await jiraSearch(parsed.base, `project = ${projectKey} ORDER BY created DESC`, email, apiToken, max);
      return NextResponse.json({ issues });
    }

    const issues = await jiraSearch(parsed.base, projectLockedJql(projectKey, parsed.jql), email, apiToken, max);
    return NextResponse.json({ issues });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unexpected Jira import error." }, { status: 500 });
  }
}
