"use client";

import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge, SurfaceBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";
import { evaluateReleaseImpact } from "@/lib/impact-engine";

export default function ReleaseDetailPage({ params }: { params: { projectId: string; releaseId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  const release = project?.releases.find((item) => item.id === params.releaseId);

  if (!project || !release) {
    return (
      <AppShell projectId={params.projectId}>
        <div className="card p-6">Release not found.</div>
      </AppShell>
    );
  }

  const impact = evaluateReleaseImpact(release);

  const deliveredCapabilityRecords = release.deliveredCapabilities
    .map((capabilityId) => project.capabilities.find((capability) => capability.id === capabilityId))
    .filter(Boolean);

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Release detail"
          title={release.version}
          description="Inspect delivered functionality, connected Jira work, changelog context and cross-platform impact."
          actions={<StatusBadge tone={impact.complianceStatus === "ready" ? "success" : impact.complianceStatus === "needs-follow-up" ? "warning" : "danger"}>{impact.complianceStatus}</StatusBadge>}
        />
        <div className="flex items-center gap-3 text-sm">
          <Link href={`/projects/${project.id}/releases`} className="font-medium text-brand-700 hover:text-brand-800">← Back to releases</Link>
          <span className="text-slate-400">/</span>
          <Link href={`/projects/${project.id}/releases`} className="font-medium text-slate-700 hover:text-slate-900">{release.version}</Link>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr,1fr]">
          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Release header</h3>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div className="flex flex-wrap gap-2">{release.surfaces.map((surface) => <SurfaceBadge key={surface} surface={surface} />)}</div>
              <div>Release version: <span className="font-medium text-slate-900">{release.version}</span></div>
              <div>Status: <span className="font-medium text-slate-900">{release.status ?? "old"}</span></div>
              <div>Shipped at: {release.shippedAt}</div>
              <div>Backend changed: {String(release.backendChanged)}</div>
              <div>Shared contract changed: {String(release.sharedContractChanged)}</div>
              <div>Schema changed: {String(release.schemaChanged)}</div>
              <div>Integrations changed: {release.integrationsChanged.join(", ") || "none"}</div>
              <div>Source: {release.source?.label ?? release.source?.kind ?? "unknown"}</div>
              <div>Deployment comment: {release.deploymentComment ?? "—"}</div>
            </div>
          </section>
          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Delivered capabilities</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              {deliveredCapabilityRecords.length ? deliveredCapabilityRecords.map((capability) => (
                <div key={capability!.id} className="rounded-2xl bg-slate-50 px-4 py-3">
                  <div className="font-medium text-slate-900">{capability!.name}</div>
                  {capability!.summary ? <div className="mt-1 text-slate-600">{capability!.summary}</div> : null}
                  {capability!.jiraKeys.length ? <div className="mt-2 text-xs text-slate-500">Jira: {capability!.jiraKeys.join(", ")}</div> : null}
                </div>
              )) : <div className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-600">No mapped capability records.</div>}
            </div>
          </section>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr,1fr]">
          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">CHANGELOG and deployment context</h3>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-medium text-slate-900">{release.changelog?.title ?? "Release notes"}</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                {(release.changelog?.excerpt?.length ? release.changelog.excerpt : [release.releaseNotes]).map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
              <div className="font-medium text-slate-900">Deployment comment</div>
              <div className="mt-2 text-slate-600">{release.deploymentComment ?? "No deployment comment recorded."}</div>
            </div>
          </section>

          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Jira traceability</h3>
            <div className="mt-4 space-y-3">
              {release.jiraLinks.length ? release.jiraLinks.map((jira) => (
                <a key={jira.key} href={jira.url} className="block rounded-2xl border border-slate-200 p-4 hover:bg-slate-50">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 rounded-xl bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-700">{jira.key}</span>
                    <div>
                      <div className="font-medium text-slate-900">{jira.summary}</div>
                      <div className="mt-1 text-sm text-slate-500">Status: {jira.status}</div>
                    </div>
                  </div>
                </a>
              )) : <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">No Jira traceability linked yet.</div>}
            </div>
          </section>
        </div>

        <section className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900">Impact evaluation</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div>Parity needed: {String(impact.parityNeeded)}</div>
            <div>Affected surfaces: {impact.affectedSurfaces.join(", ")}</div>
            <div className="rounded-2xl bg-slate-50 p-4 text-slate-600">{impact.reasons.join(" ")}</div>
            <div>Compliance status: {impact.complianceStatus}</div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
