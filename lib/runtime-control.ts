import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

export type RuntimeControlItem = {
  id: string;
  label: string;
  href?: string;
  hrefTemplate?: string;
};

export type RuntimeControl = {
  version: number;
  sidebar: {
    showProjectSpecificNavigationOnlyWhenProjectSelected: boolean;
    globalItems: RuntimeControlItem[];
    projectItems: RuntimeControlItem[];
  };
  projectUpload: {
    enabled: boolean;
    sources: string[];
    jira: { enabled: boolean; acceptedInputs: string[] };
    github: { enabled: boolean; acceptedInputs: string[] };
    hosting: { enabled: boolean; acceptedProviders: string[] };
    behaviors: Record<string, boolean>;
  };
};

const DEFAULT_RUNTIME_CONTROL: RuntimeControl = {
  version: 1,
  sidebar: {
    showProjectSpecificNavigationOnlyWhenProjectSelected: true,
    globalItems: [{ id: "projects", label: "Projects", href: "/projects" }],
    projectItems: [
      { id: "dashboard", label: "Dashboard", hrefTemplate: "/projects/{projectId}" },
      { id: "releases", label: "Releases", hrefTemplate: "/projects/{projectId}/releases" },
      { id: "capabilities", label: "Capabilities", hrefTemplate: "/projects/{projectId}/capabilities" },
      { id: "integrations", label: "Integrations", hrefTemplate: "/projects/{projectId}/integrations" },
      { id: "traceability", label: "Traceability", hrefTemplate: "/projects/{projectId}/traceability" },
      { id: "automation", label: "Automation", hrefTemplate: "/projects/{projectId}/automation" },
      { id: "import", label: "Import", hrefTemplate: "/projects/{projectId}/import" },
    ],
  },
  projectUpload: {
    enabled: true,
    sources: ["markdown", "csv", "excel", "jira", "github", "hosting", "changelog"],
    jira: { enabled: true, acceptedInputs: ["base-url-plus-project-key", "issue-url", "project-url", "jql-url"] },
    github: { enabled: true, acceptedInputs: ["repository-url", "owner-repo"] },
    hosting: { enabled: true, acceptedProviders: ["vercel", "supabase", "custom"] },
    behaviors: {
      jiraIssuesBecomeImportedJiraIssues: true,
      jiraIssuesAlsoBecomeCapabilityCandidates: true,
      githubAndHostingCanGenerateReleaseCandidates: true,
      importedDataAppliesToCurrentProjectOnly: true,
    },
  },
};

export function getRuntimeControl(): RuntimeControl {
  try {
    const filePath = path.join(process.cwd(), "config", "releasegovernance-runtime-control.yaml");
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = YAML.parse(raw) as RuntimeControl;
    return parsed ?? DEFAULT_RUNTIME_CONTROL;
  } catch {
    return DEFAULT_RUNTIME_CONTROL;
  }
}

export function resolveNavigation(projectId?: string) {
  const config = getRuntimeControl();
  const globalItems = config.sidebar.globalItems.map((item) => ({
    id: item.id,
    label: item.label,
    href: item.href ?? "/projects",
  }));

  if (!projectId && config.sidebar.showProjectSpecificNavigationOnlyWhenProjectSelected) {
    return globalItems;
  }

  const projectItems = config.sidebar.projectItems.map((item) => ({
    id: item.id,
    label: item.label,
    href: (item.hrefTemplate ?? "/projects").replaceAll("{projectId}", projectId ?? ""),
  }));

  return [...globalItems, ...projectItems];
}
