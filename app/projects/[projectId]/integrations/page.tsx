"use client";

import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";

export default function IntegrationsPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  if (!project) return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Integrations dashboard" title={`${project.name} toolchain and API registry`} description="Connected source systems, deployment surfaces and externally governed services are grouped here." />
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
              {integration.url ? <div className="mt-3 text-xs text-brand-700 break-all">{integration.url}</div> : null}
              {integration.environmentSensitive ? <div className="mt-3 text-xs text-amber-700">Environment or secret sensitivity applies.</div> : null}
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
