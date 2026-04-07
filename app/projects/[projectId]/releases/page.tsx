"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { useProjectRecord } from "@/hooks/useProjectRecord";
import { summarizeBackfill } from "@/lib/backfill";
import { addReleaseCandidate, approveReleaseCandidate, readProjectOverride, readProjectSettings, writeProjectOverride } from "@/lib/project-overrides";
import { ReleaseItem } from "@/lib/types";

type PushDraft = {
  releaseId: string;
  version: string;
  summary: string;
  description: string;
  issueType: string;
  parentKey: string;
  labels: string[];
  rationale?: string;
};

function download(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function csvEscape(value: unknown) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function toTimestamp(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString().replace("T", " ").slice(0, 16);
}

function formatPlatform(surfaces: string[]) {
  const map: Record<string, string> = { web: "Web", "mobile-android": "Android", "mobile-ios": "iOS", backend: "BE", "shared-contract": "Contract" };
  return surfaces.map((surface) => map[surface] ?? surface).join(" / ");
}

function formatSourceKind(release: ReleaseItem) {
  if (release.source?.kind === "github") return "Repo";
  if (["manual", "uploaded-snapshot", "markdown-import", "jira-import"].includes(release.source?.kind ?? "")) return "User";
  return release.source?.kind ?? "Repo";
}

function formatSourceDetail(release: ReleaseItem) {
  if (release.source?.owner && release.source?.repository) return `${release.source.owner}/${release.source.repository}`;
  return release.source?.label ?? release.source?.repository ?? release.source?.url ?? "—";
}

function formatLifeStatus(release: ReleaseItem) {
  if (release.status === "current") return "Live";
  if (release.status === "unreleased") return "Planned";
  if (release.status === "candidate") return "Candidate";
  return "Old";
}

function formatTicketLabel(release: ReleaseItem) {
  if (!release.jiraLinks?.length) return "—";
  const visible = release.jiraLinks.slice(0, 2).map((link) => link.key);
  return release.jiraLinks.length > 2 ? `${visible.join(", ")} +${release.jiraLinks.length - 2}` : visible.join(", ");
}

function formatJiraStatus(release: ReleaseItem) {
  if (!release.jiraLinks?.length) return "Not linked";
  return Array.from(new Set(release.jiraLinks.map((link) => link.status).filter(Boolean))).join(", ") || "Linked";
}

function formatReleaseDescription(release: ReleaseItem) {
  return release.deploymentComment ?? release.releaseNotes ?? release.changelog?.title ?? "No deployment comment recorded.";
}

export default function ReleasesPage({ params }: { params: { projectId: string } }) {
  const { project, refresh } = useProjectRecord(params.projectId);
  const [viewMode, setViewMode] = useState<"list" | "detailed">("list");
  const [selected, setSelected] = useState<string[]>([]);
  const [expandedReleaseId, setExpandedReleaseId] = useState<string | null>(null);
  const [pushPreview, setPushPreview] = useState<PushDraft[]>([]);
  const [showPushPreview, setShowPushPreview] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const releases = useMemo(() => [...(project?.releases ?? [])].sort((a, b) => String(b.shippedAt).localeCompare(String(a.shippedAt))), [project]);
  const deployed = useMemo(() => releases.filter((release) => release.status !== "unreleased"), [releases]);
  const unreleased = useMemo(() => releases.filter((release) => release.status === "unreleased"), [releases]);
  const jiraLessReleases = useMemo(() => releases.filter((release) => !(release.jiraLinks ?? []).some((jira) => jira.key?.trim())), [releases]);
  const backfill = useMemo(() => (project ? summarizeBackfill(project) : { unresolved: [], resolved: [], csvRows: [] }), [project]);
  const releaseCandidates = useMemo(() => project?.releaseCandidates ?? [], [project]);
  const selectedReleases = useMemo(() => jiraLessReleases.filter((release) => selected.includes(release.id)), [jiraLessReleases, selected]);
  const latestReleaseDate = useMemo(() => {
    const shippedDates = releases.map((release) => release.shippedAt).filter(Boolean).sort();
    return shippedDates.length ? shippedDates[shippedDates.length - 1] : undefined;
  }, [releases]);

  useEffect(() => {
    if (!project) return;
    const settings = readProjectSettings(project.id);
    if (!settings?.repoUrl) return;
    let cancelled = false;

    const runDetection = async () => {
      try {
        const res = await fetch("/api/release-detection", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ repoUrl: settings.repoUrl, githubToken: settings.githubToken || "", latestReleaseDate }),
        });
        const data = await res.json();
        if (!res.ok || !data?.candidate || cancelled) return;
        const existsInCandidates = (project.releaseCandidates ?? []).some((item) => item.id === data.candidate.id || item.version === data.candidate.version);
        const existsInReleases = (project.releases ?? []).some((item) => item.version === data.candidate.version);
        if (!existsInCandidates && !existsInReleases) {
          addReleaseCandidate(project.id, data.candidate);
          refresh();
        }
      } catch {
        // passive polling only
      }
    };

    void runDetection();
    const timer = window.setInterval(() => void runDetection(), 90000);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [project?.id, project?.releaseCandidates, project?.releases, latestReleaseDate, refresh]);

  if (!project) return <AppShell projectId={params.projectId}><div className="rounded-[28px] bg-white p-6 shadow-sm">Project not found.</div></AppShell>;

  const toggle = (id: string) => setSelected((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));

  const exportCsv = () => {
    const header = ["Summary", "Issue Type", "Description", "Labels", "Parent key"];
    const backfillRows = backfill.csvRows.map((row) => [row.summary, row.issueType, row.description, row.labels, row.parent]);
    const releaseRows = jiraLessReleases.map((release) => [`${project.name} ${release.version}`, "Story", [`Release: ${release.version}`, `Platform: ${formatPlatform(release.surfaces)}`, `Status: ${formatLifeStatus(release)}`, `Timestamp: ${release.shippedAt}`, `Deployment comment: ${formatReleaseDescription(release)}`].join("\n\n"), ["releasegovernance", `project:${project.slug}`, `release:${String(release.version).toLowerCase()}`].join(" "), project.jiraProjectKey ? `${project.jiraProjectKey}-1` : ""]);
    const rows = backfillRows.length ? backfillRows : releaseRows;
    const csv = [header, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n");
    download(`${project.slug}-jira-backfill.csv`, csv, "text/csv;charset=utf-8");
    setStatus(`Exported ${rows.length} Jira-compatible CSV row(s).`);
    setError("");
  };

  const pushToJiraPreview = async () => {
    setError("");
    setStatus("");
    const settings = readProjectSettings(project.id);
    if (!settings?.jiraUrl || !settings?.jiraEmail || !settings?.jiraToken) {
      setError("Jira settings are missing. Save Jira URL, email and token first in Import.");
      return;
    }
    if (!selectedReleases.length) {
      setError("Select at least one release row without Jira linkage first.");
      return;
    }
    try {
      const res = await fetch("/api/jira/push-preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jiraUrl: settings.jiraUrl, email: settings.jiraEmail, apiToken: settings.jiraToken, projectKey: settings.jiraProjectKey || project.jiraProjectKey || "", releases: selectedReleases, existingIssues: project.importedJiraIssues ?? [] }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Push to Jira preview failed.");
      setPushPreview(data.drafts ?? []);
      setShowPushPreview(true);
      setStatus(`Prepared ${data.drafts?.length ?? 0} Jira draft row(s) from ${data.usedIssueCount ?? 0} current Jira issue(s).`);
    } catch (e: any) {
      setError(e?.message || "Push to Jira preview failed.");
    }
  };

  const applyPushToJira = async () => {
    setError("");
    setStatus("");
    const settings = readProjectSettings(project.id);
    if (!settings?.jiraUrl || !settings?.jiraEmail || !settings?.jiraToken) {
      setError("Jira settings are missing.");
      return;
    }
    try {
      const res = await fetch("/api/jira/push-apply", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ jiraUrl: settings.jiraUrl, email: settings.jiraEmail, apiToken: settings.jiraToken, projectKey: settings.jiraProjectKey || project.jiraProjectKey || "", drafts: pushPreview }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Push to Jira apply failed.");
      const created = data.created ?? [];
      const linkedIds = new Set(pushPreview.map((draft) => draft.releaseId));
      const updatedReleases = (project.releases ?? []).map((release) => {
        if (!linkedIds.has(release.id)) return release;
        const hit = created.find((item: any) => item.releaseId === release.id);
        if (!hit) return release;
        return { ...release, jiraLinks: [...(release.jiraLinks ?? []), { key: hit.key, summary: hit.summary, status: "Created", url: hit.url }] };
      });
      const currentOverride = readProjectOverride(project.id);
      writeProjectOverride(project.id, { ...currentOverride, releases: updatedReleases });
      refresh();
      setStatus(`Created ${created.length} Jira issue(s).`);
      setShowPushPreview(false);
      setSelected([]);
    } catch (e: any) {
      setError(e?.message || "Push to Jira apply failed.");
    }
  };

  const handleApproveCandidate = (candidateId: string) => {
    approveReleaseCandidate(project.id, candidateId);
    refresh();
    setStatus("Release candidate approved and added to governed releases.");
    setError("");
  };

  const renderExpandedPanel = (release: ReleaseItem) => (
    <div className="border-t border-slate-200 bg-slate-50/70 px-4 py-4 md:px-5">
      <div className="grid gap-4 xl:grid-cols-[1fr,0.9fr]">
        <div className="space-y-4">
          <div className="rounded-[24px] border border-slate-200 bg-white p-4"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Deployment comment</div><div className="mt-3 text-sm leading-7 text-slate-700">{release.deploymentComment ?? release.releaseNotes ?? "No deployment comment recorded."}</div></div>
          <div className="rounded-[24px] border border-slate-200 bg-white p-4"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Changelog content</div><div className="mt-3 text-base font-semibold text-slate-950">{release.changelog?.title ?? "Release notes"}</div><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">{(release.changelog?.excerpt?.length ? release.changelog.excerpt : [release.releaseNotes]).map((line, index) => <li key={`${release.id}-line-${index}`}>{line}</li>)}</ul></div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[24px] border border-slate-200 bg-white p-4"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Mapped Jira issues</div><div className="mt-3 space-y-3">{release.jiraLinks?.length ? release.jiraLinks.map((jira) => <a key={jira.key} href={jira.url} target="_blank" rel="noreferrer" className="block rounded-2xl border border-slate-200 p-3 text-sm text-slate-700 hover:bg-slate-50"><div className="font-semibold text-slate-950">{jira.key}</div><div className="mt-1">{jira.summary}</div><div className="mt-1 text-xs text-slate-500">Status: {jira.status}</div></a>) : <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-500">No Jira link is attached yet for this row.</div>}</div></div>
          <div className="flex flex-wrap gap-3"><Link href={`/projects/${project.id}/releases/${release.id}`} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">Open full detail</Link>{!release.jiraLinks?.length ? <button type="button" onClick={() => toggle(release.id)} className={`rounded-full px-4 py-2 text-sm font-medium ${selected.includes(release.id) ? "bg-brand-600 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"}`}>{selected.includes(release.id) ? "Selected for Jira push" : "Select for Jira push"}</button> : null}</div>
        </div>
      </div>
    </div>
  );

  const renderListRow = (release: ReleaseItem) => {
    const isExpanded = expandedReleaseId === release.id;
    const isSelectable = !release.jiraLinks?.length;
    return (
      <div key={release.id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <button type="button" onClick={() => setExpandedReleaseId((current) => (current === release.id ? null : release.id))} className="block w-full text-left">
          <div className="px-4 py-4 md:hidden">
            <div className="flex items-start justify-between gap-3"><div><div className="text-lg font-semibold text-slate-950">{release.version}</div><div className="mt-1 text-sm text-slate-500">{formatPlatform(release.surfaces)}</div></div>{isSelectable ? <label className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700" onClick={(event) => event.stopPropagation()}><input type="checkbox" checked={selected.includes(release.id)} onChange={() => toggle(release.id)} />select</label> : <span className="badge badge-neutral">linked</span>}</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm"><div><div className="text-slate-500">Status</div><div className="mt-1 font-medium text-slate-950">{formatLifeStatus(release)}</div></div><div><div className="text-slate-500">Timestamp</div><div className="mt-1 font-medium text-slate-950">{toTimestamp(release.shippedAt)}</div></div><div><div className="text-slate-500">Source</div><div className="mt-1 font-medium text-slate-950">{formatSourceKind(release)}</div></div><div><div className="text-slate-500">Ticket #</div><div className="mt-1 font-medium text-slate-950">{formatTicketLabel(release)}</div></div><div className="col-span-2"><div className="text-slate-500">Deployment comment</div><div className="mt-1 line-clamp-2 font-medium text-slate-950">{formatReleaseDescription(release)}</div></div><div className="col-span-2"><div className="text-slate-500">Jira status</div><div className="mt-1 font-medium text-slate-950">{formatJiraStatus(release)}</div></div></div>
          </div>
          <div className="hidden md:grid md:grid-cols-[1.35fr_0.7fr_0.9fr_0.7fr_1fr_1.4fr_1fr] md:items-start md:gap-4 md:px-5 md:py-4"><div className="min-w-0"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><div className="truncate text-lg font-semibold text-slate-950">{release.version}</div><div className="mt-1 truncate text-sm text-slate-500">{formatPlatform(release.surfaces)}</div><div className="mt-2 truncate text-xs text-slate-400">{formatSourceDetail(release)}</div></div>{isSelectable ? <label className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700" onClick={(event) => event.stopPropagation()}><input type="checkbox" checked={selected.includes(release.id)} onChange={() => toggle(release.id)} />select</label> : null}</div></div><div className="text-sm"><div className="font-medium text-slate-950">{formatLifeStatus(release)}</div></div><div className="text-sm"><div className="font-medium text-slate-950">{toTimestamp(release.shippedAt)}</div></div><div className="text-sm"><div className="font-medium text-slate-950">{formatSourceKind(release)}</div></div><div className="text-sm"><div className="font-medium text-slate-950">{formatTicketLabel(release)}</div></div><div className="min-w-0 text-sm"><div className="line-clamp-2 font-medium text-slate-950">{formatReleaseDescription(release)}</div></div><div className="text-sm"><div className="font-medium text-slate-950">{formatJiraStatus(release)}</div></div></div>
        </button>
        {isExpanded ? renderExpandedPanel(release) : null}
      </div>
    );
  };

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <section className="rounded-[32px] bg-white p-6 shadow-sm md:p-8"><div className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-brand-700">Release center</div><h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">{project.name} releases</h1><p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">Dense release rows stay first. Click any row to expand changelog context, full deployment comments and mapped Jira issues without leaving the page.</p><div className="mt-6 flex flex-wrap items-center gap-3"><button onClick={() => setViewMode("list")} className={`rounded-full px-4 py-2 text-sm font-medium ${viewMode === "list" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}>Dense list</button><button onClick={() => setViewMode("detailed")} className={`rounded-full px-4 py-2 text-sm font-medium ${viewMode === "detailed" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}>Card view</button><button onClick={exportCsv} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">Download Jira CSV</button><button onClick={pushToJiraPreview} className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white">Push to Jira</button><span className="badge badge-neutral">{jiraLessReleases.length} without Jira ID</span></div></section>

        {releaseCandidates.length ? <section className="rounded-[32px] bg-white p-6 shadow-sm md:p-8"><div className="flex flex-wrap items-start justify-between gap-4"><div><h2 className="text-3xl font-semibold text-slate-950">Release candidates</h2><p className="mt-2 text-base text-slate-600">New GitHub commit or deploy candidates prepend here before they are approved into the governed release list.</p></div><div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">{releaseCandidates.length} detected</div></div><div className="mt-6 grid gap-4 lg:grid-cols-2">{releaseCandidates.map((candidate) => <div key={candidate.id} className="rounded-[28px] border border-slate-200 p-5"><div className="flex items-start justify-between gap-4"><div><div className="text-2xl font-semibold text-slate-950">{candidate.version}</div><div className="mt-2 text-sm text-slate-500">{formatPlatform(candidate.surfaces)}</div></div><button onClick={() => handleApproveCandidate(candidate.id)} className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white">Approve</button></div><div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-700"><div><div className="text-slate-500">Detected at</div><div className="mt-1 font-medium text-slate-950">{toTimestamp(candidate.detectedAt)}</div></div><div><div className="text-slate-500">Source</div><div className="mt-1 font-medium text-slate-950">{candidate.source.label ?? candidate.source.repository ?? "GitHub"}</div></div></div><div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700"><div className="font-medium text-slate-950">Deployment comment</div><div className="mt-2">{candidate.deploymentComment ?? candidate.releaseNotes ?? "No deployment comment recorded."}</div></div></div>)}</div></section> : null}

        {backfill.unresolved.length ? <section className="rounded-[32px] bg-white p-6 shadow-sm md:p-8"><div className="flex flex-wrap items-start justify-between gap-4"><div><h2 className="text-3xl font-semibold text-slate-950">Backfill candidates</h2><p className="mt-2 text-base text-slate-600">The CSV export prioritizes these unresolved rows before falling back to Jira-less releases.</p></div><div className="flex flex-wrap gap-3"><div className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">{backfill.unresolved.length} unresolved</div><button onClick={pushToJiraPreview} className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white">Push to Jira</button></div></div><div className="mt-6 grid gap-4 lg:grid-cols-2">{backfill.unresolved.map((candidate) => <div key={candidate.id} className="rounded-[28px] border border-slate-200 p-5"><div className="text-lg font-semibold text-slate-950">{candidate.summary}</div><div className="mt-2 text-sm leading-7 text-slate-600">{candidate.description}</div><div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700"><div><div className="text-slate-500">Issue type</div><div className="mt-1 font-medium text-slate-950">{candidate.issueType}</div></div><div><div className="text-slate-500">Parent</div><div className="mt-1 font-medium text-slate-950">{candidate.parent}</div></div></div></div>)}</div></section> : null}

        {showPushPreview ? <section className="rounded-[32px] bg-white p-6 shadow-sm md:p-8"><div className="flex items-start justify-between gap-4"><div><h2 className="text-3xl font-semibold text-slate-950">Push to Jira preview</h2><p className="mt-2 text-base text-slate-600">The draft is editable before apply. Parent, issue type, summary, description and labels can all be adjusted.</p></div><div className="flex gap-3"><button onClick={() => setShowPushPreview(false)} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Close</button><button onClick={applyPushToJira} className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white">Apply</button></div></div><div className="mt-6 space-y-4">{pushPreview.map((draft, index) => <div key={draft.releaseId} className="rounded-[28px] border border-slate-200 p-5"><div className="grid gap-4 md:grid-cols-2"><div><div className="text-sm text-slate-500">Release</div><div className="mt-1 text-lg font-semibold text-slate-950">{draft.version}</div></div><div><div className="text-sm text-slate-500">Issue type</div><input value={draft.issueType} onChange={(e) => setPushPreview((current) => current.map((item, i) => i === index ? { ...item, issueType: e.target.value } : item))} className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm" /></div><div className="md:col-span-2"><div className="text-sm text-slate-500">Summary</div><input value={draft.summary} onChange={(e) => setPushPreview((current) => current.map((item, i) => i === index ? { ...item, summary: e.target.value } : item))} className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm" /></div><div className="md:col-span-2"><div className="text-sm text-slate-500">Description</div><textarea value={draft.description} onChange={(e) => setPushPreview((current) => current.map((item, i) => i === index ? { ...item, description: e.target.value } : item))} rows={6} className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm" /></div><div><div className="text-sm text-slate-500">Parent key</div><input value={draft.parentKey} onChange={(e) => setPushPreview((current) => current.map((item, i) => i === index ? { ...item, parentKey: e.target.value } : item))} className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm" /></div><div><div className="text-sm text-slate-500">Labels</div><input value={draft.labels.join(",")} onChange={(e) => setPushPreview((current) => current.map((item, i) => i === index ? { ...item, labels: e.target.value.split(",").map((x) => x.trim()).filter(Boolean) } : item))} className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm" /></div></div>{draft.rationale ? <p className="mt-3 text-sm leading-7 text-slate-500">{draft.rationale}</p> : null}</div>)}</div></section> : null}

        {viewMode === "list" ? <div className="space-y-4"><div className="hidden rounded-[28px] border border-slate-200 bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 md:grid md:grid-cols-[1.35fr_0.7fr_0.9fr_0.7fr_1fr_1.4fr_1fr] md:gap-4"><div>Version / platform</div><div>Status</div><div>Timestamp</div><div>Source</div><div>Ticket #</div><div>Deployment comment</div><div>Jira status</div></div>{deployed.map((release) => renderListRow(release))}{unreleased.length ? <section className="space-y-4"><div className="rounded-[28px] bg-white p-5 shadow-sm"><div className="text-2xl font-semibold text-slate-950">Unreleased</div><p className="mt-2 text-base text-slate-600">Specified and imported items that are not yet deployed.</p></div>{unreleased.map((release) => renderListRow(release))}</section> : null}</div> : <div className="space-y-4">{releases.map((release) => <div key={release.id} className="rounded-[28px] bg-white p-6 shadow-sm"><div className="flex flex-wrap items-start justify-between gap-4"><div><div className="text-3xl font-semibold text-slate-950">{release.version}</div><div className="mt-2 text-sm text-slate-500">{formatPlatform(release.surfaces)}</div></div><div className="flex flex-wrap gap-2"><span className="badge badge-neutral">{formatLifeStatus(release)}</span><span className="badge badge-info">{formatSourceKind(release)}</span></div></div><div className="mt-5 grid gap-4 md:grid-cols-2"><div className="rounded-[24px] border border-slate-200 p-4"><div className="text-sm text-slate-500">Deployment comment</div><div className="mt-2 text-base leading-7 text-slate-800">{release.deploymentComment ?? "—"}</div></div><div className="rounded-[24px] border border-slate-200 p-4"><div className="text-sm text-slate-500">CHANGELOG excerpt</div><div className="mt-2 text-base leading-7 text-slate-800">{release.changelog?.title || release.releaseNotes || "No changelog excerpt available."}</div></div></div><div className="mt-4 flex flex-wrap gap-3"><Link href={`/projects/${project.id}/releases/${release.id}`} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">Open full detail</Link>{!release.jiraLinks?.length ? <button onClick={() => toggle(release.id)} className={`rounded-full px-4 py-2 text-sm font-medium ${selected.includes(release.id) ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700"}`}>{selected.includes(release.id) ? "Selected" : "Select for Jira push"}</button> : null}</div></div>)}</div>}

        {status ? <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{status}</div> : null}
        {error ? <div className="rounded-[28px] border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div> : null}
      </div>
    </AppShell>
  );
}
