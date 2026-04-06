"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { useProjectRecord } from "@/hooks/useProjectRecord";
import { summarizeBackfill } from "@/lib/backfill";
import { addReleaseCandidate, approveReleaseCandidate, readProjectSettings, writeProjectOverride } from "@/lib/project-overrides";

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

function formatSourceLabel(source?: { kind?: string; owner?: string; repository?: string; label?: string }) {
  if (!source) return "Unknown source";
  if (source.label) return source.label;
  if (source.owner && source.repository) return `${source.owner}/${source.repository}`;
  return source.kind ?? "unknown";
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

function csvEscape(value: unknown) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

export default function ReleasesPage({ params }: { params: { projectId: string } }) {
  const { project, refresh } = useProjectRecord(params.projectId);
  const [viewMode, setViewMode] = useState<"list" | "detailed">("list");
  const [selected, setSelected] = useState<string[]>([]);
  const [pushPreview, setPushPreview] = useState<PushDraft[]>([]);
  const [showPushPreview, setShowPushPreview] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const releases = useMemo(() => project?.releases ?? [], [project]);
  const deployed = useMemo(() => releases.filter((release: any) => release.status !== "unreleased"), [releases]);
  const unreleased = useMemo(() => releases.filter((release: any) => release.status === "unreleased"), [releases]);
  const jiraLessReleases = useMemo(() => releases.filter((release: any) => !release.jiraLinks?.length), [releases]);
  const backfill = useMemo(() => (project ? summarizeBackfill(project) : { unresolved: [], resolved: [], csvRows: [] }), [project]);
  const releaseCandidates = useMemo(() => project?.releaseCandidates ?? [], [project]);
  const selectedReleases = useMemo(() => jiraLessReleases.filter((release: any) => selected.includes(release.id)), [jiraLessReleases, selected]);
  const latestReleaseDate = useMemo(() => {
    const shippedDates = releases.map((release: any) => release.shippedAt).filter(Boolean).sort();
    return shippedDates.length ? shippedDates[shippedDates.length - 1] : undefined;
  }, [releases]);

  useEffect(() => {
    if (!project) return;
    const settings = readProjectSettings(project.id);
    if (!settings?.repoUrl || !settings?.githubToken || !settings?.hostingProvider || !settings?.hostingUrl) return;

    let cancelled = false;

    const run = async () => {
      try {
        const res = await fetch("/api/release-detection", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            projectId: project.id,
            projectSlug: project.slug ?? project.id,
            projectKey: settings.jiraProjectKey || project.jiraProjectKey || "",
            repoUrl: settings.repoUrl,
            githubToken: settings.githubToken,
            hostingProvider: settings.hostingProvider,
            hostingUrl: settings.hostingUrl,
            hostingApiKey: settings.hostingApiKey || "",
            latestReleaseDate,
          }),
        });

        const data = await res.json();
        if (!res.ok || !data?.candidate || cancelled) return;

        const existsInCandidates = (project.releaseCandidates ?? []).some((item: any) => item.version === data.candidate.version);
        const existsInReleases = (project.releases ?? []).some((item: any) => item.version === data.candidate.version);

        if (!existsInCandidates && !existsInReleases) {
          addReleaseCandidate(project.id, data.candidate);
          refresh();
        }
      } catch {
        // automatic detection stays silent
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [project?.id, project?.slug, project?.jiraProjectKey, project?.releaseCandidates, project?.releases, latestReleaseDate, refresh]);

  if (!project) {
    return (
      <AppShell projectId={params.projectId}>
        <div className="rounded-[28px] bg-white p-6 shadow-sm">Project not found.</div>
      </AppShell>
    );
  }

  const toggle = (id: string) => {
    setSelected((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  };

  const exportCsv = () => {
    const header = [
      "Summary",
      "Issue Type",
      "Description",
      "Labels",
      "Parent key",
    ];
    const backfillRows = backfill.csvRows.map((row) => [row.summary, row.issueType, row.description, row.labels, row.parent]);
    const releaseRows = jiraLessReleases.map((release: any) => [
      release.version,
      "Story",
      release.releaseNotes || release.deploymentComment || `${release.version} release import`,
      ["releasegovernance", `release:${release.version}`].join(" "),
      project.jiraProjectKey ? `${project.jiraProjectKey}-1` : "",
    ]);
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
      setError("Select at least one Jira-less release row first.");
      return;
    }

    try {
      const res = await fetch("/api/jira/push-preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jiraUrl: settings.jiraUrl,
          email: settings.jiraEmail,
          apiToken: settings.jiraToken,
          projectKey: settings.jiraProjectKey || project.jiraProjectKey || "",
          releases: selectedReleases,
          existingIssues: project.importedJiraIssues ?? [],
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Push to Jira preview failed.");
      setPushPreview(data.drafts ?? []);
      setShowPushPreview(true);
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
      const res = await fetch("/api/jira/push-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jiraUrl: settings.jiraUrl,
          email: settings.jiraEmail,
          apiToken: settings.jiraToken,
          projectKey: settings.jiraProjectKey || project.jiraProjectKey || "",
          drafts: pushPreview,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Push to Jira apply failed.");

      const created = data.created ?? [];
      const linkedIds = new Set(pushPreview.map((draft) => draft.releaseId));
      const updatedReleases = (project.releases ?? []).map((release: any) => {
        if (!linkedIds.has(release.id)) return release;
        const hit = created.find((item: any) => item.releaseId === release.id);
        if (!hit) return release;
        return {
          ...release,
          jiraLinks: [
            ...(release.jiraLinks ?? []),
            {
              key: hit.key,
              summary: hit.summary,
              status: "Created",
              url: hit.url,
            },
          ],
        };
      });

      writeProjectOverride(project.id, { releases: updatedReleases });
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

  const renderDesktopHeader = (
    <div className="hidden rounded-[28px] border border-slate-200 bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 md:grid md:grid-cols-[1.25fr_0.8fr_0.8fr_0.75fr_1.1fr_0.55fr_1.1fr_0.5fr]">
      <div>Release version / surfaces</div>
      <div>Status</div>
      <div>Deploy date</div>
      <div>Source kind</div>
      <div>Source repository</div>
      <div>Issue count</div>
      <div>Deployment comment</div>
      <div>Jira linked</div>
    </div>
  );

  const renderListRow = (release: any) => (
    <div key={release.id} className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-2xl font-semibold text-slate-950">{release.version}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {release.surfaces.map((surface: string) => (
              <span key={surface} className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
                {surface}
              </span>
            ))}
          </div>
        </div>
        {!release.jiraLinks?.length ? (
          <label className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm">
            <input type="checkbox" checked={selected.includes(release.id)} onChange={() => toggle(release.id)} />
            select
          </label>
        ) : null}
      </div>

      <Link href={`/projects/${project.id}/releases/${release.id}`} className="mt-5 block">
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 text-sm md:grid-cols-[1fr_1fr_1fr_1fr]">
          <div>
            <div className="text-slate-500">Status</div>
            <div className="mt-1 font-medium text-slate-950">{release.status}</div>
          </div>
          <div>
            <div className="text-slate-500">Deploy date</div>
            <div className="mt-1 font-medium text-slate-950">{release.shippedAt}</div>
          </div>
          <div>
            <div className="text-slate-500">Source kind</div>
            <div className="mt-1 font-medium text-slate-950">{release.source?.kind ?? "unknown"}</div>
          </div>
          <div>
            <div className="text-slate-500">Source repository</div>
            <div className="mt-1 break-words font-medium text-slate-950">{formatSourceLabel(release.source)}</div>
          </div>
          <div>
            <div className="text-slate-500">Issue count</div>
            <div className="mt-1 font-medium text-slate-950">{release.jiraLinks?.length ?? 0}</div>
          </div>
          <div>
            <div className="text-slate-500">Deployment comment</div>
            <div className="mt-1 break-words font-medium text-slate-950">{release.deploymentComment ?? release.releaseNotes ?? "—"}</div>
          </div>
          <div>
            <div className="text-slate-500">Jira linked</div>
            <div className="mt-1 font-medium text-slate-950">{release.jiraLinks?.length ? "Yes" : "No"}</div>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <section className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">
          <div className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-brand-700">
            Release center
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">{project.name} releases</h1>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            Each row represents a governed release record. Open a row to inspect functionality, Jira traceability and cross-platform impact.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button onClick={() => setViewMode("list")} className={`rounded-full px-4 py-2 text-sm font-medium ${viewMode === "list" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}>
              List view
            </button>
            <button onClick={() => setViewMode("detailed")} className={`rounded-full px-4 py-2 text-sm font-medium ${viewMode === "detailed" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}>
              Detailed view
            </button>
            <button onClick={exportCsv} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
              Download Jira CSV
            </button>
            <button onClick={pushToJiraPreview} className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white">
              Push to Jira
            </button>
          </div>
        </section>

        {releaseCandidates.length ? (
          <section className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-slate-950">Release candidates</h2>
                <p className="mt-2 text-base text-slate-600">Auto-detected deploys or commits appear here first and can be approved into the governed release list.</p>
              </div>
              <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">{releaseCandidates.length} detected</div>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {releaseCandidates.map((candidate: any) => (
                <div key={candidate.id} className="rounded-[28px] border border-slate-200 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-2xl font-semibold text-slate-950">{candidate.version}</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {(candidate.surfaces ?? []).map((surface: string) => (
                          <span key={surface} className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
                            {surface}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button onClick={() => handleApproveCandidate(candidate.id)} className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white">
                      Approve
                    </button>
                  </div>
                  <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                    <div>
                      <div className="text-slate-500">Detected at</div>
                      <div className="mt-1 font-medium text-slate-950">{candidate.detectedAt}</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Source</div>
                      <div className="mt-1 font-medium text-slate-950">{formatSourceLabel(candidate.source)}</div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                    <div className="font-medium text-slate-950">Deployment comment</div>
                    <div className="mt-2">{candidate.deploymentComment ?? candidate.releaseNotes ?? "No deployment comment recorded."}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {backfill.unresolved.length ? (
          <section className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-slate-950">Backfill candidates</h2>
                <p className="mt-2 text-base text-slate-600">These rows still need Jira backfill. The CSV export now prioritizes these unresolved candidates.</p>
              </div>
              <div className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">{backfill.unresolved.length} unresolved</div>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {backfill.unresolved.map((candidate: any) => (
                <div key={candidate.id} className="rounded-[28px] border border-slate-200 p-5">
                  <div className="text-lg font-semibold text-slate-950">{candidate.summary}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">{candidate.description}</div>
                  <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                    <div>
                      <div className="text-slate-500">Issue type</div>
                      <div className="mt-1 font-medium text-slate-950">{candidate.issueType}</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Parent</div>
                      <div className="mt-1 font-medium text-slate-950">{candidate.parent}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {showPushPreview ? (
          <section className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-slate-950">Push to Jira preview</h2>
                <p className="mt-2 text-base text-slate-600">
                  Review the generated Jira draft rows, adjust parent / summary / labels if needed, then apply.
                </p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowPushPreview(false)} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                  Close
                </button>
                <button onClick={applyPushToJira} className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white">
                  Apply
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {pushPreview.map((draft, index) => (
                <div key={draft.releaseId} className="rounded-[28px] border border-slate-200 p-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="text-sm text-slate-500">Release</div>
                      <div className="mt-1 text-lg font-semibold text-slate-950">{draft.version}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Issue type</div>
                      <input
                        value={draft.issueType}
                        onChange={(e) =>
                          setPushPreview((current) => current.map((item, i) => i === index ? { ...item, issueType: e.target.value } : item))
                        }
                        className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-slate-500">Summary</div>
                      <input
                        value={draft.summary}
                        onChange={(e) =>
                          setPushPreview((current) => current.map((item, i) => i === index ? { ...item, summary: e.target.value } : item))
                        }
                        className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-slate-500">Description</div>
                      <textarea
                        value={draft.description}
                        onChange={(e) =>
                          setPushPreview((current) => current.map((item, i) => i === index ? { ...item, description: e.target.value } : item))
                        }
                        rows={6}
                        className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Parent key</div>
                      <input
                        value={draft.parentKey}
                        onChange={(e) =>
                          setPushPreview((current) => current.map((item, i) => i === index ? { ...item, parentKey: e.target.value } : item))
                        }
                        className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Labels</div>
                      <input
                        value={draft.labels.join(",")}
                        onChange={(e) =>
                          setPushPreview((current) =>
                            current.map((item, i) =>
                              i === index ? { ...item, labels: e.target.value.split(",").map((x) => x.trim()).filter(Boolean) } : item
                            )
                          )
                        }
                        className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                  {draft.rationale ? <p className="mt-3 text-sm leading-7 text-slate-500">{draft.rationale}</p> : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {renderDesktopHeader}

        {viewMode === "list" ? (
          <div className="space-y-4">
            {deployed.map((release) => renderListRow(release))}
            {unreleased.length ? (
              <section className="space-y-4">
                <div className="rounded-[28px] bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold text-slate-950">Unreleased</div>
                  <p className="mt-2 text-base text-slate-600">Specified and imported items that are not yet deployed.</p>
                </div>
                {unreleased.map((release) => renderListRow(release))}
              </section>
            ) : null}
          </div>
        ) : (
          <div className="space-y-4">
            {releases.map((release) => (
              <Link key={release.id} href={`/projects/${project.id}/releases/${release.id}`} className="block rounded-[28px] bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl font-semibold text-slate-950">{release.version}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {release.surfaces.map((surface: string) => (
                        <span key={surface} className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
                          {surface}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">{release.status}</div>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[24px] border border-slate-200 p-4">
                    <div className="text-sm text-slate-500">Deployment comment</div>
                    <div className="mt-2 text-base leading-7 text-slate-800">{release.deploymentComment ?? "—"}</div>
                  </div>
                  <div className="rounded-[24px] border border-slate-200 p-4">
                    <div className="text-sm text-slate-500">CHANGELOG excerpt</div>
                    <div className="mt-2 text-base leading-7 text-slate-800">
                      {release.changelog?.title || release.releaseNotes || "No changelog excerpt available."}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {status ? <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{status}</div> : null}
        {error ? <div className="rounded-[28px] border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div> : null}
      </div>
    </AppShell>
  );
}
