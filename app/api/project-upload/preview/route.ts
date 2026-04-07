import { NextRequest, NextResponse } from "next/server";
import { ImportedJiraIssue, ProjectImportBundle } from "@/lib/types";
import { jiraFetch, jiraSearch, parseJiraUrl, projectLockedJql, toImportedIssue } from "@/lib/jira-import";

function issueToCapability(issue: ImportedJiraIssue) {
  const text = `${issue.summary} ${issue.description ?? ""} ${(issue.labels ?? []).join(" ")}`.toLowerCase();
  const integrations = ["supabase", "geoapify", "tomtom", "mapy", "vercel", "github", "jira", "google"].filter((token) => text.includes(token));
  return {
    id: `cap_${issue.key.toLowerCase()}`,
    name: issue.summary,
    description: issue.description ?? "",
    statusBySurface: {},
    parityStatus: "planned" as const,
    integrations,
    jiraKeys: [issue.key],
    source: "imported-jira" as const,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const projectName = body.projectName ?? "Imported project";
    const projectKey = String(body.projectKey ?? "").toUpperCase();
    const selectedSources: string[] = Array.isArray(body.selectedSources) ? body.selectedSources : [];

    const bundle: ProjectImportBundle = { releases: [], capabilities: [], integrations: [], importedJiraIssues: [] };

    if (selectedSources.includes("jira")) {
      const parsed = parseJiraUrl(body.jiraUrl);
      const base = parsed.base;
      const effectiveProjectKey = (projectKey || (parsed.kind === "project" ? parsed.projectKey : undefined) || (parsed.kind === "issue" ? parsed.key.split("-")[0] : undefined) || "").toUpperCase();
      if (!body.jiraEmail || !body.jiraToken || !effectiveProjectKey) {
        throw new Error("Jira source requires jiraUrl or base URL, jiraEmail, jiraToken and projectKey.");
      }
      const maxResults = Math.max(1, Math.min(Number(body.jiraPreviewLimit) || 25, 100));
      let issues: ImportedJiraIssue[] = [];
      if (parsed.kind === "issue") {
        const issue = await jiraFetch(`${base}/rest/api/3/issue/${parsed.key}?fields=summary,description,labels,status,issuetype,parent,created`, body.jiraEmail, body.jiraToken);
        issues = [toImportedIssue(issue, base, "jira-url")];
      } else {
        const jql = parsed.kind === "search" ? projectLockedJql(effectiveProjectKey, parsed.jql) : projectLockedJql(effectiveProjectKey);
        issues = await jiraSearch(base, jql, body.jiraEmail, body.jiraToken, maxResults);
      }
      bundle.importedJiraIssues = issues;
      bundle.capabilities = issues.map(issueToCapability);
      bundle.integrations.push({ id: `integration_jira_${effectiveProjectKey.toLowerCase()}`, canonicalKey: "provider:jira", instanceKey: effectiveProjectKey.toLowerCase(), name: "Jira", category: "planning", state: "connected", notes: `Imported ${issues.length} issue(s) for ${effectiveProjectKey}.`, endpointName: `Project ${effectiveProjectKey}`, endpointUrl: body.jiraUrl || base, url: body.jiraUrl || base });
    }

    if (selectedSources.includes("github") && body.repoUrl) {
      bundle.integrations.push({ id: `integration_github_${projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, canonicalKey: "provider:github", name: "GitHub", category: "source-control", state: "connected", notes: "Repository source selected in project upload.", endpointName: "Repository", endpointUrl: body.repoUrl, url: body.repoUrl });
    }

    if (selectedSources.includes("hosting") && body.hostingUrl) {
      bundle.integrations.push({ id: `integration_hosting_${String(body.hostingProvider || "custom").toLowerCase()}`, canonicalKey: body.hostingProvider === "vercel" ? "provider:vercel" : undefined, name: String(body.hostingProvider || "hosting").toUpperCase(), category: body.hostingProvider === "supabase" ? "backend" : "deployment", state: "connected", notes: "Hosting source selected in project upload.", endpointName: "Environment", endpointUrl: body.hostingUrl, url: body.hostingUrl });
    }

    if (!bundle.integrations.find((item) => item.id === "supabase")) {
      bundle.integrations.push({ id: "supabase", canonicalKey: "provider:supabase", name: "Supabase", category: "backend", state: "planned", notes: "Shared backend should be reviewed and linked during project bootstrap." });
    }

    return NextResponse.json({
      bundle,
      preview: {
        projectName,
        projectKey,
        releases: bundle.releases.length,
        capabilities: bundle.capabilities.length,
        integrations: bundle.integrations.length,
        jiraIssues: bundle.importedJiraIssues.length,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unexpected project upload preview error." }, { status: 500 });
  }
}
