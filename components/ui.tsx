import { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode; }) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-soft sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">{eyebrow}</div> : null}
        <h2 className="mt-1 text-2xl font-semibold text-slate-900">{title}</h2>
        {description ? <p className="mt-2 max-w-3xl text-sm text-slate-600">{description}</p> : null}
      </div>
      {actions}
    </div>
  );
}

export function StatCard({ label, value, helper }: { label: string; value: string; helper?: string; }) {
  return (
    <div className="card p-5">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-semibold text-slate-900">{value}</div>
      {helper ? <div className="mt-2 text-xs text-slate-500">{helper}</div> : null}
    </div>
  );
}

export function SurfaceBadge({ surface }: { surface: string }) {
  return <span className="badge badge-info">{surface}</span>;
}

export function StatusBadge({ tone, children }: { tone: "neutral" | "success" | "warning" | "danger" | "info"; children: ReactNode; }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}
