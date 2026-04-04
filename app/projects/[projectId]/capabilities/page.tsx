"use client";

import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";

export default function CapabilitiesPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  if (!project) return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;

  const openAlerts = project.parityAlerts.filter((alert) => alert.state !== "resolved");

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Capabilities"
          title={`${project.name} capabilities and parity`}
          description="Feature registry and parity follow-up are grouped here as one governed dashboard area."
          actions={<StatusBadge tone="info">{project.capabilities.length} tracked</StatusBadge>}
        />

        <section className="card p-6">
          <div className="space-y-4">
            {project.capabilities.map((capability) => (
              <div key={capability.id} className="panel-subtle p-6">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-slate-900">{capability.name}</h3>
                      {capability.source === "imported-jira" ? <StatusBadge tone="info">imported-jira</StatusBadge> : null}
                      {capability.source === "file-import" ? <StatusBadge tone="info">file-import</StatusBadge> : null}
                    </div>
                    {capability.description ? <p className="mt-2 text-sm text-slate-600">{capability.description}</p> : null}
                  </div>
                  <StatusBadge tone={capability.parityStatus === "aligned" ? "success" : capability.parityStatus === "planned" ? "info" : "warning"}>
                    {capability.parityStatus}
                  </StatusBadge>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-5">
                  {Object.entries(capability.statusBySurface).map(([surface, status]) => (
                    <div key={surface} className="rounded-2xl bg-slate-50 p-4 text-sm">
                      <div className="text-slate-500">{surface}</div>
                      <div className="mt-1 font-medium text-slate-900">{status}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-slate-900">Open parity alerts</h3>
            <StatusBadge tone={openAlerts.length ? "warning" : "success"}>{openAlerts.length} open</StatusBadge>
          </div>
          <div className="mt-4 space-y-3">
            {openAlerts.length ? openAlerts.map((alert) => (
              <div key={alert.id} className="panel-subtle p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-medium text-slate-900">{alert.sourceSurface} → {alert.affectedSurface}</div>
                  <StatusBadge tone={alert.severity === "critical" ? "danger" : alert.severity === "warning" ? "warning" : "info"}>{alert.severity}</StatusBadge>
                </div>
                <p className="mt-2 text-sm text-slate-600">{alert.reason}</p>
              </div>
            )) : <div className="panel-subtle p-4 text-sm text-slate-600">No open parity alerts.</div>}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
