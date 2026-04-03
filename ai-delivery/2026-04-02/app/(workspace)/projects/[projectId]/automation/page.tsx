import WorkspaceShell from "../../../../../../packages/shell-ia/workspace-shell";
import ProjectContextHeader from "../../../../../../packages/shell-ia/project-context-header";

export default function AutomationPage({ params }: { params: { projectId: string } }) {
  return (
    <WorkspaceShell projectId={params.projectId} title="Automation">
      <div className="space-y-6">
        <ProjectContextHeader
          eyebrow="Automation"
          title="Automation runs and governance execution"
          description="This starter route is the future execution center for release detection, imports, tests and Jira push runs."
        />
      </div>
    </WorkspaceShell>
  );
}
