
"use client";

import { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import { applyImportBundle } from "@/lib/project-overrides";
import { CANONICAL_COLUMNS, createTemplateWorkbook, parseImportFile, templateCsv, templateMarkdown } from "@/lib/import-utils";
import { ImportedJiraIssue, ProjectImportBundle } from "@/lib/types";
import { useProjectRecord } from "@/hooks/useProjectRecord";

const SETTINGS_PREFIX = "releasegovernance.jiraSettings.";

type JiraSettings = {
  jiraUrl: string;
  jiraEmail: string;
  jiraToken: string;
  maxResults: string;
  allResults: boolean;
};

const DEFAULT_SETTINGS: JiraSettings = {
  jiraUrl: "",
  jiraEmail: "",
  jiraToken: "",
  maxResults: "10",
  allResults: false,
};

function download(filename: string, content: BlobPart, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function normalizeTestCount(value: string) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return 10;
  return Math.min(parsed, 500);
}

function formatDate(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString().slice(0, 10);
}

export function ImportStudio({ projectId }: { projectId: string }) {
  const { project } = useProjectRecord(projectId);
  const projectKey = project?.jiraProjectKey ?? "";
  const [bundle, setBundle] = useState<ProjectImportBundle | null>(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [jiraUrl, setJiraUrl] = useState("");
  const [jiraEmail, setJiraEmail] = useState("");
  const [jiraToken, setJiraToken] = useState("");
  const [maxResults, setMaxResults] = useState(DEFAULT_SETTINGS.maxResults);
  const [allResults, setAllResults] = useState(DEFAULT_SETTINGS.allResults);
  const [testIssues, setTestIssues] = useState<ImportedJiraIssue[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [isImportingJira, setIsImportingJira] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(`${SETTINGS_PREFIX}${projectId}`);
    if (!raw) {
      setJiraUrl("");
      setJiraEmail("");
      setJiraToken("");
      setMaxResults(DEFAULT_SETTINGS.maxResults);
      setAllResults(DEFAULT_SETTINGS.allResults);
      return;
    }
    try {
      const parsed = JSON.parse(raw) as Partial<JiraSettings>;
      setJiraUrl(parsed.jiraUrl ?? "");
      setJiraEmail(parsed.jiraEmail ?? "");
      setJiraToken(parsed.jiraToken ?? "");
      setMaxResults(parsed.maxResults ?? DEFAULT_SETTINGS.maxResults);
      setAllResults(Boolean(parsed.allResults));
    } catch {
      setJiraUrl("");
      setJiraEmail("");
      setJiraToken("");
      setMaxResults(DEFAULT_SETTINGS.maxResults);
      setAllResults(DEFAULT_SETTINGS.allResults);
    }
  }, [projectId]);

  const summary = useMemo(() => {
    if (!bundle) return null;
    return {
      releases: bundle.releases.length,
      unreleased: bundle.releases.filter((item) => item.releaseState === "unreleased").length,
      capabilities: bundle.capabilities.length,
      integrations: bundle.integrations.length,
      jira: bundle.importedJiraIssues.length
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

  function saveJiraSettings() {
    setError("");
    setStatus("");
    if (!projectKey) {
      setError("This project does not have a Jira project key configured, so Jira settings cannot be saved yet.");
      return;
    }
    setIsSaving(true);
    try {
      window.localStorage.setItem(`${SETTINGS_PREFIX}${projectId}`, JSON.stringify({
        jiraUrl,
        jiraEmail,
        jiraToken,
        maxResults,
        allResults,
      } satisfies JiraSettings));
      setStatus(`Saved Jira settings locally for project ${projectKey}.`);
    } finally {
      setIsSaving(false);
    }
  }

  async function onJiraTest() {
    setError("");
    setStatus("");
    setTestIssues([]);
    if (!projectKey) {
      setError("Selected project has no Jira project key configured. Set the project Jira key first.");
      return;
    }
    if (!jiraEmail || !jiraToken) {
      setError("Jira account email and Jira API token are required for test queries.");
      return;
    }
    setIsTesting(true);
    try {
      const res = await fetch("/api/jira/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jiraUrl,
          email: jiraEmail,
          apiToken: jiraToken,
          projectKey,
          mode: "test",
          maxResults: allResults ? "all" : normalizeTestCount(maxResults),
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Jira test failed.");
      setTestIssues(data.issues ?? []);
      setStatus(`Fetched ${data.issues?.length ?? 0} Jira issue(s) for project ${projectKey}.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Jira test failed.");
    } finally {
      setIsTesting(false);
    }
  }

  async function onJiraImport() {
    setError("");
    setStatus("");
    if (!projectKey) {
      setError("Selected project has no Jira project key configured. Set the project Jira key first.");
      return;
    }
    try {
      setIsImportingJira(true);
      const res = await fetch("/api/jira/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jiraUrl, email: jiraEmail, apiToken: jiraToken, projectKey, mode: "import" })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Jira import failed.");
      const importedIssues: ImportedJiraIssue[] = data.issues ?? [];
      setBundle((current) => ({
        releases: current?.releases ?? [],
        capabilities: current?.capabilities ?? [],
        integrations: current?.integrations ?? [],
        importedJiraIssues: importedIssues
      }));
      setTestIssues(importedIssues.slice(0, allResults ? importedIssues.length : normalizeTestCount(maxResults)));
      setStatus(`Imported ${importedIssues.length} Jira issue(s) from project ${projectKey}. These will also appear in Capabilities as imported Jira capability candidates.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Jira import failed.");
    } finally {
      setIsImportingJira(false);
    }
  }

  function apply() {
    if (!bundle) return;
    applyImportBundle(projectId, bundle);
    setStatus("Imported data applied to this project. Refresh or navigate to see updates.");
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
        <p className="mt-2 text-sm text-slate-600">
          Import Markdown, CSV or Excel. All three formats use the same canonical information model. Markdown uses tables; CSV and Excel use the same canonical columns and the <code>record_type</code> field.
        </p>
        <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">
          Canonical fields: {CANONICAL_COLUMNS.join(", ")}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <label className="cursor-pointer rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Upload .md / .csv / .xlsx
            <input type="file" className="hidden" accept=".md,.markdown,.csv,.xlsx,.xls" onChange={(e) => { const file = e.target.files?.[0]; if (file) void onFile(file); }} />
          </label>
          <button onClick={() => download("releasegovernance-import-template.md", templateMarkdown, "text/markdown")} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Download MD template</button>
          <button onClick={() => download("releasegovernance-import-template.csv", templateCsv(), "text/csv")} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Download CSV template</button>
          <button onClick={downloadXlsx} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Download Excel template</button>
        </div>
      </section>

      <section className="card p-6">
        <h3 className="text-lg font-semibold text-slate-900">Jira URL import</h3>
        <p className="mt-2 text-sm text-slate-600">
          Import Jira work by giving an issue URL, an issues page URL with JQL, or a Jira project URL such as <code>/jira/software/projects/KEY</code>. Settings are stored locally per governed project when you press save.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <input value={jiraUrl} onChange={(e) => setJiraUrl(e.target.value)} placeholder="https://example.atlassian.net/jira/software/projects/APP or /browse/APP-101 or /issues?jql=..." className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <div className="rounded-2xl border border-slate-200 px-4 py-3 text-sm bg-slate-50 text-slate-700">
            Project filter: <span className="font-semibold">{projectKey || "not configured"}</span>
          </div>
          <input value={jiraEmail} onChange={(e) => setJiraEmail(e.target.value)} placeholder="Jira account email" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <input value={jiraToken} type="password" onChange={(e) => setJiraToken(e.target.value)} placeholder="Jira API token" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <div className="rounded-2xl border border-slate-200 px-4 py-3 text-sm">
            <label className="flex items-center justify-between gap-3">
              <span className="text-slate-700">Max Jira rows to preview</span>
              <input
                value={maxResults}
                onChange={(e) => setMaxResults(e.target.value)}
                disabled={allResults}
                inputMode="numeric"
                className="w-24 rounded-xl border border-slate-200 px-3 py-2 text-right text-sm"
              />
            </label>
            <label className="mt-3 flex items-center gap-2 text-slate-700">
              <input type="checkbox" checked={allResults} onChange={(e) => setAllResults(e.target.checked)} />
              Query all available project issues
            </label>
          </div>
          <div className="rounded-2xl border border-slate-200 px-4 py-3 text-sm bg-slate-50 text-slate-600">
            Default test fields: Jira key, summary, status, type, created, parent. Project filter is always enforced to the selected project.
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <button onClick={saveJiraSettings} disabled={isSaving} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60">{isSaving ? "Saving..." : "Save Jira settings"}</button>
          <button onClick={onJiraTest} disabled={isTesting} className="rounded-2xl border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-50 disabled:opacity-60">{isTesting ? "Testing..." : "Test Jira query"}</button>
          <button onClick={onJiraImport} disabled={isImportingJira} className="rounded-2xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-60">{isImportingJira ? "Importing..." : "Import from Jira"}</button>
        </div>
      </section>

      {error ? <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div> : null}
      {status ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{status}</div> : null}

      {testIssues.length ? (
        <section className="card p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Jira test preview</h3>
              <p className="mt-2 text-sm text-slate-600">Preview rows from the enforced Jira project filter before importing.</p>
            </div>
            <div className="text-sm text-slate-500">{testIssues.length} row(s)</div>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="px-3 py-2 font-medium">Jira key</th>
                  <th className="px-3 py-2 font-medium">Summary</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                  <th className="px-3 py-2 font-medium">Type</th>
                  <th className="px-3 py-2 font-medium">Created</th>
                  <th className="px-3 py-2 font-medium">Parent</th>
                </tr>
              </thead>
              <tbody>
                {testIssues.map((issue) => (
                  <tr key={issue.key} className="border-b border-slate-100 align-top">
                    <td className="px-3 py-3"><a href={issue.url} className="font-medium text-brand-700 hover:underline">{issue.key}</a></td>
                    <td className="px-3 py-3 text-slate-900">{issue.summary}</td>
                    <td className="px-3 py-3 text-slate-700">{issue.status ?? "—"}</td>
                    <td className="px-3 py-3 text-slate-700">{issue.issueType ?? "—"}</td>
                    <td className="px-3 py-3 text-slate-700">{formatDate(issue.created)}</td>
                    <td className="px-3 py-3 text-slate-700">{issue.parentKey ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {summary ? (
        <section className="card p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Import preview</h3>
            <button onClick={apply} className="rounded-2xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">Apply import to project</button>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-5">
            <div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Releases</div><div className="mt-1 text-xl font-semibold text-slate-900">{summary.releases}</div></div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Unreleased</div><div className="mt-1 text-xl font-semibold text-slate-900">{summary.unreleased}</div></div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Capabilities</div><div className="mt-1 text-xl font-semibold text-slate-900">{summary.capabilities}</div></div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Integrations</div><div className="mt-1 text-xl font-semibold text-slate-900">{summary.integrations}</div></div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Jira items</div><div className="mt-1 text-xl font-semibold text-slate-900">{summary.jira}</div></div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
