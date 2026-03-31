"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge, SurfaceBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";
import { readProjectSettings } from "@/lib/project-overrides";

type PushDraft = {
  id: string;
  releaseId: string;
  sourceReleaseVersion: string;
  summary: string;
  description: string;
  labels: string[];
  issueType: string;
  parentKey?: string;
  suggestedParent?: string;
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
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function releaseCsv(project: any) {
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

  const rows = project.releases.map((release: any) => [
    release.version,
    release.releaseState ?? "released",
    release.status ?? "old",
    release.surfaces.join("|"),
    release.shippedAt,
    release.source?.kind ?? "unknown",
    formatSourceLabel(release.source),
    String(release.jiraLinks.length),
    release.deploymentComment ?? "",
    release.releaseNotes ?? "",
    release.changelog?.title ?? "",
    release.jiraLinks.length ? "Yes" : "No",
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

function toneForStatus(status?: string) {
  if (status === "current") return "success";
  if (status === "unreleased") return "info";
  return "neutral";
}

function changelogSnippet(release: any) {
  if (!release.changelog) return "No changelog excerpt captured for this release.";
  const sectionLines = release.changelog.sections.flatMap((section: any) => [
    section.heading,
    ...section.bullets,
    ...section.prose,
  ]);
  return [release.changelog.title, ...sectionLines].filter(Boolean).join(" • ");
}

export default function ReleasesPage({ params }: { params: { projectId: string } }) {
  const router = useRouter();
  const { project } = useProjectRecord(params.projectId);

  const [viewMode, setViewMode] = useState<"list" | "detailed">("list");
  const [selectedReleaseIds, setSelectedReleaseIds] = useState<string[]>([]);
  const [pushDrafts, setPushDrafts] = useState<PushDraft[]>([]);
  const [pushPreviewInfo, setPushPreviewInfo] = useState<{ matchedIssues?: number; analyzedReleases?: number } | null>(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isPreviewingPush, setIsPreviewingPush] = useState(false);
  const [isApplyingPush, setIsApplyingPush] = useState(false);

  if (!project) {
    return (
      <AppShell projectId={params.projectId}>
        <div className="card p-6">Project not found.</div>
      </AppShell>
    );
  }

  const released = project.releases.filter((release: any) => release.status !== "unreleased");
  const unreleased = project.releases.filter((release: any) => release.status === "unreleased");
  const grouped = [
    { title: "Released", items: released },
    { title: "Unreleased", items: unreleased },
  ];

  const selectedReleases = useMemo(
    () => project.releases.filter((release: any) => selectedReleaseIds.includes(release.id)),
    [project.releases, selectedReleaseIds]
  );

  function toggleReleaseSelection(releaseId: string) {
    setSelectedReleaseIds((current) =>
      current.includes(releaseId) ? current.filter((id) => id !== releaseId) : [...current, releaseId]
    );
  }

  function openRelease(releaseId: string) {
    router.push(`/projects/${project.id}/releases/${releaseId}`);
  }

  function exportCurrentProjectCsv() {
    setError("");
    setStatus("");
    const csv = releaseCsv(project);
    const rowCount = project.releases.length;
    download(`${project.slug}-releases.csv`, csv, "text/csv;charset=utf-8");
    setStatus(`CSV exported with ${rowCount} release row(s).`);
  }

  async function previewPushToJira() {
    setError("");
    setStatus("");
    setIsPreviewingPush(true);
    try {
      const settings = readProjectSettings(project.id);
      if (!settings.jiraUrl || !settings.jiraEmail || !settings.jiraToken || !(settings.jiraProjectKey || project.jiraProjectKey)) {
        throw new Error("Jira settings are missing. Save Jira URL, email, token and project key first.");
      }

      const releasePayload = selectedReleases.map((release: any) => ({
        id: release.id,
        version: release.version,
        shippedAt: release.shippedAt,
        releaseNotes: release.releaseNotes,
        deploymentComment: release.deploymentComment,
        surfaces: release.surfaces,
        integrationsChanged: release.integrationsChanged,
        backendChanged: release.backendChanged,
        sharedContractChanged: release.sharedContractChanged,
        schemaChanged: release.schemaChanged,
        changelog: release.changelog,
        deliveredCapabilities: release.deliveredCapabilities
          .map((capabilityId: string) => project.capabilities.find((capability: any) => capability.id === capabilityId))
          .filter(Boolean),
        jiraLinks: release.jiraLinks,
      }));

      const res = await fetch("/api/jira/push-preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jiraUrl: settings.jiraUrl,
          jiraEmail: settings.jiraEmail,
          jiraToken: settings.jiraToken,
          projectKey: settings.jiraProjectKey || project.jiraProjectKey,
          projectName: project.name,
          importedJiraIssues: project.importedJiraIssues ?? [],
          releases: releasePayload,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Push-to-Jira preview failed.");

      setPushDrafts(data.drafts ?? []);
      setPushPreviewInfo({
        matchedIssues: data.matchedIssues ?? 0,
        analyzedReleases: data.analyzedReleases ?? selectedReleases.length,
      });
      setStatus(`Push-to-Jira preview generated for ${selectedReleases.length} release row(s).`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Push-to-Jira preview failed.");
    } finally {
      setIsPreviewingPush(false);
    }
  }

  async function applyPushToJira() {
    setError("");
    setStatus("");
    setIsApplyingPush(true);
    try {
      const settings = readProjectSettings(project.id);
      if (!settings.jiraUrl || !settings.jiraEmail || !settings.jiraToken || !(settings.jiraProjectKey || project.jiraProjectKey)) {
        throw new Error("Jira settings are missing. Save Jira URL, email, token and project key first.");
      }
      const res = await fetch("/api/jira/push-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jiraUrl: settings.jiraUrl,
          jiraEmail: settings.jiraEmail,
          jiraToken: settings.jiraToken,
          projectKey: settings.jiraProjectKey || project.jiraProjectKey,
          drafts: pushDrafts,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Push-to-Jira apply failed.");
      const createdKeys = (data.created ?? []).map((item: any) => item.key).filter(Boolean);
      setStatus(
        createdKeys.length
          ? `Created Jira issue(s): ${createdKeys.join(", ")}`
          : "Push-to-Jira finished, but no issue keys were returned."
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Push-to-Jira apply failed.");
    } finally {
      setIsApplyingPush(false);
    }
  }

  function updateDraft(index: number, field: keyof PushDraft, value: string | string[]) {
    setPushDrafts((current) =>
      current.map((draft, idx) => {
        if (idx !== index) return draft;
        return { ...draft, [field]: value };
      })
    );
  }

  function renderListRow(release: any) {
    return (
      <div
        key={release.id}
        className={`grid min-w-[1120px] cursor-pointer gap-4 rounded-2xl border p-4 transition hover:border-slate-300 hover:bg-slate-50 xl:grid-cols-[48px,1.35fr,0.7fr,0.8fr,0.8fr,1fr,0.5fr,1.15fr,0.5fr] ${
          selectedReleaseIds.includes(release.id) ? "border-brand-300 bg-brand-50/40" : "border-slate-200 bg-white"
        }`}
        onClick={() => openRelease(release.id)}
      >
        <div className="flex items-start justify-center pt-1">
          <input
            type="checkbox"
            checked={selectedReleaseIds.includes(release.id)}
            onChange={() => toggleReleaseSelection(release.id)}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{release.version}</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {release.surfaces.map((surface: string) => (
              <SurfaceBadge key={surface} surface={surface} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Status</div>
          <div className="mt-2">
            <StatusBadge tone={toneForStatus(release.status)}>{release.status ?? "old"}</StatusBadge>
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Deploy date</div>
          <div className="mt-2 text-sm text-slate-700">{release.shippedAt}</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Source kind</div>
          <div className="mt-2 text-sm text-slate-700">{release.source?.kind ?? "unknown"}</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Source repository</div>
          <div className="mt-2 text-sm text-slate-700">{formatSourceLabel(release.source)}</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Issue count</div>
          <div className="mt-2 text-sm text-slate-700">{release.jiraLinks.length}</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Deployment comment</div>
          <div className="mt-2 line-clamp-3 text-sm text-slate-700">
            {release.deploymentComment ?? release.releaseNotes}
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Jira linked</div>
          <div className="mt-2 text-sm text-slate-700">{release.jiraLinks.length ? "Yes" : "No"}</div>
        </div>
      </div>
    );
  }

  function renderDetailedCard(release: any) {
    return (
      <div
        key={release.id}
        className={`card cursor-pointer p-6 transition hover:border-slate-300 hover:bg-slate-50 ${
          selectedReleaseIds.includes(release.id) ? "border-brand-300 bg-brand-50/40" : ""
        }`}
        onClick={() => openRelease(release.id)}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-lg font-semibold text-slate-900">{release.version}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {release.surfaces.map((surface: string) => (
                <SurfaceBadge key={surface} surface={surface} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selectedReleaseIds.includes(release.id)}
              onChange={() => toggleReleaseSelection(release.id)}
              onClick={(event) => event.stopPropagation()}
            />
            <StatusBadge tone={toneForStatus(release.status)}>{release.status ?? "old"}</StatusBadge>
          </div>
        </div>
        <div className="mt-5 grid gap-6 xl:grid-cols-[1fr,1fr]">
          <div className="space-y-3 text-sm text-slate-700">
            <div><span className="font-medium text-slate-900">Deploy date:</span> {release.shippedAt}</div>
            <div><span className="font-medium text-slate-900">Source:</span> {formatSourceLabel(release.source)}</div>
            <div><span className="font-medium text-slate-900">Deployment comment:</span> {release.deploymentComment ?? "—"}</div>
            <div><span className="font-medium text-slate-900">Release notes:</span> {release.releaseNotes}</div>
          </div>
          <div className="space-y-3 text-sm text-slate-700">
            <div><span className="font-medium text-slate-900">CHANGELOG excerpt:</span></div>
            <div className="rounded-2xl bg-slate-50 p-4 text-slate-600">{changelogSnippet(release)}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AppShell projectId={project.id} projectName={project.name}>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Release center"
          title={`${project.name} releases`}
          description="Default view is a compact release list. Switch to Detailed view to inspect the captured CHANGELOG excerpt and deployment comment inline before opening the full release detail page."
          actions={
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setViewMode("list")}
                className={`rounded-2xl px-4 py-2 text-sm font-medium ${
                  viewMode === "list" ? "bg-slate-900 text-white" : "border border-slate-200 text-slate-700"
                }`}
              >
                List view
              </button>
              <button
                onClick={() => setViewMode("detailed")}
                className={`rounded-2xl px-4 py-2 text-sm font-medium ${
                  viewMode === "detailed" ? "bg-slate-900 text-white" : "border border-slate-200 text-slate-700"
                }`}
              >
                Detailed view
              </button>
              <button
                onClick={exportCurrentProjectCsv}
                className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Download CSV
              </button>
              <button
                onClick={previewPushToJira}
                disabled={!selectedReleaseIds.length || isPreviewingPush}
                className="rounded-2xl bg-brand-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 hover:bg-brand-700"
              >
                {isPreviewingPush ? "Preparing..." : "Push to Jira"}
              </button>
            </div>
          }
        />

        {grouped.map((group) => (
          <section key={group.title} className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
              <div className="text-sm text-slate-500">{group.items.length} row(s)</div>
            </div>

            {!group.items.length ? (
              <div className="card p-6 text-sm text-slate-600">
                {group.title === "Released" ? "No released versions yet." : "No unreleased groups tracked."}
              </div>
            ) : viewMode === "list" ? (
              <div className="overflow-x-auto">
                <div className="min-w-[1120px] space-y-3">
                  <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 xl:grid-cols-[48px,1.35fr,0.7fr,0.8fr,0.8fr,1fr,0.5fr,1.15fr,0.5fr]">
                    <div />
                    <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Release version / surfaces</div>
                    <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Status</div>
                    <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Deploy date</div>
                    <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Source kind</div>
                    <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Source repository</div>
                    <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Issue count</div>
                    <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Deployment comment</div>
                    <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Jira linked</div>
                  </div>
                  {group.items.map((release: any) => renderListRow(release))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">{group.items.map((release: any) => renderDetailedCard(release))}</div>
            )}
          </section>
        ))}

        {pushDrafts.length ? (
          <section className="card p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Push to Jira preview</h3>
                <p className="mt-2 text-sm text-slate-600">
                  The built-in classifier compares selected releases with the already reachable Jira issues, suggests a parent, labels and issue type, then lets you edit everything before apply.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Analysed releases: <span className="font-semibold text-slate-900">{pushPreviewInfo?.analyzedReleases ?? selectedReleaseIds.length}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Matched Jira issues: <span className="font-semibold text-slate-900">{pushPreviewInfo?.matchedIssues ?? 0}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {pushDrafts.map((draft, index) => (
                <div key={draft.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <div className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {draft.sourceReleaseVersion}
                    </div>
                    {draft.suggestedParent ? (
                      <div className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-600">
                        Suggested parent: {draft.suggestedParent}
                      </div>
                    ) : null}
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <input
                      value={draft.summary}
                      onChange={(e) => updateDraft(index, "summary", e.target.value)}
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                      placeholder="Summary"
                    />
                    <input
                      value={draft.parentKey ?? ""}
                      onChange={(e) => updateDraft(index, "parentKey", e.target.value.toUpperCase())}
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                      placeholder="Parent key (editable)"
                    />
                    <input
                      value={draft.issueType}
                      onChange={(e) => updateDraft(index, "issueType", e.target.value)}
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                      placeholder="Issue type"
                    />
                    <input
                      value={draft.labels.join(", ")}
                      onChange={(e) =>
                        updateDraft(
                          index,
                          "labels",
                          e.target.value.split(",").map((label) => label.trim()).filter(Boolean)
                        )
                      }
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                      placeholder="Labels separated by commas"
                    />
                  </div>

                  <textarea
                    value={draft.description}
                    onChange={(e) => updateDraft(index, "description", e.target.value)}
                    className="mt-3 min-h-[180px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                  />

                  {draft.rationale ? (
                    <div className="mt-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                      <span className="font-medium text-slate-900">Classifier rationale:</span> {draft.rationale}
                    </div>
                  ) : null}

                  {draft.existingSimilar?.length ? (
                    <div className="mt-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                      <div className="font-medium text-slate-900">Closest existing Jira matches</div>
                      <div className="mt-2 space-y-2">
                        {draft.existingSimilar.map((item) => (
                          <div key={item.key}>
                            <span className="font-medium text-brand-700">{item.key}</span> — {item.summary}
                            {item.issueType ? ` (${item.issueType})` : ""}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={applyPushToJira}
                disabled={isApplyingPush}
                className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 hover:bg-emerald-700"
              >
                {isApplyingPush ? "Applying..." : "Apply push to Jira"}
              </button>
            </div>
          </section>
        ) : null}

        {error ? <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div> : null}
        {status ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{status}</div> : null}
      </div>
    </AppShell>
  );
}
