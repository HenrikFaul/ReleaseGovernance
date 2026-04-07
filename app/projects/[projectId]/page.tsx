"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";
import { summarizeBackfill } from "@/lib/backfill";

type GroupKey = "release" | "capabilities" | "integrations";
type OpenState = Record<GroupKey, boolean>;

function MetricCard({ label, value, helper, tone = "neutral" }: { label: string; value: string; helper?: string; tone?: "neutral" | "info" | "warning" | "success"; }) {
  const toneClass = {
    neutral: "border-slate-200 bg-white",
    info: "border-brand-200 bg-brand-50/50",
    warning: "border-amber-200 bg-amber-50/70",
    success: "border-emerald-200 bg-emerald-50/70",
  } as const;

  return (
    <div className={`rounded-[24px] border p-4 shadow-sm ${toneClass[tone]}`}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
      <div className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]">{value}</div>
      {helper ? <div className="mt-2 text-xs leading-5 text-slate-500">{helper}</div> : null}
    </div>
  );
}

function GroupSection({ title, description, badge, tone, open, onToggle, children }: { title: string; description: string; badge: string; tone: "neutral" | "info" | "warning" | "success"; open: boolean; onToggle: () => void; children: ReactNode; }) {
  return (
    <section className="card overflow-hidden p-6 sm:p-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
            <StatusBadge tone={tone}>{badge}</StatusBadge>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{description}</p>
        </div>
        <button type="button" onClick={onToggle} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
          {open ? "Collapse group" : "Open group"}
        </button>
      </div>
      {open ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}

function PreviewCard({ title, meta, description, badges }: { title: string; meta?: string; description?: string; badges?: string[]; }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
      {meta ? <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{meta}</div> : null}
      <div className="mt-2 text-base font-semibold text-slate-950">{title}</div>
      {description ? <div className="mt-2 text-sm leading-6 text-slate-600">{description}</div> : null}
      {badges?.length ? <div className="mt-3 flex flex-wrap gap-2">{badges.map((badge) => <span key={badge} className="badge badge-neutral">{badge}</span>)}</div> : null}
    </div>
  );
}

export default function ProjectDashboardPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  const [openGroups, setOpenGroups] = useState<OpenState>({ release: true, capabilities: true, integrations: true });

  if (!project) {
    return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;
  }

  const trackedReleases = project.releases.filter((release) => release.status !== "unreleased").length;
  const unreleasedGroups = project.releases.filter((release) => release.status === "unreleased").length;
  const releaseCandidates = project.releaseCandidates?.length ?? 0;
  const capabilities = project.capabilities?.length ?? 0;
  const parityAlerts = project.parityAlerts?.filter((item) => item.state !== "resolved").length ?? 0;
  const integrations = project.integrations?.length ?? 0;
  const currentRelease = project.releases.find((release) => release.status === "current") ?? project.releases[0];
  const backfill = summarizeBackfill(project);
  const connectedIntegrations = project.integrations?.filter((item) => item.state === "connected").length ?? 0;
  const attentionIntegrations = project.integrations?.filter((item) => item.state === "attention").length ?? 0;

  const recentReleases = useMemo(() => project.releases.filter((release) => release.status !== "unreleased").slice(0, 4), [project.releases]);
  const unreleasedPreview = useMemo(() => project.releases.filter((release) => release.status === "unreleased").slice(0, 4), [project.releases]);
  const capabilityPreview = useMemo(() => project.capabilities.slice(0, 4), [project.capabilities]);
  const parityPreview = useMemo(() => project.parityAlerts.filter((item) => item.state !== "resolved").slice(0, 4), [project.parityAlerts]);
  const integrationPreview = useMemo(() => (project.integrations.filter((item) => item.state !== "connected").length ? project.integrations.filter((item) => item.state !== "connected") : project.integrations).slice(0, 4), [project.integrations]);

  const toggleGroup = (group: GroupKey) => setOpenGroups((current) => ({ ...current, [group]: !current[group] }));

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Project overview" title={project.name} description={project.description} actions={<div className="flex flex-wrap items-center gap-2"><StatusBadge tone={project.deploymentStatus === "healthy" ? "success" : project.deploymentStatus === "warning" ? "warning" : "danger"}>{project.deploymentStatus}</StatusBadge><Link href="/projects" className="nav-link-mobile lg:hidden">Projects</Link></div>} />

        <GroupSection title="Release Group" description="Tracked releases, unreleased groups, backfill candidates and release candidates now live together as one governance area." badge={`${trackedReleases} live rows`} tone="info" open={openGroups.release} onToggle={() => toggleGroup("release")}>
          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            <MetricCard label="Tracked releases" value={String(trackedReleases)} helper="Governed deployed rows" tone="info" />
            <MetricCard label="Unreleased groups" value={String(unreleasedGroups)} helper="Specified but not yet live" />
            <MetricCard label="Backfill candidates" value={String(backfill.unresolved.length)} helper="Need Jira issue linkage" tone={backfill.unresolved.length ? "warning" : "success"} />
            <MetricCard label="Release candidates" value={String(releaseCandidates)} helper="Auto-detected commit/deploy rows" tone={releaseCandidates ? "success" : "neutral"} />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr,0.8fr]">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Current governed release</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-950">{currentRelease?.version ?? "No current release recorded"}</div>
                </div>
                {currentRelease ? <StatusBadge tone="success">{currentRelease.status ?? "current"}</StatusBadge> : null}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{currentRelease?.deploymentComment ?? currentRelease?.releaseNotes ?? "Open the Release Center to review deployment comments and mapped changelog context."}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href={`/projects/${project.id}/releases`} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">Open Release Center</Link>
                <Link href={`/projects/${project.id}/releases`} className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white">Push to Jira</Link>
                <Link href={`/projects/${project.id}/releases`} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">Download Jira CSV</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">{(releaseCandidates ? recentReleases : recentReleases.slice(0, 2)).map((release) => <PreviewCard key={release.id} meta={release.shippedAt} title={release.version} description={release.releaseNotes} badges={release.surfaces} />)}</div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">{(unreleasedPreview.length ? unreleasedPreview : recentReleases).slice(0, 4).map((release) => <PreviewCard key={release.id} meta={release.status === "unreleased" ? "Unreleased" : "Recent"} title={release.version} description={release.releaseNotes} badges={release.jiraLinks.slice(0, 2).map((link) => link.key)} />)}</div>
        </GroupSection>

        <GroupSection title="Capabilities Group" description="Capabilities and open parity alerts are grouped in one place so feature posture and follow-up never drift apart." badge={`${capabilities} tracked`} tone="neutral" open={openGroups.capabilities} onToggle={() => toggleGroup("capabilities")}>
          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            <MetricCard label="Capabilities" value={String(capabilities)} helper="Governed capability records" />
            <MetricCard label="Open parity alerts" value={String(parityAlerts)} helper="Cross-surface follow-up items" tone={parityAlerts ? "warning" : "success"} />
            <MetricCard label="Imported Jira signals" value={String(project.importedJiraIssues?.length ?? 0)} helper="Current traceability universe" tone="info" />
            <MetricCard label="Mapped releases" value={String(project.releases.length)} helper="Capability delivery context" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">{capabilityPreview.map((capability) => <PreviewCard key={capability.id} meta={capability.parityStatus} title={capability.name} description={capability.description ?? capability.summary} badges={capability.jiraKeys.slice(0, 2)} />)}</div>
          <div className="mt-4 grid grid-cols-2 gap-4">{(parityPreview.length ? parityPreview : project.parityAlerts.slice(0, 4)).map((alert) => <PreviewCard key={alert.id} meta={`${alert.sourceSurface} → ${alert.affectedSurface}`} title={alert.reason} description={alert.jiraKey ? `Mapped Jira: ${alert.jiraKey}` : "Jira mapping still missing or still under follow-up."} badges={[alert.state, alert.severity]} />)}</div>
          <div className="mt-4 flex flex-wrap gap-3"><Link href={`/projects/${project.id}/capabilities`} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">Open Capabilities dashboard</Link><Link href={`/projects/${project.id}/traceability`} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">Open Traceability</Link></div>
        </GroupSection>

        <GroupSection title="Integrations Group" description="All integration cards are now one grouped surface with explicit access to connected, attention-required and import-related tools." badge={`${integrations} total`} tone="neutral" open={openGroups.integrations} onToggle={() => toggleGroup("integrations")}>
          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            <MetricCard label="All integrations" value={String(integrations)} helper="Governed provider inventory" />
            <MetricCard label="Connected" value={String(connectedIntegrations)} helper="Healthy or configured" tone={connectedIntegrations ? "success" : "neutral"} />
            <MetricCard label="Attention needed" value={String(attentionIntegrations)} helper="Needs setup or follow-up" tone={attentionIntegrations ? "warning" : "success"} />
            <MetricCard label="Import ready" value={project.jiraProjectKey ? "Yes" : "No"} helper="Project source inputs configured" tone={project.jiraProjectKey ? "info" : "neutral"} />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">{integrationPreview.map((integration) => <PreviewCard key={integration.id} meta={integration.category} title={integration.name} description={integration.notes ?? integration.endpointUrl ?? integration.resourceLocation ?? integration.url ?? "No endpoint note recorded."} badges={[integration.state, integration.canonicalKey ?? integration.id]} />)}</div>
          <div className="mt-4 flex flex-wrap gap-3"><Link href={`/projects/${project.id}/integrations`} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">Open Integrations dashboard</Link><Link href={`/projects/${project.id}/import`} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">Open Import Studio</Link><Link href={`/projects/${project.id}/automation`} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">Open Automation</Link></div>
        </GroupSection>
      </div>
    </AppShell>
  );
}
