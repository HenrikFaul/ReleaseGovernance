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
  throw new Error("Unsupported Jira URL. Use a /browse/KEY URL, a /jira/software/projects/KEY URL, or an issues URL with ?jql=...");
}

async function jiraFetch(url: string, email: string, apiToken: string) {
  const auth = Buffer.from(`${email}:${apiToken}`).toString("base64");
  const res = await fetch(url, { headers: { Authorization: `Basic ${auth}`, Accept: "application/json" }, cache: "no-store" });
  if (!res.ok) throw new Error(`Jira request failed (${res.status})`);
  return res.json();
}

async function jiraSearch(base: string, jql: string, email: string, apiToken: string) {
  let data: any = null;
  const urls = [
    `${base}/rest/api/3/search/jql?jql=${encodeURIComponent(jql)}&fields=summary,description,labels&maxResults=100`,
    `${base}/rest/api/3/search?jql=${encodeURIComponent(jql)}&fields=summary,description,labels&maxResults=100`
  ];
  for (const url of urls) {
    try {
      data = await jiraFetch(url, email, apiToken);
      break;
    } catch {}
  }
  if (!data) throw new Error("Jira search failed.");
  return (data.issues ?? []).map((issue: any) => ({
    id: `jira_${issue.key.toLowerCase()}`,
    key: issue.key,
    summary: issue.fields?.summary ?? issue.key,
    description: textify(issue.fields?.description),
    labels: issue.fields?.labels ?? [],
    url: `${base}/browse/${issue.key}`,
    source: "jira-project" as const
  }));
}

export async function POST(request: NextRequest) {
  try {
    const { jiraUrl, email, apiToken } = await request.json();
    if (!jiraUrl || !email || !apiToken) {
      return NextResponse.json({ error: "jiraUrl, email and apiToken are required." }, { status: 400 });
    }

    const parsed = parseJiraUrl(jiraUrl);

    if (parsed.kind === "issue") {
      const data = await jiraFetch(`${parsed.base}/rest/api/3/issue/${parsed.key}?fields=summary,description,labels`, email, apiToken);
      return NextResponse.json({
        issues: [{
          id: `jira_${data.key.toLowerCase()}`,
          key: data.key,
          summary: data.fields?.summary ?? data.key,
          description: textify(data.fields?.description),
          labels: data.fields?.labels ?? [],
          url: `${parsed.base}/browse/${data.key}`,
          source: "jira-url"
        }]
      });
    }

    if (parsed.kind === "project") {
      const issues = await jiraSearch(parsed.base, `project = ${parsed.projectKey} ORDER BY created ASC`, email, apiToken);
      return NextResponse.json({ issues });
    }

    const issues = await jiraSearch(parsed.base, parsed.jql, email, apiToken);
    return NextResponse.json({ issues });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unexpected Jira import error." }, { status: 500 });
  }
}
