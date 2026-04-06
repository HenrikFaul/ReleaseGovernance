"use client";

import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatCard, StatusBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";
import { summarizeBackfill } from "@/lib/backfill";

export default function ProjectDashboardPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);

  if (!project) {
    return (
      <AppShell projectId={params.projectId}>
        <div className="card p-6">Project not found.</div>
      </AppShell>
    );
  }

  const trackedReleases = project.releases.filter((release: any) => release.status !== "unreleased").length;
  const unreleasedGroups = project.releases.filter((release: any) => release.status === "unreleased").length;
  const releaseCandidates = project.releaseCandidates?.length ?? 0;
  const capabilities = project.capabilities?.length ?? 0;
  const parityAlerts = project.parityAlerts?.filter((item: any) => item.state !== "resolved").length ?? 0;
  const integrations = project.integrations?.length ?? 0;
  const currentRelease = project.releases.find((release: any) => release.status === "current");
  const backfill = summarizeBackfill(project);

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Project overview"
          title={project.name}
          description={project.description}
          actions={
            <StatusBadge tone={project.deploymentStatus === "healthy" ? "success" : project.deploymentStatus === "warning" ? "warning" : "danger"}>
              {project.deploymentStatus}
            </StatusBadge>
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          <section className="card p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Release dashboard</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">Tracked releases, unreleased groups, backfill candidates and auto-detected candidates.</p>
              </div>
              <StatusBadge tone="info">release</StatusBadge>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <StatCard label="Tracked releases" value={String(trackedReleases)} helper="Deployed release rows" />
              <StatCard label="Unreleased groups" value={String(unreleasedGroups)} helper="Specified but not deployed" />
              <StatCard label="Backfill candidates" value={String(backfill.unresolved.length)} helper="Need Jira backfill" />
              <StatCard label="Release candidates" value={String(releaseCandidates)} helper="Awaiting approval" />
            </div>
            <div className="mt-5 rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-medium text-slate-950">Current release</div>
              <div className="mt-2 text-base text-slate-700">{currentRelease?.version ?? "No current release recorded."}</div>
            </div>
            <Link href={`/projects/${project.id}/releases`} className="mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
              Open release dashboard
            </Link>
          </section>

          <section className="card p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Capabilities dashboard</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">Capability coverage and unresolved parity follow-up in one grouped area.</p>
              </div>
              <StatusBadge tone="neutral">capabilities</StatusBadge>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <StatCard label="Capabilities" value={String(capabilities)} helper="Governed capability records" />
              <StatCard label="Open parity alerts" value={String(parityAlerts)} helper="Cross-surface follow-up" />
            </div>
            <div className="mt-5 rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-medium text-slate-950">Focus</div>
              <div className="mt-2 text-base text-slate-700">Keep feature posture and parity state visible without leaving the project dashboard.</div>
            </div>
            <Link href={`/projects/${project.id}/capabilities`} className="mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
              Open capabilities dashboard
            </Link>
          </section>

          <section className="card p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Integrations dashboard</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">Source control, hosting, planning and external dependencies grouped separately.</p>
              </div>
              <StatusBadge tone="neutral">integrations</StatusBadge>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <StatCard label="Integrations" value={String(integrations)} helper="Connected or attention-required systems" />
            </div>
            <div className="mt-5 rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-medium text-slate-950">Linked areas</div>
              <div className="mt-2 text-base text-slate-700">Repository, hosting, Jira and runtime-sensitive external APIs stay in their own dashboard group.</div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/projects/${project.id}/integrations`} className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                Open integrations dashboard
              </Link>
              <Link href={`/projects/${project.id}/import`} className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Open import studio
              </Link>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
