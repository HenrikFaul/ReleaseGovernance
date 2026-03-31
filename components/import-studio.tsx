"use client";

import { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import { addReleaseCandidate, applyImportBundle, approveReleaseCandidate, readProjectSettings, writeProjectSettings } from "@/lib/project-overrides";
import { CANONICAL_COLUMNS, createTemplateWorkbook, parseImportFile, templateCsv, templateMarkdown } from "@/lib/import-utils";
import { ProjectImportBundle, ProjectIntegrationSettings, ReleaseCandidate } from "@/lib/types";
import { useProjectRecord } from "@/hooks/useProjectRecord";

function download(filename: string, content: BlobPart, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function formatDate(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString().slice(0, 10);
}

function checkTone(present: boolean) {
  return present ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-slate-50 border-slate-200 text-slate-600";
}

export function ImportStudio({ projectId }: { projectId: string }) {
  const { project: mergedProject, refresh } = useProjectRecord(projectId);
  const [bundle, setBundle] = useState<ProjectImportBundle | null>(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const [jiraUrl, setJiraUrl] = useState("");
  const [jiraEmail, setJiraEmail] = useState("");
  const [jiraToken, setJiraToken] = useState("");
  const [jiraProjectKey, setJiraProjectKey] = useState(mergedProject?.jiraProjectKey ?? "RLG");
  const [jiraPreviewLimit, setJiraPreviewLimit] = useState(10);
  const [jiraQueryAll, setJiraQueryAll] = useState(false);

  const [repoUrl, setRepoUrl] = useState("");
  const [githubToken, setGithubToken] = useState("");
  const [hostingProvider, setHostingProvider] = useState<"vercel" | "supabase" | "custom">("vercel");
  const [hostingUrl, setHostingUrl] = useState("");
  const [hostingApiKey, setHostingApiKey] = useState("");
  const [previewIssues, setPreviewIssues] = useState<any[]>([]);

  useEffect(() => {
    const settings = readProjectSettings(projectId);
    setJiraUrl(settings.jiraUrl ?? "");
    setJiraEmail(settings.jiraEmail ?? "");
    setJiraToken(settings.jiraToken ?? "");
    setJiraProjectKey(settings.jiraProjectKey ?? mergedProject?.jiraProjectKey ?? "RLG");
    setJiraPreviewLimit(settings.jiraPreviewLimit ?? 10);
    setJiraQueryAll(settings.jiraQueryAll ?? false);
    setRepoUrl(settings.repoUrl ?? mergedProject?.repositories.web ?? mergedProject?.repositories.android ?? "");
    setGithubToken(settings.githubToken ?? "");
    setHostingProvider(settings.hostingProvider ?? "vercel");
    setHostingUrl(settings.hostingUrl ?? (mergedProject?.domain ? `https://${mergedProject.domain}` : ""));
    setHostingApiKey(settings.hostingApiKey ?? "");
  }, [projectId, mergedProject?.jiraProjectKey, mergedProject?.repositories.web, mergedProject?.repositories.android, mergedProject?.domain]);

  const summary = useMemo(() => {
    if (!bundle) return null;
    return {
      releases: bundle.releases.length,
      unreleased: bundle.releases.filter((item) => item.releaseState === "unreleased").length,
      capabilities: bundle.capabilities.length,
      integrations: bundle.integrations.length,
      jira: bundle.importedJiraIssues.length,
    };
  }, [bundle]);

  async function onFile(file: File) {
    setError("");
    setStatus("");
    try {
      const parsed = await parseImportFile(file);
      setBundle(parsed);
      setStatus(`Parsed ${file.name} successfully.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import failed.");
    }
  }

  function saveSettings() {
    const settings: ProjectIntegrationSettings = { jiraUrl, jiraEmail, jiraToken, jiraProjectKey, jiraPreviewLimit, jiraQueryAll, repoUrl, githubToken, hostingProvider, hostingUrl, hostingApiKey };
    writeProjectSettings(projectId, settings);
    setStatus("Project-scoped Jira / GitHub / hosting settings saved.");
    setError("");
  }

  async function onJiraImport(testOnly: boolean) {
    setError("");
    setStatus("");
    try {
      const res = await fetch("/api/jira/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jiraUrl, email: jiraEmail, apiToken: jiraToken, projectKey: jiraProjectKey || mergedProject?.jiraProjectKey || "RLG", maxResults: jiraPreviewLimit, queryAll: jiraQueryAll }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Jira import failed.");
      setPreviewIssues(data.issues ?? []);
      if (testOnly) {
        setStatus(`Previewed ${data.issues?.length ?? 0} Jira issue(s) for ${data.diagnostics?.projectKey ?? jiraProjectKey}.`);
        return;
      }
      setBundle((current) => ({
        releases: current?.releases ?? [],
        capabilities: current?.capabilities ?? [],
        integrations: current?.integrations ?? [],
        importedJiraIssues: [...(current?.importedJiraIssues ?? []), ...(data.issues ?? [])],
      }));
      setStatus(`Imported ${data.issues?.length ?? 0} Jira issue(s). These will also appear in Capabilities as imported Jira capability candidates.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Jira import failed.");
    }
  }

  async function detectReleaseCandidate() {
    setError("");
    setStatus("");
    try {
      const res = await fetch("/api/release-detection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, projectSlug: mergedProject?.slug ?? projectId, projectKey: jiraProjectKey || mergedProject?.jiraProjectKey || "RLG", repoUrl, githubToken, hostingProvider, hostingUrl, hostingApiKey }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Release detection failed.");
      addReleaseCandidate(projectId, data.candidate as ReleaseCandidate);
      refresh();
      setStatus(`Fetched latest release candidate ${data.candidate.version}. Review required checks and approve when ready.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Release detection failed.");
    }
  }

  function apply() {
    if (!bundle) return;
    applyImportBundle(projectId, bundle);
    refresh();
    setStatus("Imported data applied to this project.");
  }

  function approve(candidateId: string) {
    approveReleaseCandidate(projectId, candidateId);
    refresh();
    setStatus("Release candidate approved and routed to the correct governance destination.");
  }

  function downloadXlsx() {
    const wb = createTemplateWorkbook();
    const buffer = XLSX.write(wb, { type: "array", bookType: "xlsx" });
    download("releasegovernance-import-template.xlsx", buffer, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  }

  return (
    <div className="space-y-6">
      <section className="card p-6">
        <h3 className="text-lg font-semibold text-slate-900">File import</h3>
        <p className="mt-2 text-sm text-slate-600">Import Markdown, CSV or Excel into the current project. New project bootstrap now lives on the workspace Projects page under Add a new project.</p>
        <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">Canonical fields: {CANONICAL_COLUMNS.join(", ")}</div>
        <div className="mt-4 flex flex-wrap gap-3">
          <label className="cursor-pointer rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Upload .md / .csv / .xlsx<input type="file" className="hidden" accept=".md,.markdown,.csv,.xlsx,.xls" onChange={(e) => { const file = e.target.files?.[0]; if (file) void onFile(file); }} /></label>
          <button onClick={() => download("releasegovernance-import-template.md", templateMarkdown, "text/markdown")} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Download MD template</button>
          <button onClick={() => download("releasegovernance-import-template.csv", templateCsv(), "text/csv")} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Download CSV template</button>
          <button onClick={downloadXlsx} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Download Excel template</button>
        </div>
      </section>

      <section className="card p-6 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Jira + release detection settings</h3>
            <p className="mt-2 text-sm text-slate-600">Use a base Jira URL + project key, an issue URL, a project URL or an issues/JQL URL. Release detection reads the latest GitHub commit, optional CHANGELOG.md entry, optional commit comment and hosting reachability into a candidate row.</p>
          </div>
          <button onClick={saveSettings} className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Save settings</button>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <input value={jiraUrl} onChange={(e) => setJiraUrl(e.target.value)} placeholder="https://example.atlassian.net or project/issue URL" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <input value={jiraProjectKey} onChange={(e) => setJiraProjectKey(e.target.value.toUpperCase())} placeholder="Project key (e.g. HOB / SYN / RLG)" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <input value={jiraEmail} onChange={(e) => setJiraEmail(e.target.value)} placeholder="Jira account email" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <input value={jiraToken} type="password" onChange={(e) => setJiraToken(e.target.value)} placeholder="Jira API token" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <input value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} placeholder="https://github.com/owner/repo or owner/repo" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <input value={githubToken} type="password" onChange={(e) => setGithubToken(e.target.value)} placeholder="GitHub API token" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <select value={hostingProvider} onChange={(e) => setHostingProvider(e.target.value as "vercel" | "supabase" | "custom")} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"><option value="vercel">Vercel</option><option value="supabase">Supabase</option><option value="custom">Custom</option></select>
          <input value={hostingUrl} onChange={(e) => setHostingUrl(e.target.value)} placeholder="https://your-hosting-endpoint" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <input value={hostingApiKey} type="password" onChange={(e) => setHostingApiKey(e.target.value)} placeholder="Hosting API key" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm md:col-span-2" />
        </div>
        <div className="grid gap-3 md:grid-cols-[1fr,160px,220px]">
          <div className="rounded-2xl border border-dashed border-slate-200 px-4 py-3 text-sm text-slate-600">Current project key: <span className="font-semibold text-slate-900">{jiraProjectKey || mergedProject?.jiraProjectKey || "RLG"}</span></div>
          <input type="number" min={1} max={100} value={jiraPreviewLimit} onChange={(e) => setJiraPreviewLimit(Number(e.target.value) || 10)} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700"><input type="checkbox" checked={jiraQueryAll} onChange={(e) => setJiraQueryAll(e.target.checked)} /> Query up to 100 project issues</label>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => onJiraImport(true)} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Test Jira query</button>
          <button onClick={() => onJiraImport(false)} className="rounded-2xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">Import from Jira</button>
          <button onClick={detectReleaseCandidate} className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">Fetch latest release candidate</button>
        </div>
      </section>

      {previewIssues.length ? (
        <section className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900">Jira preview</h3>
          <div className="mt-4 overflow-x-auto"><table className="min-w-full border-collapse text-left text-sm"><thead><tr className="border-b border-slate-200 text-slate-500"><th className="px-3 py-2 font-medium">Key</th><th className="px-3 py-2 font-medium">Summary</th><th className="px-3 py-2 font-medium">Status</th><th className="px-3 py-2 font-medium">Type</th><th className="px-3 py-2 font-medium">Created</th><th className="px-3 py-2 font-medium">Parent</th></tr></thead><tbody>{previewIssues.map((issue) => (<tr key={issue.key} className="border-b border-slate-100 align-top"><td className="px-3 py-3"><a href={issue.url} className="font-medium text-brand-700 hover:underline">{issue.key}</a></td><td className="px-3 py-3 text-slate-900">{issue.summary}</td><td className="px-3 py-3 text-slate-700">{issue.status ?? "—"}</td><td className="px-3 py-3 text-slate-700">{issue.issueType ?? "—"}</td><td className="px-3 py-3 text-slate-700">{formatDate(issue.created)}</td><td className="px-3 py-3 text-slate-700">{issue.parentKey ?? "—"}</td></tr>))}</tbody></table></div>
        </section>
      ) : null}

      {mergedProject?.releaseCandidates?.length ? (
        <section className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900">Detected release candidates</h3>
          <p className="mt-2 text-sm text-slate-600">Green rows contain the required field value. Approving moves the candidate either to Releases or to Jira CSV backfill, depending on whether Jira keys were detected.</p>
          <div className="mt-4 space-y-4">
            {mergedProject.releaseCandidates.map((candidate) => (
              <div key={candidate.id} className="rounded-2xl border border-slate-200 p-5">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-3"><button onClick={() => approve(candidate.id)} className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">Jóváhagy</button><div><div className="text-lg font-semibold text-slate-900">{candidate.version}</div><div className="mt-1 text-sm text-slate-600">{candidate.releaseNotes}</div><div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500">{candidate.surfaces.map((surface) => <span key={surface} className="badge badge-info">{surface}</span>)}<span className="badge badge-neutral">{candidate.hostingProvider}</span>{candidate.jiraKeys.length ? <span className="badge badge-neutral">Jira: {candidate.jiraKeys.join(", ")}</span> : <span className="badge badge-warning">No Jira detected</span>}</div></div></div><div className="text-sm text-slate-500">Detected {formatDate(candidate.detectedAt)}</div>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">{candidate.requiredChecks.map((check) => (<div key={check.key} className={`rounded-2xl border px-4 py-3 text-sm ${checkTone(check.present)}`}><div className="font-medium">{check.label}</div><div className="mt-1 break-all text-xs">{check.value ?? "missing"}</div></div>))}</div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {error ? <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div> : null}
      {status ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{status}</div> : null}

      {summary ? (
        <section className="card p-6">
          <div className="flex items-center justify-between"><h3 className="text-lg font-semibold text-slate-900">Import preview</h3><button onClick={apply} className="rounded-2xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">Apply import to project</button></div>
          <div className="mt-4 grid gap-4 md:grid-cols-5"><div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Releases</div><div className="mt-1 text-xl font-semibold text-slate-900">{summary.releases}</div></div><div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Unreleased</div><div className="mt-1 text-xl font-semibold text-slate-900">{summary.unreleased}</div></div><div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Capabilities</div><div className="mt-1 text-xl font-semibold text-slate-900">{summary.capabilities}</div></div><div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Integrations</div><div className="mt-1 text-xl font-semibold text-slate-900">{summary.integrations}</div></div><div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Jira items</div><div className="mt-1 text-xl font-semibold text-slate-900">{summary.jira}</div></div></div>
        </section>
      ) : null}
    </div>
  );
}
