"use client";

import { useEffect, useMemo, useState } from "react";
import { getProject } from "@/lib/mock-data";
import { mergeProjectWithOverrides } from "@/lib/project-overrides";

export function useProjectRecord(projectId: string) {
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    const sync = () => setNonce((n) => n + 1);
    window.addEventListener("storage", sync);
    window.addEventListener("focus", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("focus", sync);
    };
  }, []);

  const project = useMemo(() => {
    const merged = mergeProjectWithOverrides(projectId);
    return merged ?? getProject(projectId);
  }, [projectId, nonce]);

  return {
    project,
    refresh: () => setNonce((n) => n + 1),
  };
}
