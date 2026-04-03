import type { RuntimeProjectAggregate, RuntimeWorkspaceAggregate } from "./workspace-runtime";

export interface RuntimeGateway {
  getWorkspace(workspaceId: string): Promise<RuntimeWorkspaceAggregate | null>;
  getProject(projectId: string): Promise<RuntimeProjectAggregate | null>;
}

export class InMemoryRuntimeGateway implements RuntimeGateway {
  constructor(private readonly workspaces: RuntimeWorkspaceAggregate[]) {}

  async getWorkspace(workspaceId: string): Promise<RuntimeWorkspaceAggregate | null> {
    return this.workspaces.find((item) => item.workspace.id === workspaceId) ?? null;
  }

  async getProject(projectId: string): Promise<RuntimeProjectAggregate | null> {
    for (const workspace of this.workspaces) {
      const project = workspace.projects.find((item) => item.project.id === projectId);
      if (project) return project;
    }
    return null;
  }
}
