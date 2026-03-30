"use client";

import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatCard, StatusBadge } from "@/components/ui";
import { evaluateReleaseImpact } from "@/lib/impact-engine";
import { useProjectRecord } from "@/hooks/useProjectRecord";

export default function ProjectDashboardPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  if (!project) return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;

  const deployedReleases = project.releases.filter((release) => release.status !== "unreleased");
  const unreleasedReleases = project.releases.filter((release) => release.status === "unreleased");
  const openAlerts = project.parityAlerts.filter((alert) => alert.state !== "resolved");
  const currentRelease = project.releases.find((release) => release.status === "current") ?? deployedReleases[0];
  const impact = currentRelease ? evaluateReleaseImpact(currentRelease) : null;
  const backfillCount = project.backfillCandidates?.length ?? 0;
  const candidateCount = project.releaseCandidates?.length ?? 0;

  return (
    <AppShell projectId={project.id} projectName={project.name}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Project dashboard" title={project.name} description="Unified governance view across product surfaces, shared backend, integrations and delivery documentation." actions={<StatusBadge tone={project.deploymentStatus === "healthy" ? "success" : project.deploymentStatus === "warning" ? "warning" : "danger"}>{project.deploymentStatus}</StatusBadge>} />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          <StatCard label="Tracked releases" value={String(deployedReleases.length)} helper="Deployed release rows" />
          <StatCard label="Unreleased groups" value={String(unreleasedReleases.length)} helper="Specified but not yet deployed" />
          <StatCard label="Capabilities" value={String(project.capabilities.length)} helper="Tracked independently from commits" />
          <StatCard label="Open parity alerts" value={String(openAlerts.length)} helper="Cross-surface follow-up required" />
          <StatCard label="Connected integrations" value={String(project.integrations.length)} helper="Source systems and external APIs" />
          <StatCard label="Backfill candidates" value={String(backfillCount)} helper="Deployed without Jira" />
          <StatCard label="Release candidates" value={String(candidateCount)} helper="Awaiting approval" />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
          <section className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Current release posture</h3>
              {currentRelease ? <StatusBadge tone={impact?.complianceStatus === "ready" ? "success" : impact?.complianceStatus === "needs-follow-up" ? "warning" : "danger"}>{currentRelease.status ?? "old"}</StatusBadge> : null}
            </div>
            {currentRelease ? (
              <div className="mt-4 space-y-4 text-sm text-slate-700">
                <div>
                  <div className="font-medium">{currentRelease.version}</div>
                  <div className="mt-1 text-slate-500">{currentRelease.releaseNotes}</div>
                </div>
                <ul className="space-y-2">
                  <li>Status: {currentRelease.status ?? "old"}</li>
                  <li>Surfaces: {currentRelease.surfaces.join(", ")}</li>
                  <li>Backend changed: {String(currentRelease.backendChanged)}</li>
                  <li>Shared contract changed: {String(currentRelease.sharedContractChanged)}</li>
                  <li>Schema changed: {String(currentRelease.schemaChanged)}</li>
                  <li>Integrations touched: {currentRelease.integrationsChanged.join(", ") || "none"}</li>
                </ul>
                {impact ? <div className="rounded-2xl bg-slate-50 p-4"><div className="font-medium text-slate-900">Impact engine</div><p className="mt-2 text-slate-600">{impact.reasons.join(" ")}</p></div> : null}
                <Link href={`/projects/${project.id}/releases/${currentRelease.id}`} className="inline-flex rounded-2xl bg-brand-600 px-4 py-2 font-medium text-white hover:bg-brand-700">Open release detail</Link>
              </div>
            ) : <div className="mt-4 text-sm text-slate-500">No release records yet.</div>}
          </section>

          <section className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Open parity alerts</h3>
              <Link href={`/projects/${project.id}/traceability`} className="text-sm font-medium">Traceability</Link>
            </div>
            <div className="mt-4 space-y-3">
              {openAlerts.map((alert) => (
                <div key={alert.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-3"><div className="font-medium text-slate-900">{alert.sourceSurface} → {alert.affectedSurface}</div><StatusBadge tone={alert.severity === "critical" ? "danger" : alert.severity === "warning" ? "warning" : "info"}>{alert.severity}</StatusBadge></div>
                  <p className="mt-2 text-sm text-slate-600">{alert.reason}</p>
                  {alert.jiraKey ? <div className="mt-2 text-xs text-slate-500">Tracked in {alert.jiraKey}</div> : null}
                </div>
              ))}
            </div>
          </section>
        </div>

        {project.releaseCandidates?.length ? (
          <section className="card p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Pending release candidates</h3>
                <p className="mt-2 text-sm text-slate-600">Fresh GitHub + hosting detections waiting for human approval.</p>
              </div>
              <Link href={`/projects/${project.id}/import`} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Review in Import Studio</Link>
            </div>
            <div className="mt-4 space-y-3">
              {project.releaseCandidates.map((candidate) => (
                <div key={candidate.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="font-medium text-slate-900">{candidate.version}</div>
                  <div className="mt-2 text-sm text-slate-600">{candidate.releaseNotes}</div>
                  <div className="mt-2 text-xs text-slate-500">Source: {candidate.source.label ?? candidate.repoUrl}</div>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </AppShell>
  );
}
