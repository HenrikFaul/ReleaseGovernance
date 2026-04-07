import * as XLSX from "xlsx";
import { CapabilityRecord, ImportedJiraIssue, IntegrationRef, JiraLink, ProjectImportBundle, ReleaseItem, Surface } from "@/lib/types";
import { getIntegrationCanonicalKey } from "@/lib/integrations";

export const CANONICAL_COLUMNS = ["record_type","record_id","parent_release_version","name","description","state","shipped_at","surfaces","backend_changed","shared_contract_changed","schema_changed","integrations","jira_keys","jira_summary","jira_description","jira_labels","jira_url","parity_status","environment_sensitive","notes","channel","tenant"] as const;

const surfaceMap: Record<string, Surface> = { web: "web", android: "mobile-android", "mobile-android": "mobile-android", iphone: "mobile-ios", ios: "mobile-ios", "mobile-ios": "mobile-ios", backend: "backend", "shared-contract": "shared-contract", "shared contract": "shared-contract" };

const catalog: Record<string, Partial<IntegrationRef>> = {
  supabase: { id: "supabase", name: "Supabase", category: "backend", state: "connected", environmentSensitive: true },
  google: { id: "google-oauth", name: "Google OAuth", category: "external-api", state: "connected", environmentSensitive: true },
  email: { id: "email-social-share", name: "Email and social share", category: "external-api", state: "connected" },
  social: { id: "email-social-share", name: "Email and social share", category: "external-api", state: "connected" },
  jira: { id: "jira", name: "Jira", category: "planning", state: "connected" },
  github: { id: "github", name: "GitHub", category: "source-control", state: "connected" },
  vercel: { id: "vercel", name: "Vercel", category: "deployment", state: "connected" },
  lovable: { id: "lovable", name: "Lovable", category: "design", state: "connected" },
  tailwind: { id: "tailwind", name: "Tailwind + shadcn/ui", category: "design", state: "connected" },
  framer: { id: "framer-motion", name: "Framer Motion", category: "design", state: "connected" }
};

type FeatureRow = { sourceId?: string; domain?: string; name: string; description: string; integrations: string[]; channel: string; tenant: string; status: string; deployed: string; jiraKeys: string[]; };

const slugify = (value: string) => value.toLowerCase().replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 80);
const stripHtml = (value: string) => value.replace(/<br\s*\/?>/gi, "\n").replace(/<\/?[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const splitList = (value: unknown) => String(value ?? "").split(/[,;\n|]/).map((x) => x.trim()).filter(Boolean);
const parseBool = (value: unknown) => ["true","yes","y","1"].includes(String(value ?? "").trim().toLowerCase());
const jiraKeys = (value: string) => Array.from(new Set(value.match(/[A-Z]+-\d+/g) ?? []));

function inferSurfaces(channel: string, status: string, integrations: string[]): Partial<Record<Surface, "planned" | "partial" | "shipped">> {
  const c = channel.toLowerCase(); const s = status.toLowerCase(); const hasSupabase = integrations.some((x) => x.includes("supabase"));
  const state = s.includes("jira/spec") || s.includes("planned") ? "planned" : s.includes("mixed") || s.includes("likely") || s.includes("partial") ? "partial" : "shipped";
  const out: Partial<Record<Surface, "planned" | "partial" | "shipped">> = {};
  if (c.includes("web")) out.web = state;
  if (c.includes("android")) out["mobile-android"] = state;
  if (c.includes("ios") || c.includes("iphone")) out["mobile-ios"] = state;
  if (c.includes("both") || c.includes("mindkett")) { out.web = state; out["mobile-android"] = state; out["mobile-ios"] = state; }
  if (hasSupabase) out.backend = state === "planned" ? "planned" : "shipped";
  if (hasSupabase || c.includes("both")) out["shared-contract"] = state === "planned" ? "planned" : state === "partial" ? "partial" : "shipped";
  return out;
}
const inferParity = (m: CapabilityRecord["statusBySurface"]) => {
  const values = Object.values(m);
  if (values.every((v) => v === "planned")) return "planned" as const;
  return values.some((v) => v === "planned") && values.some((v) => v === "shipped") ? "follow-up-required" as const : "aligned" as const;
};
const normalizeIntegrations = (arr: string[]) => {
  const result: string[] = [];
  for (const token of arr.flatMap((x) => splitList(x.toLowerCase()))) {
    for (const key of Object.keys(catalog)) {
      if (token.includes(key)) {
        const id = catalog[key].id!;
        if (!result.includes(id)) result.push(id);
      }
    }
  }
  return result;
};

function normalizeFeatureRow(cells: string[]): FeatureRow | null {
  const c = cells.map(stripHtml);
  if (c.length < 8) return null;
  if (c[0].toLowerCase().includes("feature domain") || c[0].toLowerCase().includes("business feature")) return null;
  if (c.length >= 10) return { sourceId: c[0], domain: c[1], name: c[2].split("\n")[0].trim(), description: `${c[2]} ${c[3]}`.trim(), integrations: splitList(c[4]), channel: c[5], tenant: c[6], status: c[7], deployed: c[8], jiraKeys: jiraKeys(c[9]) };
  return { sourceId: c[0], domain: c[0], name: c[0], description: `${c[0]} ${c[1]}`.trim(), integrations: splitList(c[2]), channel: c[3], tenant: c[4], status: c[5], deployed: c[6], jiraKeys: jiraKeys(c[7]) };
}

function parseHtmlInventory(text: string): FeatureRow[] {
  const trs = Array.from(text.matchAll(/<tr>([\s\S]*?)<\/tr>/gi)).map((m) => Array.from(m[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)).map((c) => c[1]));
  return trs.map(normalizeFeatureRow).filter(Boolean) as FeatureRow[];
}
function parseMarkdownInventory(text: string): FeatureRow[] {
  const rows = text.split(/\r?\n/).filter((l) => l.includes("|")).map((l) => l.trim()).filter((l) => !/^(\|?\s*:?-+:?\s*)+\|?$/.test(l)).map((l) => l.replace(/^\||\|$/g, "").split("|").map((x) => x.trim()));
  return rows.map(normalizeFeatureRow).filter(Boolean) as FeatureRow[];
}
function buildIntegrationsFromCaps(caps: CapabilityRecord[]): IntegrationRef[] {
  const ids = Array.from(new Set(caps.flatMap((c) => c.integrations)));
  return ids.map((id) => {
    const found = Object.values(catalog).find((x) => x.id === id);
    const entry = { id, name: found?.name ?? id, category: (found?.category ?? "external-api") as any, state: (found?.state ?? "connected") as any, environmentSensitive: found?.environmentSensitive, notes: found?.notes } satisfies IntegrationRef;
    return { ...entry, canonicalKey: getIntegrationCanonicalKey(entry) };
  });
}
function buildHeuristicReleases(caps: CapabilityRecord[]): ReleaseItem[] {
  const groups = [
    ["auth_foundation","web-v0.1.0-auth-foundation","released",["authentication shell","email identity","oauth identity","password recovery"]],
    ["guest_invite_join","web-v0.2.0-guest-invite-join","released",["temporary identity","invite consumption","temporary return path"]],
    ["event_creation_lifecycle","web-v0.3.0-event-lifecycle","released",["event creation","event lifecycle","event context"]],
    ["sharing_and_invites","web-v0.4.0-sharing-and-invites","released",["sharing"]],
    ["calendar_core","web-v0.5.0-calendar-core","released",["calendar rendering","voting interactions"]],
    ["range_and_day_details","web-v0.6.0-range-and-day-details","released",["range interactions","day details"]],
    ["ranking_and_decision","web-v0.7.0-ranking-and-decision","released",["ranking & decision","pin / decision lifecycle"]],
    ["notifications_center","web-v0.8.0-notifications","released",["notifications"]],
    ["personal_availability","web-v0.9.0-personal-availability","released",["personal availability"]],
    ["profile_and_security","web-v0.10.0-profile-security","released",["profile & security"]],
    ["social_graph","web-v0.11.0-social-graph","released",["social graph"]],
    ["admin_operations","web-v0.12.0-admin-ops","released",["admin / operations"]],
    ["enterprise_shell_membership","unreleased-enterprise-shell-membership","unreleased",["enterprise shell","membership"]],
    ["enterprise_leave_workflows","unreleased-enterprise-leave-workflows","unreleased",["request lifecycle","approval"]],
    ["enterprise_rules_settings","unreleased-enterprise-rules-settings","unreleased",["rules & settings","rules and settings"]],
    ["enterprise_import_export","unreleased-enterprise-import-export","unreleased",["import / migration","export & apis"]],
    ["enterprise_reporting","unreleased-enterprise-reporting","unreleased",["reporting"]],
    ["enterprise_api_audit_parity","unreleased-enterprise-api-audit-parity","unreleased",["notification & audit","api, data model, wireframes and qa"]]
  ] as const;
  const assigned = new Set<string>();
  const releases: ReleaseItem[] = [];
  for (const [id, version, state, matchers] of groups) {
    const matched = caps.filter((c) => !assigned.has(c.id) && matchers.some((m) => `${c.name} ${c.description ?? ""}`.toLowerCase().includes(m)));
    if (!matched.length) continue;
    matched.forEach((m) => assigned.add(m.id));
    const surfaces = new Set<Surface>();
    const integrations = new Set<string>();
    const jmap = new Map<string, JiraLink>();
    matched.forEach((c) => {
      Object.entries(c.statusBySurface).forEach(([surface, status]) => { if (status && (state === "unreleased" || status !== "planned")) surfaces.add(surface as Surface); });
      c.integrations.forEach((i) => integrations.add(i));
      c.jiraKeys.forEach((k) => jmap.set(k, { key: k, summary: c.name, status: state === "released" ? "Implemented / mixed" : "Planned", url: `https://hobbeast.atlassian.net/browse/${k}` }));
    });
    if (!surfaces.size) {
      surfaces.add("web");
      if (matched.some((m) => m.integrations.includes("supabase"))) {
        surfaces.add("backend");
        surfaces.add("shared-contract");
      }
    }
    releases.push({
      id,
      version,
      releaseState: state as any,
      surfaces: Array.from(surfaces),
      shippedAt: state === "released" ? "2026-03-28" : "Not shipped",
      backendChanged: matched.some((m) => m.integrations.includes("supabase")),
      sharedContractChanged: matched.some((m) => m.integrations.includes("supabase")),
      schemaChanged: matched.some((m) => m.integrations.includes("supabase")),
      integrationsChanged: Array.from(integrations),
      jiraBackfillRequired: matched.some((m) => m.jiraKeys.length === 0),
      deliveredCapabilities: matched.map((m) => m.id),
      releaseNotes: matched.map((m) => m.name).join(", "),
      jiraLinks: Array.from(jmap.values())
    });
  }
  return releases;
}
function bundleFromInventoryRows(rows: FeatureRow[]): ProjectImportBundle {
  const capabilities = rows.map((row) => {
    const integrations = normalizeIntegrations(row.integrations);
    const statusBySurface = inferSurfaces(row.channel, row.status, row.integrations.map((x) => x.toLowerCase()));
    return { id: slugify(row.sourceId || row.name), name: row.name, description: row.description, statusBySurface, parityStatus: inferParity(statusBySurface), integrations, jiraKeys: row.jiraKeys, source: "file-import" } satisfies CapabilityRecord;
  });
  const integrations = buildIntegrationsFromCaps(capabilities);
  const importedJiraIssues = Array.from(new Set(capabilities.flatMap((c) => c.jiraKeys))).map((key) => ({ id: `jira_${key.toLowerCase()}`, key, summary: "Imported from feature inventory", description: "", labels: [], url: `https://hobbeast.atlassian.net/browse/${key}`, source: "file-import" as const }));
  const releases = buildHeuristicReleases(capabilities);
  return { releases, capabilities, integrations, importedJiraIssues };
}
function parseCsv(text: string) {
  const [header, ...lines] = text.split(/\r?\n/).filter(Boolean); const headers = header.split(",").map((x) => x.trim());
  return lines.map((line) => { const vals = line.split(",").map((x) => x.trim()); return Object.fromEntries(headers.map((h,i) => [h, vals[i] ?? ""])); });
}
function parseCanonicalRows(rows: Record<string,string>[]): ProjectImportBundle {
  const releases: ReleaseItem[] = []; const capabilities: CapabilityRecord[] = []; const integrations: IntegrationRef[] = []; const importedJiraIssues: ImportedJiraIssue[] = [];
  for (const row of rows) {
    const type = String(row.record_type || "").trim().toLowerCase();
    if (type === "release") releases.push({ id: row.record_id || slugify(row.name || "release"), version: row.name || row.record_id || "release", releaseState: row.state === "unreleased" ? "unreleased" : "released", surfaces: splitList(row.surfaces).map((s) => surfaceMap[s.toLowerCase()]).filter(Boolean) as Surface[], shippedAt: row.shipped_at || "Unknown", backendChanged: parseBool(row.backend_changed), sharedContractChanged: parseBool(row.shared_contract_changed), schemaChanged: parseBool(row.schema_changed), integrationsChanged: splitList(row.integrations).map(slugify), jiraBackfillRequired: false, deliveredCapabilities: [], releaseNotes: row.description || "", jiraLinks: jiraKeys(String(row.jira_keys || "")).map((key) => ({ key, summary: row.jira_summary || "Imported release linkage", status: "Imported", url: row.jira_url || `https://hobbeast.atlassian.net/browse/${key}` })) });
    if (type === "capability") capabilities.push({ id: row.record_id || slugify(row.name || "capability"), name: row.name || row.record_id || "Capability", description: row.description || "", statusBySurface: { web: row.status_web as any, "mobile-android": row.status_mobile_android as any, "mobile-ios": row.status_mobile_ios as any, backend: row.status_backend as any, "shared-contract": row.status_shared_contract as any }, parityStatus: (row.parity_status as any) || "planned", integrations: splitList(row.integrations).map(slugify), jiraKeys: jiraKeys(String(row.jira_keys || "")), source: "file-import" });
    if (type === "integration") {
      const integration = { id: row.record_id || slugify(row.name || "integration"), name: row.name || row.record_id || "Integration", category: (row.integration_category as any) || "external-api", state: (row.state as any) || "connected", environmentSensitive: parseBool(row.environment_sensitive), notes: row.notes, url: (row as any).url, endpointName: (row as any).endpoint_name, endpointUrl: (row as any).endpoint_url, resourceLocation: (row as any).resource_location } satisfies IntegrationRef;
      integrations.push({ ...integration, canonicalKey: getIntegrationCanonicalKey(integration) });
    }
    if (type === "jira") {
      const key = row.record_id || jiraKeys(String(row.jira_keys || row.name || ""))[0]; if (!key) continue;
      importedJiraIssues.push({ id: `jira_${key.toLowerCase()}`, key, summary: row.jira_summary || row.name || key, description: row.jira_description || row.description || "", labels: splitList(row.jira_labels), url: row.jira_url || `https://hobbeast.atlassian.net/browse/${key}`, source: "file-import" });
    }
  }
  return { releases, capabilities, integrations, importedJiraIssues };
}
export async function parseImportFile(file: File): Promise<ProjectImportBundle> {
  const lower = file.name.toLowerCase();
  if (lower.endsWith(".xlsx") || lower.endsWith(".xls")) {
    const buffer = await file.arrayBuffer(); const workbook = XLSX.read(buffer, { type: "array" }); const sheet = workbook.Sheets[workbook.SheetNames[0]];
    return parseCanonicalRows(XLSX.utils.sheet_to_json<Record<string,string>>(sheet, { defval: "" }));
  }
  const text = await file.text();
  if (lower.endsWith(".csv")) return parseCanonicalRows(parseCsv(text));
  if (lower.endsWith(".md") || lower.endsWith(".markdown")) {
    const rows = [...parseMarkdownInventory(text), ...parseHtmlInventory(text)];
    if (rows.length) return bundleFromInventoryRows(rows);
  }
  throw new Error("Unsupported file or unable to detect importable content.");
}

export const templateMarkdown = `# ReleaseGovernance import template

## Releases
| record_type | record_id | name | state | shipped_at | surfaces | backend_changed | shared_contract_changed | schema_changed | integrations | jira_keys | description |
|---|---|---|---|---|---|---|---|---|---|---|---|
| release | rel_web_1_0_0 | web-v1.0.0 | released | 2026-03-28 | web,backend,shared-contract | true | true | true | supabase,geoapify | APP-101,APP-102 | First governed production release |

## Capabilities
| record_type | record_id | parent_release_version | name | description | status_web | status_mobile_android | status_mobile_ios | status_backend | status_shared_contract | parity_status | integrations | jira_keys |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| capability | normalized_places_search | web-v1.0.0 | Normalized place search | Canonical place search with provider orchestration | shipped | planned | planned | shipped | shipped | follow-up-required | supabase,geoapify,tomtom | APP-102 |

## Integrations
| record_type | record_id | name | integration_category | state | environment_sensitive | notes |
|---|---|---|---|---|---|---|
| integration | supabase | Supabase | backend | connected | true | Shared auth and persistence backend |

## Jira items
| record_type | record_id | jira_summary | jira_description | jira_labels | jira_url |
|---|---|---|---|---|---|
| jira | APP-102 | Normalized place search rollout | Governs place orchestration and contract alignment | surface:web,impact:shared-contract | https://example.atlassian.net/browse/APP-102 |`;

export function templateCsv() {
  return [
    CANONICAL_COLUMNS.join(","),
    "release,rel_web_1_0_0,,web-v1.0.0,First governed production release,released,2026-03-28,web|backend|shared-contract,true,true,true,supabase;geoapify,APP-101;APP-102,,,,,,,,",
    "capability,normalized_places_search,web-v1.0.0,Normalized place search,Canonical place search with provider orchestration,,,,,,,supabase;geoapify;tomtom,APP-102,,,,follow-up-required,,,,",
    "integration,supabase,,Supabase,Shared auth and persistence backend,connected,,,,,,,,,,,,,true,Environment sensitive,,",
    "jira,APP-102,,,,,,,,,,,Normalized place search rollout,Governs place orchestration and contract alignment,surface:web;impact:shared-contract,https://example.atlassian.net/browse/APP-102,,,,"
  ].join("\n");
}
export function createTemplateWorkbook() {
  const rows = [{ record_type: "release", record_id: "rel_web_1_0_0", name: "web-v1.0.0", description: "First governed production release", state: "released", shipped_at: "2026-03-28", surfaces: "web,backend,shared-contract", backend_changed: "true", shared_contract_changed: "true", schema_changed: "true", integrations: "supabase,geoapify", jira_keys: "APP-101,APP-102" },
  { record_type: "capability", record_id: "normalized_places_search", parent_release_version: "web-v1.0.0", name: "Normalized place search", description: "Canonical place search with provider orchestration", status_web: "shipped", status_mobile_android: "planned", status_mobile_ios: "planned", status_backend: "shipped", status_shared_contract: "shipped", parity_status: "follow-up-required", integrations: "supabase,geoapify,tomtom", jira_keys: "APP-102" },
  { record_type: "integration", record_id: "supabase", name: "Supabase", integration_category: "backend", state: "connected", environment_sensitive: "true", notes: "Shared auth and persistence backend" },
  { record_type: "jira", record_id: "APP-102", jira_summary: "Normalized place search rollout", jira_description: "Governs place orchestration and contract alignment", jira_labels: "surface:web,impact:shared-contract", jira_url: "https://example.atlassian.net/browse/APP-102" }];
  const ws = XLSX.utils.json_to_sheet(rows); const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, "import-template"); return wb;
}
