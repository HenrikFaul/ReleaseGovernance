import { ProjectRecord, TenantRecord } from "@/lib/types";

const hobbeastProject: ProjectRecord = {
  "id": "project_hobbeast",
  "tenantId": "tenant_releasegovernance",
  "name": "Hobbeast",
  "slug": "hobbeast",
  "description": "Cross-platform community and event platform using shared Supabase backend, imported external discovery, Lovable-assisted web UI and native Android client.",
  "domain": "hobbeast.app",
  "repositories": {
    "web": "HenrikFaul/hobbeast",
    "android": "HenrikFaul/Hobbeast-mobile"
  },
  "jiraProjectKey": "HOB",
  "lovableProject": "bc7f13b3-b1aa-49df-95d6-45b6a5bb7919",
  "deploymentStatus": "warning",
  "releases": [
    {
      "id": "hob-backend-foundation",
      "version": "backend-v0.1.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-18",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "backend_foundation"
      ],
      "releaseNotes": "First-party Supabase schema, RLS posture, SQL functions and operational backend foundations.",
      "deploymentComment": "First-party Supabase schema, RLS posture, SQL functions and operational backend foundations.",
      "jiraLinks": [
        {
          "key": "HOB-28",
          "summary": "Epic: Core data model, Supabase and operational foundations",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-28",
          "description": "Goal: cover the platform-level foundations required to rebuild and operate Hobbeast reliably.\n\nScope:\n\n* database schema and RLS\n* external_events and integration tables\n* Edge Functions, secrets and cron jobs\n* logging, diagnostics and operational readiness\n* environment and deployment assumptions\n\nSuccess criteria:\n\n* core platform foundations are described and decomposed into implementable work items\n\nImplementation backfill note:\n\nThe mobile/backend track already introduced applied first-party Supabase schema, RLS-oriented migrations and operational SQL helpers. This epic should now be treated as partially concretized by implementation, not only planned platform work.\n\nDocumentation follow-up:\n\nHOB-207 documents the applied Supabase schema/RLS/RPC contract.\nHOB-211 documents Android implementation coverage and cross-surface follow-up.",
          "labels": [
            "backlog",
            "core",
            "hobbeast",
            "platform",
            "supabase"
          ]
        },
        {
          "key": "HOB-36",
          "summary": "Story: Define Supabase schema, RLS and migration strategy for core Hobbeast entities",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-36",
          "description": "Cover the database-level foundations of Hobbeast.\n\nScope:\n\n* core tables and relationships\n* migration strategy\n* row level security rules\n* environment assumptions\n\nAcceptance criteria:\n\n* core data model and database rules are documented and implementable from Jira alone\n\nImplementation backfill note:\n\nThis story is no longer purely conceptual. A first-party Supabase schema and RLS-oriented migration set were already introduced and applied during the mobile/backend track.\n\nDocumentation follow-up:\n\nHOB-207.",
          "labels": [
            "core",
            "database",
            "hobbeast",
            "supabase"
          ]
        },
        {
          "key": "HOB-208",
          "summary": "Documentation: backfill Android implementation coverage and cross-surface follow-up matrix",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-208",
          "description": "Document the Android implementation progress in a way that can be read back from Jira without opening the code packages.\n\nScope:\n\n* summarize what was materially advanced in Android UI/flow terms\n* separate mobile-only implementation choices from shared product/backend contract\n* list the resulting web follow-up/parity stories\n* list the backend and Supabase dependencies introduced by the mobile track\n* create a concise cross-surface matrix so later work does not miss hidden drift risks\n\nExpected coverage:\n\n* discovery lenses, filters and card semantics\n* place search, venue selection and trip continuity\n* create/edit/detail lifecycle\n* organizer attendee/check-in runtime\n* organizer messaging and analytics posture\n* onboarding, session and reminder journey\n* hidden hub / community pulse / organizer insight posture\n* direct references to HOB-199, HOB-200, HOB-201, HOB-202, HOB-203, HOB-204, HOB-205 and HOB-207\n\nAcceptance criteria:\n\n* Jira contains one readable implementation-backfill summary for the Android track\n* shared follow-up items for web/backend are explicitly listed and traceable\n* future backlog grooming can use Jira as the source of truth instead of reconstructing the mobile change history from zip packages",
          "labels": [
            "android",
            "documentation",
            "mobile-followup",
            "parity"
          ]
        },
        {
          "key": "HOB-209",
          "summary": "Documentation: backfill Android implementation coverage and cross-surface follow-up matrix",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-209",
          "description": "Document the Android implementation progress in a way that can be read back from Jira without opening the code packages.\n\nScope:\n\n* summarize what was materially advanced in Android UI/flow terms\n* separate mobile-only implementation choices from shared product/backend contract\n* list the resulting web follow-up/parity stories\n* list the backend and Supabase dependencies introduced by the mobile track\n* create a concise cross-surface matrix so later work does not miss hidden drift risks\n\nExpected coverage:\n\n* discovery lenses, filters and card semantics\n* place search, venue selection and trip continuity\n* create/edit/detail lifecycle\n* organizer attendee/check-in runtime\n* organizer messaging and analytics posture\n* onboarding, session and reminder journey\n* hidden hub / community pulse / organizer insight posture\n* direct references to HOB-199, HOB-200, HOB-201, HOB-202, HOB-203, HOB-204, HOB-205 and HOB-207\n\nAcceptance criteria:\n\n* Jira contains one readable implementation-backfill summary for the Android track\n* shared follow-up items for web/backend are explicitly listed and traceable\n* future backlog grooming can use Jira as the source of truth instead of reconstructing the mobile change history from zip packages",
          "labels": [
            "android",
            "documentation",
            "mobile-followup",
            "parity"
          ]
        },
        {
          "key": "HOB-210",
          "summary": "Documentation: backfill Android implementation coverage and cross-surface follow-up matrix",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-210",
          "description": "Document the Android implementation progress in a way that can be read back from Jira without opening the code packages.\n\nScope:\n\n* summarize what was materially advanced in Android UI/flow terms\n* separate mobile-only implementation choices from shared product/backend contract\n* list the resulting web follow-up/parity stories\n* list the backend and Supabase dependencies introduced by the mobile track\n* create a concise cross-surface matrix so later work does not miss hidden drift risks\n\nExpected coverage:\n\n* discovery lenses, filters and card semantics\n* place search, venue selection and trip continuity\n* create/edit/detail lifecycle\n* organizer attendee/check-in runtime\n* organizer messaging and analytics posture\n* onboarding, session and reminder journey\n* hidden hub / community pulse / organizer insight posture\n* direct references to HOB-199, HOB-200, HOB-201, HOB-202, HOB-203, HOB-204, HOB-205 and HOB-207\n\nAcceptance criteria:\n\n* Jira contains one readable implementation-backfill summary for the Android track\n* shared follow-up items for web/backend are explicitly listed and traceable\n* future backlog grooming can use Jira as the source of truth instead of reconstructing the mobile change history from zip packages",
          "labels": [
            "android",
            "documentation",
            "mobile-followup",
            "parity"
          ]
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "hobbeast",
        "label": "GitHub / HenrikFaul/hobbeast (shared backend)"
      }
    },
    {
      "id": "hob-account-onboarding",
      "version": "mobile-android-v0.2.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "mobile-android",
        "backend"
      ],
      "shippedAt": "2026-03-19",
      "backendChanged": true,
      "sharedContractChanged": false,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "account_onboarding"
      ],
      "releaseNotes": "Core account, onboarding and profile management baseline for the native flow.",
      "deploymentComment": "Core account, onboarding and profile management baseline for the native flow.",
      "jiraLinks": [
        {
          "key": "HOB-26",
          "summary": "Epic: Core account, onboarding and profile management",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-26",
          "description": "Goal: document and cover Hobbeast core user account capabilities so the product can be rebuilt from Jira if needed.\n\nScope:\n\n* authentication and session handling\n* onboarding basics\n* profile editing and privacy\n* interests and preferences\n* profile location handling\n\nSuccess criteria:\n\n* core account and profile behaviour is fully described and decomposed into implementable work items",
          "labels": [
            "account",
            "backlog",
            "core",
            "hobbeast",
            "profile"
          ]
        },
        {
          "key": "HOB-30",
          "summary": "Story: Implement core authentication and session handling flows",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-30",
          "description": "Cover Hobbeast core authentication and session behaviour.\n\nScope:\n\n* sign up / sign in / sign out\n* authenticated session lifecycle\n* protected routes and session restoration\n* account identity assumptions\n\nAcceptance criteria:\n\n* core auth flows are documented and implementable from Jira alone",
          "labels": [
            "account",
            "auth",
            "core",
            "hobbeast"
          ]
        },
        {
          "key": "HOB-31",
          "summary": "Story: Implement onboarding, profile basics and preference editing",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-31",
          "description": "Cover Hobbeast user onboarding and core profile behaviour.\n\nScope:\n\n* initial onboarding flow\n* profile basic fields\n* interest and hobby preference editing\n* profile save/load flow\n* privacy-ready profile structure\n\nAcceptance criteria:\n\n* onboarding and profile basics are fully documented and implementable from Jira alone",
          "labels": [
            "core",
            "hobbeast",
            "onboarding",
            "profile"
          ]
        },
        {
          "key": "HOB-37",
          "summary": "Story: Implement profile privacy, location sharing and preference persistence",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-37",
          "description": "Cover profile privacy and preference persistence behaviour.\n\nScope:\n\n* profile privacy settings\n* location sharing toggle behaviour\n* saved preferences persistence\n* profile state restoration on reload\n\nAcceptance criteria:\n\n* profile privacy and preference behaviour is documented and implementable from Jira alone",
          "labels": [
            "core",
            "hobbeast",
            "preferences",
            "privacy",
            "profile"
          ]
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "Hobbeast-mobile",
        "label": "GitHub / HenrikFaul/Hobbeast-mobile"
      }
    },
    {
      "id": "hob-retention-reminders",
      "version": "mobile-android-v0.3.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "mobile-android",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-20",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "retention_reminders"
      ],
      "releaseNotes": "Retention, reminders, engagement loops and session-continuity baseline.",
      "deploymentComment": "Retention, reminders, engagement loops and session-continuity baseline.",
      "jiraLinks": [
        {
          "key": "HOB-8",
          "summary": "Epic: Mobile retention, reminders and engagement loops",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-8",
          "description": "Goal: improve retention and re-engagement with mobile-friendly and reminder-oriented features.\n\nScope:\n\n* PWA readiness\n* reminder flows\n* calendar integration\n* push-ready architecture\n* re-engagement loops around joined and relevant events\n\nSuccess criteria:\n\n* users are reminded about relevant and joined events\n* Hobbeast becomes more sticky without sacrificing simplicity\n\nImplementation backfill note:\n\nThe Android implementation track already introduced onboarding, session continuity, first organizer run guidance, reminder permission posture, reminder-loop framing, personal journey blocks and planning/reminder empty-state handling. This epic is therefore partially concretized by implementation.\n\nCross-surface follow-up:\n\nWeb should align to the same journey-state semantics even if platform permission mechanics differ. Follow-up story: HOB-204.",
          "labels": [
            "backlog",
            "GAP",
            "gap-analysis",
            "hobbeast",
            "mobile",
            "retention"
          ]
        },
        {
          "key": "HOB-21",
          "summary": "Story: Add PWA, reminders and calendar-oriented retention features",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-21",
          "description": "h1. Objective\n\nCreate a retention-focused product layer for joined and relevant events with PWA readiness, reminder surfaces and calendar integrations.\n\nh1. Functional requirements\n\nh2. PWA readiness\n\n* install prompt support where browser allows\n* app manifest coverage for name, icons, theme color, start URL\n* offline-safe shell for key routes (lightweight first version)\n\nh2. Reminder surfaces\n\n* joined events reminder list on home/profile\n* upcoming event reminder card\n* reminder preference toggle per user\n\nh2. Calendar integration\n\n* add to calendar actions:\n** Google Calendar link\n** ICS file export\n* calendar export must include:\n** title\n** description\n** starts_at\n** ends_at\n** location summary\n** external URL/internal detail URL\n\nh2. Re-engagement surfaces\n\n* joined events section\n* upcoming this week section\n* because-you-joined reminders for recurring interests\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Upcoming for you                                              |\n+--------------------------------------------------------------+\n| Friday Board Game Night      Tomorrow 19:00   [Add calendar] |\n| Jazz Meetup                  In 3 days        [Add calendar] |\n+--------------------------------------------------------------+\n| [Install Hobbeast app]                                        |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* users can add events to calendar from Hobbeast surfaces\n* joined/upcoming reminders are visible in product\n* PWA install readiness is described and implementable\n* retention surfaces do not regress the main discovery experience",
          "labels": [
            "GAP",
            "hobbeast",
            "mobile",
            "reminders",
            "retention"
          ]
        },
        {
          "key": "HOB-74",
          "summary": "Subtask: Implement PWA install readiness and manifest setup",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-74",
          "description": "Set up the basic PWA install foundations, including app manifest, icons, theme values and install prompt handling where supported.",
          "labels": []
        },
        {
          "key": "HOB-80",
          "summary": "Subtask: Implement add-to-calendar links and ICS export for events",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-80",
          "description": "Build add-to-calendar actions for supported events, including direct calendar links and ICS file generation with title, time and location data.",
          "labels": []
        },
        {
          "key": "HOB-81",
          "summary": "Subtask: Build upcoming reminders UI for joined and relevant events",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-81",
          "description": "Implement reminder cards or lists for upcoming joined and relevant events on key user surfaces.",
          "labels": []
        },
        {
          "key": "HOB-82",
          "summary": "Subtask: Persist user reminder preferences for retention surfaces",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-82",
          "description": "Store and load user-level reminder preferences used by joined-event reminders and future notification flows.",
          "labels": []
        },
        {
          "key": "HOB-174",
          "summary": "Retention UX: redesign profile and my-plans into reminder-oriented surfaces",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-174",
          "description": "Redesign profile and plan surfaces around upcoming events, reminders, saved intent and re-engagement modules without harming current simplicity.",
          "labels": [
            "design",
            "profile",
            "reminders",
            "retention"
          ]
        },
        {
          "key": "HOB-180",
          "summary": "Hub retention: add weekly relevant-scene reminder modules to profile and home",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-180",
          "description": "Add weekly relevant-scene reminder modules to profile and home so Hobbeast can re-engage users around nearby scenes, recurring formats and latent community relevance.",
          "labels": [
            "community",
            "hubs",
            "reminders",
            "retention"
          ]
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "Hobbeast-mobile",
        "label": "GitHub / HenrikFaul/Hobbeast-mobile"
      }
    },
    {
      "id": "hob-discovery",
      "version": "web-v0.4.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "web",
        "mobile-android",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-21",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": false,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "discovery"
      ],
      "releaseNotes": "Discovery, search, personalization and journey-aware card semantics baseline.",
      "deploymentComment": "Discovery, search, personalization and journey-aware card semantics baseline.",
      "jiraLinks": [
        {
          "key": "HOB-1",
          "summary": "Epic: Discovery, search and personalization foundation",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-1",
          "description": "Goal: strengthen Hobbeast's core discovery experience without regressing current working filters.\n\nScope:\n\n* preserve current working event filtering UX\n* improve personal recommendation logic\n* improve category persistence and filter state handling\n* improve relevance ranking for events\n* support external event source blending in discovery\n\nSuccess criteria:\n\n* category, personal and free-text filters can switch without losing user selections\n* events are ranked more meaningfully for the user\n* external sources can appear in the same discovery surface without breaking the current Hobbeast experience\n\nImplementation backfill note:\n\nThe Android implementation track already moved discovery significantly forward with explicit discovery lenses, category/search/distance/venue filtering, richer event-card journey semantics, imported-vs-first-party posture and community-aware empty/sparse-data handling. This epic should therefore be treated as partially concretized by implementation, not only conceptual.\n\nCross-surface follow-up:\n\nWeb must now align with the same discovery/filter/card semantics to avoid drift. Follow-up story: HOB-201.",
          "labels": [
            "backlog",
            "discovery",
            "GAP",
            "gap-analysis",
            "hobbeast"
          ]
        },
        {
          "key": "HOB-3",
          "summary": "Story: A fő eseményszűrők állapotkezelése legyen konzisztens és perzisztens",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-3",
          "description": "h1. Objective\n\nEnsure the main event filters behave as mutually exclusive primary modes while preserving category selections across mode switches.\n\nh1. Problem statement\n\nThe current Events page mixes two concerns:\n\n# Which *primary discovery mode* is active ({{search}}, {{all}}, {{personal}}, {{categories}})\n# Which *category selections* are stored in memory\n\nThis causes regressions where category chips remain selected in memory but are not visually or functionally re-activated when the user returns to the Categories mode.\n\nh1. Functional requirements\n\nh2. Primary filter model\n\n* Only one primary filter can be active at a time:\n** {{Search}}\n** {{All}}\n** {{For me}}\n** {{Categories}}\n* Switching primary filter must *not* clear stored category selections.\n* Category selections are only cleared by:\n** {{Clear selections}}\n** new session / full reset logic\n\nh2. Category persistence\n\n* Persist selected items in dedicated state buckets:\n** {{selectedCategoryIds}}\n** {{selectedSubcategoryKeys}}\n** {{selectedActivityKeys}}\n* Persist expanded tree state separately from selected state.\n* When {{Categories}} is re-activated, previously selected items must:\n** render as active (green)\n** apply filtering immediately\n** reopen relevant parent branches if needed\n\nh2. Search mode\n\n* Typing in the free text input activates {{Search}} mode.\n* Clearing the input returns the page to {{All}} unless the user explicitly reselects another primary mode.\n* Search mode must not delete stored category selections.\n\nh2. Personal mode\n\n* {{For me}} mode must use favorite categories / hobbies / joined history logic.\n* Entering {{For me}} mode must not delete stored category selections.\n\nh1. Technical design\n\nh2. Frontend state contract\n\n{noformat} type PrimaryFilter = 'all' | 'search' | 'personal' | 'categories'\n\n const [primaryFilter, setPrimaryFilter] = useState<PrimaryFilter>('all')\n const [search, setSearch] = useState('')\n const [selectedCategoryIds, setSelectedCategoryIds] = useState<Set<string>>(new Set())\n const [selectedSubcategoryKeys, setSelectedSubcategoryKeys] = useState<Set<string>>(new Set())\n const [selectedActivityKeys, setSelectedActivityKeys] = useState<Set<string>>(new Set())\n const [expandedCategoryIds, setExpandedCategoryIds] = useState<Set<string>>(new Set()){noformat}\n\nh2. Derived behaviour\n\n* {{primaryFilter}} decides which filtering pipeline is executed.\n* selected category states decide chip active styling and category filter payload.\n* category filtering only runs when {{primaryFilter === 'categories'}}.\n\nh2. Filtering pipeline order\n\n# base event source list\n# source filter ({{All sources / Hobbeast / External}})\n# distance filter\n# primary filter branch:\n#* {{all}} -> no extra restriction\n#* {{search}} -> text match\n#* {{personal}} -> personal recommendation rule set\n#* {{categories}} -> category tree matching\n# sort / ranking\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Keress eseményt [________________________]                   |\n|                                                              |\n| [Mind] [Nekem] [Kategóriák]                                  |\n|                                                              |\n| Active primary mode: KATEGÓRIÁK                              |\n+--------------------------------------------------------------+\n\nKategóriák modal\n+--------------------------------------------------------------+\n| Kategóriák                                  [Törlés] [Kész]  |\n+--------------------------------------------------------------+\n| > Gasztronómia                                               |\n|   [x] Étterem                                                |\n|   [x] Kávézó                                                 |\n|     [x] Specialty                                            |\n|     [ ] Brunch                                               |\n| > Sport                                                      |\n|   [ ] Futás                                                  |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* exactly one primary mode is active at any time\n* category selections survive switching to {{All}}, {{For me}}, or {{Search}}\n* returning to {{Categories}} restores visual active state and actual filtering\n* selected items are green/active without requiring reselection\n* {{Clear selections}} resets both stored selections and active category filtering\n* no regression in source filter or distance filter behaviour\n\nh1. QA scenarios\n\n# Select 3 categories -> switch to {{For me}} -> switch back to {{Categories}} -> selections still active and filtering applied\n# Select categories -> type text search -> clear text -> categories remain stored but inactive until {{Categories}} is clicked again\n# Select categories -> click {{Clear selections}} -> all category states cleared\n# Use distance filter + categories together -> result set remains stable and predictable",
          "labels": [
            "discovery",
            "filters",
            "GAP",
            "hobbeast",
            "ux"
          ]
        },
        {
          "key": "HOB-9",
          "summary": "Story: Build recommendation ranking for 'Nekem' and personalized discovery",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-9",
          "description": "Felhasználóként relevánsabb eseményeket szeretnék látni a 'Nekem' nézetben, hogy gyorsabban találjak a hobbijaimhoz, korábbi csatlakozásaimhoz és preferenciáimhoz illeszkedő programokat.\n\nScope:\n\n* interests/hobbies weighting\n* joined history weighting\n* category affinity scoring\n* future support for trending/featured signals\n* explainable recommendation reasons, pl. \"Because you joined X\" / \"Because you like Y\"\n* visible recommendation badges or helper text on relevant cards\n\nAcceptance criteria:\n\n* the 'Nekem' list uses explicit ranking logic\n* ranking remains explainable and debuggable\n* the UI can show meaningful recommendation reasons to the user\n* current working event list UX is preserved",
          "labels": [
            "discovery",
            "GAP",
            "hobbeast",
            "recommendation"
          ]
        },
        {
          "key": "HOB-10",
          "summary": "Story: Add trending, featured and early-access discovery surfaces",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-10",
          "description": "h1. Objective\n\nDefine the discovery surfaces and ranking logic for {{Trending}}, {{Featured}}, and {{Early access}} event sections on the Events page.\n\nh1. Functional requirements\n\nh2. Discovery sections\n\nThe Events page can expose separate horizontally or vertically stacked sections:\n\n* Trending nearby\n* Featured events\n* Early access / limited spots\n* Because you joined / Because you like\n\nh2. Ranking contracts\n\nh3. Trending nearby\n\nInputs:\n\n* recent views\n* recent detail opens\n* recent join clicks\n* recent confirmed {{going}}\n* distance from user/profile location\n* time decay (recent interactions weigh more)\n\nSuggested formula example:\n\n{noformat}trending_score =\n  (views * 0.1) +\n  (detail_opens * 0.3) +\n  (join_clicks * 0.6) +\n  (going_count * 1.0) -\n  distance_penalty -\n  stale_event_penalty{noformat}\n\nh3. Featured events\n\n* manually curated by admin/organizer flag\n* optional future paid promotion flag\n* featured ordering by explicit {{featured_priority}}\n\nh3. Early access / limited spots\n\n* events with {{visibility_type = early_access_limited}}\n* or events with small remaining capacity threshold\n* can show {{N spots left}} badge\n\nh2. UI rules\n\n* these sections must not break the existing flat list and primary filters\n* section cards reuse the main event card contract where possible\n* if not enough events exist for a section, section can be hidden\n\nh1. Suggested data model extensions\n\n{noformat}Event {\n  is_featured: boolean\n  featured_priority: number | null\n  visibility_type: 'public' | 'private' | 'invite_only' | 'early_access_limited'\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Trending nearby                                               |\n| [Card] [Card] [Card]                                          |\n+--------------------------------------------------------------+\n| Featured                                                      |\n| [Featured card] [Featured card]                               |\n+--------------------------------------------------------------+\n| Early access / limited spots                                  |\n| [Only 5 spots left] [Invite-only preview]                     |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* discovery sections have explicit inclusion and ranking rules\n* trending score is explainable and adjustable\n* featured section supports manual curation\n* early access section supports limited-availability visibility logic",
          "labels": [
            "discovery",
            "featured",
            "GAP",
            "hobbeast",
            "ranking"
          ]
        },
        {
          "key": "HOB-44",
          "summary": "Subtask: Implement primary filter state separation in Events.tsx",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-44",
          "description": "Refactor the Events page so primary filter mode is stored independently from category selection state. Introduce explicit primaryFilter handling and remove implicit coupling between search, categories and personal modes.",
          "labels": []
        },
        {
          "key": "HOB-45",
          "summary": "Subtask: Separate category selection state from expanded tree state",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-45",
          "description": "Persist selectedCategoryIds, selectedSubcategoryKeys and selectedActivityKeys separately from expanded branch state so category selections survive primary filter switches and can be reactivated visually.",
          "labels": []
        },
        {
          "key": "HOB-46",
          "summary": "Subtask: Add QA regression scenarios for primary filter switching",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-46",
          "description": "Implement and document regression checks for switching between All, Search, For me and Categories modes, including category persistence, visual active state and distance/source filter coexistence.",
          "labels": []
        },
        {
          "key": "HOB-164",
          "summary": "Design refresh: redesign Events discovery page without breaking core filters",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-164",
          "description": "Redesign the Events surface with stronger hierarchy, social discovery rails, elegant mode switcher, calmer filter strip and richer event card system while preserving existing filter and state logic.",
          "labels": [
            "design",
            "discovery",
            "events",
            "redesign"
          ]
        },
        {
          "key": "HOB-165",
          "summary": "UX hardening: align primary filter visual states with redesigned discovery shell",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-165",
          "description": "Apply the redesign to the main filter state system so All, Search, For me and Categories remain visually and behaviorally consistent, persistent and non-regressive.\n\nAlignment note: this story is design/UX continuation work aligned to HOB-3 and is placed under the Discovery epic because HOB-3 itself is an existing story, not an epic.",
          "labels": [
            "design",
            "filters",
            "regression",
            "ux"
          ]
        },
        {
          "key": "HOB-166",
          "summary": "Design refresh: redesign event card system for social fit, capacity and source cues",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-166",
          "description": "Create a new multi-variant event card family that expresses vibe, fit, capacity, early access, source and reminder cues without clutter.",
          "labels": [
            "design",
            "discovery",
            "event-cards"
          ]
        },
        {
          "key": "HOB-175",
          "summary": "Discovery UX: add community pulse and social-fit modules to discovery and detail surfaces",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-175",
          "description": "Add community pulse, social-fit and belonging-oriented modules to discovery and event detail so Hobbeast can signal community relevance without becoming noisy or invasive.",
          "labels": [
            "community",
            "discovery",
            "personalization",
            "ux"
          ]
        },
        {
          "key": "HOB-176",
          "summary": "Hub foundation: define hidden hub domain model and clustering-safe product contract",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-176",
          "description": "Objective:\nDefine the hidden hub domain model in a way that is product-usable, privacy-safe and operationally reviewable.\n\nRefined concept:\nA hidden hub is not a visible user segment. It is an internal scene-intelligence object representing a recurring pocket of interest, participation or local demand that may justify better recommendations, reminders or organizer insight.\n\nAllowed signal families:\n\n* explicit interest signals: followed categories, saved events, joined events, repeated format choices\n* behavioral cadence signals: weekday/time preference, recurrence pattern, lead time, attendance consistency\n* local scene signals: neighborhood, travel radius, venue cluster affinity, city/district demand\n* social adjacency signals: repeat co-attendance patterns at aggregate level only\n* format signals: workshop vs meetup vs nightlife vs sports vs family-friendly, etc.\n\nGuardrails:\n\n* do not use sensitive traits as primary clustering keys\n* age should not be a first-class clustering key; if ever used, it must be broad, user-provided and low-stakes\n* hidden hubs must not directly expose membership lists or labels to users\n* hub assignment must remain probabilistic and reviewable, not deterministic and absolute\n\nSuggested hub object:\n\n* hub_id\n* hub_type (scene, format, locality, rhythm, emerging)\n* confidence_score\n* activation_potential\n* size_band\n* locality_band\n* dominant_formats\n* cadence_pattern\n* last_strengthened_at\n* lifecycle_state (candidate, active_internal, monitored, archived)\n\nAcceptance criteria:\n\n* the hub model supports clustering by scene, locality, cadence and format\n* the model excludes high-risk direct profiling patterns\n* every hub has confidence and lifecycle metadata\n* the model is usable by discovery, organizer insight and retention layers without exposing raw segmentation",
          "labels": [
            "community",
            "foundation",
            "hubs",
            "personalization"
          ]
        },
        {
          "key": "HOB-177",
          "summary": "Hub foundation: add privacy-safe community pulse surfaces to discovery experience",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-177",
          "description": "Objective:\nDesign privacy-safe community pulse surfaces informed by hidden hubs, without revealing hidden membership or making users feel watched.\n\nUI principle:\nThe product should speak in terms of scenes, momentum and relevance, not secret labels.\n\nGood examples:\n\n* 'Board game nights are picking up near you this week'\n* 'Small creative workshops are trending in your area'\n* 'Thursday evening meetups are especially active right now'\n\nAvoid:\n\n* 'You are in the X hub'\n* 'People like you are doing Y' if that feels profiling-heavy\n* overprecise or invasive explanations of why something is shown\n\nEligible surfaces:\n\n* discovery home rails\n* event detail side modules\n* weekly digest / reminder cards\n* organizer-facing pulse widgets in aggregate form\n\nRequired rules:\n\n* minimum aggregation threshold before a pulse can be shown\n* language must stay fuzzy enough to feel helpful, not creepy\n* use category/scene wording instead of internal hub naming\n* pulse cards must be dismissible and must not dominate primary event discovery\n\nAcceptance criteria:\n\n* community pulse modules communicate momentum and belonging without exposing hidden segmentation\n* copy tone is warm, low-stakes and non-invasive\n* pulse modules can be suppressed when confidence or sample size is too low\n* discovery remains event-first, with pulse as supporting context",
          "labels": [
            "community",
            "discovery",
            "hubs",
            "privacy"
          ]
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "hobbeast",
        "label": "GitHub / HenrikFaul/hobbeast"
      }
    },
    {
      "id": "hob-location-distance",
      "version": "web-v0.5.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "web",
        "mobile-android",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-22",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "geoapify"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "location_distance"
      ],
      "releaseNotes": "Location, address and distance infrastructure used by discovery and venue flows.",
      "deploymentComment": "Location, address and distance infrastructure used by discovery and venue flows.",
      "jiraLinks": [
        {
          "key": "HOB-29",
          "summary": "Epic: Core location, address and distance infrastructure",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-29",
          "description": "Goal: cover the shared location stack used across profile, event creation and event discovery.\n\nScope:\n\n* address autocomplete\n* city/address normalization\n* location privacy behaviour\n* profile based location preferences\n* distance filtering foundations\n\nSuccess criteria:\n\n* location-related behaviour is fully described and decomposed into implementable work items",
          "labels": [
            "backlog",
            "core",
            "distance",
            "hobbeast",
            "location"
          ]
        },
        {
          "key": "HOB-34",
          "summary": "Story: Implement shared address autocomplete and location normalization",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-34",
          "description": "Cover the shared location input behaviour used across profile and event forms.\n\nScope:\n\n* address autocomplete component\n* city extraction and normalization\n* address vs city-only handling\n* reusable location selection contract\n\nAcceptance criteria:\n\n* location selection behaves consistently across profile and event flows\n* city and address fields are normalized from the same source selection",
          "labels": [
            "autocomplete",
            "core",
            "hobbeast",
            "location"
          ]
        },
        {
          "key": "HOB-35",
          "summary": "Story: Implement profile-based distance filtering foundations",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-35",
          "description": "Cover the shared distance filtering behaviour used on the events page.\n\nScope:\n\n* profile location as filter anchor\n* distance calculation logic\n* enable/disable behaviour\n* fallback handling when profile location is incomplete\n\nAcceptance criteria:\n\n* distance filtering is fully described and implementable from Jira alone",
          "labels": [
            "core",
            "distance",
            "filters",
            "hobbeast",
            "location"
          ]
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "hobbeast",
        "label": "GitHub / HenrikFaul/hobbeast"
      }
    },
    {
      "id": "hob-places-provider",
      "version": "web-v0.6.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "web",
        "mobile-android",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-23",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "geoapify",
        "tomtom"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "places_provider"
      ],
      "releaseNotes": "Geoapify-primary and TomTom-premium normalized places architecture and venue search contract.",
      "deploymentComment": "Geoapify-primary and TomTom-premium normalized places architecture and venue search contract.",
      "jiraLinks": [
        {
          "key": "HOB-141",
          "summary": "Places provider architecture with Geoapify primary and TomTom premium POI layer",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-141",
          "description": "Create the Hobbeast places and venue discovery architecture with Geoapify as the primary places/geocoding provider and TomTom as the premium POI enrichment and fallback layer.\n\nBusiness goal:\n\n* support up-to-date place and venue discovery for restaurants, bars, entertainment venues, hobby places and general POIs\n* keep initial operating cost low with a free-tier friendly provider strategy\n* preserve the ability to enrich or backfill POI quality with a second provider\n\nProvider strategy:\n\n* Geoapify = primary provider for places search, geocoding, reverse geocoding and general location utility\n* TomTom = premium POI layer for higher-quality category search, venue enrichment and selected fallback use cases\n\nScope:\n\n* provider abstraction layer\n* normalized place schema\n* Geoapify primary integration\n* TomTom enrichment/fallback integration\n* deduplication and merge rules\n* caching and quota-aware orchestration\n* UI integration for place discovery and details\n\nOut of scope:\n\n* Tripadvisor integration\n* Google Maps paid places integration\n* route/navigation provider replacement\n\nSuccess criteria:\n\n* Hobbeast can search and display venues through a normalized provider-independent contract\n* Geoapify handles the main traffic path\n* TomTom can enrich or fill gaps for selected POI use cases without taking over the full stack\n\nImplementation backfill note:\n\nAndroid already moved normalized venue selection, selected-place persistence and trip continuity forward.\n\nCross-surface follow-up:\n\nWeb parity story: HOB-200.",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        },
        {
          "key": "HOB-142",
          "summary": "Story: Create provider abstraction layer and normalized place schema for multi-source venue discovery",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-142",
          "description": "Objective:\nCreate a provider-independent places domain layer so Hobbeast can use Geoapify as the primary provider and TomTom as a premium POI layer without leaking provider-specific data structures into UI or business logic.\n\nBusiness context:\nHobbeast wants to start with a cost-efficient provider strategy while still preserving room for higher quality venue discovery. This requires a normalized place model and an abstraction layer so the product is not tightly coupled to one provider response format.\n\nProblem statement:\nIf the application consumes Geoapify and TomTom responses directly in UI or feature code, every provider difference will leak into the application:\n\n* category differences\n* different location field structures\n* different ids and confidence signals\n* different result quality and missing fields\nA normalized provider abstraction is required before a dual-provider strategy is safe.\n\nScope:\n\n* define provider abstraction interfaces\n* define normalized place schema\n* define provider capability matrix\n* define source attribution fields on normalized records\n* define required vs optional normalized fields\n* define place search result vs place detail vs geocode result distinction\n\nDetailed functional requirements:\n\n# Hobbeast must expose one normalized place object for UI and downstream business logic.\n# The normalized model must support:\n\n* restaurants\n* bars and nightlife venues\n* entertainment venues\n* hobby/game venues\n* generic POIs\n\n# The abstraction layer must allow calling one provider or multiple providers without changing the consumer contract.\n# Source attribution must remain visible so the system knows whether a result came from Geoapify, TomTom or a merged record.\n\nDetailed technical requirements:\n\n* define interfaces such as:\n** PlacesSearchProvider\n** GeocodingProvider\n** PlaceDetailsProvider\n* define normalized entities such as:\n** NormalizedPlaceSummary\n** NormalizedPlaceDetails\n** NormalizedCategoryTag\n** ProviderDiagnostics\n* explicitly separate:\n** raw provider DTOs\n** normalized domain entities\n** transport DTOs returned to frontend\n* define provider capability flags, for example:\n** supportsPlaceSearch\n** supportsCategorySearch\n** supportsDetails\n** supportsReverseGeocoding\n** supportsBrandOrChainSignals\n\nSuggested normalized summary model:\n\n{noformat}export interface NormalizedPlaceSummary {\n  source: 'geoapify' | 'tomtom' | 'merged'\n  sourceIds: Partial<Record<'geoapify' | 'tomtom', string>>\n  name: string\n  categories: string[]\n  categoryConfidence?: number\n  address?: string\n  city?: string\n  postcode?: string\n  country?: string\n  lat: number\n  lon: number\n  distanceM?: number\n  ratingSignals?: {\n    providerScore?: number\n    popularity?: number\n  }\n  diagnostics?: {\n    enrichedByTomTom?: boolean\n    fallbackUsed?: boolean\n  }\n}{noformat}\n\nAcceptance criteria:\n\n* one normalized place schema exists for UI and feature consumption\n* provider interfaces isolate Geoapify and TomTom specifics from business logic\n* normalized records preserve source attribution and optional enrichment state\n* story description is detailed enough for implementation of shared domain types and adapter contracts",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        },
        {
          "key": "HOB-143",
          "summary": "Story: Implement Geoapify as the primary places, geocoding and reverse geocoding provider",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-143",
          "description": "Objective:\nMake Geoapify the default execution path for Hobbeast place search, geocoding and reverse geocoding so the product has a cost-efficient, broad-coverage provider for the main places workload.\n\nBusiness context:\nThe chosen provider strategy is Geoapify primary, TomTom premium POI layer. That means the majority of operational traffic should flow through Geoapify unless specific enrichment or fallback conditions trigger TomTom usage.\n\nProblem statement:\nWithout explicit provider priority rules, the application risks random provider usage, higher cost and inconsistent results. Geoapify must become the default path for common place resolution and venue search operations.\n\nScope:\n\n* implement Geoapify provider adapter behind the normalized provider interfaces\n* support primary place search flow\n* support geocoding flow\n* support reverse geocoding flow\n* define normalized mapping from Geoapify results into Hobbeast place schema\n* define baseline diagnostics when Geoapify result quality is weak or incomplete\n\nDetailed functional requirements:\n\n# The system must use Geoapify by default for:\n\n* free text place search\n* address geocoding\n* reverse geocoding\n* general venue/POI discovery in the primary path\n\n# Geoapify responses must be normalized into the Hobbeast place schema before any UI or feature consumption.\n# The system must preserve source attribution so downstream logic knows the result came from Geoapify primary path.\n# The system must support fallback escalation rules later without redesign.\n\nDetailed technical requirements:\n\n* implement GeoapifyPlacesProvider or equivalent adapter\n* map Geoapify category/taxonomy outputs into Hobbeast normalized categories\n* preserve raw provider payload internally only where needed for diagnostics\n* support radius, city, bbox or similar place-search context inputs when the feature layer requires them\n* support stable error mapping for no-result, provider failure and partial-result cases\n\nAcceptance criteria:\n\n* Geoapify is the default provider for place search, geocoding and reverse geocoding\n* Geoapify results are normalized before entering Hobbeast UI/business logic\n* Geoapify source attribution and diagnostics are preserved in normalized outputs",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        },
        {
          "key": "HOB-144",
          "summary": "Story: Implement TomTom as premium POI enrichment and fallback layer for venue discovery",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-144",
          "description": "Objective:\nUse TomTom as the premium POI layer on top of the Geoapify primary path so Hobbeast can improve selected venue results, enrich categories and recover from weaker Geoapify venue coverage without making TomTom the default provider for all traffic.\n\nBusiness context:\nTomTom is not the primary provider in the selected strategy. It should be used selectively where its category search and POI quality adds measurable value. This keeps cost and request volume under control while improving venue quality for specific use cases.\n\nProblem statement:\nIf TomTom is used indiscriminately, it undermines the cost-saving purpose of the chosen provider strategy. If it is not used at all, Hobbeast misses the quality benefits of a premium POI layer. The product needs explicit enrichment and fallback rules.\n\nScope:\n\n* implement TomTom provider adapter behind the normalized provider interfaces\n* support category-search and POI-detail style enrichment where applicable\n* define when TomTom is used as enrichment versus fallback\n* define what additional POI quality signals TomTom contributes to a normalized place record\n* preserve TomTom attribution in diagnostics and source metadata\n\nDetailed functional requirements:\n\n# TomTom should not be the default provider for standard search.\n# TomTom may be invoked when:\n\n* Geoapify returns no result for a venue query\n* Geoapify returns low-confidence or low-detail venue result\n* a product flow explicitly requests premium POI enrichment\n* a place details screen needs better venue metadata\n\n# TomTom enrichment may add or improve:\n\n* category precision\n* venue naming quality\n* address quality\n* city/postcode/country completeness\n* distance and ranking hints\n\n# The system must record whether TomTom was used as:\n\n* enrichment only\n* fallback search\n* direct premium POI lookup\n\nDetailed technical requirements:\n\n* implement TomTomPlacesProvider or equivalent adapter\n* isolate TomTom request/response logic from UI\n* map TomTom categories into Hobbeast normalized categories\n* support stable diagnostics such as enrichedByTomTom and fallbackUsed\n* ensure TomTom usage can be switched on/off per feature path later\n\nAcceptance criteria:\n\n* TomTom is integrated as a selective premium POI layer, not as the default provider\n* TomTom can enrich or rescue place results without changing the normalized output contract\n* normalized outputs preserve whether TomTom was used for enrichment or fallback",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        },
        {
          "key": "HOB-145",
          "summary": "Story: Implement normalized deduplication and merge rules for Geoapify and TomTom place results",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-145",
          "description": "Objective:\nImplement deterministic deduplication and merge logic so Hobbeast can combine Geoapify primary results with TomTom enrichment/fallback results without showing duplicate venues or conflicting data.\n\nBusiness context:\nA dual-provider strategy creates value only if the system can merge overlapping place records cleanly. Otherwise the UI will show duplicates, different names for the same venue, or conflicting category/address data.\n\nProblem statement:\nGeoapify and TomTom may both return the same venue with different ids, category tags, address precision or naming conventions. Hobbeast must decide when two records represent the same place and how to merge their fields.\n\nScope:\n\n* define duplicate detection rules\n* define merge precedence rules\n* define confidence model for merged records\n* define diagnostics for merged vs non-merged records\n* define no-merge cases where two nearby venues must remain separate\n\nDetailed functional requirements:\n\n# The system must compare provider results using a combination of:\n\n* name similarity\n* spatial proximity\n* address similarity\n* category compatibility\n* optional postcode/city/country match\n\n# Merge rules must be deterministic and documented.\n# The system must support at least these outcomes:\n\n* Geoapify-only record\n* TomTom-only record\n* merged record with Geoapify primary identity\n* no-merge because confidence is too low\n\n# Field precedence rules must be explicit, for example:\n\n* Geoapify remains primary source identity when merged in primary path\n* TomTom may override or enrich category precision and selected venue metadata when quality is better\n* coordinates should not be overwritten blindly without proximity validation\n\nDetailed technical requirements:\n\n* implement duplicate scoring helper or merge-decision service\n* keep merge diagnostics on normalized records for debugging\n* merged records must preserve both provider ids when available\n* no-merge decisions must be reproducible for the same inputs\n\nAcceptance criteria:\n\n* duplicate place results from Geoapify and TomTom can be merged deterministically\n* merged records preserve primary-source identity plus enrichment diagnostics\n* no-merge cases are handled explicitly rather than by accidental duplication",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        },
        {
          "key": "HOB-146",
          "summary": "Story: Implement quota-aware orchestration, caching and provider routing for Geoapify primary plus TomTom fallback",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-146",
          "description": "Objective:\nCreate the orchestration layer that decides when Hobbeast should call Geoapify only, when it should escalate to TomTom, and when cached normalized place data can be reused instead of calling either provider.\n\nBusiness context:\nThe selected provider strategy only works if provider calls are intentionally routed. Without an orchestration layer, the application may overuse TomTom, ignore cache opportunities, or create inconsistent provider behavior across feature paths.\n\nProblem statement:\nGeoapify is the primary provider because of cost and broad utility, while TomTom is the premium POI layer. A routing policy is needed to:\n\n* keep most traffic on Geoapify\n* invoke TomTom only when justified\n* reduce repeated provider calls through caching\n* preserve deterministic behavior across features\n\nScope:\n\n* define provider routing policy\n* define cache lookup and cache write behavior for normalized place data\n* define fallback escalation from Geoapify to TomTom\n* define quota-aware decision rules using provider budgets and operation types\n* define diagnostics for which provider path was used and why\n\nDetailed functional requirements:\n\n# The orchestration layer must support at least these decision outcomes:\n\n* cache hit, no provider call\n* Geoapify primary only\n* Geoapify primary plus TomTom enrichment\n* TomTom fallback after Geoapify failure or low-confidence result\n* hard stop because provider policy or quota does not allow escalation\n\n# The orchestration layer must consider:\n\n* operation type: search, geocode, reverse geocode, details\n* caller type or feature path\n* result quality from Geoapify\n* provider quota availability\n* cached normalized place availability\n\n# The layer must emit diagnostics such as:\n\n* cacheUsed\n* primaryProviderUsed\n* enrichmentUsed\n* fallbackUsed\n* fallbackReason\n* quotaBlockedEscalation\n\n# Cached normalized place records must be reusable by UI and backend feature paths without re-normalization.\n\nDetailed technical requirements:\n\n* create PlacesOrchestratorService or equivalent application service\n* keep provider-routing rules outside UI code\n* support cache TTL policy or explicit freshness rules\n* keep provider diagnostics available for logging and debugging\n* ensure orchestration can later support more providers without rewriting caller contracts\n\nAcceptance criteria:\n\n* one orchestration layer decides provider usage and caching strategy\n* Geoapify remains the dominant/default execution path\n* TomTom is invoked only by explicit enrichment/fallback rules\n* normalized cache usage reduces repeated provider calls and preserves deterministic output behavior",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        },
        {
          "key": "HOB-147",
          "summary": "Story: Integrate normalized places discovery into Hobbeast venue search and event flows",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-147",
          "description": "Objective:\nIntegrate the normalized multi-provider places architecture into Hobbeast user-facing discovery and event flows so venue search is no longer provider-specific and can benefit from Geoapify primary plus TomTom enrichment.\n\nBusiness context:\nThe provider architecture only creates product value once it is connected to real user-facing flows. Hobbeast needs venue discovery to work consistently in screens such as event creation, venue selection, place search and place detail preview.\n\nProblem statement:\nEven if a normalized provider layer exists, the product still fails to benefit unless UI and feature flows consume the normalized place model instead of raw provider outputs.\n\nScope:\n\n* integrate normalized place search into venue search UX\n* integrate place selection into event creation/edit flows\n* support place detail preview from normalized records\n* show source-agnostic place results in a consistent UI contract\n* expose diagnostics only where useful internally, not as noisy user-facing text\n\nDetailed functional requirements:\n\n# User-facing search should consume one normalized place result contract, regardless of whether data came from Geoapify only, TomTom fallback or merged enrichment.\n# Event-related flows must be able to:\n\n* search for a venue/place\n* select a place\n* store structured place information on the event\n* reopen and display the selected place later\n\n# UI must not leak provider-specific field naming or raw payload concepts.\n# The product may internally preserve source info and enrichment state, but user-facing rendering should remain consistent and provider-agnostic by default.\n\nDetailed technical requirements:\n\n* define transport DTOs from normalized domain model to UI layer\n* keep raw provider data out of component props\n* support consistent list item rendering for name, categories, address, city and distance\n* support later details-page enrichment without rewriting the search-result contract\n\nAcceptance criteria:\n\n* venue search UI and event flows use normalized place records\n* place search works consistently regardless of which provider path was used internally\n* event flows can save and reload structured place selections without provider-specific coupling",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        },
        {
          "key": "HOB-148",
          "summary": "Subtask: Define normalized place summary/details schemas and source attribution fields",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-148",
          "description": "Implement the shared normalized data model work for HOB-142.\n\nDeliverables:\n\n* normalized summary schema for search results\n* normalized details schema for place detail/enrichment use cases\n* source attribution model for geoapify, tomtom and merged records\n* optional diagnostics/enrichment metadata fields\n\nDetailed implementation expectations:\n\n# Define summary-level fields used by list/search UI:\n\n* source\n* sourceIds\n* name\n* normalized categories\n* address/city/postcode/country\n* lat/lon\n* distanceM where applicable\n* compact diagnostics flags\n\n# Define details-level fields used by enriched venue views:\n\n* website\n* phone\n* openingHours if available\n* enrichment markers\n* provider completeness signals\n\n# Source attribution rules:\n\n* preserve provider-specific ids separately\n* support merged records with one primary identity and one enrichment source\n* avoid collapsing provider identity into one opaque string\n\nAcceptance criteria:\n\n* one normalized summary schema and one normalized details schema are defined\n* source attribution is explicit enough for merge, cache and UI use\n* the model is reusable by both Geoapify and TomTom adapters",
          "labels": []
        },
        {
          "key": "HOB-149",
          "summary": "Subtask: Define provider interface contracts for places search, geocoding and details lookup",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-149",
          "description": "Implement the provider interface contract work for HOB-142.\n\nDeliverables:\n\n* provider interface definitions for places search, geocoding, reverse geocoding and details lookup\n* capability flags for optional provider features\n* clear boundary between provider adapter output and normalized domain models\n\nDetailed implementation expectations:\n\n# Define interfaces such as:\n\n* PlacesSearchProvider\n* GeocodingProvider\n* ReverseGeocodingProvider\n* PlaceDetailsProvider\n\n# Define capability signals such as:\n\n* supportsCategorySearch\n* supportsReverseGeocoding\n* supportsDetailsEnrichment\n* supportsPremiumPoiSignals\n\n# Boundary rules:\n\n* provider adapters may return raw provider DTOs internally\n* upstream application services must consume normalized models, not provider DTOs\n* UI must never call provider adapters directly\n\nAcceptance criteria:\n\n* provider interfaces are defined and reusable by Geoapify and TomTom adapters\n* capability differences between providers are represented explicitly\n* normalized domain model boundary is preserved in the contract design",
          "labels": []
        },
        {
          "key": "HOB-150",
          "summary": "Subtask: Implement GeoapifyPlacesProvider adapter and normalized result mapping",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-150",
          "description": "Implement the primary provider adapter work for HOB-143.\n\nDeliverables:\n\n* GeoapifyPlacesProvider adapter\n* support for primary place search calls\n* normalized mapping from Geoapify search/geocode outputs into Hobbeast place schemas\n* stable error mapping and diagnostics for Geoapify results\n\nDetailed implementation expectations:\n\n# Adapter responsibilities:\n\n* execute Geoapify place search requests\n* execute geocoding and reverse geocoding requests\n* parse provider responses into provider DTOs internally\n* map provider DTOs into normalized place summary/details models\n\n# Normalization requirements:\n\n* populate normalized summary fields consistently\n* preserve Geoapify source identity and source id\n* map provider category/taxonomy information into normalized categories\n* carry diagnostics for weak or partial results when needed\n\n# Error and diagnostics rules:\n\n* no result => typed NO_RESULT style diagnostic\n* provider/network failure => provider failure diagnostic\n* partial provider data => normalized record with diagnostics rather than silent field loss where possible\n\nAcceptance criteria:\n\n* Geoapify adapter supports search, geocode and reverse geocode through one normalized integration path\n* normalized outputs can be consumed by the rest of the system without provider-specific branching\n* source attribution and diagnostics are preserved",
          "labels": []
        },
        {
          "key": "HOB-151",
          "summary": "Subtask: Implement TomTomPlacesProvider adapter and premium POI enrichment mapping",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-151",
          "description": "Implement the premium POI provider adapter work for HOB-144.\n\nDeliverables:\n\n* TomTomPlacesProvider adapter\n* support for category-search or POI-detail enrichment calls\n* normalized mapping from TomTom outputs into Hobbeast place schemas\n* enrichment and fallback diagnostics on normalized records\n\nDetailed implementation expectations:\n\n# Adapter responsibilities:\n\n* execute TomTom POI/category search or detail lookups where used by the orchestration layer\n* parse TomTom responses into provider DTOs internally\n* map TomTom venue/category/address signals into normalized place summary/details models\n\n# Enrichment responsibilities:\n\n* improve category precision where TomTom data is stronger\n* improve selected address/city/postcode completeness when safe\n* preserve TomTom source id and enrichment metadata\n* avoid overwriting normalized coordinates blindly without proximity validation\n\n# Diagnostics and error rules:\n\n* mark whether TomTom was used as enrichment or fallback\n* preserve fallbackUsed and enrichedByTomTom-style diagnostics\n* map no-result and provider failures into stable internal diagnostics\n\nAcceptance criteria:\n\n* TomTom adapter can supply premium POI enrichment through normalized models\n* TomTom usage is diagnosable as enrichment or fallback\n* normalized outputs remain compatible with the primary Geoapify-first contract",
          "labels": []
        },
        {
          "key": "HOB-152",
          "summary": "Subtask: Implement duplicate scoring and merge-decision service for Geoapify and TomTom results",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-152",
          "description": "Implement the deduplication engine for HOB-145.\n\nDeliverables:\n\n* duplicate scoring helper for cross-provider place results\n* merge-decision service returning geoapify_only, tomtom_only, merged or no_merge outcomes\n* deterministic scoring inputs and threshold configuration\n* merge diagnostics for debugging and QA\n\nDetailed implementation expectations:\n\n# Scoring inputs must include:\n\n* normalized name similarity\n* coordinate proximity\n* address similarity\n* category compatibility\n* optional postcode/city/country consistency\n\n# Merge outcomes:\n\n* geoapify_only\n* tomtom_only\n* merged_with_geoapify_primary\n* no_merge_low_confidence\n\n# Determinism rules:\n\n* same inputs must produce the same merge decision\n* merge thresholds must not be hidden in UI code\n* diagnostics should explain why merge happened or did not happen\n\n# Safety rules:\n\n* nearby but distinct venues must not be merged accidentally\n* coordinates must not be overwritten without proximity validation\n\nAcceptance criteria:\n\n* cross-provider duplicates can be scored and classified deterministically\n* merge/no-merge decisions are reproducible and diagnosable\n* merged records preserve enough metadata for later enrichment tracing",
          "labels": []
        },
        {
          "key": "HOB-153",
          "summary": "Subtask: Implement PlacesOrchestratorService with Geoapify-first routing and TomTom escalation rules",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-153",
          "description": "Implement the orchestration core for HOB-146.\n\nDeliverables:\n\n* PlacesOrchestratorService or equivalent application service\n* Geoapify-first routing policy\n* TomTom escalation rules for enrichment and fallback\n* decision diagnostics for provider path selection\n\nDetailed implementation expectations:\n\n# Orchestrator decisions must support:\n\n* cache hit, no provider call\n* Geoapify primary only\n* Geoapify primary plus TomTom enrichment\n* TomTom fallback after Geoapify no-result or weak result\n* stop due to policy or quota block\n\n# Decision inputs must include:\n\n* operation type: search, geocode, reverse geocode, details\n* feature path or caller context\n* normalized result quality from Geoapify\n* provider quota state\n* cache availability\n\n# Diagnostics must include:\n\n* primaryProviderUsed\n* enrichmentUsed\n* fallbackUsed\n* fallbackReason\n* cacheUsed\n* quotaBlockedEscalation\n\nAcceptance criteria:\n\n* one orchestration service decides provider routing consistently\n* Geoapify remains the default path\n* TomTom escalation follows explicit enrichment and fallback rules\n* routing diagnostics are available for debugging and QA",
          "labels": []
        },
        {
          "key": "HOB-154",
          "summary": "Subtask: Implement normalized places cache lookup and cache write policy for provider orchestration",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-154",
          "description": "Implement the caching layer for HOB-146.\n\nDeliverables:\n\n* cache lookup strategy for normalized place records\n* cache write/update strategy after Geoapify primary or TomTom enrichment/fallback calls\n* TTL or freshness policy for cached place data\n* cache diagnostics in orchestration output\n\nDetailed implementation expectations:\n\n# Cache lookup responsibilities:\n\n* attempt cache reuse before provider calls where appropriate\n* distinguish exact match, reusable partial match and no-cache-hit outcomes\n* support operation-aware cache usage for search, details and geocoding where feasible\n\n# Cache write responsibilities:\n\n* write normalized Geoapify-only records\n* update or enrich cached records when TomTom enrichment is used\n* preserve source attribution and merged/enriched diagnostics in cached records\n\n# Freshness rules:\n\n* define TTL or refresh strategy for venue/place data\n* allow later feature-specific tuning without schema rewrite\n* avoid indefinite stale venue metadata where quality matters\n\n# Diagnostics expectations:\n\n* cacheUsed\n* cacheWritePerformed\n* cacheFreshnessState\n* cachePreventedProviderCall\n\nAcceptance criteria:\n\n* normalized place cache can prevent unnecessary provider calls\n* cache writes preserve source attribution and enrichment state\n* freshness behavior is explicit enough for implementation and QA",
          "labels": []
        },
        {
          "key": "HOB-155",
          "summary": "Subtask: Integrate normalized place search results into venue search and event creation selection flows",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-155",
          "description": "Implement the UI/feature integration work for HOB-147.\n\nDeliverables:\n\n* venue search UI consuming normalized place results\n* event create/edit place selection flow using normalized place records\n* selected place persistence in event form state\n* re-display of selected place from saved event data\n\nDetailed implementation expectations:\n\n# Venue search list integration:\n\n* render normalized name, categories, address, city and distance consistently\n* do not expose provider-specific field names in component props or UI labels\n* support selection from Geoapify-only, TomTom-fallback and merged results without UI branching\n\n# Event flow integration:\n\n* user can search for a venue/place\n* user can select the normalized result into event form state\n* selected place remains structured, not only display text\n* reopening edit flow must restore the selected place cleanly\n\n# Transport/contract expectations:\n\n* frontend consumes transport DTOs derived from normalized domain models\n* raw provider payload stays outside component state\n* source attribution may remain internal or diagnostic, not primary UI copy\n\nAcceptance criteria:\n\n* venue search UI works from normalized place results regardless of provider path\n* event create/edit flows can store and reload structured place selections\n* UI integration is decoupled from Geoapify and TomTom raw response shapes",
          "labels": []
        },
        {
          "key": "HOB-156",
          "summary": "Story: Implement place details and venue enrichment flow for normalized provider-backed records",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-156",
          "description": "Objective:\nCreate the place details and venue enrichment flow so a selected normalized place can be opened in a richer detail view and selectively enriched with TomTom premium POI data when that adds value.\n\nBusiness context:\nThe Geoapify-primary strategy is sufficient for broad discovery, but venue detail views often need richer metadata and better category precision. Hobbeast needs a consistent details flow that starts from normalized place records and optionally applies TomTom enrichment without exposing provider complexity to the UI.\n\nProblem statement:\nSearch and selection alone are not enough. Users and event flows also need a detail-grade representation of a place, including better venue metadata where available. Without a dedicated details/enrichment flow, the system will either overcall TomTom everywhere or fail to benefit from premium POI data where it matters most.\n\nScope:\n\n* define normalized details loading flow from selected place summary\n* define when TomTom detail enrichment is requested\n* define detail-page/detail-panel data contract\n* support Geoapify-only details, TomTom-enriched details and degraded details states\n* preserve source attribution and enrichment diagnostics internally\n\nDetailed functional requirements:\n\n# A normalized place selected from search can be opened in a detail-grade read model.\n# The details flow must support:\n\n* Geoapify-only detail view\n* Geoapify base record + TomTom enrichment\n* fallback-safe rendering when enrichment is unavailable\n\n# The system must define triggers for TomTom details usage, for example:\n\n* user opened detail view for a venue category where premium POI data is valuable\n* normalized summary lacks required detail fields\n* feature path explicitly requests enrichment\n\n# The UI must remain provider-agnostic and consume one normalized details contract.\n\nDetailed technical requirements:\n\n* define PlaceDetailsLoader or equivalent application service\n* define enriched details merge rules separate from summary merge rules where needed\n* preserve diagnostics such as detailsEnrichedByTomTom and detailsFallbackUsed\n* keep provider detail DTOs outside UI components\n* support later persistence of selected detail fields into event or venue records\n\nAcceptance criteria:\n\n* a normalized place can be opened in a details flow without raw provider coupling\n* TomTom enrichment is applied selectively and diagnosably\n* the details contract supports Geoapify-only, enriched and degraded rendering paths",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        },
        {
          "key": "HOB-157",
          "summary": "Story: Define canonical place taxonomy and provider category mapping for Geoapify and TomTom results",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-157",
          "description": "Objective:\nCreate a canonical Hobbeast place taxonomy so Geoapify and TomTom category systems can be mapped into one stable set of searchable and filterable place categories.\n\nBusiness context:\nA normalized place model is not enough on its own. Venue discovery only becomes usable when categories are consistent across providers. Hobbeast needs category filters and place search results that do not depend on whichever provider happened to answer.\n\nProblem statement:\nGeoapify and TomTom use different category systems and levels of specificity. Without a canonical taxonomy and mapping layer, filtering, ranking and event/venue flows will produce inconsistent category behavior.\n\nScope:\n\n* define canonical Hobbeast place taxonomy for venue discovery\n* define provider-to-canonical category mapping for Geoapify\n* define provider-to-canonical category mapping for TomTom\n* define handling for low-confidence or unmapped provider categories\n* define category precedence when merged results disagree\n\nDetailed functional requirements:\n\n# The canonical taxonomy must cover at minimum:\n\n* restaurants and food places\n* bars and nightlife\n* entertainment venues\n* hobby/game venues\n* generic points of interest\n\n# Provider results must be mappable into canonical categories even if the mapping quality differs.\n# The system must support:\n\n* exact mapped category\n* inferred category\n* unknown/unmapped category\n\n# Merged records must define how category precedence works when Geoapify and TomTom disagree.\n\nDetailed technical requirements:\n\n* define canonical category enum or structured taxonomy table\n* define provider mapping tables/helpers for Geoapify and TomTom\n* store category confidence or mapping confidence where useful\n* support later taxonomy extension without breaking existing records\n\nAcceptance criteria:\n\n* one canonical place taxonomy exists for Hobbeast venue discovery\n* both Geoapify and TomTom categories can be mapped into it\n* unmapped or weakly mapped categories are handled explicitly rather than silently discarded",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        },
        {
          "key": "HOB-158",
          "summary": "Story: Define canonical place taxonomy and provider category mapping for Geoapify and TomTom results",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-158",
          "description": "Objective:\nCreate a canonical Hobbeast place taxonomy so Geoapify and TomTom category systems can be mapped into one stable set of searchable and filterable place categories.\n\nBusiness context:\nA normalized place model is not enough on its own. Venue discovery only becomes usable when categories are consistent across providers. Hobbeast needs category filters and place search results that do not depend on whichever provider happened to answer.\n\nProblem statement:\nGeoapify and TomTom use different category systems and levels of specificity. Without a canonical taxonomy and mapping layer, filtering, ranking and event/venue flows will produce inconsistent category behavior.\n\nScope:\n\n* define canonical Hobbeast place taxonomy for venue discovery\n* define provider-to-canonical category mapping for Geoapify\n* define provider-to-canonical category mapping for TomTom\n* define handling for low-confidence or unmapped provider categories\n* define category precedence when merged results disagree\n\nDetailed functional requirements:\n\n# The canonical taxonomy must cover at minimum:\n\n* restaurants and food places\n* bars and nightlife\n* entertainment venues\n* hobby/game venues\n* generic points of interest\n\n# Provider results must be mappable into canonical categories even if the mapping quality differs.\n# The system must support:\n\n* exact mapped category\n* inferred category\n* unknown/unmapped category\n\n# Merged records must define how category precedence works when Geoapify and TomTom disagree.\n\nDetailed technical requirements:\n\n* define canonical category enum or structured taxonomy table\n* define provider mapping tables/helpers for Geoapify and TomTom\n* store category confidence or mapping confidence where useful\n* support later taxonomy extension without breaking existing records\n\nAcceptance criteria:\n\n* one canonical place taxonomy exists for Hobbeast venue discovery\n* both Geoapify and TomTom categories can be mapped into it\n* unmapped or weakly mapped categories are handled explicitly rather than silently discarded",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        },
        {
          "key": "HOB-159",
          "summary": "Story: Define places search ranking and fallback UX for Geoapify-primary and TomTom-enriched results",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-159",
          "description": "Objective:\nDefine how normalized place results are ranked, ordered and presented to the user when Geoapify is the primary provider and TomTom contributes enrichment or fallback results.\n\nBusiness context:\nA dual-provider places stack is only user-friendly if the resulting venue list is understandable and stable. Users should not see confusing shifts in ordering, duplicated entries or unexplained result quality changes when fallback or enrichment occurs.\n\nProblem statement:\nEven with normalized records and merge logic, the product still needs explicit ranking and fallback UX rules. Otherwise the same query may produce inconsistent ordering or confusing user perception depending on whether Geoapify alone answered, TomTom fallback was triggered, or a merged result was constructed.\n\nScope:\n\n* define ranking signals for normalized place results\n* define ordering rules for Geoapify-only, TomTom-fallback and merged records\n* define no-result and weak-result fallback UX\n* define how degraded or fallback-enriched results should appear in UI without exposing provider internals noisily\n\nDetailed functional requirements:\n\n# Ranking must consider at least:\n\n* distance where applicable\n* category match quality\n* merged/enriched confidence\n* textual relevance or name match quality\n* provider completeness where useful\n\n# The user should see one coherent place list, not separate provider sections in first version.\n# Weak-result and no-result states must be explicit, including:\n\n* no results at all\n* results found only through fallback path\n* partial/degraded results with limited venue data\n\n# UI copy should stay product-centric and not overexpose provider complexity.\n\nDetailed technical requirements:\n\n* define ranking helper or ranking policy for normalized place results\n* define fallback UX states and corresponding transport flags\n* preserve internal diagnostics while returning concise UI-oriented status signals\n* make ranking deterministic for the same input/result set\n\nAcceptance criteria:\n\n* normalized place results have explicit ranking and ordering rules\n* fallback and degraded result states are handled in a defined UX model\n* UI can present Geoapify-primary and TomTom-assisted results coherently without provider-specific branching",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        },
        {
          "key": "HOB-160",
          "summary": "Story: Implement provider configuration, secrets handling and feature-flag control for places architecture",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-160",
          "description": "Objective:\nCreate the operational configuration layer for the Geoapify-primary and TomTom-premium places stack, including API key handling, environment-safe configuration and feature-flag control of enrichment/fallback behavior.\n\nBusiness context:\nA multi-provider places architecture cannot be operated safely without explicit configuration management. Hobbeast needs to control API keys, environment separation and provider behavior without code rewrites.\n\nProblem statement:\nIf provider secrets and routing switches are hardcoded, the system becomes fragile and hard to test. The product must be able to turn TomTom enrichment on/off, isolate environments and rotate keys safely.\n\nScope:\n\n* define provider config model\n* define secrets handling for Geoapify and TomTom keys\n* define feature flags for TomTom enrichment and fallback behavior\n* define environment-specific config separation\n* define safe defaults when premium provider config is missing\n\nDetailed functional requirements:\n\n# The system must support separate config for development, test and production.\n# The system must handle missing TomTom config gracefully, allowing Geoapify-only mode.\n# The system must support feature toggles such as:\n\n* tomtomEnrichmentEnabled\n* tomtomFallbackEnabled\n* premiumPoiForDetailsEnabled\n\n# Secrets must not be exposed to the frontend directly.\n\nDetailed technical requirements:\n\n* define config contract for provider base settings and keys\n* define runtime-safe fallback behavior when optional provider config is absent\n* keep feature flag checks in orchestration/application layer, not scattered through UI\n* support later provider rollout control by feature path or environment\n\nAcceptance criteria:\n\n* provider keys and feature flags are controlled through explicit configuration\n* the system can run in Geoapify-only mode when TomTom config is absent or disabled\n* TomTom enrichment/fallback behavior can be turned on or off without code redesign",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        },
        {
          "key": "HOB-161",
          "summary": "Story: Define QA regression and observability model for Geoapify-primary and TomTom-assisted places flows",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-161",
          "description": "Objective:\nCreate the regression-test and observability model for the multi-provider places architecture so Hobbeast can validate and operate Geoapify-primary plus TomTom-assisted venue discovery safely over time.\n\nBusiness context:\nA dual-provider integration is not complete unless the team can verify it and observe how it behaves in production. Hobbeast needs explicit QA coverage and metrics for provider path selection, merge behavior, cache behavior and fallback usage.\n\nProblem statement:\nWithout a QA matrix and observability model, provider regressions will be hard to detect. The team will not know whether Geoapify is sufficient, when TomTom is overused, or whether deduplication and fallback rules behave as intended.\n\nScope:\n\n* define regression scenarios for Geoapify-primary, TomTom-fallback and merged results\n* define cache-related regression scenarios\n* define merge/no-merge QA cases\n* define runtime metrics and logging dimensions for provider orchestration\n* define fallback and enrichment monitoring expectations\n\nDetailed functional requirements:\n\n# QA must cover at minimum:\n\n* Geoapify-only search success\n* Geoapify no-result with TomTom fallback success\n* Geoapify result plus TomTom enrichment\n* duplicate merge success\n* no-merge for nearby distinct venues\n* cache hit and cache miss behavior\n* event flow selected place restore\n\n# Observability should track at minimum:\n\n* primary provider usage rate\n* TomTom fallback rate\n* TomTom enrichment rate\n* merge rate\n* no-merge rate\n* no-result rate\n* cache hit rate\n* quota-blocked escalation count\n\n# The system should expose enough diagnostics for debugging without leaking sensitive provider data.\n\nDetailed technical requirements:\n\n* define regression checklist or matrix for manual QA and future automated tests\n* define structured log and metric dimensions for places orchestration\n* ensure provider diagnostics from orchestration are suitable for observability dashboards later\n\nAcceptance criteria:\n\n* a regression model exists for the main provider-routing and merge scenarios\n* observability metrics are defined for Geoapify-primary and TomTom-assisted behavior\n* the story is detailed enough to support QA implementation and runtime monitoring design",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "hobbeast",
        "label": "GitHub / HenrikFaul/hobbeast"
      }
    },
    {
      "id": "hob-trip-planning-core",
      "version": "mobile-android-v0.7.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "mobile-android",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-24",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "mapy"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "trip_planning_core"
      ],
      "releaseNotes": "Trip planning core integration, route persistence and event-linked trip continuity.",
      "deploymentComment": "Trip planning core integration, route persistence and event-linked trip continuity.",
      "jiraLinks": [
        {
          "key": "HOB-85",
          "summary": "Mapy.com trip planning core integration",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-85",
          "description": "Mapy.com trip planning core integration for Hobbeast. Build interactive map view, address and POI search, map click point selection, route planning with waypoints, route rendering, event-level route storage and attribution-safe provider usage.",
          "labels": [
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-87",
          "summary": "Story: Select and implement web map renderer for Mapy.com trip planning",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-87",
          "description": "Objective:\nCreate the map rendering foundation for the Hobbeast trip planner so Mapy.com tiles, route geometry and trip markers can be displayed in a fully interactive map view.\n\nProblem:\nThe current planner has no real map view and requires manual coordinate entry. The Mapy REST API provides data and tiles, but a web map renderer must be selected and integrated.\n\nScope:\n\n* select one supported web map library for production use\n* initialize reusable TripPlanningMap component\n* load Mapy raster map tiles\n* support zoom, pan and fit bounds\n* support overlays for markers and route polylines\n* support responsive desktop and mobile rendering\n* define map state handling for route edit mode\n\nTechnical requirements:\n\n* do not use deprecated JS SDK approach\n* use a reusable map wrapper component and route overlay layer structure\n* support future layers for POI, elevation profile interaction and drag editing\n* map container lifecycle must handle re-render and route updates correctly\n\nUI requirements:\n\n* embedded map view inside planner card/modal\n* visible map controls for zoom\n* route markers and route line must be visually distinct\n\nAcceptance criteria:\n\n* interactive map view renders inside trip planner\n* Mapy map tiles are visible\n* markers and polyline overlays can be drawn\n* map resizes correctly on mobile\n* selected renderer is documented in implementation notes",
          "labels": [
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-88",
          "summary": "Story: Build address and POI search UX with Mapy suggest and geocoding",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-88",
          "description": "Objective:\nAllow users to choose route points by typing addresses, place names and POIs instead of manually entering latitude and longitude.\n\nProblem:\nThe current trip planner requires manual coordinate input for start and end points. This is not usable for normal users.\n\nScope:\n\n* implement reusable location search input for start point, end point and waypoint entries\n* integrate Mapy suggest-style search while typing\n* resolve selected items into normalized location objects with coordinates\n* support address, POI, city and generic place lookup cases\n* handle loading, empty and error states\n* support mobile-friendly result list interaction\n\nFunctional requirements:\n\n* user types at least partial place name or address\n* system shows suggestion list\n* user selects one item\n* selected item populates input and resolved coordinates are stored in planner state\n* resolved points can immediately be used for routing\n\nData/state requirements:\n\n* keep raw typed input separate from resolved location object\n* normalized location object should include at minimum:\n** display label\n** provider identifier if available\n** latitude\n** longitude\n** location type\n** bounding box if available\n\nAcceptance criteria:\n\n* no manual coordinate entry is needed for standard point selection\n* start and end point can be selected from search suggestions\n* selected result stores resolved coordinates in planner state\n* planner UX works on desktop and mobile",
          "labels": [
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-89",
          "summary": "Story: Implement map click and reverse geocoding point selection",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-89",
          "description": "Objective:\nAllow the user to click on the map and assign the clicked point as start, end or waypoint using reverse geocoding.\n\nProblem:\nEven with address search, a usable trip planner also needs direct map-based point selection for trails, viewpoints and places without obvious address entry.\n\nScope:\n\n* listen to map click events\n* place temporary marker on clicked position\n* call reverse geocoding for the clicked point\n* show a small selection action sheet or popup\n* let the user assign the location as:\n** start point\n** end point\n** waypoint\n* support repeated edits and replacing existing points\n\nFunctional requirements:\n\n* map click creates temporary candidate point\n* system resolves a readable location label when possible\n* user explicitly confirms target role for the point\n* planner state updates immediately after confirmation\n\nTechnical requirements:\n\n* reverse geocoding response must be normalized to the same location object format as search-selected points\n* UI must handle cases where reverse geocode has only partial place data\n* click-based selection must work on mobile touch interaction as well\n\nAcceptance criteria:\n\n* user can click the map to create route points\n* clicked point can become start, end or waypoint\n* the chosen point is stored in planner state with coordinates and readable label when available",
          "labels": [
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-90",
          "summary": "Story: Implement route planning with start, end and waypoints",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-90",
          "description": "Objective:\nPlan routes inside Hobbeast using Mapy routing with start point, end point and optional intermediate waypoints.\n\nProblem:\nThe current prototype does not provide a complete route calculation flow from user-selected points.\n\nScope:\n\n* build route request model from planner state\n* support start, end and waypoint ordering\n* support route type selection for hiking and other modes\n* call provider routing endpoint\n* parse route summary and geometry response\n* support route recalculation when a point changes\n\nFunctional requirements:\n\n* user selects route type\n* user sets start and end points\n* user optionally adds waypoints\n* system calculates route and stores route result in planner state\n* system handles no-route and invalid-point cases\n\nTechnical requirements:\n\n* normalized route result should include at minimum:\n** length\n** duration\n** geometry\n** waypoint order\n** provider metadata\n* route logic must be reusable by future automation and AI callers\n\nAcceptance criteria:\n\n* route can be calculated from selected points\n* waypoint order is respected\n* route result contains summary and geometry data\n* route can be recalculated after point edits",
          "labels": [
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-91",
          "summary": "Story: Render route geometry, markers and route summary on interactive map",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-91",
          "description": "Objective:\nDisplay the calculated route visually inside the trip planner with markers, polyline geometry and a summary panel.\n\nProblem:\nA route planning feature is not usable unless the user can clearly see the route path, point roles and basic route summary.\n\nScope:\n\n* render start marker, end marker and waypoint markers\n* render route polyline from routing response geometry\n* fit map bounds to visible route\n* show route summary panel with distance and duration\n* support re-render on route recalculation\n* support route clearing and route replacement\n\nFunctional requirements:\n\n* start and end markers are visually distinct\n* waypoint markers are clearly different from route endpoints\n* route line updates after point edits or route type change\n* summary panel reflects current route result\n\nTechnical requirements:\n\n* geometry parsing must be isolated from the map rendering layer\n* marker and polyline layers must be reusable in later route edit features\n* route rendering must tolerate missing or partial provider response safely\n\nAcceptance criteria:\n\n* user sees the route path on the map\n* start, end and waypoint roles are visually understandable\n* summary panel shows current route distance and duration\n* route refresh does not require page reload",
          "labels": [
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-92",
          "summary": "Story: Implement route planning with start, end and waypoints",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-92",
          "description": "Objective:\nPlan routes inside Hobbeast using Mapy routing with start point, end point and optional intermediate waypoints.\n\nProblem:\nThe current prototype does not provide a complete route calculation flow from user-selected points.\n\nScope:\n\n* build route request model from planner state\n* support start, end and waypoint ordering\n* support route type selection for hiking and other modes\n* call provider routing endpoint\n* parse route summary and geometry response\n* support route recalculation when a point changes\n\nFunctional requirements:\n\n* user selects route type\n* user sets start and end points\n* user optionally adds waypoints\n* system calculates route and stores route result in planner state\n* system handles no-route and invalid-point cases\n\nTechnical requirements:\n\n* normalized route result should include at minimum:\n** length\n** duration\n** geometry\n** waypoint order\n** provider metadata\n* route logic must be reusable by future automation and AI callers\n\nAcceptance criteria:\n\n* route can be calculated from selected points\n* waypoint order is respected\n* route result contains summary and geometry data\n* route can be recalculated after point edits",
          "labels": [
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-93",
          "summary": "Story: Add elevation profile for hiking and biking routes",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-93",
          "description": "Objective:\nProvide elevation-aware trip planning for hiking and biking routes so users can understand ascent, descent and terrain difficulty before saving a route.\n\nProblem:\nFor hiking use cases, distance and duration alone are not enough. Route profile and elevation change are important planning criteria.\n\nScope:\n\n* request elevation data for calculated route geometry\n* sample route geometry where needed before elevation lookup\n* display a basic elevation profile chart or structured summary\n* show total ascent and total descent when derivable\n* keep route usable if elevation enrichment fails\n\nFunctional requirements:\n\n* elevation profile is available for hiking and biking route types\n* planner shows route elevation summary after route calculation\n* planner can fall back to route-only mode when elevation data is unavailable\n\nTechnical requirements:\n\n* elevation enrichment must not block core route rendering\n* geometry sampling strategy must be documented\n* data model must support storing elevation profile or summary for saved trip plans\n\nAcceptance criteria:\n\n* a hiking or biking route can display elevation-related summary\n* elevation lookup failure does not break core trip planning\n* saved trip plan can retain elevation data when available",
          "labels": [
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-94",
          "summary": "Story: Persist trip plan data in Hobbeast event model",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-94",
          "description": "Objective:\nAllow a planned route to be saved, reloaded and edited as part of an event inside Hobbeast.\n\nProblem:\nA route planner is much less useful if the route cannot be stored together with the event that it belongs to.\n\nScope:\n\n* define trip plan storage model\n* link trip plan to event\n* store route type, resolved points, waypoint list, route summary and geometry snapshot\n* support edit existing trip plan flow\n* support draft and saved route states\n* prepare storage for optional elevation summary\n\nFunctional requirements:\n\n* user can save a route as part of event creation or event editing\n* previously saved route can be reopened for editing\n* stored route survives page reload and later event modification\n\nTechnical requirements:\n\n* trip plan must be stored in a normalized structure, not only UI state\n* saved trip must preserve enough data for route preview without forcing fresh provider calls in every view\n* provider metadata and snapshot versioning should be considered\n\nAcceptance criteria:\n\n* event can have a persisted trip plan record\n* saved trip can be loaded and rendered again\n* editing an existing trip plan updates the stored record correctly",
          "labels": [
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-95",
          "summary": "Story: Implement Mapy attribution and provider-compliant trip planning UI",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-95",
          "description": "Objective:\nEnsure that the Hobbeast trip planner uses Mapy.com data and map tiles in a provider-compliant way, with correct attribution visible in every relevant screen.\n\nProblem:\nMap integrations are not complete when provider attribution, copyright visibility and branding placement rules are ignored or inconsistently implemented.\n\nScope:\n\n* define attribution rules for planner screens with map view\n* define attribution rules for planner screens without map but with provider-powered location/routing UI\n* display provider logo or powered-by marker in the correct visual context\n* add required copyright text or footer block in the map area\n* make attribution visible on desktop and mobile\n* add QA checklist for compliance review\n\nFunctional requirements:\n\n* attribution is visible when map tiles are rendered\n* attribution remains visible when route summary overlays or floating controls are present\n* planner UI can also show provider attribution when using provider-powered search and routing flows\n\nTechnical requirements:\n\n* attribution component should be reusable and centrally configured\n* the implementation should avoid scattered hardcoded logo placement\n* responsive layout rules must prevent attribution from being hidden behind UI overlays\n\nAcceptance criteria:\n\n* every production planner screen that uses Mapy provider data shows provider attribution in the correct place\n* mobile layout still displays the required attribution\n* compliance rules are documented in implementation notes and QA checklist",
          "labels": [
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-96",
          "summary": "Story: Add Mapy route open and share actions for saved trip plans",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-96",
          "description": "Objective:\nLet users open, share and export saved trip plans outside Hobbeast when that is useful for navigation, handoff or external route viewing.\n\nProblem:\nUsers may want to continue navigation in Mapy, share the route with others, or open the route outside Hobbeast without rebuilding it.\n\nScope:\n\n* generate provider-compatible open route links from saved trip data\n* support opening the route in external Mapy web or app context where applicable\n* support share-ready route URLs for user handoff\n* support planner action buttons such as open externally and share\n* support fallbacks when a full route URL cannot be generated from a degraded saved record\n\nFunctional requirements:\n\n* user can open a saved trip outside Hobbeast\n* user can copy/share a route link where supported\n* route export action uses stored trip plan data and does not require re-entering points\n\nTechnical requirements:\n\n* external route link generation should be encapsulated in one service/helper layer\n* generated links must be deterministic from stored trip plan data\n* unsupported or partial routes must fail gracefully with UI feedback\n\nAcceptance criteria:\n\n* saved trip plan can be opened externally through generated route link\n* share action is available for supported trip records\n* broken or incomplete route data is handled safely",
          "labels": [
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-97",
          "summary": "Story: Add robust error handling and observability for Mapy trip planning",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-97",
          "description": "Objective:\nMake the trip planning capability diagnosable, resilient and user-friendly in the face of provider failures, invalid point combinations and partial route planning failures.\n\nProblem:\nGeocoding, routing and elevation integrations can fail independently. Without structured error handling the planner becomes unreliable and hard to support.\n\nScope:\n\n* define error model for suggest, geocode, reverse geocode, routing and elevation steps\n* provide user-safe UI messages for common failure cases\n* log provider failures and partial failures in structured form\n* distinguish no-result, invalid-route, provider-failure and degraded-mode cases\n* support retry-ready error states where appropriate\n\nFunctional requirements:\n\n* user sees understandable error feedback\n* route planner can continue in degraded mode when non-critical enrichment fails\n* technical diagnostics exist for debugging production issues\n\nTechnical requirements:\n\n* use structured log payloads for provider integration failures\n* preserve request context without exposing secrets in logs\n* define common error object or service contract for planner flows\n\nAcceptance criteria:\n\n* provider failures are visible in logs and understandable in UI\n* elevation or optional enrichment failure does not break core route planning\n* no-result and hard-failure states are distinguishable",
          "labels": [
            "AIAGENT_TRIPPLANNING",
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-104",
          "summary": "Subtask: Create renderer selection ADR and TripPlanningMap technical foundation",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-104",
          "description": "Create the implementation foundation for HOB-87.\n\nDeliverables:\n\n* short architecture decision record for chosen map renderer\n* reusable TripPlanningMap component contract\n* map lifecycle strategy for mount, resize, cleanup and re-render\n* separation between base map layer, marker layer and route overlay layer\n\nDetailed implementation expectations:\n\n# Evaluate and document the chosen renderer against the Mapy tile use case:\n\n* tile layer support\n* marker support\n* polyline support\n* fitBounds support\n* mobile touch compatibility\n* bundle size and maintenance risk\n\n# Define component API, for example:\n\n* center\n* zoom\n* markers[]\n* routeGeometry\n* onMapClick\n* readonly/edit mode\n* className/height options\n\n# Define internal map lifecycle handling:\n\n* one-time map creation\n* safe cleanup on unmount\n* resize invalidation when modal/card opens\n* overlay refresh when points or geometry change\n\n# Define overlay architecture:\n\n* base tile layer\n* marker layer for start/end/waypoints\n* route polyline layer\n* future optional highlight/debug layers\n\nAcceptance criteria:\n\n* ADR exists and explains renderer choice\n* TripPlanningMap component API is documented in code or implementation note\n* component foundation supports later tile, marker and route work without redesign",
          "labels": []
        },
        {
          "key": "HOB-105",
          "summary": "Subtask: Create renderer selection ADR and TripPlanningMap technical foundation",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-105",
          "description": "Create the implementation foundation for HOB-87.\n\nDeliverables:\n\n* short architecture decision record for chosen map renderer\n* reusable TripPlanningMap component contract\n* map lifecycle strategy for mount, resize, cleanup and re-render\n* separation between base map layer, marker layer and route overlay layer\n\nDetailed implementation expectations:\n\n# Evaluate and document the chosen renderer against the Mapy tile use case:\n\n* tile layer support\n* marker support\n* polyline support\n* fitBounds support\n* mobile touch compatibility\n* bundle size and maintenance risk\n\n# Define component API, for example:\n\n* center\n* zoom\n* markers[]\n* routeGeometry\n* onMapClick\n* readonly/edit mode\n* className/height options\n\n# Define internal map lifecycle handling:\n\n* one-time map creation\n* safe cleanup on unmount\n* resize invalidation when modal/card opens\n* overlay refresh when points or geometry change\n\n# Define overlay architecture:\n\n* base tile layer\n* marker layer for start/end/waypoints\n* route polyline layer\n* future optional highlight/debug layers\n\nAcceptance criteria:\n\n* ADR exists and explains renderer choice\n* TripPlanningMap component API is documented in code or implementation note\n* component foundation supports later tile, marker and route work without redesign",
          "labels": []
        },
        {
          "key": "HOB-106",
          "summary": "Subtask: Create renderer selection ADR and TripPlanningMap technical foundation",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-106",
          "description": "Create the implementation foundation for HOB-87.\n\nDeliverables:\n\n* short architecture decision record for chosen map renderer\n* reusable TripPlanningMap component contract\n* map lifecycle strategy for mount, resize, cleanup and re-render\n* separation between base map layer, marker layer and route overlay layer\n\nDetailed implementation expectations:\n\n# Evaluate and document the chosen renderer against the Mapy tile use case:\n\n* tile layer support\n* marker support\n* polyline support\n* fitBounds support\n* mobile touch compatibility\n* bundle size and maintenance risk\n\n# Define component API, for example:\n\n* center\n* zoom\n* markers[]\n* routeGeometry\n* onMapClick\n* readonly/edit mode\n* className/height options\n\n# Define internal map lifecycle handling:\n\n* one-time map creation\n* safe cleanup on unmount\n* resize invalidation when modal/card opens\n* overlay refresh when points or geometry change\n\n# Define overlay architecture:\n\n* base tile layer\n* marker layer for start/end/waypoints\n* route polyline layer\n* future optional highlight/debug layers\n\nAcceptance criteria:\n\n* ADR exists and explains renderer choice\n* TripPlanningMap component API is documented in code or implementation note\n* component foundation supports later tile, marker and route work without redesign",
          "labels": []
        },
        {
          "key": "HOB-107",
          "summary": "Subtask: Implement Mapy tile layer configuration and attribution-safe base map setup",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-107",
          "description": "Implement the base map setup for HOB-87 using the chosen renderer.\n\nDeliverables:\n\n* Mapy raster tile source configuration\n* base layer initialization inside TripPlanningMap\n* attribution-safe placement strategy in the base map view\n* environment/config separation for provider base URLs and related settings\n\nDetailed implementation expectations:\n\n# Create tile layer configuration abstraction:\n\n* tile URL template or source definition\n* zoom constraints\n* retina/high density handling if applicable\n* environment-safe config location\n\n# Bind tile layer into TripPlanningMap lifecycle:\n\n* attach on initial map creation\n* prevent duplicate layer creation during rerender\n* ensure proper cleanup on unmount or map reset\n\n# Prepare attribution-aware base map structure:\n\n* reserve space for attribution UI/component\n* ensure overlays do not cover required provider attribution area\n* define mobile-safe attribution placement expectation\n\n# Validate basic rendering scenarios:\n\n* initial center and zoom render\n* resize after modal open\n* base layer still visible after overlay updates\n\nAcceptance criteria:\n\n* Mapy base map tiles render consistently in the selected renderer\n* tile layer setup is encapsulated and reusable\n* attribution placement is accounted for in the base map layout\n* no duplicate tile layers appear after re-render or state changes",
          "labels": []
        },
        {
          "key": "HOB-108",
          "summary": "Subtask: Implement marker and route overlay architecture in TripPlanningMap",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-108",
          "description": "Implement overlay rendering for HOB-87.\n\nDeliverables:\n\n* marker rendering contract for start, end and waypoint roles\n* route polyline layer contract\n* overlay update strategy when points or geometry change\n* visual style token placeholders for route and point roles\n\nDetailed implementation expectations:\n\n# Marker model must support:\n\n* stable id\n* role: start, end, waypoint, temporary_candidate\n* lat/lon\n* label/title\n* selected or active state\n* optional draggable flag for later use\n\n# Polyline model must support:\n\n* geometry input from routing result\n* style variants for active route vs future alternatives\n* clear add, update and remove lifecycle\n\n# Overlay refresh rules:\n\n* point change updates marker layer only if geometry unchanged\n* route recalculation replaces route polyline safely\n* overlay redraw must not recreate the whole map instance\n\n# Visual semantics:\n\n* start marker visually distinct from end marker\n* waypoint markers distinct but lower emphasis than endpoints\n* temporary candidate marker clearly differentiated from committed points\n\nAcceptance criteria:\n\n* TripPlanningMap can display marker collections and one route polyline\n* overlay changes update correctly without full map reset\n* marker roles are visually understandable",
          "labels": []
        },
        {
          "key": "HOB-109",
          "summary": "Subtask: Build reusable LocationSearchInput with debounced suggest query flow",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-109",
          "description": "Implement the reusable search input foundation for HOB-88.\n\nDeliverables:\n\n* reusable LocationSearchInput component\n* debounced request flow for suggest queries\n* dropdown result list with keyboard and pointer interaction\n* loading, empty and error visual states\n\nDetailed implementation expectations:\n\n# Component state separation:\n\n* raw typed input string\n* debounced query value\n* result list state\n* currently highlighted suggestion\n* selected resolved location object\n\n# Interaction rules:\n\n* debounce user typing before provider call\n* close result list on blur with safe click handling\n* support enter to select highlighted item\n* support arrow-key navigation in the result list\n* support touch selection on mobile\n\n# UX states:\n\n* idle\n* loading\n* results available\n* no results\n* request failed\n\n# Reusability expectations:\n\n* component must be usable for start, end and waypoint fields\n* no hardcoded assumptions about the field role\n* onSelect callback must return a normalized location candidate object, not only label text\n\nAcceptance criteria:\n\n* a reusable location search input exists\n* the input supports debounced suggest lookups\n* result list is keyboard and mobile friendly\n* the component returns a normalized selected item to planner state",
          "labels": []
        },
        {
          "key": "HOB-110",
          "summary": "Subtask: Implement selected suggestion resolution into normalized LocationRef objects",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-110",
          "description": "Implement the resolution step for HOB-88 that converts a selected suggest result into a normalized location object used by the planner and routing service.\n\nDeliverables:\n\n* provider result normalization helper\n* normalized LocationRef mapping for addresses, POIs and generic places\n* field-level validation before planner state update\n* safe handling for partial provider results\n\nDetailed implementation expectations:\n\n# Normalize selected provider result into one shared shape:\n\n* label\n* lat\n* lon\n* type\n* providerId if present\n* region/country if available\n* optional bbox/raw metadata\n\n# Resolution rules:\n\n* selected result must not update planner state until required coordinates are present\n* partial provider result must either be enriched by follow-up lookup or rejected with typed error\n* same normalization helper must be reusable by reverse geocode and AI-safe location resolution flows later\n\n# Planner integration rules:\n\n* selecting a result updates the correct role field: start, end or waypoint\n* normalized object is stored separately from raw typed text\n* previously selected location can be replaced cleanly without stale state\n\nAcceptance criteria:\n\n* selected search result becomes a normalized LocationRef-like object\n* planner state stores structured location data, not only display text\n* invalid or partial provider selections do not silently corrupt the route input state",
          "labels": []
        },
        {
          "key": "HOB-111",
          "summary": "Subtask: Implement map click capture and candidate point assignment flow",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-111",
          "description": "Implement the interaction flow for HOB-89 that allows a clicked map position to become a temporary planner candidate before being assigned to start, end or waypoint.\n\nDeliverables:\n\n* map click handler integration in TripPlanningMap\n* temporary candidate marker state\n* candidate assignment action sheet or popup logic\n* planner state update for assigned point role\n\nDetailed implementation expectations:\n\n# Click capture:\n\n* capture lon/lat from map click event\n* create temporary point candidate object\n* prevent accidental double-click duplication\n* support touch interaction on mobile\n\n# Candidate state model:\n\n* temporary candidate exists independently from committed route points\n* temporary candidate can be dismissed or replaced by the next click\n* temporary candidate marker uses distinct visual style\n\n# Assignment flow:\n\n* user can assign candidate as start, end or waypoint\n* assignment updates the correct planner state bucket\n* if the target role already has a point, replacement rules are explicit and safe\n\n# Integration rules:\n\n* assignment must trigger later routing readiness checks\n* temporary candidate state must clear after successful assignment or cancel\n\nAcceptance criteria:\n\n* map click creates a temporary candidate point\n* user can assign the candidate to the correct route role\n* candidate assignment updates planner state without stale temporary state remaining",
          "labels": []
        },
        {
          "key": "HOB-112",
          "summary": "Subtask: Implement reverse geocode normalization for clicked map candidates",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-112",
          "description": "Implement the reverse geocoding step for HOB-89.\n\nDeliverables:\n\n* provider call for reverse geocoding of clicked coordinates\n* normalization helper from provider response to shared LocationRef shape\n* fallback behavior for partial or weak reverse geocode results\n* integration with temporary map-click candidate flow\n\nDetailed implementation expectations:\n\n# Input and execution:\n\n* accept raw lon/lat from click flow\n* call reverse geocoding through shared provider/service layer\n* attach correlation metadata for diagnostics\n\n# Normalization:\n\n* map provider response to shared location structure\n* include label, lat, lon, type, region/country where available\n* preserve optional raw/provider metadata internally when needed\n\n# Failure and fallback handling:\n\n* if reverse geocode returns partial label, keep coordinates and mark degraded label quality\n* if reverse geocode fails entirely, allow coordinate-based candidate with clear degraded state instead of silent failure\n* do not block point assignment purely because display label is incomplete\n\n# Planner integration:\n\n* clicked point candidate should display best available label\n* normalized result must be compatible with search-selected point structure\n\nAcceptance criteria:\n\n* clicked map points are reverse-geocoded through the shared service layer\n* resulting candidate uses the same normalized structure as search-selected points\n* reverse geocode failure degrades gracefully without breaking the point-selection flow",
          "labels": []
        },
        {
          "key": "HOB-113",
          "summary": "Subtask: Build routing request composer from normalized planner state",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-113",
          "description": "Implement the request-building layer for HOB-92.\n\nDeliverables:\n\n* normalized route request composer\n* route type mapping from UI/domain state to provider request\n* ordered start/end/waypoint serialization\n* validation before provider call\n\nDetailed implementation expectations:\n\n# Input contract:\n\n* accepted normalized LocationRef objects only\n* explicit routeType\n* ordered waypoint array\n* optional route options such as avoidToll or avoidHighways when applicable\n\n# Validation rules:\n\n* start and end must exist before provider call\n* waypoint list must preserve user-defined order\n* invalid coordinates must fail with typed validation error before provider call\n* unsupported route type must fail before provider call\n\n# Mapping rules:\n\n* translate Hobbeast planner route type to provider-specific route type value\n* serialize coordinates in the exact order expected by provider\n* keep request building isolated from UI component code\n\n# Diagnostics:\n\n* emit structured request summary for logs without leaking secrets\n* attach correlation id for downstream provider call tracing\n\nAcceptance criteria:\n\n* planner state can be converted into a valid provider route request\n* invalid route inputs fail before provider call\n* request composition logic is reusable from UI and backend callers",
          "labels": []
        },
        {
          "key": "HOB-114",
          "summary": "Subtask: Normalize routing response into shared TripPlanningResult model",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-114",
          "description": "Implement the response-mapping layer for HOB-92.\n\nDeliverables:\n\n* provider routing response parser\n* normalized TripPlanningResult mapping\n* route summary extraction\n* degraded/partial routing diagnostics handling\n\nDetailed implementation expectations:\n\n# Parse provider routing result into shared fields:\n\n* routeType\n* lengthM\n* durationS\n* geometry\n* normalized start/end/waypoint references\n* diagnostics and warnings when relevant\n\n# Geometry handling:\n\n* preserve provider geometry in a form usable by route rendering layer\n* isolate geometry parsing from UI rendering code\n* validate that returned geometry is present and structurally usable before planner state update\n\n# Failure and degraded handling:\n\n* no-route and malformed-response cases must return typed errors\n* partial or warning cases should populate diagnostics instead of silently failing\n* route result must remain compatible with future elevation enrichment and trip persistence\n\n# Planner integration rules:\n\n* successful normalization updates current route result state\n* previous route state is replaced safely\n* malformed response must not leave planner in inconsistent hybrid state\n\nAcceptance criteria:\n\n* provider routing response is mapped into one shared TripPlanningResult-like structure\n* route summary and geometry are available to rendering and persistence layers\n* malformed or incomplete routing results are handled with explicit error or degraded state",
          "labels": []
        },
        {
          "key": "HOB-115",
          "summary": "Subtask: Design trip plan persistence schema and event linkage",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-115",
          "description": "Implement the storage design work for HOB-94.\n\nDeliverables:\n\n* database schema proposal for persisted trip plans\n* event-to-trip-plan linkage strategy\n* persistence field mapping from planner state to stored record\n* update strategy for editing existing trip plans\n\nDetailed implementation expectations:\n\n# Define persisted fields at minimum:\n\n* event_id\n* provider\n* route_type\n* start_point\n* end_point\n* waypoint list\n* length and duration summary\n* geometry snapshot\n* optional elevation summary\n* created_at and updated_at\n\n# Define lifecycle states:\n\n* draft route attached to in-progress event edit\n* saved route attached to persisted event\n* replaced route when user recalculates and saves again\n\n# Linkage expectations:\n\n* one event may have zero or one active trip plan in first version\n* persistence design must allow future route versioning without schema rewrite\n* event read path must be able to retrieve the linked trip plan efficiently\n\n# Editing expectations:\n\n* editing a saved route must not create orphaned records\n* save/update flow must define replace vs patch behavior explicitly\n\nAcceptance criteria:\n\n* persistence schema is detailed enough for migration work\n* event linkage is explicit and implementable\n* edit/update rules prevent stale or orphaned trip records",
          "labels": []
        },
        {
          "key": "HOB-116",
          "summary": "Subtask: Implement trip plan save-load-update repository flow",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-116",
          "description": "Implement the persistence workflow for HOB-94 after schema design.\n\nDeliverables:\n\n* repository or data-access layer for trip plan records\n* create/save operation for new trip plan\n* load operation for event-linked trip plan\n* update/replace operation for edited trip plan\n\nDetailed implementation expectations:\n\n# Save flow:\n\n* accept normalized planner result and linked event id\n* persist structured route data and geometry snapshot\n* return stored record identifier and timestamps\n\n# Load flow:\n\n* fetch trip plan by event linkage\n* return data in shape usable by planner rehydration and map rendering\n* support no-trip-plan state explicitly\n\n# Update flow:\n\n* replace or patch behavior must follow the persistence design from HOB-115\n* prevent orphaned or duplicate active records\n* update timestamps and relevant metadata consistently\n\n# Rehydration expectations:\n\n* loaded trip plan must be sufficient to render saved route preview without mandatory fresh provider call\n* loaded trip plan must be sufficient to reopen route editing flow\n\nAcceptance criteria:\n\n* event-linked trip plans can be created, loaded and updated through one defined data-access flow\n* save/load/update behavior is deterministic and safe against duplicate active records",
          "labels": []
        },
        {
          "key": "HOB-117",
          "summary": "Subtask: Implement map click candidate assignment popup and role update flow",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-117",
          "description": "Implement the assignment step for HOB-89 after a user clicks on the map and a temporary candidate point exists.\n\nDeliverables:\n\n* candidate assignment popup or action sheet\n* actions for assign as start, assign as end and add as waypoint\n* replacement logic for already existing start/end points\n* cleanup logic for temporary candidate dismissal\n\nDetailed implementation expectations:\n\n# Popup/action sheet behavior:\n\n* opens after temporary candidate point exists\n* clearly shows the candidate label or fallback coordinate summary\n* exposes explicit actions for start, end and waypoint roles\n* supports cancel and close without mutating committed route points\n\n# Role update rules:\n\n* assign as start replaces current start if one exists\n* assign as end replaces current end if one exists\n* add as waypoint appends by default to waypoint order unless future insertion mode is introduced\n* planner state update must be atomic for the selected role\n\n# Temporary state cleanup:\n\n* after successful assignment, temporary candidate state is cleared\n* after cancel, temporary candidate may be cleared or retained according to UX decision, but behavior must be explicit and consistent\n* repeated clicks must not leave zombie temporary markers or stale dialogs\n\n# Route readiness integration:\n\n* assignment updates route-input completeness checks\n* if both start and end are now present, planner may enable route calculation\n\nAcceptance criteria:\n\n* user can assign a clicked candidate as start, end or waypoint\n* assignment logic safely replaces or appends the correct planner field\n* temporary candidate UI state is cleaned up consistently after action or cancel",
          "labels": []
        },
        {
          "key": "HOB-118",
          "summary": "Subtask: Build routing request composer from normalized planner state",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-118",
          "description": "Implement the request-building layer for HOB-92.\n\nDeliverables:\n\n* normalized route request composer\n* route type mapping from UI/domain state to provider request\n* ordered start/end/waypoint serialization\n* validation before provider call\n\nDetailed implementation expectations:\n\n# Input contract:\n\n* accepted normalized LocationRef objects only\n* explicit routeType\n* ordered waypoint array\n* optional route options such as avoidToll or avoidHighways when applicable\n\n# Validation rules:\n\n* start and end must exist before provider call\n* waypoint list must preserve user-defined order\n* invalid coordinates must fail with typed validation error before provider call\n* unsupported route type must fail before provider call\n\n# Mapping rules:\n\n* translate Hobbeast planner route type to provider-specific route type value\n* serialize coordinates in the exact order expected by provider\n* keep request building isolated from UI component code\n\n# Diagnostics:\n\n* emit structured request summary for logs without leaking secrets\n* attach correlation id for downstream provider call tracing\n\nAcceptance criteria:\n\n* planner state can be converted into a valid provider route request\n* invalid route inputs fail before provider call\n* request composition logic is reusable from UI and backend callers",
          "labels": []
        },
        {
          "key": "HOB-134",
          "summary": "Subtask: Implement planner rehydration from persisted trip plan records",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-134",
          "description": "Implement rehydration for HOB-94 so a saved trip plan can be loaded back into planner state and map rendering without full manual re-entry.\n\nDeliverables:\n\n* planner state rehydration mapper from stored trip plan record\n* restoration of start, end and waypoint state from persisted data\n* restoration of route summary and geometry snapshot into current planner view\n* safe handling of incomplete or older persisted trip plan versions\n\nDetailed implementation expectations:\n\n# Rehydration mapping:\n\n* map stored start/end/waypoint data back into normalized planner point state\n* map stored route result into render-ready route state\n* restore routeType and optional elevation summary if present\n\n# Compatibility handling:\n\n* tolerate older persisted records with missing optional fields\n* define fallback behavior when geometry exists but some derived summary field is missing\n* avoid forcing a provider re-call for basic preview on load\n\n# UX integration:\n\n* event edit flow can open with trip plan already populated\n* read-only event detail preview can render from persisted record\n* corrupted or partial records fail gracefully with visible degraded state instead of crash\n\nAcceptance criteria:\n\n* saved trip plan can be loaded into planner state for editing\n* saved trip plan can be rendered for preview without mandatory fresh provider execution\n* incomplete persisted records degrade safely",
          "labels": []
        },
        {
          "key": "HOB-135",
          "summary": "Subtask: Implement elevation request pipeline and route-geometry sampling strategy",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-135",
          "description": "Implement the elevation enrichment pipeline for HOB-93.\n\nDeliverables:\n\n* geometry sampling strategy for elevation queries\n* elevation provider request builder\n* mapping of elevation response into normalized profile or summary data\n* graceful fallback when elevation lookup is not available\n\nDetailed implementation expectations:\n\n# Sampling responsibilities:\n\n* accept route geometry from normalized TripPlanningResult\n* derive sampled points suitable for provider limitations\n* preserve route order and relative position for profile generation\n* document any point count or segmentation assumptions in code comments or implementation notes\n\n# Provider execution:\n\n* build elevation request through shared provider/service layer\n* ensure elevation call is optional enrichment after core routing success\n* attach correlation id and diagnostics metadata\n\n# Mapping responsibilities:\n\n* derive profile-ready data points where supported\n* derive ascent/descent summary where possible\n* keep a normalized structure that can later be persisted with trip plan records\n\n# Failure handling:\n\n* elevation lookup failure must not invalidate the core route\n* planner should enter degraded route-only mode with warning/diagnostic instead of failing completely\n\nAcceptance criteria:\n\n* route geometry can be transformed into an elevation request input\n* elevation response is normalized into profile or summary data\n* elevation failure does not break route preview or persistence flow",
          "labels": []
        },
        {
          "key": "HOB-136",
          "summary": "Subtask: Define route rendering QA and regression test matrix for interactive planner map",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-136",
          "description": "Implement the QA/regression coverage task for HOB-91.\n\nDeliverables:\n\n* route rendering regression checklist\n* marker/overlay rendering test scenarios\n* map lifecycle and resize test scenarios\n* degraded-data rendering scenarios\n\nDetailed implementation expectations:\n\n# Rendering scenarios to cover:\n\n* start/end only route\n* route with multiple waypoints\n* route recalculation after changing one point\n* cleared route state\n* temporary candidate marker state\n* persisted trip rehydration render\n\n# Lifecycle scenarios to cover:\n\n* initial planner open\n* modal/dialog open after hidden render\n* resize/orientation change\n* switching between edit and read-only route view\n\n# Failure/degraded scenarios:\n\n* route summary present but geometry missing\n* geometry present but no elevation summary\n* reverse geocode label degraded for a clicked point\n* attribution still visible under overlay conditions\n\n# Output expectations:\n\n* checklist or test matrix suitable for manual QA and future automated UI tests\n* explicit expected result per scenario\n\nAcceptance criteria:\n\n* a route rendering regression matrix exists for the planner map\n* lifecycle, degraded-data and overlay scenarios are explicitly covered\n* QA coverage is detailed enough for manual and automated verification",
          "labels": []
        },
        {
          "key": "HOB-137",
          "summary": "Subtask: Implement reusable provider attribution component and placement rules for Mapy planner",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-137",
          "description": "Implement the attribution layer for HOB-95.\n\nDeliverables:\n\n* reusable provider attribution UI component\n* placement rules for map view and planner surfaces\n* responsive behavior for mobile and overlay-heavy layouts\n* compliance-oriented implementation checklist in code or implementation notes\n\nDetailed implementation expectations:\n\n# Attribution component responsibilities:\n\n* render provider attribution in a reusable way\n* support map-view placement and planner-surface placement\n* allow safe integration with the selected renderer/container layout\n\n# Placement rules:\n\n* attribution must remain visible when route summary overlay is present\n* attribution must remain visible on mobile/responsive layouts\n* attribution must not be hidden by floating controls, markers or custom panels\n\n# Implementation constraints:\n\n* avoid scattered one-off hardcoded labels across screens\n* centralize provider wording or asset usage where possible\n* keep the component compatible with both route planner and later read-only trip preview surfaces\n\nAcceptance criteria:\n\n* reusable attribution component exists\n* attribution remains visible in planner map layouts and overlay scenarios\n* implementation is centralized enough to support compliance maintenance later",
          "labels": []
        },
        {
          "key": "HOB-138",
          "summary": "Subtask: Implement external Mapy route link builder from persisted trip plan data",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-138",
          "description": "Implement the external open/share link generation layer for HOB-96.\n\nDeliverables:\n\n* link builder helper from persisted trip plan data\n* support for open externally action\n* support for share/copy link action\n* graceful fallback for incomplete persisted route records\n\nDetailed implementation expectations:\n\n# Input requirements:\n\n* consume persisted trip plan data or normalized route result data\n* use stored start/end/waypoints and route metadata where available\n* avoid requiring a fresh provider route call for basic link generation\n\n# Output responsibilities:\n\n* generate deterministic external route/open link for supported trip records\n* support copy/share UI integration later\n* distinguish unsupported or incomplete records from valid exportable records\n\n# Failure handling:\n\n* incomplete stored route should return typed non-exportable state instead of broken link\n* link builder must not throw uncontrolled errors for partially degraded trip records\n\n# Reuse expectations:\n\n* the helper should be reusable from event detail, trip preview and future share flows\n* keep provider-specific URL-building logic isolated from UI components\n\nAcceptance criteria:\n\n* persisted trip plan data can be converted into an external open/share link where supported\n* incomplete or invalid trip records are handled safely\n* link generation logic is reusable and isolated from UI code",
          "labels": []
        },
        {
          "key": "HOB-139",
          "summary": "Subtask: Implement attribution visibility verification in map and planner overlay layouts",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-139",
          "description": "Implement the runtime layout verification work for HOB-95.\n\nDeliverables:\n\n* attribution visibility checks for key planner layouts\n* integration rules for overlay-heavy map screens\n* documented fallback placement strategy for small screens\n* manual QA checklist references for compliance review\n\nDetailed implementation expectations:\n\n# Layouts to verify:\n\n* planner open with no route\n* planner with route summary overlay\n* planner with temporary candidate popup\n* read-only trip preview surface\n* mobile narrow viewport layouts\n\n# Verification rules:\n\n* provider attribution remains visible in all supported states\n* floating controls and summary cards do not cover attribution area\n* fallback placement for small screens remains compliant and readable\n\n# Integration constraints:\n\n* verification logic or checklist should align with reusable attribution component\n* avoid one-off page-specific fixes without documenting the layout rule\n\nAcceptance criteria:\n\n* key planner layouts have explicit attribution visibility verification\n* overlay scenarios and mobile view are covered by implementation or QA guidance\n* attribution compliance does not depend on accidental layout behavior",
          "labels": []
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "Hobbeast-mobile",
        "label": "GitHub / HenrikFaul/Hobbeast-mobile"
      }
    },
    {
      "id": "hob-trip-planning-automation",
      "version": "mobile-android-v0.8.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "mobile-android",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-24",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "mapy"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "trip_planning_automation"
      ],
      "releaseNotes": "Trip planning AI and automation readiness with backend service contracts.",
      "deploymentComment": "Trip planning AI and automation readiness with backend service contracts.",
      "jiraLinks": [
        {
          "key": "HOB-86",
          "summary": "Mapy.com trip planning AI and automation readiness",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-86",
          "description": "Prepare the Mapy.com trip planning capability so it can later be used not only through direct user interaction but also through backend automation and AI agents. Define reusable service contracts, structured request and response schemas, deterministic location resolution and auditable automated route planning.",
          "labels": [
            "AIAGENT_TRIPPLANNING",
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-98",
          "summary": "Story: Create backend trip planning service contract for non-UI callers",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-98",
          "description": "Objective:\nCreate a backend service layer for Mapy-based trip planning that is independent from the React UI, so the same routing and location logic can be used by manual user flows, backend automation and future AI agents.\n\nBusiness context:\nIf routing and location logic is embedded directly into UI components, the functionality becomes hard to reuse, test, automate and evolve. Hobbeast needs a backend-level trip planning contract that can be called by web UI, background jobs and agent workflows.\n\nProblem statement:\nThe current trip planning implementation trend is UI-driven. This is sufficient for manual interaction, but not sufficient for future automation, AI-assisted route generation, scheduled route preparation or system-to-system orchestration.\n\nTarget architecture:\nCreate a provider-facing service module plus an application-facing orchestration service.\n\nExpected layers:\n\n# MapyProviderClient\n\n* low-level HTTP integration\n* handles auth, base URL, request shaping, retries, response parsing\n* one method per provider capability\n\n# TripPlanningService\n\n* Hobbeast-facing application service\n* normalizes request/response\n* composes provider calls\n* enforces validation and fallback rules\n* reusable from UI endpoints, jobs and agent endpoints\n\n# Transport layer / API endpoints\n\n* UI endpoint(s)\n* internal service endpoint(s)\n* future agent endpoint(s)\n\nScope:\n\n* define normalized service methods for:\n** suggestLocation\n** geocodeLocation\n** reverseGeocodePoint\n** planRoute\n** enrichElevation\n** buildExternalRouteLink\n* define shared request and response schemas\n* define validation rules and common error model\n* define logging and correlation-id expectations\n* define configuration handling and provider secrets usage\n* define synchronous vs asynchronous boundaries\n* define compatibility rules for UI and non-UI callers\n\nOut of scope:\n\n* final AI decision engine\n* route recommendation ranking logic\n* offline navigation\n* full agent orchestration runtime\n\nDetailed functional requirements:\n\n# Service must accept normalized inputs instead of UI component state\n# Service must not depend on browser-only APIs\n# Service must return deterministic typed responses\n# Service must use a common error format across suggest/geocode/routing/elevation\n# Service must be callable from:\n#* event create/update workflow\n#* route planner UI actions\n#* future automation jobs\n#* future AI-agent workflows\n# Service must support partial-success scenarios, for example:\n#* route success + elevation failure\n#* reverse geocode partial result\n# Service must support idempotent read-like operations\n\nDetailed technical requirements:\n\n* define TypeScript interfaces in a shared domain module\n* isolate Mapy-specific HTTP details from application logic\n* use structured error types or tagged error objects\n* attach request correlation id to logs\n* sanitize provider responses before returning them to upper layers\n* do not leak secrets or raw credentials in logs or returned payloads\n* keep provider-specific raw response optional and internal by default\n\nSuggested interface contract:\n\n{noformat}export interface LocationRef {\n  label: string\n  lat: number\n  lon: number\n  type?: 'address' | 'poi' | 'city' | 'custom' | 'unknown'\n  providerId?: string\n  raw?: unknown\n}\n\nexport interface TripPlanningRequest {\n  routeType: 'foot_hiking' | 'foot_fast' | 'bike_road' | 'bike_mountain' | 'car_fast' | 'car_short'\n  start: LocationRef\n  end: LocationRef\n  waypoints?: LocationRef[]\n  options?: {\n    avoidToll?: boolean\n    avoidHighways?: boolean\n    departureAt?: string\n  }\n}\n\nexport interface TripPlanningResult {\n  routeType: string\n  lengthM: number | null\n  durationS: number | null\n  geometry: unknown\n  start: LocationRef\n  end: LocationRef\n  waypoints: LocationRef[]\n  elevationSummary?: {\n    ascentM?: number\n    descentM?: number\n  }\n  diagnostics?: {\n    degraded: boolean\n    warnings: string[]\n  }\n}{noformat}\n\nError model expectations:\n\n* VALIDATION_ERROR\n* NO_RESULT\n* AMBIGUOUS_LOCATION\n* PROVIDER_FAILURE\n* RATE_LIMITED\n* NO_ROUTE_FOUND\n* PARTIAL_SUCCESS\n\nAPI design expectations:\n\n* request/response objects must be stable enough for AI callers\n* avoid UI-specific booleans like modal state or visual-only selection state\n* service must be versionable without breaking callers\n\nSuggested endpoint family (illustrative):\n\n* POST /api/trip-planning/suggest\n* POST /api/trip-planning/geocode\n* POST /api/trip-planning/reverse-geocode\n* POST /api/trip-planning/route\n* POST /api/trip-planning/elevation\n* POST /api/trip-planning/external-link\n\nObservability requirements:\n\n* structured logs for every provider call\n* latency timing per provider operation\n* correlation id propagation\n* clear separation between caller-facing error and provider raw error\n\nAcceptance criteria:\n\n* a documented backend service contract exists for all core trip planning operations\n* the service can be called without any dependency on React component state\n* suggest/geocode/routing/elevation share a common validation and error model\n* the design is reusable by UI, automation and AI callers\n* implementation notes identify boundaries between provider adapter and Hobbeast domain service",
          "labels": [
            "AIAGENT_TRIPPLANNING",
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-99",
          "summary": "Story: Define structured request and response schema for AI trip planning calls",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-99",
          "description": "Objective:\nDefine a strict, versionable and machine-consumable schema for AI and automation initiated trip planning calls so that route generation is not based on ad-hoc prompts or UI-specific state.\n\nBusiness context:\nAn AI-capable trip planning feature is only safe and maintainable if the contract is explicit. Agents and backend workflows must not rely on brittle text parsing, UI labels or implicit assumptions about current planner state.\n\nProblem statement:\nWithout a stable schema, the same trip planning capability will behave inconsistently across UI, backend automation and future AI callers. A structured contract is required to make validation, auditing, retries and safe execution possible.\n\nPrimary goal:\nCreate a normalized request/response schema that can support manual UI usage, automation jobs and AI agent orchestration with the same underlying service contract.\n\nScope:\n\n* define canonical input schema for trip planning\n* define canonical output schema for routing results\n* define optional fields for constraints and route preferences\n* define error schema for machine handling\n* define ambiguity and confirmation-needed schema\n* define schema versioning rules\n* define validation rules and required/optional field semantics\n\nDetailed functional requirements:\n\n# Request schema must support:\n\n* route type\n* start point\n* end point\n* waypoint list\n* route constraints\n* optional departure time\n* optional user intent metadata\n* optional planner mode metadata\n\n# Response schema must support:\n\n* resolved route summary\n* geometry payload reference\n* resolved point list in normalized form\n* diagnostics and warnings\n* route quality flags\n* degradation indicators\n* next-step recommendations when user confirmation is needed\n\n# Error schema must support:\n\n* validation failures\n* ambiguous place resolution\n* no route found\n* provider failure\n* rate limited\n* partial success\n\n# Schema must support the difference between:\n\n* user asked for a route\n* system needs clarification before route generation\n* route created successfully but with warnings\n\nDetailed technical requirements:\n\n* define JSON-serializable request and response structures\n* do not include UI-only concepts such as modal step index or component-local booleans\n* schema must be stable enough for OpenAPI/JSON Schema style documentation later\n* ambiguous location and disambiguation states must be explicit and typed\n* schema should carry enough information to reconstruct and audit the decision path\n\nSuggested request contract:\n\n{noformat}export interface TripPlanningConstraintSet {\n  avoidToll?: boolean\n  avoidHighways?: boolean\n  maxDistanceM?: number\n  maxDurationS?: number\n  requireLoop?: boolean\n  preferScenic?: boolean\n  preferEasyTerrain?: boolean\n}\n\nexport interface AITripPlanningRequest {\n  schemaVersion: '1.0'\n  routeType: 'foot_hiking' | 'foot_fast' | 'bike_road' | 'bike_mountain' | 'car_fast' | 'car_short'\n  start: LocationRef | UnresolvedLocationRef\n  end: LocationRef | UnresolvedLocationRef\n  waypoints?: Array<LocationRef | UnresolvedLocationRef>\n  constraints?: TripPlanningConstraintSet\n  departureAt?: string\n  callerContext?: {\n    source: 'ui' | 'automation' | 'ai_agent'\n    eventId?: string\n    userId?: string\n  }\n}{noformat}\n\nSuggested response contract:\n\n{noformat}export interface AITripPlanningResponse {\n  schemaVersion: '1.0'\n  status: 'success' | 'needs_clarification' | 'partial_success' | 'failure'\n  resolvedRoute?: TripPlanningResult\n  unresolvedItems?: Array<{\n    field: 'start' | 'end' | 'waypoint'\n    reason: 'ambiguous_location' | 'no_result' | 'invalid_constraint'\n    candidates?: LocationRef[]\n  }>\n  warnings?: string[]\n  diagnostics?: {\n    provider: 'mapy'\n    degraded: boolean\n    correlationId?: string\n  }\n  error?: {\n    code: 'VALIDATION_ERROR' | 'AMBIGUOUS_LOCATION' | 'NO_RESULT' | 'PROVIDER_FAILURE' | 'NO_ROUTE_FOUND' | 'RATE_LIMITED'\n    message: string\n  }\n}{noformat}\n\nValidation rules:\n\n* start and end are mandatory for route planning execution\n* routeType is mandatory\n* waypoints may be empty but must preserve order if present\n* unresolved items must not silently convert to arbitrary provider result\n* response status must always be set\n* partial_success and needs_clarification are first-class states, not generic errors\n\nAcceptance criteria:\n\n* a versioned AI/automation-friendly request schema exists\n* a versioned response schema exists\n* ambiguity, validation and degraded execution are explicitly represented\n* the schema is usable without any dependency on the web UI structure\n* the story description is sufficient for implementation of shared types and API documentation",
          "labels": [
            "AIAGENT_TRIPPLANNING",
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-100",
          "summary": "Story: Add AI-safe ambiguous location resolution workflow for trip planning",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-100",
          "description": "Objective:\nPrevent AI-driven or automated trip planning from silently selecting the wrong place when the input location is ambiguous, incomplete or underspecified.\n\nBusiness context:\nLocation ambiguity is one of the highest-risk failure modes in trip planning. A human user may notice a wrong city, mountain peak or POI immediately, but an automation or AI agent can otherwise proceed with a plausible but incorrect route. Hobbeast therefore needs an explicit ambiguity-resolution workflow instead of optimistic best-guess behavior.\n\nProblem statement:\nMap-style suggest and geocoding systems often return multiple valid candidates for the same text input, for example:\n\n* multiple cities with the same name\n* POI vs street vs district ambiguity\n* missing country or region context\n* route points described only semantically, like \"the lake viewpoint\"\nWithout a dedicated resolution workflow, AI callers may create invalid or misleading routes.\n\nPrimary goal:\nIntroduce a deterministic and reviewable location-resolution process that can stop execution, return candidate options and request clarification when confidence is insufficient.\n\nScope:\n\n* define unresolved location input model\n* define ambiguity detection rules\n* define candidate scoring and candidate list return structure\n* define clarification-needed response path\n* define confidence thresholds and execution blocking rules\n* define UI-compatible and AI-compatible resolution payloads\n* define fallback chain across suggest, geocode and reverse geocode driven workflows\n\nDetailed functional requirements:\n\n# The system must distinguish between:\n\n* exact resolved location\n* partially resolved location\n* ambiguous location with multiple candidates\n* no-result location\n* invalid location input\n\n# The system must not auto-execute a route if either start or end remains in ambiguous state above the configured confidence threshold.\n# The system must return candidate options for ambiguous items with enough metadata for downstream selection:\n\n* display label\n* lat/lon\n* location type\n* region/country context\n* provider id if available\n* confidence score or ranking position\n\n# The system must support explicit clarification on:\n\n* start point\n* end point\n* any waypoint\n\n# The system must support a fallback resolution chain such as:\n\n* suggest candidates\n* exact geocode refinement\n* reverse geocode normalization if point already exists\n* return needs_clarification if still ambiguous\n\n# For AI callers, the system must be able to return a structured clarification object instead of plain text.\n# The system must support safe execution only when:\n\n* all mandatory locations are resolved\n* ambiguity threshold is satisfied\n* constraints remain valid after resolution\n\nDetailed technical requirements:\n\n* define {{UnresolvedLocationRef}} structure separate from {{LocationRef}}\n* store candidate lists in deterministic order\n* make confidence threshold configurable, not hardcoded in UI\n* expose machine-readable reasons for ambiguity such as:\n** MULTIPLE_CITY_MATCHES\n** POI_AND_ADDRESS_CONFLICT\n** COUNTRY_CONTEXT_MISSING\n** INSUFFICIENT_PROVIDER_CONFIDENCE\n* resolution logic must be reusable by both manual UI flow and AI flow\n* do not collapse candidate lists into a single best guess without traceability\n\nSuggested type model:\n\n{noformat}export interface UnresolvedLocationRef {\n  inputText: string\n  source?: 'typed_text' | 'ai_generated' | 'map_click' | 'imported'\n}\n\nexport interface LocationCandidate {\n  label: string\n  lat: number\n  lon: number\n  type: 'address' | 'poi' | 'city' | 'district' | 'region' | 'unknown'\n  region?: string\n  country?: string\n  providerId?: string\n  confidence?: number\n}\n\nexport interface LocationResolutionResult {\n  status: 'resolved' | 'needs_clarification' | 'no_result' | 'invalid'\n  resolved?: LocationRef\n  candidates?: LocationCandidate[]\n  reason?: 'MULTIPLE_CITY_MATCHES' | 'POI_AND_ADDRESS_CONFLICT' | 'COUNTRY_CONTEXT_MISSING' | 'NO_PROVIDER_RESULT' | 'INVALID_INPUT'\n}{noformat}\n\nDecision rules:\n\n* if exactly one candidate is above confident threshold and no close peer candidate exists, status may be {{resolved}}\n* if multiple candidates are close in score, status must be {{needs_clarification}}\n* if no candidate exists, status must be {{no_result}}\n* if input is blank or structurally unusable, status must be {{invalid}}\n\nExample scenario coverage:\n\n* \"Springfield\" without country => needs clarification\n* \"Margit-sziget\" with one dominant Budapest result => may auto-resolve if threshold satisfied\n* \"lake viewpoint\" in remote hiking context => likely ambiguous unless contextualized by prior route area\n\nAcceptance criteria:\n\n* ambiguous locations are represented as a first-class state, not hidden fallback behavior\n* AI and automation callers receive structured clarification payloads when required\n* the routing service does not continue with silently guessed mandatory points\n* candidate ordering and ambiguity reasons are explicit enough for implementation and QA\n* story description is sufficient for implementing shared types, service logic and clarification UX/API behavior",
          "labels": [
            "AIAGENT_TRIPPLANNING",
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-101",
          "summary": "Story: Add AI-assisted trip generation and waypoint suggestion readiness",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-101",
          "description": "Objective:\nPrepare the trip planning domain so that future AI-assisted route generation can propose start/end combinations, waypoint candidates and route alternatives without requiring a redesign of the core planner architecture.\n\nBusiness context:\nThe current business value is not only in manual route creation but in future higher-level assistance such as:\n\n* plan a scenic hike between two places\n* suggest two intermediate viewpoints\n* make the route easier or shorter\n* create a family-friendly version of the route\nTo support this safely, the trip planning architecture must preserve separation between deterministic routing and optional recommendation logic.\n\nProblem statement:\nIf AI-assisted route generation is bolted on top of the existing planner without preparation, the result will be brittle, hard to validate and difficult to audit. The planner needs explicit extension points for AI-generated waypoint candidates, route alternatives and optimization constraints.\n\nPrimary goal:\nDefine the readiness layer that allows AI-generated proposals to be inserted, reviewed, ranked and either accepted or rejected without bypassing deterministic routing and validation.\n\nScope:\n\n* define proposal model for AI-suggested points and route variants\n* define distinction between suggested point and accepted route point\n* define planner readiness for route alternatives\n* define metadata model for suggestion rationale\n* define validation pass that every AI proposal must go through before becoming an executable route request\n* define hooks for future scoring of scenic, easier, shorter or thematic routes\n\nOut of scope:\n\n* full production AI generation model\n* semantic content generation for travel articles or full travel itineraries\n* autonomous final decision making without validation\n\nDetailed functional requirements:\n\n# The system must support proposed points that are not yet accepted into the saved route.\n# The system must support multiple route alternatives for the same high-level user intent.\n# Every AI-suggested point must pass the same location resolution workflow as manual input.\n# Every AI-suggested route must pass the same deterministic routing validation as manual routing.\n# The planner must preserve the difference between:\n\n* suggested waypoint\n* accepted waypoint\n* rejected waypoint\n* alternative route candidate\n\n# The system must support rationale metadata such as:\n\n* scenic viewpoint\n* shorter detour\n* easier terrain\n* avoids steep climb\n* avoids road traffic\n\n# The system must support user review or workflow review before committing suggestions into saved trip data.\n\nDetailed technical requirements:\n\n* define proposal entities or in-memory structures separate from final trip plan entities\n* preserve traceability of where each suggestion came from\n* do not allow AI-generated waypoints to bypass validation, ambiguity resolution or route recalculation\n* support suggestion ranking and future confidence scores\n* support later UI rendering of multiple route alternatives\n\nSuggested data model concepts:\n\n{noformat}export interface TripPointProposal {\n  id: string\n  source: 'ai_agent' | 'automation_rule' | 'manual_helper'\n  proposalType: 'start' | 'end' | 'waypoint'\n  candidate: LocationRef | UnresolvedLocationRef\n  rationale?: string[]\n  confidence?: number\n  status: 'proposed' | 'accepted' | 'rejected'\n}\n\nexport interface RouteAlternativeProposal {\n  id: string\n  basedOnRequestId: string\n  routeType: string\n  proposedWaypoints: TripPointProposal[]\n  expectedLengthM?: number\n  expectedDurationS?: number\n  rationale?: string[]\n  status: 'proposed' | 'accepted' | 'rejected'\n}{noformat}\n\nDecision flow expectations:\n\n# AI or automation proposes route enhancement or full route candidate\n# proposed points are location-resolved and validated\n# deterministic routing is executed\n# result is returned as one or more route alternatives\n# user or workflow accepts one route alternative\n# only accepted alternative becomes persisted trip plan\n\nExample scenarios:\n\n* user asks for a more scenic hiking route => system proposes two alternative waypoint sets\n* user asks for a shorter route => system proposes a reduced waypoint version\n* AI suggests a lake viewpoint, but the location is ambiguous => clarification required before routing continues\n\nAcceptance criteria:\n\n* the architecture clearly separates proposed and accepted trip planning data\n* AI or automation suggestions cannot silently become persisted route points without validation\n* the story provides enough detail for implementing proposal models and future alternative-route workflows\n* the design supports later UI and agent features without requiring core planner redesign",
          "labels": [
            "AIAGENT_TRIPPLANNING",
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-102",
          "summary": "Story: Add agent governance, quota control and audit trail for automated trip planning",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-102",
          "description": "Objective:\nEnsure that automated and AI-driven trip planning executions are governable, rate-aware and auditable, so Hobbeast can safely support non-human callers without losing operational control.\n\nBusiness context:\nAs soon as trip planning becomes callable by automation or AI agents, the system needs stronger controls than a pure user-interaction feature. Without audit, caller identity, quota rules and execution traceability, the platform risks abuse, debugging difficulties, excessive provider usage and unreviewable autonomous actions.\n\nProblem statement:\nManual user clicks are naturally limited and attributable. Automated trip planning is not. If the system later allows background jobs or AI agents to trigger geocoding, routing and elevation flows repeatedly, it must know:\n\n* who triggered the action\n* why it was triggered\n* how often it can run\n* what provider usage it consumed\n* what final route result was chosen\n\nPrimary goal:\nDefine the governance and control layer that makes AI/automation trip planning operationally safe before large-scale automated use is introduced.\n\nScope:\n\n* define caller identity model for UI, automation and AI agent executions\n* define per-caller and per-scope quota concepts\n* define audit log model for trip planning requests and decisions\n* define execution trace model for provider calls and route outcomes\n* define safe defaults for throttling and quota exhaustion behavior\n* define reviewability for accepted vs rejected AI-proposed routes\n* define security boundaries for secret usage and privileged execution paths\n\nDetailed functional requirements:\n\n# Every automated or AI-initiated trip planning execution must record:\n\n* request id\n* caller type\n* caller id where available\n* event id if relevant\n* timestamp\n* route intent summary\n* final status\n\n# The system must distinguish between caller categories:\n\n* UI user action\n* internal automation job\n* AI agent\n* admin/internal tooling\n\n# The system must support configurable quotas or limits such as:\n\n* per minute/provider call limit\n* per day/agent call budget\n* per event planning retry limit\n* per workflow execution cap\n\n# The system must define behavior when quota is reached:\n\n* hard reject\n* defer\n* degrade to no-elevation mode\n* require manual retry\n\n# The system must record decision trail data for AI-assisted planning, including:\n\n* original structured request\n* ambiguity state if any\n* proposed alternatives\n* selected alternative\n* accepted/rejected proposals\n\n# Audit data must make it possible to answer:\n\n* who/what created this route?\n* was the route fully manual, automated or AI-assisted?\n* what provider calls were executed?\n* why was one route alternative accepted?\n\nDetailed technical requirements:\n\n* define audit entity separate from the final persisted trip plan\n* audit structure must be append-oriented and safe for later analytics\n* do not store secrets or unsafe provider payloads in audit log\n* support correlation id across trip planning request, provider calls and saved result\n* design must be compatible with future observability dashboards\n\nSuggested audit model:\n\n{noformat}export interface TripPlanningAuditRecord {\n  id: string\n  requestId: string\n  callerType: 'ui' | 'automation' | 'ai_agent' | 'admin_tool'\n  callerId?: string\n  eventId?: string\n  startedAt: string\n  finishedAt?: string\n  status: 'success' | 'needs_clarification' | 'partial_success' | 'failure' | 'rate_limited'\n  routeType?: string\n  provider: 'mapy'\n  requestSummary: {\n    hasWaypoints: boolean\n    waypointCount: number\n    hasConstraints: boolean\n  }\n  chosenAlternativeId?: string\n  warnings?: string[]\n  errorCode?: string\n  correlationId?: string\n}{noformat}\n\nSuggested quota model concepts:\n\n{noformat}export interface TripPlanningQuotaPolicy {\n  callerType: 'automation' | 'ai_agent' | 'admin_tool'\n  maxCallsPerMinute?: number\n  maxCallsPerDay?: number\n  maxElevationCallsPerDay?: number\n  maxRetriesPerRequest?: number\n}{noformat}\n\nOperational design expectations:\n\n* governance checks occur before provider-intensive execution\n* quota breaches return typed responses, not generic failures\n* audit trail is written for both success and failure paths\n* accepted route choice is traceable when alternatives were proposed\n\nAcceptance criteria:\n\n* automated and AI-initiated trip planning has an explicit audit model\n* quota and throttling concepts are defined with caller-aware rules\n* trip planning decisions are traceable from request to chosen result\n* the story description is detailed enough for implementing governance entities, checks and audit persistence",
          "labels": [
            "AIAGENT_TRIPPLANNING",
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-103",
          "summary": "Story: Add AI-assisted trip generation and waypoint suggestion readiness",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-103",
          "description": "Objective:\nPrepare the trip planning domain so that future AI-assisted route generation can propose start and end combinations, waypoint candidates and route alternatives without requiring a redesign of the core planner architecture.\n\nBusiness context:\nThe long-term value of trip planning is not limited to manual route creation. Future assistant features may need to support requests such as:\n\n* suggest a scenic hike between two places\n* add one or two viewpoint stops\n* generate a shorter or easier variant of the same route\n* propose a family-friendly route option\nTo support this safely, Hobbeast must separate deterministic routing from suggestion and recommendation logic.\n\nProblem statement:\nIf AI-generated suggestions are inserted directly into the planner as final route data, the system becomes hard to validate, hard to audit and unsafe to automate. The planner needs explicit proposal states and validation gates.\n\nPrimary goal:\nCreate the readiness layer that allows AI-generated points and route alternatives to be proposed, validated, reviewed and then accepted or rejected.\n\nScope:\n\n* define proposal model for AI-suggested points\n* define proposal model for alternative routes\n* define distinction between proposed and accepted route points\n* define validation pass required before any proposed point becomes part of an executable route request\n* define metadata model for rationale and confidence\n* define readiness hooks for route alternatives such as scenic, easier, shorter and thematic options\n\nOut of scope:\n\n* full production AI generation engine\n* free-form natural language itinerary writing\n* autonomous final route acceptance without validation or review\n\nDetailed functional requirements:\n\n# The system must support proposed points that are not yet committed into the final trip plan.\n# The system must support more than one route alternative for the same user intent.\n# Every AI-suggested point must go through the same location resolution workflow as manual input.\n# Every AI-suggested route must go through the same deterministic routing validation as manual routing.\n# The planner must preserve the difference between:\n\n* proposed waypoint\n* accepted waypoint\n* rejected waypoint\n* proposed route alternative\n* accepted route alternative\n\n# The system must support rationale metadata such as:\n\n* scenic viewpoint\n* shorter detour\n* easier terrain\n* avoids steep climb\n* avoids traffic-heavy section\n\n# The system must support a review step where a user or workflow accepts one proposal before persistence.\n\nDetailed technical requirements:\n\n* proposal entities must be stored or represented separately from final trip plan entities\n* proposal origin must be traceable (ai_agent, automation_rule, manual_assistant, etc.)\n* no AI-generated point may bypass ambiguity resolution, validation or route recalculation\n* proposal structures must support confidence scores and ranking later\n* route alternatives must be renderable later in UI without changing the underlying trip planning contract\n\nSuggested model:\n\n{noformat}export interface TripPointProposal {\n  id: string\n  source: 'ai_agent' | 'automation_rule' | 'manual_helper'\n  proposalType: 'start' | 'end' | 'waypoint'\n  candidate: LocationRef | UnresolvedLocationRef\n  rationale?: string[]\n  confidence?: number\n  status: 'proposed' | 'accepted' | 'rejected'\n}\n\nexport interface RouteAlternativeProposal {\n  id: string\n  basedOnRequestId: string\n  routeType: string\n  proposedWaypoints: TripPointProposal[]\n  expectedLengthM?: number\n  expectedDurationS?: number\n  rationale?: string[]\n  status: 'proposed' | 'accepted' | 'rejected'\n}{noformat}\n\nDecision flow expectations:\n\n# AI or automation proposes one or more route improvements or full alternatives\n# proposed points are location-resolved and validated\n# deterministic routing is executed for each viable candidate\n# route alternatives are returned as proposals\n# a user or workflow accepts one alternative\n# only the accepted alternative becomes the persisted trip plan\n\nAcceptance criteria:\n\n* the architecture explicitly separates proposed and accepted trip planning data\n* AI or automation suggestions cannot silently become final route points without validation\n* the story provides enough detail to implement proposal models and route alternative readiness\n* the design supports later UI and agent features without requiring core planner redesign",
          "labels": [
            "AIAGENT_TRIPPLANNING",
            "MAPY_TRIPPLANNING"
          ]
        },
        {
          "key": "HOB-119",
          "summary": "Subtask: Define shared TypeScript domain interfaces for trip planning service layer",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-119",
          "description": "Implement the shared domain interface package for HOB-98.\n\nDeliverables:\n\n* shared TypeScript interfaces for LocationRef, TripPlanningRequest and TripPlanningResult\n* shared error type definitions\n* separation between provider-level DTOs and Hobbeast domain models\n\nDetailed implementation expectations:\n\n# Create domain types module that can be imported by:\n\n* frontend planner integration code\n* backend service implementation\n* future internal API endpoints\n* future AI caller adapters\n\n# Define clear boundaries between:\n\n* raw provider response shapes\n* normalized Hobbeast domain models\n* transport/request DTOs\n\n# Introduce common error model types for:\n\n* validation\n* no result\n* ambiguity\n* provider failure\n* no route found\n* partial success\n\nAcceptance criteria:\n\n* shared domain interfaces exist in one importable module\n* provider-specific response types are not mixed with normalized domain types\n* frontend and backend can depend on the same normalized trip planning interfaces",
          "labels": []
        },
        {
          "key": "HOB-120",
          "summary": "Subtask: Implement MapyProviderClient adapter with typed operations and correlation-aware logging",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-120",
          "description": "Implement the provider adapter layer for HOB-98.\n\nDeliverables:\n\n* MapyProviderClient module\n* typed methods for suggest, geocode, reverse geocode, route, elevation and external link building where applicable\n* shared request execution wrapper with correlation-aware logging\n* provider error mapping into internal error model\n\nDetailed implementation expectations:\n\n# Provider adapter responsibilities:\n\n* construct provider HTTP requests\n* handle base URL and auth configuration\n* parse provider responses into provider-specific DTOs\n* never return browser-specific state\n\n# Supported methods:\n\n* suggestLocationRaw\n* geocodeLocationRaw\n* reverseGeocodeRaw\n* routeRaw\n* elevationRaw\n\n# Logging and diagnostics:\n\n* attach correlation id to request logs\n* capture latency and HTTP status\n* avoid logging secrets or unsafe raw payloads\n\n# Error mapping:\n\n* provider/network failure maps to PROVIDER_FAILURE\n* quota/limit conditions map to RATE_LIMITED where detectable\n* malformed response maps to provider parse failure diagnostic\n\nAcceptance criteria:\n\n* one provider adapter module encapsulates all Mapy-facing HTTP operations\n* typed provider methods exist for all core planning capabilities\n* correlation-aware logging and internal error mapping are implemented",
          "labels": []
        },
        {
          "key": "HOB-121",
          "summary": "Subtask: Define JSON-serializable request and response DTOs for AI trip planning contract",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-121",
          "description": "Implement the schema contract work for HOB-99.\n\nDeliverables:\n\n* explicit request DTO definitions for AI and automation trip planning calls\n* explicit response DTO definitions for success, needs_clarification, partial_success and failure states\n* version field strategy for schema evolution\n* serialization rules for transport-safe payloads\n\nDetailed implementation expectations:\n\n# Request DTO layer:\n\n* define routeType field as required enum\n* define start/end as required structured inputs for execution requests\n* define waypoint array as ordered optional list\n* define optional constraint object\n* define optional callerContext object\n* define allowed nullable vs optional fields explicitly\n\n# Response DTO layer:\n\n* define status as mandatory discriminating field\n* define resolvedRoute payload for success and partial_success\n* define unresolvedItems payload for needs_clarification\n* define error payload for failure cases\n* define warnings and diagnostics payloads\n\n# Serialization rules:\n\n* all DTOs must be JSON-serializable without UI-only references\n* dates/timestamps must use stable string format\n* enum/string literal values must be documented consistently across request and response\n\n# Compatibility expectations:\n\n* DTOs must be suitable for frontend calls, backend jobs and future agent execution\n* transport DTOs must stay separate from raw provider DTOs and internal persistence entities\n\nAcceptance criteria:\n\n* versioned request and response DTO types exist\n* success, clarification, partial success and failure states are explicitly modeled\n* DTOs are usable across transport layers without dependence on React component state",
          "labels": []
        },
        {
          "key": "HOB-122",
          "summary": "Subtask: Implement schema validation and status-discriminated response builder for AI planning",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-122",
          "description": "Implement validation and response shaping for HOB-99.\n\nDeliverables:\n\n* request validation layer for AI trip planning input\n* status-discriminated response builder\n* validation error mapping into stable error payloads\n* clarification and partial-success response shaping helpers\n\nDetailed implementation expectations:\n\n# Validation layer:\n\n* validate required routeType\n* validate required start/end for executable requests\n* validate waypoint ordering and structure\n* validate constraint object shape\n* reject structurally invalid payloads before provider execution\n\n# Response builder layer:\n\n* build success response with resolvedRoute\n* build needs_clarification response with unresolvedItems\n* build partial_success response with resolvedRoute plus warnings/diagnostics\n* build failure response with stable error object\n\n# Error mapping rules:\n\n* validation failure => VALIDATION_ERROR\n* ambiguous input => AMBIGUOUS_LOCATION or needs_clarification state\n* provider failure => PROVIDER_FAILURE\n* no route => NO_ROUTE_FOUND\n* rate limits => RATE_LIMITED\n\n# Transport expectations:\n\n* all outputs must follow schema versioning rules\n* no hidden UI state in returned payload\n* response builder must be reusable by REST endpoint handlers and future agent adapters\n\nAcceptance criteria:\n\n* invalid AI planning requests fail through a typed validation layer\n* all response states are built through one consistent response-builder path\n* callers receive schema-compliant payloads for success, clarification, partial success and failure",
          "labels": []
        },
        {
          "key": "HOB-123",
          "summary": "Subtask: Implement schema validation and status-discriminated response builder for AI planning",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-123",
          "description": "Implement validation and response shaping for HOB-99.\n\nDeliverables:\n\n* request validation layer for AI trip planning input\n* status-discriminated response builder\n* validation error mapping into stable error payloads\n* clarification and partial-success response shaping helpers\n\nDetailed implementation expectations:\n\n# Validation layer:\n\n* validate required routeType\n* validate required start/end for executable requests\n* validate waypoint ordering and structure\n* validate constraint object shape\n* reject structurally invalid payloads before provider execution\n\n# Response builder layer:\n\n* build success response with resolvedRoute\n* build needs_clarification response with unresolvedItems\n* build partial_success response with resolvedRoute plus warnings/diagnostics\n* build failure response with stable error object\n\n# Error mapping rules:\n\n* validation failure => VALIDATION_ERROR\n* ambiguous input => AMBIGUOUS_LOCATION or needs_clarification state\n* provider failure => PROVIDER_FAILURE\n* no route => NO_ROUTE_FOUND\n* rate limits => RATE_LIMITED\n\n# Transport expectations:\n\n* all outputs must follow schema versioning rules\n* no hidden UI state in returned payload\n* response builder must be reusable by REST endpoint handlers and future agent adapters\n\nAcceptance criteria:\n\n* invalid AI planning requests fail through a typed validation layer\n* all response states are built through one consistent response-builder path\n* callers receive schema-compliant payloads for success, clarification, partial success and failure",
          "labels": []
        },
        {
          "key": "HOB-124",
          "summary": "Subtask: Implement ambiguity scoring and candidate ranking engine for location resolution",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-124",
          "description": "Implement the core ambiguity-handling engine for HOB-100.\n\nDeliverables:\n\n* candidate ranking function for provider location results\n* ambiguity threshold evaluation logic\n* resolution outcome classifier: resolved, needs_clarification, no_result, invalid\n* machine-readable ambiguity reason mapping\n\nDetailed implementation expectations:\n\n# Ranking responsibilities:\n\n* rank provider candidates deterministically\n* compare candidate confidence or heuristic quality\n* preserve enough metadata for downstream clarification flow\n\n# Classification responsibilities:\n\n* resolved when one dominant candidate clearly exceeds threshold\n* needs_clarification when multiple close candidates remain\n* no_result when provider has no usable candidate\n* invalid when input is structurally unusable\n\n# Ambiguity reasons:\n\n* MULTIPLE_CITY_MATCHES\n* POI_AND_ADDRESS_CONFLICT\n* COUNTRY_CONTEXT_MISSING\n* INSUFFICIENT_PROVIDER_CONFIDENCE\n* NO_PROVIDER_RESULT\n* INVALID_INPUT\n\n# Technical constraints:\n\n* the engine must not silently collapse close candidates into one final point\n* ranking output must be stable and reproducible for the same input and provider response\n* logic must be reusable by UI and AI callers\n\nAcceptance criteria:\n\n* location candidates are ranked deterministically\n* ambiguity outcomes are explicitly classified\n* machine-readable ambiguity reasons are returned for downstream use",
          "labels": []
        },
        {
          "key": "HOB-125",
          "summary": "Subtask: Build clarification response assembler for ambiguous trip planning inputs",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-125",
          "description": "Implement the clarification-building layer for HOB-100.\n\nDeliverables:\n\n* structured clarification payload builder\n* unresolvedItems assembler for ambiguous start/end/waypoint inputs\n* candidate list projection for downstream UI or AI caller consumption\n* stable formatting of clarification-needed responses\n\nDetailed implementation expectations:\n\n# Clarification payload responsibilities:\n\n* identify which field is unresolved: start, end or waypoint\n* attach ordered candidate list for that field\n* include machine-readable reason and optional user-facing helper text\n* support multiple unresolved items in the same response when needed\n\n# Candidate projection responsibilities:\n\n* expose label, lat, lon, type, region/country and providerId where available\n* do not leak unsafe raw provider payload by default\n* preserve deterministic ordering from ambiguity ranking engine\n\n# Response integration rules:\n\n* clarification builder must produce payloads compatible with HOB-99 response DTOs\n* same builder must support both UI and AI callers\n* needs_clarification should be a first-class response path, not treated as generic failure\n\nAcceptance criteria:\n\n* ambiguous route inputs produce a structured clarification response\n* unresolved field, reason and ordered candidates are included in a stable format\n* clarification payload can be consumed by both web UI and AI-agent workflows",
          "labels": []
        },
        {
          "key": "HOB-126",
          "summary": "Subtask: Design audit record persistence and correlation model for automated trip planning",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-126",
          "description": "Implement the audit persistence design for HOB-102.\n\nDeliverables:\n\n* audit record schema or entity definition\n* correlation id strategy across request, provider calls and final outcome\n* append-oriented write model for success, failure and clarification paths\n* link strategy between audit record, event and trip plan where applicable\n\nDetailed implementation expectations:\n\n# Audit record fields must cover:\n\n* request id\n* caller type and caller id where available\n* event id where relevant\n* status\n* route type\n* timestamps\n* chosen alternative id where relevant\n* warnings and error code summary\n* correlation id\n\n# Persistence rules:\n\n* write audit records for both successful and failed executions\n* maintain audit trail for needs_clarification and partial_success as first-class outcomes\n* do not store secrets or unsafe raw provider payloads\n\n# Linking expectations:\n\n* audit records must be traceable to final trip plan when one exists\n* audit records must remain meaningful even if no final trip plan is saved\n\nAcceptance criteria:\n\n* audit persistence model is explicit enough for implementation\n* request to outcome traceability is supported by correlation identifiers\n* success, failure and clarification paths are all audit-capable",
          "labels": []
        },
        {
          "key": "HOB-127",
          "summary": "Subtask: Implement quota policy evaluation and caller-aware throttling for automated trip planning",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-127",
          "description": "Implement quota and throttling logic for HOB-102.\n\nDeliverables:\n\n* quota policy evaluation service\n* caller-type aware throttling decision flow\n* typed rate-limit / quota-exceeded response mapping\n* pre-provider execution guard for expensive automated planning calls\n\nDetailed implementation expectations:\n\n# Input dimensions for quota evaluation:\n\n* callerType: ui, automation, ai_agent, admin_tool\n* callerId where available\n* eventId where applicable\n* operation type: suggest, geocode, reverse_geocode, route, elevation\n* request timestamp / rolling window\n\n# Policy behaviors:\n\n* allow execution when within policy\n* reject with typed RATE_LIMITED response when over hard limit\n* support later extension for defer/degraded-mode behavior\n* evaluate before provider-intensive execution begins\n\n# Technical requirements:\n\n* policy evaluation isolated from UI/controller code\n* throttling output includes machine-readable reason and scope\n* log quota decisions with correlation id without leaking secrets\n\nAcceptance criteria:\n\n* automated and AI calls are evaluated against explicit quota policy before execution\n* rate-limited outcomes return stable typed responses\n* caller category affects throttling behavior in a deterministic way",
          "labels": []
        },
        {
          "key": "HOB-128",
          "summary": "Subtask: Define proposal model storage and in-memory handling for AI-suggested trip points",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-128",
          "description": "Implement the proposal-model foundation for HOB-103.\n\nDeliverables:\n\n* proposal entity or normalized in-memory structure for AI-suggested trip points\n* separation between proposed and accepted points\n* proposal status lifecycle: proposed, accepted, rejected\n* mapping rules from proposal points into validation and routing flow\n\nDetailed implementation expectations:\n\n# Proposal model responsibilities:\n\n* store source of suggestion (ai_agent, automation_rule, manual_helper)\n* store proposal type (start, end, waypoint)\n* store candidate location ref or unresolved ref\n* store rationale list and optional confidence\n* store proposal status\n\n# State separation rules:\n\n* proposed points must not overwrite committed route points automatically\n* accepted proposals become eligible for deterministic route execution\n* rejected proposals remain traceable if audit trail is enabled\n\n# Technical constraints:\n\n* model must support both transient UI/session usage and later persistence if needed\n* proposal structure must be reusable by route alternative workflows\n* proposal model must be compatible with ambiguity resolution flow\n\nAcceptance criteria:\n\n* proposal data model exists and is separate from final trip plan state\n* accepted and rejected proposals are distinguishable from merely proposed items\n* proposal points can be routed into the validation and routing pipeline without redesign",
          "labels": []
        },
        {
          "key": "HOB-129",
          "summary": "Subtask: Implement route alternative acceptance and commit flow for AI-generated proposals",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-129",
          "description": "Implement the alternative-route acceptance flow for HOB-103.\n\nDeliverables:\n\n* route alternative proposal structure handling\n* acceptance flow for one selected alternative\n* rejection handling for non-selected alternatives\n* commit path from accepted alternative into final trip plan state\n\nDetailed implementation expectations:\n\n# Alternative handling responsibilities:\n\n* preserve more than one proposed route alternative for the same request\n* allow exactly one chosen alternative to become the accepted route candidate in first version\n* mark non-selected alternatives as rejected or left unaccepted\n\n# Acceptance flow rules:\n\n* accepted alternative must run through the same deterministic routing and validation gates as any other route candidate\n* accepted alternative becomes the source for final persisted trip plan data only after validation passes\n* proposal metadata and rationale must remain traceable after acceptance\n\n# Technical constraints:\n\n* alternative acceptance must not mutate the final trip plan until the acceptance flow completes successfully\n* rejected alternatives should remain auditable if governance/audit layer is present\n* flow must be compatible with both UI review and future automation review policies\n\nAcceptance criteria:\n\n* one selected route alternative can be accepted and committed into final trip plan state\n* non-selected alternatives remain separate from the accepted plan\n* acceptance flow preserves validation and traceability rules",
          "labels": []
        },
        {
          "key": "HOB-130",
          "summary": "Subtask: Implement route alternative acceptance and commit flow for AI-generated proposals",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-130",
          "description": "Implement the alternative-route acceptance flow for HOB-103.\n\nDeliverables:\n\n* route alternative proposal structure handling\n* acceptance flow for one selected alternative\n* rejection handling for non-selected alternatives\n* commit path from accepted alternative into final trip plan state\n\nDetailed implementation expectations:\n\n# Alternative handling responsibilities:\n\n* preserve more than one proposed route alternative for the same request\n* allow exactly one chosen alternative to become the accepted route candidate in first version\n* mark non-selected alternatives as rejected or left unaccepted\n\n# Acceptance flow rules:\n\n* accepted alternative must run through the same deterministic routing and validation gates as any other route candidate\n* accepted alternative becomes the source for final persisted trip plan data only after validation passes\n* proposal metadata and rationale must remain traceable after acceptance\n\n# Technical constraints:\n\n* alternative acceptance must not mutate the final trip plan until the acceptance flow completes successfully\n* rejected alternatives should remain auditable if governance/audit layer is present\n* flow must be compatible with both UI review and future automation review policies\n\nAcceptance criteria:\n\n* one selected route alternative can be accepted and committed into final trip plan state\n* non-selected alternatives remain separate from the accepted plan\n* acceptance flow preserves validation and traceability rules",
          "labels": []
        },
        {
          "key": "HOB-131",
          "summary": "Subtask: Implement route alternative acceptance and commit flow for AI-generated proposals",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-131",
          "description": "Implement the alternative-route acceptance flow for HOB-103.\n\nDeliverables:\n\n* route alternative proposal structure handling\n* acceptance flow for one selected alternative\n* rejection handling for non-selected alternatives\n* commit path from accepted alternative into final trip plan state\n\nDetailed implementation expectations:\n\n# Alternative handling responsibilities:\n\n* preserve more than one proposed route alternative for the same request\n* allow exactly one chosen alternative to become the accepted route candidate in first version\n* mark non-selected alternatives as rejected or left unaccepted\n\n# Acceptance flow rules:\n\n* accepted alternative must run through the same deterministic routing and validation gates as any other route candidate\n* accepted alternative becomes the source for final persisted trip plan data only after validation passes\n* proposal metadata and rationale must remain traceable after acceptance\n\n# Technical constraints:\n\n* alternative acceptance must not mutate the final trip plan until the acceptance flow completes successfully\n* rejected alternatives should remain auditable if governance/audit layer is present\n* flow must be compatible with both UI review and future automation review policies\n\nAcceptance criteria:\n\n* one selected route alternative can be accepted and committed into final trip plan state\n* non-selected alternatives remain separate from the accepted plan\n* acceptance flow preserves validation and traceability rules",
          "labels": []
        },
        {
          "key": "HOB-132",
          "summary": "Subtask: Implement route alternative acceptance and commit flow for AI-generated proposals",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-132",
          "description": "Implement the alternative-route acceptance flow for HOB-103.\n\nDeliverables:\n\n* route alternative proposal structure handling\n* acceptance flow for one selected alternative\n* rejection handling for non-selected alternatives\n* commit path from accepted alternative into final trip plan state\n\nDetailed implementation expectations:\n\n# Alternative handling responsibilities:\n\n* preserve more than one proposed route alternative for the same request\n* allow exactly one chosen alternative to become the accepted route candidate in first version\n* mark non-selected alternatives as rejected or left unaccepted\n\n# Acceptance flow rules:\n\n* accepted alternative must run through the same deterministic routing and validation gates as any other route candidate\n* accepted alternative becomes the source for final persisted trip plan data only after validation passes\n* proposal metadata and rationale must remain traceable after acceptance\n\n# Technical constraints:\n\n* alternative acceptance must not mutate the final trip plan until the acceptance flow completes successfully\n* rejected alternatives should remain auditable if governance/audit layer is present\n* flow must be compatible with both UI review and future automation review policies\n\nAcceptance criteria:\n\n* one selected route alternative can be accepted and committed into final trip plan state\n* non-selected alternatives remain separate from the accepted plan\n* acceptance flow preserves validation and traceability rules",
          "labels": []
        },
        {
          "key": "HOB-133",
          "summary": "Subtask: Implement route alternative acceptance and commit flow for AI-generated proposals",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-133",
          "description": "Implement the alternative-route acceptance flow for HOB-103.\n\nDeliverables:\n\n* route alternative proposal structure handling\n* acceptance flow for one selected alternative\n* rejection handling for non-selected alternatives\n* commit path from accepted alternative into final trip plan state\n\nDetailed implementation expectations:\n\n# Alternative handling responsibilities:\n\n* preserve more than one proposed route alternative for the same request\n* allow exactly one chosen alternative to become the accepted route candidate in first version\n* mark non-selected alternatives as rejected or left unaccepted\n\n# Acceptance flow rules:\n\n* accepted alternative must run through the same deterministic routing and validation gates as any other route candidate\n* accepted alternative becomes the source for final persisted trip plan data only after validation passes\n* proposal metadata and rationale must remain traceable after acceptance\n\n# Technical constraints:\n\n* alternative acceptance must not mutate the final trip plan until the acceptance flow completes successfully\n* rejected alternatives should remain auditable if governance or audit layer is present\n* flow must be compatible with both UI review and future automation review policies\n\nAcceptance criteria:\n\n* one selected route alternative can be accepted and committed into final trip plan state\n* non-selected alternatives remain separate from the accepted plan\n* acceptance flow preserves validation and traceability rules",
          "labels": []
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "Hobbeast-mobile",
        "label": "GitHub / HenrikFaul/Hobbeast-mobile"
      }
    },
    {
      "id": "hob-event-lifecycle",
      "version": "mobile-android-v0.9.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "mobile-android",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-25",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "event_lifecycle"
      ],
      "releaseNotes": "Core event creation, editing and detail lifecycle baseline.",
      "deploymentComment": "Core event creation, editing and detail lifecycle baseline.",
      "jiraLinks": [
        {
          "key": "HOB-27",
          "summary": "Epic: Core event creation, editing and event detail lifecycle",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-27",
          "description": "Goal: fully cover Hobbeast's native event lifecycle so it can be rebuilt from Jira alone if needed.\n\nScope:\n\n* create event flow\n* edit event flow\n* event detail rendering\n* event participation actions\n* ownership rules and organizer controls\n\nSuccess criteria:\n\n* Hobbeast native event lifecycle is documented and decomposed into implementable work items\n\nImplementation backfill note:\n\nAndroid already moved create/edit validation, event detail posture, imported-vs-first-party separation, RSVP and waitlist alignment, and trip continuity materially forward. This epic is partially concretized by implementation.\n\nCross-surface follow-up:\n\nWeb parity story: HOB-199.",
          "labels": [
            "backlog",
            "core",
            "events",
            "hobbeast"
          ]
        },
        {
          "key": "HOB-32",
          "summary": "Story: Implement native event creation flow and validation rules",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-32",
          "description": "h1. Objective\n\nDefine a developer-ready native event creation flow for Hobbeast with extensibility for paid, private and organizer-grade events.\n\nh1. Functional requirements\n\nh2. Form sections\n\n# Basic info\n\n* title (required, 3..120)\n* short description (optional, max 280)\n* long description (optional, markdown/plain text safe rendering)\n* cover image URL/upload placeholder\n\n# Classification\n\n* category tree selection required\n* support category, subcategory and activity-level selection\n* store normalized category identifiers, not only display names\n\n# Time and visibility\n\n* event date required\n* start time required\n* end time optional\n* timezone resolved from user profile or browser locale\n* visibility type:\n** public\n** private\n** invite_only\n** early_access_limited\n\n# Location\n\n* city required\n* address optional\n* location autocomplete shared with profile flow\n* location precision toggle:\n** exact location visible to attendees\n** only approximate location visible publicly\n\n# Participation model\n\n* participation type:\n** free\n** paid\n** external_ticket\n* max capacity optional\n* waitlist enabled boolean\n* organizer notes optional (internal, not public)\n* entry window optional:\n** entry_start_at\n** entry_end_at\n\nh1. Validation rules\n\n* title required\n* at least one normalized category path required\n* city required\n* if {{participation_type = paid}}, event must support pricing/ticket config entity\n* if {{visibility = invite_only}}, invitation strategy must be selected later\n* if {{max_capacity}} is set, must be integer > 0\n* if both entry window fields present, {{entry_start_at < entry_end_at}}\n* if end time present, {{start_at < end_at}}\n\nh1. Data model notes\n\nSuggested backend fields:\n\n{noformat}Event {\n  id: uuid\n  title: string\n  short_description: string | null\n  description: string | null\n  category_path: string[]\n  visibility_type: 'public' | 'private' | 'invite_only' | 'early_access_limited'\n  participation_type: 'free' | 'paid' | 'external_ticket'\n  city: string\n  address: string | null\n  lat: number | null\n  lon: number | null\n  exact_location_visible: boolean\n  starts_at: timestamptz\n  ends_at: timestamptz | null\n  max_capacity: number | null\n  waitlist_enabled: boolean\n  organizer_notes: string | null\n  entry_start_at: timestamptz | null\n  entry_end_at: timestamptz | null\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Create event                                                 |\n+--------------------------------------------------------------+\n| Title *                     [______________________________] |\n| Short description           [______________________________] |\n| Long description            [..............................] |\n|                                                              |\n| Category *                  [Select categories >]           |\n| Visibility                  (o) Public ( ) Private          |\n|                             ( ) Invite-only ( ) Early access|\n|                                                              |\n| Date *      [2026-04-10]  Start * [19:00]  End [22:00]      |\n|                                                              |\n| City *                      [Budapest____________________]   |\n| Address                     [Autocomplete________________]   |\n| [x] Share exact address with attendees                       |\n|                                                              |\n| Participation              (o) Free ( ) Paid ( ) External   |\n| Capacity                    [ 50 ]   [x] Enable waitlist    |\n| Entry window                From [18:30] To [20:00]         |\n| Organizer notes             [internal notes..............]   |\n|                                                              |\n|                                    [Cancel] [Create Event]  |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* native create event flow supports free / paid / external ticket participation types\n* native create event flow supports public / private / invite-only / early-access-limited visibility\n* organizer notes are stored but not publicly rendered\n* entry window fields are supported and validated\n* category identifiers are stored in normalized form\n* no regression in existing category/location UX\n\nh1. Out of scope\n\n* actual payment collection\n* full ticket issuance\n* QR validation runtime",
          "labels": [
            "core",
            "create-event",
            "events",
            "hobbeast"
          ]
        },
        {
          "key": "HOB-33",
          "summary": "Story: Implement native event editing, ownership rules and event detail rendering",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-33",
          "description": "Cover the native Hobbeast event editing and event detail lifecycle.\n\nScope:\n\n* edit event flow\n* ownership and organizer permissions\n* event detail page rendering\n* join/unsubscribe actions from detail surfaces\n* status-aware controls for own vs external events\n\nAcceptance criteria:\n\n* the native event editing and detail lifecycle is fully described and implementable from Jira alone",
          "labels": [
            "core",
            "edit-event",
            "event-detail",
            "events",
            "hobbeast"
          ]
        },
        {
          "key": "HOB-53",
          "summary": "Subtask: Build native event creation form sections and client-side validation",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-53",
          "description": "Implement the create event UI sections for basic info, classification, time/visibility, location and participation model, including client-side validation rules from HOB-32.",
          "labels": []
        },
        {
          "key": "HOB-54",
          "summary": "Subtask: Persist native event payload including visibility, participation and location fields",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-54",
          "description": "Implement backend payload handling and database persistence for the HOB-32 native event creation contract, including visibility_type, participation_type, category_path, location fields, capacity and organizer_notes.",
          "labels": []
        },
        {
          "key": "HOB-55",
          "summary": "Subtask: Integrate shared address autocomplete and category tree into native event creation",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-55",
          "description": "Wire the shared address autocomplete component and normalized category tree selector into the create event flow so HOB-32 reuses the common location and classification contracts.",
          "labels": []
        },
        {
          "key": "HOB-163",
          "summary": "Design refresh: establish Hobbeast visual identity and token system",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-163",
          "description": "Define the redesign token system for Hobbeast including warm-neutral surfaces, accent palette, typography hierarchy, radius, elevation, interaction states and component standards. Deliver a reusable design contract that keeps discovery, organizer mode and reminders visually coherent.",
          "labels": [
            "design",
            "redesign",
            "ui-system",
            "visual-identity"
          ]
        },
        {
          "key": "HOB-167",
          "summary": "Design refresh: redesign event detail page with richer RSVP and community context",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-167",
          "description": "Refresh event detail with editorial hero, RSVP state block, capacity clarity, organizer quick actions, calendar/reminder surfaces and community-fit guidance panels.",
          "labels": [
            "community",
            "design",
            "event-detail",
            "rsvp"
          ]
        },
        {
          "key": "HOB-168",
          "summary": "Design refresh: rebuild create/edit event flow as multi-section event builder",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-168",
          "description": "Redesign create and edit event screens into a structured, elegant builder with section anchors, better summaries, wider layout, clearer validation and integrated location/participation blocks.",
          "labels": [
            "create-event",
            "design",
            "edit-event",
            "forms"
          ]
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "Hobbeast-mobile",
        "label": "GitHub / HenrikFaul/Hobbeast-mobile"
      }
    },
    {
      "id": "hob-rsvp-checkin",
      "version": "mobile-android-v1.0.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "mobile-android",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-26",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "rsvp_checkin"
      ],
      "releaseNotes": "RSVP, waitlist, ticketing and check-in lifecycle.",
      "deploymentComment": "RSVP, waitlist, ticketing and check-in lifecycle.",
      "jiraLinks": [
        {
          "key": "HOB-5",
          "summary": "Epic: RSVP, ticketing and check-in lifecycle",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-5",
          "description": "h1. Objective\n\nIntroduce a richer RSVP, ticketing-light and check-in-ready lifecycle for Hobbeast events.\n\nh1. Functional scope\n\n* support participation states beyond join/unsubscribe\n* support capacity-aware admission\n* support lightweight ticket and admission control extensions\n* provide a future-safe contract for QR / code-based check-in\n\nh1. Participation state model\n\nSupported states:\n\n* {{interested}}\n* {{going}}\n* {{waitlist}}\n* {{checked_in}}\n* {{cancelled}}\n* {{no_show}}\n\nRules:\n\n* {{going}} requires available capacity, unless organizer override exists\n* if capacity is full and waitlist enabled, new attendee enters {{waitlist}}\n* {{checked_in}} only valid from {{going}}\n* {{no_show}} only valid after event start/end workflow\n* organizer can manually transition {{waitlist -> going}}\n\nh1. Ticketing-light scope\n\n* support {{participation_type = external_ticket}}\n* support {{external_ticket_url}}\n* support {{ticket_token}} / {{invite_code}} placeholders for internal admission control\n* support future {{ticket_tier_id}} reference without implementing full payment now\n\nh1. Check-in scope\n\n* check-in method can be:\n** manual organizer check-in\n** QR token scan\n** invite code entry\n* check-in surface must validate:\n** event id\n** attendee identity / token\n** current participation status\n** duplicate check-in prevention\n\nh1. Suggested backend entities\n\n{noformat}EventParticipation {\n  id: uuid\n  event_id: uuid\n  user_id: uuid\n  status: 'interested' | 'going' | 'waitlist' | 'checked_in' | 'cancelled' | 'no_show'\n  joined_at: timestamptz\n  checked_in_at: timestamptz | null\n  invite_code: string | null\n  ticket_token: string | null\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}Event detail card\n+---------------------------------------------------+\n| Friday Board Game Night                           |\n| 18 / 24 spots filled                              |\n| Status: GOING                                     |\n|                                                   |\n| [Interested] [Going] [Leave]                      |\n| Waitlist enabled                                  |\n+---------------------------------------------------+\n\nOrganizer check-in view\n+---------------------------------------------------+\n| Check-in: Friday Board Game Night                 |\n+---------------------------------------------------+\n| Search attendee [________________________]        |\n| Or scan QR                                        |\n|                                                   |\n| John Doe          GOING        [Check in]         |\n| Anna Smith        WAITLIST     [Promote]          |\n+---------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* participation lifecycle supports interested / going / waitlist / checked_in / cancelled / no_show\n* waitlist promotion logic is possible\n* duplicate check-in is prevented\n* external ticket URL can be associated to an event\n* future ticket tiers can plug into this lifecycle without redesign",
          "labels": [
            "backlog",
            "GAP",
            "gap-analysis",
            "hobbeast",
            "rsvp",
            "ticketing"
          ]
        },
        {
          "key": "HOB-15",
          "summary": "Story: Add capacity and waitlist handling to event participation",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-15",
          "description": "h1. Objective\n\nDefine capacity enforcement and waitlist promotion behaviour for Hobbeast event participation.\n\nh1. Functional requirements\n\nh2. Capacity model\n\n* event can define {{max_capacity}}\n* event can define {{waitlist_enabled}}\n* effective free slots = {{max_capacity - going_count}}\n* {{interested}} users do not consume capacity\n* {{going}} users consume capacity\n* {{checked_in}} remains counted under admitted attendees\n\nh2. Entry rules\n\n* if free slot available and user confirms participation -> status {{going}}\n* if no free slot and waitlist enabled -> status {{waitlist}}\n* if no free slot and waitlist disabled -> show full-state error\n\nh2. Promotion rules\n\n* organizer can manually promote waitlist attendee to {{going}}\n* optional future auto-promotion hook can be supported when slot frees up\n* promotion must fail if no free slot exists and no override is allowed\n\nh2. Visibility rules\n\n* event detail page must show:\n** current admitted count\n** capacity limit\n** waitlist enabled state\n* organizer panel must show:\n** going count\n** waitlist count\n** remaining slots\n\nh1. Suggested data model fields\n\n{noformat}Event {\n  max_capacity: number | null\n  waitlist_enabled: boolean\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+---------------------------------------------------+\n| Friday Board Game Night                           |\n| 18 / 24 spots filled                              |\n| Waitlist: enabled                                 |\n|                                                   |\n| [Join]                                            |\n+---------------------------------------------------+\n\nFull state example\n+---------------------------------------------------+\n| 24 / 24 spots filled                              |\n| Waitlist available                                |\n| [Join waitlist]                                   |\n+---------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* capacity logic differentiates between interested and going users\n* waitlist entry works only when configured\n* organizer can see remaining slots and waitlist counts\n* UI communicates full/waitlist state clearly",
          "labels": [
            "capacity",
            "GAP",
            "hobbeast",
            "rsvp",
            "waitlist"
          ]
        },
        {
          "key": "HOB-16",
          "summary": "Story: Add richer RSVP states and participation lifecycle",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-16",
          "description": "h1. Objective\n\nDefine the full participation lifecycle state machine for Hobbeast event attendance beyond the current join/unsubscribe model.\n\nh1. Functional requirements\n\nh2. Supported states\n\n* {{interested}}\n* {{going}}\n* {{waitlist}}\n* {{checked_in}}\n* {{cancelled}}\n* {{no_show}}\n\nh2. Allowed transitions\n\n* default discovery action -> {{interested}}\n* {{interested -> going}}\n* {{interested -> cancelled}}\n* {{going -> cancelled}}\n* {{waitlist -> going}}\n* {{going -> checked_in}}\n* {{going -> no_show}} (after event time window)\n* {{checked_in -> cancelled}} not allowed in standard path\n\nh2. State semantics\n\n* {{interested}}: lightweight interest, no capacity reserved\n* {{going}}: confirmed slot, capacity reserved\n* {{waitlist}}: pending slot, no capacity reserved\n* {{checked_in}}: physically or logically admitted at event\n* {{cancelled}}: user/organizer removed participation\n* {{no_show}}: did not check in despite confirmed status\n\nh2. UI rules\n\n* event CTA area must render state-aware actions\n* status badge must be visible on event detail page and organizer attendee screen\n* own events must not show participation CTA as if user were an attendee-only user\n\nh1. Suggested state machine contract\n\n{noformat}type ParticipationStatus =\n  | 'interested'\n  | 'going'\n  | 'waitlist'\n  | 'checked_in'\n  | 'cancelled'\n  | 'no_show'{noformat}\n\nh1. UI wireframe\n\n{noformat}Event detail status block\n+---------------------------------------------------+\n| Your status: INTERESTED                           |\n|                                                   |\n| [Mark as going] [Remove interest]                 |\n+---------------------------------------------------+\n\nWaitlist example\n+---------------------------------------------------+\n| Your status: WAITLIST                             |\n| You will be notified if a slot becomes available. |\n| [Leave waitlist]                                  |\n+---------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* each participation state has explicit meaning\n* allowed state transitions are documented and enforceable\n* event UI can render state-specific controls and labels consistently",
          "labels": [
            "GAP",
            "hobbeast",
            "lifecycle",
            "rsvp"
          ]
        },
        {
          "key": "HOB-40",
          "summary": "Story: Add paid event pricing model and ticket tier configuration",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-40",
          "description": "h1. Objective\n\nSupport paid events with configurable ticket tiers, while remaining compatible with free and external-ticket event types.\n\nh1. Functional requirements\n\n* allow event organizer to define one or more ticket tiers\n* tier fields:\n** name\n** description\n** price_amount\n** currency\n** quantity_limit\n** sale_start_at\n** sale_end_at\n** visibility (public / hidden / early_access_only)\n* support free tier as explicit zero-price tier if needed\n* support sorting tiers by display order\n\nh1. Data model notes\n\n{noformat}EventTicketTier {\n  id: uuid\n  event_id: uuid\n  name: string\n  description: string | null\n  price_amount: number\n  currency: string\n  quantity_limit: number | null\n  quantity_sold: number\n  sale_start_at: timestamptz | null\n  sale_end_at: timestamptz | null\n  visibility: 'public' | 'hidden' | 'early_access_only'\n  display_order: number\n}{noformat}\n\nh1. Validation rules\n\n* {{price_amount >= 0}}\n* {{quantity_limit}} nullable but if present must be > 0\n* if both sale dates present, {{sale_start_at < sale_end_at}}\n* hidden tiers cannot be visible in public event page by default\n\nh1. UI wireframe\n\n{noformat}Ticket tiers\n+---------------------------------------------------+\n| [Add tier]                                        |\n+---------------------------------------------------+\n| General admission                                 |\n| Price: [4500 HUF]  Qty: [100]                     |\n| Sale: [2026-04-01 10:00] -> [2026-04-10 18:00]    |\n| Visibility: (o) Public ( ) Hidden ( ) Early only  |\n|                                    [Save] [Delete]|\n+---------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizer can configure multiple ticket tiers per paid event\n* hidden and early-access-only tiers are supported structurally\n* ticket tiers can later be connected to payment flow without redesign",
          "labels": [
            "GAP",
            "pricing",
            "ticketing",
            "tiers",
            "wireframe"
          ]
        },
        {
          "key": "HOB-41",
          "summary": "Story: Build QR and invite-code based organizer check-in admin flow",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-41",
          "description": "h1. Objective\n\nProvide a concrete organizer-facing check-in UI and backend validation flow for event admission.\n\nh1. Functional requirements\n\n* organizer can open check-in screen for owned event\n* attendee lookup methods:\n** text search by name/email\n** QR code scan\n** invite code input\n* organizer actions:\n** check in attendee\n** undo check-in (with audit trail)\n** promote from waitlist where applicable\n* validation checks:\n** event ownership / permission\n** attendee exists for event\n** attendee status is valid for check-in\n** duplicate check-in blocked unless explicit override path exists\n\nh1. Backend notes\n\n* check-in write should create audit record\n* QR and invite code resolution should map to event participation record\n\nSuggested audit entity:\n\n{noformat}CheckInAudit {\n  id: uuid\n  event_id: uuid\n  participation_id: uuid\n  action: 'check_in' | 'undo_check_in' | 'promote_waitlist'\n  actor_user_id: uuid\n  created_at: timestamptz\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+---------------------------------------------------+\n| Check-in admin                                    |\n+---------------------------------------------------+\n| Search attendee [________________________] [Find] |\n| Invite code     [______________]         [Apply]  |\n| [ Start QR scan ]                                 |\n+---------------------------------------------------+\n| John Doe      GOING        [Check in]             |\n| Anna Smith    CHECKED_IN   [Undo]                 |\n| Mark Lee      WAITLIST     [Promote]              |\n+---------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizer can check in eligible attendees via search, QR, or code\n* every check-in action writes auditable history\n* duplicate or invalid check-ins are blocked with clear error handling",
          "labels": [
            "admin",
            "checkin",
            "GAP",
            "invite-code",
            "qr",
            "wireframe"
          ]
        },
        {
          "key": "HOB-42",
          "summary": "Story: Define payment provider integration contract for paid events",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-42",
          "description": "h1. Objective\n\nDefine the integration contract for future payment provider support for paid Hobbeast events.\n\nh1. Functional requirements\n\n* payment session can be initiated from paid ticket tier selection\n* payment provider abstraction should not hardcode a single provider into event UI\n* minimum supported payment states:\n** pending\n** authorized\n** paid\n** failed\n** refunded\n* payment success must be able to reserve or confirm participation according to business rules\n\nh1. Suggested integration contract\n\n{noformat}PaymentSession {\n  id: uuid\n  event_id: uuid\n  user_id: uuid\n  ticket_tier_id: uuid\n  provider: 'stripe' | 'other'\n  provider_session_id: string\n  status: 'pending' | 'authorized' | 'paid' | 'failed' | 'refunded'\n  amount: number\n  currency: string\n  created_at: timestamptz\n}{noformat}\n\nh1. UX flow\n\n# user selects tier\n# user clicks Pay\n# frontend requests payment session from backend\n# provider checkout opens\n# callback/webhook updates payment state\n# participation/ticket state updated accordingly\n\nh1. UI wireframe\n\n{noformat}Paid event checkout\n+---------------------------------------------------+\n| Choose your ticket                                |\n| (o) General admission - 4500 HUF                  |\n| ( ) VIP - 9000 HUF                                |\n|                                                   |\n|                    [Continue to payment]          |\n+---------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* payment integration is described as a provider-agnostic contract\n* ticket tier selection and payment session creation are clearly separated\n* payment states are explicit and usable by later implementation",
          "labels": [
            "GAP",
            "integration",
            "payment",
            "ticketing",
            "wireframe"
          ]
        },
        {
          "key": "HOB-58",
          "summary": "Subtask: Build organizer check-in admin screen with search and invite code input",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-58",
          "description": "Implement the check-in admin UI for organizers, including attendee search, invite code input and result list rendering.",
          "labels": []
        },
        {
          "key": "HOB-59",
          "summary": "Subtask: Implement check-in action handling and audit writes",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-59",
          "description": "Implement backend check-in operations, including validate-and-check-in, undo check-in and audit record creation for organizer actions.",
          "labels": []
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "Hobbeast-mobile",
        "label": "GitHub / HenrikFaul/Hobbeast-mobile"
      }
    },
    {
      "id": "hob-organizer-ops",
      "version": "mobile-android-v1.1.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "mobile-android",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-27",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "organizer_ops"
      ],
      "releaseNotes": "Organizer mode, attendee roster operations and operational flows.",
      "deploymentComment": "Organizer mode, attendee roster operations and operational flows.",
      "jiraLinks": [
        {
          "key": "HOB-2",
          "summary": "Epic: Organizer tools and attendee operations",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-2",
          "description": "Goal: extend Hobbeast with organizer-focused capabilities inspired by InviteM, without regressing the current community-first experience.\n\nScope:\n\n* explicit Organizer mode / organizer-facing surfaces and permissions\n* attendee management\n* capacity and waitlist\n* event communication and reminders\n* check-in ready event lifecycle\n* organizer-specific dashboard surfaces\n\nSuccess criteria:\n\n* organizers can manage attendees and event participation more effectively\n* an explicit organizer-facing operating mode can be introduced without harming the current Hobbeast simplicity\n* event operations are possible without losing Hobbeast's current simplicity\n\nImplementation backfill note:\n\nThe Android implementation track already pushed forward attendee roster handling, status filters, waitlist posture, check-in runtime, invite-code handling, audit-aware operations, first organizer run guidance and organizer operational readouts. This epic is therefore partially concretized by implementation.\n\nCross-surface follow-up:\n\nWeb must align to the same participant-state, check-in and organizer runtime semantics. Follow-up story: HOB-202.",
          "labels": [
            "backlog",
            "GAP",
            "gap-analysis",
            "hobbeast",
            "organizer"
          ]
        },
        {
          "key": "HOB-14",
          "summary": "Story: Add attendee management tools for event organizers",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-14",
          "description": "h1. Objective\n\nProvide a concrete organizer-facing attendee management view for a single event with filterable participant states and actionable row-level controls.\n\nh1. Functional requirements\n\nh2. Attendee list surface\n\n* organizer can open attendee management from owned event detail page or Organizer mode\n* attendee list columns:\n** display_name\n** email (if available and permission-safe)\n** participation_status\n** joined_at\n** checked_in_at\n** ticket tier / access type if present\n* list must support pagination and server-side filtering for large events\n\nh2. Filters\n\n* status filters:\n** all\n** interested\n** going\n** waitlist\n** checked_in\n** cancelled\n** no_show\n* free-text search by display_name / email\n* optional sort by joined_at / status / checked_in_at\n\nh2. Row actions\n\n* promote waitlist -> going\n* move going -> cancelled\n* undo check-in\n* open attendee detail drawer\n* add organizer note on attendee record\n\nh2. Attendee detail drawer\n\nRequired blocks:\n\n* basic identity summary\n* participation timeline\n* check-in history\n* organizer notes\n* future messaging shortcuts\n\nh1. Backend notes\n\nSuggested entity extensions:\n\n{noformat}EventParticipation {\n  id: uuid\n  event_id: uuid\n  user_id: uuid\n  status: 'interested' | 'going' | 'waitlist' | 'checked_in' | 'cancelled' | 'no_show'\n  joined_at: timestamptz\n  checked_in_at: timestamptz | null\n  organizer_note: string | null\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+------------------------------------------------------------------+\n| Attendees: Friday Board Game Night                               |\n+------------------------------------------------------------------+\n| Search [____________________]  Status [Going v]  Sort [Joined v] |\n+------------------------------------------------------------------+\n| John Doe    john@example.com     GOING       2026-04-01 [Open]   |\n| Anna Smith  anna@example.com     WAITLIST    2026-04-02 [Promote]|\n| Mark Lee    mark@example.com     CHECKED_IN  2026-04-02 [Undo]   |\n+------------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizer can filter and search participants by state\n* organizer can trigger row-level actions without leaving attendee screen\n* attendee detail drawer exposes timeline and organizer note state\n* pagination/filtering works for larger attendee lists",
          "labels": [
            "attendees",
            "GAP",
            "hobbeast",
            "organizer"
          ]
        },
        {
          "key": "HOB-17",
          "summary": "Story: Add organizer-side attendee detail workspace and operator actions",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-17",
          "description": "h1. Objective\n\nSeparate the attendee detail/operator workspace from the attendee list management screen, so HOB-14 covers list-level management and this story covers the detailed operator workspace.\n\nh1. Scope split from HOB-14\n\n* HOB-14 = attendee list, filtering, row actions, pagination\n* HOB-17 = attendee detail workspace, timeline, operator actions, internal notes, history\n\nh1. Functional requirements\n\nh2. Attendee detail workspace\n\nOpen from attendee row action or organizer check-in surface.\n\nRequired panels:\n\n* identity summary\n* participation status card\n* timeline of participation changes\n* check-in audit history\n* internal organizer notes\n* quick actions\n\nh2. Quick actions\n\n* promote waitlist -> going\n* mark cancelled\n* mark no_show\n* add or edit organizer note\n* open message composer prefilled to this attendee (future-ready)\n\nh2. Timeline / audit\n\nShow chronological entries:\n\n* joined event\n* moved to waitlist\n* promoted to going\n* checked in\n* marked no_show\n* message sent (future-ready hook)\n\nh1. Suggested backend entities\n\n{noformat}ParticipationAudit {\n  id: uuid\n  participation_id: uuid\n  action: 'joined' | 'waitlisted' | 'promoted' | 'checked_in' | 'cancelled' | 'no_show' | 'note_updated'\n  actor_user_id: uuid | null\n  created_at: timestamptz\n  metadata: jsonb | null\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Attendee workspace: John Doe                                  |\n+--------------------------------------------------------------+\n| Status: GOING                                                 |\n| Joined: 2026-04-01 18:12                                      |\n| Checked in: -                                                 |\n| Note: [Prefers late arrival................................]  |\n| [Save note]                                                   |\n+--------------------------------------------------------------+\n| Quick actions                                                 |\n| [Promote] [Cancel] [Mark no-show] [Message later]            |\n+--------------------------------------------------------------+\n| Timeline                                                      |\n| 2026-04-01 18:12 Joined                                       |\n| 2026-04-02 09:15 Organizer note updated                       |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* attendee detail workspace is distinct from attendee list surface\n* organizer can inspect participation history and internal notes\n* operator actions create audit history entries where relevant",
          "labels": [
            "attendees",
            "GAP",
            "hobbeast",
            "organizer"
          ]
        },
        {
          "key": "HOB-18",
          "summary": "Story: Add event update, reminder and attendee communication tools",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-18",
          "description": "h1. Objective\n\nCreate a developer-ready organizer communication module for event updates and reminders.\n\nh1. Functional requirements\n\nh2. Message types\n\n* reminder\n* logistics_update\n* event_update\n* cancellation\n* custom_message\n\nh2. Audience targeting\n\n* all attendees\n* going\n* waitlist\n* checked_in\n* no_show\n* manual selection (future-ready)\n\nh2. Trigger modes\n\n* immediate send\n* scheduled reminder\n* event-relative reminder\n** X hours before start\n** X days before start\n\nh2. Message history\n\n* all sent messages must be stored per event\n* each history item must include:\n** message type\n** audience filter\n** created_at\n** sent_by\n** delivery state summary\n\nh2. Delivery states\n\n* draft\n* scheduled\n* sent\n* partially_failed\n* failed\n\nh1. Data model notes\n\n{noformat}EventMessage {\n  id: uuid\n  event_id: uuid\n  message_type: 'reminder' | 'logistics_update' | 'event_update' | 'cancellation' | 'custom_message'\n  audience_filter: 'all' | 'going' | 'waitlist' | 'checked_in' | 'no_show'\n  subject: string | null\n  body: string\n  delivery_state: 'draft' | 'scheduled' | 'sent' | 'partially_failed' | 'failed'\n  scheduled_for: timestamptz | null\n  actor_user_id: uuid\n  created_at: timestamptz\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Event communications                                          |\n+--------------------------------------------------------------+\n| Type [Reminder v] Audience [Going v]                         |\n| Schedule [Send now v]                                        |\n| Subject [Optional subject______________________________]      |\n| Body    [................................................]    |\n|                                              [Send message]   |\n+--------------------------------------------------------------+\n| Message history                                               |\n| Reminder   Going   Sent        2026-04-10 09:00              |\n| Update     All     Scheduled   2026-04-11 12:00              |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizer can compose and send event-scoped messages by audience segment\n* organizer can schedule reminders relative to the event\n* sent and scheduled messages appear in event message history\n* message delivery state is explicitly stored",
          "labels": [
            "communication",
            "GAP",
            "hobbeast",
            "organizer",
            "reminders"
          ]
        },
        {
          "key": "HOB-38",
          "summary": "Story: Introduce explicit Organizer mode navigation and permissions model",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-38",
          "description": "h1. Objective\n\nCreate an explicit organizer-facing operating mode so users who own events can access organizer tools without overloading the default community discovery UX.\n\nh1. Functional requirements\n\n* show Organizer mode entry only for users with at least one owned event or organizer capability\n* organizer mode entry points:\n** profile menu switch\n** event detail quick action for owned events\n* organizer mode surfaces:\n** My events\n** Attendees\n** Check-in\n** Messages\n** Analytics\n* organizer mode must not replace the default discovery-first home for normal users\n\nh1. Permissions model\n\n* organizer-only actions require event ownership or organizer role assignment\n* non-organizers must not see organizer controls for foreign events\n* organizer mode visibility should be claim-based or ownership-derived\n\nh1. Suggested frontend contract\n\n{noformat}type AppMode = 'community' | 'organizer'\n\nOrganizerCapability {\n  can_manage_events: boolean\n  can_check_in: boolean\n  can_message_attendees: boolean\n  can_view_event_analytics: boolean\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}Top nav / profile menu\n+--------------------------------+\n| Henrik Faul                    |\n| ------------------------------ |\n| Community mode                 |\n| Organizer mode   [switch]      |\n| Profile                        |\n| Sign out                       |\n+--------------------------------+\n\nOrganizer dashboard shell\n+--------------------------------------------------+\n| Organizer mode                                   |\n| [My events] [Attendees] [Check-in] [Messages]    |\n| [Analytics]                                      |\n+--------------------------------------------------+\n| Event cards / stats / organizer tools            |\n+--------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizer mode is only visible for eligible users\n* organizer mode and community mode can coexist without route confusion\n* organizer-only permissions are enforced in UI and backend",
          "labels": [
            "GAP",
            "mode",
            "organizer",
            "permissions",
            "ux",
            "wireframe"
          ]
        },
        {
          "key": "HOB-43",
          "summary": "Story: Add attendee export and segmented organizer messaging workflow",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-43",
          "description": "h1. Objective\n\nAllow organizers to export attendee data and send segmented communications to participant subsets.\n\nh1. Functional requirements\n\nh2. Export\n\n* export attendee list by event\n* supported export filters:\n** all attendees\n** going\n** waitlist\n** checked_in\n** no_show\n* minimum export fields:\n** display_name\n** email\n** participation_status\n** joined_at\n** checked_in_at\n* export formats:\n** CSV\n** future XLSX-ready contract optional\n\nh2. Segmented messaging\n\n* organizer can target message audience by status segment\n* organizer can compose:\n** event update\n** reminder\n** logistics update\n** cancellation message\n* store message history per event\n\nh1. Data model notes\n\n{noformat}EventMessage {\n  id: uuid\n  event_id: uuid\n  audience_filter: 'all' | 'going' | 'waitlist' | 'checked_in' | 'no_show'\n  message_type: 'update' | 'reminder' | 'logistics' | 'cancellation'\n  subject: string | null\n  body: string\n  actor_user_id: uuid\n  created_at: timestamptz\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}Organizer attendees\n+--------------------------------------------------------------+\n| Attendees                                     [Export CSV]   |\n+--------------------------------------------------------------+\n| Filter: [All v] [Going v] [Waitlist v] [Checked-in v]        |\n|                                                              |\n| John Doe        GOING         john@example.com               |\n| Anna Smith      WAITLIST      anna@example.com               |\n+--------------------------------------------------------------+\n| Message audience: [Going v]                                  |\n| Type: [Reminder v]                                           |\n| Body: [..................................................]   |\n|                                            [Send message]    |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizers can export attendee lists filtered by participation status\n* organizers can send segmented messages to attendee subsets\n* sent messages are stored in event-level history",
          "labels": [
            "export",
            "GAP",
            "messaging",
            "organizer",
            "wireframe"
          ]
        },
        {
          "key": "HOB-56",
          "summary": "Subtask: Build attendee list UI with filters and sorting",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-56",
          "description": "Implement the organizer attendee list screen with status filters, search and sorting.",
          "labels": []
        },
        {
          "key": "HOB-57",
          "summary": "Subtask: Implement attendee row actions and attendee detail drawer entry",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-57",
          "description": "Add row-level organizer actions such as promote, cancel and undo check-in, and open the attendee detail workspace from the attendee list.",
          "labels": []
        },
        {
          "key": "HOB-64",
          "summary": "Subtask: Build event communications composer and message history UI",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-64",
          "description": "Implement the organizer communications UI with message type selector, audience selector, schedule mode and event-level message history list.",
          "labels": []
        },
        {
          "key": "HOB-65",
          "summary": "Subtask: Implement event message persistence and delivery state handling",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-65",
          "description": "Implement backend persistence for event messages, including audience filter, message type, scheduled time and delivery state transitions.",
          "labels": []
        },
        {
          "key": "HOB-70",
          "summary": "Subtask: Implement audience segment resolution for event messaging",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-70",
          "description": "Resolve attendee segments such as all, going, waitlist, checked-in and no-show into concrete recipient sets for organizer messages and reminders.",
          "labels": []
        },
        {
          "key": "HOB-76",
          "summary": "Subtask: Implement reminder scheduling and delivery state updates",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-76",
          "description": "Implement scheduled reminder execution and update message delivery states for event communications.",
          "labels": []
        },
        {
          "key": "HOB-169",
          "summary": "Organizer mode UX: harmonize organizer shell with main Hobbeast brand",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-169",
          "description": "Redesign organizer mode shell and navigation so My events, Attendees, Check-in, Messages and Analytics feel like the same product brand rather than a separate admin tool.",
          "labels": [
            "design",
            "navigation",
            "organizer-mode"
          ]
        },
        {
          "key": "HOB-170",
          "summary": "Organizer UX: redesign attendee management and attendee workspace surfaces",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-170",
          "description": "Deliver a cleaner attendee list, row actions, export action, status filters and attendee detail workspace drawer aligned with the new visual system.",
          "labels": [
            "attendees",
            "design",
            "organizer"
          ]
        },
        {
          "key": "HOB-171",
          "summary": "Organizer UX: redesign check-in admin for fast operational use",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-171",
          "description": "Redesign the check-in admin screen for quick search, invite code handling, QR placeholder flow, status readability and strong operational feedback.",
          "labels": [
            "checkin",
            "design",
            "organizer"
          ]
        },
        {
          "key": "HOB-179",
          "summary": "Hub intelligence: add event creation suggestions informed by latent community demand",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-179",
          "description": "Objective:\nUse hidden-hub and scene-demand signals to help organizers create better-fitting events, not to let the system create formulaic sameness.\n\nRefined product idea:\nThe feature should suggest opportunity spaces, not auto-generate final events. It should help answer:\n\n* what kind of event has demand here?\n* for whom?\n* at what rhythm, size and timing?\n* what is missing in the local scene?\n\nSuggested recommendation outputs:\n\n* recommended format (workshop, meetup, social, sports, family-friendly, etc.)\n* ideal size band\n* timing recommendation (weekday / time window)\n* locality recommendation (district, radius, venue archetype)\n* scene-fit note\n* confidence level\n* rationale summary\n\nExamples:\n\n* 'Strong opportunity for a small Thursday board game meetup in District X'\n* 'Growing demand for beginner-friendly creative workshops within 5 km'\n\nGuardrails:\n\n* recommendations must stay advisory, not mandatory\n* no individual user or hidden hub membership should be revealed\n* avoid overfitting to only existing demand; allow exploratory/community-building formats too\n* preserve room for organizer taste, experimentation and mission\n\nAcceptance criteria:\n\n* the system can express event ideas using scene, format, size, time and locality\n* recommendations include confidence and rationale\n* the feature remains internal / organizer-side in first phase\n* recommendations support scene-building, not just short-term optimization",
          "labels": [
            "community",
            "create-event",
            "hubs",
            "organizer"
          ]
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "Hobbeast-mobile",
        "label": "GitHub / HenrikFaul/Hobbeast-mobile"
      }
    },
    {
      "id": "hob-organizer-insights",
      "version": "mobile-android-v1.2.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "mobile-android",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-28",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "organizer_insights"
      ],
      "releaseNotes": "Organizer messaging, analytics, insights and communication surfaces.",
      "deploymentComment": "Organizer messaging, analytics, insights and communication surfaces.",
      "jiraLinks": [
        {
          "key": "HOB-6",
          "summary": "Epic: Organizer analytics, insights and communication",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-6",
          "description": "Goal: give organizers measurable insight and communication tools without turning Hobbeast into a heavy backoffice product.\n\nScope:\n\n* event performance dashboard\n* source attribution and conversion insights\n* attendee communication tools\n* reminder and update messaging\n* organizer-friendly summaries\n\nSuccess criteria:\n\n* organizers can understand event performance and communicate with attendees from the platform\n\nImplementation backfill note:\n\nThe Android implementation track already introduced organizer message composition posture, delivery-state framing, analytics runtime banners, source-aware readouts, health classification and operational empty-state handling. The backend bootstrap also introduced organizer messaging and analytics tables/functions as shared contract.\n\nCross-surface follow-up:\n\nWeb must align to the same messaging, delivery-state and analytics semantics. Follow-up story: HOB-203.",
          "labels": [
            "analytics",
            "backlog",
            "GAP",
            "gap-analysis",
            "hobbeast",
            "organizer"
          ]
        },
        {
          "key": "HOB-19",
          "summary": "Story: Add organizer event performance dashboard",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-19",
          "description": "h1. Objective\n\nProvide a developer-ready organizer analytics dashboard for native and external-source events.\n\nh1. Functional requirements\n\nh2. KPI cards\n\n* total views\n* unique viewers\n* detail page opens\n* join clicks / participation attempts\n* confirmed going count\n* waitlist count\n* checked-in count\n* no-show count\n\nh2. Derived metrics\n\n* view -> detail CTR\n* detail -> join conversion\n* save ratio (if save/favorite interaction exists)\n* dropout ratio (viewed but did not join)\n* attendance rate = checked_in / going\n\nh2. Breakdowns\n\n* by source:\n** hobbeast_native\n** eventbrite\n** ticketmaster\n** seatgeek\n** other_external\n* by category / subcategory\n* by geo (city / district if available)\n* by time window\n\nh2. Audience insights (privacy-safe)\n\n* aggregated attendee interests/categories\n* aggregated joined-history affinities\n* no raw PII-heavy demographic output in first version\n\nh1. Suggested backend metrics entities\n\n{noformat}EventAnalyticsDaily {\n  id: uuid\n  event_id: uuid\n  date: date\n  source: string | null\n  views: number\n  detail_opens: number\n  join_clicks: number\n  going_count: number\n  waitlist_count: number\n  checked_in_count: number\n  no_show_count: number\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+----------------------------------------------------------------+\n| Organizer analytics: Friday Board Game Night                    |\n+----------------------------------------------------------------+\n| [Views 1240] [Detail opens 640] [Going 82] [Checked-in 61]     |\n| [CTR 51.6%] [Join conv 12.8%] [Attendance 74.3%]               |\n+----------------------------------------------------------------+\n| Breakdown tabs: [Source] [Category] [Geo] [Timeline]           |\n+----------------------------------------------------------------+\n| Source breakdown                                                |\n| Hobbeast        420 views   36 joins                            |\n| Ticketmaster    500 views   21 joins                            |\n| Eventbrite      320 views   25 joins                            |\n+----------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizer can see core performance KPIs on a dedicated dashboard\n* dashboard supports source, category and geo breakdowns\n* save ratio / dropout / attendance rate are explicitly defined\n* dashboard works for both native and external-origin events where data exists",
          "labels": [
            "analytics",
            "GAP",
            "hobbeast",
            "organizer"
          ]
        },
        {
          "key": "HOB-24",
          "summary": "Story: Add source attribution and conversion insight to organizer analytics",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-24",
          "description": "h1. Objective\n\nDefine source attribution and conversion analytics so organizers can understand where event interest and participation are coming from.\n\nh1. Functional requirements\n\nh2. Attribution dimensions\n\n* source_platform:\n** hobbeast_native\n** eventbrite\n** ticketmaster\n** seatgeek\n** universe\n** tickettailor\n** direct/unknown\n* source_surface:\n** home\n** explore\n** categories\n** for_me\n** external_list\n** venue_profile\n** shared_link\n\nh2. Metrics\n\n* source-level views\n* detail opens by source\n* join clicks by source\n* confirmed going by source\n* waitlist by source\n* checked_in by source\n* derived conversion rates per source\n\nh2. Event model impact\n\n* each measurable event interaction should be trackable with event_id + source dimensions\n* attribution should support both native and external-origin event records\n\nh1. Suggested backend entity\n\n{noformat}EventInteractionAttribution {\n  id: uuid\n  event_id: uuid\n  source_platform: string | null\n  source_surface: string | null\n  interaction_type: 'view' | 'detail_open' | 'join_click' | 'going' | 'waitlist' | 'checked_in'\n  created_at: timestamptz\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Source attribution                                            |\n+--------------------------------------------------------------+\n| Hobbeast native   420 views   36 joins   8.6% conv           |\n| Ticketmaster      500 views   21 joins   4.2% conv           |\n| Eventbrite        320 views   25 joins   7.8% conv           |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* source_platform and source_surface are explicitly defined attribution dimensions\n* source-based conversion can be calculated from tracked interactions\n* source attribution works for mixed native/external discovery journeys",
          "labels": [
            "analytics",
            "attribution",
            "GAP",
            "hobbeast"
          ]
        },
        {
          "key": "HOB-60",
          "summary": "Subtask: Build organizer analytics KPI cards and top-level dashboard view",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-60",
          "description": "Implement the organizer analytics UI with top-level KPI cards for views, detail opens, joins, going, checked-in and attendance rate.",
          "labels": []
        },
        {
          "key": "HOB-61",
          "summary": "Subtask: Implement source, category and geo breakdown tabs in organizer analytics",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-61",
          "description": "Build the analytics breakdown surfaces for source, category and geo dimensions, including summary tables and charts where appropriate.",
          "labels": []
        },
        {
          "key": "HOB-62",
          "summary": "Subtask: Implement analytics data aggregation and derived metric calculations",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-62",
          "description": "Build the backend aggregation logic for analytics KPIs and derived metrics such as CTR, join conversion, attendance rate, save ratio and dropout rate.",
          "labels": []
        },
        {
          "key": "HOB-172",
          "summary": "Organizer UX: redesign event communications and reminder composition",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-172",
          "description": "Create a refined message composer and history surface for reminders, updates and segmented attendee messaging, keeping scheduling and delivery states readable.",
          "labels": [
            "design",
            "messaging",
            "organizer",
            "reminders"
          ]
        },
        {
          "key": "HOB-173",
          "summary": "Organizer UX: redesign analytics dashboard and source breakdown surfaces",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-173",
          "description": "Create a redesigned organizer analytics surface with KPI hierarchy, source breakdown storytelling and calmer operational density.",
          "labels": [
            "analytics",
            "design",
            "organizer"
          ]
        },
        {
          "key": "HOB-178",
          "summary": "Hub intelligence: expose organizer-facing anonymized demand insights",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-178",
          "description": "Objective:\nTurn hidden-hub intelligence into organizer-visible demand insight without exposing personal assignment or making the output feel like surveillance.\n\nWhat organizers should learn:\n\n* which scene is strengthening\n* what format has latent demand\n* where local demand is concentrated\n* which day/time windows have the strongest activation potential\n* whether current supply is underserving a scene\n\nWhat organizers should never see:\n\n* who is inside a hidden hub\n* individual-level inferred labels\n* overly precise demographic segmentation from hidden logic\n\nRecommended insight blocks:\n\n* demand by scene or format\n* demand by neighborhood / travel band\n* demand by time rhythm\n* repeat-attendance and recurrence potential\n* confidence / sample strength indicator\n* caution flag when signal is weak or noisy\n\nCopy and UI principles:\n\n* aggregate, not individual\n* scenario language like 'strong potential for...' or 'growing interest in...'\n* confidence shown as directional, not over-precise\n* preserve creative agency for the organizer; do not over-automate decision making\n\nAcceptance criteria:\n\n* organizers can see anonymized demand patterns that help planning\n* insight language is aggregate and privacy-safe\n* no hidden-hub membership is exposed\n* weak-signal scenarios are visibly marked as exploratory",
          "labels": [
            "analytics",
            "community",
            "hubs",
            "organizer"
          ]
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "Hobbeast-mobile",
        "label": "GitHub / HenrikFaul/Hobbeast-mobile"
      }
    },
    {
      "id": "hob-community-intelligence",
      "version": "mobile-android-v1.3.0",
      "status": "current",
      "releaseState": "released",
      "surfaces": [
        "mobile-android",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-03-29",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "community_intelligence"
      ],
      "releaseNotes": "Hidden hub intelligence, community pulse and organizer-demand insight baseline.",
      "deploymentComment": "Hidden hub intelligence, community pulse and organizer-demand insight baseline.",
      "jiraLinks": [
        {
          "key": "HOB-162",
          "summary": "Epic: Hidden hub intelligence and community activation foundation",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-162",
          "description": "Refined epic goal:\nBuild a privacy-safe hidden hub intelligence layer that helps Hobbeast strengthen local scenes, recurring participation and organizer decision-making without exposing premature, opaque or high-stakes segmentation to users.\n\nWhy this epic matters:\nResearch and benchmark review show that successful event/community products combine three things:\n\n* emotionally legible discovery and belonging cues\n* operationally strong organizer workflows\n* continuity mechanisms that turn isolated events into recurring scenes\n\nHidden hubs should support that continuity layer.\n\nScope:\n\n* hidden hub domain model and lifecycle\n* confidence scoring and underserved-scene detection\n* privacy-safe community pulse surfaces\n* anonymized organizer demand insight\n* hub-backed event opportunity suggestions\n* future opt-in path from internal hubs to explicit communities\n* governance, review and safeguards\n\nNon-goals for phase 1:\n\n* no visible user-facing 'you belong to hub X' messaging\n* no hard gating of access based on hidden hub assignment\n* no consequential or opaque automated decisions about people\n* no use of sensitive traits as primary clustering keys\n\nDesign principles:\n\n# Internal first: hidden hubs start as internal community intelligence.\n# Low stakes: hubs may shape relevance and programming ideas, but not silently determine major outcomes.\n# Belonging over classification: the value is better scenes, rituals and continuity, not labels.\n# Consent later: if hidden structure ever becomes visible, the transition must be opt-in.\n# Reviewability: hub logic, confidence and exclusions need governance.\n\nSuccess criteria:\n\n* Hobbeast can detect meaningful latent scenes and recurring demand pockets\n* organizers get useful, anonymized demand signals\n* users experience stronger relevance and continuity without creepy targeting\n* the product preserves trust while gaining community intelligence\n\nImplementation backfill note:\n\nAndroid and backend bootstrap already moved hidden-hub, community-pulse and organizer-insight posture forward enough that this epic is partially concretized by implementation.\n\nCross-surface follow-up:\n\nWeb parity story: HOB-205.",
          "labels": [
            "community",
            "epic",
            "hubs",
            "strategic"
          ]
        },
        {
          "key": "HOB-181",
          "summary": "Hub epic story: define hidden hub lifecycle and governance model",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-181",
          "description": "Define the hidden hub lifecycle, governance boundaries, review points and operational ownership model for Hobbeast hidden hub intelligence.",
          "labels": [
            "community",
            "governance",
            "hubs"
          ]
        },
        {
          "key": "HOB-182",
          "summary": "Hub epic story: design hub-quality scoring and underserved-scene detection",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-182",
          "description": "Design hub quality scoring, signal confidence and underserved-scene detection so Hobbeast can identify meaningful community opportunities instead of noisy clusters.",
          "labels": [
            "community",
            "hubs",
            "ranking"
          ]
        },
        {
          "key": "HOB-183",
          "summary": "Hub epic story: implement hub-backed event opportunity recommendations",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-183",
          "description": "Implement the recommendation logic and product contract for hub-backed event opportunity suggestions so organizers can see where latent community demand may justify new events.",
          "labels": [
            "community",
            "hubs",
            "organizer",
            "recommendations"
          ]
        },
        {
          "key": "HOB-184",
          "summary": "Hub epic story: define future opt-in community exposure model",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-184",
          "description": "Define the future opt-in transition path from hidden hubs to explicit community exposure so Hobbeast can later reveal community structures in a trustworthy, consent-aware way.",
          "labels": [
            "community",
            "future",
            "hubs",
            "privacy"
          ]
        },
        {
          "key": "HOB-206",
          "summary": "Web parity: align community pulse, hidden hub and organizer insight semantics across surfaces",
          "status": "Implemented / mixed",
          "url": "https://hobbeast.atlassian.net/browse/HOB-206",
          "description": "Align the web surface with the hidden-hub, community-pulse and organizer-insight semantics that were already pushed forward in Android and in the first-party backend bootstrap.\n\nScope:\n\n* align hidden hub empty/sparse-data posture\n* align community pulse and opportunity framing\n* align organizer demand insight interpretation\n* avoid conflicting visible semantics for internal-only hub intelligence\n\nAcceptance criteria:\n\n* web and Android interpret hidden hubs, community pulse and organizer insights with the same product rules\n* internal-only hub semantics are preserved consistently\n* community-intelligence wording does not drift between surfaces",
          "labels": [
            "community",
            "hubs",
            "mobile-followup",
            "web-parity"
          ]
        }
      ],
      "source": {
        "kind": "github",
        "owner": "HenrikFaul",
        "repository": "Hobbeast-mobile",
        "label": "GitHub / HenrikFaul/Hobbeast-mobile"
      }
    },
    {
      "id": "hob-external-marketplace",
      "version": "external-marketplace-unreleased",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Planned",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "external_marketplace"
      ],
      "releaseNotes": "Ticketmaster, SeatGeek and external marketplace expansion backlog.",
      "deploymentComment": "Ticketmaster, SeatGeek and external marketplace expansion backlog.",
      "jiraLinks": [
        {
          "key": "HOB-4",
          "summary": "Epic: External event integrations and marketplace expansion",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-4",
          "description": "Goal: integrate third-party event sources into Hobbeast without breaking the current event experience.\n\nScope:\n\n* Ticketmaster integration\n* SeatGeek integration\n* later Universe proof of concept\n* later Ticket Tailor partner connector\n* external event normalization, deduplication and rendering\n\nSuccess criteria:\n\n* external events can be synced into Hobbeast\n* external events can be displayed in the existing event list with source-aware badges and links\n* the current Hobbeast event experience remains intact",
          "labels": [
            "backlog",
            "external-events",
            "GAP",
            "hobbeast",
            "integrations"
          ]
        },
        {
          "key": "HOB-11",
          "summary": "Story: Improve external event rendering and blending in the main events list",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-11",
          "description": "h1. Objective\n\nRender external events inside the main Hobbeast event list without breaking native event UX or source filtering.\n\nh1. Functional requirements\n\nh2. Supported source types\n\n* hobbeast native events\n* eventbrite events\n* ticketmaster events\n* seatgeek events\n* future external providers using {{external_events}}\n\nh2. Rendering contract\n\nRequired card fields:\n\n* source label / badge\n* title\n* short description\n* city / address summary\n* start date / time\n* category summary\n* price summary if available\n* CTA button:\n** native event -> open internal detail page\n** external event -> open external_url or mapped detail proxy\n\nh2. Behaviour rules\n\n* external events must appear in mixed lists when source filter allows them\n* external events must appear under {{External}} source filter even if provider differs\n* source-specific visual badge required ({{Ticketmaster}}, {{Eventbrite}}, {{SeatGeek}})\n* own event controls must never appear on external event cards\n* join / unsubscribe CTA must not appear for unmanaged external providers unless explicitly supported later\n\nh2. Mapping contract\n\n{noformat}DisplayEvent {\n  id: string\n  source: 'hobbeast' | 'eventbrite' | 'ticketmaster' | 'seatgeek' | 'external'\n  sourceBadge: string\n  title: string\n  description: string | null\n  city: string | null\n  address: string | null\n  startsAt: string | null\n  category: string | null\n  imageUrl: string | null\n  externalUrl: string | null\n  isExternal: boolean\n}{noformat}\n\nh2. Fallback rules\n\n* if category missing -> render {{Other}}\n* if image missing -> render generic placeholder\n* if external_url missing -> disable CTA and mark record as incomplete\n* if date missing -> event hidden from public list unless fallback policy exists\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| [Ticketmaster] Friday Jazz Night                             |\n| Budapest • 2026-04-12 19:00                                  |\n| Live music, downtown venue                                   |\n| From 4500 HUF                                                |\n|                                              [Open source]   |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* external cards render consistently beside native cards\n* source filter works for all external providers\n* source badge and CTA behaviour are deterministic per provider\n* incomplete external records follow fallback rules instead of silently breaking UI",
          "labels": [
            "external-events",
            "GAP",
            "hobbeast",
            "rendering",
            "ticketmaster"
          ]
        },
        {
          "key": "HOB-12",
          "summary": "Story: Integrate Ticketmaster sync and normalization into the external event ingestion pipeline",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-12",
          "description": "h1. Objective\n\nImplement a production-ready Ticketmaster ingestion flow that normalizes provider data into Hobbeast {{external_events}} records.\n\nh1. Functional requirements\n\nh2. Request modes\n\n* {{search_preview}}\n* {{sync}}\n\nh2. Provider fetch contract\n\n* use Ticketmaster Discovery API\n* support filters:\n** countryCode\n** city\n** classificationName\n** keyword\n** startDateTime / safe date filtering\n** page\n** size\n\nh2. Mapping rules\n\n{noformat}external_source = 'ticketmaster'\nexternal_id = tm.id\nexternal_url = tm.url\ntitle = tm.name\ndescription = tm.info || tm.pleaseNote\ncategory = classifications.segment.name\nsubcategory = classifications.genre.name || classifications.subGenre.name\nlocation_city = venue.city.name\nlocation_address = venue.address.line1 || venue.name\nlocation_lat = venue.location.latitude\nlocation_lon = venue.location.longitude\nevent_date = dates.start.localDate\nevent_time = dates.start.localTime\nprice_min = priceRanges[0].min\nprice_max = priceRanges[0].max\ncurrency = priceRanges[0].currency\norganizer_name = promoter.name\nimage_url = images[0].url{noformat}\n\nh2. Deduplication rules\n\n* unique key: {{(external_source, external_id)}}\n* upsert on sync\n* retain latest {{source_payload}} and {{source_last_synced_at}}\n\nh2. Failure handling\n\n* malformed records must be skipped with structured log entry\n* HTTP/provider errors must return diagnosable payload\n* zero-result response must not be treated as technical failure\n\nh2. Operational notes\n\n* function must support preview mode without DB writes\n* sync mode must return inserted/updated count\n* provider secrets must be read from environment / Supabase secrets\n\nh1. Sequence\n\n{noformat}Client/Test trigger\n -> Edge Function\n -> Ticketmaster API fetch\n -> map/normalize\n -> dedupe/upsert into external_events\n -> response summary{noformat}\n\nh1. Acceptance criteria\n\n* preview mode returns normalized event payloads without DB writes\n* sync mode upserts normalized records into {{external_events}}\n* duplicate provider records are not duplicated in DB\n* zero-result case is distinguishable from provider failure",
          "labels": [
            "backend",
            "GAP",
            "hobbeast",
            "integration",
            "ticketmaster"
          ]
        },
        {
          "key": "HOB-13",
          "summary": "Story: Integrate SeatGeek as a second external event source",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-13",
          "description": "h1. Objective\n\nImplement a production-ready SeatGeek ingestion flow normalized into Hobbeast {{external_events}}.\n\nh1. Functional requirements\n\nh2. Request modes\n\n* {{search_preview}}\n* {{sync}}\n\nh2. Provider fetch contract\n\n* support SeatGeek client credentials / public API contract as available\n* support query parameters:\n** q\n** page\n** per_page\n** optional geographic filters when supported\n\nh2. Mapping rules\n\n{noformat}external_source = 'seatgeek'\nexternal_id = sg.id\ntitle = sg.title\nexternal_url = sg.url\ndescription = sg.description || null\ncategory = sg.type || sg.taxonomies[0]?.name || null\nlocation_city = sg.venue.city\nlocation_address = sg.venue.address || sg.venue.name\nlocation_lat = sg.venue.location.lat\nlocation_lon = sg.venue.location.lon\nevent_date = derived from sg.datetime_utc / local date mapping\nevent_time = derived from sg.datetime_utc / local time mapping\nprice_min = sg.stats.lowest_price || null\nprice_max = sg.stats.highest_price || null\ncurrency = inferred/default provider currency if available\nimage_url = sg.performers[0]?.image || null{noformat}\n\nh2. Deduplication rules\n\n* unique key: {{(external_source, external_id)}}\n* provider-specific updates must overwrite previous normalized snapshot\n\nh2. Failure handling\n\n* malformed record skip with structured log\n* zero results distinct from provider failure\n* auth error and quota error distinct in response contract\n\nh1. Acceptance criteria\n\n* preview mode returns normalized SeatGeek data without DB write\n* sync mode upserts records into {{external_events}}\n* SeatGeek records are normalized consistently with Ticketmaster records",
          "labels": [
            "backend",
            "GAP",
            "hobbeast",
            "integration",
            "seatgeek"
          ]
        },
        {
          "key": "HOB-22",
          "summary": "Story: Run Universe public-events proof of concept",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-22",
          "description": "h1. Objective\n\nRun a technically grounded Universe public-events proof of concept and document a clear go/no-go decision for Hobbeast integration.\n\nh1. Validation goals\n\n* verify whether Universe exposes sufficiently queryable public event data\n* verify authentication model and implementation complexity\n* verify required event fields can be mapped into Hobbeast {{external_events}}\n* identify hard blockers, quotas and compliance limitations\n\nh1. Validation checklist\n\nh2. Auth and connectivity\n\n* create Universe app credentials if required\n* validate token acquisition / auth handshake\n* document required scopes/permissions\n\nh2. Data retrieval\n\n* test public event query coverage\n* validate support for pagination\n* validate support for filtering by location/date/category if available\n\nh2. Mapping coverage\n\nRequired fields to test:\n\n* event id\n* title\n* description\n* category/type\n* venue/location\n* date/time\n* image\n* external URL\n* pricing summary\n\nh2. Output artefacts\n\n* sample normalized payload\n* missing-field matrix\n* auth complexity note\n* quota/rate-limit note\n* final decision:\n** go\n** conditional go\n** no-go\n\nh1. Technical output format\n\n{noformat}UniversePoCResult {\n  auth_model: string\n  can_query_public_events: boolean\n  supports_pagination: boolean\n  supported_filters: string[]\n  mapped_fields: string[]\n  missing_fields: string[]\n  blockers: string[]\n  recommendation: 'go' | 'conditional_go' | 'no_go'\n}{noformat}\n\nh1. Acceptance criteria\n\n* PoC produces a written decision, not only exploratory notes\n* mapped vs missing fields are explicitly documented\n* blockers are concrete enough for roadmap decision-making",
          "labels": [
            "GAP",
            "hobbeast",
            "integration",
            "poc",
            "universe"
          ]
        },
        {
          "key": "HOB-23",
          "summary": "Story: Build Ticket Tailor partner connector flow",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-23",
          "description": "h1. Objective\n\nDefine a partner-scoped Ticket Tailor connector flow for Hobbeast with admin configuration, sync contract and normalized ingestion.\n\nh1. Functional requirements\n\nh2. Connector scope\n\n* Ticket Tailor is not a global discovery source in this story\n* connector is configured per partner / per box office\n* each connector instance belongs to a partner venue or organizer context\n\nh2. Admin configuration\n\nRequired config fields:\n\n* connector name\n* partner/owner reference\n* API credentials / auth secret reference\n* box office identifier\n* enabled flag\n* sync frequency\n\nh2. Sync behaviour\n\n* fetch events from configured partner scope\n* normalize into {{external_events}}\n* set {{external_source = 'tickettailor'}}\n* retain partner linkage for later filtering/rendering\n* dedupe by {{(external_source, external_id)}}\n\nh2. Mapping coverage\n\n* event id\n* title\n* description\n* date/time\n* location\n* image\n* external URL\n* pricing summary if available\n\nh2. Admin UX\n\n* connector list\n* create/edit connector form\n* sync now action\n* last sync status + timestamp\n* error state display\n\nh1. Suggested config entity\n\n{noformat}PartnerConnector {\n  id: uuid\n  provider: 'tickettailor'\n  owner_type: 'venue' | 'organizer'\n  owner_id: uuid\n  connector_name: string\n  external_scope_id: string\n  enabled: boolean\n  sync_frequency: string | null\n  last_sync_at: timestamptz | null\n  last_sync_status: 'ok' | 'partial' | 'failed' | null\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Partner connectors                                            |\n+--------------------------------------------------------------+\n| Ticket Tailor - Green Room Box Office                         |\n| Owner: Venue / The Green Room                                 |\n| Last sync: 2026-04-10 09:20  Status: OK                       |\n|                                      [Sync now] [Edit]        |\n+--------------------------------------------------------------+\n| [Add connector]                                               |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* Ticket Tailor connector can be configured per partner scope\n* sync status and last sync metadata are visible in admin UX\n* normalized partner-scoped events can be written into {{external_events}}\n* connector remains distinct from global external discovery providers",
          "labels": [
            "GAP",
            "hobbeast",
            "integration",
            "partners",
            "tickettailor"
          ]
        },
        {
          "key": "HOB-47",
          "summary": "Subtask: Implement external event display adapter and source badge rendering",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-47",
          "description": "Create the frontend adapter that maps external_events records into the shared display contract and renders deterministic source badges for Ticketmaster, Eventbrite, SeatGeek and future providers.",
          "labels": []
        },
        {
          "key": "HOB-48",
          "summary": "Subtask: Implement fallback rendering rules for incomplete external events",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-48",
          "description": "Handle missing category, image, external_url or date fields for external events according to the story fallback rules, including disabled CTA and hidden invalid records where required.",
          "labels": []
        },
        {
          "key": "HOB-49",
          "summary": "Subtask: Implement Ticketmaster Edge Function preview and sync modes",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-49",
          "description": "Build the Ticketmaster integration function with explicit preview and sync execution paths, including provider fetch, normalization and response summaries.",
          "labels": []
        },
        {
          "key": "HOB-50",
          "summary": "Subtask: Implement Ticketmaster payload mapping and upsert into external_events",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-50",
          "description": "Map Ticketmaster provider payloads to the normalized external_events schema, enforce unique key external_source + external_id, and implement idempotent upsert behaviour for sync mode.",
          "labels": []
        },
        {
          "key": "HOB-51",
          "summary": "Subtask: Add Ticketmaster error and zero-result handling",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-51",
          "description": "Handle Ticketmaster API errors, malformed records and zero-result cases in a clear and testable way for both preview and sync modes.",
          "labels": []
        },
        {
          "key": "HOB-52",
          "summary": "Subtask: Add Ticketmaster preview and sync QA validation",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-52",
          "description": "Create QA checks for Ticketmaster preview and sync, including valid results, zero-result responses, and recoverable provider failures.",
          "labels": []
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "HOB",
        "label": "Jira / HOB project"
      }
    },
    {
      "id": "hob-venue-partner-layer",
      "version": "venue-partner-layer-unreleased",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "mobile-android",
        "backend"
      ],
      "shippedAt": "Planned",
      "backendChanged": true,
      "sharedContractChanged": false,
      "schemaChanged": false,
      "integrationsChanged": [
        "supabase",
        "geoapify"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "venue_partner_layer"
      ],
      "releaseNotes": "Venue and partner-facing experience backlog.",
      "deploymentComment": "Venue and partner-facing experience backlog.",
      "jiraLinks": [
        {
          "key": "HOB-7",
          "summary": "Epic: Venue and partner experience layer",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-7",
          "description": "Goal: add venue-facing and partner-facing capabilities that complement Hobbeast's community-first product without turning the product into a full hospitality operations platform.\n\nScope:\n\n* partner venue profiles\n* venue metadata on event pages\n* partner capabilities and badges\n* future reservation-ready extension points\n\nSuccess criteria:\n\n* venue-related information can enrich discovery and event pages\n* partner venue features do not break the current lightweight event experience",
          "labels": [
            "backlog",
            "GAP",
            "gap-analysis",
            "hobbeast",
            "partners",
            "venue"
          ]
        },
        {
          "key": "HOB-20",
          "summary": "Story: Add partner venue profiles and venue metadata on event pages",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-20",
          "description": "h1. Objective\n\nImplement a lightweight but explicit venue profile and venue metadata layer that enriches event discovery and event detail pages.\n\nh1. Functional requirements\n\nh2. Venue profile page\n\nRequired sections:\n\n* venue hero block\n** name\n** city\n** address summary\n** partner badge\n** capability flags\n* venue description\n* upcoming events list\n* venue metadata block\n** reservations available\n** seating available\n** menu available\n** approximate location map block\n\nh2. Event page integration\n\n* if event has linked {{venue_id}}, render venue summary card on event detail page\n* venue summary card should include:\n** venue name\n** city/address summary\n** partner badge if applicable\n** capability chips\n** CTA to full venue profile\n\nh2. Discovery integration\n\n* venue metadata can be used as display enrichment in event list cards\n* no full reservation engine required in this story\n\nh1. Data model notes\n\n{noformat}Venue {\n  id: uuid\n  slug: string\n  name: string\n  description: string | null\n  city: string\n  address: string | null\n  lat: number | null\n  lon: number | null\n  reservations_available: boolean\n  seating_available: boolean\n  menu_available: boolean\n  partner_badge: boolean\n  image_url: string | null\n}\n\nEvent {\n  venue_id: uuid | null\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}Venue profile\n+--------------------------------------------------------------+\n| [Partner venue] The Green Room                               |\n| Budapest • Bartók Béla út                                    |\n| [Reservations] [Seating] [Menu]                              |\n+--------------------------------------------------------------+\n| Description                                                   |\n| Cozy partner venue for live music and board game nights.     |\n+--------------------------------------------------------------+\n| Upcoming events                                               |\n| - Friday Jazz Night                                           |\n| - Sunday Brunch Meetup                                        |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* venue profile page exists as a distinct surface\n* event detail pages can render linked venue summaries\n* venue capability flags are visible on venue and linked event surfaces\n* venue layer enriches discovery without introducing reservation logic in this story",
          "labels": [
            "GAP",
            "hobbeast",
            "partners",
            "venue"
          ]
        },
        {
          "key": "HOB-39",
          "summary": "Story: Introduce explicit Venue mode and venue capability model",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-39",
          "description": "h1. Objective\n\nCreate an optional venue-facing operating mode for partner venues without turning Hobbeast into a full hospitality backoffice product.\n\nh1. Functional requirements\n\n* venue mode entry only for users/accounts linked to venue entities\n* venue mode surfaces:\n** Venue profile\n** Venue events\n** Venue capabilities\n** Future reservation extension points\n* venue capability flags:\n** reservations_available\n** seating_available\n** menu_available\n* venue capability flags must be displayable on venue and event pages\n\nh1. Data model notes\n\n{noformat}Venue {\n  id: uuid\n  name: string\n  slug: string\n  description: string | null\n  city: string\n  address: string | null\n  reservations_available: boolean\n  seating_available: boolean\n  menu_available: boolean\n  partner_badge: boolean\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}Venue mode shell\n+--------------------------------------------------+\n| Venue mode                                       |\n| [Profile] [Events] [Capabilities]               |\n+--------------------------------------------------+\n| Capability flags                                 |\n| [x] Reservations available                       |\n| [x] Seating available                            |\n| [ ] Menu available                               |\n+--------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* venue mode is optional and role-based\n* capability flags are stored structurally, not only as text\n* venue capability flags can be rendered on venue and event detail pages",
          "labels": [
            "capabilities",
            "GAP",
            "mode",
            "venue",
            "wireframe"
          ]
        },
        {
          "key": "HOB-69",
          "summary": "Subtask: Build venue profile page UI and capability badge rendering",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-69",
          "description": "Implement the venue profile page surface, including hero section, description, partner badge and capability chips such as reservations, seating and menu.",
          "labels": []
        },
        {
          "key": "HOB-71",
          "summary": "Subtask: Implement venue data model and event-to-venue linkage",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-71",
          "description": "Implement the backend venue entity, capability flags and event-to-venue association needed for venue profiles and venue metadata on event pages.",
          "labels": []
        },
        {
          "key": "HOB-75",
          "summary": "Subtask: Render linked venue summary card on event detail pages",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-75",
          "description": "Show venue name, address summary, partner badge and capability chips on event detail pages when a venue is linked.",
          "labels": []
        },
        {
          "key": "HOB-84",
          "summary": "Subtask: Add venue info block to event detail page",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-84",
          "description": "Show linked venue info on event detail page.",
          "labels": []
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "HOB",
        "label": "Jira / HOB project"
      }
    },
    {
      "id": "hob-legacy-places-epic",
      "version": "legacy-places-epic-unreleased",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Planned",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "geoapify",
        "tomtom"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "legacy_places_epic"
      ],
      "releaseNotes": "Legacy or duplicate places architecture epic lineage kept for Jira completeness.",
      "deploymentComment": "Legacy or duplicate places architecture epic lineage kept for Jira completeness.",
      "jiraLinks": [
        {
          "key": "HOB-140",
          "summary": "Places provider architecture with Geoapify primary and TomTom premium POI layer",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-140",
          "description": "Create the Hobbeast places and venue discovery architecture with Geoapify as the primary places/geocoding provider and TomTom as the premium POI enrichment and fallback layer.\n\nBusiness goal:\n\n* support up-to-date place and venue discovery for restaurants, bars, entertainment venues, hobby places and general POIs\n* keep initial operating cost low with a free-tier friendly provider strategy\n* preserve the ability to enrich or backfill POI quality with a second provider\n\nProvider strategy:\n\n* Geoapify = primary provider for places search, geocoding, reverse geocoding and general location utility\n* TomTom = premium POI layer for higher-quality category search, venue enrichment and selected fallback use cases\n\nScope:\n\n* provider abstraction layer\n* normalized place schema\n* Geoapify primary integration\n* TomTom enrichment/fallback integration\n* deduplication and merge rules\n* caching and quota-aware orchestration\n* UI integration for place discovery and details\n\nOut of scope:\n\n* Tripadvisor integration\n* Google Maps paid places integration\n* route/navigation provider replacement\n\nSuccess criteria:\n\n* Hobbeast can search and display venues through a normalized provider-independent contract\n* Geoapify handles the main traffic path\n* TomTom can enrich or fill gaps for selected POI use cases without taking over the full stack",
          "labels": [
            "GEOAPIFY_PRIMARY",
            "PLACES_ARCH",
            "TOMTOM_POI_LAYER"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "HOB",
        "label": "Jira / HOB project"
      }
    },
    {
      "id": "hob-web-parity-event-trip",
      "version": "web-parity-event-trip-unreleased",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web"
      ],
      "shippedAt": "Planned",
      "backendChanged": false,
      "sharedContractChanged": false,
      "schemaChanged": false,
      "integrationsChanged": [
        "supabase",
        "mapy"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "web_parity_event_trip"
      ],
      "releaseNotes": "Web parity follow-up for first-party event lifecycle and trip continuity.",
      "deploymentComment": "Web parity follow-up for first-party event lifecycle and trip continuity.",
      "jiraLinks": [
        {
          "key": "HOB-199",
          "summary": "Web parity: align first-party event editor, detail and trip lifecycle with Android and Supabase",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-199",
          "description": "Align the web surface with the first-party event lifecycle that was already moved forward in Android and in the Supabase backend.\n\nScope:\n\n* align create/edit event flow to the shared first-party event schema\n* align validation rules for title, category, schedule, external URL, capacity, venue/address sharing and entry window\n* align event detail action surface for first-party vs imported listings\n* align trip-plan persistence and return-path continuity\n* align RSVP and waitlist posture with shared participant semantics\n\nAcceptance criteria:\n\n* web create/edit/detail uses the same first-party event contract as Android\n* trip planner integration on web follows the same event-trip continuity model\n* imported/external event behavior is clearly separated from first-party behavior on web",
          "labels": [
            "backend-contract",
            "events",
            "mobile-followup",
            "web-parity"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "HOB",
        "label": "Jira / HOB project"
      }
    },
    {
      "id": "hob-web-parity-places",
      "version": "web-parity-places-unreleased",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web"
      ],
      "shippedAt": "Planned",
      "backendChanged": false,
      "sharedContractChanged": false,
      "schemaChanged": false,
      "integrationsChanged": [
        "geoapify",
        "tomtom",
        "mapy"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "web_parity_places"
      ],
      "releaseNotes": "Web parity follow-up for normalized places and venue/trip continuity.",
      "deploymentComment": "Web parity follow-up for normalized places and venue/trip continuity.",
      "jiraLinks": [
        {
          "key": "HOB-200",
          "summary": "Web parity: align normalized places, venue selection and trip continuity with Android contract",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-200",
          "description": "Align the web surface with the normalized places, venue selection and trip continuity model that was pushed forward in Android.\n\nScope:\n\n* align normalized place search and selected-place persistence\n* align place detail and recommended-venue behavior\n* align imported vs first-party venue/ticket action posture\n* align trip planner binding, save-and-return and rehydration behavior\n* keep web provider-agnostic against the shared Geoapify/TomTom normalized contract\n\nAcceptance criteria:\n\n* web venue search and selection follows the same normalized contract as Android\n* trip continuity from place selection into create/edit/detail no longer drifts between surfaces\n* provider-specific shapes remain isolated from shared UI behavior",
          "labels": [
            "mobile-followup",
            "places",
            "trip-planner",
            "web-parity"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "HOB",
        "label": "Jira / HOB project"
      }
    },
    {
      "id": "hob-web-parity-discovery",
      "version": "web-parity-discovery-unreleased",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web"
      ],
      "shippedAt": "Planned",
      "backendChanged": false,
      "sharedContractChanged": false,
      "schemaChanged": false,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "web_parity_discovery"
      ],
      "releaseNotes": "Web parity follow-up for discovery lenses, filters and event cards.",
      "deploymentComment": "Web parity follow-up for discovery lenses, filters and event cards.",
      "jiraLinks": [
        {
          "key": "HOB-201",
          "summary": "Web parity: align discovery lenses, filters and card semantics with Android and shared journey signals",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-201",
          "description": "Align the web discovery experience with the updated Android discovery/search/filter model and shared journey semantics.\n\nScope:\n\n* align discovery lenses and filter state behavior\n* align category/search/distance/venue filter semantics\n* align event-card chips for first-party vs imported, venue resolved, route attached and visibility posture\n* align empty-state and sparse-data behavior\n* align community fit, pulse and opportunity framing where shared logic exists\n\nAcceptance criteria:\n\n* discovery and filter behavior stays conceptually aligned across web and Android\n* web cards expose the same journey maturity semantics where data exists\n* empty-state, imported-listing and community framing do not drift between surfaces",
          "labels": [
            "discovery",
            "filters",
            "mobile-followup",
            "web-parity"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "HOB",
        "label": "Jira / HOB project"
      }
    },
    {
      "id": "hob-web-parity-organizer",
      "version": "web-parity-organizer-unreleased",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web"
      ],
      "shippedAt": "Planned",
      "backendChanged": false,
      "sharedContractChanged": false,
      "schemaChanged": false,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "web_parity_organizer"
      ],
      "releaseNotes": "Web parity follow-up for attendee roster, organizer operations and check-in.",
      "deploymentComment": "Web parity follow-up for attendee roster, organizer operations and check-in.",
      "jiraLinks": [
        {
          "key": "HOB-202",
          "summary": "Web parity: align organizer attendee, check-in and operational surfaces with Android and shared backend",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-202",
          "description": "Align web organizer operations with the shared first-party backend and the organizer runtime that was already pushed forward on Android.\n\nScope:\n\n* align attendee roster states and filters\n* align check-in eligibility, invite-code handling and audit posture\n* align waitlist promotion semantics\n* align organizer runtime readouts for owned events\n* align imported-overlay vs first-party organizer copy\n\nAcceptance criteria:\n\n* attendee and check-in semantics no longer drift between web and Android\n* web uses the same shared backend states for participant status and audit-aware operations\n* organizer operations stay coherent across both surfaces",
          "labels": [
            "checkin",
            "mobile-followup",
            "organizer",
            "web-parity"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "HOB",
        "label": "Jira / HOB project"
      }
    },
    {
      "id": "hob-web-parity-insights",
      "version": "web-parity-insights-unreleased",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web"
      ],
      "shippedAt": "Planned",
      "backendChanged": false,
      "sharedContractChanged": false,
      "schemaChanged": false,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "web_parity_insights"
      ],
      "releaseNotes": "Web parity follow-up for organizer messaging, delivery posture and analytics.",
      "deploymentComment": "Web parity follow-up for organizer messaging, delivery posture and analytics.",
      "jiraLinks": [
        {
          "key": "HOB-203",
          "summary": "Web parity: align organizer messaging, delivery state and analytics surfaces with Android and backend model",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-203",
          "description": "Align the web organizer messaging and analytics surfaces with the shared backend contract and the runtime posture already moved forward on Android.\n\nScope:\n\n* align organizer message composer rules and segment semantics\n* align delivery-state visibility and empty-state behavior\n* align analytics runtime posture, source-aware explanation and operational health framing\n* align imported vs first-party event handling in organizer messaging and analytics\n\nAcceptance criteria:\n\n* web messaging and analytics use the same shared backend semantics as Android\n* queued, delivered and needs-attention states are interpreted consistently\n* analytics framing does not drift between surfaces",
          "labels": [
            "analytics",
            "messaging",
            "mobile-followup",
            "web-parity"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "HOB",
        "label": "Jira / HOB project"
      }
    },
    {
      "id": "hob-web-parity-retention",
      "version": "web-parity-retention-unreleased",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web"
      ],
      "shippedAt": "Planned",
      "backendChanged": false,
      "sharedContractChanged": false,
      "schemaChanged": false,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "web_parity_retention"
      ],
      "releaseNotes": "Web parity follow-up for onboarding and reminder journey.",
      "deploymentComment": "Web parity follow-up for onboarding and reminder journey.",
      "jiraLinks": [
        {
          "key": "HOB-204",
          "summary": "Web parity: align onboarding, session continuity and reminder journey with Android product logic",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-204",
          "description": "Align the web surface with the onboarding, session and reminder journey-state logic that was introduced on Android.\n\nScope:\n\n* align first-run onboarding posture and guidance\n* align session continuity semantics\n* align organizer-first activation and first organizer run guidance\n* align reminder-loop readiness and reminder state framing in a web-appropriate way\n\nAcceptance criteria:\n\n* web and Android share the same journey-state semantics even if platform permission mechanics differ\n* onboarding and reminder posture do not drift between surfaces\n* organizer-first activation logic remains product-consistent",
          "labels": [
            "mobile-followup",
            "onboarding",
            "retention",
            "web-parity"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "HOB",
        "label": "Jira / HOB project"
      }
    },
    {
      "id": "hob-web-parity-community",
      "version": "web-parity-community-unreleased",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web"
      ],
      "shippedAt": "Planned",
      "backendChanged": false,
      "sharedContractChanged": false,
      "schemaChanged": false,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "web_parity_community"
      ],
      "releaseNotes": "Web parity follow-up for hidden hub and community pulse semantics.",
      "deploymentComment": "Web parity follow-up for hidden hub and community pulse semantics.",
      "jiraLinks": [
        {
          "key": "HOB-205",
          "summary": "Web parity: align community pulse, hidden hub and organizer insight semantics across surfaces",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-205",
          "description": "Align the web surface with the hidden-hub, community-pulse and organizer-insight semantics that were already pushed forward in Android and in the first-party backend bootstrap.\n\nScope:\n\n* align hidden hub empty/sparse-data posture\n* align community pulse and opportunity framing\n* align organizer demand insight interpretation\n* avoid conflicting visible semantics for internal-only hub intelligence\n\nAcceptance criteria:\n\n* web and Android interpret hidden hubs, community pulse and organizer insights with the same product rules\n* internal-only hub semantics are preserved consistently\n* community-intelligence wording does not drift between surfaces",
          "labels": [
            "community",
            "hubs",
            "mobile-followup",
            "web-parity"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "HOB",
        "label": "Jira / HOB project"
      }
    },
    {
      "id": "hob-backend-contract-docs",
      "version": "backend-contract-docs-unreleased",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Planned",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "backend_contract_docs"
      ],
      "releaseNotes": "Backfill and document the applied Supabase schema, RLS and RPC contract.",
      "deploymentComment": "Backfill and document the applied Supabase schema, RLS and RPC contract.",
      "jiraLinks": [
        {
          "key": "HOB-207",
          "summary": "Documentation: backfill applied Supabase schema, RLS and RPC contract after mobile/backend bootstrap",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-207",
          "description": "Document the first-party Supabase backend that was actually introduced and applied during the Android + backend implementation track.\n\nScope:\n\n* document the created first-party tables and their product purpose\n* document the RLS posture and ownership assumptions\n* document the operational SQL functions and their caller semantics\n* document which parts are now shared backend contract and not mobile-only behavior\n* make the resulting backend understandable enough that web follow-up and later refactors can rely on Jira alone\n\nExpected coverage:\n\n* profiles\n* events\n* event_trip_plans\n* event_participants\n* reminders\n* organizer_messages\n* organizer_message_deliveries\n* event_analytics\n* event_analytics_breakdowns\n* hidden_hubs\n* organizer_demand_insights\n* community_pulses\n* organizer_opportunities\n* check_in_audit\n* check_in_participant(...)\n* undo_check_in_participant(...)\n* promote_waitlist_participant(...)\n* resolve_organizer_segment_recipients(...)\n\nAcceptance criteria:\n\n* Jira clearly reflects the applied Supabase schema and shared backend contract\n* later web/backend work can reference one documented contract instead of reverse-engineering the migration SQL\n* mobile-specific behavior is separated from shared backend behavior",
          "labels": [
            "backend-contract",
            "documentation",
            "mobile-followup",
            "supabase"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "HOB",
        "label": "Jira / HOB project"
      }
    },
    {
      "id": "hob-android-backfill-matrix",
      "version": "android-backfill-matrix-unreleased",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "mobile-android",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Planned",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": false,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "android_backfill_matrix"
      ],
      "releaseNotes": "Document Android implementation coverage and cross-surface follow-up matrix.",
      "deploymentComment": "Document Android implementation coverage and cross-surface follow-up matrix.",
      "jiraLinks": [
        {
          "key": "HOB-211",
          "summary": "Documentation: backfill Android implementation coverage and cross-surface follow-up matrix",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/HOB-211",
          "description": "Document the Android implementation progress in a way that can be read back from Jira without opening the code packages.\n\nScope:\n\n* summarize what was materially advanced in Android UI/flow terms\n* separate mobile-only implementation choices from shared product/backend contract\n* list the resulting web follow-up/parity stories\n* list the backend and Supabase dependencies introduced by the mobile track\n* create a concise cross-surface matrix so later work does not miss hidden drift risks\n\nExpected coverage:\n\n* discovery lenses, filters and card semantics\n* place search, venue selection and trip continuity\n* create/edit/detail lifecycle\n* organizer attendee/check-in runtime\n* organizer messaging and analytics posture\n* onboarding, session and reminder journey\n* hidden hub / community pulse / organizer insight posture\n* direct references to HOB-199, HOB-200, HOB-201, HOB-202, HOB-203, HOB-204, HOB-205 and HOB-207\n\nAcceptance criteria:\n\n* Jira contains one readable implementation-backfill summary for the Android track\n* shared follow-up items for web/backend are explicitly listed and traceable\n* future backlog grooming can use Jira as the source of truth instead of reconstructing the mobile change history from zip packages",
          "labels": [
            "android",
            "documentation",
            "mobile-followup",
            "parity"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "HOB",
        "label": "Jira / HOB project"
      }
    }
  ],
  "capabilities": [
    {
      "id": "core_data_model_supabase",
      "name": "Core data model and Supabase foundation",
      "summary": "First-party Supabase schema, RLS posture and operational foundations.",
      "description": "First-party Supabase schema, RLS posture and operational foundations.",
      "statusBySurface": {
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "aligned",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-28",
        "HOB-36",
        "HOB-208",
        "HOB-209",
        "HOB-210"
      ],
      "firstRelease": {
        "backend": "backend-v0.1.0",
        "shared-contract": "backend-v0.1.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "Backend applied; no full production audit",
      "source": "seed"
    },
    {
      "id": "account_onboarding_profile",
      "name": "Core account, onboarding and profile management",
      "summary": "Account, onboarding, profile and session-continuity foundation.",
      "description": "Account, onboarding, profile and session-continuity foundation.",
      "statusBySurface": {
        "mobile-android": "shipped",
        "backend": "partial"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-26",
        "HOB-30",
        "HOB-31",
        "HOB-37"
      ],
      "firstRelease": {
        "mobile-android": "mobile-android-v0.2.0",
        "backend": "mobile-android-v0.2.0"
      },
      "tenant": "B2C",
      "channel": "Mobile",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "retention_reminders",
      "name": "Retention, reminders and engagement loops",
      "summary": "Reminder loops, onboarding continuation and session-aware re-engagement.",
      "description": "Reminder loops, onboarding continuation and session-aware re-engagement.",
      "statusBySurface": {
        "mobile-android": "shipped",
        "backend": "partial",
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-8",
        "HOB-21",
        "HOB-74",
        "HOB-80",
        "HOB-81",
        "HOB-82",
        "HOB-174",
        "HOB-180"
      ],
      "firstRelease": {
        "mobile-android": "mobile-android-v0.3.0",
        "backend": "mobile-android-v0.3.0",
        "web": "mobile-android-v0.3.0"
      },
      "tenant": "B2C",
      "channel": "Mobile",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "discovery_personalization",
      "name": "Discovery, search and personalization foundation",
      "summary": "Discovery lenses, search, filtering and journey-aware event card semantics.",
      "description": "Discovery lenses, search, filtering and journey-aware event card semantics.",
      "statusBySurface": {
        "web": "partial",
        "mobile-android": "shipped",
        "backend": "partial",
        "shared-contract": "partial"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-1",
        "HOB-3",
        "HOB-9",
        "HOB-10",
        "HOB-44",
        "HOB-45",
        "HOB-46",
        "HOB-164",
        "HOB-165",
        "HOB-166",
        "HOB-175",
        "HOB-176",
        "HOB-177"
      ],
      "firstRelease": {
        "web": "web-v0.4.0",
        "mobile-android": "web-v0.4.0",
        "backend": "web-v0.4.0",
        "shared-contract": "web-v0.4.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "location_distance_infrastructure",
      "name": "Location, address and distance infrastructure",
      "summary": "Location, address and distance support used by discovery and venue features.",
      "description": "Location, address and distance support used by discovery and venue features.",
      "statusBySurface": {
        "web": "partial",
        "mobile-android": "partial",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "geoapify"
      ],
      "jiraKeys": [
        "HOB-29",
        "HOB-34",
        "HOB-35"
      ],
      "firstRelease": {
        "web": "web-v0.5.0",
        "mobile-android": "web-v0.5.0",
        "backend": "web-v0.5.0",
        "shared-contract": "web-v0.5.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "normalized_places_provider_architecture",
      "name": "Normalized places provider architecture",
      "summary": "Geoapify-primary and TomTom-premium normalized places architecture and venue search contract.",
      "description": "Geoapify-primary and TomTom-premium normalized places architecture and venue search contract.",
      "statusBySurface": {
        "web": "partial",
        "mobile-android": "partial",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "geoapify",
        "tomtom",
        "supabase"
      ],
      "jiraKeys": [
        "HOB-141",
        "HOB-142",
        "HOB-143",
        "HOB-144",
        "HOB-145",
        "HOB-146",
        "HOB-147",
        "HOB-148",
        "HOB-149",
        "HOB-150",
        "HOB-151",
        "HOB-152",
        "HOB-153",
        "HOB-154",
        "HOB-155",
        "HOB-156",
        "HOB-157",
        "HOB-158",
        "HOB-159",
        "HOB-160",
        "HOB-161"
      ],
      "firstRelease": {
        "web": "web-v0.6.0",
        "mobile-android": "web-v0.6.0",
        "backend": "web-v0.6.0",
        "shared-contract": "web-v0.6.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "trip_planning_core",
      "name": "Trip planning core integration",
      "summary": "Persisted trip planning, route continuity and event-linked trip flows.",
      "description": "Persisted trip planning, route continuity and event-linked trip flows.",
      "statusBySurface": {
        "mobile-android": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "aligned",
      "integrations": [
        "mapy",
        "supabase"
      ],
      "jiraKeys": [
        "HOB-85",
        "HOB-87",
        "HOB-88",
        "HOB-89",
        "HOB-90",
        "HOB-91",
        "HOB-92",
        "HOB-93",
        "HOB-94",
        "HOB-95",
        "HOB-96",
        "HOB-97",
        "HOB-104",
        "HOB-105",
        "HOB-106",
        "HOB-107",
        "HOB-108",
        "HOB-109",
        "HOB-110",
        "HOB-111",
        "HOB-112",
        "HOB-113",
        "HOB-114",
        "HOB-115",
        "HOB-116",
        "HOB-117",
        "HOB-118",
        "HOB-134",
        "HOB-135",
        "HOB-136",
        "HOB-137",
        "HOB-138",
        "HOB-139"
      ],
      "firstRelease": {
        "mobile-android": "mobile-android-v0.7.0",
        "backend": "mobile-android-v0.7.0",
        "shared-contract": "mobile-android-v0.7.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "trip_planning_ai_automation",
      "name": "Trip planning AI and automation readiness",
      "summary": "Backend contracts and automation-ready trip planning semantics.",
      "description": "Backend contracts and automation-ready trip planning semantics.",
      "statusBySurface": {
        "mobile-android": "partial",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "mapy",
        "supabase"
      ],
      "jiraKeys": [
        "HOB-86",
        "HOB-98",
        "HOB-99",
        "HOB-100",
        "HOB-101",
        "HOB-102",
        "HOB-103",
        "HOB-119",
        "HOB-120",
        "HOB-121",
        "HOB-122",
        "HOB-123",
        "HOB-124",
        "HOB-125",
        "HOB-126",
        "HOB-127",
        "HOB-128",
        "HOB-129",
        "HOB-130",
        "HOB-131",
        "HOB-132",
        "HOB-133"
      ],
      "firstRelease": {
        "mobile-android": "mobile-android-v0.8.0",
        "backend": "mobile-android-v0.8.0",
        "shared-contract": "mobile-android-v0.8.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "event_lifecycle_detail",
      "name": "Core event creation, editing and detail lifecycle",
      "summary": "First-party event lifecycle, imported-vs-first-party action posture and detail semantics.",
      "description": "First-party event lifecycle, imported-vs-first-party action posture and detail semantics.",
      "statusBySurface": {
        "mobile-android": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-27",
        "HOB-32",
        "HOB-33",
        "HOB-53",
        "HOB-54",
        "HOB-55",
        "HOB-163",
        "HOB-167",
        "HOB-168"
      ],
      "firstRelease": {
        "mobile-android": "mobile-android-v0.9.0",
        "backend": "mobile-android-v0.9.0",
        "shared-contract": "mobile-android-v0.9.0",
        "web": "mobile-android-v0.9.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "rsvp_ticketing_checkin",
      "name": "RSVP, ticketing and check-in lifecycle",
      "summary": "RSVP states, waitlist, ticketing posture and check-in lifecycle.",
      "description": "RSVP states, waitlist, ticketing posture and check-in lifecycle.",
      "statusBySurface": {
        "mobile-android": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-5",
        "HOB-15",
        "HOB-16",
        "HOB-40",
        "HOB-41",
        "HOB-42",
        "HOB-58",
        "HOB-59"
      ],
      "firstRelease": {
        "mobile-android": "mobile-android-v1.0.0",
        "backend": "mobile-android-v1.0.0",
        "shared-contract": "mobile-android-v1.0.0",
        "web": "mobile-android-v1.0.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "organizer_attendee_operations",
      "name": "Organizer tools and attendee operations",
      "summary": "Organizer mode, roster operations, invite-code and operational attendee tooling.",
      "description": "Organizer mode, roster operations, invite-code and operational attendee tooling.",
      "statusBySurface": {
        "mobile-android": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-2",
        "HOB-14",
        "HOB-17",
        "HOB-18",
        "HOB-38",
        "HOB-43",
        "HOB-56",
        "HOB-57",
        "HOB-64",
        "HOB-65",
        "HOB-70",
        "HOB-76",
        "HOB-169",
        "HOB-170",
        "HOB-171",
        "HOB-179"
      ],
      "firstRelease": {
        "mobile-android": "mobile-android-v1.1.0",
        "backend": "mobile-android-v1.1.0",
        "shared-contract": "mobile-android-v1.1.0",
        "web": "mobile-android-v1.1.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "organizer_analytics_communication",
      "name": "Organizer analytics, insights and communication",
      "summary": "Organizer messaging, delivery posture, analytics and insight surfaces.",
      "description": "Organizer messaging, delivery posture, analytics and insight surfaces.",
      "statusBySurface": {
        "mobile-android": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-6",
        "HOB-19",
        "HOB-24",
        "HOB-60",
        "HOB-61",
        "HOB-62",
        "HOB-172",
        "HOB-173",
        "HOB-178"
      ],
      "firstRelease": {
        "mobile-android": "mobile-android-v1.2.0",
        "backend": "mobile-android-v1.2.0",
        "shared-contract": "mobile-android-v1.2.0",
        "web": "mobile-android-v1.2.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "hidden_hub_intelligence",
      "name": "Hidden hub intelligence and community activation foundation",
      "summary": "Hidden hubs, community pulse and organizer-demand insight semantics.",
      "description": "Hidden hubs, community pulse and organizer-demand insight semantics.",
      "statusBySurface": {
        "mobile-android": "partial",
        "backend": "partial",
        "shared-contract": "shipped",
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-162",
        "HOB-181",
        "HOB-182",
        "HOB-183",
        "HOB-184",
        "HOB-206"
      ],
      "firstRelease": {
        "mobile-android": "mobile-android-v1.3.0",
        "backend": "mobile-android-v1.3.0",
        "shared-contract": "mobile-android-v1.3.0",
        "web": "mobile-android-v1.3.0"
      },
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current workstream",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "external_marketplace",
      "name": "External event marketplace expansion",
      "summary": "Ticketmaster, SeatGeek and external marketplace expansion backlog.",
      "description": "External marketplace and imported source expansion work that is valid in Jira but not safely treated as already shipped current runtime.",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-4",
        "HOB-11",
        "HOB-12",
        "HOB-13",
        "HOB-22",
        "HOB-23",
        "HOB-47",
        "HOB-48",
        "HOB-49",
        "HOB-50",
        "HOB-51",
        "HOB-52"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "venue_partner_layer",
      "name": "Venue and partner experience layer",
      "summary": "Venue and partner-facing experience backlog.",
      "description": "Venue partner experience backlog, including partner and venue capability expansion beyond the currently evidenced place-search baseline.",
      "statusBySurface": {
        "web": "planned",
        "mobile-android": "planned",
        "backend": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "geoapify"
      ],
      "jiraKeys": [
        "HOB-7",
        "HOB-20",
        "HOB-39",
        "HOB-69",
        "HOB-71",
        "HOB-75",
        "HOB-84"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "legacy_places_epic",
      "name": "Legacy places architecture lineage",
      "summary": "Legacy or duplicate places architecture epic lineage kept for Jira completeness.",
      "description": "Retained for Jira completeness; not treated as a separate shipped runtime unit.",
      "statusBySurface": {
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "geoapify",
        "tomtom"
      ],
      "jiraKeys": [
        "HOB-140"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "web_parity_event_trip",
      "name": "Web parity: event editor, detail and trip lifecycle",
      "summary": "Web parity follow-up for first-party event lifecycle and trip continuity.",
      "description": "Follow-up story to align web event lifecycle semantics with Android and shared backend.",
      "statusBySurface": {
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "mapy"
      ],
      "jiraKeys": [
        "HOB-199"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "web_parity_places",
      "name": "Web parity: places, venue and trip continuity",
      "summary": "Web parity follow-up for normalized places and venue/trip continuity.",
      "description": "Follow-up story to align web venue selection and trip continuity with the normalized places contract.",
      "statusBySurface": {
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "geoapify",
        "tomtom",
        "mapy"
      ],
      "jiraKeys": [
        "HOB-200"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "web_parity_discovery",
      "name": "Web parity: discovery filters and cards",
      "summary": "Web parity follow-up for discovery lenses, filters and event cards.",
      "description": "Follow-up story to align web discovery semantics with current Android/shared behavior.",
      "statusBySurface": {
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-201"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "web_parity_organizer",
      "name": "Web parity: organizer attendee and check-in surfaces",
      "summary": "Web parity follow-up for attendee roster, organizer operations and check-in.",
      "description": "Follow-up story to align organizer attendee/check-in semantics on web with Android and backend.",
      "statusBySurface": {
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-202"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "web_parity_insights",
      "name": "Web parity: organizer messaging and analytics",
      "summary": "Web parity follow-up for organizer messaging, delivery posture and analytics.",
      "description": "Follow-up story to align organizer messaging and analytics semantics on web.",
      "statusBySurface": {
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-203"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "web_parity_retention",
      "name": "Web parity: onboarding, session and reminder journey",
      "summary": "Web parity follow-up for onboarding and reminder journey.",
      "description": "Follow-up story to align onboarding, session and reminder semantics across surfaces.",
      "statusBySurface": {
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-204"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "web_parity_community",
      "name": "Web parity: community pulse and hidden hubs",
      "summary": "Web parity follow-up for hidden hub and community pulse semantics.",
      "description": "Follow-up story to align community-intelligence semantics across surfaces.",
      "statusBySurface": {
        "web": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-205"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "backend_contract_docs",
      "name": "Backend contract documentation",
      "summary": "Backfill and document the applied Supabase schema, RLS and RPC contract.",
      "description": "Documentation follow-up to make the applied backend contract auditable and understandable across teams.",
      "statusBySurface": {
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-207"
      ],
      "tenant": "Both",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    },
    {
      "id": "android_backfill_matrix",
      "name": "Android implementation backfill matrix",
      "summary": "Document Android implementation coverage and cross-surface follow-up matrix.",
      "description": "Documentation follow-up that keeps mobile implementation and cross-surface parity traceable.",
      "statusBySurface": {
        "mobile-android": "planned",
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "HOB-211"
      ],
      "tenant": "Both",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No confirmed production deploy",
      "source": "seed"
    }
  ],
  "integrations": [
    {
      "id": "github",
      "name": "GitHub",
      "category": "source-control",
      "state": "connected",
      "notes": "Web and Android repositories linked",
      "url": "https://github.com/HenrikFaul/hobbeast"
    },
    {
      "id": "jira",
      "name": "Jira",
      "category": "planning",
      "state": "connected",
      "notes": "Project HOB used for product implementation tracking",
      "url": "https://hobbeast.atlassian.net/issues/?jql=project%20%3D%20HOB"
    },
    {
      "id": "vercel",
      "name": "Vercel",
      "category": "deployment",
      "state": "connected",
      "notes": "Previews and environments used for web release visibility"
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
      "name": "Mapy.com",
      "category": "external-api",
      "state": "connected",
      "environmentSensitive": true,
      "notes": "Trip planning, routing and continuity provider"
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
      "id": "hob-parity-1",
      "severity": "critical",
      "sourceSurface": "backend",
      "affectedSurface": "web",
      "reason": "Shared first-party event, participant, reminder and organizer contracts advanced faster on backend/mobile than on the web surface. Web parity issues remain open and must not drift.",
      "jiraKey": "HOB-199",
      "state": "open"
    },
    {
      "id": "hob-parity-2",
      "severity": "warning",
      "sourceSurface": "mobile-android",
      "affectedSurface": "web",
      "reason": "Discovery, places and organizer runtime semantics on Android are ahead of the web implementation and require explicit parity follow-up.",
      "jiraKey": "HOB-201",
      "state": "tracked"
    },
    {
      "id": "hob-parity-3",
      "severity": "warning",
      "sourceSurface": "backend",
      "affectedSurface": "mobile-ios",
      "reason": "Shared backend is evolving, but no iPhone client parity baseline is represented yet.",
      "state": "tracked"
    }
  ],
  "overview": {
    "applicationDescription": "Cross-platform community and event platform with shared Supabase backend, imported external discovery, first-party event lifecycle, organizer tooling and trip-planning/community-intelligence extensions.",
    "techStack": [
      "Next.js / React web surface",
      "Android native client",
      "Supabase Auth/Postgres/RLS/RPC",
      "Geoapify + TomTom places layer",
      "Mapy trip-planning contract",
      "Lovable-assisted web iteration"
    ],
    "hostingServices": [
      "Vercel web hosting",
      "Supabase backend platform"
    ],
    "backendServices": [
      "Supabase Auth",
      "Supabase Postgres",
      "Supabase RLS",
      "Supabase SQL functions / RPC"
    ],
    "projectStructure": [
      "Web surface (Lovable/Vercel)",
      "Android client",
      "Shared Supabase backend contract",
      "Imported external events + first-party events"
    ],
    "runtimeNotes": [
      "Current governance model distinguishes implemented current workstream items from Jira/spec-only parity and documentation follow-up.",
      "Release rows are governance reconstruction units derived from inventories, repository evidence and Jira exports; they are not claimed to be a formal production deployment audit."
    ]
  },
  "importedJiraIssues": [
    {
      "id": "hob-jira-1",
      "key": "HOB-1",
      "summary": "Epic: Discovery, search and personalization foundation",
      "description": "Goal: strengthen Hobbeast's core discovery experience without regressing current working filters.\n\nScope:\n\n* preserve current working event filtering UX\n* improve personal recommendation logic\n* improve category persistence and filter state handling\n* improve relevance ranking for events\n* support external event source blending in discovery\n\nSuccess criteria:\n\n* category, personal and free-text filters can switch without losing user selections\n* events are ranked more meaningfully for the user\n* external sources can appear in the same discovery surface without breaking the current Hobbeast experience\n\nImplementation backfill note:\n\nThe Android implementation track already moved discovery significantly forward with explicit discovery lenses, category/search/distance/venue filtering, richer event-card journey semantics, imported-vs-first-party posture and community-aware empty/sparse-data handling. This epic should therefore be treated as partially concretized by implementation, not only conceptual.\n\nCross-surface follow-up:\n\nWeb must now align with the same discovery/filter/card semantics to avoid drift. Follow-up story: HOB-201.",
      "labels": [
        "backlog",
        "discovery",
        "GAP",
        "gap-analysis",
        "hobbeast"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-1",
      "source": "file-import"
    },
    {
      "id": "hob-jira-2",
      "key": "HOB-2",
      "summary": "Epic: Organizer tools and attendee operations",
      "description": "Goal: extend Hobbeast with organizer-focused capabilities inspired by InviteM, without regressing the current community-first experience.\n\nScope:\n\n* explicit Organizer mode / organizer-facing surfaces and permissions\n* attendee management\n* capacity and waitlist\n* event communication and reminders\n* check-in ready event lifecycle\n* organizer-specific dashboard surfaces\n\nSuccess criteria:\n\n* organizers can manage attendees and event participation more effectively\n* an explicit organizer-facing operating mode can be introduced without harming the current Hobbeast simplicity\n* event operations are possible without losing Hobbeast's current simplicity\n\nImplementation backfill note:\n\nThe Android implementation track already pushed forward attendee roster handling, status filters, waitlist posture, check-in runtime, invite-code handling, audit-aware operations, first organizer run guidance and organizer operational readouts. This epic is therefore partially concretized by implementation.\n\nCross-surface follow-up:\n\nWeb must align to the same participant-state, check-in and organizer runtime semantics. Follow-up story: HOB-202.",
      "labels": [
        "backlog",
        "GAP",
        "gap-analysis",
        "hobbeast",
        "organizer"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-2",
      "source": "file-import"
    },
    {
      "id": "hob-jira-3",
      "key": "HOB-3",
      "summary": "Story: A fő eseményszűrők állapotkezelése legyen konzisztens és perzisztens",
      "description": "h1. Objective\n\nEnsure the main event filters behave as mutually exclusive primary modes while preserving category selections across mode switches.\n\nh1. Problem statement\n\nThe current Events page mixes two concerns:\n\n# Which *primary discovery mode* is active ({{search}}, {{all}}, {{personal}}, {{categories}})\n# Which *category selections* are stored in memory\n\nThis causes regressions where category chips remain selected in memory but are not visually or functionally re-activated when the user returns to the Categories mode.\n\nh1. Functional requirements\n\nh2. Primary filter model\n\n* Only one primary filter can be active at a time:\n** {{Search}}\n** {{All}}\n** {{For me}}\n** {{Categories}}\n* Switching primary filter must *not* clear stored category selections.\n* Category selections are only cleared by:\n** {{Clear selections}}\n** new session / full reset logic\n\nh2. Category persistence\n\n* Persist selected items in dedicated state buckets:\n** {{selectedCategoryIds}}\n** {{selectedSubcategoryKeys}}\n** {{selectedActivityKeys}}\n* Persist expanded tree state separately from selected state.\n* When {{Categories}} is re-activated, previously selected items must:\n** render as active (green)\n** apply filtering immediately\n** reopen relevant parent branches if needed\n\nh2. Search mode\n\n* Typing in the free text input activates {{Search}} mode.\n* Clearing the input returns the page to {{All}} unless the user explicitly reselects another primary mode.\n* Search mode must not delete stored category selections.\n\nh2. Personal mode\n\n* {{For me}} mode must use favorite categories / hobbies / joined history logic.\n* Entering {{For me}} mode must not delete stored category selections.\n\nh1. Technical design\n\nh2. Frontend state contract\n\n{noformat} type PrimaryFilter = 'all' | 'search' | 'personal' | 'categories'\n\n const [primaryFilter, setPrimaryFilter] = useState<PrimaryFilter>('all')\n const [search, setSearch] = useState('')\n const [selectedCategoryIds, setSelectedCategoryIds] = useState<Set<string>>(new Set())\n const [selectedSubcategoryKeys, setSelectedSubcategoryKeys] = useState<Set<string>>(new Set())\n const [selectedActivityKeys, setSelectedActivityKeys] = useState<Set<string>>(new Set())\n const [expandedCategoryIds, setExpandedCategoryIds] = useState<Set<string>>(new Set()){noformat}\n\nh2. Derived behaviour\n\n* {{primaryFilter}} decides which filtering pipeline is executed.\n* selected category states decide chip active styling and category filter payload.\n* category filtering only runs when {{primaryFilter === 'categories'}}.\n\nh2. Filtering pipeline order\n\n# base event source list\n# source filter ({{All sources / Hobbeast / External}})\n# distance filter\n# primary filter branch:\n#* {{all}} -> no extra restriction\n#* {{search}} -> text match\n#* {{personal}} -> personal recommendation rule set\n#* {{categories}} -> category tree matching\n# sort / ranking\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Keress eseményt [________________________]                   |\n|                                                              |\n| [Mind] [Nekem] [Kategóriák]                                  |\n|                                                              |\n| Active primary mode: KATEGÓRIÁK                              |\n+--------------------------------------------------------------+\n\nKategóriák modal\n+--------------------------------------------------------------+\n| Kategóriák                                  [Törlés] [Kész]  |\n+--------------------------------------------------------------+\n| > Gasztronómia                                               |\n|   [x] Étterem                                                |\n|   [x] Kávézó                                                 |\n|     [x] Specialty                                            |\n|     [ ] Brunch                                               |\n| > Sport                                                      |\n|   [ ] Futás                                                  |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* exactly one primary mode is active at any time\n* category selections survive switching to {{All}}, {{For me}}, or {{Search}}\n* returning to {{Categories}} restores visual active state and actual filtering\n* selected items are green/active without requiring reselection\n* {{Clear selections}} resets both stored selections and active category filtering\n* no regression in source filter or distance filter behaviour\n\nh1. QA scenarios\n\n# Select 3 categories -> switch to {{For me}} -> switch back to {{Categories}} -> selections still active and filtering applied\n# Select categories -> type text search -> clear text -> categories remain stored but inactive until {{Categories}} is clicked again\n# Select categories -> click {{Clear selections}} -> all category states cleared\n# Use distance filter + categories together -> result set remains stable and predictable",
      "labels": [
        "discovery",
        "filters",
        "GAP",
        "hobbeast",
        "ux"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-3",
      "source": "file-import"
    },
    {
      "id": "hob-jira-4",
      "key": "HOB-4",
      "summary": "Epic: External event integrations and marketplace expansion",
      "description": "Goal: integrate third-party event sources into Hobbeast without breaking the current event experience.\n\nScope:\n\n* Ticketmaster integration\n* SeatGeek integration\n* later Universe proof of concept\n* later Ticket Tailor partner connector\n* external event normalization, deduplication and rendering\n\nSuccess criteria:\n\n* external events can be synced into Hobbeast\n* external events can be displayed in the existing event list with source-aware badges and links\n* the current Hobbeast event experience remains intact",
      "labels": [
        "backlog",
        "external-events",
        "GAP",
        "hobbeast",
        "integrations"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-4",
      "source": "file-import"
    },
    {
      "id": "hob-jira-5",
      "key": "HOB-5",
      "summary": "Epic: RSVP, ticketing and check-in lifecycle",
      "description": "h1. Objective\n\nIntroduce a richer RSVP, ticketing-light and check-in-ready lifecycle for Hobbeast events.\n\nh1. Functional scope\n\n* support participation states beyond join/unsubscribe\n* support capacity-aware admission\n* support lightweight ticket and admission control extensions\n* provide a future-safe contract for QR / code-based check-in\n\nh1. Participation state model\n\nSupported states:\n\n* {{interested}}\n* {{going}}\n* {{waitlist}}\n* {{checked_in}}\n* {{cancelled}}\n* {{no_show}}\n\nRules:\n\n* {{going}} requires available capacity, unless organizer override exists\n* if capacity is full and waitlist enabled, new attendee enters {{waitlist}}\n* {{checked_in}} only valid from {{going}}\n* {{no_show}} only valid after event start/end workflow\n* organizer can manually transition {{waitlist -> going}}\n\nh1. Ticketing-light scope\n\n* support {{participation_type = external_ticket}}\n* support {{external_ticket_url}}\n* support {{ticket_token}} / {{invite_code}} placeholders for internal admission control\n* support future {{ticket_tier_id}} reference without implementing full payment now\n\nh1. Check-in scope\n\n* check-in method can be:\n** manual organizer check-in\n** QR token scan\n** invite code entry\n* check-in surface must validate:\n** event id\n** attendee identity / token\n** current participation status\n** duplicate check-in prevention\n\nh1. Suggested backend entities\n\n{noformat}EventParticipation {\n  id: uuid\n  event_id: uuid\n  user_id: uuid\n  status: 'interested' | 'going' | 'waitlist' | 'checked_in' | 'cancelled' | 'no_show'\n  joined_at: timestamptz\n  checked_in_at: timestamptz | null\n  invite_code: string | null\n  ticket_token: string | null\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}Event detail card\n+---------------------------------------------------+\n| Friday Board Game Night                           |\n| 18 / 24 spots filled                              |\n| Status: GOING                                     |\n|                                                   |\n| [Interested] [Going] [Leave]                      |\n| Waitlist enabled                                  |\n+---------------------------------------------------+\n\nOrganizer check-in view\n+---------------------------------------------------+\n| Check-in: Friday Board Game Night                 |\n+---------------------------------------------------+\n| Search attendee [________________________]        |\n| Or scan QR                                        |\n|                                                   |\n| John Doe          GOING        [Check in]         |\n| Anna Smith        WAITLIST     [Promote]          |\n+---------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* participation lifecycle supports interested / going / waitlist / checked_in / cancelled / no_show\n* waitlist promotion logic is possible\n* duplicate check-in is prevented\n* external ticket URL can be associated to an event\n* future ticket tiers can plug into this lifecycle without redesign",
      "labels": [
        "backlog",
        "GAP",
        "gap-analysis",
        "hobbeast",
        "rsvp",
        "ticketing"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-5",
      "source": "file-import"
    },
    {
      "id": "hob-jira-6",
      "key": "HOB-6",
      "summary": "Epic: Organizer analytics, insights and communication",
      "description": "Goal: give organizers measurable insight and communication tools without turning Hobbeast into a heavy backoffice product.\n\nScope:\n\n* event performance dashboard\n* source attribution and conversion insights\n* attendee communication tools\n* reminder and update messaging\n* organizer-friendly summaries\n\nSuccess criteria:\n\n* organizers can understand event performance and communicate with attendees from the platform\n\nImplementation backfill note:\n\nThe Android implementation track already introduced organizer message composition posture, delivery-state framing, analytics runtime banners, source-aware readouts, health classification and operational empty-state handling. The backend bootstrap also introduced organizer messaging and analytics tables/functions as shared contract.\n\nCross-surface follow-up:\n\nWeb must align to the same messaging, delivery-state and analytics semantics. Follow-up story: HOB-203.",
      "labels": [
        "analytics",
        "backlog",
        "GAP",
        "gap-analysis",
        "hobbeast",
        "organizer"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-6",
      "source": "file-import"
    },
    {
      "id": "hob-jira-7",
      "key": "HOB-7",
      "summary": "Epic: Venue and partner experience layer",
      "description": "Goal: add venue-facing and partner-facing capabilities that complement Hobbeast's community-first product without turning the product into a full hospitality operations platform.\n\nScope:\n\n* partner venue profiles\n* venue metadata on event pages\n* partner capabilities and badges\n* future reservation-ready extension points\n\nSuccess criteria:\n\n* venue-related information can enrich discovery and event pages\n* partner venue features do not break the current lightweight event experience",
      "labels": [
        "backlog",
        "GAP",
        "gap-analysis",
        "hobbeast",
        "partners",
        "venue"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-7",
      "source": "file-import"
    },
    {
      "id": "hob-jira-8",
      "key": "HOB-8",
      "summary": "Epic: Mobile retention, reminders and engagement loops",
      "description": "Goal: improve retention and re-engagement with mobile-friendly and reminder-oriented features.\n\nScope:\n\n* PWA readiness\n* reminder flows\n* calendar integration\n* push-ready architecture\n* re-engagement loops around joined and relevant events\n\nSuccess criteria:\n\n* users are reminded about relevant and joined events\n* Hobbeast becomes more sticky without sacrificing simplicity\n\nImplementation backfill note:\n\nThe Android implementation track already introduced onboarding, session continuity, first organizer run guidance, reminder permission posture, reminder-loop framing, personal journey blocks and planning/reminder empty-state handling. This epic is therefore partially concretized by implementation.\n\nCross-surface follow-up:\n\nWeb should align to the same journey-state semantics even if platform permission mechanics differ. Follow-up story: HOB-204.",
      "labels": [
        "backlog",
        "GAP",
        "gap-analysis",
        "hobbeast",
        "mobile",
        "retention"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-8",
      "source": "file-import"
    },
    {
      "id": "hob-jira-9",
      "key": "HOB-9",
      "summary": "Story: Build recommendation ranking for 'Nekem' and personalized discovery",
      "description": "Felhasználóként relevánsabb eseményeket szeretnék látni a 'Nekem' nézetben, hogy gyorsabban találjak a hobbijaimhoz, korábbi csatlakozásaimhoz és preferenciáimhoz illeszkedő programokat.\n\nScope:\n\n* interests/hobbies weighting\n* joined history weighting\n* category affinity scoring\n* future support for trending/featured signals\n* explainable recommendation reasons, pl. \"Because you joined X\" / \"Because you like Y\"\n* visible recommendation badges or helper text on relevant cards\n\nAcceptance criteria:\n\n* the 'Nekem' list uses explicit ranking logic\n* ranking remains explainable and debuggable\n* the UI can show meaningful recommendation reasons to the user\n* current working event list UX is preserved",
      "labels": [
        "discovery",
        "GAP",
        "hobbeast",
        "recommendation"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-9",
      "source": "file-import"
    },
    {
      "id": "hob-jira-10",
      "key": "HOB-10",
      "summary": "Story: Add trending, featured and early-access discovery surfaces",
      "description": "h1. Objective\n\nDefine the discovery surfaces and ranking logic for {{Trending}}, {{Featured}}, and {{Early access}} event sections on the Events page.\n\nh1. Functional requirements\n\nh2. Discovery sections\n\nThe Events page can expose separate horizontally or vertically stacked sections:\n\n* Trending nearby\n* Featured events\n* Early access / limited spots\n* Because you joined / Because you like\n\nh2. Ranking contracts\n\nh3. Trending nearby\n\nInputs:\n\n* recent views\n* recent detail opens\n* recent join clicks\n* recent confirmed {{going}}\n* distance from user/profile location\n* time decay (recent interactions weigh more)\n\nSuggested formula example:\n\n{noformat}trending_score =\n  (views * 0.1) +\n  (detail_opens * 0.3) +\n  (join_clicks * 0.6) +\n  (going_count * 1.0) -\n  distance_penalty -\n  stale_event_penalty{noformat}\n\nh3. Featured events\n\n* manually curated by admin/organizer flag\n* optional future paid promotion flag\n* featured ordering by explicit {{featured_priority}}\n\nh3. Early access / limited spots\n\n* events with {{visibility_type = early_access_limited}}\n* or events with small remaining capacity threshold\n* can show {{N spots left}} badge\n\nh2. UI rules\n\n* these sections must not break the existing flat list and primary filters\n* section cards reuse the main event card contract where possible\n* if not enough events exist for a section, section can be hidden\n\nh1. Suggested data model extensions\n\n{noformat}Event {\n  is_featured: boolean\n  featured_priority: number | null\n  visibility_type: 'public' | 'private' | 'invite_only' | 'early_access_limited'\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Trending nearby                                               |\n| [Card] [Card] [Card]                                          |\n+--------------------------------------------------------------+\n| Featured                                                      |\n| [Featured card] [Featured card]                               |\n+--------------------------------------------------------------+\n| Early access / limited spots                                  |\n| [Only 5 spots left] [Invite-only preview]                     |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* discovery sections have explicit inclusion and ranking rules\n* trending score is explainable and adjustable\n* featured section supports manual curation\n* early access section supports limited-availability visibility logic",
      "labels": [
        "discovery",
        "featured",
        "GAP",
        "hobbeast",
        "ranking"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-10",
      "source": "file-import"
    },
    {
      "id": "hob-jira-11",
      "key": "HOB-11",
      "summary": "Story: Improve external event rendering and blending in the main events list",
      "description": "h1. Objective\n\nRender external events inside the main Hobbeast event list without breaking native event UX or source filtering.\n\nh1. Functional requirements\n\nh2. Supported source types\n\n* hobbeast native events\n* eventbrite events\n* ticketmaster events\n* seatgeek events\n* future external providers using {{external_events}}\n\nh2. Rendering contract\n\nRequired card fields:\n\n* source label / badge\n* title\n* short description\n* city / address summary\n* start date / time\n* category summary\n* price summary if available\n* CTA button:\n** native event -> open internal detail page\n** external event -> open external_url or mapped detail proxy\n\nh2. Behaviour rules\n\n* external events must appear in mixed lists when source filter allows them\n* external events must appear under {{External}} source filter even if provider differs\n* source-specific visual badge required ({{Ticketmaster}}, {{Eventbrite}}, {{SeatGeek}})\n* own event controls must never appear on external event cards\n* join / unsubscribe CTA must not appear for unmanaged external providers unless explicitly supported later\n\nh2. Mapping contract\n\n{noformat}DisplayEvent {\n  id: string\n  source: 'hobbeast' | 'eventbrite' | 'ticketmaster' | 'seatgeek' | 'external'\n  sourceBadge: string\n  title: string\n  description: string | null\n  city: string | null\n  address: string | null\n  startsAt: string | null\n  category: string | null\n  imageUrl: string | null\n  externalUrl: string | null\n  isExternal: boolean\n}{noformat}\n\nh2. Fallback rules\n\n* if category missing -> render {{Other}}\n* if image missing -> render generic placeholder\n* if external_url missing -> disable CTA and mark record as incomplete\n* if date missing -> event hidden from public list unless fallback policy exists\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| [Ticketmaster] Friday Jazz Night                             |\n| Budapest • 2026-04-12 19:00                                  |\n| Live music, downtown venue                                   |\n| From 4500 HUF                                                |\n|                                              [Open source]   |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* external cards render consistently beside native cards\n* source filter works for all external providers\n* source badge and CTA behaviour are deterministic per provider\n* incomplete external records follow fallback rules instead of silently breaking UI",
      "labels": [
        "external-events",
        "GAP",
        "hobbeast",
        "rendering",
        "ticketmaster"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-11",
      "source": "file-import"
    },
    {
      "id": "hob-jira-12",
      "key": "HOB-12",
      "summary": "Story: Integrate Ticketmaster sync and normalization into the external event ingestion pipeline",
      "description": "h1. Objective\n\nImplement a production-ready Ticketmaster ingestion flow that normalizes provider data into Hobbeast {{external_events}} records.\n\nh1. Functional requirements\n\nh2. Request modes\n\n* {{search_preview}}\n* {{sync}}\n\nh2. Provider fetch contract\n\n* use Ticketmaster Discovery API\n* support filters:\n** countryCode\n** city\n** classificationName\n** keyword\n** startDateTime / safe date filtering\n** page\n** size\n\nh2. Mapping rules\n\n{noformat}external_source = 'ticketmaster'\nexternal_id = tm.id\nexternal_url = tm.url\ntitle = tm.name\ndescription = tm.info || tm.pleaseNote\ncategory = classifications.segment.name\nsubcategory = classifications.genre.name || classifications.subGenre.name\nlocation_city = venue.city.name\nlocation_address = venue.address.line1 || venue.name\nlocation_lat = venue.location.latitude\nlocation_lon = venue.location.longitude\nevent_date = dates.start.localDate\nevent_time = dates.start.localTime\nprice_min = priceRanges[0].min\nprice_max = priceRanges[0].max\ncurrency = priceRanges[0].currency\norganizer_name = promoter.name\nimage_url = images[0].url{noformat}\n\nh2. Deduplication rules\n\n* unique key: {{(external_source, external_id)}}\n* upsert on sync\n* retain latest {{source_payload}} and {{source_last_synced_at}}\n\nh2. Failure handling\n\n* malformed records must be skipped with structured log entry\n* HTTP/provider errors must return diagnosable payload\n* zero-result response must not be treated as technical failure\n\nh2. Operational notes\n\n* function must support preview mode without DB writes\n* sync mode must return inserted/updated count\n* provider secrets must be read from environment / Supabase secrets\n\nh1. Sequence\n\n{noformat}Client/Test trigger\n -> Edge Function\n -> Ticketmaster API fetch\n -> map/normalize\n -> dedupe/upsert into external_events\n -> response summary{noformat}\n\nh1. Acceptance criteria\n\n* preview mode returns normalized event payloads without DB writes\n* sync mode upserts normalized records into {{external_events}}\n* duplicate provider records are not duplicated in DB\n* zero-result case is distinguishable from provider failure",
      "labels": [
        "backend",
        "GAP",
        "hobbeast",
        "integration",
        "ticketmaster"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-12",
      "source": "file-import"
    },
    {
      "id": "hob-jira-13",
      "key": "HOB-13",
      "summary": "Story: Integrate SeatGeek as a second external event source",
      "description": "h1. Objective\n\nImplement a production-ready SeatGeek ingestion flow normalized into Hobbeast {{external_events}}.\n\nh1. Functional requirements\n\nh2. Request modes\n\n* {{search_preview}}\n* {{sync}}\n\nh2. Provider fetch contract\n\n* support SeatGeek client credentials / public API contract as available\n* support query parameters:\n** q\n** page\n** per_page\n** optional geographic filters when supported\n\nh2. Mapping rules\n\n{noformat}external_source = 'seatgeek'\nexternal_id = sg.id\ntitle = sg.title\nexternal_url = sg.url\ndescription = sg.description || null\ncategory = sg.type || sg.taxonomies[0]?.name || null\nlocation_city = sg.venue.city\nlocation_address = sg.venue.address || sg.venue.name\nlocation_lat = sg.venue.location.lat\nlocation_lon = sg.venue.location.lon\nevent_date = derived from sg.datetime_utc / local date mapping\nevent_time = derived from sg.datetime_utc / local time mapping\nprice_min = sg.stats.lowest_price || null\nprice_max = sg.stats.highest_price || null\ncurrency = inferred/default provider currency if available\nimage_url = sg.performers[0]?.image || null{noformat}\n\nh2. Deduplication rules\n\n* unique key: {{(external_source, external_id)}}\n* provider-specific updates must overwrite previous normalized snapshot\n\nh2. Failure handling\n\n* malformed record skip with structured log\n* zero results distinct from provider failure\n* auth error and quota error distinct in response contract\n\nh1. Acceptance criteria\n\n* preview mode returns normalized SeatGeek data without DB write\n* sync mode upserts records into {{external_events}}\n* SeatGeek records are normalized consistently with Ticketmaster records",
      "labels": [
        "backend",
        "GAP",
        "hobbeast",
        "integration",
        "seatgeek"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-13",
      "source": "file-import"
    },
    {
      "id": "hob-jira-14",
      "key": "HOB-14",
      "summary": "Story: Add attendee management tools for event organizers",
      "description": "h1. Objective\n\nProvide a concrete organizer-facing attendee management view for a single event with filterable participant states and actionable row-level controls.\n\nh1. Functional requirements\n\nh2. Attendee list surface\n\n* organizer can open attendee management from owned event detail page or Organizer mode\n* attendee list columns:\n** display_name\n** email (if available and permission-safe)\n** participation_status\n** joined_at\n** checked_in_at\n** ticket tier / access type if present\n* list must support pagination and server-side filtering for large events\n\nh2. Filters\n\n* status filters:\n** all\n** interested\n** going\n** waitlist\n** checked_in\n** cancelled\n** no_show\n* free-text search by display_name / email\n* optional sort by joined_at / status / checked_in_at\n\nh2. Row actions\n\n* promote waitlist -> going\n* move going -> cancelled\n* undo check-in\n* open attendee detail drawer\n* add organizer note on attendee record\n\nh2. Attendee detail drawer\n\nRequired blocks:\n\n* basic identity summary\n* participation timeline\n* check-in history\n* organizer notes\n* future messaging shortcuts\n\nh1. Backend notes\n\nSuggested entity extensions:\n\n{noformat}EventParticipation {\n  id: uuid\n  event_id: uuid\n  user_id: uuid\n  status: 'interested' | 'going' | 'waitlist' | 'checked_in' | 'cancelled' | 'no_show'\n  joined_at: timestamptz\n  checked_in_at: timestamptz | null\n  organizer_note: string | null\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+------------------------------------------------------------------+\n| Attendees: Friday Board Game Night                               |\n+------------------------------------------------------------------+\n| Search [____________________]  Status [Going v]  Sort [Joined v] |\n+------------------------------------------------------------------+\n| John Doe    john@example.com     GOING       2026-04-01 [Open]   |\n| Anna Smith  anna@example.com     WAITLIST    2026-04-02 [Promote]|\n| Mark Lee    mark@example.com     CHECKED_IN  2026-04-02 [Undo]   |\n+------------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizer can filter and search participants by state\n* organizer can trigger row-level actions without leaving attendee screen\n* attendee detail drawer exposes timeline and organizer note state\n* pagination/filtering works for larger attendee lists",
      "labels": [
        "attendees",
        "GAP",
        "hobbeast",
        "organizer"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-14",
      "source": "file-import"
    },
    {
      "id": "hob-jira-15",
      "key": "HOB-15",
      "summary": "Story: Add capacity and waitlist handling to event participation",
      "description": "h1. Objective\n\nDefine capacity enforcement and waitlist promotion behaviour for Hobbeast event participation.\n\nh1. Functional requirements\n\nh2. Capacity model\n\n* event can define {{max_capacity}}\n* event can define {{waitlist_enabled}}\n* effective free slots = {{max_capacity - going_count}}\n* {{interested}} users do not consume capacity\n* {{going}} users consume capacity\n* {{checked_in}} remains counted under admitted attendees\n\nh2. Entry rules\n\n* if free slot available and user confirms participation -> status {{going}}\n* if no free slot and waitlist enabled -> status {{waitlist}}\n* if no free slot and waitlist disabled -> show full-state error\n\nh2. Promotion rules\n\n* organizer can manually promote waitlist attendee to {{going}}\n* optional future auto-promotion hook can be supported when slot frees up\n* promotion must fail if no free slot exists and no override is allowed\n\nh2. Visibility rules\n\n* event detail page must show:\n** current admitted count\n** capacity limit\n** waitlist enabled state\n* organizer panel must show:\n** going count\n** waitlist count\n** remaining slots\n\nh1. Suggested data model fields\n\n{noformat}Event {\n  max_capacity: number | null\n  waitlist_enabled: boolean\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+---------------------------------------------------+\n| Friday Board Game Night                           |\n| 18 / 24 spots filled                              |\n| Waitlist: enabled                                 |\n|                                                   |\n| [Join]                                            |\n+---------------------------------------------------+\n\nFull state example\n+---------------------------------------------------+\n| 24 / 24 spots filled                              |\n| Waitlist available                                |\n| [Join waitlist]                                   |\n+---------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* capacity logic differentiates between interested and going users\n* waitlist entry works only when configured\n* organizer can see remaining slots and waitlist counts\n* UI communicates full/waitlist state clearly",
      "labels": [
        "capacity",
        "GAP",
        "hobbeast",
        "rsvp",
        "waitlist"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-15",
      "source": "file-import"
    },
    {
      "id": "hob-jira-16",
      "key": "HOB-16",
      "summary": "Story: Add richer RSVP states and participation lifecycle",
      "description": "h1. Objective\n\nDefine the full participation lifecycle state machine for Hobbeast event attendance beyond the current join/unsubscribe model.\n\nh1. Functional requirements\n\nh2. Supported states\n\n* {{interested}}\n* {{going}}\n* {{waitlist}}\n* {{checked_in}}\n* {{cancelled}}\n* {{no_show}}\n\nh2. Allowed transitions\n\n* default discovery action -> {{interested}}\n* {{interested -> going}}\n* {{interested -> cancelled}}\n* {{going -> cancelled}}\n* {{waitlist -> going}}\n* {{going -> checked_in}}\n* {{going -> no_show}} (after event time window)\n* {{checked_in -> cancelled}} not allowed in standard path\n\nh2. State semantics\n\n* {{interested}}: lightweight interest, no capacity reserved\n* {{going}}: confirmed slot, capacity reserved\n* {{waitlist}}: pending slot, no capacity reserved\n* {{checked_in}}: physically or logically admitted at event\n* {{cancelled}}: user/organizer removed participation\n* {{no_show}}: did not check in despite confirmed status\n\nh2. UI rules\n\n* event CTA area must render state-aware actions\n* status badge must be visible on event detail page and organizer attendee screen\n* own events must not show participation CTA as if user were an attendee-only user\n\nh1. Suggested state machine contract\n\n{noformat}type ParticipationStatus =\n  | 'interested'\n  | 'going'\n  | 'waitlist'\n  | 'checked_in'\n  | 'cancelled'\n  | 'no_show'{noformat}\n\nh1. UI wireframe\n\n{noformat}Event detail status block\n+---------------------------------------------------+\n| Your status: INTERESTED                           |\n|                                                   |\n| [Mark as going] [Remove interest]                 |\n+---------------------------------------------------+\n\nWaitlist example\n+---------------------------------------------------+\n| Your status: WAITLIST                             |\n| You will be notified if a slot becomes available. |\n| [Leave waitlist]                                  |\n+---------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* each participation state has explicit meaning\n* allowed state transitions are documented and enforceable\n* event UI can render state-specific controls and labels consistently",
      "labels": [
        "GAP",
        "hobbeast",
        "lifecycle",
        "rsvp"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-16",
      "source": "file-import"
    },
    {
      "id": "hob-jira-17",
      "key": "HOB-17",
      "summary": "Story: Add organizer-side attendee detail workspace and operator actions",
      "description": "h1. Objective\n\nSeparate the attendee detail/operator workspace from the attendee list management screen, so HOB-14 covers list-level management and this story covers the detailed operator workspace.\n\nh1. Scope split from HOB-14\n\n* HOB-14 = attendee list, filtering, row actions, pagination\n* HOB-17 = attendee detail workspace, timeline, operator actions, internal notes, history\n\nh1. Functional requirements\n\nh2. Attendee detail workspace\n\nOpen from attendee row action or organizer check-in surface.\n\nRequired panels:\n\n* identity summary\n* participation status card\n* timeline of participation changes\n* check-in audit history\n* internal organizer notes\n* quick actions\n\nh2. Quick actions\n\n* promote waitlist -> going\n* mark cancelled\n* mark no_show\n* add or edit organizer note\n* open message composer prefilled to this attendee (future-ready)\n\nh2. Timeline / audit\n\nShow chronological entries:\n\n* joined event\n* moved to waitlist\n* promoted to going\n* checked in\n* marked no_show\n* message sent (future-ready hook)\n\nh1. Suggested backend entities\n\n{noformat}ParticipationAudit {\n  id: uuid\n  participation_id: uuid\n  action: 'joined' | 'waitlisted' | 'promoted' | 'checked_in' | 'cancelled' | 'no_show' | 'note_updated'\n  actor_user_id: uuid | null\n  created_at: timestamptz\n  metadata: jsonb | null\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Attendee workspace: John Doe                                  |\n+--------------------------------------------------------------+\n| Status: GOING                                                 |\n| Joined: 2026-04-01 18:12                                      |\n| Checked in: -                                                 |\n| Note: [Prefers late arrival................................]  |\n| [Save note]                                                   |\n+--------------------------------------------------------------+\n| Quick actions                                                 |\n| [Promote] [Cancel] [Mark no-show] [Message later]            |\n+--------------------------------------------------------------+\n| Timeline                                                      |\n| 2026-04-01 18:12 Joined                                       |\n| 2026-04-02 09:15 Organizer note updated                       |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* attendee detail workspace is distinct from attendee list surface\n* organizer can inspect participation history and internal notes\n* operator actions create audit history entries where relevant",
      "labels": [
        "attendees",
        "GAP",
        "hobbeast",
        "organizer"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-17",
      "source": "file-import"
    },
    {
      "id": "hob-jira-18",
      "key": "HOB-18",
      "summary": "Story: Add event update, reminder and attendee communication tools",
      "description": "h1. Objective\n\nCreate a developer-ready organizer communication module for event updates and reminders.\n\nh1. Functional requirements\n\nh2. Message types\n\n* reminder\n* logistics_update\n* event_update\n* cancellation\n* custom_message\n\nh2. Audience targeting\n\n* all attendees\n* going\n* waitlist\n* checked_in\n* no_show\n* manual selection (future-ready)\n\nh2. Trigger modes\n\n* immediate send\n* scheduled reminder\n* event-relative reminder\n** X hours before start\n** X days before start\n\nh2. Message history\n\n* all sent messages must be stored per event\n* each history item must include:\n** message type\n** audience filter\n** created_at\n** sent_by\n** delivery state summary\n\nh2. Delivery states\n\n* draft\n* scheduled\n* sent\n* partially_failed\n* failed\n\nh1. Data model notes\n\n{noformat}EventMessage {\n  id: uuid\n  event_id: uuid\n  message_type: 'reminder' | 'logistics_update' | 'event_update' | 'cancellation' | 'custom_message'\n  audience_filter: 'all' | 'going' | 'waitlist' | 'checked_in' | 'no_show'\n  subject: string | null\n  body: string\n  delivery_state: 'draft' | 'scheduled' | 'sent' | 'partially_failed' | 'failed'\n  scheduled_for: timestamptz | null\n  actor_user_id: uuid\n  created_at: timestamptz\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Event communications                                          |\n+--------------------------------------------------------------+\n| Type [Reminder v] Audience [Going v]                         |\n| Schedule [Send now v]                                        |\n| Subject [Optional subject______________________________]      |\n| Body    [................................................]    |\n|                                              [Send message]   |\n+--------------------------------------------------------------+\n| Message history                                               |\n| Reminder   Going   Sent        2026-04-10 09:00              |\n| Update     All     Scheduled   2026-04-11 12:00              |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizer can compose and send event-scoped messages by audience segment\n* organizer can schedule reminders relative to the event\n* sent and scheduled messages appear in event message history\n* message delivery state is explicitly stored",
      "labels": [
        "communication",
        "GAP",
        "hobbeast",
        "organizer",
        "reminders"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-18",
      "source": "file-import"
    },
    {
      "id": "hob-jira-19",
      "key": "HOB-19",
      "summary": "Story: Add organizer event performance dashboard",
      "description": "h1. Objective\n\nProvide a developer-ready organizer analytics dashboard for native and external-source events.\n\nh1. Functional requirements\n\nh2. KPI cards\n\n* total views\n* unique viewers\n* detail page opens\n* join clicks / participation attempts\n* confirmed going count\n* waitlist count\n* checked-in count\n* no-show count\n\nh2. Derived metrics\n\n* view -> detail CTR\n* detail -> join conversion\n* save ratio (if save/favorite interaction exists)\n* dropout ratio (viewed but did not join)\n* attendance rate = checked_in / going\n\nh2. Breakdowns\n\n* by source:\n** hobbeast_native\n** eventbrite\n** ticketmaster\n** seatgeek\n** other_external\n* by category / subcategory\n* by geo (city / district if available)\n* by time window\n\nh2. Audience insights (privacy-safe)\n\n* aggregated attendee interests/categories\n* aggregated joined-history affinities\n* no raw PII-heavy demographic output in first version\n\nh1. Suggested backend metrics entities\n\n{noformat}EventAnalyticsDaily {\n  id: uuid\n  event_id: uuid\n  date: date\n  source: string | null\n  views: number\n  detail_opens: number\n  join_clicks: number\n  going_count: number\n  waitlist_count: number\n  checked_in_count: number\n  no_show_count: number\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+----------------------------------------------------------------+\n| Organizer analytics: Friday Board Game Night                    |\n+----------------------------------------------------------------+\n| [Views 1240] [Detail opens 640] [Going 82] [Checked-in 61]     |\n| [CTR 51.6%] [Join conv 12.8%] [Attendance 74.3%]               |\n+----------------------------------------------------------------+\n| Breakdown tabs: [Source] [Category] [Geo] [Timeline]           |\n+----------------------------------------------------------------+\n| Source breakdown                                                |\n| Hobbeast        420 views   36 joins                            |\n| Ticketmaster    500 views   21 joins                            |\n| Eventbrite      320 views   25 joins                            |\n+----------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizer can see core performance KPIs on a dedicated dashboard\n* dashboard supports source, category and geo breakdowns\n* save ratio / dropout / attendance rate are explicitly defined\n* dashboard works for both native and external-origin events where data exists",
      "labels": [
        "analytics",
        "GAP",
        "hobbeast",
        "organizer"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-19",
      "source": "file-import"
    },
    {
      "id": "hob-jira-20",
      "key": "HOB-20",
      "summary": "Story: Add partner venue profiles and venue metadata on event pages",
      "description": "h1. Objective\n\nImplement a lightweight but explicit venue profile and venue metadata layer that enriches event discovery and event detail pages.\n\nh1. Functional requirements\n\nh2. Venue profile page\n\nRequired sections:\n\n* venue hero block\n** name\n** city\n** address summary\n** partner badge\n** capability flags\n* venue description\n* upcoming events list\n* venue metadata block\n** reservations available\n** seating available\n** menu available\n** approximate location map block\n\nh2. Event page integration\n\n* if event has linked {{venue_id}}, render venue summary card on event detail page\n* venue summary card should include:\n** venue name\n** city/address summary\n** partner badge if applicable\n** capability chips\n** CTA to full venue profile\n\nh2. Discovery integration\n\n* venue metadata can be used as display enrichment in event list cards\n* no full reservation engine required in this story\n\nh1. Data model notes\n\n{noformat}Venue {\n  id: uuid\n  slug: string\n  name: string\n  description: string | null\n  city: string\n  address: string | null\n  lat: number | null\n  lon: number | null\n  reservations_available: boolean\n  seating_available: boolean\n  menu_available: boolean\n  partner_badge: boolean\n  image_url: string | null\n}\n\nEvent {\n  venue_id: uuid | null\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}Venue profile\n+--------------------------------------------------------------+\n| [Partner venue] The Green Room                               |\n| Budapest • Bartók Béla út                                    |\n| [Reservations] [Seating] [Menu]                              |\n+--------------------------------------------------------------+\n| Description                                                   |\n| Cozy partner venue for live music and board game nights.     |\n+--------------------------------------------------------------+\n| Upcoming events                                               |\n| - Friday Jazz Night                                           |\n| - Sunday Brunch Meetup                                        |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* venue profile page exists as a distinct surface\n* event detail pages can render linked venue summaries\n* venue capability flags are visible on venue and linked event surfaces\n* venue layer enriches discovery without introducing reservation logic in this story",
      "labels": [
        "GAP",
        "hobbeast",
        "partners",
        "venue"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-20",
      "source": "file-import"
    },
    {
      "id": "hob-jira-21",
      "key": "HOB-21",
      "summary": "Story: Add PWA, reminders and calendar-oriented retention features",
      "description": "h1. Objective\n\nCreate a retention-focused product layer for joined and relevant events with PWA readiness, reminder surfaces and calendar integrations.\n\nh1. Functional requirements\n\nh2. PWA readiness\n\n* install prompt support where browser allows\n* app manifest coverage for name, icons, theme color, start URL\n* offline-safe shell for key routes (lightweight first version)\n\nh2. Reminder surfaces\n\n* joined events reminder list on home/profile\n* upcoming event reminder card\n* reminder preference toggle per user\n\nh2. Calendar integration\n\n* add to calendar actions:\n** Google Calendar link\n** ICS file export\n* calendar export must include:\n** title\n** description\n** starts_at\n** ends_at\n** location summary\n** external URL/internal detail URL\n\nh2. Re-engagement surfaces\n\n* joined events section\n* upcoming this week section\n* because-you-joined reminders for recurring interests\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Upcoming for you                                              |\n+--------------------------------------------------------------+\n| Friday Board Game Night      Tomorrow 19:00   [Add calendar] |\n| Jazz Meetup                  In 3 days        [Add calendar] |\n+--------------------------------------------------------------+\n| [Install Hobbeast app]                                        |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* users can add events to calendar from Hobbeast surfaces\n* joined/upcoming reminders are visible in product\n* PWA install readiness is described and implementable\n* retention surfaces do not regress the main discovery experience",
      "labels": [
        "GAP",
        "hobbeast",
        "mobile",
        "reminders",
        "retention"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-21",
      "source": "file-import"
    },
    {
      "id": "hob-jira-22",
      "key": "HOB-22",
      "summary": "Story: Run Universe public-events proof of concept",
      "description": "h1. Objective\n\nRun a technically grounded Universe public-events proof of concept and document a clear go/no-go decision for Hobbeast integration.\n\nh1. Validation goals\n\n* verify whether Universe exposes sufficiently queryable public event data\n* verify authentication model and implementation complexity\n* verify required event fields can be mapped into Hobbeast {{external_events}}\n* identify hard blockers, quotas and compliance limitations\n\nh1. Validation checklist\n\nh2. Auth and connectivity\n\n* create Universe app credentials if required\n* validate token acquisition / auth handshake\n* document required scopes/permissions\n\nh2. Data retrieval\n\n* test public event query coverage\n* validate support for pagination\n* validate support for filtering by location/date/category if available\n\nh2. Mapping coverage\n\nRequired fields to test:\n\n* event id\n* title\n* description\n* category/type\n* venue/location\n* date/time\n* image\n* external URL\n* pricing summary\n\nh2. Output artefacts\n\n* sample normalized payload\n* missing-field matrix\n* auth complexity note\n* quota/rate-limit note\n* final decision:\n** go\n** conditional go\n** no-go\n\nh1. Technical output format\n\n{noformat}UniversePoCResult {\n  auth_model: string\n  can_query_public_events: boolean\n  supports_pagination: boolean\n  supported_filters: string[]\n  mapped_fields: string[]\n  missing_fields: string[]\n  blockers: string[]\n  recommendation: 'go' | 'conditional_go' | 'no_go'\n}{noformat}\n\nh1. Acceptance criteria\n\n* PoC produces a written decision, not only exploratory notes\n* mapped vs missing fields are explicitly documented\n* blockers are concrete enough for roadmap decision-making",
      "labels": [
        "GAP",
        "hobbeast",
        "integration",
        "poc",
        "universe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-22",
      "source": "file-import"
    },
    {
      "id": "hob-jira-23",
      "key": "HOB-23",
      "summary": "Story: Build Ticket Tailor partner connector flow",
      "description": "h1. Objective\n\nDefine a partner-scoped Ticket Tailor connector flow for Hobbeast with admin configuration, sync contract and normalized ingestion.\n\nh1. Functional requirements\n\nh2. Connector scope\n\n* Ticket Tailor is not a global discovery source in this story\n* connector is configured per partner / per box office\n* each connector instance belongs to a partner venue or organizer context\n\nh2. Admin configuration\n\nRequired config fields:\n\n* connector name\n* partner/owner reference\n* API credentials / auth secret reference\n* box office identifier\n* enabled flag\n* sync frequency\n\nh2. Sync behaviour\n\n* fetch events from configured partner scope\n* normalize into {{external_events}}\n* set {{external_source = 'tickettailor'}}\n* retain partner linkage for later filtering/rendering\n* dedupe by {{(external_source, external_id)}}\n\nh2. Mapping coverage\n\n* event id\n* title\n* description\n* date/time\n* location\n* image\n* external URL\n* pricing summary if available\n\nh2. Admin UX\n\n* connector list\n* create/edit connector form\n* sync now action\n* last sync status + timestamp\n* error state display\n\nh1. Suggested config entity\n\n{noformat}PartnerConnector {\n  id: uuid\n  provider: 'tickettailor'\n  owner_type: 'venue' | 'organizer'\n  owner_id: uuid\n  connector_name: string\n  external_scope_id: string\n  enabled: boolean\n  sync_frequency: string | null\n  last_sync_at: timestamptz | null\n  last_sync_status: 'ok' | 'partial' | 'failed' | null\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Partner connectors                                            |\n+--------------------------------------------------------------+\n| Ticket Tailor - Green Room Box Office                         |\n| Owner: Venue / The Green Room                                 |\n| Last sync: 2026-04-10 09:20  Status: OK                       |\n|                                      [Sync now] [Edit]        |\n+--------------------------------------------------------------+\n| [Add connector]                                               |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* Ticket Tailor connector can be configured per partner scope\n* sync status and last sync metadata are visible in admin UX\n* normalized partner-scoped events can be written into {{external_events}}\n* connector remains distinct from global external discovery providers",
      "labels": [
        "GAP",
        "hobbeast",
        "integration",
        "partners",
        "tickettailor"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-23",
      "source": "file-import"
    },
    {
      "id": "hob-jira-24",
      "key": "HOB-24",
      "summary": "Story: Add source attribution and conversion insight to organizer analytics",
      "description": "h1. Objective\n\nDefine source attribution and conversion analytics so organizers can understand where event interest and participation are coming from.\n\nh1. Functional requirements\n\nh2. Attribution dimensions\n\n* source_platform:\n** hobbeast_native\n** eventbrite\n** ticketmaster\n** seatgeek\n** universe\n** tickettailor\n** direct/unknown\n* source_surface:\n** home\n** explore\n** categories\n** for_me\n** external_list\n** venue_profile\n** shared_link\n\nh2. Metrics\n\n* source-level views\n* detail opens by source\n* join clicks by source\n* confirmed going by source\n* waitlist by source\n* checked_in by source\n* derived conversion rates per source\n\nh2. Event model impact\n\n* each measurable event interaction should be trackable with event_id + source dimensions\n* attribution should support both native and external-origin event records\n\nh1. Suggested backend entity\n\n{noformat}EventInteractionAttribution {\n  id: uuid\n  event_id: uuid\n  source_platform: string | null\n  source_surface: string | null\n  interaction_type: 'view' | 'detail_open' | 'join_click' | 'going' | 'waitlist' | 'checked_in'\n  created_at: timestamptz\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Source attribution                                            |\n+--------------------------------------------------------------+\n| Hobbeast native   420 views   36 joins   8.6% conv           |\n| Ticketmaster      500 views   21 joins   4.2% conv           |\n| Eventbrite        320 views   25 joins   7.8% conv           |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* source_platform and source_surface are explicitly defined attribution dimensions\n* source-based conversion can be calculated from tracked interactions\n* source attribution works for mixed native/external discovery journeys",
      "labels": [
        "analytics",
        "attribution",
        "GAP",
        "hobbeast"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-24",
      "source": "file-import"
    },
    {
      "id": "hob-jira-25",
      "key": "HOB-26",
      "summary": "Epic: Core account, onboarding and profile management",
      "description": "Goal: document and cover Hobbeast core user account capabilities so the product can be rebuilt from Jira if needed.\n\nScope:\n\n* authentication and session handling\n* onboarding basics\n* profile editing and privacy\n* interests and preferences\n* profile location handling\n\nSuccess criteria:\n\n* core account and profile behaviour is fully described and decomposed into implementable work items",
      "labels": [
        "account",
        "backlog",
        "core",
        "hobbeast",
        "profile"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-26",
      "source": "file-import"
    },
    {
      "id": "hob-jira-26",
      "key": "HOB-27",
      "summary": "Epic: Core event creation, editing and event detail lifecycle",
      "description": "Goal: fully cover Hobbeast's native event lifecycle so it can be rebuilt from Jira alone if needed.\n\nScope:\n\n* create event flow\n* edit event flow\n* event detail rendering\n* event participation actions\n* ownership rules and organizer controls\n\nSuccess criteria:\n\n* Hobbeast native event lifecycle is documented and decomposed into implementable work items\n\nImplementation backfill note:\n\nAndroid already moved create/edit validation, event detail posture, imported-vs-first-party separation, RSVP and waitlist alignment, and trip continuity materially forward. This epic is partially concretized by implementation.\n\nCross-surface follow-up:\n\nWeb parity story: HOB-199.",
      "labels": [
        "backlog",
        "core",
        "events",
        "hobbeast"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-27",
      "source": "file-import"
    },
    {
      "id": "hob-jira-27",
      "key": "HOB-28",
      "summary": "Epic: Core data model, Supabase and operational foundations",
      "description": "Goal: cover the platform-level foundations required to rebuild and operate Hobbeast reliably.\n\nScope:\n\n* database schema and RLS\n* external_events and integration tables\n* Edge Functions, secrets and cron jobs\n* logging, diagnostics and operational readiness\n* environment and deployment assumptions\n\nSuccess criteria:\n\n* core platform foundations are described and decomposed into implementable work items\n\nImplementation backfill note:\n\nThe mobile/backend track already introduced applied first-party Supabase schema, RLS-oriented migrations and operational SQL helpers. This epic should now be treated as partially concretized by implementation, not only planned platform work.\n\nDocumentation follow-up:\n\nHOB-207 documents the applied Supabase schema/RLS/RPC contract.\nHOB-211 documents Android implementation coverage and cross-surface follow-up.",
      "labels": [
        "backlog",
        "core",
        "hobbeast",
        "platform",
        "supabase"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-28",
      "source": "file-import"
    },
    {
      "id": "hob-jira-28",
      "key": "HOB-29",
      "summary": "Epic: Core location, address and distance infrastructure",
      "description": "Goal: cover the shared location stack used across profile, event creation and event discovery.\n\nScope:\n\n* address autocomplete\n* city/address normalization\n* location privacy behaviour\n* profile based location preferences\n* distance filtering foundations\n\nSuccess criteria:\n\n* location-related behaviour is fully described and decomposed into implementable work items",
      "labels": [
        "backlog",
        "core",
        "distance",
        "hobbeast",
        "location"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-29",
      "source": "file-import"
    },
    {
      "id": "hob-jira-29",
      "key": "HOB-30",
      "summary": "Story: Implement core authentication and session handling flows",
      "description": "Cover Hobbeast core authentication and session behaviour.\n\nScope:\n\n* sign up / sign in / sign out\n* authenticated session lifecycle\n* protected routes and session restoration\n* account identity assumptions\n\nAcceptance criteria:\n\n* core auth flows are documented and implementable from Jira alone",
      "labels": [
        "account",
        "auth",
        "core",
        "hobbeast"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-30",
      "source": "file-import"
    },
    {
      "id": "hob-jira-30",
      "key": "HOB-31",
      "summary": "Story: Implement onboarding, profile basics and preference editing",
      "description": "Cover Hobbeast user onboarding and core profile behaviour.\n\nScope:\n\n* initial onboarding flow\n* profile basic fields\n* interest and hobby preference editing\n* profile save/load flow\n* privacy-ready profile structure\n\nAcceptance criteria:\n\n* onboarding and profile basics are fully documented and implementable from Jira alone",
      "labels": [
        "core",
        "hobbeast",
        "onboarding",
        "profile"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-31",
      "source": "file-import"
    },
    {
      "id": "hob-jira-31",
      "key": "HOB-32",
      "summary": "Story: Implement native event creation flow and validation rules",
      "description": "h1. Objective\n\nDefine a developer-ready native event creation flow for Hobbeast with extensibility for paid, private and organizer-grade events.\n\nh1. Functional requirements\n\nh2. Form sections\n\n# Basic info\n\n* title (required, 3..120)\n* short description (optional, max 280)\n* long description (optional, markdown/plain text safe rendering)\n* cover image URL/upload placeholder\n\n# Classification\n\n* category tree selection required\n* support category, subcategory and activity-level selection\n* store normalized category identifiers, not only display names\n\n# Time and visibility\n\n* event date required\n* start time required\n* end time optional\n* timezone resolved from user profile or browser locale\n* visibility type:\n** public\n** private\n** invite_only\n** early_access_limited\n\n# Location\n\n* city required\n* address optional\n* location autocomplete shared with profile flow\n* location precision toggle:\n** exact location visible to attendees\n** only approximate location visible publicly\n\n# Participation model\n\n* participation type:\n** free\n** paid\n** external_ticket\n* max capacity optional\n* waitlist enabled boolean\n* organizer notes optional (internal, not public)\n* entry window optional:\n** entry_start_at\n** entry_end_at\n\nh1. Validation rules\n\n* title required\n* at least one normalized category path required\n* city required\n* if {{participation_type = paid}}, event must support pricing/ticket config entity\n* if {{visibility = invite_only}}, invitation strategy must be selected later\n* if {{max_capacity}} is set, must be integer > 0\n* if both entry window fields present, {{entry_start_at < entry_end_at}}\n* if end time present, {{start_at < end_at}}\n\nh1. Data model notes\n\nSuggested backend fields:\n\n{noformat}Event {\n  id: uuid\n  title: string\n  short_description: string | null\n  description: string | null\n  category_path: string[]\n  visibility_type: 'public' | 'private' | 'invite_only' | 'early_access_limited'\n  participation_type: 'free' | 'paid' | 'external_ticket'\n  city: string\n  address: string | null\n  lat: number | null\n  lon: number | null\n  exact_location_visible: boolean\n  starts_at: timestamptz\n  ends_at: timestamptz | null\n  max_capacity: number | null\n  waitlist_enabled: boolean\n  organizer_notes: string | null\n  entry_start_at: timestamptz | null\n  entry_end_at: timestamptz | null\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+--------------------------------------------------------------+\n| Create event                                                 |\n+--------------------------------------------------------------+\n| Title *                     [______________________________] |\n| Short description           [______________________________] |\n| Long description            [..............................] |\n|                                                              |\n| Category *                  [Select categories >]           |\n| Visibility                  (o) Public ( ) Private          |\n|                             ( ) Invite-only ( ) Early access|\n|                                                              |\n| Date *      [2026-04-10]  Start * [19:00]  End [22:00]      |\n|                                                              |\n| City *                      [Budapest____________________]   |\n| Address                     [Autocomplete________________]   |\n| [x] Share exact address with attendees                       |\n|                                                              |\n| Participation              (o) Free ( ) Paid ( ) External   |\n| Capacity                    [ 50 ]   [x] Enable waitlist    |\n| Entry window                From [18:30] To [20:00]         |\n| Organizer notes             [internal notes..............]   |\n|                                                              |\n|                                    [Cancel] [Create Event]  |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* native create event flow supports free / paid / external ticket participation types\n* native create event flow supports public / private / invite-only / early-access-limited visibility\n* organizer notes are stored but not publicly rendered\n* entry window fields are supported and validated\n* category identifiers are stored in normalized form\n* no regression in existing category/location UX\n\nh1. Out of scope\n\n* actual payment collection\n* full ticket issuance\n* QR validation runtime",
      "labels": [
        "core",
        "create-event",
        "events",
        "hobbeast"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-32",
      "source": "file-import"
    },
    {
      "id": "hob-jira-32",
      "key": "HOB-33",
      "summary": "Story: Implement native event editing, ownership rules and event detail rendering",
      "description": "Cover the native Hobbeast event editing and event detail lifecycle.\n\nScope:\n\n* edit event flow\n* ownership and organizer permissions\n* event detail page rendering\n* join/unsubscribe actions from detail surfaces\n* status-aware controls for own vs external events\n\nAcceptance criteria:\n\n* the native event editing and detail lifecycle is fully described and implementable from Jira alone",
      "labels": [
        "core",
        "edit-event",
        "event-detail",
        "events",
        "hobbeast"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-33",
      "source": "file-import"
    },
    {
      "id": "hob-jira-33",
      "key": "HOB-34",
      "summary": "Story: Implement shared address autocomplete and location normalization",
      "description": "Cover the shared location input behaviour used across profile and event forms.\n\nScope:\n\n* address autocomplete component\n* city extraction and normalization\n* address vs city-only handling\n* reusable location selection contract\n\nAcceptance criteria:\n\n* location selection behaves consistently across profile and event flows\n* city and address fields are normalized from the same source selection",
      "labels": [
        "autocomplete",
        "core",
        "hobbeast",
        "location"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-34",
      "source": "file-import"
    },
    {
      "id": "hob-jira-34",
      "key": "HOB-35",
      "summary": "Story: Implement profile-based distance filtering foundations",
      "description": "Cover the shared distance filtering behaviour used on the events page.\n\nScope:\n\n* profile location as filter anchor\n* distance calculation logic\n* enable/disable behaviour\n* fallback handling when profile location is incomplete\n\nAcceptance criteria:\n\n* distance filtering is fully described and implementable from Jira alone",
      "labels": [
        "core",
        "distance",
        "filters",
        "hobbeast",
        "location"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-35",
      "source": "file-import"
    },
    {
      "id": "hob-jira-35",
      "key": "HOB-36",
      "summary": "Story: Define Supabase schema, RLS and migration strategy for core Hobbeast entities",
      "description": "Cover the database-level foundations of Hobbeast.\n\nScope:\n\n* core tables and relationships\n* migration strategy\n* row level security rules\n* environment assumptions\n\nAcceptance criteria:\n\n* core data model and database rules are documented and implementable from Jira alone\n\nImplementation backfill note:\n\nThis story is no longer purely conceptual. A first-party Supabase schema and RLS-oriented migration set were already introduced and applied during the mobile/backend track.\n\nDocumentation follow-up:\n\nHOB-207.",
      "labels": [
        "core",
        "database",
        "hobbeast",
        "supabase"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-36",
      "source": "file-import"
    },
    {
      "id": "hob-jira-36",
      "key": "HOB-37",
      "summary": "Story: Implement profile privacy, location sharing and preference persistence",
      "description": "Cover profile privacy and preference persistence behaviour.\n\nScope:\n\n* profile privacy settings\n* location sharing toggle behaviour\n* saved preferences persistence\n* profile state restoration on reload\n\nAcceptance criteria:\n\n* profile privacy and preference behaviour is documented and implementable from Jira alone",
      "labels": [
        "core",
        "hobbeast",
        "preferences",
        "privacy",
        "profile"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-37",
      "source": "file-import"
    },
    {
      "id": "hob-jira-37",
      "key": "HOB-38",
      "summary": "Story: Introduce explicit Organizer mode navigation and permissions model",
      "description": "h1. Objective\n\nCreate an explicit organizer-facing operating mode so users who own events can access organizer tools without overloading the default community discovery UX.\n\nh1. Functional requirements\n\n* show Organizer mode entry only for users with at least one owned event or organizer capability\n* organizer mode entry points:\n** profile menu switch\n** event detail quick action for owned events\n* organizer mode surfaces:\n** My events\n** Attendees\n** Check-in\n** Messages\n** Analytics\n* organizer mode must not replace the default discovery-first home for normal users\n\nh1. Permissions model\n\n* organizer-only actions require event ownership or organizer role assignment\n* non-organizers must not see organizer controls for foreign events\n* organizer mode visibility should be claim-based or ownership-derived\n\nh1. Suggested frontend contract\n\n{noformat}type AppMode = 'community' | 'organizer'\n\nOrganizerCapability {\n  can_manage_events: boolean\n  can_check_in: boolean\n  can_message_attendees: boolean\n  can_view_event_analytics: boolean\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}Top nav / profile menu\n+--------------------------------+\n| Henrik Faul                    |\n| ------------------------------ |\n| Community mode                 |\n| Organizer mode   [switch]      |\n| Profile                        |\n| Sign out                       |\n+--------------------------------+\n\nOrganizer dashboard shell\n+--------------------------------------------------+\n| Organizer mode                                   |\n| [My events] [Attendees] [Check-in] [Messages]    |\n| [Analytics]                                      |\n+--------------------------------------------------+\n| Event cards / stats / organizer tools            |\n+--------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizer mode is only visible for eligible users\n* organizer mode and community mode can coexist without route confusion\n* organizer-only permissions are enforced in UI and backend",
      "labels": [
        "GAP",
        "mode",
        "organizer",
        "permissions",
        "ux",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-38",
      "source": "file-import"
    },
    {
      "id": "hob-jira-38",
      "key": "HOB-39",
      "summary": "Story: Introduce explicit Venue mode and venue capability model",
      "description": "h1. Objective\n\nCreate an optional venue-facing operating mode for partner venues without turning Hobbeast into a full hospitality backoffice product.\n\nh1. Functional requirements\n\n* venue mode entry only for users/accounts linked to venue entities\n* venue mode surfaces:\n** Venue profile\n** Venue events\n** Venue capabilities\n** Future reservation extension points\n* venue capability flags:\n** reservations_available\n** seating_available\n** menu_available\n* venue capability flags must be displayable on venue and event pages\n\nh1. Data model notes\n\n{noformat}Venue {\n  id: uuid\n  name: string\n  slug: string\n  description: string | null\n  city: string\n  address: string | null\n  reservations_available: boolean\n  seating_available: boolean\n  menu_available: boolean\n  partner_badge: boolean\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}Venue mode shell\n+--------------------------------------------------+\n| Venue mode                                       |\n| [Profile] [Events] [Capabilities]               |\n+--------------------------------------------------+\n| Capability flags                                 |\n| [x] Reservations available                       |\n| [x] Seating available                            |\n| [ ] Menu available                               |\n+--------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* venue mode is optional and role-based\n* capability flags are stored structurally, not only as text\n* venue capability flags can be rendered on venue and event detail pages",
      "labels": [
        "capabilities",
        "GAP",
        "mode",
        "venue",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-39",
      "source": "file-import"
    },
    {
      "id": "hob-jira-39",
      "key": "HOB-40",
      "summary": "Story: Add paid event pricing model and ticket tier configuration",
      "description": "h1. Objective\n\nSupport paid events with configurable ticket tiers, while remaining compatible with free and external-ticket event types.\n\nh1. Functional requirements\n\n* allow event organizer to define one or more ticket tiers\n* tier fields:\n** name\n** description\n** price_amount\n** currency\n** quantity_limit\n** sale_start_at\n** sale_end_at\n** visibility (public / hidden / early_access_only)\n* support free tier as explicit zero-price tier if needed\n* support sorting tiers by display order\n\nh1. Data model notes\n\n{noformat}EventTicketTier {\n  id: uuid\n  event_id: uuid\n  name: string\n  description: string | null\n  price_amount: number\n  currency: string\n  quantity_limit: number | null\n  quantity_sold: number\n  sale_start_at: timestamptz | null\n  sale_end_at: timestamptz | null\n  visibility: 'public' | 'hidden' | 'early_access_only'\n  display_order: number\n}{noformat}\n\nh1. Validation rules\n\n* {{price_amount >= 0}}\n* {{quantity_limit}} nullable but if present must be > 0\n* if both sale dates present, {{sale_start_at < sale_end_at}}\n* hidden tiers cannot be visible in public event page by default\n\nh1. UI wireframe\n\n{noformat}Ticket tiers\n+---------------------------------------------------+\n| [Add tier]                                        |\n+---------------------------------------------------+\n| General admission                                 |\n| Price: [4500 HUF]  Qty: [100]                     |\n| Sale: [2026-04-01 10:00] -> [2026-04-10 18:00]    |\n| Visibility: (o) Public ( ) Hidden ( ) Early only  |\n|                                    [Save] [Delete]|\n+---------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizer can configure multiple ticket tiers per paid event\n* hidden and early-access-only tiers are supported structurally\n* ticket tiers can later be connected to payment flow without redesign",
      "labels": [
        "GAP",
        "pricing",
        "ticketing",
        "tiers",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-40",
      "source": "file-import"
    },
    {
      "id": "hob-jira-40",
      "key": "HOB-41",
      "summary": "Story: Build QR and invite-code based organizer check-in admin flow",
      "description": "h1. Objective\n\nProvide a concrete organizer-facing check-in UI and backend validation flow for event admission.\n\nh1. Functional requirements\n\n* organizer can open check-in screen for owned event\n* attendee lookup methods:\n** text search by name/email\n** QR code scan\n** invite code input\n* organizer actions:\n** check in attendee\n** undo check-in (with audit trail)\n** promote from waitlist where applicable\n* validation checks:\n** event ownership / permission\n** attendee exists for event\n** attendee status is valid for check-in\n** duplicate check-in blocked unless explicit override path exists\n\nh1. Backend notes\n\n* check-in write should create audit record\n* QR and invite code resolution should map to event participation record\n\nSuggested audit entity:\n\n{noformat}CheckInAudit {\n  id: uuid\n  event_id: uuid\n  participation_id: uuid\n  action: 'check_in' | 'undo_check_in' | 'promote_waitlist'\n  actor_user_id: uuid\n  created_at: timestamptz\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}+---------------------------------------------------+\n| Check-in admin                                    |\n+---------------------------------------------------+\n| Search attendee [________________________] [Find] |\n| Invite code     [______________]         [Apply]  |\n| [ Start QR scan ]                                 |\n+---------------------------------------------------+\n| John Doe      GOING        [Check in]             |\n| Anna Smith    CHECKED_IN   [Undo]                 |\n| Mark Lee      WAITLIST     [Promote]              |\n+---------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizer can check in eligible attendees via search, QR, or code\n* every check-in action writes auditable history\n* duplicate or invalid check-ins are blocked with clear error handling",
      "labels": [
        "admin",
        "checkin",
        "GAP",
        "invite-code",
        "qr",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-41",
      "source": "file-import"
    },
    {
      "id": "hob-jira-41",
      "key": "HOB-42",
      "summary": "Story: Define payment provider integration contract for paid events",
      "description": "h1. Objective\n\nDefine the integration contract for future payment provider support for paid Hobbeast events.\n\nh1. Functional requirements\n\n* payment session can be initiated from paid ticket tier selection\n* payment provider abstraction should not hardcode a single provider into event UI\n* minimum supported payment states:\n** pending\n** authorized\n** paid\n** failed\n** refunded\n* payment success must be able to reserve or confirm participation according to business rules\n\nh1. Suggested integration contract\n\n{noformat}PaymentSession {\n  id: uuid\n  event_id: uuid\n  user_id: uuid\n  ticket_tier_id: uuid\n  provider: 'stripe' | 'other'\n  provider_session_id: string\n  status: 'pending' | 'authorized' | 'paid' | 'failed' | 'refunded'\n  amount: number\n  currency: string\n  created_at: timestamptz\n}{noformat}\n\nh1. UX flow\n\n# user selects tier\n# user clicks Pay\n# frontend requests payment session from backend\n# provider checkout opens\n# callback/webhook updates payment state\n# participation/ticket state updated accordingly\n\nh1. UI wireframe\n\n{noformat}Paid event checkout\n+---------------------------------------------------+\n| Choose your ticket                                |\n| (o) General admission - 4500 HUF                  |\n| ( ) VIP - 9000 HUF                                |\n|                                                   |\n|                    [Continue to payment]          |\n+---------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* payment integration is described as a provider-agnostic contract\n* ticket tier selection and payment session creation are clearly separated\n* payment states are explicit and usable by later implementation",
      "labels": [
        "GAP",
        "integration",
        "payment",
        "ticketing",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-42",
      "source": "file-import"
    },
    {
      "id": "hob-jira-42",
      "key": "HOB-43",
      "summary": "Story: Add attendee export and segmented organizer messaging workflow",
      "description": "h1. Objective\n\nAllow organizers to export attendee data and send segmented communications to participant subsets.\n\nh1. Functional requirements\n\nh2. Export\n\n* export attendee list by event\n* supported export filters:\n** all attendees\n** going\n** waitlist\n** checked_in\n** no_show\n* minimum export fields:\n** display_name\n** email\n** participation_status\n** joined_at\n** checked_in_at\n* export formats:\n** CSV\n** future XLSX-ready contract optional\n\nh2. Segmented messaging\n\n* organizer can target message audience by status segment\n* organizer can compose:\n** event update\n** reminder\n** logistics update\n** cancellation message\n* store message history per event\n\nh1. Data model notes\n\n{noformat}EventMessage {\n  id: uuid\n  event_id: uuid\n  audience_filter: 'all' | 'going' | 'waitlist' | 'checked_in' | 'no_show'\n  message_type: 'update' | 'reminder' | 'logistics' | 'cancellation'\n  subject: string | null\n  body: string\n  actor_user_id: uuid\n  created_at: timestamptz\n}{noformat}\n\nh1. UI wireframe\n\n{noformat}Organizer attendees\n+--------------------------------------------------------------+\n| Attendees                                     [Export CSV]   |\n+--------------------------------------------------------------+\n| Filter: [All v] [Going v] [Waitlist v] [Checked-in v]        |\n|                                                              |\n| John Doe        GOING         john@example.com               |\n| Anna Smith      WAITLIST      anna@example.com               |\n+--------------------------------------------------------------+\n| Message audience: [Going v]                                  |\n| Type: [Reminder v]                                           |\n| Body: [..................................................]   |\n|                                            [Send message]    |\n+--------------------------------------------------------------+{noformat}\n\nh1. Acceptance criteria\n\n* organizers can export attendee lists filtered by participation status\n* organizers can send segmented messages to attendee subsets\n* sent messages are stored in event-level history",
      "labels": [
        "export",
        "GAP",
        "messaging",
        "organizer",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-43",
      "source": "file-import"
    },
    {
      "id": "hob-jira-43",
      "key": "HOB-44",
      "summary": "Subtask: Implement primary filter state separation in Events.tsx",
      "description": "Refactor the Events page so primary filter mode is stored independently from category selection state. Introduce explicit primaryFilter handling and remove implicit coupling between search, categories and personal modes.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-44",
      "source": "file-import"
    },
    {
      "id": "hob-jira-44",
      "key": "HOB-45",
      "summary": "Subtask: Separate category selection state from expanded tree state",
      "description": "Persist selectedCategoryIds, selectedSubcategoryKeys and selectedActivityKeys separately from expanded branch state so category selections survive primary filter switches and can be reactivated visually.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-45",
      "source": "file-import"
    },
    {
      "id": "hob-jira-45",
      "key": "HOB-46",
      "summary": "Subtask: Add QA regression scenarios for primary filter switching",
      "description": "Implement and document regression checks for switching between All, Search, For me and Categories modes, including category persistence, visual active state and distance/source filter coexistence.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-46",
      "source": "file-import"
    },
    {
      "id": "hob-jira-46",
      "key": "HOB-47",
      "summary": "Subtask: Implement external event display adapter and source badge rendering",
      "description": "Create the frontend adapter that maps external_events records into the shared display contract and renders deterministic source badges for Ticketmaster, Eventbrite, SeatGeek and future providers.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-47",
      "source": "file-import"
    },
    {
      "id": "hob-jira-47",
      "key": "HOB-48",
      "summary": "Subtask: Implement fallback rendering rules for incomplete external events",
      "description": "Handle missing category, image, external_url or date fields for external events according to the story fallback rules, including disabled CTA and hidden invalid records where required.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-48",
      "source": "file-import"
    },
    {
      "id": "hob-jira-48",
      "key": "HOB-49",
      "summary": "Subtask: Implement Ticketmaster Edge Function preview and sync modes",
      "description": "Build the Ticketmaster integration function with explicit preview and sync execution paths, including provider fetch, normalization and response summaries.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-49",
      "source": "file-import"
    },
    {
      "id": "hob-jira-49",
      "key": "HOB-50",
      "summary": "Subtask: Implement Ticketmaster payload mapping and upsert into external_events",
      "description": "Map Ticketmaster provider payloads to the normalized external_events schema, enforce unique key external_source + external_id, and implement idempotent upsert behaviour for sync mode.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-50",
      "source": "file-import"
    },
    {
      "id": "hob-jira-50",
      "key": "HOB-51",
      "summary": "Subtask: Add Ticketmaster error and zero-result handling",
      "description": "Handle Ticketmaster API errors, malformed records and zero-result cases in a clear and testable way for both preview and sync modes.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-51",
      "source": "file-import"
    },
    {
      "id": "hob-jira-51",
      "key": "HOB-52",
      "summary": "Subtask: Add Ticketmaster preview and sync QA validation",
      "description": "Create QA checks for Ticketmaster preview and sync, including valid results, zero-result responses, and recoverable provider failures.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-52",
      "source": "file-import"
    },
    {
      "id": "hob-jira-52",
      "key": "HOB-53",
      "summary": "Subtask: Build native event creation form sections and client-side validation",
      "description": "Implement the create event UI sections for basic info, classification, time/visibility, location and participation model, including client-side validation rules from HOB-32.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-53",
      "source": "file-import"
    },
    {
      "id": "hob-jira-53",
      "key": "HOB-54",
      "summary": "Subtask: Persist native event payload including visibility, participation and location fields",
      "description": "Implement backend payload handling and database persistence for the HOB-32 native event creation contract, including visibility_type, participation_type, category_path, location fields, capacity and organizer_notes.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-54",
      "source": "file-import"
    },
    {
      "id": "hob-jira-54",
      "key": "HOB-55",
      "summary": "Subtask: Integrate shared address autocomplete and category tree into native event creation",
      "description": "Wire the shared address autocomplete component and normalized category tree selector into the create event flow so HOB-32 reuses the common location and classification contracts.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-55",
      "source": "file-import"
    },
    {
      "id": "hob-jira-55",
      "key": "HOB-56",
      "summary": "Subtask: Build attendee list UI with filters and sorting",
      "description": "Implement the organizer attendee list screen with status filters, search and sorting.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-56",
      "source": "file-import"
    },
    {
      "id": "hob-jira-56",
      "key": "HOB-57",
      "summary": "Subtask: Implement attendee row actions and attendee detail drawer entry",
      "description": "Add row-level organizer actions such as promote, cancel and undo check-in, and open the attendee detail workspace from the attendee list.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-57",
      "source": "file-import"
    },
    {
      "id": "hob-jira-57",
      "key": "HOB-58",
      "summary": "Subtask: Build organizer check-in admin screen with search and invite code input",
      "description": "Implement the check-in admin UI for organizers, including attendee search, invite code input and result list rendering.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-58",
      "source": "file-import"
    },
    {
      "id": "hob-jira-58",
      "key": "HOB-59",
      "summary": "Subtask: Implement check-in action handling and audit writes",
      "description": "Implement backend check-in operations, including validate-and-check-in, undo check-in and audit record creation for organizer actions.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-59",
      "source": "file-import"
    },
    {
      "id": "hob-jira-59",
      "key": "HOB-60",
      "summary": "Subtask: Build organizer analytics KPI cards and top-level dashboard view",
      "description": "Implement the organizer analytics UI with top-level KPI cards for views, detail opens, joins, going, checked-in and attendance rate.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-60",
      "source": "file-import"
    },
    {
      "id": "hob-jira-60",
      "key": "HOB-61",
      "summary": "Subtask: Implement source, category and geo breakdown tabs in organizer analytics",
      "description": "Build the analytics breakdown surfaces for source, category and geo dimensions, including summary tables and charts where appropriate.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-61",
      "source": "file-import"
    },
    {
      "id": "hob-jira-61",
      "key": "HOB-62",
      "summary": "Subtask: Implement analytics data aggregation and derived metric calculations",
      "description": "Build the backend aggregation logic for analytics KPIs and derived metrics such as CTR, join conversion, attendance rate, save ratio and dropout rate.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-62",
      "source": "file-import"
    },
    {
      "id": "hob-jira-62",
      "key": "HOB-64",
      "summary": "Subtask: Build event communications composer and message history UI",
      "description": "Implement the organizer communications UI with message type selector, audience selector, schedule mode and event-level message history list.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-64",
      "source": "file-import"
    },
    {
      "id": "hob-jira-63",
      "key": "HOB-65",
      "summary": "Subtask: Implement event message persistence and delivery state handling",
      "description": "Implement backend persistence for event messages, including audience filter, message type, scheduled time and delivery state transitions.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-65",
      "source": "file-import"
    },
    {
      "id": "hob-jira-64",
      "key": "HOB-69",
      "summary": "Subtask: Build venue profile page UI and capability badge rendering",
      "description": "Implement the venue profile page surface, including hero section, description, partner badge and capability chips such as reservations, seating and menu.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-69",
      "source": "file-import"
    },
    {
      "id": "hob-jira-65",
      "key": "HOB-70",
      "summary": "Subtask: Implement audience segment resolution for event messaging",
      "description": "Resolve attendee segments such as all, going, waitlist, checked-in and no-show into concrete recipient sets for organizer messages and reminders.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-70",
      "source": "file-import"
    },
    {
      "id": "hob-jira-66",
      "key": "HOB-71",
      "summary": "Subtask: Implement venue data model and event-to-venue linkage",
      "description": "Implement the backend venue entity, capability flags and event-to-venue association needed for venue profiles and venue metadata on event pages.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-71",
      "source": "file-import"
    },
    {
      "id": "hob-jira-67",
      "key": "HOB-74",
      "summary": "Subtask: Implement PWA install readiness and manifest setup",
      "description": "Set up the basic PWA install foundations, including app manifest, icons, theme values and install prompt handling where supported.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-74",
      "source": "file-import"
    },
    {
      "id": "hob-jira-68",
      "key": "HOB-75",
      "summary": "Subtask: Render linked venue summary card on event detail pages",
      "description": "Show venue name, address summary, partner badge and capability chips on event detail pages when a venue is linked.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-75",
      "source": "file-import"
    },
    {
      "id": "hob-jira-69",
      "key": "HOB-76",
      "summary": "Subtask: Implement reminder scheduling and delivery state updates",
      "description": "Implement scheduled reminder execution and update message delivery states for event communications.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-76",
      "source": "file-import"
    },
    {
      "id": "hob-jira-70",
      "key": "HOB-80",
      "summary": "Subtask: Implement add-to-calendar links and ICS export for events",
      "description": "Build add-to-calendar actions for supported events, including direct calendar links and ICS file generation with title, time and location data.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-80",
      "source": "file-import"
    },
    {
      "id": "hob-jira-71",
      "key": "HOB-81",
      "summary": "Subtask: Build upcoming reminders UI for joined and relevant events",
      "description": "Implement reminder cards or lists for upcoming joined and relevant events on key user surfaces.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-81",
      "source": "file-import"
    },
    {
      "id": "hob-jira-72",
      "key": "HOB-82",
      "summary": "Subtask: Persist user reminder preferences for retention surfaces",
      "description": "Store and load user-level reminder preferences used by joined-event reminders and future notification flows.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-82",
      "source": "file-import"
    },
    {
      "id": "hob-jira-73",
      "key": "HOB-84",
      "summary": "Subtask: Add venue info block to event detail page",
      "description": "Show linked venue info on event detail page.",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-84",
      "source": "file-import"
    },
    {
      "id": "hob-jira-74",
      "key": "HOB-85",
      "summary": "Mapy.com trip planning core integration",
      "description": "Mapy.com trip planning core integration for Hobbeast. Build interactive map view, address and POI search, map click point selection, route planning with waypoints, route rendering, event-level route storage and attribution-safe provider usage.",
      "labels": [
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-85",
      "source": "file-import"
    },
    {
      "id": "hob-jira-75",
      "key": "HOB-86",
      "summary": "Mapy.com trip planning AI and automation readiness",
      "description": "Prepare the Mapy.com trip planning capability so it can later be used not only through direct user interaction but also through backend automation and AI agents. Define reusable service contracts, structured request and response schemas, deterministic location resolution and auditable automated route planning.",
      "labels": [
        "AIAGENT_TRIPPLANNING",
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-86",
      "source": "file-import"
    },
    {
      "id": "hob-jira-76",
      "key": "HOB-87",
      "summary": "Story: Select and implement web map renderer for Mapy.com trip planning",
      "description": "Objective:\nCreate the map rendering foundation for the Hobbeast trip planner so Mapy.com tiles, route geometry and trip markers can be displayed in a fully interactive map view.\n\nProblem:\nThe current planner has no real map view and requires manual coordinate entry. The Mapy REST API provides data and tiles, but a web map renderer must be selected and integrated.\n\nScope:\n\n* select one supported web map library for production use\n* initialize reusable TripPlanningMap component\n* load Mapy raster map tiles\n* support zoom, pan and fit bounds\n* support overlays for markers and route polylines\n* support responsive desktop and mobile rendering\n* define map state handling for route edit mode\n\nTechnical requirements:\n\n* do not use deprecated JS SDK approach\n* use a reusable map wrapper component and route overlay layer structure\n* support future layers for POI, elevation profile interaction and drag editing\n* map container lifecycle must handle re-render and route updates correctly\n\nUI requirements:\n\n* embedded map view inside planner card/modal\n* visible map controls for zoom\n* route markers and route line must be visually distinct\n\nAcceptance criteria:\n\n* interactive map view renders inside trip planner\n* Mapy map tiles are visible\n* markers and polyline overlays can be drawn\n* map resizes correctly on mobile\n* selected renderer is documented in implementation notes",
      "labels": [
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-87",
      "source": "file-import"
    },
    {
      "id": "hob-jira-77",
      "key": "HOB-88",
      "summary": "Story: Build address and POI search UX with Mapy suggest and geocoding",
      "description": "Objective:\nAllow users to choose route points by typing addresses, place names and POIs instead of manually entering latitude and longitude.\n\nProblem:\nThe current trip planner requires manual coordinate input for start and end points. This is not usable for normal users.\n\nScope:\n\n* implement reusable location search input for start point, end point and waypoint entries\n* integrate Mapy suggest-style search while typing\n* resolve selected items into normalized location objects with coordinates\n* support address, POI, city and generic place lookup cases\n* handle loading, empty and error states\n* support mobile-friendly result list interaction\n\nFunctional requirements:\n\n* user types at least partial place name or address\n* system shows suggestion list\n* user selects one item\n* selected item populates input and resolved coordinates are stored in planner state\n* resolved points can immediately be used for routing\n\nData/state requirements:\n\n* keep raw typed input separate from resolved location object\n* normalized location object should include at minimum:\n** display label\n** provider identifier if available\n** latitude\n** longitude\n** location type\n** bounding box if available\n\nAcceptance criteria:\n\n* no manual coordinate entry is needed for standard point selection\n* start and end point can be selected from search suggestions\n* selected result stores resolved coordinates in planner state\n* planner UX works on desktop and mobile",
      "labels": [
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-88",
      "source": "file-import"
    },
    {
      "id": "hob-jira-78",
      "key": "HOB-89",
      "summary": "Story: Implement map click and reverse geocoding point selection",
      "description": "Objective:\nAllow the user to click on the map and assign the clicked point as start, end or waypoint using reverse geocoding.\n\nProblem:\nEven with address search, a usable trip planner also needs direct map-based point selection for trails, viewpoints and places without obvious address entry.\n\nScope:\n\n* listen to map click events\n* place temporary marker on clicked position\n* call reverse geocoding for the clicked point\n* show a small selection action sheet or popup\n* let the user assign the location as:\n** start point\n** end point\n** waypoint\n* support repeated edits and replacing existing points\n\nFunctional requirements:\n\n* map click creates temporary candidate point\n* system resolves a readable location label when possible\n* user explicitly confirms target role for the point\n* planner state updates immediately after confirmation\n\nTechnical requirements:\n\n* reverse geocoding response must be normalized to the same location object format as search-selected points\n* UI must handle cases where reverse geocode has only partial place data\n* click-based selection must work on mobile touch interaction as well\n\nAcceptance criteria:\n\n* user can click the map to create route points\n* clicked point can become start, end or waypoint\n* the chosen point is stored in planner state with coordinates and readable label when available",
      "labels": [
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-89",
      "source": "file-import"
    },
    {
      "id": "hob-jira-79",
      "key": "HOB-90",
      "summary": "Story: Implement route planning with start, end and waypoints",
      "description": "Objective:\nPlan routes inside Hobbeast using Mapy routing with start point, end point and optional intermediate waypoints.\n\nProblem:\nThe current prototype does not provide a complete route calculation flow from user-selected points.\n\nScope:\n\n* build route request model from planner state\n* support start, end and waypoint ordering\n* support route type selection for hiking and other modes\n* call provider routing endpoint\n* parse route summary and geometry response\n* support route recalculation when a point changes\n\nFunctional requirements:\n\n* user selects route type\n* user sets start and end points\n* user optionally adds waypoints\n* system calculates route and stores route result in planner state\n* system handles no-route and invalid-point cases\n\nTechnical requirements:\n\n* normalized route result should include at minimum:\n** length\n** duration\n** geometry\n** waypoint order\n** provider metadata\n* route logic must be reusable by future automation and AI callers\n\nAcceptance criteria:\n\n* route can be calculated from selected points\n* waypoint order is respected\n* route result contains summary and geometry data\n* route can be recalculated after point edits",
      "labels": [
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-90",
      "source": "file-import"
    },
    {
      "id": "hob-jira-80",
      "key": "HOB-91",
      "summary": "Story: Render route geometry, markers and route summary on interactive map",
      "description": "Objective:\nDisplay the calculated route visually inside the trip planner with markers, polyline geometry and a summary panel.\n\nProblem:\nA route planning feature is not usable unless the user can clearly see the route path, point roles and basic route summary.\n\nScope:\n\n* render start marker, end marker and waypoint markers\n* render route polyline from routing response geometry\n* fit map bounds to visible route\n* show route summary panel with distance and duration\n* support re-render on route recalculation\n* support route clearing and route replacement\n\nFunctional requirements:\n\n* start and end markers are visually distinct\n* waypoint markers are clearly different from route endpoints\n* route line updates after point edits or route type change\n* summary panel reflects current route result\n\nTechnical requirements:\n\n* geometry parsing must be isolated from the map rendering layer\n* marker and polyline layers must be reusable in later route edit features\n* route rendering must tolerate missing or partial provider response safely\n\nAcceptance criteria:\n\n* user sees the route path on the map\n* start, end and waypoint roles are visually understandable\n* summary panel shows current route distance and duration\n* route refresh does not require page reload",
      "labels": [
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-91",
      "source": "file-import"
    },
    {
      "id": "hob-jira-81",
      "key": "HOB-92",
      "summary": "Story: Implement route planning with start, end and waypoints",
      "description": "Objective:\nPlan routes inside Hobbeast using Mapy routing with start point, end point and optional intermediate waypoints.\n\nProblem:\nThe current prototype does not provide a complete route calculation flow from user-selected points.\n\nScope:\n\n* build route request model from planner state\n* support start, end and waypoint ordering\n* support route type selection for hiking and other modes\n* call provider routing endpoint\n* parse route summary and geometry response\n* support route recalculation when a point changes\n\nFunctional requirements:\n\n* user selects route type\n* user sets start and end points\n* user optionally adds waypoints\n* system calculates route and stores route result in planner state\n* system handles no-route and invalid-point cases\n\nTechnical requirements:\n\n* normalized route result should include at minimum:\n** length\n** duration\n** geometry\n** waypoint order\n** provider metadata\n* route logic must be reusable by future automation and AI callers\n\nAcceptance criteria:\n\n* route can be calculated from selected points\n* waypoint order is respected\n* route result contains summary and geometry data\n* route can be recalculated after point edits",
      "labels": [
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-92",
      "source": "file-import"
    },
    {
      "id": "hob-jira-82",
      "key": "HOB-93",
      "summary": "Story: Add elevation profile for hiking and biking routes",
      "description": "Objective:\nProvide elevation-aware trip planning for hiking and biking routes so users can understand ascent, descent and terrain difficulty before saving a route.\n\nProblem:\nFor hiking use cases, distance and duration alone are not enough. Route profile and elevation change are important planning criteria.\n\nScope:\n\n* request elevation data for calculated route geometry\n* sample route geometry where needed before elevation lookup\n* display a basic elevation profile chart or structured summary\n* show total ascent and total descent when derivable\n* keep route usable if elevation enrichment fails\n\nFunctional requirements:\n\n* elevation profile is available for hiking and biking route types\n* planner shows route elevation summary after route calculation\n* planner can fall back to route-only mode when elevation data is unavailable\n\nTechnical requirements:\n\n* elevation enrichment must not block core route rendering\n* geometry sampling strategy must be documented\n* data model must support storing elevation profile or summary for saved trip plans\n\nAcceptance criteria:\n\n* a hiking or biking route can display elevation-related summary\n* elevation lookup failure does not break core trip planning\n* saved trip plan can retain elevation data when available",
      "labels": [
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-93",
      "source": "file-import"
    },
    {
      "id": "hob-jira-83",
      "key": "HOB-94",
      "summary": "Story: Persist trip plan data in Hobbeast event model",
      "description": "Objective:\nAllow a planned route to be saved, reloaded and edited as part of an event inside Hobbeast.\n\nProblem:\nA route planner is much less useful if the route cannot be stored together with the event that it belongs to.\n\nScope:\n\n* define trip plan storage model\n* link trip plan to event\n* store route type, resolved points, waypoint list, route summary and geometry snapshot\n* support edit existing trip plan flow\n* support draft and saved route states\n* prepare storage for optional elevation summary\n\nFunctional requirements:\n\n* user can save a route as part of event creation or event editing\n* previously saved route can be reopened for editing\n* stored route survives page reload and later event modification\n\nTechnical requirements:\n\n* trip plan must be stored in a normalized structure, not only UI state\n* saved trip must preserve enough data for route preview without forcing fresh provider calls in every view\n* provider metadata and snapshot versioning should be considered\n\nAcceptance criteria:\n\n* event can have a persisted trip plan record\n* saved trip can be loaded and rendered again\n* editing an existing trip plan updates the stored record correctly",
      "labels": [
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-94",
      "source": "file-import"
    },
    {
      "id": "hob-jira-84",
      "key": "HOB-95",
      "summary": "Story: Implement Mapy attribution and provider-compliant trip planning UI",
      "description": "Objective:\nEnsure that the Hobbeast trip planner uses Mapy.com data and map tiles in a provider-compliant way, with correct attribution visible in every relevant screen.\n\nProblem:\nMap integrations are not complete when provider attribution, copyright visibility and branding placement rules are ignored or inconsistently implemented.\n\nScope:\n\n* define attribution rules for planner screens with map view\n* define attribution rules for planner screens without map but with provider-powered location/routing UI\n* display provider logo or powered-by marker in the correct visual context\n* add required copyright text or footer block in the map area\n* make attribution visible on desktop and mobile\n* add QA checklist for compliance review\n\nFunctional requirements:\n\n* attribution is visible when map tiles are rendered\n* attribution remains visible when route summary overlays or floating controls are present\n* planner UI can also show provider attribution when using provider-powered search and routing flows\n\nTechnical requirements:\n\n* attribution component should be reusable and centrally configured\n* the implementation should avoid scattered hardcoded logo placement\n* responsive layout rules must prevent attribution from being hidden behind UI overlays\n\nAcceptance criteria:\n\n* every production planner screen that uses Mapy provider data shows provider attribution in the correct place\n* mobile layout still displays the required attribution\n* compliance rules are documented in implementation notes and QA checklist",
      "labels": [
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-95",
      "source": "file-import"
    },
    {
      "id": "hob-jira-85",
      "key": "HOB-96",
      "summary": "Story: Add Mapy route open and share actions for saved trip plans",
      "description": "Objective:\nLet users open, share and export saved trip plans outside Hobbeast when that is useful for navigation, handoff or external route viewing.\n\nProblem:\nUsers may want to continue navigation in Mapy, share the route with others, or open the route outside Hobbeast without rebuilding it.\n\nScope:\n\n* generate provider-compatible open route links from saved trip data\n* support opening the route in external Mapy web or app context where applicable\n* support share-ready route URLs for user handoff\n* support planner action buttons such as open externally and share\n* support fallbacks when a full route URL cannot be generated from a degraded saved record\n\nFunctional requirements:\n\n* user can open a saved trip outside Hobbeast\n* user can copy/share a route link where supported\n* route export action uses stored trip plan data and does not require re-entering points\n\nTechnical requirements:\n\n* external route link generation should be encapsulated in one service/helper layer\n* generated links must be deterministic from stored trip plan data\n* unsupported or partial routes must fail gracefully with UI feedback\n\nAcceptance criteria:\n\n* saved trip plan can be opened externally through generated route link\n* share action is available for supported trip records\n* broken or incomplete route data is handled safely",
      "labels": [
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-96",
      "source": "file-import"
    },
    {
      "id": "hob-jira-86",
      "key": "HOB-97",
      "summary": "Story: Add robust error handling and observability for Mapy trip planning",
      "description": "Objective:\nMake the trip planning capability diagnosable, resilient and user-friendly in the face of provider failures, invalid point combinations and partial route planning failures.\n\nProblem:\nGeocoding, routing and elevation integrations can fail independently. Without structured error handling the planner becomes unreliable and hard to support.\n\nScope:\n\n* define error model for suggest, geocode, reverse geocode, routing and elevation steps\n* provide user-safe UI messages for common failure cases\n* log provider failures and partial failures in structured form\n* distinguish no-result, invalid-route, provider-failure and degraded-mode cases\n* support retry-ready error states where appropriate\n\nFunctional requirements:\n\n* user sees understandable error feedback\n* route planner can continue in degraded mode when non-critical enrichment fails\n* technical diagnostics exist for debugging production issues\n\nTechnical requirements:\n\n* use structured log payloads for provider integration failures\n* preserve request context without exposing secrets in logs\n* define common error object or service contract for planner flows\n\nAcceptance criteria:\n\n* provider failures are visible in logs and understandable in UI\n* elevation or optional enrichment failure does not break core route planning\n* no-result and hard-failure states are distinguishable",
      "labels": [
        "AIAGENT_TRIPPLANNING",
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-97",
      "source": "file-import"
    },
    {
      "id": "hob-jira-87",
      "key": "HOB-98",
      "summary": "Story: Create backend trip planning service contract for non-UI callers",
      "description": "Objective:\nCreate a backend service layer for Mapy-based trip planning that is independent from the React UI, so the same routing and location logic can be used by manual user flows, backend automation and future AI agents.\n\nBusiness context:\nIf routing and location logic is embedded directly into UI components, the functionality becomes hard to reuse, test, automate and evolve. Hobbeast needs a backend-level trip planning contract that can be called by web UI, background jobs and agent workflows.\n\nProblem statement:\nThe current trip planning implementation trend is UI-driven. This is sufficient for manual interaction, but not sufficient for future automation, AI-assisted route generation, scheduled route preparation or system-to-system orchestration.\n\nTarget architecture:\nCreate a provider-facing service module plus an application-facing orchestration service.\n\nExpected layers:\n\n# MapyProviderClient\n\n* low-level HTTP integration\n* handles auth, base URL, request shaping, retries, response parsing\n* one method per provider capability\n\n# TripPlanningService\n\n* Hobbeast-facing application service\n* normalizes request/response\n* composes provider calls\n* enforces validation and fallback rules\n* reusable from UI endpoints, jobs and agent endpoints\n\n# Transport layer / API endpoints\n\n* UI endpoint(s)\n* internal service endpoint(s)\n* future agent endpoint(s)\n\nScope:\n\n* define normalized service methods for:\n** suggestLocation\n** geocodeLocation\n** reverseGeocodePoint\n** planRoute\n** enrichElevation\n** buildExternalRouteLink\n* define shared request and response schemas\n* define validation rules and common error model\n* define logging and correlation-id expectations\n* define configuration handling and provider secrets usage\n* define synchronous vs asynchronous boundaries\n* define compatibility rules for UI and non-UI callers\n\nOut of scope:\n\n* final AI decision engine\n* route recommendation ranking logic\n* offline navigation\n* full agent orchestration runtime\n\nDetailed functional requirements:\n\n# Service must accept normalized inputs instead of UI component state\n# Service must not depend on browser-only APIs\n# Service must return deterministic typed responses\n# Service must use a common error format across suggest/geocode/routing/elevation\n# Service must be callable from:\n#* event create/update workflow\n#* route planner UI actions\n#* future automation jobs\n#* future AI-agent workflows\n# Service must support partial-success scenarios, for example:\n#* route success + elevation failure\n#* reverse geocode partial result\n# Service must support idempotent read-like operations\n\nDetailed technical requirements:\n\n* define TypeScript interfaces in a shared domain module\n* isolate Mapy-specific HTTP details from application logic\n* use structured error types or tagged error objects\n* attach request correlation id to logs\n* sanitize provider responses before returning them to upper layers\n* do not leak secrets or raw credentials in logs or returned payloads\n* keep provider-specific raw response optional and internal by default\n\nSuggested interface contract:\n\n{noformat}export interface LocationRef {\n  label: string\n  lat: number\n  lon: number\n  type?: 'address' | 'poi' | 'city' | 'custom' | 'unknown'\n  providerId?: string\n  raw?: unknown\n}\n\nexport interface TripPlanningRequest {\n  routeType: 'foot_hiking' | 'foot_fast' | 'bike_road' | 'bike_mountain' | 'car_fast' | 'car_short'\n  start: LocationRef\n  end: LocationRef\n  waypoints?: LocationRef[]\n  options?: {\n    avoidToll?: boolean\n    avoidHighways?: boolean\n    departureAt?: string\n  }\n}\n\nexport interface TripPlanningResult {\n  routeType: string\n  lengthM: number | null\n  durationS: number | null\n  geometry: unknown\n  start: LocationRef\n  end: LocationRef\n  waypoints: LocationRef[]\n  elevationSummary?: {\n    ascentM?: number\n    descentM?: number\n  }\n  diagnostics?: {\n    degraded: boolean\n    warnings: string[]\n  }\n}{noformat}\n\nError model expectations:\n\n* VALIDATION_ERROR\n* NO_RESULT\n* AMBIGUOUS_LOCATION\n* PROVIDER_FAILURE\n* RATE_LIMITED\n* NO_ROUTE_FOUND\n* PARTIAL_SUCCESS\n\nAPI design expectations:\n\n* request/response objects must be stable enough for AI callers\n* avoid UI-specific booleans like modal state or visual-only selection state\n* service must be versionable without breaking callers\n\nSuggested endpoint family (illustrative):\n\n* POST /api/trip-planning/suggest\n* POST /api/trip-planning/geocode\n* POST /api/trip-planning/reverse-geocode\n* POST /api/trip-planning/route\n* POST /api/trip-planning/elevation\n* POST /api/trip-planning/external-link\n\nObservability requirements:\n\n* structured logs for every provider call\n* latency timing per provider operation\n* correlation id propagation\n* clear separation between caller-facing error and provider raw error\n\nAcceptance criteria:\n\n* a documented backend service contract exists for all core trip planning operations\n* the service can be called without any dependency on React component state\n* suggest/geocode/routing/elevation share a common validation and error model\n* the design is reusable by UI, automation and AI callers\n* implementation notes identify boundaries between provider adapter and Hobbeast domain service",
      "labels": [
        "AIAGENT_TRIPPLANNING",
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-98",
      "source": "file-import"
    },
    {
      "id": "hob-jira-88",
      "key": "HOB-99",
      "summary": "Story: Define structured request and response schema for AI trip planning calls",
      "description": "Objective:\nDefine a strict, versionable and machine-consumable schema for AI and automation initiated trip planning calls so that route generation is not based on ad-hoc prompts or UI-specific state.\n\nBusiness context:\nAn AI-capable trip planning feature is only safe and maintainable if the contract is explicit. Agents and backend workflows must not rely on brittle text parsing, UI labels or implicit assumptions about current planner state.\n\nProblem statement:\nWithout a stable schema, the same trip planning capability will behave inconsistently across UI, backend automation and future AI callers. A structured contract is required to make validation, auditing, retries and safe execution possible.\n\nPrimary goal:\nCreate a normalized request/response schema that can support manual UI usage, automation jobs and AI agent orchestration with the same underlying service contract.\n\nScope:\n\n* define canonical input schema for trip planning\n* define canonical output schema for routing results\n* define optional fields for constraints and route preferences\n* define error schema for machine handling\n* define ambiguity and confirmation-needed schema\n* define schema versioning rules\n* define validation rules and required/optional field semantics\n\nDetailed functional requirements:\n\n# Request schema must support:\n\n* route type\n* start point\n* end point\n* waypoint list\n* route constraints\n* optional departure time\n* optional user intent metadata\n* optional planner mode metadata\n\n# Response schema must support:\n\n* resolved route summary\n* geometry payload reference\n* resolved point list in normalized form\n* diagnostics and warnings\n* route quality flags\n* degradation indicators\n* next-step recommendations when user confirmation is needed\n\n# Error schema must support:\n\n* validation failures\n* ambiguous place resolution\n* no route found\n* provider failure\n* rate limited\n* partial success\n\n# Schema must support the difference between:\n\n* user asked for a route\n* system needs clarification before route generation\n* route created successfully but with warnings\n\nDetailed technical requirements:\n\n* define JSON-serializable request and response structures\n* do not include UI-only concepts such as modal step index or component-local booleans\n* schema must be stable enough for OpenAPI/JSON Schema style documentation later\n* ambiguous location and disambiguation states must be explicit and typed\n* schema should carry enough information to reconstruct and audit the decision path\n\nSuggested request contract:\n\n{noformat}export interface TripPlanningConstraintSet {\n  avoidToll?: boolean\n  avoidHighways?: boolean\n  maxDistanceM?: number\n  maxDurationS?: number\n  requireLoop?: boolean\n  preferScenic?: boolean\n  preferEasyTerrain?: boolean\n}\n\nexport interface AITripPlanningRequest {\n  schemaVersion: '1.0'\n  routeType: 'foot_hiking' | 'foot_fast' | 'bike_road' | 'bike_mountain' | 'car_fast' | 'car_short'\n  start: LocationRef | UnresolvedLocationRef\n  end: LocationRef | UnresolvedLocationRef\n  waypoints?: Array<LocationRef | UnresolvedLocationRef>\n  constraints?: TripPlanningConstraintSet\n  departureAt?: string\n  callerContext?: {\n    source: 'ui' | 'automation' | 'ai_agent'\n    eventId?: string\n    userId?: string\n  }\n}{noformat}\n\nSuggested response contract:\n\n{noformat}export interface AITripPlanningResponse {\n  schemaVersion: '1.0'\n  status: 'success' | 'needs_clarification' | 'partial_success' | 'failure'\n  resolvedRoute?: TripPlanningResult\n  unresolvedItems?: Array<{\n    field: 'start' | 'end' | 'waypoint'\n    reason: 'ambiguous_location' | 'no_result' | 'invalid_constraint'\n    candidates?: LocationRef[]\n  }>\n  warnings?: string[]\n  diagnostics?: {\n    provider: 'mapy'\n    degraded: boolean\n    correlationId?: string\n  }\n  error?: {\n    code: 'VALIDATION_ERROR' | 'AMBIGUOUS_LOCATION' | 'NO_RESULT' | 'PROVIDER_FAILURE' | 'NO_ROUTE_FOUND' | 'RATE_LIMITED'\n    message: string\n  }\n}{noformat}\n\nValidation rules:\n\n* start and end are mandatory for route planning execution\n* routeType is mandatory\n* waypoints may be empty but must preserve order if present\n* unresolved items must not silently convert to arbitrary provider result\n* response status must always be set\n* partial_success and needs_clarification are first-class states, not generic errors\n\nAcceptance criteria:\n\n* a versioned AI/automation-friendly request schema exists\n* a versioned response schema exists\n* ambiguity, validation and degraded execution are explicitly represented\n* the schema is usable without any dependency on the web UI structure\n* the story description is sufficient for implementation of shared types and API documentation",
      "labels": [
        "AIAGENT_TRIPPLANNING",
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-99",
      "source": "file-import"
    },
    {
      "id": "hob-jira-89",
      "key": "HOB-100",
      "summary": "Story: Add AI-safe ambiguous location resolution workflow for trip planning",
      "description": "Objective:\nPrevent AI-driven or automated trip planning from silently selecting the wrong place when the input location is ambiguous, incomplete or underspecified.\n\nBusiness context:\nLocation ambiguity is one of the highest-risk failure modes in trip planning. A human user may notice a wrong city, mountain peak or POI immediately, but an automation or AI agent can otherwise proceed with a plausible but incorrect route. Hobbeast therefore needs an explicit ambiguity-resolution workflow instead of optimistic best-guess behavior.\n\nProblem statement:\nMap-style suggest and geocoding systems often return multiple valid candidates for the same text input, for example:\n\n* multiple cities with the same name\n* POI vs street vs district ambiguity\n* missing country or region context\n* route points described only semantically, like \"the lake viewpoint\"\nWithout a dedicated resolution workflow, AI callers may create invalid or misleading routes.\n\nPrimary goal:\nIntroduce a deterministic and reviewable location-resolution process that can stop execution, return candidate options and request clarification when confidence is insufficient.\n\nScope:\n\n* define unresolved location input model\n* define ambiguity detection rules\n* define candidate scoring and candidate list return structure\n* define clarification-needed response path\n* define confidence thresholds and execution blocking rules\n* define UI-compatible and AI-compatible resolution payloads\n* define fallback chain across suggest, geocode and reverse geocode driven workflows\n\nDetailed functional requirements:\n\n# The system must distinguish between:\n\n* exact resolved location\n* partially resolved location\n* ambiguous location with multiple candidates\n* no-result location\n* invalid location input\n\n# The system must not auto-execute a route if either start or end remains in ambiguous state above the configured confidence threshold.\n# The system must return candidate options for ambiguous items with enough metadata for downstream selection:\n\n* display label\n* lat/lon\n* location type\n* region/country context\n* provider id if available\n* confidence score or ranking position\n\n# The system must support explicit clarification on:\n\n* start point\n* end point\n* any waypoint\n\n# The system must support a fallback resolution chain such as:\n\n* suggest candidates\n* exact geocode refinement\n* reverse geocode normalization if point already exists\n* return needs_clarification if still ambiguous\n\n# For AI callers, the system must be able to return a structured clarification object instead of plain text.\n# The system must support safe execution only when:\n\n* all mandatory locations are resolved\n* ambiguity threshold is satisfied\n* constraints remain valid after resolution\n\nDetailed technical requirements:\n\n* define {{UnresolvedLocationRef}} structure separate from {{LocationRef}}\n* store candidate lists in deterministic order\n* make confidence threshold configurable, not hardcoded in UI\n* expose machine-readable reasons for ambiguity such as:\n** MULTIPLE_CITY_MATCHES\n** POI_AND_ADDRESS_CONFLICT\n** COUNTRY_CONTEXT_MISSING\n** INSUFFICIENT_PROVIDER_CONFIDENCE\n* resolution logic must be reusable by both manual UI flow and AI flow\n* do not collapse candidate lists into a single best guess without traceability\n\nSuggested type model:\n\n{noformat}export interface UnresolvedLocationRef {\n  inputText: string\n  source?: 'typed_text' | 'ai_generated' | 'map_click' | 'imported'\n}\n\nexport interface LocationCandidate {\n  label: string\n  lat: number\n  lon: number\n  type: 'address' | 'poi' | 'city' | 'district' | 'region' | 'unknown'\n  region?: string\n  country?: string\n  providerId?: string\n  confidence?: number\n}\n\nexport interface LocationResolutionResult {\n  status: 'resolved' | 'needs_clarification' | 'no_result' | 'invalid'\n  resolved?: LocationRef\n  candidates?: LocationCandidate[]\n  reason?: 'MULTIPLE_CITY_MATCHES' | 'POI_AND_ADDRESS_CONFLICT' | 'COUNTRY_CONTEXT_MISSING' | 'NO_PROVIDER_RESULT' | 'INVALID_INPUT'\n}{noformat}\n\nDecision rules:\n\n* if exactly one candidate is above confident threshold and no close peer candidate exists, status may be {{resolved}}\n* if multiple candidates are close in score, status must be {{needs_clarification}}\n* if no candidate exists, status must be {{no_result}}\n* if input is blank or structurally unusable, status must be {{invalid}}\n\nExample scenario coverage:\n\n* \"Springfield\" without country => needs clarification\n* \"Margit-sziget\" with one dominant Budapest result => may auto-resolve if threshold satisfied\n* \"lake viewpoint\" in remote hiking context => likely ambiguous unless contextualized by prior route area\n\nAcceptance criteria:\n\n* ambiguous locations are represented as a first-class state, not hidden fallback behavior\n* AI and automation callers receive structured clarification payloads when required\n* the routing service does not continue with silently guessed mandatory points\n* candidate ordering and ambiguity reasons are explicit enough for implementation and QA\n* story description is sufficient for implementing shared types, service logic and clarification UX/API behavior",
      "labels": [
        "AIAGENT_TRIPPLANNING",
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-100",
      "source": "file-import"
    },
    {
      "id": "hob-jira-90",
      "key": "HOB-101",
      "summary": "Story: Add AI-assisted trip generation and waypoint suggestion readiness",
      "description": "Objective:\nPrepare the trip planning domain so that future AI-assisted route generation can propose start/end combinations, waypoint candidates and route alternatives without requiring a redesign of the core planner architecture.\n\nBusiness context:\nThe current business value is not only in manual route creation but in future higher-level assistance such as:\n\n* plan a scenic hike between two places\n* suggest two intermediate viewpoints\n* make the route easier or shorter\n* create a family-friendly version of the route\nTo support this safely, the trip planning architecture must preserve separation between deterministic routing and optional recommendation logic.\n\nProblem statement:\nIf AI-assisted route generation is bolted on top of the existing planner without preparation, the result will be brittle, hard to validate and difficult to audit. The planner needs explicit extension points for AI-generated waypoint candidates, route alternatives and optimization constraints.\n\nPrimary goal:\nDefine the readiness layer that allows AI-generated proposals to be inserted, reviewed, ranked and either accepted or rejected without bypassing deterministic routing and validation.\n\nScope:\n\n* define proposal model for AI-suggested points and route variants\n* define distinction between suggested point and accepted route point\n* define planner readiness for route alternatives\n* define metadata model for suggestion rationale\n* define validation pass that every AI proposal must go through before becoming an executable route request\n* define hooks for future scoring of scenic, easier, shorter or thematic routes\n\nOut of scope:\n\n* full production AI generation model\n* semantic content generation for travel articles or full travel itineraries\n* autonomous final decision making without validation\n\nDetailed functional requirements:\n\n# The system must support proposed points that are not yet accepted into the saved route.\n# The system must support multiple route alternatives for the same high-level user intent.\n# Every AI-suggested point must pass the same location resolution workflow as manual input.\n# Every AI-suggested route must pass the same deterministic routing validation as manual routing.\n# The planner must preserve the difference between:\n\n* suggested waypoint\n* accepted waypoint\n* rejected waypoint\n* alternative route candidate\n\n# The system must support rationale metadata such as:\n\n* scenic viewpoint\n* shorter detour\n* easier terrain\n* avoids steep climb\n* avoids road traffic\n\n# The system must support user review or workflow review before committing suggestions into saved trip data.\n\nDetailed technical requirements:\n\n* define proposal entities or in-memory structures separate from final trip plan entities\n* preserve traceability of where each suggestion came from\n* do not allow AI-generated waypoints to bypass validation, ambiguity resolution or route recalculation\n* support suggestion ranking and future confidence scores\n* support later UI rendering of multiple route alternatives\n\nSuggested data model concepts:\n\n{noformat}export interface TripPointProposal {\n  id: string\n  source: 'ai_agent' | 'automation_rule' | 'manual_helper'\n  proposalType: 'start' | 'end' | 'waypoint'\n  candidate: LocationRef | UnresolvedLocationRef\n  rationale?: string[]\n  confidence?: number\n  status: 'proposed' | 'accepted' | 'rejected'\n}\n\nexport interface RouteAlternativeProposal {\n  id: string\n  basedOnRequestId: string\n  routeType: string\n  proposedWaypoints: TripPointProposal[]\n  expectedLengthM?: number\n  expectedDurationS?: number\n  rationale?: string[]\n  status: 'proposed' | 'accepted' | 'rejected'\n}{noformat}\n\nDecision flow expectations:\n\n# AI or automation proposes route enhancement or full route candidate\n# proposed points are location-resolved and validated\n# deterministic routing is executed\n# result is returned as one or more route alternatives\n# user or workflow accepts one route alternative\n# only accepted alternative becomes persisted trip plan\n\nExample scenarios:\n\n* user asks for a more scenic hiking route => system proposes two alternative waypoint sets\n* user asks for a shorter route => system proposes a reduced waypoint version\n* AI suggests a lake viewpoint, but the location is ambiguous => clarification required before routing continues\n\nAcceptance criteria:\n\n* the architecture clearly separates proposed and accepted trip planning data\n* AI or automation suggestions cannot silently become persisted route points without validation\n* the story provides enough detail for implementing proposal models and future alternative-route workflows\n* the design supports later UI and agent features without requiring core planner redesign",
      "labels": [
        "AIAGENT_TRIPPLANNING",
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-101",
      "source": "file-import"
    },
    {
      "id": "hob-jira-91",
      "key": "HOB-102",
      "summary": "Story: Add agent governance, quota control and audit trail for automated trip planning",
      "description": "Objective:\nEnsure that automated and AI-driven trip planning executions are governable, rate-aware and auditable, so Hobbeast can safely support non-human callers without losing operational control.\n\nBusiness context:\nAs soon as trip planning becomes callable by automation or AI agents, the system needs stronger controls than a pure user-interaction feature. Without audit, caller identity, quota rules and execution traceability, the platform risks abuse, debugging difficulties, excessive provider usage and unreviewable autonomous actions.\n\nProblem statement:\nManual user clicks are naturally limited and attributable. Automated trip planning is not. If the system later allows background jobs or AI agents to trigger geocoding, routing and elevation flows repeatedly, it must know:\n\n* who triggered the action\n* why it was triggered\n* how often it can run\n* what provider usage it consumed\n* what final route result was chosen\n\nPrimary goal:\nDefine the governance and control layer that makes AI/automation trip planning operationally safe before large-scale automated use is introduced.\n\nScope:\n\n* define caller identity model for UI, automation and AI agent executions\n* define per-caller and per-scope quota concepts\n* define audit log model for trip planning requests and decisions\n* define execution trace model for provider calls and route outcomes\n* define safe defaults for throttling and quota exhaustion behavior\n* define reviewability for accepted vs rejected AI-proposed routes\n* define security boundaries for secret usage and privileged execution paths\n\nDetailed functional requirements:\n\n# Every automated or AI-initiated trip planning execution must record:\n\n* request id\n* caller type\n* caller id where available\n* event id if relevant\n* timestamp\n* route intent summary\n* final status\n\n# The system must distinguish between caller categories:\n\n* UI user action\n* internal automation job\n* AI agent\n* admin/internal tooling\n\n# The system must support configurable quotas or limits such as:\n\n* per minute/provider call limit\n* per day/agent call budget\n* per event planning retry limit\n* per workflow execution cap\n\n# The system must define behavior when quota is reached:\n\n* hard reject\n* defer\n* degrade to no-elevation mode\n* require manual retry\n\n# The system must record decision trail data for AI-assisted planning, including:\n\n* original structured request\n* ambiguity state if any\n* proposed alternatives\n* selected alternative\n* accepted/rejected proposals\n\n# Audit data must make it possible to answer:\n\n* who/what created this route?\n* was the route fully manual, automated or AI-assisted?\n* what provider calls were executed?\n* why was one route alternative accepted?\n\nDetailed technical requirements:\n\n* define audit entity separate from the final persisted trip plan\n* audit structure must be append-oriented and safe for later analytics\n* do not store secrets or unsafe provider payloads in audit log\n* support correlation id across trip planning request, provider calls and saved result\n* design must be compatible with future observability dashboards\n\nSuggested audit model:\n\n{noformat}export interface TripPlanningAuditRecord {\n  id: string\n  requestId: string\n  callerType: 'ui' | 'automation' | 'ai_agent' | 'admin_tool'\n  callerId?: string\n  eventId?: string\n  startedAt: string\n  finishedAt?: string\n  status: 'success' | 'needs_clarification' | 'partial_success' | 'failure' | 'rate_limited'\n  routeType?: string\n  provider: 'mapy'\n  requestSummary: {\n    hasWaypoints: boolean\n    waypointCount: number\n    hasConstraints: boolean\n  }\n  chosenAlternativeId?: string\n  warnings?: string[]\n  errorCode?: string\n  correlationId?: string\n}{noformat}\n\nSuggested quota model concepts:\n\n{noformat}export interface TripPlanningQuotaPolicy {\n  callerType: 'automation' | 'ai_agent' | 'admin_tool'\n  maxCallsPerMinute?: number\n  maxCallsPerDay?: number\n  maxElevationCallsPerDay?: number\n  maxRetriesPerRequest?: number\n}{noformat}\n\nOperational design expectations:\n\n* governance checks occur before provider-intensive execution\n* quota breaches return typed responses, not generic failures\n* audit trail is written for both success and failure paths\n* accepted route choice is traceable when alternatives were proposed\n\nAcceptance criteria:\n\n* automated and AI-initiated trip planning has an explicit audit model\n* quota and throttling concepts are defined with caller-aware rules\n* trip planning decisions are traceable from request to chosen result\n* the story description is detailed enough for implementing governance entities, checks and audit persistence",
      "labels": [
        "AIAGENT_TRIPPLANNING",
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-102",
      "source": "file-import"
    },
    {
      "id": "hob-jira-92",
      "key": "HOB-103",
      "summary": "Story: Add AI-assisted trip generation and waypoint suggestion readiness",
      "description": "Objective:\nPrepare the trip planning domain so that future AI-assisted route generation can propose start and end combinations, waypoint candidates and route alternatives without requiring a redesign of the core planner architecture.\n\nBusiness context:\nThe long-term value of trip planning is not limited to manual route creation. Future assistant features may need to support requests such as:\n\n* suggest a scenic hike between two places\n* add one or two viewpoint stops\n* generate a shorter or easier variant of the same route\n* propose a family-friendly route option\nTo support this safely, Hobbeast must separate deterministic routing from suggestion and recommendation logic.\n\nProblem statement:\nIf AI-generated suggestions are inserted directly into the planner as final route data, the system becomes hard to validate, hard to audit and unsafe to automate. The planner needs explicit proposal states and validation gates.\n\nPrimary goal:\nCreate the readiness layer that allows AI-generated points and route alternatives to be proposed, validated, reviewed and then accepted or rejected.\n\nScope:\n\n* define proposal model for AI-suggested points\n* define proposal model for alternative routes\n* define distinction between proposed and accepted route points\n* define validation pass required before any proposed point becomes part of an executable route request\n* define metadata model for rationale and confidence\n* define readiness hooks for route alternatives such as scenic, easier, shorter and thematic options\n\nOut of scope:\n\n* full production AI generation engine\n* free-form natural language itinerary writing\n* autonomous final route acceptance without validation or review\n\nDetailed functional requirements:\n\n# The system must support proposed points that are not yet committed into the final trip plan.\n# The system must support more than one route alternative for the same user intent.\n# Every AI-suggested point must go through the same location resolution workflow as manual input.\n# Every AI-suggested route must go through the same deterministic routing validation as manual routing.\n# The planner must preserve the difference between:\n\n* proposed waypoint\n* accepted waypoint\n* rejected waypoint\n* proposed route alternative\n* accepted route alternative\n\n# The system must support rationale metadata such as:\n\n* scenic viewpoint\n* shorter detour\n* easier terrain\n* avoids steep climb\n* avoids traffic-heavy section\n\n# The system must support a review step where a user or workflow accepts one proposal before persistence.\n\nDetailed technical requirements:\n\n* proposal entities must be stored or represented separately from final trip plan entities\n* proposal origin must be traceable (ai_agent, automation_rule, manual_assistant, etc.)\n* no AI-generated point may bypass ambiguity resolution, validation or route recalculation\n* proposal structures must support confidence scores and ranking later\n* route alternatives must be renderable later in UI without changing the underlying trip planning contract\n\nSuggested model:\n\n{noformat}export interface TripPointProposal {\n  id: string\n  source: 'ai_agent' | 'automation_rule' | 'manual_helper'\n  proposalType: 'start' | 'end' | 'waypoint'\n  candidate: LocationRef | UnresolvedLocationRef\n  rationale?: string[]\n  confidence?: number\n  status: 'proposed' | 'accepted' | 'rejected'\n}\n\nexport interface RouteAlternativeProposal {\n  id: string\n  basedOnRequestId: string\n  routeType: string\n  proposedWaypoints: TripPointProposal[]\n  expectedLengthM?: number\n  expectedDurationS?: number\n  rationale?: string[]\n  status: 'proposed' | 'accepted' | 'rejected'\n}{noformat}\n\nDecision flow expectations:\n\n# AI or automation proposes one or more route improvements or full alternatives\n# proposed points are location-resolved and validated\n# deterministic routing is executed for each viable candidate\n# route alternatives are returned as proposals\n# a user or workflow accepts one alternative\n# only the accepted alternative becomes the persisted trip plan\n\nAcceptance criteria:\n\n* the architecture explicitly separates proposed and accepted trip planning data\n* AI or automation suggestions cannot silently become final route points without validation\n* the story provides enough detail to implement proposal models and route alternative readiness\n* the design supports later UI and agent features without requiring core planner redesign",
      "labels": [
        "AIAGENT_TRIPPLANNING",
        "MAPY_TRIPPLANNING"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-103",
      "source": "file-import"
    },
    {
      "id": "hob-jira-93",
      "key": "HOB-104",
      "summary": "Subtask: Create renderer selection ADR and TripPlanningMap technical foundation",
      "description": "Create the implementation foundation for HOB-87.\n\nDeliverables:\n\n* short architecture decision record for chosen map renderer\n* reusable TripPlanningMap component contract\n* map lifecycle strategy for mount, resize, cleanup and re-render\n* separation between base map layer, marker layer and route overlay layer\n\nDetailed implementation expectations:\n\n# Evaluate and document the chosen renderer against the Mapy tile use case:\n\n* tile layer support\n* marker support\n* polyline support\n* fitBounds support\n* mobile touch compatibility\n* bundle size and maintenance risk\n\n# Define component API, for example:\n\n* center\n* zoom\n* markers[]\n* routeGeometry\n* onMapClick\n* readonly/edit mode\n* className/height options\n\n# Define internal map lifecycle handling:\n\n* one-time map creation\n* safe cleanup on unmount\n* resize invalidation when modal/card opens\n* overlay refresh when points or geometry change\n\n# Define overlay architecture:\n\n* base tile layer\n* marker layer for start/end/waypoints\n* route polyline layer\n* future optional highlight/debug layers\n\nAcceptance criteria:\n\n* ADR exists and explains renderer choice\n* TripPlanningMap component API is documented in code or implementation note\n* component foundation supports later tile, marker and route work without redesign",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-104",
      "source": "file-import"
    },
    {
      "id": "hob-jira-94",
      "key": "HOB-105",
      "summary": "Subtask: Create renderer selection ADR and TripPlanningMap technical foundation",
      "description": "Create the implementation foundation for HOB-87.\n\nDeliverables:\n\n* short architecture decision record for chosen map renderer\n* reusable TripPlanningMap component contract\n* map lifecycle strategy for mount, resize, cleanup and re-render\n* separation between base map layer, marker layer and route overlay layer\n\nDetailed implementation expectations:\n\n# Evaluate and document the chosen renderer against the Mapy tile use case:\n\n* tile layer support\n* marker support\n* polyline support\n* fitBounds support\n* mobile touch compatibility\n* bundle size and maintenance risk\n\n# Define component API, for example:\n\n* center\n* zoom\n* markers[]\n* routeGeometry\n* onMapClick\n* readonly/edit mode\n* className/height options\n\n# Define internal map lifecycle handling:\n\n* one-time map creation\n* safe cleanup on unmount\n* resize invalidation when modal/card opens\n* overlay refresh when points or geometry change\n\n# Define overlay architecture:\n\n* base tile layer\n* marker layer for start/end/waypoints\n* route polyline layer\n* future optional highlight/debug layers\n\nAcceptance criteria:\n\n* ADR exists and explains renderer choice\n* TripPlanningMap component API is documented in code or implementation note\n* component foundation supports later tile, marker and route work without redesign",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-105",
      "source": "file-import"
    },
    {
      "id": "hob-jira-95",
      "key": "HOB-106",
      "summary": "Subtask: Create renderer selection ADR and TripPlanningMap technical foundation",
      "description": "Create the implementation foundation for HOB-87.\n\nDeliverables:\n\n* short architecture decision record for chosen map renderer\n* reusable TripPlanningMap component contract\n* map lifecycle strategy for mount, resize, cleanup and re-render\n* separation between base map layer, marker layer and route overlay layer\n\nDetailed implementation expectations:\n\n# Evaluate and document the chosen renderer against the Mapy tile use case:\n\n* tile layer support\n* marker support\n* polyline support\n* fitBounds support\n* mobile touch compatibility\n* bundle size and maintenance risk\n\n# Define component API, for example:\n\n* center\n* zoom\n* markers[]\n* routeGeometry\n* onMapClick\n* readonly/edit mode\n* className/height options\n\n# Define internal map lifecycle handling:\n\n* one-time map creation\n* safe cleanup on unmount\n* resize invalidation when modal/card opens\n* overlay refresh when points or geometry change\n\n# Define overlay architecture:\n\n* base tile layer\n* marker layer for start/end/waypoints\n* route polyline layer\n* future optional highlight/debug layers\n\nAcceptance criteria:\n\n* ADR exists and explains renderer choice\n* TripPlanningMap component API is documented in code or implementation note\n* component foundation supports later tile, marker and route work without redesign",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-106",
      "source": "file-import"
    },
    {
      "id": "hob-jira-96",
      "key": "HOB-107",
      "summary": "Subtask: Implement Mapy tile layer configuration and attribution-safe base map setup",
      "description": "Implement the base map setup for HOB-87 using the chosen renderer.\n\nDeliverables:\n\n* Mapy raster tile source configuration\n* base layer initialization inside TripPlanningMap\n* attribution-safe placement strategy in the base map view\n* environment/config separation for provider base URLs and related settings\n\nDetailed implementation expectations:\n\n# Create tile layer configuration abstraction:\n\n* tile URL template or source definition\n* zoom constraints\n* retina/high density handling if applicable\n* environment-safe config location\n\n# Bind tile layer into TripPlanningMap lifecycle:\n\n* attach on initial map creation\n* prevent duplicate layer creation during rerender\n* ensure proper cleanup on unmount or map reset\n\n# Prepare attribution-aware base map structure:\n\n* reserve space for attribution UI/component\n* ensure overlays do not cover required provider attribution area\n* define mobile-safe attribution placement expectation\n\n# Validate basic rendering scenarios:\n\n* initial center and zoom render\n* resize after modal open\n* base layer still visible after overlay updates\n\nAcceptance criteria:\n\n* Mapy base map tiles render consistently in the selected renderer\n* tile layer setup is encapsulated and reusable\n* attribution placement is accounted for in the base map layout\n* no duplicate tile layers appear after re-render or state changes",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-107",
      "source": "file-import"
    },
    {
      "id": "hob-jira-97",
      "key": "HOB-108",
      "summary": "Subtask: Implement marker and route overlay architecture in TripPlanningMap",
      "description": "Implement overlay rendering for HOB-87.\n\nDeliverables:\n\n* marker rendering contract for start, end and waypoint roles\n* route polyline layer contract\n* overlay update strategy when points or geometry change\n* visual style token placeholders for route and point roles\n\nDetailed implementation expectations:\n\n# Marker model must support:\n\n* stable id\n* role: start, end, waypoint, temporary_candidate\n* lat/lon\n* label/title\n* selected or active state\n* optional draggable flag for later use\n\n# Polyline model must support:\n\n* geometry input from routing result\n* style variants for active route vs future alternatives\n* clear add, update and remove lifecycle\n\n# Overlay refresh rules:\n\n* point change updates marker layer only if geometry unchanged\n* route recalculation replaces route polyline safely\n* overlay redraw must not recreate the whole map instance\n\n# Visual semantics:\n\n* start marker visually distinct from end marker\n* waypoint markers distinct but lower emphasis than endpoints\n* temporary candidate marker clearly differentiated from committed points\n\nAcceptance criteria:\n\n* TripPlanningMap can display marker collections and one route polyline\n* overlay changes update correctly without full map reset\n* marker roles are visually understandable",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-108",
      "source": "file-import"
    },
    {
      "id": "hob-jira-98",
      "key": "HOB-109",
      "summary": "Subtask: Build reusable LocationSearchInput with debounced suggest query flow",
      "description": "Implement the reusable search input foundation for HOB-88.\n\nDeliverables:\n\n* reusable LocationSearchInput component\n* debounced request flow for suggest queries\n* dropdown result list with keyboard and pointer interaction\n* loading, empty and error visual states\n\nDetailed implementation expectations:\n\n# Component state separation:\n\n* raw typed input string\n* debounced query value\n* result list state\n* currently highlighted suggestion\n* selected resolved location object\n\n# Interaction rules:\n\n* debounce user typing before provider call\n* close result list on blur with safe click handling\n* support enter to select highlighted item\n* support arrow-key navigation in the result list\n* support touch selection on mobile\n\n# UX states:\n\n* idle\n* loading\n* results available\n* no results\n* request failed\n\n# Reusability expectations:\n\n* component must be usable for start, end and waypoint fields\n* no hardcoded assumptions about the field role\n* onSelect callback must return a normalized location candidate object, not only label text\n\nAcceptance criteria:\n\n* a reusable location search input exists\n* the input supports debounced suggest lookups\n* result list is keyboard and mobile friendly\n* the component returns a normalized selected item to planner state",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-109",
      "source": "file-import"
    },
    {
      "id": "hob-jira-99",
      "key": "HOB-110",
      "summary": "Subtask: Implement selected suggestion resolution into normalized LocationRef objects",
      "description": "Implement the resolution step for HOB-88 that converts a selected suggest result into a normalized location object used by the planner and routing service.\n\nDeliverables:\n\n* provider result normalization helper\n* normalized LocationRef mapping for addresses, POIs and generic places\n* field-level validation before planner state update\n* safe handling for partial provider results\n\nDetailed implementation expectations:\n\n# Normalize selected provider result into one shared shape:\n\n* label\n* lat\n* lon\n* type\n* providerId if present\n* region/country if available\n* optional bbox/raw metadata\n\n# Resolution rules:\n\n* selected result must not update planner state until required coordinates are present\n* partial provider result must either be enriched by follow-up lookup or rejected with typed error\n* same normalization helper must be reusable by reverse geocode and AI-safe location resolution flows later\n\n# Planner integration rules:\n\n* selecting a result updates the correct role field: start, end or waypoint\n* normalized object is stored separately from raw typed text\n* previously selected location can be replaced cleanly without stale state\n\nAcceptance criteria:\n\n* selected search result becomes a normalized LocationRef-like object\n* planner state stores structured location data, not only display text\n* invalid or partial provider selections do not silently corrupt the route input state",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-110",
      "source": "file-import"
    },
    {
      "id": "hob-jira-100",
      "key": "HOB-111",
      "summary": "Subtask: Implement map click capture and candidate point assignment flow",
      "description": "Implement the interaction flow for HOB-89 that allows a clicked map position to become a temporary planner candidate before being assigned to start, end or waypoint.\n\nDeliverables:\n\n* map click handler integration in TripPlanningMap\n* temporary candidate marker state\n* candidate assignment action sheet or popup logic\n* planner state update for assigned point role\n\nDetailed implementation expectations:\n\n# Click capture:\n\n* capture lon/lat from map click event\n* create temporary point candidate object\n* prevent accidental double-click duplication\n* support touch interaction on mobile\n\n# Candidate state model:\n\n* temporary candidate exists independently from committed route points\n* temporary candidate can be dismissed or replaced by the next click\n* temporary candidate marker uses distinct visual style\n\n# Assignment flow:\n\n* user can assign candidate as start, end or waypoint\n* assignment updates the correct planner state bucket\n* if the target role already has a point, replacement rules are explicit and safe\n\n# Integration rules:\n\n* assignment must trigger later routing readiness checks\n* temporary candidate state must clear after successful assignment or cancel\n\nAcceptance criteria:\n\n* map click creates a temporary candidate point\n* user can assign the candidate to the correct route role\n* candidate assignment updates planner state without stale temporary state remaining",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-111",
      "source": "file-import"
    },
    {
      "id": "hob-jira-101",
      "key": "HOB-112",
      "summary": "Subtask: Implement reverse geocode normalization for clicked map candidates",
      "description": "Implement the reverse geocoding step for HOB-89.\n\nDeliverables:\n\n* provider call for reverse geocoding of clicked coordinates\n* normalization helper from provider response to shared LocationRef shape\n* fallback behavior for partial or weak reverse geocode results\n* integration with temporary map-click candidate flow\n\nDetailed implementation expectations:\n\n# Input and execution:\n\n* accept raw lon/lat from click flow\n* call reverse geocoding through shared provider/service layer\n* attach correlation metadata for diagnostics\n\n# Normalization:\n\n* map provider response to shared location structure\n* include label, lat, lon, type, region/country where available\n* preserve optional raw/provider metadata internally when needed\n\n# Failure and fallback handling:\n\n* if reverse geocode returns partial label, keep coordinates and mark degraded label quality\n* if reverse geocode fails entirely, allow coordinate-based candidate with clear degraded state instead of silent failure\n* do not block point assignment purely because display label is incomplete\n\n# Planner integration:\n\n* clicked point candidate should display best available label\n* normalized result must be compatible with search-selected point structure\n\nAcceptance criteria:\n\n* clicked map points are reverse-geocoded through the shared service layer\n* resulting candidate uses the same normalized structure as search-selected points\n* reverse geocode failure degrades gracefully without breaking the point-selection flow",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-112",
      "source": "file-import"
    },
    {
      "id": "hob-jira-102",
      "key": "HOB-113",
      "summary": "Subtask: Build routing request composer from normalized planner state",
      "description": "Implement the request-building layer for HOB-92.\n\nDeliverables:\n\n* normalized route request composer\n* route type mapping from UI/domain state to provider request\n* ordered start/end/waypoint serialization\n* validation before provider call\n\nDetailed implementation expectations:\n\n# Input contract:\n\n* accepted normalized LocationRef objects only\n* explicit routeType\n* ordered waypoint array\n* optional route options such as avoidToll or avoidHighways when applicable\n\n# Validation rules:\n\n* start and end must exist before provider call\n* waypoint list must preserve user-defined order\n* invalid coordinates must fail with typed validation error before provider call\n* unsupported route type must fail before provider call\n\n# Mapping rules:\n\n* translate Hobbeast planner route type to provider-specific route type value\n* serialize coordinates in the exact order expected by provider\n* keep request building isolated from UI component code\n\n# Diagnostics:\n\n* emit structured request summary for logs without leaking secrets\n* attach correlation id for downstream provider call tracing\n\nAcceptance criteria:\n\n* planner state can be converted into a valid provider route request\n* invalid route inputs fail before provider call\n* request composition logic is reusable from UI and backend callers",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-113",
      "source": "file-import"
    },
    {
      "id": "hob-jira-103",
      "key": "HOB-114",
      "summary": "Subtask: Normalize routing response into shared TripPlanningResult model",
      "description": "Implement the response-mapping layer for HOB-92.\n\nDeliverables:\n\n* provider routing response parser\n* normalized TripPlanningResult mapping\n* route summary extraction\n* degraded/partial routing diagnostics handling\n\nDetailed implementation expectations:\n\n# Parse provider routing result into shared fields:\n\n* routeType\n* lengthM\n* durationS\n* geometry\n* normalized start/end/waypoint references\n* diagnostics and warnings when relevant\n\n# Geometry handling:\n\n* preserve provider geometry in a form usable by route rendering layer\n* isolate geometry parsing from UI rendering code\n* validate that returned geometry is present and structurally usable before planner state update\n\n# Failure and degraded handling:\n\n* no-route and malformed-response cases must return typed errors\n* partial or warning cases should populate diagnostics instead of silently failing\n* route result must remain compatible with future elevation enrichment and trip persistence\n\n# Planner integration rules:\n\n* successful normalization updates current route result state\n* previous route state is replaced safely\n* malformed response must not leave planner in inconsistent hybrid state\n\nAcceptance criteria:\n\n* provider routing response is mapped into one shared TripPlanningResult-like structure\n* route summary and geometry are available to rendering and persistence layers\n* malformed or incomplete routing results are handled with explicit error or degraded state",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-114",
      "source": "file-import"
    },
    {
      "id": "hob-jira-104",
      "key": "HOB-115",
      "summary": "Subtask: Design trip plan persistence schema and event linkage",
      "description": "Implement the storage design work for HOB-94.\n\nDeliverables:\n\n* database schema proposal for persisted trip plans\n* event-to-trip-plan linkage strategy\n* persistence field mapping from planner state to stored record\n* update strategy for editing existing trip plans\n\nDetailed implementation expectations:\n\n# Define persisted fields at minimum:\n\n* event_id\n* provider\n* route_type\n* start_point\n* end_point\n* waypoint list\n* length and duration summary\n* geometry snapshot\n* optional elevation summary\n* created_at and updated_at\n\n# Define lifecycle states:\n\n* draft route attached to in-progress event edit\n* saved route attached to persisted event\n* replaced route when user recalculates and saves again\n\n# Linkage expectations:\n\n* one event may have zero or one active trip plan in first version\n* persistence design must allow future route versioning without schema rewrite\n* event read path must be able to retrieve the linked trip plan efficiently\n\n# Editing expectations:\n\n* editing a saved route must not create orphaned records\n* save/update flow must define replace vs patch behavior explicitly\n\nAcceptance criteria:\n\n* persistence schema is detailed enough for migration work\n* event linkage is explicit and implementable\n* edit/update rules prevent stale or orphaned trip records",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-115",
      "source": "file-import"
    },
    {
      "id": "hob-jira-105",
      "key": "HOB-116",
      "summary": "Subtask: Implement trip plan save-load-update repository flow",
      "description": "Implement the persistence workflow for HOB-94 after schema design.\n\nDeliverables:\n\n* repository or data-access layer for trip plan records\n* create/save operation for new trip plan\n* load operation for event-linked trip plan\n* update/replace operation for edited trip plan\n\nDetailed implementation expectations:\n\n# Save flow:\n\n* accept normalized planner result and linked event id\n* persist structured route data and geometry snapshot\n* return stored record identifier and timestamps\n\n# Load flow:\n\n* fetch trip plan by event linkage\n* return data in shape usable by planner rehydration and map rendering\n* support no-trip-plan state explicitly\n\n# Update flow:\n\n* replace or patch behavior must follow the persistence design from HOB-115\n* prevent orphaned or duplicate active records\n* update timestamps and relevant metadata consistently\n\n# Rehydration expectations:\n\n* loaded trip plan must be sufficient to render saved route preview without mandatory fresh provider call\n* loaded trip plan must be sufficient to reopen route editing flow\n\nAcceptance criteria:\n\n* event-linked trip plans can be created, loaded and updated through one defined data-access flow\n* save/load/update behavior is deterministic and safe against duplicate active records",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-116",
      "source": "file-import"
    },
    {
      "id": "hob-jira-106",
      "key": "HOB-117",
      "summary": "Subtask: Implement map click candidate assignment popup and role update flow",
      "description": "Implement the assignment step for HOB-89 after a user clicks on the map and a temporary candidate point exists.\n\nDeliverables:\n\n* candidate assignment popup or action sheet\n* actions for assign as start, assign as end and add as waypoint\n* replacement logic for already existing start/end points\n* cleanup logic for temporary candidate dismissal\n\nDetailed implementation expectations:\n\n# Popup/action sheet behavior:\n\n* opens after temporary candidate point exists\n* clearly shows the candidate label or fallback coordinate summary\n* exposes explicit actions for start, end and waypoint roles\n* supports cancel and close without mutating committed route points\n\n# Role update rules:\n\n* assign as start replaces current start if one exists\n* assign as end replaces current end if one exists\n* add as waypoint appends by default to waypoint order unless future insertion mode is introduced\n* planner state update must be atomic for the selected role\n\n# Temporary state cleanup:\n\n* after successful assignment, temporary candidate state is cleared\n* after cancel, temporary candidate may be cleared or retained according to UX decision, but behavior must be explicit and consistent\n* repeated clicks must not leave zombie temporary markers or stale dialogs\n\n# Route readiness integration:\n\n* assignment updates route-input completeness checks\n* if both start and end are now present, planner may enable route calculation\n\nAcceptance criteria:\n\n* user can assign a clicked candidate as start, end or waypoint\n* assignment logic safely replaces or appends the correct planner field\n* temporary candidate UI state is cleaned up consistently after action or cancel",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-117",
      "source": "file-import"
    },
    {
      "id": "hob-jira-107",
      "key": "HOB-118",
      "summary": "Subtask: Build routing request composer from normalized planner state",
      "description": "Implement the request-building layer for HOB-92.\n\nDeliverables:\n\n* normalized route request composer\n* route type mapping from UI/domain state to provider request\n* ordered start/end/waypoint serialization\n* validation before provider call\n\nDetailed implementation expectations:\n\n# Input contract:\n\n* accepted normalized LocationRef objects only\n* explicit routeType\n* ordered waypoint array\n* optional route options such as avoidToll or avoidHighways when applicable\n\n# Validation rules:\n\n* start and end must exist before provider call\n* waypoint list must preserve user-defined order\n* invalid coordinates must fail with typed validation error before provider call\n* unsupported route type must fail before provider call\n\n# Mapping rules:\n\n* translate Hobbeast planner route type to provider-specific route type value\n* serialize coordinates in the exact order expected by provider\n* keep request building isolated from UI component code\n\n# Diagnostics:\n\n* emit structured request summary for logs without leaking secrets\n* attach correlation id for downstream provider call tracing\n\nAcceptance criteria:\n\n* planner state can be converted into a valid provider route request\n* invalid route inputs fail before provider call\n* request composition logic is reusable from UI and backend callers",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-118",
      "source": "file-import"
    },
    {
      "id": "hob-jira-108",
      "key": "HOB-119",
      "summary": "Subtask: Define shared TypeScript domain interfaces for trip planning service layer",
      "description": "Implement the shared domain interface package for HOB-98.\n\nDeliverables:\n\n* shared TypeScript interfaces for LocationRef, TripPlanningRequest and TripPlanningResult\n* shared error type definitions\n* separation between provider-level DTOs and Hobbeast domain models\n\nDetailed implementation expectations:\n\n# Create domain types module that can be imported by:\n\n* frontend planner integration code\n* backend service implementation\n* future internal API endpoints\n* future AI caller adapters\n\n# Define clear boundaries between:\n\n* raw provider response shapes\n* normalized Hobbeast domain models\n* transport/request DTOs\n\n# Introduce common error model types for:\n\n* validation\n* no result\n* ambiguity\n* provider failure\n* no route found\n* partial success\n\nAcceptance criteria:\n\n* shared domain interfaces exist in one importable module\n* provider-specific response types are not mixed with normalized domain types\n* frontend and backend can depend on the same normalized trip planning interfaces",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-119",
      "source": "file-import"
    },
    {
      "id": "hob-jira-109",
      "key": "HOB-120",
      "summary": "Subtask: Implement MapyProviderClient adapter with typed operations and correlation-aware logging",
      "description": "Implement the provider adapter layer for HOB-98.\n\nDeliverables:\n\n* MapyProviderClient module\n* typed methods for suggest, geocode, reverse geocode, route, elevation and external link building where applicable\n* shared request execution wrapper with correlation-aware logging\n* provider error mapping into internal error model\n\nDetailed implementation expectations:\n\n# Provider adapter responsibilities:\n\n* construct provider HTTP requests\n* handle base URL and auth configuration\n* parse provider responses into provider-specific DTOs\n* never return browser-specific state\n\n# Supported methods:\n\n* suggestLocationRaw\n* geocodeLocationRaw\n* reverseGeocodeRaw\n* routeRaw\n* elevationRaw\n\n# Logging and diagnostics:\n\n* attach correlation id to request logs\n* capture latency and HTTP status\n* avoid logging secrets or unsafe raw payloads\n\n# Error mapping:\n\n* provider/network failure maps to PROVIDER_FAILURE\n* quota/limit conditions map to RATE_LIMITED where detectable\n* malformed response maps to provider parse failure diagnostic\n\nAcceptance criteria:\n\n* one provider adapter module encapsulates all Mapy-facing HTTP operations\n* typed provider methods exist for all core planning capabilities\n* correlation-aware logging and internal error mapping are implemented",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-120",
      "source": "file-import"
    },
    {
      "id": "hob-jira-110",
      "key": "HOB-121",
      "summary": "Subtask: Define JSON-serializable request and response DTOs for AI trip planning contract",
      "description": "Implement the schema contract work for HOB-99.\n\nDeliverables:\n\n* explicit request DTO definitions for AI and automation trip planning calls\n* explicit response DTO definitions for success, needs_clarification, partial_success and failure states\n* version field strategy for schema evolution\n* serialization rules for transport-safe payloads\n\nDetailed implementation expectations:\n\n# Request DTO layer:\n\n* define routeType field as required enum\n* define start/end as required structured inputs for execution requests\n* define waypoint array as ordered optional list\n* define optional constraint object\n* define optional callerContext object\n* define allowed nullable vs optional fields explicitly\n\n# Response DTO layer:\n\n* define status as mandatory discriminating field\n* define resolvedRoute payload for success and partial_success\n* define unresolvedItems payload for needs_clarification\n* define error payload for failure cases\n* define warnings and diagnostics payloads\n\n# Serialization rules:\n\n* all DTOs must be JSON-serializable without UI-only references\n* dates/timestamps must use stable string format\n* enum/string literal values must be documented consistently across request and response\n\n# Compatibility expectations:\n\n* DTOs must be suitable for frontend calls, backend jobs and future agent execution\n* transport DTOs must stay separate from raw provider DTOs and internal persistence entities\n\nAcceptance criteria:\n\n* versioned request and response DTO types exist\n* success, clarification, partial success and failure states are explicitly modeled\n* DTOs are usable across transport layers without dependence on React component state",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-121",
      "source": "file-import"
    },
    {
      "id": "hob-jira-111",
      "key": "HOB-122",
      "summary": "Subtask: Implement schema validation and status-discriminated response builder for AI planning",
      "description": "Implement validation and response shaping for HOB-99.\n\nDeliverables:\n\n* request validation layer for AI trip planning input\n* status-discriminated response builder\n* validation error mapping into stable error payloads\n* clarification and partial-success response shaping helpers\n\nDetailed implementation expectations:\n\n# Validation layer:\n\n* validate required routeType\n* validate required start/end for executable requests\n* validate waypoint ordering and structure\n* validate constraint object shape\n* reject structurally invalid payloads before provider execution\n\n# Response builder layer:\n\n* build success response with resolvedRoute\n* build needs_clarification response with unresolvedItems\n* build partial_success response with resolvedRoute plus warnings/diagnostics\n* build failure response with stable error object\n\n# Error mapping rules:\n\n* validation failure => VALIDATION_ERROR\n* ambiguous input => AMBIGUOUS_LOCATION or needs_clarification state\n* provider failure => PROVIDER_FAILURE\n* no route => NO_ROUTE_FOUND\n* rate limits => RATE_LIMITED\n\n# Transport expectations:\n\n* all outputs must follow schema versioning rules\n* no hidden UI state in returned payload\n* response builder must be reusable by REST endpoint handlers and future agent adapters\n\nAcceptance criteria:\n\n* invalid AI planning requests fail through a typed validation layer\n* all response states are built through one consistent response-builder path\n* callers receive schema-compliant payloads for success, clarification, partial success and failure",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-122",
      "source": "file-import"
    },
    {
      "id": "hob-jira-112",
      "key": "HOB-123",
      "summary": "Subtask: Implement schema validation and status-discriminated response builder for AI planning",
      "description": "Implement validation and response shaping for HOB-99.\n\nDeliverables:\n\n* request validation layer for AI trip planning input\n* status-discriminated response builder\n* validation error mapping into stable error payloads\n* clarification and partial-success response shaping helpers\n\nDetailed implementation expectations:\n\n# Validation layer:\n\n* validate required routeType\n* validate required start/end for executable requests\n* validate waypoint ordering and structure\n* validate constraint object shape\n* reject structurally invalid payloads before provider execution\n\n# Response builder layer:\n\n* build success response with resolvedRoute\n* build needs_clarification response with unresolvedItems\n* build partial_success response with resolvedRoute plus warnings/diagnostics\n* build failure response with stable error object\n\n# Error mapping rules:\n\n* validation failure => VALIDATION_ERROR\n* ambiguous input => AMBIGUOUS_LOCATION or needs_clarification state\n* provider failure => PROVIDER_FAILURE\n* no route => NO_ROUTE_FOUND\n* rate limits => RATE_LIMITED\n\n# Transport expectations:\n\n* all outputs must follow schema versioning rules\n* no hidden UI state in returned payload\n* response builder must be reusable by REST endpoint handlers and future agent adapters\n\nAcceptance criteria:\n\n* invalid AI planning requests fail through a typed validation layer\n* all response states are built through one consistent response-builder path\n* callers receive schema-compliant payloads for success, clarification, partial success and failure",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-123",
      "source": "file-import"
    },
    {
      "id": "hob-jira-113",
      "key": "HOB-124",
      "summary": "Subtask: Implement ambiguity scoring and candidate ranking engine for location resolution",
      "description": "Implement the core ambiguity-handling engine for HOB-100.\n\nDeliverables:\n\n* candidate ranking function for provider location results\n* ambiguity threshold evaluation logic\n* resolution outcome classifier: resolved, needs_clarification, no_result, invalid\n* machine-readable ambiguity reason mapping\n\nDetailed implementation expectations:\n\n# Ranking responsibilities:\n\n* rank provider candidates deterministically\n* compare candidate confidence or heuristic quality\n* preserve enough metadata for downstream clarification flow\n\n# Classification responsibilities:\n\n* resolved when one dominant candidate clearly exceeds threshold\n* needs_clarification when multiple close candidates remain\n* no_result when provider has no usable candidate\n* invalid when input is structurally unusable\n\n# Ambiguity reasons:\n\n* MULTIPLE_CITY_MATCHES\n* POI_AND_ADDRESS_CONFLICT\n* COUNTRY_CONTEXT_MISSING\n* INSUFFICIENT_PROVIDER_CONFIDENCE\n* NO_PROVIDER_RESULT\n* INVALID_INPUT\n\n# Technical constraints:\n\n* the engine must not silently collapse close candidates into one final point\n* ranking output must be stable and reproducible for the same input and provider response\n* logic must be reusable by UI and AI callers\n\nAcceptance criteria:\n\n* location candidates are ranked deterministically\n* ambiguity outcomes are explicitly classified\n* machine-readable ambiguity reasons are returned for downstream use",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-124",
      "source": "file-import"
    },
    {
      "id": "hob-jira-114",
      "key": "HOB-125",
      "summary": "Subtask: Build clarification response assembler for ambiguous trip planning inputs",
      "description": "Implement the clarification-building layer for HOB-100.\n\nDeliverables:\n\n* structured clarification payload builder\n* unresolvedItems assembler for ambiguous start/end/waypoint inputs\n* candidate list projection for downstream UI or AI caller consumption\n* stable formatting of clarification-needed responses\n\nDetailed implementation expectations:\n\n# Clarification payload responsibilities:\n\n* identify which field is unresolved: start, end or waypoint\n* attach ordered candidate list for that field\n* include machine-readable reason and optional user-facing helper text\n* support multiple unresolved items in the same response when needed\n\n# Candidate projection responsibilities:\n\n* expose label, lat, lon, type, region/country and providerId where available\n* do not leak unsafe raw provider payload by default\n* preserve deterministic ordering from ambiguity ranking engine\n\n# Response integration rules:\n\n* clarification builder must produce payloads compatible with HOB-99 response DTOs\n* same builder must support both UI and AI callers\n* needs_clarification should be a first-class response path, not treated as generic failure\n\nAcceptance criteria:\n\n* ambiguous route inputs produce a structured clarification response\n* unresolved field, reason and ordered candidates are included in a stable format\n* clarification payload can be consumed by both web UI and AI-agent workflows",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-125",
      "source": "file-import"
    },
    {
      "id": "hob-jira-115",
      "key": "HOB-126",
      "summary": "Subtask: Design audit record persistence and correlation model for automated trip planning",
      "description": "Implement the audit persistence design for HOB-102.\n\nDeliverables:\n\n* audit record schema or entity definition\n* correlation id strategy across request, provider calls and final outcome\n* append-oriented write model for success, failure and clarification paths\n* link strategy between audit record, event and trip plan where applicable\n\nDetailed implementation expectations:\n\n# Audit record fields must cover:\n\n* request id\n* caller type and caller id where available\n* event id where relevant\n* status\n* route type\n* timestamps\n* chosen alternative id where relevant\n* warnings and error code summary\n* correlation id\n\n# Persistence rules:\n\n* write audit records for both successful and failed executions\n* maintain audit trail for needs_clarification and partial_success as first-class outcomes\n* do not store secrets or unsafe raw provider payloads\n\n# Linking expectations:\n\n* audit records must be traceable to final trip plan when one exists\n* audit records must remain meaningful even if no final trip plan is saved\n\nAcceptance criteria:\n\n* audit persistence model is explicit enough for implementation\n* request to outcome traceability is supported by correlation identifiers\n* success, failure and clarification paths are all audit-capable",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-126",
      "source": "file-import"
    },
    {
      "id": "hob-jira-116",
      "key": "HOB-127",
      "summary": "Subtask: Implement quota policy evaluation and caller-aware throttling for automated trip planning",
      "description": "Implement quota and throttling logic for HOB-102.\n\nDeliverables:\n\n* quota policy evaluation service\n* caller-type aware throttling decision flow\n* typed rate-limit / quota-exceeded response mapping\n* pre-provider execution guard for expensive automated planning calls\n\nDetailed implementation expectations:\n\n# Input dimensions for quota evaluation:\n\n* callerType: ui, automation, ai_agent, admin_tool\n* callerId where available\n* eventId where applicable\n* operation type: suggest, geocode, reverse_geocode, route, elevation\n* request timestamp / rolling window\n\n# Policy behaviors:\n\n* allow execution when within policy\n* reject with typed RATE_LIMITED response when over hard limit\n* support later extension for defer/degraded-mode behavior\n* evaluate before provider-intensive execution begins\n\n# Technical requirements:\n\n* policy evaluation isolated from UI/controller code\n* throttling output includes machine-readable reason and scope\n* log quota decisions with correlation id without leaking secrets\n\nAcceptance criteria:\n\n* automated and AI calls are evaluated against explicit quota policy before execution\n* rate-limited outcomes return stable typed responses\n* caller category affects throttling behavior in a deterministic way",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-127",
      "source": "file-import"
    },
    {
      "id": "hob-jira-117",
      "key": "HOB-128",
      "summary": "Subtask: Define proposal model storage and in-memory handling for AI-suggested trip points",
      "description": "Implement the proposal-model foundation for HOB-103.\n\nDeliverables:\n\n* proposal entity or normalized in-memory structure for AI-suggested trip points\n* separation between proposed and accepted points\n* proposal status lifecycle: proposed, accepted, rejected\n* mapping rules from proposal points into validation and routing flow\n\nDetailed implementation expectations:\n\n# Proposal model responsibilities:\n\n* store source of suggestion (ai_agent, automation_rule, manual_helper)\n* store proposal type (start, end, waypoint)\n* store candidate location ref or unresolved ref\n* store rationale list and optional confidence\n* store proposal status\n\n# State separation rules:\n\n* proposed points must not overwrite committed route points automatically\n* accepted proposals become eligible for deterministic route execution\n* rejected proposals remain traceable if audit trail is enabled\n\n# Technical constraints:\n\n* model must support both transient UI/session usage and later persistence if needed\n* proposal structure must be reusable by route alternative workflows\n* proposal model must be compatible with ambiguity resolution flow\n\nAcceptance criteria:\n\n* proposal data model exists and is separate from final trip plan state\n* accepted and rejected proposals are distinguishable from merely proposed items\n* proposal points can be routed into the validation and routing pipeline without redesign",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-128",
      "source": "file-import"
    },
    {
      "id": "hob-jira-118",
      "key": "HOB-129",
      "summary": "Subtask: Implement route alternative acceptance and commit flow for AI-generated proposals",
      "description": "Implement the alternative-route acceptance flow for HOB-103.\n\nDeliverables:\n\n* route alternative proposal structure handling\n* acceptance flow for one selected alternative\n* rejection handling for non-selected alternatives\n* commit path from accepted alternative into final trip plan state\n\nDetailed implementation expectations:\n\n# Alternative handling responsibilities:\n\n* preserve more than one proposed route alternative for the same request\n* allow exactly one chosen alternative to become the accepted route candidate in first version\n* mark non-selected alternatives as rejected or left unaccepted\n\n# Acceptance flow rules:\n\n* accepted alternative must run through the same deterministic routing and validation gates as any other route candidate\n* accepted alternative becomes the source for final persisted trip plan data only after validation passes\n* proposal metadata and rationale must remain traceable after acceptance\n\n# Technical constraints:\n\n* alternative acceptance must not mutate the final trip plan until the acceptance flow completes successfully\n* rejected alternatives should remain auditable if governance/audit layer is present\n* flow must be compatible with both UI review and future automation review policies\n\nAcceptance criteria:\n\n* one selected route alternative can be accepted and committed into final trip plan state\n* non-selected alternatives remain separate from the accepted plan\n* acceptance flow preserves validation and traceability rules",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-129",
      "source": "file-import"
    },
    {
      "id": "hob-jira-119",
      "key": "HOB-130",
      "summary": "Subtask: Implement route alternative acceptance and commit flow for AI-generated proposals",
      "description": "Implement the alternative-route acceptance flow for HOB-103.\n\nDeliverables:\n\n* route alternative proposal structure handling\n* acceptance flow for one selected alternative\n* rejection handling for non-selected alternatives\n* commit path from accepted alternative into final trip plan state\n\nDetailed implementation expectations:\n\n# Alternative handling responsibilities:\n\n* preserve more than one proposed route alternative for the same request\n* allow exactly one chosen alternative to become the accepted route candidate in first version\n* mark non-selected alternatives as rejected or left unaccepted\n\n# Acceptance flow rules:\n\n* accepted alternative must run through the same deterministic routing and validation gates as any other route candidate\n* accepted alternative becomes the source for final persisted trip plan data only after validation passes\n* proposal metadata and rationale must remain traceable after acceptance\n\n# Technical constraints:\n\n* alternative acceptance must not mutate the final trip plan until the acceptance flow completes successfully\n* rejected alternatives should remain auditable if governance/audit layer is present\n* flow must be compatible with both UI review and future automation review policies\n\nAcceptance criteria:\n\n* one selected route alternative can be accepted and committed into final trip plan state\n* non-selected alternatives remain separate from the accepted plan\n* acceptance flow preserves validation and traceability rules",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-130",
      "source": "file-import"
    },
    {
      "id": "hob-jira-120",
      "key": "HOB-131",
      "summary": "Subtask: Implement route alternative acceptance and commit flow for AI-generated proposals",
      "description": "Implement the alternative-route acceptance flow for HOB-103.\n\nDeliverables:\n\n* route alternative proposal structure handling\n* acceptance flow for one selected alternative\n* rejection handling for non-selected alternatives\n* commit path from accepted alternative into final trip plan state\n\nDetailed implementation expectations:\n\n# Alternative handling responsibilities:\n\n* preserve more than one proposed route alternative for the same request\n* allow exactly one chosen alternative to become the accepted route candidate in first version\n* mark non-selected alternatives as rejected or left unaccepted\n\n# Acceptance flow rules:\n\n* accepted alternative must run through the same deterministic routing and validation gates as any other route candidate\n* accepted alternative becomes the source for final persisted trip plan data only after validation passes\n* proposal metadata and rationale must remain traceable after acceptance\n\n# Technical constraints:\n\n* alternative acceptance must not mutate the final trip plan until the acceptance flow completes successfully\n* rejected alternatives should remain auditable if governance/audit layer is present\n* flow must be compatible with both UI review and future automation review policies\n\nAcceptance criteria:\n\n* one selected route alternative can be accepted and committed into final trip plan state\n* non-selected alternatives remain separate from the accepted plan\n* acceptance flow preserves validation and traceability rules",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-131",
      "source": "file-import"
    },
    {
      "id": "hob-jira-121",
      "key": "HOB-132",
      "summary": "Subtask: Implement route alternative acceptance and commit flow for AI-generated proposals",
      "description": "Implement the alternative-route acceptance flow for HOB-103.\n\nDeliverables:\n\n* route alternative proposal structure handling\n* acceptance flow for one selected alternative\n* rejection handling for non-selected alternatives\n* commit path from accepted alternative into final trip plan state\n\nDetailed implementation expectations:\n\n# Alternative handling responsibilities:\n\n* preserve more than one proposed route alternative for the same request\n* allow exactly one chosen alternative to become the accepted route candidate in first version\n* mark non-selected alternatives as rejected or left unaccepted\n\n# Acceptance flow rules:\n\n* accepted alternative must run through the same deterministic routing and validation gates as any other route candidate\n* accepted alternative becomes the source for final persisted trip plan data only after validation passes\n* proposal metadata and rationale must remain traceable after acceptance\n\n# Technical constraints:\n\n* alternative acceptance must not mutate the final trip plan until the acceptance flow completes successfully\n* rejected alternatives should remain auditable if governance/audit layer is present\n* flow must be compatible with both UI review and future automation review policies\n\nAcceptance criteria:\n\n* one selected route alternative can be accepted and committed into final trip plan state\n* non-selected alternatives remain separate from the accepted plan\n* acceptance flow preserves validation and traceability rules",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-132",
      "source": "file-import"
    },
    {
      "id": "hob-jira-122",
      "key": "HOB-133",
      "summary": "Subtask: Implement route alternative acceptance and commit flow for AI-generated proposals",
      "description": "Implement the alternative-route acceptance flow for HOB-103.\n\nDeliverables:\n\n* route alternative proposal structure handling\n* acceptance flow for one selected alternative\n* rejection handling for non-selected alternatives\n* commit path from accepted alternative into final trip plan state\n\nDetailed implementation expectations:\n\n# Alternative handling responsibilities:\n\n* preserve more than one proposed route alternative for the same request\n* allow exactly one chosen alternative to become the accepted route candidate in first version\n* mark non-selected alternatives as rejected or left unaccepted\n\n# Acceptance flow rules:\n\n* accepted alternative must run through the same deterministic routing and validation gates as any other route candidate\n* accepted alternative becomes the source for final persisted trip plan data only after validation passes\n* proposal metadata and rationale must remain traceable after acceptance\n\n# Technical constraints:\n\n* alternative acceptance must not mutate the final trip plan until the acceptance flow completes successfully\n* rejected alternatives should remain auditable if governance or audit layer is present\n* flow must be compatible with both UI review and future automation review policies\n\nAcceptance criteria:\n\n* one selected route alternative can be accepted and committed into final trip plan state\n* non-selected alternatives remain separate from the accepted plan\n* acceptance flow preserves validation and traceability rules",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-133",
      "source": "file-import"
    },
    {
      "id": "hob-jira-123",
      "key": "HOB-134",
      "summary": "Subtask: Implement planner rehydration from persisted trip plan records",
      "description": "Implement rehydration for HOB-94 so a saved trip plan can be loaded back into planner state and map rendering without full manual re-entry.\n\nDeliverables:\n\n* planner state rehydration mapper from stored trip plan record\n* restoration of start, end and waypoint state from persisted data\n* restoration of route summary and geometry snapshot into current planner view\n* safe handling of incomplete or older persisted trip plan versions\n\nDetailed implementation expectations:\n\n# Rehydration mapping:\n\n* map stored start/end/waypoint data back into normalized planner point state\n* map stored route result into render-ready route state\n* restore routeType and optional elevation summary if present\n\n# Compatibility handling:\n\n* tolerate older persisted records with missing optional fields\n* define fallback behavior when geometry exists but some derived summary field is missing\n* avoid forcing a provider re-call for basic preview on load\n\n# UX integration:\n\n* event edit flow can open with trip plan already populated\n* read-only event detail preview can render from persisted record\n* corrupted or partial records fail gracefully with visible degraded state instead of crash\n\nAcceptance criteria:\n\n* saved trip plan can be loaded into planner state for editing\n* saved trip plan can be rendered for preview without mandatory fresh provider execution\n* incomplete persisted records degrade safely",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-134",
      "source": "file-import"
    },
    {
      "id": "hob-jira-124",
      "key": "HOB-135",
      "summary": "Subtask: Implement elevation request pipeline and route-geometry sampling strategy",
      "description": "Implement the elevation enrichment pipeline for HOB-93.\n\nDeliverables:\n\n* geometry sampling strategy for elevation queries\n* elevation provider request builder\n* mapping of elevation response into normalized profile or summary data\n* graceful fallback when elevation lookup is not available\n\nDetailed implementation expectations:\n\n# Sampling responsibilities:\n\n* accept route geometry from normalized TripPlanningResult\n* derive sampled points suitable for provider limitations\n* preserve route order and relative position for profile generation\n* document any point count or segmentation assumptions in code comments or implementation notes\n\n# Provider execution:\n\n* build elevation request through shared provider/service layer\n* ensure elevation call is optional enrichment after core routing success\n* attach correlation id and diagnostics metadata\n\n# Mapping responsibilities:\n\n* derive profile-ready data points where supported\n* derive ascent/descent summary where possible\n* keep a normalized structure that can later be persisted with trip plan records\n\n# Failure handling:\n\n* elevation lookup failure must not invalidate the core route\n* planner should enter degraded route-only mode with warning/diagnostic instead of failing completely\n\nAcceptance criteria:\n\n* route geometry can be transformed into an elevation request input\n* elevation response is normalized into profile or summary data\n* elevation failure does not break route preview or persistence flow",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-135",
      "source": "file-import"
    },
    {
      "id": "hob-jira-125",
      "key": "HOB-136",
      "summary": "Subtask: Define route rendering QA and regression test matrix for interactive planner map",
      "description": "Implement the QA/regression coverage task for HOB-91.\n\nDeliverables:\n\n* route rendering regression checklist\n* marker/overlay rendering test scenarios\n* map lifecycle and resize test scenarios\n* degraded-data rendering scenarios\n\nDetailed implementation expectations:\n\n# Rendering scenarios to cover:\n\n* start/end only route\n* route with multiple waypoints\n* route recalculation after changing one point\n* cleared route state\n* temporary candidate marker state\n* persisted trip rehydration render\n\n# Lifecycle scenarios to cover:\n\n* initial planner open\n* modal/dialog open after hidden render\n* resize/orientation change\n* switching between edit and read-only route view\n\n# Failure/degraded scenarios:\n\n* route summary present but geometry missing\n* geometry present but no elevation summary\n* reverse geocode label degraded for a clicked point\n* attribution still visible under overlay conditions\n\n# Output expectations:\n\n* checklist or test matrix suitable for manual QA and future automated UI tests\n* explicit expected result per scenario\n\nAcceptance criteria:\n\n* a route rendering regression matrix exists for the planner map\n* lifecycle, degraded-data and overlay scenarios are explicitly covered\n* QA coverage is detailed enough for manual and automated verification",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-136",
      "source": "file-import"
    },
    {
      "id": "hob-jira-126",
      "key": "HOB-137",
      "summary": "Subtask: Implement reusable provider attribution component and placement rules for Mapy planner",
      "description": "Implement the attribution layer for HOB-95.\n\nDeliverables:\n\n* reusable provider attribution UI component\n* placement rules for map view and planner surfaces\n* responsive behavior for mobile and overlay-heavy layouts\n* compliance-oriented implementation checklist in code or implementation notes\n\nDetailed implementation expectations:\n\n# Attribution component responsibilities:\n\n* render provider attribution in a reusable way\n* support map-view placement and planner-surface placement\n* allow safe integration with the selected renderer/container layout\n\n# Placement rules:\n\n* attribution must remain visible when route summary overlay is present\n* attribution must remain visible on mobile/responsive layouts\n* attribution must not be hidden by floating controls, markers or custom panels\n\n# Implementation constraints:\n\n* avoid scattered one-off hardcoded labels across screens\n* centralize provider wording or asset usage where possible\n* keep the component compatible with both route planner and later read-only trip preview surfaces\n\nAcceptance criteria:\n\n* reusable attribution component exists\n* attribution remains visible in planner map layouts and overlay scenarios\n* implementation is centralized enough to support compliance maintenance later",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-137",
      "source": "file-import"
    },
    {
      "id": "hob-jira-127",
      "key": "HOB-138",
      "summary": "Subtask: Implement external Mapy route link builder from persisted trip plan data",
      "description": "Implement the external open/share link generation layer for HOB-96.\n\nDeliverables:\n\n* link builder helper from persisted trip plan data\n* support for open externally action\n* support for share/copy link action\n* graceful fallback for incomplete persisted route records\n\nDetailed implementation expectations:\n\n# Input requirements:\n\n* consume persisted trip plan data or normalized route result data\n* use stored start/end/waypoints and route metadata where available\n* avoid requiring a fresh provider route call for basic link generation\n\n# Output responsibilities:\n\n* generate deterministic external route/open link for supported trip records\n* support copy/share UI integration later\n* distinguish unsupported or incomplete records from valid exportable records\n\n# Failure handling:\n\n* incomplete stored route should return typed non-exportable state instead of broken link\n* link builder must not throw uncontrolled errors for partially degraded trip records\n\n# Reuse expectations:\n\n* the helper should be reusable from event detail, trip preview and future share flows\n* keep provider-specific URL-building logic isolated from UI components\n\nAcceptance criteria:\n\n* persisted trip plan data can be converted into an external open/share link where supported\n* incomplete or invalid trip records are handled safely\n* link generation logic is reusable and isolated from UI code",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-138",
      "source": "file-import"
    },
    {
      "id": "hob-jira-128",
      "key": "HOB-139",
      "summary": "Subtask: Implement attribution visibility verification in map and planner overlay layouts",
      "description": "Implement the runtime layout verification work for HOB-95.\n\nDeliverables:\n\n* attribution visibility checks for key planner layouts\n* integration rules for overlay-heavy map screens\n* documented fallback placement strategy for small screens\n* manual QA checklist references for compliance review\n\nDetailed implementation expectations:\n\n# Layouts to verify:\n\n* planner open with no route\n* planner with route summary overlay\n* planner with temporary candidate popup\n* read-only trip preview surface\n* mobile narrow viewport layouts\n\n# Verification rules:\n\n* provider attribution remains visible in all supported states\n* floating controls and summary cards do not cover attribution area\n* fallback placement for small screens remains compliant and readable\n\n# Integration constraints:\n\n* verification logic or checklist should align with reusable attribution component\n* avoid one-off page-specific fixes without documenting the layout rule\n\nAcceptance criteria:\n\n* key planner layouts have explicit attribution visibility verification\n* overlay scenarios and mobile view are covered by implementation or QA guidance\n* attribution compliance does not depend on accidental layout behavior",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-139",
      "source": "file-import"
    },
    {
      "id": "hob-jira-129",
      "key": "HOB-140",
      "summary": "Places provider architecture with Geoapify primary and TomTom premium POI layer",
      "description": "Create the Hobbeast places and venue discovery architecture with Geoapify as the primary places/geocoding provider and TomTom as the premium POI enrichment and fallback layer.\n\nBusiness goal:\n\n* support up-to-date place and venue discovery for restaurants, bars, entertainment venues, hobby places and general POIs\n* keep initial operating cost low with a free-tier friendly provider strategy\n* preserve the ability to enrich or backfill POI quality with a second provider\n\nProvider strategy:\n\n* Geoapify = primary provider for places search, geocoding, reverse geocoding and general location utility\n* TomTom = premium POI layer for higher-quality category search, venue enrichment and selected fallback use cases\n\nScope:\n\n* provider abstraction layer\n* normalized place schema\n* Geoapify primary integration\n* TomTom enrichment/fallback integration\n* deduplication and merge rules\n* caching and quota-aware orchestration\n* UI integration for place discovery and details\n\nOut of scope:\n\n* Tripadvisor integration\n* Google Maps paid places integration\n* route/navigation provider replacement\n\nSuccess criteria:\n\n* Hobbeast can search and display venues through a normalized provider-independent contract\n* Geoapify handles the main traffic path\n* TomTom can enrich or fill gaps for selected POI use cases without taking over the full stack",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-140",
      "source": "file-import"
    },
    {
      "id": "hob-jira-130",
      "key": "HOB-141",
      "summary": "Places provider architecture with Geoapify primary and TomTom premium POI layer",
      "description": "Create the Hobbeast places and venue discovery architecture with Geoapify as the primary places/geocoding provider and TomTom as the premium POI enrichment and fallback layer.\n\nBusiness goal:\n\n* support up-to-date place and venue discovery for restaurants, bars, entertainment venues, hobby places and general POIs\n* keep initial operating cost low with a free-tier friendly provider strategy\n* preserve the ability to enrich or backfill POI quality with a second provider\n\nProvider strategy:\n\n* Geoapify = primary provider for places search, geocoding, reverse geocoding and general location utility\n* TomTom = premium POI layer for higher-quality category search, venue enrichment and selected fallback use cases\n\nScope:\n\n* provider abstraction layer\n* normalized place schema\n* Geoapify primary integration\n* TomTom enrichment/fallback integration\n* deduplication and merge rules\n* caching and quota-aware orchestration\n* UI integration for place discovery and details\n\nOut of scope:\n\n* Tripadvisor integration\n* Google Maps paid places integration\n* route/navigation provider replacement\n\nSuccess criteria:\n\n* Hobbeast can search and display venues through a normalized provider-independent contract\n* Geoapify handles the main traffic path\n* TomTom can enrich or fill gaps for selected POI use cases without taking over the full stack\n\nImplementation backfill note:\n\nAndroid already moved normalized venue selection, selected-place persistence and trip continuity forward.\n\nCross-surface follow-up:\n\nWeb parity story: HOB-200.",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-141",
      "source": "file-import"
    },
    {
      "id": "hob-jira-131",
      "key": "HOB-142",
      "summary": "Story: Create provider abstraction layer and normalized place schema for multi-source venue discovery",
      "description": "Objective:\nCreate a provider-independent places domain layer so Hobbeast can use Geoapify as the primary provider and TomTom as a premium POI layer without leaking provider-specific data structures into UI or business logic.\n\nBusiness context:\nHobbeast wants to start with a cost-efficient provider strategy while still preserving room for higher quality venue discovery. This requires a normalized place model and an abstraction layer so the product is not tightly coupled to one provider response format.\n\nProblem statement:\nIf the application consumes Geoapify and TomTom responses directly in UI or feature code, every provider difference will leak into the application:\n\n* category differences\n* different location field structures\n* different ids and confidence signals\n* different result quality and missing fields\nA normalized provider abstraction is required before a dual-provider strategy is safe.\n\nScope:\n\n* define provider abstraction interfaces\n* define normalized place schema\n* define provider capability matrix\n* define source attribution fields on normalized records\n* define required vs optional normalized fields\n* define place search result vs place detail vs geocode result distinction\n\nDetailed functional requirements:\n\n# Hobbeast must expose one normalized place object for UI and downstream business logic.\n# The normalized model must support:\n\n* restaurants\n* bars and nightlife venues\n* entertainment venues\n* hobby/game venues\n* generic POIs\n\n# The abstraction layer must allow calling one provider or multiple providers without changing the consumer contract.\n# Source attribution must remain visible so the system knows whether a result came from Geoapify, TomTom or a merged record.\n\nDetailed technical requirements:\n\n* define interfaces such as:\n** PlacesSearchProvider\n** GeocodingProvider\n** PlaceDetailsProvider\n* define normalized entities such as:\n** NormalizedPlaceSummary\n** NormalizedPlaceDetails\n** NormalizedCategoryTag\n** ProviderDiagnostics\n* explicitly separate:\n** raw provider DTOs\n** normalized domain entities\n** transport DTOs returned to frontend\n* define provider capability flags, for example:\n** supportsPlaceSearch\n** supportsCategorySearch\n** supportsDetails\n** supportsReverseGeocoding\n** supportsBrandOrChainSignals\n\nSuggested normalized summary model:\n\n{noformat}export interface NormalizedPlaceSummary {\n  source: 'geoapify' | 'tomtom' | 'merged'\n  sourceIds: Partial<Record<'geoapify' | 'tomtom', string>>\n  name: string\n  categories: string[]\n  categoryConfidence?: number\n  address?: string\n  city?: string\n  postcode?: string\n  country?: string\n  lat: number\n  lon: number\n  distanceM?: number\n  ratingSignals?: {\n    providerScore?: number\n    popularity?: number\n  }\n  diagnostics?: {\n    enrichedByTomTom?: boolean\n    fallbackUsed?: boolean\n  }\n}{noformat}\n\nAcceptance criteria:\n\n* one normalized place schema exists for UI and feature consumption\n* provider interfaces isolate Geoapify and TomTom specifics from business logic\n* normalized records preserve source attribution and optional enrichment state\n* story description is detailed enough for implementation of shared domain types and adapter contracts",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-142",
      "source": "file-import"
    },
    {
      "id": "hob-jira-132",
      "key": "HOB-143",
      "summary": "Story: Implement Geoapify as the primary places, geocoding and reverse geocoding provider",
      "description": "Objective:\nMake Geoapify the default execution path for Hobbeast place search, geocoding and reverse geocoding so the product has a cost-efficient, broad-coverage provider for the main places workload.\n\nBusiness context:\nThe chosen provider strategy is Geoapify primary, TomTom premium POI layer. That means the majority of operational traffic should flow through Geoapify unless specific enrichment or fallback conditions trigger TomTom usage.\n\nProblem statement:\nWithout explicit provider priority rules, the application risks random provider usage, higher cost and inconsistent results. Geoapify must become the default path for common place resolution and venue search operations.\n\nScope:\n\n* implement Geoapify provider adapter behind the normalized provider interfaces\n* support primary place search flow\n* support geocoding flow\n* support reverse geocoding flow\n* define normalized mapping from Geoapify results into Hobbeast place schema\n* define baseline diagnostics when Geoapify result quality is weak or incomplete\n\nDetailed functional requirements:\n\n# The system must use Geoapify by default for:\n\n* free text place search\n* address geocoding\n* reverse geocoding\n* general venue/POI discovery in the primary path\n\n# Geoapify responses must be normalized into the Hobbeast place schema before any UI or feature consumption.\n# The system must preserve source attribution so downstream logic knows the result came from Geoapify primary path.\n# The system must support fallback escalation rules later without redesign.\n\nDetailed technical requirements:\n\n* implement GeoapifyPlacesProvider or equivalent adapter\n* map Geoapify category/taxonomy outputs into Hobbeast normalized categories\n* preserve raw provider payload internally only where needed for diagnostics\n* support radius, city, bbox or similar place-search context inputs when the feature layer requires them\n* support stable error mapping for no-result, provider failure and partial-result cases\n\nAcceptance criteria:\n\n* Geoapify is the default provider for place search, geocoding and reverse geocoding\n* Geoapify results are normalized before entering Hobbeast UI/business logic\n* Geoapify source attribution and diagnostics are preserved in normalized outputs",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-143",
      "source": "file-import"
    },
    {
      "id": "hob-jira-133",
      "key": "HOB-144",
      "summary": "Story: Implement TomTom as premium POI enrichment and fallback layer for venue discovery",
      "description": "Objective:\nUse TomTom as the premium POI layer on top of the Geoapify primary path so Hobbeast can improve selected venue results, enrich categories and recover from weaker Geoapify venue coverage without making TomTom the default provider for all traffic.\n\nBusiness context:\nTomTom is not the primary provider in the selected strategy. It should be used selectively where its category search and POI quality adds measurable value. This keeps cost and request volume under control while improving venue quality for specific use cases.\n\nProblem statement:\nIf TomTom is used indiscriminately, it undermines the cost-saving purpose of the chosen provider strategy. If it is not used at all, Hobbeast misses the quality benefits of a premium POI layer. The product needs explicit enrichment and fallback rules.\n\nScope:\n\n* implement TomTom provider adapter behind the normalized provider interfaces\n* support category-search and POI-detail style enrichment where applicable\n* define when TomTom is used as enrichment versus fallback\n* define what additional POI quality signals TomTom contributes to a normalized place record\n* preserve TomTom attribution in diagnostics and source metadata\n\nDetailed functional requirements:\n\n# TomTom should not be the default provider for standard search.\n# TomTom may be invoked when:\n\n* Geoapify returns no result for a venue query\n* Geoapify returns low-confidence or low-detail venue result\n* a product flow explicitly requests premium POI enrichment\n* a place details screen needs better venue metadata\n\n# TomTom enrichment may add or improve:\n\n* category precision\n* venue naming quality\n* address quality\n* city/postcode/country completeness\n* distance and ranking hints\n\n# The system must record whether TomTom was used as:\n\n* enrichment only\n* fallback search\n* direct premium POI lookup\n\nDetailed technical requirements:\n\n* implement TomTomPlacesProvider or equivalent adapter\n* isolate TomTom request/response logic from UI\n* map TomTom categories into Hobbeast normalized categories\n* support stable diagnostics such as enrichedByTomTom and fallbackUsed\n* ensure TomTom usage can be switched on/off per feature path later\n\nAcceptance criteria:\n\n* TomTom is integrated as a selective premium POI layer, not as the default provider\n* TomTom can enrich or rescue place results without changing the normalized output contract\n* normalized outputs preserve whether TomTom was used for enrichment or fallback",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-144",
      "source": "file-import"
    },
    {
      "id": "hob-jira-134",
      "key": "HOB-145",
      "summary": "Story: Implement normalized deduplication and merge rules for Geoapify and TomTom place results",
      "description": "Objective:\nImplement deterministic deduplication and merge logic so Hobbeast can combine Geoapify primary results with TomTom enrichment/fallback results without showing duplicate venues or conflicting data.\n\nBusiness context:\nA dual-provider strategy creates value only if the system can merge overlapping place records cleanly. Otherwise the UI will show duplicates, different names for the same venue, or conflicting category/address data.\n\nProblem statement:\nGeoapify and TomTom may both return the same venue with different ids, category tags, address precision or naming conventions. Hobbeast must decide when two records represent the same place and how to merge their fields.\n\nScope:\n\n* define duplicate detection rules\n* define merge precedence rules\n* define confidence model for merged records\n* define diagnostics for merged vs non-merged records\n* define no-merge cases where two nearby venues must remain separate\n\nDetailed functional requirements:\n\n# The system must compare provider results using a combination of:\n\n* name similarity\n* spatial proximity\n* address similarity\n* category compatibility\n* optional postcode/city/country match\n\n# Merge rules must be deterministic and documented.\n# The system must support at least these outcomes:\n\n* Geoapify-only record\n* TomTom-only record\n* merged record with Geoapify primary identity\n* no-merge because confidence is too low\n\n# Field precedence rules must be explicit, for example:\n\n* Geoapify remains primary source identity when merged in primary path\n* TomTom may override or enrich category precision and selected venue metadata when quality is better\n* coordinates should not be overwritten blindly without proximity validation\n\nDetailed technical requirements:\n\n* implement duplicate scoring helper or merge-decision service\n* keep merge diagnostics on normalized records for debugging\n* merged records must preserve both provider ids when available\n* no-merge decisions must be reproducible for the same inputs\n\nAcceptance criteria:\n\n* duplicate place results from Geoapify and TomTom can be merged deterministically\n* merged records preserve primary-source identity plus enrichment diagnostics\n* no-merge cases are handled explicitly rather than by accidental duplication",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-145",
      "source": "file-import"
    },
    {
      "id": "hob-jira-135",
      "key": "HOB-146",
      "summary": "Story: Implement quota-aware orchestration, caching and provider routing for Geoapify primary plus TomTom fallback",
      "description": "Objective:\nCreate the orchestration layer that decides when Hobbeast should call Geoapify only, when it should escalate to TomTom, and when cached normalized place data can be reused instead of calling either provider.\n\nBusiness context:\nThe selected provider strategy only works if provider calls are intentionally routed. Without an orchestration layer, the application may overuse TomTom, ignore cache opportunities, or create inconsistent provider behavior across feature paths.\n\nProblem statement:\nGeoapify is the primary provider because of cost and broad utility, while TomTom is the premium POI layer. A routing policy is needed to:\n\n* keep most traffic on Geoapify\n* invoke TomTom only when justified\n* reduce repeated provider calls through caching\n* preserve deterministic behavior across features\n\nScope:\n\n* define provider routing policy\n* define cache lookup and cache write behavior for normalized place data\n* define fallback escalation from Geoapify to TomTom\n* define quota-aware decision rules using provider budgets and operation types\n* define diagnostics for which provider path was used and why\n\nDetailed functional requirements:\n\n# The orchestration layer must support at least these decision outcomes:\n\n* cache hit, no provider call\n* Geoapify primary only\n* Geoapify primary plus TomTom enrichment\n* TomTom fallback after Geoapify failure or low-confidence result\n* hard stop because provider policy or quota does not allow escalation\n\n# The orchestration layer must consider:\n\n* operation type: search, geocode, reverse geocode, details\n* caller type or feature path\n* result quality from Geoapify\n* provider quota availability\n* cached normalized place availability\n\n# The layer must emit diagnostics such as:\n\n* cacheUsed\n* primaryProviderUsed\n* enrichmentUsed\n* fallbackUsed\n* fallbackReason\n* quotaBlockedEscalation\n\n# Cached normalized place records must be reusable by UI and backend feature paths without re-normalization.\n\nDetailed technical requirements:\n\n* create PlacesOrchestratorService or equivalent application service\n* keep provider-routing rules outside UI code\n* support cache TTL policy or explicit freshness rules\n* keep provider diagnostics available for logging and debugging\n* ensure orchestration can later support more providers without rewriting caller contracts\n\nAcceptance criteria:\n\n* one orchestration layer decides provider usage and caching strategy\n* Geoapify remains the dominant/default execution path\n* TomTom is invoked only by explicit enrichment/fallback rules\n* normalized cache usage reduces repeated provider calls and preserves deterministic output behavior",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-146",
      "source": "file-import"
    },
    {
      "id": "hob-jira-136",
      "key": "HOB-147",
      "summary": "Story: Integrate normalized places discovery into Hobbeast venue search and event flows",
      "description": "Objective:\nIntegrate the normalized multi-provider places architecture into Hobbeast user-facing discovery and event flows so venue search is no longer provider-specific and can benefit from Geoapify primary plus TomTom enrichment.\n\nBusiness context:\nThe provider architecture only creates product value once it is connected to real user-facing flows. Hobbeast needs venue discovery to work consistently in screens such as event creation, venue selection, place search and place detail preview.\n\nProblem statement:\nEven if a normalized provider layer exists, the product still fails to benefit unless UI and feature flows consume the normalized place model instead of raw provider outputs.\n\nScope:\n\n* integrate normalized place search into venue search UX\n* integrate place selection into event creation/edit flows\n* support place detail preview from normalized records\n* show source-agnostic place results in a consistent UI contract\n* expose diagnostics only where useful internally, not as noisy user-facing text\n\nDetailed functional requirements:\n\n# User-facing search should consume one normalized place result contract, regardless of whether data came from Geoapify only, TomTom fallback or merged enrichment.\n# Event-related flows must be able to:\n\n* search for a venue/place\n* select a place\n* store structured place information on the event\n* reopen and display the selected place later\n\n# UI must not leak provider-specific field naming or raw payload concepts.\n# The product may internally preserve source info and enrichment state, but user-facing rendering should remain consistent and provider-agnostic by default.\n\nDetailed technical requirements:\n\n* define transport DTOs from normalized domain model to UI layer\n* keep raw provider data out of component props\n* support consistent list item rendering for name, categories, address, city and distance\n* support later details-page enrichment without rewriting the search-result contract\n\nAcceptance criteria:\n\n* venue search UI and event flows use normalized place records\n* place search works consistently regardless of which provider path was used internally\n* event flows can save and reload structured place selections without provider-specific coupling",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-147",
      "source": "file-import"
    },
    {
      "id": "hob-jira-137",
      "key": "HOB-148",
      "summary": "Subtask: Define normalized place summary/details schemas and source attribution fields",
      "description": "Implement the shared normalized data model work for HOB-142.\n\nDeliverables:\n\n* normalized summary schema for search results\n* normalized details schema for place detail/enrichment use cases\n* source attribution model for geoapify, tomtom and merged records\n* optional diagnostics/enrichment metadata fields\n\nDetailed implementation expectations:\n\n# Define summary-level fields used by list/search UI:\n\n* source\n* sourceIds\n* name\n* normalized categories\n* address/city/postcode/country\n* lat/lon\n* distanceM where applicable\n* compact diagnostics flags\n\n# Define details-level fields used by enriched venue views:\n\n* website\n* phone\n* openingHours if available\n* enrichment markers\n* provider completeness signals\n\n# Source attribution rules:\n\n* preserve provider-specific ids separately\n* support merged records with one primary identity and one enrichment source\n* avoid collapsing provider identity into one opaque string\n\nAcceptance criteria:\n\n* one normalized summary schema and one normalized details schema are defined\n* source attribution is explicit enough for merge, cache and UI use\n* the model is reusable by both Geoapify and TomTom adapters",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-148",
      "source": "file-import"
    },
    {
      "id": "hob-jira-138",
      "key": "HOB-149",
      "summary": "Subtask: Define provider interface contracts for places search, geocoding and details lookup",
      "description": "Implement the provider interface contract work for HOB-142.\n\nDeliverables:\n\n* provider interface definitions for places search, geocoding, reverse geocoding and details lookup\n* capability flags for optional provider features\n* clear boundary between provider adapter output and normalized domain models\n\nDetailed implementation expectations:\n\n# Define interfaces such as:\n\n* PlacesSearchProvider\n* GeocodingProvider\n* ReverseGeocodingProvider\n* PlaceDetailsProvider\n\n# Define capability signals such as:\n\n* supportsCategorySearch\n* supportsReverseGeocoding\n* supportsDetailsEnrichment\n* supportsPremiumPoiSignals\n\n# Boundary rules:\n\n* provider adapters may return raw provider DTOs internally\n* upstream application services must consume normalized models, not provider DTOs\n* UI must never call provider adapters directly\n\nAcceptance criteria:\n\n* provider interfaces are defined and reusable by Geoapify and TomTom adapters\n* capability differences between providers are represented explicitly\n* normalized domain model boundary is preserved in the contract design",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-149",
      "source": "file-import"
    },
    {
      "id": "hob-jira-139",
      "key": "HOB-150",
      "summary": "Subtask: Implement GeoapifyPlacesProvider adapter and normalized result mapping",
      "description": "Implement the primary provider adapter work for HOB-143.\n\nDeliverables:\n\n* GeoapifyPlacesProvider adapter\n* support for primary place search calls\n* normalized mapping from Geoapify search/geocode outputs into Hobbeast place schemas\n* stable error mapping and diagnostics for Geoapify results\n\nDetailed implementation expectations:\n\n# Adapter responsibilities:\n\n* execute Geoapify place search requests\n* execute geocoding and reverse geocoding requests\n* parse provider responses into provider DTOs internally\n* map provider DTOs into normalized place summary/details models\n\n# Normalization requirements:\n\n* populate normalized summary fields consistently\n* preserve Geoapify source identity and source id\n* map provider category/taxonomy information into normalized categories\n* carry diagnostics for weak or partial results when needed\n\n# Error and diagnostics rules:\n\n* no result => typed NO_RESULT style diagnostic\n* provider/network failure => provider failure diagnostic\n* partial provider data => normalized record with diagnostics rather than silent field loss where possible\n\nAcceptance criteria:\n\n* Geoapify adapter supports search, geocode and reverse geocode through one normalized integration path\n* normalized outputs can be consumed by the rest of the system without provider-specific branching\n* source attribution and diagnostics are preserved",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-150",
      "source": "file-import"
    },
    {
      "id": "hob-jira-140",
      "key": "HOB-151",
      "summary": "Subtask: Implement TomTomPlacesProvider adapter and premium POI enrichment mapping",
      "description": "Implement the premium POI provider adapter work for HOB-144.\n\nDeliverables:\n\n* TomTomPlacesProvider adapter\n* support for category-search or POI-detail enrichment calls\n* normalized mapping from TomTom outputs into Hobbeast place schemas\n* enrichment and fallback diagnostics on normalized records\n\nDetailed implementation expectations:\n\n# Adapter responsibilities:\n\n* execute TomTom POI/category search or detail lookups where used by the orchestration layer\n* parse TomTom responses into provider DTOs internally\n* map TomTom venue/category/address signals into normalized place summary/details models\n\n# Enrichment responsibilities:\n\n* improve category precision where TomTom data is stronger\n* improve selected address/city/postcode completeness when safe\n* preserve TomTom source id and enrichment metadata\n* avoid overwriting normalized coordinates blindly without proximity validation\n\n# Diagnostics and error rules:\n\n* mark whether TomTom was used as enrichment or fallback\n* preserve fallbackUsed and enrichedByTomTom-style diagnostics\n* map no-result and provider failures into stable internal diagnostics\n\nAcceptance criteria:\n\n* TomTom adapter can supply premium POI enrichment through normalized models\n* TomTom usage is diagnosable as enrichment or fallback\n* normalized outputs remain compatible with the primary Geoapify-first contract",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-151",
      "source": "file-import"
    },
    {
      "id": "hob-jira-141",
      "key": "HOB-152",
      "summary": "Subtask: Implement duplicate scoring and merge-decision service for Geoapify and TomTom results",
      "description": "Implement the deduplication engine for HOB-145.\n\nDeliverables:\n\n* duplicate scoring helper for cross-provider place results\n* merge-decision service returning geoapify_only, tomtom_only, merged or no_merge outcomes\n* deterministic scoring inputs and threshold configuration\n* merge diagnostics for debugging and QA\n\nDetailed implementation expectations:\n\n# Scoring inputs must include:\n\n* normalized name similarity\n* coordinate proximity\n* address similarity\n* category compatibility\n* optional postcode/city/country consistency\n\n# Merge outcomes:\n\n* geoapify_only\n* tomtom_only\n* merged_with_geoapify_primary\n* no_merge_low_confidence\n\n# Determinism rules:\n\n* same inputs must produce the same merge decision\n* merge thresholds must not be hidden in UI code\n* diagnostics should explain why merge happened or did not happen\n\n# Safety rules:\n\n* nearby but distinct venues must not be merged accidentally\n* coordinates must not be overwritten without proximity validation\n\nAcceptance criteria:\n\n* cross-provider duplicates can be scored and classified deterministically\n* merge/no-merge decisions are reproducible and diagnosable\n* merged records preserve enough metadata for later enrichment tracing",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-152",
      "source": "file-import"
    },
    {
      "id": "hob-jira-142",
      "key": "HOB-153",
      "summary": "Subtask: Implement PlacesOrchestratorService with Geoapify-first routing and TomTom escalation rules",
      "description": "Implement the orchestration core for HOB-146.\n\nDeliverables:\n\n* PlacesOrchestratorService or equivalent application service\n* Geoapify-first routing policy\n* TomTom escalation rules for enrichment and fallback\n* decision diagnostics for provider path selection\n\nDetailed implementation expectations:\n\n# Orchestrator decisions must support:\n\n* cache hit, no provider call\n* Geoapify primary only\n* Geoapify primary plus TomTom enrichment\n* TomTom fallback after Geoapify no-result or weak result\n* stop due to policy or quota block\n\n# Decision inputs must include:\n\n* operation type: search, geocode, reverse geocode, details\n* feature path or caller context\n* normalized result quality from Geoapify\n* provider quota state\n* cache availability\n\n# Diagnostics must include:\n\n* primaryProviderUsed\n* enrichmentUsed\n* fallbackUsed\n* fallbackReason\n* cacheUsed\n* quotaBlockedEscalation\n\nAcceptance criteria:\n\n* one orchestration service decides provider routing consistently\n* Geoapify remains the default path\n* TomTom escalation follows explicit enrichment and fallback rules\n* routing diagnostics are available for debugging and QA",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-153",
      "source": "file-import"
    },
    {
      "id": "hob-jira-143",
      "key": "HOB-154",
      "summary": "Subtask: Implement normalized places cache lookup and cache write policy for provider orchestration",
      "description": "Implement the caching layer for HOB-146.\n\nDeliverables:\n\n* cache lookup strategy for normalized place records\n* cache write/update strategy after Geoapify primary or TomTom enrichment/fallback calls\n* TTL or freshness policy for cached place data\n* cache diagnostics in orchestration output\n\nDetailed implementation expectations:\n\n# Cache lookup responsibilities:\n\n* attempt cache reuse before provider calls where appropriate\n* distinguish exact match, reusable partial match and no-cache-hit outcomes\n* support operation-aware cache usage for search, details and geocoding where feasible\n\n# Cache write responsibilities:\n\n* write normalized Geoapify-only records\n* update or enrich cached records when TomTom enrichment is used\n* preserve source attribution and merged/enriched diagnostics in cached records\n\n# Freshness rules:\n\n* define TTL or refresh strategy for venue/place data\n* allow later feature-specific tuning without schema rewrite\n* avoid indefinite stale venue metadata where quality matters\n\n# Diagnostics expectations:\n\n* cacheUsed\n* cacheWritePerformed\n* cacheFreshnessState\n* cachePreventedProviderCall\n\nAcceptance criteria:\n\n* normalized place cache can prevent unnecessary provider calls\n* cache writes preserve source attribution and enrichment state\n* freshness behavior is explicit enough for implementation and QA",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-154",
      "source": "file-import"
    },
    {
      "id": "hob-jira-144",
      "key": "HOB-155",
      "summary": "Subtask: Integrate normalized place search results into venue search and event creation selection flows",
      "description": "Implement the UI/feature integration work for HOB-147.\n\nDeliverables:\n\n* venue search UI consuming normalized place results\n* event create/edit place selection flow using normalized place records\n* selected place persistence in event form state\n* re-display of selected place from saved event data\n\nDetailed implementation expectations:\n\n# Venue search list integration:\n\n* render normalized name, categories, address, city and distance consistently\n* do not expose provider-specific field names in component props or UI labels\n* support selection from Geoapify-only, TomTom-fallback and merged results without UI branching\n\n# Event flow integration:\n\n* user can search for a venue/place\n* user can select the normalized result into event form state\n* selected place remains structured, not only display text\n* reopening edit flow must restore the selected place cleanly\n\n# Transport/contract expectations:\n\n* frontend consumes transport DTOs derived from normalized domain models\n* raw provider payload stays outside component state\n* source attribution may remain internal or diagnostic, not primary UI copy\n\nAcceptance criteria:\n\n* venue search UI works from normalized place results regardless of provider path\n* event create/edit flows can store and reload structured place selections\n* UI integration is decoupled from Geoapify and TomTom raw response shapes",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/HOB-155",
      "source": "file-import"
    },
    {
      "id": "hob-jira-145",
      "key": "HOB-156",
      "summary": "Story: Implement place details and venue enrichment flow for normalized provider-backed records",
      "description": "Objective:\nCreate the place details and venue enrichment flow so a selected normalized place can be opened in a richer detail view and selectively enriched with TomTom premium POI data when that adds value.\n\nBusiness context:\nThe Geoapify-primary strategy is sufficient for broad discovery, but venue detail views often need richer metadata and better category precision. Hobbeast needs a consistent details flow that starts from normalized place records and optionally applies TomTom enrichment without exposing provider complexity to the UI.\n\nProblem statement:\nSearch and selection alone are not enough. Users and event flows also need a detail-grade representation of a place, including better venue metadata where available. Without a dedicated details/enrichment flow, the system will either overcall TomTom everywhere or fail to benefit from premium POI data where it matters most.\n\nScope:\n\n* define normalized details loading flow from selected place summary\n* define when TomTom detail enrichment is requested\n* define detail-page/detail-panel data contract\n* support Geoapify-only details, TomTom-enriched details and degraded details states\n* preserve source attribution and enrichment diagnostics internally\n\nDetailed functional requirements:\n\n# A normalized place selected from search can be opened in a detail-grade read model.\n# The details flow must support:\n\n* Geoapify-only detail view\n* Geoapify base record + TomTom enrichment\n* fallback-safe rendering when enrichment is unavailable\n\n# The system must define triggers for TomTom details usage, for example:\n\n* user opened detail view for a venue category where premium POI data is valuable\n* normalized summary lacks required detail fields\n* feature path explicitly requests enrichment\n\n# The UI must remain provider-agnostic and consume one normalized details contract.\n\nDetailed technical requirements:\n\n* define PlaceDetailsLoader or equivalent application service\n* define enriched details merge rules separate from summary merge rules where needed\n* preserve diagnostics such as detailsEnrichedByTomTom and detailsFallbackUsed\n* keep provider detail DTOs outside UI components\n* support later persistence of selected detail fields into event or venue records\n\nAcceptance criteria:\n\n* a normalized place can be opened in a details flow without raw provider coupling\n* TomTom enrichment is applied selectively and diagnosably\n* the details contract supports Geoapify-only, enriched and degraded rendering paths",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-156",
      "source": "file-import"
    },
    {
      "id": "hob-jira-146",
      "key": "HOB-157",
      "summary": "Story: Define canonical place taxonomy and provider category mapping for Geoapify and TomTom results",
      "description": "Objective:\nCreate a canonical Hobbeast place taxonomy so Geoapify and TomTom category systems can be mapped into one stable set of searchable and filterable place categories.\n\nBusiness context:\nA normalized place model is not enough on its own. Venue discovery only becomes usable when categories are consistent across providers. Hobbeast needs category filters and place search results that do not depend on whichever provider happened to answer.\n\nProblem statement:\nGeoapify and TomTom use different category systems and levels of specificity. Without a canonical taxonomy and mapping layer, filtering, ranking and event/venue flows will produce inconsistent category behavior.\n\nScope:\n\n* define canonical Hobbeast place taxonomy for venue discovery\n* define provider-to-canonical category mapping for Geoapify\n* define provider-to-canonical category mapping for TomTom\n* define handling for low-confidence or unmapped provider categories\n* define category precedence when merged results disagree\n\nDetailed functional requirements:\n\n# The canonical taxonomy must cover at minimum:\n\n* restaurants and food places\n* bars and nightlife\n* entertainment venues\n* hobby/game venues\n* generic points of interest\n\n# Provider results must be mappable into canonical categories even if the mapping quality differs.\n# The system must support:\n\n* exact mapped category\n* inferred category\n* unknown/unmapped category\n\n# Merged records must define how category precedence works when Geoapify and TomTom disagree.\n\nDetailed technical requirements:\n\n* define canonical category enum or structured taxonomy table\n* define provider mapping tables/helpers for Geoapify and TomTom\n* store category confidence or mapping confidence where useful\n* support later taxonomy extension without breaking existing records\n\nAcceptance criteria:\n\n* one canonical place taxonomy exists for Hobbeast venue discovery\n* both Geoapify and TomTom categories can be mapped into it\n* unmapped or weakly mapped categories are handled explicitly rather than silently discarded",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-157",
      "source": "file-import"
    },
    {
      "id": "hob-jira-147",
      "key": "HOB-158",
      "summary": "Story: Define canonical place taxonomy and provider category mapping for Geoapify and TomTom results",
      "description": "Objective:\nCreate a canonical Hobbeast place taxonomy so Geoapify and TomTom category systems can be mapped into one stable set of searchable and filterable place categories.\n\nBusiness context:\nA normalized place model is not enough on its own. Venue discovery only becomes usable when categories are consistent across providers. Hobbeast needs category filters and place search results that do not depend on whichever provider happened to answer.\n\nProblem statement:\nGeoapify and TomTom use different category systems and levels of specificity. Without a canonical taxonomy and mapping layer, filtering, ranking and event/venue flows will produce inconsistent category behavior.\n\nScope:\n\n* define canonical Hobbeast place taxonomy for venue discovery\n* define provider-to-canonical category mapping for Geoapify\n* define provider-to-canonical category mapping for TomTom\n* define handling for low-confidence or unmapped provider categories\n* define category precedence when merged results disagree\n\nDetailed functional requirements:\n\n# The canonical taxonomy must cover at minimum:\n\n* restaurants and food places\n* bars and nightlife\n* entertainment venues\n* hobby/game venues\n* generic points of interest\n\n# Provider results must be mappable into canonical categories even if the mapping quality differs.\n# The system must support:\n\n* exact mapped category\n* inferred category\n* unknown/unmapped category\n\n# Merged records must define how category precedence works when Geoapify and TomTom disagree.\n\nDetailed technical requirements:\n\n* define canonical category enum or structured taxonomy table\n* define provider mapping tables/helpers for Geoapify and TomTom\n* store category confidence or mapping confidence where useful\n* support later taxonomy extension without breaking existing records\n\nAcceptance criteria:\n\n* one canonical place taxonomy exists for Hobbeast venue discovery\n* both Geoapify and TomTom categories can be mapped into it\n* unmapped or weakly mapped categories are handled explicitly rather than silently discarded",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-158",
      "source": "file-import"
    },
    {
      "id": "hob-jira-148",
      "key": "HOB-159",
      "summary": "Story: Define places search ranking and fallback UX for Geoapify-primary and TomTom-enriched results",
      "description": "Objective:\nDefine how normalized place results are ranked, ordered and presented to the user when Geoapify is the primary provider and TomTom contributes enrichment or fallback results.\n\nBusiness context:\nA dual-provider places stack is only user-friendly if the resulting venue list is understandable and stable. Users should not see confusing shifts in ordering, duplicated entries or unexplained result quality changes when fallback or enrichment occurs.\n\nProblem statement:\nEven with normalized records and merge logic, the product still needs explicit ranking and fallback UX rules. Otherwise the same query may produce inconsistent ordering or confusing user perception depending on whether Geoapify alone answered, TomTom fallback was triggered, or a merged result was constructed.\n\nScope:\n\n* define ranking signals for normalized place results\n* define ordering rules for Geoapify-only, TomTom-fallback and merged records\n* define no-result and weak-result fallback UX\n* define how degraded or fallback-enriched results should appear in UI without exposing provider internals noisily\n\nDetailed functional requirements:\n\n# Ranking must consider at least:\n\n* distance where applicable\n* category match quality\n* merged/enriched confidence\n* textual relevance or name match quality\n* provider completeness where useful\n\n# The user should see one coherent place list, not separate provider sections in first version.\n# Weak-result and no-result states must be explicit, including:\n\n* no results at all\n* results found only through fallback path\n* partial/degraded results with limited venue data\n\n# UI copy should stay product-centric and not overexpose provider complexity.\n\nDetailed technical requirements:\n\n* define ranking helper or ranking policy for normalized place results\n* define fallback UX states and corresponding transport flags\n* preserve internal diagnostics while returning concise UI-oriented status signals\n* make ranking deterministic for the same input/result set\n\nAcceptance criteria:\n\n* normalized place results have explicit ranking and ordering rules\n* fallback and degraded result states are handled in a defined UX model\n* UI can present Geoapify-primary and TomTom-assisted results coherently without provider-specific branching",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-159",
      "source": "file-import"
    },
    {
      "id": "hob-jira-149",
      "key": "HOB-160",
      "summary": "Story: Implement provider configuration, secrets handling and feature-flag control for places architecture",
      "description": "Objective:\nCreate the operational configuration layer for the Geoapify-primary and TomTom-premium places stack, including API key handling, environment-safe configuration and feature-flag control of enrichment/fallback behavior.\n\nBusiness context:\nA multi-provider places architecture cannot be operated safely without explicit configuration management. Hobbeast needs to control API keys, environment separation and provider behavior without code rewrites.\n\nProblem statement:\nIf provider secrets and routing switches are hardcoded, the system becomes fragile and hard to test. The product must be able to turn TomTom enrichment on/off, isolate environments and rotate keys safely.\n\nScope:\n\n* define provider config model\n* define secrets handling for Geoapify and TomTom keys\n* define feature flags for TomTom enrichment and fallback behavior\n* define environment-specific config separation\n* define safe defaults when premium provider config is missing\n\nDetailed functional requirements:\n\n# The system must support separate config for development, test and production.\n# The system must handle missing TomTom config gracefully, allowing Geoapify-only mode.\n# The system must support feature toggles such as:\n\n* tomtomEnrichmentEnabled\n* tomtomFallbackEnabled\n* premiumPoiForDetailsEnabled\n\n# Secrets must not be exposed to the frontend directly.\n\nDetailed technical requirements:\n\n* define config contract for provider base settings and keys\n* define runtime-safe fallback behavior when optional provider config is absent\n* keep feature flag checks in orchestration/application layer, not scattered through UI\n* support later provider rollout control by feature path or environment\n\nAcceptance criteria:\n\n* provider keys and feature flags are controlled through explicit configuration\n* the system can run in Geoapify-only mode when TomTom config is absent or disabled\n* TomTom enrichment/fallback behavior can be turned on or off without code redesign",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-160",
      "source": "file-import"
    },
    {
      "id": "hob-jira-150",
      "key": "HOB-161",
      "summary": "Story: Define QA regression and observability model for Geoapify-primary and TomTom-assisted places flows",
      "description": "Objective:\nCreate the regression-test and observability model for the multi-provider places architecture so Hobbeast can validate and operate Geoapify-primary plus TomTom-assisted venue discovery safely over time.\n\nBusiness context:\nA dual-provider integration is not complete unless the team can verify it and observe how it behaves in production. Hobbeast needs explicit QA coverage and metrics for provider path selection, merge behavior, cache behavior and fallback usage.\n\nProblem statement:\nWithout a QA matrix and observability model, provider regressions will be hard to detect. The team will not know whether Geoapify is sufficient, when TomTom is overused, or whether deduplication and fallback rules behave as intended.\n\nScope:\n\n* define regression scenarios for Geoapify-primary, TomTom-fallback and merged results\n* define cache-related regression scenarios\n* define merge/no-merge QA cases\n* define runtime metrics and logging dimensions for provider orchestration\n* define fallback and enrichment monitoring expectations\n\nDetailed functional requirements:\n\n# QA must cover at minimum:\n\n* Geoapify-only search success\n* Geoapify no-result with TomTom fallback success\n* Geoapify result plus TomTom enrichment\n* duplicate merge success\n* no-merge for nearby distinct venues\n* cache hit and cache miss behavior\n* event flow selected place restore\n\n# Observability should track at minimum:\n\n* primary provider usage rate\n* TomTom fallback rate\n* TomTom enrichment rate\n* merge rate\n* no-merge rate\n* no-result rate\n* cache hit rate\n* quota-blocked escalation count\n\n# The system should expose enough diagnostics for debugging without leaking sensitive provider data.\n\nDetailed technical requirements:\n\n* define regression checklist or matrix for manual QA and future automated tests\n* define structured log and metric dimensions for places orchestration\n* ensure provider diagnostics from orchestration are suitable for observability dashboards later\n\nAcceptance criteria:\n\n* a regression model exists for the main provider-routing and merge scenarios\n* observability metrics are defined for Geoapify-primary and TomTom-assisted behavior\n* the story is detailed enough to support QA implementation and runtime monitoring design",
      "labels": [
        "GEOAPIFY_PRIMARY",
        "PLACES_ARCH",
        "TOMTOM_POI_LAYER"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-161",
      "source": "file-import"
    },
    {
      "id": "hob-jira-151",
      "key": "HOB-162",
      "summary": "Epic: Hidden hub intelligence and community activation foundation",
      "description": "Refined epic goal:\nBuild a privacy-safe hidden hub intelligence layer that helps Hobbeast strengthen local scenes, recurring participation and organizer decision-making without exposing premature, opaque or high-stakes segmentation to users.\n\nWhy this epic matters:\nResearch and benchmark review show that successful event/community products combine three things:\n\n* emotionally legible discovery and belonging cues\n* operationally strong organizer workflows\n* continuity mechanisms that turn isolated events into recurring scenes\n\nHidden hubs should support that continuity layer.\n\nScope:\n\n* hidden hub domain model and lifecycle\n* confidence scoring and underserved-scene detection\n* privacy-safe community pulse surfaces\n* anonymized organizer demand insight\n* hub-backed event opportunity suggestions\n* future opt-in path from internal hubs to explicit communities\n* governance, review and safeguards\n\nNon-goals for phase 1:\n\n* no visible user-facing 'you belong to hub X' messaging\n* no hard gating of access based on hidden hub assignment\n* no consequential or opaque automated decisions about people\n* no use of sensitive traits as primary clustering keys\n\nDesign principles:\n\n# Internal first: hidden hubs start as internal community intelligence.\n# Low stakes: hubs may shape relevance and programming ideas, but not silently determine major outcomes.\n# Belonging over classification: the value is better scenes, rituals and continuity, not labels.\n# Consent later: if hidden structure ever becomes visible, the transition must be opt-in.\n# Reviewability: hub logic, confidence and exclusions need governance.\n\nSuccess criteria:\n\n* Hobbeast can detect meaningful latent scenes and recurring demand pockets\n* organizers get useful, anonymized demand signals\n* users experience stronger relevance and continuity without creepy targeting\n* the product preserves trust while gaining community intelligence\n\nImplementation backfill note:\n\nAndroid and backend bootstrap already moved hidden-hub, community-pulse and organizer-insight posture forward enough that this epic is partially concretized by implementation.\n\nCross-surface follow-up:\n\nWeb parity story: HOB-205.",
      "labels": [
        "community",
        "epic",
        "hubs",
        "strategic"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-162",
      "source": "file-import"
    },
    {
      "id": "hob-jira-152",
      "key": "HOB-163",
      "summary": "Design refresh: establish Hobbeast visual identity and token system",
      "description": "Define the redesign token system for Hobbeast including warm-neutral surfaces, accent palette, typography hierarchy, radius, elevation, interaction states and component standards. Deliver a reusable design contract that keeps discovery, organizer mode and reminders visually coherent.",
      "labels": [
        "design",
        "redesign",
        "ui-system",
        "visual-identity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-163",
      "source": "file-import"
    },
    {
      "id": "hob-jira-153",
      "key": "HOB-164",
      "summary": "Design refresh: redesign Events discovery page without breaking core filters",
      "description": "Redesign the Events surface with stronger hierarchy, social discovery rails, elegant mode switcher, calmer filter strip and richer event card system while preserving existing filter and state logic.",
      "labels": [
        "design",
        "discovery",
        "events",
        "redesign"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-164",
      "source": "file-import"
    },
    {
      "id": "hob-jira-154",
      "key": "HOB-165",
      "summary": "UX hardening: align primary filter visual states with redesigned discovery shell",
      "description": "Apply the redesign to the main filter state system so All, Search, For me and Categories remain visually and behaviorally consistent, persistent and non-regressive.\n\nAlignment note: this story is design/UX continuation work aligned to HOB-3 and is placed under the Discovery epic because HOB-3 itself is an existing story, not an epic.",
      "labels": [
        "design",
        "filters",
        "regression",
        "ux"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-165",
      "source": "file-import"
    },
    {
      "id": "hob-jira-155",
      "key": "HOB-166",
      "summary": "Design refresh: redesign event card system for social fit, capacity and source cues",
      "description": "Create a new multi-variant event card family that expresses vibe, fit, capacity, early access, source and reminder cues without clutter.",
      "labels": [
        "design",
        "discovery",
        "event-cards"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-166",
      "source": "file-import"
    },
    {
      "id": "hob-jira-156",
      "key": "HOB-167",
      "summary": "Design refresh: redesign event detail page with richer RSVP and community context",
      "description": "Refresh event detail with editorial hero, RSVP state block, capacity clarity, organizer quick actions, calendar/reminder surfaces and community-fit guidance panels.",
      "labels": [
        "community",
        "design",
        "event-detail",
        "rsvp"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-167",
      "source": "file-import"
    },
    {
      "id": "hob-jira-157",
      "key": "HOB-168",
      "summary": "Design refresh: rebuild create/edit event flow as multi-section event builder",
      "description": "Redesign create and edit event screens into a structured, elegant builder with section anchors, better summaries, wider layout, clearer validation and integrated location/participation blocks.",
      "labels": [
        "create-event",
        "design",
        "edit-event",
        "forms"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-168",
      "source": "file-import"
    },
    {
      "id": "hob-jira-158",
      "key": "HOB-169",
      "summary": "Organizer mode UX: harmonize organizer shell with main Hobbeast brand",
      "description": "Redesign organizer mode shell and navigation so My events, Attendees, Check-in, Messages and Analytics feel like the same product brand rather than a separate admin tool.",
      "labels": [
        "design",
        "navigation",
        "organizer-mode"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-169",
      "source": "file-import"
    },
    {
      "id": "hob-jira-159",
      "key": "HOB-170",
      "summary": "Organizer UX: redesign attendee management and attendee workspace surfaces",
      "description": "Deliver a cleaner attendee list, row actions, export action, status filters and attendee detail workspace drawer aligned with the new visual system.",
      "labels": [
        "attendees",
        "design",
        "organizer"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-170",
      "source": "file-import"
    },
    {
      "id": "hob-jira-160",
      "key": "HOB-171",
      "summary": "Organizer UX: redesign check-in admin for fast operational use",
      "description": "Redesign the check-in admin screen for quick search, invite code handling, QR placeholder flow, status readability and strong operational feedback.",
      "labels": [
        "checkin",
        "design",
        "organizer"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-171",
      "source": "file-import"
    },
    {
      "id": "hob-jira-161",
      "key": "HOB-172",
      "summary": "Organizer UX: redesign event communications and reminder composition",
      "description": "Create a refined message composer and history surface for reminders, updates and segmented attendee messaging, keeping scheduling and delivery states readable.",
      "labels": [
        "design",
        "messaging",
        "organizer",
        "reminders"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-172",
      "source": "file-import"
    },
    {
      "id": "hob-jira-162",
      "key": "HOB-173",
      "summary": "Organizer UX: redesign analytics dashboard and source breakdown surfaces",
      "description": "Create a redesigned organizer analytics surface with KPI hierarchy, source breakdown storytelling and calmer operational density.",
      "labels": [
        "analytics",
        "design",
        "organizer"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-173",
      "source": "file-import"
    },
    {
      "id": "hob-jira-163",
      "key": "HOB-174",
      "summary": "Retention UX: redesign profile and my-plans into reminder-oriented surfaces",
      "description": "Redesign profile and plan surfaces around upcoming events, reminders, saved intent and re-engagement modules without harming current simplicity.",
      "labels": [
        "design",
        "profile",
        "reminders",
        "retention"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-174",
      "source": "file-import"
    },
    {
      "id": "hob-jira-164",
      "key": "HOB-175",
      "summary": "Discovery UX: add community pulse and social-fit modules to discovery and detail surfaces",
      "description": "Add community pulse, social-fit and belonging-oriented modules to discovery and event detail so Hobbeast can signal community relevance without becoming noisy or invasive.",
      "labels": [
        "community",
        "discovery",
        "personalization",
        "ux"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-175",
      "source": "file-import"
    },
    {
      "id": "hob-jira-165",
      "key": "HOB-176",
      "summary": "Hub foundation: define hidden hub domain model and clustering-safe product contract",
      "description": "Objective:\nDefine the hidden hub domain model in a way that is product-usable, privacy-safe and operationally reviewable.\n\nRefined concept:\nA hidden hub is not a visible user segment. It is an internal scene-intelligence object representing a recurring pocket of interest, participation or local demand that may justify better recommendations, reminders or organizer insight.\n\nAllowed signal families:\n\n* explicit interest signals: followed categories, saved events, joined events, repeated format choices\n* behavioral cadence signals: weekday/time preference, recurrence pattern, lead time, attendance consistency\n* local scene signals: neighborhood, travel radius, venue cluster affinity, city/district demand\n* social adjacency signals: repeat co-attendance patterns at aggregate level only\n* format signals: workshop vs meetup vs nightlife vs sports vs family-friendly, etc.\n\nGuardrails:\n\n* do not use sensitive traits as primary clustering keys\n* age should not be a first-class clustering key; if ever used, it must be broad, user-provided and low-stakes\n* hidden hubs must not directly expose membership lists or labels to users\n* hub assignment must remain probabilistic and reviewable, not deterministic and absolute\n\nSuggested hub object:\n\n* hub_id\n* hub_type (scene, format, locality, rhythm, emerging)\n* confidence_score\n* activation_potential\n* size_band\n* locality_band\n* dominant_formats\n* cadence_pattern\n* last_strengthened_at\n* lifecycle_state (candidate, active_internal, monitored, archived)\n\nAcceptance criteria:\n\n* the hub model supports clustering by scene, locality, cadence and format\n* the model excludes high-risk direct profiling patterns\n* every hub has confidence and lifecycle metadata\n* the model is usable by discovery, organizer insight and retention layers without exposing raw segmentation",
      "labels": [
        "community",
        "foundation",
        "hubs",
        "personalization"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-176",
      "source": "file-import"
    },
    {
      "id": "hob-jira-166",
      "key": "HOB-177",
      "summary": "Hub foundation: add privacy-safe community pulse surfaces to discovery experience",
      "description": "Objective:\nDesign privacy-safe community pulse surfaces informed by hidden hubs, without revealing hidden membership or making users feel watched.\n\nUI principle:\nThe product should speak in terms of scenes, momentum and relevance, not secret labels.\n\nGood examples:\n\n* 'Board game nights are picking up near you this week'\n* 'Small creative workshops are trending in your area'\n* 'Thursday evening meetups are especially active right now'\n\nAvoid:\n\n* 'You are in the X hub'\n* 'People like you are doing Y' if that feels profiling-heavy\n* overprecise or invasive explanations of why something is shown\n\nEligible surfaces:\n\n* discovery home rails\n* event detail side modules\n* weekly digest / reminder cards\n* organizer-facing pulse widgets in aggregate form\n\nRequired rules:\n\n* minimum aggregation threshold before a pulse can be shown\n* language must stay fuzzy enough to feel helpful, not creepy\n* use category/scene wording instead of internal hub naming\n* pulse cards must be dismissible and must not dominate primary event discovery\n\nAcceptance criteria:\n\n* community pulse modules communicate momentum and belonging without exposing hidden segmentation\n* copy tone is warm, low-stakes and non-invasive\n* pulse modules can be suppressed when confidence or sample size is too low\n* discovery remains event-first, with pulse as supporting context",
      "labels": [
        "community",
        "discovery",
        "hubs",
        "privacy"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-177",
      "source": "file-import"
    },
    {
      "id": "hob-jira-167",
      "key": "HOB-178",
      "summary": "Hub intelligence: expose organizer-facing anonymized demand insights",
      "description": "Objective:\nTurn hidden-hub intelligence into organizer-visible demand insight without exposing personal assignment or making the output feel like surveillance.\n\nWhat organizers should learn:\n\n* which scene is strengthening\n* what format has latent demand\n* where local demand is concentrated\n* which day/time windows have the strongest activation potential\n* whether current supply is underserving a scene\n\nWhat organizers should never see:\n\n* who is inside a hidden hub\n* individual-level inferred labels\n* overly precise demographic segmentation from hidden logic\n\nRecommended insight blocks:\n\n* demand by scene or format\n* demand by neighborhood / travel band\n* demand by time rhythm\n* repeat-attendance and recurrence potential\n* confidence / sample strength indicator\n* caution flag when signal is weak or noisy\n\nCopy and UI principles:\n\n* aggregate, not individual\n* scenario language like 'strong potential for...' or 'growing interest in...'\n* confidence shown as directional, not over-precise\n* preserve creative agency for the organizer; do not over-automate decision making\n\nAcceptance criteria:\n\n* organizers can see anonymized demand patterns that help planning\n* insight language is aggregate and privacy-safe\n* no hidden-hub membership is exposed\n* weak-signal scenarios are visibly marked as exploratory",
      "labels": [
        "analytics",
        "community",
        "hubs",
        "organizer"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-178",
      "source": "file-import"
    },
    {
      "id": "hob-jira-168",
      "key": "HOB-179",
      "summary": "Hub intelligence: add event creation suggestions informed by latent community demand",
      "description": "Objective:\nUse hidden-hub and scene-demand signals to help organizers create better-fitting events, not to let the system create formulaic sameness.\n\nRefined product idea:\nThe feature should suggest opportunity spaces, not auto-generate final events. It should help answer:\n\n* what kind of event has demand here?\n* for whom?\n* at what rhythm, size and timing?\n* what is missing in the local scene?\n\nSuggested recommendation outputs:\n\n* recommended format (workshop, meetup, social, sports, family-friendly, etc.)\n* ideal size band\n* timing recommendation (weekday / time window)\n* locality recommendation (district, radius, venue archetype)\n* scene-fit note\n* confidence level\n* rationale summary\n\nExamples:\n\n* 'Strong opportunity for a small Thursday board game meetup in District X'\n* 'Growing demand for beginner-friendly creative workshops within 5 km'\n\nGuardrails:\n\n* recommendations must stay advisory, not mandatory\n* no individual user or hidden hub membership should be revealed\n* avoid overfitting to only existing demand; allow exploratory/community-building formats too\n* preserve room for organizer taste, experimentation and mission\n\nAcceptance criteria:\n\n* the system can express event ideas using scene, format, size, time and locality\n* recommendations include confidence and rationale\n* the feature remains internal / organizer-side in first phase\n* recommendations support scene-building, not just short-term optimization",
      "labels": [
        "community",
        "create-event",
        "hubs",
        "organizer"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-179",
      "source": "file-import"
    },
    {
      "id": "hob-jira-169",
      "key": "HOB-180",
      "summary": "Hub retention: add weekly relevant-scene reminder modules to profile and home",
      "description": "Add weekly relevant-scene reminder modules to profile and home so Hobbeast can re-engage users around nearby scenes, recurring formats and latent community relevance.",
      "labels": [
        "community",
        "hubs",
        "reminders",
        "retention"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-180",
      "source": "file-import"
    },
    {
      "id": "hob-jira-170",
      "key": "HOB-181",
      "summary": "Hub epic story: define hidden hub lifecycle and governance model",
      "description": "Define the hidden hub lifecycle, governance boundaries, review points and operational ownership model for Hobbeast hidden hub intelligence.",
      "labels": [
        "community",
        "governance",
        "hubs"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-181",
      "source": "file-import"
    },
    {
      "id": "hob-jira-171",
      "key": "HOB-182",
      "summary": "Hub epic story: design hub-quality scoring and underserved-scene detection",
      "description": "Design hub quality scoring, signal confidence and underserved-scene detection so Hobbeast can identify meaningful community opportunities instead of noisy clusters.",
      "labels": [
        "community",
        "hubs",
        "ranking"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-182",
      "source": "file-import"
    },
    {
      "id": "hob-jira-172",
      "key": "HOB-183",
      "summary": "Hub epic story: implement hub-backed event opportunity recommendations",
      "description": "Implement the recommendation logic and product contract for hub-backed event opportunity suggestions so organizers can see where latent community demand may justify new events.",
      "labels": [
        "community",
        "hubs",
        "organizer",
        "recommendations"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-183",
      "source": "file-import"
    },
    {
      "id": "hob-jira-173",
      "key": "HOB-184",
      "summary": "Hub epic story: define future opt-in community exposure model",
      "description": "Define the future opt-in transition path from hidden hubs to explicit community exposure so Hobbeast can later reveal community structures in a trustworthy, consent-aware way.",
      "labels": [
        "community",
        "future",
        "hubs",
        "privacy"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-184",
      "source": "file-import"
    },
    {
      "id": "hob-jira-174",
      "key": "HOB-199",
      "summary": "Web parity: align first-party event editor, detail and trip lifecycle with Android and Supabase",
      "description": "Align the web surface with the first-party event lifecycle that was already moved forward in Android and in the Supabase backend.\n\nScope:\n\n* align create/edit event flow to the shared first-party event schema\n* align validation rules for title, category, schedule, external URL, capacity, venue/address sharing and entry window\n* align event detail action surface for first-party vs imported listings\n* align trip-plan persistence and return-path continuity\n* align RSVP and waitlist posture with shared participant semantics\n\nAcceptance criteria:\n\n* web create/edit/detail uses the same first-party event contract as Android\n* trip planner integration on web follows the same event-trip continuity model\n* imported/external event behavior is clearly separated from first-party behavior on web",
      "labels": [
        "backend-contract",
        "events",
        "mobile-followup",
        "web-parity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-199",
      "source": "file-import"
    },
    {
      "id": "hob-jira-175",
      "key": "HOB-200",
      "summary": "Web parity: align normalized places, venue selection and trip continuity with Android contract",
      "description": "Align the web surface with the normalized places, venue selection and trip continuity model that was pushed forward in Android.\n\nScope:\n\n* align normalized place search and selected-place persistence\n* align place detail and recommended-venue behavior\n* align imported vs first-party venue/ticket action posture\n* align trip planner binding, save-and-return and rehydration behavior\n* keep web provider-agnostic against the shared Geoapify/TomTom normalized contract\n\nAcceptance criteria:\n\n* web venue search and selection follows the same normalized contract as Android\n* trip continuity from place selection into create/edit/detail no longer drifts between surfaces\n* provider-specific shapes remain isolated from shared UI behavior",
      "labels": [
        "mobile-followup",
        "places",
        "trip-planner",
        "web-parity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-200",
      "source": "file-import"
    },
    {
      "id": "hob-jira-176",
      "key": "HOB-201",
      "summary": "Web parity: align discovery lenses, filters and card semantics with Android and shared journey signals",
      "description": "Align the web discovery experience with the updated Android discovery/search/filter model and shared journey semantics.\n\nScope:\n\n* align discovery lenses and filter state behavior\n* align category/search/distance/venue filter semantics\n* align event-card chips for first-party vs imported, venue resolved, route attached and visibility posture\n* align empty-state and sparse-data behavior\n* align community fit, pulse and opportunity framing where shared logic exists\n\nAcceptance criteria:\n\n* discovery and filter behavior stays conceptually aligned across web and Android\n* web cards expose the same journey maturity semantics where data exists\n* empty-state, imported-listing and community framing do not drift between surfaces",
      "labels": [
        "discovery",
        "filters",
        "mobile-followup",
        "web-parity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-201",
      "source": "file-import"
    },
    {
      "id": "hob-jira-177",
      "key": "HOB-202",
      "summary": "Web parity: align organizer attendee, check-in and operational surfaces with Android and shared backend",
      "description": "Align web organizer operations with the shared first-party backend and the organizer runtime that was already pushed forward on Android.\n\nScope:\n\n* align attendee roster states and filters\n* align check-in eligibility, invite-code handling and audit posture\n* align waitlist promotion semantics\n* align organizer runtime readouts for owned events\n* align imported-overlay vs first-party organizer copy\n\nAcceptance criteria:\n\n* attendee and check-in semantics no longer drift between web and Android\n* web uses the same shared backend states for participant status and audit-aware operations\n* organizer operations stay coherent across both surfaces",
      "labels": [
        "checkin",
        "mobile-followup",
        "organizer",
        "web-parity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-202",
      "source": "file-import"
    },
    {
      "id": "hob-jira-178",
      "key": "HOB-203",
      "summary": "Web parity: align organizer messaging, delivery state and analytics surfaces with Android and backend model",
      "description": "Align the web organizer messaging and analytics surfaces with the shared backend contract and the runtime posture already moved forward on Android.\n\nScope:\n\n* align organizer message composer rules and segment semantics\n* align delivery-state visibility and empty-state behavior\n* align analytics runtime posture, source-aware explanation and operational health framing\n* align imported vs first-party event handling in organizer messaging and analytics\n\nAcceptance criteria:\n\n* web messaging and analytics use the same shared backend semantics as Android\n* queued, delivered and needs-attention states are interpreted consistently\n* analytics framing does not drift between surfaces",
      "labels": [
        "analytics",
        "messaging",
        "mobile-followup",
        "web-parity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-203",
      "source": "file-import"
    },
    {
      "id": "hob-jira-179",
      "key": "HOB-204",
      "summary": "Web parity: align onboarding, session continuity and reminder journey with Android product logic",
      "description": "Align the web surface with the onboarding, session and reminder journey-state logic that was introduced on Android.\n\nScope:\n\n* align first-run onboarding posture and guidance\n* align session continuity semantics\n* align organizer-first activation and first organizer run guidance\n* align reminder-loop readiness and reminder state framing in a web-appropriate way\n\nAcceptance criteria:\n\n* web and Android share the same journey-state semantics even if platform permission mechanics differ\n* onboarding and reminder posture do not drift between surfaces\n* organizer-first activation logic remains product-consistent",
      "labels": [
        "mobile-followup",
        "onboarding",
        "retention",
        "web-parity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-204",
      "source": "file-import"
    },
    {
      "id": "hob-jira-180",
      "key": "HOB-205",
      "summary": "Web parity: align community pulse, hidden hub and organizer insight semantics across surfaces",
      "description": "Align the web surface with the hidden-hub, community-pulse and organizer-insight semantics that were already pushed forward in Android and in the first-party backend bootstrap.\n\nScope:\n\n* align hidden hub empty/sparse-data posture\n* align community pulse and opportunity framing\n* align organizer demand insight interpretation\n* avoid conflicting visible semantics for internal-only hub intelligence\n\nAcceptance criteria:\n\n* web and Android interpret hidden hubs, community pulse and organizer insights with the same product rules\n* internal-only hub semantics are preserved consistently\n* community-intelligence wording does not drift between surfaces",
      "labels": [
        "community",
        "hubs",
        "mobile-followup",
        "web-parity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-205",
      "source": "file-import"
    },
    {
      "id": "hob-jira-181",
      "key": "HOB-206",
      "summary": "Web parity: align community pulse, hidden hub and organizer insight semantics across surfaces",
      "description": "Align the web surface with the hidden-hub, community-pulse and organizer-insight semantics that were already pushed forward in Android and in the first-party backend bootstrap.\n\nScope:\n\n* align hidden hub empty/sparse-data posture\n* align community pulse and opportunity framing\n* align organizer demand insight interpretation\n* avoid conflicting visible semantics for internal-only hub intelligence\n\nAcceptance criteria:\n\n* web and Android interpret hidden hubs, community pulse and organizer insights with the same product rules\n* internal-only hub semantics are preserved consistently\n* community-intelligence wording does not drift between surfaces",
      "labels": [
        "community",
        "hubs",
        "mobile-followup",
        "web-parity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-206",
      "source": "file-import"
    },
    {
      "id": "hob-jira-182",
      "key": "HOB-207",
      "summary": "Documentation: backfill applied Supabase schema, RLS and RPC contract after mobile/backend bootstrap",
      "description": "Document the first-party Supabase backend that was actually introduced and applied during the Android + backend implementation track.\n\nScope:\n\n* document the created first-party tables and their product purpose\n* document the RLS posture and ownership assumptions\n* document the operational SQL functions and their caller semantics\n* document which parts are now shared backend contract and not mobile-only behavior\n* make the resulting backend understandable enough that web follow-up and later refactors can rely on Jira alone\n\nExpected coverage:\n\n* profiles\n* events\n* event_trip_plans\n* event_participants\n* reminders\n* organizer_messages\n* organizer_message_deliveries\n* event_analytics\n* event_analytics_breakdowns\n* hidden_hubs\n* organizer_demand_insights\n* community_pulses\n* organizer_opportunities\n* check_in_audit\n* check_in_participant(...)\n* undo_check_in_participant(...)\n* promote_waitlist_participant(...)\n* resolve_organizer_segment_recipients(...)\n\nAcceptance criteria:\n\n* Jira clearly reflects the applied Supabase schema and shared backend contract\n* later web/backend work can reference one documented contract instead of reverse-engineering the migration SQL\n* mobile-specific behavior is separated from shared backend behavior",
      "labels": [
        "backend-contract",
        "documentation",
        "mobile-followup",
        "supabase"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-207",
      "source": "file-import"
    },
    {
      "id": "hob-jira-183",
      "key": "HOB-208",
      "summary": "Documentation: backfill Android implementation coverage and cross-surface follow-up matrix",
      "description": "Document the Android implementation progress in a way that can be read back from Jira without opening the code packages.\n\nScope:\n\n* summarize what was materially advanced in Android UI/flow terms\n* separate mobile-only implementation choices from shared product/backend contract\n* list the resulting web follow-up/parity stories\n* list the backend and Supabase dependencies introduced by the mobile track\n* create a concise cross-surface matrix so later work does not miss hidden drift risks\n\nExpected coverage:\n\n* discovery lenses, filters and card semantics\n* place search, venue selection and trip continuity\n* create/edit/detail lifecycle\n* organizer attendee/check-in runtime\n* organizer messaging and analytics posture\n* onboarding, session and reminder journey\n* hidden hub / community pulse / organizer insight posture\n* direct references to HOB-199, HOB-200, HOB-201, HOB-202, HOB-203, HOB-204, HOB-205 and HOB-207\n\nAcceptance criteria:\n\n* Jira contains one readable implementation-backfill summary for the Android track\n* shared follow-up items for web/backend are explicitly listed and traceable\n* future backlog grooming can use Jira as the source of truth instead of reconstructing the mobile change history from zip packages",
      "labels": [
        "android",
        "documentation",
        "mobile-followup",
        "parity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-208",
      "source": "file-import"
    },
    {
      "id": "hob-jira-184",
      "key": "HOB-209",
      "summary": "Documentation: backfill Android implementation coverage and cross-surface follow-up matrix",
      "description": "Document the Android implementation progress in a way that can be read back from Jira without opening the code packages.\n\nScope:\n\n* summarize what was materially advanced in Android UI/flow terms\n* separate mobile-only implementation choices from shared product/backend contract\n* list the resulting web follow-up/parity stories\n* list the backend and Supabase dependencies introduced by the mobile track\n* create a concise cross-surface matrix so later work does not miss hidden drift risks\n\nExpected coverage:\n\n* discovery lenses, filters and card semantics\n* place search, venue selection and trip continuity\n* create/edit/detail lifecycle\n* organizer attendee/check-in runtime\n* organizer messaging and analytics posture\n* onboarding, session and reminder journey\n* hidden hub / community pulse / organizer insight posture\n* direct references to HOB-199, HOB-200, HOB-201, HOB-202, HOB-203, HOB-204, HOB-205 and HOB-207\n\nAcceptance criteria:\n\n* Jira contains one readable implementation-backfill summary for the Android track\n* shared follow-up items for web/backend are explicitly listed and traceable\n* future backlog grooming can use Jira as the source of truth instead of reconstructing the mobile change history from zip packages",
      "labels": [
        "android",
        "documentation",
        "mobile-followup",
        "parity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-209",
      "source": "file-import"
    },
    {
      "id": "hob-jira-185",
      "key": "HOB-210",
      "summary": "Documentation: backfill Android implementation coverage and cross-surface follow-up matrix",
      "description": "Document the Android implementation progress in a way that can be read back from Jira without opening the code packages.\n\nScope:\n\n* summarize what was materially advanced in Android UI/flow terms\n* separate mobile-only implementation choices from shared product/backend contract\n* list the resulting web follow-up/parity stories\n* list the backend and Supabase dependencies introduced by the mobile track\n* create a concise cross-surface matrix so later work does not miss hidden drift risks\n\nExpected coverage:\n\n* discovery lenses, filters and card semantics\n* place search, venue selection and trip continuity\n* create/edit/detail lifecycle\n* organizer attendee/check-in runtime\n* organizer messaging and analytics posture\n* onboarding, session and reminder journey\n* hidden hub / community pulse / organizer insight posture\n* direct references to HOB-199, HOB-200, HOB-201, HOB-202, HOB-203, HOB-204, HOB-205 and HOB-207\n\nAcceptance criteria:\n\n* Jira contains one readable implementation-backfill summary for the Android track\n* shared follow-up items for web/backend are explicitly listed and traceable\n* future backlog grooming can use Jira as the source of truth instead of reconstructing the mobile change history from zip packages",
      "labels": [
        "android",
        "documentation",
        "mobile-followup",
        "parity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-210",
      "source": "file-import"
    },
    {
      "id": "hob-jira-186",
      "key": "HOB-211",
      "summary": "Documentation: backfill Android implementation coverage and cross-surface follow-up matrix",
      "description": "Document the Android implementation progress in a way that can be read back from Jira without opening the code packages.\n\nScope:\n\n* summarize what was materially advanced in Android UI/flow terms\n* separate mobile-only implementation choices from shared product/backend contract\n* list the resulting web follow-up/parity stories\n* list the backend and Supabase dependencies introduced by the mobile track\n* create a concise cross-surface matrix so later work does not miss hidden drift risks\n\nExpected coverage:\n\n* discovery lenses, filters and card semantics\n* place search, venue selection and trip continuity\n* create/edit/detail lifecycle\n* organizer attendee/check-in runtime\n* organizer messaging and analytics posture\n* onboarding, session and reminder journey\n* hidden hub / community pulse / organizer insight posture\n* direct references to HOB-199, HOB-200, HOB-201, HOB-202, HOB-203, HOB-204, HOB-205 and HOB-207\n\nAcceptance criteria:\n\n* Jira contains one readable implementation-backfill summary for the Android track\n* shared follow-up items for web/backend are explicitly listed and traceable\n* future backlog grooming can use Jira as the source of truth instead of reconstructing the mobile change history from zip packages",
      "labels": [
        "android",
        "documentation",
        "mobile-followup",
        "parity"
      ],
      "url": "https://hobbeast.atlassian.net/browse/HOB-211",
      "source": "file-import"
    }
  ]
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


export const tenants: TenantRecord[] = [{ id: "tenant_releasegovernance", name: "ReleaseGovernance Demo Workspace", plan: "growth", projects: [hobbeastProject, syncfolkProject] }];
export function getTenant(tenantId: string) { return tenants.find((tenant) => tenant.id === tenantId); }
export function getProject(projectId: string) { return tenants.flatMap((tenant) => tenant.projects).find((project) => project.id === projectId); }
