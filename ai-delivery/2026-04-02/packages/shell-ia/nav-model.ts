export type GlobalNavItem = {
  key: string;
  label: string;
  href: string;
  description?: string;
};

export type ProjectNavItem = {
  key: string;
  label: string;
  href: (projectId: string) => string;
  description?: string;
};

export const globalNavItems: GlobalNavItem[] = [
  {
    key: "portfolio",
    label: "Portfolio",
    href: "/portfolio",
    description: "Workspace and portfolio-level governance overview",
  },
  {
    key: "projects",
    label: "Projects",
    href: "/projects",
    description: "Project registry and onboarding entry",
  },
];

export const projectNavItems: ProjectNavItem[] = [
  { key: "overview", label: "Overview", href: (projectId) => `/projects/${projectId}/overview` },
  { key: "releases", label: "Releases", href: (projectId) => `/projects/${projectId}/releases` },
  { key: "capabilities", label: "Capabilities", href: (projectId) => `/projects/${projectId}/capabilities` },
  { key: "parity", label: "Parity", href: (projectId) => `/projects/${projectId}/parity` },
  { key: "traceability", label: "Traceability", href: (projectId) => `/projects/${projectId}/traceability` },
  { key: "integrations", label: "Integrations", href: (projectId) => `/projects/${projectId}/integrations` },
  { key: "imports", label: "Imports", href: (projectId) => `/projects/${projectId}/import` },
  { key: "automation", label: "Automation", href: (projectId) => `/projects/${projectId}/automation` },
];
