import WorkspaceShell from "./workspace-shell";
import ProjectContextHeader from "./project-context-header";

export default function ProjectOverviewPage({ params }: { params: { projectId: string } }) {
  return (
    <WorkspaceShell projectId={params.projectId} title="Project overview">
      <div className="space-y-6">
        <ProjectContextHeader
          eyebrow="Overview"
          title="Project governance overview"
          description="This starter route is the target replacement for the legacy project dashboard route."
        />
        <section className="rounded-[28px] bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">Starter scaffold</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Intended future contents: current release, release candidates, open parity alerts, integration health and next governance actions.
          </p>
        </section>
      </div>
    </WorkspaceShell>
  );
}
