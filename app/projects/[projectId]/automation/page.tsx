import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { SectionHeader } from "@/components/ui";
import { getProject } from "@/lib/mock-data";

export default function AutomationPage({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId);
  if (!project) return notFound();

  const currentProject = project;

  return (
    <AppShell projectId={currentProject.id}>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Automation"
          title={`${currentProject.name} starter governance kit`}
          description="Policy files, CI templates and automation rules that make governance enforceable instead of optional."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Starter files</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>.release/release-impact.yaml</li>
              <li>governance/capabilities.yaml</li>
              <li>governance/integrations.yaml</li>
              <li>.github/workflows/releasegovernance-validate.yml</li>
              <li>.github/CODEOWNERS</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Operational rules</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Every governed change must link to Jira or declare backfill required.</li>
              <li>Backend or shared-contract changes must raise parity review signals.</li>
              <li>Integration changes must record env or secret sensitivity.</li>
              <li>Release readiness is blocked when governance metadata is incomplete.</li>
            </ul>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
