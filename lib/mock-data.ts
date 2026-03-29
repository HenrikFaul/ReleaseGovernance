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
  "id": "project_syncfolk",
  "tenantId": "tenant_releasegovernance",
  "name": "Syncfolk",
  "slug": "syncfolk",
  "description": "B2C-first scheduling platform with a mature web product, shared Supabase backend and a deep enterprise planning backlog.",
  "repositories": {
    "web": "syncfolk-webapp-snapshot"
  },
  "jiraProjectKey": "SYN",
  "deploymentStatus": "warning",
  "releases": [
    {
      "id": "rel-syncfolk-01",
      "version": "web-v0.1.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "web",
        "shared-contract"
      ],
      "shippedAt": "2026-01-03",
      "backendChanged": false,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "jira",
        "github",
        "vercel",
        "lovable"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_app_shell_navigation"
      ],
      "releaseNotes": "Current B2C application entry shell, design-system baseline, route guards, deep links, API contract catalog and canonical domain model support.",
      "jiraLinks": [
        {
          "key": "SYN-1",
          "summary": "SYN | App shell, navigation and design system",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-1",
          "description": "Build the cross-platform application shell and reusable design system that will let the existing Syncfolk web experience be reimplemented consistently for Android and iPhone.

h2. Scope

* App shell, navigation model, top-level routes and guarded screens
* Cross-platform layout rules, responsive behavior and spacing system
* Theme system, tokens, reusable UI primitives and accessibility baseline
* Deep-link entry points for shared event links and auth redirects

h2. Frontend requirements

* Define screen map for auth, app home, join-event, profile, admin and modal flows
* Define reusable components for buttons, inputs, chips, badges, dialogs, sheets, cards and calendar cells
* Define responsive behavior for phone, tablet and large-screen layouts
* Preserve feature parity with current webapp while removing web-specific coupling

h2. Backend / integration requirements

* Document required bootstrap payloads for session restore, profile bootstrap and selected-event bootstrap
* Define deep-link handling contract for invite URLs, temp upgrade flows and password reset flows

h2. Acceptance criteria

* Native teams can implement the entire shell and core UI primitives without reverse-engineering the web code
* Navigation and theming contracts are documented in issue children
* All downstream mobile stories can reference this epic as their shell/design baseline",
          "labels": [
            "design-system",
            "migrated-from-HOB-191",
            "mobile-spec",
            "SYN"
          ]
        },
        {
          "key": "SYN-2",
          "summary": "SYN | App shell, navigation and design system",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-2",
          "description": "Build the cross-platform application shell and reusable design system that will let the existing Syncfolk web experience be reimplemented consistently for Android and iPhone.

h2. Scope

* App shell, navigation model, top-level routes and guarded screens
* Cross-platform layout rules, responsive behavior and spacing system
* Theme system, tokens, reusable UI primitives and accessibility baseline
* Deep-link entry points for shared event links and auth redirects

h2. Frontend requirements

* Define screen map for auth, app home, join-event, profile, admin and modal flows
* Define reusable components for buttons, inputs, chips, badges, dialogs, sheets, cards and calendar cells
* Define responsive behavior for phone, tablet and large-screen layouts
* Preserve feature parity with current webapp while removing web-specific coupling

h2. Backend / integration requirements

* Document required bootstrap payloads for session restore, profile bootstrap and selected-event bootstrap
* Define deep-link handling contract for invite URLs, temp upgrade flows and password reset flows

h2. Acceptance criteria

* Native teams can implement the entire shell and core UI primitives without reverse-engineering the web code
* Navigation and theming contracts are documented in issue children
* All downstream mobile stories can reference this epic as their shell/design baseline",
          "labels": [
            "design-system",
            "migrated-from-HOB-191",
            "mobile-spec",
            "SYN"
          ]
        },
        {
          "key": "SYN-4",
          "summary": "SYN | App shell, navigation and design system",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-4",
          "description": "Build the cross-platform application shell and reusable design system that will let the existing Syncfolk web experience be reimplemented consistently for Android and iPhone.

h2. Scope

* App shell, navigation model, top-level routes and guarded screens
* Cross-platform layout rules, responsive behavior and spacing system
* Theme system, tokens, reusable UI primitives and accessibility baseline
* Deep-link entry points for shared event links and auth redirects

h2. Frontend requirements

* Define screen map for auth, app home, join-event, profile, admin and modal flows
* Define reusable components for buttons, inputs, chips, badges, dialogs, sheets, cards and calendar cells
* Define responsive behavior for phone, tablet and large-screen layouts
* Preserve feature parity with current webapp while removing web-specific coupling

h2. Backend / integration requirements

* Document required bootstrap payloads for session restore, profile bootstrap and selected-event bootstrap
* Define deep-link handling contract for invite URLs, temp upgrade flows and password reset flows

h2. Acceptance criteria

* Native teams can implement the entire shell and core UI primitives without reverse-engineering the web code
* Navigation and theming contracts are documented in issue children
* All downstream mobile stories can reference this epic as their shell/design baseline",
          "labels": [
            "design-system",
            "migrated-from-HOB-191",
            "mobile-spec",
            "SYN"
          ]
        },
        {
          "key": "SYN-24",
          "summary": "SYN | Define screen map, route guards and deep-link behavior",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-24",
          "description": "h1. ObjectiveSpecify the complete navigation topology of Syncfolk so Android, iPhone and any future client can recreate the same entry points, guarded routes, redirects and modal/sheet launches without depending on the existing React router implementation.h1. Primary actors* Anonymous visitor; registered user; temporary guest user; event creator; event participant; admin user.h1. Functional scope* Inventory all destinations:** Public: landing/auth, reset-password, invite-join landing, temp sign-in activation.** Protected: main event workspace, profile, admin.** Overlay destinations: create event dialog, share dialog, event info modal, day-details modal/sheet, notifications panel, pin-day selection dialog, event unavailable modal.* Define route guard matrix:** anonymous users may access invite link and auth only;** temporary users may access the linked event workspace only;** temporary users are blocked from profile and admin;** admins may access admin screens in addition to normal user flows.* Define cold-start behavior:** if a valid session exists, restore user and resolve last selected event;** if a temp session exists without its event binding, force local sign-out;** if redirect parameters are present, route after auth completion.* Define deep-link behavior:** /join/:token validates token and branches into already-member, guest-join, auth-required, expired and event-inactive outcomes;** /temp/:tempToken restores temporary session for invited guest;** auth callback and password reset callback must preserve post-login redirect intent.h1. UI / wireframe requirements* Navigation spec must include one wireframe block per screen:** header layout (logo, create-event CTA, notification bell, profile access);** left rail / side panel usage on desktop;** bottom-safe and touch-target requirements on mobile;** modal vs full-screen-sheet rule by breakpoint.* The main event workspace must remain calendar-first:** center area reserved for full month grid;** left/right auxiliary panels adapt in width based on preserving full calendar visibility;** no screen should require the user to horizontally scroll to see the active calendar.* Route transition notes must state whether the destination replaces history, pushes history, or opens as overlay.h1. Backend / integration requirements* Define bootstrap contracts required immediately after app startup:** authenticated session payload;** profile + temporary/linked-event flags;** initial event membership list and default-selected event;** admin capability flag.* Define deep-link validation responses:** invalid token;** expired token;** max-use reached;** event deleted/inactive;** invite requires authenticated account;** invite allows anonymous participation.* Define error model for route guards:** HTTP/API error;** permission denial;** stale local state;** concurrent deletion of selected event.h1. Edge cases and non-functional requirements* App must survive refresh, background/foreground restore, token refresh and partially failed bootstrap calls.* All guards must behave deterministically on slow network and offline-resume states.* A protected route must never briefly flash sensitive content before redirecting.* Navigation spec must remain framework-agnostic: no React-only assumptions, no platform-specific widget names in the normative behavior section.h1. Acceptance criteria* Every route, overlay and redirect is listed with purpose, allowed roles, required data and fallback destination.* Deep-link outcomes are fully enumerated and testable.* Mobile teams can implement equivalent navigation in native stacks without reading the web router source.SYN | Define screen map, route guards and deep-link behaviorPurposeDefine the authoritative screen inventory and navigation contract used by every Syncfolk client.Functional scope- Provide route matrix table: route ID, title, allowed roles, entry preconditions, fallback route, analytics name.- Provide wireframe notes for top bar, profile entry, notification bell and create-event CTA placement.UI / interaction requirements- List every screen, modal, sheet and system dialog.- State initial route per identity state and per deep-link entry.- Define back navigation and cancellation behavior on each surface.Wireframe / layout notes- Screen inventory should separate full screens, transient dialogs, bottom sheets and overlays.Backend / platform-neutral technical requirements- Bootstrap endpoint must return session summary, selected event context and unread notification count.- Navigation intents must be serializable so push notifications and deep links resolve to the same destination.- Route guards must be enforceable both client-side and server-side.State model / edge cases- Cold start without session lands on auth.- Cold start with selected event restores event screen if access still valid.- Invite link while logged in as unsupported identity must branch to recoverable CTA.Acceptance criteria- All current web destinations are represented.- No route depends on implicit browser history behavior.",
          "labels": [
            "app-shell",
            "mobile-spec",
            "navigation",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-25",
          "summary": "SYN | Define design tokens, themes and reusable UI primitives",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-25",
          "description": "h1. ObjectiveDocument the visual design system of Syncfolk so the product can be reproduced consistently across web, Android and iPhone while preserving brand identity and accessibility.h1. Primary actors* Design system maintainers; mobile frontend developers; QA/design review.h1. Functional scope* Define semantic color tokens for:** brand primary gradients;** vote states (good/maybe/bad);** success/warning/destructive;** elevated surfaces, cards, dialogs, borders, overlays and inactive states.* Define typography scale for display, heading, body, label, caption and handwritten quote styles.* Define component primitives used across the application:** buttons, icon buttons, chips, pills, badges, inputs, textareas, dropdowns, radio buttons, switches, dialogs, sheets, cards, calendar cells, ranking rows, notification rows.* Define state map for each primitive:** default, hover, pressed, selected, focused, disabled, destructive, loading.h1. UI / wireframe requirements* For every primitive specify:** size variants;** padding, radius and minimum touch target;** icon placement rules;** truncation and multiline behavior;** contrast targets for light and dark themes.* Calendar-cell style guide must define:** neutral state;** vote-state gradient fill;** disabled state;** pinned-day state;** info icon placement;** count dot placement.* Wireframe notes must define which surfaces are fixed-width cards versus flexible-width containers.h1. Backend / integration requirements* No direct backend behavior, but design spec must annotate components that depend on server-driven flags:** disabled because event is decided;** disabled because deadline passed;** admin-only action;** unread-notification badge count;** temporary-user restrictions.* Define a frontend-friendly state enum contract that backend responses should support.h1. Edge cases and non-functional requirements* Theme spec must cover both light and dark modes for auth, dialogs and core workspace.* All primitives must remain legible under localization expansion and large accessibility text settings.* Handwritten decorative typography may never be used for critical controls or transactional content.h1. Acceptance criteria* A platform team can rebuild every reusable primitive with consistent states and sizing.* The design token list and component-state catalog are sufficient for native and web parity QA.SYN | Define design tokens, themes and reusable UI primitivesPurposeDefine reusable visual language and primitive-component behavior so UI is consistent across platforms.Functional scope- Include wireframe anatomy diagrams for core primitives and containers.- Document calendar-first layout rules and side-panel collapsing priorities.UI / interaction requirements- Catalog tokens for colors, radii, shadows, borders, typography and spacing.- Define components for button, chip, pill, input, textarea, select, card, dialog, panel, calendar cell and badge.- Specify dark and light theme support.Wireframe / layout notes- Provide naming convention for tokens and component variants.Backend / platform-neutral technical requirements- Theme tokens must be platform neutral and exportable.- Components must define state matrices rather than implementation-specific CSS instructions.- Support dynamic type / font scaling within controlled bounds.State model / edge cases- Theme change must not alter data or navigation state.- Disabled controls remain visible where business state requires visibility.Acceptance criteria- A new design library can be built directly from this story and its tasks.",
          "labels": [
            "design-system",
            "mobile-spec",
            "story",
            "SYN",
            "ui"
          ]
        },
        {
          "key": "SYN-47",
          "summary": "SYN | Specify canonical domain model and persistence boundaries for events, memberships, votes, invites, friendships and notifications",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-47",
          "description": "SYN | Specify canonical domain model and persistence boundaries for events, memberships, votes, invites, friendships and notificationsPurposeDefine the shared domain vocabulary and entity model so every platform and service uses the same object boundaries, identifiers and lifecycle fields.Functional scope- Define entities: User, GuestIdentity, Session, Event, EventMembership, InviteLink, Vote, PersonalAvailabilityVote, FriendRequest/Friendship, Notification, AuditEvent.- For each entity define required fields, optional fields, ownership, timestamps, soft-delete behavior and indexing needs.- Define derived projections such as ranking row, day detail aggregate and unread notification count.UI / interaction requirements- No UI should invent fields not present in the domain model.- Every displayed badge, chip and counter must map to a defined entity field or derived projection.Wireframe / layout notes- Document serialization rules for date/time, nullable fields and enums.Backend / platform-neutral technical requirements- Provide logical entity-relationship diagram notes.- List which screens read/write each entity.State model / edge cases- Clarify what survives account deletion, event deletion and guest upgrade.- Clarify difference between event vote and personal availability vote.Acceptance criteria- All downstream API stories can reference this as the source of truth for entities.",
          "labels": [
            "data-model",
            "mobile-spec",
            "SYN"
          ]
        },
        {
          "key": "SYN-48",
          "summary": "SYN | Specify API contract catalog and error-code taxonomy",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-48",
          "description": "SYN | Specify API contract catalog and error-code taxonomyPurposeDefine the backend contract inventory and a unified error model for all clients.Functional scope- Catalog endpoints/actions with request schema, response schema, auth requirement and side effects.- Define shared error envelope and per-feature business error codes.- Define pagination/sorting conventions and optimistic concurrency rules if any.UI / interaction requirements- Every user action must map to a named command/query.- UI copy and branching must be driven by stable error codes, not raw server text.Wireframe / layout notes- Document transport-agnostic rules so REST, GraphQL or RPC can all implement the same semantics.Backend / platform-neutral technical requirements- Provide reference tables rather than implementation-language-specific stubs.State model / edge cases- Network failure vs business rule failure must be separate.Acceptance criteria- A backend can be reimplemented from the catalog without web client code.",
          "labels": [
            "api",
            "mobile-spec",
            "SYN"
          ]
        },
        {
          "key": "SYN-49",
          "summary": "SYN | Specify app shell state machines and transition rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-49",
          "description": "SYN | Specify app shell state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by App shell.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.",
          "labels": [
            "mobile-spec",
            "shell",
            "state-machine",
            "SYN"
          ]
        },
        {
          "key": "SYN-50",
          "summary": "SYN | Specify app shell wireframes, component anatomy and responsive layout notes",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-50",
          "description": "SYN | Specify app shell wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for App shell.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.",
          "labels": [
            "mobile-spec",
            "shell",
            "SYN",
            "wireframe"
          ]
        },
        {
          "key": "SYN-61",
          "summary": "SYN | Specify analytics event catalog, naming rules and product funnels",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-61",
          "description": "SYN | Specify analytics event catalog, naming rules and product funnelsPurposeDefine all analytics events needed to observe the rebuilt product consistently across platforms.Functional scope- Document event names, required properties, optional properties and privacy constraints.- Define client-side vs server-side event emission ownership.UI / interaction requirements- Every screen view, key CTA, destructive action and recovery path must emit a named analytics event.- Funnel definitions must cover auth conversion, event creation, invite sharing, join success, voting completion and pinning.Wireframe / layout notes- Specify deduplication rules for repeated opens/closes and idempotent events.Backend / platform-neutral technical requirements- Provide funnel tables and event-property dictionaries.State model / edge cases- Guest flows and registered flows must be distinguishable without storing prohibited personal data.Acceptance criteria- Analytics can be reimplemented on any stack with consistent semantics.",
          "labels": [
            "analytics",
            "mobile-spec",
            "SYN"
          ]
        },
        {
          "key": "SYN-62",
          "summary": "SYN | Specify accessibility, localization and content rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-62",
          "description": "SYN | Specify accessibility, localization and content rulesPurposeEnsure the rebuilt product is operable, readable and localizable across platforms.Functional scope- Specify date/time localization strategy, timezone handling and locale fallback.- Specify content length constraints and truncation/wrapping policy.UI / interaction requirements- Define minimum touch targets, focus order, semantics/labels, screen-reader text and dynamic type handling.- Document copy placeholders and localization requirements for all user-facing templates.Wireframe / layout notes- List all hard-coded copy areas that must be localized.Backend / platform-neutral technical requirements- Provide accessibility notes for dialogs, calendars, toggles, chips and notifications.State model / edge cases- Long localized strings, small screens and assistive technologies.Acceptance criteria- Accessibility and localization are first-class implementation requirements, not afterthoughts.",
          "labels": [
            "a11y",
            "i18n",
            "mobile-spec",
            "SYN"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "syncfolk",
        "repository": "syncfolk-webapp-snapshot",
        "label": "documentation-derived baseline"
      },
      "deploymentComment": "Core app shell, route protection, design tokens, themes, analytics and accessibility groundwork."
    },
    {
      "id": "rel-syncfolk-02",
      "version": "web-v0.2.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-01-06",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "google-oauth"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_auth_registered_identity"
      ],
      "releaseNotes": "Registered user sign-in, sign-up, verification, password recovery and account security flows for the B2C scheduling product.",
      "jiraLinks": [
        {
          "key": "SYN-3",
          "summary": "SYN | Authentication, identity and guest access",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-3",
          "description": "Define all account, session and guest-access flows needed to support registered users and registration-free participants across Android and iPhone shared-link entry points.

Scope:

* Email/password sign in, Google sign in, sign up and password reset
* Temporary user sessions and event-linked guest access
* Guest-to-registered upgrade and session continuity
* Permission rules for creator-only actions, participant actions and admin roles

Frontend requirements:

* Platform-neutral auth screens and validation behavior
* Error, loading and recovery states for every auth flow
* Session restore and sign-out behavior across app restarts

Backend/integration requirements:

* Auth provider integration and callback contracts
* Temporary user creation, upgrade and cleanup rules
* Permission model for creator, participant and guest limits

Acceptance criteria:

* Mobile teams can implement the full auth model from child issues
* Guest and registered flows are described without web-only assumptions",
          "labels": [
            "auth",
            "migrated-from-HOB-192",
            "mobile-spec",
            "SYN"
          ]
        },
        {
          "key": "SYN-5",
          "summary": "SYN | Authentication, identity and guest access",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-5",
          "description": "Cross-platform authentication and identity flows for Syncfolk mobile.

Scope:

* Email/password sign in
* Google sign in
* Sign up and password reset
* Guest sessions and guest-to-registered upgrade
* Role and permission handling for creator, participant and admin

Acceptance criteria:

* Android and iPhone teams can implement the identity model from child issues.
* Guest and registered flows are documented without web-only assumptions.",
          "labels": [
            "auth",
            "migrated-from-HOB-192",
            "mobile-spec",
            "SYN"
          ]
        },
        {
          "key": "SYN-26",
          "summary": "SYN | Specify login, registration, verification and forgot-password journeys",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-26",
          "description": "h1. ObjectiveDescribe every entry, validation and recovery step of the identity experience so the auth surface can be rebuilt consistently across platforms.h1. Primary actors* Anonymous visitor; newly registering user; returning registered user; user completing email activation; user requesting forgotten-password recovery.h1. Functional scope* Support views:** login;** registration;** email verification / activation code entry;** forgot password request;** reset password completion;** Google OAuth sign-in / sign-up intents.* Validation rules:** email format;** password minimum and complexity rules;** display-name requirement for registration;** OTP length and resend cooldown;** user-facing errors for invalid, expired or already-used activation token.* Flow branches:** classic email/password login;** sign-up requiring email activation;** Google-based sign-in;** Google-based sign-up requiring activation if configured;** redirect restoration after successful authentication.h1. UI / wireframe requirements* Auth screen wireframe must define:** left informational/brand panel versus right transaction panel on large screens;** single-column compact layout on mobile;** CTA hierarchy and copy rules;** loading/disabled states for all auth buttons;** OTP input grouping, countdown and resend placement.* The spec must explicitly distinguish informational decorative content from transactional controls.h1. Backend / integration requirements* Document auth provider dependencies:** Supabase Auth or equivalent auth broker;** email verification/activation endpoint;** Google OAuth callback and intent propagation;** password reset token exchange.* Document payload expectations:** sign-in success session;** sign-up pending-verification response;** activation success/failure response;** forgot-password request response;** reset-password completion response.* Define audit events for registration started, activation sent, activation completed, login success/failure and password reset completed.h1. Edge cases and non-functional requirements* User must never be left in an ambiguous state after OAuth callback or activation.* Expired activation links must produce a recoverable flow, not a dead end.* Repeated resend requests must respect cooldown and rate-limit handling.* Copy and validation must be localization-ready.h1. Acceptance criteria* All auth subflows are documented with UI states, validation messages, server interactions and redirect outcomes.* Native teams can reproduce auth screens and recovery behaviors without reading the current Auth.tsx implementation.SYN | Specify login, registration, verification and forgot-password journeysPurposeDefine all registered-user entry flows from unauthenticated state to active signed-in session.Functional scope- Document login screen, registration screen, verification screen and forgot password entry points.- Document loading, success and error feedback placements.UI / interaction requirements- Login and registration must validate inline and at submit.- Verification and resend flows must provide countdown and terminal recovery path.- OAuth and email/password outcomes must converge into the same post-auth bootstrap.Wireframe / layout notes- Sequence diagrams should cover direct login and invite-first authentication.Backend / platform-neutral technical requirements- Auth service must expose precise error codes for invalid credentials, unverified account, blocked account and rate limiting.- Verification state must be persisted and returned during session bootstrap.State model / edge cases- Switching between login and registration preserves safe values only when appropriate.- User may arrive from invite link, then authenticate, then continue to the event.Acceptance criteria- All web auth screens and edge cases are covered.",
          "labels": [
            "auth",
            "identity",
            "mobile-spec",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-28",
          "summary": "SYN | Specify password reset and in-app password change flows",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-28",
          "description": "h1. ObjectiveDocument both out-of-band password recovery and in-app password change so user security flows are fully portable.h1. Primary actors* Registered user who forgot password; signed-in user changing password from profile.h1. Functional scope* Forgot-password request:** user enters email;** system confirms request without leaking account existence beyond configured policy;** reset email is issued.* Reset completion:** password reset link/token opens dedicated route;** user sets and confirms new password;** expired/invalid token behavior is recoverable.* In-app password change:** current password may or may not be required per auth provider policy;** new password and confirmation validation;** success toast and session refresh behavior.h1. UI / wireframe requirements* Forgot-password and reset-password pages must be specified separately from standard auth.* Password requirements panel must list live validation rules.* Show/hide password toggles, inline mismatch messaging and final success state must be defined.h1. Backend / integration requirements* Document reset token validation, password update endpoint and session invalidation/refresh policy.* Document any difference between password-capable accounts and social-login-only accounts.* Define audit/security events for password reset requested, reset completed and password changed in-app.h1. Edge cases and non-functional requirements* Prevent weak password acceptance and mismatched confirmation.* Expired reset tokens must redirect into a recoverable re-request flow.* Social-login-only accounts must not see unusable password-change actions without explanatory messaging.h1. Acceptance criteria* Recovery and in-app password flows are fully specified with validation, error handling and server interactions.SYN | Specify password reset and in-app password change flowsPurposeDefine registered-user credential recovery and in-app password maintenance.Functional scope- Document forgot password, reset password and in-profile password change cards.UI / interaction requirements- Forgot password must request email, send reset link and confirm without leaking account existence.- Reset screen must validate token freshness and password policy.- Profile password change must ask for current password unless external provider-only account logic says otherwise.Wireframe / layout notes- Specify password policy in product language and technical validation terms.Backend / platform-neutral technical requirements- Reset token issuance, expiry, single-use behavior and invalidation must be documented.- Password-change endpoint must emit audit event and revoke other sessions if business rule requires.State model / edge cases- Expired token.- Already used token.- Provider-only account without local password.Acceptance criteria- Credential recovery can be built securely on any client platform.",
          "labels": [
            "auth",
            "mobile-spec",
            "security",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-51",
          "summary": "SYN | Specify identity state machines and transition rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-51",
          "description": "SYN | Specify identity state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Identity.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.",
          "labels": [
            "auth",
            "mobile-spec",
            "state-machine",
            "SYN"
          ]
        },
        {
          "key": "SYN-52",
          "summary": "SYN | Specify identity wireframes, component anatomy and responsive layout notes",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-52",
          "description": "SYN | Specify identity wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Identity.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.",
          "labels": [
            "auth",
            "mobile-spec",
            "SYN",
            "wireframe"
          ]
        },
        {
          "key": "SYN-63",
          "summary": "SYN | Specify security, privacy, audit logging and rate limiting",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-63",
          "description": "SYN | Specify security, privacy, audit logging and rate limitingPurposeDefine cross-cutting protection requirements for identity, invitations, votes and admin operations.Functional scope- Document audit events, retention expectations, abuse limits and rate limiting for auth and sharing endpoints.- Define what participant identity details can be shown in day details and notifications.UI / interaction requirements- Sensitive actions must require authenticated authorization.- User-visible privacy boundaries for guest/registered/admin data exposure must be explicit.Wireframe / layout notes- Specify PII handling, logging redaction and abuse detection hooks.Backend / platform-neutral technical requirements- Provide operation-by-operation security notes.State model / edge cases- Invite abuse, brute-force login, repeated request spam and stale tokens.Acceptance criteria- Security-sensitive behavior can be implemented and reviewed against a written spec.",
          "labels": [
            "mobile-spec",
            "security",
            "SYN"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "syncfolk",
        "repository": "syncfolk-webapp-snapshot",
        "label": "documentation-derived baseline"
      },
      "deploymentComment": "Email/password identity, verification, OAuth activation and password reset flows."
    },
    {
      "id": "rel-syncfolk-03",
      "version": "web-v0.3.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-01-09",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_guest_and_temporary_access"
      ],
      "releaseNotes": "Temporary user sessions, guest upgrade logic, anonymous or invited access and return-path handling for invitees.",
      "jiraLinks": [
        {
          "key": "SYN-27",
          "summary": "SYN | Specify temporary guest session model and guest-to-member upgrade",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-27",
          "description": "h1. ObjectiveDescribe the temporary-user identity model that powers registration-free event participation and later upgrade into a normal account.h1. Primary actors* Temporary invited participant; event creator sharing anonymous link; guest upgrading to email/password or Google account.h1. Functional scope* Temporary session model must cover:** creation of a temporary identity from an invite token;** binding of the temp account to a single linked event;** temp access token persistence;** inactivity logout behavior;** prevention of temp-session reuse in unrelated tabs/devices if required by policy.* Upgrade path must cover:** temp participant chooses to register;** event membership and prior votes are retained;** temporary preferences and guest identifiers are migrated or cleaned;** upgrade can happen through email registration or Google.h1. UI / wireframe requirements* Join flow must clearly label registration-free participation and any restrictions versus full account users.* Temporary-user banners or helper states must explain profile/admin limitations.* Upgrade CTA placement must be defined in:** join confirmation;** ongoing event participation;** potentially profile-access attempt for blocked routes.h1. Backend / integration requirements* Document temp-user profile fields:** is_temporary;** linked_event_id;** temp_access_token;** optional pending Google/email activation preferences.* Define server responsibilities for:** issuing temp session;** validating linked-event access;** migrating guest votes/participation on upgrade;** invalidating temp session when linked event is missing or inactive.h1. Edge cases and non-functional requirements* Temporary users must be force-signed-out if their linked event no longer exists or the required temp marker is missing.* Upgrade flow must be idempotent and protect against duplicate account creation.* Event access cannot be broadened accidentally during upgrade.h1. Acceptance criteria* The temporary-user lifecycle is fully described from invite acceptance through upgrade or invalidation.* Native teams can rebuild guest participation and upgrade without relying on hidden local-storage behavior.SYN | Specify temporary guest session model and guest-to-member upgradePurposeDefine the lifecycle of a temporary guest identity from join through upgrade or invalidation.Functional scope- Document guest entry bannering, restricted-menu treatment and upgrade CTA placements.UI / interaction requirements- Guest join must create a temporary subject only when invite policy allows.- Guest users must see only features allowed for temporary identities.- Upgrade flow must clearly explain what data will be preserved.Wireframe / layout notes- Include mapping rules between guest identity and registered account subject.Backend / platform-neutral technical requirements- Guest subject record must have expiry/invalidation semantics.- Votes, event memberships and notification subscriptions must be transferable on upgrade when the same logical actor is confirmed.State model / edge cases- Guest session expired before completing upgrade.- Guest joins multiple eligible events before upgrading.Acceptance criteria- Guest model is implementable without hidden web assumptions.",
          "labels": [
            "auth",
            "guest",
            "mobile-spec",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-33",
          "summary": "SYN | Specify invite join flow for registered and registration-free participants",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-33",
          "description": "h1. ObjectiveDescribe the join-event journey from opening a share link through successful participation or graceful rejection.h1. Primary actors* Anonymous invitee; registered user; temporary guest; creator viewing participant result.h1. Functional scope* Join-event must branch into:** loading/validation;** invalid or expired link;** already joined/already has access;** authenticated user join success;** registration-free guest join success;** auth-required because link disallows anonymous;** event unavailable because event is inactive or deleted.* For guests, system may require a lightweight identity creation step before landing them in the event.* On success, the event should be opened immediately or after auth completion according to the validated redirect rule.h1. UI / wireframe requirements* Join page must define status-card variants for each outcome with clear CTA hierarchy.* Loading state, success confirmation, copy/share reminders and upgrade CTA placement must be defined.* Event-unavailable modal content must be specified separately from generic join-error copy.h1. Backend / integration requirements* Define join-event action contracts:** validate token;** join registered user;** issue/restore temporary guest access;** complete email activation if invite-driven registration is used.* Define participant creation idempotency and duplication safeguards.h1. Edge cases and non-functional requirements* Reopening the same link after already joining must not create duplicate participants.* Joining a deleted/inactive event must not result in a partially created temp session.* Guest join must preserve enough context to continue on another screen without requiring re-entry of the link in the same session.h1. Acceptance criteria* Every join outcome is documented with UI, backend contract and post-success navigation.SYN | Specify invite join flow for registered and registration-free participantsPurposeDefine the complete join-event flow from invite link open to event membership and first-usable screen.Functional scope- Document join splash/loading, outcome messages and CTAs.UI / interaction requirements- Registered and guest branches must both be covered.- Outcome states must include success, already member, expired link, unauthorized link type, deleted event and decided/frozen event.- Post-join screen must be deterministic.Wireframe / layout notes- Specify whether a decided event remains viewable after join.Backend / platform-neutral technical requirements- Join endpoint must validate token, membership and policy.- Guest join may mint session and membership atomically.State model / edge cases- Authenticated user opens guest-allowed link.- Guest opens registration-required link.Acceptance criteria- Any invite URL can be handled without ambiguity.",
          "labels": [
            "guest",
            "join-event",
            "mobile-spec",
            "story",
            "SYN"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "syncfolk",
        "repository": "syncfolk-webapp-snapshot",
        "label": "documentation-derived baseline"
      },
      "deploymentComment": "Temporary guest identity, invite-scoped access, inactivity handling and guest-to-member upgrade."
    },
    {
      "id": "rel-syncfolk-04",
      "version": "web-v0.4.0",
      "status": "old",
      "releaseState": "released",
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
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_event_creation_lifecycle_context"
      ],
      "releaseNotes": "Event calendar creation, lifecycle transitions, default event context, active/inactive visibility and lifecycle-focused UI states.",
      "jiraLinks": [
        {
          "key": "SYN-6",
          "summary": "SYN | Event calendar lifecycle, templates and sharing",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-6",
          "description": "Cross-platform event calendar lifecycle for Syncfolk mobile.

Scope:

* Create, edit, delete and view event calendars
* Template-based setup with category and description metadata
* Registered-only and no-registration share modes
* Invite link generation, distribution and revocation
* Event selector and ownership/participant rules

Acceptance criteria:

* Android and iPhone teams can rebuild create/edit/share/join behavior from child issues.
* Data fields and access rules are captured in downstream issues.",
          "labels": [
            "events",
            "migrated-from-HOB-193",
            "mobile-spec",
            "sharing",
            "SYN"
          ]
        },
        {
          "key": "SYN-29",
          "summary": "SYN | Specify event creation flow, templates and field validation",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-29",
          "description": "h1. ObjectiveDescribe how a user creates a new event calendar, either from templates or from manual input, with full field semantics and validation.h1. Primary actors* Event creator; invited participant receiving the resulting link.h1. Functional scope* Creation entry points:** global create-event CTA;** template-driven quick-start;** blank/custom event setup.* Required fields:** title;** start date;** end date.* Optional/configurable fields:** category;** description with max-length rules;** voting deadline;** default vote mode;** participant-sharing permission;** anonymous-join/share mode.* Date-picker behavior:** only one date popover may be open at a time;** start-date selection may auto-open end-date selection only when end date is not yet set;** popover closes only via explicit close or OK/Save action, not by accidental outside click.h1. UI / wireframe requirements* Create-event dialog wireframe must define:** header, close action, template toggle, form sections, save CTA and cancel behavior;** desktop modal versus mobile full-height sheet adaptation;** field ordering and spacing;** disabled state of submit until required fields are valid.* Template chooser must be collapsed by default behind a dedicated CTA and expand only on demand.* Date fields must show localized labels, selected date summary and validation messaging.h1. Backend / integration requirements* Document event-creation request schema:** title, category, description, start_date, end_date, deadline, allow_participant_sharing, allow_anonymous, default_vote, creator_id.* Document derived fields:** month/year from start_date or visible month context;** is_active default state;** decided_date initially null.* Define validation rules server-side to mirror client validation and reject invalid ranges or impossible deadlines.h1. Edge cases and non-functional requirements* End date may not be earlier than start date.* Deadline rules must be clear when omitted, when equal to event start date and when already elapsed.* Event creation must be atomic with creator membership initialization if that is part of the data model.h1. Acceptance criteria* Creation flow is fully specified, including templates, date controls, validation, save/cancel and persisted fields.* A native team can implement the create flow without reading the current dialog component code.SYN | Specify event creation flow, templates and field validationPurposeDefine complete creation of an event calendar from entry CTA to persisted event and immediate post-create state.Functional scope- Provide wireframes for create modal/screen on mobile and wide layouts.- Document date-picker open/close rules, explicit OK/cancel behavior and no accidental close on misclick.UI / interaction requirements- Support template-based and manual creation.- Fields include title, category, description, start date, end date, optional deadline, share posture and defaults.- Save button active only when required fields valid.Wireframe / layout notes- Document field-level validation matrix including character limits and date order.Backend / platform-neutral technical requirements- Create API must validate chronology, field limits and owner identity.- Template catalog must be retrievable from backend or embedded configuration with versioning.State model / edge cases- Start date selected before end date exists should optionally prompt end date selection next.- Editing draft before save must not mutate persisted event list.Acceptance criteria- Create flow can be recreated exactly including validation and UX safeguards.",
          "labels": [
            "create",
            "events",
            "mobile-spec",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-30",
          "summary": "SYN | Specify event editing, deletion, restart and state transitions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-30",
          "description": "h1. ObjectiveDocument how existing event calendars are edited, deleted, reopened or frozen, including creator-only actions and state transitions.h1. Primary actors* Event creator; participant observing changes; admin if elevated intervention exists.h1. Functional scope* Editing scope:** title, category, description, date range, deadline, sharing mode and other mutable metadata;** immutable versus mutable fields after votes exist must be defined explicitly.* Deletion scope:** creator-triggered event deletion;** participant-facing consequences;** cleanup of share tokens and notifications.* Restart/freeze scope:** restart voting action clears the decided/pinned state when allowed;** decided/pinned or deadline-reached events block further voting changes;** unlock of pinned day may re-enable voting if deadline has not passed.h1. UI / wireframe requirements* Edit-event surface must preserve explicit save and explicit close/cancel separation.* Existing event edit surface must define destructive section placement clearly separated from non-destructive actions.* Restart and delete actions must require confirmation dialogs with irreversible wording where applicable.h1. Backend / integration requirements* Document update payloads and partial-update rules.* Document event deletion cascade or soft-delete behavior for:** event_participants;** event_share_tokens;** votes;** notifications.* Document restart-voting operation and whether it clears decided_date only or any additional frozen-state flags.h1. Edge cases and non-functional requirements* Concurrent editing by creator on multiple devices must be resolved deterministically.* Participants must not be able to mutate creator-only fields.* Historical notifications should preserve event title snapshot even if the event is later deleted.h1. Acceptance criteria* All creator-only event state transitions are specified with user-facing outcomes and data implications.SYN | Specify event editing, deletion, restart and state transitionsPurposeDefine all mutable operations after an event exists, including safe destructive actions.Functional scope- Document edit screen/modal and delete/restart confirmation patterns.UI / interaction requirements- Event owner can edit allowed fields.- Deletion requires explicit confirmation and user-impact messaging.- Restart voting must clear decided state and restore voting if allowed by deadline/state.Wireframe / layout notes- Provide editable vs non-editable field matrix by event state.Backend / platform-neutral technical requirements- Edit API must reject forbidden mutations based on state.- Delete operation must soft delete or hard delete per documented rule and notify affected users.- Restart voting must be auditable.State model / edge cases- Attempt edit after event frozen or deleted.- Owner changes date range while votes already exist.Acceptance criteria- Post-create event management is fully specified.",
          "labels": [
            "edit",
            "events",
            "mobile-spec",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-31",
          "summary": "SYN | Specify event selector, default event and active/inactive visibility",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-31",
          "description": "h1. ObjectiveDescribe how users browse, select and restore among multiple event calendars they own or participate in.h1. Primary actors* Creator with multiple events; participant invited to multiple events; temporary guest linked to one event.h1. Functional scope* Event selector must show:** currently selected event;** event category chip or secondary metadata;** participant ratio summary if applicable;** active/inactive/expired status visibility.* Default selected event rules:** restore last selected event if still accessible;** otherwise choose preferred event by active status and recency;** temporary user is forced onto linked event.* Ranking side panel and batch panel must refresh when selected event changes.h1. UI / wireframe requirements* Wireframe must define selector collapsed state, expanded list item anatomy, sort order and truncation rules.* Selected event switch must not crop the main calendar.* Mobile behavior must specify whether selector expands inline or opens as sheet.h1. Backend / integration requirements* Document events-list query including creator-owned and participant-linked events.* Include fields needed for selector rendering and access control.* Document inactive/expired state derivation and sorting inputs.h1. Edge cases and non-functional requirements* If the selected event is deleted remotely, app must recover to a valid event or empty-state.* Temporary users must never see inaccessible events in the selector.h1. Acceptance criteria* Event selection and restoration behavior is fully deterministic across app restarts and role types.SYN | Specify event selector, default event and active/inactive visibilityPurposeDefine how users find, switch and persist currently active events.Functional scope- Document selector placement in header and empty-state treatment when no events exist.UI / interaction requirements- Event selector lists relevant events in deterministic order.- Default event restore occurs after app launch and after auth.- Inactive/deleted/expired events must display according to visibility rules.Wireframe / layout notes- Specify ordering, badges and truncation rules in the selector list.Backend / platform-neutral technical requirements- List API must support paging/filtering if needed.- Client stores last-selected event key but validates access on restore.State model / edge cases- Restored event no longer accessible.- User is member of many events.Acceptance criteria- Selected-event behavior is stable across app restarts and role changes.",
          "labels": [
            "events",
            "mobile-spec",
            "selector",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-53",
          "summary": "SYN | Specify event lifecycle state machines and transition rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-53",
          "description": "SYN | Specify event lifecycle state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Event lifecycle.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.",
          "labels": [
            "events",
            "mobile-spec",
            "state-machine",
            "SYN"
          ]
        },
        {
          "key": "SYN-54",
          "summary": "SYN | Specify event lifecycle wireframes, component anatomy and responsive layout notes",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-54",
          "description": "SYN | Specify event lifecycle wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Event lifecycle.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.",
          "labels": [
            "events",
            "mobile-spec",
            "SYN",
            "wireframe"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "syncfolk",
        "repository": "syncfolk-webapp-snapshot",
        "label": "documentation-derived baseline"
      },
      "deploymentComment": "Create, edit, restart and select event calendars with templates and active/inactive visibility."
    },
    {
      "id": "rel-syncfolk-05",
      "version": "web-v0.5.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-01-15",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "email-social-share"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_share_and_invite_distribution"
      ],
      "releaseNotes": "Share token generation, management and distribution across email and social channels, including creator-managed invite UX.",
      "jiraLinks": [
        {
          "key": "SYN-32",
          "summary": "SYN | Specify share-link generation, management and distribution",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-32",
          "description": "h1. ObjectiveDocument how creators and allowed participants generate, copy, view and revoke invite links for event calendars.h1. Primary actors* Event creator; participant with sharing permission; invited recipient.h1. Functional scope* Share dialog must support:** registered-users-only join mode;** registration-free/anonymous join mode if allowed;** generation of one or more active invite links;** copy link, delete link and share-to-channel actions.* Each link may carry constraints:** allow_anonymous;** optional email restriction;** optional expiry;** max uses;** use count display.* Share UI must provide message text suitable for SMS/text copy and grouped social channel options.h1. UI / wireframe requirements* Share dialog wireframe must define:** header, mode toggle, link-creation CTA, active-link cards, per-link actions and share options.* Social section may collapse secondary channels behind a grouped CTA, but the visual asset must still present official channel branding where available.* Copy success feedback, delete confirmation and empty-state messaging must be defined.h1. Backend / integration requirements* Document event_share_tokens schema and lifecycle:** token generation;** revocation;** expiry check;** use-count increment;** anonymous-vs-auth enforcement.* Document join-event endpoint requirements for token validation and link consumption.h1. Edge cases and non-functional requirements* Revoked or exhausted links must fail safely with explicit user messaging.* Multiple active links for the same event must coexist without corrupting counts.* Participant sharing permission must be evaluated on every share action, not only at initial screen load.h1. Acceptance criteria* Invite creation and consumption are fully specified, including permissions, token lifecycle and UI actions.SYN | Specify share-link generation, management and distributionPurposeDefine the full sharing surface for invite links and channel-oriented distribution.Functional scope- Document share dialog with grouped channels and active-link list.- Document desktop and mobile modal sizing with capped height and internal scrolling.UI / interaction requirements- Owner can create multiple invite links depending on policy.- Share dialog supports copy, delete/revoke and grouped social channels.- Registration-required and guest-allowed links must be visually distinct.Wireframe / layout notes- Specify channel grouping, iconography rules and fallback when a native app is unavailable.Backend / platform-neutral technical requirements- Invite token records require event ID, creator, policy, status, created/updated timestamps and optional usage rules.- Share actions can be client-side wrappers around canonical invite URL.State model / edge cases- Link revoked after being shared.- Guest link used after event is decided or deleted.Acceptance criteria- Invite management and share UX are platform-neutral and complete.",
          "labels": [
            "invite",
            "mobile-spec",
            "sharing",
            "story",
            "SYN"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "syncfolk",
        "repository": "syncfolk-webapp-snapshot",
        "label": "documentation-derived baseline"
      },
      "deploymentComment": "Creator-managed share links, grouped share actions and invite distribution."
    },
    {
      "id": "rel-syncfolk-06",
      "version": "web-v0.6.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-01-18",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_voting_calendar_core"
      ],
      "releaseNotes": "Core voting calendar rendering, date eligibility, per-day vote interactions and responsive calendar-first layout.",
      "jiraLinks": [
        {
          "key": "SYN-7",
          "summary": "SYN | Voting calendar, day details and batch interactions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-7",
          "description": "Cross-platform voting calendar behavior for Syncfolk mobile.

Scope:

* Calendar grid rendering and month navigation
* Date eligibility rules based on start date, end date, current date and event status
* Single-day voting, long-press/info access and day detail surfaces
* Batch voting ranges, drag interactions and clear/reset behavior

Acceptance criteria:

* Android and iPhone teams can rebuild calendar voting from child issues.
* Date-selection edge cases are captured in downstream issues.",
          "labels": [
            "calendar",
            "migrated-from-HOB-194",
            "mobile-spec",
            "SYN",
            "voting"
          ]
        },
        {
          "key": "SYN-11",
          "summary": "SYN | Voting calendar, day details and batch interactions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-11",
          "description": "Cross-platform voting calendar behavior for Syncfolk mobile.

Scope:

* Calendar grid rendering and month navigation
* Date eligibility rules based on start date, end date, current date and event status
* Single-day voting, long-press/info access and day detail surfaces
* Batch voting ranges, drag interactions and clear/reset behavior

Acceptance criteria:

* Android and iPhone teams can rebuild calendar voting from child issues.
* Date-selection edge cases are captured in downstream issues.",
          "labels": [
            "calendar",
            "migrated-from-HOB-197",
            "mobile-spec",
            "SYN",
            "voting"
          ]
        },
        {
          "key": "SYN-34",
          "summary": "SYN | Specify calendar grid rendering, month navigation and date eligibility",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-34",
          "description": "h1. ObjectiveDocument the calendar grid as the canonical voting surface, including month math, date eligibility and responsive rendering rules.h1. Primary actors* Creator; participant; temporary guest.h1. Functional scope* Calendar grid must render the selected event month(s) with day-of-week headers and leading/trailing placeholders.* Date eligibility must enforce:** not earlier than event start date;** not later than event end date;** not earlier than current date when the visible event rules disallow past voting;** not editable when decided_date or freeze flag is active;** not editable when deadline has passed.* Navigation must permit month switching when event spans multiple months; navigation controls must be disabled or hidden when not applicable.h1. UI / wireframe requirements* Calendar is the primary content region and must never be horizontally truncated.* Day cells must preserve square-like shape and minimum readable tap size while side panels adapt around it.* Visual states to specify:** empty placeholder cell;** eligible neutral day;** selected good/maybe/bad vote day with gradient fill;** disabled non-eligible day;** current day;** pinned/decided day indicator;** info icon and count dot positions.h1. Backend / integration requirements* Client requires event metadata: start_date, end_date, decided_date, deadline, default_vote and visible month context.* If server precomputes eligibility or freeze status, document those response flags and precedence rules.h1. Edge cases and non-functional requirements* Click, tap and drag eligibility must be identical; a day that is disabled for single click must also be disabled for range drag.* First-week and second-week spacing anomalies must be prohibited by layout rules.* Month switch must preserve current vote view without stale disabled-state artifacts.h1. Acceptance criteria* The month grid, eligibility logic and rendering states are fully specified and testable across breakpoints.SYN | Specify calendar grid rendering, month navigation and date eligibilityPurposeDefine the canonical calendar surface and all date eligibility rules.Functional scope- Provide wireframe for calendar-first layout with left ranking and right batch panels adapting to the calendar width.UI / interaction requirements- Month grid must render leading/trailing placeholders consistently.- Date cells expose state for eligible, ineligible, past, today, selected vote, decided and info-available.- Calendar must stay fully visible; side panels adapt around it.Wireframe / layout notes- Specify spacing normalization so large blank gutters do not appear between side panels and the calendar.Backend / platform-neutral technical requirements- Eligibility engine must combine event start/end, current date, deadline, freeze/decided state and user role.- Calendar dataset may precompute month slices or generate client-side from event boundaries.State model / edge cases- Month starts mid-week.- Current day equals event start.- Date in range but before today.Acceptance criteria- Calendar rendering does not depend on implicit CSS quirks from the web app.",
          "labels": [
            "calendar",
            "mobile-spec",
            "story",
            "SYN",
            "voting"
          ]
        },
        {
          "key": "SYN-35",
          "summary": "SYN | Specify single-day vote interactions, info icon and long-press details",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-35",
          "description": "h1. ObjectiveDescribe how a user inspects a day and applies or removes a vote through tap/click/long-press interactions.h1. Primary actors* Creator; participant; temporary guest.h1. Functional scope* Vote methods:** if an availability mode is currently selected, tapping an eligible day applies that mode;** tapping the same already-selected value again removes the vote if product rules allow toggle-off;** info icon must open details only and must never mutate vote state;** long-press on mobile opens day details without requiring the tiny info icon.* Detail access must exist for every day within the event date range, even when the day is no longer editable because it is in the past or voting is frozen.h1. UI / wireframe requirements* Day details open as dialog on desktop and sheet on mobile unless another platform-specific pattern is mandated.* The info icon must be placed within the day cell hit area but isolated from vote-tap handling.* Long-press threshold, visual feedback and cancellation conditions must be defined.* If the day is ineligible for editing but still within event range, UI must still allow read-only details access.h1. Backend / integration requirements* Day details require aggregated vote counts and participant-by-participant values for that date.* Detail query must return enough data for participant list, creator/friend actions and status counts.h1. Edge cases and non-functional requirements* Clicking info icon must never trigger vote add/remove.* Long-press should not accidentally vote while opening details.* Read-only detail opening must remain available after pinning and after deadline.h1. Acceptance criteria* Single-day interaction model is fully described for desktop and mobile, including info-only actions and read-only cases.SYN | Specify single-day vote interactions, info icon and long-press detailsPurposeDefine single-day voting and detail access without gesture conflicts.Functional scope- Document cell anatomy including info affordance placement and touch target sizes.UI / interaction requirements- Tap/click on day applies currently selected vote value or removes the same value by toggle rule.- Info icon and long-press open details only.- Touch drag initiation threshold must prevent accidental vote writes when user aims for info.Wireframe / layout notes- Specify parity between mouse click, touch tap and long-press.Backend / platform-neutral technical requirements- Vote mutation endpoint must be idempotent for same-value repeated writes.- Details-open interaction must not call vote mutation handlers.State model / edge cases- Long-press on disabled day.- Tap on info icon while batch panel vote value active.- Cell selected on frozen event.Acceptance criteria- Mobile and desktop interactions are unambiguous and parity-tested by spec.",
          "labels": [
            "calendar",
            "day-details",
            "mobile-spec",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-55",
          "summary": "SYN | Specify voting calendar state machines and transition rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-55",
          "description": "SYN | Specify voting calendar state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Voting calendar.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.",
          "labels": [
            "calendar",
            "mobile-spec",
            "state-machine",
            "SYN"
          ]
        },
        {
          "key": "SYN-56",
          "summary": "SYN | Specify voting calendar wireframes, component anatomy and responsive layout notes",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-56",
          "description": "SYN | Specify voting calendar wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Voting calendar.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.",
          "labels": [
            "calendar",
            "mobile-spec",
            "SYN",
            "wireframe"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "syncfolk",
        "repository": "syncfolk-webapp-snapshot",
        "label": "documentation-derived baseline"
      },
      "deploymentComment": "Calendar rendering, single-day voting, long-press/info details and responsive voting layout."
    },
    {
      "id": "rel-syncfolk-07",
      "version": "web-v0.7.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-01-21",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_batch_day_details_availability"
      ],
      "releaseNotes": "Batch vote interactions, participant/day detail views and personal availability calendar with synchronization into event voting.",
      "jiraLinks": [
        {
          "key": "SYN-36",
          "summary": "SYN | Specify drag range voting and batch side-panel behavior",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-36",
          "description": "h1. ObjectiveDescribe batch voting through direct drag selection and through the dedicated batch side panel.h1. Primary actors* Creator; participant; temporary guest.h1. Functional scope* Direct drag voting:** user chooses current availability mode;** press/hold + drag across eligible days applies the selected value to each traversed eligible date;** ineligible dates are skipped and do not break the whole operation;** click-drag parity across mouse and touch is mandatory.* Batch side panel:** user chooses vote value, start date and end date;** apply CTA updates all eligible dates in range;** range can be cleared before apply;** full clear-all may delete all current user's votes for the active event.* When event is pinned/decided, batch panel remains visible but all interactive controls are disabled.h1. UI / wireframe requirements* Batch panel must remain visible beside calendar on large screens and move into an accessible stacked/mobile location on small screens.* Disabled state for pinned/decided events must visually keep the panel present but clearly non-interactive.* Drag operation may show transient highlighting but must not require a secondary confirmation.h1. Backend / integration requirements* Define bulk-vote mutation contract:** event_id;** date_from/date_to;** vote_value;** actor identity;** server response with affected row count and skipped dates.* Define clear-all vote deletion contract scoped to actor + event.h1. Edge cases and non-functional requirements* Drag selection must respect same date eligibility rules as single click.* Batch apply must ignore dates outside event range, before today or after deadline/freeze.* Partially successful bulk updates must report skipped dates and still preserve valid updates if that is the chosen policy.h1. Acceptance criteria* Batch side panel and drag-range behavior are fully specified, including disabled locked-state presentation.SYN | Specify drag range voting and batch side-panel behaviorPurposeDefine multi-day selection via drag gestures and batch side-panel voting.Functional scope- Document panel contents, disabled styling and clear/reset button behavior.UI / interaction requirements- Batch panel stays visible even when disabled by decided flag.- Drag across eligible days writes one vote value across the range.- Disabled or out-of-range dates are skipped and do not break the gesture unless specified.Wireframe / layout notes- Specify gesture start/continue/end rules and auto-scroll behavior if any.Backend / platform-neutral technical requirements- Batch mutation endpoint may accept range or expanded date list but contract must define behavior on partial invalid dates.- Decided flag must render panel inert while preserving visual presence.State model / edge cases- Gesture begins on invalid day.- Gesture crosses ineligible/past dates.- Panel visible on narrow screens as drawer/sheet.Acceptance criteria- Range voting and side-panel behavior are completely specified.",
          "labels": [
            "batch-vote",
            "calendar",
            "mobile-spec",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-37",
          "summary": "SYN | Specify day-details content model and participant social actions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-37",
          "description": "h1. ObjectiveDefine the content and actions shown inside the day-details view for a selected date.h1. Primary actors* Creator; participant; temporary guest; registered user sending friend requests.h1. Functional scope* Day-details content must include:** selected date headline;** aggregated counts for good/maybe/bad;** participant list with individual choice;** optional indicators for creator, friend, favorite or pending friend request.* Social actions inside day details:** send friend request;** mark favorite;** reflect pending/accepted/favorite state;** do not show unsupported actions for temporary users.h1. UI / wireframe requirements* Desktop uses modal; mobile uses bottom or full-height sheet.* Participant rows must define:** avatar/initial;** display name or fallback;** vote badge;** friend/favorite action icons;** disabled/pending states.* Long lists must scroll within the container without causing background layout shifts.h1. Backend / integration requirements* Day-details query must join:** event votes for selected date;** participant profile display data;** friendship/favorite relationship state relative to current user.* Mutations for friend request and favorites must be documented, including optimistic update policy if any.h1. Edge cases and non-functional requirements* Temporary users may be allowed to read participant rows but blocked from social mutations.* Duplicate friend requests must be prevented and surfaced as idempotent.* Deleted user/profile rows in historical events need a fallback display strategy.h1. Acceptance criteria* Day-details is fully specified as a data view and action surface, including social relationship states.SYN | Specify day-details content model and participant social actionsPurposeDefine the day-details surface and all participant-level information/actions available there.Functional scope- Document row anatomy, section order and action placements for add friend / favorite.UI / interaction requirements- Day details show aggregated counts, participant rows, vote values and social actions.- Surface may appear as dialog on wide layouts and bottom sheet/full sheet on phones.- Creator and participant capabilities may differ inside the detail view.Wireframe / layout notes- Specify how guest identities are labeled and how hidden data is redacted.Backend / platform-neutral technical requirements- Day-details endpoint must return counts by vote type, participant list with identity metadata allowed by privacy rules, and social-action eligibility.State model / edge cases- Guest participants without full profile.- Day outside editable range but still viewable.Acceptance criteria- Day details can be rebuilt as a complete feature from the spec.",
          "labels": [
            "day-details",
            "friends",
            "mobile-spec",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-38",
          "summary": "SYN | Specify personal availability calendar and synchronization into events",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-38",
          "description": "h1. ObjectiveDescribe the standalone personal availability calendar that users maintain outside any single event and may copy into eligible events.h1. Primary actors* Registered user maintaining availability; event participant importing personal availability into current event.h1. Functional scope* Personal availability supports:** month navigation;** single-day cycling through good/maybe/bad;** batch range updates in personal context;** copying availability into a selected event.* Personal availability data is independent from any event vote, but can be projected into an event when the event is eligible and not pinned/frozen.* Events available as copy targets must exclude those whose deadline has passed or whose decided_date is set.h1. UI / wireframe requirements* Personal calendar wireframe must define:** month header;** day-cell state colors;** copy-to-event dialog;** batch side controls where applicable.* Copy dialog must let the user choose target event and scope (all/current month) if supported.* Disabled states and no-data messaging must be defined clearly.h1. Backend / integration requirements* Document personal_availability table contract and CRUD mutations.* Document copy operation as server-side batch translation or client-orchestrated copy, including duplicate handling.* Define synchronization boundaries: copying creates/updates event votes but must not establish ongoing live sync after that operation.h1. Edge cases and non-functional requirements* Copy must ignore dates outside event range.* Copy must not override pinned/decided events.* No-data result must return a friendly, deterministic outcome.h1. Acceptance criteria* Personal availability and one-time copy-to-event behavior are fully specified.SYN | Specify personal availability calendar and synchronization into eventsPurposeDefine the separate personal availability calendar and how its data can project into event voting.Functional scope- Document personal calendar screen or panel and copy-to-event flow.UI / interaction requirements- Personal availability is user-owned and spans arbitrary dates.- Projection into an event must respect event state and decided/deadline locks.- Projection cannot overwrite frozen/decided events.Wireframe / layout notes- Specify overwrite/merge rules when target event already has user votes on some dates.Backend / platform-neutral technical requirements- Personal availability data model must be separate from event votes.- Projection operation must audit source dates and target event.State model / edge cases- User selects availability then target event becomes decided.- Projection includes dates outside event range.Acceptance criteria- Personal calendar and projection rules are platform-neutral and complete.",
          "labels": [
            "availability",
            "mobile-spec",
            "personal-calendar",
            "story",
            "SYN"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "syncfolk",
        "repository": "syncfolk-webapp-snapshot",
        "label": "documentation-derived baseline"
      },
      "deploymentComment": "Drag-range voting, day-detail surfaces and personal availability synchronization."
    },
    {
      "id": "rel-syncfolk-08",
      "version": "web-v0.8.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-01-24",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_ranking_and_pinned_day"
      ],
      "releaseNotes": "Decision-support surfaces around ranking, pinning, repinning and unlocking dates, including ranking-to-calendar navigation.",
      "jiraLinks": [
        {
          "key": "SYN-8",
          "summary": "SYN | Ranking, pinned day and notifications",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-8",
          "description": "Cross-platform ranking, pinned day and notification behavior for Syncfolk mobile.

Scope:

* Vote ranking computation and presentation
* Creator-only pinned-day selection and modification
* Tie handling for top-ranked days
* Notification center, unread counts, read/delete actions and event-driven notification types

Acceptance criteria:

* Android and iPhone teams can reproduce ranking and pin-day behavior from child issues.
* Notification-triggering events and payloads are documented in downstream issues.",
          "labels": [
            "migrated-from-HOB-195",
            "mobile-spec",
            "notifications",
            "ranking",
            "SYN"
          ]
        },
        {
          "key": "SYN-12",
          "summary": "SYN | Ranking, pinned day and notifications",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-12",
          "description": "Cross-platform ranking, pinned day and notification behavior for Syncfolk mobile.

Scope:

* Vote ranking computation and presentation
* Creator-only pinned-day selection and modification
* Tie handling for top-ranked days
* Notification center, unread counts, read/delete actions and event-driven notification types

Acceptance criteria:

* Android and iPhone teams can reproduce ranking and pin-day behavior from child issues.
* Notification-triggering events and payloads are documented in downstream issues.",
          "labels": [
            "migrated-from-HOB-198",
            "mobile-spec",
            "notifications",
            "ranking",
            "SYN"
          ]
        },
        {
          "key": "SYN-39",
          "summary": "SYN | Specify ranking computation, filtering and ranking-to-calendar navigation",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-39",
          "description": "h1. ObjectiveDocument how the ranked day list is calculated, filtered, displayed and linked back to the calendar.h1. Primary actors* Any event participant; creator using rankings to decide final date.h1. Functional scope* Ranking source set:** include only dates inside event range;** exclude dates with no effective positive signal according to product rule;** current implementation expectation: do not surface dates that only received negative/no-go votes.* Ranking score must be deterministic and documented, including tie rules.* Ranking list is capped (e.g. top 10) and clicking an item focuses the corresponding calendar date/day details.h1. UI / wireframe requirements* Ranking row anatomy:** ordinal badge/medal;** formatted date;** compact good/maybe/bad counters;** top-ranked highlighting.* Empty state copy must be specified.* Clicking a ranking row must define the resulting focus behavior: scroll, select day, open details or both.h1. Backend / integration requirements* Document ranking aggregation:** per-date counts;** score formula;** sorting precedence (score, date proximity, chronological fallback, etc.).* If ranking is computed client-side, document exact source query and algorithm.h1. Edge cases and non-functional requirements* Tie ordering must be deterministic and locale-independent.* Ranking must update after vote mutations, event change, pin/unpin and restart.* Dates outside visible month but inside event range must still be rankable and navigable.h1. Acceptance criteria* Ranking behavior and score math are explicit enough for backend, mobile and QA to produce identical lists.SYN | Specify ranking computation, filtering and ranking-to-calendar navigationPurposeDefine how ranking is calculated, filtered and linked back to the calendar.Functional scope- Document ranking panel sizing, medals/order badges and disabled/empty states.UI / interaction requirements- Ranking rows show order, date and vote counts.- Negative-only dates can be excluded by rule.- Selecting a ranking row focuses the calendar on that date/month.Wireframe / layout notes- Specify sort precedence across score, chronology and stable identifiers.Backend / platform-neutral technical requirements- Aggregation endpoint must return deterministic sorted rows and tie metadata.State model / edge cases- Many tied dates.- No positive/maybe votes at all.Acceptance criteria- Ranking behavior can be implemented identically across clients.",
          "labels": [
            "mobile-spec",
            "ranking",
            "story",
            "SYN",
            "voting"
          ]
        },
        {
          "key": "SYN-40",
          "summary": "SYN | Specify pinned-day selection, modification and unlock flow",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-40",
          "description": "h1. ObjectiveDescribe the creator-only “Nap kitűzése” feature including tie handling, later modification and unlocking to resume voting.h1. Primary actors* Event creator; participants observing frozen state and receiving notification.h1. Functional scope* When no decided_date exists:** creator sees “Nap kitűzése” CTA;** if one highest-ranked day exists, that day may be preselected or directly proposed;** if multiple top-ranked days tie, open a selection dialog listing only tied dates;** default highlighted option is the closest upcoming eligible date among tied options.* When decided_date exists:** creator sees “Kitűzött nap módosítása” CTA;** dialog lists only highest-ranked dates and includes explicit “Feloldás” destructive action to remove decided_date and resume voting if deadline has not passed.* Setting decided_date freezes event voting and personal-availability copy into that event.h1. UI / wireframe requirements* Header layout must reserve a stable slot for:** pin/unpin/modify CTA;** displayed decided-date chip in the designated center area.* Pin dialog requirements:** fixed maximum visible list of five date options with internal scroll for more;** radio selection;** primary save button active only when a date is selected;** close icon and cancel button;** destructive “Feloldás” action only in modify mode.* Notifications and batch panel disabled styling must update immediately after save.h1. Backend / integration requirements* Document operations:** set decided_date;** update decided_date to another tied date;** clear decided_date / unlock.* Document permissions:** creator only;** server must reject participant attempts even if client is stale.* Setting/clearing decided_date must emit corresponding notification events.h1. Edge cases and non-functional requirements* Unlock is forbidden if the event is otherwise hard-closed by deadline/freeze policy.* Dialog must never render unbounded height; only internal list scroll is allowed.* Modify flow must remain available for events that already have decided_date, unless business rules explicitly close it.h1. Acceptance criteria* The full pin/modify/unlock lifecycle is completely specified, including dialog UX, server mutations and frozen-state side effects.SYN | Specify pinned-day selection, modification and unlock flowPurposeDefine creator-only selection, modification and unlocking of a pinned day.Functional scope- Document header placement for pin CTA, decided pill and modify CTA.UI / interaction requirements- When one date leads, default selection is immediate.- When multiple top-ranked dates tie, dialog opens with recommended default and alternative options.- After pinning, voting freezes until unlock if allowed.Wireframe / layout notes- Specify tie dialog visible-row cap and internal scrolling.Backend / platform-neutral technical requirements- Pinned date is persisted on event as decided_date or equivalent.- Unlock operation clears decided_date and regenerates notifications/audit event.State model / edge cases- Event already decided.- Deadline passed so unlock not allowed.- Tie list longer than visible modal area.Acceptance criteria- Pin/modify/unlock can be rebuilt exactly including constraints and notifications.",
          "labels": [
            "mobile-spec",
            "notifications",
            "pinned-day",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-57",
          "summary": "SYN | Specify ranking and notifications state machines and transition rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-57",
          "description": "SYN | Specify ranking and notifications state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Ranking and notifications.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.",
          "labels": [
            "mobile-spec",
            "notifications",
            "state-machine",
            "SYN"
          ]
        },
        {
          "key": "SYN-58",
          "summary": "SYN | Specify ranking and notifications wireframes, component anatomy and responsive layout notes",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-58",
          "description": "SYN | Specify ranking and notifications wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Ranking and notifications.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.",
          "labels": [
            "mobile-spec",
            "notifications",
            "SYN",
            "wireframe"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "syncfolk",
        "repository": "syncfolk-webapp-snapshot",
        "label": "documentation-derived baseline"
      },
      "deploymentComment": "Ranking computation, candidate comparison, pinned day selection, modification and unlock lifecycle."
    },
    {
      "id": "rel-syncfolk-09",
      "version": "web-v0.9.0",
      "status": "old",
      "releaseState": "released",
      "surfaces": [
        "web",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "2026-01-27",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "email-social-share"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_notifications_center"
      ],
      "releaseNotes": "Notification center UI and server-backed notification payload logic for pinned-day, event and social actions.",
      "jiraLinks": [
        {
          "key": "SYN-41",
          "summary": "SYN | Specify notification center, unread state and row actions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-41",
          "description": "h1. ObjectiveDescribe the notification bell, counter, panel layout and per-row actions for all user-visible notifications.h1. Primary actors* Registered user; temporary guest where notifications are supported.h1. Functional scope* Notification center must support:** bell icon in global header beside profile;** unread counter based on rows not marked seen and not deleted;** list sorted newest first;** per-row mark-as-read and delete actions;** read/unread visual distinction;** explicit close action only; tapping a row does not close the panel.* Panel sizing rule:** show at most five notifications without expanding height;** additional items accessible via internal scroll on desktop and touch scroll on mobile.h1. UI / wireframe requirements* Notification panel wireframe must define:** title row;** close icon;** scroll container;** row anatomy including title, body, timestamp, seen icon, delete icon.* Subtitle under panel title is not required and should be absent unless later reintroduced by design decision.* Only one scrollbar should be visible for the list; no duplicate nested scrollbars.h1. Backend / integration requirements* Notification entity fields:** id;** user_id or temp_user_id;** type;** title/event title snapshot;** body/message;** created_at;** is_read/is_seen;** deleted_at or is_deleted;** related_event_id optional;** payload containing decided date or actor display name where needed.* Query contract must support newest-first pagination.h1. Edge cases and non-functional requirements* Guest users must receive the same supported event notifications as registered participants for events they can still access.* Mark-as-read and delete actions must be idempotent.* Opening the panel must not auto-mark all rows as read unless explicitly specified elsewhere.h1. Acceptance criteria* Notification center behavior, data model and visual states are fully specified for desktop and mobile.SYN | Specify notification center, unread state and row actionsPurposeDefine the notification center surface and behavior.Functional scope- Document panel header, close button, row states, read state styling and per-row actions.UI / interaction requirements- Bell icon sits near profile entry and shows unread badge count.- Panel height is capped to roughly 5 visible rows with internal scrolling.- Row press must not auto-close the panel.Wireframe / layout notes- Specify dual-scroll avoidance and single-scroll ownership in capped panels.Backend / platform-neutral technical requirements- Notification query supports latest-first ordering, unread count and mark-read/delete actions.- Guests receive supported notifications under parity rules.State model / edge cases- Many notifications.- No notifications.- Unread count after delete or mark-read.Acceptance criteria- Notification center UI and behavior are fully specified.",
          "labels": [
            "mobile-spec",
            "notifications",
            "story",
            "SYN",
            "ux"
          ]
        },
        {
          "key": "SYN-42",
          "summary": "SYN | Specify event-driven notification triggers and payload content",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-42",
          "description": "h1. ObjectiveEnumerate every event that must generate a notification and the exact message payload required for display.h1. Primary actors* Creator, participant, temporary guest, users in friendship workflows.h1. Functional scope* Notification trigger catalog must include at minimum:** pinned day set;** pinned day modified;** pinned day unlocked;** friend request received;** event deleted while the user was participant/guest;** voting restarted by creator;** any additional share/join/admin triggers explicitly chosen by product.* Each trigger must define:** recipients;** title and body template;** timestamp source;** related event id;** whether unread counter increments;** whether guest recipients are supported.h1. UI / wireframe requirements* Message text must contain enough context to be meaningful in the list without opening the event.* Notification body copy should include event title and the changed day/date when relevant.h1. Backend / integration requirements* Define a publishable notification-event contract and where it is emitted from:** event update workflow;** friendship mutation;** delete/restart actions.* Define deduplication rules to avoid duplicate notifications during retries.h1. Edge cases and non-functional requirements* If event title changes after notification creation, row may show either snapshot title or current title; whichever is chosen must be documented consistently.* Deleted events should still allow row rendering with safe fallback text.h1. Acceptance criteria* Trigger-to-payload mapping is fully specified for all supported notification events.SYN | Specify event-driven notification triggers and payload contentPurposeDefine which product events create notifications and the exact payload content.Functional scope- Document message templates and localization placeholders.UI / interaction requirements- Covered triggers include pin, repin, unlock, friendship, event deletion and voting restart.- Notification body must include event name and outcome text.- Guest and registered recipients may differ by event type and membership.Wireframe / layout notes- Provide template variables and actor/recipient visibility rules.Backend / platform-neutral technical requirements- Notification event producer must emit typed payloads with actor, event, target date and timestamps.- Delivery layer must support idempotency.State model / edge cases- Repeated identical operations in short interval.- Recipient removed before delivery.Acceptance criteria- All supported notification events and payloads are implementation-ready.",
          "labels": [
            "events",
            "mobile-spec",
            "notifications",
            "story",
            "SYN"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "syncfolk",
        "repository": "syncfolk-webapp-snapshot",
        "label": "documentation-derived baseline"
      },
      "deploymentComment": "Unread state, row actions, guest delivery parity and event-driven notification payloads."
    },
    {
      "id": "rel-syncfolk-10",
      "version": "web-v0.10.0",
      "status": "old",
      "releaseState": "released",
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
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_profile_and_social_graph"
      ],
      "releaseNotes": "User profile and social graph management, including preferences, friends, pending requests, favorites and participant-context actions.",
      "jiraLinks": [
        {
          "key": "SYN-9",
          "summary": "SYN | Profile, friends and administrative operations",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-9",
          "description": "Cross-platform profile, friends and admin operations for Syncfolk mobile.

Scope:

* Profile screen, profile menu and account preferences
* Password change and account deletion flow
* Friend search, requests, accept/decline, favorites and participant social actions
* Admin dashboard and event/user oversight capabilities

Acceptance criteria:

* Android and iPhone teams can implement profile, social and admin flows from child issues.
* Destructive actions and permissions are documented in downstream issues.",
          "labels": [
            "admin",
            "friends",
            "migrated-from-HOB-196",
            "mobile-spec",
            "profile",
            "SYN"
          ]
        },
        {
          "key": "SYN-10",
          "summary": "SYN | Profile, friends and administrative operations",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-10",
          "description": "Cross-platform profile, friends and admin operations for Syncfolk mobile.

Scope:

* Profile screen, profile menu and account preferences
* Password change and account deletion flow
* Friend search, requests, accept/decline, favorites and participant social actions
* Admin dashboard and event/user oversight capabilities

Acceptance criteria:

* Android and iPhone teams can implement profile, social and admin flows from child issues.
* Destructive actions and permissions are documented in downstream issues.",
          "labels": [
            "admin",
            "friends",
            "migrated-from-HOB-196",
            "mobile-spec",
            "profile",
            "SYN"
          ]
        },
        {
          "key": "SYN-43",
          "summary": "SYN | Specify profile page, account summary and user preferences",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-43",
          "description": "h1. ObjectiveDescribe the profile hub where a full registered user manages account information, availability utilities and preference surfaces.h1. Primary actors* Registered user only.h1. Functional scope* Profile page must aggregate:** account summary/header;** personal availability calendar access or embedded view;** password change;** delete-account section at the very bottom with low visual emphasis relative to primary actions;** any preference toggles supported by the product.* Temporary users are blocked from profile and redirected back to app workspace.h1. UI / wireframe requirements* Profile screen wireframe must define:** section order;** card hierarchy;** responsive stacking;** safe spacing for destructive actions.* Account deletion card must be visually de-emphasized compared to common profile actions and positioned at the bottom of the page.h1. Backend / integration requirements* Define profile payload: display name, email, role flags, is_temporary, preferences, created_at and any derived status shown in profile.* Define update operations for editable preferences if present.h1. Edge cases and non-functional requirements* Social-login-only accounts may have reduced capabilities for password fields and must receive clear messaging.* Profile must gracefully handle partially missing optional data.h1. Acceptance criteria* Profile page structure and section behavior are fully specified for a native rebuild.SYN | Specify profile page, account summary and user preferencesPurposeDefine the profile surface, account summary and user preference behavior.Functional scope- Document section order, spacing and destructive-action placement low on page.UI / interaction requirements- Profile shows account identity, auth method, security actions and other personal sections.- Guests may be blocked from unsupported features with clear CTA to upgrade.Wireframe / layout notes- Provide card ordering and empty-state treatment for each section.Backend / platform-neutral technical requirements- Profile bootstrap endpoint must return account basics, counts and feature flags.State model / edge cases- OAuth-only account without local password.Acceptance criteria- Profile page can be reconstructed exactly.",
          "labels": [
            "account",
            "mobile-spec",
            "profile",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-44",
          "summary": "SYN | Specify friends, pending requests and favorites management",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-44",
          "description": "h1. ObjectiveDescribe the full social graph feature set used across profile and event day-details.h1. Primary actors* Registered user searching by email; user receiving a friend request; user marking favorites.h1. Functional scope* Friend features:** search by email;** send friend request;** receive request;** accept/decline/cancel if supported;** view pending sent and received requests;** favorites list.* Relationship states:** no relationship;** outgoing pending;** incoming pending;** accepted friend;** favorite.* Social actions available from day-details must synchronize with profile lists and notification counts.h1. UI / wireframe requirements* Friends area must define:** search field and search action;** favorites section;** outgoing pending section;** incoming pending section if supported;** per-row action icons and status chips.* Favorite and friend-request icons shown elsewhere in app must visually align with profile state.h1. Backend / integration requirements* Document friendships model:** requester_id;** addressee_id;** status;** timestamps.* Document favorites model:** owner user id;** favorite_user_id.* Define search constraints and privacy safeguards for email-based discovery.h1. Edge cases and non-functional requirements* Duplicate or reciprocal friend requests must resolve deterministically.* Favorite cannot exist for a non-friend unless the product explicitly allows it; whichever rule is chosen must be documented.* Deleted users must be handled gracefully in lists and notifications.h1. Acceptance criteria* Friendship, pending and favorite states are fully specified across profile and event surfaces.SYN | Specify friends, pending requests and favorites managementPurposeDefine friendship, pending-request and favorite management across the product.Functional scope- Document friends list, pending lists and quick actions.UI / interaction requirements- Users can search by email, send requests, accept/decline, favorite and remove favorite.- Social actions also appear in day details.Wireframe / layout notes- Specify de-duplication and anti-spam behavior for repeated requests.Backend / platform-neutral technical requirements- Friendship entity must track lifecycle state and timestamps.State model / edge cases- Request already exists.- User attempts to friend self.Acceptance criteria- Friends/favorites system is fully specified.",
          "labels": [
            "friends",
            "mobile-spec",
            "social",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-59",
          "summary": "SYN | Specify profile, friends and admin state machines and transition rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-59",
          "description": "SYN | Specify profile, friends and admin state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Profile, friends and admin.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.",
          "labels": [
            "mobile-spec",
            "profile",
            "state-machine",
            "SYN"
          ]
        },
        {
          "key": "SYN-60",
          "summary": "SYN | Specify profile, friends and admin wireframes, component anatomy and responsive layout notes",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-60",
          "description": "SYN | Specify profile, friends and admin wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Profile, friends and admin.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.",
          "labels": [
            "mobile-spec",
            "profile",
            "SYN",
            "wireframe"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "syncfolk",
        "repository": "syncfolk-webapp-snapshot",
        "label": "documentation-derived baseline"
      },
      "deploymentComment": "Profile page, account summary, friends, pending requests, favorites and social actions from event context."
    },
    {
      "id": "rel-syncfolk-11",
      "version": "web-v0.11.0",
      "status": "old",
      "releaseState": "released",
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
        "supabase"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_account_security_and_admin"
      ],
      "releaseNotes": "Account-security flows, deletion safeguards and platform-level admin operations for users and events.",
      "jiraLinks": [
        {
          "key": "SYN-45",
          "summary": "SYN | Specify account deletion and security confirmation workflow",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-45",
          "description": "h1. ObjectiveDescribe the irreversible account deletion journey and the associated audit trail.h1. Primary actors* Registered user deleting own account.h1. Functional scope* Delete-account flow must include:** low-emphasis entry point at bottom of profile;** explicit warning copy;** confirmation step;** backend deletion or anonymization policy;** session termination after completion.* account_deletions audit record must capture deletion metadata required by product/legal policy.h1. UI / wireframe requirements* Delete-account card must be visually subordinate to normal profile cards.* Destructive CTA, confirmation dialog and final irreversible confirmation wording must be specified separately.* Success state must clearly explain that the account is deleted/signed out.h1. Backend / integration requirements* Document account_deletions fields and when they are written.* Document data cleanup scope:** profile;** votes;** created events or ownership reassignment policy;** friendships/favorites;** auth account.* Define whether hard delete or soft/anonymized delete is used per table.h1. Edge cases and non-functional requirements* Deletion must fail safely if dependent cleanup cannot complete.* Active guest sessions tied to the user after upgrade must also be invalidated.* Reauthentication may be required before deletion; if so, specify it.h1. Acceptance criteria* Deletion flow is sufficiently detailed for secure implementation and auditability.SYN | Specify account deletion and security confirmation workflowPurposeDefine secure account deletion from profile.Functional scope- Document placement at bottom of profile and confirmation flow.UI / interaction requirements- Deletion must be low-emphasis until intentionally reached.- Confirmation must clearly communicate irreversibility and effects.Wireframe / layout notes- Specify confirmation wording, optional re-auth and post-delete landing state.Backend / platform-neutral technical requirements- Deletion endpoint must be authenticated, audited and cascade/retain data per policy.State model / edge cases- Guest user.- Admin account restrictions if any.Acceptance criteria- Deletion flow is safe and implementable.",
          "labels": [
            "account",
            "mobile-spec",
            "security",
            "story",
            "SYN"
          ]
        },
        {
          "key": "SYN-46",
          "summary": "SYN | Specify admin dashboard, admin-users and admin-events capabilities",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-46",
          "description": "h1. ObjectiveDocument the administrative screens and management operations available only to privileged users.h1. Primary actors* Admin user.h1. Functional scope* Admin module must include:** admin dashboard entry;** user management view;** event management view.* Capabilities to specify:** browse/filter/search users;** inspect user status and temporary flags;** browse/filter/search events;** inspect event ownership, participant counts, active/inactive state, decided_date and deadlines;** any admin remediation or destructive actions currently supported or intentionally excluded.h1. UI / wireframe requirements* Admin IA must define tab or sub-navigation between dashboard, users and events.* Large data sets require searchable/filterable tables or list views.* Destructive admin actions require separate confirmations and audit expectations.h1. Backend / integration requirements* Document admin authorization gate and role claim.* Define admin query endpoints or filters over existing tables.* If admin actions mutate user/event state, document audit requirements.h1. Edge cases and non-functional requirements* Non-admin users must never see or deep-link into admin successfully.* Sensitive user data exposure in admin views must be minimised and documented.h1. Acceptance criteria* Admin surface is sufficiently specified for native/web parity even if some actions are read-only in the first implementation.SYN | Specify admin dashboard, admin-users and admin-events capabilitiesPurposeDefine admin-only operational surfaces.Functional scope- Document admin navigation and list/detail surfaces.UI / interaction requirements- Admin dashboard, users and events views must be restricted.- Admin can inspect health/summary metrics, user details and event details.Wireframe / layout notes- Specify filter sets, sort sets and bulk action boundaries.Backend / platform-neutral technical requirements- Admin APIs require role authorization and audit.State model / edge cases- No data.- Large result sets.Acceptance criteria- Admin module is implementable without web code.",
          "labels": [
            "admin",
            "mobile-spec",
            "operations",
            "story",
            "SYN"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "syncfolk",
        "repository": "syncfolk-webapp-snapshot",
        "label": "documentation-derived baseline"
      },
      "deploymentComment": "Account deletion governance, admin dashboard, admin users and admin events operations."
    },
    {
      "id": "rel-syncfolk-12",
      "version": "web-v0.12.0",
      "status": "current",
      "releaseState": "released",
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
        "supabase",
        "jira",
        "github",
        "vercel"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_platform_contracts_and_telemetry"
      ],
      "releaseNotes": "Cross-cutting product foundation covering domain model, API surface, error handling, analytics catalog and accessibility/localization guidance.",
      "jiraLinks": [
        {
          "key": "SYN-47",
          "summary": "SYN | Specify canonical domain model and persistence boundaries for events, memberships, votes, invites, friendships and notifications",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-47",
          "description": "SYN | Specify canonical domain model and persistence boundaries for events, memberships, votes, invites, friendships and notificationsPurposeDefine the shared domain vocabulary and entity model so every platform and service uses the same object boundaries, identifiers and lifecycle fields.Functional scope- Define entities: User, GuestIdentity, Session, Event, EventMembership, InviteLink, Vote, PersonalAvailabilityVote, FriendRequest/Friendship, Notification, AuditEvent.- For each entity define required fields, optional fields, ownership, timestamps, soft-delete behavior and indexing needs.- Define derived projections such as ranking row, day detail aggregate and unread notification count.UI / interaction requirements- No UI should invent fields not present in the domain model.- Every displayed badge, chip and counter must map to a defined entity field or derived projection.Wireframe / layout notes- Document serialization rules for date/time, nullable fields and enums.Backend / platform-neutral technical requirements- Provide logical entity-relationship diagram notes.- List which screens read/write each entity.State model / edge cases- Clarify what survives account deletion, event deletion and guest upgrade.- Clarify difference between event vote and personal availability vote.Acceptance criteria- All downstream API stories can reference this as the source of truth for entities.",
          "labels": [
            "data-model",
            "mobile-spec",
            "SYN"
          ]
        },
        {
          "key": "SYN-48",
          "summary": "SYN | Specify API contract catalog and error-code taxonomy",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-48",
          "description": "SYN | Specify API contract catalog and error-code taxonomyPurposeDefine the backend contract inventory and a unified error model for all clients.Functional scope- Catalog endpoints/actions with request schema, response schema, auth requirement and side effects.- Define shared error envelope and per-feature business error codes.- Define pagination/sorting conventions and optimistic concurrency rules if any.UI / interaction requirements- Every user action must map to a named command/query.- UI copy and branching must be driven by stable error codes, not raw server text.Wireframe / layout notes- Document transport-agnostic rules so REST, GraphQL or RPC can all implement the same semantics.Backend / platform-neutral technical requirements- Provide reference tables rather than implementation-language-specific stubs.State model / edge cases- Network failure vs business rule failure must be separate.Acceptance criteria- A backend can be reimplemented from the catalog without web client code.",
          "labels": [
            "api",
            "mobile-spec",
            "SYN"
          ]
        },
        {
          "key": "SYN-61",
          "summary": "SYN | Specify analytics event catalog, naming rules and product funnels",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-61",
          "description": "SYN | Specify analytics event catalog, naming rules and product funnelsPurposeDefine all analytics events needed to observe the rebuilt product consistently across platforms.Functional scope- Document event names, required properties, optional properties and privacy constraints.- Define client-side vs server-side event emission ownership.UI / interaction requirements- Every screen view, key CTA, destructive action and recovery path must emit a named analytics event.- Funnel definitions must cover auth conversion, event creation, invite sharing, join success, voting completion and pinning.Wireframe / layout notes- Specify deduplication rules for repeated opens/closes and idempotent events.Backend / platform-neutral technical requirements- Provide funnel tables and event-property dictionaries.State model / edge cases- Guest flows and registered flows must be distinguishable without storing prohibited personal data.Acceptance criteria- Analytics can be reimplemented on any stack with consistent semantics.",
          "labels": [
            "analytics",
            "mobile-spec",
            "SYN"
          ]
        },
        {
          "key": "SYN-62",
          "summary": "SYN | Specify accessibility, localization and content rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-62",
          "description": "SYN | Specify accessibility, localization and content rulesPurposeEnsure the rebuilt product is operable, readable and localizable across platforms.Functional scope- Specify date/time localization strategy, timezone handling and locale fallback.- Specify content length constraints and truncation/wrapping policy.UI / interaction requirements- Define minimum touch targets, focus order, semantics/labels, screen-reader text and dynamic type handling.- Document copy placeholders and localization requirements for all user-facing templates.Wireframe / layout notes- List all hard-coded copy areas that must be localized.Backend / platform-neutral technical requirements- Provide accessibility notes for dialogs, calendars, toggles, chips and notifications.State model / edge cases- Long localized strings, small screens and assistive technologies.Acceptance criteria- Accessibility and localization are first-class implementation requirements, not afterthoughts.",
          "labels": [
            "a11y",
            "i18n",
            "mobile-spec",
            "SYN"
          ]
        },
        {
          "key": "SYN-63",
          "summary": "SYN | Specify security, privacy, audit logging and rate limiting",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-63",
          "description": "SYN | Specify security, privacy, audit logging and rate limitingPurposeDefine cross-cutting protection requirements for identity, invitations, votes and admin operations.Functional scope- Document audit events, retention expectations, abuse limits and rate limiting for auth and sharing endpoints.- Define what participant identity details can be shown in day details and notifications.UI / interaction requirements- Sensitive actions must require authenticated authorization.- User-visible privacy boundaries for guest/registered/admin data exposure must be explicit.Wireframe / layout notes- Specify PII handling, logging redaction and abuse detection hooks.Backend / platform-neutral technical requirements- Provide operation-by-operation security notes.State model / edge cases- Invite abuse, brute-force login, repeated request spam and stale tokens.Acceptance criteria- Security-sensitive behavior can be implemented and reviewed against a written spec.",
          "labels": [
            "mobile-spec",
            "security",
            "SYN"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "syncfolk",
        "repository": "syncfolk-webapp-snapshot",
        "label": "documentation-derived baseline"
      },
      "deploymentComment": "Canonical domain model, API contract catalog, error taxonomy, analytics and accessibility rules."
    },
    {
      "id": "rel-syncfolk-unreleased-01",
      "version": "unreleased-enterprise-mode-foundation",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "mobile-android",
        "mobile-ios",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "jira"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_enterprise_mode_and_workspace"
      ],
      "releaseNotes": "Enterprise workspace shell, navigation separation, registered-only invitation model and high-level governance framing for absence planning.",
      "jiraLinks": [
        {
          "key": "SYN-13",
          "summary": "ENT | Enterprise absence planning and resource governance mode",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-13",
          "description": "h2. Objective

Introduce a dedicated Syncfolk Enterprise mode for vacation and leave planning, separate from the B2C event-voting experience.

h2. Business problem

Many teams still manage leave planning in shared spreadsheets that are hard to govern, impossible to validate consistently, and weak for API-based reporting, capacity planning, and allocation calculations.

h2. Outcome

Provide a secure enterprise leave planning workspace that supports:

* authenticated, email-invited members only
* owner and delegated {{resourceAssistant}} governance
* leave request submission and approval
* blocked days, mandatory leave days, and per-day capacity rules
* role-based minimum staffing and maximum leave thresholds
* reusable templates and batch application of rules
* enterprise exports and API-ready data structures
* notifications, audit trail, and coverage/conflict views

h2. Product boundaries

This epic must produce a dedicated enterprise UX mode, not a cluttered all-in-one hybrid screen. The enterprise space should reuse the Syncfolk calendar strengths where useful, but remove consumer-only constructs such as anonymous participation, share-by-link entry, and voting ranking.

h2. Non-functional expectations

* role-based authorization
* auditability of approvals and rule changes
* scalable daily rule evaluation
* exportability to Excel, XML, and HTML
* future-ready API surface for reporting and resource allocation integrations

h2. Acceptance criteria

* An enterprise mode exists with clearly separated navigation and behavior from B2C event voting.
* Enterprise spaces support only registered, invited members.
* Core leave planning, approval, governance, export, and notification capabilities are covered by child stories.
* The design is suitable for later native mobile implementation without depending on web-specific assumptions.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-14",
          "summary": "ENT | Enterprise mode shell, navigation separation and workspace context",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-14",
          "description": "h2. User story

As an enterprise customer, I want a dedicated leave-planning shell that is clearly separated from consumer event voting so that the product stays focused, governed, and easy to learn.

h2. Functional scope

* add enterprise-specific workspace context
* separate navigation labels, entry points, empty states, and permissions from B2C spaces
* hide consumer-only capabilities in enterprise spaces: anonymous join, magic link participation, voting ranking, social sharing, guest voting flows
* show enterprise-specific modules: team members, approval queue, rule templates, coverage/conflict summary, exports, audit log
* preserve responsive behavior for desktop and mobile

h2. UI expectations

* enterprise spaces must have their own visual cues and terminology
* page header must show workspace name, owner/admin context, and approval/notification affordances
* left-side replacement for voting ranking: {{Coverage & Conflict Summary}}
* summary widget should highlight: pending requests, blocked dates, mandatory leave dates, capacity breaches, role coverage breaches, upcoming approvals

h2. Frontend notes

* reuse calendar primitives where possible
* use feature flags / space type checks to switch components and actions
* avoid mixed-mode UI where B2C and enterprise actions appear together

h2. Backend notes

* introduce space type or workspace mode marker
* enforce server-side capability gating by space type

h2. Acceptance criteria

* Enterprise spaces display enterprise modules only.
* Consumer-only entry methods and actions are unavailable in enterprise spaces.
* Coverage & Conflict Summary replaces the voting ranking area.
* UX remains responsive on desktop and mobile.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-15",
          "summary": "ENT | Registered-only invitation model and enterprise role governance",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-15",
          "description": "h2. User story

As an enterprise workspace owner, I want to invite named users by email and assign controlled roles so that only authenticated members can access and administer leave planning.

h2. Functional scope

* disallow anonymous access, guest flows, and open share links
* require email invitation + registration + authenticated acceptance
* support roles: {{owner}}, {{resourceAssistant}}, {{member}}
* owner can assign or revoke {{resourceAssistant}}
* owner and {{resourceAssistant}} can invite members
* owner remains final authority for workspace administration
* membership status model: invited, active, suspended, removed

h2. Permissions

h3. owner

* manage workspace settings
* invite/remove members
* assign/revoke {{resourceAssistant}}
* configure rules, templates, approvals, exports

h3. resourceAssistant

* manage members operationally
* process approvals
* manage rules, templates, notifications, exports per owner policy
* cannot transfer ownership unless separately specified

h3. member

* submit leave requests
* view own requests and approved team calendar according to visibility rules

h2. Backend notes

* create enterprise membership and role tables / entities
* secure all APIs by workspace membership and role checks
* store invitation token lifecycle and expiry

h2. Acceptance criteria

* Enterprise workspace access requires authenticated membership.
* No link-only or guest entry path exists.
* Owner and resourceAssistant permissions are enforced server-side.
* Invitation, activation, suspension, and removal states are auditable.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "SYN",
        "label": "jira-backed planned scope"
      },
      "deploymentComment": "Dedicated enterprise absence-planning mode, workspace context and registered-only access foundation."
    },
    {
      "id": "rel-syncfolk-unreleased-02",
      "version": "unreleased-enterprise-leave-workflow",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "mobile-android",
        "mobile-ios",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "jira"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_enterprise_leave_workflow"
      ],
      "releaseNotes": "Enterprise leave request lifecycle, approval decisions, substitute approver logic and formal workflow state tables.",
      "jiraLinks": [
        {
          "key": "SYN-16",
          "summary": "ENT | Leave request lifecycle, approval decisions and operational notifications",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-16",
          "description": "h2. User story

As an employee or delegated approver, I want a structured leave request and approval lifecycle so that requests can be submitted, reviewed, approved, rejected, or adjusted with full traceability.

h2. Functional scope

* member submits leave request with start date, end date, leave type, optional note, optional partial-day metadata
* request states: draft, submitted, pending approval, approved, rejected, cancelled, auto-rejected, expired
* owner/resourceAssistant can approve, reject, or create requests on behalf of members
* optional reason required on rejection or admin override
* notifications to requester and approvers for create/update/approve/reject/cancel events
* prevent approvals when blocking rules or capacity rules fail

h2. UX expectations

* request form must surface balance, conflicts, blocked days, and policy warnings before submission
* approval queue must support filters by status, user, date range, team, role, and workspace
* day detail view must show approved, pending, and rejected items based on permission

h2. Backend notes

* persist request history and approval actions as immutable audit events
* evaluate rule engine before final approval
* support admin-created requests with actor attribution

h2. Acceptance criteria

* Full request lifecycle is available to enterprise users.
* Approvers receive actionable notifications.
* Approval decisions are blocked when rules fail.
* Every state transition is auditable with actor and timestamp.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-152",
          "summary": "ENT | Approval chain, substitute approver and escalation rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-152",
          "description": "Enterprise approval chain, substitute approver, and escalation rules.

Scope:

* configure one-step or multi-step approval chains
* define substitute approvers for owner and resourceAssistant
* configure escalation when requests stay unanswered too long
* notify each actor at the correct stage
* preserve final decision trace and acting user identity

Acceptance criteria:

* Enterprise workspaces support configurable approval chains.
* Substitute approvers can act when the primary approver is unavailable.
* Escalation rules notify the right users and keep audit history.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-166",
          "summary": "ENT | Enterprise workflow state tables",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-166",
          "description": "Workflow state specification for enterprise leave planning.

Scope:

* define request states and decision states
* define allowed moves between states
* define which role can trigger each move
* define validation checks and notification side effects for each move
* define cancellation, expiry, and override flows

Acceptance criteria:

* Workflow states are documented in an implementation-ready way.
* Role permissions and side effects are explicit.
* Engineers can implement deterministic workflow logic from this story.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-177",
          "summary": "ENT | Define enterprise workspace bootstrap endpoint and payload",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-177",
          "description": "Subtask under the API catalog story.

Deliverables:

* request and response contract for enterprise workspace bootstrap
* included objects: workspace, current membership, role, settings summary, visible modules, notification counters
* error behavior for no-access and suspended membership

Acceptance criteria:

* Mobile and web clients can load enterprise mode from this contract.
* Bootstrap payload is versionable and role-aware.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-178",
          "summary": "ENT | Define leave request and approval endpoints with example payloads",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-178",
          "description": "Subtask under the API catalog story.

Deliverables:

* endpoint contracts for create request, update request, cancel request, approve, reject, and admin override
* required fields, enums, examples, and validation errors
* idempotency and conflict behavior

Acceptance criteria:

* Engineers can implement request/decision APIs from this subtask.
* Error codes and transition side effects are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "SYN",
        "label": "jira-backed planned scope"
      },
      "deploymentComment": "Leave request submission, approvals, escalations and workflow state tables."
    },
    {
      "id": "rel-syncfolk-unreleased-03",
      "version": "unreleased-enterprise-rules-coverage",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "mobile-android",
        "mobile-ios",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "jira"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_enterprise_rules_coverage_templates"
      ],
      "releaseNotes": "Calendar governance rules, staffing coverage, reusable rule templates and summary/risk panels for enterprise planning.",
      "jiraLinks": [
        {
          "key": "SYN-17",
          "summary": "ENT | Calendar governance rules for blocked dates, company leave days and daily capacity",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-17",
          "description": "h2. User story

As an owner or resourceAssistant, I want to define day-level governance rules so that leave planning respects business shutdowns, company leave days, and overall daily capacity.

h2. Functional scope

* mark dates or ranges as blocked for leave requests
* mark dates or ranges as company leave days
* define maximum people allowed off on a given day
* support single-day, date-range, and batch rule application
* surface rule breaches in request and approval flows

h2. Rule behavior

* blocked date: members cannot submit or receive approval for leave on that date
* company leave date: the date is marked with a dedicated enterprise flag and displayed clearly in calendar and exports
* max-off rule: request or approval fails when the configured threshold is exceeded

h2. Data and UI notes

* rules need effective dates, scope, creator, modifier, and audit history
* calendar day cells and side panels should show active enterprise flags
* batch tooling must allow rule copy/apply across multiple dates

h2. Acceptance criteria

* Owner/resourceAssistant can configure blocked dates, company leave dates, and max-off limits.
* The rule engine prevents invalid requests and approvals.
* Rules are visible in enterprise calendar UX and exports.
* Batch application is supported.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-18",
          "summary": "ENT | Role-based staffing coverage rules, reusable templates and batch application",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-18",
          "description": "h2. User story

As an owner or resourceAssistant, I want to define staffing constraints by role so that leave decisions preserve minimum operational coverage.

h2. Functional scope

* define enterprise roles / job families inside the workspace (examples: Business Analyst, QA, Lead Developer, Senior Developer, Project Manager)
* assign one or more roles to members based on chosen domain model
* configure per-day or date-range rules by role:
** maximum people off for a role
** minimum people required working for a role
* save rule sets as reusable templates
* apply templates in batch to multiple dates
* allow template versioning and clear effective date visibility

h2. Business rules

* rule conflicts must be validated before save
* leave request evaluation must consider both global capacity and role-based coverage rules
* template application must be previewable before commit

h2. UI expectations

* dedicated rule builder
* batch apply interaction with selected dates and template preview
* conflict messages must explain which role constraint failed

h2. Acceptance criteria

* Enterprise admins can define roles, assign members, create staffing rules, save templates, and apply them in batch.
* Requests and approvals fail with clear reasons when a role threshold would be breached.
* Template application is auditable.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-20",
          "summary": "ENT | Coverage and Conflict Summary panel replacing consumer ranking",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-20",
          "description": "h2. User story

As an enterprise owner, resourceAssistant, or approver, I want a Coverage & Conflict Summary panel instead of a voting ranking so that I can immediately see operational risks and pending work.

h2. Functional scope

* replace the B2C ranking panel with an enterprise summary panel
* show counts for pending leave approvals, blocked dates in the visible range, company leave dates in the visible range, days exceeding max-off limits, days violating role coverage rules, and upcoming requests that need attention
* support filters for workspace, month, team, role, and request status
* clicking a summary item opens the corresponding filtered detail list or focuses the affected dates in calendar view
* show warning severity levels: informational, warning, blocking

h2. UI expectations

* compact card layout on desktop sidebar
* collapsible summary tray on mobile
* each metric card must include count, short label, status color, and optional next-action shortcut
* empty states should be explicit: no pending approvals, no conflicts, no blocked dates this month

h2. Backend notes

* requires pre-aggregated daily conflict data or performant on-demand calculation
* summary queries must respect workspace visibility and role permissions

h2. Acceptance criteria

* Enterprise spaces no longer show consumer vote ranking.
* Coverage & Conflict Summary is available on desktop and mobile.
* Every summary card can drill into actionable data.
* Counts match underlying calendar, rules, and request data.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-153",
          "summary": "ENT | Conflict engine and validation messages for request submission",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-153",
          "description": "Conflict engine and validation messages for enterprise request submission.

Scope:

* evaluate blocked dates, company leave dates, daily max-off limits, role coverage limits, holiday calendars, and work patterns before save or approval
* classify conflicts as warning or blocking
* return human-readable reasons and machine-readable codes
* keep validation consistent across web, mobile, export, and API use cases

Acceptance criteria:

* Users see clear reasons when a request cannot proceed.
* Validation results are consistent across all clients.
* Engineers have stable error codes for integrations and automation.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-162",
          "summary": "ENT | Rule template library and version handling",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-162",
          "description": "Enterprise rule template library.

Scope:

* save reusable templates for blocked dates, company leave dates, max-off rules, and role-based coverage rules
* support create, edit, duplicate, archive, and version handling for templates
* show a preview before applying a template to selected dates
* validate conflicts before applying a template
* define template ownership and visibility inside a workspace

Acceptance criteria:

* Enterprise admins can save and reuse rule templates.
* Template apply flow includes preview and validation.
* Version handling is documented for implementation.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "SYN",
        "label": "jira-backed planned scope"
      },
      "deploymentComment": "Blocked dates, daily capacity, staffing coverage rules, reusable templates and conflict summarization."
    },
    {
      "id": "rel-syncfolk-unreleased-04",
      "version": "unreleased-enterprise-approval-day-detail",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "mobile-android",
        "mobile-ios",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "jira"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_enterprise_approval_and_day_detail"
      ],
      "releaseNotes": "Approval worklists and enterprise day-detail views with request statuses, rule impacts and operational actions.",
      "jiraLinks": [
        {
          "key": "SYN-21",
          "summary": "ENT | Approval queue and leave request worklist",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-21",
          "description": "Enterprise approval queue for leave requests.

Scope:

* pending approval list
* filters by user, date range, role, team, status
* approve, reject, cancel, and admin-create actions
* clear reason display when a request conflicts with rules

Acceptance criteria:

* Approvers can process requests from one worklist.
* Conflicts are visible before decision.
* Actions are audited.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-23",
          "summary": "ENT | Enterprise calendar day details and request statuses",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-23",
          "description": "Enterprise day detail and status display.

Scope:

* open any calendar day and show approved, pending, rejected, and blocked information based on permission
* show company leave markers, blocked markers, and capacity warnings in day detail
* show role coverage impact for the day
* allow approvers to navigate from day detail to request review

Acceptance criteria:

* Day detail is available on desktop and mobile.
* Enterprise day detail shows status-based information instead of vote information.
* Day detail links to approval and conflict workflows.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-149",
          "summary": "ENT | Approval inbox, filters and bulk decisions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-149",
          "description": "Duplicate of SYN-150. Keep SYN-150 as the active approval inbox story unless later consolidation chooses the other item.",
          "labels": [
            "DUPLICATE",
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-150",
          "summary": "ENT | Approval inbox, filters and bulk decisions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-150",
          "description": "Approval worklist for enterprise leave requests.

Scope:

* show pending, approved, rejected, cancelled, and expired requests in one admin inbox
* filters by requester, team, role, date range, request type, and status
* approve, reject, and comment from list and detail views
* support bulk actions for low-risk cases where policy allows
* show conflict reasons before final decision

Acceptance criteria:

* Owner and resourceAssistant can process requests from one inbox.
* Filters are available on desktop and mobile.
* Bulk decision flow is guarded and auditable.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-164",
          "summary": "ENT | Calendar cell states, legends and enterprise visual rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-164",
          "description": "Enterprise calendar visual specification.

Scope:

* define day-cell states for normal working day, approved leave, pending leave, rejected request, blocked date, company leave date, capacity risk, role coverage risk, public holiday, weekend, and today
* define legends, badges, icons, and color usage for enterprise mode
* define hover, tap, long-press, and detail-open behavior on desktop and mobile
* define what information is visible in collapsed day cells versus day detail views

Acceptance criteria:

* Enterprise calendar day states are explicitly documented.
* Visual rules are consistent across desktop and mobile.
* Engineers and designers can implement enterprise calendar rendering from this story.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "SYN",
        "label": "jira-backed planned scope"
      },
      "deploymentComment": "Approval queue, bulk decisions, conflict reasoning and enterprise day-detail status panels."
    },
    {
      "id": "rel-syncfolk-unreleased-05",
      "version": "unreleased-enterprise-directory-settings",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "mobile-android",
        "mobile-ios",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "jira"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_enterprise_directory_roles_settings"
      ],
      "releaseNotes": "Organization model, directory management, role assignment, visibility control and workspace/localization settings for enterprise planning.",
      "jiraLinks": [
        {
          "key": "SYN-22",
          "summary": "ENT | Workspace member management and role setup",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-22",
          "description": "Workspace member management for enterprise mode.

Scope:

* list invited and active users
* assign owner, resourceAssistant, and member roles
* assign business roles for coverage rules
* search and filter users by status and role
* show invitation state and access state

Acceptance criteria:

* Admins can manage enterprise users and roles.
* Role changes are saved and visible in the workspace.
* Access is based on assigned role.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-151",
          "summary": "ENT | Leave types, holidays and work pattern configuration",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-151",
          "description": "Enterprise configuration for leave types, holidays, and work patterns.

Scope:

* define leave types such as vacation, sick leave, unpaid leave, and custom leave types
* configure public holidays per workspace or location profile
* configure working patterns and partial-day options
* use these settings during request validation, calendar display, and exports

Acceptance criteria:

* Admins can manage leave types, holidays, and work patterns.
* Validation uses configured values consistently.
* Calendar and export outputs reflect configuration.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-163",
          "summary": "ENT | Team, location and holiday profile setup",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-163",
          "description": "Enterprise organization setup.

Scope:

* define team and location attributes for members
* assign holiday profiles by location or workspace setting
* allow filtering by team and location in calendar, approval, export, and reporting views
* allow staffing rules to use team and location filters where required

Acceptance criteria:

* Enterprise workspaces can group members by team and location.
* Holiday profile assignment is documented.
* Filtering and reporting can use these attributes consistently.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-165",
          "summary": "ENT | Workspace settings and locale configuration",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-165",
          "description": "Enterprise workspace settings.

Scope:

* define settings for timezone, locale, weekday display, date format, and holiday profile default
* define how settings influence calendar display, exports, notifications, and request validation
* define which roles can edit settings
* define default values for newly created enterprise workspaces

Acceptance criteria:

* Enterprise workspace settings are documented.
* Calendar, export, and request behavior reflects configured settings.
* Default values and edit permissions are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-168",
          "summary": "ENT | Field-level data model and entity relationship specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-168",
          "description": "Field-level domain model specification for enterprise leave planning.

Scope:

* define every core entity and its fields: enterprise workspace, membership, invitation, workspace role assignment, business role assignment, team, location, holiday profile, leave type, working pattern, leave request, request day item if needed, approval decision, daily rule, role coverage rule, template, template version, notification, audit event, export job, import job
* define data types, nullability, uniqueness, defaults, allowed values, and lifecycle expectations for each field
* define relationships and cardinality between entities
* define soft-delete, archive, and history-preservation rules where relevant
* define canonical naming separate from localized display labels
* define derived fields and aggregation fields versus stored fields

Acceptance criteria:

* Engineers can build enterprise persistence and DTO models from this story.
* Relationship and lifecycle rules are explicit.
* Reporting, API, and export features use the same canonical entity model.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-170",
          "summary": "ENT | Permission matrix by role, action and data visibility",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-170",
          "description": "Tabular permission specification for enterprise leave planning.

Scope:

* define a complete matrix of actions versus roles: owner, resourceAssistant, member, invited user, suspended user, removed user, and optional future read-only role
* include actions for workspace settings, member invite, role assignment, request create, request edit, request cancel, request approve, request reject, admin override, rule create and edit, template create and apply, export, import, notification view, audit view, and reporting view
* define which data is visible by role in calendar cells, day details, approval views, exports, and reports
* define row-level and field-level visibility where needed
* define inheritance and override rules if multiple roles or scopes exist in the future

Acceptance criteria:

* Every enterprise action has an explicit permission rule.
* Visibility of sensitive leave information is documented by role.
* Engineers can implement access control from this matrix without guessing.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-180",
          "summary": "ENT | Define core enterprise entities and field constraints",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-180",
          "description": "Subtask under the field-level data model story.

Deliverables:

* field catalog for workspace, membership, invitation, leave request, approval decision, daily rule, template, notification, audit event, export job, import job
* data types, nullability, defaults, uniqueness, and enum values

Acceptance criteria:

* Persistence and DTO models can be built from this subtask.
* Field constraints are explicit and testable.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-181",
          "summary": "ENT | Define entity relationships, history preservation and derived fields",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-181",
          "description": "Subtask under the field-level data model story.

Deliverables:

* relationship map and cardinality rules
* soft-delete, archive, and history-preservation rules
* derived versus stored fields and aggregation ownership

Acceptance criteria:

* Engineers can implement entity relationships without ambiguity.
* Historical accuracy rules are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-183",
          "summary": "ENT | Define action-by-role permission matrix for enterprise workflows",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-183",
          "description": "Subtask under the permission matrix story.

Deliverables:

* matrix for owner, resourceAssistant, member, invited, suspended, removed, and optional read-only roles
* actions: invite, assign role, submit request, edit request, cancel request, approve, reject, override, manage rules, apply templates, export, import, view audit, view reporting

Acceptance criteria:

* Engineers can implement role-based access control from this subtask.
* No enterprise action remains undocumented by role.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-184",
          "summary": "ENT | Define visibility rules for calendar cells, day details and exports",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-184",
          "description": "Subtask under the permission matrix story.

Deliverables:

* field-level and row-level visibility rules for calendar cells, day details, approval views, exports, and reports
* peer versus admin visibility rules for sensitive leave information

Acceptance criteria:

* Sensitive leave information visibility is explicitly documented.
* Export and report visibility follows the same rules where required.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "SYN",
        "label": "jira-backed planned scope"
      },
      "deploymentComment": "Workspace members, business roles, visibility control, holiday profiles, locale and timezone settings."
    },
    {
      "id": "rel-syncfolk-unreleased-06",
      "version": "unreleased-enterprise-reporting-api",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "mobile-android",
        "mobile-ios",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "jira"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_enterprise_export_reporting_api"
      ],
      "releaseNotes": "Enterprise export formats, reporting dashboard, staffing analytics and API endpoint catalog for downstream BI and HR integrations.",
      "jiraLinks": [
        {
          "key": "SYN-19",
          "summary": "ENT | Enterprise exports, reporting dataset and integration-ready API surface",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-19",
          "description": "h2. User story

As an enterprise administrator, I want exportable and API-ready leave data so that the workspace can feed reporting, allocation calculations, and downstream HR or BI processes.

h2. Functional scope

* export leave calendar data to Excel, XML, and HTML
* required export columns:
** calendar date
** weekday name
** names of people on leave for the day
** count of people planned off for the day
* support date range, team, role, and workspace filters
* provide machine-consumable API endpoints for approved requests, pending requests, rules, role coverage, and daily aggregates
* design payloads so mobile apps and future integrations can reuse the same contract

h2. Technical expectations

* stable IDs and timestamps in export/API outputs
* locale-safe date formatting strategy
* explicit separation between display fields and canonical fields
* authorization checks on export and API scope
* audit who exported what and when

h2. Acceptance criteria

* Admins can export Excel, XML, and HTML outputs with the required fields.
* APIs expose normalized enterprise leave planning data for reporting and allocation use cases.
* Export and API access are permission-controlled and auditable.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-157",
          "summary": "ENT | Reporting dashboard, staffing analytics and allocation signals",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-157",
          "description": "Reporting dashboard, staffing analytics, and allocation signals for enterprise mode.

Scope:

* show leave trends, approval throughput, blocked-date usage, company leave usage, max-off breaches, and role coverage risk over time
* provide team, role, and date filters
* expose daily and weekly allocation risk indicators for managers
* support drill-down from chart to affected dates and requests

Acceptance criteria:

* Enterprise users can analyze leave and staffing patterns without exporting first.
* Analytics align with exported and API data.
* Managers can identify upcoming coverage risks from the dashboard.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-161",
          "summary": "ENT | Export schema, filters and scheduled delivery specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-161",
          "description": "Enterprise export specification.

Scope:

* define export formats: Excel, XML, HTML
* define mandatory exported fields: calendar date, weekday name, names of people on leave, count of people planned off
* define optional fields for enterprise use: request status, leave type, team, role, approver, blocked or company-leave flags, coverage status
* define filter options by date range, workspace, team, role, member, request status
* define manual export and scheduled export behavior
* define file naming, locale handling, timezone handling, and access permissions

Acceptance criteria:

* Required export fields are documented in a stable schema.
* Optional enterprise filters and metadata are documented.
* Engineers can implement export generation and delivery from this story.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-167",
          "summary": "ENT | API endpoint catalog with request and response payload definitions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-167",
          "description": "Implementation-level API specification for enterprise leave planning.

Scope:

* define endpoint catalog for enterprise workspace bootstrap, member list, invitation send and accept, role assignment, leave request create/update/cancel, approval decision, rule create/update/delete, template create/apply, summary retrieval, export create/download, import upload/validate/commit, notifications fetch/mark read, audit log fetch, and settings update
* define request payload fields, required versus optional fields, enums, validation rules, and example payloads
* define response payload fields, pagination model, timestamps, IDs, nested entities, and partial-success behavior where relevant
* define error response structure with stable machine-readable codes and human-readable messages
* define idempotency expectations for retriable operations
* define authentication and authorization expectations per endpoint

Acceptance criteria:

* Engineers can implement enterprise APIs endpoint by endpoint from this story.
* Web and mobile clients can rely on the same payload definitions.
* Error and pagination behavior are explicit and testable.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-173",
          "summary": "ENT | Reporting KPI definitions and dashboard widget catalog",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-173",
          "description": "Implementation-level reporting specification for enterprise mode.

Scope:

* define KPI catalog for approval throughput, average approval time, pending approvals, approved days by period, rejected requests by period, blocked-day usage, company leave usage, max-off breaches, role coverage breaches, short-staffed upcoming days, leave by team, leave by role, and leave by user
* define each dashboard widget: title, metric source, aggregation logic, filters, drill-through target, empty state, and refresh expectations
* define default dashboard layout for desktop and mobile enterprise views
* define time windows and comparison modes: current month, next 30 days, quarter, custom range, previous period comparison where applicable
* define exportability of dashboard data and alignment with API aggregates

Acceptance criteria:

* Reporting KPIs are documented with unambiguous formulas.
* Widget behavior is documented screen by screen.
* Managers can rely on dashboard metrics matching export and API data.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-179",
          "summary": "ENT | Define export, import and notification endpoints",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-179",
          "description": "Subtask under the API catalog story.

Deliverables:

* endpoint contracts for export create/download, import upload/validate/commit, notifications list/mark read
* async job handling and status fields where applicable
* pagination and filtering model

Acceptance criteria:

* Engineers can implement enterprise export/import/notification APIs from this subtask.
* Async and pagination behavior are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-185",
          "summary": "ENT | Define KPI formulas and drill-through behavior for reporting widgets",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-185",
          "description": "Subtask under the reporting KPI story.

Deliverables:

* formulas and aggregation logic for approval throughput, avg approval time, pending approvals, blocked-date usage, company leave usage, max-off breaches, role coverage breaches, short-staffed upcoming days, leave by team, leave by role, leave by user
* drill-through destinations and filter inheritance rules

Acceptance criteria:

* KPIs are reproducible from API/export data.
* Drill-through behavior is explicit and testable.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "SYN",
        "label": "jira-backed planned scope"
      },
      "deploymentComment": "Export schema, reporting dashboards, KPI widgets and integration-ready API outputs."
    },
    {
      "id": "rel-syncfolk-unreleased-07",
      "version": "unreleased-enterprise-import-migration",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "mobile-android",
        "mobile-ios",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "jira"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_enterprise_import_migration"
      ],
      "releaseNotes": "Import and migration pipeline from spreadsheet-based planning into enterprise Syncfolk with validation and error reporting.",
      "jiraLinks": [
        {
          "key": "SYN-158",
          "summary": "ENT | Spreadsheet import and migration from shared leave trackers",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-158",
          "description": "Spreadsheet import and migration from shared leave trackers.

Scope:

* import leave-planning source data from spreadsheet uploads
* map imported columns to enterprise entities such as member, date, leave type, status, and comment
* validate imported data before commit
* provide error report for rejected rows
* support migration from shared spreadsheet processes into enterprise workspace data

Acceptance criteria:

* Admins can migrate spreadsheet-based leave planning into the enterprise workspace.
* Invalid rows are reported clearly.
* Imported data becomes available in calendar, approval, export, and reporting flows.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-172",
          "summary": "ENT | Spreadsheet import field mapping, validation and error report catalog",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-172",
          "description": "Implementation-level import specification for enterprise leave planning.

Scope:

* define supported spreadsheet column mappings for member identity, email, date, date range, leave type, request status, comment, role, team, and location where applicable
* define import modes: dry-run validation, partial accept, full commit
* define row-level validation rules, duplicate detection rules, unknown member handling, unknown leave type handling, and date parsing rules
* define import error catalog with stable error codes and human-readable remediation text
* define generated import summary fields: total rows, accepted rows, rejected rows, warnings, created entities, updated entities
* define downloadable error report structure for failed rows

Acceptance criteria:

* Engineers can implement spreadsheet import without guessing column semantics.
* Validation and error handling are documented consistently.
* Admins receive actionable feedback for failed imports.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-186",
          "summary": "ENT | Define spreadsheet import mappings and row-level validation rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-186",
          "description": "Subtask under the spreadsheet import story.

Deliverables:

* supported column mappings for member identity, email, date/date range, leave type, status, comment, role, team, location
* row-level validation rules and duplicate detection
* unknown member and unknown leave type behavior

Acceptance criteria:

* Engineers can implement spreadsheet import validation from this subtask.
* Column semantics are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-187",
          "summary": "ENT | Define spreadsheet import mappings and row-level validation rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-187",
          "description": "Subtask under the spreadsheet import story.

Deliverables:

* supported column mappings for member identity, email, date/date range, leave type, status, comment, role, team, location
* row-level validation rules and duplicate detection
* unknown member and unknown leave type behavior

Acceptance criteria:

* Engineers can implement spreadsheet import validation from this subtask.
* Column semantics are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "SYN",
        "label": "jira-backed planned scope"
      },
      "deploymentComment": "Spreadsheet upload, field mapping, validation and migration from shared leave trackers."
    },
    {
      "id": "rel-syncfolk-unreleased-08",
      "version": "unreleased-enterprise-notifications-audit-security",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "mobile-android",
        "mobile-ios",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "jira",
        "email-social-share"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_enterprise_notifications_audit_security"
      ],
      "releaseNotes": "Notification event rules, immutable audit history, retention expectations and security/privacy governance for enterprise leave data.",
      "jiraLinks": [
        {
          "key": "SYN-159",
          "summary": "ENT | Notification rules for enterprise leave planning",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-159",
          "description": "Define enterprise notification rules.

Scope:

* list notification events for invitations, leave request actions, approvals, rejections, escalations, rule conflicts, imports, exports, and membership changes
* define recipients for each event
* define unread and read behavior
* define badge count and ordering rules
* define desktop and mobile notification panel behavior

Acceptance criteria:

* Enterprise notification rules are documented.
* Read and unread behavior is explicit.
* Engineers can implement notifications consistently.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-160",
          "summary": "ENT | Audit log, retention rules and compliance-ready history",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-160",
          "description": "Enterprise audit and retention specification.

Scope:

* define which actions generate immutable audit events: invitation, role change, request create/update/cancel, approval, rejection, escalation, rule change, template apply, export, import, membership removal, admin override
* define audit event fields: actor, affected user, workspace, affected dates, previous state, new state, timestamp, reason, source screen or API
* define retention expectations for operational history and audit history
* define search and filter behavior for audit review
* define which users can view audit history

Acceptance criteria:

* Important enterprise actions are captured in audit history.
* Audit history can be filtered and reviewed by authorized users.
* Retention expectations are documented for implementation and policy alignment.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-171",
          "summary": "ENT | Notification event matrix, recipients and payload rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-171",
          "description": "Tabular notification specification for enterprise leave planning.

Scope:

* define event-by-event notification matrix covering invitation, invitation accepted, request submitted, request changed, request approved, request rejected, request cancelled, request expired, approval escalation, blocked-date conflict, max-off conflict, role coverage conflict, rule changed, template applied, export finished, import finished, membership changed, and admin override
* define recipients for each event and delivery expectations for in-app and email
* define unread, read, dismissed, and badge-count behavior
* define sort order, grouping, and duplicate-suppression rules
* define payload fields needed for notification cards, email templates, and drill-through navigation
* define visibility rules for who can see which notifications in shared enterprise contexts

Acceptance criteria:

* Enterprise notification behavior is documented as a matrix rather than scattered rules.
* Recipient, payload, and unread behavior are explicit.
* Engineers and QA can verify notification behavior against a single source of truth.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-176",
          "summary": "ENT | Security and privacy rules for enterprise leave data",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-176",
          "description": "Enterprise security and privacy rules.

Scope:

* define handling rules for leave data, approval notes, exported files, and notification content
* define session expectations and re-check points for sensitive admin actions
* define least-privilege rules for owner, resourceAssistant, and member roles
* define export visibility and API access expectations
* define limited-visibility options for sensitive leave data in shared calendar views
* define import and export file access rules

Acceptance criteria:

* Enterprise leave data handling rules are documented.
* Security expectations align with role permissions and export behavior.
* Engineers have explicit guidance for privacy-sensitive flows.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "SYN",
        "label": "jira-backed planned scope"
      },
      "deploymentComment": "Enterprise notification matrix, audit history, privacy and compliance rules."
    },
    {
      "id": "rel-syncfolk-unreleased-09",
      "version": "unreleased-enterprise-qa-parity",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "mobile-android",
        "mobile-ios",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "jira"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_enterprise_qa_wireframes_and_mobile_parity"
      ],
      "releaseNotes": "Implementation-ready enterprise design and QA scaffolding, including wireframes, acceptance matrix and native/mobile parity expectations.",
      "jiraLinks": [
        {
          "key": "SYN-156",
          "summary": "ENT | Enterprise wireframes and responsive screen specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-156",
          "description": "Enterprise wireframes and responsive screen specification.

Scope:

* define screen-by-screen layouts for desktop and mobile
* define the enterprise workspace shell, approval inbox, member directory, rule editor, calendar, exports, and summary panel
* define modal, drawer, and inline action behavior
* define empty, loading, error, and no-permission states

Acceptance criteria:

* Designers and engineers can implement enterprise screens without reverse-engineering the consumer webapp.
* Desktop and mobile variants are both documented.
* Key interactions are described at wireframe level.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-169",
          "summary": "ENT | Screen-by-screen wireframe appendix for desktop and mobile",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-169",
          "description": "Screen-level UX and wireframe appendix for enterprise leave planning.

Scope:

* define each enterprise screen and sub-screen with named sections, components, actions, and visible data blocks
* include desktop and mobile variants for: workspace home, enterprise calendar view, coverage and conflict summary, approval inbox, day detail, request form, member directory, rule editor, template library, export center, import flow, audit log, notifications panel, settings screen
* define navigation entry points, back behavior, modal versus full-screen behavior, sheet versus drawer behavior, and destructive-action confirmations
* define loading, empty, error, no-data, and no-permission states for every screen
* define screen-to-screen transitions and deep-link landing behavior where relevant

Acceptance criteria:

* Designers and engineers can build the enterprise interface screen by screen from this story.
* Desktop and mobile layouts are both covered.
* Critical edge states are documented rather than left implicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-174",
          "summary": "ENT | Enterprise acceptance scenarios and QA matrix",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-174",
          "description": "Enterprise acceptance and QA specification.

Scope:

* define end-to-end scenarios for owner, resourceAssistant, member, invited user, suspended user, and removed user
* cover invitation, registration, request submission, approval, rejection, cancellation, escalation, rule conflicts, template application, export, import, notifications, and audit history
* define expected behavior for web, Android, and iPhone for the same business flows
* define example workspace and test-data setups for validation

Acceptance criteria:

* QA and engineers can validate enterprise mode from one scenario catalog.
* Role-based and rule-based flows are covered by explicit scenarios.
* Cross-platform expected behavior is documented for the same business flow.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-175",
          "summary": "ENT | Mobile parity, responsive behavior and offline-friendly enterprise flows",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-175",
          "description": "Enterprise mobile and responsive specification.

Scope:

* define which enterprise workflows must behave identically on web, Android, and iPhone
* define responsive layout priorities for approval inbox, day detail, request form, summary panel, rule editor, notifications, and exports
* define offline-tolerant and retry behavior for non-destructive actions such as draft request editing and queued fetch refresh
* define what actions require online validation and what data can be cached for read-only access
* define conflict handling when stale mobile data meets newer server-side rules

Acceptance criteria:

* Enterprise workflows have explicit mobile parity expectations.
* Responsive and offline-friendly behavior is documented where needed.
* Engineers can implement mobile clients without inventing platform-specific business behavior.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-182",
          "summary": "ENT | Define desktop and mobile screen sections for enterprise workspace",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-182",
          "description": "Subtask under the wireframe appendix story.

Deliverables:

* section-by-section breakdown for workspace home, calendar, summary panel, approval inbox, request form, member directory, rule editor, export center, notifications, settings
* desktop and mobile variants

Acceptance criteria:

* Designers and engineers can build named screen sections from this subtask.
* Responsive priorities are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-188",
          "summary": "ENT | Define enterprise QA scenario sets and regression-critical flows",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-188",
          "description": "Subtask under the enterprise acceptance scenarios story.

Deliverables:

* scenario sets for invitation, registration, request create/update/cancel, approve/reject, escalation, rule conflict, template application, export, import, notifications, audit review
* regression-critical scenarios for releases
* cross-platform expected results for web, Android, iPhone

Acceptance criteria:

* QA can execute enterprise regression from this subtask.
* Cross-platform business expectations are aligned.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-189",
          "summary": "ENT | Define enterprise acceptance scenarios by role and critical flow",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-189",
          "description": "Subtask under the enterprise QA matrix story.

Deliverables:

* acceptance scenarios for owner, resourceAssistant, member, invited, suspended, and removed users
* role-based normal, edge, and negative flows for invitation, request, approval, conflict, export, import, notifications

Acceptance criteria:

* QA can validate enterprise behavior from these scenarios.
* Cross-role coverage is explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-190",
          "summary": "ENT | Define mobile parity and offline-tolerant behavior for enterprise flows",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-190",
          "description": "Subtask under the mobile parity story.

Deliverables:

* parity expectations for web, Android, and iPhone across approval inbox, day detail, request form, summary panel, notifications, settings
* offline-tolerant read-only and retry behavior for safe actions
* stale-data conflict handling rules

Acceptance criteria:

* Mobile clients can implement the same business behavior as web.
* Offline and retry behavior are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-191",
          "summary": "ENT | Define mobile parity rules and offline-safe enterprise actions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-191",
          "description": "Subtask under the mobile parity story.

Deliverables:

* parity rules for approval inbox, day detail, request form, summary panel, notifications, settings
* offline-safe versus online-required actions
* stale-data conflict handling rules for mobile clients

Acceptance criteria:

* Mobile teams can implement enterprise behavior without web-only assumptions.
* Offline and retry behavior is explicit where supported.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-192",
          "summary": "ENT | Define mobile parity and offline-tolerant behavior for enterprise flows",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-192",
          "description": "Subtask under the mobile parity story.

Deliverables:

* parity expectations for web, Android, and iPhone across approval inbox, day detail, request form, summary panel, notifications, settings
* offline-tolerant read-only and retry behavior for safe actions
* stale-data conflict handling rules

Acceptance criteria:

* Mobile clients can implement the same business behavior as web.
* Offline and retry behavior are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "SYN",
        "label": "jira-backed planned scope"
      },
      "deploymentComment": "Enterprise wireframes, acceptance scenarios, responsive behavior and offline-tolerant mobile parity."
    },
    {
      "id": "rel-syncfolk-unreleased-10",
      "version": "unreleased-enterprise-contracts",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "mobile-android",
        "mobile-ios",
        "backend",
        "shared-contract"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "jira"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_enterprise_foundation_contracts"
      ],
      "releaseNotes": "Formal enterprise entity model, permission matrix, visibility rules and API contracts that enable future runtime implementation across web and native clients.",
      "jiraLinks": [
        {
          "key": "SYN-154",
          "summary": "ENT | Data model and API contract specification for enterprise leave planning",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-154",
          "description": "Data model and API contract specification for enterprise leave planning.

Scope:

* define core entities: workspace, membership, role, business role, leave request, request decision, daily rule, template, export job, notification, audit event
* define IDs, timestamps, status enums, and relation rules
* define API contracts for create, update, approve, reject, cancel, list, export, and summary operations
* define canonical field names separate from display labels

Acceptance criteria:

* Engineers can implement enterprise APIs from the documented contracts.
* Mobile and web clients can share the same payload definitions.
* Reporting and export features use the same canonical data model.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-155",
          "summary": "ENT | Permission matrix and visibility rules for enterprise calendars",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-155",
          "description": "Permission matrix and visibility rules for enterprise calendars.

Scope:

* define what owner, resourceAssistant, member, and future read-only roles can see and do
* define which leave details are visible to peers, managers, and admins
* define export and API access permissions
* define behavior for suspended, removed, and invited users

Acceptance criteria:

* All enterprise actions have an explicit role-based permission rule.
* Visibility of leave details is documented and enforceable.
* Engineers can implement server-side access control from this story.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-166",
          "summary": "ENT | Enterprise workflow state tables",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-166",
          "description": "Workflow state specification for enterprise leave planning.

Scope:

* define request states and decision states
* define allowed moves between states
* define which role can trigger each move
* define validation checks and notification side effects for each move
* define cancellation, expiry, and override flows

Acceptance criteria:

* Workflow states are documented in an implementation-ready way.
* Role permissions and side effects are explicit.
* Engineers can implement deterministic workflow logic from this story.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-167",
          "summary": "ENT | API endpoint catalog with request and response payload definitions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-167",
          "description": "Implementation-level API specification for enterprise leave planning.

Scope:

* define endpoint catalog for enterprise workspace bootstrap, member list, invitation send and accept, role assignment, leave request create/update/cancel, approval decision, rule create/update/delete, template create/apply, summary retrieval, export create/download, import upload/validate/commit, notifications fetch/mark read, audit log fetch, and settings update
* define request payload fields, required versus optional fields, enums, validation rules, and example payloads
* define response payload fields, pagination model, timestamps, IDs, nested entities, and partial-success behavior where relevant
* define error response structure with stable machine-readable codes and human-readable messages
* define idempotency expectations for retriable operations
* define authentication and authorization expectations per endpoint

Acceptance criteria:

* Engineers can implement enterprise APIs endpoint by endpoint from this story.
* Web and mobile clients can rely on the same payload definitions.
* Error and pagination behavior are explicit and testable.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-168",
          "summary": "ENT | Field-level data model and entity relationship specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-168",
          "description": "Field-level domain model specification for enterprise leave planning.

Scope:

* define every core entity and its fields: enterprise workspace, membership, invitation, workspace role assignment, business role assignment, team, location, holiday profile, leave type, working pattern, leave request, request day item if needed, approval decision, daily rule, role coverage rule, template, template version, notification, audit event, export job, import job
* define data types, nullability, uniqueness, defaults, allowed values, and lifecycle expectations for each field
* define relationships and cardinality between entities
* define soft-delete, archive, and history-preservation rules where relevant
* define canonical naming separate from localized display labels
* define derived fields and aggregation fields versus stored fields

Acceptance criteria:

* Engineers can build enterprise persistence and DTO models from this story.
* Relationship and lifecycle rules are explicit.
* Reporting, API, and export features use the same canonical entity model.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-170",
          "summary": "ENT | Permission matrix by role, action and data visibility",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-170",
          "description": "Tabular permission specification for enterprise leave planning.

Scope:

* define a complete matrix of actions versus roles: owner, resourceAssistant, member, invited user, suspended user, removed user, and optional future read-only role
* include actions for workspace settings, member invite, role assignment, request create, request edit, request cancel, request approve, request reject, admin override, rule create and edit, template create and apply, export, import, notification view, audit view, and reporting view
* define which data is visible by role in calendar cells, day details, approval views, exports, and reports
* define row-level and field-level visibility where needed
* define inheritance and override rules if multiple roles or scopes exist in the future

Acceptance criteria:

* Every enterprise action has an explicit permission rule.
* Visibility of sensitive leave information is documented by role.
* Engineers can implement access control from this matrix without guessing.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "hobbeast.atlassian.net",
        "repository": "SYN",
        "label": "jira-backed planned scope"
      },
      "deploymentComment": "Field-level data model, permission matrix and enterprise API contracts."
    }
  ],
  "capabilities": [
    {
      "id": "syncfolk_app_shell_navigation",
      "name": "App shell, navigation and design system",
      "summary": "Core app shell, route protection, design tokens, themes, analytics and accessibility groundwork.",
      "description": "Current B2C application entry shell, design-system baseline, route guards, deep links, API contract catalog and canonical domain model support.",
      "statusBySurface": {
        "web": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "shared-contract": "partial"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "jira",
        "github",
        "vercel",
        "lovable"
      ],
      "jiraKeys": [
        "SYN-1",
        "SYN-2",
        "SYN-4",
        "SYN-24",
        "SYN-25",
        "SYN-47",
        "SYN-48",
        "SYN-49",
        "SYN-50",
        "SYN-61",
        "SYN-62",
        "SYN-64",
        "SYN-65",
        "SYN-66",
        "SYN-67",
        "SYN-68",
        "SYN-69",
        "SYN-131",
        "SYN-132",
        "SYN-133",
        "SYN-134",
        "SYN-135",
        "SYN-136"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "source": "seed"
    },
    {
      "id": "syncfolk_auth_registered_identity",
      "name": "Registered identity and account recovery",
      "summary": "Email/password identity, verification, OAuth activation and password reset flows.",
      "description": "Registered user sign-in, sign-up, verification, password recovery and account security flows for the B2C scheduling product.",
      "statusBySurface": {
        "web": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "google-oauth"
      ],
      "jiraKeys": [
        "SYN-3",
        "SYN-5",
        "SYN-26",
        "SYN-27",
        "SYN-28",
        "SYN-51",
        "SYN-52",
        "SYN-63",
        "SYN-70",
        "SYN-71",
        "SYN-72",
        "SYN-74",
        "SYN-75",
        "SYN-76",
        "SYN-77",
        "SYN-78",
        "SYN-138",
        "SYN-139"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "source": "seed"
    },
    {
      "id": "syncfolk_guest_and_temporary_access",
      "name": "Guest and temporary access model",
      "summary": "Temporary guest identity, invite-scoped access, inactivity handling and guest-to-member upgrade.",
      "description": "Temporary user sessions, guest upgrade logic, anonymous or invited access and return-path handling for invitees.",
      "statusBySurface": {
        "web": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "SYN-27",
        "SYN-33",
        "SYN-74",
        "SYN-75",
        "SYN-76",
        "SYN-88",
        "SYN-89",
        "SYN-90",
        "SYN-91"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "source": "seed"
    },
    {
      "id": "syncfolk_event_creation_lifecycle_context",
      "name": "Event creation, lifecycle and active event context",
      "summary": "Create, edit, restart and select event calendars with templates and active/inactive visibility.",
      "description": "Event calendar creation, lifecycle transitions, default event context, active/inactive visibility and lifecycle-focused UI states.",
      "statusBySurface": {
        "web": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "SYN-6",
        "SYN-29",
        "SYN-30",
        "SYN-31",
        "SYN-32",
        "SYN-33",
        "SYN-53",
        "SYN-54",
        "SYN-73",
        "SYN-79",
        "SYN-80",
        "SYN-81",
        "SYN-82",
        "SYN-83",
        "SYN-84",
        "SYN-85",
        "SYN-86",
        "SYN-87",
        "SYN-88",
        "SYN-89",
        "SYN-90",
        "SYN-91",
        "SYN-140",
        "SYN-141"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "source": "seed"
    },
    {
      "id": "syncfolk_share_and_invite_distribution",
      "name": "Share links and invite distribution",
      "summary": "Creator-managed share links, grouped share actions and invite distribution.",
      "description": "Share token generation, management and distribution across email and social channels, including creator-managed invite UX.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "aligned",
      "integrations": [
        "supabase",
        "email-social-share"
      ],
      "jiraKeys": [
        "SYN-32",
        "SYN-85",
        "SYN-86",
        "SYN-87"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "source": "seed"
    },
    {
      "id": "syncfolk_voting_calendar_core",
      "name": "Voting calendar core interactions",
      "summary": "Calendar rendering, single-day voting, long-press/info details and responsive voting layout.",
      "description": "Core voting calendar rendering, date eligibility, per-day vote interactions and responsive calendar-first layout.",
      "statusBySurface": {
        "web": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "shipped",
        "shared-contract": "partial"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "SYN-7",
        "SYN-11",
        "SYN-34",
        "SYN-35",
        "SYN-36",
        "SYN-37",
        "SYN-38",
        "SYN-55",
        "SYN-56",
        "SYN-92",
        "SYN-93",
        "SYN-94",
        "SYN-95",
        "SYN-96",
        "SYN-97",
        "SYN-98",
        "SYN-99",
        "SYN-100",
        "SYN-101",
        "SYN-102",
        "SYN-103",
        "SYN-104",
        "SYN-105",
        "SYN-106",
        "SYN-107",
        "SYN-142",
        "SYN-143"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "source": "seed"
    },
    {
      "id": "syncfolk_batch_day_details_availability",
      "name": "Batch voting, day details and personal availability",
      "summary": "Drag-range voting, day-detail surfaces and personal availability synchronization.",
      "description": "Batch vote interactions, participant/day detail views and personal availability calendar with synchronization into event voting.",
      "statusBySurface": {
        "web": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "SYN-36",
        "SYN-37",
        "SYN-38",
        "SYN-100",
        "SYN-101",
        "SYN-102",
        "SYN-103",
        "SYN-104",
        "SYN-105",
        "SYN-106",
        "SYN-107"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "source": "seed"
    },
    {
      "id": "syncfolk_ranking_and_pinned_day",
      "name": "Ranking, pinned day and decision support",
      "summary": "Ranking computation, candidate comparison, pinned day selection, modification and unlock lifecycle.",
      "description": "Decision-support surfaces around ranking, pinning, repinning and unlocking dates, including ranking-to-calendar navigation.",
      "statusBySurface": {
        "web": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "SYN-8",
        "SYN-12",
        "SYN-39",
        "SYN-40",
        "SYN-41",
        "SYN-42",
        "SYN-57",
        "SYN-58",
        "SYN-108",
        "SYN-109",
        "SYN-110",
        "SYN-111",
        "SYN-112",
        "SYN-113",
        "SYN-114",
        "SYN-115",
        "SYN-116",
        "SYN-117",
        "SYN-118",
        "SYN-119",
        "SYN-120",
        "SYN-144",
        "SYN-145",
        "SYN-146"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "source": "seed"
    },
    {
      "id": "syncfolk_notifications_center",
      "name": "Notification center and event-driven notifications",
      "summary": "Unread state, row actions, guest delivery parity and event-driven notification payloads.",
      "description": "Notification center UI and server-backed notification payload logic for pinned-day, event and social actions.",
      "statusBySurface": {
        "web": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "email-social-share"
      ],
      "jiraKeys": [
        "SYN-41",
        "SYN-42",
        "SYN-114",
        "SYN-115",
        "SYN-116",
        "SYN-117",
        "SYN-118",
        "SYN-119",
        "SYN-120"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "source": "seed"
    },
    {
      "id": "syncfolk_profile_and_social_graph",
      "name": "Profile, friends, favorites and preferences",
      "summary": "Profile page, account summary, friends, pending requests, favorites and social actions from event context.",
      "description": "User profile and social graph management, including preferences, friends, pending requests, favorites and participant-context actions.",
      "statusBySurface": {
        "web": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "shipped",
        "shared-contract": "shipped"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "SYN-9",
        "SYN-10",
        "SYN-43",
        "SYN-44",
        "SYN-45",
        "SYN-46",
        "SYN-59",
        "SYN-60",
        "SYN-121",
        "SYN-122",
        "SYN-123",
        "SYN-124",
        "SYN-125",
        "SYN-126",
        "SYN-127",
        "SYN-128",
        "SYN-129",
        "SYN-130",
        "SYN-137",
        "SYN-147",
        "SYN-148"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "source": "seed"
    },
    {
      "id": "syncfolk_account_security_and_admin",
      "name": "Account security and admin operations",
      "summary": "Account deletion governance, admin dashboard, admin users and admin events operations.",
      "description": "Account-security flows, deletion safeguards and platform-level admin operations for users and events.",
      "statusBySurface": {
        "web": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "shipped",
        "shared-contract": "partial"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "SYN-45",
        "SYN-46",
        "SYN-126",
        "SYN-127",
        "SYN-128",
        "SYN-129",
        "SYN-130",
        "SYN-137"
      ],
      "tenant": "B2C",
      "channel": "Both",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "source": "seed"
    },
    {
      "id": "syncfolk_platform_contracts_and_telemetry",
      "name": "Platform contracts, telemetry and resilience",
      "summary": "Canonical domain model, API contract catalog, error taxonomy, analytics and accessibility rules.",
      "description": "Cross-cutting product foundation covering domain model, API surface, error handling, analytics catalog and accessibility/localization guidance.",
      "statusBySurface": {
        "web": "partial",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "partial",
        "shared-contract": "partial"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "jira",
        "github",
        "vercel"
      ],
      "jiraKeys": [
        "SYN-47",
        "SYN-48",
        "SYN-61",
        "SYN-62",
        "SYN-63",
        "SYN-131",
        "SYN-132",
        "SYN-133",
        "SYN-134"
      ],
      "tenant": "Both",
      "channel": "Both",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes",
      "source": "seed"
    },
    {
      "id": "syncfolk_enterprise_mode_and_workspace",
      "name": "Enterprise mode shell and workspace context",
      "summary": "Dedicated enterprise absence-planning mode, workspace context and registered-only access foundation.",
      "description": "Enterprise workspace shell, navigation separation, registered-only invitation model and high-level governance framing for absence planning.",
      "statusBySurface": {
        "web": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira"
      ],
      "jiraKeys": [
        "SYN-13",
        "SYN-14",
        "SYN-15",
        "SYN-16",
        "SYN-17",
        "SYN-18",
        "SYN-19",
        "SYN-20",
        "SYN-21",
        "SYN-22",
        "SYN-23",
        "SYN-149",
        "SYN-150",
        "SYN-151",
        "SYN-152",
        "SYN-153",
        "SYN-154",
        "SYN-155",
        "SYN-156",
        "SYN-157",
        "SYN-158",
        "SYN-159",
        "SYN-160",
        "SYN-161",
        "SYN-162",
        "SYN-163",
        "SYN-164",
        "SYN-165",
        "SYN-166",
        "SYN-167",
        "SYN-168",
        "SYN-169",
        "SYN-170",
        "SYN-171",
        "SYN-172",
        "SYN-173",
        "SYN-174",
        "SYN-175",
        "SYN-176",
        "SYN-177",
        "SYN-178",
        "SYN-179",
        "SYN-180",
        "SYN-181",
        "SYN-182",
        "SYN-183",
        "SYN-184",
        "SYN-185",
        "SYN-186",
        "SYN-187",
        "SYN-188",
        "SYN-189",
        "SYN-190",
        "SYN-191",
        "SYN-192"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "source": "seed"
    },
    {
      "id": "syncfolk_enterprise_leave_workflow",
      "name": "Enterprise leave request lifecycle and workflow engine",
      "summary": "Leave request submission, approvals, escalations and workflow state tables.",
      "description": "Enterprise leave request lifecycle, approval decisions, substitute approver logic and formal workflow state tables.",
      "statusBySurface": {
        "web": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira"
      ],
      "jiraKeys": [
        "SYN-16",
        "SYN-152",
        "SYN-166",
        "SYN-177",
        "SYN-178"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "source": "seed"
    },
    {
      "id": "syncfolk_enterprise_rules_coverage_templates",
      "name": "Enterprise rules, coverage and reusable templates",
      "summary": "Blocked dates, daily capacity, staffing coverage rules, reusable templates and conflict summarization.",
      "description": "Calendar governance rules, staffing coverage, reusable rule templates and summary/risk panels for enterprise planning.",
      "statusBySurface": {
        "web": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira"
      ],
      "jiraKeys": [
        "SYN-17",
        "SYN-18",
        "SYN-20",
        "SYN-153",
        "SYN-162"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "source": "seed"
    },
    {
      "id": "syncfolk_enterprise_approval_and_day_detail",
      "name": "Enterprise approval inbox and day-detail status surfaces",
      "summary": "Approval queue, bulk decisions, conflict reasoning and enterprise day-detail status panels.",
      "description": "Approval worklists and enterprise day-detail views with request statuses, rule impacts and operational actions.",
      "statusBySurface": {
        "web": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira"
      ],
      "jiraKeys": [
        "SYN-21",
        "SYN-23",
        "SYN-149",
        "SYN-150",
        "SYN-164"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "source": "seed"
    },
    {
      "id": "syncfolk_enterprise_directory_roles_settings",
      "name": "Enterprise member directory, roles and workspace settings",
      "summary": "Workspace members, business roles, visibility control, holiday profiles, locale and timezone settings.",
      "description": "Organization model, directory management, role assignment, visibility control and workspace/localization settings for enterprise planning.",
      "statusBySurface": {
        "web": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira"
      ],
      "jiraKeys": [
        "SYN-22",
        "SYN-151",
        "SYN-163",
        "SYN-165",
        "SYN-168",
        "SYN-170",
        "SYN-180",
        "SYN-181",
        "SYN-183",
        "SYN-184"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "source": "seed"
    },
    {
      "id": "syncfolk_enterprise_export_reporting_api",
      "name": "Enterprise export, reporting and API surface",
      "summary": "Export schema, reporting dashboards, KPI widgets and integration-ready API outputs.",
      "description": "Enterprise export formats, reporting dashboard, staffing analytics and API endpoint catalog for downstream BI and HR integrations.",
      "statusBySurface": {
        "web": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira"
      ],
      "jiraKeys": [
        "SYN-19",
        "SYN-157",
        "SYN-161",
        "SYN-167",
        "SYN-173",
        "SYN-177",
        "SYN-178",
        "SYN-179",
        "SYN-185"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "source": "seed"
    },
    {
      "id": "syncfolk_enterprise_import_migration",
      "name": "Enterprise spreadsheet import and migration",
      "summary": "Spreadsheet upload, field mapping, validation and migration from shared leave trackers.",
      "description": "Import and migration pipeline from spreadsheet-based planning into enterprise Syncfolk with validation and error reporting.",
      "statusBySurface": {
        "web": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira"
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
      "deployStatus": "No",
      "source": "seed"
    },
    {
      "id": "syncfolk_enterprise_notifications_audit_security",
      "name": "Enterprise notifications, audit history and security",
      "summary": "Enterprise notification matrix, audit history, privacy and compliance rules.",
      "description": "Notification event rules, immutable audit history, retention expectations and security/privacy governance for enterprise leave data.",
      "statusBySurface": {
        "web": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira",
        "email-social-share"
      ],
      "jiraKeys": [
        "SYN-159",
        "SYN-160",
        "SYN-171",
        "SYN-176"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "source": "seed"
    },
    {
      "id": "syncfolk_enterprise_qa_wireframes_and_mobile_parity",
      "name": "Enterprise QA, wireframes and mobile parity",
      "summary": "Enterprise wireframes, acceptance scenarios, responsive behavior and offline-tolerant mobile parity.",
      "description": "Implementation-ready enterprise design and QA scaffolding, including wireframes, acceptance matrix and native/mobile parity expectations.",
      "statusBySurface": {
        "web": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "jira"
      ],
      "jiraKeys": [
        "SYN-156",
        "SYN-169",
        "SYN-174",
        "SYN-175",
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
      "deployStatus": "No",
      "source": "seed"
    },
    {
      "id": "syncfolk_enterprise_foundation_contracts",
      "name": "Enterprise data model, permissions and API contracts",
      "summary": "Field-level data model, permission matrix and enterprise API contracts.",
      "description": "Formal enterprise entity model, permission matrix, visibility rules and API contracts that enable future runtime implementation across web and native clients.",
      "statusBySurface": {
        "web": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned",
        "backend": "planned",
        "shared-contract": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira"
      ],
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
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "source": "seed"
    }
  ],
  "integrations": [
    {
      "id": "github",
      "name": "GitHub",
      "category": "source-control",
      "state": "planned",
      "notes": "Current seed is documentation-derived; repository wiring should be connected later."
    },
    {
      "id": "jira",
      "name": "Jira",
      "category": "planning",
      "state": "connected",
      "notes": "jiraissues.csv validated source of truth for imported Syncfolk issue metadata.",
      "url": "https://hobbeast.atlassian.net/jira/software/projects/SYN"
    },
    {
      "id": "supabase",
      "name": "Supabase",
      "category": "backend",
      "state": "connected",
      "environmentSensitive": true,
      "notes": "Shared backend spine for current B2C runtime and planned enterprise contract work."
    },
    {
      "id": "google-oauth",
      "name": "Google OAuth",
      "category": "external-api",
      "state": "connected",
      "environmentSensitive": true,
      "notes": "Used in the identity and activation flow."
    },
    {
      "id": "email-social-share",
      "name": "Email and social share",
      "category": "external-api",
      "state": "connected",
      "notes": "Email and social deep links are part of invite/share flows and notification expectations."
    },
    {
      "id": "lovable",
      "name": "Lovable",
      "category": "design",
      "state": "connected",
      "notes": "Referenced as UI iteration/source support, not the release source of truth."
    }
  ],
  "parityAlerts": [
    {
      "id": "syncfolk-web-to-android",
      "severity": "critical",
      "sourceSurface": "web",
      "affectedSurface": "mobile-android",
      "reason": "Current B2C web runtime is ahead of Android parity. Mobile-spec Jira work exists and should be tracked as follow-up for shipped B2C capabilities.",
      "jiraKey": "SYN-175",
      "state": "open"
    },
    {
      "id": "syncfolk-web-to-ios",
      "severity": "warning",
      "sourceSurface": "web",
      "affectedSurface": "mobile-ios",
      "reason": "Current B2C web runtime is ahead of iPhone parity. Cross-surface behavior is specified but not represented as runtime release coverage.",
      "jiraKey": "SYN-175",
      "state": "open"
    },
    {
      "id": "syncfolk-enterprise-runtime-gap",
      "severity": "critical",
      "sourceSurface": "shared-contract",
      "affectedSurface": "web",
      "reason": "Enterprise absence-planning has detailed Jira/spec coverage but is not yet represented as runtime web modules.",
      "jiraKey": "SYN-13",
      "state": "tracked"
    },
    {
      "id": "syncfolk-enterprise-backend-gap",
      "severity": "warning",
      "sourceSurface": "backend",
      "affectedSurface": "shared-contract",
      "reason": "Enterprise data model, permission matrix, import/export and audit requirements are specified but not yet implemented as governed backend releases.",
      "jiraKey": "SYN-154",
      "state": "tracked"
    }
  ],
  "importedJiraIssues": [
    {
      "id": "syncfolk-jira-syn-1",
      "key": "SYN-1",
      "summary": "SYN | App shell, navigation and design system",
      "description": "Build the cross-platform application shell and reusable design system that will let the existing Syncfolk web experience be reimplemented consistently for Android and iPhone.

h2. Scope

* App shell, navigation model, top-level routes and guarded screens
* Cross-platform layout rules, responsive behavior and spacing system
* Theme system, tokens, reusable UI primitives and accessibility baseline
* Deep-link entry points for shared event links and auth redirects

h2. Frontend requirements

* Define screen map for auth, app home, join-event, profile, admin and modal flows
* Define reusable components for buttons, inputs, chips, badges, dialogs, sheets, cards and calendar cells
* Define responsive behavior for phone, tablet and large-screen layouts
* Preserve feature parity with current webapp while removing web-specific coupling

h2. Backend / integration requirements

* Document required bootstrap payloads for session restore, profile bootstrap and selected-event bootstrap
* Define deep-link handling contract for invite URLs, temp upgrade flows and password reset flows

h2. Acceptance criteria

* Native teams can implement the entire shell and core UI primitives without reverse-engineering the web code
* Navigation and theming contracts are documented in issue children
* All downstream mobile stories can reference this epic as their shell/design baseline",
      "labels": [
        "design-system",
        "migrated-from-HOB-191",
        "mobile-spec",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-1",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-2",
      "key": "SYN-2",
      "summary": "SYN | App shell, navigation and design system",
      "description": "Build the cross-platform application shell and reusable design system that will let the existing Syncfolk web experience be reimplemented consistently for Android and iPhone.

h2. Scope

* App shell, navigation model, top-level routes and guarded screens
* Cross-platform layout rules, responsive behavior and spacing system
* Theme system, tokens, reusable UI primitives and accessibility baseline
* Deep-link entry points for shared event links and auth redirects

h2. Frontend requirements

* Define screen map for auth, app home, join-event, profile, admin and modal flows
* Define reusable components for buttons, inputs, chips, badges, dialogs, sheets, cards and calendar cells
* Define responsive behavior for phone, tablet and large-screen layouts
* Preserve feature parity with current webapp while removing web-specific coupling

h2. Backend / integration requirements

* Document required bootstrap payloads for session restore, profile bootstrap and selected-event bootstrap
* Define deep-link handling contract for invite URLs, temp upgrade flows and password reset flows

h2. Acceptance criteria

* Native teams can implement the entire shell and core UI primitives without reverse-engineering the web code
* Navigation and theming contracts are documented in issue children
* All downstream mobile stories can reference this epic as their shell/design baseline",
      "labels": [
        "design-system",
        "migrated-from-HOB-191",
        "mobile-spec",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-2",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-3",
      "key": "SYN-3",
      "summary": "SYN | Authentication, identity and guest access",
      "description": "Define all account, session and guest-access flows needed to support registered users and registration-free participants across Android and iPhone shared-link entry points.

Scope:

* Email/password sign in, Google sign in, sign up and password reset
* Temporary user sessions and event-linked guest access
* Guest-to-registered upgrade and session continuity
* Permission rules for creator-only actions, participant actions and admin roles

Frontend requirements:

* Platform-neutral auth screens and validation behavior
* Error, loading and recovery states for every auth flow
* Session restore and sign-out behavior across app restarts

Backend/integration requirements:

* Auth provider integration and callback contracts
* Temporary user creation, upgrade and cleanup rules
* Permission model for creator, participant and guest limits

Acceptance criteria:

* Mobile teams can implement the full auth model from child issues
* Guest and registered flows are described without web-only assumptions",
      "labels": [
        "auth",
        "migrated-from-HOB-192",
        "mobile-spec",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-3",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-4",
      "key": "SYN-4",
      "summary": "SYN | App shell, navigation and design system",
      "description": "Build the cross-platform application shell and reusable design system that will let the existing Syncfolk web experience be reimplemented consistently for Android and iPhone.

h2. Scope

* App shell, navigation model, top-level routes and guarded screens
* Cross-platform layout rules, responsive behavior and spacing system
* Theme system, tokens, reusable UI primitives and accessibility baseline
* Deep-link entry points for shared event links and auth redirects

h2. Frontend requirements

* Define screen map for auth, app home, join-event, profile, admin and modal flows
* Define reusable components for buttons, inputs, chips, badges, dialogs, sheets, cards and calendar cells
* Define responsive behavior for phone, tablet and large-screen layouts
* Preserve feature parity with current webapp while removing web-specific coupling

h2. Backend / integration requirements

* Document required bootstrap payloads for session restore, profile bootstrap and selected-event bootstrap
* Define deep-link handling contract for invite URLs, temp upgrade flows and password reset flows

h2. Acceptance criteria

* Native teams can implement the entire shell and core UI primitives without reverse-engineering the web code
* Navigation and theming contracts are documented in issue children
* All downstream mobile stories can reference this epic as their shell/design baseline",
      "labels": [
        "design-system",
        "migrated-from-HOB-191",
        "mobile-spec",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-4",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-5",
      "key": "SYN-5",
      "summary": "SYN | Authentication, identity and guest access",
      "description": "Cross-platform authentication and identity flows for Syncfolk mobile.

Scope:

* Email/password sign in
* Google sign in
* Sign up and password reset
* Guest sessions and guest-to-registered upgrade
* Role and permission handling for creator, participant and admin

Acceptance criteria:

* Android and iPhone teams can implement the identity model from child issues.
* Guest and registered flows are documented without web-only assumptions.",
      "labels": [
        "auth",
        "migrated-from-HOB-192",
        "mobile-spec",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-5",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-6",
      "key": "SYN-6",
      "summary": "SYN | Event calendar lifecycle, templates and sharing",
      "description": "Cross-platform event calendar lifecycle for Syncfolk mobile.

Scope:

* Create, edit, delete and view event calendars
* Template-based setup with category and description metadata
* Registered-only and no-registration share modes
* Invite link generation, distribution and revocation
* Event selector and ownership/participant rules

Acceptance criteria:

* Android and iPhone teams can rebuild create/edit/share/join behavior from child issues.
* Data fields and access rules are captured in downstream issues.",
      "labels": [
        "events",
        "migrated-from-HOB-193",
        "mobile-spec",
        "sharing",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-6",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-7",
      "key": "SYN-7",
      "summary": "SYN | Voting calendar, day details and batch interactions",
      "description": "Cross-platform voting calendar behavior for Syncfolk mobile.

Scope:

* Calendar grid rendering and month navigation
* Date eligibility rules based on start date, end date, current date and event status
* Single-day voting, long-press/info access and day detail surfaces
* Batch voting ranges, drag interactions and clear/reset behavior

Acceptance criteria:

* Android and iPhone teams can rebuild calendar voting from child issues.
* Date-selection edge cases are captured in downstream issues.",
      "labels": [
        "calendar",
        "migrated-from-HOB-194",
        "mobile-spec",
        "SYN",
        "voting"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-7",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-8",
      "key": "SYN-8",
      "summary": "SYN | Ranking, pinned day and notifications",
      "description": "Cross-platform ranking, pinned day and notification behavior for Syncfolk mobile.

Scope:

* Vote ranking computation and presentation
* Creator-only pinned-day selection and modification
* Tie handling for top-ranked days
* Notification center, unread counts, read/delete actions and event-driven notification types

Acceptance criteria:

* Android and iPhone teams can reproduce ranking and pin-day behavior from child issues.
* Notification-triggering events and payloads are documented in downstream issues.",
      "labels": [
        "migrated-from-HOB-195",
        "mobile-spec",
        "notifications",
        "ranking",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-8",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-9",
      "key": "SYN-9",
      "summary": "SYN | Profile, friends and administrative operations",
      "description": "Cross-platform profile, friends and admin operations for Syncfolk mobile.

Scope:

* Profile screen, profile menu and account preferences
* Password change and account deletion flow
* Friend search, requests, accept/decline, favorites and participant social actions
* Admin dashboard and event/user oversight capabilities

Acceptance criteria:

* Android and iPhone teams can implement profile, social and admin flows from child issues.
* Destructive actions and permissions are documented in downstream issues.",
      "labels": [
        "admin",
        "friends",
        "migrated-from-HOB-196",
        "mobile-spec",
        "profile",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-9",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-10",
      "key": "SYN-10",
      "summary": "SYN | Profile, friends and administrative operations",
      "description": "Cross-platform profile, friends and admin operations for Syncfolk mobile.

Scope:

* Profile screen, profile menu and account preferences
* Password change and account deletion flow
* Friend search, requests, accept/decline, favorites and participant social actions
* Admin dashboard and event/user oversight capabilities

Acceptance criteria:

* Android and iPhone teams can implement profile, social and admin flows from child issues.
* Destructive actions and permissions are documented in downstream issues.",
      "labels": [
        "admin",
        "friends",
        "migrated-from-HOB-196",
        "mobile-spec",
        "profile",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-10",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-11",
      "key": "SYN-11",
      "summary": "SYN | Voting calendar, day details and batch interactions",
      "description": "Cross-platform voting calendar behavior for Syncfolk mobile.

Scope:

* Calendar grid rendering and month navigation
* Date eligibility rules based on start date, end date, current date and event status
* Single-day voting, long-press/info access and day detail surfaces
* Batch voting ranges, drag interactions and clear/reset behavior

Acceptance criteria:

* Android and iPhone teams can rebuild calendar voting from child issues.
* Date-selection edge cases are captured in downstream issues.",
      "labels": [
        "calendar",
        "migrated-from-HOB-197",
        "mobile-spec",
        "SYN",
        "voting"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-11",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-12",
      "key": "SYN-12",
      "summary": "SYN | Ranking, pinned day and notifications",
      "description": "Cross-platform ranking, pinned day and notification behavior for Syncfolk mobile.

Scope:

* Vote ranking computation and presentation
* Creator-only pinned-day selection and modification
* Tie handling for top-ranked days
* Notification center, unread counts, read/delete actions and event-driven notification types

Acceptance criteria:

* Android and iPhone teams can reproduce ranking and pin-day behavior from child issues.
* Notification-triggering events and payloads are documented in downstream issues.",
      "labels": [
        "migrated-from-HOB-198",
        "mobile-spec",
        "notifications",
        "ranking",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-12",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-13",
      "key": "SYN-13",
      "summary": "ENT | Enterprise absence planning and resource governance mode",
      "description": "h2. Objective

Introduce a dedicated Syncfolk Enterprise mode for vacation and leave planning, separate from the B2C event-voting experience.

h2. Business problem

Many teams still manage leave planning in shared spreadsheets that are hard to govern, impossible to validate consistently, and weak for API-based reporting, capacity planning, and allocation calculations.

h2. Outcome

Provide a secure enterprise leave planning workspace that supports:

* authenticated, email-invited members only
* owner and delegated {{resourceAssistant}} governance
* leave request submission and approval
* blocked days, mandatory leave days, and per-day capacity rules
* role-based minimum staffing and maximum leave thresholds
* reusable templates and batch application of rules
* enterprise exports and API-ready data structures
* notifications, audit trail, and coverage/conflict views

h2. Product boundaries

This epic must produce a dedicated enterprise UX mode, not a cluttered all-in-one hybrid screen. The enterprise space should reuse the Syncfolk calendar strengths where useful, but remove consumer-only constructs such as anonymous participation, share-by-link entry, and voting ranking.

h2. Non-functional expectations

* role-based authorization
* auditability of approvals and rule changes
* scalable daily rule evaluation
* exportability to Excel, XML, and HTML
* future-ready API surface for reporting and resource allocation integrations

h2. Acceptance criteria

* An enterprise mode exists with clearly separated navigation and behavior from B2C event voting.
* Enterprise spaces support only registered, invited members.
* Core leave planning, approval, governance, export, and notification capabilities are covered by child stories.
* The design is suitable for later native mobile implementation without depending on web-specific assumptions.",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-13",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-14",
      "key": "SYN-14",
      "summary": "ENT | Enterprise mode shell, navigation separation and workspace context",
      "description": "h2. User story

As an enterprise customer, I want a dedicated leave-planning shell that is clearly separated from consumer event voting so that the product stays focused, governed, and easy to learn.

h2. Functional scope

* add enterprise-specific workspace context
* separate navigation labels, entry points, empty states, and permissions from B2C spaces
* hide consumer-only capabilities in enterprise spaces: anonymous join, magic link participation, voting ranking, social sharing, guest voting flows
* show enterprise-specific modules: team members, approval queue, rule templates, coverage/conflict summary, exports, audit log
* preserve responsive behavior for desktop and mobile

h2. UI expectations

* enterprise spaces must have their own visual cues and terminology
* page header must show workspace name, owner/admin context, and approval/notification affordances
* left-side replacement for voting ranking: {{Coverage & Conflict Summary}}
* summary widget should highlight: pending requests, blocked dates, mandatory leave dates, capacity breaches, role coverage breaches, upcoming approvals

h2. Frontend notes

* reuse calendar primitives where possible
* use feature flags / space type checks to switch components and actions
* avoid mixed-mode UI where B2C and enterprise actions appear together

h2. Backend notes

* introduce space type or workspace mode marker
* enforce server-side capability gating by space type

h2. Acceptance criteria

* Enterprise spaces display enterprise modules only.
* Consumer-only entry methods and actions are unavailable in enterprise spaces.
* Coverage & Conflict Summary replaces the voting ranking area.
* UX remains responsive on desktop and mobile.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-14",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-15",
      "key": "SYN-15",
      "summary": "ENT | Registered-only invitation model and enterprise role governance",
      "description": "h2. User story

As an enterprise workspace owner, I want to invite named users by email and assign controlled roles so that only authenticated members can access and administer leave planning.

h2. Functional scope

* disallow anonymous access, guest flows, and open share links
* require email invitation + registration + authenticated acceptance
* support roles: {{owner}}, {{resourceAssistant}}, {{member}}
* owner can assign or revoke {{resourceAssistant}}
* owner and {{resourceAssistant}} can invite members
* owner remains final authority for workspace administration
* membership status model: invited, active, suspended, removed

h2. Permissions

h3. owner

* manage workspace settings
* invite/remove members
* assign/revoke {{resourceAssistant}}
* configure rules, templates, approvals, exports

h3. resourceAssistant

* manage members operationally
* process approvals
* manage rules, templates, notifications, exports per owner policy
* cannot transfer ownership unless separately specified

h3. member

* submit leave requests
* view own requests and approved team calendar according to visibility rules

h2. Backend notes

* create enterprise membership and role tables / entities
* secure all APIs by workspace membership and role checks
* store invitation token lifecycle and expiry

h2. Acceptance criteria

* Enterprise workspace access requires authenticated membership.
* No link-only or guest entry path exists.
* Owner and resourceAssistant permissions are enforced server-side.
* Invitation, activation, suspension, and removal states are auditable.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-15",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-16",
      "key": "SYN-16",
      "summary": "ENT | Leave request lifecycle, approval decisions and operational notifications",
      "description": "h2. User story

As an employee or delegated approver, I want a structured leave request and approval lifecycle so that requests can be submitted, reviewed, approved, rejected, or adjusted with full traceability.

h2. Functional scope

* member submits leave request with start date, end date, leave type, optional note, optional partial-day metadata
* request states: draft, submitted, pending approval, approved, rejected, cancelled, auto-rejected, expired
* owner/resourceAssistant can approve, reject, or create requests on behalf of members
* optional reason required on rejection or admin override
* notifications to requester and approvers for create/update/approve/reject/cancel events
* prevent approvals when blocking rules or capacity rules fail

h2. UX expectations

* request form must surface balance, conflicts, blocked days, and policy warnings before submission
* approval queue must support filters by status, user, date range, team, role, and workspace
* day detail view must show approved, pending, and rejected items based on permission

h2. Backend notes

* persist request history and approval actions as immutable audit events
* evaluate rule engine before final approval
* support admin-created requests with actor attribution

h2. Acceptance criteria

* Full request lifecycle is available to enterprise users.
* Approvers receive actionable notifications.
* Approval decisions are blocked when rules fail.
* Every state transition is auditable with actor and timestamp.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-16",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-17",
      "key": "SYN-17",
      "summary": "ENT | Calendar governance rules for blocked dates, company leave days and daily capacity",
      "description": "h2. User story

As an owner or resourceAssistant, I want to define day-level governance rules so that leave planning respects business shutdowns, company leave days, and overall daily capacity.

h2. Functional scope

* mark dates or ranges as blocked for leave requests
* mark dates or ranges as company leave days
* define maximum people allowed off on a given day
* support single-day, date-range, and batch rule application
* surface rule breaches in request and approval flows

h2. Rule behavior

* blocked date: members cannot submit or receive approval for leave on that date
* company leave date: the date is marked with a dedicated enterprise flag and displayed clearly in calendar and exports
* max-off rule: request or approval fails when the configured threshold is exceeded

h2. Data and UI notes

* rules need effective dates, scope, creator, modifier, and audit history
* calendar day cells and side panels should show active enterprise flags
* batch tooling must allow rule copy/apply across multiple dates

h2. Acceptance criteria

* Owner/resourceAssistant can configure blocked dates, company leave dates, and max-off limits.
* The rule engine prevents invalid requests and approvals.
* Rules are visible in enterprise calendar UX and exports.
* Batch application is supported.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-17",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-18",
      "key": "SYN-18",
      "summary": "ENT | Role-based staffing coverage rules, reusable templates and batch application",
      "description": "h2. User story

As an owner or resourceAssistant, I want to define staffing constraints by role so that leave decisions preserve minimum operational coverage.

h2. Functional scope

* define enterprise roles / job families inside the workspace (examples: Business Analyst, QA, Lead Developer, Senior Developer, Project Manager)
* assign one or more roles to members based on chosen domain model
* configure per-day or date-range rules by role:
** maximum people off for a role
** minimum people required working for a role
* save rule sets as reusable templates
* apply templates in batch to multiple dates
* allow template versioning and clear effective date visibility

h2. Business rules

* rule conflicts must be validated before save
* leave request evaluation must consider both global capacity and role-based coverage rules
* template application must be previewable before commit

h2. UI expectations

* dedicated rule builder
* batch apply interaction with selected dates and template preview
* conflict messages must explain which role constraint failed

h2. Acceptance criteria

* Enterprise admins can define roles, assign members, create staffing rules, save templates, and apply them in batch.
* Requests and approvals fail with clear reasons when a role threshold would be breached.
* Template application is auditable.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-18",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-19",
      "key": "SYN-19",
      "summary": "ENT | Enterprise exports, reporting dataset and integration-ready API surface",
      "description": "h2. User story

As an enterprise administrator, I want exportable and API-ready leave data so that the workspace can feed reporting, allocation calculations, and downstream HR or BI processes.

h2. Functional scope

* export leave calendar data to Excel, XML, and HTML
* required export columns:
** calendar date
** weekday name
** names of people on leave for the day
** count of people planned off for the day
* support date range, team, role, and workspace filters
* provide machine-consumable API endpoints for approved requests, pending requests, rules, role coverage, and daily aggregates
* design payloads so mobile apps and future integrations can reuse the same contract

h2. Technical expectations

* stable IDs and timestamps in export/API outputs
* locale-safe date formatting strategy
* explicit separation between display fields and canonical fields
* authorization checks on export and API scope
* audit who exported what and when

h2. Acceptance criteria

* Admins can export Excel, XML, and HTML outputs with the required fields.
* APIs expose normalized enterprise leave planning data for reporting and allocation use cases.
* Export and API access are permission-controlled and auditable.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-19",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-20",
      "key": "SYN-20",
      "summary": "ENT | Coverage and Conflict Summary panel replacing consumer ranking",
      "description": "h2. User story

As an enterprise owner, resourceAssistant, or approver, I want a Coverage & Conflict Summary panel instead of a voting ranking so that I can immediately see operational risks and pending work.

h2. Functional scope

* replace the B2C ranking panel with an enterprise summary panel
* show counts for pending leave approvals, blocked dates in the visible range, company leave dates in the visible range, days exceeding max-off limits, days violating role coverage rules, and upcoming requests that need attention
* support filters for workspace, month, team, role, and request status
* clicking a summary item opens the corresponding filtered detail list or focuses the affected dates in calendar view
* show warning severity levels: informational, warning, blocking

h2. UI expectations

* compact card layout on desktop sidebar
* collapsible summary tray on mobile
* each metric card must include count, short label, status color, and optional next-action shortcut
* empty states should be explicit: no pending approvals, no conflicts, no blocked dates this month

h2. Backend notes

* requires pre-aggregated daily conflict data or performant on-demand calculation
* summary queries must respect workspace visibility and role permissions

h2. Acceptance criteria

* Enterprise spaces no longer show consumer vote ranking.
* Coverage & Conflict Summary is available on desktop and mobile.
* Every summary card can drill into actionable data.
* Counts match underlying calendar, rules, and request data.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-20",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-21",
      "key": "SYN-21",
      "summary": "ENT | Approval queue and leave request worklist",
      "description": "Enterprise approval queue for leave requests.

Scope:

* pending approval list
* filters by user, date range, role, team, status
* approve, reject, cancel, and admin-create actions
* clear reason display when a request conflicts with rules

Acceptance criteria:

* Approvers can process requests from one worklist.
* Conflicts are visible before decision.
* Actions are audited.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-21",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-22",
      "key": "SYN-22",
      "summary": "ENT | Workspace member management and role setup",
      "description": "Workspace member management for enterprise mode.

Scope:

* list invited and active users
* assign owner, resourceAssistant, and member roles
* assign business roles for coverage rules
* search and filter users by status and role
* show invitation state and access state

Acceptance criteria:

* Admins can manage enterprise users and roles.
* Role changes are saved and visible in the workspace.
* Access is based on assigned role.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-22",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-23",
      "key": "SYN-23",
      "summary": "ENT | Enterprise calendar day details and request statuses",
      "description": "Enterprise day detail and status display.

Scope:

* open any calendar day and show approved, pending, rejected, and blocked information based on permission
* show company leave markers, blocked markers, and capacity warnings in day detail
* show role coverage impact for the day
* allow approvers to navigate from day detail to request review

Acceptance criteria:

* Day detail is available on desktop and mobile.
* Enterprise day detail shows status-based information instead of vote information.
* Day detail links to approval and conflict workflows.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-23",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-24",
      "key": "SYN-24",
      "summary": "SYN | Define screen map, route guards and deep-link behavior",
      "description": "h1. ObjectiveSpecify the complete navigation topology of Syncfolk so Android, iPhone and any future client can recreate the same entry points, guarded routes, redirects and modal/sheet launches without depending on the existing React router implementation.h1. Primary actors* Anonymous visitor; registered user; temporary guest user; event creator; event participant; admin user.h1. Functional scope* Inventory all destinations:** Public: landing/auth, reset-password, invite-join landing, temp sign-in activation.** Protected: main event workspace, profile, admin.** Overlay destinations: create event dialog, share dialog, event info modal, day-details modal/sheet, notifications panel, pin-day selection dialog, event unavailable modal.* Define route guard matrix:** anonymous users may access invite link and auth only;** temporary users may access the linked event workspace only;** temporary users are blocked from profile and admin;** admins may access admin screens in addition to normal user flows.* Define cold-start behavior:** if a valid session exists, restore user and resolve last selected event;** if a temp session exists without its event binding, force local sign-out;** if redirect parameters are present, route after auth completion.* Define deep-link behavior:** /join/:token validates token and branches into already-member, guest-join, auth-required, expired and event-inactive outcomes;** /temp/:tempToken restores temporary session for invited guest;** auth callback and password reset callback must preserve post-login redirect intent.h1. UI / wireframe requirements* Navigation spec must include one wireframe block per screen:** header layout (logo, create-event CTA, notification bell, profile access);** left rail / side panel usage on desktop;** bottom-safe and touch-target requirements on mobile;** modal vs full-screen-sheet rule by breakpoint.* The main event workspace must remain calendar-first:** center area reserved for full month grid;** left/right auxiliary panels adapt in width based on preserving full calendar visibility;** no screen should require the user to horizontally scroll to see the active calendar.* Route transition notes must state whether the destination replaces history, pushes history, or opens as overlay.h1. Backend / integration requirements* Define bootstrap contracts required immediately after app startup:** authenticated session payload;** profile + temporary/linked-event flags;** initial event membership list and default-selected event;** admin capability flag.* Define deep-link validation responses:** invalid token;** expired token;** max-use reached;** event deleted/inactive;** invite requires authenticated account;** invite allows anonymous participation.* Define error model for route guards:** HTTP/API error;** permission denial;** stale local state;** concurrent deletion of selected event.h1. Edge cases and non-functional requirements* App must survive refresh, background/foreground restore, token refresh and partially failed bootstrap calls.* All guards must behave deterministically on slow network and offline-resume states.* A protected route must never briefly flash sensitive content before redirecting.* Navigation spec must remain framework-agnostic: no React-only assumptions, no platform-specific widget names in the normative behavior section.h1. Acceptance criteria* Every route, overlay and redirect is listed with purpose, allowed roles, required data and fallback destination.* Deep-link outcomes are fully enumerated and testable.* Mobile teams can implement equivalent navigation in native stacks without reading the web router source.SYN | Define screen map, route guards and deep-link behaviorPurposeDefine the authoritative screen inventory and navigation contract used by every Syncfolk client.Functional scope- Provide route matrix table: route ID, title, allowed roles, entry preconditions, fallback route, analytics name.- Provide wireframe notes for top bar, profile entry, notification bell and create-event CTA placement.UI / interaction requirements- List every screen, modal, sheet and system dialog.- State initial route per identity state and per deep-link entry.- Define back navigation and cancellation behavior on each surface.Wireframe / layout notes- Screen inventory should separate full screens, transient dialogs, bottom sheets and overlays.Backend / platform-neutral technical requirements- Bootstrap endpoint must return session summary, selected event context and unread notification count.- Navigation intents must be serializable so push notifications and deep links resolve to the same destination.- Route guards must be enforceable both client-side and server-side.State model / edge cases- Cold start without session lands on auth.- Cold start with selected event restores event screen if access still valid.- Invite link while logged in as unsupported identity must branch to recoverable CTA.Acceptance criteria- All current web destinations are represented.- No route depends on implicit browser history behavior.

Parent: SYN-4 — SYN | App shell, navigation and design system",
      "labels": [
        "app-shell",
        "mobile-spec",
        "navigation",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-24",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-25",
      "key": "SYN-25",
      "summary": "SYN | Define design tokens, themes and reusable UI primitives",
      "description": "h1. ObjectiveDocument the visual design system of Syncfolk so the product can be reproduced consistently across web, Android and iPhone while preserving brand identity and accessibility.h1. Primary actors* Design system maintainers; mobile frontend developers; QA/design review.h1. Functional scope* Define semantic color tokens for:** brand primary gradients;** vote states (good/maybe/bad);** success/warning/destructive;** elevated surfaces, cards, dialogs, borders, overlays and inactive states.* Define typography scale for display, heading, body, label, caption and handwritten quote styles.* Define component primitives used across the application:** buttons, icon buttons, chips, pills, badges, inputs, textareas, dropdowns, radio buttons, switches, dialogs, sheets, cards, calendar cells, ranking rows, notification rows.* Define state map for each primitive:** default, hover, pressed, selected, focused, disabled, destructive, loading.h1. UI / wireframe requirements* For every primitive specify:** size variants;** padding, radius and minimum touch target;** icon placement rules;** truncation and multiline behavior;** contrast targets for light and dark themes.* Calendar-cell style guide must define:** neutral state;** vote-state gradient fill;** disabled state;** pinned-day state;** info icon placement;** count dot placement.* Wireframe notes must define which surfaces are fixed-width cards versus flexible-width containers.h1. Backend / integration requirements* No direct backend behavior, but design spec must annotate components that depend on server-driven flags:** disabled because event is decided;** disabled because deadline passed;** admin-only action;** unread-notification badge count;** temporary-user restrictions.* Define a frontend-friendly state enum contract that backend responses should support.h1. Edge cases and non-functional requirements* Theme spec must cover both light and dark modes for auth, dialogs and core workspace.* All primitives must remain legible under localization expansion and large accessibility text settings.* Handwritten decorative typography may never be used for critical controls or transactional content.h1. Acceptance criteria* A platform team can rebuild every reusable primitive with consistent states and sizing.* The design token list and component-state catalog are sufficient for native and web parity QA.SYN | Define design tokens, themes and reusable UI primitivesPurposeDefine reusable visual language and primitive-component behavior so UI is consistent across platforms.Functional scope- Include wireframe anatomy diagrams for core primitives and containers.- Document calendar-first layout rules and side-panel collapsing priorities.UI / interaction requirements- Catalog tokens for colors, radii, shadows, borders, typography and spacing.- Define components for button, chip, pill, input, textarea, select, card, dialog, panel, calendar cell and badge.- Specify dark and light theme support.Wireframe / layout notes- Provide naming convention for tokens and component variants.Backend / platform-neutral technical requirements- Theme tokens must be platform neutral and exportable.- Components must define state matrices rather than implementation-specific CSS instructions.- Support dynamic type / font scaling within controlled bounds.State model / edge cases- Theme change must not alter data or navigation state.- Disabled controls remain visible where business state requires visibility.Acceptance criteria- A new design library can be built directly from this story and its tasks.

Parent: SYN-4 — SYN | App shell, navigation and design system",
      "labels": [
        "design-system",
        "mobile-spec",
        "story",
        "SYN",
        "ui"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-25",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-26",
      "key": "SYN-26",
      "summary": "SYN | Specify login, registration, verification and forgot-password journeys",
      "description": "h1. ObjectiveDescribe every entry, validation and recovery step of the identity experience so the auth surface can be rebuilt consistently across platforms.h1. Primary actors* Anonymous visitor; newly registering user; returning registered user; user completing email activation; user requesting forgotten-password recovery.h1. Functional scope* Support views:** login;** registration;** email verification / activation code entry;** forgot password request;** reset password completion;** Google OAuth sign-in / sign-up intents.* Validation rules:** email format;** password minimum and complexity rules;** display-name requirement for registration;** OTP length and resend cooldown;** user-facing errors for invalid, expired or already-used activation token.* Flow branches:** classic email/password login;** sign-up requiring email activation;** Google-based sign-in;** Google-based sign-up requiring activation if configured;** redirect restoration after successful authentication.h1. UI / wireframe requirements* Auth screen wireframe must define:** left informational/brand panel versus right transaction panel on large screens;** single-column compact layout on mobile;** CTA hierarchy and copy rules;** loading/disabled states for all auth buttons;** OTP input grouping, countdown and resend placement.* The spec must explicitly distinguish informational decorative content from transactional controls.h1. Backend / integration requirements* Document auth provider dependencies:** Supabase Auth or equivalent auth broker;** email verification/activation endpoint;** Google OAuth callback and intent propagation;** password reset token exchange.* Document payload expectations:** sign-in success session;** sign-up pending-verification response;** activation success/failure response;** forgot-password request response;** reset-password completion response.* Define audit events for registration started, activation sent, activation completed, login success/failure and password reset completed.h1. Edge cases and non-functional requirements* User must never be left in an ambiguous state after OAuth callback or activation.* Expired activation links must produce a recoverable flow, not a dead end.* Repeated resend requests must respect cooldown and rate-limit handling.* Copy and validation must be localization-ready.h1. Acceptance criteria* All auth subflows are documented with UI states, validation messages, server interactions and redirect outcomes.* Native teams can reproduce auth screens and recovery behaviors without reading the current Auth.tsx implementation.SYN | Specify login, registration, verification and forgot-password journeysPurposeDefine all registered-user entry flows from unauthenticated state to active signed-in session.Functional scope- Document login screen, registration screen, verification screen and forgot password entry points.- Document loading, success and error feedback placements.UI / interaction requirements- Login and registration must validate inline and at submit.- Verification and resend flows must provide countdown and terminal recovery path.- OAuth and email/password outcomes must converge into the same post-auth bootstrap.Wireframe / layout notes- Sequence diagrams should cover direct login and invite-first authentication.Backend / platform-neutral technical requirements- Auth service must expose precise error codes for invalid credentials, unverified account, blocked account and rate limiting.- Verification state must be persisted and returned during session bootstrap.State model / edge cases- Switching between login and registration preserves safe values only when appropriate.- User may arrive from invite link, then authenticate, then continue to the event.Acceptance criteria- All web auth screens and edge cases are covered.

Parent: SYN-5 — SYN | Authentication, identity and guest access",
      "labels": [
        "auth",
        "identity",
        "mobile-spec",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-26",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-27",
      "key": "SYN-27",
      "summary": "SYN | Specify temporary guest session model and guest-to-member upgrade",
      "description": "h1. ObjectiveDescribe the temporary-user identity model that powers registration-free event participation and later upgrade into a normal account.h1. Primary actors* Temporary invited participant; event creator sharing anonymous link; guest upgrading to email/password or Google account.h1. Functional scope* Temporary session model must cover:** creation of a temporary identity from an invite token;** binding of the temp account to a single linked event;** temp access token persistence;** inactivity logout behavior;** prevention of temp-session reuse in unrelated tabs/devices if required by policy.* Upgrade path must cover:** temp participant chooses to register;** event membership and prior votes are retained;** temporary preferences and guest identifiers are migrated or cleaned;** upgrade can happen through email registration or Google.h1. UI / wireframe requirements* Join flow must clearly label registration-free participation and any restrictions versus full account users.* Temporary-user banners or helper states must explain profile/admin limitations.* Upgrade CTA placement must be defined in:** join confirmation;** ongoing event participation;** potentially profile-access attempt for blocked routes.h1. Backend / integration requirements* Document temp-user profile fields:** is_temporary;** linked_event_id;** temp_access_token;** optional pending Google/email activation preferences.* Define server responsibilities for:** issuing temp session;** validating linked-event access;** migrating guest votes/participation on upgrade;** invalidating temp session when linked event is missing or inactive.h1. Edge cases and non-functional requirements* Temporary users must be force-signed-out if their linked event no longer exists or the required temp marker is missing.* Upgrade flow must be idempotent and protect against duplicate account creation.* Event access cannot be broadened accidentally during upgrade.h1. Acceptance criteria* The temporary-user lifecycle is fully described from invite acceptance through upgrade or invalidation.* Native teams can rebuild guest participation and upgrade without relying on hidden local-storage behavior.SYN | Specify temporary guest session model and guest-to-member upgradePurposeDefine the lifecycle of a temporary guest identity from join through upgrade or invalidation.Functional scope- Document guest entry bannering, restricted-menu treatment and upgrade CTA placements.UI / interaction requirements- Guest join must create a temporary subject only when invite policy allows.- Guest users must see only features allowed for temporary identities.- Upgrade flow must clearly explain what data will be preserved.Wireframe / layout notes- Include mapping rules between guest identity and registered account subject.Backend / platform-neutral technical requirements- Guest subject record must have expiry/invalidation semantics.- Votes, event memberships and notification subscriptions must be transferable on upgrade when the same logical actor is confirmed.State model / edge cases- Guest session expired before completing upgrade.- Guest joins multiple eligible events before upgrading.Acceptance criteria- Guest model is implementable without hidden web assumptions.

Parent: SYN-5 — SYN | Authentication, identity and guest access",
      "labels": [
        "auth",
        "guest",
        "mobile-spec",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-27",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-28",
      "key": "SYN-28",
      "summary": "SYN | Specify password reset and in-app password change flows",
      "description": "h1. ObjectiveDocument both out-of-band password recovery and in-app password change so user security flows are fully portable.h1. Primary actors* Registered user who forgot password; signed-in user changing password from profile.h1. Functional scope* Forgot-password request:** user enters email;** system confirms request without leaking account existence beyond configured policy;** reset email is issued.* Reset completion:** password reset link/token opens dedicated route;** user sets and confirms new password;** expired/invalid token behavior is recoverable.* In-app password change:** current password may or may not be required per auth provider policy;** new password and confirmation validation;** success toast and session refresh behavior.h1. UI / wireframe requirements* Forgot-password and reset-password pages must be specified separately from standard auth.* Password requirements panel must list live validation rules.* Show/hide password toggles, inline mismatch messaging and final success state must be defined.h1. Backend / integration requirements* Document reset token validation, password update endpoint and session invalidation/refresh policy.* Document any difference between password-capable accounts and social-login-only accounts.* Define audit/security events for password reset requested, reset completed and password changed in-app.h1. Edge cases and non-functional requirements* Prevent weak password acceptance and mismatched confirmation.* Expired reset tokens must redirect into a recoverable re-request flow.* Social-login-only accounts must not see unusable password-change actions without explanatory messaging.h1. Acceptance criteria* Recovery and in-app password flows are fully specified with validation, error handling and server interactions.SYN | Specify password reset and in-app password change flowsPurposeDefine registered-user credential recovery and in-app password maintenance.Functional scope- Document forgot password, reset password and in-profile password change cards.UI / interaction requirements- Forgot password must request email, send reset link and confirm without leaking account existence.- Reset screen must validate token freshness and password policy.- Profile password change must ask for current password unless external provider-only account logic says otherwise.Wireframe / layout notes- Specify password policy in product language and technical validation terms.Backend / platform-neutral technical requirements- Reset token issuance, expiry, single-use behavior and invalidation must be documented.- Password-change endpoint must emit audit event and revoke other sessions if business rule requires.State model / edge cases- Expired token.- Already used token.- Provider-only account without local password.Acceptance criteria- Credential recovery can be built securely on any client platform.

Parent: SYN-5 — SYN | Authentication, identity and guest access",
      "labels": [
        "auth",
        "mobile-spec",
        "security",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-28",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-29",
      "key": "SYN-29",
      "summary": "SYN | Specify event creation flow, templates and field validation",
      "description": "h1. ObjectiveDescribe how a user creates a new event calendar, either from templates or from manual input, with full field semantics and validation.h1. Primary actors* Event creator; invited participant receiving the resulting link.h1. Functional scope* Creation entry points:** global create-event CTA;** template-driven quick-start;** blank/custom event setup.* Required fields:** title;** start date;** end date.* Optional/configurable fields:** category;** description with max-length rules;** voting deadline;** default vote mode;** participant-sharing permission;** anonymous-join/share mode.* Date-picker behavior:** only one date popover may be open at a time;** start-date selection may auto-open end-date selection only when end date is not yet set;** popover closes only via explicit close or OK/Save action, not by accidental outside click.h1. UI / wireframe requirements* Create-event dialog wireframe must define:** header, close action, template toggle, form sections, save CTA and cancel behavior;** desktop modal versus mobile full-height sheet adaptation;** field ordering and spacing;** disabled state of submit until required fields are valid.* Template chooser must be collapsed by default behind a dedicated CTA and expand only on demand.* Date fields must show localized labels, selected date summary and validation messaging.h1. Backend / integration requirements* Document event-creation request schema:** title, category, description, start_date, end_date, deadline, allow_participant_sharing, allow_anonymous, default_vote, creator_id.* Document derived fields:** month/year from start_date or visible month context;** is_active default state;** decided_date initially null.* Define validation rules server-side to mirror client validation and reject invalid ranges or impossible deadlines.h1. Edge cases and non-functional requirements* End date may not be earlier than start date.* Deadline rules must be clear when omitted, when equal to event start date and when already elapsed.* Event creation must be atomic with creator membership initialization if that is part of the data model.h1. Acceptance criteria* Creation flow is fully specified, including templates, date controls, validation, save/cancel and persisted fields.* A native team can implement the create flow without reading the current dialog component code.SYN | Specify event creation flow, templates and field validationPurposeDefine complete creation of an event calendar from entry CTA to persisted event and immediate post-create state.Functional scope- Provide wireframes for create modal/screen on mobile and wide layouts.- Document date-picker open/close rules, explicit OK/cancel behavior and no accidental close on misclick.UI / interaction requirements- Support template-based and manual creation.- Fields include title, category, description, start date, end date, optional deadline, share posture and defaults.- Save button active only when required fields valid.Wireframe / layout notes- Document field-level validation matrix including character limits and date order.Backend / platform-neutral technical requirements- Create API must validate chronology, field limits and owner identity.- Template catalog must be retrievable from backend or embedded configuration with versioning.State model / edge cases- Start date selected before end date exists should optionally prompt end date selection next.- Editing draft before save must not mutate persisted event list.Acceptance criteria- Create flow can be recreated exactly including validation and UX safeguards.

Parent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing",
      "labels": [
        "create",
        "events",
        "mobile-spec",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-29",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-30",
      "key": "SYN-30",
      "summary": "SYN | Specify event editing, deletion, restart and state transitions",
      "description": "h1. ObjectiveDocument how existing event calendars are edited, deleted, reopened or frozen, including creator-only actions and state transitions.h1. Primary actors* Event creator; participant observing changes; admin if elevated intervention exists.h1. Functional scope* Editing scope:** title, category, description, date range, deadline, sharing mode and other mutable metadata;** immutable versus mutable fields after votes exist must be defined explicitly.* Deletion scope:** creator-triggered event deletion;** participant-facing consequences;** cleanup of share tokens and notifications.* Restart/freeze scope:** restart voting action clears the decided/pinned state when allowed;** decided/pinned or deadline-reached events block further voting changes;** unlock of pinned day may re-enable voting if deadline has not passed.h1. UI / wireframe requirements* Edit-event surface must preserve explicit save and explicit close/cancel separation.* Existing event edit surface must define destructive section placement clearly separated from non-destructive actions.* Restart and delete actions must require confirmation dialogs with irreversible wording where applicable.h1. Backend / integration requirements* Document update payloads and partial-update rules.* Document event deletion cascade or soft-delete behavior for:** event_participants;** event_share_tokens;** votes;** notifications.* Document restart-voting operation and whether it clears decided_date only or any additional frozen-state flags.h1. Edge cases and non-functional requirements* Concurrent editing by creator on multiple devices must be resolved deterministically.* Participants must not be able to mutate creator-only fields.* Historical notifications should preserve event title snapshot even if the event is later deleted.h1. Acceptance criteria* All creator-only event state transitions are specified with user-facing outcomes and data implications.SYN | Specify event editing, deletion, restart and state transitionsPurposeDefine all mutable operations after an event exists, including safe destructive actions.Functional scope- Document edit screen/modal and delete/restart confirmation patterns.UI / interaction requirements- Event owner can edit allowed fields.- Deletion requires explicit confirmation and user-impact messaging.- Restart voting must clear decided state and restore voting if allowed by deadline/state.Wireframe / layout notes- Provide editable vs non-editable field matrix by event state.Backend / platform-neutral technical requirements- Edit API must reject forbidden mutations based on state.- Delete operation must soft delete or hard delete per documented rule and notify affected users.- Restart voting must be auditable.State model / edge cases- Attempt edit after event frozen or deleted.- Owner changes date range while votes already exist.Acceptance criteria- Post-create event management is fully specified.

Parent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing",
      "labels": [
        "edit",
        "events",
        "mobile-spec",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-30",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-31",
      "key": "SYN-31",
      "summary": "SYN | Specify event selector, default event and active/inactive visibility",
      "description": "h1. ObjectiveDescribe how users browse, select and restore among multiple event calendars they own or participate in.h1. Primary actors* Creator with multiple events; participant invited to multiple events; temporary guest linked to one event.h1. Functional scope* Event selector must show:** currently selected event;** event category chip or secondary metadata;** participant ratio summary if applicable;** active/inactive/expired status visibility.* Default selected event rules:** restore last selected event if still accessible;** otherwise choose preferred event by active status and recency;** temporary user is forced onto linked event.* Ranking side panel and batch panel must refresh when selected event changes.h1. UI / wireframe requirements* Wireframe must define selector collapsed state, expanded list item anatomy, sort order and truncation rules.* Selected event switch must not crop the main calendar.* Mobile behavior must specify whether selector expands inline or opens as sheet.h1. Backend / integration requirements* Document events-list query including creator-owned and participant-linked events.* Include fields needed for selector rendering and access control.* Document inactive/expired state derivation and sorting inputs.h1. Edge cases and non-functional requirements* If the selected event is deleted remotely, app must recover to a valid event or empty-state.* Temporary users must never see inaccessible events in the selector.h1. Acceptance criteria* Event selection and restoration behavior is fully deterministic across app restarts and role types.SYN | Specify event selector, default event and active/inactive visibilityPurposeDefine how users find, switch and persist currently active events.Functional scope- Document selector placement in header and empty-state treatment when no events exist.UI / interaction requirements- Event selector lists relevant events in deterministic order.- Default event restore occurs after app launch and after auth.- Inactive/deleted/expired events must display according to visibility rules.Wireframe / layout notes- Specify ordering, badges and truncation rules in the selector list.Backend / platform-neutral technical requirements- List API must support paging/filtering if needed.- Client stores last-selected event key but validates access on restore.State model / edge cases- Restored event no longer accessible.- User is member of many events.Acceptance criteria- Selected-event behavior is stable across app restarts and role changes.

Parent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing",
      "labels": [
        "events",
        "mobile-spec",
        "selector",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-31",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-32",
      "key": "SYN-32",
      "summary": "SYN | Specify share-link generation, management and distribution",
      "description": "h1. ObjectiveDocument how creators and allowed participants generate, copy, view and revoke invite links for event calendars.h1. Primary actors* Event creator; participant with sharing permission; invited recipient.h1. Functional scope* Share dialog must support:** registered-users-only join mode;** registration-free/anonymous join mode if allowed;** generation of one or more active invite links;** copy link, delete link and share-to-channel actions.* Each link may carry constraints:** allow_anonymous;** optional email restriction;** optional expiry;** max uses;** use count display.* Share UI must provide message text suitable for SMS/text copy and grouped social channel options.h1. UI / wireframe requirements* Share dialog wireframe must define:** header, mode toggle, link-creation CTA, active-link cards, per-link actions and share options.* Social section may collapse secondary channels behind a grouped CTA, but the visual asset must still present official channel branding where available.* Copy success feedback, delete confirmation and empty-state messaging must be defined.h1. Backend / integration requirements* Document event_share_tokens schema and lifecycle:** token generation;** revocation;** expiry check;** use-count increment;** anonymous-vs-auth enforcement.* Document join-event endpoint requirements for token validation and link consumption.h1. Edge cases and non-functional requirements* Revoked or exhausted links must fail safely with explicit user messaging.* Multiple active links for the same event must coexist without corrupting counts.* Participant sharing permission must be evaluated on every share action, not only at initial screen load.h1. Acceptance criteria* Invite creation and consumption are fully specified, including permissions, token lifecycle and UI actions.SYN | Specify share-link generation, management and distributionPurposeDefine the full sharing surface for invite links and channel-oriented distribution.Functional scope- Document share dialog with grouped channels and active-link list.- Document desktop and mobile modal sizing with capped height and internal scrolling.UI / interaction requirements- Owner can create multiple invite links depending on policy.- Share dialog supports copy, delete/revoke and grouped social channels.- Registration-required and guest-allowed links must be visually distinct.Wireframe / layout notes- Specify channel grouping, iconography rules and fallback when a native app is unavailable.Backend / platform-neutral technical requirements- Invite token records require event ID, creator, policy, status, created/updated timestamps and optional usage rules.- Share actions can be client-side wrappers around canonical invite URL.State model / edge cases- Link revoked after being shared.- Guest link used after event is decided or deleted.Acceptance criteria- Invite management and share UX are platform-neutral and complete.

Parent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing",
      "labels": [
        "invite",
        "mobile-spec",
        "sharing",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-32",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-33",
      "key": "SYN-33",
      "summary": "SYN | Specify invite join flow for registered and registration-free participants",
      "description": "h1. ObjectiveDescribe the join-event journey from opening a share link through successful participation or graceful rejection.h1. Primary actors* Anonymous invitee; registered user; temporary guest; creator viewing participant result.h1. Functional scope* Join-event must branch into:** loading/validation;** invalid or expired link;** already joined/already has access;** authenticated user join success;** registration-free guest join success;** auth-required because link disallows anonymous;** event unavailable because event is inactive or deleted.* For guests, system may require a lightweight identity creation step before landing them in the event.* On success, the event should be opened immediately or after auth completion according to the validated redirect rule.h1. UI / wireframe requirements* Join page must define status-card variants for each outcome with clear CTA hierarchy.* Loading state, success confirmation, copy/share reminders and upgrade CTA placement must be defined.* Event-unavailable modal content must be specified separately from generic join-error copy.h1. Backend / integration requirements* Define join-event action contracts:** validate token;** join registered user;** issue/restore temporary guest access;** complete email activation if invite-driven registration is used.* Define participant creation idempotency and duplication safeguards.h1. Edge cases and non-functional requirements* Reopening the same link after already joining must not create duplicate participants.* Joining a deleted/inactive event must not result in a partially created temp session.* Guest join must preserve enough context to continue on another screen without requiring re-entry of the link in the same session.h1. Acceptance criteria* Every join outcome is documented with UI, backend contract and post-success navigation.SYN | Specify invite join flow for registered and registration-free participantsPurposeDefine the complete join-event flow from invite link open to event membership and first-usable screen.Functional scope- Document join splash/loading, outcome messages and CTAs.UI / interaction requirements- Registered and guest branches must both be covered.- Outcome states must include success, already member, expired link, unauthorized link type, deleted event and decided/frozen event.- Post-join screen must be deterministic.Wireframe / layout notes- Specify whether a decided event remains viewable after join.Backend / platform-neutral technical requirements- Join endpoint must validate token, membership and policy.- Guest join may mint session and membership atomically.State model / edge cases- Authenticated user opens guest-allowed link.- Guest opens registration-required link.Acceptance criteria- Any invite URL can be handled without ambiguity.

Parent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing",
      "labels": [
        "guest",
        "join-event",
        "mobile-spec",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-33",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-34",
      "key": "SYN-34",
      "summary": "SYN | Specify calendar grid rendering, month navigation and date eligibility",
      "description": "h1. ObjectiveDocument the calendar grid as the canonical voting surface, including month math, date eligibility and responsive rendering rules.h1. Primary actors* Creator; participant; temporary guest.h1. Functional scope* Calendar grid must render the selected event month(s) with day-of-week headers and leading/trailing placeholders.* Date eligibility must enforce:** not earlier than event start date;** not later than event end date;** not earlier than current date when the visible event rules disallow past voting;** not editable when decided_date or freeze flag is active;** not editable when deadline has passed.* Navigation must permit month switching when event spans multiple months; navigation controls must be disabled or hidden when not applicable.h1. UI / wireframe requirements* Calendar is the primary content region and must never be horizontally truncated.* Day cells must preserve square-like shape and minimum readable tap size while side panels adapt around it.* Visual states to specify:** empty placeholder cell;** eligible neutral day;** selected good/maybe/bad vote day with gradient fill;** disabled non-eligible day;** current day;** pinned/decided day indicator;** info icon and count dot positions.h1. Backend / integration requirements* Client requires event metadata: start_date, end_date, decided_date, deadline, default_vote and visible month context.* If server precomputes eligibility or freeze status, document those response flags and precedence rules.h1. Edge cases and non-functional requirements* Click, tap and drag eligibility must be identical; a day that is disabled for single click must also be disabled for range drag.* First-week and second-week spacing anomalies must be prohibited by layout rules.* Month switch must preserve current vote view without stale disabled-state artifacts.h1. Acceptance criteria* The month grid, eligibility logic and rendering states are fully specified and testable across breakpoints.SYN | Specify calendar grid rendering, month navigation and date eligibilityPurposeDefine the canonical calendar surface and all date eligibility rules.Functional scope- Provide wireframe for calendar-first layout with left ranking and right batch panels adapting to the calendar width.UI / interaction requirements- Month grid must render leading/trailing placeholders consistently.- Date cells expose state for eligible, ineligible, past, today, selected vote, decided and info-available.- Calendar must stay fully visible; side panels adapt around it.Wireframe / layout notes- Specify spacing normalization so large blank gutters do not appear between side panels and the calendar.Backend / platform-neutral technical requirements- Eligibility engine must combine event start/end, current date, deadline, freeze/decided state and user role.- Calendar dataset may precompute month slices or generate client-side from event boundaries.State model / edge cases- Month starts mid-week.- Current day equals event start.- Date in range but before today.Acceptance criteria- Calendar rendering does not depend on implicit CSS quirks from the web app.

Parent: SYN-7 — SYN | Voting calendar, day details and batch interactions",
      "labels": [
        "calendar",
        "mobile-spec",
        "story",
        "SYN",
        "voting"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-34",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-35",
      "key": "SYN-35",
      "summary": "SYN | Specify single-day vote interactions, info icon and long-press details",
      "description": "h1. ObjectiveDescribe how a user inspects a day and applies or removes a vote through tap/click/long-press interactions.h1. Primary actors* Creator; participant; temporary guest.h1. Functional scope* Vote methods:** if an availability mode is currently selected, tapping an eligible day applies that mode;** tapping the same already-selected value again removes the vote if product rules allow toggle-off;** info icon must open details only and must never mutate vote state;** long-press on mobile opens day details without requiring the tiny info icon.* Detail access must exist for every day within the event date range, even when the day is no longer editable because it is in the past or voting is frozen.h1. UI / wireframe requirements* Day details open as dialog on desktop and sheet on mobile unless another platform-specific pattern is mandated.* The info icon must be placed within the day cell hit area but isolated from vote-tap handling.* Long-press threshold, visual feedback and cancellation conditions must be defined.* If the day is ineligible for editing but still within event range, UI must still allow read-only details access.h1. Backend / integration requirements* Day details require aggregated vote counts and participant-by-participant values for that date.* Detail query must return enough data for participant list, creator/friend actions and status counts.h1. Edge cases and non-functional requirements* Clicking info icon must never trigger vote add/remove.* Long-press should not accidentally vote while opening details.* Read-only detail opening must remain available after pinning and after deadline.h1. Acceptance criteria* Single-day interaction model is fully described for desktop and mobile, including info-only actions and read-only cases.SYN | Specify single-day vote interactions, info icon and long-press detailsPurposeDefine single-day voting and detail access without gesture conflicts.Functional scope- Document cell anatomy including info affordance placement and touch target sizes.UI / interaction requirements- Tap/click on day applies currently selected vote value or removes the same value by toggle rule.- Info icon and long-press open details only.- Touch drag initiation threshold must prevent accidental vote writes when user aims for info.Wireframe / layout notes- Specify parity between mouse click, touch tap and long-press.Backend / platform-neutral technical requirements- Vote mutation endpoint must be idempotent for same-value repeated writes.- Details-open interaction must not call vote mutation handlers.State model / edge cases- Long-press on disabled day.- Tap on info icon while batch panel vote value active.- Cell selected on frozen event.Acceptance criteria- Mobile and desktop interactions are unambiguous and parity-tested by spec.

Parent: SYN-7 — SYN | Voting calendar, day details and batch interactions",
      "labels": [
        "calendar",
        "day-details",
        "mobile-spec",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-35",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-36",
      "key": "SYN-36",
      "summary": "SYN | Specify drag range voting and batch side-panel behavior",
      "description": "h1. ObjectiveDescribe batch voting through direct drag selection and through the dedicated batch side panel.h1. Primary actors* Creator; participant; temporary guest.h1. Functional scope* Direct drag voting:** user chooses current availability mode;** press/hold + drag across eligible days applies the selected value to each traversed eligible date;** ineligible dates are skipped and do not break the whole operation;** click-drag parity across mouse and touch is mandatory.* Batch side panel:** user chooses vote value, start date and end date;** apply CTA updates all eligible dates in range;** range can be cleared before apply;** full clear-all may delete all current user's votes for the active event.* When event is pinned/decided, batch panel remains visible but all interactive controls are disabled.h1. UI / wireframe requirements* Batch panel must remain visible beside calendar on large screens and move into an accessible stacked/mobile location on small screens.* Disabled state for pinned/decided events must visually keep the panel present but clearly non-interactive.* Drag operation may show transient highlighting but must not require a secondary confirmation.h1. Backend / integration requirements* Define bulk-vote mutation contract:** event_id;** date_from/date_to;** vote_value;** actor identity;** server response with affected row count and skipped dates.* Define clear-all vote deletion contract scoped to actor + event.h1. Edge cases and non-functional requirements* Drag selection must respect same date eligibility rules as single click.* Batch apply must ignore dates outside event range, before today or after deadline/freeze.* Partially successful bulk updates must report skipped dates and still preserve valid updates if that is the chosen policy.h1. Acceptance criteria* Batch side panel and drag-range behavior are fully specified, including disabled locked-state presentation.SYN | Specify drag range voting and batch side-panel behaviorPurposeDefine multi-day selection via drag gestures and batch side-panel voting.Functional scope- Document panel contents, disabled styling and clear/reset button behavior.UI / interaction requirements- Batch panel stays visible even when disabled by decided flag.- Drag across eligible days writes one vote value across the range.- Disabled or out-of-range dates are skipped and do not break the gesture unless specified.Wireframe / layout notes- Specify gesture start/continue/end rules and auto-scroll behavior if any.Backend / platform-neutral technical requirements- Batch mutation endpoint may accept range or expanded date list but contract must define behavior on partial invalid dates.- Decided flag must render panel inert while preserving visual presence.State model / edge cases- Gesture begins on invalid day.- Gesture crosses ineligible/past dates.- Panel visible on narrow screens as drawer/sheet.Acceptance criteria- Range voting and side-panel behavior are completely specified.

Parent: SYN-7 — SYN | Voting calendar, day details and batch interactions",
      "labels": [
        "batch-vote",
        "calendar",
        "mobile-spec",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-36",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-37",
      "key": "SYN-37",
      "summary": "SYN | Specify day-details content model and participant social actions",
      "description": "h1. ObjectiveDefine the content and actions shown inside the day-details view for a selected date.h1. Primary actors* Creator; participant; temporary guest; registered user sending friend requests.h1. Functional scope* Day-details content must include:** selected date headline;** aggregated counts for good/maybe/bad;** participant list with individual choice;** optional indicators for creator, friend, favorite or pending friend request.* Social actions inside day details:** send friend request;** mark favorite;** reflect pending/accepted/favorite state;** do not show unsupported actions for temporary users.h1. UI / wireframe requirements* Desktop uses modal; mobile uses bottom or full-height sheet.* Participant rows must define:** avatar/initial;** display name or fallback;** vote badge;** friend/favorite action icons;** disabled/pending states.* Long lists must scroll within the container without causing background layout shifts.h1. Backend / integration requirements* Day-details query must join:** event votes for selected date;** participant profile display data;** friendship/favorite relationship state relative to current user.* Mutations for friend request and favorites must be documented, including optimistic update policy if any.h1. Edge cases and non-functional requirements* Temporary users may be allowed to read participant rows but blocked from social mutations.* Duplicate friend requests must be prevented and surfaced as idempotent.* Deleted user/profile rows in historical events need a fallback display strategy.h1. Acceptance criteria* Day-details is fully specified as a data view and action surface, including social relationship states.SYN | Specify day-details content model and participant social actionsPurposeDefine the day-details surface and all participant-level information/actions available there.Functional scope- Document row anatomy, section order and action placements for add friend / favorite.UI / interaction requirements- Day details show aggregated counts, participant rows, vote values and social actions.- Surface may appear as dialog on wide layouts and bottom sheet/full sheet on phones.- Creator and participant capabilities may differ inside the detail view.Wireframe / layout notes- Specify how guest identities are labeled and how hidden data is redacted.Backend / platform-neutral technical requirements- Day-details endpoint must return counts by vote type, participant list with identity metadata allowed by privacy rules, and social-action eligibility.State model / edge cases- Guest participants without full profile.- Day outside editable range but still viewable.Acceptance criteria- Day details can be rebuilt as a complete feature from the spec.

Parent: SYN-7 — SYN | Voting calendar, day details and batch interactions",
      "labels": [
        "day-details",
        "friends",
        "mobile-spec",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-37",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-38",
      "key": "SYN-38",
      "summary": "SYN | Specify personal availability calendar and synchronization into events",
      "description": "h1. ObjectiveDescribe the standalone personal availability calendar that users maintain outside any single event and may copy into eligible events.h1. Primary actors* Registered user maintaining availability; event participant importing personal availability into current event.h1. Functional scope* Personal availability supports:** month navigation;** single-day cycling through good/maybe/bad;** batch range updates in personal context;** copying availability into a selected event.* Personal availability data is independent from any event vote, but can be projected into an event when the event is eligible and not pinned/frozen.* Events available as copy targets must exclude those whose deadline has passed or whose decided_date is set.h1. UI / wireframe requirements* Personal calendar wireframe must define:** month header;** day-cell state colors;** copy-to-event dialog;** batch side controls where applicable.* Copy dialog must let the user choose target event and scope (all/current month) if supported.* Disabled states and no-data messaging must be defined clearly.h1. Backend / integration requirements* Document personal_availability table contract and CRUD mutations.* Document copy operation as server-side batch translation or client-orchestrated copy, including duplicate handling.* Define synchronization boundaries: copying creates/updates event votes but must not establish ongoing live sync after that operation.h1. Edge cases and non-functional requirements* Copy must ignore dates outside event range.* Copy must not override pinned/decided events.* No-data result must return a friendly, deterministic outcome.h1. Acceptance criteria* Personal availability and one-time copy-to-event behavior are fully specified.SYN | Specify personal availability calendar and synchronization into eventsPurposeDefine the separate personal availability calendar and how its data can project into event voting.Functional scope- Document personal calendar screen or panel and copy-to-event flow.UI / interaction requirements- Personal availability is user-owned and spans arbitrary dates.- Projection into an event must respect event state and decided/deadline locks.- Projection cannot overwrite frozen/decided events.Wireframe / layout notes- Specify overwrite/merge rules when target event already has user votes on some dates.Backend / platform-neutral technical requirements- Personal availability data model must be separate from event votes.- Projection operation must audit source dates and target event.State model / edge cases- User selects availability then target event becomes decided.- Projection includes dates outside event range.Acceptance criteria- Personal calendar and projection rules are platform-neutral and complete.

Parent: SYN-7 — SYN | Voting calendar, day details and batch interactions",
      "labels": [
        "availability",
        "mobile-spec",
        "personal-calendar",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-38",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-39",
      "key": "SYN-39",
      "summary": "SYN | Specify ranking computation, filtering and ranking-to-calendar navigation",
      "description": "h1. ObjectiveDocument how the ranked day list is calculated, filtered, displayed and linked back to the calendar.h1. Primary actors* Any event participant; creator using rankings to decide final date.h1. Functional scope* Ranking source set:** include only dates inside event range;** exclude dates with no effective positive signal according to product rule;** current implementation expectation: do not surface dates that only received negative/no-go votes.* Ranking score must be deterministic and documented, including tie rules.* Ranking list is capped (e.g. top 10) and clicking an item focuses the corresponding calendar date/day details.h1. UI / wireframe requirements* Ranking row anatomy:** ordinal badge/medal;** formatted date;** compact good/maybe/bad counters;** top-ranked highlighting.* Empty state copy must be specified.* Clicking a ranking row must define the resulting focus behavior: scroll, select day, open details or both.h1. Backend / integration requirements* Document ranking aggregation:** per-date counts;** score formula;** sorting precedence (score, date proximity, chronological fallback, etc.).* If ranking is computed client-side, document exact source query and algorithm.h1. Edge cases and non-functional requirements* Tie ordering must be deterministic and locale-independent.* Ranking must update after vote mutations, event change, pin/unpin and restart.* Dates outside visible month but inside event range must still be rankable and navigable.h1. Acceptance criteria* Ranking behavior and score math are explicit enough for backend, mobile and QA to produce identical lists.SYN | Specify ranking computation, filtering and ranking-to-calendar navigationPurposeDefine how ranking is calculated, filtered and linked back to the calendar.Functional scope- Document ranking panel sizing, medals/order badges and disabled/empty states.UI / interaction requirements- Ranking rows show order, date and vote counts.- Negative-only dates can be excluded by rule.- Selecting a ranking row focuses the calendar on that date/month.Wireframe / layout notes- Specify sort precedence across score, chronology and stable identifiers.Backend / platform-neutral technical requirements- Aggregation endpoint must return deterministic sorted rows and tie metadata.State model / edge cases- Many tied dates.- No positive/maybe votes at all.Acceptance criteria- Ranking behavior can be implemented identically across clients.

Parent: SYN-8 — SYN | Ranking, pinned day and notifications",
      "labels": [
        "mobile-spec",
        "ranking",
        "story",
        "SYN",
        "voting"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-39",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-40",
      "key": "SYN-40",
      "summary": "SYN | Specify pinned-day selection, modification and unlock flow",
      "description": "h1. ObjectiveDescribe the creator-only “Nap kitűzése” feature including tie handling, later modification and unlocking to resume voting.h1. Primary actors* Event creator; participants observing frozen state and receiving notification.h1. Functional scope* When no decided_date exists:** creator sees “Nap kitűzése” CTA;** if one highest-ranked day exists, that day may be preselected or directly proposed;** if multiple top-ranked days tie, open a selection dialog listing only tied dates;** default highlighted option is the closest upcoming eligible date among tied options.* When decided_date exists:** creator sees “Kitűzött nap módosítása” CTA;** dialog lists only highest-ranked dates and includes explicit “Feloldás” destructive action to remove decided_date and resume voting if deadline has not passed.* Setting decided_date freezes event voting and personal-availability copy into that event.h1. UI / wireframe requirements* Header layout must reserve a stable slot for:** pin/unpin/modify CTA;** displayed decided-date chip in the designated center area.* Pin dialog requirements:** fixed maximum visible list of five date options with internal scroll for more;** radio selection;** primary save button active only when a date is selected;** close icon and cancel button;** destructive “Feloldás” action only in modify mode.* Notifications and batch panel disabled styling must update immediately after save.h1. Backend / integration requirements* Document operations:** set decided_date;** update decided_date to another tied date;** clear decided_date / unlock.* Document permissions:** creator only;** server must reject participant attempts even if client is stale.* Setting/clearing decided_date must emit corresponding notification events.h1. Edge cases and non-functional requirements* Unlock is forbidden if the event is otherwise hard-closed by deadline/freeze policy.* Dialog must never render unbounded height; only internal list scroll is allowed.* Modify flow must remain available for events that already have decided_date, unless business rules explicitly close it.h1. Acceptance criteria* The full pin/modify/unlock lifecycle is completely specified, including dialog UX, server mutations and frozen-state side effects.SYN | Specify pinned-day selection, modification and unlock flowPurposeDefine creator-only selection, modification and unlocking of a pinned day.Functional scope- Document header placement for pin CTA, decided pill and modify CTA.UI / interaction requirements- When one date leads, default selection is immediate.- When multiple top-ranked dates tie, dialog opens with recommended default and alternative options.- After pinning, voting freezes until unlock if allowed.Wireframe / layout notes- Specify tie dialog visible-row cap and internal scrolling.Backend / platform-neutral technical requirements- Pinned date is persisted on event as decided_date or equivalent.- Unlock operation clears decided_date and regenerates notifications/audit event.State model / edge cases- Event already decided.- Deadline passed so unlock not allowed.- Tie list longer than visible modal area.Acceptance criteria- Pin/modify/unlock can be rebuilt exactly including constraints and notifications.

Parent: SYN-8 — SYN | Ranking, pinned day and notifications",
      "labels": [
        "mobile-spec",
        "notifications",
        "pinned-day",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-40",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-41",
      "key": "SYN-41",
      "summary": "SYN | Specify notification center, unread state and row actions",
      "description": "h1. ObjectiveDescribe the notification bell, counter, panel layout and per-row actions for all user-visible notifications.h1. Primary actors* Registered user; temporary guest where notifications are supported.h1. Functional scope* Notification center must support:** bell icon in global header beside profile;** unread counter based on rows not marked seen and not deleted;** list sorted newest first;** per-row mark-as-read and delete actions;** read/unread visual distinction;** explicit close action only; tapping a row does not close the panel.* Panel sizing rule:** show at most five notifications without expanding height;** additional items accessible via internal scroll on desktop and touch scroll on mobile.h1. UI / wireframe requirements* Notification panel wireframe must define:** title row;** close icon;** scroll container;** row anatomy including title, body, timestamp, seen icon, delete icon.* Subtitle under panel title is not required and should be absent unless later reintroduced by design decision.* Only one scrollbar should be visible for the list; no duplicate nested scrollbars.h1. Backend / integration requirements* Notification entity fields:** id;** user_id or temp_user_id;** type;** title/event title snapshot;** body/message;** created_at;** is_read/is_seen;** deleted_at or is_deleted;** related_event_id optional;** payload containing decided date or actor display name where needed.* Query contract must support newest-first pagination.h1. Edge cases and non-functional requirements* Guest users must receive the same supported event notifications as registered participants for events they can still access.* Mark-as-read and delete actions must be idempotent.* Opening the panel must not auto-mark all rows as read unless explicitly specified elsewhere.h1. Acceptance criteria* Notification center behavior, data model and visual states are fully specified for desktop and mobile.SYN | Specify notification center, unread state and row actionsPurposeDefine the notification center surface and behavior.Functional scope- Document panel header, close button, row states, read state styling and per-row actions.UI / interaction requirements- Bell icon sits near profile entry and shows unread badge count.- Panel height is capped to roughly 5 visible rows with internal scrolling.- Row press must not auto-close the panel.Wireframe / layout notes- Specify dual-scroll avoidance and single-scroll ownership in capped panels.Backend / platform-neutral technical requirements- Notification query supports latest-first ordering, unread count and mark-read/delete actions.- Guests receive supported notifications under parity rules.State model / edge cases- Many notifications.- No notifications.- Unread count after delete or mark-read.Acceptance criteria- Notification center UI and behavior are fully specified.

Parent: SYN-8 — SYN | Ranking, pinned day and notifications",
      "labels": [
        "mobile-spec",
        "notifications",
        "story",
        "SYN",
        "ux"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-41",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-42",
      "key": "SYN-42",
      "summary": "SYN | Specify event-driven notification triggers and payload content",
      "description": "h1. ObjectiveEnumerate every event that must generate a notification and the exact message payload required for display.h1. Primary actors* Creator, participant, temporary guest, users in friendship workflows.h1. Functional scope* Notification trigger catalog must include at minimum:** pinned day set;** pinned day modified;** pinned day unlocked;** friend request received;** event deleted while the user was participant/guest;** voting restarted by creator;** any additional share/join/admin triggers explicitly chosen by product.* Each trigger must define:** recipients;** title and body template;** timestamp source;** related event id;** whether unread counter increments;** whether guest recipients are supported.h1. UI / wireframe requirements* Message text must contain enough context to be meaningful in the list without opening the event.* Notification body copy should include event title and the changed day/date when relevant.h1. Backend / integration requirements* Define a publishable notification-event contract and where it is emitted from:** event update workflow;** friendship mutation;** delete/restart actions.* Define deduplication rules to avoid duplicate notifications during retries.h1. Edge cases and non-functional requirements* If event title changes after notification creation, row may show either snapshot title or current title; whichever is chosen must be documented consistently.* Deleted events should still allow row rendering with safe fallback text.h1. Acceptance criteria* Trigger-to-payload mapping is fully specified for all supported notification events.SYN | Specify event-driven notification triggers and payload contentPurposeDefine which product events create notifications and the exact payload content.Functional scope- Document message templates and localization placeholders.UI / interaction requirements- Covered triggers include pin, repin, unlock, friendship, event deletion and voting restart.- Notification body must include event name and outcome text.- Guest and registered recipients may differ by event type and membership.Wireframe / layout notes- Provide template variables and actor/recipient visibility rules.Backend / platform-neutral technical requirements- Notification event producer must emit typed payloads with actor, event, target date and timestamps.- Delivery layer must support idempotency.State model / edge cases- Repeated identical operations in short interval.- Recipient removed before delivery.Acceptance criteria- All supported notification events and payloads are implementation-ready.

Parent: SYN-8 — SYN | Ranking, pinned day and notifications",
      "labels": [
        "events",
        "mobile-spec",
        "notifications",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-42",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-43",
      "key": "SYN-43",
      "summary": "SYN | Specify profile page, account summary and user preferences",
      "description": "h1. ObjectiveDescribe the profile hub where a full registered user manages account information, availability utilities and preference surfaces.h1. Primary actors* Registered user only.h1. Functional scope* Profile page must aggregate:** account summary/header;** personal availability calendar access or embedded view;** password change;** delete-account section at the very bottom with low visual emphasis relative to primary actions;** any preference toggles supported by the product.* Temporary users are blocked from profile and redirected back to app workspace.h1. UI / wireframe requirements* Profile screen wireframe must define:** section order;** card hierarchy;** responsive stacking;** safe spacing for destructive actions.* Account deletion card must be visually de-emphasized compared to common profile actions and positioned at the bottom of the page.h1. Backend / integration requirements* Define profile payload: display name, email, role flags, is_temporary, preferences, created_at and any derived status shown in profile.* Define update operations for editable preferences if present.h1. Edge cases and non-functional requirements* Social-login-only accounts may have reduced capabilities for password fields and must receive clear messaging.* Profile must gracefully handle partially missing optional data.h1. Acceptance criteria* Profile page structure and section behavior are fully specified for a native rebuild.SYN | Specify profile page, account summary and user preferencesPurposeDefine the profile surface, account summary and user preference behavior.Functional scope- Document section order, spacing and destructive-action placement low on page.UI / interaction requirements- Profile shows account identity, auth method, security actions and other personal sections.- Guests may be blocked from unsupported features with clear CTA to upgrade.Wireframe / layout notes- Provide card ordering and empty-state treatment for each section.Backend / platform-neutral technical requirements- Profile bootstrap endpoint must return account basics, counts and feature flags.State model / edge cases- OAuth-only account without local password.Acceptance criteria- Profile page can be reconstructed exactly.

Parent: SYN-10 — SYN | Profile, friends and administrative operations",
      "labels": [
        "account",
        "mobile-spec",
        "profile",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-43",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-44",
      "key": "SYN-44",
      "summary": "SYN | Specify friends, pending requests and favorites management",
      "description": "h1. ObjectiveDescribe the full social graph feature set used across profile and event day-details.h1. Primary actors* Registered user searching by email; user receiving a friend request; user marking favorites.h1. Functional scope* Friend features:** search by email;** send friend request;** receive request;** accept/decline/cancel if supported;** view pending sent and received requests;** favorites list.* Relationship states:** no relationship;** outgoing pending;** incoming pending;** accepted friend;** favorite.* Social actions available from day-details must synchronize with profile lists and notification counts.h1. UI / wireframe requirements* Friends area must define:** search field and search action;** favorites section;** outgoing pending section;** incoming pending section if supported;** per-row action icons and status chips.* Favorite and friend-request icons shown elsewhere in app must visually align with profile state.h1. Backend / integration requirements* Document friendships model:** requester_id;** addressee_id;** status;** timestamps.* Document favorites model:** owner user id;** favorite_user_id.* Define search constraints and privacy safeguards for email-based discovery.h1. Edge cases and non-functional requirements* Duplicate or reciprocal friend requests must resolve deterministically.* Favorite cannot exist for a non-friend unless the product explicitly allows it; whichever rule is chosen must be documented.* Deleted users must be handled gracefully in lists and notifications.h1. Acceptance criteria* Friendship, pending and favorite states are fully specified across profile and event surfaces.SYN | Specify friends, pending requests and favorites managementPurposeDefine friendship, pending-request and favorite management across the product.Functional scope- Document friends list, pending lists and quick actions.UI / interaction requirements- Users can search by email, send requests, accept/decline, favorite and remove favorite.- Social actions also appear in day details.Wireframe / layout notes- Specify de-duplication and anti-spam behavior for repeated requests.Backend / platform-neutral technical requirements- Friendship entity must track lifecycle state and timestamps.State model / edge cases- Request already exists.- User attempts to friend self.Acceptance criteria- Friends/favorites system is fully specified.

Parent: SYN-10 — SYN | Profile, friends and administrative operations",
      "labels": [
        "friends",
        "mobile-spec",
        "social",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-44",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-45",
      "key": "SYN-45",
      "summary": "SYN | Specify account deletion and security confirmation workflow",
      "description": "h1. ObjectiveDescribe the irreversible account deletion journey and the associated audit trail.h1. Primary actors* Registered user deleting own account.h1. Functional scope* Delete-account flow must include:** low-emphasis entry point at bottom of profile;** explicit warning copy;** confirmation step;** backend deletion or anonymization policy;** session termination after completion.* account_deletions audit record must capture deletion metadata required by product/legal policy.h1. UI / wireframe requirements* Delete-account card must be visually subordinate to normal profile cards.* Destructive CTA, confirmation dialog and final irreversible confirmation wording must be specified separately.* Success state must clearly explain that the account is deleted/signed out.h1. Backend / integration requirements* Document account_deletions fields and when they are written.* Document data cleanup scope:** profile;** votes;** created events or ownership reassignment policy;** friendships/favorites;** auth account.* Define whether hard delete or soft/anonymized delete is used per table.h1. Edge cases and non-functional requirements* Deletion must fail safely if dependent cleanup cannot complete.* Active guest sessions tied to the user after upgrade must also be invalidated.* Reauthentication may be required before deletion; if so, specify it.h1. Acceptance criteria* Deletion flow is sufficiently detailed for secure implementation and auditability.SYN | Specify account deletion and security confirmation workflowPurposeDefine secure account deletion from profile.Functional scope- Document placement at bottom of profile and confirmation flow.UI / interaction requirements- Deletion must be low-emphasis until intentionally reached.- Confirmation must clearly communicate irreversibility and effects.Wireframe / layout notes- Specify confirmation wording, optional re-auth and post-delete landing state.Backend / platform-neutral technical requirements- Deletion endpoint must be authenticated, audited and cascade/retain data per policy.State model / edge cases- Guest user.- Admin account restrictions if any.Acceptance criteria- Deletion flow is safe and implementable.

Parent: SYN-10 — SYN | Profile, friends and administrative operations",
      "labels": [
        "account",
        "mobile-spec",
        "security",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-45",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-46",
      "key": "SYN-46",
      "summary": "SYN | Specify admin dashboard, admin-users and admin-events capabilities",
      "description": "h1. ObjectiveDocument the administrative screens and management operations available only to privileged users.h1. Primary actors* Admin user.h1. Functional scope* Admin module must include:** admin dashboard entry;** user management view;** event management view.* Capabilities to specify:** browse/filter/search users;** inspect user status and temporary flags;** browse/filter/search events;** inspect event ownership, participant counts, active/inactive state, decided_date and deadlines;** any admin remediation or destructive actions currently supported or intentionally excluded.h1. UI / wireframe requirements* Admin IA must define tab or sub-navigation between dashboard, users and events.* Large data sets require searchable/filterable tables or list views.* Destructive admin actions require separate confirmations and audit expectations.h1. Backend / integration requirements* Document admin authorization gate and role claim.* Define admin query endpoints or filters over existing tables.* If admin actions mutate user/event state, document audit requirements.h1. Edge cases and non-functional requirements* Non-admin users must never see or deep-link into admin successfully.* Sensitive user data exposure in admin views must be minimised and documented.h1. Acceptance criteria* Admin surface is sufficiently specified for native/web parity even if some actions are read-only in the first implementation.SYN | Specify admin dashboard, admin-users and admin-events capabilitiesPurposeDefine admin-only operational surfaces.Functional scope- Document admin navigation and list/detail surfaces.UI / interaction requirements- Admin dashboard, users and events views must be restricted.- Admin can inspect health/summary metrics, user details and event details.Wireframe / layout notes- Specify filter sets, sort sets and bulk action boundaries.Backend / platform-neutral technical requirements- Admin APIs require role authorization and audit.State model / edge cases- No data.- Large result sets.Acceptance criteria- Admin module is implementable without web code.

Parent: SYN-10 — SYN | Profile, friends and administrative operations",
      "labels": [
        "admin",
        "mobile-spec",
        "operations",
        "story",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-46",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-47",
      "key": "SYN-47",
      "summary": "SYN | Specify canonical domain model and persistence boundaries for events, memberships, votes, invites, friendships and notifications",
      "description": "SYN | Specify canonical domain model and persistence boundaries for events, memberships, votes, invites, friendships and notificationsPurposeDefine the shared domain vocabulary and entity model so every platform and service uses the same object boundaries, identifiers and lifecycle fields.Functional scope- Define entities: User, GuestIdentity, Session, Event, EventMembership, InviteLink, Vote, PersonalAvailabilityVote, FriendRequest/Friendship, Notification, AuditEvent.- For each entity define required fields, optional fields, ownership, timestamps, soft-delete behavior and indexing needs.- Define derived projections such as ranking row, day detail aggregate and unread notification count.UI / interaction requirements- No UI should invent fields not present in the domain model.- Every displayed badge, chip and counter must map to a defined entity field or derived projection.Wireframe / layout notes- Document serialization rules for date/time, nullable fields and enums.Backend / platform-neutral technical requirements- Provide logical entity-relationship diagram notes.- List which screens read/write each entity.State model / edge cases- Clarify what survives account deletion, event deletion and guest upgrade.- Clarify difference between event vote and personal availability vote.Acceptance criteria- All downstream API stories can reference this as the source of truth for entities.

Parent: SYN-4 — SYN | App shell, navigation and design system",
      "labels": [
        "data-model",
        "mobile-spec",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-47",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-48",
      "key": "SYN-48",
      "summary": "SYN | Specify API contract catalog and error-code taxonomy",
      "description": "SYN | Specify API contract catalog and error-code taxonomyPurposeDefine the backend contract inventory and a unified error model for all clients.Functional scope- Catalog endpoints/actions with request schema, response schema, auth requirement and side effects.- Define shared error envelope and per-feature business error codes.- Define pagination/sorting conventions and optimistic concurrency rules if any.UI / interaction requirements- Every user action must map to a named command/query.- UI copy and branching must be driven by stable error codes, not raw server text.Wireframe / layout notes- Document transport-agnostic rules so REST, GraphQL or RPC can all implement the same semantics.Backend / platform-neutral technical requirements- Provide reference tables rather than implementation-language-specific stubs.State model / edge cases- Network failure vs business rule failure must be separate.Acceptance criteria- A backend can be reimplemented from the catalog without web client code.

Parent: SYN-4 — SYN | App shell, navigation and design system",
      "labels": [
        "api",
        "mobile-spec",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-48",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-49",
      "key": "SYN-49",
      "summary": "SYN | Specify app shell state machines and transition rules",
      "description": "SYN | Specify app shell state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by App shell.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.

Parent: SYN-4 — SYN | App shell, navigation and design system",
      "labels": [
        "mobile-spec",
        "shell",
        "state-machine",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-49",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-50",
      "key": "SYN-50",
      "summary": "SYN | Specify app shell wireframes, component anatomy and responsive layout notes",
      "description": "SYN | Specify app shell wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for App shell.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.

Parent: SYN-4 — SYN | App shell, navigation and design system",
      "labels": [
        "mobile-spec",
        "shell",
        "SYN",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-50",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-51",
      "key": "SYN-51",
      "summary": "SYN | Specify identity state machines and transition rules",
      "description": "SYN | Specify identity state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Identity.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.

Parent: SYN-5 — SYN | Authentication, identity and guest access",
      "labels": [
        "auth",
        "mobile-spec",
        "state-machine",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-51",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-52",
      "key": "SYN-52",
      "summary": "SYN | Specify identity wireframes, component anatomy and responsive layout notes",
      "description": "SYN | Specify identity wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Identity.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.

Parent: SYN-5 — SYN | Authentication, identity and guest access",
      "labels": [
        "auth",
        "mobile-spec",
        "SYN",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-52",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-53",
      "key": "SYN-53",
      "summary": "SYN | Specify event lifecycle state machines and transition rules",
      "description": "SYN | Specify event lifecycle state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Event lifecycle.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.

Parent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing",
      "labels": [
        "events",
        "mobile-spec",
        "state-machine",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-53",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-54",
      "key": "SYN-54",
      "summary": "SYN | Specify event lifecycle wireframes, component anatomy and responsive layout notes",
      "description": "SYN | Specify event lifecycle wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Event lifecycle.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.

Parent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing",
      "labels": [
        "events",
        "mobile-spec",
        "SYN",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-54",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-55",
      "key": "SYN-55",
      "summary": "SYN | Specify voting calendar state machines and transition rules",
      "description": "SYN | Specify voting calendar state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Voting calendar.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.

Parent: SYN-7 — SYN | Voting calendar, day details and batch interactions",
      "labels": [
        "calendar",
        "mobile-spec",
        "state-machine",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-55",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-56",
      "key": "SYN-56",
      "summary": "SYN | Specify voting calendar wireframes, component anatomy and responsive layout notes",
      "description": "SYN | Specify voting calendar wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Voting calendar.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.

Parent: SYN-7 — SYN | Voting calendar, day details and batch interactions",
      "labels": [
        "calendar",
        "mobile-spec",
        "SYN",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-56",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-57",
      "key": "SYN-57",
      "summary": "SYN | Specify ranking and notifications state machines and transition rules",
      "description": "SYN | Specify ranking and notifications state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Ranking and notifications.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.

Parent: SYN-8 — SYN | Ranking, pinned day and notifications",
      "labels": [
        "mobile-spec",
        "notifications",
        "state-machine",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-57",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-58",
      "key": "SYN-58",
      "summary": "SYN | Specify ranking and notifications wireframes, component anatomy and responsive layout notes",
      "description": "SYN | Specify ranking and notifications wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Ranking and notifications.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.

Parent: SYN-8 — SYN | Ranking, pinned day and notifications",
      "labels": [
        "mobile-spec",
        "notifications",
        "SYN",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-58",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-59",
      "key": "SYN-59",
      "summary": "SYN | Specify profile, friends and admin state machines and transition rules",
      "description": "SYN | Specify profile, friends and admin state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Profile, friends and admin.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.

Parent: SYN-10 — SYN | Profile, friends and administrative operations",
      "labels": [
        "mobile-spec",
        "profile",
        "state-machine",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-59",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-60",
      "key": "SYN-60",
      "summary": "SYN | Specify profile, friends and admin wireframes, component anatomy and responsive layout notes",
      "description": "SYN | Specify profile, friends and admin wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Profile, friends and admin.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.

Parent: SYN-10 — SYN | Profile, friends and administrative operations",
      "labels": [
        "mobile-spec",
        "profile",
        "SYN",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-60",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-61",
      "key": "SYN-61",
      "summary": "SYN | Specify analytics event catalog, naming rules and product funnels",
      "description": "SYN | Specify analytics event catalog, naming rules and product funnelsPurposeDefine all analytics events needed to observe the rebuilt product consistently across platforms.Functional scope- Document event names, required properties, optional properties and privacy constraints.- Define client-side vs server-side event emission ownership.UI / interaction requirements- Every screen view, key CTA, destructive action and recovery path must emit a named analytics event.- Funnel definitions must cover auth conversion, event creation, invite sharing, join success, voting completion and pinning.Wireframe / layout notes- Specify deduplication rules for repeated opens/closes and idempotent events.Backend / platform-neutral technical requirements- Provide funnel tables and event-property dictionaries.State model / edge cases- Guest flows and registered flows must be distinguishable without storing prohibited personal data.Acceptance criteria- Analytics can be reimplemented on any stack with consistent semantics.

Parent: SYN-4 — SYN | App shell, navigation and design system",
      "labels": [
        "analytics",
        "mobile-spec",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-61",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-62",
      "key": "SYN-62",
      "summary": "SYN | Specify accessibility, localization and content rules",
      "description": "SYN | Specify accessibility, localization and content rulesPurposeEnsure the rebuilt product is operable, readable and localizable across platforms.Functional scope- Specify date/time localization strategy, timezone handling and locale fallback.- Specify content length constraints and truncation/wrapping policy.UI / interaction requirements- Define minimum touch targets, focus order, semantics/labels, screen-reader text and dynamic type handling.- Document copy placeholders and localization requirements for all user-facing templates.Wireframe / layout notes- List all hard-coded copy areas that must be localized.Backend / platform-neutral technical requirements- Provide accessibility notes for dialogs, calendars, toggles, chips and notifications.State model / edge cases- Long localized strings, small screens and assistive technologies.Acceptance criteria- Accessibility and localization are first-class implementation requirements, not afterthoughts.

Parent: SYN-4 — SYN | App shell, navigation and design system",
      "labels": [
        "a11y",
        "i18n",
        "mobile-spec",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-62",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-63",
      "key": "SYN-63",
      "summary": "SYN | Specify security, privacy, audit logging and rate limiting",
      "description": "SYN | Specify security, privacy, audit logging and rate limitingPurposeDefine cross-cutting protection requirements for identity, invitations, votes and admin operations.Functional scope- Document audit events, retention expectations, abuse limits and rate limiting for auth and sharing endpoints.- Define what participant identity details can be shown in day details and notifications.UI / interaction requirements- Sensitive actions must require authenticated authorization.- User-visible privacy boundaries for guest/registered/admin data exposure must be explicit.Wireframe / layout notes- Specify PII handling, logging redaction and abuse detection hooks.Backend / platform-neutral technical requirements- Provide operation-by-operation security notes.State model / edge cases- Invite abuse, brute-force login, repeated request spam and stale tokens.Acceptance criteria- Security-sensitive behavior can be implemented and reviewed against a written spec.

Parent: SYN-5 — SYN | Authentication, identity and guest access",
      "labels": [
        "mobile-spec",
        "security",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-63",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-64",
      "key": "SYN-64",
      "summary": "SYN | Task | Build authoritative screen inventory and route matrix",
      "description": "h1. Objective

Produce the authoritative list of screens and overlays for the product.

h1. Deliverables

* Table of route/screen identifiers, ownership, actor access, trigger source and return target.
* Overlay launch table including create-event, share, day-details, notifications, pin-day and event-unavailable surfaces.
* History behavior column: replace, push, dismiss-to-parent.

h1. Technical notes

* Do not describe React components as the source of truth; describe user-visible screens and state transitions.
* Identify which screens require preloaded event data, profile data or token validation before render.

Parent: SYN-24 — SYN | Define screen map, route guards and deep-link behavior",
      "labels": [
        "mobile-spec",
        "navigation",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-64",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-65",
      "key": "SYN-65",
      "summary": "SYN | Task | Specify invite, auth callback and password-reset deep links",
      "description": "h1. Objective

Define the deep-link contract for invite-based participation and identity recovery.

h1. Functional requirements

* Map URL inputs, required query params, validation sequence and outcome screens.
* Preserve redirect target after successful login, registration or activation.
* Define behavior for stale, malformed or already-used links.

h1. Backend requirements

* Identify server responses and local state changes needed for each deep-link branch.
* Define analytics events for invite open, invite rejection, join success and activation completion.

Parent: SYN-24 — SYN | Define screen map, route guards and deep-link behavior",
      "labels": [
        "deep-link",
        "mobile-spec",
        "navigation",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-65",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-66",
      "key": "SYN-66",
      "summary": "SYN | Task | Specify global loading, empty and error shell states",
      "description": "h1. Objective

Standardize application-level skeletons, retries and blocking states.

h1. Scope

* Startup spinner / bootstrap blocking state.
* Protected-route unauthorized redirect state.
* Event-deleted / unavailable blocking modal.
* Retry pattern for fetch failures in main workspace, profile and admin.

h1. UI notes

* Every blocking state must state headline, body copy, primary CTA and secondary CTA.
* Empty and error states must be defined for desktop and mobile layouts separately where the container differs.

Parent: SYN-24 — SYN | Define screen map, route guards and deep-link behavior",
      "labels": [
        "app-shell",
        "mobile-spec",
        "SYN",
        "task",
        "ux"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-66",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-67",
      "key": "SYN-67",
      "summary": "SYN | Task | Create token catalog for color, typography, spacing and elevation",
      "description": "SYN | Task | Create token catalog for color, typography, spacing and elevation

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Produce a token table consumable by any client platform.

h1. Deliverables

* Semantic token names, usage intent and fallback mapping.
* Numeric scale for spacing, radius, border widths and shadow/elevation.
* Typography table with font families, sizes, weights, line heights and letter spacing.

h1. Constraints

* Token names must be semantic and platform-neutral.
* Include accessibility notes for contrast-sensitive tokens.

Parent: SYN-25 — SYN | Define design tokens, themes and reusable UI primitives",
      "labels": [
        "design-system",
        "mobile-spec",
        "SYN",
        "task",
        "tokens"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-67",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-68",
      "key": "SYN-68",
      "summary": "SYN | Task | Define reusable component anatomy and state matrix",
      "description": "SYN | Task | Define reusable component anatomy and state matrix

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Specify how each shared control is composed and how it behaves in each state.

h1. Scope

* Buttons and pills including vote selectors.
* Form controls including validation, helper text and character counter placement.
* Cards, dialogs, sheets and scrollable panels.
* Notification rows, ranking rows and share-option tiles.

h1. Acceptance

* Each primitive has a normative anatomy section and a state transition table.

Parent: SYN-25 — SYN | Define design tokens, themes and reusable UI primitives",
      "labels": [
        "components",
        "design-system",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-68",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-69",
      "key": "SYN-69",
      "summary": "SYN | Task | Define responsive layout grid and breakpoint rules",
      "description": "SYN | Task | Define responsive layout grid and breakpoint rules

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Translate the product layout into breakpoint-independent rules.

h1. Scope

* Auth split layout and compact layout.
* Main calendar workspace with calendar-first width priority.
* Left/right auxiliary panels that shrink before calendar content is cropped.
* Desktop dialog, mobile sheet and full-screen fallback rules.

h1. Acceptance

* A native or cross-platform team can derive the same component spacing and panel priority from the written rules.

Parent: SYN-25 — SYN | Define design tokens, themes and reusable UI primitives",
      "labels": [
        "layout",
        "mobile-spec",
        "responsive",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-69",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-70",
      "key": "SYN-70",
      "summary": "SYN | Task | Specify credential login and registration validation",
      "description": "SYN | Task | Specify email/password login and registration validation

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the normative field-level behavior for login and registration.

h1. Scope

* Email and password field validation.
* Display-name field for registration only.
* Inline validation timing and submit-time validation.
* Success, failure and throttling messages.

h1. Backend contract

* Required request and response fields for sign-in and sign-up.
* Mapping of technical auth errors to user-facing error categories.

Parent: SYN-26 — SYN | Specify login, registration, verification and forgot-password journeys",
      "labels": [
        "auth",
        "forms",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-70",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-71",
      "key": "SYN-71",
      "summary": "SYN | Task | Specify Google OAuth sign-in and sign-up activation flow",
      "description": "SYN | Task | Specify Google OAuth sign-in and sign-up activation flow

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the exact activation and fallback behavior for Google sign-in / sign-up.

h1. Scope

* Entry from login screen and from registration screen.
* First-time activation versus returning sign-in.
* Account-already-exists and email-collision states.
* Redirect continuation after OAuth completion.

h1. Backend contract

* Required identity payload on callback completion.
* Mapping of OAuth/provider failures to recoverable UI states.

Parent: SYN-26 — SYN | Specify login, registration, verification and forgot-password journeys",
      "labels": [
        "auth",
        "mobile-spec",
        "oauth",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-71",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-72",
      "key": "SYN-72",
      "summary": "SYN | Task | Specify OTP verification, resend cooldown and recovery states",
      "description": "SYN | Task | Specify OTP verification, resend cooldown and recovery states

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Specify the verification-step behavior used after registration or invite-bound activation.

h1. Scope

* Code entry layout and masking rules.
* Resend cooldown timer and disabled state.
* Expired code, wrong code and attempt-limit responses.
* Recovery path back to sign-in or restart activation.

h1. Acceptance

* The spec clearly defines when verification is required and when already-verified users bypass this screen.

Parent: SYN-26 — SYN | Specify login, registration, verification and forgot-password journeys",
      "labels": [
        "auth",
        "mobile-spec",
        "SYN",
        "task",
        "verification"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-72",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-73",
      "key": "SYN-73",
      "summary": "SYN | Task | Event template defaults specification",
      "description": "Define reusable event template and default-value behavior.

Parent: SYN-29 — SYN | Specify event creation flow, templates and field validation",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/SYN-73",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-74",
      "key": "SYN-74",
      "summary": "SYN | Task | Temporary session lifecycle specification",
      "description": "Imported from the approved step-2 task list. Covers temporary session creation, restore, and invalidation behavior.

Parent: SYN-27 — SYN | Specify temporary guest session model and guest-to-member upgrade",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/SYN-74",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-75",
      "key": "SYN-75",
      "summary": "SYN | Task | Guest route handling and inactivity logout specification",
      "description": "Imported from the approved step-2 task list. Covers inactivity logout and blocked-route handling for guest users.

Parent: SYN-27 — SYN | Specify temporary guest session model and guest-to-member upgrade",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/SYN-75",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-76",
      "key": "SYN-76",
      "summary": "SYN | Task | Guest account upgrade and migration specification",
      "description": "Imported from the approved step-2 task list. Covers upgrade from guest participation to registered account and related data migration behavior.

Parent: SYN-27 — SYN | Specify temporary guest session model and guest-to-member upgrade",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/SYN-76",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-77",
      "key": "SYN-77",
      "summary": "SYN | Task | Credential reset completion flow specification",
      "description": "Imported from the approved step-2 task list. Covers credential-reset request handling and reset completion screens.

Parent: SYN-28 — SYN | Specify password reset and in-app password change flows",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/SYN-77",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-78",
      "key": "SYN-78",
      "summary": "SYN | Task | Specify profile-based password change card behavior",
      "description": "SYN | Task | Specify profile-based password change card behavior

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the in-profile credential-change surface and exact behavior.

h1. Scope

* Current password, new password and confirmation fields.
* Strength rules, reuse prevention and mismatch handling.
* Success feedback and session-security implications after change.

h1. Acceptance

* The spec distinguishes between local validation, server rejection and forced re-auth scenarios.

Parent: SYN-28 — SYN | Specify password reset and in-app password change flows",
      "labels": [
        "mobile-spec",
        "password",
        "profile",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-78",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-79",
      "key": "SYN-79",
      "summary": "SYN | Task | Specify create-event form validation, character limits and save rules",
      "description": "SYN | Task | Specify create-event form validation, character limits and save rules

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the create-event form rules with no ambiguity for client and backend teams.

h1. Scope

* Required and optional fields.
* Character limits and counter behavior.
* Save-button enabled / disabled conditions.
* Draft loss prevention and navigation-away behavior if applicable.

h1. Acceptance

* The spec states every server-side and client-side validation condition and the user-facing error message category.

Parent: SYN-29 — SYN | Specify event creation flow, templates and field validation",
      "labels": [
        "events",
        "mobile-spec",
        "SYN",
        "task",
        "validation"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-79",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-80",
      "key": "SYN-80",
      "summary": "SYN | Task | Specify mutable vs immutable event fields after creation",
      "description": "SYN | Task | Specify mutable vs immutable event fields after creation

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define which event properties may still be edited after creation and under which conditions.

h1. Scope

* Editable versus locked fields before and after participants vote.
* Deadline and decided-state effects on editability.
* UX for disabled fields and attempted edits.

h1. Acceptance

* The spec resolves every field to mutable, conditionally mutable or immutable status.

Parent: SYN-30 — SYN | Specify event editing, deletion, restart and state transitions",
      "labels": [
        "edit",
        "events",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-80",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-81",
      "key": "SYN-81",
      "summary": "SYN | Task | Specify event deletion, participant impact and restart-voting operation",
      "description": "SYN | Task | Specify event deletion, participant impact and restart-voting operation

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define deletion and voting restart operations together with downstream effects.

h1. Scope

* Creator confirmation flow and safeguards.
* Participant notification and access changes after deletion.
* Restart-voting operation, preserved fields and reset fields.
* Auditability and irreversible actions.

h1. Acceptance

* The spec fully defines data, notifications and UI consequences for both operations.

Parent: SYN-30 — SYN | Specify event editing, deletion, restart and state transitions",
      "labels": [
        "delete",
        "events",
        "mobile-spec",
        "restart",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-81",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-82",
      "key": "SYN-82",
      "summary": "SYN | Task | Event list ordering and restore specification",
      "description": "Imported from the approved step-2 task list. Covers event list ordering, sorting, and restore behavior.

Parent: SYN-31 — SYN | Specify event selector, default event and active/inactive visibility",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/SYN-82",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-83",
      "key": "SYN-83",
      "summary": "SYN | Task | Specify selector UI states and empty-state behavior",
      "description": "SYN | Task | Specify selector UI states and empty-state behavior

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the event-selector visual states and user guidance behavior.

h1. Scope

* No events, no access, loading and partial-data states.
* Placeholder copy and CTA behavior.
* Selected, hovered, focused and disabled row behavior if applicable.

h1. Acceptance

* The selector presents the same state hierarchy and fallbacks across clients.

Parent: SYN-31 — SYN | Specify event selector, default event and active/inactive visibility",
      "labels": [
        "events",
        "mobile-spec",
        "selector",
        "SYN",
        "task",
        "ui"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-83",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-84",
      "key": "SYN-84",
      "summary": "SYN | Task | Specify date-picker behavior for start/end/deadline fields",
      "description": "SYN | Task | Specify date-picker behavior for start/end/deadline fields

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define all picker rules for event start, end and decision deadline fields.

h1. Scope

* Allowed ranges and relative ordering constraints.
* Time-zone / locale presentation assumptions if applicable.
* Same-day, overnight and invalid-range handling.
* Manual entry versus picker selection behavior.

h1. Acceptance

* The spec yields the same allowed/blocked date combinations across clients.

Parent: SYN-29 — SYN | Specify event creation flow, templates and field validation",
      "labels": [
        "date-picker",
        "events",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-84",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-85",
      "key": "SYN-85",
      "summary": "SYN | Task | Specify invite-token schema, lifecycle and consumption rules",
      "description": "SYN | Task | Specify invite-token schema, lifecycle and consumption rules

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define how share tokens are created, validated, incremented and revoked.

h1. Scope

* Token uniqueness, expiry, use-count and max-use semantics.
* Access checks for creator and participant-generated links.
* Anonymous-join flag behavior.

h1. Acceptance

* Backend teams can implement a stable token lifecycle without web-code dependency.

Parent: SYN-32 — SYN | Specify share-link generation, management and distribution",
      "labels": [
        "backend",
        "invite",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-85",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-86",
      "key": "SYN-86",
      "summary": "SYN | Task | Specify share dialog content, per-link actions and grouped channel UX",
      "description": "SYN | Task | Specify share dialog content, per-link actions and grouped channel UX

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the share dialog UI in detail.

h1. Scope

* Mode switcher, create-link CTA and active-link cards.
* Copy, revoke and share actions.
* Text snippet generation and grouped social channels.

h1. Acceptance

* The interaction model is complete for desktop and mobile.

Parent: SYN-32 — SYN | Specify share-link generation, management and distribution",
      "labels": [
        "invite",
        "mobile-spec",
        "SYN",
        "task",
        "ui"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-86",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-87",
      "key": "SYN-87",
      "summary": "SYN | Task | Specify creator-vs-participant sharing permission rules",
      "description": "SYN | Task | Specify creator-vs-participant sharing permission rules

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Make sharing authorization explicit.

h1. Scope

* Creator default capabilities.
* Participant sharing when allow_participant_sharing is enabled.
* Guest restrictions.
* Server-side enforcement and corresponding UI disable states.

h1. Acceptance

* Unauthorized sharing is impossible even with stale client state.

Parent: SYN-32 — SYN | Specify share-link generation, management and distribution",
      "labels": [
        "invite",
        "mobile-spec",
        "permissions",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-87",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-88",
      "key": "SYN-88",
      "summary": "SYN | Task | Specify join-event status matrix and outcome-specific CTAs",
      "description": "SYN | Task | Specify join-event status matrix and outcome-specific CTAs

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define all join-event outcomes and their exact copy/CTA structure.

h1. Scope

* Loading, invalid, expired, already-joined, success, auth-required and unavailable states.
* Primary and secondary actions for each state.
* Which states may auto-redirect and which require explicit confirmation.

h1. Acceptance

* The status matrix is complete and platform-neutral.

Parent: SYN-33 — SYN | Specify invite join flow for registered and registration-free participants",
      "labels": [
        "join-event",
        "mobile-spec",
        "SYN",
        "task",
        "ux"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-88",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-89",
      "key": "SYN-89",
      "summary": "SYN | Task | Specify guest join session creation and post-join continuation",
      "description": "SYN | Task | Specify guest join session creation and post-join continuation

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the guest join backend and client continuation behavior.

h1. Scope

* Temporary identity creation.
* Event participant record creation.
* Redirect into event workspace.
* Upgrade CTA availability after successful guest join.

h1. Acceptance

* The guest pathway is detailed enough for backend and native implementation.

Parent: SYN-33 — SYN | Specify invite join flow for registered and registration-free participants",
      "labels": [
        "backend",
        "guest",
        "join-event",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-89",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-90",
      "key": "SYN-90",
      "summary": "SYN | Task | Specify join-event status matrix and outcome-specific CTAs",
      "description": "SYN | Task | Specify join-event status matrix and outcome-specific CTAs

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define all join-event outcomes and their exact copy/CTA structure.

h1. Scope

* Loading, invalid, expired, already-joined, success, auth-required and unavailable states.
* Primary and secondary actions for each state.
* Which states may auto-redirect and which require explicit confirmation.

h1. Acceptance

* The status matrix is complete and platform-neutral.

Parent: SYN-33 — SYN | Specify invite join flow for registered and registration-free participants",
      "labels": [
        "join-event",
        "mobile-spec",
        "SYN",
        "task",
        "ux"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-90",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-91",
      "key": "SYN-91",
      "summary": "SYN | Task | Specify guest join session creation and post-join continuation",
      "description": "SYN | Task | Specify guest join session creation and post-join continuation

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the guest join backend and client continuation behavior.

h1. Scope

* Temporary identity creation.
* Event participant record creation.
* Redirect into event workspace.
* Upgrade CTA availability after successful guest join.

h1. Acceptance

* The guest pathway is detailed enough for backend and native implementation.

Parent: SYN-33 — SYN | Specify invite join flow for registered and registration-free participants",
      "labels": [
        "backend",
        "guest",
        "join-event",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-91",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-92",
      "key": "SYN-92",
      "summary": "SYN | Task | Specify month-grid generation, placeholders and navigation controls",
      "description": "SYN | Task | Specify month-grid generation, placeholders and navigation controls

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define how visible days and placeholders are constructed for the calendar.

h1. Scope

* First-day offset and leading placeholder cells.
* Month-to-month navigation when event spans multiple months.
* Header composition and alignment rules.

h1. Acceptance

* Teams can generate the same visible calendar layout from the written spec.

Parent: SYN-34 — SYN | Specify calendar grid rendering, month navigation and date eligibility",
      "labels": [
        "calendar",
        "layout",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-92",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-93",
      "key": "SYN-93",
      "summary": "SYN | Task | Specify eligibility and disabled-state rules for each date",
      "description": "SYN | Task | Specify eligibility and disabled-state rules for each date

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Make vote eligibility deterministic.

h1. Scope

* Start/end date boundaries.
* Today/past-date constraints.
* Decided-date and deadline locks.
* Guest/participant restrictions if any.

h1. Acceptance

* All client interactions check the same eligibility truth table.

Parent: SYN-34 — SYN | Specify calendar grid rendering, month navigation and date eligibility",
      "labels": [
        "calendar",
        "mobile-spec",
        "rules",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-93",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-94",
      "key": "SYN-94",
      "summary": "SYN | Task | Specify month-grid generation, placeholders and navigation controls",
      "description": "SYN | Task | Specify month-grid generation, placeholders and navigation controls

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define how visible days and placeholders are constructed for the calendar.

h1. Scope

* First-day offset and leading placeholder cells.
* Month-to-month navigation when event spans multiple months.
* Header composition and alignment rules.

h1. Acceptance

* Teams can generate the same visible calendar layout from the written spec.

Parent: SYN-34 — SYN | Specify calendar grid rendering, month navigation and date eligibility",
      "labels": [
        "calendar",
        "layout",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-94",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-95",
      "key": "SYN-95",
      "summary": "SYN | Task | Specify eligibility and disabled-state rules for each date",
      "description": "SYN | Task | Specify eligibility and disabled-state rules for each date

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Make vote eligibility deterministic.

h1. Scope

* Start/end date boundaries.
* Today/past-date constraints.
* Decided-date and deadline locks.
* Guest/participant restrictions if any.

h1. Acceptance

* All client interactions check the same eligibility truth table.

Parent: SYN-34 — SYN | Specify calendar grid rendering, month navigation and date eligibility",
      "labels": [
        "calendar",
        "mobile-spec",
        "rules",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-95",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-96",
      "key": "SYN-96",
      "summary": "SYN | Task | Specify responsive calendar sizing with calendar-first priority",
      "description": "SYN | Task | Specify responsive calendar sizing with calendar-first priority

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define how the calendar retains full visibility across resolutions.

h1. Scope

* Side-panel shrink rules.
* Minimum and preferred calendar width/height.
* Breakpoint rules that prevent clipping or excessive whitespace.

h1. Acceptance

* The calendar remains fully visible while auxiliary panels resize around it.

Parent: SYN-34 — SYN | Specify calendar grid rendering, month navigation and date eligibility",
      "labels": [
        "calendar",
        "mobile-spec",
        "responsive",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-96",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-97",
      "key": "SYN-97",
      "summary": "SYN | Task | Specify vote-tap semantics and toggle/remove behavior",
      "description": "SYN | Task | Specify vote-tap semantics and toggle/remove behavior

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define exact state transitions for clicking/tapping a single day.

h1. Scope

* Apply selected mode to empty day.
* Change existing day from one mode to another.
* Remove vote when tapping same selected mode, if allowed.
* Block mutations for frozen/ineligible days.

h1. Acceptance

* State transitions are unambiguous and parity-tested across platforms.

Parent: SYN-35 — SYN | Specify single-day vote interactions, info icon and long-press details",
      "labels": [
        "interaction",
        "mobile-spec",
        "SYN",
        "task",
        "voting"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-97",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-98",
      "key": "SYN-98",
      "summary": "SYN | Task | Specify info icon, long-press and detail-open interaction separation",
      "description": "SYN | Task | Specify info icon, long-press and detail-open interaction separation

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Ensure read-only inspection does not conflict with voting interactions.

h1. Scope

* Separate hit areas and event handling.
* Desktop click on info icon.
* Mobile long-press behavior and threshold.
* Read-only detail opening for frozen or past dates still within event range.

h1. Acceptance

* The rules explicitly prevent accidental vote mutation from detail access actions.

Parent: SYN-35 — SYN | Specify single-day vote interactions, info icon and long-press details",
      "labels": [
        "day-details",
        "interaction",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-98",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-99",
      "key": "SYN-99",
      "summary": "SYN | Task | Specify behavior after pinning, freeze and deadline lock",
      "description": "SYN | Task | Specify behavior after pinning, freeze and deadline lock

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define how day interactions change once further voting is blocked.

h1. Scope

* Which actions remain available when decided_date exists.
* Read-only detail access for pinned/non-pinned dates.
* Visual affordances showing frozen state.

h1. Acceptance

* Post-pin behavior is complete and consistent with notification and ranking modules.

Parent: SYN-35 — SYN | Specify single-day vote interactions, info icon and long-press details",
      "labels": [
        "freeze",
        "mobile-spec",
        "SYN",
        "task",
        "voting"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-99",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-100",
      "key": "SYN-100",
      "summary": "SYN | Task | Specify touch/mouse drag range interaction and guard rules",
      "description": "SYN | Task | Specify touch/mouse drag range interaction and guard rules

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define how range voting works with direct manipulation.

h1. Scope

* Pointer down, pointer move, pointer release lifecycle.
* Which cells are affected and when duplicates are ignored.
* Guard rules for disabled and out-of-range dates.

h1. Acceptance

* Touch and mouse follow the same eligibility matrix and produce the same result set.

Parent: SYN-36 — SYN | Specify drag range voting and batch side-panel behavior",
      "labels": [
        "batch-vote",
        "drag",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-100",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-101",
      "key": "SYN-101",
      "summary": "SYN | Task | Specify batch side panel controls, disabled state and clear operations",
      "description": "SYN | Task | Specify batch side panel controls, disabled state and clear operations

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the batch panel independently of the current web component.

h1. Scope

* Vote value selector, date fields and apply button rules.
* Clear range and clear-all actions.
* Disabled appearance when decided_date/deadline lock is active.

h1. Acceptance

* The panel behavior is fully reproducible on native or web clients.

Parent: SYN-36 — SYN | Specify drag range voting and batch side-panel behavior",
      "labels": [
        "batch-vote",
        "mobile-spec",
        "panel",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-101",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-102",
      "key": "SYN-102",
      "summary": "SYN | Task | Specify personal-availability copy restrictions into event voting",
      "description": "SYN | Task | Specify personal-availability copy restrictions into event voting

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the boundary between personal calendar data and event voting data.

h1. Scope

* Which personal-availability markings may be copied into an event.
* Which markings are ignored or blocked.
* How conflicts with decided dates, deadlines and event range are handled.

h1. Acceptance

* Users cannot accidentally copy unsupported or stale personal-calendar data into event voting.

Parent: SYN-36 — SYN | Specify drag range voting and batch side-panel behavior",
      "labels": [
        "batch-vote",
        "mobile-spec",
        "personal-calendar",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-102",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-103",
      "key": "SYN-103",
      "summary": "SYN | Task | Specify day-details payload, counts and participant-row anatomy",
      "description": "SYN | Task | Specify day-details payload, counts and participant-row anatomy

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the read-only information model shown when opening day details.

h1. Scope

* Date header and summary counts.
* Participant-row fields including name, vote type and status indicators.
* Pagination/virtualization assumptions if a day has many participants.

h1. Acceptance

* Backend payload and row anatomy are complete enough for native or web implementation.

Parent: SYN-37 — SYN | Specify day-details content model and participant social actions",
      "labels": [
        "data",
        "day-details",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-103",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-104",
      "key": "SYN-104",
      "summary": "SYN | Task | Specify friend-request and favorite actions from day-details rows",
      "description": "SYN | Task | Specify friend-request and favorite actions from day-details rows

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define social actions initiated from day-details rows.

h1. Scope

* Add/remove favorite from a participant row.
* Send friend request, pending-request state and already-friends state.
* Visibility and disable rules for self rows, guest rows or unsupported identities.

h1. Acceptance

* The row-action model is fully specified and consistent with profile/friends modules.

Parent: SYN-37 — SYN | Specify day-details content model and participant social actions",
      "labels": [
        "day-details",
        "friends",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-104",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-105",
      "key": "SYN-105",
      "summary": "SYN | Task | Specify personal availability CRUD and month-navigation behavior",
      "description": "SYN | Task | Specify personal availability CRUD and month-navigation behavior

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the user’s private availability calendar behavior.

h1. Scope

* Create, update and remove personal availability markings.
* Month navigation and persistence of edited state.
* Offline/retry handling for save failures.

h1. Acceptance

* Personal availability can be implemented without relying on the current web calendar component.

Parent: SYN-38 — SYN | Specify personal availability calendar and synchronization into events",
      "labels": [
        "crud",
        "mobile-spec",
        "personal-calendar",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-105",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-106",
      "key": "SYN-106",
      "summary": "SYN | Task | Specify copy-to-event flow, target filtering and result messaging",
      "description": "SYN | Task | Specify copy-to-event flow, target filtering and result messaging

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define how personal availability is projected into one or more events.

h1. Scope

* Target event selection and filtering rules.
* Copy preview/result messaging.
* Conflict and partial-success handling.

h1. Acceptance

* Copying behavior is deterministic and explainable to end users.

Parent: SYN-38 — SYN | Specify personal availability calendar and synchronization into events",
      "labels": [
        "copy",
        "mobile-spec",
        "personal-calendar",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-106",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-107",
      "key": "SYN-107",
      "summary": "SYN | Task | Specify decided/deadline exclusions for personal-availability projection",
      "description": "SYN | Task | Specify decided/deadline exclusions for personal-availability projection

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define which dates are excluded when copying personal availability into event context.

h1. Scope

* Exclusion of decided dates, closed voting ranges and expired deadlines.
* Partial projection result behavior.
* Result messaging and skipped-date explanation.

h1. Acceptance

* The projection rules match event-state restrictions exactly.

Parent: SYN-38 — SYN | Specify personal availability calendar and synchronization into events",
      "labels": [
        "mobile-spec",
        "personal-calendar",
        "rules",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-107",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-108",
      "key": "SYN-108",
      "summary": "SYN | Task | Specify score formula, tie ordering and exclusion of negative-only dates",
      "description": "SYN | Task | Specify score formula, tie ordering and exclusion of negative-only dates

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the ranking algorithm in a platform-neutral way.

h1. Scope

* Point values by vote type.
* Ordering when scores tie.
* Exclusion of dates that only have negative votes or are otherwise disqualified.

h1. Acceptance

* Any client or backend service can reproduce identical ranking output from the written rules.

Parent: SYN-39 — SYN | Specify ranking computation, filtering and ranking-to-calendar navigation",
      "labels": [
        "algorithm",
        "mobile-spec",
        "ranking",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-108",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-109",
      "key": "SYN-109",
      "summary": "SYN | Task | Specify ranking list UI, medals and empty-state behavior",
      "description": "SYN | Task | Specify ranking list UI, medals and empty-state behavior

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the ranking list as a reusable presentation pattern.

h1. Scope

* Row anatomy, score display and medal treatment for top positions.
* Empty-state, loading and no-eligible-date states.
* Desktop/mobile layout adjustments.

h1. Acceptance

* Teams can implement the same ranking surface without depending on existing web markup.

Parent: SYN-39 — SYN | Specify ranking computation, filtering and ranking-to-calendar navigation",
      "labels": [
        "mobile-spec",
        "ranking",
        "SYN",
        "task",
        "ui"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-109",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-110",
      "key": "SYN-110",
      "summary": "SYN | Task | Specify ranking-row click behavior and calendar focus outcome",
      "description": "SYN | Task | Specify ranking-row click behavior and calendar focus outcome

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define what happens when the user selects a ranked date row.

h1. Scope

* Calendar scroll/focus behavior.
* Visual highlighting and synchronization with day details.
* What happens for dates no longer eligible or already pinned.

h1. Acceptance

* Ranking-row selection always leads to the same focused calendar state.

Parent: SYN-39 — SYN | Specify ranking computation, filtering and ranking-to-calendar navigation",
      "labels": [
        "calendar-link",
        "mobile-spec",
        "ranking",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-110",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-111",
      "key": "SYN-111",
      "summary": "SYN | Task | Specify tie resolution dialog and default suggested date logic",
      "description": "SYN | Task | Specify tie resolution dialog and default suggested date logic

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define how the user resolves tied highest-ranked dates.

h1. Scope

* Dialog entry conditions and suggested default date.
* Row selection rules inside the dialog.
* Cancel vs confirm outcomes and resulting decided_date.

h1. Acceptance

* Tie resolution is deterministic and consistent with the ranking algorithm.

Parent: SYN-40 — SYN | Specify pinned-day selection, modification and unlock flow",
      "labels": [
        "dialog",
        "mobile-spec",
        "pinned-day",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-111",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-112",
      "key": "SYN-112",
      "summary": "SYN | Task | Specify freeze behavior after pinning across calendar and batch controls",
      "description": "SYN | Task | Specify freeze behavior after pinning across calendar and batch controls

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the global frozen state after pinning/deciding a date.

h1. Scope

* Calendar cell behavior after a decision is made.
* Batch-control disabling and explanatory messaging.
* Read-only affordances that remain available.

h1. Acceptance

* Frozen behavior is consistent across calendar, ranking and batch-vote surfaces.

Parent: SYN-40 — SYN | Specify pinned-day selection, modification and unlock flow",
      "labels": [
        "freeze",
        "mobile-spec",
        "pinned-day",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-112",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-113",
      "key": "SYN-113",
      "summary": "SYN | Task | Specify decided-date unlock operation and re-enabled voting rules",
      "description": "SYN | Task | Specify decided-date unlock operation and re-enabled voting rules

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define how a previously decided event is returned to editable voting mode.

h1. Scope

* Preconditions and permissions for unlock.
* Which fields and controls become active again.
* How ranking and notifications are recalculated or re-issued.

h1. Acceptance

* Unlock behavior is complete and consistent with decision/freeze semantics.

Parent: SYN-40 — SYN | Specify pinned-day selection, modification and unlock flow",
      "labels": [
        "mobile-spec",
        "pinned-day",
        "SYN",
        "task",
        "unlock"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-113",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-114",
      "key": "SYN-114",
      "summary": "SYN | Task | Specify notification data model, queries and unread counter semantics",
      "description": "SYN | Task | Specify notification data model, queries and unread counter semantics

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define notifications as a stable backend/client contract.

h1. Scope

* Notification entity schema and key fields.
* Read/unread transitions and unread counter rules.
* Query ordering, pagination and deduplication assumptions.

h1. Acceptance

* Clients can build the same notification center and badge counts from the written contract.

Parent: SYN-41 — SYN | Specify notification center, unread state and row actions",
      "labels": [
        "backend",
        "mobile-spec",
        "notifications",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-114",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-115",
      "key": "SYN-115",
      "summary": "SYN | Task | Specify notification panel layout, scroll behavior and row interactions",
      "description": "SYN | Task | Specify notification panel layout, scroll behavior and row interactions

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the notification panel as a reusable interaction surface.

h1. Scope

* Opening/closing behavior and anchor placement.
* Scrolling, infinite load or pagination behavior.
* Row click, mark-read timing and navigation outcome.

h1. Acceptance

* The notification surface is fully specified for desktop and mobile clients.

Parent: SYN-41 — SYN | Specify notification center, unread state and row actions",
      "labels": [
        "mobile-spec",
        "notifications",
        "SYN",
        "task",
        "ui"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-115",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-116",
      "key": "SYN-116",
      "summary": "SYN | Task | Specify notification panel layout, scroll behavior and row interactions",
      "description": "SYN | Task | Specify notification panel layout, scroll behavior and row interactions

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the notification panel as a reusable interaction surface.

h1. Scope

* Opening/closing behavior and anchor placement.
* Scrolling, infinite load or pagination behavior.
* Row click, mark-read timing and navigation outcome.

h1. Acceptance

* The notification surface is fully specified for desktop and mobile clients.

Parent: SYN-41 — SYN | Specify notification center, unread state and row actions",
      "labels": [
        "mobile-spec",
        "notifications",
        "SYN",
        "task",
        "ui"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-116",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-117",
      "key": "SYN-117",
      "summary": "SYN | Task | Specify guest-notification delivery parity and access scoping",
      "description": "SYN | Task | Specify guest-notification delivery parity and access scoping

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define which notifications temporary users can receive and read.

h1. Scope

* Delivery parity vs registered users.
* Scope restrictions for guest-access sessions.
* What happens after account upgrade or guest-session invalidation.

h1. Acceptance

* Notification access never exposes data outside the guest’s allowed event scope.

Parent: SYN-41 — SYN | Specify notification center, unread state and row actions",
      "labels": [
        "guest",
        "mobile-spec",
        "notifications",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-117",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-118",
      "key": "SYN-118",
      "summary": "SYN | Task | Specify pin, repin and unlock notification templates and recipients",
      "description": "SYN | Task | Specify pin, repin and unlock notification templates and recipients

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the notification templates tied to decision-state changes.

h1. Scope

* Pin/decide notification content and recipients.
* Re-pin notification behavior if the decided date changes.
* Unlock notification recipients and timing.

h1. Acceptance

* Notification content and delivery rules are complete for all decision transitions.

Parent: SYN-42 — SYN | Specify event-driven notification triggers and payload content",
      "labels": [
        "mobile-spec",
        "notifications",
        "pinned-day",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-118",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-119",
      "key": "SYN-119",
      "summary": "SYN | Task | Specify friendship and favorite-related notifications",
      "description": "SYN | Task | Specify friendship and favorite-related notifications

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define notifications triggered by social graph actions.

h1. Scope

* Friend request sent/accepted/declined states.
* Favorite-related notifications if applicable.
* Deduplication and user-preference impacts.

h1. Acceptance

* Social notifications are fully specified and consistent with the friends/favorites modules.

Parent: SYN-42 — SYN | Specify event-driven notification triggers and payload content",
      "labels": [
        "friends",
        "mobile-spec",
        "notifications",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-119",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-120",
      "key": "SYN-120",
      "summary": "SYN | Task | Specify event deletion and voting-restart notifications",
      "description": "SYN | Task | Specify event deletion and voting-restart notifications

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define notifications emitted when an event is deleted or voting is restarted.

h1. Scope

* Recipients and message templates for deletion.
* Recipients and message templates for voting restart.
* Suppression or deduplication behavior for close-together events.

h1. Acceptance

* Participants always receive the correct event-state change notifications.

Parent: SYN-42 — SYN | Specify event-driven notification triggers and payload content",
      "labels": [
        "event-lifecycle",
        "mobile-spec",
        "notifications",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-120",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-121",
      "key": "SYN-121",
      "summary": "SYN | Task | Specify profile header, account data fields and section ordering",
      "description": "SYN | Task | Specify profile header, account data fields and section ordering

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the information architecture of the profile screen.

h1. Scope

* Which account fields are visible and editable.
* Section order and hierarchy.
* Desktop/mobile layout rules.

h1. Acceptance

* Teams can recreate the profile IA consistently.

Parent: SYN-43 — SYN | Specify profile page, account summary and user preferences",
      "labels": [
        "mobile-spec",
        "profile",
        "SYN",
        "task",
        "ui"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-121",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-122",
      "key": "SYN-122",
      "summary": "SYN | Task | Specify profile preference storage and blocked temporary-user access",
      "description": "SYN | Task | Specify profile preference storage and blocked temporary-user access

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define preference persistence and profile access restrictions.

h1. Scope

* Temporary-user redirect behavior.
* Preferences payload structure if settings are stored on profile.
* Error and loading states for profile bootstrap.

h1. Acceptance

* Access rules and data contract are explicit.

Parent: SYN-43 — SYN | Specify profile page, account summary and user preferences",
      "labels": [
        "access",
        "mobile-spec",
        "profile",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-122",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-123",
      "key": "SYN-123",
      "summary": "SYN | Task | Specify friend search, request creation and pending-state transitions",
      "description": "SYN | Task | Specify friend search, request creation and pending-state transitions

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define discovery and request initiation.

h1. Scope

* Search by email rules and result handling.
* Send-request validation and duplicate prevention.
* Pending-state transitions and cancellation if supported.

h1. Acceptance

* Backend and mobile teams can implement the full friend-request lifecycle.

Parent: SYN-44 — SYN | Specify friends, pending requests and favorites management",
      "labels": [
        "friends",
        "mobile-spec",
        "search",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-123",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-124",
      "key": "SYN-124",
      "summary": "SYN | Task | Specify favorites list, favorite toggling and cross-surface consistency",
      "description": "SYN | Task | Specify favorites list, favorite toggling and cross-surface consistency

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define favorites as a stable feature across profile, day-details and other surfaces.

h1. Scope

* Favorite add/remove state transitions.
* Favorites list ordering and empty states.
* Cross-surface synchronization requirements.

h1. Acceptance

* Favorite state is always consistent regardless of where the mutation occurred.

Parent: SYN-44 — SYN | Specify friends, pending requests and favorites management",
      "labels": [
        "favorites",
        "mobile-spec",
        "state",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-124",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-125",
      "key": "SYN-125",
      "summary": "SYN | Task | Specify received-request handling and notification coupling",
      "description": "SYN | Task | Specify received-request handling and notification coupling

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the incoming-request management flow.

h1. Scope

* Accept/decline actions and resulting state transitions.
* Notification side effects for each action.
* Empty-state, loading and error behavior.

h1. Acceptance

* Request handling is complete and consistent with the notification model.

Parent: SYN-44 — SYN | Specify friends, pending requests and favorites management",
      "labels": [
        "friends",
        "mobile-spec",
        "requests",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-125",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-126",
      "key": "SYN-126",
      "summary": "SYN | Task | Specify delete-account UI, confirmation copy and placement",
      "description": "SYN | Task | Specify delete-account UI, confirmation copy and placement

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the visible deletion entry point and confirmation UX.

h1. Scope

* Placement inside profile/account area.
* Confirmation copy and irreversible-action warning.
* Loading, success and failure messaging.

h1. Acceptance

* Users clearly understand the consequence and the action is not triggered accidentally.

Parent: SYN-45 — SYN | Specify account deletion and security confirmation workflow",
      "labels": [
        "account-deletion",
        "mobile-spec",
        "SYN",
        "task",
        "ui"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-126",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-127",
      "key": "SYN-127",
      "summary": "SYN | Task | Specify deletion audit record and data-cleanup workflow",
      "description": "SYN | Task | Specify deletion audit record and data-cleanup workflow

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define what happens behind the delete-account action.

h1. Scope

* Audit fields recorded for deletion.
* Cleanup / soft-delete behavior for events, votes, invitations and social graph edges.
* Post-deletion session invalidation.

h1. Acceptance

* Backend deletion behavior is explicit and testable.

Parent: SYN-45 — SYN | Specify account deletion and security confirmation workflow",
      "labels": [
        "account-deletion",
        "backend",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-127",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-128",
      "key": "SYN-128",
      "summary": "SYN | Task | Specify admin dashboard navigation, summary metrics and empty states",
      "description": "SYN | Task | Specify admin dashboard navigation, summary metrics and empty states

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the high-level admin landing experience.

h1. Scope

* Admin navigation entry and guard rules.
* Summary metrics/cards and their empty/loading states.
* No-data and error-state behavior.

h1. Acceptance

* Admin landing behavior is explicit and reproducible on any client.

Parent: SYN-46 — SYN | Specify admin dashboard, admin-users and admin-events capabilities",
      "labels": [
        "admin",
        "dashboard",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-128",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-129",
      "key": "SYN-129",
      "summary": "SYN | Task | Specify admin user-management list, filters and detail fields",
      "description": "SYN | Task | Specify admin user-management list, filters and detail fields

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the admin user-management surface.

h1. Scope

* List columns, filters and pagination.
* Detail drawer/page fields.
* Empty-state, loading and permission-error behavior.

h1. Acceptance

* Admin teams can implement the same user-management surface on any client.

Parent: SYN-46 — SYN | Specify admin dashboard, admin-users and admin-events capabilities",
      "labels": [
        "admin",
        "mobile-spec",
        "SYN",
        "task",
        "users"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-129",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-130",
      "key": "SYN-130",
      "summary": "SYN | Task | Specify admin event-management list, filters and detail fields",
      "description": "SYN | Task | Specify admin event-management list, filters and detail fields

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the admin event-management surface.

h1. Scope

* List columns, filters and pagination.
* Event detail fields and allowed admin actions.
* Empty-state, loading and permission-error behavior.

h1. Acceptance

* Admin event operations are fully specified for backend and client teams.

Parent: SYN-46 — SYN | Specify admin dashboard, admin-users and admin-events capabilities",
      "labels": [
        "admin",
        "events",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-130",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-131",
      "key": "SYN-131",
      "summary": "SYN | Task | Define entity schemas, identifiers, timestamps and soft-delete behavior",
      "description": "SYN | Task | Define entity schemas, identifiers, timestamps and soft-delete behavior

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the foundational domain objects used by Syncfolk.

h1. Scope

* Entities such as user, temporary user, event, event participant, invitation/share token, vote, notification, friend request and favorite.
* Stable identifiers, created/updated timestamps and deletion semantics.
* Which records use hard delete vs soft delete.

h1. Acceptance

* The entity model is explicit enough for backend design and client contract generation.

Parent: SYN-47 — SYN | Specify canonical domain model and persistence boundaries for events, memberships, votes, invites, friendships and notifications",
      "labels": [
        "backend",
        "entities",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-131",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-132",
      "key": "SYN-132",
      "summary": "SYN | Task | Define cross-entity lifecycle relations and cascade rules",
      "description": "SYN | Task | Define cross-entity lifecycle relations and cascade rules

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define how domain objects affect each other over time.

h1. Scope

* Event deletion impact on votes, invitations, notifications and participant membership.
* Account deletion impact on social graph and authored records.
* Temporary-user upgrade/linking impact on identities and related records.

h1. Acceptance

* Lifecycle and cascade rules are explicit and consistent across the whole model.

Parent: SYN-47 — SYN | Specify canonical domain model and persistence boundaries for events, memberships, votes, invites, friendships and notifications",
      "labels": [
        "backend",
        "lifecycle",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-132",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-133",
      "key": "SYN-133",
      "summary": "SYN | Task | Define standard response envelope, pagination and mutation result patterns",
      "description": "SYN | Task | Define standard response envelope, pagination and mutation result patterns

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define a consistent API contract style across features.

h1. Scope

* Standard success/error envelope.
* Cursor/page/limit patterns where lists are paginated.
* Mutation result payload shape and optimistic-update compatibility.

h1. Acceptance

* API consumers can rely on a uniform contract style across modules.

Parent: SYN-48 — SYN | Specify API contract catalog and error-code taxonomy",
      "labels": [
        "api-contract",
        "backend",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-133",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-134",
      "key": "SYN-134",
      "summary": "SYN | Task | Define feature-specific error codes and client recovery actions",
      "description": "SYN | Task | Define feature-specific error codes and client recovery actions

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define stable error categories and recovery expectations per feature.

h1. Scope

* Auth/session errors.
* Invite/join errors.
* Voting/calendar errors.
* Profile/friends/admin errors.

h1. Acceptance

* Every important backend failure has a known client recovery or user-facing fallback.

Parent: SYN-48 — SYN | Specify API contract catalog and error-code taxonomy",
      "labels": [
        "backend",
        "errors",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-134",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-135",
      "key": "SYN-135",
      "summary": "SYN | Task | Define app shell state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define app shell state diagrams, triggers and blocked transitions

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the state machine behind the app shell module.

h1. Scope

* Bootstrap, ready, empty, error and blocked states.
* Triggers that move the shell between states.
* Explicitly forbidden transitions.

h1. Acceptance

* Engineers can derive the same state diagram without inspecting web source code.

Parent: SYN-49 — SYN | Specify app shell state machines and transition rules",
      "labels": [
        "app-shell",
        "mobile-spec",
        "state-diagram",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-135",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-136",
      "key": "SYN-136",
      "summary": "SYN | Task | Define app shell screen-by-screen section order, CTA hierarchy and adaptive layout",
      "description": "SYN | Task | Define app shell screen-by-screen section order, CTA hierarchy and adaptive layout

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define normative wireframe ordering rules for the app shell module.

h1. Scope

* Section order per screen.
* Primary/secondary CTA hierarchy.
* Adaptive layout notes for mobile vs wider layouts.

h1. Acceptance

* Teams can recreate the app shell layouts consistently without relying on the current web source.

Parent: SYN-50 — SYN | Specify app shell wireframes, component anatomy and responsive layout notes",
      "labels": [
        "app-shell",
        "mobile-spec",
        "SYN",
        "task",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-136",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-137",
      "key": "SYN-137",
      "summary": "SYN | Task | Specify deletion audit record and data-cleanup workflow",
      "description": "SYN | Task | Specify deletion audit record and data-cleanup workflow

Implementation objective
Define this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.

Detailed requirements

* Cover the exact user-visible behavior implied by the summary.
* Describe controls, field states, validation messages, loading states, empty states and disabled states.
* Describe phone and wide-layout behavior if the surface is responsive.

Technical specification

* List the data fields required by the client and by the backend contract.
* Define action inputs, outputs, business error codes and side effects.
* Define analytics events, audit events and notification side effects if applicable.

Edge cases / validation

* Include recovery paths for network failure and business-rule failure.
* Document whether guest users differ from registered users in this flow.

Acceptance criteria

* Acceptance criteria must be testable against the written spec alone.
* Permission rules and chronology/date-time rules must be explicit.

h1. Objective

Define the backend execution path for account deletion.

h1. Scope

* account_deletions audit write.
* Entity cleanup/anonymization decisions.
* Session invalidation and final redirect.

h1. Acceptance

* Backend implementation can proceed from this issue without reverse-engineering current behavior.

Parent: SYN-45 — SYN | Specify account deletion and security confirmation workflow",
      "labels": [
        "account",
        "backend",
        "mobile-spec",
        "SYN",
        "task"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-137",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-138",
      "key": "SYN-138",
      "summary": "SYN | Task | Define identity state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define identity state diagrams, triggers and blocked transitions

Implementation objective
Create the detailed state-table appendix for this epic.

Detailed requirements

* List state name, entry trigger, exit trigger, visible UI treatment and guard.

Technical specification

* Describe emitted audit/notification/analytics side effects per transition.

Acceptance criteria

* A developer can code finite-state logic directly from the table.

Parent: SYN-51 — SYN | Specify identity state machines and transition rules",
      "labels": [
        "auth",
        "mobile-spec",
        "state-machine",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-138",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-139",
      "key": "SYN-139",
      "summary": "SYN | Task | Define identity screen-by-screen section order, CTA hierarchy and adaptive layout",
      "description": "SYN | Task | Define identity screen-by-screen section order, CTA hierarchy and adaptive layout

Implementation objective
Produce the layout appendix for this epic.

Detailed requirements

* For each surface list header, body, footer, panel and modal region in display order.

Technical specification

* Note required data blocks and placeholder states per region.

Acceptance criteria

* Design and engineering can create wireframes from the issue without reading current code.

Parent: SYN-52 — SYN | Specify identity wireframes, component anatomy and responsive layout notes",
      "labels": [
        "auth",
        "mobile-spec",
        "SYN",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-139",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-140",
      "key": "SYN-140",
      "summary": "SYN | Task | Define event lifecycle state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define event lifecycle state diagrams, triggers and blocked transitions

Implementation objective
Create the detailed state-table appendix for this epic.

Detailed requirements

* List state name, entry trigger, exit trigger, visible UI treatment and guard.

Technical specification

* Describe emitted audit/notification/analytics side effects per transition.

Acceptance criteria

* A developer can code finite-state logic directly from the table.

Parent: SYN-53 — SYN | Specify event lifecycle state machines and transition rules",
      "labels": [
        "events",
        "mobile-spec",
        "state-machine",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-140",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-141",
      "key": "SYN-141",
      "summary": "SYN | Task | Define event lifecycle screen-by-screen section order, CTA hierarchy and adaptive layout",
      "description": "SYN | Task | Define event lifecycle screen-by-screen section order, CTA hierarchy and adaptive layout

Implementation objective
Produce the layout appendix for this epic.

Detailed requirements

* For each surface list header, body, footer, panel and modal region in display order.

Technical specification

* Note required data blocks and placeholder states per region.

Acceptance criteria

* Design and engineering can create wireframes from the issue without reading current code.

Parent: SYN-54 — SYN | Specify event lifecycle wireframes, component anatomy and responsive layout notes",
      "labels": [
        "events",
        "mobile-spec",
        "SYN",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-141",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-142",
      "key": "SYN-142",
      "summary": "SYN | Task | Define voting calendar state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define voting calendar state diagrams, triggers and blocked transitions

Implementation objective
Create the detailed state-table appendix for this epic.

Detailed requirements

* List state name, entry trigger, exit trigger, visible UI treatment and guard.

Technical specification

* Describe emitted audit/notification/analytics side effects per transition.

Acceptance criteria

* A developer can code finite-state logic directly from the table.

Parent: SYN-55 — SYN | Specify voting calendar state machines and transition rules",
      "labels": [
        "calendar",
        "mobile-spec",
        "state-machine",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-142",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-143",
      "key": "SYN-143",
      "summary": "SYN | Task | Define voting calendar screen-by-screen section order, CTA hierarchy and adaptive layout",
      "description": "SYN | Task | Define voting calendar screen-by-screen section order, CTA hierarchy and adaptive layout

Implementation objective
Produce the layout appendix for this epic.

Detailed requirements

* For each surface list header, body, footer, panel and modal region in display order.

Technical specification

* Note required data blocks and placeholder states per region.

Acceptance criteria

* Design and engineering can create wireframes from the issue without reading current code.

Parent: SYN-56 — SYN | Specify voting calendar wireframes, component anatomy and responsive layout notes",
      "labels": [
        "calendar",
        "mobile-spec",
        "SYN",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-143",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-144",
      "key": "SYN-144",
      "summary": "SYN | Task | Define ranking and notifications state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define ranking and notifications state diagrams, triggers and blocked transitions

Implementation objective
Create the detailed state-table appendix for this epic.

Detailed requirements

* List state name, entry trigger, exit trigger, visible UI treatment and guard.

Technical specification

* Describe emitted audit/notification/analytics side effects per transition.

Acceptance criteria

* A developer can code finite-state logic directly from the table.

Parent: SYN-57 — SYN | Specify ranking and notifications state machines and transition rules",
      "labels": [
        "mobile-spec",
        "notifications",
        "state-machine",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-144",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-145",
      "key": "SYN-145",
      "summary": "SYN | Task | Define ranking and notifications screen-by-screen section order, CTA hierarchy and adaptive layout",
      "description": "SYN | Task | Define ranking and notifications screen-by-screen section order, CTA hierarchy and adaptive layout

Implementation objective
Produce the layout appendix for this epic.

Detailed requirements

* For each surface list header, body, footer, panel and modal region in display order.

Technical specification

* Note required data blocks and placeholder states per region.

Acceptance criteria

* Design and engineering can create wireframes from the issue without reading current code.

Parent: SYN-58 — SYN | Specify ranking and notifications wireframes, component anatomy and responsive layout notes",
      "labels": [
        "mobile-spec",
        "notifications",
        "SYN",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-145",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-146",
      "key": "SYN-146",
      "summary": "SYN | Task | Define ranking and notifications state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define ranking and notifications state diagrams, triggers and blocked transitions

Implementation objective
Create the detailed state-table appendix for this epic.

Detailed requirements

* List state name, entry trigger, exit trigger, visible UI treatment and guard.

Technical specification

* Describe emitted audit/notification/analytics side effects per transition.

Acceptance criteria

* A developer can code finite-state logic directly from the table.

Parent: SYN-57 — SYN | Specify ranking and notifications state machines and transition rules",
      "labels": [
        "mobile-spec",
        "notifications",
        "state-machine",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-146",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-147",
      "key": "SYN-147",
      "summary": "SYN | Task | Define profile, friends and admin state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define profile, friends and admin state diagrams, triggers and blocked transitions

Implementation objective
Create the detailed state-table appendix for this epic.

Detailed requirements

* List state name, entry trigger, exit trigger, visible UI treatment and guard.

Technical specification

* Describe emitted audit/notification/analytics side effects per transition.

Acceptance criteria

* A developer can code finite-state logic directly from the table.

Parent: SYN-59 — SYN | Specify profile, friends and admin state machines and transition rules",
      "labels": [
        "mobile-spec",
        "profile",
        "state-machine",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-147",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-148",
      "key": "SYN-148",
      "summary": "SYN | Task | Define profile, friends and admin screen-by-screen section order, CTA hierarchy and adaptive layout",
      "description": "SYN | Task | Define profile, friends and admin screen-by-screen section order, CTA hierarchy and adaptive layout

Implementation objective
Produce the layout appendix for this epic.

Detailed requirements

* For each surface list header, body, footer, panel and modal region in display order.

Technical specification

* Note required data blocks and placeholder states per region.

Acceptance criteria

* Design and engineering can create wireframes from the issue without reading current code.

Parent: SYN-60 — SYN | Specify profile, friends and admin wireframes, component anatomy and responsive layout notes",
      "labels": [
        "mobile-spec",
        "profile",
        "SYN",
        "wireframe"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-148",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-149",
      "key": "SYN-149",
      "summary": "ENT | Approval inbox, filters and bulk decisions",
      "description": "Duplicate of SYN-150. Keep SYN-150 as the active approval inbox story unless later consolidation chooses the other item.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "DUPLICATE",
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-149",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-150",
      "key": "SYN-150",
      "summary": "ENT | Approval inbox, filters and bulk decisions",
      "description": "Approval worklist for enterprise leave requests.

Scope:

* show pending, approved, rejected, cancelled, and expired requests in one admin inbox
* filters by requester, team, role, date range, request type, and status
* approve, reject, and comment from list and detail views
* support bulk actions for low-risk cases where policy allows
* show conflict reasons before final decision

Acceptance criteria:

* Owner and resourceAssistant can process requests from one inbox.
* Filters are available on desktop and mobile.
* Bulk decision flow is guarded and auditable.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-150",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-151",
      "key": "SYN-151",
      "summary": "ENT | Leave types, holidays and work pattern configuration",
      "description": "Enterprise configuration for leave types, holidays, and work patterns.

Scope:

* define leave types such as vacation, sick leave, unpaid leave, and custom leave types
* configure public holidays per workspace or location profile
* configure working patterns and partial-day options
* use these settings during request validation, calendar display, and exports

Acceptance criteria:

* Admins can manage leave types, holidays, and work patterns.
* Validation uses configured values consistently.
* Calendar and export outputs reflect configuration.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-151",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-152",
      "key": "SYN-152",
      "summary": "ENT | Approval chain, substitute approver and escalation rules",
      "description": "Enterprise approval chain, substitute approver, and escalation rules.

Scope:

* configure one-step or multi-step approval chains
* define substitute approvers for owner and resourceAssistant
* configure escalation when requests stay unanswered too long
* notify each actor at the correct stage
* preserve final decision trace and acting user identity

Acceptance criteria:

* Enterprise workspaces support configurable approval chains.
* Substitute approvers can act when the primary approver is unavailable.
* Escalation rules notify the right users and keep audit history.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-152",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-153",
      "key": "SYN-153",
      "summary": "ENT | Conflict engine and validation messages for request submission",
      "description": "Conflict engine and validation messages for enterprise request submission.

Scope:

* evaluate blocked dates, company leave dates, daily max-off limits, role coverage limits, holiday calendars, and work patterns before save or approval
* classify conflicts as warning or blocking
* return human-readable reasons and machine-readable codes
* keep validation consistent across web, mobile, export, and API use cases

Acceptance criteria:

* Users see clear reasons when a request cannot proceed.
* Validation results are consistent across all clients.
* Engineers have stable error codes for integrations and automation.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-153",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-154",
      "key": "SYN-154",
      "summary": "ENT | Data model and API contract specification for enterprise leave planning",
      "description": "Data model and API contract specification for enterprise leave planning.

Scope:

* define core entities: workspace, membership, role, business role, leave request, request decision, daily rule, template, export job, notification, audit event
* define IDs, timestamps, status enums, and relation rules
* define API contracts for create, update, approve, reject, cancel, list, export, and summary operations
* define canonical field names separate from display labels

Acceptance criteria:

* Engineers can implement enterprise APIs from the documented contracts.
* Mobile and web clients can share the same payload definitions.
* Reporting and export features use the same canonical data model.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-154",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-155",
      "key": "SYN-155",
      "summary": "ENT | Permission matrix and visibility rules for enterprise calendars",
      "description": "Permission matrix and visibility rules for enterprise calendars.

Scope:

* define what owner, resourceAssistant, member, and future read-only roles can see and do
* define which leave details are visible to peers, managers, and admins
* define export and API access permissions
* define behavior for suspended, removed, and invited users

Acceptance criteria:

* All enterprise actions have an explicit role-based permission rule.
* Visibility of leave details is documented and enforceable.
* Engineers can implement server-side access control from this story.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-155",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-156",
      "key": "SYN-156",
      "summary": "ENT | Enterprise wireframes and responsive screen specification",
      "description": "Enterprise wireframes and responsive screen specification.

Scope:

* define screen-by-screen layouts for desktop and mobile
* define the enterprise workspace shell, approval inbox, member directory, rule editor, calendar, exports, and summary panel
* define modal, drawer, and inline action behavior
* define empty, loading, error, and no-permission states

Acceptance criteria:

* Designers and engineers can implement enterprise screens without reverse-engineering the consumer webapp.
* Desktop and mobile variants are both documented.
* Key interactions are described at wireframe level.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-156",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-157",
      "key": "SYN-157",
      "summary": "ENT | Reporting dashboard, staffing analytics and allocation signals",
      "description": "Reporting dashboard, staffing analytics, and allocation signals for enterprise mode.

Scope:

* show leave trends, approval throughput, blocked-date usage, company leave usage, max-off breaches, and role coverage risk over time
* provide team, role, and date filters
* expose daily and weekly allocation risk indicators for managers
* support drill-down from chart to affected dates and requests

Acceptance criteria:

* Enterprise users can analyze leave and staffing patterns without exporting first.
* Analytics align with exported and API data.
* Managers can identify upcoming coverage risks from the dashboard.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-157",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-158",
      "key": "SYN-158",
      "summary": "ENT | Spreadsheet import and migration from shared leave trackers",
      "description": "Spreadsheet import and migration from shared leave trackers.

Scope:

* import leave-planning source data from spreadsheet uploads
* map imported columns to enterprise entities such as member, date, leave type, status, and comment
* validate imported data before commit
* provide error report for rejected rows
* support migration from shared spreadsheet processes into enterprise workspace data

Acceptance criteria:

* Admins can migrate spreadsheet-based leave planning into the enterprise workspace.
* Invalid rows are reported clearly.
* Imported data becomes available in calendar, approval, export, and reporting flows.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-158",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-159",
      "key": "SYN-159",
      "summary": "ENT | Notification rules for enterprise leave planning",
      "description": "Define enterprise notification rules.

Scope:

* list notification events for invitations, leave request actions, approvals, rejections, escalations, rule conflicts, imports, exports, and membership changes
* define recipients for each event
* define unread and read behavior
* define badge count and ordering rules
* define desktop and mobile notification panel behavior

Acceptance criteria:

* Enterprise notification rules are documented.
* Read and unread behavior is explicit.
* Engineers can implement notifications consistently.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-159",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-160",
      "key": "SYN-160",
      "summary": "ENT | Audit log, retention rules and compliance-ready history",
      "description": "Enterprise audit and retention specification.

Scope:

* define which actions generate immutable audit events: invitation, role change, request create/update/cancel, approval, rejection, escalation, rule change, template apply, export, import, membership removal, admin override
* define audit event fields: actor, affected user, workspace, affected dates, previous state, new state, timestamp, reason, source screen or API
* define retention expectations for operational history and audit history
* define search and filter behavior for audit review
* define which users can view audit history

Acceptance criteria:

* Important enterprise actions are captured in audit history.
* Audit history can be filtered and reviewed by authorized users.
* Retention expectations are documented for implementation and policy alignment.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-160",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-161",
      "key": "SYN-161",
      "summary": "ENT | Export schema, filters and scheduled delivery specification",
      "description": "Enterprise export specification.

Scope:

* define export formats: Excel, XML, HTML
* define mandatory exported fields: calendar date, weekday name, names of people on leave, count of people planned off
* define optional fields for enterprise use: request status, leave type, team, role, approver, blocked or company-leave flags, coverage status
* define filter options by date range, workspace, team, role, member, request status
* define manual export and scheduled export behavior
* define file naming, locale handling, timezone handling, and access permissions

Acceptance criteria:

* Required export fields are documented in a stable schema.
* Optional enterprise filters and metadata are documented.
* Engineers can implement export generation and delivery from this story.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-161",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-162",
      "key": "SYN-162",
      "summary": "ENT | Rule template library and version handling",
      "description": "Enterprise rule template library.

Scope:

* save reusable templates for blocked dates, company leave dates, max-off rules, and role-based coverage rules
* support create, edit, duplicate, archive, and version handling for templates
* show a preview before applying a template to selected dates
* validate conflicts before applying a template
* define template ownership and visibility inside a workspace

Acceptance criteria:

* Enterprise admins can save and reuse rule templates.
* Template apply flow includes preview and validation.
* Version handling is documented for implementation.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-162",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-163",
      "key": "SYN-163",
      "summary": "ENT | Team, location and holiday profile setup",
      "description": "Enterprise organization setup.

Scope:

* define team and location attributes for members
* assign holiday profiles by location or workspace setting
* allow filtering by team and location in calendar, approval, export, and reporting views
* allow staffing rules to use team and location filters where required

Acceptance criteria:

* Enterprise workspaces can group members by team and location.
* Holiday profile assignment is documented.
* Filtering and reporting can use these attributes consistently.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-163",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-164",
      "key": "SYN-164",
      "summary": "ENT | Calendar cell states, legends and enterprise visual rules",
      "description": "Enterprise calendar visual specification.

Scope:

* define day-cell states for normal working day, approved leave, pending leave, rejected request, blocked date, company leave date, capacity risk, role coverage risk, public holiday, weekend, and today
* define legends, badges, icons, and color usage for enterprise mode
* define hover, tap, long-press, and detail-open behavior on desktop and mobile
* define what information is visible in collapsed day cells versus day detail views

Acceptance criteria:

* Enterprise calendar day states are explicitly documented.
* Visual rules are consistent across desktop and mobile.
* Engineers and designers can implement enterprise calendar rendering from this story.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-164",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-165",
      "key": "SYN-165",
      "summary": "ENT | Workspace settings and locale configuration",
      "description": "Enterprise workspace settings.

Scope:

* define settings for timezone, locale, weekday display, date format, and holiday profile default
* define how settings influence calendar display, exports, notifications, and request validation
* define which roles can edit settings
* define default values for newly created enterprise workspaces

Acceptance criteria:

* Enterprise workspace settings are documented.
* Calendar, export, and request behavior reflects configured settings.
* Default values and edit permissions are explicit.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-165",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-166",
      "key": "SYN-166",
      "summary": "ENT | Enterprise workflow state tables",
      "description": "Workflow state specification for enterprise leave planning.

Scope:

* define request states and decision states
* define allowed moves between states
* define which role can trigger each move
* define validation checks and notification side effects for each move
* define cancellation, expiry, and override flows

Acceptance criteria:

* Workflow states are documented in an implementation-ready way.
* Role permissions and side effects are explicit.
* Engineers can implement deterministic workflow logic from this story.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-166",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-167",
      "key": "SYN-167",
      "summary": "ENT | API endpoint catalog with request and response payload definitions",
      "description": "Implementation-level API specification for enterprise leave planning.

Scope:

* define endpoint catalog for enterprise workspace bootstrap, member list, invitation send and accept, role assignment, leave request create/update/cancel, approval decision, rule create/update/delete, template create/apply, summary retrieval, export create/download, import upload/validate/commit, notifications fetch/mark read, audit log fetch, and settings update
* define request payload fields, required versus optional fields, enums, validation rules, and example payloads
* define response payload fields, pagination model, timestamps, IDs, nested entities, and partial-success behavior where relevant
* define error response structure with stable machine-readable codes and human-readable messages
* define idempotency expectations for retriable operations
* define authentication and authorization expectations per endpoint

Acceptance criteria:

* Engineers can implement enterprise APIs endpoint by endpoint from this story.
* Web and mobile clients can rely on the same payload definitions.
* Error and pagination behavior are explicit and testable.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-167",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-168",
      "key": "SYN-168",
      "summary": "ENT | Field-level data model and entity relationship specification",
      "description": "Field-level domain model specification for enterprise leave planning.

Scope:

* define every core entity and its fields: enterprise workspace, membership, invitation, workspace role assignment, business role assignment, team, location, holiday profile, leave type, working pattern, leave request, request day item if needed, approval decision, daily rule, role coverage rule, template, template version, notification, audit event, export job, import job
* define data types, nullability, uniqueness, defaults, allowed values, and lifecycle expectations for each field
* define relationships and cardinality between entities
* define soft-delete, archive, and history-preservation rules where relevant
* define canonical naming separate from localized display labels
* define derived fields and aggregation fields versus stored fields

Acceptance criteria:

* Engineers can build enterprise persistence and DTO models from this story.
* Relationship and lifecycle rules are explicit.
* Reporting, API, and export features use the same canonical entity model.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-168",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-169",
      "key": "SYN-169",
      "summary": "ENT | Screen-by-screen wireframe appendix for desktop and mobile",
      "description": "Screen-level UX and wireframe appendix for enterprise leave planning.

Scope:

* define each enterprise screen and sub-screen with named sections, components, actions, and visible data blocks
* include desktop and mobile variants for: workspace home, enterprise calendar view, coverage and conflict summary, approval inbox, day detail, request form, member directory, rule editor, template library, export center, import flow, audit log, notifications panel, settings screen
* define navigation entry points, back behavior, modal versus full-screen behavior, sheet versus drawer behavior, and destructive-action confirmations
* define loading, empty, error, no-data, and no-permission states for every screen
* define screen-to-screen transitions and deep-link landing behavior where relevant

Acceptance criteria:

* Designers and engineers can build the enterprise interface screen by screen from this story.
* Desktop and mobile layouts are both covered.
* Critical edge states are documented rather than left implicit.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-169",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-170",
      "key": "SYN-170",
      "summary": "ENT | Permission matrix by role, action and data visibility",
      "description": "Tabular permission specification for enterprise leave planning.

Scope:

* define a complete matrix of actions versus roles: owner, resourceAssistant, member, invited user, suspended user, removed user, and optional future read-only role
* include actions for workspace settings, member invite, role assignment, request create, request edit, request cancel, request approve, request reject, admin override, rule create and edit, template create and apply, export, import, notification view, audit view, and reporting view
* define which data is visible by role in calendar cells, day details, approval views, exports, and reports
* define row-level and field-level visibility where needed
* define inheritance and override rules if multiple roles or scopes exist in the future

Acceptance criteria:

* Every enterprise action has an explicit permission rule.
* Visibility of sensitive leave information is documented by role.
* Engineers can implement access control from this matrix without guessing.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-170",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-171",
      "key": "SYN-171",
      "summary": "ENT | Notification event matrix, recipients and payload rules",
      "description": "Tabular notification specification for enterprise leave planning.

Scope:

* define event-by-event notification matrix covering invitation, invitation accepted, request submitted, request changed, request approved, request rejected, request cancelled, request expired, approval escalation, blocked-date conflict, max-off conflict, role coverage conflict, rule changed, template applied, export finished, import finished, membership changed, and admin override
* define recipients for each event and delivery expectations for in-app and email
* define unread, read, dismissed, and badge-count behavior
* define sort order, grouping, and duplicate-suppression rules
* define payload fields needed for notification cards, email templates, and drill-through navigation
* define visibility rules for who can see which notifications in shared enterprise contexts

Acceptance criteria:

* Enterprise notification behavior is documented as a matrix rather than scattered rules.
* Recipient, payload, and unread behavior are explicit.
* Engineers and QA can verify notification behavior against a single source of truth.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-171",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-172",
      "key": "SYN-172",
      "summary": "ENT | Spreadsheet import field mapping, validation and error report catalog",
      "description": "Implementation-level import specification for enterprise leave planning.

Scope:

* define supported spreadsheet column mappings for member identity, email, date, date range, leave type, request status, comment, role, team, and location where applicable
* define import modes: dry-run validation, partial accept, full commit
* define row-level validation rules, duplicate detection rules, unknown member handling, unknown leave type handling, and date parsing rules
* define import error catalog with stable error codes and human-readable remediation text
* define generated import summary fields: total rows, accepted rows, rejected rows, warnings, created entities, updated entities
* define downloadable error report structure for failed rows

Acceptance criteria:

* Engineers can implement spreadsheet import without guessing column semantics.
* Validation and error handling are documented consistently.
* Admins receive actionable feedback for failed imports.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-172",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-173",
      "key": "SYN-173",
      "summary": "ENT | Reporting KPI definitions and dashboard widget catalog",
      "description": "Implementation-level reporting specification for enterprise mode.

Scope:

* define KPI catalog for approval throughput, average approval time, pending approvals, approved days by period, rejected requests by period, blocked-day usage, company leave usage, max-off breaches, role coverage breaches, short-staffed upcoming days, leave by team, leave by role, and leave by user
* define each dashboard widget: title, metric source, aggregation logic, filters, drill-through target, empty state, and refresh expectations
* define default dashboard layout for desktop and mobile enterprise views
* define time windows and comparison modes: current month, next 30 days, quarter, custom range, previous period comparison where applicable
* define exportability of dashboard data and alignment with API aggregates

Acceptance criteria:

* Reporting KPIs are documented with unambiguous formulas.
* Widget behavior is documented screen by screen.
* Managers can rely on dashboard metrics matching export and API data.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-173",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-174",
      "key": "SYN-174",
      "summary": "ENT | Enterprise acceptance scenarios and QA matrix",
      "description": "Enterprise acceptance and QA specification.

Scope:

* define end-to-end scenarios for owner, resourceAssistant, member, invited user, suspended user, and removed user
* cover invitation, registration, request submission, approval, rejection, cancellation, escalation, rule conflicts, template application, export, import, notifications, and audit history
* define expected behavior for web, Android, and iPhone for the same business flows
* define example workspace and test-data setups for validation

Acceptance criteria:

* QA and engineers can validate enterprise mode from one scenario catalog.
* Role-based and rule-based flows are covered by explicit scenarios.
* Cross-platform expected behavior is documented for the same business flow.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-174",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-175",
      "key": "SYN-175",
      "summary": "ENT | Mobile parity, responsive behavior and offline-friendly enterprise flows",
      "description": "Enterprise mobile and responsive specification.

Scope:

* define which enterprise workflows must behave identically on web, Android, and iPhone
* define responsive layout priorities for approval inbox, day detail, request form, summary panel, rule editor, notifications, and exports
* define offline-tolerant and retry behavior for non-destructive actions such as draft request editing and queued fetch refresh
* define what actions require online validation and what data can be cached for read-only access
* define conflict handling when stale mobile data meets newer server-side rules

Acceptance criteria:

* Enterprise workflows have explicit mobile parity expectations.
* Responsive and offline-friendly behavior is documented where needed.
* Engineers can implement mobile clients without inventing platform-specific business behavior.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-175",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-176",
      "key": "SYN-176",
      "summary": "ENT | Security and privacy rules for enterprise leave data",
      "description": "Enterprise security and privacy rules.

Scope:

* define handling rules for leave data, approval notes, exported files, and notification content
* define session expectations and re-check points for sensitive admin actions
* define least-privilege rules for owner, resourceAssistant, and member roles
* define export visibility and API access expectations
* define limited-visibility options for sensitive leave data in shared calendar views
* define import and export file access rules

Acceptance criteria:

* Enterprise leave data handling rules are documented.
* Security expectations align with role permissions and export behavior.
* Engineers have explicit guidance for privacy-sensitive flows.

Parent: SYN-13 — ENT | Enterprise absence planning and resource governance mode",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-176",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-177",
      "key": "SYN-177",
      "summary": "ENT | Define enterprise workspace bootstrap endpoint and payload",
      "description": "Subtask under the API catalog story.

Deliverables:

* request and response contract for enterprise workspace bootstrap
* included objects: workspace, current membership, role, settings summary, visible modules, notification counters
* error behavior for no-access and suspended membership

Acceptance criteria:

* Mobile and web clients can load enterprise mode from this contract.
* Bootstrap payload is versionable and role-aware.

Parent: SYN-167 — ENT | API endpoint catalog with request and response payload definitions",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-177",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-178",
      "key": "SYN-178",
      "summary": "ENT | Define leave request and approval endpoints with example payloads",
      "description": "Subtask under the API catalog story.

Deliverables:

* endpoint contracts for create request, update request, cancel request, approve, reject, and admin override
* required fields, enums, examples, and validation errors
* idempotency and conflict behavior

Acceptance criteria:

* Engineers can implement request/decision APIs from this subtask.
* Error codes and transition side effects are explicit.

Parent: SYN-167 — ENT | API endpoint catalog with request and response payload definitions",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-178",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-179",
      "key": "SYN-179",
      "summary": "ENT | Define export, import and notification endpoints",
      "description": "Subtask under the API catalog story.

Deliverables:

* endpoint contracts for export create/download, import upload/validate/commit, notifications list/mark read
* async job handling and status fields where applicable
* pagination and filtering model

Acceptance criteria:

* Engineers can implement enterprise export/import/notification APIs from this subtask.
* Async and pagination behavior are explicit.

Parent: SYN-167 — ENT | API endpoint catalog with request and response payload definitions",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-179",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-180",
      "key": "SYN-180",
      "summary": "ENT | Define core enterprise entities and field constraints",
      "description": "Subtask under the field-level data model story.

Deliverables:

* field catalog for workspace, membership, invitation, leave request, approval decision, daily rule, template, notification, audit event, export job, import job
* data types, nullability, defaults, uniqueness, and enum values

Acceptance criteria:

* Persistence and DTO models can be built from this subtask.
* Field constraints are explicit and testable.

Parent: SYN-168 — ENT | Field-level data model and entity relationship specification",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-180",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-181",
      "key": "SYN-181",
      "summary": "ENT | Define entity relationships, history preservation and derived fields",
      "description": "Subtask under the field-level data model story.

Deliverables:

* relationship map and cardinality rules
* soft-delete, archive, and history-preservation rules
* derived versus stored fields and aggregation ownership

Acceptance criteria:

* Engineers can implement entity relationships without ambiguity.
* Historical accuracy rules are explicit.

Parent: SYN-168 — ENT | Field-level data model and entity relationship specification",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-181",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-182",
      "key": "SYN-182",
      "summary": "ENT | Define desktop and mobile screen sections for enterprise workspace",
      "description": "Subtask under the wireframe appendix story.

Deliverables:

* section-by-section breakdown for workspace home, calendar, summary panel, approval inbox, request form, member directory, rule editor, export center, notifications, settings
* desktop and mobile variants

Acceptance criteria:

* Designers and engineers can build named screen sections from this subtask.
* Responsive priorities are explicit.

Parent: SYN-169 — ENT | Screen-by-screen wireframe appendix for desktop and mobile",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-182",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-183",
      "key": "SYN-183",
      "summary": "ENT | Define action-by-role permission matrix for enterprise workflows",
      "description": "Subtask under the permission matrix story.

Deliverables:

* matrix for owner, resourceAssistant, member, invited, suspended, removed, and optional read-only roles
* actions: invite, assign role, submit request, edit request, cancel request, approve, reject, override, manage rules, apply templates, export, import, view audit, view reporting

Acceptance criteria:

* Engineers can implement role-based access control from this subtask.
* No enterprise action remains undocumented by role.

Parent: SYN-170 — ENT | Permission matrix by role, action and data visibility",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-183",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-184",
      "key": "SYN-184",
      "summary": "ENT | Define visibility rules for calendar cells, day details and exports",
      "description": "Subtask under the permission matrix story.

Deliverables:

* field-level and row-level visibility rules for calendar cells, day details, approval views, exports, and reports
* peer versus admin visibility rules for sensitive leave information

Acceptance criteria:

* Sensitive leave information visibility is explicitly documented.
* Export and report visibility follows the same rules where required.

Parent: SYN-170 — ENT | Permission matrix by role, action and data visibility",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-184",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-185",
      "key": "SYN-185",
      "summary": "ENT | Define KPI formulas and drill-through behavior for reporting widgets",
      "description": "Subtask under the reporting KPI story.

Deliverables:

* formulas and aggregation logic for approval throughput, avg approval time, pending approvals, blocked-date usage, company leave usage, max-off breaches, role coverage breaches, short-staffed upcoming days, leave by team, leave by role, leave by user
* drill-through destinations and filter inheritance rules

Acceptance criteria:

* KPIs are reproducible from API/export data.
* Drill-through behavior is explicit and testable.

Parent: SYN-173 — ENT | Reporting KPI definitions and dashboard widget catalog",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-185",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-186",
      "key": "SYN-186",
      "summary": "ENT | Define spreadsheet import mappings and row-level validation rules",
      "description": "Subtask under the spreadsheet import story.

Deliverables:

* supported column mappings for member identity, email, date/date range, leave type, status, comment, role, team, location
* row-level validation rules and duplicate detection
* unknown member and unknown leave type behavior

Acceptance criteria:

* Engineers can implement spreadsheet import validation from this subtask.
* Column semantics are explicit.

Parent: SYN-172 — ENT | Spreadsheet import field mapping, validation and error report catalog",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-186",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-187",
      "key": "SYN-187",
      "summary": "ENT | Define spreadsheet import mappings and row-level validation rules",
      "description": "Subtask under the spreadsheet import story.

Deliverables:

* supported column mappings for member identity, email, date/date range, leave type, status, comment, role, team, location
* row-level validation rules and duplicate detection
* unknown member and unknown leave type behavior

Acceptance criteria:

* Engineers can implement spreadsheet import validation from this subtask.
* Column semantics are explicit.

Parent: SYN-172 — ENT | Spreadsheet import field mapping, validation and error report catalog",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-187",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-188",
      "key": "SYN-188",
      "summary": "ENT | Define enterprise QA scenario sets and regression-critical flows",
      "description": "Subtask under the enterprise acceptance scenarios story.

Deliverables:

* scenario sets for invitation, registration, request create/update/cancel, approve/reject, escalation, rule conflict, template application, export, import, notifications, audit review
* regression-critical scenarios for releases
* cross-platform expected results for web, Android, iPhone

Acceptance criteria:

* QA can execute enterprise regression from this subtask.
* Cross-platform business expectations are aligned.

Parent: SYN-174 — ENT | Enterprise acceptance scenarios and QA matrix",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-188",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-189",
      "key": "SYN-189",
      "summary": "ENT | Define enterprise acceptance scenarios by role and critical flow",
      "description": "Subtask under the enterprise QA matrix story.

Deliverables:

* acceptance scenarios for owner, resourceAssistant, member, invited, suspended, and removed users
* role-based normal, edge, and negative flows for invitation, request, approval, conflict, export, import, notifications

Acceptance criteria:

* QA can validate enterprise behavior from these scenarios.
* Cross-role coverage is explicit.

Parent: SYN-174 — ENT | Enterprise acceptance scenarios and QA matrix",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-189",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-190",
      "key": "SYN-190",
      "summary": "ENT | Define mobile parity and offline-tolerant behavior for enterprise flows",
      "description": "Subtask under the mobile parity story.

Deliverables:

* parity expectations for web, Android, and iPhone across approval inbox, day detail, request form, summary panel, notifications, settings
* offline-tolerant read-only and retry behavior for safe actions
* stale-data conflict handling rules

Acceptance criteria:

* Mobile clients can implement the same business behavior as web.
* Offline and retry behavior are explicit.

Parent: SYN-175 — ENT | Mobile parity, responsive behavior and offline-friendly enterprise flows",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-190",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-191",
      "key": "SYN-191",
      "summary": "ENT | Define mobile parity rules and offline-safe enterprise actions",
      "description": "Subtask under the mobile parity story.

Deliverables:

* parity rules for approval inbox, day detail, request form, summary panel, notifications, settings
* offline-safe versus online-required actions
* stale-data conflict handling rules for mobile clients

Acceptance criteria:

* Mobile teams can implement enterprise behavior without web-only assumptions.
* Offline and retry behavior is explicit where supported.

Parent: SYN-175 — ENT | Mobile parity, responsive behavior and offline-friendly enterprise flows",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-191",
      "source": "file-import"
    },
    {
      "id": "syncfolk-jira-syn-192",
      "key": "SYN-192",
      "summary": "ENT | Define mobile parity and offline-tolerant behavior for enterprise flows",
      "description": "Subtask under the mobile parity story.

Deliverables:

* parity expectations for web, Android, and iPhone across approval inbox, day detail, request form, summary panel, notifications, settings
* offline-tolerant read-only and retry behavior for safe actions
* stale-data conflict handling rules

Acceptance criteria:

* Mobile clients can implement the same business behavior as web.
* Offline and retry behavior are explicit.

Parent: SYN-175 — ENT | Mobile parity, responsive behavior and offline-friendly enterprise flows",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-192",
      "source": "file-import"
    }
  ],
  "overview": {
    "applicationDescription": "Syncfolk is a B2C-first scheduling product with mature web-based event planning flows and a much deeper enterprise absence-planning backlog governed through Jira. The current implemented runtime centers on auth, guest access, event lifecycle, sharing, calendar voting, decision support, notifications, profile/social graph and admin operations.",
    "techStack": [
      "React + Vite web shell",
      "Supabase Auth + Postgres + Edge Functions",
      "Lovable-assisted UI iteration",
      "Route-driven consumer web experience"
    ],
    "hostingServices": [
      "Not explicitly asserted in the uploaded Syncfolk inventories"
    ],
    "backendServices": [
      "Supabase Auth",
      "Supabase Database",
      "Supabase Edge Functions"
    ],
    "projectStructure": [
      "B2C current runtime web product",
      "Shared backend and contract layer",
      "Enterprise backlog/specification track",
      "Future Android/iPhone parity track"
    ],
    "runtimeNotes": [
      "The uploaded Syncfolk markdown is a feature/state inventory, not a formal historical release audit.",
      "Enterprise scope is specification/backlog heavy and should appear primarily as unreleased or planned governance coverage.",
      "All imported Jira items in this seed are validated against jiraissues.csv and no invalid SYN key is retained."
    ]
  }
};

export const tenants: TenantRecord[] = [{ id: "tenant_releasegovernance", name: "ReleaseGovernance Demo Workspace", plan: "growth", projects: [hobbeastProject, syncfolkProject] }];
export function getTenant(tenantId: string) { return tenants.find((tenant) => tenant.id === tenantId); }
export function getProject(projectId: string) { return tenants.flatMap((tenant) => tenant.projects).find((project) => project.id === projectId); }
