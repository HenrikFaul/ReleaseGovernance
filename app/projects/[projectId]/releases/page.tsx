"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge, SurfaceBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";
import { readProjectSettings } from "@/lib/project-overrides";
import { ReleaseCandidate, ReleaseItem } from "@/lib/types";

type PushDraft = {
  releaseId: string;
  releaseVersion: string;
  summary: string;
  description: string;
  issueType: string;
  parentKey?: string;
  labels: string[];
  rationale?: string;
  existingSimilar?: Array<{ key: string; summary: string; issueType?: string }>;
};

function formatSourceLabel(source?: { kind?: string; owner?: string; repository?: string; label?: string }) {
  if (!source) return "Unknown source";
  if (source.label) return source.label;
  if (source.kind === "github" && source.owner && source.repository) return `GitHub / ${source.owner}/${source.repository}`;
  if (source.owner && source.repository) return `${source.kind} / ${source.owner}/${source.repository}`;
  return source.kind ?? "Unknown source";
}

function escapeCsv(value: unknown) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function releaseRowsCsv(releases: Array<ReleaseItem | (ReleaseCandidate & { status?: string; releaseState?: string; jiraLinks?: any[] })>) {
  const header = [
    "release_version",
    "release_state",
    "status",
    "surfaces",
    "deploy_date",
    "source_kind",
    "source_repository",
    "issue_count",
    "deployment_comment",
    "release_notes",
    "changelog_title",
    "jira_linked",
  ];
  const rows = releases.map((release: any) => [
    release.version,
    release.releaseState ?? "released",
    release.status ?? "old",
    (release.surfaces ?? []).join("|"),
    release.shippedAt ?? release.detectedAt ?? "",
    release.source?.kind ?? "unknown",
    formatSourceLabel(release.source),
    String((release.jiraLinks ?? []).length),
    release.deploymentComment ?? "",
    release.releaseNotes ?? "",
    release.changelog?.title ?? "",
    (release.jiraLinks ?? []).length ? "Yes" : "No",
  ]);
  return [header, ...rows].map((row) => row.map(escapeCsv).join(",")).join("\n");
}

function download(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function candidateToRow(candidate: ReleaseCandidate) {
  return {
    ...candidate,
    shippedAt: candidate.detectedAt.slice(0, 10),
    status: "candidate",
    releaseState: "released",
    jiraLinks: [],
  } as ReleaseItem & { isCandidate: true };
}

export default function ReleasesPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  const [viewMode, setViewMode] = useState<"list" | "detailed">("list");
  const [candidate, setCandidate] = useState<ReleaseCandidate | null>(null);
  const [detecting, setDetecting] = useState(false);
  const [selectedReleaseIds, setSelectedReleaseIds] = useState<string[]>([]);
  const [showPushModal, setShowPushModal] = useState(false);
  const [pushDrafts, setPushDrafts] = useState<PushDraft[]>([]);
  const [pushInfo, setPushInfo] = useState<{ matchedIssues?: number; analyzedReleases?: number } | null>(null);
  const [pushBusy, setPushBusy] = useState(false);
  const [pushApplying, setPushApplying] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const settings = useMemo(() => (project ? readProjectSettings(project.id) : {}), [project?.id]);
  const [jiraUrl, setJiraUrl] = useState(settings.jiraUrl ?? "");
  const [jiraEmail, setJiraEmail] = useState(settings.jiraEmail ?? "");
  const [jiraToken, setJiraToken] = useState(settings.jiraToken ?? "");
  const [jiraProjectKey, setJiraProjectKey] = useState(settings.jiraProjectKey ?? project?.jiraProjectKey ?? "");

  useEffect(() => {
    if (!project?.repositories.web) return;
    const repoUrl = settings.repoUrl ?? project.repositories.web;
    if (!repoUrl || !String(repoUrl).includes("/")) return;
    const latestReleaseDate = project.releases
      .filter((release) => release.status !== "unreleased")
      .map((release) => release.shippedAt)
      .sort()
      .at(-1);

    setDetecting(true);
    fetch("/api/release-detection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectId: project.id,
        repoUrl,
        latestReleaseDate,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Release detection failed.");
        setCandidate(data.candidate ?? null);
      })
      .catch(() => setCandidate(null))
      .finally(() => setDetecting(false));
  }, [project?.id, project?.repositories.web]);

  if (!project) {
    return (
      <AppShell projectId={params.projectId}>
        <div className="card p-6">Project not found.</div>
      </AppShell>
    );
  }

  const released = project.releases.filter((release) => release.status !== "unreleased");
  const unreleased = project.releases.filter((release) => release.status === "unreleased");
  const effectiveReleased = candidate ? [candidateToRow(candidate), ...released] : released;
  const selectedReleases = project.releases.filter((release) => selectedReleaseIds.includes(release.id));

  function toggleReleaseSelection(releaseId: string) {
    setSelectedReleaseIds((current) =>
      current.includes(releaseId) ? current.filter((id) => id !== releaseId) : [...current, releaseId]
    );
  }

  async function handlePushPreview() {
    if (!selectedReleases.length) {
      setError("Select at least one deployed release row first.");
      return;
    }
    setError("");
    setStatus("");
    setPushBusy(true);
    try {
      const res = await fetch("/api/jira/push-preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jiraUrl,
          email: jiraEmail,
          apiToken: jiraToken,
          projectKey: jiraProjectKey || project.jiraProjectKey,
          releases: selectedReleases,
          importedIssues: project.importedJiraIssues ?? [],
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Push to Jira preview failed.");
      setPushDrafts(data.drafts ?? []);
      setPushInfo(data.preview ?? null);
      setShowPushModal(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Push preview failed.");
    } finally {
      setPushBusy(false);
    }
  }

  async function handlePushApply() {
    setPushApplying(true);
    setError("");
    setStatus("");
    try {
      const res = await fetch("/api/jira/push-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jiraUrl,
          email: jiraEmail,
          apiToken: jiraToken,
          projectKey: jiraProjectKey || project.jiraProjectKey,
          drafts: pushDrafts,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Push to Jira apply failed.");
      setStatus(`Created ${data.created?.length ?? 0} Jira issue(s).`);
      setShowPushModal(false);
      setSelectedReleaseIds([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Push apply failed.");
    } finally {
      setPushApplying(false);
    }
  }

  function renderListRow(release: any, isAuto = false) {
    const tone =
      release.status === "current"
        ? "success"
        : release.status === "candidate"
        ? "info"
        : release.status === "unreleased"
        ? "info"
        : "neutral";
    return (
      <div
        key={release.id}
        className="grid cursor-pointer gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50 xl:grid-cols-[36px,1.2fr,0.9fr,0.75fr,0.85fr,1.15fr,0.55fr,1.2fr,0.55fr]"
        onClick={() => !isAuto && (window.location.href = `/projects/${project.id}/releases/${release.id}`)}
      >
        <div onClick={(e) => e.stopPropagation()}>
          {!isAuto ? (
            <input type="checkbox" checked={selectedReleaseIds.includes(release.id)} onChange={() => toggleReleaseSelection(release.id)} className="mt-2 h-4 w-4 rounded border-slate-300" />
          ) : <span className="mt-2 inline-flex h-3.5 w-3.5 rounded-full bg-brand-500" />}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{release.version}</div>
          <div className="mt-1 flex flex-wrap gap-2">{(release.surfaces ?? []).map((surface: string) => <SurfaceBadge key={surface} surface={surface} />)}</div>
        </div>
        <div className="text-sm text-slate-600"><div className="font-medium text-slate-900">Status</div><div className="mt-1"><StatusBadge tone={tone as any}>{release.status ?? "old"}</StatusBadge></div></div>
        <div className="text-sm text-slate-600"><div className="font-medium text-slate-900">Deploy date</div><div className="mt-1">{release.shippedAt}</div></div>
        <div className="text-sm text-slate-600"><div className="font-medium text-slate-900">Source kind</div><div className="mt-1">{release.source?.kind ?? "unknown"}</div></div>
        <div className="text-sm text-slate-600"><div className="font-medium text-slate-900">Source repository</div><div className="mt-1">{formatSourceLabel(release.source)}</div></div>
        <div className="text-sm text-slate-600"><div className="font-medium text-slate-900">Issue count</div><div className="mt-1">{(release.jiraLinks ?? []).length}</div></div>
        <div className="text-sm text-slate-600"><div className="font-medium text-slate-900">Deployment comment</div><div className="mt-1">{release.deploymentComment ?? release.releaseNotes}</div></div>
        <div className="text-sm text-slate-600"><div className="font-medium text-slate-900">Jira linked</div><div className="mt-1">{(release.jiraLinks ?? []).length > 0 ? "Yes" : "No"}</div></div>
      </div>
    );
  }

  function renderDetailedCard(release: any, isAuto = false) {
    const tone =
      release.status === "current"
        ? "success"
        : release.status === "candidate"
        ? "info"
        : release.status === "unreleased"
        ? "info"
        : "neutral";
    return (
      <div key={release.id} className="card p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="text-xl font-semibold text-slate-900">{release.version}</div>
              {(release.surfaces ?? []).map((surface: string) => <SurfaceBadge key={surface} surface={surface} />)}
              <StatusBadge tone={tone as any}>{release.status ?? "old"}</StatusBadge>
            </div>
            <p className="mt-3 text-sm text-slate-600">{release.releaseNotes}</p>
          </div>
          {!isAuto ? (
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={selectedReleaseIds.includes(release.id)} onChange={() => toggleReleaseSelection(release.id)} className="h-4 w-4 rounded border-slate-300" />
              <Link href={`/projects/${project.id}/releases/${release.id}`} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Open detail</Link>
            </div>
          ) : <StatusBadge tone="info">auto-detected</StatusBadge>}
        </div>
        <div className="mt-5 grid gap-4 xl:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <div>Deploy date: {release.shippedAt}</div>
            <div className="mt-2">Source: {formatSourceLabel(release.source)}</div>
            <div className="mt-2">Deployment comment: {release.deploymentComment ?? "—"}</div>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <div className="font-medium text-slate-900">CHANGELOG excerpt</div>
            <div className="mt-2 text-slate-600">{release.changelog?.title ?? "No explicit changelog title"}</div>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {(release.changelog?.excerpt?.length ? release.changelog.excerpt : [release.releaseNotes]).map((line: string, idx: number) => <li key={idx}>{line}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Release center" title={`${project.name} releases`} description="Track what shipped, where, and with which backend or integration implications. Unreleased groups hold governed scope that has not yet been deployed." />

        <section className="card p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setViewMode("list")} className={`rounded-2xl px-4 py-2 text-sm font-medium ${viewMode === "list" ? "bg-brand-600 text-white" : "border border-slate-200 text-slate-700 hover:bg-slate-50"}`}>List view</button>
              <button onClick={() => setViewMode("detailed")} className={`rounded-2xl px-4 py-2 text-sm font-medium ${viewMode === "detailed" ? "bg-brand-600 text-white" : "border border-slate-200 text-slate-700 hover:bg-slate-50"}`}>Detailed view</button>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => exportCurrentProjectCsv()} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Download CSV</button>
              <button onClick={handlePushPreview} disabled={pushBusy || !selectedReleaseIds.length} className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50">Push to Jira</button>
            </div>
          </div>
          {detecting ? <div className="mt-3 text-sm text-slate-500">Checking GitHub for the latest release candidate...</div> : null}
        </section>

        <section className="space-y-3">
          <div className="text-xl font-semibold text-slate-900">Released</div>
          {viewMode === "list" ? (
            <>
              <div className="card p-4">
                <div className="grid gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 xl:grid-cols-[36px,1.2fr,0.9fr,0.75fr,0.85fr,1.15fr,0.55fr,1.2fr,0.55fr]">
                  <div />
                  <div>Release version / surfaces</div>
                  <div>Status</div>
                  <div>Deploy date</div>
                  <div>Source kind</div>
                  <div>Source repository</div>
                  <div>Issue count</div>
                  <div>Deployment comment</div>
                  <div>Jira linked</div>
                </div>
              </div>
              {effectiveReleased.map((release) => renderListRow(release, release.status === "candidate"))}
            </>
          ) : (
            <div className="space-y-4">{effectiveReleased.map((release) => renderDetailedCard(release, release.status === "candidate"))}</div>
          )}
        </section>

        <section className="space-y-3">
          <div className="text-xl font-semibold text-slate-900">Unreleased</div>
          {viewMode === "list" ? unreleased.map((release) => renderListRow(release)) : <div className="space-y-4">{unreleased.map((release) => renderDetailedCard(release))}</div>}
        </section>

        {status ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{status}</div> : null}
        {error ? <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div> : null}

        {showPushModal ? (
          <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/40 p-4">
            <div className="w-full max-w-5xl rounded-3xl bg-white p-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Push to Jira</h3>
                  <p className="mt-2 text-sm text-slate-600">The built-in release classifier reviewed the selected deploy rows against existing Jira issues and prepared editable suggestions.</p>
                </div>
                <button onClick={() => setShowPushModal(false)} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Close</button>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                <input value={jiraUrl} onChange={(e) => setJiraUrl(e.target.value)} placeholder="https://example.atlassian.net" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
                <input value={jiraProjectKey} onChange={(e) => setJiraProjectKey(e.target.value.toUpperCase())} placeholder="Project key" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
                <input value={jiraEmail} onChange={(e) => setJiraEmail(e.target.value)} placeholder="Jira email" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
                <input value={jiraToken} onChange={(e) => setJiraToken(e.target.value)} type="password" placeholder="Jira API token" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
              </div>

              {pushInfo ? <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">Analyzed releases: {pushInfo.analyzedReleases ?? 0} · Existing Jira issues reviewed: {pushInfo.matchedIssues ?? 0}</div> : null}

              <div className="mt-5 space-y-4">
                {pushDrafts.map((draft, index) => (
                  <div key={draft.releaseId} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="font-medium text-slate-900">{draft.releaseVersion}</div>
                        {draft.rationale ? <div className="mt-1 text-sm text-slate-500">{draft.rationale}</div> : null}
                      </div>
                      <div className="text-xs text-slate-500">{draft.existingSimilar?.map((item) => item.key).join(", ") || "No strong existing match"}</div>
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                      <input value={draft.summary} onChange={(e) => setPushDrafts((current) => current.map((item, idx) => idx === index ? { ...item, summary: e.target.value } : item))} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm md:col-span-2" />
                      <input value={draft.issueType} onChange={(e) => setPushDrafts((current) => current.map((item, idx) => idx === index ? { ...item, issueType: e.target.value } : item))} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
                      <input value={draft.parentKey ?? ""} onChange={(e) => setPushDrafts((current) => current.map((item, idx) => idx === index ? { ...item, parentKey: e.target.value } : item))} placeholder="Parent key (optional)" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
                    </div>
                    <textarea value={draft.description} onChange={(e) => setPushDrafts((current) => current.map((item, idx) => idx === index ? { ...item, description: e.target.value } : item))} rows={6} className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
                    <input value={draft.labels.join(", ")} onChange={(e) => setPushDrafts((current) => current.map((item, idx) => idx === index ? { ...item, labels: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) } : item))} className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
                  </div>
                ))}
              </div>

              <div className="mt-5 flex justify-end gap-3">
                <button onClick={() => setShowPushModal(false)} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Cancel</button>
                <button onClick={handlePushApply} disabled={pushApplying} className="rounded-2xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50">{pushApplying ? "Applying..." : "Apply"}</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </AppShell>
  );

  function exportCurrentProjectCsv() {
    const csv = releaseRowsCsv([...effectiveReleased, ...unreleased]);
    download(`${project.slug}-releases.csv`, csv, "text/csv;charset=utf-8");
    setStatus(`CSV exported with ${effectiveReleased.length + unreleased.length} release row(s).`);
    setError("");
  }
}
