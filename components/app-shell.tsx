import Link from "next/link";
import { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
  projectId?: string;
  projectName?: string;
}

export function AppShell({ children, projectId, projectName }: AppShellProps) {
  const projectNavigation = projectId
    ? [
        { href: `/projects/${projectId}`, label: "Dashboard" },
        { href: `/projects/${projectId}/releases`, label: "Releases" },
        { href: `/projects/${projectId}/capabilities`, label: "Capabilities" },
        { href: `/projects/${projectId}/integrations`, label: "Integrations" },
        { href: `/projects/${projectId}/traceability`, label: "Traceability" },
        { href: `/projects/${projectId}/automation`, label: "Automation" },
      ]
    : [];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 lg:px-8">
        <aside className="hidden w-72 shrink-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft lg:block">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">ReleaseGovernance</div>
            <h1 className="mt-2 text-xl font-semibold text-slate-900">B2B governance cockpit</h1>
            <p className="mt-2 text-sm text-slate-600">Multi-tenant release governance for web, mobile and shared backend products.</p>
          </div>

          <nav className="mt-8 space-y-2">
            <Link href="/projects" className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Projects
            </Link>

            {projectId ? (
              <>
                <div className="px-4 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {projectName ?? "Selected project"}
                </div>
                {projectNavigation.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
                    {item.label}
                  </Link>
                ))}
              </>
            ) : null}
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
