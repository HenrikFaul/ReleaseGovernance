"use client";

import { useEffect, useMemo, useState } from "react";
import { createProjectFromUpload, readProjectUploadDraft, writeProjectUploadDraft } from "@/lib/project-overrides";
import { ProjectImportBundle, ReleaseCandidate } from "@/lib/types";

type Props = {
  open: boolean;
  onClose: () => void;
  onCreated: (projectId: string) => void;
};

const emptyBundle: ProjectImportBundle = {
  releases: [],
  capabilities: [],
  integrations: [],
  importedJiraIssues: [],
};

export function ProjectUploadModal({ open, onClose, onCreated }: Props) {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedSources, setSelectedSources] = useState<string[]>(["markdown", "csv", "excel", "jira", "github", "hosting", "changelog"]);

  const [jiraUrl, setJiraUrl] = useState("");
  const [jiraProjectKey, setJiraProjectKey] = useState("");
  const [jiraEmail, setJiraEmail] = useState("");
  const [jiraToken, setJiraToken] = useState("");
  const [jiraPreviewLimit, setJiraPreviewLimit] = useState(10);
  const [jiraQueryAll, setJiraQueryAll] = useState(false);

  const [repoUrl, setRepoUrl] = useState("");
  const [githubToken, setGithubToken] = useState("");

  const [hostingProvider, setHostingProvider] = useState<"vercel" | "supabase" | "custom">("vercel");
  const [hostingUrl, setHostingUrl] = useState("");
  const [hostingApiKey, setHostingApiKey] = useState("");

  const [jiraTestMessage, setJiraTestMessage] = useState("");
  const [githubTestMessage, setGithubTestMessage] = useState("");
  const [hostingTestMessage, setHostingTestMessage] = useState("");

  const [bundle, setBundle] = useState<ProjectImportBundle>(emptyBundle);
  const [previewSummary, setPreviewSummary] = useState<any>(null);
  const [candidate, setCandidate] = useState<ReleaseCandidate | null>(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    const draft = readProjectUploadDraft() as Record<string, any>;
    setProjectName(draft.projectName ?? "");
    setProjectDescription(draft.projectDescription ?? "");
    setSelectedSources(draft.selectedSources ?? ["markdown", "csv", "excel", "jira", "github", "hosting", "changelog"]);
    setJiraUrl(draft.jiraUrl ?? "");
    setJiraProjectKey(draft.jiraProjectKey ?? "");
    setJiraEmail(draft.jiraEmail ?? "");
    setJiraToken(draft.jiraToken ?? "");
    setJiraPreviewLimit(draft.jiraPreviewLimit ?? 10);
    setJiraQueryAll(draft.jiraQueryAll ?? false);
    setRepoUrl(draft.repoUrl ?? "");
    setGithubToken(draft.githubToken ?? "");
    setHostingProvider(draft.hostingProvider ?? "vercel");
    setHostingUrl(draft.hostingUrl ?? "");
    setHostingApiKey(draft.hostingApiKey ?? "");
  }, [open]);

  const canApply = useMemo(() => Boolean(projectName.trim()) && (bundle.importedJiraIssues.length || bundle.integrations.length || candidate), [projectName, bundle, candidate]);

  function saveDraft(section: string) {
    writeProjectUploadDraft({
      projectName,
      projectDescription,
      selectedSources,
      jiraUrl,
      jiraProjectKey,
      jiraEmail,
      jiraToken,
      jiraPreviewLimit,
      jiraQueryAll,
      repoUrl,
      githubToken,
      hostingProvider,
      hostingUrl,
      hostingApiKey,
      lastSavedSection: section,
    });
    setError("");
    setStatus(`${section} settings saved locally.`);
  }

  function toggleSource(source: string) {
    setSelectedSources((current) => current.includes(source) ? current.filter((item) => item !== source) : [...current, source]);
  }

  async function testJira() {
    try {
      setError("");
      setStatus("");
      setJiraTestMessage("");
      const res = await fetch("/api/jira/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jiraUrl, email: jiraEmail, apiToken: jiraToken, projectKey: jiraProjectKey, maxResults: jiraPreviewLimit, queryAll: jiraQueryAll }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Jira test failed.");
      setJiraTestMessage(`OK — ${data.issues?.length ?? 0} issue(s) visible for ${data.diagnostics?.projectKey ?? jiraProjectKey}.`);
      setStatus("Jira test succeeded.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Jira test failed.");
    }
  }

  async function testGitHub() {
    try {
      setError("");
      setStatus("");
      setGithubTestMessage("");
      const res = await fetch("/api/github/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoUrl, githubToken }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "GitHub test failed.");
      setGithubTestMessage(`OK — ${data.owner}/${data.repo} (${data.visibility}), default branch: ${data.defaultBranch}.`);
      setStatus("GitHub repo test succeeded.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "GitHub test failed.");
    }
  }

  async function testHosting() {
    try {
      setError("");
      setStatus("");
      setHostingTestMessage("");
      const res = await fetch("/api/hosting/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hostingProvider, hostingUrl, hostingApiKey }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Hosting test failed.");
      setHostingTestMessage(`OK — ${data.summary}`);
      setStatus("Hosting test succeeded.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Hosting test failed.");
    }
  }

  async function previewProjectUpload() {
    try {
      setError("");
      setStatus("");
      setCandidate(null);
      const res = await fetch("/api/project-upload/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectName,
          projectKey: jiraProjectKey,
          selectedSources,
          jiraUrl,
          jiraEmail,
          jiraToken,
          jiraPreviewLimit,
          repoUrl,
          githubToken,
          hostingProvider,
          hostingUrl,
          hostingApiKey,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Project upload preview failed.");
      setBundle(data.bundle ?? emptyBundle);
      setPreviewSummary(data.preview ?? null);

      if ((selectedSources.includes("github") || selectedSources.includes("hosting") || selectedSources.includes("changelog")) && repoUrl && githubToken && hostingUrl) {
        const detect = await fetch("/api/release-detection", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            projectId: `project_${projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
            projectSlug: projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "project",
            projectKey: jiraProjectKey,
            repoUrl,
            githubToken,
            hostingProvider,
            hostingUrl,
            hostingApiKey,
          }),
        });
        const detectData = await detect.json();
        if (detect.ok) setCandidate(detectData.candidate ?? null);
      }
      setStatus("Project upload preview generated.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Project upload preview failed.");
    }
  }

  function applyProjectUpload() {
    try {
      setError("");
      const project = createProjectFromUpload({
        name: projectName,
        description: projectDescription,
        jiraProjectKey,
        repoUrl,
        hostingProvider,
        hostingUrl,
        jiraUrl,
        bundle,
        previewCandidate: candidate,
      });
      setStatus("Project created in governance workspace.");
      onCreated(project.id);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Project creation failed.");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/40 p-4">
      <div className="w-full max-w-6xl rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white">Add a new project</div>
            <p className="mt-4 max-w-4xl text-sm text-slate-600">Choose which source systems to use for bootstrapping this project. The preview will convert available Jira work into imported Jira rows and capability candidates, and register selected repo/hosting sources as integrations.</p>
          </div>
          <button onClick={onClose} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Close</button>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <input value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="Project name" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
          <input value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} placeholder="Short project description" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {["markdown", "csv", "excel", "jira", "github", "hosting", "changelog"].map((source) => (
            <button key={source} type="button" onClick={() => toggleSource(source)} className={`rounded-2xl border px-4 py-2 text-sm font-medium ${selectedSources.includes(source) ? "border-brand-200 bg-brand-50 text-brand-700" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>{source}</button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          <section className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold text-slate-900">GitHub repository</h3>
            <p className="mt-2 text-sm text-slate-600">Adj meg GitHub repo URL-t vagy owner/repo formátumot. Privát repónál általában kell token. A teszt ellenőrzi, hogy tényleg látjuk-e a repót.</p>
            <div className="mt-4 space-y-3">
              <input value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} placeholder="https://github.com/owner/repo vagy owner/repo" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
              <input value={githubToken} onChange={(e) => setGithubToken(e.target.value)} type="password" placeholder="GitHub API token" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
              <div className="flex flex-wrap gap-3">
                <button onClick={() => saveDraft("github")} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Save GitHub settings</button>
                <button onClick={testGitHub} className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Test GitHub</button>
              </div>
              {githubTestMessage ? <div className="rounded-2xl bg-emerald-50 p-3 text-sm text-emerald-700">{githubTestMessage}</div> : null}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold text-slate-900">Hosting / deployment</h3>
            <p className="mt-2 text-sm text-slate-600">Válassz kiszolgálót. Vercelnél deployment vagy project URL, Supabase-nél a projekt URL, customnál a szolgáltatás endpointja kell. Ha szükséges, add meg az API kulcsot is a teszthez.</p>
            <div className="mt-4 space-y-3">
              <select value={hostingProvider} onChange={(e) => setHostingProvider(e.target.value as "vercel" | "supabase" | "custom")} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm">
                <option value="vercel">vercel</option>
                <option value="supabase">supabase</option>
                <option value="custom">custom</option>
              </select>
              <input value={hostingUrl} onChange={(e) => setHostingUrl(e.target.value)} placeholder="https://your-project.vercel.app vagy https://xxxx.supabase.co" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
              <input value={hostingApiKey} onChange={(e) => setHostingApiKey(e.target.value)} type="password" placeholder="Hosting API key (ha kell)" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
              <div className="flex flex-wrap gap-3">
                <button onClick={() => saveDraft("hosting")} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Save hosting settings</button>
                <button onClick={testHosting} className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Test hosting</button>
              </div>
              {hostingTestMessage ? <div className="rounded-2xl bg-emerald-50 p-3 text-sm text-emerald-700">{hostingTestMessage}</div> : null}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold text-slate-900">Jira integration</h3>
            <p className="mt-2 text-sm text-slate-600">Adj meg base Jira URL-t vagy issue/project/JQL URL-t, plusz projektkulcsot. A teszt megmutatja, hogy tényleg látjuk-e a jegyeket.</p>
            <div className="mt-4 space-y-3">
              <input value={jiraUrl} onChange={(e) => setJiraUrl(e.target.value)} placeholder="https://example.atlassian.net vagy project/issue/JQL URL" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
              <input value={jiraProjectKey} onChange={(e) => setJiraProjectKey(e.target.value.toUpperCase())} placeholder="Project key (pl. HOB / SYN / RLG)" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
              <input value={jiraEmail} onChange={(e) => setJiraEmail(e.target.value)} placeholder="Jira account email" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
              <input value={jiraToken} onChange={(e) => setJiraToken(e.target.value)} type="password" placeholder="Jira API token" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
              <div className="grid gap-3 md:grid-cols-2">
                <input type="number" min={1} max={100} value={jiraPreviewLimit} onChange={(e) => setJiraPreviewLimit(Number(e.target.value) || 10)} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" />
                <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700"><input type="checkbox" checked={jiraQueryAll} onChange={(e) => setJiraQueryAll(e.target.checked)} />Query up to 100 project issues</label>
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => saveDraft("jira")} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Save Jira settings</button>
                <button onClick={testJira} className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Test Jira</button>
              </div>
              {jiraTestMessage ? <div className="rounded-2xl bg-emerald-50 p-3 text-sm text-emerald-700">{jiraTestMessage}</div> : null}
            </div>
          </section>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={previewProjectUpload} className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Preview project upload</button>
          <button onClick={applyProjectUpload} disabled={!canApply} className="rounded-2xl bg-brand-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 hover:bg-brand-700">Apply project upload</button>
        </div>

        {(previewSummary || candidate) ? (
          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-4">
              <h3 className="text-base font-semibold text-slate-900">Project upload preview</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Jira issues</div><div className="mt-1 text-xl font-semibold text-slate-900">{previewSummary?.jiraIssues ?? 0}</div></div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Capabilities</div><div className="mt-1 text-xl font-semibold text-slate-900">{previewSummary?.capabilities ?? 0}</div></div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Integrations</div><div className="mt-1 text-xl font-semibold text-slate-900">{previewSummary?.integrations ?? 0}</div></div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Detected release rows</div><div className="mt-1 text-xl font-semibold text-slate-900">{candidate ? 1 : previewSummary?.releases ?? 0}</div></div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <h3 className="text-base font-semibold text-slate-900">Detected release / repo context</h3>
              {candidate ? (
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <div className="font-medium text-slate-900">{candidate.version}</div>
                  <div>{candidate.releaseNotes}</div>
                  <div className="text-slate-500">Repo: {candidate.source.label ?? candidate.repoUrl ?? "Unknown repo"}</div>
                  <div className="text-slate-500">Hosting: {candidate.hostingProvider ?? "unknown"} — {candidate.hostingSummary ?? "No hosting summary"}</div>
                  <div className="text-slate-500">Jira keys: {candidate.jiraKeys?.join(", ") || "none detected"}</div>
                </div>
              ) : <div className="mt-3 text-sm text-slate-500">No release candidate detected yet. Preview still includes Jira and integration bootstrap data.</div>}
            </div>
          </div>
        ) : null}

        {error ? <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div> : null}
        {status ? <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{status}</div> : null}
      </div>
    </div>
  );
}
