import WorkspaceShell from "./workspace-shell";
import ProjectContextHeader from "./project-context-header";

export default function ParityPage({ params }: { params: { projectId: string } }) {
  return (
    <WorkspaceShell projectId={params.projectId} title="Parity">
      <div className="space-y-6">
        <ProjectContextHeader
          eyebrow="Parity"
          title="Cross-surface parity board"
          description="This starter route is the future dedicated parity workspace, separated from the capability registry."
        />
        <section className="rounded-[28px] bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">Starter scaffold</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Intended future contents: parity lanes, ownership, severity triage and release-linked parity follow-up.
          </p>
        </section>
      </div>
    </WorkspaceShell>
  );
}
