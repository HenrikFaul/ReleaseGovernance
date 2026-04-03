import WorkspaceShell from "./workspace-shell";
import ProjectContextHeader from "./project-context-header";

export default function PortfolioPage() {
  return (
    <WorkspaceShell title="Portfolio">
      <div className="space-y-6">
        <ProjectContextHeader
          eyebrow="Portfolio"
          title="Workspace governance overview"
          description="This starter route is the future portfolio-level workspace home for release posture, parity exposure and pending governance actions."
        />
        <section className="rounded-[28px] bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">Starter scaffold</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Intended future contents: portfolio metrics, open parity alerts, pending release approvals, failing integrations and automation history.
          </p>
        </section>
      </div>
    </WorkspaceShell>
  );
}
