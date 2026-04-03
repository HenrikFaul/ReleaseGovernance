import WorkspaceShell from "../../../../../../packages/shell-ia/workspace-shell";
import ProjectContextHeader from "../../../../../../packages/shell-ia/project-context-header";

export default function ParityPage({ params }: { params: { projectId: string } }) {
  return (
    <WorkspaceShell projectId={params.projectId} title="Parity">
      <div className="space-y-6">
        <ProjectContextHeader
          eyebrow="Parity"
          title="Cross-surface parity board"
          description="This starter route is the future dedicated parity workspace, separated from the capability registry."
        />
      </div>
    </WorkspaceShell>
  );
}
