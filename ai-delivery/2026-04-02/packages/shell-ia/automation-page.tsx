import WorkspaceShell from "./workspace-shell";
import ProjectContextHeader from "./project-context-header";

export default function AutomationPage({ params }: { params: { projectId: string } }) {
  return (
    <WorkspaceShell projectId={params.projectId} title="Automation">
      <div className="space-y-6">
        <ProjectContextHeader
          eyebrow="Automation"
          title="Automation runs and governance execution"
          description="This starter route is the future execution center for release detection, imports, tests and Jira push runs."
        />
        <section className="rounded-[28px] bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">Starter scaffold</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Intended future contents: run history, failures, retries, execution evidence and audit-linked automation actions.
          </p>
        </section>
      </div>
    </WorkspaceShell>
  );
}
