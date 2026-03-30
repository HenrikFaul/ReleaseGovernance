
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

function buildSearchUrl(base: string, jql: string, maxResults: number) {
  return `${base}/rest/api/3/search?jql=${encodeURIComponent(jql)}&fields=summary,description,labels,status,issuetype,created,parent&maxResults=${maxResults}`;
}

function extractIssueProjectKey(key: string) {
  const match = key.match(/^([A-Z][A-Z0-9_]+)-\d+$/i);
  return match ? match[1].toUpperCase() : "";
}

function mapIssue(issue: any, base: string, source: "jira-url" | "jira-project") {
  return {
    id: `jira_${String(issue.key).toLowerCase()}`,
    key: issue.key,
    summary: issue.fields?.summary ?? issue.key,
    description: textify(issue.fields?.description),
    labels: issue.fields?.labels ?? [],
    url: `${base}/browse/${issue.key}`,
    source,
    status: issue.fields?.status?.name ?? "",
    issueType: issue.fields?.issuetype?.name ?? "",
    created: issue.fields?.created ?? "",
    parentKey: issue.fields?.parent?.key ?? "",
  };
}

async function jiraSearch(base: string, jql: string, email: string, apiToken: string, maxResults: number, source: "jira-project" | "jira-url" = "jira-project") {
  let data: any = null;
  const urls = [
    `${base}/rest/api/3/search/jql?jql=${encodeURIComponent(jql)}&fields=summary,description,labels,status,issuetype,created,parent&maxResults=${maxResults}`,
    buildSearchUrl(base, jql, maxResults)
  ];
  for (const url of urls) {
    try {
      data = await jiraFetch(url, email, apiToken);
      break;
    } catch {}
  }
  if (!data) throw new Error("Jira search failed.");
  return (data.issues ?? []).map((issue: any) => mapIssue(issue, base, source));
}

function requireProjectKey(projectKey: string | undefined) {
  if (!projectKey || !/^[A-Z][A-Z0-9_]*$/i.test(projectKey)) {
    throw new Error("A valid Jira project key is required for test/import operations.");
  }
  return projectKey.toUpperCase();
}

export async function POST(request: NextRequest) {
  try {
    const { jiraUrl, email, apiToken, projectKey, mode, maxResults } = await request.json();
    if (!email || !apiToken) {
      return NextResponse.json({ error: "email and apiToken are required." }, { status: 400 });
    }

    const enforcedProjectKey = requireProjectKey(projectKey);
    const effectiveMode = mode === "test" ? "test" : "import";
    const effectiveMax = maxResults === "all" ? 100 : Math.max(1, Math.min(Number(maxResults) || (effectiveMode === "test" ? 10 : 100), 100));

    if (!jiraUrl) {
      const issues = await jiraSearch(
        `https://hobbeast.atlassian.net`,
        `project = ${enforcedProjectKey} ORDER BY created DESC`,
        email,
        apiToken,
        effectiveMax,
        "jira-project"
      );
      return NextResponse.json({ issues });
    }

    const parsed = parseJiraUrl(jiraUrl);

    if (parsed.kind === "issue") {
      if (extractIssueProjectKey(parsed.key) !== enforcedProjectKey) {
        return NextResponse.json({ error: `The provided Jira issue does not belong to project ${enforcedProjectKey}.` }, { status: 400 });
      }
      const data = await jiraFetch(`${parsed.base}/rest/api/3/issue/${parsed.key}?fields=summary,description,labels,status,issuetype,created,parent`, email, apiToken);
      return NextResponse.json({ issues: [mapIssue(data, parsed.base, "jira-url")] });
    }

    if (parsed.kind === "project") {
      if (parsed.projectKey !== enforcedProjectKey) {
        return NextResponse.json({ error: `The provided Jira project URL points to ${parsed.projectKey}, but the selected ReleaseGovernance project requires ${enforcedProjectKey}.` }, { status: 400 });
      }
      const order = effectiveMode === "test" ? "DESC" : "ASC";
      const issues = await jiraSearch(parsed.base, `project = ${enforcedProjectKey} ORDER BY created ${order}`, email, apiToken, effectiveMax, "jira-project");
      return NextResponse.json({ issues });
    }

    const order = effectiveMode === "test" ? "DESC" : "ASC";
    const enforcedJql = `project = ${enforcedProjectKey} AND (${parsed.jql}) ORDER BY created ${order}`;
    const issues = await jiraSearch(parsed.base, enforcedJql, email, apiToken, effectiveMax, "jira-project");
    return NextResponse.json({ issues });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unexpected Jira import error." }, { status: 500 });
  }
}
