import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge, SurfaceBadge } from "@/components/ui";
import { evaluateReleaseImpact } from "@/lib/impact-engine";
import { getProject } from "@/lib/mock-data";

export default function ReleasesPage({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId);
  if (!project) return notFound();

  const released = project.releases.filter((release) => release.stage !== "unreleased");
  const unreleased = project.releases.filter((release) => release.stage === "unreleased");

  const renderRelease = (releaseId: string | number, release: any) => {
    const impact = evaluateReleaseImpact(release);
    return (
      <div key={release.id} className="card p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-900">{release.version}</h3>
              <StatusBadge tone={release.stage === "unreleased" ? "info" : impact.complianceStatus === "ready" ? "success" : impact.complianceStatus === "needs-follow-up" ? "warning" : "danger"}>
                {release.stage === "unreleased" ? "unreleased" : impact.complianceStatus}
              </StatusBadge>
            </div>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">{release.releaseNotes}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {release.surfaces.map((surface: string) => <SurfaceBadge key={surface} surface={surface as any} />)}
            </div>
          </div>
          <Link href={`/projects/${project.id}/releases/${release.id}`} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Open detail</Link>
        </div>
        <div className="mt-5 grid gap-4 text-sm text-slate-600 md:grid-cols-4">
          <div>{release.stage === "unreleased" ? "State" : "Shipped at"}: <span className="font-medium text-slate-900">{release.stage === "unreleased" ? "Not yet deployed" : release.shippedAt}</span></div>
          <div>Backend changed: <span className="font-medium text-slate-900">{String(release.backendChanged)}</span></div>
          <div>Shared contract: <span className="font-medium text-slate-900">{String(release.sharedContractChanged)}</span></div>
          <div>Schema changed: <span className="font-medium text-slate-900">{String(release.schemaChanged)}</span></div>
        </div>
      </div>
    );
  };

  return (
    <AppShell project={project}>
      <div className="space-y-8">
        <SectionHeader eyebrow="Release center" title={`${project.name} releases`} description="Track what shipped, where, and with which backend or integration implications. Unreleased work is grouped separately." />
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Released versions</h3>
            <p className="mt-1 text-sm text-slate-500">Shipped or logically reconstructed released slices from the imported product inventory.</p>
          </div>
          <div className="space-y-4">{released.map((release) => renderRelease(release.id, release))}</div>
        </section>
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Unreleased</h3>
            <p className="mt-1 text-sm text-slate-500">Backlog or specification tracks that are represented in governance but not yet deployed.</p>
          </div>
          <div className="space-y-4">{unreleased.map((release) => renderRelease(release.id, release))}</div>
        </section>
      </div>
    </AppShell>
  );
}
