import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { getProject } from "@/lib/mock-data";

export default function CapabilitiesPage({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId);
  if (!project) return notFound();

  return (
    <AppShell project={project}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Capability registry" title={`${project.name} capabilities`} description="Track imported product functionality independently from commits and map it across surfaces, runtime state and Jira." />
        <div className="space-y-4">
          {project.capabilities.map((capability) => (
            <div key={capability.id} className="card p-6">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-4xl">
                  <h3 className="text-lg font-semibold text-slate-900">{capability.name}</h3>
                  {capability.description ? <p className="mt-2 text-sm text-slate-600">{capability.description}</p> : null}
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                    {capability.tenant ? <span className="badge badge-neutral">{capability.tenant}</span> : null}
                    {capability.channel ? <span className="badge badge-neutral">{capability.channel}</span> : null}
                    {capability.implementationStatus ? <span className="badge badge-neutral">{capability.implementationStatus}</span> : null}
                    {capability.deployStatus ? <span className="badge badge-neutral">{capability.deployStatus}</span> : null}
                  </div>
                  {capability.technicalNotes ? <p className="mt-3 text-sm text-slate-500">{capability.technicalNotes}</p> : null}
                  <p className="mt-3 text-sm text-slate-500">Jira: {capability.jiraKeys.join(", ") || "backfill required"}</p>
                  {capability.integrations.length ? <p className="mt-2 text-sm text-slate-500">Integrations: {capability.integrations.join(", ")}</p> : null}
                </div>
                <StatusBadge tone={capability.parityStatus === "aligned" ? "success" : capability.parityStatus === "planned" ? "info" : "warning"}>{capability.parityStatus}</StatusBadge>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-5">
                {Object.entries(capability.statusBySurface).map(([surface, status]) => (
                  <div key={surface} className="rounded-2xl bg-slate-50 p-4 text-sm">
                    <div className="text-slate-500">{surface}</div>
                    <div className="mt-1 font-medium text-slate-900">{status}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
