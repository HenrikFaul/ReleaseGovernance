"use client";

import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { summarizeBackfill } from "@/lib/backfill";
import { useProjectRecord } from "@/hooks/useProjectRecord";

export default function TraceabilityPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  if (!project) return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;
  const backfill = summarizeBackfill(project);

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Traceability" title={`${project.name} Jira and parity mapping`} description="Follow requirements from Jira through releases and see what still needs backfill or cross-surface follow-up." />
        <div className="grid gap-6 xl:grid-cols-[1fr,1fr]">
          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Release-to-Jira links</h3>
            <div className="mt-4 space-y-4">
              {project.releases.map((release) => (
                <div key={release.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="font-medium text-slate-900">{release.version}</div>
                  <div className="mt-2 flex flex-wrap gap-2">{release.jiraLinks.map((jira) => <span key={jira.key} className="badge badge-neutral">{jira.key}</span>)}</div>
                  {release.jiraBackfillRequired ? <div className="mt-2 text-sm text-rose-600">Jira backfill required before release-ready.</div> : null}
                </div>
              ))}
            </div>
          </section>
          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Parity follow-up</h3>
            <div className="mt-4 space-y-3">
              {project.parityAlerts.map((alert) => (
                <div key={alert.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-3"><div className="font-medium text-slate-900">{alert.sourceSurface} → {alert.affectedSurface}</div><StatusBadge tone={alert.state === "resolved" ? "success" : alert.state === "tracked" ? "info" : "warning"}>{alert.state}</StatusBadge></div>
                  <p className="mt-2 text-sm text-slate-600">{alert.reason}</p>
                  {alert.jiraKey ? <div className="mt-2 text-xs text-slate-500">Mapped issue: {alert.jiraKey}</div> : null}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="card p-6">
          <div className="flex items-center justify-between gap-3"><div><h3 className="text-lg font-semibold text-slate-900">Deployed features without Jira tickets</h3><p className="mt-2 text-sm text-slate-600">These rows need CSV export and Jira creation before they can move into the normal backlog flow.</p></div><StatusBadge tone={backfill.unresolved.length ? "warning" : "success"}>{backfill.unresolved.length ? `${backfill.unresolved.length} unresolved` : "all linked"}</StatusBadge></div>
          <div className="mt-4 space-y-3">{backfill.unresolved.length ? backfill.unresolved.map((candidate) => (<div key={candidate.id} className="rounded-2xl border border-slate-200 p-4"><div className="font-medium text-slate-900">{candidate.summary}</div><div className="mt-2 text-sm text-slate-600">{candidate.description}</div></div>)) : <div className="text-sm text-slate-600">No unresolved backfill candidates.</div>}</div>
        </section>
      </div>
    </AppShell>
  );
}
