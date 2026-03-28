import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge, SurfaceBadge } from "@/components/ui";
import { evaluateReleaseImpact } from "@/lib/impact-engine";
import { getProject } from "@/lib/mock-data";

export default function ReleasesPage({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId);
  if (!project) return notFound();

  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader eyebrow="Release center" title={`${project.name} releases`} description="Track what shipped, where, and with which backend or integration implications." />
        <div className="space-y-4">
          {project.releases.map((release) => {
            const impact = evaluateReleaseImpact(release);
            return (
              <div key={release.id} className="card p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-slate-900">{release.version}</h3>
                      <StatusBadge tone={impact.complianceStatus === "ready" ? "success" : impact.complianceStatus === "needs-follow-up" ? "warning" : "danger"}>{impact.complianceStatus}</StatusBadge>
                    </div>
                    <p className="mt-2 max-w-3xl text-sm text-slate-600">{release.releaseNotes}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {release.surfaces.map((surface) => <SurfaceBadge key={surface} surface={surface} />)}
                    </div>
                  </div>
                  <Link href={`/projects/${project.id}/releases/${release.id}`} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Open detail</Link>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-4 text-sm text-slate-600">
                  <div>Backend changed: <span className="font-medium text-slate-900">{String(release.backendChanged)}</span></div>
                  <div>Shared contract: <span className="font-medium text-slate-900">{String(release.sharedContractChanged)}</span></div>
                  <div>Schema changed: <span className="font-medium text-slate-900">{String(release.schemaChanged)}</span></div>
                  <div>Jira backfill: <span className="font-medium text-slate-900">{String(release.jiraBackfillRequired)}</span></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
