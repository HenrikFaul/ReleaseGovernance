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
  if (url.pathname.includes("/browse/")) return { base, kind: "issue" as const, key: url.pathname.split("/browse/")[1] };
  const jql = url.searchParams.get("jql");
  if (jql) return { base, kind: "search" as const, jql };
  throw new Error("Unsupported Jira URL. Use a /browse/KEY URL or an issues URL with ?jql=...");
}
async function jiraFetch(url: string, email: string, apiToken: string) {
  const auth = Buffer.from(`${email}:${apiToken}`).toString("base64");
  const res = await fetch(url, { headers: { Authorization: `Basic ${auth}`, Accept: "application/json" }, cache: "no-store" });
  if (!res.ok) throw new Error(`Jira request failed (${res.status})`);
  return res.json();
}

export async function POST(request: NextRequest) {
  try {
    const { jiraUrl, email, apiToken } = await request.json();
    if (!jiraUrl || !email || !apiToken) return NextResponse.json({ error: "jiraUrl, email and apiToken are required." }, { status: 400 });

    const parsed = parseJiraUrl(jiraUrl);
    const issues: any[] = [];

    if (parsed.kind === "issue") {
      const data = await jiraFetch(`${parsed.base}/rest/api/3/issue/${parsed.key}?fields=summary,description,labels`, email, apiToken);
      issues.push({ id: `jira_${data.key.toLowerCase()}`, key: data.key, summary: data.fields?.summary ?? data.key, description: textify(data.fields?.description), labels: data.fields?.labels ?? [], url: `${parsed.base}/browse/${data.key}`, source: "jira-url" });
    } else {
      let data: any = null;
      const urls = [
        `${parsed.base}/rest/api/3/search/jql?jql=${encodeURIComponent(parsed.jql)}&fields=summary,description,labels&maxResults=100`,
        `${parsed.base}/rest/api/3/search?jql=${encodeURIComponent(parsed.jql)}&fields=summary,description,labels&maxResults=100`,
      ];
      for (const url of urls) {
        try { data = await jiraFetch(url, email, apiToken); break; } catch {}
      }
      if (!data) throw new Error("Jira search failed.");
      for (const issue of data.issues ?? []) {
        issues.push({ id: `jira_${issue.key.toLowerCase()}`, key: issue.key, summary: issue.fields?.summary ?? issue.key, description: textify(issue.fields?.description), labels: issue.fields?.labels ?? [], url: `${parsed.base}/browse/${issue.key}`, source: "jira-url" });
      }
    }
    return NextResponse.json({ issues });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unexpected Jira import error." }, { status: 500 });
  }
}
