import { ProjectRecord, TenantRecord } from "@/lib/types";

const hobbeastProject: ProjectRecord = {
  id: "project_hobbeast",
  tenantId: "tenant_releasegovernance",
  name: "Hobbeast",
  slug: "hobbeast",
  description: "Cross-platform community and event platform using shared Supabase backend, Lovable-assisted web UI and native Android client.",
  domain: "hobbeast.app",
  repositories: { web: "HenrikFaul/hobbeast", android: "HenrikFaul/Hobbeast-mobile" },
  jiraProjectKey: "HOB",
  lovableProject: "bc7f13b3-b1aa-49df-95d6-45b6a5bb7919",
  deploymentStatus: "warning",
  releases: [
    { id: "rel-android-0-19-0", version: "mobile-android-v0.19.0", releaseState: "released", surfaces: ["mobile-android"], shippedAt: "2026-03-28", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase","geoapify","mapy"], jiraBackfillRequired: false, deliveredCapabilities: ["organizer_mode","trip_planner","community_pulse"], releaseNotes: "Android onboarding, organizer runtime, trip planner persistence and backend-aware reminder journey.", jiraLinks: [{ key: "HOB-2", summary: "Organizer tools and attendee operations", status: "To Do", url: "https://hobbeast.atlassian.net/browse/HOB-2" }, { key: "HOB-8", summary: "Mobile retention, reminders and engagement loops", status: "To Do", url: "https://hobbeast.atlassian.net/browse/HOB-8" }] },
    { id: "rel-web-0-9-0", version: "web-v0.9.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-03-27", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["geoapify","tomtom","supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["normalized_places_search","external_discovery","organizer_mode"], releaseNotes: "Normalized place search, provider orchestration, event surface updates and organizer foundation.", jiraLinks: [{ key: "HOB-12", summary: "Integrate Ticketmaster sync", status: "To Do", url: "https://hobbeast.atlassian.net/browse/HOB-12" }, { key: "HOB-13", summary: "Integrate SeatGeek as a second source", status: "To Do", url: "https://hobbeast.atlassian.net/browse/HOB-13" }] }
  ],
  capabilities: [
    { id: "normalized_places_search", name: "Normalized place search", description: "Place search with provider orchestration, fallback handling and normalized venue payloads.", statusBySurface: { web: "shipped", "mobile-android": "partial", backend: "shipped", "shared-contract": "shipped" }, parityStatus: "follow-up-required", integrations: ["geoapify","tomtom"], jiraKeys: ["HOB-12","HOB-13"], firstRelease: { web: "web-v0.9.0", backend: "web-v0.9.0" } },
    { id: "organizer_mode", name: "Organizer mode", description: "Organizer workspace, attendee operations and supporting backend entities.", statusBySurface: { web: "partial", "mobile-android": "shipped", backend: "shipped", "shared-contract": "shipped" }, parityStatus: "follow-up-required", integrations: [], jiraKeys: ["HOB-2"], firstRelease: { "mobile-android": "mobile-android-v0.19.0" } },
    { id: "community_pulse", name: "Community pulse", description: "Community and retention signals, reminder loops and demand insight surfaces.", statusBySurface: { web: "planned", "mobile-android": "partial", backend: "partial" }, parityStatus: "planned", integrations: [], jiraKeys: ["HOB-162"] }
  ],
  integrations: [
    { id: "github", name: "GitHub", category: "source-control", state: "connected", notes: "Web and Android repositories linked" },
    { id: "jira", name: "Jira", category: "planning", state: "connected", notes: "Project HOB used for product implementation tracking" },
    { id: "vercel", name: "Vercel", category: "deployment", state: "connected", notes: "Previews and environments used for web release visibility" },
    { id: "supabase", name: "Supabase", category: "backend", state: "connected", environmentSensitive: true, notes: "Shared backend and migrations are central to parity" },
    { id: "geoapify", name: "Geoapify", category: "external-api", state: "connected", environmentSensitive: true, notes: "Primary places provider" },
    { id: "tomtom", name: "TomTom", category: "external-api", state: "attention", environmentSensitive: true, notes: "Fallback provider, requires key and parity review" },
    { id: "mapy", name: "Mapy.cz", category: "external-api", state: "connected", environmentSensitive: true, notes: "Route and map context" },
    { id: "lovable", name: "Lovable", category: "design", state: "connected", notes: "UI iteration source, not source of truth" }
  ],
  parityAlerts: [
    { id: "alert-1", severity: "critical", sourceSurface: "web", affectedSurface: "mobile-android", reason: "Shared place payload and provider ranking changed. Android client should revalidate venue and trip chain parsing.", jiraKey: "HOB-220", state: "tracked" },
    { id: "alert-2", severity: "warning", sourceSurface: "backend", affectedSurface: "web", reason: "Organizer runtime entities and audit schema changed. Web organizer shell should align empty states and actions.", jiraKey: "HOB-204", state: "open" }
  ],
  importedJiraIssues: []
};

const syncfolkProject: ProjectRecord = { id: "project_syncfolk", tenantId: "tenant_releasegovernance", name: "Syncfolk", slug: "syncfolk", description: "B2C-first scheduling platform with a mature web product, shared Supabase backend and a deep enterprise planning backlog.", repositories: { web: "syncfolk-webapp-snapshot" }, jiraProjectKey: "SYN", deploymentStatus: "warning", releases: [], capabilities: [], integrations: [{ id: "supabase", name: "Supabase", category: "backend", state: "connected", environmentSensitive: true, notes: "Shared backend for auth, database and edge functions." }], parityAlerts: [], importedJiraIssues: [] };

export const tenants: TenantRecord[] = [{ id: "tenant_releasegovernance", name: "ReleaseGovernance Demo Workspace", plan: "growth", projects: [hobbeastProject, syncfolkProject] }];
export function getTenant(tenantId: string) { return tenants.find((tenant) => tenant.id === tenantId); }
export function getProject(projectId: string) { return tenants.flatMap((tenant) => tenant.projects).find((project) => project.id === projectId); }
