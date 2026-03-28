import { ProjectRecord, TenantRecord } from "@/lib/types";

const hobbeastProject: ProjectRecord = {
  id: "project_hobbeast",
  tenantId: "tenant_releasegovernance",
  name: "Hobbeast",
  slug: "hobbeast",
  description: "Cross-platform community and event platform using shared Supabase backend, Lovable-assisted web UI and native Android client.",
  domain: "hobbeast.app",
  repositories: {
    web: "HenrikFaul/hobbeast",
    android: "HenrikFaul/Hobbeast-mobile",
  },
  jiraProjectKey: "HOB",
  lovableProject: "bc7f13b3-b1aa-49df-95d6-45b6a5bb7919",
  deploymentStatus: "warning",
  releases: [
    {
      id: "rel-android-0-19-0",
      version: "mobile-android-v0.19.0",
      surfaces: ["mobile-android"],
      shippedAt: "2026-03-28",
      backendChanged: true,
      sharedContractChanged: true,
      schemaChanged: true,
      integrationsChanged: ["supabase", "geoapify", "mapy"],
      jiraBackfillRequired: false,
      deliveredCapabilities: ["organizer_mode", "trip_planner", "community_pulse"],
      releaseNotes: "Android onboarding, organizer runtime, trip planner persistence and backend-aware reminder journey.",
      jiraLinks: [
        { key: "HOB-2", summary: "Organizer tools and attendee operations", status: "To Do", url: "https://hobbeast.atlassian.net/browse/HOB-2" },
        { key: "HOB-8", summary: "Mobile retention, reminders and engagement loops", status: "To Do", url: "https://hobbeast.atlassian.net/browse/HOB-8" },
      ],
    },
    {
      id: "rel-web-0-9-0",
      version: "web-v0.9.0",
      surfaces: ["web", "backend", "shared-contract"],
      shippedAt: "2026-03-27",
      backendChanged: true,
      sharedContractChanged: true,
      schemaChanged: true,
      integrationsChanged: ["geoapify", "tomtom", "supabase"],
      jiraBackfillRequired: false,
      deliveredCapabilities: ["normalized_places_search", "external_discovery", "organizer_mode"],
      releaseNotes: "Normalized place search, provider orchestration, event surface updates and organizer foundation.",
      jiraLinks: [
        { key: "HOB-12", summary: "Integrate Ticketmaster sync", status: "To Do", url: "https://hobbeast.atlassian.net/browse/HOB-12" },
        { key: "HOB-13", summary: "Integrate SeatGeek as a second source", status: "To Do", url: "https://hobbeast.atlassian.net/browse/HOB-13" },
      ],
    },
  ],
  capabilities: [
    {
      id: "normalized_places_search",
      name: "Normalized place search",
      statusBySurface: {
        web: "shipped",
        "mobile-android": "partial",
        backend: "shipped",
        "shared-contract": "shipped",
      },
      parityStatus: "follow-up-required",
      integrations: ["geoapify", "tomtom"],
      jiraKeys: ["HOB-12", "HOB-13"],
      firstRelease: {
        web: "web-v0.9.0",
        backend: "web-v0.9.0",
      },
    },
    {
      id: "organizer_mode",
      name: "Organizer mode",
      statusBySurface: {
        web: "partial",
        "mobile-android": "shipped",
        backend: "shipped",
        "shared-contract": "shipped",
      },
      parityStatus: "follow-up-required",
      integrations: [],
      jiraKeys: ["HOB-2"],
      firstRelease: {
        "mobile-android": "mobile-android-v0.19.0",
      },
    },
    {
      id: "community_pulse",
      name: "Community pulse",
      statusBySurface: {
        web: "planned",
        "mobile-android": "partial",
        backend: "partial",
      },
      parityStatus: "planned",
      integrations: [],
      jiraKeys: ["HOB-162"],
    },
  ],
  integrations: [
    { id: "github", name: "GitHub", category: "source-control", state: "connected", notes: "Web and Android repositories linked" },
    { id: "jira", name: "Jira", category: "planning", state: "connected", notes: "Project HOB used for product implementation tracking" },
    { id: "vercel", name: "Vercel", category: "deployment", state: "planned", notes: "Previews and environments expected for web release visibility" },
    { id: "supabase", name: "Supabase", category: "backend", state: "connected", environmentSensitive: true, notes: "Shared backend and migrations are central to parity" },
    { id: "geoapify", name: "Geoapify", category: "external-api", state: "connected", environmentSensitive: true, notes: "Primary places provider" },
    { id: "tomtom", name: "TomTom", category: "external-api", state: "attention", environmentSensitive: true, notes: "Fallback provider, requires key and parity review" },
    { id: "mapy", name: "Mapy.cz", category: "external-api", state: "connected", environmentSensitive: true, notes: "Route and map context" },
    { id: "lovable", name: "Lovable", category: "design", state: "connected", notes: "UI iteration source, not source of truth" },
  ],
  parityAlerts: [
    {
      id: "alert-1",
      severity: "critical",
      sourceSurface: "web",
      affectedSurface: "mobile-android",
      reason: "Shared place payload and provider ranking changed. Android client should revalidate venue and trip chain parsing.",
      jiraKey: "HOB-220",
      state: "tracked",
    },
    {
      id: "alert-2",
      severity: "warning",
      sourceSurface: "backend",
      affectedSurface: "web",
      reason: "Organizer runtime entities and audit schema changed. Web organizer shell should align empty states and actions.",
      jiraKey: "HOB-204",
      state: "open",
    },
  ],
};

const syncfolkProject: ProjectRecord = {
  id: "project_syncfolk",
  tenantId: "tenant_releasegovernance",
  name: "Syncfolk",
  slug: "syncfolk",
  description: "B2C-first scheduling platform with a mature web product, Supabase-backed runtime, and a detailed enterprise absence-planning backlog.",
  repositories: {
    web: "syncfolk-webapp-snapshot",
  },
  jiraProjectKey: "SYN",
  deploymentStatus: "warning",
  releases: [
    {
      id: "rel-syncfolk-b2c-baseline",
      version: "web-b2c-baseline-v0.1.0",
      surfaces: ["web", "backend", "shared-contract"],
      shippedAt: "2026-03-28",
      backendChanged: true,
      sharedContractChanged: true,
      schemaChanged: true,
      integrationsChanged: ["supabase", "google-oauth", "email-social-share"],
      jiraBackfillRequired: false,
      deliveredCapabilities: [
        "auth_and_guest_access",
        "event_lifecycle_and_sharing",
        "calendar_voting_engine",
        "decision_notifications",
        "personal_availability_social_graph",
        "admin_operations",
      ],
      releaseNotes: "Governance-imported baseline of the current B2C web product: auth, guest access, event lifecycle, sharing, calendar voting, pinned day, notifications, profile/social features and admin basics.",
      jiraLinks: [
        { key: "SYN-5", summary: "Authentication and temporary-user identity flows", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-5" },
        { key: "SYN-6", summary: "Event lifecycle, creation and invite/share model", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-6" },
        { key: "SYN-7", summary: "Calendar voting, drag interactions and personal availability", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-7" },
        { key: "SYN-8", summary: "Pinned day and notification-centered decision support", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-8" },
        { key: "SYN-10", summary: "Profile, friendships, favorites and admin basics", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-10" },
      ],
    },
  ],
  capabilities: [
    {
      id: "auth_and_guest_access",
      name: "Auth and guest access",
      statusBySurface: {
        web: "shipped",
        backend: "shipped",
        "shared-contract": "partial",
        "mobile-android": "planned",
        "mobile-ios": "planned",
      },
      parityStatus: "follow-up-required",
      integrations: ["supabase", "google-oauth"],
      jiraKeys: ["SYN-5", "SYN-300", "SYN-310", "SYN-440"],
      firstRelease: {
        web: "web-b2c-baseline-v0.1.0",
        backend: "web-b2c-baseline-v0.1.0",
      },
    },
    {
      id: "event_lifecycle_and_sharing",
      name: "Event lifecycle and sharing",
      statusBySurface: {
        web: "shipped",
        backend: "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned",
      },
      parityStatus: "follow-up-required",
      integrations: ["supabase", "email-social-share"],
      jiraKeys: ["SYN-6", "SYN-400", "SYN-430", "SYN-440"],
      firstRelease: {
        web: "web-b2c-baseline-v0.1.0",
        backend: "web-b2c-baseline-v0.1.0",
      },
    },
    {
      id: "calendar_voting_engine",
      name: "Calendar voting engine",
      statusBySurface: {
        web: "shipped",
        backend: "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned",
      },
      parityStatus: "follow-up-required",
      integrations: ["supabase"],
      jiraKeys: ["SYN-7", "SYN-500", "SYN-510", "SYN-520"],
      firstRelease: {
        web: "web-b2c-baseline-v0.1.0",
        backend: "web-b2c-baseline-v0.1.0",
      },
    },
    {
      id: "decision_notifications",
      name: "Decision support and notifications",
      statusBySurface: {
        web: "shipped",
        backend: "shipped",
        "shared-contract": "partial",
        "mobile-android": "planned",
        "mobile-ios": "planned",
      },
      parityStatus: "follow-up-required",
      integrations: ["supabase"],
      jiraKeys: ["SYN-8", "SYN-610", "SYN-620", "SYN-630"],
      firstRelease: {
        web: "web-b2c-baseline-v0.1.0",
        backend: "web-b2c-baseline-v0.1.0",
      },
    },
    {
      id: "personal_availability_social_graph",
      name: "Personal availability and social graph",
      statusBySurface: {
        web: "shipped",
        backend: "shipped",
        "shared-contract": "partial",
        "mobile-android": "planned",
        "mobile-ios": "planned",
      },
      parityStatus: "follow-up-required",
      integrations: ["supabase"],
      jiraKeys: ["SYN-540", "SYN-700", "SYN-710"],
      firstRelease: {
        web: "web-b2c-baseline-v0.1.0",
        backend: "web-b2c-baseline-v0.1.0",
      },
    },
    {
      id: "admin_operations",
      name: "Admin operations",
      statusBySurface: {
        web: "shipped",
        backend: "shipped",
      },
      parityStatus: "aligned",
      integrations: ["supabase"],
      jiraKeys: ["SYN-730", "SYN-731", "SYN-732", "SYN-733"],
      firstRelease: {
        web: "web-b2c-baseline-v0.1.0",
        backend: "web-b2c-baseline-v0.1.0",
      },
    },
    {
      id: "enterprise_absence_planning",
      name: "Enterprise absence-planning mode",
      statusBySurface: {
        web: "planned",
        backend: "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned",
      },
      parityStatus: "planned",
      integrations: ["jira", "supabase"],
      jiraKeys: ["SYN-13", "SYN-14", "SYN-16", "SYN-17", "SYN-18", "SYN-19", "SYN-20"],
    },
    {
      id: "enterprise_reporting_import_export",
      name: "Enterprise reporting, import and export",
      statusBySurface: {
        web: "planned",
        backend: "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned",
      },
      parityStatus: "planned",
      integrations: ["jira", "supabase"],
      jiraKeys: ["SYN-19", "SYN-158", "SYN-161", "SYN-172", "SYN-186", "SYN-187"],
    },
  ],
  integrations: [
    { id: "github", name: "GitHub", category: "source-control", state: "attention", notes: "Governance seed is based on an uploaded current webapp repository snapshot; direct repo linkage should be wired next." },
    { id: "jira", name: "Jira", category: "planning", state: "connected", notes: "Project SYN contains both implemented B2C work and a detailed enterprise backlog." },
    { id: "supabase", name: "Supabase", category: "backend", state: "connected", environmentSensitive: true, notes: "Auth, Postgres and Edge Functions are the core runtime backbone of the current product." },
    { id: "google-oauth", name: "Google OAuth", category: "external-api", state: "connected", environmentSensitive: true, notes: "Used via Supabase Auth for lower-friction registration, sign-in and guest upgrade paths." },
    { id: "email-social-share", name: "Email and social share deep links", category: "external-api", state: "connected", notes: "Used for event sharing through email, mailto and social deep-link flows." },
    { id: "lovable", name: "Lovable / Vite frontend shell", category: "design", state: "connected", notes: "Current web workflow is described as a Lovable/Vite-based frontend shell and iteration environment." },
  ],
  parityAlerts: [
    {
      id: "sync-alert-1",
      severity: "warning",
      sourceSurface: "web",
      affectedSurface: "mobile-android",
      reason: "The current feature inventory shows a mature B2C web product, but native Android parity is still planned rather than runtime-implemented.",
      state: "open",
    },
    {
      id: "sync-alert-2",
      severity: "warning",
      sourceSurface: "web",
      affectedSurface: "mobile-ios",
      reason: "The current feature inventory describes web-first delivery and future parity rules, but no live iPhone runtime surface is represented yet.",
      state: "open",
    },
    {
      id: "sync-alert-3",
      severity: "critical",
      sourceSurface: "web",
      affectedSurface: "backend",
      reason: "Enterprise absence-planning, approval workflows, rule engine, export and import are richly specified in Jira, but not implemented in the current runtime backend.",
      state: "tracked",
    },
  ],
};

export const tenants: TenantRecord[] = [
  {
    id: "tenant_releasegovernance",
    name: "ReleaseGovernance Demo Workspace",
    plan: "growth",
    projects: [hobbeastProject, syncfolkProject],
  },
];

export function getTenant(tenantId: string) {
  return tenants.find((tenant) => tenant.id === tenantId);
}

export function getProject(projectId: string) {
  return tenants.flatMap((tenant) => tenant.projects).find((project) => project.id === projectId);
}
