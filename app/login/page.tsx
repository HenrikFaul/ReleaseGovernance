import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-soft lg:grid-cols-[1.2fr,0.8fr]">
        <div className="bg-slate-950 px-8 py-12 text-white lg:px-12">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-100">ReleaseGovernance</div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight">Know exactly what shipped, where, and why.</h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300">
            Unify Jira traceability, GitHub releases, shared backend impact, parity follow-up and external integration governance in one product.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-4">Multi-tenant B2B workspace model</div>
            <div className="rounded-2xl bg-white/10 p-4">Cross-surface impact engine</div>
            <div className="rounded-2xl bg-white/10 p-4">Release center and capability registry</div>
            <div className="rounded-2xl bg-white/10 p-4">GitHub, Jira, Vercel and Supabase visibility</div>
          </div>
        </div>
        <div className="px-8 py-12 lg:px-12">
          <div className="text-sm font-medium text-slate-500">Sign in</div>
          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm text-slate-600">Email</span>
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" defaultValue="henrik@example.com" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-600">Password</span>
              <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" defaultValue="password" />
            </label>
            <Link href="/projects" className="block rounded-2xl bg-brand-600 px-4 py-3 text-center font-medium text-white hover:bg-brand-700">
              Continue to workspace
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            MVP auth shell for the first tenant experience. Replace with Supabase Auth or enterprise SSO in production.
          </p>
        </div>
      </div>
    </div>
  );
}
