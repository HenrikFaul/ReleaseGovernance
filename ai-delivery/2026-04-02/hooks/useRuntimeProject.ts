"use client";

import { useEffect, useMemo, useState } from "react";
import type { RuntimeGateway } from "../lib/runtime/runtime-gateway";
import type { RuntimeProjectAggregate } from "../lib/runtime/workspace-runtime";

export function useRuntimeProject(
  gateway: RuntimeGateway,
  projectId: string,
) {
  const [project, setProject] = useState<RuntimeProjectAggregate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      const data = await gateway.getProject(projectId);
      if (!cancelled) {
        setProject(data);
        setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [gateway, projectId]);

  return useMemo(
    () => ({
      project,
      loading,
    }),
    [project, loading],
  );
}
