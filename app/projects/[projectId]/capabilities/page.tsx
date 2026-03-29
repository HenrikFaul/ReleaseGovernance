"use client";

import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";

export default function CapabilitiesPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  if (!project) return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Capability registry" title={`${project.name} capabilities`} description="Track features independently from commits and map them across product surfaces." />
        <div className="space-y-4">
          {project.capabilities.map((capability) => (
            <div key={capability.id} className="card p-6">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{capability.name}</h3>
                  {capability.description ? <p className="mt-2 text-sm text-slate-600">{capability.description}</p> : null}
                  <p className="mt-2 text-sm text-slate-500">Jira: {capability.jiraKeys.join(", ") || "none"}</p>
                </div>
                <StatusBadge tone={capability.parityStatus === "aligned" ? "success" : capability.parityStatus === "planned" ? "info" : "warning"}>{capability.parityStatus}</StatusBadge>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-5">
                {Object.entries(capability.statusBySurface).map(([surface, status]) => (
                  <div key={surface} className="rounded-2xl bg-slate-50 p-4 text-sm">
                    <div className="text-slate-500">{surface}</div>
                    <div className="mt-1 font-medium text-slate-900">{status}</div>
                  </div>
                ))}
              </div>
              {capability.integrations.length ? <div className="mt-4 text-xs text-slate-500">Integrations: {capability.integrations.join(", ")}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
