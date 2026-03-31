"use client";

import { AppShell } from "@/components/app-shell";
import { SectionHeader } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";

function escapeCsv(value: unknown) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
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

export default function AutomationPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  if (!project) return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;

  const backfills =
    project.backfillCandidates?.length
      ? project.backfillCandidates
      : project.releases
          .filter((release) => release.jiraBackfillRequired)
          .map((release, index) => ({
            id: `derived-backfill-${index}`,
            featureName: release.version,
            summary: `Backfill Jira story for ${release.version}`,
            description: release.releaseNotes,
            parent: `${project.jiraProjectKey ?? "PROJECT"}-1`,
            labels: ["releasegovernance", "backfill"],
            issueType: "Story",
            recommendedRelease: release.version,
          }));

  function exportCsv() {
    const header = ["Issue Type", "Summary", "Description", "Parent", "Labels", "Recommended Release"];
    const rows = backfills.map((row) => [
      row.issueType,
      row.summary,
      row.description,
      row.parent,
      row.labels.join(" "),
      row.recommendedRelease ?? "",
    ]);
    const csv = [header, ...rows].map((line) => line.map(escapeCsv).join(",")).join("\n");
    download(`${project.slug}-jira-backfill.csv`, csv, "text/csv;charset=utf-8");
  }

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Automation" title={`${project.name} starter governance kit`} description="Policy files, CI templates and automation rules that make governance enforceable instead of optional. Backfill candidates can also be exported into Jira-importable CSV rows." />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Starter files</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>.release/release-impact.yaml</li>
              <li>governance/capabilities.yaml</li>
              <li>governance/integrations.yaml</li>
              <li>.github/workflows/releasegovernance-validate.yml</li>
              <li>.github/CODEOWNERS</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Operational rules</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Every governed change must link to Jira or declare backfill required.</li>
              <li>Backend or shared-contract changes must raise parity review signals.</li>
              <li>Integration changes must record env or secret sensitivity.</li>
              <li>Release readiness is blocked when governance metadata is incomplete.</li>
            </ul>
          </div>
        </div>

        <section className="card p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Jira backfill CSV export</h3>
              <p className="mt-2 text-sm text-slate-600">Use this export for deployed features that do not yet have Jira tickets. Each row includes summary, description, parent and unique tracking label values.</p>
            </div>
            <button onClick={exportCsv} className="rounded-2xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">Download CSV</button>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Unresolved candidates</div><div className="mt-2 text-3xl font-semibold text-slate-950">{backfills.length}</div></div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Already linked to Jira</div><div className="mt-2 text-3xl font-semibold text-slate-950">{project.releases.filter((release) => release.jiraLinks.length > 0).length}</div></div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">CSV rows</div><div className="mt-2 text-3xl font-semibold text-slate-950">{backfills.length}</div></div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="px-3 py-2 font-medium">Issue Type</th>
                  <th className="px-3 py-2 font-medium">Summary</th>
                  <th className="px-3 py-2 font-medium">Parent</th>
                  <th className="px-3 py-2 font-medium">Labels</th>
                </tr>
              </thead>
              <tbody>
                {backfills.length ? backfills.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 align-top">
                    <td className="px-3 py-3">{row.issueType}</td>
                    <td className="px-3 py-3">{row.summary}</td>
                    <td className="px-3 py-3">{row.parent}</td>
                    <td className="px-3 py-3">{row.labels.join(", ")}</td>
                  </tr>
                )) : (
                  <tr><td className="px-3 py-3 text-slate-500" colSpan={4}>No backfill candidates available for CSV export.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
