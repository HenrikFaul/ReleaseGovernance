import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge, SurfaceBadge } from "@/components/ui";
import { evaluateReleaseImpact } from "@/lib/impact-engine";
import { getProject } from "@/lib/mock-data";

export default function ReleaseDetailPage({ params }: { params: { projectId: string; releaseId: string } }) {
  const project = getProject(params.projectId);
  const release = project?.releases.find((item) => item.id === params.releaseId);
  if (!project || !release) return notFound();
  const impact = evaluateReleaseImpact(release);
  const deliveredCapabilities = project.capabilities.filter((capability) => release.deliveredCapabilities.includes(capability.id));

  return (
    <AppShell project={project}>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Release detail"
          title={release.version}
          description="Inspect delivered functionality, connected Jira work and cross-platform impact."
          actions={<StatusBadge tone={release.stage === "unreleased" ? "info" : impact.complianceStatus === "ready" ? "success" : impact.complianceStatus === "needs-follow-up" ? "warning" : "danger"}>{release.stage === "unreleased" ? "unreleased" : impact.complianceStatus}</StatusBadge>}
        />
        <div className="grid gap-6 xl:grid-cols-[1fr,1fr]">
          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Release header</h3>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div className="flex flex-wrap gap-2">{release.surfaces.map((surface) => <SurfaceBadge key={surface} surface={surface} />)}</div>
              <div>Stage: {release.stage === "unreleased" ? "unreleased / not yet deployed" : "released"}</div>
              <div>{release.stage === "unreleased" ? "Deployment state" : "Shipped at"}: {release.stage === "unreleased" ? "Not yet deployed" : release.shippedAt}</div>
              <div>Backend changed: {String(release.backendChanged)}</div>
              <div>Shared contract changed: {String(release.sharedContractChanged)}</div>
              <div>Schema changed: {String(release.schemaChanged)}</div>
              <div>Integrations changed: {release.integrationsChanged.join(", ") || "none"}</div>
            </div>
          </section>
          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Delivered capabilities</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {deliveredCapabilities.map((capability) => (
                <li key={capability.id} className="rounded-xl bg-slate-50 px-4 py-3">
                  <div className="font-medium text-slate-900">{capability.name}</div>
                  {capability.description ? <div className="mt-1 text-slate-600">{capability.description}</div> : null}
                  <div className="mt-2 text-xs text-slate-500">Jira: {capability.jiraKeys.join(", ") || "backfill required"}</div>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="grid gap-6 xl:grid-cols-[1fr,1fr]">
          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Jira traceability</h3>
            <div className="mt-4 space-y-3">
              {release.jiraLinks.map((jira) => (
                <a key={jira.key + jira.summary} href={jira.url} className="block rounded-2xl border border-slate-200 p-4 hover:bg-slate-50">
                  <div className="font-medium text-slate-900">{jira.key} — {jira.summary}</div>
                  <div className="mt-1 text-sm text-slate-500">Status: {jira.status}</div>
                </a>
              ))}
            </div>
          </section>
          <section className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Impact evaluation</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div>Parity needed: {String(impact.parityNeeded)}</div>
              <div>Affected surfaces: {impact.affectedSurfaces.join(", ")}</div>
              <div className="rounded-2xl bg-slate-50 p-4 text-slate-600">{impact.reasons.join(" ")}</div>
              <div>Compliance status: {release.stage === "unreleased" ? "unreleased" : impact.complianceStatus}</div>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
