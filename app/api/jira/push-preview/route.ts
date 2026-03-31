import { NextRequest, NextResponse } from "next/server";
import { ImportedJiraIssue } from "@/lib/types";
import { jiraSearch, parseJiraUrl, projectLockedJql } from "@/lib/jira-import";

type InputRelease = {
  id: string;
  version: string;
  shippedAt: string;
  releaseNotes?: string;
  deploymentComment?: string;
  surfaces: string[];
  integrationsChanged: string[];
  backendChanged: boolean;
  sharedContractChanged: boolean;
  schemaChanged: boolean;
  changelog?: {
    title?: string;
    date?: string;
    sections?: Array<{ heading: string; bullets: string[]; prose: string[] }>;
  };
  deliveredCapabilities?: Array<{
    id: string;
    name: string;
    summary?: string;
    description?: string;
    jiraKeys?: string[];
  }>;
  jiraLinks?: Array<{ key: string; summary: string }>;
};

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .map((item) => item.trim())
    .filter((item) => item.length > 2);
}

function unique<T>(items: T[]) {
  return Array.from(new Set(items));
}

function asterixBlock(title: string, lines: string[]) {
  const filtered = lines.map((line) => line.trim()).filter(Boolean);
  if (!filtered.length) return "";
  return [`h2. ${title}`, "", ...filtered.map((line) => `* ${line}`)].join("\n");
}

function releaseText(release: InputRelease) {
  const changelogBits = (release.changelog?.sections ?? []).flatMap((section) => [
    section.heading,
    ...(section.bullets ?? []),
    ...(section.prose ?? []),
  ]);
  const capabilityBits = (release.deliveredCapabilities ?? []).flatMap((capability) => [
    capability.name,
    capability.summary ?? "",
    capability.description ?? "",
  ]);

  return [
    release.version,
    release.releaseNotes ?? "",
    release.deploymentComment ?? "",
    ...capabilityBits,
    ...(release.surfaces ?? []),
    ...(release.integrationsChanged ?? []),
    ...(changelogBits ?? []),
  ]
    .filter(Boolean)
    .join(" ");
}

function scoreIssue(issue: ImportedJiraIssue, tokens: string[]) {
  const issueTokens = new Set(
    normalize(`${issue.summary} ${issue.description ?? ""} ${(issue.labels ?? []).join(" ")}`)
  );
  let score = 0;
  for (const token of tokens) {
    if (issueTokens.has(token)) score += 1;
  }
  const type = (issue.issueType ?? "").toLowerCase();
  if (type.includes("epic")) score += 2;
  if (issue.parentKey) score += 0.5;
  return score;
}

function sanitizeVersion(version: string) {
  return version.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = parseJiraUrl(body.jiraUrl);
    const projectKey = String(body.projectKey ?? "").toUpperCase();
    const email = String(body.jiraEmail ?? "");
    const apiToken = String(body.jiraToken ?? "");
    const releases: InputRelease[] = Array.isArray(body.releases) ? body.releases : [];
    const importedFallback: ImportedJiraIssue[] = Array.isArray(body.importedJiraIssues) ? body.importedJiraIssues : [];

    if (!email || !apiToken || !projectKey) {
      return NextResponse.json({ error: "jiraEmail, jiraToken and projectKey are required." }, { status: 400 });
    }

    let existingIssues: ImportedJiraIssue[] = [];
    try {
      existingIssues = await jiraSearch(parsed.base, projectLockedJql(projectKey), email, apiToken, 100);
    } catch {
      existingIssues = importedFallback;
    }

    const drafts = releases.flatMap((release) => {
      const tokens = unique(normalize(releaseText(release)));
      const ranked = existingIssues
        .map((issue) => ({ issue, score: scoreIssue(issue, tokens) }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score);

      const suggestedParent = ranked[0]?.issue.key;
      const existingSimilar = ranked.slice(0, 3).map((item) => ({
        key: item.issue.key,
        summary: item.issue.summary,
        issueType: item.issue.issueType,
      }));

      const baseLabels = unique([
        "releasegovernance-generated",
        `release:${sanitizeVersion(release.version)}`,
        ...release.surfaces.map((surface) => `surface:${surface}`),
        ...(release.backendChanged ? ["impact:backend"] : []),
        ...(release.sharedContractChanged ? ["impact:shared-contract"] : []),
        ...(release.schemaChanged ? ["impact:schema"] : []),
        ...release.integrationsChanged.map((integration) => `integration:${integration}`),
      ]);

      const releaseNotesLines = [
        `Release version: ${release.version}`,
        `Deploy date: ${release.shippedAt}`,
        `Surfaces: ${release.surfaces.join(", ")}`,
        `Integrations changed: ${release.integrationsChanged.join(", ") || "none"}`,
        `Backend changed: ${String(release.backendChanged)}`,
        `Shared contract changed: ${String(release.sharedContractChanged)}`,
        `Schema changed: ${String(release.schemaChanged)}`,
      ];

      const changelogLines = [
        release.changelog?.title ?? "",
        ...((release.changelog?.sections ?? []).flatMap((section) => [
          section.heading,
          ...(section.bullets ?? []),
          ...(section.prose ?? []),
        ]) ?? []),
      ].filter(Boolean);

      const capabilityDrafts = (release.deliveredCapabilities ?? []).length
        ? (release.deliveredCapabilities ?? []).map((capability) => ({
            id: `draft_${release.id}_${capability.id}`,
            releaseId: release.id,
            sourceReleaseVersion: release.version,
            summary: `${projectKey} | ${capability.name} | ${release.version}`,
            description: [
              asterixBlock("Release context", releaseNotesLines),
              asterixBlock("Capability scope", [
                capability.name,
                capability.summary ?? "",
                capability.description ?? "",
                capability.jiraKeys?.length ? `Existing Jira references: ${capability.jiraKeys.join(", ")}` : "",
              ]),
              asterixBlock("Deployment comment", [release.deploymentComment ?? release.releaseNotes ?? ""]),
              asterixBlock("CHANGELOG excerpt", changelogLines),
            ]
              .filter(Boolean)
              .join("\n\n"),
            labels: baseLabels,
            issueType: "Story",
            suggestedParent,
            parentKey: suggestedParent,
            rationale: ranked.length
              ? `Matched against existing Jira keys by summary/description/label overlap. Strongest current match: ${ranked[0].issue.key}.`
              : "No close Jira match found; keeping release-level backfill structure.",
            existingSimilar,
          }))
        : [
            {
              id: `draft_${release.id}`,
              releaseId: release.id,
              sourceReleaseVersion: release.version,
              summary: `${projectKey} | Release ${release.version} deployment backfill`,
              description: [
                asterixBlock("Release context", releaseNotesLines),
                asterixBlock("Deployment comment", [release.deploymentComment ?? release.releaseNotes ?? ""]),
                asterixBlock("CHANGELOG excerpt", changelogLines),
              ]
                .filter(Boolean)
                .join("\n\n"),
              labels: baseLabels,
              issueType: "Story",
              suggestedParent,
              parentKey: suggestedParent,
              rationale: ranked.length
                ? `Matched against existing Jira keys by summary/description/label overlap. Strongest current match: ${ranked[0].issue.key}.`
                : "No close Jira match found; keeping release-level backfill structure.",
              existingSimilar,
            },
          ];

      return capabilityDrafts;
    });

    return NextResponse.json({
      drafts,
      matchedIssues: existingIssues.length,
      analyzedReleases: releases.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Push-to-Jira preview failed." },
      { status: 500 }
    );
  }
}
