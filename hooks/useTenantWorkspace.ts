"use client";

import { useEffect, useMemo, useState } from "react";
import { getTenant } from "@/lib/mock-data";
import { readCustomProjects } from "@/lib/project-overrides";
import { ProjectRecord } from "@/lib/types";

type WorkspaceState = {
  tenantName: string;
  plan: "starter" | "growth" | "enterprise";
  projects: ProjectRecord[];
};

function buildWorkspace(tenantId: string): WorkspaceState {
  const tenant = getTenant(tenantId);
  const seedProjects = tenant?.projects ?? [];
  const customProjects = readCustomProjects().filter((project) => project.tenantId === tenantId);

  const seen = new Set<string>();
  const projects: ProjectRecord[] = [];
  for (const project of [...seedProjects, ...customProjects]) {
    if (seen.has(project.id)) continue;
    seen.add(project.id);
    projects.push(project);
  }

  return {
    tenantName: tenant?.name ?? "ReleaseGovernance Workspace",
    plan: tenant?.plan ?? "growth",
    projects,
  };
}

export function useTenantWorkspace(tenantId: string) {
  const [workspace, setWorkspace] = useState<WorkspaceState>(() => buildWorkspace(tenantId));

  useEffect(() => {
    const sync = () => setWorkspace(buildWorkspace(tenantId));
    sync();
    window.addEventListener("focus", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("focus", sync);
      window.removeEventListener("storage", sync);
    };
  }, [tenantId]);

  return useMemo(
    () => ({
      ...workspace,
      refresh: () => setWorkspace(buildWorkspace(tenantId)),
    }),
    [workspace, tenantId]
  );
}
