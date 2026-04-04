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
          description="Choose a governed product project or bootstrap a new one from Jira, repository and hosting sources."
          actions={<StatusBadge tone="info">{plan} plan</StatusBadge>}
        />

        <section className="card p-6 sm:p-7">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">Project onboarding and governed workspace entry</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Existing projects already have release, capability, integration and import sections.
                Use onboarding when a new product is not yet in governance.
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Add a new project
            </button>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-slate-900">Projects in governance</h3>
            <StatusBadge tone="neutral">{projects.length} total</StatusBadge>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="card card-hover p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold text-slate-900">{project.name}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                  </div>
                  <StatusBadge tone={project.deploymentStatus === "healthy" ? "success" : project.deploymentStatus === "warning" ? "warning" : "danger"}>
                    {project.deploymentStatus}
                  </StatusBadge>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="badge badge-neutral">{project.repositories.web ? "web" : "no web"}</span>
                  <span className="badge badge-neutral">{project.repositories.android ? "android" : "no android"}</span>
                  <span className="badge badge-neutral">shared backend</span>
                  {project.jiraProjectKey ? <span className="badge badge-info">Jira {project.jiraProjectKey}</span> : null}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <ProjectUploadModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onCreated={() => {
            refresh();
            setModalOpen(false);
          }}
        />
      </div>
    </AppShell>
  );
}
