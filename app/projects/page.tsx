import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { tenants } from "@/lib/mock-data";

export default function ProjectsPage() {
  const tenant = tenants[0];
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Workspace"
          title={tenant.name}
          description="Choose a governed product project. Project-specific menus remain hidden until a project is selected."
          actions={<StatusBadge tone="info">{tenant.plan} plan</StatusBadge>}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tenant.projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="card p-6 transition hover:-translate-y-0.5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold text-slate-900">{project.name}</div>
                  <p className="mt-2 text-sm text-slate-600">{project.description}</p>
                </div>
                <StatusBadge tone={project.deploymentStatus === "healthy" ? "success" : project.deploymentStatus === "warning" ? "warning" : "danger"}>
                  {project.deploymentStatus}
                </StatusBadge>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-500">
                <span className="badge badge-neutral">{project.repositories.web ? "web" : "no web"}</span>
                <span className="badge badge-neutral">{project.repositories.android ? "android" : "no android"}</span>
                <span className="badge badge-neutral">shared backend</span>
                {project.jiraProjectKey ? <span className="badge badge-neutral">Jira {project.jiraProjectKey}</span> : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
