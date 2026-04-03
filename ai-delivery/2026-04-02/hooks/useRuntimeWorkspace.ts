"use client";

import { useEffect, useMemo, useState } from "react";
import type { RuntimeGateway } from "../lib/runtime/runtime-gateway";
import type { RuntimeWorkspaceAggregate } from "../lib/runtime/workspace-runtime";

export function useRuntimeWorkspace(
  gateway: RuntimeGateway,
  workspaceId: string,
) {
  const [workspace, setWorkspace] = useState<RuntimeWorkspaceAggregate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      const data = await gateway.getWorkspace(workspaceId);
      if (!cancelled) {
        setWorkspace(data);
        setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [gateway, workspaceId]);

  return useMemo(
    () => ({
      workspace,
      loading,
    }),
    [workspace, loading],
  );
}
