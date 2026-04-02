import type { Project, Release, Capability, Integration, ParityAlert, JiraArtifact, Workspace } from "../../packages/foundation/entities";

export interface ProjectFixtureBundle {
  project: Project;
  releases: Release[];
  capabilities: Capability[];
  integrations: Integration[];
  parityAlerts: ParityAlert[];
  jiraArtifacts: JiraArtifact[];
}

export interface WorkspaceFixtureBundle {
  workspace: Workspace;
  projects: ProjectFixtureBundle[];
}

export const EMPTY_WORKSPACE_FIXTURE: WorkspaceFixtureBundle = {
  workspace: {
    id: "workspace_empty",
    name: "ReleaseGovernance Workspace",
    plan: "growth",
    status: "active",
    owners: [],
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
  projects: [],
};
