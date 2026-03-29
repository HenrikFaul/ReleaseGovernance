import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { getProject } from "@/lib/mock-data";

export default function CapabilitiesPage({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId);
  if (!project) return notFound();

  return (
    <AppShell projectId={project.id} projectName={project.name}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Capability registry" title={`${project.name} capabilities`} description="Track features independently from commits and map them across product surfaces." />
        <div className="space-y-4">
          {project.capabilities.map((capability) => (
            <div key={capability.id} className="card p-6">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{capability.name}</h3>
                  {capability.summary ? <p className="mt-2 text-sm text-slate-600">{capability.summary}</p> : null}
                  <p className="mt-2 text-sm text-slate-500">Jira: {capability.jiraKeys.join(", ")}</p>
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
              {(capability.tenant || capability.channel || capability.codebaseStatus || capability.deployStatus) ? (
                <div className="mt-4 grid gap-3 md:grid-cols-4 text-sm">
                  {capability.tenant ? <div className="rounded-2xl border border-slate-200 p-3"><div className="text-slate-500">Tenant</div><div className="mt-1 font-medium text-slate-900">{capability.tenant}</div></div> : null}
                  {capability.channel ? <div className="rounded-2xl border border-slate-200 p-3"><div className="text-slate-500">Channel</div><div className="mt-1 font-medium text-slate-900">{capability.channel}</div></div> : null}
                  {capability.codebaseStatus ? <div className="rounded-2xl border border-slate-200 p-3"><div className="text-slate-500">Codebase status</div><div className="mt-1 font-medium text-slate-900">{capability.codebaseStatus}</div></div> : null}
                  {capability.deployStatus ? <div className="rounded-2xl border border-slate-200 p-3"><div className="text-slate-500">Deploy status</div><div className="mt-1 font-medium text-slate-900">{capability.deployStatus}</div></div> : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
