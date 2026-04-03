import WorkspaceShell from "../../../../../../packages/shell-ia/workspace-shell";
import ProjectContextHeader from "../../../../../../packages/shell-ia/project-context-header";

export default function ProjectOverviewPage({ params }: { params: { projectId: string } }) {
  return (
    <WorkspaceShell projectId={params.projectId} title="Project overview">
      <div className="space-y-6">
        <ProjectContextHeader
          eyebrow="Overview"
          title="Project governance overview"
          description="This starter route is the target replacement for the legacy project dashboard route."
        />
      </div>
    </WorkspaceShell>
  );
}
