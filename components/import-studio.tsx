"use client";

import { useMemo, useState } from "react";
import * as XLSX from "xlsx";
import { applyImportBundle } from "@/lib/project-overrides";
import { CANONICAL_COLUMNS, createTemplateWorkbook, parseImportFile, templateCsv, templateMarkdown } from "@/lib/import-utils";
import { ProjectImportBundle } from "@/lib/types";

function download(filename: string, content: BlobPart, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function ImportStudio({ projectId }: { projectId: string }) {
  const [bundle, setBundle] = useState<ProjectImportBundle | null>(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [jiraUrl, setJiraUrl] = useState("");
  const [jiraEmail, setJiraEmail] = useState("");
  const [jiraToken, setJiraToken] = useState("");

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
    setError(""); setStatus("");
    try {
      const parsed = await parseImportFile(file);
      setBundle(parsed);
      setStatus(`Parsed ${file.name} successfully.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import failed.");
    }
  }

  async function onJiraImport() {
    setError(""); setStatus("");
    try {
      const res = await fetch("/api/jira/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jiraUrl, email: jiraEmail, apiToken: jiraToken }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Jira import failed.");
      setBundle((current) => ({
        releases: current?.releases ?? [],
        capabilities: current?.capabilities ?? [],
        integrations: current?.integrations ?? [],
        importedJiraIssues: data.issues ?? [],
      }));
      setStatus(`Imported ${data.issues?.length ?? 0} Jira issue(s).`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Jira import failed.");
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
            <input
              type="file"
              className="hidden"
              accept=".md,.markdown,.csv,.xlsx,.xls"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void onFile(file);
              }}
            />
          </label>
          <button onClick={() => download("releasegovernance-import-template.md", templateMarkdown, "text/markdown")} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Download MD template</button>
          <button onClick={() => download("releasegovernance-import-template.csv", templateCsv(), "text/csv")} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Download CSV template</button>
          <button onClick={downloadXlsx} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Download Excel template</button>
        </div>
      </section>

      <section className="card p-6">
        <h3 className="text-lg font-semibold text-slate-900">Jira URL import</h3>
        <p className="mt-2 text-sm text-slate-600">
          Import Jira key, summary, description and labels by giving a Jira issue URL or an issues page URL with JQL. The imported issues are stored under the selected project as clickable references.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <input value={jiraUrl} onChange={(e) => setJiraUrl(e.target.value)} placeholder="https://example.atlassian.net/browse/APP-101 or issues?jql=..." className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <input value={jiraEmail} onChange={(e) => setJiraEmail(e.target.value)} placeholder="Jira account email" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <input value={jiraToken} type="password" onChange={(e) => setJiraToken(e.target.value)} placeholder="Jira API token" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm md:col-span-2" />
        </div>
        <button onClick={onJiraImport} className="mt-4 rounded-2xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">Import from Jira URL</button>
      </section>

      {error ? <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div> : null}
      {status ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{status}</div> : null}

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
          <div className="mt-6 grid gap-6 xl:grid-cols-2">
            <div>
              <h4 className="font-medium text-slate-900">Releases</h4>
              <div className="mt-3 space-y-2">
                {bundle?.releases.map((release) => (
                  <div key={release.id} className="rounded-2xl border border-slate-200 p-3 text-sm">
                    <div className="font-medium text-slate-900">{release.version}</div>
                    <div className="text-slate-500">{release.releaseState ?? "released"} · {release.surfaces.join(", ")}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-slate-900">Capabilities</h4>
              <div className="mt-3 space-y-2">
                {bundle?.capabilities.slice(0, 12).map((capability) => (
                  <div key={capability.id} className="rounded-2xl border border-slate-200 p-3 text-sm">
                    <div className="font-medium text-slate-900">{capability.name}</div>
                    <div className="text-slate-500">{capability.jiraKeys.join(", ") || "no Jira linked"}</div>
                  </div>
                ))}
                {(bundle?.capabilities.length ?? 0) > 12 ? <div className="text-xs text-slate-500">+{(bundle?.capabilities.length ?? 0) - 12} more capabilities in this bundle.</div> : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
