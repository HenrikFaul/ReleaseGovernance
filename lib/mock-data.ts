import { ProjectRecord, TenantRecord } from "@/lib/types";

const hobbeastProject: ProjectRecord = {
  "id": "project_hobbeast",
  "tenantId": "tenant_releasegovernance",
  "name": "Hobbeast",
  "slug": "hobbeast",
  "description": "Cross-platform community and event platform using shared Supabase backend, Lovable-assisted web UI and native Android client.",
  "domain": "hobbeast.app",
  "repositories": {
    "web": "HenrikFaul/hobbeast",
    "android": "HenrikFaul/Hobbeast-mobile"
  },
  "jiraProjectKey": "HOB",
  "lovableProject": "bc7f13b3-b1aa-49df-95d6-45b6a5bb7919",
  "deploymentStatus": "warning",
  "overview": {
    "applicationDescription": "Cross-platform community and event platform using a shared Supabase backend, a Lovable-assisted web UI and a native Android client.",
    "techStack": [
      "Next.js / React web surfaces",
      "Native Android client",
      "TypeScript",
      "Supabase backend",
      "Tailwind-driven UI layers"
    ],
    "hostingServices": [
      "Vercel for web deployments",
      "Lovable preview/design iteration flows"
    ],
    "backendServices": [
      "Supabase Auth",
      "Supabase Postgres",
      "Supabase Edge Functions",
      "Shared contract + migration-driven backend governance"
    ],
    "projectStructure": [
      "Web app",
      "Android app",
      "Shared backend",
      "Shared contract",
      "External integrations"
    ],
    "runtimeNotes": [
      "Primary places provider: Geoapify",
      "Fallback/secondary places provider: TomTom",
      "Route context: Mapy.cz",
      "UI iteration source: Lovable"
    ]
  },
  "releases": [
    {
      "id": "rel-android-0-19-0",
      "version": "mobile-android-v0.19.0",
      "status": "current",
      "surfaces": [
        "mobile-android"
      ],
      "shippedAt": "2026-03-28",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "geoapify",
        "mapy"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "organizer_mode",
        "trip_planner",
        "community_pulse"
      ],
      "releaseNotes": "Android onboarding, organizer runtime, trip planner persistence and backend-aware reminder journey.",
      "jiraLinks": [
        {
          "key": "HOB-2",
          "summary": "Organizer tools and attendee operations",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-2"
        },
        {
          "key": "HOB-8",
          "summary": "Mobile retention, reminders and engagement loops",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-8"
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "Hobbeast-mobile",
        "ref": "main",
        "label": "GitHub / HenrikFaul/Hobbeast-mobile"
      },
      "deploymentComment": "Latest Android governance snapshot imported from native client workstream."
    },
    {
      "id": "rel-web-0-9-0",
      "version": "web-v0.9.0",
      "status": "old",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-27",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "geoapify",
        "tomtom",
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "normalized_places_search",
        "external_discovery",
        "organizer_mode"
      ],
      "releaseNotes": "Normalized place search, provider orchestration, event surface updates and organizer foundation.",
      "jiraLinks": [
        {
          "key": "HOB-12",
          "summary": "Integrate Ticketmaster sync",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-12"
        },
        {
          "key": "HOB-13",
          "summary": "Integrate SeatGeek as a second source",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-13"
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "hobbeast",
        "ref": "main",
        "label": "GitHub / HenrikFaul/hobbeast"
      },
      "deploymentComment": "Web production deployment covering normalized places and organizer foundation."
    }
  ],
  "capabilities": [
    {
      "id": "normalized_places_search",
      "name": "Normalized place search",
      "summary": "Place search with provider orchestration, fallback handling and normalized venue payloads.",
      "statusBySurface": {
        "web": "shipped",
        "mobile-android": "partial",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "geoapify",
        "tomtom"
      ],
      "jiraKeys": [
        "HOB-12",
        "HOB-13"
      ],
      "firstRelease": {
        "web": "web-v0.9.0",
        "backend": "web-v0.9.0"
      },
      "tenant": "Both",
      "channel": "Both",
      "codebaseStatus": "Implemented / mixed",
      "deployStatus": "Deployed / mixed"
    },
    {
      "id": "external_discovery",
      "name": "External discovery",
      "summary": "External event aggregation and import-ready discovery surfaces.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "partial",
        "shared-contract": "partial"
      },
      "parityStatus": "planned",
      "integrations": [
        "ticketmaster",
        "seatgeek",
        "supabase"
      ],
      "jiraKeys": [
        "HOB-12",
        "HOB-13"
      ],
      "firstRelease": {
        "web": "web-v0.9.0"
      },
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented / mixed",
      "deployStatus": "Deployed / mixed"
    },
    {
      "id": "organizer_mode",
      "name": "Organizer mode",
      "summary": "Organizer workspace, attendee operations and supporting backend entities.",
      "statusBySurface": {
        "web": "partial",
        "mobile-android": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "follow-up-required",
      "integrations": [],
      "jiraKeys": [
        "HOB-2"
      ],
      "firstRelease": {
        "mobile-android": "mobile-android-v0.19.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented / mixed",
      "deployStatus": "Deployed / mixed"
    },
    {
      "id": "trip_planner",
      "name": "Trip planner",
      "summary": "Route planning and venue-attached trip context across event surfaces.",
      "statusBySurface": {
        "mobile-android": "shipped",
        "web": "partial",
        "backend": "partial"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "mapy",
        "supabase"
      ],
      "jiraKeys": [
        "HOB-8"
      ],
      "firstRelease": {
        "mobile-android": "mobile-android-v0.19.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented / mixed",
      "deployStatus": "Deployed / mixed"
    },
    {
      "id": "community_pulse",
      "name": "Community pulse",
      "summary": "Internal community-intelligence signals and engagement surfaces.",
      "statusBySurface": {
        "web": "planned",
        "mobile-android": "partial",
        "backend": "partial"
      },
      "parityStatus": "planned",
      "integrations": [],
      "jiraKeys": [
        "HOB-162"
      ],
      "tenant": "Both",
      "channel": "Both",
      "codebaseStatus": "Planned / partial",
      "deployStatus": "Not fully deployed"
    }
  ],
  "integrations": [
    {
      "id": "github",
      "name": "GitHub",
      "category": "source-control",
      "state": "connected",
      "notes": "Web and Android repositories linked"
    },
    {
      "id": "jira",
      "name": "Jira",
      "category": "planning",
      "state": "connected",
      "notes": "Project HOB used for product implementation tracking"
    },
    {
      "id": "vercel",
      "name": "Vercel",
      "category": "deployment",
      "state": "connected",
      "notes": "Production and preview visibility are in use for the web release line"
    },
    {
      "id": "supabase",
      "name": "Supabase",
      "category": "backend",
      "state": "connected",
      "environmentSensitive": true,
      "notes": "Shared backend and migrations are central to parity"
    },
    {
      "id": "geoapify",
      "name": "Geoapify",
      "category": "external-api",
      "state": "connected",
      "environmentSensitive": true,
      "notes": "Primary places provider"
    },
    {
      "id": "tomtom",
      "name": "TomTom",
      "category": "external-api",
      "state": "attention",
      "environmentSensitive": true,
      "notes": "Fallback provider, requires key and parity review"
    },
    {
      "id": "mapy",
      "name": "Mapy.cz",
      "category": "external-api",
      "state": "connected",
      "environmentSensitive": true,
      "notes": "Route and map context"
    },
    {
      "id": "lovable",
      "name": "Lovable",
      "category": "design",
      "state": "connected",
      "notes": "UI iteration source, not source of truth"
    }
  ],
  "parityAlerts": [
    {
      "id": "alert-1",
      "severity": "critical",
      "sourceSurface": "web",
      "affectedSurface": "mobile-android",
      "reason": "Shared place payload and provider ranking changed. Android client should revalidate venue and trip chain parsing.",
      "jiraKey": "HOB-220",
      "state": "tracked"
    },
    {
      "id": "alert-2",
      "severity": "warning",
      "sourceSurface": "backend",
      "affectedSurface": "web",
      "reason": "Organizer runtime entities and audit schema changed. Web organizer shell should align empty states and actions.",
      "jiraKey": "HOB-204",
      "state": "open"
    }
  ]
};

const syncfolkProject: ProjectRecord = {
  "id": "project_syncfolk",
  "tenantId": "tenant_releasegovernance",
  "name": "Syncfolk",
  "slug": "syncfolk",
  "description": "B2C-first scheduling platform with a mature web product, a Supabase-backed runtime and a detailed enterprise absence-planning backlog.",
  "repositories": {
    "web": "syncfolk-webapp-snapshot"
  },
  "jiraProjectKey": "SYN",
  "deploymentStatus": "warning",
  "overview": {
    "applicationDescription": "B2C-first scheduling product with a mature web runtime for event date coordination, plus a deeply specified but not yet deployed enterprise absence-planning branch.",
    "techStack": [
      "React Router web shell",
      "Tailwind + shadcn/ui",
      "Framer Motion",
      "date-fns",
      "Sonner toasts",
      "Lovable / Vite frontend shell"
    ],
    "hostingServices": [
      "Existing live web deployment referenced in the inventory",
      "Lovable / Vite preview and iteration environment"
    ],
    "backendServices": [
      "Supabase Auth",
      "Supabase Postgres",
      "Supabase Edge Functions: join-event, delete-account, admin",
      "Shared B2C runtime data model"
    ],
    "projectStructure": [
      "Auth and entry shell",
      "Event lifecycle and sharing",
      "Calendar voting engine",
      "Decision and notification layer",
      "Personal availability and social graph",
      "Admin operations",
      "Enterprise backlog branch"
    ],
    "runtimeNotes": [
      "Native Android and iPhone parity are planned, not runtime-complete.",
      "Enterprise absence-planning is richly specified in Jira but not deployed.",
      "Supabase is the current backend backbone, similar to Hobbeast."
    ]
  },
  "releases": [
    {
      "id": "rel-sync-1",
      "version": "web-v0.1.0",
      "status": "current",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-01-05",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "framer-motion",
        "lovable",
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "auth_shell"
      ],
      "releaseNotes": "Auth shell, route protection and design-system landing foundation shipped.",
      "jiraLinks": [
        {
          "key": "SYN-4",
          "summary": "SYN | App shell, navigation and design system",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-4"
        },
        {
          "key": "SYN-5",
          "summary": "SYN | Authentication, identity and guest access",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-5"
        },
        {
          "key": "SYN-200",
          "summary": "SYN-200",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-200"
        },
        {
          "key": "SYN-210",
          "summary": "SYN-210",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-210"
        },
        {
          "key": "SYN-300",
          "summary": "SYN-300",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-300"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "App shell and navigation baseline deployed from current web runtime."
    },
    {
      "id": "rel-sync-2",
      "version": "web-v0.2.0",
      "status": "old",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-01-12",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "google-oauth",
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "email_identity",
        "oauth_identity"
      ],
      "releaseNotes": "Email identity, verification and Google OAuth entry paths hardened.",
      "jiraLinks": [
        {
          "key": "SYN-5",
          "summary": "SYN | Authentication, identity and guest access",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-5"
        },
        {
          "key": "SYN-300",
          "summary": "SYN-300",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-300"
        },
        {
          "key": "SYN-301",
          "summary": "SYN-301",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-301"
        },
        {
          "key": "SYN-303",
          "summary": "SYN-303",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-303"
        },
        {
          "key": "SYN-302",
          "summary": "SYN-302",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-302"
        },
        {
          "key": "SYN-310",
          "summary": "SYN-310",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-310"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Identity and verification hardening release."
    },
    {
      "id": "rel-sync-3",
      "version": "web-v0.3.0",
      "status": "old",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-01-20",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "temporary_identity",
        "temporary_return_path"
      ],
      "releaseNotes": "Temporary guest session lifecycle, inactivity logout and return path landed.",
      "jiraLinks": [
        {
          "key": "SYN-310",
          "summary": "SYN-310",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-310"
        },
        {
          "key": "SYN-311",
          "summary": "SYN-311",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-311"
        },
        {
          "key": "SYN-312",
          "summary": "SYN-312",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-312"
        },
        {
          "key": "SYN-313",
          "summary": "SYN-313",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-313"
        },
        {
          "key": "SYN-440",
          "summary": "SYN-440",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-440"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Guest lifecycle release with temporary return links."
    },
    {
      "id": "rel-sync-4",
      "version": "web-v0.4.0",
      "status": "old",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-01-28",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "date-fns",
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "event_creation",
        "event_lifecycle",
        "event_context"
      ],
      "releaseNotes": "Event creation, editing and event context restore delivered.",
      "jiraLinks": [
        {
          "key": "SYN-6",
          "summary": "SYN | Event calendar lifecycle, templates and sharing",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-6"
        },
        {
          "key": "SYN-400",
          "summary": "SYN-400",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-400"
        },
        {
          "key": "SYN-401",
          "summary": "SYN-401",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-401"
        },
        {
          "key": "SYN-402",
          "summary": "SYN-402",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-402"
        },
        {
          "key": "SYN-403",
          "summary": "SYN-403",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-403"
        },
        {
          "key": "SYN-410",
          "summary": "SYN-410",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-410"
        },
        {
          "key": "SYN-411",
          "summary": "SYN-411",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-411"
        },
        {
          "key": "SYN-412",
          "summary": "SYN-412",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-412"
        },
        {
          "key": "SYN-420",
          "summary": "SYN-420",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-420"
        },
        {
          "key": "SYN-421",
          "summary": "SYN-421",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-421"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Event lifecycle and context management release."
    },
    {
      "id": "rel-sync-5",
      "version": "web-v0.5.0",
      "status": "old",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-02-04",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "email-social-share",
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "sharing_management",
        "invite_consumption"
      ],
      "releaseNotes": "Share tokens, grouped social share and join-event flow shipped.",
      "jiraLinks": [
        {
          "key": "SYN-430",
          "summary": "SYN-430",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-430"
        },
        {
          "key": "SYN-431",
          "summary": "SYN-431",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-431"
        },
        {
          "key": "SYN-432",
          "summary": "SYN-432",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-432"
        },
        {
          "key": "SYN-433",
          "summary": "SYN-433",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-433"
        },
        {
          "key": "SYN-440",
          "summary": "SYN-440",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-440"
        },
        {
          "key": "SYN-441",
          "summary": "SYN-441",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-441"
        },
        {
          "key": "SYN-442",
          "summary": "SYN-442",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-442"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Sharing and invite consumption release."
    },
    {
      "id": "rel-sync-6",
      "version": "web-v0.6.0",
      "status": "old",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-02-11",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "date-fns",
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "calendar_rendering",
        "single_day_voting"
      ],
      "releaseNotes": "Calendar grid, eligibility logic and single-day voting reached stable runtime.",
      "jiraLinks": [
        {
          "key": "SYN-500",
          "summary": "SYN-500",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-500"
        },
        {
          "key": "SYN-501",
          "summary": "SYN-501",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-501"
        },
        {
          "key": "SYN-502",
          "summary": "SYN-502",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-502"
        },
        {
          "key": "SYN-503",
          "summary": "SYN-503",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-503"
        },
        {
          "key": "SYN-510",
          "summary": "SYN-510",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-510"
        },
        {
          "key": "SYN-511",
          "summary": "SYN-511",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-511"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Calendar rendering and single-day voting release."
    },
    {
      "id": "rel-sync-7",
      "version": "web-v0.7.0",
      "status": "old",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-02-18",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "range_batch_voting",
        "day_details"
      ],
      "releaseNotes": "Drag/batch voting and day detail surfaces shipped.",
      "jiraLinks": [
        {
          "key": "SYN-520",
          "summary": "SYN-520",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-520"
        },
        {
          "key": "SYN-521",
          "summary": "SYN-521",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-521"
        },
        {
          "key": "SYN-522",
          "summary": "SYN-522",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-522"
        },
        {
          "key": "SYN-510",
          "summary": "SYN-510",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-510"
        },
        {
          "key": "SYN-512",
          "summary": "SYN-512",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-512"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Batch and day-details release."
    },
    {
      "id": "rel-sync-8",
      "version": "web-v0.8.0",
      "status": "old",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-02-25",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "ranking_decision",
        "pin_decision_lifecycle"
      ],
      "releaseNotes": "Ranking, pinned day, tie resolution and unlock lifecycle delivered.",
      "jiraLinks": [
        {
          "key": "SYN-600",
          "summary": "SYN-600",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-600"
        },
        {
          "key": "SYN-601",
          "summary": "SYN-601",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-601"
        },
        {
          "key": "SYN-602",
          "summary": "SYN-602",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-602"
        },
        {
          "key": "SYN-610",
          "summary": "SYN-610",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-610"
        },
        {
          "key": "SYN-611",
          "summary": "SYN-611",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-611"
        },
        {
          "key": "SYN-612",
          "summary": "SYN-612",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-612"
        },
        {
          "key": "SYN-613",
          "summary": "SYN-613",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-613"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Decision-support and pinning release."
    },
    {
      "id": "rel-sync-9",
      "version": "web-v0.9.0",
      "status": "old",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-03",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "notifications_center"
      ],
      "releaseNotes": "Notification center and pin-driven event notifications landed.",
      "jiraLinks": [
        {
          "key": "SYN-620",
          "summary": "SYN-620",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-620"
        },
        {
          "key": "SYN-621",
          "summary": "SYN-621",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-621"
        },
        {
          "key": "SYN-622",
          "summary": "SYN-622",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-622"
        },
        {
          "key": "SYN-623",
          "summary": "SYN-623",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-623"
        },
        {
          "key": "SYN-630",
          "summary": "SYN-630",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-630"
        },
        {
          "key": "SYN-631",
          "summary": "SYN-631",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-631"
        },
        {
          "key": "SYN-632",
          "summary": "SYN-632",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-632"
        },
        {
          "key": "SYN-633",
          "summary": "SYN-633",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-633"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Notification-centered decision support release."
    },
    {
      "id": "rel-sync-10",
      "version": "web-v0.10.0",
      "status": "old",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-10",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "personal_availability"
      ],
      "releaseNotes": "Personal availability calendar, batch fill and copy-to-event shipped.",
      "jiraLinks": [
        {
          "key": "SYN-540",
          "summary": "SYN-540",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-540"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Personal availability release."
    },
    {
      "id": "rel-sync-11",
      "version": "web-v0.11.0",
      "status": "old",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-17",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "profile_security",
        "social_graph"
      ],
      "releaseNotes": "Profile hardening, password change, favorites and friendship flows delivered.",
      "jiraLinks": [
        {
          "key": "SYN-700",
          "summary": "SYN-700",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-700"
        },
        {
          "key": "SYN-701",
          "summary": "SYN-701",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-701"
        },
        {
          "key": "SYN-702",
          "summary": "SYN-702",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-702"
        },
        {
          "key": "SYN-720",
          "summary": "SYN-720",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-720"
        },
        {
          "key": "SYN-721",
          "summary": "SYN-721",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-721"
        },
        {
          "key": "SYN-722",
          "summary": "SYN-722",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-722"
        },
        {
          "key": "SYN-322",
          "summary": "SYN-322",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-322"
        },
        {
          "key": "SYN-710",
          "summary": "SYN-710",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-710"
        },
        {
          "key": "SYN-711",
          "summary": "SYN-711",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-711"
        },
        {
          "key": "SYN-712",
          "summary": "SYN-712",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-712"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Profile and social graph release."
    },
    {
      "id": "rel-sync-12",
      "version": "web-v0.12.0",
      "status": "old",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-24",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "admin_operations"
      ],
      "releaseNotes": "Admin shell, user oversight and event operations were added.",
      "jiraLinks": [
        {
          "key": "SYN-730",
          "summary": "SYN-730",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-730"
        },
        {
          "key": "SYN-731",
          "summary": "SYN-731",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-731"
        },
        {
          "key": "SYN-732",
          "summary": "SYN-732",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-732"
        },
        {
          "key": "SYN-733",
          "summary": "SYN-733",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-733"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Admin operations release."
    },
    {
      "id": "rel-sync-13",
      "version": "unreleased-ent-v0.1.0",
      "status": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
      ],
      "shippedAt": "—",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": false,
      "integrationsChanged": [
        "jira",
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "enterprise_shell",
        "enterprise_membership",
        "enterprise_roles"
      ],
      "releaseNotes": "Enterprise mode foundation, membership model and permissions are specified but not deployed.",
      "jiraLinks": [
        {
          "key": "SYN-13",
          "summary": "SYN | Enterprise mode foundation",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-13"
        },
        {
          "key": "SYN-14",
          "summary": "SYN | Enterprise absence-planning workspace",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-14"
        },
        {
          "key": "SYN-15",
          "summary": "SYN | Registered-only enterprise invitations",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-15"
        },
        {
          "key": "SYN-16",
          "summary": "SYN | Enterprise membership and roles",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-16"
        },
        {
          "key": "SYN-17",
          "summary": "SYN | Enterprise permissions and policy model",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-17"
        },
        {
          "key": "SYN-18",
          "summary": "SYN | Enterprise calendar and resource planning rules",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-18"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Unreleased enterprise workspace foundation."
    },
    {
      "id": "rel-sync-14",
      "version": "unreleased-ent-v0.2.0",
      "status": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
      ],
      "shippedAt": "—",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": false,
      "integrationsChanged": [
        "jira",
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "enterprise_calendar",
        "enterprise_approvals"
      ],
      "releaseNotes": "Enterprise leave planning calendar and approval workflows remain backlog-only.",
      "jiraLinks": [
        {
          "key": "SYN-18",
          "summary": "SYN | Enterprise calendar and resource planning rules",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-18"
        },
        {
          "key": "SYN-20",
          "summary": "SYN | Enterprise planner UI and interaction model",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-20"
        },
        {
          "key": "SYN-150",
          "summary": "SYN | Approval workflow foundation",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-150"
        },
        {
          "key": "SYN-151",
          "summary": "SYN | Manager decision flow",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-151"
        },
        {
          "key": "SYN-152",
          "summary": "SYN | Approval statuses and transitions",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-152"
        },
        {
          "key": "SYN-153",
          "summary": "SYN | Approval timeline and review state",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-153"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Unreleased enterprise planning and approvals."
    },
    {
      "id": "rel-sync-15",
      "version": "unreleased-ent-v0.3.0",
      "status": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
      ],
      "shippedAt": "—",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": false,
      "integrationsChanged": [
        "jira",
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "enterprise_rules",
        "enterprise_workforce_admin"
      ],
      "releaseNotes": "Rule engine, conflicts, overrides and workforce administration are specified but not runtime-delivered.",
      "jiraLinks": [
        {
          "key": "SYN-154",
          "summary": "SYN | Enterprise rule engine and conflicts",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-154"
        },
        {
          "key": "SYN-155",
          "summary": "SYN | Overrides and exception model",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-155"
        },
        {
          "key": "SYN-166",
          "summary": "SYN | Resource administration",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-166"
        },
        {
          "key": "SYN-170",
          "summary": "SYN | Conflict checks and rule evaluation",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-170"
        },
        {
          "key": "SYN-157",
          "summary": "SYN | Workforce and directory setup",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-157"
        },
        {
          "key": "SYN-165",
          "summary": "SYN | Workforce directory setup",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-165"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Unreleased enterprise rule-engine and workforce admin."
    },
    {
      "id": "rel-sync-16",
      "version": "unreleased-ent-v0.4.0",
      "status": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
      ],
      "shippedAt": "—",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": false,
      "integrationsChanged": [
        "jira",
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "enterprise_reporting",
        "enterprise_export"
      ],
      "releaseNotes": "Enterprise KPI reporting, normalized exports and API-ready outputs are still unreleased.",
      "jiraLinks": [
        {
          "key": "SYN-156",
          "summary": "SYN | KPI catalog and dashboard metrics",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-156"
        },
        {
          "key": "SYN-169",
          "summary": "SYN | Reporting UX and wireframes",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-169"
        },
        {
          "key": "SYN-173",
          "summary": "SYN | Desktop and mobile parity",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-173"
        },
        {
          "key": "SYN-174",
          "summary": "SYN | Reporting screens appendix",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-174"
        },
        {
          "key": "SYN-19",
          "summary": "SYN | Enterprise reporting and export surface",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-19"
        },
        {
          "key": "SYN-161",
          "summary": "SYN | Export to Excel XML HTML and APIs",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-161"
        },
        {
          "key": "SYN-167",
          "summary": "SYN | API and export contracts",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-167"
        },
        {
          "key": "SYN-179",
          "summary": "SYN | BI and downstream export consumers",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-179"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Unreleased enterprise reporting and export."
    },
    {
      "id": "rel-sync-17",
      "version": "unreleased-ent-v0.5.0",
      "status": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
      ],
      "shippedAt": "—",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": false,
      "integrationsChanged": [
        "jira",
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "enterprise_import",
        "enterprise_audit"
      ],
      "releaseNotes": "Spreadsheet migration/import, notification matrix and audit trail are planned only.",
      "jiraLinks": [
        {
          "key": "SYN-158",
          "summary": "SYN | Spreadsheet import and migration",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-158"
        },
        {
          "key": "SYN-172",
          "summary": "SYN | Import validation and dry-run",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-172"
        },
        {
          "key": "SYN-186",
          "summary": "SYN | Import error catalog",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-186"
        },
        {
          "key": "SYN-187",
          "summary": "SYN | Rejected-row reporting and migration feedback",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-187"
        },
        {
          "key": "SYN-159",
          "summary": "SYN | Enterprise notification matrix",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-159"
        },
        {
          "key": "SYN-160",
          "summary": "SYN | Immutable audit history",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-160"
        },
        {
          "key": "SYN-171",
          "summary": "SYN | Notification and audit retention",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-171"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Unreleased enterprise import and audit."
    },
    {
      "id": "rel-sync-18",
      "version": "unreleased-ent-v0.6.0",
      "status": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
      ],
      "shippedAt": "—",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": false,
      "integrationsChanged": [
        "jira",
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "enterprise_data_model",
        "enterprise_wireframes",
        "enterprise_qa_matrix",
        "enterprise_mobile_parity",
        "enterprise_security_privacy"
      ],
      "releaseNotes": "Canonical API/data model, wireframes, QA matrix, mobile parity and compliance layers are documented but unreleased.",
      "jiraLinks": [
        {
          "key": "SYN-167",
          "summary": "SYN | API and export contracts",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-167"
        },
        {
          "key": "SYN-168",
          "summary": "SYN | Canonical enterprise data model",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-168"
        },
        {
          "key": "SYN-177",
          "summary": "SYN | Endpoint catalog",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-177"
        },
        {
          "key": "SYN-178",
          "summary": "SYN | Entity relationships and contracts",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-178"
        },
        {
          "key": "SYN-169",
          "summary": "SYN | Reporting UX and wireframes",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-169"
        },
        {
          "key": "SYN-174",
          "summary": "SYN | Reporting screens appendix",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-174"
        },
        {
          "key": "SYN-175",
          "summary": "SYN | Screen-by-screen wireframes",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-175"
        },
        {
          "key": "SYN-182",
          "summary": "SYN | Acceptance and QA matrix",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-182"
        },
        {
          "key": "SYN-188",
          "summary": "SYN | QA acceptance scenarios",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-188"
        },
        {
          "key": "SYN-189",
          "summary": "SYN | Role-based validation matrix",
          "status": "Mapped",
          "url": "https://hobbeast.atlassian.net/browse/SYN-189"
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "files_uploaded_in_conversation",
        "repository": "syncfolk_feature_inventory.md + syncfolk_feature_inventory_detailed.md",
        "ref": "inventory-import",
        "label": "Markdown import / uploaded Syncfolk inventories"
      },
      "deploymentComment": "Unreleased enterprise model, wireframes and QA/compliance."
    }
  ],
  "capabilities": [
    {
      "id": "auth_shell",
      "name": "Unified auth landing and entry shell",
      "summary": "Unified auth landing and entry shell",
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
        "lovable",
        "framer-motion"
      ],
      "jiraKeys": [
        "SYN-4",
        "SYN-5",
        "SYN-200",
        "SYN-210",
        "SYN-300"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "email_identity",
      "name": "Email password auth and verification",
      "summary": "Email password auth and verification",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "oauth_identity",
      "name": "Google OAuth sign-in and upgrade flow",
      "summary": "Google OAuth sign-in and upgrade flow",
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
        "google-oauth"
      ],
      "jiraKeys": [
        "SYN-5",
        "SYN-300",
        "SYN-302",
        "SYN-310"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Likely",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "temporary_identity",
      "name": "Temporary guest session model and inactivity logout",
      "summary": "Temporary guest session model and inactivity logout",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "temporary_return_path",
      "name": "Temp return link and verification code sign-in",
      "summary": "Temp return link and verification code sign-in",
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
        "SYN-440"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Likely",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "event_creation",
      "name": "Create event dialog, templates and date controls",
      "summary": "Create event dialog, templates and date controls",
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
        "date-fns"
      ],
      "jiraKeys": [
        "SYN-6",
        "SYN-400",
        "SYN-401",
        "SYN-402",
        "SYN-403"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "event_lifecycle",
      "name": "Event editing, deletion and lifecycle maintenance",
      "summary": "Event editing, deletion and lifecycle maintenance",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Likely",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "event_context",
      "name": "Event selector and current event context restore",
      "summary": "Event selector and current event context restore",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "sharing_management",
      "name": "Creator-managed share links and grouped share UX",
      "summary": "Creator-managed share links and grouped share UX",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "invite_consumption",
      "name": "Registered and anonymous join-event flow",
      "summary": "Registered and anonymous join-event flow",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "calendar_rendering",
      "name": "Calendar grid, eligibility and calendar-first layout",
      "summary": "Calendar grid, eligibility and calendar-first layout",
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
        "date-fns"
      ],
      "jiraKeys": [
        "SYN-500",
        "SYN-501",
        "SYN-502",
        "SYN-503"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "single_day_voting",
      "name": "Availability mode selector and single-day voting",
      "summary": "Availability mode selector and single-day voting",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "range_batch_voting",
      "name": "Drag-range voting and batch side-panel controls",
      "summary": "Drag-range voting and batch side-panel controls",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "day_details",
      "name": "Info icon, long-press and day detail surfaces",
      "summary": "Info icon, long-press and day detail surfaces",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "ranking_decision",
      "name": "Vote ranking and creator decision support",
      "summary": "Vote ranking and creator decision support",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "pin_decision_lifecycle",
      "name": "Pinned day creation, modification, unlock and freeze behavior",
      "summary": "Pinned day creation, modification, unlock and freeze behavior",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "notifications_center",
      "name": "Notification center with unread/read/delete and event triggers",
      "summary": "Notification center with unread/read/delete and event triggers",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "personal_availability",
      "name": "Personal availability calendar, batch fill and copy-to-event",
      "summary": "Personal availability calendar, batch fill and copy-to-event",
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
        "SYN-540"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "profile_security",
      "name": "Profile page, password change and softened account deletion",
      "summary": "Profile page, password change and softened account deletion",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "social_graph",
      "name": "Friends, pending requests, favorites and social actions",
      "summary": "Friends, pending requests, favorites and social actions",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Implemented in code; live not fully re-verified",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "admin_operations",
      "name": "Admin panel for platform-level overview, users and events",
      "summary": "Admin panel for platform-level overview, users and events",
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
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Unknown",
      "firstRelease": {
        "web": "web-v0.1.0"
      }
    },
    {
      "id": "enterprise_shell",
      "name": "Dedicated enterprise absence-planning mode",
      "summary": "Dedicated enterprise absence-planning mode",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-13",
        "SYN-14"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_membership",
      "name": "Email-only invitation and registered-only access",
      "summary": "Email-only invitation and registered-only access",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-15",
        "SYN-16"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_roles",
      "name": "Enterprise roles, permissions and workspace policy model",
      "summary": "Enterprise roles, permissions and workspace policy model",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-17",
        "SYN-18"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_calendar",
      "name": "Leave planning calendar with role-aware interactions",
      "summary": "Leave planning calendar with role-aware interactions",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-18",
        "SYN-20"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_approvals",
      "name": "Approval workflow and manager decision surfaces",
      "summary": "Approval workflow and manager decision surfaces",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-150",
        "SYN-151",
        "SYN-152",
        "SYN-153"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_rules",
      "name": "Rule engine, conflicts and override model",
      "summary": "Rule engine, conflicts and override model",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-154",
        "SYN-155",
        "SYN-166",
        "SYN-170"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_reporting",
      "name": "Enterprise reporting and KPI catalog",
      "summary": "Enterprise reporting and KPI catalog",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-156",
        "SYN-169",
        "SYN-173",
        "SYN-174"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_import",
      "name": "Spreadsheet import and migration from shared leave trackers",
      "summary": "Spreadsheet import and migration from shared leave trackers",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-158",
        "SYN-172",
        "SYN-186",
        "SYN-187"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_export",
      "name": "Export to Excel/XML/HTML and integration-ready APIs",
      "summary": "Export to Excel/XML/HTML and integration-ready APIs",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-19",
        "SYN-161",
        "SYN-167",
        "SYN-179"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_audit",
      "name": "Enterprise notification matrix and immutable audit history",
      "summary": "Enterprise notification matrix and immutable audit history",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-159",
        "SYN-160",
        "SYN-171"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_data_model",
      "name": "Canonical API and entity model",
      "summary": "Canonical API and entity model",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-167",
        "SYN-168",
        "SYN-177",
        "SYN-178"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_wireframes",
      "name": "Screen-by-screen wireframes and UX appendix",
      "summary": "Screen-by-screen wireframes and UX appendix",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira"
      ],
      "jiraKeys": [
        "SYN-169",
        "SYN-174",
        "SYN-175"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_qa_matrix",
      "name": "Acceptance matrix and QA scenarios",
      "summary": "Acceptance matrix and QA scenarios",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira"
      ],
      "jiraKeys": [
        "SYN-182",
        "SYN-188",
        "SYN-189",
        "SYN-190",
        "SYN-191",
        "SYN-192"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_mobile_parity",
      "name": "Enterprise mobile parity and offline-safe behavior rules",
      "summary": "Enterprise mobile parity and offline-safe behavior rules",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira"
      ],
      "jiraKeys": [
        "SYN-173",
        "SYN-185"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_security_privacy",
      "name": "Security, privacy and compliance rules",
      "summary": "Security, privacy and compliance rules",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-176",
        "SYN-181",
        "SYN-183",
        "SYN-184"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    },
    {
      "id": "enterprise_workforce_admin",
      "name": "Workforce setup, member directory and resource admin",
      "summary": "Workforce setup, member directory and resource admin",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira",
        "supabase"
      ],
      "jiraKeys": [
        "SYN-157",
        "SYN-165",
        "SYN-166"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No"
    }
  ],
  "integrations": [
    {
      "id": "github",
      "name": "GitHub",
      "category": "source-control",
      "state": "attention",
      "notes": "Governance seed is based on uploaded repository snapshots and markdown inventories; direct repo linkage should be wired next."
    },
    {
      "id": "jira",
      "name": "Jira",
      "category": "planning",
      "state": "connected",
      "notes": "Project SYN contains both implemented B2C work and a detailed enterprise backlog."
    },
    {
      "id": "vercel",
      "name": "Vercel",
      "category": "deployment",
      "state": "planned",
      "notes": "Web release visibility should be connected once Syncfolk deployment metadata is linked."
    },
    {
      "id": "supabase",
      "name": "Supabase",
      "category": "backend",
      "state": "connected",
      "environmentSensitive": true,
      "notes": "Auth, Postgres and Edge Functions are the current runtime backbone of the product."
    },
    {
      "id": "google-oauth",
      "name": "Google OAuth",
      "category": "external-api",
      "state": "connected",
      "environmentSensitive": true,
      "notes": "Used via Supabase Auth for lower-friction registration, sign-in and guest upgrade paths."
    },
    {
      "id": "email-social-share",
      "name": "Email and social share deep links",
      "category": "external-api",
      "state": "connected",
      "notes": "Used for event sharing through email, mailto and social deep-link flows."
    },
    {
      "id": "lovable",
      "name": "Lovable / Vite frontend shell",
      "category": "design",
      "state": "connected",
      "notes": "Current web workflow is described as a Lovable/Vite-based frontend shell and iteration environment."
    }
  ],
  "parityAlerts": [
    {
      "id": "sync-alert-1",
      "severity": "warning",
      "sourceSurface": "web",
      "affectedSurface": "mobile-android",
      "reason": "The current feature inventory shows a mature B2C web product, but native Android parity is still planned rather than runtime-implemented.",
      "state": "open"
    },
    {
      "id": "sync-alert-2",
      "severity": "warning",
      "sourceSurface": "web",
      "affectedSurface": "mobile-ios",
      "reason": "The current feature inventory describes web-first delivery and future parity rules, but no live iPhone runtime surface is represented yet.",
      "state": "open"
    },
    {
      "id": "sync-alert-3",
      "severity": "critical",
      "sourceSurface": "web",
      "affectedSurface": "backend",
      "reason": "Enterprise absence-planning, approval workflows, rule engine, export and import are richly specified in Jira, but not implemented in the current runtime backend.",
      "state": "tracked"
    }
  ]
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
