"use client";

import { useEffect, useMemo, useState } from "react";
import { mergeProjectWithOverrides } from "@/lib/project-overrides";
import { ProjectRecord } from "@/lib/types";

export function useProjectRecord(projectId: string) {
  const [project, setProject] = useState<ProjectRecord | undefined>(() => mergeProjectWithOverrides(projectId));

  useEffect(() => {
    const sync = () => setProject(mergeProjectWithOverrides(projectId));
    sync();
    window.addEventListener("focus", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("focus", sync);
      window.removeEventListener("storage", sync);
    };
  }, [projectId]);

  const stats = useMemo(() => {
    if (!project) return { releasedCount: 0, unreleasedCount: 0, importedJiraCount: 0, candidateCount: 0 };
    return {
      releasedCount: project.releases.filter((r) => (r.releaseState ?? "released") === "released").length,
      unreleasedCount: project.releases.filter((r) => r.releaseState === "unreleased").length,
      importedJiraCount: project.importedJiraIssues?.length ?? 0,
      candidateCount: project.releaseCandidates?.length ?? 0,
    };
  }, [project]);

  return { project, stats, refresh: () => setProject(mergeProjectWithOverrides(projectId)) };
}
