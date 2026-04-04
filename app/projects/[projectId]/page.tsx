"use client";

import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatCard, StatusBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";

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

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Tracked releases" value={String(trackedReleases)} helper="Deployed release rows in governance" />
          <StatCard label="Unreleased groups" value={String(unreleasedGroups)} helper="Specified but not yet deployed scope" />
          <StatCard label="Release candidates" value={String(releaseCandidates)} helper="Awaiting approval or review" />
          <StatCard label="Open parity alerts" value={String(parityAlerts)} helper="Cross-surface follow-up required" />
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.3fr_0.9fr]">
          <section className="card p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Governance work areas</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">Move between the main project dashboards without losing context.</p>
              </div>
              <StatusBadge tone="info">workspace-linked</StatusBadge>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <Link href={`/projects/${project.id}/releases`} className="panel-subtle p-5 transition hover:border-brand-200 hover:bg-white">
                <div className="text-lg font-semibold text-slate-950">Release dashboard</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Inspect current, candidate and unreleased release records.</p>
              </Link>
              <Link href={`/projects/${project.id}/capabilities`} className="panel-subtle p-5 transition hover:border-brand-200 hover:bg-white">
                <div className="text-lg font-semibold text-slate-950">Capabilities dashboard</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Follow capability posture and cross-surface parity concerns.</p>
              </Link>
              <Link href={`/projects/${project.id}/integrations`} className="panel-subtle p-5 transition hover:border-brand-200 hover:bg-white">
                <div className="text-lg font-semibold text-slate-950">Integrations dashboard</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Review toolchain, hosting and external dependencies.</p>
              </Link>
              <Link href={`/projects/${project.id}/import`} className="panel-subtle p-5 transition hover:border-brand-200 hover:bg-white">
                <div className="text-lg font-semibold text-slate-950">Import studio</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Import Jira, Markdown, CSV and Excel governance inputs.</p>
              </Link>
            </div>
          </section>

          <section className="card p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Current posture</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">Quick summary of the currently governed release state.</p>
              </div>
              <StatusBadge tone="neutral">{integrations} integrations</StatusBadge>
            </div>
            <div className="mt-6 space-y-4">
              <div className="panel-subtle p-5">
                <div className="text-sm text-slate-500">Current release</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">{currentRelease?.version ?? "No current release"}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{currentRelease?.releaseNotes ?? "No release summary available."}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="panel-subtle p-5">
                  <div className="text-sm text-slate-500">Capabilities</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-950">{capabilities}</div>
                </div>
                <div className="panel-subtle p-5">
                  <div className="text-sm text-slate-500">Integrations</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-950">{integrations}</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
