import { ReactNode } from "react";

function toneDot(tone: "neutral" | "success" | "warning" | "danger" | "info") {
  const map = {
    neutral: "bg-slate-400",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-rose-500",
    info: "bg-brand-500",
  } as const;

  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${map[tone]}`} aria-hidden />;
}

export function SectionHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode; }) {
  return (
    <div className="card overflow-hidden p-6 sm:p-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]">{title}</h2>
          {description ? <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px]">{description}</p> : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
    </div>
  );
}

export function StatCard({ label, value, helper }: { label: string; value: string; helper?: string; }) {
  return (
    <div className="card card-hover p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-medium text-slate-500">{label}</div>
          <div className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]">{value}</div>
          {helper ? <div className="mt-3 max-w-[18rem] text-xs leading-5 text-slate-500">{helper}</div> : null}
        </div>
        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-3 shadow-sm">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700" />
        </div>
      </div>
    </div>
  );
}

export function SurfaceBadge({ surface }: { surface: string }) {
  return (
    <span className="badge badge-info capitalize">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
      {surface}
    </span>
  );
}

export function StatusBadge({ tone, children }: { tone: "neutral" | "success" | "warning" | "danger" | "info"; children: ReactNode; }) {
  return <span className={`badge badge-${tone}`}>{toneDot(tone)}{children}</span>;
}
