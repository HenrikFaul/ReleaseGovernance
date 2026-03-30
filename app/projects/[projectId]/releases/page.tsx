"use client";

import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge, SurfaceBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";

function formatSourceLabel(source?: { kind?: string; owner?: string; repository?: string; label?: string }) {
  if (!source) return "Unknown source";
  if (source.label) return source.label;
  if (source.kind === "github" && source.owner && source.repository) return `GitHub / ${source.owner}/${source.repository}`;
  if (source.owner && source.repository) return `${source.kind} / ${source.owner}/${source.repository}`;
  return source.kind ?? "Unknown source";
}

export default function ReleasesPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  if (!project) return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;
  const deployed = project.releases.filter((release) => release.status !== "unreleased");
  const unreleased = project.releases.filter((release) => release.status === "unreleased");

  const renderRow = (releaseId: string) => {
    const release = project.releases.find((item) => item.id === releaseId);
    if (!release) return null;
    const tone = release.status === "current" ? "success" : release.status === "unreleased" ? "info" : "neutral";
    return (
      <Link key={release.id} href={`/projects/${project.id}/releases/${release.id}`} className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50">
        <div className="grid gap-4 xl:grid-cols-[1.3fr,0.55fr,0.75fr,0.8fr,1fr,0.45fr,1fr,0.45fr]">
          <div><div className="text-sm font-semibold text-slate-900">{release.version}</div><div className="mt-2 flex flex-wrap gap-2">{release.surfaces.map((surface) => <SurfaceBadge key={surface} surface={surface} />)}</div></div>
          <div><div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Status</div><div className="mt-2"><StatusBadge tone={tone}>{release.status ?? "old"}</StatusBadge></div></div>
          <div><div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Deploy date</div><div className="mt-2 text-sm text-slate-700">{release.shippedAt}</div></div>
          <div><div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Source kind</div><div className="mt-2 text-sm text-slate-700">{release.source?.kind ?? "unknown"}</div></div>
          <div><div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Source repository</div><div className="mt-2 text-sm text-slate-700">{formatSourceLabel(release.source)}</div></div>
          <div><div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Issue count</div><div className="mt-2 text-sm text-slate-700">{release.jiraLinks.length}</div></div>
          <div><div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Deployment comment</div><div className="mt-2 text-sm text-slate-700">{release.deploymentComment ?? release.releaseNotes}</div></div>
          <div><div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Jira linked</div><div className="mt-2 text-sm text-slate-700">{release.jiraLinks.length ? "Yes" : "No"}</div></div>
        </div>
      </Link>
    );
  };

  return (
    <AppShell projectId={project.id} projectName={project.name}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Release center" title={`${project.name} releases`} description="Track what shipped, where, and with which backend or integration implications. Unreleased groups hold governed scope that has not yet been deployed." />
        <section className="space-y-3"><h3 className="text-lg font-semibold text-slate-900">Released</h3>{deployed.length ? deployed.map((release) => renderRow(release.id)) : <div className="card p-6 text-sm text-slate-600">No released versions yet.</div>}</section>
        <section className="space-y-3"><h3 className="text-lg font-semibold text-slate-900">Unreleased</h3>{unreleased.length ? unreleased.map((release) => renderRow(release.id)) : <div className="card p-6 text-sm text-slate-600">No unreleased groups tracked.</div>}</section>
      </div>
    </AppShell>
  );
}
