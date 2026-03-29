export type Surface = "web" | "mobile-android" | "mobile-ios" | "backend" | "shared-contract";
export type CapabilityStatus = "planned" | "partial" | "shipped" | "deprecated";
export type DeploymentStatus = "healthy" | "warning" | "failing";
export type ReleaseStatus = "current" | "old" | "unreleased";
export type ReleaseLifecycleState = "released" | "unreleased";
export type ReleaseSourceKind =
  | "github"
  | "uploaded-snapshot"
  | "markdown-import"
  | "jira-import"
  | "manual"
  | "unknown";

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
  description: string;
  labels: string[];
  url: string;
  source: "file-import" | "jira-url-import" | "manual";
}

export interface IntegrationRef {
  id: string;
  name: string;
  category:
    | "source-control"
    | "planning"
    | "deployment"
    | "backend"
    | "external-api"
    | "design"
    | "documentation";
  state: "connected" | "attention" | "planned";
  environmentSensitive?: boolean;
  notes?: string;
  url?: string;
}

export interface ReleaseSource {
  kind: ReleaseSourceKind;
  owner?: string;
  repository?: string;
  ref?: string;
  url?: string;
  label?: string;
}

export interface ReleaseItem {
  id: string;
  version: string;
  status?: ReleaseStatus;
  releaseState?: ReleaseLifecycleState;
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

export interface ProjectOverview {
  applicationDescription: string;
  techStack: string[];
  hostingServices: string[];
  backendServices: string[];
  projectStructure: string[];
  runtimeNotes?: string[];
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
  deploymentStatus: DeploymentStatus;
  overview?: ProjectOverview;
}

export interface ProjectImportBundle {
  releases: ReleaseItem[];
  capabilities: CapabilityRecord[];
  integrations: IntegrationRef[];
  importedJiraIssues: ImportedJiraIssue[];
}

export interface ProjectOverride {
  releases?: ReleaseItem[];
  capabilities?: CapabilityRecord[];
  integrations?: IntegrationRef[];
  importedJiraIssues?: ImportedJiraIssue[];
}

export interface TenantRecord {
  id: string;
  name: string;
  plan: "starter" | "growth" | "enterprise";
  projects: ProjectRecord[];
}
