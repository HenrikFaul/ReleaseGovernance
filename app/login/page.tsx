import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-dark-hero" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_36%)]" />

      <div className="relative grid w-full max-w-6xl overflow-hidden rounded-[34px] border border-white/10 bg-white/10 shadow-panel backdrop-blur-xl lg:grid-cols-[1.15fr,0.85fr]">
        <div className="relative overflow-hidden px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(92,126,255,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_30%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-100">
              <span className="h-2 w-2 rounded-full bg-accent-500" />
              ReleaseGovernance
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A younger, clearer release workspace for modern delivery teams.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-[15px]">
              Unify Jira traceability, GitHub releases, shared backend impact, parity follow-up, deployment visibility and operational governance in one responsive product surface.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Project-aware dashboard shell",
                "Cross-surface impact visibility",
                "Release center + capability registry",
                "Responsive web and mobile navigation",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/12 bg-white/8 p-4 text-sm text-slate-100 backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/92 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="mx-auto max-w-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Workspace access
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">Sign in</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Enter the workspace shell. In production, replace this placeholder with Supabase Auth or enterprise SSO.
            </p>

            <div className="mt-8 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-600">Email</span>
                <input defaultValue="henrik@example.com" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-600">Password</span>
                <input type="password" defaultValue="password" />
              </label>
              <Link href="/projects" className="block rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800">
                Continue to workspace
              </Link>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-500">
              This redesign keeps functionality intact while modernizing the visual language, navigation hierarchy and responsiveness.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
