"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { useProjectRecord } from "@/hooks/useProjectRecord";
import { groupIntegrations } from "@/lib/integrations";
import { IntegrationRef, IntegrationTestResult } from "@/lib/types";

type TestState = Record<string, { loading: boolean; result?: IntegrationTestResult; error?: string }>;

function IntegrationCard({ integration, state, onTest }: { integration: IntegrationRef; state?: TestState[string]; onTest: () => void }) {
  const activeResult = state?.result ?? integration.lastTestResult;

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-semibold text-slate-900">{integration.name}</div>
          <div className="mt-1 text-sm text-slate-500">{integration.category}</div>
        </div>
        <StatusBadge tone={integration.state === "connected" ? "success" : integration.state === "attention" ? "warning" : "info"}>
          {integration.state}
        </StatusBadge>
      </div>
      {integration.notes ? <p className="mt-3 text-sm text-slate-600">{integration.notes}</p> : null}
      {integration.endpointName ? <p className="mt-3 text-xs text-slate-600">Endpoint: {integration.endpointName}</p> : null}
      {integration.endpointUrl ? <a className="mt-1 block text-xs text-brand-700 break-all underline" href={integration.endpointUrl} target="_blank" rel="noreferrer">{integration.endpointUrl}</a> : null}
      {!integration.endpointUrl && integration.resourceLocation ? <a className="mt-1 block text-xs text-brand-700 break-all underline" href={integration.resourceLocation} target="_blank" rel="noreferrer">{integration.resourceLocation}</a> : null}
      {!integration.endpointUrl && !integration.resourceLocation && integration.url ? <a className="mt-1 block text-xs text-brand-700 break-all underline" href={integration.url} target="_blank" rel="noreferrer">{integration.url}</a> : null}
      {integration.environmentSensitive ? <div className="mt-3 text-xs text-amber-700">Environment or secret sensitivity applies.</div> : null}

      <div className="mt-4 flex items-center gap-3">
        <button onClick={onTest} disabled={Boolean(state?.loading)} className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white disabled:opacity-60">
          {state?.loading ? "Testing..." : "Test integration"}
        </button>
        {state?.error ? <span className="text-xs text-red-700">{state.error}</span> : null}
      </div>

      {activeResult ? (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
          <div>Status: <span className={activeResult.normalizedStatus === "success" ? "text-emerald-700" : "text-red-700"}>{activeResult.normalizedStatus}</span></div>
          {typeof activeResult.httpStatusCode === "number" ? <div>HTTP: {activeResult.httpStatusCode}</div> : null}
          {activeResult.errorMessage ? <div>Error: {activeResult.errorMessage}</div> : null}
          <div>Checked: {new Date(activeResult.checkedAt).toLocaleString()}</div>
        </div>
      ) : null}
    </div>
  );
}

export default function IntegrationsPage({ params }: { params: { projectId: string } }) {
  const { project } = useProjectRecord(params.projectId);
  const [tests, setTests] = useState<TestState>({});
  const [allLoading, setAllLoading] = useState(false);
  const [allError, setAllError] = useState<string | null>(null);

  const grouped = useMemo(() => groupIntegrations(project?.integrations ?? []), [project?.integrations]);

  if (!project) return <AppShell projectId={params.projectId}><div className="card p-6">Project not found.</div></AppShell>;

  const inventory = grouped.flatMap((section) => section.items);

  const runSingleTest = async (integrationId: string) => {
    setTests((current) => ({ ...current, [integrationId]: { loading: true } }));
    try {
      const response = await fetch(`/api/projects/${project.id}/integrations/test`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "single", integrationId, integrations: inventory }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Integration test failed.");
      const result = payload.results?.[integrationId] as IntegrationTestResult | undefined;
      if (!result) throw new Error("No result received for integration.");
      setTests((current) => ({ ...current, [integrationId]: { loading: false, result } }));
    } catch (error) {
      setTests((current) => ({ ...current, [integrationId]: { loading: false, error: error instanceof Error ? error.message : "Integration test failed." } }));
    }
  };

  const runAllTests = async () => {
    setAllError(null);
    setAllLoading(true);
    setTests((current) => Object.fromEntries(inventory.map((integration) => [integration.id, { ...current[integration.id], loading: true }])));
    try {
      const response = await fetch(`/api/projects/${project.id}/integrations/test`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "all", integrations: inventory }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Bulk integration test failed.");
      setTests((current) => {
        const next = { ...current };
        for (const integration of inventory) {
          next[integration.id] = { loading: false, result: payload.results?.[integration.id] };
        }
        return next;
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Bulk integration test failed.";
      setAllError(message);
      setTests((current) => Object.fromEntries(inventory.map((integration) => [integration.id, { ...current[integration.id], loading: false, error: message }])));
    } finally {
      setAllLoading(false);
    }
  };

  return (
    <AppShell projectId={project.id}>
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Integrations"
          title={`${project.name} toolchain and API registry`}
          description="Connected source systems, deployment surfaces and externally governed services are grouped here."
          actions={<div className="flex items-center gap-2"><StatusBadge tone="neutral">{inventory.length} total</StatusBadge><button onClick={runAllTests} disabled={allLoading} className="rounded-full bg-brand-600 px-3 py-1.5 text-xs font-medium text-white disabled:opacity-60">{allLoading ? "Testing all..." : "Test all"}</button></div>}
        />
        {allError ? <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{allError}</div> : null}

        <div className="space-y-6">
          {grouped.map((section) => (
            <section key={section.category} className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">{section.label}</h2>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {section.items.map((integration) => (
                  <IntegrationCard key={integration.id} integration={integration} state={tests[integration.id]} onTest={() => runSingleTest(integration.id)} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
