"use client";

import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { useProjectRecord } from "@/hooks/useProjectRecord";

export default function ProjectDashboardPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);

  if (!project) {
    return (
      <AppShell projectId={params.projectId}>
        <div className="rounded-[28px] bg-white p-6 shadow-sm">Project not found.</div>
      </AppShell>
    );
  }

  const trackedReleases = project.releases.filter((release: any) => release.status !== "unreleased").length;
  const unreleasedGroups = project.releases.filter((release: any) => release.status === "unreleased").length;
  const backfillCandidates = project.backfillCandidates?.length ?? 0;
  const releaseCandidates = project.releaseCandidates?.length ?? 0;
  const capabilities = project.capabilities?.length ?? 0;
  const parityAlerts = project.parityAlerts?.length ?? 0;
  const integrations = project.integrations?.length ?? 0;

  const statCard = (label: string, value: number, helper: string) => (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5">
      <div className="text-base text-slate-500">{label}</div>
      <div className="mt-3 text-5xl font-semibold text-slate-950">{value}</div>
      <div className="mt-3 text-base text-slate-500">{helper}</div>
    </div>
  );

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <section className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">
          <div className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-brand-700">
            Project dashboard
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">{project.name}</h1>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">{project.description}</p>
        </section>

        <section className="rounded-[32px] bg-white p-5 shadow-sm md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">Release dashboard</h2>
              <p className="mt-2 text-base text-slate-600">Tracked release posture, unreleased scope and Jira backfill readiness.</p>
            </div>
            <Link href={`/projects/${project.id}/releases`} className="rounded-[28px] bg-brand-600 px-6 py-4 text-lg font-medium text-white">
              Open release dashboard
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
            {statCard("Tracked releases", trackedReleases, "Deployed release rows")}
            {statCard("Unreleased groups", unreleasedGroups, "Specified but not yet deployed")}
            {statCard("Backfill candidates", backfillCandidates, "Deployed without Jira")}
            {statCard("Release candidates", releaseCandidates, "Awaiting approval")}
          </div>
        </section>

        <section className="rounded-[32px] bg-white p-5 shadow-sm md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">Capabilities dashboard</h2>
              <p className="mt-2 text-base text-slate-600">Capability inventory and open cross-surface parity concerns.</p>
            </div>
            <Link href={`/projects/${project.id}/capabilities`} className="rounded-[28px] bg-brand-600 px-6 py-4 text-lg font-medium text-white">
              Open capabilities dashboard
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 md:max-w-4xl">
            {statCard("Capabilities", capabilities, "Tracked independently from commits")}
            {statCard("Open parity alerts", parityAlerts, "Cross-surface follow-up required")}
          </div>
        </section>

        <section className="rounded-[32px] bg-white p-5 shadow-sm md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">Integrations dashboard</h2>
              <p className="mt-2 text-base text-slate-600">Source systems, APIs and hosting dependencies connected to this project.</p>
            </div>
            <Link href={`/projects/${project.id}/integrations`} className="rounded-[28px] bg-brand-600 px-6 py-4 text-lg font-medium text-white">
              Open integrations dashboard
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 md:max-w-4xl">
            {statCard("Connected integrations", integrations, "Source systems and external APIs")}
            <div className="rounded-[28px] border border-slate-200 bg-white p-5">
              <div className="text-base text-slate-500">Current release posture</div>
              <div className="mt-3 text-2xl font-semibold text-slate-950">
                {project.releases.find((release: any) => release.status === "current")?.version ?? "No current release"}
              </div>
              <div className="mt-3 text-base leading-7 text-slate-500">
                {project.releases.find((release: any) => release.status === "current")?.releaseNotes ?? "No release summary available."}
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
