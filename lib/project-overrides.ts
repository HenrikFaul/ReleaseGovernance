"use client";

import { getProject } from "@/lib/mock-data";
import { BackfillCandidate, CapabilityRecord, ImportedJiraIssue, ProjectImportBundle, ProjectIntegrationSettings, ProjectOverride, ProjectRecord, ReleaseCandidate, ReleaseItem, Surface } from "@/lib/types";

const STORAGE_PREFIX = "releasegovernance.projectOverride.";
const SETTINGS_PREFIX = "releasegovernance.integrationSettings.";

const dedupe = <T extends { id?: string }>(items: T[]) => {
  const seen = new Set<string>();
  return items.filter((item) => {
    const id = item.id ?? JSON.stringify(item);
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
};

const dedupeJira = (items: ImportedJiraIssue[]) => {
  const seen = new Set<string>();
  return items.filter((item) => {
    const id = item.key || item.id;
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
};

const dedupeBackfill = (items: BackfillCandidate[]) => {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
};

const dedupeCandidates = (items: ReleaseCandidate[]) => {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
};

function surfaceFromLabel(label: string): Surface | undefined {
  const normalized = label.toLowerCase();
  if (normalized === "surface:web") return "web";
  if (normalized === "surface:mobile-android" || normalized === "surface:android") return "mobile-android";
  if (normalized === "surface:mobile-ios" || normalized === "surface:ios" || normalized === "surface:iphone") return "mobile-ios";
  if (normalized === "surface:backend") return "backend";
  if (normalized === "impact:shared-contract" || normalized === "surface:shared-contract") return "shared-contract";
  return undefined;
}

function integrationFromText(text: string): string[] {
  const source = text.toLowerCase();
  const found: string[] = [];
  const catalog: Record<string, string> = {
    supabase: "supabase",
    geoapify: "geoapify",
    tomtom: "tomtom",
    mapy: "mapy",
    vercel: "vercel",
    github: "github",
    jira: "jira",
    google: "google-oauth",
    oauth: "google-oauth",
    email: "email-social-share",
    telegram: "email-social-share",
    whatsapp: "email-social-share",
    viber: "email-social-share",
    lovable: "lovable"
  };
  for (const [token, id] of Object.entries(catalog)) {
    if (source.includes(token) && !found.includes(id)) found.push(id);
  }
  return found;
}

function importedIssueToCapability(issue: ImportedJiraIssue): CapabilityRecord {
  const labels = issue.labels ?? [];
  const surfaces = Array.from(new Set(labels.map(surfaceFromLabel).filter(Boolean) as Surface[]));
  const statusBySurface: Partial<Record<Surface, "planned" | "partial" | "shipped" | "deprecated">> = {};
  for (const surface of surfaces) statusBySurface[surface] = "planned";
  const text = `${issue.summary} ${issue.description ?? ""} ${labels.join(" ")}`;
  const integrations = integrationFromText(text);
  const parityStatus = labels.some((label) => label.startsWith("parity:")) || labels.includes("impact:shared-contract") ? "follow-up-required" : "planned";
  return {
    id: `cap_${issue.key.toLowerCase()}`,
    name: issue.summary,
    description: issue.description ?? "",
    statusBySurface,
    parityStatus,
    integrations,
    jiraKeys: [issue.key],
    source: "imported-jira"
  };
}

export function readProjectOverride(projectId: string): ProjectOverride {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${projectId}`);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function writeProjectOverride(projectId: string, override: ProjectOverride) {
  if (typeof window === "undefined") return;
  localStorage.setItem(`${STORAGE_PREFIX}${projectId}`, JSON.stringify(override));
}

export function readProjectSettings(projectId: string): ProjectIntegrationSettings {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(`${SETTINGS_PREFIX}${projectId}`);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function writeProjectSettings(projectId: string, settings: ProjectIntegrationSettings) {
  if (typeof window === "undefined") return;
  localStorage.setItem(`${SETTINGS_PREFIX}${projectId}`, JSON.stringify(settings));
}

export function applyImportBundle(projectId: string, bundle: ProjectImportBundle) {
  const current = readProjectOverride(projectId);
  writeProjectOverride(projectId, {
    ...current,
    releases: dedupe([...(current.releases ?? []), ...bundle.releases]),
    capabilities: dedupe([...(current.capabilities ?? []), ...bundle.capabilities]),
    integrations: dedupe([...(current.integrations ?? []), ...bundle.integrations]),
    importedJiraIssues: dedupeJira([...(current.importedJiraIssues ?? []), ...bundle.importedJiraIssues]),
    backfillCandidates: dedupeBackfill(current.backfillCandidates ?? []),
    releaseCandidates: dedupeCandidates(current.releaseCandidates ?? []),
  });
}

export function addReleaseCandidate(projectId: string, candidate: ReleaseCandidate) {
  const current = readProjectOverride(projectId);
  writeProjectOverride(projectId, {
    ...current,
    releaseCandidates: dedupeCandidates([candidate, ...(current.releaseCandidates ?? [])]),
  });
}

export function approveReleaseCandidate(projectId: string, candidateId: string) {
  const current = readProjectOverride(projectId);
  const base = getProject(projectId);
  const mergedCandidates = dedupeCandidates([...(base?.releaseCandidates ?? []), ...(current.releaseCandidates ?? [])]);
  const candidate = mergedCandidates.find((item) => item.id === candidateId);
  if (!candidate) return;
  const remaining = (current.releaseCandidates ?? []).filter((item) => item.id !== candidateId);

  if (candidate.jiraKeys.length) {
    const imported = dedupeJira([...(base?.importedJiraIssues ?? []), ...(current.importedJiraIssues ?? [])]);
    const jiraLinks = candidate.jiraKeys.map((key) => {
      const linked = imported.find((issue) => issue.key === key);
      return {
        key,
        summary: linked?.summary ?? key,
        status: linked?.status ?? "Imported",
        url: linked?.url ?? "#",
        description: linked?.description,
        labels: linked?.labels,
      };
    });
    const release: ReleaseItem = {
      id: `rel_${candidate.id}`,
      version: candidate.version,
      status: "current",
      releaseState: "released",
      surfaces: candidate.surfaces,
      shippedAt: candidate.detectedAt.slice(0, 10),
      backendChanged: candidate.backendChanged,
      sharedContractChanged: candidate.sharedContractChanged,
      schemaChanged: candidate.schemaChanged,
      integrationsChanged: candidate.integrationsChanged,
      jiraBackfillRequired: false,
      deliveredCapabilities: [],
      releaseNotes: candidate.releaseNotes,
      jiraLinks,
      source: candidate.source,
      deploymentComment: candidate.hostingSummary,
      commitMessage: candidate.commitMessage,
      commitUrl: candidate.commitUrl,
      changelog: candidate.changelog,
    };
    writeProjectOverride(projectId, {
      ...current,
      releaseCandidates: remaining,
      releases: dedupe([release, ...(current.releases ?? [])]),
    });
    return;
  }

  const labels = [`rg-backfill:${candidate.id}`, `rg-project:${projectId}`];
  const backfill: BackfillCandidate = {
    id: `backfill_${candidate.id}`,
    featureName: candidate.version,
    summary: `Backfill Jira story for ${candidate.version}`,
    description: [candidate.releaseNotes, candidate.commitMessage ? `Commit: ${candidate.commitMessage}` : "", candidate.changelog?.title ? `CHANGELOG: ${candidate.changelog.title}` : ""].filter(Boolean).join("\n\n"),
    parent: base?.jiraProjectKey ? `${base.jiraProjectKey}-1` : "PROJECT-PARENT",
    labels,
    issueType: "Story",
    recommendedRelease: candidate.version,
  };

  writeProjectOverride(projectId, {
    ...current,
    releaseCandidates: remaining,
    backfillCandidates: dedupeBackfill([backfill, ...(current.backfillCandidates ?? [])]),
  });
}

export function mergeProjectWithOverrides(projectId: string): ProjectRecord | undefined {
  const base = getProject(projectId);
  if (!base) return undefined;
  const current = readProjectOverride(projectId);
  const importedJiraIssues = dedupeJira([...(base.importedJiraIssues ?? []), ...(current.importedJiraIssues ?? [])]);
  const derivedCapabilities = importedJiraIssues
    .map(importedIssueToCapability)
    .filter((capability) => ![...(base.capabilities ?? []), ...(current.capabilities ?? [])].some((existing) => existing.jiraKeys?.includes(capability.jiraKeys[0])));

  return {
    ...base,
    releases: dedupe([...(base.releases ?? []), ...(current.releases ?? [])]),
    capabilities: dedupe([...(base.capabilities ?? []), ...(current.capabilities ?? []), ...derivedCapabilities]),
    integrations: dedupe([...(base.integrations ?? []), ...(current.integrations ?? [])]),
    importedJiraIssues,
    backfillCandidates: dedupeBackfill([...(base.backfillCandidates ?? []), ...(current.backfillCandidates ?? [])]),
    releaseCandidates: dedupeCandidates([...(base.releaseCandidates ?? []), ...(current.releaseCandidates ?? [])]),
  };
}
