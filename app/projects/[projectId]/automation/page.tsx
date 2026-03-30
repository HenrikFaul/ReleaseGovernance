"use client";

import { AppShell } from "@/components/app-shell";
import { SectionHeader } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";
import { summarizeBackfill } from "@/lib/backfill";

function escapeCsv(value: string) {
  const normalized = value.replace(/"/g, '""');
  return `"${normalized}"`;
}

export default function AutomationPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  if (!project) return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;
  const backfill = summarizeBackfill(project);
  const rows = backfill.csvRows;
  const csvHeader = ["Issue Type", "Summary", "Description", "Parent", "Labels"];
  const csvBody = rows.map((row) => [escapeCsv(row.issueType), escapeCsv(row.summary), escapeCsv(row.description), escapeCsv(row.parent), escapeCsv(row.labels)].join(","));
  const csv = [csvHeader.map(escapeCsv).join(","), ...csvBody].join("\n");
  const downloadHref = `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`;

  return (
    <AppShell projectId={project.id} projectName={project.name}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Automation" title={`${project.name} starter governance kit`} description="Policy files, CI templates and automation rules that make governance enforceable instead of optional. Backfill candidates can also be exported into Jira-importable CSV rows." />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-6"><h3 className="text-lg font-semibold text-slate-900">Starter files</h3><ul className="mt-4 space-y-2 text-sm text-slate-600"><li>.release/release-impact.yaml</li><li>governance/capabilities.yaml</li><li>governance/integrations.yaml</li><li>.github/workflows/releasegovernance-validate.yml</li><li>.github/CODEOWNERS</li></ul></div>
          <div className="card p-6"><h3 className="text-lg font-semibold text-slate-900">Operational rules</h3><ul className="mt-4 space-y-2 text-sm text-slate-600"><li>Every governed change must link to Jira or declare backfill required.</li><li>Backend or shared-contract changes must raise parity review signals.</li><li>Integration changes must record env or secret sensitivity.</li><li>Release readiness is blocked when governance metadata is incomplete.</li></ul></div>
        </div>

        <section className="card p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div><h3 className="text-lg font-semibold text-slate-900">Jira backfill CSV export</h3><p className="mt-2 text-sm text-slate-600">Use this export for deployed features that do not yet have Jira tickets. Each row includes summary, description, parent and unique tracking label values.</p></div>
            <a href={downloadHref} download={`${project.slug}-jira-backfill.csv`} className="inline-flex rounded-2xl bg-brand-600 px-4 py-2 font-medium text-white hover:bg-brand-700">Download CSV</a>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Unresolved candidates</div><div className="mt-1 text-xl font-semibold text-slate-900">{backfill.unresolved.length}</div></div><div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">Already linked to Jira</div><div className="mt-1 text-xl font-semibold text-slate-900">{backfill.resolved.length}</div></div><div className="rounded-2xl bg-slate-50 p-4 text-sm"><div className="text-slate-500">CSV rows</div><div className="mt-1 text-xl font-semibold text-slate-900">{rows.length}</div></div></div>
          <div className="mt-6 overflow-x-auto"><table className="min-w-full border-collapse text-left text-sm"><thead><tr className="border-b border-slate-200 text-slate-500"><th className="px-3 py-2 font-medium">Issue Type</th><th className="px-3 py-2 font-medium">Summary</th><th className="px-3 py-2 font-medium">Parent</th><th className="px-3 py-2 font-medium">Labels</th></tr></thead><tbody>{rows.length ? rows.map((row) => (<tr key={row.summary} className="border-b border-slate-100 align-top"><td className="px-3 py-3 text-slate-700">{row.issueType}</td><td className="px-3 py-3 text-slate-900">{row.summary}</td><td className="px-3 py-3 text-slate-700">{row.parent}</td><td className="px-3 py-3 text-slate-700">{row.labels}</td></tr>)) : <tr><td className="px-3 py-3 text-slate-600" colSpan={4}>No backfill candidates available for CSV export.</td></tr>}</tbody></table></div>
        </section>
      </div>
    </AppShell>
  );
}
