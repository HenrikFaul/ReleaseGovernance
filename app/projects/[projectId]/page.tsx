import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatCard, StatusBadge } from "@/components/ui";
import { evaluateReleaseImpact } from "@/lib/impact-engine";
import { getProject } from "@/lib/mock-data";

export default function ProjectDashboardPage({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId);
  if (!project) return notFound();

  const openAlerts = project.parityAlerts.filter((alert) => alert.state !== "resolved");
  const latestRelease = project.releases[0];
  const impact = latestRelease ? evaluateReleaseImpact(latestRelease) : null;

  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Project dashboard"
          title={project.name}
          description="Unified governance view across product surfaces, shared backend, integrations and delivery documentation."
          actions={<StatusBadge tone={project.deploymentStatus === "healthy" ? "success" : project.deploymentStatus === "warning" ? "warning" : "danger"}>{project.deploymentStatus}</StatusBadge>}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Tracked releases" value={String(project.releases.length)} helper="Web, mobile, backend and shared-contract versions" />
          <StatCard label="Capabilities" value={String(project.capabilities.length)} helper="Tracked independently from commits" />
          <StatCard label="Open parity alerts" value={String(openAlerts.length)} helper="Cross-surface follow-up required" />
          <StatCard label="Connected integrations" value={String(project.integrations.length)} helper="Source systems and external APIs" />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
          <section className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Latest release posture</h3>
              {latestRelease ? <StatusBadge tone={impact?.complianceStatus === "ready" ? "success" : impact?.complianceStatus === "needs-follow-up" ? "warning" : "danger"}>{impact?.complianceStatus}</StatusBadge> : null}
            </div>
            {latestRelease ? (
              <div className="mt-4 space-y-4 text-sm text-slate-700">
                <div>
                  <div className="font-medium">{latestRelease.version}</div>
                  <div className="mt-1 text-slate-500">{latestRelease.releaseNotes}</div>
                </div>
                <ul className="space-y-2">
                  <li>Surfaces: {latestRelease.surfaces.join(", ")}</li>
                  <li>Backend changed: {String(latestRelease.backendChanged)}</li>
                  <li>Shared contract changed: {String(latestRelease.sharedContractChanged)}</li>
                  <li>Schema changed: {String(latestRelease.schemaChanged)}</li>
                  <li>Integrations touched: {latestRelease.integrationsChanged.join(", ") || "none"}</li>
                </ul>
                {impact ? (
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="font-medium text-slate-900">Impact engine</div>
                    <p className="mt-2 text-slate-600">{impact.reasons.join(" ")}</p>
                  </div>
                ) : null}
                <Link href={`/projects/${project.id}/releases/${latestRelease.id}`} className="inline-flex rounded-2xl bg-brand-600 px-4 py-2 font-medium text-white hover:bg-brand-700">
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
      </div>
    </AppShell>
  );
}
