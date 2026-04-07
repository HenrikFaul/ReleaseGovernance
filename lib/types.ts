export type Surface = "web" | "mobile-android" | "mobile-ios" | "backend" | "shared-contract";
export type CapabilityStatus = "planned" | "partial" | "shipped" | "deprecated";
export type DeploymentStatus = "healthy" | "warning" | "failing";
export type ReleaseState = "released" | "unreleased";
export type ReleaseStatus = "current" | "old" | "unreleased" | "candidate";
export type ReleaseSourceKind = "github" | "uploaded-snapshot" | "markdown-import" | "jira-import" | "manual" | "unknown";

export interface JiraLink {
  key: string;
  summary: string;
  status: string;
  url: string;
  description?: string;
  labels?: string[];
}

export interface ImportedJiraIssue {
  id: string;
  key: string;
  summary: string;
  description?: string;
  labels: string[];
  url: string;
  source: "jira-url" | "jira-project" | "file-import";
  issueType?: string;
  status?: string;
  parentKey?: string;
  created?: string;
}

export interface IntegrationTestResult {
  testMode: "single" | "all";
  reachable: boolean;
  httpStatusCode?: number;
  normalizedStatus: "success" | "failure";
  errorKind?: "http" | "network" | "operational";
  errorMessage?: string;
  checkedAt: string;
}

export interface IntegrationRef {
  id: string;
  name: string;
  canonicalKey?: string;
  instanceKey?: string;
  category: "source-control" | "planning" | "deployment" | "backend" | "external-api" | "design" | "documentation";
  state: "connected" | "attention" | "planned";
  environmentSensitive?: boolean;
  notes?: string;
  endpointName?: string;
  endpointUrl?: string;
  resourceLocation?: string;
  url?: string;
  lastTestResult?: IntegrationTestResult;
}

export interface ReleaseSource {
  kind: ReleaseSourceKind;
  owner?: string;
  repository?: string;
  ref?: string;
  url?: string;
  label?: string;
}

export interface ReleaseChangelog {
  title: string;
  excerpt: string[];
}

export interface ReleaseChangelogSection {
  heading: string;
  bullets: string[];
  prose: string[];
}

export interface ReleaseChangelogExcerpt {
  title: string;
  date?: string;
  sections: ReleaseChangelogSection[];
}

export interface ReleaseItem {
  id: string;
  version: string;
  status?: ReleaseStatus;
  releaseState?: ReleaseState;
  surfaces: Surface[];
  shippedAt: string;
  backendChanged: boolean;
  sharedContractChanged: boolean;
  schemaChanged: boolean;
  integrationsChanged: string[];
  jiraBackfillRequired: boolean;
  deliveredCapabilities: string[];
  releaseNotes: string;
  jiraLinks: JiraLink[];
  source?: ReleaseSource;
  deploymentComment?: string;
  changelog?: ReleaseChangelog;
}

export interface CapabilityRecord {
  id: string;
  name: string;
  summary?: string;
  description?: string;
  statusBySurface: Partial<Record<Surface, CapabilityStatus>>;
  parityStatus: "aligned" | "follow-up-required" | "planned";
  integrations: string[];
  jiraKeys: string[];
  firstRelease?: Partial<Record<Surface, string>>;
  tenant?: "B2C" | "Enterprise" | "Both";
  channel?: "Webapp" | "Mobile" | "Both";
  codebaseStatus?: string;
  deployStatus?: string;
  source?: "seed" | "file-import" | "imported-jira";
}

export interface ParityAlert {
  id: string;
  severity: "info" | "warning" | "critical";
  sourceSurface: Surface;
  affectedSurface: Surface;
  reason: string;
  jiraKey?: string;
  state: "open" | "tracked" | "resolved";
}

export interface BackfillCandidate {
  id: string;
  featureName: string;
  summary: string;
  description: string;
  parent: string;
  labels: string[];
  issueType: string;
  recommendedRelease?: string;
}

export interface ReleaseCandidateCheck {
  key: string;
  label: string;
  value?: string;
  present: boolean;
}

export interface ReleaseCandidate {
  id: string;
  version: string;
  surfaces: Surface[];
  detectedAt: string;
  backendChanged: boolean;
  sharedContractChanged: boolean;
  schemaChanged: boolean;
  integrationsChanged: string[];
  releaseNotes: string;
  deploymentComment?: string;
  source: ReleaseSource;
  changelog?: ReleaseChangelog;
  commitMessage?: string;
  commitUrl?: string;
  jiraKeys?: string[];
  repoUrl?: string;
  hostingProvider?: "vercel" | "supabase" | "custom" | "unknown";
  hostingSummary?: string;
  requiredChecks?: ReleaseCandidateCheck[];
}

export interface ProjectOverview {
  applicationDescription: string;
  techStack: string[];
  hostingServices: string[];
  backendServices: string[];
  projectStructure: string[];
  runtimeNotes?: string[];
}

export interface ProjectIntegrationSettings {
  jiraUrl?: string;
  jiraEmail?: string;
  jiraToken?: string;
  jiraProjectKey?: string;
  repoUrl?: string;
  githubToken?: string;
  hostingProvider?: "vercel" | "supabase" | "custom";
  hostingUrl?: string;
  hostingApiKey?: string;
  jiraPreviewLimit?: number;
  jiraQueryAll?: boolean;
}

export interface ProjectRecord {
  id: string;
  tenantId: string;
  name: string;
  slug: string;
  description: string;
  domain?: string;
  repositories: { web?: string; android?: string; ios?: string };
  jiraProjectKey?: string;
  lovableProject?: string;
  releases: ReleaseItem[];
  capabilities: CapabilityRecord[];
  integrations: IntegrationRef[];
  parityAlerts: ParityAlert[];
  importedJiraIssues?: ImportedJiraIssue[];
  backfillCandidates?: BackfillCandidate[];
  releaseCandidates?: ReleaseCandidate[];
  deploymentStatus: DeploymentStatus;
  overview?: ProjectOverview;
}

export interface TenantRecord {
  id: string;
  name: string;
  plan: "starter" | "growth" | "enterprise";
  projects: ProjectRecord[];
}

export interface ProjectImportBundle {
  releases: ReleaseItem[];
  capabilities: CapabilityRecord[];
  integrations: IntegrationRef[];
  importedJiraIssues: ImportedJiraIssue[];
}

export interface ProjectOverride extends Partial<ProjectImportBundle> {
  backfillCandidates?: BackfillCandidate[];
  releaseCandidates?: ReleaseCandidate[];
}
