import type {
  Workspace,
  Project,
  Release,
  Capability,
  Integration,
  ParityAlert,
  JiraArtifact,
} from "../../packages/foundation/entities";
import type { WorkspaceFixtureBundle, ProjectFixtureBundle } from "./workspace-fixtures";

export interface RuntimeProjectAggregate {
  project: Project;
  releases: Release[];
  capabilities: Capability[];
  integrations: Integration[];
  parityAlerts: ParityAlert[];
  jiraArtifacts: JiraArtifact[];
}

export interface RuntimeWorkspaceAggregate {
  workspace: Workspace;
  projects: RuntimeProjectAggregate[];
}

export function workspaceFixtureToRuntimeAggregate(
  bundle: WorkspaceFixtureBundle,
): RuntimeWorkspaceAggregate {
  return {
    workspace: bundle.workspace,
    projects: bundle.projects.map(projectFixtureToRuntimeAggregate),
  };
}

export function projectFixtureToRuntimeAggregate(
  fixture: ProjectFixtureBundle,
): RuntimeProjectAggregate {
  return {
    project: fixture.project,
    releases: fixture.releases,
    capabilities: fixture.capabilities,
    integrations: fixture.integrations,
    parityAlerts: fixture.parityAlerts,
    jiraArtifacts: fixture.jiraArtifacts,
  };
}
