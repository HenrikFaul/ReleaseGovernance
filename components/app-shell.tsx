"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { resolveNavigation } from "@/lib/runtime-control";

type NavItem = ReturnType<typeof resolveNavigation>[number];

function NavIcon({ id }: { id: string }) {
  const cls = "h-5 w-5";

  switch (id) {
    case "projects":
      return <svg viewBox="0 0 24 24" fill="none" className={cls}><path d="M4 6.5h16M4 12h16M4 17.5h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
    case "dashboard":
      return <svg viewBox="0 0 24 24" fill="none" className={cls}><path d="M4 13.5h7V20H4v-6.5ZM13 4h7v9h-7V4ZM13 16h7v4h-7v-4ZM4 4h7v6.5H4V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>;
    case "releases":
      return <svg viewBox="0 0 24 24" fill="none" className={cls}><path d="M12 4v16M7 8l5-5 5 5M7 16l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "capabilities":
      return <svg viewBox="0 0 24 24" fill="none" className={cls}><path d="M6 7h12M6 12h12M6 17h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="18" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "integrations":
      return <svg viewBox="0 0 24 24" fill="none" className={cls}><path d="M8.5 8.5 5 12l3.5 3.5M15.5 8.5 19 12l-3.5 3.5M10.5 18h3M10.5 6h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "traceability":
      return <svg viewBox="0 0 24 24" fill="none" className={cls}><path d="M9 7h7a3 3 0 0 1 0 6h-3m2 4H8a3 3 0 1 1 0-6h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "automation":
      return <svg viewBox="0 0 24 24" fill="none" className={cls}><path d="M12 3v4M12 17v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M3 12h4M17 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "import":
      return <svg viewBox="0 0 24 24" fill="none" className={cls}><path d="M12 4v10M8.5 10.5 12 14l3.5-3.5M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    default:
      return <svg viewBox="0 0 24 24" fill="none" className={cls}><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" /></svg>;
  }
}

function isActive(pathname: string, item: NavItem) {
  if (!item.href) return false;
  if (item.href === "/projects") return pathname === "/projects";
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function AppShell({
  children,
  projectId,
  projectName,
}: {
  children: ReactNode;
  projectId?: string;
  projectName?: string;
}) {
  const pathname = usePathname();
  const items = resolveNavigation(projectId);
  const primaryMobile = items.slice(0, Math.min(projectId ? 5 : 4, items.length));

  return (
    <div className="min-h-screen">
      <div className="shell-frame">
        <aside className="shell-sidebar">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-100">ReleaseGovernance</div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white">Governance cockpit</h1>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              A friendlier release command center for product, engineering and operations teams.
            </p>
          </div>

          <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Active context</div>
            <div className="mt-3 text-base font-semibold text-white">{projectName ?? "Workspace overview"}</div>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
              <span className="h-2 w-2 rounded-full bg-accent-500" />
              {projectId ? `Project / ${projectId}` : "No project selected"}
            </div>
          </div>

          <nav className="mt-6 flex-1 space-y-1.5 overflow-y-auto pr-1">
            {items.map((item) => {
              const active = isActive(pathname, item);
              return (
                <Link key={item.href} href={item.href} className={`nav-link ${active ? "nav-link-active" : ""}`}>
                  <NavIcon id={item.id} />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 rounded-[28px] border border-white/10 bg-white/5 p-4 text-sm text-slate-300 backdrop-blur-sm">
            <div className="font-semibold text-white">Responsive by default</div>
            <p className="mt-2 leading-6">Desktop gets a true dashboard shell. Mobile gets horizontal tab chips and a bottom quick-nav for one-hand use.</p>
          </div>
        </aside>

        <div className="shell-main">
          <header className="shell-topbar">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Release workspace</div>
                <div className="mt-1 truncate text-lg font-semibold tracking-tight text-slate-950">{projectName ?? "Projects"}</div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-500 sm:block">Scope-aware navigation</div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                  Governance UI vNext
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
              {items.map((item) => {
                const active = isActive(pathname, item);
                return (
                  <Link key={item.href} href={item.href} className={`nav-link-mobile ${active ? "nav-link-mobile-active" : ""}`}>
                    <NavIcon id={item.id} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </header>

          <main className="flex-1">{children}</main>
        </div>
      </div>

      <nav className="mobile-bottom-nav" aria-label="Quick navigation">
        {primaryMobile.map((item) => {
          const active = isActive(pathname, item);
          return (
            <Link key={item.href} href={item.href} className={`mobile-bottom-item ${active ? "mobile-bottom-item-active" : ""}`}>
              <NavIcon id={item.id} />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
