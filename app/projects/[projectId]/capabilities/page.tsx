"use client";

import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";
import { normalizeBackfillLabels, summarizeBackfill } from "@/lib/backfill";

function sectionedCapabilities(project: NonNullable<ReturnType<typeof useProjectRecord>["project"]>) {
  const releaseByVersion = new Map(project.releases.map((release) => [release.version, release]));
  const released = project.capabilities.filter((capability) =>
    Object.values(capability.firstRelease ?? {}).some((version) => {
      const release = releaseByVersion.get(version as string);
      return (release?.releaseState ?? "released") === "released";
    })
  );
  const releasedIds = new Set(released.map((item) => item.id));
  const unreleased = project.capabilities.filter((capability) => !releasedIds.has(capability.id));
  return { released, unreleased };
}

function CapabilityCard({ capability, projectName, tone }: any) {
  return (
    <div className="card p-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-900">{capability.name}</h3>
            {capability.source === "imported-jira" ? <StatusBadge tone="info">imported-jira</StatusBadge> : null}
            {capability.source === "file-import" ? <StatusBadge tone="info">file-import</StatusBadge> : null}
          </div>
          {capability.description ? <p className="mt-2 text-sm text-slate-600">{capability.description}</p> : null}
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-500">
            {capability.jiraKeys.length ? capability.jiraKeys.map((key: string) => {
              const linked = projectName.importedJiraIssues?.find?.((issue: any) => issue.key === key);
              return linked ? <a key={key} href={linked.url} className="badge badge-neutral hover:bg-slate-100">{key} — {linked.summary}</a> : <span key={key} className="badge badge-neutral">{key}</span>;
            }) : <span>Jira: none</span>}
          </div>
        </div>
        <StatusBadge tone={tone}>{tone === "success" ? "released" : tone === "info" ? "unreleased" : "follow-up"}</StatusBadge>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-5">
        {Object.entries(capability.statusBySurface).map(([surface, status]) => (
          <div key={surface} className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">{surface}</div><div className="mt-1 font-medium text-slate-900">{status as string}</div></div>
        ))}
      </div>
      {capability.integrations.length ? <div className="mt-4 text-xs text-slate-500">Integrations: {capability.integrations.join(", ")}</div> : null}
    </div>
  );
}

export default function CapabilitiesPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  if (!project) return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;
  const { released, unreleased } = sectionedCapabilities(project as any);
  const backfill = summarizeBackfill(project);

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Capability registry" title={`${project.name} features`} description="Track features independently from commits and split them into released, unreleased and deployed-without-Jira categories." />
        <section className="space-y-4"><div className="card p-5"><h3 className="text-lg font-semibold text-slate-900">Released features</h3><p className="mt-2 text-sm text-slate-600">Capabilities already represented by at least one deployed release record.</p></div>{released.map((capability: any) => <CapabilityCard key={capability.id} capability={capability} projectName={project as any} tone="success" />)}</section>
        <section className="space-y-4"><div className="card p-5"><h3 className="text-lg font-semibold text-slate-900">Unreleased features</h3><p className="mt-2 text-sm text-slate-600">Capabilities tracked in backlog or future release trains but not yet represented by a deployed release.</p></div>{unreleased.length ? unreleased.map((capability: any) => <CapabilityCard key={capability.id} capability={capability} projectName={project as any} tone="info" />) : <div className="card p-6 text-sm text-slate-600">No unreleased capability rows.</div>}</section>
        <section className="space-y-4"><div className="card p-5"><div className="flex items-center justify-between gap-3"><div><h3 className="text-lg font-semibold text-slate-900">Deployed features without Jira tickets</h3><p className="mt-2 text-sm text-slate-600">These shipped features were detected in the product or governance layer but still need a formal Jira story so they can later move into the unreleased section as normal tracked work.</p></div><a href={`/projects/${project.id}/automation`} className="inline-flex rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Export Jira CSV</a></div></div>{backfill.unresolved.length ? backfill.unresolved.map((candidate) => (<div key={candidate.id} className="card p-6"><div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between"><div><h3 className="text-lg font-semibold text-slate-900">{candidate.featureName}</h3><p className="mt-2 text-sm text-slate-600">{candidate.description}</p><div className="mt-3 flex flex-wrap gap-2">{normalizeBackfillLabels(candidate.labels).map((label) => <span key={label} className="badge badge-neutral">{label}</span>)}</div></div><StatusBadge tone="warning">needs Jira backfill</StatusBadge></div></div>)) : <div className="card p-6 text-sm text-slate-600">No unresolved backfill candidates detected.</div>}</section>
      </div>
    </AppShell>
  );
}
