import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { getProject } from "@/lib/mock-data";

export default function TraceabilityPage({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId);
  if (!project) return notFound();

  const releasedJiraKeys = new Set(
    project.releases
      .filter((release) => (release.releaseState ?? "released") === "released")
      .flatMap((release) => release.jiraLinks.map((jira) => jira.key))
  );

  const unreleasedJiraKeys = new Set(
    project.releases
      .filter((release) => release.releaseState === "unreleased")
      .flatMap((release) => release.jiraLinks.map((jira) => jira.key))
  );

  const releasedIssues = (project.importedJiraIssues ?? []).filter((issue) => releasedJiraKeys.has(issue.key));
  const unreleasedIssues = (project.importedJiraIssues ?? []).filter((issue) => !releasedJiraKeys.has(issue.key) || unreleasedJiraKeys.has(issue.key));
  const backfillCandidates = project.backfillCandidates ?? [];

  return (
    <AppShell projectId={project.id} projectName={project.name}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Traceability" title={`${project.name} Jira and parity mapping`} description="Follow requirements from Jira through releases, see what is already deployed, what remains unreleased, and which shipped features still need Jira backfill." />

        <div className="grid gap-6 xl:grid-cols-[1fr,1fr]">
          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Released features with Jira tickets</h3>
            <div className="mt-4 space-y-4">
              {project.releases.filter((release) => (release.releaseState ?? "released") === "released").map((release) => (
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
            <h3 className="text-lg font-semibold text-slate-900">Unreleased features with Jira tickets</h3>
            <div className="mt-4 space-y-3">
              {unreleasedIssues.length ? unreleasedIssues.map((issue) => (
                <a key={issue.key} href={issue.url} className="block rounded-2xl border border-slate-200 p-4 hover:bg-slate-50">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-slate-900">{issue.key}</div>
                    <StatusBadge tone={releasedJiraKeys.has(issue.key) ? "warning" : "info"}>
                      {releasedJiraKeys.has(issue.key) ? "follow-up remains" : "unreleased"}
                    </StatusBadge>
                  </div>
                  <div className="mt-2 text-sm text-slate-700">{issue.summary}</div>
                  {issue.description ? <p className="mt-2 text-sm text-slate-500">{issue.description}</p> : null}
                </a>
              )) : (
                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">No unreleased Jira items detected.</div>
              )}
            </div>
          </section>
        </div>

        <section className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900">Deployed features without Jira tickets</h3>
          <div className="mt-4 space-y-3">
            {backfillCandidates.length ? backfillCandidates.map((candidate) => (
              <div key={candidate.id} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-medium text-slate-900">{candidate.featureName}</div>
                  <StatusBadge tone="warning">needs Jira backfill</StatusBadge>
                </div>
                <p className="mt-2 text-sm text-slate-600">{candidate.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {candidate.labels.map((label) => <span key={label} className="badge badge-neutral">{label}</span>)}
                </div>
                <div className="mt-3 text-xs text-slate-500">Suggested parent: {candidate.parent}</div>
              </div>
            )) : (
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">No deployed feature backfill rows.</div>
            )}
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

        {releasedIssues.length ? (
          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Imported Jira catalog</h3>
            <div className="mt-4 space-y-3">
              {releasedIssues.concat(unreleasedIssues.filter((issue) => !releasedIssues.some((released) => released.key === issue.key))).map((issue) => (
                <div key={issue.key} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <div className="font-medium text-slate-900">{issue.key} — {issue.summary}</div>
                  <div className="mt-1 text-slate-500">{issue.labels.join(", ") || "no labels"}</div>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </AppShell>
  );
}
