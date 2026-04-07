import { IntegrationRef, IntegrationTestResult } from "@/lib/types";

export const INTEGRATION_CATEGORY_ORDER: IntegrationRef["category"][] = [
  "source-control",
  "planning",
  "deployment",
  "backend",
  "external-api",
  "design",
  "documentation",
];

export const INTEGRATION_CATEGORY_LABELS: Record<IntegrationRef["category"], string> = {
  "source-control": "Source Control",
  planning: "Planning",
  deployment: "Deployment",
  backend: "Backend",
  "external-api": "External APIs",
  design: "Design",
  documentation: "Documentation",
};

function safeUrlHost(value?: string) {
  if (!value) return "";
  try {
    return new URL(value).host.toLowerCase();
  } catch {
    return "";
  }
}

export function getIntegrationCanonicalKey(integration: IntegrationRef): string {
  if (integration.canonicalKey?.trim()) return integration.canonicalKey.trim().toLowerCase();
  const endpoint = integration.endpointUrl ?? integration.url;
  return `${integration.category}:${integration.name.trim().toLowerCase()}:${safeUrlHost(endpoint) || "no-host"}`;
}

function getInventoryKey(integration: IntegrationRef): string {
  const canonical = getIntegrationCanonicalKey(integration);
  if (integration.instanceKey?.trim()) {
    return `${canonical}:instance:${integration.instanceKey.trim().toLowerCase()}`;
  }
  return canonical;
}

export function normalizeIntegrationInventory(items: IntegrationRef[]): IntegrationRef[] {
  const map = new Map<string, IntegrationRef>();
  for (const integration of items) {
    const normalized = {
      ...integration,
      canonicalKey: getIntegrationCanonicalKey(integration),
    } satisfies IntegrationRef;
    const key = getInventoryKey(normalized);
    if (!map.has(key)) map.set(key, normalized);
  }
  return Array.from(map.values());
}

export function groupIntegrations(items: IntegrationRef[]) {
  const normalized = normalizeIntegrationInventory(items);
  return INTEGRATION_CATEGORY_ORDER.map((category) => ({
    category,
    label: INTEGRATION_CATEGORY_LABELS[category],
    items: normalized
      .filter((item) => item.category === category)
      .sort((a, b) => a.name.localeCompare(b.name)),
  })).filter((section) => section.items.length > 0);
}

function asSuccess(testMode: "single" | "all", httpStatusCode?: number): IntegrationTestResult {
  return {
    testMode,
    reachable: true,
    httpStatusCode,
    normalizedStatus: "success",
    checkedAt: new Date().toISOString(),
  };
}

function asFailure(testMode: "single" | "all", errorKind: IntegrationTestResult["errorKind"], errorMessage: string, httpStatusCode?: number): IntegrationTestResult {
  return {
    testMode,
    reachable: false,
    httpStatusCode,
    normalizedStatus: "failure",
    errorKind,
    errorMessage,
    checkedAt: new Date().toISOString(),
  };
}

export async function runIntegrationTest(integration: IntegrationRef, testMode: "single" | "all"): Promise<IntegrationTestResult> {
  const endpoint = integration.endpointUrl ?? integration.url;
  if (endpoint && /^https?:\/\//i.test(endpoint)) {
    try {
      const response = await fetch(endpoint, { method: "GET", cache: "no-store" });
      if (response.ok) return asSuccess(testMode, response.status);
      return asFailure(testMode, "http", `HTTP integration returned status ${response.status}.`, response.status);
    } catch (error) {
      return asFailure(testMode, "network", error instanceof Error ? error.message : "Network request failed.");
    }
  }

  return asFailure(
    testMode,
    "operational",
    `Operational check is unavailable for ${integration.name} because no HTTP endpoint URL is configured.`,
  );
}
