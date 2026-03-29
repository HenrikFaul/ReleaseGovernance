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

const syncfolkProject: ProjectRecord = {
  id: "project_syncfolk",
  tenantId: "tenant_releasegovernance",
  name: "Syncfolk",
  slug: "syncfolk",
  description: "B2C-first scheduling platform with a mature web product, shared Supabase backend and a deep enterprise planning backlog.",
  repositories: { web: "syncfolk-webapp-snapshot" },
  jiraProjectKey: "SYN",
  deploymentStatus: "warning",
  releases: [
    { id: "rel-sync-01", version: "web-v0.1.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-01-05", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase","lovable"], jiraBackfillRequired: false, deliveredCapabilities: ["auth_shell","design_system"], releaseNotes: "Auth shell, route protection and design-system baseline.", jiraLinks: [{ key: "SYN-4", summary: "App shell, navigation and design system", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-4" },{ key: "SYN-200", summary: "Auth/app route shell", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-200" },{ key: "SYN-210", summary: "Design system and theme behavior", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-210" }] },
    { id: "rel-sync-02", version: "web-v0.2.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-01-12", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase","google-oauth"], jiraBackfillRequired: false, deliveredCapabilities: ["email_identity","oauth_identity","password_recovery"], releaseNotes: "Email identity, verification, Google OAuth and password recovery flows.", jiraLinks: [{ key: "SYN-5", summary: "Authentication, identity and guest access", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-5" },{ key: "SYN-300", summary: "Email/password auth cluster", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-300" },{ key: "SYN-301", summary: "Registration and verification", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-301" },{ key: "SYN-302", summary: "Google OAuth flow", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-302" },{ key: "SYN-320", summary: "Forgot/reset password", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-320" }] },
    { id: "rel-sync-03", version: "web-v0.3.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-01-20", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["temporary_identity","temporary_return_path"], releaseNotes: "Temporary guest model, inactivity logout, upgrade path and temp return flow.", jiraLinks: [{ key: "SYN-310", summary: "Temporary / guest session model", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-310" },{ key: "SYN-311", summary: "Guest inactivity handling", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-311" },{ key: "SYN-312", summary: "Return link lifecycle", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-312" },{ key: "SYN-313", summary: "Guest upgrade path", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-313" }] },
    { id: "rel-sync-04", version: "web-v0.4.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-01-28", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase","date-fns"], jiraBackfillRequired: false, deliveredCapabilities: ["event_creation","event_lifecycle","event_context"], releaseNotes: "Create event, edit lifecycle and selected event context restore.", jiraLinks: [{ key: "SYN-6", summary: "Event calendar lifecycle, templates and sharing", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-6" },{ key: "SYN-400", summary: "Create event dialog", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-400" },{ key: "SYN-410", summary: "Edit / state maintenance", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-410" },{ key: "SYN-420", summary: "Event selector and current-event context restore", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-420" }] },
    { id: "rel-sync-05", version: "web-v0.5.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-02-04", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase","email-social-share"], jiraBackfillRequired: false, deliveredCapabilities: ["sharing_management","invite_consumption"], releaseNotes: "Share tokens, grouped share UX and join-event invite consumption.", jiraLinks: [{ key: "SYN-430", summary: "Share links and grouped sharing UX", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-430" },{ key: "SYN-431", summary: "Share token lifecycle", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-431" },{ key: "SYN-440", summary: "Join-event flow", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-440" },{ key: "SYN-441", summary: "Registered invite consumption", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-441" },{ key: "SYN-442", summary: "Anonymous invite consumption", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-442" }] },
    { id: "rel-sync-06", version: "web-v0.6.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-02-11", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase","date-fns"], jiraBackfillRequired: false, deliveredCapabilities: ["calendar_rendering","single_day_voting"], releaseNotes: "Calendar rendering, eligibility logic and single-day vote toggles.", jiraLinks: [{ key: "SYN-500", summary: "Calendar rendering and eligibility", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-500" },{ key: "SYN-501", summary: "Responsive calendar-first layout", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-501" },{ key: "SYN-510", summary: "Availability mode selector and single-day voting", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-510" }] },
    { id: "rel-sync-07", version: "web-v0.7.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-02-18", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["range_batch_voting","day_details"], releaseNotes: "Drag-range voting, batch controls and day-detail surfaces.", jiraLinks: [{ key: "SYN-520", summary: "Drag-range and batch interactions", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-520" },{ key: "SYN-521", summary: "Batch apply/clear behavior", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-521" },{ key: "SYN-512", summary: "Info icon / day detail surfaces", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-512" }] },
    { id: "rel-sync-08", version: "web-v0.8.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-02-25", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["ranking_decision","pin_decision_lifecycle"], releaseNotes: "Vote ranking, pinned day creation, modification and unlock lifecycle.", jiraLinks: [{ key: "SYN-600", summary: "Vote ranking", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-600" },{ key: "SYN-610", summary: "Pinned day lifecycle", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-610" },{ key: "SYN-611", summary: "Tie resolution", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-611" },{ key: "SYN-613", summary: "Unlock / reopen behavior", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-613" }] },
    { id: "rel-sync-09", version: "web-v0.9.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-03-03", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["notifications_center"], releaseNotes: "Notification center, unread logic and event-driven notification behaviors.", jiraLinks: [{ key: "SYN-620", summary: "Notification center UI", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-620" },{ key: "SYN-621", summary: "Unread/read/delete semantics", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-621" },{ key: "SYN-630", summary: "Event-driven notification triggers", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-630" }] },
    { id: "rel-sync-10", version: "web-v0.10.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-03-10", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["personal_availability"], releaseNotes: "Personal availability calendar, batch fill and copy-to-event behavior.", jiraLinks: [{ key: "SYN-540", summary: "Personal availability calendar", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-540" },{ key: "SYN-7", summary: "Voting calendar and personal availability cluster", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-7" }] },
    { id: "rel-sync-11", version: "web-v0.11.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-03-17", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["profile_security","social_graph"], releaseNotes: "Profile self-service, password change, account deletion, friendships and favorites.", jiraLinks: [{ key: "SYN-700", summary: "Profile page and account summary", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-700" },{ key: "SYN-710", summary: "Friends, favorites and social graph", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-710" },{ key: "SYN-720", summary: "Account deletion flow", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-720" },{ key: "SYN-320", summary: "Password recovery / change cluster", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-320" }] },
    { id: "rel-sync-12", version: "web-v0.12.0", releaseState: "released", surfaces: ["web","backend","shared-contract"], shippedAt: "2026-03-24", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["admin_operations"], releaseNotes: "Admin shell, users/events oversight and admin role operations.", jiraLinks: [{ key: "SYN-730", summary: "Admin dashboard / users / events shell", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-730" },{ key: "SYN-731", summary: "Admin users operations", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-731" },{ key: "SYN-732", summary: "Admin events operations", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-732" },{ key: "SYN-733", summary: "Admin role toggle", status: "Implemented / mixed", url: "https://hobbeast.atlassian.net/browse/SYN-733" }] },

    { id: "rel-sync-u1", version: "enterprise-shell-v0.1.0", releaseState: "unreleased", surfaces: ["web","backend","shared-contract","mobile-android","mobile-ios"], shippedAt: "planned", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase","jira"], jiraBackfillRequired: false, deliveredCapabilities: ["enterprise_shell","enterprise_role_governance"], releaseNotes: "Enterprise shell, navigation, workspace mode and role/governance foundation.", jiraLinks: [{ key: "SYN-13", summary: "Enterprise absence-planning mode foundation", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-13" },{ key: "SYN-14", summary: "Enterprise shell and navigation", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-14" },{ key: "SYN-154", summary: "API/data model foundation", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-154" }] },
    { id: "rel-sync-u2", version: "enterprise-leave-lifecycle-v0.1.0", releaseState: "unreleased", surfaces: ["web","backend","shared-contract","mobile-android","mobile-ios"], shippedAt: "planned", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["enterprise_leave_request_lifecycle","enterprise_approval_inbox"], releaseNotes: "Enterprise leave request lifecycle, approval inbox and actor/state governance.", jiraLinks: [{ key: "SYN-16", summary: "Leave request lifecycle", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-16" },{ key: "SYN-17", summary: "Approval flow", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-17" },{ key: "SYN-18", summary: "Approval inbox", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-18" },{ key: "SYN-150", summary: "Approval inbox active story", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-150" }] },
    { id: "rel-sync-u3", version: "enterprise-rule-templates-v0.1.0", releaseState: "unreleased", surfaces: ["web","backend","shared-contract","mobile-android","mobile-ios"], shippedAt: "planned", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["enterprise_rule_engine","enterprise_templates_staffing"], releaseNotes: "Rule engine, staffing coverage and template logic for enterprise planning.", jiraLinks: [{ key: "SYN-19", summary: "Enterprise reporting / export backbone umbrella", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-19" },{ key: "SYN-20", summary: "Resource planning and staffing rules", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-20" },{ key: "SYN-156", summary: "Canonical entities and rule-oriented model", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-156" }] },
    { id: "rel-sync-u4", version: "enterprise-reporting-v0.1.0", releaseState: "unreleased", surfaces: ["web","backend","shared-contract","mobile-android","mobile-ios"], shippedAt: "planned", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["enterprise_reporting_dashboard","enterprise_kpis"], releaseNotes: "Enterprise dashboards, reports, KPIs and management visibility.", jiraLinks: [{ key: "SYN-167", summary: "Endpoint catalog / reporting contracts", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-167" },{ key: "SYN-168", summary: "Wireframe and screen appendix", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-168" },{ key: "SYN-169", summary: "Reporting and KPI design", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-169" },{ key: "SYN-173", summary: "Reporting layer", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-173" }] },
    { id: "rel-sync-u5", version: "enterprise-export-import-v0.1.0", releaseState: "unreleased", surfaces: ["web","backend","shared-contract","mobile-android","mobile-ios"], shippedAt: "planned", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["excel","xml","html","supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["enterprise_export_apis","enterprise_import_migration"], releaseNotes: "Export to Excel/XML/HTML, API-ready outputs and spreadsheet migration/import flow.", jiraLinks: [{ key: "SYN-158", summary: "Spreadsheet import and migration", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-158" },{ key: "SYN-161", summary: "Export to Excel/XML/HTML and integration-ready APIs", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-161" },{ key: "SYN-172", summary: "Import validation / dry-run", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-172" },{ key: "SYN-179", summary: "Export contract and downstream consumers", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-179" },{ key: "SYN-186", summary: "Import rejected rows and error reporting", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-186" },{ key: "SYN-187", summary: "Import commit summary", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-187" }] },
    { id: "rel-sync-u6", version: "enterprise-audit-compliance-v0.1.0", releaseState: "unreleased", surfaces: ["web","backend","shared-contract","mobile-android","mobile-ios"], shippedAt: "planned", backendChanged: true, sharedContractChanged: true, schemaChanged: true, integrationsChanged: ["supabase"], jiraBackfillRequired: false, deliveredCapabilities: ["enterprise_notification_audit","enterprise_security_parity"], releaseNotes: "Enterprise notification matrix, immutable audit trail, QA/spec depth, security/privacy and mobile parity requirements.", jiraLinks: [{ key: "SYN-159", summary: "Enterprise notification matrix", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-159" },{ key: "SYN-160", summary: "Immutable audit history", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-160" },{ key: "SYN-171", summary: "Notification and audit retention", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-171" },{ key: "SYN-174", summary: "QA scenarios", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-174" },{ key: "SYN-175", summary: "Permission matrix", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-175" },{ key: "SYN-180", summary: "Security/privacy rules", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-180" },{ key: "SYN-188", summary: "Mobile parity appendix", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-188" },{ key: "SYN-192", summary: "Final acceptance / governance depth", status: "Spec only", url: "https://hobbeast.atlassian.net/browse/SYN-192" }] }
  ],
  capabilities: [
    { id: "auth_shell", name: "Auth shell and entry UX", description: "Unified auth landing, route protection, design-system-based entry shell and redirect-aware onboarding.", statusBySurface: { web: "shipped", backend: "partial", "shared-contract": "partial", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "follow-up-required", integrations: ["supabase","lovable"], jiraKeys: ["SYN-4","SYN-200","SYN-210"], firstRelease: { web: "web-v0.1.0", backend: "web-v0.1.0" } },
    { id: "design_system", name: "Design system and theming", description: "Shared UI primitives, theming and polished auth/app shell presentation.", statusBySurface: { web: "shipped" }, parityStatus: "planned", integrations: [], jiraKeys: ["SYN-4","SYN-210"], firstRelease: { web: "web-v0.1.0" } },
    { id: "email_identity", name: "Email identity and verification", description: "Email/password sign-up, sign-in, verification and account activation handling.", statusBySurface: { web: "shipped", backend: "shipped", "shared-contract": "partial" }, parityStatus: "follow-up-required", integrations: ["supabase"], jiraKeys: ["SYN-5","SYN-300","SYN-301","SYN-303"], firstRelease: { web: "web-v0.2.0", backend: "web-v0.2.0" } },
    { id: "oauth_identity", name: "Google OAuth identity", description: "Google OAuth sign-in and upgrade flow.", statusBySurface: { web: "shipped", backend: "shipped" }, parityStatus: "follow-up-required", integrations: ["supabase","google-oauth"], jiraKeys: ["SYN-5","SYN-302"], firstRelease: { web: "web-v0.2.0" } },
    { id: "password_recovery", name: "Password recovery and reset", description: "Forgot password, reset password and in-app security recovery flows.", statusBySurface: { web: "shipped", backend: "shipped" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-320","SYN-321"], firstRelease: { web: "web-v0.2.0" } },
    { id: "temporary_identity", name: "Temporary guest identity", description: "Temporary guest session model, inactivity timeout and upgrade path.", statusBySurface: { web: "shipped", backend: "shipped", "shared-contract": "partial" }, parityStatus: "follow-up-required", integrations: ["supabase"], jiraKeys: ["SYN-310","SYN-311","SYN-312","SYN-313"], firstRelease: { web: "web-v0.3.0", backend: "web-v0.3.0" } },
    { id: "temporary_return_path", name: "Temporary return path", description: "Return links and verification-code-based recovery for temporary participants.", statusBySurface: { web: "shipped", backend: "partial" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-310","SYN-440"], firstRelease: { web: "web-v0.3.0" } },
    { id: "event_creation", name: "Event creation", description: "Create event dialog with templates, dates and deadline handling.", statusBySurface: { web: "shipped", backend: "shipped", "shared-contract": "partial" }, parityStatus: "follow-up-required", integrations: ["supabase","date-fns"], jiraKeys: ["SYN-6","SYN-400","SYN-401","SYN-402","SYN-403"], firstRelease: { web: "web-v0.4.0", backend: "web-v0.4.0" } },
    { id: "event_lifecycle", name: "Event lifecycle management", description: "Edit, delete, inactive handling and lifecycle state maintenance.", statusBySurface: { web: "shipped", backend: "shipped", "shared-contract": "partial" }, parityStatus: "follow-up-required", integrations: ["supabase"], jiraKeys: ["SYN-410","SYN-411","SYN-412"], firstRelease: { web: "web-v0.4.0", backend: "web-v0.4.0" } },
    { id: "event_context", name: "Event context restore", description: "Current-event selector, default event selection and route/context restoration.", statusBySurface: { web: "shipped", backend: "partial" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-420","SYN-421","SYN-422"], firstRelease: { web: "web-v0.4.0" } },
    { id: "sharing_management", name: "Sharing management", description: "Share token lifecycle, grouped social share UX, email and deep-link sharing.", statusBySurface: { web: "shipped", backend: "shipped", "shared-contract": "partial" }, parityStatus: "follow-up-required", integrations: ["supabase","email-social-share"], jiraKeys: ["SYN-430","SYN-431","SYN-432","SYN-433"], firstRelease: { web: "web-v0.5.0", backend: "web-v0.5.0" } },
    { id: "invite_consumption", name: "Invite consumption", description: "Join-event flows for registered and anonymous participants.", statusBySurface: { web: "shipped", backend: "shipped", "shared-contract": "partial" }, parityStatus: "follow-up-required", integrations: ["supabase"], jiraKeys: ["SYN-440","SYN-441","SYN-442"], firstRelease: { web: "web-v0.5.0", backend: "web-v0.5.0" } },
    { id: "calendar_rendering", name: "Calendar rendering and eligibility", description: "Calendar-first layout, month rendering and vote eligibility guards.", statusBySurface: { web: "shipped", backend: "partial" }, parityStatus: "planned", integrations: ["date-fns"], jiraKeys: ["SYN-500","SYN-501","SYN-502","SYN-503"], firstRelease: { web: "web-v0.6.0" } },
    { id: "single_day_voting", name: "Single-day voting", description: "Availability mode selector and per-day vote toggle behavior.", statusBySurface: { web: "shipped", backend: "shipped" }, parityStatus: "follow-up-required", integrations: ["supabase"], jiraKeys: ["SYN-510","SYN-511"], firstRelease: { web: "web-v0.6.0", backend: "web-v0.6.0" } },
    { id: "range_batch_voting", name: "Range and batch voting", description: "Drag-range interactions and side-panel batch apply/clear voting actions.", statusBySurface: { web: "shipped", backend: "shipped" }, parityStatus: "follow-up-required", integrations: ["supabase"], jiraKeys: ["SYN-520","SYN-521","SYN-522"], firstRelease: { web: "web-v0.7.0", backend: "web-v0.7.0" } },
    { id: "day_details", name: "Day details surfaces", description: "Info icon / long-press details and day-level participant insight surfaces.", statusBySurface: { web: "shipped", backend: "partial" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-512"], firstRelease: { web: "web-v0.7.0" } },
    { id: "ranking_decision", name: "Ranking and decision support", description: "Top-date ranking and decision-support views.", statusBySurface: { web: "shipped", backend: "partial" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-600","SYN-601","SYN-602"], firstRelease: { web: "web-v0.8.0" } },
    { id: "pin_decision_lifecycle", name: "Pinned day lifecycle", description: "Pinned day creation, modification, unlock and freeze behavior.", statusBySurface: { web: "shipped", backend: "shipped", "shared-contract": "partial" }, parityStatus: "follow-up-required", integrations: ["supabase"], jiraKeys: ["SYN-610","SYN-611","SYN-612","SYN-613"], firstRelease: { web: "web-v0.8.0", backend: "web-v0.8.0" } },
    { id: "notifications_center", name: "Notifications center", description: "Unread/read/delete notifications and event-driven triggers.", statusBySurface: { web: "shipped", backend: "partial" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-620","SYN-621","SYN-622","SYN-623","SYN-630","SYN-631","SYN-632","SYN-633"], firstRelease: { web: "web-v0.9.0" } },
    { id: "personal_availability", name: "Personal availability", description: "Personal availability calendar, batch fill and copy-to-event behavior.", statusBySurface: { web: "shipped", backend: "shipped", "shared-contract": "partial" }, parityStatus: "follow-up-required", integrations: ["supabase"], jiraKeys: ["SYN-540","SYN-7"], firstRelease: { web: "web-v0.10.0", backend: "web-v0.10.0" } },
    { id: "profile_security", name: "Profile and security self-service", description: "Profile page, password change and softened delete-account experience.", statusBySurface: { web: "shipped", backend: "shipped" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-700","SYN-720","SYN-320"], firstRelease: { web: "web-v0.11.0", backend: "web-v0.11.0" } },
    { id: "social_graph", name: "Friends, favorites and social graph", description: "Friend requests, favorites and social actions from event context.", statusBySurface: { web: "shipped", backend: "shipped" }, parityStatus: "follow-up-required", integrations: ["supabase"], jiraKeys: ["SYN-710"], firstRelease: { web: "web-v0.11.0", backend: "web-v0.11.0" } },
    { id: "admin_operations", name: "Admin operations", description: "Admin shell for dashboard, users and event oversight.", statusBySurface: { web: "shipped", backend: "shipped" }, parityStatus: "aligned", integrations: ["supabase"], jiraKeys: ["SYN-730","SYN-731","SYN-732","SYN-733"], firstRelease: { web: "web-v0.12.0", backend: "web-v0.12.0" } },
    { id: "enterprise_shell", name: "Enterprise shell and workspace mode", description: "Dedicated enterprise shell and tenant-aware workspace mode for absence planning.", statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "planned", integrations: ["supabase","jira"], jiraKeys: ["SYN-13","SYN-14"], firstRelease: { web: "enterprise-shell-v0.1.0" } },
    { id: "enterprise_role_governance", name: "Enterprise role and governance model", description: "Role/governance model, workspace permissions and enterprise navigation depth.", statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "planned", integrations: ["supabase","jira"], jiraKeys: ["SYN-154","SYN-175"], firstRelease: { web: "enterprise-shell-v0.1.0" } },
    { id: "enterprise_leave_request_lifecycle", name: "Enterprise leave request lifecycle", description: "Structured leave request lifecycle for enterprise planning mode.", statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-16","SYN-17"], firstRelease: { web: "enterprise-leave-lifecycle-v0.1.0" } },
    { id: "enterprise_approval_inbox", name: "Enterprise approval inbox", description: "Approval inbox and actor-driven approval management.", statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-18","SYN-150"], firstRelease: { web: "enterprise-leave-lifecycle-v0.1.0" } },
    { id: "enterprise_rule_engine", name: "Enterprise rule engine", description: "Policy, rules and validation engine for enterprise leave governance.", statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-20","SYN-156"], firstRelease: { web: "enterprise-rule-templates-v0.1.0" } },
    { id: "enterprise_templates_staffing", name: "Enterprise templates and staffing coverage", description: "Templates, staffing coverage logic and enterprise planning helpers.", statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-19","SYN-20"], firstRelease: { web: "enterprise-rule-templates-v0.1.0" } },
    { id: "enterprise_reporting_dashboard", name: "Enterprise reporting dashboard", description: "Reporting surfaces, KPI views and management dashboards.", statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-167","SYN-168","SYN-169","SYN-173"], firstRelease: { web: "enterprise-reporting-v0.1.0" } },
    { id: "enterprise_kpis", name: "Enterprise KPI and QA depth", description: "KPI definitions, QA scenarios, reporting acceptance and management visibility rules.", statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "planned", integrations: ["jira"], jiraKeys: ["SYN-174","SYN-182","SYN-185","SYN-189","SYN-190","SYN-191","SYN-192"], firstRelease: { web: "enterprise-reporting-v0.1.0" } },
    { id: "enterprise_export_apis", name: "Enterprise export and APIs", description: "Excel/XML/HTML export and integration-ready API outputs.", statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "planned", integrations: ["supabase","excel","xml","html"], jiraKeys: ["SYN-19","SYN-161","SYN-167","SYN-179"], firstRelease: { web: "enterprise-export-import-v0.1.0" } },
    { id: "enterprise_import_migration", name: "Enterprise import and migration", description: "Spreadsheet import, dry-run validation, duplicate detection and migration reporting.", statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "planned", integrations: ["supabase","excel"], jiraKeys: ["SYN-158","SYN-172","SYN-186","SYN-187"], firstRelease: { web: "enterprise-export-import-v0.1.0" } },
    { id: "enterprise_notification_audit", name: "Enterprise notification and audit", description: "Notification matrix, immutable audit history and retention-aware compliance logging.", statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "planned", integrations: ["supabase"], jiraKeys: ["SYN-159","SYN-160","SYN-171"], firstRelease: { web: "enterprise-audit-compliance-v0.1.0" } },
    { id: "enterprise_security_parity", name: "Enterprise security, privacy and parity", description: "Security/privacy rules, wireframe appendix and mobile parity backlog depth.", statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned", "mobile-android": "planned", "mobile-ios": "planned" }, parityStatus: "planned", integrations: ["jira"], jiraKeys: ["SYN-174","SYN-175","SYN-180","SYN-188","SYN-192"], firstRelease: { web: "enterprise-audit-compliance-v0.1.0" } }
  ],
  integrations: [
    { id: "github", name: "GitHub", category: "source-control", state: "attention", notes: "Governance seed is based on uploaded Syncfolk markdown inventories and repository snapshots; direct repo linkage can be wired later." },
    { id: "jira", name: "Jira", category: "planning", state: "connected", notes: "Project SYN tracks both the current B2C surface and the enterprise backlog." },
    { id: "vercel", name: "Vercel", category: "deployment", state: "planned", notes: "Live deployment evidence exists in the inventories, but no direct release endpoint is wired yet." },
    { id: "supabase", name: "Supabase", category: "backend", state: "connected", environmentSensitive: true, notes: "Supabase Auth, Postgres and Edge Functions are the current backend backbone of Syncfolk." },
    { id: "google-oauth", name: "Google OAuth", category: "external-api", state: "connected", environmentSensitive: true, notes: "Google sign-in and upgrade paths are described as part of the implemented identity surface." },
    { id: "email-social-share", name: "Email and social share deep links", category: "external-api", state: "connected", notes: "Email, Telegram, WhatsApp and other deep-link share flows are part of the shipped B2C surface." },
    { id: "join-event-fn", name: "Supabase Edge Function: join-event", category: "backend", state: "connected", environmentSensitive: true, notes: "Critical for token-based joining, anonymous access, guest flows and temporary return paths." },
    { id: "delete-account-fn", name: "Supabase Edge Function: delete-account", category: "backend", state: "connected", environmentSensitive: true, notes: "Handles destructive account cleanup logic." },
    { id: "admin-fn", name: "Supabase Edge Function: admin", category: "backend", state: "connected", environmentSensitive: true, notes: "Backs admin user/event operations." },
    { id: "lovable", name: "Lovable / Vite shell", category: "design", state: "connected", notes: "Current frontend shell and preview/development environment explicitly mentioned by the inventories." }
  ],
  parityAlerts: [
    { id: "sync-alert-1", severity: "warning", sourceSurface: "web", affectedSurface: "mobile-android", reason: "The inventories describe a mature web runtime, while Android parity is still a planned target rather than a represented release line.", jiraKey: "SYN-188", state: "open" },
    { id: "sync-alert-2", severity: "warning", sourceSurface: "web", affectedSurface: "mobile-ios", reason: "The inventories describe web-first delivery and future iPhone parity goals, but no live iPhone release line is represented yet.", jiraKey: "SYN-188", state: "open" },
    { id: "sync-alert-3", severity: "critical", sourceSurface: "web", affectedSurface: "backend", reason: "Enterprise absence planning, approval workflows, import/export and audit are richly specified in Jira but are not runtime-implemented in the current deployed product.", jiraKey: "SYN-13", state: "tracked" }
  ],
  importedJiraIssues: [
    { id: "sync-import-1", key: "SYN-5", summary: "Authentication, identity and guest access", description: "Auth shell, email identity, guest and temporary access cluster.", labels: ["b2c","auth","implemented"], url: "https://hobbeast.atlassian.net/browse/SYN-5", source: "file-import" },
    { id: "sync-import-2", key: "SYN-6", summary: "Event calendar lifecycle, templates and sharing", description: "Create/edit event lifecycle and sharing model cluster.", labels: ["b2c","events","implemented"], url: "https://hobbeast.atlassian.net/browse/SYN-6", source: "file-import" },
    { id: "sync-import-3", key: "SYN-7", summary: "Voting calendar, day details and batch interactions", description: "Calendar voting, drag/batch interactions and personal availability cluster.", labels: ["b2c","voting","implemented"], url: "https://hobbeast.atlassian.net/browse/SYN-7", source: "file-import" },
    { id: "sync-import-4", key: "SYN-8", summary: "Pinned day and notification-centered decision support", description: "Ranking, pinned day lifecycle and notifications cluster.", labels: ["b2c","decision","implemented"], url: "https://hobbeast.atlassian.net/browse/SYN-8", source: "file-import" },
    { id: "sync-import-5", key: "SYN-10", summary: "Profile, friendships, favorites and admin basics", description: "Profile, social graph and admin shell cluster.", labels: ["b2c","profile","implemented"], url: "https://hobbeast.atlassian.net/browse/SYN-10", source: "file-import" },
    { id: "sync-import-6", key: "SYN-13", summary: "Enterprise absence-planning mode foundation", description: "Enterprise workspace and role-governed absence planning foundation.", labels: ["enterprise","unreleased","planning"], url: "https://hobbeast.atlassian.net/browse/SYN-13", source: "file-import" },
    { id: "sync-import-7", key: "SYN-19", summary: "Enterprise export, reporting and import backbone", description: "Enterprise reporting/export/import and API-oriented governance cluster.", labels: ["enterprise","unreleased","reporting"], url: "https://hobbeast.atlassian.net/browse/SYN-19", source: "file-import" }
  ]
};


const releaseGovernanceProject: ProjectRecord = {
  id: "project_release_governance",
  tenantId: "tenant_releasegovernance",
  name: "ReleaseGovernance",
  slug: "releasegovernance",
  description: "Governance cockpit used to track releases, Jira traceability and delivery posture for Hobbeast, Syncfolk and future projects.",
  domain: "internal.releasegovernance",
  repositories: { web: "HenrikFaul/ReleaseGovernance" },
  jiraProjectKey: "RLG",
  deploymentStatus: "warning",
  releases: [
    {
      id: "rel-rg-web-0-1-0",
      version: "web-v0.1.0",
      status: "current",
      releaseState: "released",
      surfaces: ["web", "backend", "shared-contract"],
      shippedAt: "2026-03-28",
      backendChanged: true,
      sharedContractChanged: true,
      schemaChanged: true,
      integrationsChanged: ["github", "jira", "vercel", "supabase"],
      jiraBackfillRequired: false,
      deliveredCapabilities: [
        "rg_workspace_shell",
        "rg_dashboard_release_center",
        "rg_release_detail_traceability",
        "rg_impact_engine",
        "rg_integrations_hub",
        "rg_governance_starter_kit"
      ],
      releaseNotes: "Initial ReleaseGovernance MVP with workspace shell, project registry, release center, traceability, integrations hub, impact logic and starter governance kit.",
      jiraLinks: [
        { key: "RLG-6", summary: "Build authenticated workspace and project selection shell", status: "To Do", url: "https://hobbeast.atlassian.net/browse/RLG-6" },
        { key: "RLG-7", summary: "Build project dashboard with release center, capability registry and parity alerts", status: "To Do", url: "https://hobbeast.atlassian.net/browse/RLG-7" },
        { key: "RLG-8", summary: "Build release detail view with surfaces, backend impact and Jira traceability", status: "To Do", url: "https://hobbeast.atlassian.net/browse/RLG-8" },
        { key: "RLG-9", summary: "Implement impact engine and parity recommendation logic", status: "To Do", url: "https://hobbeast.atlassian.net/browse/RLG-9" },
        { key: "RLG-10", summary: "Build integrations hub for GitHub, Jira, Vercel, Supabase and Lovable references", status: "To Do", url: "https://hobbeast.atlassian.net/browse/RLG-10" },
        { key: "RLG-11", summary: "Ship release-impact standard, capability registry schema and starter automation templates", status: "To Do", url: "https://hobbeast.atlassian.net/browse/RLG-11" }
      ],
      source: {
        kind: "github",
        owner: "HenrikFaul",
        repository: "ReleaseGovernance",
        label: "GitHub / HenrikFaul/ReleaseGovernance"
      },
      deploymentComment: "MVP shipped with seeded governance data and static traceability coverage."
    },
    {
      id: "rel-rg-platform-0-2-0",
      version: "platform-v0.2.0",
      status: "unreleased",
      releaseState: "unreleased",
      surfaces: ["web", "backend", "shared-contract"],
      shippedAt: "planned",
      backendChanged: true,
      sharedContractChanged: true,
      schemaChanged: true,
      integrationsChanged: ["github", "jira", "vercel", "supabase"],
      jiraBackfillRequired: false,
      deliveredCapabilities: ["rg_live_ingestion", "rg_supabase_persistence", "rg_release_ops_blocking"],
      releaseNotes: "Planned live ingestion, persisted governance storage and stricter release operations.",
      jiraLinks: [
        { key: "RLG-1", summary: "Epic: Governance platform foundation and tenant/project model", status: "To Do", url: "https://hobbeast.atlassian.net/browse/RLG-1" },
        { key: "RLG-4", summary: "Epic: External integrations, ingestion and deployment visibility", status: "To Do", url: "https://hobbeast.atlassian.net/browse/RLG-4" },
        { key: "RLG-5", summary: "Epic: Policy files, automation templates and release operations", status: "To Do", url: "https://hobbeast.atlassian.net/browse/RLG-5" }
      ],
      source: { kind: "manual", label: "Planned release train" },
      deploymentComment: "Backlog cluster not yet deployed."
    }
  ],
  capabilities: [
    {
      id: "rg_workspace_shell",
      name: "Authenticated workspace and project shell",
      description: "Login placeholder, signed-in shell, workspace card view and generic project navigation.",
      statusBySurface: { web: "shipped", backend: "partial", "shared-contract": "partial" },
      parityStatus: "aligned",
      integrations: ["github", "jira"],
      jiraKeys: ["RLG-1", "RLG-6"],
      firstRelease: { web: "web-v0.1.0" },
      source: "seed"
    },
    {
      id: "rg_dashboard_release_center",
      name: "Project dashboard and release center",
      description: "Project dashboard cards, release registry, delivery posture summary and parity alerts overview.",
      statusBySurface: { web: "shipped", backend: "partial", "shared-contract": "partial" },
      parityStatus: "aligned",
      integrations: ["jira", "vercel"],
      jiraKeys: ["RLG-3", "RLG-7"],
      firstRelease: { web: "web-v0.1.0" },
      source: "seed"
    },
    {
      id: "rg_release_detail_traceability",
      name: "Release detail, changelog and Jira traceability",
      description: "Release detail page with surface flags, linked Jira work, delivered capabilities and changelog-backed notes.",
      statusBySurface: { web: "shipped", backend: "partial", "shared-contract": "shipped" },
      parityStatus: "aligned",
      integrations: ["jira"],
      jiraKeys: ["RLG-3", "RLG-8"],
      firstRelease: { web: "web-v0.1.0", "shared-contract": "web-v0.1.0" },
      source: "seed"
    },
    {
      id: "rg_impact_engine",
      name: "Impact engine and parity recommendations",
      description: "Rules that infer affected surfaces and release readiness from backend, contract, schema and integration changes.",
      statusBySurface: { web: "shipped", backend: "shipped", "shared-contract": "shipped" },
      parityStatus: "aligned",
      integrations: ["jira", "supabase", "vercel"],
      jiraKeys: ["RLG-2", "RLG-9"],
      firstRelease: { web: "web-v0.1.0", backend: "web-v0.1.0" },
      source: "seed"
    },
    {
      id: "rg_integrations_hub",
      name: "Integrations hub",
      description: "Governed catalog of GitHub, Jira, Vercel, Supabase, Lovable and external API references.",
      statusBySurface: { web: "shipped", backend: "partial" },
      parityStatus: "follow-up-required",
      integrations: ["github", "jira", "vercel", "supabase", "lovable"],
      jiraKeys: ["RLG-4", "RLG-10"],
      firstRelease: { web: "web-v0.1.0" },
      source: "seed"
    },
    {
      id: "rg_governance_starter_kit",
      name: "Governance starter kit",
      description: "Starter operating model, starter file list and policy guidance that customer projects can adopt.",
      statusBySurface: { web: "shipped", "shared-contract": "partial" },
      parityStatus: "follow-up-required",
      integrations: ["github", "jira"],
      jiraKeys: ["RLG-5", "RLG-11"],
      firstRelease: { web: "web-v0.1.0" },
      source: "seed"
    },
    {
      id: "rg_live_ingestion",
      name: "Live toolchain ingestion and deployment visibility",
      description: "Direct ingestion of GitHub, Jira, Vercel and Supabase state instead of only seeded/static references.",
      statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned" },
      parityStatus: "planned",
      integrations: ["github", "jira", "vercel", "supabase"],
      jiraKeys: ["RLG-4"],
      firstRelease: { web: "platform-v0.2.0" },
      source: "seed"
    },
    {
      id: "rg_supabase_persistence",
      name: "Persisted governance storage and tenant model hardening",
      description: "Move project governance data from seed-only state toward persisted Supabase tables and stronger tenant separation.",
      statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned" },
      parityStatus: "planned",
      integrations: ["supabase"],
      jiraKeys: ["RLG-1", "RLG-4"],
      firstRelease: { web: "platform-v0.2.0", backend: "platform-v0.2.0" },
      source: "seed"
    },
    {
      id: "rg_release_ops_blocking",
      name: "Release operations and CI enforcement",
      description: "Governance validation, CODEOWNERS, release operations templates and release-readiness blocking rules.",
      statusBySurface: { web: "planned", backend: "planned", "shared-contract": "planned" },
      parityStatus: "planned",
      integrations: ["github", "jira"],
      jiraKeys: ["RLG-5"],
      firstRelease: { web: "platform-v0.2.0" },
      source: "seed"
    }
  ],
  integrations: [
    { id: "github", name: "GitHub", category: "source-control", state: "connected", notes: "Repository metadata and source references are represented in the current MVP." },
    { id: "jira", name: "Jira", category: "planning", state: "connected", notes: "RLG Jira export is matched against delivered and planned capabilities." },
    { id: "vercel", name: "Vercel", category: "deployment", state: "attention", notes: "Deployment visibility is modelled, but live deployment sync is not wired yet." },
    { id: "supabase", name: "Supabase", category: "backend", state: "attention", environmentSensitive: true, notes: "Persistence target for governance data, but not yet the active source of truth." },
    { id: "lovable", name: "Lovable", category: "design", state: "connected", notes: "Used as a design/prototyping reference for some related projects." },
    { id: "markdown-changelog", name: "CHANGELOG.md", category: "documentation", state: "connected", notes: "Release detail pages read release-specific notes from the repository changelog file." }
  ],
  parityAlerts: [
    {
      id: "rg-alert-1",
      severity: "warning",
      sourceSurface: "web",
      affectedSurface: "backend",
      reason: "The integrations hub is present, but live backend ingestion and persisted governance records are still backlog items.",
      jiraKey: "RLG-4",
      state: "open"
    },
    {
      id: "rg-alert-2",
      severity: "warning",
      sourceSurface: "shared-contract",
      affectedSurface: "web",
      reason: "Starter governance templates are surfaced in the UI, but CI-enforced release operations and CODEOWNERS-style controls are not yet active.",
      jiraKey: "RLG-5",
      state: "tracked"
    }
  ],
  importedJiraIssues: [
    { id: "rlg-import-1", key: "RLG-1", summary: "Epic: Governance platform foundation and tenant/project model", description: "Build the multi-tenant foundation of ReleaseGovernance as a reusable B2B web application.", labels: ["epic", "releasegovernance", "foundation", "unreleased"], url: "https://hobbeast.atlassian.net/browse/RLG-1", source: "file-import" },
    { id: "rlg-import-2", key: "RLG-2", summary: "Epic: Impact engine, parity alerts and governance compliance", description: "Build the decision engine that determines cross-surface impact and compliance state.", labels: ["epic", "releasegovernance", "impact-engine", "released"], url: "https://hobbeast.atlassian.net/browse/RLG-2", source: "file-import" },
    { id: "rlg-import-3", key: "RLG-3", summary: "Epic: Release center, capability registry and traceability", description: "Build the main governance surfaces that show what was shipped, where, and why.", labels: ["epic", "releasegovernance", "traceability", "released"], url: "https://hobbeast.atlassian.net/browse/RLG-3", source: "file-import" },
    { id: "rlg-import-4", key: "RLG-4", summary: "Epic: External integrations, ingestion and deployment visibility", description: "Integrate the external systems ReleaseGovernance depends on and expose their state in one product surface.", labels: ["epic", "releasegovernance", "integrations", "unreleased"], url: "https://hobbeast.atlassian.net/browse/RLG-4", source: "file-import" },
    { id: "rlg-import-5", key: "RLG-5", summary: "Epic: Policy files, automation templates and release operations", description: "Ship the governance operating model together with the product.", labels: ["epic", "releasegovernance", "automation", "unreleased"], url: "https://hobbeast.atlassian.net/browse/RLG-5", source: "file-import" },
    { id: "rlg-import-6", key: "RLG-6", summary: "Story: Build authenticated workspace and project selection shell", description: "Create the initial signed-in experience for ReleaseGovernance.", labels: ["story", "releasegovernance", "foundation", "released"], url: "https://hobbeast.atlassian.net/browse/RLG-6", source: "file-import" },
    { id: "rlg-import-7", key: "RLG-7", summary: "Story: Build project dashboard with release center, capability registry and parity alerts", description: "Create the main project dashboard surface.", labels: ["story", "releasegovernance", "dashboard", "released"], url: "https://hobbeast.atlassian.net/browse/RLG-7", source: "file-import" },
    { id: "rlg-import-8", key: "RLG-8", summary: "Story: Build release detail view with surfaces, backend impact and Jira traceability", description: "Create the release detail workflow.", labels: ["story", "releasegovernance", "release-detail", "released"], url: "https://hobbeast.atlassian.net/browse/RLG-8", source: "file-import" },
    { id: "rlg-import-9", key: "RLG-9", summary: "Story: Implement impact engine and parity recommendation logic", description: "Build the core rules engine for change impact.", labels: ["story", "releasegovernance", "impact-engine", "released"], url: "https://hobbeast.atlassian.net/browse/RLG-9", source: "file-import" },
    { id: "rlg-import-10", key: "RLG-10", summary: "Story: Build integrations hub for GitHub, Jira, Vercel, Supabase and Lovable references", description: "Create the project integrations screen.", labels: ["story", "releasegovernance", "integrations", "released"], url: "https://hobbeast.atlassian.net/browse/RLG-10", source: "file-import" },
    { id: "rlg-import-11", key: "RLG-11", summary: "Story: Ship release-impact standard, capability registry schema and starter automation templates", description: "Create the governance starter kit that customer projects will adopt.", labels: ["story", "releasegovernance", "automation", "released"], url: "https://hobbeast.atlassian.net/browse/RLG-11", source: "file-import" }
  ],
  backfillCandidates: [
    {
      id: "rg-backfill-001",
      featureName: "Local override and merge engine",
      summary: "Backfill story: Track local override and merge engine for imported governance data",
      description: "The application already merges seeded project records with locally imported override data so new Jira, release and capability imports can be layered on top of the baseline dataset without overwriting the seed. This shipped behavior needs a formal Jira story for auditability.",
      parent: "RLG-3",
      labels: ["releasegovernance", "backfill", "rg-backfill-001"],
      issueType: "Story",
      recommendedRelease: "web-v0.1.0"
    },
    {
      id: "rg-backfill-002",
      featureName: "Seeded cross-project governance dataset",
      summary: "Backfill story: Capture seeded cross-project governance dataset and release grouping heuristics",
      description: "The product already ships with seeded governance coverage for Hobbeast and Syncfolk, including release grouping and capability mapping heuristics. Because this behavior is visible in the running product, a dedicated Jira story should be created and linked retroactively.",
      parent: "RLG-1",
      labels: ["releasegovernance", "backfill", "rg-backfill-002"],
      issueType: "Story",
      recommendedRelease: "web-v0.1.0"
    },
    {
      id: "rg-backfill-003",
      featureName: "Changelog-backed release notes viewer",
      summary: "Backfill story: Track changelog-backed release notes surfaced on release detail pages",
      description: "Release detail pages now resolve release-specific notes directly from CHANGELOG.md so project owners can inspect a release and see the matching changelog entry in-context. This deployed feature was not matched to an existing Jira ticket and should receive one.",
      parent: "RLG-3",
      labels: ["releasegovernance", "backfill", "rg-backfill-003"],
      issueType: "Story",
      recommendedRelease: "web-v0.1.0"
    }
  ],
  overview: {
    applicationDescription: "Internal governance cockpit that lets a product owner track what shipped, which Jira work items it came from, where cross-surface follow-up is needed, and which governance gaps still require backfill.",
    techStack: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS", "Seeded governance records", "Optional local import overrides"],
    hostingServices: ["Vercel-style web deployment target", "Static governance file storage in repository"],
    backendServices: ["Impact engine rules", "Local override merge logic", "Planned Supabase persistence"],
    projectStructure: ["app/projects for project-specific pages", "lib/mock-data.ts as the current seed source of truth", "governance/ for starter schema and registry standards", "hooks/useProjectRecord.ts for mergeable runtime state"],
    runtimeNotes: ["The current MVP is data-seeded first and only partially live-integrated.", "Release detail pages can surface project-specific changelog entries from CHANGELOG.md."]
  }
};


export const tenants: TenantRecord[] = [{ id: "tenant_releasegovernance", name: "ReleaseGovernance Demo Workspace", plan: "growth", projects: [hobbeastProject, syncfolkProject, releaseGovernanceProject] }];
export function getTenant(tenantId: string) { return tenants.find((tenant) => tenant.id === tenantId); }
export function getProject(projectId: string) { return tenants.flatMap((tenant) => tenant.projects).find((project) => project.id === projectId); }
