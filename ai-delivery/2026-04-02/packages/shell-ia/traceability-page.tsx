import WorkspaceShell from "./workspace-shell";
import ProjectContextHeader from "./project-context-header";

export default function TraceabilityPage({ params }: { params: { projectId: string } }) {
  return (
    <WorkspaceShell projectId={params.projectId} title="Traceability">
      <div className="space-y-6">
        <ProjectContextHeader
          eyebrow="Traceability"
          title="Release and Jira traceability"
          description="This starter route is the future dedicated traceability workspace, separated from release detail and capability inventory."
        />
        <section className="rounded-[28px] bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">Starter scaffold</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Intended future contents: release-to-Jira mapping, orphaned releases, unmatched Jira artifacts and suggested linkage actions.
          </p>
        </section>
      </div>
    </WorkspaceShell>
  );
}
