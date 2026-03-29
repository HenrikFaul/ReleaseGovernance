"use client";

import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge, SurfaceBadge } from "@/components/ui";
import { evaluateReleaseImpact } from "@/lib/impact-engine";
import { useProjectRecord } from "@/hooks/useProjectRecord";

export default function ReleasesPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  if (!project) return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;

  const released = project.releases.filter((item) => (item.releaseState ?? "released") === "released");
  const unreleased = project.releases.filter((item) => item.releaseState === "unreleased");

  const renderRelease = (release: typeof project.releases[number]) => {
    const impact = evaluateReleaseImpact(release);
    return (
      <div key={release.id} className="card p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-900">{release.version}</h3>
              <StatusBadge tone={release.releaseState === "unreleased" ? "info" : impact.complianceStatus === "ready" ? "success" : impact.complianceStatus === "needs-follow-up" ? "warning" : "danger"}>
                {release.releaseState === "unreleased" ? "unreleased" : impact.complianceStatus}
              </StatusBadge>
            </div>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">{release.releaseNotes}</p>
            <div className="mt-3 flex flex-wrap gap-2">{release.surfaces.map((surface) => <SurfaceBadge key={surface} surface={surface} />)}</div>
          </div>
          <Link href={`/projects/${project.id}/releases/${release.id}`} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Open detail</Link>
        </div>
        <div className="mt-5 grid gap-4 text-sm text-slate-600 md:grid-cols-4">
          <div>Backend changed: <span className="font-medium text-slate-900">{String(release.backendChanged)}</span></div>
          <div>Shared contract: <span className="font-medium text-slate-900">{String(release.sharedContractChanged)}</span></div>
          <div>Schema changed: <span className="font-medium text-slate-900">{String(release.schemaChanged)}</span></div>
          <div>{release.releaseState === "unreleased" ? "Planning state" : "Shipped at"}: <span className="font-medium text-slate-900">{release.shippedAt}</span></div>
        </div>
      </div>
    );
  };

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Release center" title={`${project.name} releases`} description="Track what shipped, where, and with which backend or integration implications. Unreleased groups hold governed scope that has not yet been deployed." />
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">Released</h3>
          {released.length ? released.map(renderRelease) : <div className="card p-6 text-sm text-slate-500">No released versions yet.</div>}
        </section>
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">Unreleased</h3>
          {unreleased.length ? unreleased.map(renderRelease) : <div className="card p-6 text-sm text-slate-500">No unreleased groups tracked.</div>}
        </section>
      </div>
    </AppShell>
  );
}
