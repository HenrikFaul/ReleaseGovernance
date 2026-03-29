import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatCard, StatusBadge } from "@/components/ui";
import { evaluateReleaseImpact } from "@/lib/impact-engine";
import { getProject } from "@/lib/mock-data";
import { summarizeBackfill } from "@/lib/backfill";

export default function ProjectDashboardPage({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId);
  if (!project) return notFound();

  const deployedReleases = project.releases.filter((release) => (release.releaseState ?? "released") === "released");
  const unreleasedReleases = project.releases.filter((release) => release.releaseState === "unreleased");
  const openAlerts = project.parityAlerts.filter((alert) => alert.state !== "resolved");
  const currentRelease =
    project.releases.find((release) => release.status === "current")
    ?? deployedReleases[0]
    ?? project.releases[0];

  const impact = currentRelease ? evaluateReleaseImpact(currentRelease) : null;
  const releasedCapabilities = project.capabilities.filter((capability) =>
    Object.values(capability.firstRelease ?? {}).some((value) =>
      deployedReleases.some((release) => release.version === value)
    )
  );
  const backfill = summarizeBackfill(project);
  const backfillCount = backfill.unresolved.length;

  return (
    <AppShell projectId={project.id} projectName={project.name}>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Project dashboard"
          title={project.name}
          description="Unified governance view across product surfaces, shared backend, integrations and delivery documentation."
          actions={
            <StatusBadge tone={project.deploymentStatus === "healthy" ? "success" : project.deploymentStatus === "warning" ? "warning" : "danger"}>
              {project.deploymentStatus}
            </StatusBadge>
          }
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          <StatCard label="Tracked releases" value={String(deployedReleases.length)} helper="Deployed release rows" />
          <StatCard label="Unreleased groups" value={String(unreleasedReleases.length)} helper="Specified but not yet deployed" />
          <StatCard label="Released features" value={String(releasedCapabilities.length)} helper="Mapped to delivered releases" />
          <StatCard label="Backfill candidates" value={String(backfillCount)} helper="Deployed without Jira" />
          <StatCard label="Open parity alerts" value={String(openAlerts.length)} helper="Cross-surface follow-up required" />
          <StatCard label="Connected integrations" value={String(project.integrations.length)} helper="Source systems and external APIs" />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
          <section className="card p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Deployed features without Jira tickets</h3>
                <p className="mt-2 text-sm text-slate-600">These are already-detected shipped features that still need Jira creation and CSV export. Once their unique backfill labels appear on imported Jira issues, they move out of this queue and into normal unreleased Jira tracking.</p>
              </div>
              <Link href={`/projects/${project.id}/automation`} className="inline-flex rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Open export
              </Link>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-sm text-slate-500">Needs Jira backfill</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">{backfill.unresolved.length}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-sm text-slate-500">Already linked back to Jira</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">{backfill.resolved.length}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-sm text-slate-500">CSV rows ready</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">{backfill.csvRows.length}</div>
              </div>
            </div>
          </section>

          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Backfill lifecycle</h3>
            <ol className="mt-4 space-y-3 text-sm text-slate-600">
              <li>1. Export unresolved backfill rows from the Automation page as Jira-importable CSV.</li>
              <li>2. Import them into Jira with the generated unique tracking label preserved.</li>
              <li>3. Re-import Jira items into this project.</li>
              <li>4. ReleaseGovernance will detect the matching label and treat the feature as Jira-backed work instead of a Jira-less deployed exception.</li>
            </ol>
          </section>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
          <section className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Current release posture</h3>
              {currentRelease ? (
                <StatusBadge tone={impact?.complianceStatus === "ready" ? "success" : impact?.complianceStatus === "needs-follow-up" ? "warning" : "danger"}>
                  {currentRelease.status ?? currentRelease.releaseState ?? "old"}
                </StatusBadge>
              ) : null}
            </div>
            {currentRelease ? (
              <div className="mt-4 space-y-4 text-sm text-slate-700">
                <div>
                  <div className="font-medium">{currentRelease.version}</div>
                  <div className="mt-1 text-slate-500">{currentRelease.releaseNotes}</div>
                </div>
                <ul className="space-y-2">
                  <li>Status: {currentRelease.status ?? currentRelease.releaseState ?? "old"}</li>
                  <li>Surfaces: {currentRelease.surfaces.join(", ")}</li>
                  <li>Backend changed: {String(currentRelease.backendChanged)}</li>
                  <li>Shared contract changed: {String(currentRelease.sharedContractChanged)}</li>
                  <li>Schema changed: {String(currentRelease.schemaChanged)}</li>
                  <li>Integrations touched: {currentRelease.integrationsChanged.join(", ") || "none"}</li>
                </ul>
                {impact ? (
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="font-medium text-slate-900">Impact engine</div>
                    <p className="mt-2 text-slate-600">{impact.reasons.join(" ")}</p>
                  </div>
                ) : null}
                <Link href={`/projects/${project.id}/releases/${currentRelease.id}`} className="inline-flex rounded-2xl bg-brand-600 px-4 py-2 font-medium text-white hover:bg-brand-700">
                  Open release detail
                </Link>
              </div>
            ) : (
              <div className="mt-4 text-sm text-slate-500">No release records yet.</div>
            )}
          </section>

          <section className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Open parity alerts</h3>
              <Link href={`/projects/${project.id}/traceability`} className="text-sm font-medium">Traceability</Link>
            </div>
            <div className="mt-4 space-y-3">
              {openAlerts.map((alert) => (
                <div key={alert.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-slate-900">{alert.sourceSurface} → {alert.affectedSurface}</div>
                    <StatusBadge tone={alert.severity === "critical" ? "danger" : alert.severity === "warning" ? "warning" : "info"}>{alert.severity}</StatusBadge>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{alert.reason}</p>
                  {alert.jiraKey ? <div className="mt-2 text-xs text-slate-500">Tracked in {alert.jiraKey}</div> : null}
                </div>
              ))}
            </div>
          </section>
        </div>

        {project.overview ? (
          <div className="grid gap-6 xl:grid-cols-[1fr,1fr]">
            <section className="card p-6">
              <h3 className="text-lg font-semibold text-slate-900">General project information</h3>
              <p className="mt-4 text-sm text-slate-600">{project.overview.applicationDescription}</p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-900">Tech stack</h4>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {project.overview.techStack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Hosting services</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {project.overview.hostingServices.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Backend services</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {project.overview.backendServices.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="card p-6">
              <h3 className="text-lg font-semibold text-slate-900">Project structure and runtime notes</h3>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-slate-900">Project structure</h4>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {project.overview.projectStructure.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {project.overview.runtimeNotes?.length ? (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-slate-900">Runtime notes</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {project.overview.runtimeNotes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>
          </div>
        ) : null}
      </div>
    </AppShell>
  );
}
