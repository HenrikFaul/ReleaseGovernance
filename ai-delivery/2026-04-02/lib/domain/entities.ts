import type {
  AuditEntityType,
  AuditEventType,
  CapabilityLifecycleStatus,
  DeploymentStatus,
  EvidenceType,
  IntegrationCategory,
  IntegrationHealthState,
  IntegrationState,
  JiraArtifactSource,
  ParityAlertState,
  ParitySeverity,
  ParityStatus,
  ProjectLifecycleState,
  ReleaseApprovalState,
  ReleaseSourceKind,
  ReleaseState,
  ReleaseStatus,
  Surface,
  WorkspacePlan,
} from "./enums";

export interface Workspace {
  id: string;
  name: string;
  plan: WorkspacePlan;
  status: "active" | "suspended";
  owners: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  workspaceId: string;
  name: string;
  slug: string;
  description: string;
  productType?: string;
  lifecycleState: ProjectLifecycleState;
  jiraProjectKey?: string;
  primaryRepoId?: string;
  defaultReleaseBranch?: string;
  deploymentStatus: DeploymentStatus;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface ReleaseSource {
  kind: ReleaseSourceKind;
  owner?: string;
  repository?: string;
  ref?: string;
  url?: string;
  label?: string;
}

export interface Release {
  id: string;
  projectId: string;
  version: string;
  releaseState: ReleaseState;
  releaseStatus: ReleaseStatus;
  approvalState: ReleaseApprovalState;
  detectedAt?: string;
  releasedAt?: string;
  source: ReleaseSource;
  changelogTitle?: string;
  changelogExcerpt?: string[];
  releaseNotes: string;
  deploymentComment?: string;
  backendChanged: boolean;
  sharedContractChanged: boolean;
  schemaChanged: boolean;
  confidenceScore?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ReleaseSurface {
  id: string;
  releaseId: string;
  surface: Surface;
  impactLevel: "none" | "low" | "medium" | "high";
  parityRequired: boolean;
}

export interface Capability {
  id: string;
  projectId: string;
  name: string;
  slug: string;
  description?: string;
  lifecycleStatus: CapabilityLifecycleStatus;
  parityStatus: ParityStatus;
  tenantScope?: "B2C" | "Enterprise" | "Both";
  channelScope?: "Webapp" | "Mobile" | "Both";
  createdAt: string;
  updatedAt: string;
}

export interface CapabilityReleaseMapping {
  id: string;
  capabilityId: string;
  releaseId: string;
  surface: Surface;
  statusOnSurface: CapabilityLifecycleStatus;
  evidenceType: EvidenceType;
  evidenceRef?: string;
}

export interface Integration {
  id: string;
  projectId: string;
  name: string;
  providerKey: string;
  category: IntegrationCategory;
  state: IntegrationState;
  healthState: IntegrationHealthState;
  environmentSensitive: boolean;
  notes?: string;
  configComplete: boolean;
  lastTestedAt?: string;
  lastSyncAt?: string;
  url?: string;
  createdAt: string;
  updatedAt: string;
}

export interface JiraArtifact {
  id: string;
  projectId: string;
  key: string;
  issueType?: string;
  summary: string;
  status?: string;
  labels: string[];
  parentKey?: string;
  description?: string;
  url: string;
  source: JiraArtifactSource;
  linkedReleaseId?: string;
  linkedCapabilityId?: string;
  createdAt?: string;
  importedAt: string;
}

export interface ParityAlert {
  id: string;
  projectId: string;
  releaseId?: string;
  capabilityId?: string;
  sourceSurface: Surface;
  affectedSurface: Surface;
  severity: ParitySeverity;
  reason: string;
  state: ParityAlertState;
  owner?: string;
  jiraKey?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuditEvent {
  id: string;
  workspaceId: string;
  projectId?: string;
  actor: string;
  eventType: AuditEventType;
  entityType: AuditEntityType;
  entityId: string;
  payloadBefore?: Record<string, unknown> | null;
  payloadAfter?: Record<string, unknown> | null;
  createdAt: string;
}
