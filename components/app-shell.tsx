"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { getProject } from "@/lib/mock-data";

function navigation(projectId?: string) {
  if (!projectId) return [{ href: "/projects", label: "Projects", shortLabel: "Projects" }];
  return [
    { href: "/projects", label: "Projects", shortLabel: "Projects" },
    { href: `/projects/${projectId}`, label: "Project", shortLabel: "Project" },
    { href: `/projects/${projectId}/automation`, label: "Automation", shortLabel: "Auto" },
    { href: `/projects/${projectId}/import`, label: "Import", shortLabel: "Import" },
  ];
}

export function AppShell({
  children,
  projectId,
}: {
  children: ReactNode;
  projectId?: string;
}) {
  const pathname = usePathname();
  const items = navigation(projectId);
  const project = projectId ? getProject(projectId) : undefined;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-[1600px] gap-4 px-3 pb-24 pt-3 sm:px-4 lg:gap-6 lg:px-8 lg:pb-8 lg:pt-6">
        <aside className="hidden w-[248px] shrink-0 rounded-[32px] bg-gradient-to-b from-slate-950 via-slate-900 to-teal-950 p-5 text-white shadow-soft lg:block">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">ReleaseGovernance</div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white">Governance cockpit</h1>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A friendlier release command center for product, engineering and operations teams.
            </p>
          </div>

          <nav className="mt-6 space-y-2">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-2xl px-4 py-3 text-base font-medium transition ${
                    active
                      ? "bg-white text-slate-950 shadow-glow"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="min-w-0 flex-1">
          {projectId ? (
            <div className="mb-4 flex items-center justify-between gap-3 rounded-[24px] bg-white px-4 py-3 shadow-soft lg:hidden">
              <Link href="/projects" className="badge badge-neutral">Projects</Link>
              <div className="min-w-0 text-center text-lg font-semibold text-slate-950 truncate">{project?.name ?? "Project"}</div>
              <span className="badge badge-warning">warning</span>
            </div>
          ) : null}
          {children}
        </main>
      </div>

      <nav className="mobile-bottom-nav">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-bottom-item ${active ? "mobile-bottom-item-active" : ""}`}
            >
              <span>{item.shortLabel}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
