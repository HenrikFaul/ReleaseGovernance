"use client";

import Link from "next/link";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { ProjectUploadModal } from "@/components/project-upload-modal";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { useTenantWorkspace } from "@/hooks/useTenantWorkspace";

export default function ProjectsPage() {
  const { tenantName, plan, projects, refresh } = useTenantWorkspace("tenant_releasegovernance");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <AppShell>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Workspace"
          title={tenantName}
          description="Choose a governed product project. Project-specific sections become visible after a project is selected."
          actions={<StatusBadge tone="info">{plan} plan</StatusBadge>}
        />

        <section className="card p-6">
          <button onClick={() => setModalOpen(true)} className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-600">Add a new project</button>
          <p className="mt-4 max-w-4xl text-sm text-slate-600">Choose which source systems to use for bootstrapping this project. The preview will convert available Jira work into imported Jira rows and capability candidates, and register selected repo/hosting sources as integrations.</p>
        </section>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">Your projects in governance</h3>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="card p-6 transition hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold text-slate-900">{project.name}</div>
                    <p className="mt-2 text-sm text-slate-600">{project.description}</p>
                  </div>
                  <StatusBadge tone={project.deploymentStatus === "healthy" ? "success" : project.deploymentStatus === "warning" ? "warning" : "danger"}>{project.deploymentStatus}</StatusBadge>
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

        <ProjectUploadModal open={modalOpen} onClose={() => setModalOpen(false)} onCreated={() => { refresh(); setModalOpen(false); }} />
      </div>
    </AppShell>
  );
}
