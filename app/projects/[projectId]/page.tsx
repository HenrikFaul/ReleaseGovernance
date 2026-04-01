"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";
import { evaluateReleaseImpact } from "@/lib/impact-engine";
import { readProjectSettings } from "@/lib/project-overrides";
import { ReleaseCandidate } from "@/lib/types";

function GroupStat({ label, value, helper }: { label: string; value: string; helper: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-semibold text-slate-950 sm:text-4xl">{value}</div>
      <div className="mt-3 text-sm leading-6 text-slate-500">{helper}</div>
    </div>
  );
}

function GroupSection({
  title,
  buttonLabel,
  buttonHref,
  children,
}: {
  title: string;
  buttonLabel: string;
  buttonHref: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
        <Link href={buttonHref} className="rounded-3xl bg-brand-600 px-5 py-3 text-base font-medium text-white hover:bg-brand-700 self-start sm:self-auto">
          {buttonLabel}
        </Link>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function ProjectDashboardPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  const [autoCandidate, setAutoCandidate] = useState<ReleaseCandidate | null>(null);

  const settings = useMemo(() => (project ? readProjectSettings(project.id) : {}), [project?.id]);

  useEffect(() => {
    if (!project?.repositories.web) return;
    const repoUrl = settings.repoUrl ?? project.repositories.web;
    if (!repoUrl || !String(repoUrl).includes("/")) return;
    const latestReleaseDate = project.releases
      .filter((release) => release.status !== "unreleased")
      .map((release) => release.shippedAt)
      .sort()
      .at(-1);

    fetch("/api/release-detection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId: project.id, repoUrl, latestReleaseDate }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) setAutoCandidate(data.candidate ?? null);
      })
      .catch(() => setAutoCandidate(null));
  }, [project?.id, project?.repositories.web]);

  if (!project) {
    return (
      <AppShell projectId={params.projectId}>
        <div className="card p-6">Project not found.</div>
      </AppShell>
    );
  }

  const deployedReleases = project.releases.filter((release) => release.status !== "unreleased");
  const unreleasedReleases = project.releases.filter((release) => release.status === "unreleased");
  const openAlerts = project.parityAlerts.filter((alert) => alert.state !== "resolved");
  const currentRelease = project.releases.find((release) => release.status === "current") ?? deployedReleases[0];
  const impact = currentRelease ? evaluateReleaseImpact(currentRelease) : null;
  const backfillCount = project.backfillCandidates?.length ?? project.releases.filter((release) => release.jiraBackfillRequired).length;
  const releaseCandidateCount = (project.releaseCandidates?.length ?? 0) + (autoCandidate ? 1 : 0);

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Project dashboard"
          title={project.name}
          description="Unified governance view across product surfaces, shared backend, integrations and delivery documentation."
          actions={
            <StatusBadge tone={project.deploymentStatus === "healthy" ? "success" : project.deploymentStatus === "warning" ? "warning" : "danger"}>
              {project.deploymentStatus}
            </StatusBadge>
          }
        />

        <GroupSection title="Release dashboard" buttonLabel="Open release dashboard" buttonHref={`/projects/${project.id}/releases`}>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            <GroupStat label="Tracked releases" value={String(deployedReleases.length)} helper="Deployed release rows" />
            <GroupStat label="Unreleased groups" value={String(unreleasedReleases.length)} helper="Specified but not yet deployed" />
            <GroupStat label="Backfill candidates" value={String(backfillCount)} helper="Deployed without Jira" />
            <GroupStat label="Release candidates" value={String(releaseCandidateCount)} helper="Awaiting approval" />
          </div>
        </GroupSection>

        <GroupSection title="Capabilities dashboard" buttonLabel="Open capabilities dashboard" buttonHref={`/projects/${project.id}/capabilities`}>
          <div className="grid grid-cols-2 gap-4">
            <GroupStat label="Capabilities" value={String(project.capabilities.length)} helper="Tracked independently from commits" />
            <GroupStat label="Open parity alerts" value={String(openAlerts.length)} helper="Cross-surface follow-up required" />
          </div>
        </GroupSection>

        <GroupSection title="Integrations dashboard" buttonLabel="Open integrations dashboard" buttonHref={`/projects/${project.id}/integrations`}>
          <div className="grid grid-cols-2 gap-4">
            <GroupStat label="Connected integrations" value={String(project.integrations.length)} helper="Source systems and external APIs" />
          </div>
        </GroupSection>

        <div className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
          <section className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Current release posture</h3>
              {currentRelease ? (
                <StatusBadge tone={impact?.complianceStatus === "ready" ? "success" : impact?.complianceStatus === "needs-follow-up" ? "warning" : "danger"}>
                  {currentRelease.status ?? "old"}
                </StatusBadge>
              ) : null}
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
                {impact ? (
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="font-medium text-slate-900">Impact engine</div>
                    <p className="mt-2 text-slate-600">{impact.reasons.join(" ")}</p>
                  </div>
                ) : null}
                <Link href={`/projects/${project.id}/releases/${currentRelease.id}`} className="inline-flex rounded-2xl bg-brand-600 px-4 py-2 font-medium text-white hover:bg-brand-700">
                  Open release detail
                </Link>
              </div>
            ) : (
              <div className="mt-4 text-sm text-slate-500">No release records yet.</div>
            )}
          </section>

          <section className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Open parity alerts</h3>
              <Link href={`/projects/${project.id}/capabilities`} className="text-sm font-medium">Capabilities</Link>
            </div>
            <div className="mt-4 space-y-3">
              {openAlerts.map((alert) => (
                <div key={alert.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-slate-900">{alert.sourceSurface} → {alert.affectedSurface}</div>
                    <StatusBadge tone={alert.severity === "critical" ? "danger" : alert.severity === "warning" ? "warning" : "info"}>{alert.severity}</StatusBadge>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{alert.reason}</p>
                  {alert.jiraKey ? <div className="mt-2 text-xs text-slate-500">Tracked in {alert.jiraKey}</div> : null}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
