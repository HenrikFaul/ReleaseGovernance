"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { getProject } from "@/lib/mock-data";

type AppShellProps = PropsWithChildren<{
  projectId?: string;
}>;

type NavItem = {
  href: string;
  label: string;
  shortLabel?: string;
};

function navClass(active: boolean) {
  return [
    "nav-link",
    active ? "nav-link-active" : "",
  ].join(" ").trim();
}

function mobileNavClass(active: boolean) {
  return [
    "mobile-bottom-item",
    active ? "mobile-bottom-item-active" : "",
  ].join(" ").trim();
}

function resolveSectionLabel(pathname: string, projectId?: string) {
  if (!projectId) return "Workspace";
  if (pathname === `/projects/${projectId}`) return "Overview";
  if (pathname.includes("/releases")) return "Releases";
  if (pathname.includes("/capabilities")) return "Capabilities";
  if (pathname.includes("/integrations")) return "Integrations";
  if (pathname.includes("/import")) return "Import";
  if (pathname.includes("/automation")) return "Automation";
  return "Project";
}

export function AppShell({ children, projectId }: AppShellProps) {
  const pathname = usePathname();
  const project = projectId ? getProject(projectId) : undefined;
  const activeName = project?.name ?? "Projects";
  const sectionLabel = resolveSectionLabel(pathname, projectId);

  const workspaceNav: NavItem[] = [
    { href: "/projects", label: "Projects", shortLabel: "Projects" },
  ];

  const projectNav: NavItem[] = projectId
    ? [
        { href: `/projects/${projectId}`, label: "Overview", shortLabel: "Overview" },
        { href: `/projects/${projectId}/releases`, label: "Releases", shortLabel: "Releases" },
        { href: `/projects/${projectId}/capabilities`, label: "Capabilities", shortLabel: "Caps" },
        { href: `/projects/${projectId}/integrations`, label: "Integrations", shortLabel: "Integr." },
        { href: `/projects/${projectId}/import`, label: "Import studio", shortLabel: "Import" },
        { href: `/projects/${projectId}/automation`, label: "Automation", shortLabel: "Auto" },
      ]
    : [];

  const mobileNav: NavItem[] = projectId
    ? [
        { href: "/projects", label: "Projects", shortLabel: "Projects" },
        { href: `/projects/${projectId}`, label: "Overview", shortLabel: "Overview" },
        { href: `/projects/${projectId}/releases`, label: "Releases", shortLabel: "Releases" },
        { href: `/projects/${projectId}/capabilities`, label: "Capabilities", shortLabel: "Caps" },
        { href: `/projects/${projectId}/import`, label: "Import", shortLabel: "Import" },
      ]
    : workspaceNav;

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="shell-frame">
        <aside className="shell-sidebar">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <div className="text-[11px] uppercase tracking-[0.28em] text-slate-300">ReleaseGovernance</div>
            <div className="mt-5 text-[34px] font-semibold leading-[1.05] text-white">Governance cockpit</div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Release posture, parity follow-up and source-system governance in one consistent workspace.
            </p>
          </div>

          <nav className="mt-6 space-y-2">
            <div className="px-2 pb-2 text-[11px] uppercase tracking-[0.24em] text-slate-400">Workspace</div>
            {workspaceNav.map((item) => (
              <Link key={item.href} href={item.href} className={navClass(pathname === item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          {project ? (
            <>
              <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5">
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Active context</div>
                <div className="mt-4 text-2xl font-semibold text-white">{project.name}</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
                <div className="mt-4 inline-flex items-center rounded-full border border-amber-300/40 bg-amber-200/10 px-3 py-1 text-xs font-medium text-amber-100">
                  {project.deploymentStatus ?? "warning"}
                </div>
              </div>

              <nav className="mt-6 space-y-2">
                <div className="px-2 pb-2 text-[11px] uppercase tracking-[0.24em] text-slate-400">Project</div>
                {projectNav.map((item) => (
                  <Link key={item.href} href={item.href} className={navClass(pathname === item.href)}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </>
          ) : null}
        </aside>

        <main className="shell-main">
          <div className="shell-topbar">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Release workspace</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950 md:text-4xl">{activeName}</div>
                <div className="mt-2 text-sm text-slate-500">{sectionLabel}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project ? (
                  <span className="badge badge-warning">{project.deploymentStatus ?? "warning"}</span>
                ) : (
                  <span className="badge badge-info">workspace</span>
                )}
              </div>
            </div>
          </div>

          <div>{children}</div>
        </main>
      </div>

      <nav className="mobile-bottom-nav">
        {mobileNav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={mobileNavClass(active)}>
              <span className="truncate">{item.shortLabel ?? item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
