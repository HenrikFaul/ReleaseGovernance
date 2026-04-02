import type {
  AuditEvent,
  Capability,
  CapabilityReleaseMapping,
  Integration,
  JiraArtifact,
  ParityAlert,
  Project,
  Release,
  ReleaseSurface,
  Workspace,
} from "./entities";

export interface WorkspaceRepository {
  findById(id: string): Promise<Workspace | null>;
  listByActor(actorId: string): Promise<Workspace[]>;
}

export interface ProjectRepository {
  findById(id: string): Promise<Project | null>;
  listByWorkspace(workspaceId: string): Promise<Project[]>;
  create(project: Project): Promise<Project>;
  update(project: Project): Promise<Project>;
}

export interface ReleaseRepository {
  findById(id: string): Promise<Release | null>;
  listByProject(projectId: string): Promise<Release[]>;
  create(release: Release): Promise<Release>;
  update(release: Release): Promise<Release>;
}

export interface ReleaseSurfaceRepository {
  listByRelease(releaseId: string): Promise<ReleaseSurface[]>;
  replaceForRelease(releaseId: string, surfaces: ReleaseSurface[]): Promise<void>;
}

export interface CapabilityRepository {
  listByProject(projectId: string): Promise<Capability[]>;
  create(capability: Capability): Promise<Capability>;
  update(capability: Capability): Promise<Capability>;
}

export interface CapabilityReleaseMappingRepository {
  listByRelease(releaseId: string): Promise<CapabilityReleaseMapping[]>;
  listByCapability(capabilityId: string): Promise<CapabilityReleaseMapping[]>;
}

export interface IntegrationRepository {
  listByProject(projectId: string): Promise<Integration[]>;
  upsert(integration: Integration): Promise<Integration>;
}

export interface JiraArtifactRepository {
  listByProject(projectId: string): Promise<JiraArtifact[]>;
  createMany(artifacts: JiraArtifact[]): Promise<JiraArtifact[]>;
}

export interface ParityAlertRepository {
  listByProject(projectId: string): Promise<ParityAlert[]>;
  create(alert: ParityAlert): Promise<ParityAlert>;
  update(alert: ParityAlert): Promise<ParityAlert>;
}

export interface AuditEventRepository {
  append(event: AuditEvent): Promise<void>;
  listByProject(projectId: string): Promise<AuditEvent[]>;
}
