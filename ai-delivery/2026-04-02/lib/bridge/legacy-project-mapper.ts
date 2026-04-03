import type {
  Capability,
  Integration,
  JiraArtifact,
  ParityAlert,
  Project,
  Release,
  ReleaseSource,
} from "../domain/entities";
import type { RuntimeProjectAggregate, RuntimeWorkspaceAggregate } from "../runtime/workspace-runtime";

type LegacyRelease = any;
type LegacyCapability = any;
type LegacyIntegration = any;
type LegacyParityAlert = any;
type LegacyImportedIssue = any;
type LegacyProject = any;
type LegacyTenant = any;

function isoOrNow(value?: string): string {
  return value || new Date().toISOString();
}

function mapReleaseSource(source: any): ReleaseSource {
  return {
    kind: source?.kind ?? "unknown",
    owner: source?.owner,
    repository: source?.repository,
    ref: source?.ref,
    url: source?.url,
    label: source?.label,
  };
}

function mapLegacyRelease(projectId: string, release: LegacyRelease): Release {
  return {
    id: release.id,
    projectId,
    version: release.version,
    releaseState: release.releaseState ?? (release.status === "unreleased" ? "unreleased" : "released"),
    releaseStatus: release.status ?? "old",
    approvalState: release.status === "candidate" ? "under-review" : "draft",
    detectedAt: release.detectedAt,
    releasedAt: release.shippedAt && release.shippedAt !== "planned" ? release.shippedAt : undefined,
    source: mapReleaseSource(release.source),
    changelogTitle: release.changelog?.title,
    changelogExcerpt: release.changelog?.excerpt ?? [],
    releaseNotes: release.releaseNotes ?? "",
    deploymentComment: release.deploymentComment,
    backendChanged: Boolean(release.backendChanged),
    sharedContractChanged: Boolean(release.sharedContractChanged),
    schemaChanged: Boolean(release.schemaChanged),
    confidenceScore: typeof release.confidenceScore === "number" ? release.confidenceScore : undefined,
    createdAt: isoOrNow(release.shippedAt),
    updatedAt: isoOrNow(release.shippedAt),
  };
}

function mapLegacyCapability(projectId: string, capability: LegacyCapability): Capability {
  return {
    id: capability.id,
    projectId,
    name: capability.name,
    slug: capability.id,
    description: capability.description ?? capability.summary,
    lifecycleStatus: Object.values(capability.statusBySurface ?? {}).includes("shipped") ? "shipped" : Object.values(capability.statusBySurface ?? {}).includes("partial") ? "partial" : "planned",
    parityStatus: capability.parityStatus ?? "planned",
    tenantScope: capability.tenant,
    channelScope: capability.channel,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function mapLegacyIntegration(projectId: string, integration: LegacyIntegration): Integration {
  return {
    id: integration.id,
    projectId,
    name: integration.name,
    providerKey: integration.id,
    category: integration.category,
    state: integration.state,
    healthState: integration.state === "connected" ? "healthy" : integration.state === "attention" ? "degraded" : "unknown",
    environmentSensitive: Boolean(integration.environmentSensitive),
    notes: integration.notes,
    configComplete: integration.state === "connected",
    url: integration.url,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function mapLegacyParityAlert(projectId: string, alert: LegacyParityAlert): ParityAlert {
  return {
    id: alert.id,
    projectId,
    releaseId: alert.releaseId,
    capabilityId: alert.capabilityId,
    sourceSurface: alert.sourceSurface,
    affectedSurface: alert.affectedSurface,
    severity: alert.severity,
    reason: alert.reason,
    state: alert.state,
    owner: alert.owner,
    jiraKey: alert.jiraKey,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function mapLegacyJiraArtifact(projectId: string, issue: LegacyImportedIssue): JiraArtifact {
  return {
    id: issue.id,
    projectId,
    key: issue.key,
    issueType: issue.issueType,
    summary: issue.summary,
    status: issue.status,
    labels: issue.labels ?? [],
    parentKey: issue.parentKey,
    description: issue.description,
    url: issue.url,
    source: issue.source ?? "file-import",
    importedAt: issue.created ?? new Date().toISOString(),
  };
}

export function mapLegacyProjectToRuntimeAggregate(project: LegacyProject): RuntimeProjectAggregate {
  const mappedProject: Project = {
    id: project.id,
    workspaceId: project.tenantId,
    name: project.name,
    slug: project.slug,
    description: project.description,
    productType: project.domain,
    lifecycleState: "active",
    jiraProjectKey: project.jiraProjectKey,
    primaryRepoId: project.repositories?.web,
    defaultReleaseBranch: "main",
    deploymentStatus: project.deploymentStatus ?? "warning",
    metadata: { domain: project.domain, repositories: project.repositories, overview: project.overview },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return {
    project: mappedProject,
    releases: (project.releases ?? []).map((r: LegacyRelease) => mapLegacyRelease(project.id, r)),
    capabilities: (project.capabilities ?? []).map((c: LegacyCapability) => mapLegacyCapability(project.id, c)),
    integrations: (project.integrations ?? []).map((i: LegacyIntegration) => mapLegacyIntegration(project.id, i)),
    parityAlerts: (project.parityAlerts ?? []).map((a: LegacyParityAlert) => mapLegacyParityAlert(project.id, a)),
    jiraArtifacts: (project.importedJiraIssues ?? []).map((i: LegacyImportedIssue) => mapLegacyJiraArtifact(project.id, i)),
  };
}

export function mapLegacyTenantToRuntimeAggregate(tenant: LegacyTenant): RuntimeWorkspaceAggregate {
  return {
    workspace: {
      id: tenant.id,
      name: tenant.name,
      plan: tenant.plan,
      status: "active",
      owners: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    projects: (tenant.projects ?? []).map((project: LegacyProject) => mapLegacyProjectToRuntimeAggregate(project)),
  };
}
