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
      stage: "released",
      surfaces: ["mobile-android"],
      shippedAt: "2026-03-28",
      backendChanged: true,
      sharedContractChanged: true,
      schemaChanged: true,
      integrationsChanged: ["supabase", "geoapify", "mapy"],
      jiraBackfillRequired: false,
      deliveredCapabilities: ["normalized_places_search", "organizer_mode", "community_pulse"],
      releaseNotes: "Android onboarding, organizer runtime, trip planner persistence and backend-aware reminder journey.",
      jiraLinks: [
        { key: "HOB-2", summary: "Organizer tools and attendee operations", status: "To Do", url: "https://hobbeast.atlassian.net/browse/HOB-2" },
        { key: "HOB-8", summary: "Mobile retention, reminders and engagement loops", status: "To Do", url: "https://hobbeast.atlassian.net/browse/HOB-8" },
      ],
    },
    {
      id: "rel-web-0-9-0",
      version: "web-v0.9.0",
      stage: "released",
      surfaces: ["web", "backend", "shared-contract"],
      shippedAt: "2026-03-27",
      backendChanged: true,
      sharedContractChanged: true,
      schemaChanged: true,
      integrationsChanged: ["geoapify", "tomtom", "supabase"],
      jiraBackfillRequired: false,
      deliveredCapabilities: ["normalized_places_search", "organizer_mode", "community_pulse"],
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
      description: "Normalized Geoapify-first place search with TomTom enrichment, provider orchestration, ranking and release parity checks.",
      technicalNotes: "Shared place payloads and ranking logic are used across the web app, backend orchestration and Android follow-up runtime.",
      channel: "Webapp + Android",
      tenant: "B2C",
      implementationStatus: "Implemented / mixed",
      deployStatus: "Likely",
      statusBySurface: {
        web: "shipped",
        "mobile-android": "partial",
        backend: "shipped",
        "shared-contract": "shipped",
      },
      parityStatus: "follow-up-required",
      integrations: ["geoapify", "tomtom", "supabase"],
      jiraKeys: ["HOB-12", "HOB-13"],
      firstRelease: {
        web: "web-v0.9.0",
        backend: "web-v0.9.0",
      },
    },
    {
      id: "organizer_mode",
      name: "Organizer mode",
      description: "Organizer dashboard, attendee operations, capacity handling and organizer runtime surfaces.",
      technicalNotes: "Shared organizer entities and runtime actions span the shared backend, the current web shell and the Android runtime.",
      channel: "Webapp + Android",
      tenant: "B2C",
      implementationStatus: "Implemented / mixed",
      deployStatus: "Likely",
      statusBySurface: {
        web: "partial",
        "mobile-android": "shipped",
        backend: "shipped",
        "shared-contract": "shipped",
      },
      parityStatus: "follow-up-required",
      integrations: ["supabase"],
      jiraKeys: ["HOB-2"],
      firstRelease: {
        "mobile-android": "mobile-android-v0.19.0",
      },
    },
    {
      id: "community_pulse",
      name: "Community pulse",
      description: "Community pulse, reminders, hub insight and retention-oriented engagement surfaces.",
      technicalNotes: "The mobile runtime is ahead of the current web shell and requires shared backend alignment before broader parity claims are valid.",
      channel: "Webapp + Android",
      tenant: "B2C",
      implementationStatus: "Implemented / partial",
      deployStatus: "Likely",
      statusBySurface: {
        web: "planned",
        "mobile-android": "partial",
        backend: "partial",
      },
      parityStatus: "planned",
      integrations: ["supabase"],
      jiraKeys: ["HOB-162"],
    },
  ],
  integrations: [
    { id: "github", name: "GitHub", category: "source-control", state: "connected", notes: "Web and Android repositories linked" },
    { id: "jira", name: "Jira", category: "planning", state: "connected", notes: "Project HOB used for product implementation tracking" },
    { id: "vercel", name: "Vercel", category: "deployment", state: "connected", notes: "Preview and production deployment visibility expected for the web surface" },
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
  description: "B2C-first scheduling platform with a mature web product, shared Supabase backend/runtime, and a detailed enterprise absence-planning backlog.",
  domain: "syncfolk.app",
  repositories: {
    web: "syncfolk-webapp-snapshot",
  },
  jiraProjectKey: "SYN",
  deploymentStatus: "warning",
  releases: [
  {
    "id": "rel-syncfolk-r01",
    "version": "web-b2c-baseline-r01-auth-shell",
    "stage": "released",
    "surfaces": [
      "web",
      "backend",
      "shared-contract"
    ],
    "shippedAt": "2026-03-01 (reconstructed)",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "b2c_01"
    ],
    "releaseNotes": "Baseline reconstruction from the uploaded Syncfolk inventories. Scope: Unified auth landing and entry shell.",
    "jiraLinks": [
      {
        "key": "SYN-4",
        "summary": "Unified auth landing and entry shell",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-4"
      }
    ]
  },
  {
    "id": "rel-syncfolk-r02",
    "version": "web-b2c-baseline-r02-identity-and-recovery",
    "stage": "released",
    "surfaces": [
      "web",
      "backend",
      "shared-contract"
    ],
    "shippedAt": "2026-03-02 (reconstructed)",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "b2c_02",
      "b2c_03",
      "b2c_04"
    ],
    "releaseNotes": "Baseline reconstruction from the uploaded Syncfolk inventories. Scope: Email/password sign-up, sign-in, verification; Google OAuth sign-in / sign-up activation flow; Forgot password + reset password.",
    "jiraLinks": [
      {
        "key": "SYN-5",
        "summary": "Email/password sign-up, sign-in, verification",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-5"
      },
      {
        "key": "SYN-5",
        "summary": "Google OAuth sign-in / sign-up activation flow",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-5"
      },
      {
        "key": "SYN-320",
        "summary": "Forgot password + reset password",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-320"
      }
    ]
  },
  {
    "id": "rel-syncfolk-r03",
    "version": "web-b2c-baseline-r03-temp-and-guest-access",
    "stage": "released",
    "surfaces": [
      "web",
      "backend",
      "shared-contract"
    ],
    "shippedAt": "2026-03-03 (reconstructed)",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "email-social-share",
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "b2c_05",
      "b2c_11"
    ],
    "releaseNotes": "Baseline reconstruction from the uploaded Syncfolk inventories. Scope: Temporary guest session model + inactivity logout + upgrade path; Return link + verification code for temporary participants.",
    "jiraLinks": [
      {
        "key": "SYN-310",
        "summary": "Temporary guest session model + inactivity logout + upgrade path",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-310"
      },
      {
        "key": "SYN-310",
        "summary": "Return link + verification code for temporary participants",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-310"
      }
    ]
  },
  {
    "id": "rel-syncfolk-r04",
    "version": "web-b2c-baseline-r04-event-creation-and-lifecycle",
    "stage": "released",
    "surfaces": [
      "web",
      "backend",
      "shared-contract"
    ],
    "shippedAt": "2026-03-04 (reconstructed)",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "b2c_06",
      "b2c_07",
      "b2c_08"
    ],
    "releaseNotes": "Baseline reconstruction from the uploaded Syncfolk inventories. Scope: Create event dialog with templates and date controls; Event editing, deletion and state maintenance; Event selector and current-event context restore.",
    "jiraLinks": [
      {
        "key": "SYN-6",
        "summary": "Create event dialog with templates and date controls",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-6"
      },
      {
        "key": "SYN-410",
        "summary": "Event editing, deletion and state maintenance",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-410"
      },
      {
        "key": "SYN-420",
        "summary": "Event selector and current-event context restore",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-420"
      }
    ]
  },
  {
    "id": "rel-syncfolk-r05",
    "version": "web-b2c-baseline-r05-sharing-and-invite-consumption",
    "stage": "released",
    "surfaces": [
      "web",
      "backend",
      "shared-contract"
    ],
    "shippedAt": "2026-03-05 (reconstructed)",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "email-social-share",
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "b2c_09",
      "b2c_10"
    ],
    "releaseNotes": "Baseline reconstruction from the uploaded Syncfolk inventories. Scope: Creator-managed share links and grouped share UX; Join-event flow for registered and anonymous invitees.",
    "jiraLinks": [
      {
        "key": "SYN-430",
        "summary": "Creator-managed share links and grouped share UX",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-430"
      },
      {
        "key": "SYN-440",
        "summary": "Join-event flow for registered and anonymous invitees",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-440"
      }
    ]
  },
  {
    "id": "rel-syncfolk-r06",
    "version": "web-b2c-baseline-r06-calendar-foundation",
    "stage": "released",
    "surfaces": [
      "web",
      "backend",
      "shared-contract"
    ],
    "shippedAt": "2026-03-06 (reconstructed)",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "b2c_12"
    ],
    "releaseNotes": "Baseline reconstruction from the uploaded Syncfolk inventories. Scope: Calendar grid, date eligibility and responsive calendar-first layout.",
    "jiraLinks": [
      {
        "key": "SYN-500",
        "summary": "Calendar grid, date eligibility and responsive calendar-first layout",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-500"
      }
    ]
  },
  {
    "id": "rel-syncfolk-r07",
    "version": "web-b2c-baseline-r07-voting-and-batch-controls",
    "stage": "released",
    "surfaces": [
      "web",
      "backend",
      "shared-contract"
    ],
    "shippedAt": "2026-03-07 (reconstructed)",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "b2c_13",
      "b2c_14",
      "b2c_15"
    ],
    "releaseNotes": "Baseline reconstruction from the uploaded Syncfolk inventories. Scope: Availability mode selector + single-day vote toggle; Drag-range voting and batch side-panel controls; Info icon, long-press and day detail surfaces.",
    "jiraLinks": [
      {
        "key": "SYN-510",
        "summary": "Availability mode selector + single-day vote toggle",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-510"
      },
      {
        "key": "SYN-520",
        "summary": "Drag-range voting and batch side-panel controls",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-520"
      },
      {
        "key": "SYN-510",
        "summary": "Info icon, long-press and day detail surfaces",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-510"
      }
    ]
  },
  {
    "id": "rel-syncfolk-r08",
    "version": "web-b2c-baseline-r08-ranking-and-decision-lifecycle",
    "stage": "released",
    "surfaces": [
      "web",
      "backend",
      "shared-contract"
    ],
    "shippedAt": "2026-03-08 (reconstructed)",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "b2c_16",
      "b2c_17"
    ],
    "releaseNotes": "Baseline reconstruction from the uploaded Syncfolk inventories. Scope: Vote ranking and creator decision support; Pinned day creation, modification, unlock and freeze behavior.",
    "jiraLinks": [
      {
        "key": "SYN-600",
        "summary": "Vote ranking and creator decision support",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-600"
      },
      {
        "key": "SYN-610",
        "summary": "Pinned day creation, modification, unlock and freeze behavior",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-610"
      }
    ]
  },
  {
    "id": "rel-syncfolk-r09",
    "version": "web-b2c-baseline-r09-notification-center",
    "stage": "released",
    "surfaces": [
      "web",
      "backend",
      "shared-contract"
    ],
    "shippedAt": "2026-03-09 (reconstructed)",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "b2c_18"
    ],
    "releaseNotes": "Baseline reconstruction from the uploaded Syncfolk inventories. Scope: Notification center with unread/read/delete and event-driven triggers.",
    "jiraLinks": [
      {
        "key": "SYN-620",
        "summary": "Notification center with unread/read/delete and event-driven triggers",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-620"
      }
    ]
  },
  {
    "id": "rel-syncfolk-r10",
    "version": "web-b2c-baseline-r10-personal-availability",
    "stage": "released",
    "surfaces": [
      "web",
      "backend",
      "shared-contract"
    ],
    "shippedAt": "2026-03-10 (reconstructed)",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "b2c_19"
    ],
    "releaseNotes": "Baseline reconstruction from the uploaded Syncfolk inventories. Scope: Personal availability calendar + batch fill + copy-to-event.",
    "jiraLinks": [
      {
        "key": "SYN-7",
        "summary": "Personal availability calendar + batch fill + copy-to-event",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-7"
      }
    ]
  },
  {
    "id": "rel-syncfolk-r11",
    "version": "web-b2c-baseline-r11-profile-and-social-graph",
    "stage": "released",
    "surfaces": [
      "web",
      "backend",
      "shared-contract"
    ],
    "shippedAt": "2026-03-11 (reconstructed)",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "b2c_20",
      "b2c_21"
    ],
    "releaseNotes": "Baseline reconstruction from the uploaded Syncfolk inventories. Scope: Profile page, password change and softened account deletion; Friends, pending requests, favorites and social actions from event context.",
    "jiraLinks": [
      {
        "key": "SYN-700",
        "summary": "Profile page, password change and softened account deletion",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-700"
      },
      {
        "key": "SYN-710",
        "summary": "Friends, pending requests, favorites and social actions from event context",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-710"
      }
    ]
  },
  {
    "id": "rel-syncfolk-r12",
    "version": "web-b2c-baseline-r12-admin-operations",
    "stage": "released",
    "surfaces": [
      "web",
      "backend",
      "shared-contract"
    ],
    "shippedAt": "2026-03-12 (reconstructed)",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "b2c_22"
    ],
    "releaseNotes": "Baseline reconstruction from the uploaded Syncfolk inventories. Scope: Admin panel for platform-level overview, users and events.",
    "jiraLinks": [
      {
        "key": "SYN-730",
        "summary": "Admin panel for platform-level overview, users and events",
        "status": "Implemented / mixed",
        "url": "https://hobbeast.atlassian.net/browse/SYN-730"
      }
    ]
  },
  {
    "id": "rel-syncfolk-u01",
    "version": "enterprise-vnext-u01-shell-and-membership",
    "stage": "unreleased",
    "surfaces": [
      "web",
      "backend",
      "shared-contract",
      "mobile-android",
      "mobile-ios"
    ],
    "shippedAt": "Not yet deployed",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "email-social-share"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "ent_01",
      "ent_02"
    ],
    "releaseNotes": "Unreleased enterprise track reconstructed from the uploaded Syncfolk inventories. Scope: Dedicated enterprise absence-planning mode; Email-only invitation and registered-only access.",
    "jiraLinks": [
      {
        "key": "SYN-13",
        "summary": "Dedicated enterprise absence-planning mode",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-13"
      },
      {
        "key": "SYN-15",
        "summary": "Email-only invitation and registered-only access",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-15"
      }
    ]
  },
  {
    "id": "rel-syncfolk-u02",
    "version": "enterprise-vnext-u02-requests-rules-and-templates",
    "stage": "unreleased",
    "surfaces": [
      "web",
      "backend",
      "shared-contract",
      "mobile-android",
      "mobile-ios"
    ],
    "shippedAt": "Not yet deployed",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "ent_03",
      "ent_04",
      "ent_05",
      "ent_06"
    ],
    "releaseNotes": "Unreleased enterprise track reconstructed from the uploaded Syncfolk inventories. Scope: Leave request lifecycle and approval decisions; Blocked dates, company leave dates and daily max-off rules; Role-based staffing coverage constraints; Rule template library, versioning and batch apply.",
    "jiraLinks": [
      {
        "key": "SYN-16",
        "summary": "Leave request lifecycle and approval decisions",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-16"
      },
      {
        "key": "SYN-17",
        "summary": "Blocked dates, company leave dates and daily max-off rules",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-17"
      },
      {
        "key": "SYN-18",
        "summary": "Role-based staffing coverage constraints",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-18"
      },
      {
        "key": "SYN-18",
        "summary": "Rule template library, versioning and batch apply",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-18"
      }
    ]
  },
  {
    "id": "rel-syncfolk-u03",
    "version": "enterprise-vnext-u03-summary-approvals-and-day-detail",
    "stage": "unreleased",
    "surfaces": [
      "web",
      "backend",
      "shared-contract",
      "mobile-android",
      "mobile-ios"
    ],
    "shippedAt": "Not yet deployed",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "ent_07",
      "ent_08",
      "ent_09"
    ],
    "releaseNotes": "Unreleased enterprise track reconstructed from the uploaded Syncfolk inventories. Scope: Coverage & Conflict Summary instead of Vote Ranking; Approval inbox, filters, bulk decisions, substitute approver and escalation; Enterprise day-detail view with request statuses and rule impacts.",
    "jiraLinks": [
      {
        "key": "SYN-20",
        "summary": "Coverage & Conflict Summary instead of Vote Ranking",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-20"
      },
      {
        "key": "SYN-21",
        "summary": "Approval inbox, filters, bulk decisions, substitute approver and escalation",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-21"
      },
      {
        "key": "SYN-23",
        "summary": "Enterprise day-detail view with request statuses and rule impacts",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-23"
      }
    ]
  },
  {
    "id": "rel-syncfolk-u04",
    "version": "enterprise-vnext-u04-organization-export-and-import",
    "stage": "unreleased",
    "surfaces": [
      "web",
      "backend",
      "shared-contract",
      "mobile-android",
      "mobile-ios"
    ],
    "shippedAt": "Not yet deployed",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "ent_10",
      "ent_11",
      "ent_12"
    ],
    "releaseNotes": "Unreleased enterprise track reconstructed from the uploaded Syncfolk inventories. Scope: Member directory, team/location/holiday profile and role setup; Export to Excel/XML/HTML and integration-ready APIs; Spreadsheet import and migration from shared leave trackers.",
    "jiraLinks": [
      {
        "key": "SYN-22",
        "summary": "Member directory, team/location/holiday profile and role setup",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-22"
      },
      {
        "key": "SYN-19",
        "summary": "Export to Excel/XML/HTML and integration-ready APIs",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-19"
      },
      {
        "key": "SYN-158",
        "summary": "Spreadsheet import and migration from shared leave trackers",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-158"
      }
    ]
  },
  {
    "id": "rel-syncfolk-u05",
    "version": "enterprise-vnext-u05-notification-audit-and-settings",
    "stage": "unreleased",
    "surfaces": [
      "web",
      "backend",
      "shared-contract",
      "mobile-android",
      "mobile-ios"
    ],
    "shippedAt": "Not yet deployed",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "email-social-share"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "ent_13",
      "ent_14"
    ],
    "releaseNotes": "Unreleased enterprise track reconstructed from the uploaded Syncfolk inventories. Scope: Enterprise notification event matrix + immutable audit history; Workspace settings, locale, timezone and business calendar defaults.",
    "jiraLinks": [
      {
        "key": "SYN-159",
        "summary": "Enterprise notification event matrix + immutable audit history",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-159"
      },
      {
        "key": "SYN-165",
        "summary": "Workspace settings, locale, timezone and business calendar defaults",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-165"
      }
    ]
  },
  {
    "id": "rel-syncfolk-u06",
    "version": "enterprise-vnext-u06-scaffolding-reporting-and-parity",
    "stage": "unreleased",
    "surfaces": [
      "web",
      "backend",
      "shared-contract",
      "mobile-android",
      "mobile-ios"
    ],
    "shippedAt": "Not yet deployed",
    "backendChanged": true,
    "sharedContractChanged": true,
    "schemaChanged": true,
    "integrationsChanged": [
      "supabase"
    ],
    "jiraBackfillRequired": false,
    "deliveredCapabilities": [
      "ent_15",
      "ent_16"
    ],
    "releaseNotes": "Unreleased enterprise track reconstructed from the uploaded Syncfolk inventories. Scope: Field-level data model, API contracts, permission matrix, workflow tables; Reporting KPI catalog, screen-by-screen wireframes, QA matrix and mobile parity.",
    "jiraLinks": [
      {
        "key": "SYN-154",
        "summary": "Field-level data model, API contracts, permission matrix, workflow tables",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-154"
      },
      {
        "key": "SYN-156",
        "summary": "Reporting KPI catalog, screen-by-screen wireframes, QA matrix and mobile parity",
        "status": "Spec only / unreleased",
        "url": "https://hobbeast.atlassian.net/browse/SYN-156"
      }
    ]
  }
],
  capabilities: [
  {
    "id": "b2c_01",
    "name": "Unified auth landing and entry shell",
    "description": "Unified auth landing and entry shell Üzleti cél: a user egyetlen jól érthető belépési felületen keresztül tudja megérteni a termék értékajánlatát és elindítani a belépést / regisztrációt. Funkcionális elvárások: login, registration, verify, forgot-password nézetek egy helyen; redirect megtartása; auth intent kezelése; responsive hero/auth layout; light/dark mód használhatóság.",
    "technicalNotes": "Megvalósítva a src/pages/Auth.tsx oldalon, amely egy state-driven auth képernyő. Az auth műveleteket a src/hooks/useAuth.tsx kezeli. A marketing/hero és auth form egy kompozit landing-auth shellben van összedolgozva. Framer Motion animációk és query-param alapú redirect kezelés is jelen van.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase",
      "lovable"
    ],
    "jiraKeys": [
      "SYN-4",
      "SYN-5",
      "SYN-200",
      "SYN-210",
      "SYN-300"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r01-auth-shell",
      "backend": "web-b2c-baseline-r01-auth-shell",
      "shared-contract": "web-b2c-baseline-r01-auth-shell"
    }
  },
  {
    "id": "b2c_02",
    "name": "Email/password sign-up, sign-in, verification",
    "description": "Email/password sign-up, sign-in, verification Üzleti cél: a felhasználó tartós accountot tudjon létrehozni és biztonságosan belépni a rendszerbe, hogy eseményeket birtokoljon, értesítéseket kapjon és social funkciókat használjon. Funkcionális követelmények: regisztráció email+jelszóval; login; email verification; újraküldhető megerősítés; hibakezelés nem megerősített emailre; redirect a megfelelő céloldalra.",
    "technicalNotes": "A useAuth.tsx a Supabase auth hívásokat becsomagolja; az Auth.tsx kezeli a login/register/verify state-eket, resend cooldownokat és az email verification utáni navigációt. Az aktivációhoz bizonyos ágakban a join-event edge function is használva van.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-5",
      "SYN-300",
      "SYN-301",
      "SYN-303"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r02-identity-and-recovery",
      "backend": "web-b2c-baseline-r02-identity-and-recovery",
      "shared-contract": "web-b2c-baseline-r02-identity-and-recovery"
    }
  },
  {
    "id": "b2c_03",
    "name": "Google OAuth sign-in / sign-up activation flow",
    "description": "Google OAuth sign-in / sign-up activation flow Üzleti cél: csökkentett belépési súrlódás a consumer onboardinghoz, miközben az account governance és aktivációs elvárások megmaradnak. Funkcionális követelmények: Google sign-in és sign-up külön intenttel; callback kezelés; új accountnál opcionális email activation; hibák kezelése; redirect visszaállítása.",
    "technicalNotes": "A src/integrations/lovable/index.ts a Lovable cloud auth OAuth wrapperét használja, majd sessiont állít Supabase-be. Az Auth.tsx query paramból olvassa az OAuth intentet, és a join-event functionnel intézi az activation-required ágakat.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Likely",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase",
      "lovable"
    ],
    "jiraKeys": [
      "SYN-5",
      "SYN-300",
      "SYN-302"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r02-identity-and-recovery",
      "backend": "web-b2c-baseline-r02-identity-and-recovery",
      "shared-contract": "web-b2c-baseline-r02-identity-and-recovery"
    }
  },
  {
    "id": "b2c_04",
    "name": "Forgot password + reset password",
    "description": "Forgot password + reset password Üzleti cél: a user support nélkül vissza tudja szerezni az accountjához való hozzáférést. Funkcionális elvárások: reset flow indítás, reset képernyő, új jelszó és megerősítés, validáció, sikeres mentés utáni tájékoztatás.",
    "technicalNotes": "A src/pages/ResetPassword.tsx a Supabase recovery/auth contextet figyeli, majd supabase.auth.updateUser({ password }) hívással ment. Az auth shellben van forgot nézet is.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Likely",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-320",
      "SYN-321"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r02-identity-and-recovery",
      "backend": "web-b2c-baseline-r02-identity-and-recovery",
      "shared-contract": "web-b2c-baseline-r02-identity-and-recovery"
    }
  },
  {
    "id": "b2c_05",
    "name": "Temporary guest session model + inactivity logout + upgrade path",
    "description": "Temporary guest session model + inactivity logout + upgrade path Üzleti cél: linkről érkező, alkalmi résztvevők account nélkül is tudjanak szavazni, de kontrolláltan, és később szükség esetén accounttá alakíthatók legyenek. Funkcionális követelmények: temporary user létrehozása; linked event scope; inactivity logout; upgrade path registered accountra; token/session restore; érvénytelen linked-event esetek kezelése.",
    "technicalNotes": "A useAuth.tsx , useTempInactivityLogout.ts , TempSignIn.tsx és lib/tempUpgradeSession.ts közösen implementálja. A rendszer profile flaggel és temp email mintával ismeri fel a temporary usert, localStorage-ben tart upgrade session információt, és edge functionnel véglegesíti a transitionöket.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-310",
      "SYN-311",
      "SYN-312",
      "SYN-313"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r03-temp-and-guest-access",
      "backend": "web-b2c-baseline-r03-temp-and-guest-access",
      "shared-contract": "web-b2c-baseline-r03-temp-and-guest-access"
    }
  },
  {
    "id": "b2c_06",
    "name": "Create event dialog with templates and date controls",
    "description": "Create event dialog with templates and date controls Üzleti cél: az eseményszervező nagyon gyorsan létre tudjon hozni egy új szavazási naptárat. Funkcionális követelmények: cím, időszak, kezdő/befejező dátum, deadline, templatalapú indítás, validáció, egyszerű create UX, hibakezelés.",
    "technicalNotes": "A src/components/CreateEventDialog.tsx és az Index.tsx együtt valósítja meg. A dátumválasztást custom popover field komponensek segítik; az adatok a events táblába kerülnek. A UX több iterációban lett finomítva mobil/desktop működésre.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-6",
      "SYN-400",
      "SYN-401",
      "SYN-402",
      "SYN-403"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r04-event-creation-and-lifecycle",
      "backend": "web-b2c-baseline-r04-event-creation-and-lifecycle",
      "shared-contract": "web-b2c-baseline-r04-event-creation-and-lifecycle"
    }
  },
  {
    "id": "b2c_07",
    "name": "Event editing, deletion and state maintenance",
    "description": "Event editing, deletion and state maintenance Üzleti cél: a creator kontroll alatt tartsa az esemény teljes életciklusát. Funkcionális követelmények: módosítható mezők kezelése; esemény törlése; state refresh a résztvevőknél és vote adatoknál; inaktív események kezelése az event selectorban.",
    "technicalNotes": "A központi orchestration az src/pages/Index.tsx -ben van. A rendszer újratölti a kapcsolódó vote/participant adatokat és kezeli a selected event state-et. Az admin oldal külön is képes platform-szintű event oversightra.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Likely",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-410",
      "SYN-411",
      "SYN-412"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r04-event-creation-and-lifecycle",
      "backend": "web-b2c-baseline-r04-event-creation-and-lifecycle",
      "shared-contract": "web-b2c-baseline-r04-event-creation-and-lifecycle"
    }
  },
  {
    "id": "b2c_08",
    "name": "Event selector and current-event context restore",
    "description": "Event selector and current-event context restore Üzleti cél: a user több esemény között tudjon váltani anélkül, hogy elveszne az aktuális kontextus. Funkcionális követelmények: saját és résztvevői események listázása; selected/default event helyreállítása; aktív/inaktív megkülönböztetés; route-ból visszaállítható context.",
    "technicalNotes": "A src/components/EventSelector.tsx és az Index.tsx tölti be és kezeli a selectable event listát. A route/search-param és a lokális state együtt adja a context restore logikát.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-420",
      "SYN-421",
      "SYN-422"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r04-event-creation-and-lifecycle",
      "backend": "web-b2c-baseline-r04-event-creation-and-lifecycle",
      "shared-contract": "web-b2c-baseline-r04-event-creation-and-lifecycle"
    }
  },
  {
    "id": "b2c_09",
    "name": "Creator-managed share links and grouped share UX",
    "description": "Creator-managed share links and grouped share UX Üzleti cél: az esemény terjedése egyetlen meghívó linkkel történjen, ne chat-visszaolvasásból. Funkcionális követelmények: share token létrehozása; linklista; törlés; copy raw URL; copy prewritten message; email megosztás; grouped social actions (Messenger, Instagram placeholder handling, Telegram, WhatsApp, Viber); anonymous és registered link elkülönítése.",
    "technicalNotes": "A src/components/ShareEventDialog.tsx a event_share_tokens táblára épül. Linkek létrehozása/törlése adatbázison keresztül történik; a share-szöveg és channel-deeplink generálás kliensoldali logika.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase",
      "email-social-share"
    ],
    "jiraKeys": [
      "SYN-430",
      "SYN-431",
      "SYN-432",
      "SYN-433"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r05-sharing-and-invite-consumption",
      "backend": "web-b2c-baseline-r05-sharing-and-invite-consumption",
      "shared-contract": "web-b2c-baseline-r05-sharing-and-invite-consumption"
    }
  },
  {
    "id": "b2c_10",
    "name": "Join-event flow for registered and anonymous invitees",
    "description": "Join-event flow for registered and anonymous invitees Üzleti cél: a meghívott user minimális súrlódással csatlakozzon a naptárhoz. Funkcionális követelmények: token check; expired/usage-limit/error handling; email-restricted invites; already joined state; anonymous link ág; post-join go-to-event CTA.",
    "technicalNotes": "A src/pages/JoinEvent.tsx statemachine-szerű join status modellt használ. A tényleges join folyamat a join-event edge functionön keresztül történik, amely külön actionökkel kezeli a token ellenőrzést, anonymous join-t és normál join-t.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-440",
      "SYN-441",
      "SYN-442"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r05-sharing-and-invite-consumption",
      "backend": "web-b2c-baseline-r05-sharing-and-invite-consumption",
      "shared-contract": "web-b2c-baseline-r05-sharing-and-invite-consumption"
    }
  },
  {
    "id": "b2c_11",
    "name": "Return link + verification code for temporary participants",
    "description": "Return link + verification code for temporary participants Üzleti cél: az anonim / temp user se veszítse el a részvételét, ha később akar visszajönni. Funkcionális követelmények: temp access token alapú return link; verification code megjelenítése; link és kód másolása; visszalépés külön temp sign-in útvonalon.",
    "technicalNotes": "A JoinEvent.tsx létrehozza és megjeleníti a return linket, a TempSignIn.tsx pedig verification code-dal és temp tokennel azonosít. A session helyreállítása a current auth layeren keresztül történik.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Likely",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase",
      "email-social-share"
    ],
    "jiraKeys": [
      "SYN-310",
      "SYN-440"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r03-temp-and-guest-access",
      "backend": "web-b2c-baseline-r03-temp-and-guest-access",
      "shared-contract": "web-b2c-baseline-r03-temp-and-guest-access"
    }
  },
  {
    "id": "b2c_12",
    "name": "Calendar grid, date eligibility and responsive calendar-first layout",
    "description": "Calendar grid, date eligibility and responsive calendar-first layout Üzleti cél: a naptár legyen a felület fő eleme, és mindig a döntés szempontjából releváns napok legyenek cselekvőképesek. Funkcionális követelmények: hónapnézet; kezdő/befejező dátum közötti napok; múltbeli napok tiltása; deadline és inactive event lock; vizuálisan jól elkülönülő napcellák; reszponzív szélességi prioritás a naptárnak.",
    "technicalNotes": "A src/components/CalendarGrid.tsx és az Index.tsx együtt implementálja. `date-fns`-t használ eligibility és rendering logikához. Több regressziós javítás történt a past-date, start/end-range és layout témákban.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-500",
      "SYN-501",
      "SYN-502",
      "SYN-503"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r06-calendar-foundation",
      "backend": "web-b2c-baseline-r06-calendar-foundation",
      "shared-contract": "web-b2c-baseline-r06-calendar-foundation"
    }
  },
  {
    "id": "b2c_13",
    "name": "Availability mode selector + single-day vote toggle",
    "description": "Availability mode selector + single-day vote toggle Üzleti cél: a user finoman tudja jelezni elérhetőségét (jó / talán / nem jó), és egy napra gyorsan tudjon szavazni vagy visszavonni a szavazatot. Funkcionális követelmények: aktív szavazatmód kiválasztása; napra kattintás/tap; többszöri interakcióval módosítás/eltávolítás; jó/talán/nem jó vizuális különbsége.",
    "technicalNotes": "A AvailabilityModeSelector.tsx adja a current mode-ot, az Index.tsx a votes táblába upsert/delete műveleteket végzi. A vote értékek stringként tárolódnak, és a grid szín-/state logikája erre épül.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-510",
      "SYN-511"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r07-voting-and-batch-controls",
      "backend": "web-b2c-baseline-r07-voting-and-batch-controls",
      "shared-contract": "web-b2c-baseline-r07-voting-and-batch-controls"
    }
  },
  {
    "id": "b2c_14",
    "name": "Drag-range voting and batch side-panel controls",
    "description": "Drag-range voting and batch side-panel controls Üzleti cél: sok napot lehessen gyorsan megjelölni, különösen mobilon vagy hosszabb eseményeknél. Funkcionális követelmények: touch/mouse drag; range application; batch side-panelből explicit apply/clear; guard rules a nem szavazható napokra; disabled state lockolt naptárnál.",
    "technicalNotes": "A CalendarGrid.tsx , BatchVotePanel.tsx és Index.tsx együtt implementálja. A range-upsert logic adatbázisban batch módon írja a votes rekordokat, és külön guard logika biztosítja, hogy tiltott napokra ne lehessen húzással sem szavazni.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-520",
      "SYN-521",
      "SYN-522"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r07-voting-and-batch-controls",
      "backend": "web-b2c-baseline-r07-voting-and-batch-controls",
      "shared-contract": "web-b2c-baseline-r07-voting-and-batch-controls"
    }
  },
  {
    "id": "b2c_15",
    "name": "Info icon, long-press and day detail surfaces",
    "description": "Info icon, long-press and day detail surfaces Üzleti cél: a user megnézhesse egy nap részleteit: kik mire szavaztak, neki mi a szavazata, és milyen kapcsolati műveletek érhetők el. Funkcionális követelmények: desktop info-icon; mobil long-press; szétválasztás a vote actiontól; modal/sheet megjelenítés; day-level social actions.",
    "technicalNotes": "A DayDetailsModal.tsx és DayDetailsSheet.tsx biztosítja. Az info-trigger és long-press wiring a grid/index oldalon történik. A komponensek vote breakdownot, current user state-et és relation actionöket is kezelnek.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-510",
      "SYN-512"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r07-voting-and-batch-controls",
      "backend": "web-b2c-baseline-r07-voting-and-batch-controls",
      "shared-contract": "web-b2c-baseline-r07-voting-and-batch-controls"
    }
  },
  {
    "id": "b2c_16",
    "name": "Vote ranking and creator decision support",
    "description": "Vote ranking and creator decision support Üzleti cél: a szervező azonnal lássa, mely dátumok a legígéretesebbek. Funkcionális követelmények: rangsorolt naplista; nem jó szavazatok ne torzítsák pozitívan a sorrendet; top dates vizuális kiemelése; rangsor és naptár közti összhang.",
    "technicalNotes": "A VoteRanking.tsx a loaded vote adatokból épít rangsort. A score logika az event page-en újrahasznosul a pin-day kiválasztáshoz is. A ranking UI több iterációban lett finomítva.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-600",
      "SYN-601",
      "SYN-602"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r08-ranking-and-decision-lifecycle",
      "backend": "web-b2c-baseline-r08-ranking-and-decision-lifecycle",
      "shared-contract": "web-b2c-baseline-r08-ranking-and-decision-lifecycle"
    }
  },
  {
    "id": "b2c_17",
    "name": "Pinned day creation, modification, unlock and freeze behavior",
    "description": "Pinned day creation, modification, unlock and freeze behavior Üzleti cél: a creator végleges döntést tudjon hozni az esemény dátumáról, majd szükség esetén kontrolláltan módosíthassa vagy feloldhassa azt. Funkcionális követelmények: top-ranked candidate kiválasztás; tie-dialog; decided day mentése; “Kitűzött nap módosítása”; “Feloldás”; pin után voting freeze; unlock után voting reopen, ha a naptár nem zárt le más okból.",
    "technicalNotes": "Az Index.tsx az events.decided_date mezővel reprezentálja a final decision state-et. A pin flow dialogot, tie-resolutiont, freeze state-et és unlock műveletet ugyanitt kezeli. A batch és personal copy logika is ezt a flaget figyeli.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-610",
      "SYN-611",
      "SYN-612",
      "SYN-613"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r08-ranking-and-decision-lifecycle",
      "backend": "web-b2c-baseline-r08-ranking-and-decision-lifecycle",
      "shared-contract": "web-b2c-baseline-r08-ranking-and-decision-lifecycle"
    }
  },
  {
    "id": "b2c_18",
    "name": "Notification center with unread/read/delete and event-driven triggers",
    "description": "Notification center with unread/read/delete and event-driven triggers Üzleti cél: a felhasználó ne maradjon le fontos eseményváltozásokról. Funkcionális követelmények: unread badge; panel; mark-read; delete; scroll behavior; pin/update/unlock and other trigger templates; guest parity bizonyos ágakban; rendezett megjelenítés.",
    "technicalNotes": "Az Index.tsx a notification payloadokat a profiles.preferences.notifications JSON mezőben tárolja és frissíti. A panel UI és unread logic itt van bekötve. A pin/unpin notification küldés is kliensoldali app logikával történik a megfelelő profilokra.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-620",
      "SYN-621",
      "SYN-622",
      "SYN-623",
      "SYN-630",
      "SYN-631",
      "SYN-632",
      "SYN-633"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r09-notification-center",
      "backend": "web-b2c-baseline-r09-notification-center",
      "shared-contract": "web-b2c-baseline-r09-notification-center"
    }
  },
  {
    "id": "b2c_19",
    "name": "Personal availability calendar + batch fill + copy-to-event",
    "description": "Personal availability calendar + batch fill + copy-to-event Üzleti cél: a user újrahasznosítható saját elérhetőséget vezessen, ne minden eseménynél nulláról szavazzon. Funkcionális követelmények: saját naptár; per-day availability states; batch set/clear; teljes törlés; aktív eseményekbe másolás; másolás blokkolása freeze-elt event esetén.",
    "technicalNotes": "A PersonalCalendar.tsx a personal_availability táblára épül, a PersonalBatchPanel.tsx batch műveleteket ad. Az eseménybe való másolás a meglévő eventekre és vote struktúrára épít, és a pin/freeze állapotot figyeli.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-7",
      "SYN-10"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r10-personal-availability",
      "backend": "web-b2c-baseline-r10-personal-availability",
      "shared-contract": "web-b2c-baseline-r10-personal-availability"
    }
  },
  {
    "id": "b2c_20",
    "name": "Profile page, password change and softened account deletion",
    "description": "Profile page, password change and softened account deletion Üzleti cél: account self-service és identity management egy helyen, de a destruktív funkció ne legyen túl hangsúlyos. Funkcionális követelmények: profile header; editable display name; password change; personal calendar; friends; delete account low-emphasis placement and confirmation.",
    "technicalNotes": "A Profile.tsx oldalon a ChangePasswordCard , DeleteAccountCard , PersonalCalendar és FriendsList komponensek kompozit módon épülnek össze. A delete-account card külön hangsúlycsökkentett UX logikával lett kialakítva.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Yes",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-700",
      "SYN-701",
      "SYN-702",
      "SYN-720",
      "SYN-721",
      "SYN-722",
      "SYN-322"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r11-profile-and-social-graph",
      "backend": "web-b2c-baseline-r11-profile-and-social-graph",
      "shared-contract": "web-b2c-baseline-r11-profile-and-social-graph"
    }
  },
  {
    "id": "b2c_21",
    "name": "Friends, pending requests, favorites and social actions from event context",
    "description": "Friends, pending requests, favorites and social actions from event context Üzleti cél: a Syncfolk ne egyszer használatos poll-tool legyen, hanem ismétlődő társas szervezési közeg. Funkcionális követelmények: user search; friend request; accept/reject/cancel/remove; favorites; favorites-first ordering; participant listből indítható relation actions.",
    "technicalNotes": "A FriendsList.tsx a friendships és favorites táblákat kezeli. A DayDetailsModal.tsx ugyanezeket a műveleteket kontextusfüggően a napi résztvevőlistából is elérhetővé teszi.",
    "channel": "Webapp",
    "tenant": "B2C",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Implemented in code; live not fully re-verified in this turn",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped",
      "shared-contract": "partial",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "follow-up-required",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-710",
      "SYN-711",
      "SYN-712",
      "SYN-713"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r11-profile-and-social-graph",
      "backend": "web-b2c-baseline-r11-profile-and-social-graph",
      "shared-contract": "web-b2c-baseline-r11-profile-and-social-graph"
    }
  },
  {
    "id": "b2c_22",
    "name": "Admin panel for platform-level overview, users and events",
    "description": "Admin panel for platform-level overview, users and events Üzleti cél: operátori/back-office kontroll a platform fölött, elkülönítve a standard user élménytől. Funkcionális követelmények: admin route; overview tab; users tab; events tab; platform health/oversight jellegű belső funkciók.",
    "technicalNotes": "A src/pages/Admin.tsx tabos admin shellt használ, alatta külön komponensekkel: AdminDashboard.tsx , AdminUsers.tsx , AdminEvents.tsx . Ez külön route és külön UI flow.",
    "channel": "Webapp",
    "tenant": "B2C / internal ops",
    "implementationStatus": "Implemented in current codebase",
    "deployStatus": "Unknown",
    "statusBySurface": {
      "web": "shipped",
      "backend": "shipped"
    },
    "parityStatus": "aligned",
    "integrations": [
      "supabase"
    ],
    "jiraKeys": [
      "SYN-730",
      "SYN-731",
      "SYN-732",
      "SYN-733"
    ],
    "firstRelease": {
      "web": "web-b2c-baseline-r12-admin-operations",
      "backend": "web-b2c-baseline-r12-admin-operations",
      "shared-contract": "web-b2c-baseline-r12-admin-operations"
    }
  },
  {
    "id": "ent_01",
    "name": "Dedicated enterprise absence-planning mode",
    "description": "Dedicated enterprise absence-planning mode Üzleti cél: a B2C eseményszavazásból egy külön, vállalati szabadság- és erőforrás-tervező mód szülessen anélkül, hogy a termék mindent is egyszerre, ugyanazon a felületen akarna kezelni. Funkcionális követelmények: külön workspace / mode; enterprise-specifikus terminológia; consumer funkciók (guest link, vote ranking, social sharing) eltüntetése; approval/rule/export/audit fókuszú UX.",
    "technicalNotes": "Jelenleg Jira-specifikáció. Technikai target: shared calendar primitives + explicit workspace mode discriminator + role-aware route/module gating + enterprise-specifikus komponensek. A current repo-ban külön runtime enterprise shell nem található.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-13",
      "SYN-14"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_02",
    "name": "Email-only invitation and registered-only access",
    "description": "Email-only invitation and registered-only access Üzleti cél: a szabadságtervező vállalati környezetben auditálható és kontrollált legyen. Funkcionális követelmények: sima linkes meghívás tiltása; email invitation kötelező; registration kötelező; owner és resourceAssistant szerepkör; member státuszok: invited / active / suspended / removed.",
    "technicalNotes": "Jira-specifikáció. A technikai célállapot membership, invitation és role assignment entitásokra épülő access model. A jelenlegi B2C guest-link modell erre nem használható változtatás nélkül.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [
      "email-social-share"
    ],
    "jiraKeys": [
      "SYN-15",
      "SYN-22",
      "SYN-170",
      "SYN-183"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_03",
    "name": "Leave request lifecycle and approval decisions",
    "description": "Leave request lifecycle and approval decisions Üzleti cél: a user szabadságkérelmet adjon be, az approver pedig strukturált workflow-ban dönthessen róla. Funkcionális követelmények: request create/update/cancel; states (draft, submitted, pending approval, approved, rejected, cancelled, expired, override); approver comment/reason; audit trail; admin-created request.",
    "technicalNotes": "Jira-specifikáció, jelenleg nincs runtime enterprise request engine a repóban. A tervezett technikai modell külön leave request, approval decision és workflow state táblákra/DTO-kra épül, kiegészítve explicit API endpoint katalogussal.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-16",
      "SYN-166",
      "SYN-167",
      "SYN-178"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_04",
    "name": "Blocked dates, company leave dates and daily max-off rules",
    "description": "Blocked dates, company leave dates and daily max-off rules Üzleti cél: ne lehessen kontroll nélkül szabadságot jóváhagyni olyan napokra, amikor az operáció ezt nem engedi meg. Funkcionális követelmények: blocked day (senki nem mehet szabadságra); company leave day / mandatory leave flag; daily max-off threshold; range/batch application; day-level enterprise flags a naptárban és exportban.",
    "technicalNotes": "Jira-specifikáció. A planned implementation daily rule entitykre, hatályossági dátumtartományokra, rule engine-re és enterprise day-cell state kiterjesztésre épül.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-17",
      "SYN-164"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_05",
    "name": "Role-based staffing coverage constraints",
    "description": "Role-based staffing coverage constraints Üzleti cél: ne csak az összlétszámra legyen korlát, hanem kulcsmunkakörönként is biztosítható legyen a minimum működő kapacitás. Funkcionális követelmények: business role definíció; role assignment userhez; role-onként maximum szabadságon lévő és/vagy minimum dolgozó ember beállítása; conflict üzenetek; request validation ezek ellen.",
    "technicalNotes": "Jira-specifikáció. A target state külön business role és coverage rule modellel, request-time validationnel és Coverage & Conflict Summary aggregációval számol.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-18",
      "SYN-153",
      "SYN-154"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_06",
    "name": "Rule template library, versioning and batch apply",
    "description": "Rule template library, versioning and batch apply Üzleti cél: az admin ne ugyanazokat a szabályhalmazokat kézzel ismételje hónapról hónapra. Funkcionális követelmények: template save; duplicate; archive; version; preview; batch apply selected dates-re; rollback / restore behavior; auditability.",
    "technicalNotes": "Jira-specifikáció. A tervezett technikai modell template és template version entitásokat, preview validációt és apply historyt tartalmaz.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-18",
      "SYN-162"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_07",
    "name": "Coverage & Conflict Summary instead of Vote Ranking",
    "description": "Coverage & Conflict Summary instead of Vote Ranking Üzleti cél: a szavazási ranglista helyén vállalati szempontból hasznos insight jelenjen meg. Funkcionális követelmények: pending approvals, blocked days, company leave days, max-off breaches, role coverage breaches, upcoming conflicts, drill-through to details.",
    "technicalNotes": "Jira-specifikáció. A current VoteRanking B2C panelt enterprise módban summary/analytics panel váltaná le, amely aggregált querykből vagy előszámolt nézetekből dolgozik.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-20",
      "SYN-173",
      "SYN-185"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_08",
    "name": "Approval inbox, filters, bulk decisions, substitute approver and escalation",
    "description": "Approval inbox, filters, bulk decisions, substitute approver and escalation Üzleti cél: az approver és a resourceAssistant egy operatív munkalistából tudjon dönteni a kérelmekről. Funkcionális követelmények: inbox; filters; list/detail decisioning; bulk action guardrails; substitute approver; escalation when pending too long; clear conflict reason display.",
    "technicalNotes": "Jira-specifikáció. Az approval inboxra külön enterprise storyk készültek, és egy korábbi duplikátum már meg lett jelölve a backlogban. Runtime enterprise inbox még nincs a repóban.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-21",
      "SYN-149",
      "SYN-150",
      "SYN-152"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_09",
    "name": "Enterprise day-detail view with request statuses and rule impacts",
    "description": "Enterprise day-detail view with request statuses and rule impacts Üzleti cél: egy nap megnyitásakor az approver ne szavazatokat lásson, hanem státuszokat és kockázatokat. Funkcionális követelmények: approved/pending/rejected leave; blocked/company leave marker; capacity warning; role coverage impact; jump-to-approval from day detail.",
    "technicalNotes": "Jira-specifikáció. A B2C vote-oriented day-details modalt enterprise-specifikus status panel váltaná le. Kód szinten ez még nincs implementálva a jelenlegi repóban.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-23",
      "SYN-164",
      "SYN-184"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_10",
    "name": "Member directory, team/location/holiday profile and role setup",
    "description": "Member directory, team/location/holiday profile and role setup Üzleti cél: a szabadságtervezés tükrözze a szervezeti valóságot. Funkcionális követelmények: member directory; owner/resourceAssistant/member assignment; business roles; team/location; holiday profile; filtering and reporting by these dimensions.",
    "technicalNotes": "Jira-specifikáció. A planned data model explicit team/location/holiday profile attribútumokkal és role assignment entitásokkal dolgozik.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-22",
      "SYN-151",
      "SYN-163",
      "SYN-168"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_11",
    "name": "Export to Excel/XML/HTML and integration-ready APIs",
    "description": "Export to Excel/XML/HTML and integration-ready APIs Üzleti cél: megszüntetni az Excelben széteső planninget, miközben megmarad a reporting és allokációs felhasználhatóság. Funkcionális követelmények: kötelező export mezők (date, weekday, names on leave, count planned off); plusz enterprise metadata; date/team/role/member filters; scheduled/manual export; normalized API output BI/HR use caseshez.",
    "technicalNotes": "Jira-specifikáció. Export schema, endpoint catalog, async job model és access control storyk készültek. A jelenlegi consumer repo nem tartalmaz külön enterprise export runtime modult.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-19",
      "SYN-161",
      "SYN-167",
      "SYN-179"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_12",
    "name": "Spreadsheet import and migration from shared leave trackers",
    "description": "Spreadsheet import and migration from shared leave trackers Üzleti cél: az Excel-alapú legacy planningből kontrolláltan át lehessen migrálni a céget az enterprise Syncfolk térbe. Funkcionális követelmények: upload; field mapping; dry-run / validation; duplicate detection; unknown user/leave type handling; error report; commit summary.",
    "technicalNotes": "Jira-specifikáció. A planned technical design import jobot, validation/error code catalogot és downloadable rejected-row reportot ír elő. A jelenlegi repóban nincs ilyen enterprise import UI.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-158",
      "SYN-172",
      "SYN-186",
      "SYN-187"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_13",
    "name": "Enterprise notification event matrix + immutable audit history",
    "description": "Enterprise notification event matrix + immutable audit history Üzleti cél: a vállalati jóváhagyási és szabálymódosítási lépések nyomon követhetők legyenek. Funkcionális követelmények: event catalog; recipients; unread/read/dismissed/archive semantics; audit eventek actorral, timestamptel, old/new state-tel; retention expectation.",
    "technicalNotes": "Jira-specifikáció. Notification matrix és audit story külön ki van dolgozva. A jelenlegi B2C notification rendszer JSON-alapú profile notificationökre épül; enterprise-re ettől elkülönülő modell van specifikálva.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [
      "email-social-share"
    ],
    "jiraKeys": [
      "SYN-159",
      "SYN-160",
      "SYN-171"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_14",
    "name": "Workspace settings, locale, timezone and business calendar defaults",
    "description": "Workspace settings, locale, timezone and business calendar defaults Üzleti cél: ugyanaz a szabadságkérés más-más országban / munkarendben másképp értelmezhető, ezért az enterprise workspace-nek saját business-calendar konfigurációval kell rendelkeznie. Funkcionális követelmények: timezone; locale; date format; weekday display; holiday profile default; approval defaults; visibility defaults.",
    "technicalNotes": "Jira-specifikáció. Tervezett külön workspace settings entity/API, amely befolyásolja a renderinget, validationt és export formátumokat.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-165"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_15",
    "name": "Field-level data model, API contracts, permission matrix, workflow tables",
    "description": "Field-level data model, API contracts, permission matrix, workflow tables Üzleti cél: az enterprise backlog ne csak ötletlista legyen, hanem implementálható specifikáció webre és natív mobilra is. Funkcionális/tervezési követelmények: endpoint catalog; payload fields; entity relationships; permission matrix; visibility matrix; workflow states and transitions; error taxonomy.",
    "technicalNotes": "Jira-specifikáció több story és subtask formájában. Ezek dokumentációs rétegek, nem runtime enterprise komponensek. A jelenlegi repóban nincs enterprise API/domain implementáció, de a specifikációk már buildable-target szintűek.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-154",
      "SYN-155",
      "SYN-166",
      "SYN-167",
      "SYN-168",
      "SYN-170",
      "SYN-177",
      "SYN-178",
      "SYN-179",
      "SYN-180",
      "SYN-181",
      "SYN-183",
      "SYN-184"
    ],
    "firstRelease": {}
  },
  {
    "id": "ent_16",
    "name": "Reporting KPI catalog, screen-by-screen wireframes, QA matrix and mobile parity",
    "description": "Reporting KPI catalog, screen-by-screen wireframes, QA matrix and mobile parity Üzleti cél: a vállalati modul ne csak backend-logikában, hanem UI/QA/deployment szinten is konzisztens legyen. A vezetők KPI-kat, a design/FE csapat wireframe-specet, a QA pedig végigjátszható acceptance mátrixot kapjon. Funkcionális követelmények: KPI formula-definíciók; dashboard widgetek; desktop/mobile screen appendix; acceptance scenarios role-onként; parity/offline-safe behavior rules.",
    "technicalNotes": "Jira-specifikáció. A reporting, wireframe, acceptance és mobile parity témák külön storykban és részben subtaskokban vannak lebontva. Jelenlegi runtime enterprise dashboard nincs a kódbázisban.",
    "channel": "Both",
    "tenant": "Enterprise",
    "implementationStatus": "Jira/spec only",
    "deployStatus": "No",
    "statusBySurface": {
      "web": "planned",
      "backend": "planned",
      "shared-contract": "planned",
      "mobile-android": "planned",
      "mobile-ios": "planned"
    },
    "parityStatus": "planned",
    "integrations": [],
    "jiraKeys": [
      "SYN-156",
      "SYN-169",
      "SYN-173",
      "SYN-174",
      "SYN-175",
      "SYN-182",
      "SYN-185",
      "SYN-188",
      "SYN-189",
      "SYN-190",
      "SYN-191",
      "SYN-192"
    ],
    "firstRelease": {}
  }
],
  integrations: [
  {
    "id": "github",
    "name": "GitHub",
    "category": "source-control",
    "state": "attention",
    "notes": "Current governance seed is based on uploaded repository snapshots; direct repository connectors should be attached next."
  },
  {
    "id": "jira",
    "name": "Jira",
    "category": "planning",
    "state": "connected",
    "notes": "Project SYN documents the B2C runtime and the enterprise backlog in detail."
  },
  {
    "id": "vercel",
    "name": "Vercel",
    "category": "deployment",
    "state": "connected",
    "notes": "Current Syncfolk web runtime is treated as a live web deployment surface that should be tracked from previews to releases."
  },
  {
    "id": "supabase",
    "name": "Supabase",
    "category": "backend",
    "state": "connected",
    "environmentSensitive": true,
    "notes": "Primary backend for auth, database, profiles, share tokens, votes, notifications and edge functions."
  },
  {
    "id": "google-oauth",
    "name": "Google OAuth",
    "category": "external-api",
    "state": "connected",
    "environmentSensitive": true,
    "notes": "Lower-friction sign-in and sign-up path for the B2C runtime."
  },
  {
    "id": "email-social-share",
    "name": "Email and social share deep links",
    "category": "external-api",
    "state": "connected",
    "notes": "Invite distribution through email, mailto and grouped social share actions."
  },
  {
    "id": "lovable",
    "name": "Lovable / Vite frontend shell",
    "category": "design",
    "state": "connected",
    "notes": "Current web shell and iterative UI workflow are described as Lovable-assisted and Vite/React based."
  }
],
  parityAlerts: [
  {
    "id": "sync-alert-1",
    "severity": "warning",
    "sourceSurface": "web",
    "affectedSurface": "mobile-android",
    "reason": "The detailed Syncfolk inventory shows a mature web-first B2C product, but Android runtime parity is still backlog/planned rather than shipped.",
    "jiraKey": "SYN-188",
    "state": "open"
  },
  {
    "id": "sync-alert-2",
    "severity": "warning",
    "sourceSurface": "web",
    "affectedSurface": "mobile-ios",
    "reason": "The inventory calls out screen-by-screen parity rules and native client planning, but iPhone runtime parity is not yet represented as shipped work.",
    "jiraKey": "SYN-189",
    "state": "open"
  },
  {
    "id": "sync-alert-3",
    "severity": "critical",
    "sourceSurface": "web",
    "affectedSurface": "backend",
    "reason": "Enterprise absence-planning, workflow, rules, reporting, import/export and audit scopes are detailed in Jira/spec form but not implemented in the current runtime backend.",
    "jiraKey": "SYN-154",
    "state": "tracked"
  },
  {
    "id": "sync-alert-4",
    "severity": "warning",
    "sourceSurface": "backend",
    "affectedSurface": "web",
    "reason": "Syncfolk relies on Supabase for auth, events, participants, votes, notifications and edge functions, so backend/schema changes should always be reviewed against the current web runtime.",
    "jiraKey": "SYN-155",
    "state": "tracked"
  }
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
