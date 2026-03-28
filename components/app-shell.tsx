import Link from "next/link";
import { ReactNode } from "react";
import { ProjectRecord } from "@/lib/types";

interface AppShellProps {
  children: ReactNode;
  project?: ProjectRecord;
}

export function AppShell({ children, project }: AppShellProps) {
  const navigation = project
    ? [
        { href: "/projects", label: "Projects" },
        { href: `/projects/${project.id}`, label: "Dashboard" },
        { href: `/projects/${project.id}/releases`, label: "Releases" },
        { href: `/projects/${project.id}/capabilities`, label: "Capabilities" },
        { href: `/projects/${project.id}/integrations`, label: "Integrations" },
        { href: `/projects/${project.id}/traceability`, label: "Traceability" },
        { href: `/projects/${project.id}/automation`, label: "Automation" },
      ]
    : [{ href: "/projects", label: "Projects" }];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 lg:px-8">
        <aside className="hidden w-72 shrink-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft lg:block">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">ReleaseGovernance</div>
            <h1 className="mt-2 text-xl font-semibold text-slate-900">B2B governance cockpit</h1>
            <p className="mt-2 text-sm text-slate-600">Multi-tenant release governance for web, mobile and shared backend products.</p>
            {project ? (
              <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                Selected project
                <div className="mt-1 font-semibold text-slate-900">{project.name}</div>
              </div>
            ) : null}
          </div>
          <nav className="mt-8 space-y-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
