import { ImportedJiraIssue } from "@/lib/types";

type JiraParseResult =
  | { base: string; kind: "base"; projectKey?: string }
  | { base: string; kind: "project"; projectKey: string }
  | { base: string; kind: "issue"; key: string }
  | { base: string; kind: "search"; jql: string };

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

export function parseJiraUrl(raw?: string): JiraParseResult {
  if (!raw || !raw.trim()) return { base: "https://hobbeast.atlassian.net", kind: "base" };
  const url = new URL(raw);
  const base = `${url.protocol}//${url.host}`;
  const projectMatch = url.pathname.match(/\/jira\/software\/projects\/([^\/?#]+)/i);
  if (projectMatch) return { base, kind: "project", projectKey: projectMatch[1].toUpperCase() };
  if (url.pathname.includes("/browse/")) return { base, kind: "issue", key: url.pathname.split("/browse/")[1].split(/[?#]/)[0].toUpperCase() };
  const jql = url.searchParams.get("jql");
  if (jql) return { base, kind: "search", jql };
  return { base, kind: "base" };
}

export async function jiraFetch(url: string, email: string, apiToken: string) {
  const auth = Buffer.from(`${email}:${apiToken}`).toString("base64");
  const res = await fetch(url, {
    headers: { Authorization: `Basic ${auth}`, Accept: "application/json" },
    cache: "no-store",
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Jira request failed (${res.status}): ${body || "no response body"}`);
  }
  return res.json();
}

export function projectLockedJql(projectKey: string, userJql?: string) {
  if (!userJql || !userJql.trim()) return `project = ${projectKey} ORDER BY created DESC`;
  if (/\bproject\s*=\s*[A-Z][A-Z0-9]*\b/i.test(userJql)) return userJql;
  return `project = ${projectKey} AND (${userJql}) ORDER BY created DESC`;
}

export function toImportedIssue(issue: any, base: string, source: "jira-url" | "jira-project" | "file-import" = "jira-project"): ImportedJiraIssue {
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

export async function jiraSearch(base: string, jql: string, email: string, apiToken: string, maxResults: number) {
  const urls = [
    `${base}/rest/api/3/search/jql?jql=${encodeURIComponent(jql)}&fields=summary,description,labels,status,issuetype,parent,created&maxResults=${maxResults}`,
    `${base}/rest/api/3/search?jql=${encodeURIComponent(jql)}&fields=summary,description,labels,status,issuetype,parent,created&maxResults=${maxResults}`,
  ];

  let lastError: unknown = null;
  for (const url of urls) {
    try {
      const data = await jiraFetch(url, email, apiToken);
      return (data.issues ?? []).map((issue: any) => toImportedIssue(issue, base, "jira-project"));
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Jira search failed.");
}
