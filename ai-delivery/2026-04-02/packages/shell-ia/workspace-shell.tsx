"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren, ReactNode } from "react";
import { globalNavItems, projectNavItems } from "./nav-model";

type WorkspaceShellProps = PropsWithChildren<{
  projectId?: string;
  title?: string;
  statusBadge?: ReactNode;
}>;

function itemClass(active: boolean) {
  return [
    "flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition",
    active ? "bg-white text-slate-950 shadow-sm" : "text-slate-300 hover:bg-white/10 hover:text-white",
  ].join(" ");
}

export default function WorkspaceShell({ children, projectId, title, statusBadge }: WorkspaceShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex max-w-[1600px] gap-4 px-3 pb-24 pt-3 md:px-4 md:pb-6">
        <aside className="hidden w-[280px] shrink-0 overflow-hidden rounded-[32px] bg-gradient-to-b from-slate-950 via-slate-900 to-teal-950 p-4 text-white lg:block">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <div className="text-[11px] uppercase tracking-[0.28em] text-slate-300">ReleaseGovernance</div>
            <div className="mt-5 text-[34px] font-semibold leading-[1.05] text-white">Workflow-first cockpit</div>
          </div>

          <nav className="mt-6 space-y-2">
            <div className="px-2 pb-2 pt-1 text-[11px] uppercase tracking-[0.24em] text-slate-400">Workspace</div>
            {globalNavItems.map((item) => (
              <Link key={item.key} href={item.href} className={itemClass(pathname === item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          {projectId ? (
            <nav className="mt-6 space-y-2">
              <div className="px-2 pb-2 pt-1 text-[11px] uppercase tracking-[0.24em] text-slate-400">Project</div>
              {projectNavItems.map((item) => {
                const href = item.href(projectId);
                return (
                  <Link key={item.key} href={href} className={itemClass(pathname === href)}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          ) : null}
        </aside>

        <main className="min-w-0 flex-1">
          <div className="rounded-[28px] bg-white px-5 py-4 shadow-sm md:px-8">
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Release workspace</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950 md:text-4xl">{title ?? "Workspace"}</div>
              </div>
              <div className="flex justify-start md:justify-end">{statusBadge}</div>
            </div>
          </div>

          <div className="mt-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
