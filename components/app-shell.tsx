"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { getProject } from "@/lib/mock-data";

type AppShellProps = PropsWithChildren<{
  projectId?: string;
}>;

function navClass(active: boolean) {
  return [
    "flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition",
    active ? "bg-white text-slate-950 shadow-sm" : "text-slate-300 hover:bg-white/10 hover:text-white",
  ].join(" ");
}

export function AppShell({ children, projectId }: AppShellProps) {
  const pathname = usePathname();
  const project = projectId ? getProject(projectId) : undefined;
  const activeName = project?.name ?? "Projects";

  const projectNav = projectId
    ? [
        { href: `/projects/${projectId}`, label: "Dashboard" },
        { href: `/projects/${projectId}/automation`, label: "Automation" },
        { href: `/projects/${projectId}/import`, label: "Import" },
      ]
    : [];

  const mobileProjectNav = projectId
    ? [
        { href: "/projects", label: "Projects" },
        { href: `/projects/${projectId}`, label: "Project" },
        { href: `/projects/${projectId}`, label: "Dashboard" },
        { href: `/projects/${projectId}/automation`, label: "Automation" },
        { href: `/projects/${projectId}/import`, label: "Import" },
      ]
    : [{ href: "/projects", label: "Projects" }];

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex max-w-[1600px] gap-4 px-3 pb-24 pt-3 md:px-4 md:pb-6">
        <aside className="hidden w-[250px] shrink-0 overflow-hidden rounded-[32px] bg-gradient-to-b from-slate-950 via-slate-900 to-teal-950 p-4 text-white lg:block">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <div className="text-[11px] uppercase tracking-[0.28em] text-slate-300">ReleaseGovernance</div>
            <div className="mt-5 text-[40px] font-semibold leading-[1.02] text-white">Governance cockpit</div>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Release, parity and Jira governance in one place.
            </p>
          </div>

          {project ? (
            <div className="mt-4 rounded-[28px] border border-white/10 bg-white/5 p-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Active context</div>
              <div className="mt-4 text-2xl font-semibold text-white">{project.name}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-amber-300/40 bg-amber-200/10 px-3 py-1 text-xs font-medium text-amber-200">
                {project.deploymentStatus ?? "warning"}
              </div>
            </div>
          ) : null}

          <nav className="mt-6 space-y-2">
            <Link href="/projects" className={navClass(pathname === "/projects")}>
              Projects
            </Link>
            {projectNav.map((item) => (
              <Link key={item.href} href={item.href} className={navClass(pathname === item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="rounded-[28px] bg-white px-5 py-4 shadow-sm md:px-8">
            <div className="grid items-center gap-3 md:grid-cols-[180px_1fr_160px]">
              <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Release workspace</div>
              <div className="text-center text-2xl font-semibold text-slate-950 md:text-4xl">{activeName}</div>
              <div className="flex justify-start md:justify-end">
                {project ? (
                  <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                    {project.deploymentStatus ?? "warning"}
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                    workspace
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4">{children}</div>
        </main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-2 py-2 backdrop-blur lg:hidden">
        <div className={`grid gap-2 ${mobileProjectNav.length >= 5 ? "grid-cols-5" : "grid-cols-1"}`}>
          {mobileProjectNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-2xl px-2 py-2 text-center text-[11px] font-medium",
                  active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
