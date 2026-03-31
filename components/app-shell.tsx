import Link from "next/link";
import { ReactNode } from "react";
import { getProject } from "@/lib/mock-data";

function navigation(projectId?: string) {
  if (!projectId) return [{ href: "/projects", label: "Projects" }];
  return [
    { href: "/projects", label: "Projects" },
    { href: `/projects/${projectId}`, label: "Dashboard" },
    { href: `/projects/${projectId}/automation`, label: "Automation" },
    { href: `/projects/${projectId}/import`, label: "Import" },
  ];
}

export function AppShell({
  children,
  projectId,
}: {
  children: ReactNode;
  projectId?: string;
}) {
  const items = navigation(projectId);
  const project = projectId ? getProject(projectId) : undefined;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-[1600px] gap-6 px-4 py-6 lg:px-8">
        <aside className="hidden w-[272px] shrink-0 rounded-[32px] bg-gradient-to-b from-slate-950 via-slate-900 to-teal-950 p-5 text-white shadow-soft lg:block">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">ReleaseGovernance</div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white">Governance cockpit</h1>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A friendlier release command center for product, engineering and operations teams.
            </p>
          </div>

          {project ? (
            <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Active context</div>
              <div className="mt-4 text-3xl font-semibold text-white">{project.name}</div>
              <div className="mt-4 rounded-[22px] border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>Project / {project.id}</span>
                </div>
              </div>
            </div>
          ) : null}

          <nav className="mt-6 space-y-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
            <div className="text-xl font-semibold text-white">Responsive by default</div>
            <p className="mt-3 leading-7">
              Desktop gets a true dashboard shell. Mobile gets horizontal tab chips and a bottom quick-nav for one-hand use.
            </p>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          {projectId ? (
            <div className="mb-6 rounded-[28px] bg-white px-6 py-4 shadow-soft">
              <div className="grid items-center gap-3 md:grid-cols-[1fr,2fr,1fr]">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Release workspace</div>
                <div className="text-center text-2xl font-semibold text-slate-950">{project?.name ?? "Project"}</div>
                <div className="flex justify-end">
                  <span className="badge badge-warning">warning</span>
                </div>
              </div>
            </div>
          ) : null}
          {children}
        </main>
      </div>
    </div>
  );
}
