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
        <SectionHeader eyebrow="Capabilities dashboard" title={`${project.name} capabilities and parity`} description="Feature registry and parity follow-up are grouped here as one shared dashboard area." />

        <section className="card p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-slate-900">Capabilities</h3>
            <StatusBadge tone="info">{project.capabilities.length} tracked</StatusBadge>
          </div>
          <div className="mt-4 space-y-4">
            {project.capabilities.map((capability) => (
              <div key={capability.id} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-slate-900">{capability.name}</h3>
                      {capability.source === "imported-jira" ? <StatusBadge tone="info">imported-jira</StatusBadge> : null}
                      {capability.source === "file-import" ? <StatusBadge tone="info">file-import</StatusBadge> : null}
                    </div>
                    {capability.description ? <p className="mt-2 text-sm text-slate-600">{capability.description}</p> : null}
                    <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-500">
                      {capability.jiraKeys.length ? capability.jiraKeys.map((key) => {
                        const linked = project.importedJiraIssues?.find((issue) => issue.key === key);
                        return linked ? <a key={key} href={linked.url} className="badge badge-neutral hover:bg-slate-100">{key} — {linked.summary}</a> : <span key={key} className="badge badge-neutral">{key}</span>;
                      }) : <span>Jira: none</span>}
                    </div>
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
        </section>

        <section className="card p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-slate-900">Open parity alerts</h3>
            <StatusBadge tone={openAlerts.length ? "warning" : "success"}>{openAlerts.length} open</StatusBadge>
          </div>
          <div className="mt-4 space-y-3">
            {openAlerts.length ? openAlerts.map((alert) => (
              <div key={alert.id} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-medium text-slate-900">{alert.sourceSurface} → {alert.affectedSurface}</div>
                  <StatusBadge tone={alert.severity === "critical" ? "danger" : alert.severity === "warning" ? "warning" : "info"}>{alert.severity}</StatusBadge>
                </div>
                <p className="mt-2 text-sm text-slate-600">{alert.reason}</p>
                {alert.jiraKey ? <div className="mt-2 text-xs text-slate-500">Mapped issue: {alert.jiraKey}</div> : null}
              </div>
            )) : <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">No open parity alerts.</div>}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
