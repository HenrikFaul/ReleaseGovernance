import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { getProject } from "@/lib/mock-data";

export default function IntegrationsPage({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId);
  if (!project) return notFound();

  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="Integrations hub" title={`${project.name} toolchain and API registry`} description="Show connected source systems and all externally governed APIs or services." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {project.integrations.map((integration) => (
            <div key={integration.id} className="card p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold text-slate-900">{integration.name}</div>
                  <div className="mt-1 text-sm text-slate-500">{integration.category}</div>
                </div>
                <StatusBadge tone={integration.state === "connected" ? "success" : integration.state === "attention" ? "warning" : "info"}>{integration.state}</StatusBadge>
              </div>
              {integration.notes ? <p className="mt-3 text-sm text-slate-600">{integration.notes}</p> : null}
              {integration.environmentSensitive ? <div className="mt-3 text-xs text-amber-700">Environment or secret sensitivity applies.</div> : null}
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
