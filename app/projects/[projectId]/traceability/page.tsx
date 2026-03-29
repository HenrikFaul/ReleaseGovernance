"use client";

import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";

export default function TraceabilityPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  if (!project) return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;

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
                  <div className="mt-2 flex flex-wrap gap-2">
                    {release.jiraLinks.map((jira) => <span key={jira.key} className="badge badge-neutral">{jira.key}</span>)}
                  </div>
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
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-slate-900">{alert.sourceSurface} → {alert.affectedSurface}</div>
                    <StatusBadge tone={alert.state === "resolved" ? "success" : alert.state === "tracked" ? "info" : "warning"}>{alert.state}</StatusBadge>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{alert.reason}</p>
                  {alert.jiraKey ? <div className="mt-2 text-xs text-slate-500">Mapped issue: {alert.jiraKey}</div> : null}
                </div>
              ))}
            </div>
          </section>
        </div>
        <section className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900">Imported Jira issues</h3>
          <div className="mt-4 space-y-3">
            {(project.importedJiraIssues ?? []).length ? project.importedJiraIssues?.map((issue) => (
              <a key={issue.id} href={issue.url} className="block rounded-2xl border border-slate-200 p-4 hover:bg-slate-50">
                <div className="font-medium text-slate-900">{issue.key} — {issue.summary}</div>
                {issue.description ? <div className="mt-1 text-sm text-slate-600">{issue.description}</div> : null}
                {issue.labels.length ? <div className="mt-2 text-xs text-slate-500">Labels: {issue.labels.join(", ")}</div> : null}
              </a>
            )) : <div className="text-sm text-slate-500">No imported Jira items yet.</div>}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
