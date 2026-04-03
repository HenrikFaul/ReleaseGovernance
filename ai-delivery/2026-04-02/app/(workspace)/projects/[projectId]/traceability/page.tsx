import WorkspaceShell from "../../../../../../packages/shell-ia/workspace-shell";
import ProjectContextHeader from "../../../../../../packages/shell-ia/project-context-header";

export default function TraceabilityPage({ params }: { params: { projectId: string } }) {
  return (
    <WorkspaceShell projectId={params.projectId} title="Traceability">
      <div className="space-y-6">
        <ProjectContextHeader
          eyebrow="Traceability"
          title="Release and Jira traceability"
          description="This starter route is the future dedicated traceability workspace."
        />
      </div>
    </WorkspaceShell>
  );
}
