export type Surface = "web" | "mobile-android" | "mobile-ios" | "backend" | "shared-contract";
export type CapabilityStatus = "planned" | "partial" | "shipped" | "deprecated";
export type DeploymentStatus = "healthy" | "warning" | "failing";
export type ReleaseState = "released" | "unreleased";

export interface JiraLink { key: string; summary: string; status: string; url: string; }
export interface ImportedJiraIssue { id: string; key: string; summary: string; description?: string; labels: string[]; url: string; source: "jira-url" | "file-import"; }
export interface IntegrationRef { id: string; name: string; category: "source-control" | "planning" | "deployment" | "backend" | "external-api" | "design"; state: "connected" | "attention" | "planned"; environmentSensitive?: boolean; notes?: string; url?: string; }
export interface ReleaseItem { id: string; version: string; releaseState?: ReleaseState; surfaces: Surface[]; shippedAt: string; backendChanged: boolean; sharedContractChanged: boolean; schemaChanged: boolean; integrationsChanged: string[]; jiraBackfillRequired: boolean; deliveredCapabilities: string[]; releaseNotes: string; jiraLinks: JiraLink[]; }
export interface CapabilityRecord { id: string; name: string; description?: string; statusBySurface: Partial<Record<Surface, CapabilityStatus>>; parityStatus: "aligned" | "follow-up-required" | "planned"; integrations: string[]; jiraKeys: string[]; firstRelease?: Partial<Record<Surface, string>>; }
export interface ParityAlert { id: string; severity: "info" | "warning" | "critical"; sourceSurface: Surface; affectedSurface: Surface; reason: string; jiraKey?: string; state: "open" | "tracked" | "resolved"; }
export interface ProjectRecord { id: string; tenantId: string; name: string; slug: string; description: string; domain?: string; repositories: { web?: string; android?: string; ios?: string }; jiraProjectKey?: string; lovableProject?: string; releases: ReleaseItem[]; capabilities: CapabilityRecord[]; integrations: IntegrationRef[]; parityAlerts: ParityAlert[]; importedJiraIssues?: ImportedJiraIssue[]; deploymentStatus: DeploymentStatus; }
export interface TenantRecord { id: string; name: string; plan: "starter" | "growth" | "enterprise"; projects: ProjectRecord[]; }
export interface ProjectImportBundle { releases: ReleaseItem[]; capabilities: CapabilityRecord[]; integrations: IntegrationRef[]; importedJiraIssues: ImportedJiraIssue[]; }
export interface ProjectOverride extends Partial<ProjectImportBundle> {}
