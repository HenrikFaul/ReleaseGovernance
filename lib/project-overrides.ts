"use client";

import { getProject } from "@/lib/mock-data";
import {
  BackfillCandidate,
  CapabilityRecord,
  ImportedJiraIssue,
  ProjectImportBundle,
  ProjectIntegrationSettings,
  ProjectOverride,
  ProjectRecord,
  ReleaseCandidate,
  Surface,
} from "@/lib/types";

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

const dedupeBackfills = (items: BackfillCandidate[]) => {
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
    lovable: "lovable",
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
    source: "imported-jira",
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
  });
}

export function addReleaseCandidate(projectId: string, candidate: ReleaseCandidate) {
  const current = readProjectOverride(projectId);
  writeProjectOverride(projectId, {
    ...current,
    releaseCandidates: dedupeCandidates([candidate, ...(current.releaseCandidates ?? [])]),
  });
}

export function clearReleaseCandidate(projectId: string, candidateId: string) {
  const current = readProjectOverride(projectId);
  writeProjectOverride(projectId, {
    ...current,
    releaseCandidates: (current.releaseCandidates ?? []).filter((candidate) => candidate.id !== candidateId),
  });
}

export function appendBackfillCandidates(projectId: string, candidates: BackfillCandidate[]) {
  const current = readProjectOverride(projectId);
  writeProjectOverride(projectId, {
    ...current,
    backfillCandidates: dedupeBackfills([...(current.backfillCandidates ?? []), ...candidates]),
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
    backfillCandidates: dedupeBackfills([...(base.backfillCandidates ?? []), ...(current.backfillCandidates ?? [])]),
    releaseCandidates: dedupeCandidates([...(base.releaseCandidates ?? []), ...(current.releaseCandidates ?? [])]),
  };
}


const CUSTOM_PROJECTS_KEY = "releasegovernance.customProjects";
const PROJECT_UPLOAD_DRAFT_KEY = "releasegovernance.projectUploadDraft";

type CreateProjectInput = {
  name: string;
  description?: string;
  jiraProjectKey?: string;
  repoUrl?: string;
  hostingProvider?: "vercel" | "supabase" | "custom";
  hostingUrl?: string;
  jiraUrl?: string;
  bundle: ProjectImportBundle;
  previewCandidate?: ReleaseCandidate | null;
};

function slugifyProject(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "project";
}

export function readProjectUploadDraft(): Record<string, unknown> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(PROJECT_UPLOAD_DRAFT_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function writeProjectUploadDraft(draft: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROJECT_UPLOAD_DRAFT_KEY, JSON.stringify(draft));
}

export function readCustomProjects(): ProjectRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CUSTOM_PROJECTS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeCustomProjects(projects: ProjectRecord[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CUSTOM_PROJECTS_KEY, JSON.stringify(projects));
}

export function createProjectFromUpload(input: CreateProjectInput): ProjectRecord {
  const slug = slugifyProject(input.name);
  const id = `project_${slug}`;
  const existing = readCustomProjects().filter((project) => project.id !== id);

  const releases: ProjectRecord["releases"] = input.bundle.releases.length
    ? input.bundle.releases
    : input.previewCandidate
      ? [{
          id: `release_${input.previewCandidate.id}`,
          version: input.previewCandidate.version,
          releaseState: "unreleased" as const,
          status: "candidate" as const,
          surfaces: input.previewCandidate.surfaces,
          shippedAt: input.previewCandidate.detectedAt.slice(0, 10),
          backendChanged: input.previewCandidate.backendChanged,
          sharedContractChanged: input.previewCandidate.sharedContractChanged,
          schemaChanged: input.previewCandidate.schemaChanged,
          integrationsChanged: input.previewCandidate.integrationsChanged,
          jiraBackfillRequired: !(input.previewCandidate.jiraKeys?.length),
          deliveredCapabilities: [],
          releaseNotes: input.previewCandidate.releaseNotes,
          jiraLinks: (input.previewCandidate.jiraKeys ?? []).map((key) => ({
            key,
            summary: "Imported from detected release candidate",
            status: "Imported",
            url: input.jiraUrl ? `${input.jiraUrl.replace(/\/$/, "")}/browse/${key}` : `https://example.atlassian.net/browse/${key}`,
          })),
          source: input.previewCandidate.source,
          deploymentComment: input.previewCandidate.deploymentComment,
          changelog: input.previewCandidate.changelog,
        }]
      : [];

  const project: ProjectRecord = {
    id,
    tenantId: "tenant_releasegovernance",
    name: input.name.trim(),
    slug,
    description: input.description?.trim() || "Imported project in governance workspace.",
    repositories: { web: input.repoUrl || undefined },
    jiraProjectKey: input.jiraProjectKey || undefined,
    domain: input.hostingUrl ? input.hostingUrl.replace(/^https?:\/\//, "") : undefined,
    releases,
    capabilities: input.bundle.capabilities,
    integrations: dedupe([
      ...input.bundle.integrations,
      ...(input.repoUrl ? [{ id: `github_${slug}`, name: "GitHub", category: "source-control", state: "connected", url: input.repoUrl, notes: "Repository linked during project upload." }] : []),
      ...(input.hostingUrl ? [{ id: `hosting_${slug}`, name: (input.hostingProvider || "custom").toUpperCase(), category: input.hostingProvider === "supabase" ? "backend" : "deployment", state: "connected", url: input.hostingUrl, notes: "Hosting linked during project upload." }] : []),
      ...(input.jiraUrl ? [{ id: `jira_${slug}`, name: "Jira", category: "planning", state: "connected", url: input.jiraUrl, notes: "Jira linked during project upload." }] : []),
    ] as any),
    parityAlerts: [],
    importedJiraIssues: input.bundle.importedJiraIssues,
    backfillCandidates: [],
    releaseCandidates: input.previewCandidate ? [input.previewCandidate] : [],
    deploymentStatus: "warning",
    overview: {
      applicationDescription: input.description?.trim() || `${input.name.trim()} governance import`,
      techStack: [],
      hostingServices: input.hostingUrl ? [input.hostingUrl] : [],
      backendServices: input.hostingProvider === "supabase" ? ["supabase"] : [],
      projectStructure: ["Imported through ReleaseGovernance project upload"],
    },
  };

  writeCustomProjects([project, ...existing]);
  return project;
}

export function approveReleaseCandidate(projectId: string, candidateId: string) {
  const current = readProjectOverride(projectId);
  const candidates = current.releaseCandidates ?? [];
  const candidate = candidates.find((item) => item.id === candidateId);
  if (!candidate) return;

  const release = {
    id: `release_${candidate.id}`,
    version: candidate.version,
    status: "current" as const,
    releaseState: "released" as const,
    surfaces: candidate.surfaces,
    shippedAt: candidate.detectedAt.slice(0, 10),
    backendChanged: candidate.backendChanged,
    sharedContractChanged: candidate.sharedContractChanged,
    schemaChanged: candidate.schemaChanged,
    integrationsChanged: candidate.integrationsChanged,
    jiraBackfillRequired: !(candidate.jiraKeys?.length),
    deliveredCapabilities: [],
    releaseNotes: candidate.releaseNotes,
    jiraLinks: (candidate.jiraKeys ?? []).map((key) => ({
      key,
      summary: "Approved from release candidate",
      status: "Imported",
      url: `https://example.atlassian.net/browse/${key}`,
    })),
    source: candidate.source,
    deploymentComment: candidate.deploymentComment,
    changelog: candidate.changelog,
  };

  writeProjectOverride(projectId, {
    ...current,
    releases: dedupe([release as any, ...(current.releases ?? [])]),
    releaseCandidates: candidates.filter((item) => item.id !== candidateId),
  });
}
