import React, { ReactNode } from "react";

type ProjectContextHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export default function ProjectContextHeader({
  eyebrow,
  title,
  description,
  actions,
}: ProjectContextHeaderProps) {
  return React.createElement(
    "section",
    { className: "rounded-[32px] bg-white p-6 shadow-sm md:p-8" },
    React.createElement(
      "div",
      { className: "inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-brand-700" },
      eyebrow
    ),
    React.createElement(
      "div",
      { className: "mt-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between" },
      React.createElement(
        "div",
        null,
        React.createElement("h1", { className: "text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl" }, title),
        React.createElement("p", { className: "mt-4 max-w-4xl text-lg leading-8 text-slate-600" }, description)
      ),
      actions ? React.createElement("div", null, actions) : null
    )
  );
}
