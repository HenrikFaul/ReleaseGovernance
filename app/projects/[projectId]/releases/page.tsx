import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge, SurfaceBadge } from "@/components/ui";
import { getProject } from "@/lib/mock-data";

function formatSourceLabel(
  source?: { kind?: string; owner?: string; repository?: string; label?: string }
) {
  if (!source) return "Unknown source";
  if (source.label) return source.label;
  if (source.kind === "github" && source.owner && source.repository) return `GitHub / ${source.owner}/${source.repository}`;
  if (source.owner && source.repository) return `${source.kind} / ${source.owner}/${source.repository}`;
  return source.kind ?? "Unknown source";
}

export default function ReleasesPage({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId);
  if (!project) return notFound();

  const currentProject = project;
  const deployed = currentProject.releases.filter((release) => release.status !== "unreleased");
  const unreleased = currentProject.releases.filter((release) => release.status === "unreleased");

  const renderRow = (releaseId: string) => {
    const release = currentProject.releases.find((item) => item.id === releaseId);
    if (!release) return null;

    const tone = release.status === "current" ? "success" : release.status === "unreleased" ? "info" : "neutral";

    return (
      <Link
        key={release.id}
        href={`/projects/${currentProject.id}/releases/${release.id}`}
        className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50"
      >
        <div className="grid gap-4 xl:grid-cols-[1.2fr,0.95fr,0.65fr,0.85fr,1.2fr,0.55fr,1.2fr,0.7fr]">
          <div>
            <div className="text-sm font-semibold text-slate-900">{release.version}</div>
            <div className="mt-1 flex flex-wrap gap-2">
              {release.surfaces.map((surface) => (
                <SurfaceBadge key={surface} surface={surface} />
              ))}
            </div>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-medium text-slate-900">Status</div>
            <div className="mt-1">
              <StatusBadge tone={tone as any}>{release.status ?? "old"}</StatusBadge>
            </div>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-medium text-slate-900">Deploy date</div>
            <div className="mt-1">{release.shippedAt}</div>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-medium text-slate-900">Source kind</div>
            <div className="mt-1">{release.source?.kind ?? "unknown"}</div>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-medium text-slate-900">Source repository</div>
            <div className="mt-1">{formatSourceLabel(release.source)}</div>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-medium text-slate-900">Issue count</div>
            <div className="mt-1">{release.jiraLinks.length}</div>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-medium text-slate-900">Deployment comment</div>
            <div className="mt-1">{release.deploymentComment ?? release.releaseNotes}</div>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-medium text-slate-900">Jira linked</div>
            <div className="mt-1">{release.jiraLinks.length > 0 ? "Yes" : "No"}</div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <AppShell projectId={currentProject.id}>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Release center"
          title={`${currentProject.name} releases`}
          description="Each row represents a governed release record. Open a row to inspect functionality, Jira traceability and cross-platform impact."
        />
        <section className="space-y-3">
          <div className="card p-4">
            <div className="grid gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 xl:grid-cols-[1.2fr,0.95fr,0.65fr,0.85fr,1.2fr,0.55fr,1.2fr,0.7fr]">
              <div>Release version / surfaces</div>
              <div>Status</div>
              <div>Deploy date</div>
              <div>Source kind</div>
              <div>Source repository</div>
              <div>Issue count</div>
              <div>Deployment comment</div>
              <div>Jira linked</div>
            </div>
          </div>
          {deployed.map((release) => renderRow(release.id))}
        </section>

        {unreleased.length ? (
          <section className="space-y-3">
            <div className="card p-5">
              <h3 className="text-lg font-semibold text-slate-900">Unreleased</h3>
              <p className="mt-2 text-sm text-slate-600">
                Specified and imported items that are not yet deployed. These remain visible under the same release registry.
              </p>
            </div>
            {unreleased.map((release) => renderRow(release.id))}
          </section>
        ) : null}
      </div>
    </AppShell>
  );
}
