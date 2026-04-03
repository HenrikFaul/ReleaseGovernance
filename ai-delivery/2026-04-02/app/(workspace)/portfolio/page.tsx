import WorkspaceShell from "../../../../packages/shell-ia/workspace-shell";
import ProjectContextHeader from "../../../../packages/shell-ia/project-context-header";

export default function PortfolioPage() {
  return (
    <WorkspaceShell title="Portfolio">
      <div className="space-y-6">
        <ProjectContextHeader
          eyebrow="Portfolio"
          title="Workspace governance overview"
          description="This starter route is the future portfolio-level workspace home for release posture, parity exposure and pending governance actions."
        />
      </div>
    </WorkspaceShell>
  );
}
