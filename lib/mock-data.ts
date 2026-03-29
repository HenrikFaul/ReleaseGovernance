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
      "id": "rel-sync-01",
      "version": "web-v0.1.0-shell-design",
      "status": "old",
      "releaseState": "released",
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
        "supabase",
        "lovable",
        "github",
        "jira",
        "vercel"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_shell_design_foundation"
      ],
      "releaseNotes": "Cross-platform shell, route model, design tokens, shared UI primitives and shell-level data contracts.",
      "jiraLinks": [
        {
          "key": "SYN-1",
          "summary": "SYN | App shell, navigation and design system",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-1",
          "description": "Build the cross-platform application shell and reusable design system that will let the existing Syncfolk web experience be reimplemented consistently for Android and iPhone.\n\nh2. Scope\n\n* App shell, navigation model, top-level routes and guarded screens\n* Cross-platform layout rules, responsive behavior and spacing system\n* Theme system, tokens, reusable UI primitives and accessibility baseline\n* Deep-link entry points for shared event links and auth redirects\n\nh2. Frontend requirements\n\n* Define screen map for auth, app home, join-event, profile, admin and modal flows\n* Define reusable components for buttons, inputs, chips, badges, dialogs, sheets, cards and calendar cells\n* Define responsive behavior for phone, tablet and large-screen layouts\n* Preserve feature parity with current webapp while removing web-specific coupling\n\nh2. Backend / integration requirements\n\n* Document required bootstrap payloads for session restore, profile bootstrap and selected-event bootstrap\n* Define deep-link handling contract for invite URLs, temp upgrade flows and password reset flows\n\nh2. Acceptance criteria\n\n* Native teams can implement the entire shell and core UI primitives without reverse-engineering the web code\n* Navigation and theming contracts are documented in issue children\n* All downstream mobile stories can reference this epic as their shell/design baseline",
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
          "description": "Build the cross-platform application shell and reusable design system that will let the existing Syncfolk web experience be reimplemented consistently for Android and iPhone.\n\nh2. Scope\n\n* App shell, navigation model, top-level routes and guarded screens\n* Cross-platform layout rules, responsive behavior and spacing system\n* Theme system, tokens, reusable UI primitives and accessibility baseline\n* Deep-link entry points for shared event links and auth redirects\n\nh2. Frontend requirements\n\n* Define screen map for auth, app home, join-event, profile, admin and modal flows\n* Define reusable components for buttons, inputs, chips, badges, dialogs, sheets, cards and calendar cells\n* Define responsive behavior for phone, tablet and large-screen layouts\n* Preserve feature parity with current webapp while removing web-specific coupling\n\nh2. Backend / integration requirements\n\n* Document required bootstrap payloads for session restore, profile bootstrap and selected-event bootstrap\n* Define deep-link handling contract for invite URLs, temp upgrade flows and password reset flows\n\nh2. Acceptance criteria\n\n* Native teams can implement the entire shell and core UI primitives without reverse-engineering the web code\n* Navigation and theming contracts are documented in issue children\n* All downstream mobile stories can reference this epic as their shell/design baseline",
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
          "description": "Build the cross-platform application shell and reusable design system that will let the existing Syncfolk web experience be reimplemented consistently for Android and iPhone.\n\nh2. Scope\n\n* App shell, navigation model, top-level routes and guarded screens\n* Cross-platform layout rules, responsive behavior and spacing system\n* Theme system, tokens, reusable UI primitives and accessibility baseline\n* Deep-link entry points for shared event links and auth redirects\n\nh2. Frontend requirements\n\n* Define screen map for auth, app home, join-event, profile, admin and modal flows\n* Define reusable components for buttons, inputs, chips, badges, dialogs, sheets, cards and calendar cells\n* Define responsive behavior for phone, tablet and large-screen layouts\n* Preserve feature parity with current webapp while removing web-specific coupling\n\nh2. Backend / integration requirements\n\n* Document required bootstrap payloads for session restore, profile bootstrap and selected-event bootstrap\n* Define deep-link handling contract for invite URLs, temp upgrade flows and password reset flows\n\nh2. Acceptance criteria\n\n* Native teams can implement the entire shell and core UI primitives without reverse-engineering the web code\n* Navigation and theming contracts are documented in issue children\n* All downstream mobile stories can reference this epic as their shell/design baseline",
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
        },
        {
          "key": "SYN-64",
          "summary": "SYN | Task | Build authoritative screen inventory and route matrix",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-64",
          "description": "h1. Objective\n\nProduce the authoritative list of screens and overlays for the product.\n\nh1. Deliverables\n\n* Table of route/screen identifiers, ownership, actor access, trigger source and return target.\n* Overlay launch table including create-event, share, day-details, notifications, pin-day and event-unavailable surfaces.\n* History behavior column: replace, push, dismiss-to-parent.\n\nh1. Technical notes\n\n* Do not describe React components as the source of truth; describe user-visible screens and state transitions.\n* Identify which screens require preloaded event data, profile data or token validation before render.",
          "labels": [
            "mobile-spec",
            "navigation",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-65",
          "summary": "SYN | Task | Specify invite, auth callback and password-reset deep links",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-65",
          "description": "h1. Objective\n\nDefine the deep-link contract for invite-based participation and identity recovery.\n\nh1. Functional requirements\n\n* Map URL inputs, required query params, validation sequence and outcome screens.\n* Preserve redirect target after successful login, registration or activation.\n* Define behavior for stale, malformed or already-used links.\n\nh1. Backend requirements\n\n* Identify server responses and local state changes needed for each deep-link branch.\n* Define analytics events for invite open, invite rejection, join success and activation completion.",
          "labels": [
            "deep-link",
            "mobile-spec",
            "navigation",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-66",
          "summary": "SYN | Task | Specify global loading, empty and error shell states",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-66",
          "description": "h1. Objective\n\nStandardize application-level skeletons, retries and blocking states.\n\nh1. Scope\n\n* Startup spinner / bootstrap blocking state.\n* Protected-route unauthorized redirect state.\n* Event-deleted / unavailable blocking modal.\n* Retry pattern for fetch failures in main workspace, profile and admin.\n\nh1. UI notes\n\n* Every blocking state must state headline, body copy, primary CTA and secondary CTA.\n* Empty and error states must be defined for desktop and mobile layouts separately where the container differs.",
          "labels": [
            "app-shell",
            "mobile-spec",
            "SYN",
            "task",
            "ux"
          ]
        },
        {
          "key": "SYN-67",
          "summary": "SYN | Task | Create token catalog for color, typography, spacing and elevation",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-67",
          "description": "SYN | Task | Create token catalog for color, typography, spacing and elevation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nProduce a token table consumable by any client platform.\n\nh1. Deliverables\n\n* Semantic token names, usage intent and fallback mapping.\n* Numeric scale for spacing, radius, border widths and shadow/elevation.\n* Typography table with font families, sizes, weights, line heights and letter spacing.\n\nh1. Constraints\n\n* Token names must be semantic and platform-neutral.\n* Include accessibility notes for contrast-sensitive tokens.",
          "labels": [
            "design-system",
            "mobile-spec",
            "SYN",
            "task",
            "tokens"
          ]
        },
        {
          "key": "SYN-68",
          "summary": "SYN | Task | Define reusable component anatomy and state matrix",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-68",
          "description": "SYN | Task | Define reusable component anatomy and state matrix\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nSpecify how each shared control is composed and how it behaves in each state.\n\nh1. Scope\n\n* Buttons and pills including vote selectors.\n* Form controls including validation, helper text and character counter placement.\n* Cards, dialogs, sheets and scrollable panels.\n* Notification rows, ranking rows and share-option tiles.\n\nh1. Acceptance\n\n* Each primitive has a normative anatomy section and a state transition table.",
          "labels": [
            "components",
            "design-system",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-69",
          "summary": "SYN | Task | Define responsive layout grid and breakpoint rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-69",
          "description": "SYN | Task | Define responsive layout grid and breakpoint rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nTranslate the product layout into breakpoint-independent rules.\n\nh1. Scope\n\n* Auth split layout and compact layout.\n* Main calendar workspace with calendar-first width priority.\n* Left/right auxiliary panels that shrink before calendar content is cropped.\n* Desktop dialog, mobile sheet and full-screen fallback rules.\n\nh1. Acceptance\n\n* A native or cross-platform team can derive the same component spacing and panel priority from the written rules.",
          "labels": [
            "layout",
            "mobile-spec",
            "responsive",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-133",
          "summary": "SYN | Task | Define standard response envelope, pagination and mutation result patterns",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-133",
          "description": "SYN | Task | Define standard response envelope, pagination and mutation result patterns\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine a consistent API contract style across features.\n\nh1. Scope\n\n* Standard success/error envelope.\n* Cursor/page/limit patterns where lists are paginated.\n* Mutation result payload shape and optimistic-update compatibility.\n\nh1. Acceptance\n\n* API consumers can rely on a uniform contract style across modules.",
          "labels": [
            "api-contract",
            "backend",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-134",
          "summary": "SYN | Task | Define feature-specific error codes and client recovery actions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-134",
          "description": "SYN | Task | Define feature-specific error codes and client recovery actions\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine stable error categories and recovery expectations per feature.\n\nh1. Scope\n\n* Auth/session errors.\n* Invite/join errors.\n* Voting/calendar errors.\n* Profile/friends/admin errors.\n\nh1. Acceptance\n\n* Every important backend failure has a known client recovery or user-facing fallback.",
          "labels": [
            "backend",
            "errors",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-135",
          "summary": "SYN | Task | Define app shell state diagrams, triggers and blocked transitions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-135",
          "description": "SYN | Task | Define app shell state diagrams, triggers and blocked transitions\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the state machine behind the app shell module.\n\nh1. Scope\n\n* Bootstrap, ready, empty, error and blocked states.\n* Triggers that move the shell between states.\n* Explicitly forbidden transitions.\n\nh1. Acceptance\n\n* Engineers can derive the same state diagram without inspecting web source code.",
          "labels": [
            "app-shell",
            "mobile-spec",
            "state-diagram",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-136",
          "summary": "SYN | Task | Define app shell screen-by-screen section order, CTA hierarchy and adaptive layout",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-136",
          "description": "SYN | Task | Define app shell screen-by-screen section order, CTA hierarchy and adaptive layout\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine normative wireframe ordering rules for the app shell module.\n\nh1. Scope\n\n* Section order per screen.\n* Primary/secondary CTA hierarchy.\n* Adaptive layout notes for mobile vs wider layouts.\n\nh1. Acceptance\n\n* Teams can recreate the app shell layouts consistently without relying on the current web source.",
          "labels": [
            "app-shell",
            "mobile-spec",
            "SYN",
            "task",
            "wireframe"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "Syncfolk",
        "repository": "inventory-and-jira-baseline",
        "label": "Inventory + Jira validated baseline"
      },
      "deploymentComment": "Governance-reconstructed Syncfolk baseline release for app shell, navigation and design foundation."
    },
    {
      "id": "rel-sync-02",
      "version": "web-v0.2.0-auth-identity",
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
        "supabase",
        "google-oauth",
        "lovable"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_auth_identity_foundation"
      ],
      "releaseNotes": "Credential auth, OAuth, verification, reset and identity state behavior.",
      "jiraLinks": [
        {
          "key": "SYN-3",
          "summary": "SYN | Authentication, identity and guest access",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-3",
          "description": "Define all account, session and guest-access flows needed to support registered users and registration-free participants across Android and iPhone shared-link entry points.\n\nScope:\n\n* Email/password sign in, Google sign in, sign up and password reset\n* Temporary user sessions and event-linked guest access\n* Guest-to-registered upgrade and session continuity\n* Permission rules for creator-only actions, participant actions and admin roles\n\nFrontend requirements:\n\n* Platform-neutral auth screens and validation behavior\n* Error, loading and recovery states for every auth flow\n* Session restore and sign-out behavior across app restarts\n\nBackend/integration requirements:\n\n* Auth provider integration and callback contracts\n* Temporary user creation, upgrade and cleanup rules\n* Permission model for creator, participant and guest limits\n\nAcceptance criteria:\n\n* Mobile teams can implement the full auth model from child issues\n* Guest and registered flows are described without web-only assumptions",
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
          "description": "Cross-platform authentication and identity flows for Syncfolk mobile.\n\nScope:\n\n* Email/password sign in\n* Google sign in\n* Sign up and password reset\n* Guest sessions and guest-to-registered upgrade\n* Role and permission handling for creator, participant and admin\n\nAcceptance criteria:\n\n* Android and iPhone teams can implement the identity model from child issues.\n* Guest and registered flows are documented without web-only assumptions.",
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
        },
        {
          "key": "SYN-70",
          "summary": "SYN | Task | Specify credential login and registration validation",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-70",
          "description": "SYN | Task | Specify email/password login and registration validation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the normative field-level behavior for login and registration.\n\nh1. Scope\n\n* Email and password field validation.\n* Display-name field for registration only.\n* Inline validation timing and submit-time validation.\n* Success, failure and throttling messages.\n\nh1. Backend contract\n\n* Required request and response fields for sign-in and sign-up.\n* Mapping of technical auth errors to user-facing error categories.",
          "labels": [
            "auth",
            "forms",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-71",
          "summary": "SYN | Task | Specify Google OAuth sign-in and sign-up activation flow",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-71",
          "description": "SYN | Task | Specify Google OAuth sign-in and sign-up activation flow\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the exact activation and fallback behavior for Google sign-in / sign-up.\n\nh1. Scope\n\n* Entry from login screen and from registration screen.\n* First-time activation versus returning sign-in.\n* Account-already-exists and email-collision states.\n* Redirect continuation after OAuth completion.\n\nh1. Backend contract\n\n* Required identity payload on callback completion.\n* Mapping of OAuth/provider failures to recoverable UI states.",
          "labels": [
            "auth",
            "mobile-spec",
            "oauth",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-72",
          "summary": "SYN | Task | Specify OTP verification, resend cooldown and recovery states",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-72",
          "description": "SYN | Task | Specify OTP verification, resend cooldown and recovery states\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nSpecify the verification-step behavior used after registration or invite-bound activation.\n\nh1. Scope\n\n* Code entry layout and masking rules.\n* Resend cooldown timer and disabled state.\n* Expired code, wrong code and attempt-limit responses.\n* Recovery path back to sign-in or restart activation.\n\nh1. Acceptance\n\n* The spec clearly defines when verification is required and when already-verified users bypass this screen.",
          "labels": [
            "auth",
            "mobile-spec",
            "SYN",
            "task",
            "verification"
          ]
        },
        {
          "key": "SYN-77",
          "summary": "SYN | Task | Credential reset completion flow specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-77",
          "description": "Imported from the approved step-2 task list. Covers credential-reset request handling and reset completion screens.",
          "labels": []
        },
        {
          "key": "SYN-78",
          "summary": "SYN | Task | Specify profile-based password change card behavior",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-78",
          "description": "SYN | Task | Specify profile-based password change card behavior\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the in-profile credential-change surface and exact behavior.\n\nh1. Scope\n\n* Current password, new password and confirmation fields.\n* Strength rules, reuse prevention and mismatch handling.\n* Success feedback and session-security implications after change.\n\nh1. Acceptance\n\n* The spec distinguishes between local validation, server rejection and forced re-auth scenarios.",
          "labels": [
            "mobile-spec",
            "password",
            "profile",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-138",
          "summary": "SYN | Task | Define identity state diagrams, triggers and blocked transitions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-138",
          "description": "SYN | Task | Define identity state diagrams, triggers and blocked transitions\n\nImplementation objective\nCreate the detailed state-table appendix for this epic.\n\nDetailed requirements\n\n* List state name, entry trigger, exit trigger, visible UI treatment and guard.\n\nTechnical specification\n\n* Describe emitted audit/notification/analytics side effects per transition.\n\nAcceptance criteria\n\n* A developer can code finite-state logic directly from the table.",
          "labels": [
            "auth",
            "mobile-spec",
            "state-machine",
            "SYN"
          ]
        },
        {
          "key": "SYN-139",
          "summary": "SYN | Task | Define identity screen-by-screen section order, CTA hierarchy and adaptive layout",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-139",
          "description": "SYN | Task | Define identity screen-by-screen section order, CTA hierarchy and adaptive layout\n\nImplementation objective\nProduce the layout appendix for this epic.\n\nDetailed requirements\n\n* For each surface list header, body, footer, panel and modal region in display order.\n\nTechnical specification\n\n* Note required data blocks and placeholder states per region.\n\nAcceptance criteria\n\n* Design and engineering can create wireframes from the issue without reading current code.",
          "labels": [
            "auth",
            "mobile-spec",
            "SYN",
            "wireframe"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "Syncfolk",
        "repository": "inventory-and-jira-baseline",
        "label": "Inventory + Jira validated baseline"
      },
      "deploymentComment": "Governance-reconstructed Syncfolk baseline release for authentication, identity and recovery foundation."
    },
    {
      "id": "rel-sync-03",
      "version": "web-v0.3.0-guest-temp-access",
      "status": "old",
      "releaseState": "released",
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
        "syncfolk_guest_temp_access"
      ],
      "releaseNotes": "Temporary identity, inactivity handling and guest upgrade lifecycle.",
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
          "key": "SYN-74",
          "summary": "SYN | Task | Temporary session lifecycle specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-74",
          "description": "Imported from the approved step-2 task list. Covers temporary session creation, restore, and invalidation behavior.",
          "labels": []
        },
        {
          "key": "SYN-75",
          "summary": "SYN | Task | Guest route handling and inactivity logout specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-75",
          "description": "Imported from the approved step-2 task list. Covers inactivity logout and blocked-route handling for guest users.",
          "labels": []
        },
        {
          "key": "SYN-76",
          "summary": "SYN | Task | Guest account upgrade and migration specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-76",
          "description": "Imported from the approved step-2 task list. Covers upgrade from guest participation to registered account and related data migration behavior.",
          "labels": []
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "Syncfolk",
        "repository": "inventory-and-jira-baseline",
        "label": "Inventory + Jira validated baseline"
      },
      "deploymentComment": "Governance-reconstructed Syncfolk baseline release for guest and temporary session flows."
    },
    {
      "id": "rel-sync-04",
      "version": "web-v0.4.0-event-lifecycle",
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
        "supabase",
        "date-fns"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_event_lifecycle"
      ],
      "releaseNotes": "Create/edit/delete/restart event flows, selector context and event data model behavior.",
      "jiraLinks": [
        {
          "key": "SYN-6",
          "summary": "SYN | Event calendar lifecycle, templates and sharing",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-6",
          "description": "Cross-platform event calendar lifecycle for Syncfolk mobile.\n\nScope:\n\n* Create, edit, delete and view event calendars\n* Template-based setup with category and description metadata\n* Registered-only and no-registration share modes\n* Invite link generation, distribution and revocation\n* Event selector and ownership/participant rules\n\nAcceptance criteria:\n\n* Android and iPhone teams can rebuild create/edit/share/join behavior from child issues.\n* Data fields and access rules are captured in downstream issues.",
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
        },
        {
          "key": "SYN-73",
          "summary": "SYN | Task | Event template defaults specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-73",
          "description": "Define reusable event template and default-value behavior.",
          "labels": []
        },
        {
          "key": "SYN-79",
          "summary": "SYN | Task | Specify create-event form validation, character limits and save rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-79",
          "description": "SYN | Task | Specify create-event form validation, character limits and save rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the create-event form rules with no ambiguity for client and backend teams.\n\nh1. Scope\n\n* Required and optional fields.\n* Character limits and counter behavior.\n* Save-button enabled / disabled conditions.\n* Draft loss prevention and navigation-away behavior if applicable.\n\nh1. Acceptance\n\n* The spec states every server-side and client-side validation condition and the user-facing error message category.",
          "labels": [
            "events",
            "mobile-spec",
            "SYN",
            "task",
            "validation"
          ]
        },
        {
          "key": "SYN-80",
          "summary": "SYN | Task | Specify mutable vs immutable event fields after creation",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-80",
          "description": "SYN | Task | Specify mutable vs immutable event fields after creation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine which event properties may still be edited after creation and under which conditions.\n\nh1. Scope\n\n* Editable versus locked fields before and after participants vote.\n* Deadline and decided-state effects on editability.\n* UX for disabled fields and attempted edits.\n\nh1. Acceptance\n\n* The spec resolves every field to mutable, conditionally mutable or immutable status.",
          "labels": [
            "edit",
            "events",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-81",
          "summary": "SYN | Task | Specify event deletion, participant impact and restart-voting operation",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-81",
          "description": "SYN | Task | Specify event deletion, participant impact and restart-voting operation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine deletion and voting restart operations together with downstream effects.\n\nh1. Scope\n\n* Creator confirmation flow and safeguards.\n* Participant notification and access changes after deletion.\n* Restart-voting operation, preserved fields and reset fields.\n* Auditability and irreversible actions.\n\nh1. Acceptance\n\n* The spec fully defines data, notifications and UI consequences for both operations.",
          "labels": [
            "delete",
            "events",
            "mobile-spec",
            "restart",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-82",
          "summary": "SYN | Task | Event list ordering and restore specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-82",
          "description": "Imported from the approved step-2 task list. Covers event list ordering, sorting, and restore behavior.",
          "labels": []
        },
        {
          "key": "SYN-83",
          "summary": "SYN | Task | Specify selector UI states and empty-state behavior",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-83",
          "description": "SYN | Task | Specify selector UI states and empty-state behavior\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the event-selector visual states and user guidance behavior.\n\nh1. Scope\n\n* No events, no access, loading and partial-data states.\n* Placeholder copy and CTA behavior.\n* Selected, hovered, focused and disabled row behavior if applicable.\n\nh1. Acceptance\n\n* The selector presents the same state hierarchy and fallbacks across clients.",
          "labels": [
            "events",
            "mobile-spec",
            "selector",
            "SYN",
            "task",
            "ui"
          ]
        },
        {
          "key": "SYN-84",
          "summary": "SYN | Task | Specify date-picker behavior for start/end/deadline fields",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-84",
          "description": "SYN | Task | Specify date-picker behavior for start/end/deadline fields\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine all picker rules for event start, end and decision deadline fields.\n\nh1. Scope\n\n* Allowed ranges and relative ordering constraints.\n* Time-zone / locale presentation assumptions if applicable.\n* Same-day, overnight and invalid-range handling.\n* Manual entry versus picker selection behavior.\n\nh1. Acceptance\n\n* The spec yields the same allowed/blocked date combinations across clients.",
          "labels": [
            "date-picker",
            "events",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-131",
          "summary": "SYN | Task | Define entity schemas, identifiers, timestamps and soft-delete behavior",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-131",
          "description": "SYN | Task | Define entity schemas, identifiers, timestamps and soft-delete behavior\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the foundational domain objects used by Syncfolk.\n\nh1. Scope\n\n* Entities such as user, temporary user, event, event participant, invitation/share token, vote, notification, friend request and favorite.\n* Stable identifiers, created/updated timestamps and deletion semantics.\n* Which records use hard delete vs soft delete.\n\nh1. Acceptance\n\n* The entity model is explicit enough for backend design and client contract generation.",
          "labels": [
            "backend",
            "entities",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-132",
          "summary": "SYN | Task | Define cross-entity lifecycle relations and cascade rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-132",
          "description": "SYN | Task | Define cross-entity lifecycle relations and cascade rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how domain objects affect each other over time.\n\nh1. Scope\n\n* Event deletion impact on votes, invitations, notifications and participant membership.\n* Account deletion impact on social graph and authored records.\n* Temporary-user upgrade/linking impact on identities and related records.\n\nh1. Acceptance\n\n* Lifecycle and cascade rules are explicit and consistent across the whole model.",
          "labels": [
            "backend",
            "lifecycle",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-140",
          "summary": "SYN | Task | Define event lifecycle state diagrams, triggers and blocked transitions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-140",
          "description": "SYN | Task | Define event lifecycle state diagrams, triggers and blocked transitions\n\nImplementation objective\nCreate the detailed state-table appendix for this epic.\n\nDetailed requirements\n\n* List state name, entry trigger, exit trigger, visible UI treatment and guard.\n\nTechnical specification\n\n* Describe emitted audit/notification/analytics side effects per transition.\n\nAcceptance criteria\n\n* A developer can code finite-state logic directly from the table.",
          "labels": [
            "events",
            "mobile-spec",
            "state-machine",
            "SYN"
          ]
        },
        {
          "key": "SYN-141",
          "summary": "SYN | Task | Define event lifecycle screen-by-screen section order, CTA hierarchy and adaptive layout",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-141",
          "description": "SYN | Task | Define event lifecycle screen-by-screen section order, CTA hierarchy and adaptive layout\n\nImplementation objective\nProduce the layout appendix for this epic.\n\nDetailed requirements\n\n* For each surface list header, body, footer, panel and modal region in display order.\n\nTechnical specification\n\n* Note required data blocks and placeholder states per region.\n\nAcceptance criteria\n\n* Design and engineering can create wireframes from the issue without reading current code.",
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
        "owner": "Syncfolk",
        "repository": "inventory-and-jira-baseline",
        "label": "Inventory + Jira validated baseline"
      },
      "deploymentComment": "Governance-reconstructed Syncfolk baseline release for event lifecycle, creation and context."
    },
    {
      "id": "rel-sync-05",
      "version": "web-v0.5.0-sharing-and-join",
      "status": "old",
      "releaseState": "released",
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
        "supabase",
        "email-social-share"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_sharing_and_join"
      ],
      "releaseNotes": "Share token generation, channel distribution and event join outcomes for registered and guest users.",
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
        },
        {
          "key": "SYN-85",
          "summary": "SYN | Task | Specify invite-token schema, lifecycle and consumption rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-85",
          "description": "SYN | Task | Specify invite-token schema, lifecycle and consumption rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how share tokens are created, validated, incremented and revoked.\n\nh1. Scope\n\n* Token uniqueness, expiry, use-count and max-use semantics.\n* Access checks for creator and participant-generated links.\n* Anonymous-join flag behavior.\n\nh1. Acceptance\n\n* Backend teams can implement a stable token lifecycle without web-code dependency.",
          "labels": [
            "backend",
            "invite",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-86",
          "summary": "SYN | Task | Specify share dialog content, per-link actions and grouped channel UX",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-86",
          "description": "SYN | Task | Specify share dialog content, per-link actions and grouped channel UX\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the share dialog UI in detail.\n\nh1. Scope\n\n* Mode switcher, create-link CTA and active-link cards.\n* Copy, revoke and share actions.\n* Text snippet generation and grouped social channels.\n\nh1. Acceptance\n\n* The interaction model is complete for desktop and mobile.",
          "labels": [
            "invite",
            "mobile-spec",
            "SYN",
            "task",
            "ui"
          ]
        },
        {
          "key": "SYN-87",
          "summary": "SYN | Task | Specify creator-vs-participant sharing permission rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-87",
          "description": "SYN | Task | Specify creator-vs-participant sharing permission rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nMake sharing authorization explicit.\n\nh1. Scope\n\n* Creator default capabilities.\n* Participant sharing when allow_participant_sharing is enabled.\n* Guest restrictions.\n* Server-side enforcement and corresponding UI disable states.\n\nh1. Acceptance\n\n* Unauthorized sharing is impossible even with stale client state.",
          "labels": [
            "invite",
            "mobile-spec",
            "permissions",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-88",
          "summary": "SYN | Task | Specify join-event status matrix and outcome-specific CTAs",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-88",
          "description": "SYN | Task | Specify join-event status matrix and outcome-specific CTAs\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine all join-event outcomes and their exact copy/CTA structure.\n\nh1. Scope\n\n* Loading, invalid, expired, already-joined, success, auth-required and unavailable states.\n* Primary and secondary actions for each state.\n* Which states may auto-redirect and which require explicit confirmation.\n\nh1. Acceptance\n\n* The status matrix is complete and platform-neutral.",
          "labels": [
            "join-event",
            "mobile-spec",
            "SYN",
            "task",
            "ux"
          ]
        },
        {
          "key": "SYN-89",
          "summary": "SYN | Task | Specify guest join session creation and post-join continuation",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-89",
          "description": "SYN | Task | Specify guest join session creation and post-join continuation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the guest join backend and client continuation behavior.\n\nh1. Scope\n\n* Temporary identity creation.\n* Event participant record creation.\n* Redirect into event workspace.\n* Upgrade CTA availability after successful guest join.\n\nh1. Acceptance\n\n* The guest pathway is detailed enough for backend and native implementation.",
          "labels": [
            "backend",
            "guest",
            "join-event",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-90",
          "summary": "SYN | Task | Specify join-event status matrix and outcome-specific CTAs",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-90",
          "description": "SYN | Task | Specify join-event status matrix and outcome-specific CTAs\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine all join-event outcomes and their exact copy/CTA structure.\n\nh1. Scope\n\n* Loading, invalid, expired, already-joined, success, auth-required and unavailable states.\n* Primary and secondary actions for each state.\n* Which states may auto-redirect and which require explicit confirmation.\n\nh1. Acceptance\n\n* The status matrix is complete and platform-neutral.",
          "labels": [
            "join-event",
            "mobile-spec",
            "SYN",
            "task",
            "ux"
          ]
        },
        {
          "key": "SYN-91",
          "summary": "SYN | Task | Specify guest join session creation and post-join continuation",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-91",
          "description": "SYN | Task | Specify guest join session creation and post-join continuation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the guest join backend and client continuation behavior.\n\nh1. Scope\n\n* Temporary identity creation.\n* Event participant record creation.\n* Redirect into event workspace.\n* Upgrade CTA availability after successful guest join.\n\nh1. Acceptance\n\n* The guest pathway is detailed enough for backend and native implementation.",
          "labels": [
            "backend",
            "guest",
            "join-event",
            "mobile-spec",
            "SYN",
            "task"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "Syncfolk",
        "repository": "inventory-and-jira-baseline",
        "label": "Inventory + Jira validated baseline"
      },
      "deploymentComment": "Governance-reconstructed Syncfolk baseline release for sharing, invite distribution and join flows."
    },
    {
      "id": "rel-sync-06",
      "version": "web-v0.6.0-calendar-core",
      "status": "old",
      "releaseState": "released",
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
        "supabase",
        "date-fns"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_calendar_core"
      ],
      "releaseNotes": "Month grid, date eligibility, single-day voting and core calendar state behavior.",
      "jiraLinks": [
        {
          "key": "SYN-7",
          "summary": "SYN | Voting calendar, day details and batch interactions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-7",
          "description": "Cross-platform voting calendar behavior for Syncfolk mobile.\n\nScope:\n\n* Calendar grid rendering and month navigation\n* Date eligibility rules based on start date, end date, current date and event status\n* Single-day voting, long-press/info access and day detail surfaces\n* Batch voting ranges, drag interactions and clear/reset behavior\n\nAcceptance criteria:\n\n* Android and iPhone teams can rebuild calendar voting from child issues.\n* Date-selection edge cases are captured in downstream issues.",
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
          "description": "Cross-platform voting calendar behavior for Syncfolk mobile.\n\nScope:\n\n* Calendar grid rendering and month navigation\n* Date eligibility rules based on start date, end date, current date and event status\n* Single-day voting, long-press/info access and day detail surfaces\n* Batch voting ranges, drag interactions and clear/reset behavior\n\nAcceptance criteria:\n\n* Android and iPhone teams can rebuild calendar voting from child issues.\n* Date-selection edge cases are captured in downstream issues.",
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
        },
        {
          "key": "SYN-92",
          "summary": "SYN | Task | Specify month-grid generation, placeholders and navigation controls",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-92",
          "description": "SYN | Task | Specify month-grid generation, placeholders and navigation controls\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how visible days and placeholders are constructed for the calendar.\n\nh1. Scope\n\n* First-day offset and leading placeholder cells.\n* Month-to-month navigation when event spans multiple months.\n* Header composition and alignment rules.\n\nh1. Acceptance\n\n* Teams can generate the same visible calendar layout from the written spec.",
          "labels": [
            "calendar",
            "layout",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-93",
          "summary": "SYN | Task | Specify eligibility and disabled-state rules for each date",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-93",
          "description": "SYN | Task | Specify eligibility and disabled-state rules for each date\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nMake vote eligibility deterministic.\n\nh1. Scope\n\n* Start/end date boundaries.\n* Today/past-date constraints.\n* Decided-date and deadline locks.\n* Guest/participant restrictions if any.\n\nh1. Acceptance\n\n* All client interactions check the same eligibility truth table.",
          "labels": [
            "calendar",
            "mobile-spec",
            "rules",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-94",
          "summary": "SYN | Task | Specify month-grid generation, placeholders and navigation controls",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-94",
          "description": "SYN | Task | Specify month-grid generation, placeholders and navigation controls\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how visible days and placeholders are constructed for the calendar.\n\nh1. Scope\n\n* First-day offset and leading placeholder cells.\n* Month-to-month navigation when event spans multiple months.\n* Header composition and alignment rules.\n\nh1. Acceptance\n\n* Teams can generate the same visible calendar layout from the written spec.",
          "labels": [
            "calendar",
            "layout",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-95",
          "summary": "SYN | Task | Specify eligibility and disabled-state rules for each date",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-95",
          "description": "SYN | Task | Specify eligibility and disabled-state rules for each date\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nMake vote eligibility deterministic.\n\nh1. Scope\n\n* Start/end date boundaries.\n* Today/past-date constraints.\n* Decided-date and deadline locks.\n* Guest/participant restrictions if any.\n\nh1. Acceptance\n\n* All client interactions check the same eligibility truth table.",
          "labels": [
            "calendar",
            "mobile-spec",
            "rules",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-96",
          "summary": "SYN | Task | Specify responsive calendar sizing with calendar-first priority",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-96",
          "description": "SYN | Task | Specify responsive calendar sizing with calendar-first priority\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how the calendar retains full visibility across resolutions.\n\nh1. Scope\n\n* Side-panel shrink rules.\n* Minimum and preferred calendar width/height.\n* Breakpoint rules that prevent clipping or excessive whitespace.\n\nh1. Acceptance\n\n* The calendar remains fully visible while auxiliary panels resize around it.",
          "labels": [
            "calendar",
            "mobile-spec",
            "responsive",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-97",
          "summary": "SYN | Task | Specify vote-tap semantics and toggle/remove behavior",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-97",
          "description": "SYN | Task | Specify vote-tap semantics and toggle/remove behavior\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine exact state transitions for clicking/tapping a single day.\n\nh1. Scope\n\n* Apply selected mode to empty day.\n* Change existing day from one mode to another.\n* Remove vote when tapping same selected mode, if allowed.\n* Block mutations for frozen/ineligible days.\n\nh1. Acceptance\n\n* State transitions are unambiguous and parity-tested across platforms.",
          "labels": [
            "interaction",
            "mobile-spec",
            "SYN",
            "task",
            "voting"
          ]
        },
        {
          "key": "SYN-98",
          "summary": "SYN | Task | Specify info icon, long-press and detail-open interaction separation",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-98",
          "description": "SYN | Task | Specify info icon, long-press and detail-open interaction separation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nEnsure read-only inspection does not conflict with voting interactions.\n\nh1. Scope\n\n* Separate hit areas and event handling.\n* Desktop click on info icon.\n* Mobile long-press behavior and threshold.\n* Read-only detail opening for frozen or past dates still within event range.\n\nh1. Acceptance\n\n* The rules explicitly prevent accidental vote mutation from detail access actions.",
          "labels": [
            "day-details",
            "interaction",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-99",
          "summary": "SYN | Task | Specify behavior after pinning, freeze and deadline lock",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-99",
          "description": "SYN | Task | Specify behavior after pinning, freeze and deadline lock\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how day interactions change once further voting is blocked.\n\nh1. Scope\n\n* Which actions remain available when decided_date exists.\n* Read-only detail access for pinned/non-pinned dates.\n* Visual affordances showing frozen state.\n\nh1. Acceptance\n\n* Post-pin behavior is complete and consistent with notification and ranking modules.",
          "labels": [
            "freeze",
            "mobile-spec",
            "SYN",
            "task",
            "voting"
          ]
        },
        {
          "key": "SYN-142",
          "summary": "SYN | Task | Define voting calendar state diagrams, triggers and blocked transitions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-142",
          "description": "SYN | Task | Define voting calendar state diagrams, triggers and blocked transitions\n\nImplementation objective\nCreate the detailed state-table appendix for this epic.\n\nDetailed requirements\n\n* List state name, entry trigger, exit trigger, visible UI treatment and guard.\n\nTechnical specification\n\n* Describe emitted audit/notification/analytics side effects per transition.\n\nAcceptance criteria\n\n* A developer can code finite-state logic directly from the table.",
          "labels": [
            "calendar",
            "mobile-spec",
            "state-machine",
            "SYN"
          ]
        },
        {
          "key": "SYN-143",
          "summary": "SYN | Task | Define voting calendar screen-by-screen section order, CTA hierarchy and adaptive layout",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-143",
          "description": "SYN | Task | Define voting calendar screen-by-screen section order, CTA hierarchy and adaptive layout\n\nImplementation objective\nProduce the layout appendix for this epic.\n\nDetailed requirements\n\n* For each surface list header, body, footer, panel and modal region in display order.\n\nTechnical specification\n\n* Note required data blocks and placeholder states per region.\n\nAcceptance criteria\n\n* Design and engineering can create wireframes from the issue without reading current code.",
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
        "owner": "Syncfolk",
        "repository": "inventory-and-jira-baseline",
        "label": "Inventory + Jira validated baseline"
      },
      "deploymentComment": "Governance-reconstructed Syncfolk baseline release for calendar rendering and primary voting interactions."
    },
    {
      "id": "rel-sync-07",
      "version": "web-v0.7.0-batch-day-details",
      "status": "old",
      "releaseState": "released",
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
        "supabase",
        "date-fns"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_batch_and_day_details"
      ],
      "releaseNotes": "Drag-range voting, batch side-panel operations and day-details participant views.",
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
          "key": "SYN-100",
          "summary": "SYN | Task | Specify touch/mouse drag range interaction and guard rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-100",
          "description": "SYN | Task | Specify touch/mouse drag range interaction and guard rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how range voting works with direct manipulation.\n\nh1. Scope\n\n* Pointer down, pointer move, pointer release lifecycle.\n* Which cells are affected and when duplicates are ignored.\n* Guard rules for disabled and out-of-range dates.\n\nh1. Acceptance\n\n* Touch and mouse follow the same eligibility matrix and produce the same result set.",
          "labels": [
            "batch-vote",
            "drag",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-101",
          "summary": "SYN | Task | Specify batch side panel controls, disabled state and clear operations",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-101",
          "description": "SYN | Task | Specify batch side panel controls, disabled state and clear operations\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the batch panel independently of the current web component.\n\nh1. Scope\n\n* Vote value selector, date fields and apply button rules.\n* Clear range and clear-all actions.\n* Disabled appearance when decided_date/deadline lock is active.\n\nh1. Acceptance\n\n* The panel behavior is fully reproducible on native or web clients.",
          "labels": [
            "batch-vote",
            "mobile-spec",
            "panel",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-102",
          "summary": "SYN | Task | Specify personal-availability copy restrictions into event voting",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-102",
          "description": "SYN | Task | Specify personal-availability copy restrictions into event voting\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the boundary between personal calendar data and event voting data.\n\nh1. Scope\n\n* Which personal-availability markings may be copied into an event.\n* Which markings are ignored or blocked.\n* How conflicts with decided dates, deadlines and event range are handled.\n\nh1. Acceptance\n\n* Users cannot accidentally copy unsupported or stale personal-calendar data into event voting.",
          "labels": [
            "batch-vote",
            "mobile-spec",
            "personal-calendar",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-103",
          "summary": "SYN | Task | Specify day-details payload, counts and participant-row anatomy",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-103",
          "description": "SYN | Task | Specify day-details payload, counts and participant-row anatomy\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the read-only information model shown when opening day details.\n\nh1. Scope\n\n* Date header and summary counts.\n* Participant-row fields including name, vote type and status indicators.\n* Pagination/virtualization assumptions if a day has many participants.\n\nh1. Acceptance\n\n* Backend payload and row anatomy are complete enough for native or web implementation.",
          "labels": [
            "data",
            "day-details",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-104",
          "summary": "SYN | Task | Specify friend-request and favorite actions from day-details rows",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-104",
          "description": "SYN | Task | Specify friend-request and favorite actions from day-details rows\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine social actions initiated from day-details rows.\n\nh1. Scope\n\n* Add/remove favorite from a participant row.\n* Send friend request, pending-request state and already-friends state.\n* Visibility and disable rules for self rows, guest rows or unsupported identities.\n\nh1. Acceptance\n\n* The row-action model is fully specified and consistent with profile/friends modules.",
          "labels": [
            "day-details",
            "friends",
            "mobile-spec",
            "SYN",
            "task"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "Syncfolk",
        "repository": "inventory-and-jira-baseline",
        "label": "Inventory + Jira validated baseline"
      },
      "deploymentComment": "Governance-reconstructed Syncfolk baseline release for batch voting and day-details interactions."
    },
    {
      "id": "rel-sync-08",
      "version": "web-v0.8.0-ranking-pinned-day",
      "status": "old",
      "releaseState": "released",
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
        "supabase",
        "date-fns"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_ranking_and_pinned_day"
      ],
      "releaseNotes": "Ranking computation, tie resolution, pinned-day decisions and freeze/unlock behavior.",
      "jiraLinks": [
        {
          "key": "SYN-8",
          "summary": "SYN | Ranking, pinned day and notifications",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-8",
          "description": "Cross-platform ranking, pinned day and notification behavior for Syncfolk mobile.\n\nScope:\n\n* Vote ranking computation and presentation\n* Creator-only pinned-day selection and modification\n* Tie handling for top-ranked days\n* Notification center, unread counts, read/delete actions and event-driven notification types\n\nAcceptance criteria:\n\n* Android and iPhone teams can reproduce ranking and pin-day behavior from child issues.\n* Notification-triggering events and payloads are documented in downstream issues.",
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
          "description": "Cross-platform ranking, pinned day and notification behavior for Syncfolk mobile.\n\nScope:\n\n* Vote ranking computation and presentation\n* Creator-only pinned-day selection and modification\n* Tie handling for top-ranked days\n* Notification center, unread counts, read/delete actions and event-driven notification types\n\nAcceptance criteria:\n\n* Android and iPhone teams can reproduce ranking and pin-day behavior from child issues.\n* Notification-triggering events and payloads are documented in downstream issues.",
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
        },
        {
          "key": "SYN-108",
          "summary": "SYN | Task | Specify score formula, tie ordering and exclusion of negative-only dates",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-108",
          "description": "SYN | Task | Specify score formula, tie ordering and exclusion of negative-only dates\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the ranking algorithm in a platform-neutral way.\n\nh1. Scope\n\n* Point values by vote type.\n* Ordering when scores tie.\n* Exclusion of dates that only have negative votes or are otherwise disqualified.\n\nh1. Acceptance\n\n* Any client or backend service can reproduce identical ranking output from the written rules.",
          "labels": [
            "algorithm",
            "mobile-spec",
            "ranking",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-109",
          "summary": "SYN | Task | Specify ranking list UI, medals and empty-state behavior",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-109",
          "description": "SYN | Task | Specify ranking list UI, medals and empty-state behavior\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the ranking list as a reusable presentation pattern.\n\nh1. Scope\n\n* Row anatomy, score display and medal treatment for top positions.\n* Empty-state, loading and no-eligible-date states.\n* Desktop/mobile layout adjustments.\n\nh1. Acceptance\n\n* Teams can implement the same ranking surface without depending on existing web markup.",
          "labels": [
            "mobile-spec",
            "ranking",
            "SYN",
            "task",
            "ui"
          ]
        },
        {
          "key": "SYN-110",
          "summary": "SYN | Task | Specify ranking-row click behavior and calendar focus outcome",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-110",
          "description": "SYN | Task | Specify ranking-row click behavior and calendar focus outcome\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine what happens when the user selects a ranked date row.\n\nh1. Scope\n\n* Calendar scroll/focus behavior.\n* Visual highlighting and synchronization with day details.\n* What happens for dates no longer eligible or already pinned.\n\nh1. Acceptance\n\n* Ranking-row selection always leads to the same focused calendar state.",
          "labels": [
            "calendar-link",
            "mobile-spec",
            "ranking",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-111",
          "summary": "SYN | Task | Specify tie resolution dialog and default suggested date logic",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-111",
          "description": "SYN | Task | Specify tie resolution dialog and default suggested date logic\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how the user resolves tied highest-ranked dates.\n\nh1. Scope\n\n* Dialog entry conditions and suggested default date.\n* Row selection rules inside the dialog.\n* Cancel vs confirm outcomes and resulting decided_date.\n\nh1. Acceptance\n\n* Tie resolution is deterministic and consistent with the ranking algorithm.",
          "labels": [
            "dialog",
            "mobile-spec",
            "pinned-day",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-112",
          "summary": "SYN | Task | Specify freeze behavior after pinning across calendar and batch controls",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-112",
          "description": "SYN | Task | Specify freeze behavior after pinning across calendar and batch controls\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the global frozen state after pinning/deciding a date.\n\nh1. Scope\n\n* Calendar cell behavior after a decision is made.\n* Batch-control disabling and explanatory messaging.\n* Read-only affordances that remain available.\n\nh1. Acceptance\n\n* Frozen behavior is consistent across calendar, ranking and batch-vote surfaces.",
          "labels": [
            "freeze",
            "mobile-spec",
            "pinned-day",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-113",
          "summary": "SYN | Task | Specify decided-date unlock operation and re-enabled voting rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-113",
          "description": "SYN | Task | Specify decided-date unlock operation and re-enabled voting rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how a previously decided event is returned to editable voting mode.\n\nh1. Scope\n\n* Preconditions and permissions for unlock.\n* Which fields and controls become active again.\n* How ranking and notifications are recalculated or re-issued.\n\nh1. Acceptance\n\n* Unlock behavior is complete and consistent with decision/freeze semantics.",
          "labels": [
            "mobile-spec",
            "pinned-day",
            "SYN",
            "task",
            "unlock"
          ]
        },
        {
          "key": "SYN-144",
          "summary": "SYN | Task | Define ranking and notifications state diagrams, triggers and blocked transitions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-144",
          "description": "SYN | Task | Define ranking and notifications state diagrams, triggers and blocked transitions\n\nImplementation objective\nCreate the detailed state-table appendix for this epic.\n\nDetailed requirements\n\n* List state name, entry trigger, exit trigger, visible UI treatment and guard.\n\nTechnical specification\n\n* Describe emitted audit/notification/analytics side effects per transition.\n\nAcceptance criteria\n\n* A developer can code finite-state logic directly from the table.",
          "labels": [
            "mobile-spec",
            "notifications",
            "state-machine",
            "SYN"
          ]
        },
        {
          "key": "SYN-145",
          "summary": "SYN | Task | Define ranking and notifications screen-by-screen section order, CTA hierarchy and adaptive layout",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-145",
          "description": "SYN | Task | Define ranking and notifications screen-by-screen section order, CTA hierarchy and adaptive layout\n\nImplementation objective\nProduce the layout appendix for this epic.\n\nDetailed requirements\n\n* For each surface list header, body, footer, panel and modal region in display order.\n\nTechnical specification\n\n* Note required data blocks and placeholder states per region.\n\nAcceptance criteria\n\n* Design and engineering can create wireframes from the issue without reading current code.",
          "labels": [
            "mobile-spec",
            "notifications",
            "SYN",
            "wireframe"
          ]
        },
        {
          "key": "SYN-146",
          "summary": "SYN | Task | Define ranking and notifications state diagrams, triggers and blocked transitions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-146",
          "description": "SYN | Task | Define ranking and notifications state diagrams, triggers and blocked transitions\n\nImplementation objective\nCreate the detailed state-table appendix for this epic.\n\nDetailed requirements\n\n* List state name, entry trigger, exit trigger, visible UI treatment and guard.\n\nTechnical specification\n\n* Describe emitted audit/notification/analytics side effects per transition.\n\nAcceptance criteria\n\n* A developer can code finite-state logic directly from the table.",
          "labels": [
            "mobile-spec",
            "notifications",
            "state-machine",
            "SYN"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "Syncfolk",
        "repository": "inventory-and-jira-baseline",
        "label": "Inventory + Jira validated baseline"
      },
      "deploymentComment": "Governance-reconstructed Syncfolk baseline release for ranking, pinned day and decision support."
    },
    {
      "id": "rel-sync-09",
      "version": "web-v0.9.0-notifications",
      "status": "old",
      "releaseState": "released",
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
        "syncfolk_notifications_center"
      ],
      "releaseNotes": "Unread/read notification center plus event-triggered participant messaging rules.",
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
        },
        {
          "key": "SYN-114",
          "summary": "SYN | Task | Specify notification data model, queries and unread counter semantics",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-114",
          "description": "SYN | Task | Specify notification data model, queries and unread counter semantics\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine notifications as a stable backend/client contract.\n\nh1. Scope\n\n* Notification entity schema and key fields.\n* Read/unread transitions and unread counter rules.\n* Query ordering, pagination and deduplication assumptions.\n\nh1. Acceptance\n\n* Clients can build the same notification center and badge counts from the written contract.",
          "labels": [
            "backend",
            "mobile-spec",
            "notifications",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-115",
          "summary": "SYN | Task | Specify notification panel layout, scroll behavior and row interactions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-115",
          "description": "SYN | Task | Specify notification panel layout, scroll behavior and row interactions\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the notification panel as a reusable interaction surface.\n\nh1. Scope\n\n* Opening/closing behavior and anchor placement.\n* Scrolling, infinite load or pagination behavior.\n* Row click, mark-read timing and navigation outcome.\n\nh1. Acceptance\n\n* The notification surface is fully specified for desktop and mobile clients.",
          "labels": [
            "mobile-spec",
            "notifications",
            "SYN",
            "task",
            "ui"
          ]
        },
        {
          "key": "SYN-116",
          "summary": "SYN | Task | Specify notification panel layout, scroll behavior and row interactions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-116",
          "description": "SYN | Task | Specify notification panel layout, scroll behavior and row interactions\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the notification panel as a reusable interaction surface.\n\nh1. Scope\n\n* Opening/closing behavior and anchor placement.\n* Scrolling, infinite load or pagination behavior.\n* Row click, mark-read timing and navigation outcome.\n\nh1. Acceptance\n\n* The notification surface is fully specified for desktop and mobile clients.",
          "labels": [
            "mobile-spec",
            "notifications",
            "SYN",
            "task",
            "ui"
          ]
        },
        {
          "key": "SYN-117",
          "summary": "SYN | Task | Specify guest-notification delivery parity and access scoping",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-117",
          "description": "SYN | Task | Specify guest-notification delivery parity and access scoping\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine which notifications temporary users can receive and read.\n\nh1. Scope\n\n* Delivery parity vs registered users.\n* Scope restrictions for guest-access sessions.\n* What happens after account upgrade or guest-session invalidation.\n\nh1. Acceptance\n\n* Notification access never exposes data outside the guest’s allowed event scope.",
          "labels": [
            "guest",
            "mobile-spec",
            "notifications",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-118",
          "summary": "SYN | Task | Specify pin, repin and unlock notification templates and recipients",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-118",
          "description": "SYN | Task | Specify pin, repin and unlock notification templates and recipients\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the notification templates tied to decision-state changes.\n\nh1. Scope\n\n* Pin/decide notification content and recipients.\n* Re-pin notification behavior if the decided date changes.\n* Unlock notification recipients and timing.\n\nh1. Acceptance\n\n* Notification content and delivery rules are complete for all decision transitions.",
          "labels": [
            "mobile-spec",
            "notifications",
            "pinned-day",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-119",
          "summary": "SYN | Task | Specify friendship and favorite-related notifications",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-119",
          "description": "SYN | Task | Specify friendship and favorite-related notifications\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine notifications triggered by social graph actions.\n\nh1. Scope\n\n* Friend request sent/accepted/declined states.\n* Favorite-related notifications if applicable.\n* Deduplication and user-preference impacts.\n\nh1. Acceptance\n\n* Social notifications are fully specified and consistent with the friends/favorites modules.",
          "labels": [
            "friends",
            "mobile-spec",
            "notifications",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-120",
          "summary": "SYN | Task | Specify event deletion and voting-restart notifications",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-120",
          "description": "SYN | Task | Specify event deletion and voting-restart notifications\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine notifications emitted when an event is deleted or voting is restarted.\n\nh1. Scope\n\n* Recipients and message templates for deletion.\n* Recipients and message templates for voting restart.\n* Suppression or deduplication behavior for close-together events.\n\nh1. Acceptance\n\n* Participants always receive the correct event-state change notifications.",
          "labels": [
            "event-lifecycle",
            "mobile-spec",
            "notifications",
            "SYN",
            "task"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "Syncfolk",
        "repository": "inventory-and-jira-baseline",
        "label": "Inventory + Jira validated baseline"
      },
      "deploymentComment": "Governance-reconstructed Syncfolk baseline release for notification center and event-driven notification rules."
    },
    {
      "id": "rel-sync-10",
      "version": "web-v0.10.0-personal-availability",
      "status": "old",
      "releaseState": "released",
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
        "supabase",
        "date-fns"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_personal_availability"
      ],
      "releaseNotes": "Personal calendar CRUD, copy-to-event behavior and exclusion rules.",
      "jiraLinks": [
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
        },
        {
          "key": "SYN-105",
          "summary": "SYN | Task | Specify personal availability CRUD and month-navigation behavior",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-105",
          "description": "SYN | Task | Specify personal availability CRUD and month-navigation behavior\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the user’s private availability calendar behavior.\n\nh1. Scope\n\n* Create, update and remove personal availability markings.\n* Month navigation and persistence of edited state.\n* Offline/retry handling for save failures.\n\nh1. Acceptance\n\n* Personal availability can be implemented without relying on the current web calendar component.",
          "labels": [
            "crud",
            "mobile-spec",
            "personal-calendar",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-106",
          "summary": "SYN | Task | Specify copy-to-event flow, target filtering and result messaging",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-106",
          "description": "SYN | Task | Specify copy-to-event flow, target filtering and result messaging\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how personal availability is projected into one or more events.\n\nh1. Scope\n\n* Target event selection and filtering rules.\n* Copy preview/result messaging.\n* Conflict and partial-success handling.\n\nh1. Acceptance\n\n* Copying behavior is deterministic and explainable to end users.",
          "labels": [
            "copy",
            "mobile-spec",
            "personal-calendar",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-107",
          "summary": "SYN | Task | Specify decided/deadline exclusions for personal-availability projection",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-107",
          "description": "SYN | Task | Specify decided/deadline exclusions for personal-availability projection\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine which dates are excluded when copying personal availability into event context.\n\nh1. Scope\n\n* Exclusion of decided dates, closed voting ranges and expired deadlines.\n* Partial projection result behavior.\n* Result messaging and skipped-date explanation.\n\nh1. Acceptance\n\n* The projection rules match event-state restrictions exactly.",
          "labels": [
            "mobile-spec",
            "personal-calendar",
            "rules",
            "SYN",
            "task"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "Syncfolk",
        "repository": "inventory-and-jira-baseline",
        "label": "Inventory + Jira validated baseline"
      },
      "deploymentComment": "Governance-reconstructed Syncfolk baseline release for personal availability and event synchronization."
    },
    {
      "id": "rel-sync-11",
      "version": "web-v0.11.0-profile-social-security",
      "status": "old",
      "releaseState": "released",
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
        "syncfolk_profile_social_security"
      ],
      "releaseNotes": "Profile layout, friends/favorites, account deletion and social state behavior.",
      "jiraLinks": [
        {
          "key": "SYN-9",
          "summary": "SYN | Profile, friends and administrative operations",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-9",
          "description": "Cross-platform profile, friends and admin operations for Syncfolk mobile.\n\nScope:\n\n* Profile screen, profile menu and account preferences\n* Password change and account deletion flow\n* Friend search, requests, accept/decline, favorites and participant social actions\n* Admin dashboard and event/user oversight capabilities\n\nAcceptance criteria:\n\n* Android and iPhone teams can implement profile, social and admin flows from child issues.\n* Destructive actions and permissions are documented in downstream issues.",
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
          "description": "Cross-platform profile, friends and admin operations for Syncfolk mobile.\n\nScope:\n\n* Profile screen, profile menu and account preferences\n* Password change and account deletion flow\n* Friend search, requests, accept/decline, favorites and participant social actions\n* Admin dashboard and event/user oversight capabilities\n\nAcceptance criteria:\n\n* Android and iPhone teams can implement profile, social and admin flows from child issues.\n* Destructive actions and permissions are documented in downstream issues.",
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
        },
        {
          "key": "SYN-121",
          "summary": "SYN | Task | Specify profile header, account data fields and section ordering",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-121",
          "description": "SYN | Task | Specify profile header, account data fields and section ordering\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the information architecture of the profile screen.\n\nh1. Scope\n\n* Which account fields are visible and editable.\n* Section order and hierarchy.\n* Desktop/mobile layout rules.\n\nh1. Acceptance\n\n* Teams can recreate the profile IA consistently.",
          "labels": [
            "mobile-spec",
            "profile",
            "SYN",
            "task",
            "ui"
          ]
        },
        {
          "key": "SYN-122",
          "summary": "SYN | Task | Specify profile preference storage and blocked temporary-user access",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-122",
          "description": "SYN | Task | Specify profile preference storage and blocked temporary-user access\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine preference persistence and profile access restrictions.\n\nh1. Scope\n\n* Temporary-user redirect behavior.\n* Preferences payload structure if settings are stored on profile.\n* Error and loading states for profile bootstrap.\n\nh1. Acceptance\n\n* Access rules and data contract are explicit.",
          "labels": [
            "access",
            "mobile-spec",
            "profile",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-123",
          "summary": "SYN | Task | Specify friend search, request creation and pending-state transitions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-123",
          "description": "SYN | Task | Specify friend search, request creation and pending-state transitions\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine discovery and request initiation.\n\nh1. Scope\n\n* Search by email rules and result handling.\n* Send-request validation and duplicate prevention.\n* Pending-state transitions and cancellation if supported.\n\nh1. Acceptance\n\n* Backend and mobile teams can implement the full friend-request lifecycle.",
          "labels": [
            "friends",
            "mobile-spec",
            "search",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-124",
          "summary": "SYN | Task | Specify favorites list, favorite toggling and cross-surface consistency",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-124",
          "description": "SYN | Task | Specify favorites list, favorite toggling and cross-surface consistency\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine favorites as a stable feature across profile, day-details and other surfaces.\n\nh1. Scope\n\n* Favorite add/remove state transitions.\n* Favorites list ordering and empty states.\n* Cross-surface synchronization requirements.\n\nh1. Acceptance\n\n* Favorite state is always consistent regardless of where the mutation occurred.",
          "labels": [
            "favorites",
            "mobile-spec",
            "state",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-125",
          "summary": "SYN | Task | Specify received-request handling and notification coupling",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-125",
          "description": "SYN | Task | Specify received-request handling and notification coupling\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the incoming-request management flow.\n\nh1. Scope\n\n* Accept/decline actions and resulting state transitions.\n* Notification side effects for each action.\n* Empty-state, loading and error behavior.\n\nh1. Acceptance\n\n* Request handling is complete and consistent with the notification model.",
          "labels": [
            "friends",
            "mobile-spec",
            "requests",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-126",
          "summary": "SYN | Task | Specify delete-account UI, confirmation copy and placement",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-126",
          "description": "SYN | Task | Specify delete-account UI, confirmation copy and placement\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the visible deletion entry point and confirmation UX.\n\nh1. Scope\n\n* Placement inside profile/account area.\n* Confirmation copy and irreversible-action warning.\n* Loading, success and failure messaging.\n\nh1. Acceptance\n\n* Users clearly understand the consequence and the action is not triggered accidentally.",
          "labels": [
            "account-deletion",
            "mobile-spec",
            "SYN",
            "task",
            "ui"
          ]
        },
        {
          "key": "SYN-127",
          "summary": "SYN | Task | Specify deletion audit record and data-cleanup workflow",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-127",
          "description": "SYN | Task | Specify deletion audit record and data-cleanup workflow\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine what happens behind the delete-account action.\n\nh1. Scope\n\n* Audit fields recorded for deletion.\n* Cleanup / soft-delete behavior for events, votes, invitations and social graph edges.\n* Post-deletion session invalidation.\n\nh1. Acceptance\n\n* Backend deletion behavior is explicit and testable.",
          "labels": [
            "account-deletion",
            "backend",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-137",
          "summary": "SYN | Task | Specify deletion audit record and data-cleanup workflow",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-137",
          "description": "SYN | Task | Specify deletion audit record and data-cleanup workflow\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the backend execution path for account deletion.\n\nh1. Scope\n\n* account_deletions audit write.\n* Entity cleanup/anonymization decisions.\n* Session invalidation and final redirect.\n\nh1. Acceptance\n\n* Backend implementation can proceed from this issue without reverse-engineering current behavior.",
          "labels": [
            "account",
            "backend",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-147",
          "summary": "SYN | Task | Define profile, friends and admin state diagrams, triggers and blocked transitions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-147",
          "description": "SYN | Task | Define profile, friends and admin state diagrams, triggers and blocked transitions\n\nImplementation objective\nCreate the detailed state-table appendix for this epic.\n\nDetailed requirements\n\n* List state name, entry trigger, exit trigger, visible UI treatment and guard.\n\nTechnical specification\n\n* Describe emitted audit/notification/analytics side effects per transition.\n\nAcceptance criteria\n\n* A developer can code finite-state logic directly from the table.",
          "labels": [
            "mobile-spec",
            "profile",
            "state-machine",
            "SYN"
          ]
        },
        {
          "key": "SYN-148",
          "summary": "SYN | Task | Define profile, friends and admin screen-by-screen section order, CTA hierarchy and adaptive layout",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-148",
          "description": "SYN | Task | Define profile, friends and admin screen-by-screen section order, CTA hierarchy and adaptive layout\n\nImplementation objective\nProduce the layout appendix for this epic.\n\nDetailed requirements\n\n* For each surface list header, body, footer, panel and modal region in display order.\n\nTechnical specification\n\n* Note required data blocks and placeholder states per region.\n\nAcceptance criteria\n\n* Design and engineering can create wireframes from the issue without reading current code.",
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
        "owner": "Syncfolk",
        "repository": "inventory-and-jira-baseline",
        "label": "Inventory + Jira validated baseline"
      },
      "deploymentComment": "Governance-reconstructed Syncfolk baseline release for profile, social graph and account security."
    },
    {
      "id": "rel-sync-12",
      "version": "web-v0.12.0-admin-operations",
      "status": "current",
      "releaseState": "released",
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
        "syncfolk_admin_operations"
      ],
      "releaseNotes": "Admin dashboard, user management and event management operations.",
      "jiraLinks": [
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
        },
        {
          "key": "SYN-128",
          "summary": "SYN | Task | Specify admin dashboard navigation, summary metrics and empty states",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-128",
          "description": "SYN | Task | Specify admin dashboard navigation, summary metrics and empty states\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the high-level admin landing experience.\n\nh1. Scope\n\n* Admin navigation entry and guard rules.\n* Summary metrics/cards and their empty/loading states.\n* No-data and error-state behavior.\n\nh1. Acceptance\n\n* Admin landing behavior is explicit and reproducible on any client.",
          "labels": [
            "admin",
            "dashboard",
            "mobile-spec",
            "SYN",
            "task"
          ]
        },
        {
          "key": "SYN-129",
          "summary": "SYN | Task | Specify admin user-management list, filters and detail fields",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-129",
          "description": "SYN | Task | Specify admin user-management list, filters and detail fields\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the admin user-management surface.\n\nh1. Scope\n\n* List columns, filters and pagination.\n* Detail drawer/page fields.\n* Empty-state, loading and permission-error behavior.\n\nh1. Acceptance\n\n* Admin teams can implement the same user-management surface on any client.",
          "labels": [
            "admin",
            "mobile-spec",
            "SYN",
            "task",
            "users"
          ]
        },
        {
          "key": "SYN-130",
          "summary": "SYN | Task | Specify admin event-management list, filters and detail fields",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-130",
          "description": "SYN | Task | Specify admin event-management list, filters and detail fields\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the admin event-management surface.\n\nh1. Scope\n\n* List columns, filters and pagination.\n* Event detail fields and allowed admin actions.\n* Empty-state, loading and permission-error behavior.\n\nh1. Acceptance\n\n* Admin event operations are fully specified for backend and client teams.",
          "labels": [
            "admin",
            "events",
            "mobile-spec",
            "SYN",
            "task"
          ]
        }
      ],
      "source": {
        "kind": "markdown-import",
        "owner": "Syncfolk",
        "repository": "inventory-and-jira-baseline",
        "label": "Inventory + Jira validated baseline"
      },
      "deploymentComment": "Governance-reconstructed Syncfolk baseline release for administrative operations and platform oversight."
    },
    {
      "id": "rel-sync-unr-01",
      "version": "unreleased-enterprise-mode-workspace",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
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
        "syncfolk_ent_mode_workspace"
      ],
      "releaseNotes": "Enterprise shell, registered-only workspace access, member setup and locale/workspace settings.",
      "jiraLinks": [
        {
          "key": "SYN-13",
          "summary": "ENT | Enterprise absence planning and resource governance mode",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-13",
          "description": "h2. Objective\n\nIntroduce a dedicated Syncfolk Enterprise mode for vacation and leave planning, separate from the B2C event-voting experience.\n\nh2. Business problem\n\nMany teams still manage leave planning in shared spreadsheets that are hard to govern, impossible to validate consistently, and weak for API-based reporting, capacity planning, and allocation calculations.\n\nh2. Outcome\n\nProvide a secure enterprise leave planning workspace that supports:\n\n* authenticated, email-invited members only\n* owner and delegated {{resourceAssistant}} governance\n* leave request submission and approval\n* blocked days, mandatory leave days, and per-day capacity rules\n* role-based minimum staffing and maximum leave thresholds\n* reusable templates and batch application of rules\n* enterprise exports and API-ready data structures\n* notifications, audit trail, and coverage/conflict views\n\nh2. Product boundaries\n\nThis epic must produce a dedicated enterprise UX mode, not a cluttered all-in-one hybrid screen. The enterprise space should reuse the Syncfolk calendar strengths where useful, but remove consumer-only constructs such as anonymous participation, share-by-link entry, and voting ranking.\n\nh2. Non-functional expectations\n\n* role-based authorization\n* auditability of approvals and rule changes\n* scalable daily rule evaluation\n* exportability to Excel, XML, and HTML\n* future-ready API surface for reporting and resource allocation integrations\n\nh2. Acceptance criteria\n\n* An enterprise mode exists with clearly separated navigation and behavior from B2C event voting.\n* Enterprise spaces support only registered, invited members.\n* Core leave planning, approval, governance, export, and notification capabilities are covered by child stories.\n* The design is suitable for later native mobile implementation without depending on web-specific assumptions.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-14",
          "summary": "ENT | Enterprise mode shell, navigation separation and workspace context",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-14",
          "description": "h2. User story\n\nAs an enterprise customer, I want a dedicated leave-planning shell that is clearly separated from consumer event voting so that the product stays focused, governed, and easy to learn.\n\nh2. Functional scope\n\n* add enterprise-specific workspace context\n* separate navigation labels, entry points, empty states, and permissions from B2C spaces\n* hide consumer-only capabilities in enterprise spaces: anonymous join, magic link participation, voting ranking, social sharing, guest voting flows\n* show enterprise-specific modules: team members, approval queue, rule templates, coverage/conflict summary, exports, audit log\n* preserve responsive behavior for desktop and mobile\n\nh2. UI expectations\n\n* enterprise spaces must have their own visual cues and terminology\n* page header must show workspace name, owner/admin context, and approval/notification affordances\n* left-side replacement for voting ranking: {{Coverage & Conflict Summary}}\n* summary widget should highlight: pending requests, blocked dates, mandatory leave dates, capacity breaches, role coverage breaches, upcoming approvals\n\nh2. Frontend notes\n\n* reuse calendar primitives where possible\n* use feature flags / space type checks to switch components and actions\n* avoid mixed-mode UI where B2C and enterprise actions appear together\n\nh2. Backend notes\n\n* introduce space type or workspace mode marker\n* enforce server-side capability gating by space type\n\nh2. Acceptance criteria\n\n* Enterprise spaces display enterprise modules only.\n* Consumer-only entry methods and actions are unavailable in enterprise spaces.\n* Coverage & Conflict Summary replaces the voting ranking area.\n* UX remains responsive on desktop and mobile.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-15",
          "summary": "ENT | Registered-only invitation model and enterprise role governance",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-15",
          "description": "h2. User story\n\nAs an enterprise workspace owner, I want to invite named users by email and assign controlled roles so that only authenticated members can access and administer leave planning.\n\nh2. Functional scope\n\n* disallow anonymous access, guest flows, and open share links\n* require email invitation + registration + authenticated acceptance\n* support roles: {{owner}}, {{resourceAssistant}}, {{member}}\n* owner can assign or revoke {{resourceAssistant}}\n* owner and {{resourceAssistant}} can invite members\n* owner remains final authority for workspace administration\n* membership status model: invited, active, suspended, removed\n\nh2. Permissions\n\nh3. owner\n\n* manage workspace settings\n* invite/remove members\n* assign/revoke {{resourceAssistant}}\n* configure rules, templates, approvals, exports\n\nh3. resourceAssistant\n\n* manage members operationally\n* process approvals\n* manage rules, templates, notifications, exports per owner policy\n* cannot transfer ownership unless separately specified\n\nh3. member\n\n* submit leave requests\n* view own requests and approved team calendar according to visibility rules\n\nh2. Backend notes\n\n* create enterprise membership and role tables / entities\n* secure all APIs by workspace membership and role checks\n* store invitation token lifecycle and expiry\n\nh2. Acceptance criteria\n\n* Enterprise workspace access requires authenticated membership.\n* No link-only or guest entry path exists.\n* Owner and resourceAssistant permissions are enforced server-side.\n* Invitation, activation, suspension, and removal states are auditable.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-22",
          "summary": "ENT | Workspace member management and role setup",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-22",
          "description": "Workspace member management for enterprise mode.\n\nScope:\n\n* list invited and active users\n* assign owner, resourceAssistant, and member roles\n* assign business roles for coverage rules\n* search and filter users by status and role\n* show invitation state and access state\n\nAcceptance criteria:\n\n* Admins can manage enterprise users and roles.\n* Role changes are saved and visible in the workspace.\n* Access is based on assigned role.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-165",
          "summary": "ENT | Workspace settings and locale configuration",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-165",
          "description": "Enterprise workspace settings.\n\nScope:\n\n* define settings for timezone, locale, weekday display, date format, and holiday profile default\n* define how settings influence calendar display, exports, notifications, and request validation\n* define which roles can edit settings\n* define default values for newly created enterprise workspaces\n\nAcceptance criteria:\n\n* Enterprise workspace settings are documented.\n* Calendar, export, and request behavior reflects configured settings.\n* Default values and edit permissions are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "Syncfolk",
        "repository": "SYN backlog",
        "label": "Validated Jira backlog"
      },
      "deploymentComment": "Planned enterprise governance unit for enterprise mode, workspace access and member governance."
    },
    {
      "id": "rel-sync-unr-02",
      "version": "unreleased-enterprise-request-lifecycle",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
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
        "syncfolk_ent_request_lifecycle_inbox"
      ],
      "releaseNotes": "Leave request lifecycle, approval worklists, bulk decisions and escalation rules.",
      "jiraLinks": [
        {
          "key": "SYN-16",
          "summary": "ENT | Leave request lifecycle, approval decisions and operational notifications",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-16",
          "description": "h2. User story\n\nAs an employee or delegated approver, I want a structured leave request and approval lifecycle so that requests can be submitted, reviewed, approved, rejected, or adjusted with full traceability.\n\nh2. Functional scope\n\n* member submits leave request with start date, end date, leave type, optional note, optional partial-day metadata\n* request states: draft, submitted, pending approval, approved, rejected, cancelled, auto-rejected, expired\n* owner/resourceAssistant can approve, reject, or create requests on behalf of members\n* optional reason required on rejection or admin override\n* notifications to requester and approvers for create/update/approve/reject/cancel events\n* prevent approvals when blocking rules or capacity rules fail\n\nh2. UX expectations\n\n* request form must surface balance, conflicts, blocked days, and policy warnings before submission\n* approval queue must support filters by status, user, date range, team, role, and workspace\n* day detail view must show approved, pending, and rejected items based on permission\n\nh2. Backend notes\n\n* persist request history and approval actions as immutable audit events\n* evaluate rule engine before final approval\n* support admin-created requests with actor attribution\n\nh2. Acceptance criteria\n\n* Full request lifecycle is available to enterprise users.\n* Approvers receive actionable notifications.\n* Approval decisions are blocked when rules fail.\n* Every state transition is auditable with actor and timestamp.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-21",
          "summary": "ENT | Approval queue and leave request worklist",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-21",
          "description": "Enterprise approval queue for leave requests.\n\nScope:\n\n* pending approval list\n* filters by user, date range, role, team, status\n* approve, reject, cancel, and admin-create actions\n* clear reason display when a request conflicts with rules\n\nAcceptance criteria:\n\n* Approvers can process requests from one worklist.\n* Conflicts are visible before decision.\n* Actions are audited.",
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
          "description": "Approval worklist for enterprise leave requests.\n\nScope:\n\n* show pending, approved, rejected, cancelled, and expired requests in one admin inbox\n* filters by requester, team, role, date range, request type, and status\n* approve, reject, and comment from list and detail views\n* support bulk actions for low-risk cases where policy allows\n* show conflict reasons before final decision\n\nAcceptance criteria:\n\n* Owner and resourceAssistant can process requests from one inbox.\n* Filters are available on desktop and mobile.\n* Bulk decision flow is guarded and auditable.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-152",
          "summary": "ENT | Approval chain, substitute approver and escalation rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-152",
          "description": "Enterprise approval chain, substitute approver, and escalation rules.\n\nScope:\n\n* configure one-step or multi-step approval chains\n* define substitute approvers for owner and resourceAssistant\n* configure escalation when requests stay unanswered too long\n* notify each actor at the correct stage\n* preserve final decision trace and acting user identity\n\nAcceptance criteria:\n\n* Enterprise workspaces support configurable approval chains.\n* Substitute approvers can act when the primary approver is unavailable.\n* Escalation rules notify the right users and keep audit history.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-153",
          "summary": "ENT | Conflict engine and validation messages for request submission",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-153",
          "description": "Conflict engine and validation messages for enterprise request submission.\n\nScope:\n\n* evaluate blocked dates, company leave dates, daily max-off limits, role coverage limits, holiday calendars, and work patterns before save or approval\n* classify conflicts as warning or blocking\n* return human-readable reasons and machine-readable codes\n* keep validation consistent across web, mobile, export, and API use cases\n\nAcceptance criteria:\n\n* Users see clear reasons when a request cannot proceed.\n* Validation results are consistent across all clients.\n* Engineers have stable error codes for integrations and automation.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "Syncfolk",
        "repository": "SYN backlog",
        "label": "Validated Jira backlog"
      },
      "deploymentComment": "Planned enterprise governance unit for enterprise request lifecycle and approval inbox."
    },
    {
      "id": "rel-sync-unr-03",
      "version": "unreleased-enterprise-calendar-rules",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
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
        "syncfolk_ent_calendar_rules_capacity"
      ],
      "releaseNotes": "Blocked dates, staffing coverage, templates, holiday profiles and enterprise visual rules.",
      "jiraLinks": [
        {
          "key": "SYN-17",
          "summary": "ENT | Calendar governance rules for blocked dates, company leave days and daily capacity",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-17",
          "description": "h2. User story\n\nAs an owner or resourceAssistant, I want to define day-level governance rules so that leave planning respects business shutdowns, company leave days, and overall daily capacity.\n\nh2. Functional scope\n\n* mark dates or ranges as blocked for leave requests\n* mark dates or ranges as company leave days\n* define maximum people allowed off on a given day\n* support single-day, date-range, and batch rule application\n* surface rule breaches in request and approval flows\n\nh2. Rule behavior\n\n* blocked date: members cannot submit or receive approval for leave on that date\n* company leave date: the date is marked with a dedicated enterprise flag and displayed clearly in calendar and exports\n* max-off rule: request or approval fails when the configured threshold is exceeded\n\nh2. Data and UI notes\n\n* rules need effective dates, scope, creator, modifier, and audit history\n* calendar day cells and side panels should show active enterprise flags\n* batch tooling must allow rule copy/apply across multiple dates\n\nh2. Acceptance criteria\n\n* Owner/resourceAssistant can configure blocked dates, company leave dates, and max-off limits.\n* The rule engine prevents invalid requests and approvals.\n* Rules are visible in enterprise calendar UX and exports.\n* Batch application is supported.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-18",
          "summary": "ENT | Role-based staffing coverage rules, reusable templates and batch application",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-18",
          "description": "h2. User story\n\nAs an owner or resourceAssistant, I want to define staffing constraints by role so that leave decisions preserve minimum operational coverage.\n\nh2. Functional scope\n\n* define enterprise roles / job families inside the workspace (examples: Business Analyst, QA, Lead Developer, Senior Developer, Project Manager)\n* assign one or more roles to members based on chosen domain model\n* configure per-day or date-range rules by role:\n** maximum people off for a role\n** minimum people required working for a role\n* save rule sets as reusable templates\n* apply templates in batch to multiple dates\n* allow template versioning and clear effective date visibility\n\nh2. Business rules\n\n* rule conflicts must be validated before save\n* leave request evaluation must consider both global capacity and role-based coverage rules\n* template application must be previewable before commit\n\nh2. UI expectations\n\n* dedicated rule builder\n* batch apply interaction with selected dates and template preview\n* conflict messages must explain which role constraint failed\n\nh2. Acceptance criteria\n\n* Enterprise admins can define roles, assign members, create staffing rules, save templates, and apply them in batch.\n* Requests and approvals fail with clear reasons when a role threshold would be breached.\n* Template application is auditable.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-20",
          "summary": "ENT | Coverage and Conflict Summary panel replacing consumer ranking",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-20",
          "description": "h2. User story\n\nAs an enterprise owner, resourceAssistant, or approver, I want a Coverage & Conflict Summary panel instead of a voting ranking so that I can immediately see operational risks and pending work.\n\nh2. Functional scope\n\n* replace the B2C ranking panel with an enterprise summary panel\n* show counts for pending leave approvals, blocked dates in the visible range, company leave dates in the visible range, days exceeding max-off limits, days violating role coverage rules, and upcoming requests that need attention\n* support filters for workspace, month, team, role, and request status\n* clicking a summary item opens the corresponding filtered detail list or focuses the affected dates in calendar view\n* show warning severity levels: informational, warning, blocking\n\nh2. UI expectations\n\n* compact card layout on desktop sidebar\n* collapsible summary tray on mobile\n* each metric card must include count, short label, status color, and optional next-action shortcut\n* empty states should be explicit: no pending approvals, no conflicts, no blocked dates this month\n\nh2. Backend notes\n\n* requires pre-aggregated daily conflict data or performant on-demand calculation\n* summary queries must respect workspace visibility and role permissions\n\nh2. Acceptance criteria\n\n* Enterprise spaces no longer show consumer vote ranking.\n* Coverage & Conflict Summary is available on desktop and mobile.\n* Every summary card can drill into actionable data.\n* Counts match underlying calendar, rules, and request data.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-23",
          "summary": "ENT | Enterprise calendar day details and request statuses",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-23",
          "description": "Enterprise day detail and status display.\n\nScope:\n\n* open any calendar day and show approved, pending, rejected, and blocked information based on permission\n* show company leave markers, blocked markers, and capacity warnings in day detail\n* show role coverage impact for the day\n* allow approvers to navigate from day detail to request review\n\nAcceptance criteria:\n\n* Day detail is available on desktop and mobile.\n* Enterprise day detail shows status-based information instead of vote information.\n* Day detail links to approval and conflict workflows.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-151",
          "summary": "ENT | Leave types, holidays and work pattern configuration",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-151",
          "description": "Enterprise configuration for leave types, holidays, and work patterns.\n\nScope:\n\n* define leave types such as vacation, sick leave, unpaid leave, and custom leave types\n* configure public holidays per workspace or location profile\n* configure working patterns and partial-day options\n* use these settings during request validation, calendar display, and exports\n\nAcceptance criteria:\n\n* Admins can manage leave types, holidays, and work patterns.\n* Validation uses configured values consistently.\n* Calendar and export outputs reflect configuration.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-162",
          "summary": "ENT | Rule template library and version handling",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-162",
          "description": "Enterprise rule template library.\n\nScope:\n\n* save reusable templates for blocked dates, company leave dates, max-off rules, and role-based coverage rules\n* support create, edit, duplicate, archive, and version handling for templates\n* show a preview before applying a template to selected dates\n* validate conflicts before applying a template\n* define template ownership and visibility inside a workspace\n\nAcceptance criteria:\n\n* Enterprise admins can save and reuse rule templates.\n* Template apply flow includes preview and validation.\n* Version handling is documented for implementation.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-163",
          "summary": "ENT | Team, location and holiday profile setup",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-163",
          "description": "Enterprise organization setup.\n\nScope:\n\n* define team and location attributes for members\n* assign holiday profiles by location or workspace setting\n* allow filtering by team and location in calendar, approval, export, and reporting views\n* allow staffing rules to use team and location filters where required\n\nAcceptance criteria:\n\n* Enterprise workspaces can group members by team and location.\n* Holiday profile assignment is documented.\n* Filtering and reporting can use these attributes consistently.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-164",
          "summary": "ENT | Calendar cell states, legends and enterprise visual rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-164",
          "description": "Enterprise calendar visual specification.\n\nScope:\n\n* define day-cell states for normal working day, approved leave, pending leave, rejected request, blocked date, company leave date, capacity risk, role coverage risk, public holiday, weekend, and today\n* define legends, badges, icons, and color usage for enterprise mode\n* define hover, tap, long-press, and detail-open behavior on desktop and mobile\n* define what information is visible in collapsed day cells versus day detail views\n\nAcceptance criteria:\n\n* Enterprise calendar day states are explicitly documented.\n* Visual rules are consistent across desktop and mobile.\n* Engineers and designers can implement enterprise calendar rendering from this story.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "Syncfolk",
        "repository": "SYN backlog",
        "label": "Validated Jira backlog"
      },
      "deploymentComment": "Planned enterprise governance unit for enterprise calendar rules, coverage and planning templates."
    },
    {
      "id": "rel-sync-unr-04",
      "version": "unreleased-enterprise-permissions-security",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
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
        "syncfolk_ent_permissions_visibility_security"
      ],
      "releaseNotes": "Role-based permission matrix, data visibility rules and enterprise security expectations.",
      "jiraLinks": [
        {
          "key": "SYN-155",
          "summary": "ENT | Permission matrix and visibility rules for enterprise calendars",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-155",
          "description": "Permission matrix and visibility rules for enterprise calendars.\n\nScope:\n\n* define what owner, resourceAssistant, member, and future read-only roles can see and do\n* define which leave details are visible to peers, managers, and admins\n* define export and API access permissions\n* define behavior for suspended, removed, and invited users\n\nAcceptance criteria:\n\n* All enterprise actions have an explicit role-based permission rule.\n* Visibility of leave details is documented and enforceable.\n* Engineers can implement server-side access control from this story.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-170",
          "summary": "ENT | Permission matrix by role, action and data visibility",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-170",
          "description": "Tabular permission specification for enterprise leave planning.\n\nScope:\n\n* define a complete matrix of actions versus roles: owner, resourceAssistant, member, invited user, suspended user, removed user, and optional future read-only role\n* include actions for workspace settings, member invite, role assignment, request create, request edit, request cancel, request approve, request reject, admin override, rule create and edit, template create and apply, export, import, notification view, audit view, and reporting view\n* define which data is visible by role in calendar cells, day details, approval views, exports, and reports\n* define row-level and field-level visibility where needed\n* define inheritance and override rules if multiple roles or scopes exist in the future\n\nAcceptance criteria:\n\n* Every enterprise action has an explicit permission rule.\n* Visibility of sensitive leave information is documented by role.\n* Engineers can implement access control from this matrix without guessing.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-176",
          "summary": "ENT | Security and privacy rules for enterprise leave data",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-176",
          "description": "Enterprise security and privacy rules.\n\nScope:\n\n* define handling rules for leave data, approval notes, exported files, and notification content\n* define session expectations and re-check points for sensitive admin actions\n* define least-privilege rules for owner, resourceAssistant, and member roles\n* define export visibility and API access expectations\n* define limited-visibility options for sensitive leave data in shared calendar views\n* define import and export file access rules\n\nAcceptance criteria:\n\n* Enterprise leave data handling rules are documented.\n* Security expectations align with role permissions and export behavior.\n* Engineers have explicit guidance for privacy-sensitive flows.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-183",
          "summary": "ENT | Define action-by-role permission matrix for enterprise workflows",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-183",
          "description": "Subtask under the permission matrix story.\n\nDeliverables:\n\n* matrix for owner, resourceAssistant, member, invited, suspended, removed, and optional read-only roles\n* actions: invite, assign role, submit request, edit request, cancel request, approve, reject, override, manage rules, apply templates, export, import, view audit, view reporting\n\nAcceptance criteria:\n\n* Engineers can implement role-based access control from this subtask.\n* No enterprise action remains undocumented by role.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-184",
          "summary": "ENT | Define visibility rules for calendar cells, day details and exports",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-184",
          "description": "Subtask under the permission matrix story.\n\nDeliverables:\n\n* field-level and row-level visibility rules for calendar cells, day details, approval views, exports, and reports\n* peer versus admin visibility rules for sensitive leave information\n\nAcceptance criteria:\n\n* Sensitive leave information visibility is explicitly documented.\n* Export and report visibility follows the same rules where required.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "Syncfolk",
        "repository": "SYN backlog",
        "label": "Validated Jira backlog"
      },
      "deploymentComment": "Planned enterprise governance unit for enterprise permissions, visibility and security rules."
    },
    {
      "id": "rel-sync-unr-05",
      "version": "unreleased-enterprise-data-model-api",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
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
        "syncfolk_ent_data_model_api"
      ],
      "releaseNotes": "Entity schemas, relationships, workflow state tables and enterprise endpoint catalog.",
      "jiraLinks": [
        {
          "key": "SYN-154",
          "summary": "ENT | Data model and API contract specification for enterprise leave planning",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-154",
          "description": "Data model and API contract specification for enterprise leave planning.\n\nScope:\n\n* define core entities: workspace, membership, role, business role, leave request, request decision, daily rule, template, export job, notification, audit event\n* define IDs, timestamps, status enums, and relation rules\n* define API contracts for create, update, approve, reject, cancel, list, export, and summary operations\n* define canonical field names separate from display labels\n\nAcceptance criteria:\n\n* Engineers can implement enterprise APIs from the documented contracts.\n* Mobile and web clients can share the same payload definitions.\n* Reporting and export features use the same canonical data model.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-166",
          "summary": "ENT | Enterprise workflow state tables",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-166",
          "description": "Workflow state specification for enterprise leave planning.\n\nScope:\n\n* define request states and decision states\n* define allowed moves between states\n* define which role can trigger each move\n* define validation checks and notification side effects for each move\n* define cancellation, expiry, and override flows\n\nAcceptance criteria:\n\n* Workflow states are documented in an implementation-ready way.\n* Role permissions and side effects are explicit.\n* Engineers can implement deterministic workflow logic from this story.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-167",
          "summary": "ENT | API endpoint catalog with request and response payload definitions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-167",
          "description": "Implementation-level API specification for enterprise leave planning.\n\nScope:\n\n* define endpoint catalog for enterprise workspace bootstrap, member list, invitation send and accept, role assignment, leave request create/update/cancel, approval decision, rule create/update/delete, template create/apply, summary retrieval, export create/download, import upload/validate/commit, notifications fetch/mark read, audit log fetch, and settings update\n* define request payload fields, required versus optional fields, enums, validation rules, and example payloads\n* define response payload fields, pagination model, timestamps, IDs, nested entities, and partial-success behavior where relevant\n* define error response structure with stable machine-readable codes and human-readable messages\n* define idempotency expectations for retriable operations\n* define authentication and authorization expectations per endpoint\n\nAcceptance criteria:\n\n* Engineers can implement enterprise APIs endpoint by endpoint from this story.\n* Web and mobile clients can rely on the same payload definitions.\n* Error and pagination behavior are explicit and testable.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-168",
          "summary": "ENT | Field-level data model and entity relationship specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-168",
          "description": "Field-level domain model specification for enterprise leave planning.\n\nScope:\n\n* define every core entity and its fields: enterprise workspace, membership, invitation, workspace role assignment, business role assignment, team, location, holiday profile, leave type, working pattern, leave request, request day item if needed, approval decision, daily rule, role coverage rule, template, template version, notification, audit event, export job, import job\n* define data types, nullability, uniqueness, defaults, allowed values, and lifecycle expectations for each field\n* define relationships and cardinality between entities\n* define soft-delete, archive, and history-preservation rules where relevant\n* define canonical naming separate from localized display labels\n* define derived fields and aggregation fields versus stored fields\n\nAcceptance criteria:\n\n* Engineers can build enterprise persistence and DTO models from this story.\n* Relationship and lifecycle rules are explicit.\n* Reporting, API, and export features use the same canonical entity model.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-177",
          "summary": "ENT | Define enterprise workspace bootstrap endpoint and payload",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-177",
          "description": "Subtask under the API catalog story.\n\nDeliverables:\n\n* request and response contract for enterprise workspace bootstrap\n* included objects: workspace, current membership, role, settings summary, visible modules, notification counters\n* error behavior for no-access and suspended membership\n\nAcceptance criteria:\n\n* Mobile and web clients can load enterprise mode from this contract.\n* Bootstrap payload is versionable and role-aware.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-178",
          "summary": "ENT | Define leave request and approval endpoints with example payloads",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-178",
          "description": "Subtask under the API catalog story.\n\nDeliverables:\n\n* endpoint contracts for create request, update request, cancel request, approve, reject, and admin override\n* required fields, enums, examples, and validation errors\n* idempotency and conflict behavior\n\nAcceptance criteria:\n\n* Engineers can implement request/decision APIs from this subtask.\n* Error codes and transition side effects are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-179",
          "summary": "ENT | Define export, import and notification endpoints",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-179",
          "description": "Subtask under the API catalog story.\n\nDeliverables:\n\n* endpoint contracts for export create/download, import upload/validate/commit, notifications list/mark read\n* async job handling and status fields where applicable\n* pagination and filtering model\n\nAcceptance criteria:\n\n* Engineers can implement enterprise export/import/notification APIs from this subtask.\n* Async and pagination behavior are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-180",
          "summary": "ENT | Define core enterprise entities and field constraints",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-180",
          "description": "Subtask under the field-level data model story.\n\nDeliverables:\n\n* field catalog for workspace, membership, invitation, leave request, approval decision, daily rule, template, notification, audit event, export job, import job\n* data types, nullability, defaults, uniqueness, and enum values\n\nAcceptance criteria:\n\n* Persistence and DTO models can be built from this subtask.\n* Field constraints are explicit and testable.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-181",
          "summary": "ENT | Define entity relationships, history preservation and derived fields",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-181",
          "description": "Subtask under the field-level data model story.\n\nDeliverables:\n\n* relationship map and cardinality rules\n* soft-delete, archive, and history-preservation rules\n* derived versus stored fields and aggregation ownership\n\nAcceptance criteria:\n\n* Engineers can implement entity relationships without ambiguity.\n* Historical accuracy rules are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "Syncfolk",
        "repository": "SYN backlog",
        "label": "Validated Jira backlog"
      },
      "deploymentComment": "Planned enterprise governance unit for enterprise data model and api contract."
    },
    {
      "id": "rel-sync-unr-06",
      "version": "unreleased-enterprise-exports-reporting",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "jira",
        "spreadsheet-import"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_ent_exports_reporting"
      ],
      "releaseNotes": "Exports, reporting datasets, KPI catalogs and staffing analytics.",
      "jiraLinks": [
        {
          "key": "SYN-19",
          "summary": "ENT | Enterprise exports, reporting dataset and integration-ready API surface",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-19",
          "description": "h2. User story\n\nAs an enterprise administrator, I want exportable and API-ready leave data so that the workspace can feed reporting, allocation calculations, and downstream HR or BI processes.\n\nh2. Functional scope\n\n* export leave calendar data to Excel, XML, and HTML\n* required export columns:\n** calendar date\n** weekday name\n** names of people on leave for the day\n** count of people planned off for the day\n* support date range, team, role, and workspace filters\n* provide machine-consumable API endpoints for approved requests, pending requests, rules, role coverage, and daily aggregates\n* design payloads so mobile apps and future integrations can reuse the same contract\n\nh2. Technical expectations\n\n* stable IDs and timestamps in export/API outputs\n* locale-safe date formatting strategy\n* explicit separation between display fields and canonical fields\n* authorization checks on export and API scope\n* audit who exported what and when\n\nh2. Acceptance criteria\n\n* Admins can export Excel, XML, and HTML outputs with the required fields.\n* APIs expose normalized enterprise leave planning data for reporting and allocation use cases.\n* Export and API access are permission-controlled and auditable.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-157",
          "summary": "ENT | Reporting dashboard, staffing analytics and allocation signals",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-157",
          "description": "Reporting dashboard, staffing analytics, and allocation signals for enterprise mode.\n\nScope:\n\n* show leave trends, approval throughput, blocked-date usage, company leave usage, max-off breaches, and role coverage risk over time\n* provide team, role, and date filters\n* expose daily and weekly allocation risk indicators for managers\n* support drill-down from chart to affected dates and requests\n\nAcceptance criteria:\n\n* Enterprise users can analyze leave and staffing patterns without exporting first.\n* Analytics align with exported and API data.\n* Managers can identify upcoming coverage risks from the dashboard.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-161",
          "summary": "ENT | Export schema, filters and scheduled delivery specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-161",
          "description": "Enterprise export specification.\n\nScope:\n\n* define export formats: Excel, XML, HTML\n* define mandatory exported fields: calendar date, weekday name, names of people on leave, count of people planned off\n* define optional fields for enterprise use: request status, leave type, team, role, approver, blocked or company-leave flags, coverage status\n* define filter options by date range, workspace, team, role, member, request status\n* define manual export and scheduled export behavior\n* define file naming, locale handling, timezone handling, and access permissions\n\nAcceptance criteria:\n\n* Required export fields are documented in a stable schema.\n* Optional enterprise filters and metadata are documented.\n* Engineers can implement export generation and delivery from this story.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-173",
          "summary": "ENT | Reporting KPI definitions and dashboard widget catalog",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-173",
          "description": "Implementation-level reporting specification for enterprise mode.\n\nScope:\n\n* define KPI catalog for approval throughput, average approval time, pending approvals, approved days by period, rejected requests by period, blocked-day usage, company leave usage, max-off breaches, role coverage breaches, short-staffed upcoming days, leave by team, leave by role, and leave by user\n* define each dashboard widget: title, metric source, aggregation logic, filters, drill-through target, empty state, and refresh expectations\n* define default dashboard layout for desktop and mobile enterprise views\n* define time windows and comparison modes: current month, next 30 days, quarter, custom range, previous period comparison where applicable\n* define exportability of dashboard data and alignment with API aggregates\n\nAcceptance criteria:\n\n* Reporting KPIs are documented with unambiguous formulas.\n* Widget behavior is documented screen by screen.\n* Managers can rely on dashboard metrics matching export and API data.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-185",
          "summary": "ENT | Define KPI formulas and drill-through behavior for reporting widgets",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-185",
          "description": "Subtask under the reporting KPI story.\n\nDeliverables:\n\n* formulas and aggregation logic for approval throughput, avg approval time, pending approvals, blocked-date usage, company leave usage, max-off breaches, role coverage breaches, short-staffed upcoming days, leave by team, leave by role, leave by user\n* drill-through destinations and filter inheritance rules\n\nAcceptance criteria:\n\n* KPIs are reproducible from API/export data.\n* Drill-through behavior is explicit and testable.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "Syncfolk",
        "repository": "SYN backlog",
        "label": "Validated Jira backlog"
      },
      "deploymentComment": "Planned enterprise governance unit for enterprise exports, reporting and kpi analytics."
    },
    {
      "id": "rel-sync-unr-07",
      "version": "unreleased-enterprise-import-migration",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "supabase",
        "jira",
        "spreadsheet-import"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_ent_import_migration"
      ],
      "releaseNotes": "Spreadsheet import, field mapping, validation and migration reporting.",
      "jiraLinks": [
        {
          "key": "SYN-158",
          "summary": "ENT | Spreadsheet import and migration from shared leave trackers",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-158",
          "description": "Spreadsheet import and migration from shared leave trackers.\n\nScope:\n\n* import leave-planning source data from spreadsheet uploads\n* map imported columns to enterprise entities such as member, date, leave type, status, and comment\n* validate imported data before commit\n* provide error report for rejected rows\n* support migration from shared spreadsheet processes into enterprise workspace data\n\nAcceptance criteria:\n\n* Admins can migrate spreadsheet-based leave planning into the enterprise workspace.\n* Invalid rows are reported clearly.\n* Imported data becomes available in calendar, approval, export, and reporting flows.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-172",
          "summary": "ENT | Spreadsheet import field mapping, validation and error report catalog",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-172",
          "description": "Implementation-level import specification for enterprise leave planning.\n\nScope:\n\n* define supported spreadsheet column mappings for member identity, email, date, date range, leave type, request status, comment, role, team, and location where applicable\n* define import modes: dry-run validation, partial accept, full commit\n* define row-level validation rules, duplicate detection rules, unknown member handling, unknown leave type handling, and date parsing rules\n* define import error catalog with stable error codes and human-readable remediation text\n* define generated import summary fields: total rows, accepted rows, rejected rows, warnings, created entities, updated entities\n* define downloadable error report structure for failed rows\n\nAcceptance criteria:\n\n* Engineers can implement spreadsheet import without guessing column semantics.\n* Validation and error handling are documented consistently.\n* Admins receive actionable feedback for failed imports.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-186",
          "summary": "ENT | Define spreadsheet import mappings and row-level validation rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-186",
          "description": "Subtask under the spreadsheet import story.\n\nDeliverables:\n\n* supported column mappings for member identity, email, date/date range, leave type, status, comment, role, team, location\n* row-level validation rules and duplicate detection\n* unknown member and unknown leave type behavior\n\nAcceptance criteria:\n\n* Engineers can implement spreadsheet import validation from this subtask.\n* Column semantics are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-187",
          "summary": "ENT | Define spreadsheet import mappings and row-level validation rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-187",
          "description": "Subtask under the spreadsheet import story.\n\nDeliverables:\n\n* supported column mappings for member identity, email, date/date range, leave type, status, comment, role, team, location\n* row-level validation rules and duplicate detection\n* unknown member and unknown leave type behavior\n\nAcceptance criteria:\n\n* Engineers can implement spreadsheet import validation from this subtask.\n* Column semantics are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "Syncfolk",
        "repository": "SYN backlog",
        "label": "Validated Jira backlog"
      },
      "deploymentComment": "Planned enterprise governance unit for enterprise import and migration from spreadsheets."
    },
    {
      "id": "rel-sync-unr-08",
      "version": "unreleased-enterprise-notifications-audit",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
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
        "syncfolk_ent_notifications_audit"
      ],
      "releaseNotes": "Notification rules, audit history and compliance-oriented retention behavior.",
      "jiraLinks": [
        {
          "key": "SYN-159",
          "summary": "ENT | Notification rules for enterprise leave planning",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-159",
          "description": "Define enterprise notification rules.\n\nScope:\n\n* list notification events for invitations, leave request actions, approvals, rejections, escalations, rule conflicts, imports, exports, and membership changes\n* define recipients for each event\n* define unread and read behavior\n* define badge count and ordering rules\n* define desktop and mobile notification panel behavior\n\nAcceptance criteria:\n\n* Enterprise notification rules are documented.\n* Read and unread behavior is explicit.\n* Engineers can implement notifications consistently.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-160",
          "summary": "ENT | Audit log, retention rules and compliance-ready history",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-160",
          "description": "Enterprise audit and retention specification.\n\nScope:\n\n* define which actions generate immutable audit events: invitation, role change, request create/update/cancel, approval, rejection, escalation, rule change, template apply, export, import, membership removal, admin override\n* define audit event fields: actor, affected user, workspace, affected dates, previous state, new state, timestamp, reason, source screen or API\n* define retention expectations for operational history and audit history\n* define search and filter behavior for audit review\n* define which users can view audit history\n\nAcceptance criteria:\n\n* Important enterprise actions are captured in audit history.\n* Audit history can be filtered and reviewed by authorized users.\n* Retention expectations are documented for implementation and policy alignment.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-171",
          "summary": "ENT | Notification event matrix, recipients and payload rules",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-171",
          "description": "Tabular notification specification for enterprise leave planning.\n\nScope:\n\n* define event-by-event notification matrix covering invitation, invitation accepted, request submitted, request changed, request approved, request rejected, request cancelled, request expired, approval escalation, blocked-date conflict, max-off conflict, role coverage conflict, rule changed, template applied, export finished, import finished, membership changed, and admin override\n* define recipients for each event and delivery expectations for in-app and email\n* define unread, read, dismissed, and badge-count behavior\n* define sort order, grouping, and duplicate-suppression rules\n* define payload fields needed for notification cards, email templates, and drill-through navigation\n* define visibility rules for who can see which notifications in shared enterprise contexts\n\nAcceptance criteria:\n\n* Enterprise notification behavior is documented as a matrix rather than scattered rules.\n* Recipient, payload, and unread behavior are explicit.\n* Engineers and QA can verify notification behavior against a single source of truth.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "Syncfolk",
        "repository": "SYN backlog",
        "label": "Validated Jira backlog"
      },
      "deploymentComment": "Planned enterprise governance unit for enterprise notifications, audit and retention."
    },
    {
      "id": "rel-sync-unr-09",
      "version": "unreleased-enterprise-wireframes-parity",
      "status": "unreleased",
      "releaseState": "unreleased",
      "surfaces": [
        "web",
        "backend",
        "shared-contract",
        "mobile-android",
        "mobile-ios"
      ],
      "shippedAt": "Not shipped",
      "backendChanged": true,
      "sharedContractChanged": true,
      "schemaChanged": true,
      "integrationsChanged": [
        "jira",
        "github"
      ],
      "jiraBackfillRequired": false,
      "deliveredCapabilities": [
        "syncfolk_ent_wireframes_parity"
      ],
      "releaseNotes": "Wireframes, QA matrices, acceptance scenarios and offline/mobile parity rules.",
      "jiraLinks": [
        {
          "key": "SYN-156",
          "summary": "ENT | Enterprise wireframes and responsive screen specification",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-156",
          "description": "Enterprise wireframes and responsive screen specification.\n\nScope:\n\n* define screen-by-screen layouts for desktop and mobile\n* define the enterprise workspace shell, approval inbox, member directory, rule editor, calendar, exports, and summary panel\n* define modal, drawer, and inline action behavior\n* define empty, loading, error, and no-permission states\n\nAcceptance criteria:\n\n* Designers and engineers can implement enterprise screens without reverse-engineering the consumer webapp.\n* Desktop and mobile variants are both documented.\n* Key interactions are described at wireframe level.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-169",
          "summary": "ENT | Screen-by-screen wireframe appendix for desktop and mobile",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-169",
          "description": "Screen-level UX and wireframe appendix for enterprise leave planning.\n\nScope:\n\n* define each enterprise screen and sub-screen with named sections, components, actions, and visible data blocks\n* include desktop and mobile variants for: workspace home, enterprise calendar view, coverage and conflict summary, approval inbox, day detail, request form, member directory, rule editor, template library, export center, import flow, audit log, notifications panel, settings screen\n* define navigation entry points, back behavior, modal versus full-screen behavior, sheet versus drawer behavior, and destructive-action confirmations\n* define loading, empty, error, no-data, and no-permission states for every screen\n* define screen-to-screen transitions and deep-link landing behavior where relevant\n\nAcceptance criteria:\n\n* Designers and engineers can build the enterprise interface screen by screen from this story.\n* Desktop and mobile layouts are both covered.\n* Critical edge states are documented rather than left implicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-174",
          "summary": "ENT | Enterprise acceptance scenarios and QA matrix",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-174",
          "description": "Enterprise acceptance and QA specification.\n\nScope:\n\n* define end-to-end scenarios for owner, resourceAssistant, member, invited user, suspended user, and removed user\n* cover invitation, registration, request submission, approval, rejection, cancellation, escalation, rule conflicts, template application, export, import, notifications, and audit history\n* define expected behavior for web, Android, and iPhone for the same business flows\n* define example workspace and test-data setups for validation\n\nAcceptance criteria:\n\n* QA and engineers can validate enterprise mode from one scenario catalog.\n* Role-based and rule-based flows are covered by explicit scenarios.\n* Cross-platform expected behavior is documented for the same business flow.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-175",
          "summary": "ENT | Mobile parity, responsive behavior and offline-friendly enterprise flows",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-175",
          "description": "Enterprise mobile and responsive specification.\n\nScope:\n\n* define which enterprise workflows must behave identically on web, Android, and iPhone\n* define responsive layout priorities for approval inbox, day detail, request form, summary panel, rule editor, notifications, and exports\n* define offline-tolerant and retry behavior for non-destructive actions such as draft request editing and queued fetch refresh\n* define what actions require online validation and what data can be cached for read-only access\n* define conflict handling when stale mobile data meets newer server-side rules\n\nAcceptance criteria:\n\n* Enterprise workflows have explicit mobile parity expectations.\n* Responsive and offline-friendly behavior is documented where needed.\n* Engineers can implement mobile clients without inventing platform-specific business behavior.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-182",
          "summary": "ENT | Define desktop and mobile screen sections for enterprise workspace",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-182",
          "description": "Subtask under the wireframe appendix story.\n\nDeliverables:\n\n* section-by-section breakdown for workspace home, calendar, summary panel, approval inbox, request form, member directory, rule editor, export center, notifications, settings\n* desktop and mobile variants\n\nAcceptance criteria:\n\n* Designers and engineers can build named screen sections from this subtask.\n* Responsive priorities are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-188",
          "summary": "ENT | Define enterprise QA scenario sets and regression-critical flows",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-188",
          "description": "Subtask under the enterprise acceptance scenarios story.\n\nDeliverables:\n\n* scenario sets for invitation, registration, request create/update/cancel, approve/reject, escalation, rule conflict, template application, export, import, notifications, audit review\n* regression-critical scenarios for releases\n* cross-platform expected results for web, Android, iPhone\n\nAcceptance criteria:\n\n* QA can execute enterprise regression from this subtask.\n* Cross-platform business expectations are aligned.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-189",
          "summary": "ENT | Define enterprise acceptance scenarios by role and critical flow",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-189",
          "description": "Subtask under the enterprise QA matrix story.\n\nDeliverables:\n\n* acceptance scenarios for owner, resourceAssistant, member, invited, suspended, and removed users\n* role-based normal, edge, and negative flows for invitation, request, approval, conflict, export, import, notifications\n\nAcceptance criteria:\n\n* QA can validate enterprise behavior from these scenarios.\n* Cross-role coverage is explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-190",
          "summary": "ENT | Define mobile parity and offline-tolerant behavior for enterprise flows",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-190",
          "description": "Subtask under the mobile parity story.\n\nDeliverables:\n\n* parity expectations for web, Android, and iPhone across approval inbox, day detail, request form, summary panel, notifications, settings\n* offline-tolerant read-only and retry behavior for safe actions\n* stale-data conflict handling rules\n\nAcceptance criteria:\n\n* Mobile clients can implement the same business behavior as web.\n* Offline and retry behavior are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-191",
          "summary": "ENT | Define mobile parity rules and offline-safe enterprise actions",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-191",
          "description": "Subtask under the mobile parity story.\n\nDeliverables:\n\n* parity rules for approval inbox, day detail, request form, summary panel, notifications, settings\n* offline-safe versus online-required actions\n* stale-data conflict handling rules for mobile clients\n\nAcceptance criteria:\n\n* Mobile teams can implement enterprise behavior without web-only assumptions.\n* Offline and retry behavior is explicit where supported.",
          "labels": [
            "ENTERPRISE"
          ]
        },
        {
          "key": "SYN-192",
          "summary": "ENT | Define mobile parity and offline-tolerant behavior for enterprise flows",
          "status": "To Do",
          "url": "https://hobbeast.atlassian.net/browse/SYN-192",
          "description": "Subtask under the mobile parity story.\n\nDeliverables:\n\n* parity expectations for web, Android, and iPhone across approval inbox, day detail, request form, summary panel, notifications, settings\n* offline-tolerant read-only and retry behavior for safe actions\n* stale-data conflict handling rules\n\nAcceptance criteria:\n\n* Mobile clients can implement the same business behavior as web.\n* Offline and retry behavior are explicit.",
          "labels": [
            "ENTERPRISE"
          ]
        }
      ],
      "source": {
        "kind": "jira-import",
        "owner": "Syncfolk",
        "repository": "SYN backlog",
        "label": "Validated Jira backlog"
      },
      "deploymentComment": "Planned enterprise governance unit for enterprise wireframes, qa and mobile parity."
    }
  ],
  "capabilities": [
    {
      "id": "syncfolk_shell_design_foundation",
      "name": "App shell, navigation and design foundation",
      "summary": "Cross-platform shell, route model, design tokens, shared UI primitives and shell-level data contracts.",
      "description": "Implements the current Syncfolk app shell, navigation model, theme system, design tokens, shared UI primitives, route matrix, loading/error shell states, baseline analytics/accessibility rules, and shell-level API contract conventions derived from the validated Jira backlog and Syncfolk inventories.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "lovable",
        "github",
        "jira",
        "vercel"
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
        "SYN-133",
        "SYN-134",
        "SYN-135",
        "SYN-136"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes / Likely (inventory-derived)",
      "firstRelease": {
        "web": "web-v0.1.0-shell-design",
        "backend": "web-v0.1.0-shell-design",
        "shared-contract": "web-v0.1.0-shell-design"
      },
      "source": "seed"
    },
    {
      "id": "syncfolk_auth_identity_foundation",
      "name": "Authentication, identity and recovery foundation",
      "summary": "Credential auth, OAuth, verification, reset and identity state behavior.",
      "description": "Covers email/password sign-in and sign-up, OAuth activation, verification, reset and in-app password change, plus the identity state models and wireframe specifications that support the currently implemented Syncfolk auth experience.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "google-oauth",
        "lovable"
      ],
      "jiraKeys": [
        "SYN-3",
        "SYN-5",
        "SYN-26",
        "SYN-28",
        "SYN-51",
        "SYN-52",
        "SYN-63",
        "SYN-70",
        "SYN-71",
        "SYN-72",
        "SYN-77",
        "SYN-78",
        "SYN-138",
        "SYN-139"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes / Likely (inventory-derived)",
      "firstRelease": {
        "web": "web-v0.2.0-auth-identity",
        "backend": "web-v0.2.0-auth-identity",
        "shared-contract": "web-v0.2.0-auth-identity"
      },
      "source": "seed"
    },
    {
      "id": "syncfolk_guest_temp_access",
      "name": "Guest and temporary session flows",
      "summary": "Temporary identity, inactivity handling and guest upgrade lifecycle.",
      "description": "Captures the temporary guest model, inactivity logout, temp-return access and guest-to-member upgrade path that the inventories describe as part of the current B2C Syncfolk runtime.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "SYN-27",
        "SYN-74",
        "SYN-75",
        "SYN-76"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes / Likely (inventory-derived)",
      "firstRelease": {
        "web": "web-v0.3.0-guest-temp-access",
        "backend": "web-v0.3.0-guest-temp-access",
        "shared-contract": "web-v0.3.0-guest-temp-access"
      },
      "source": "seed"
    },
    {
      "id": "syncfolk_event_lifecycle",
      "name": "Event lifecycle, creation and context",
      "summary": "Create/edit/delete/restart event flows, selector context and event data model behavior.",
      "description": "Groups the B2C event creation, editing, restart, selector and context-restore behaviors, along with event lifecycle state modeling, date-picker rules and persistence/data-model stories tied to the current Syncfolk scheduling runtime.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
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
        "SYN-29",
        "SYN-30",
        "SYN-31",
        "SYN-53",
        "SYN-54",
        "SYN-73",
        "SYN-79",
        "SYN-80",
        "SYN-81",
        "SYN-82",
        "SYN-83",
        "SYN-84",
        "SYN-131",
        "SYN-132",
        "SYN-140",
        "SYN-141"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes / Likely (inventory-derived)",
      "firstRelease": {
        "web": "web-v0.4.0-event-lifecycle",
        "backend": "web-v0.4.0-event-lifecycle",
        "shared-contract": "web-v0.4.0-event-lifecycle"
      },
      "source": "seed"
    },
    {
      "id": "syncfolk_sharing_and_join",
      "name": "Sharing, invite distribution and join flows",
      "summary": "Share token generation, channel distribution and event join outcomes for registered and guest users.",
      "description": "Groups share-link generation, token lifecycle, creator/participant sharing rules, registered and guest join-event flows, and the outcome-specific CTA handling around participation entry.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "email-social-share"
      ],
      "jiraKeys": [
        "SYN-32",
        "SYN-33",
        "SYN-85",
        "SYN-86",
        "SYN-87",
        "SYN-88",
        "SYN-89",
        "SYN-90",
        "SYN-91"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes / Likely (inventory-derived)",
      "firstRelease": {
        "web": "web-v0.5.0-sharing-and-join",
        "backend": "web-v0.5.0-sharing-and-join",
        "shared-contract": "web-v0.5.0-sharing-and-join"
      },
      "source": "seed"
    },
    {
      "id": "syncfolk_calendar_core",
      "name": "Calendar rendering and primary voting interactions",
      "summary": "Month grid, date eligibility, single-day voting and core calendar state behavior.",
      "description": "Covers calendar rendering, month navigation, date eligibility, tap/press semantics, info entry triggers, freeze/lock guards and the related calendar state-machine and wireframe backlog that supports the current voting UX.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "date-fns"
      ],
      "jiraKeys": [
        "SYN-7",
        "SYN-11",
        "SYN-34",
        "SYN-35",
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
        "SYN-142",
        "SYN-143"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes / Likely (inventory-derived)",
      "firstRelease": {
        "web": "web-v0.6.0-calendar-core",
        "backend": "web-v0.6.0-calendar-core",
        "shared-contract": "web-v0.6.0-calendar-core"
      },
      "source": "seed"
    },
    {
      "id": "syncfolk_batch_and_day_details",
      "name": "Batch voting and day-details interactions",
      "summary": "Drag-range voting, batch side-panel operations and day-details participant views.",
      "description": "Groups drag-range voting, batch side-panel controls, copy restrictions, day-details payloads, participant row anatomy and social actions available from daily detail surfaces.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "date-fns"
      ],
      "jiraKeys": [
        "SYN-36",
        "SYN-37",
        "SYN-100",
        "SYN-101",
        "SYN-102",
        "SYN-103",
        "SYN-104"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes / Likely (inventory-derived)",
      "firstRelease": {
        "web": "web-v0.7.0-batch-day-details",
        "backend": "web-v0.7.0-batch-day-details",
        "shared-contract": "web-v0.7.0-batch-day-details"
      },
      "source": "seed"
    },
    {
      "id": "syncfolk_ranking_and_pinned_day",
      "name": "Ranking, pinned day and decision support",
      "summary": "Ranking computation, tie resolution, pinned-day decisions and freeze/unlock behavior.",
      "description": "Covers ranking formulas, ranking list UX, tie-resolution dialogs, pin/freeze/unlock behavior and the related ranking and notification state/wireframe backlog that supports final date selection.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "date-fns"
      ],
      "jiraKeys": [
        "SYN-8",
        "SYN-12",
        "SYN-39",
        "SYN-40",
        "SYN-57",
        "SYN-58",
        "SYN-108",
        "SYN-109",
        "SYN-110",
        "SYN-111",
        "SYN-112",
        "SYN-113",
        "SYN-144",
        "SYN-145",
        "SYN-146"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes / Likely (inventory-derived)",
      "firstRelease": {
        "web": "web-v0.8.0-ranking-pinned-day",
        "backend": "web-v0.8.0-ranking-pinned-day",
        "shared-contract": "web-v0.8.0-ranking-pinned-day"
      },
      "source": "seed"
    },
    {
      "id": "syncfolk_notifications_center",
      "name": "Notification center and event-driven notification rules",
      "summary": "Unread/read notification center plus event-triggered participant messaging rules.",
      "description": "Groups the notification data model, panel layout, row actions, guest notification parity, pin/friendship/event lifecycle notifications and the event-driven payload rules behind the current B2C notification center.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
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
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes / Likely (inventory-derived)",
      "firstRelease": {
        "web": "web-v0.9.0-notifications",
        "backend": "web-v0.9.0-notifications",
        "shared-contract": "web-v0.9.0-notifications"
      },
      "source": "seed"
    },
    {
      "id": "syncfolk_personal_availability",
      "name": "Personal availability and event synchronization",
      "summary": "Personal calendar CRUD, copy-to-event behavior and exclusion rules.",
      "description": "Covers the personal availability calendar, CRUD and navigation behavior, copy-to-event flows, target filtering and restrictions when decided or locked events should not be mutated.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase",
        "date-fns"
      ],
      "jiraKeys": [
        "SYN-38",
        "SYN-105",
        "SYN-106",
        "SYN-107"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes / Likely (inventory-derived)",
      "firstRelease": {
        "web": "web-v0.10.0-personal-availability",
        "backend": "web-v0.10.0-personal-availability",
        "shared-contract": "web-v0.10.0-personal-availability"
      },
      "source": "seed"
    },
    {
      "id": "syncfolk_profile_social_security",
      "name": "Profile, social graph and account security",
      "summary": "Profile layout, friends/favorites, account deletion and social state behavior.",
      "description": "Groups the profile header and preference model, friends and favorites management, account deletion flows, data-cleanup rules and the corresponding profile/social state-machine and wireframe backlog.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned"
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
        "SYN-59",
        "SYN-60",
        "SYN-121",
        "SYN-122",
        "SYN-123",
        "SYN-124",
        "SYN-125",
        "SYN-126",
        "SYN-127",
        "SYN-137",
        "SYN-147",
        "SYN-148"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes / Likely (inventory-derived)",
      "firstRelease": {
        "web": "web-v0.11.0-profile-social-security",
        "backend": "web-v0.11.0-profile-social-security",
        "shared-contract": "web-v0.11.0-profile-social-security"
      },
      "source": "seed"
    },
    {
      "id": "syncfolk_admin_operations",
      "name": "Administrative operations and platform oversight",
      "summary": "Admin dashboard, user management and event management operations.",
      "description": "Captures the administrative shell, dashboard, user-management and event-management flows that exist as internal operations capabilities in the Syncfolk product model.",
      "statusBySurface": {
        "web": "shipped",
        "backend": "shipped",
        "shared-contract": "shipped",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "follow-up-required",
      "integrations": [
        "supabase"
      ],
      "jiraKeys": [
        "SYN-46",
        "SYN-128",
        "SYN-129",
        "SYN-130"
      ],
      "tenant": "B2C",
      "channel": "Webapp",
      "codebaseStatus": "Implemented in current codebase",
      "deployStatus": "Yes / Likely (inventory-derived)",
      "firstRelease": {
        "web": "web-v0.12.0-admin-operations",
        "backend": "web-v0.12.0-admin-operations",
        "shared-contract": "web-v0.12.0-admin-operations"
      },
      "source": "seed"
    },
    {
      "id": "syncfolk_ent_mode_workspace",
      "name": "Enterprise mode, workspace access and member governance",
      "summary": "Enterprise shell, registered-only workspace access, member setup and locale/workspace settings.",
      "description": "Planned enterprise absence-planning mode with dedicated shell, workspace context, registered-only access, role setup, member governance and workspace-level settings such as locale and environment configuration.",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
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
        "SYN-22",
        "SYN-165"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "firstRelease": {},
      "source": "seed"
    },
    {
      "id": "syncfolk_ent_request_lifecycle_inbox",
      "name": "Enterprise request lifecycle and approval inbox",
      "summary": "Leave request lifecycle, approval worklists, bulk decisions and escalation rules.",
      "description": "Planned enterprise request and approval workflow covering submission, approval inboxes, bulk decisions, escalation/substitute rules and conflict handling for leave governance.",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira"
      ],
      "jiraKeys": [
        "SYN-16",
        "SYN-21",
        "SYN-149",
        "SYN-150",
        "SYN-152",
        "SYN-153"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "firstRelease": {},
      "source": "seed"
    },
    {
      "id": "syncfolk_ent_calendar_rules_capacity",
      "name": "Enterprise calendar rules, coverage and planning templates",
      "summary": "Blocked dates, staffing coverage, templates, holiday profiles and enterprise visual rules.",
      "description": "Planned enterprise calendar governance layer covering blocked dates, capacity rules, staffing coverage summaries, reusable rule templates, team/location/holiday profiles and enterprise-specific day-detail states.",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
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
        "SYN-23",
        "SYN-151",
        "SYN-162",
        "SYN-163",
        "SYN-164"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "firstRelease": {},
      "source": "seed"
    },
    {
      "id": "syncfolk_ent_permissions_visibility_security",
      "name": "Enterprise permissions, visibility and security rules",
      "summary": "Role-based permission matrix, data visibility rules and enterprise security expectations.",
      "description": "Planned enterprise permission and security model covering role-action visibility matrices, cell/day/export visibility rules and privacy/security expectations for leave data.",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira"
      ],
      "jiraKeys": [
        "SYN-155",
        "SYN-170",
        "SYN-176",
        "SYN-183",
        "SYN-184"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "firstRelease": {},
      "source": "seed"
    },
    {
      "id": "syncfolk_ent_data_model_api",
      "name": "Enterprise data model and API contract",
      "summary": "Entity schemas, relationships, workflow state tables and enterprise endpoint catalog.",
      "description": "Planned enterprise backend contract including data model, entities, relationships, workflow state tables and endpoint payloads for workspace bootstrap, leave requests, approvals, exports, imports and notifications.",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira"
      ],
      "jiraKeys": [
        "SYN-154",
        "SYN-166",
        "SYN-167",
        "SYN-168",
        "SYN-177",
        "SYN-178",
        "SYN-179",
        "SYN-180",
        "SYN-181"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "firstRelease": {},
      "source": "seed"
    },
    {
      "id": "syncfolk_ent_exports_reporting",
      "name": "Enterprise exports, reporting and KPI analytics",
      "summary": "Exports, reporting datasets, KPI catalogs and staffing analytics.",
      "description": "Planned reporting, export and analytics layer for enterprise absence planning, including export schema, scheduled/manual delivery, reporting datasets, KPI definitions and drill-through widget behavior.",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira",
        "spreadsheet-import"
      ],
      "jiraKeys": [
        "SYN-19",
        "SYN-157",
        "SYN-161",
        "SYN-173",
        "SYN-185"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "firstRelease": {},
      "source": "seed"
    },
    {
      "id": "syncfolk_ent_import_migration",
      "name": "Enterprise import and migration from spreadsheets",
      "summary": "Spreadsheet import, field mapping, validation and migration reporting.",
      "description": "Planned import/migration path from spreadsheet-based leave trackers, including field mapping, validation, duplicate detection, rejected-row reporting and commit summaries.",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira",
        "spreadsheet-import"
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
      "firstRelease": {},
      "source": "seed"
    },
    {
      "id": "syncfolk_ent_notifications_audit",
      "name": "Enterprise notifications, audit and retention",
      "summary": "Notification rules, audit history and compliance-oriented retention behavior.",
      "description": "Planned enterprise notification event matrix, recipient logic, immutable audit history, retention rules and compliance-ready operational traceability.",
      "statusBySurface": {
        "web": "planned",
        "backend": "planned",
        "shared-contract": "planned",
        "mobile-android": "planned",
        "mobile-ios": "planned"
      },
      "parityStatus": "planned",
      "integrations": [
        "supabase",
        "jira"
      ],
      "jiraKeys": [
        "SYN-159",
        "SYN-160",
        "SYN-171"
      ],
      "tenant": "Enterprise",
      "channel": "Both",
      "codebaseStatus": "Jira/spec only",
      "deployStatus": "No",
      "firstRelease": {},
      "source": "seed"
    },
    {
      "id": "syncfolk_ent_wireframes_parity",
      "name": "Enterprise wireframes, QA and mobile parity",
      "summary": "Wireframes, QA matrices, acceptance scenarios and offline/mobile parity rules.",
      "description": "Planned UI/QA specification layer for enterprise mode, covering wireframe appendices, acceptance scenarios by role, QA matrices and offline-tolerant mobile parity behavior.",
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
        "github"
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
      "firstRelease": {},
      "source": "seed"
    }
  ],
  "integrations": [
    {
      "id": "github",
      "name": "GitHub",
      "category": "source-control",
      "state": "connected",
      "notes": "Repository and release source for Syncfolk governance."
    },
    {
      "id": "jira",
      "name": "Jira",
      "category": "planning",
      "state": "connected",
      "notes": "Authoritative requirement and backlog source for Syncfolk issue mapping.",
      "url": "https://hobbeast.atlassian.net/issues/?jql=project%20%3D%20SYN"
    },
    {
      "id": "vercel",
      "name": "Vercel",
      "category": "deployment",
      "state": "planned",
      "notes": "Deployment visibility target for the live web runtime."
    },
    {
      "id": "supabase",
      "name": "Supabase",
      "category": "backend",
      "state": "connected",
      "environmentSensitive": true,
      "notes": "Auth, Postgres, profiles, votes, events and edge-function-backed flows."
    },
    {
      "id": "google-oauth",
      "name": "Google OAuth",
      "category": "external-api",
      "state": "connected",
      "environmentSensitive": true,
      "notes": "OAuth sign-in and sign-up activation."
    },
    {
      "id": "email-social-share",
      "name": "Email and social share",
      "category": "external-api",
      "state": "connected",
      "notes": "mailto and social deep-link based invite distribution."
    },
    {
      "id": "lovable",
      "name": "Lovable / Vite frontend shell",
      "category": "design",
      "state": "connected",
      "notes": "Current webapp development and preview shell."
    },
    {
      "id": "date-fns",
      "name": "date-fns",
      "category": "documentation",
      "state": "connected",
      "notes": "Core calendar and date logic dependency used by Syncfolk runtime."
    },
    {
      "id": "spreadsheet-import",
      "name": "Spreadsheet import / export",
      "category": "external-api",
      "state": "planned",
      "notes": "Planned enterprise import/export capability family."
    }
  ],
  "parityAlerts": [
    {
      "id": "syncfolk-web-to-android-parity",
      "severity": "warning",
      "sourceSurface": "web",
      "affectedSurface": "mobile-android",
      "reason": "Current Syncfolk B2C runtime exists on web, but Android parity remains specification-driven and should be validated against the authoritative SYN backlog.",
      "jiraKey": "SYN-175",
      "state": "tracked"
    },
    {
      "id": "syncfolk-web-to-ios-parity",
      "severity": "warning",
      "sourceSurface": "web",
      "affectedSurface": "mobile-ios",
      "reason": "Current Syncfolk B2C runtime exists on web, but iPhone parity remains specification-driven and should be validated against the authoritative SYN backlog.",
      "jiraKey": "SYN-192",
      "state": "tracked"
    },
    {
      "id": "syncfolk-enterprise-backend-gap",
      "severity": "critical",
      "sourceSurface": "backend",
      "affectedSurface": "web",
      "reason": "Enterprise absence-planning capabilities are still backlog/spec only and do not yet exist as runtime modules despite detailed backend and API requirements.",
      "jiraKey": "SYN-154",
      "state": "open"
    },
    {
      "id": "syncfolk-governance-baseline-warning",
      "severity": "info",
      "sourceSurface": "shared-contract",
      "affectedSurface": "web",
      "reason": "This Syncfolk representation is inventory-derived governance seeding, not a historical release audit. Live ingestion should eventually replace the baseline assumptions.",
      "jiraKey": "SYN-13",
      "state": "tracked"
    }
  ],
  "importedJiraIssues": [
    {
      "id": "jira_syn_1",
      "key": "SYN-1",
      "summary": "SYN | App shell, navigation and design system",
      "description": "Build the cross-platform application shell and reusable design system that will let the existing Syncfolk web experience be reimplemented consistently for Android and iPhone.\n\nh2. Scope\n\n* App shell, navigation model, top-level routes and guarded screens\n* Cross-platform layout rules, responsive behavior and spacing system\n* Theme system, tokens, reusable UI primitives and accessibility baseline\n* Deep-link entry points for shared event links and auth redirects\n\nh2. Frontend requirements\n\n* Define screen map for auth, app home, join-event, profile, admin and modal flows\n* Define reusable components for buttons, inputs, chips, badges, dialogs, sheets, cards and calendar cells\n* Define responsive behavior for phone, tablet and large-screen layouts\n* Preserve feature parity with current webapp while removing web-specific coupling\n\nh2. Backend / integration requirements\n\n* Document required bootstrap payloads for session restore, profile bootstrap and selected-event bootstrap\n* Define deep-link handling contract for invite URLs, temp upgrade flows and password reset flows\n\nh2. Acceptance criteria\n\n* Native teams can implement the entire shell and core UI primitives without reverse-engineering the web code\n* Navigation and theming contracts are documented in issue children\n* All downstream mobile stories can reference this epic as their shell/design baseline\n\nIssue type: Epic\nLabels: design-system, migrated-from-HOB-191, mobile-spec, SYN",
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
      "id": "jira_syn_2",
      "key": "SYN-2",
      "summary": "SYN | App shell, navigation and design system",
      "description": "Build the cross-platform application shell and reusable design system that will let the existing Syncfolk web experience be reimplemented consistently for Android and iPhone.\n\nh2. Scope\n\n* App shell, navigation model, top-level routes and guarded screens\n* Cross-platform layout rules, responsive behavior and spacing system\n* Theme system, tokens, reusable UI primitives and accessibility baseline\n* Deep-link entry points for shared event links and auth redirects\n\nh2. Frontend requirements\n\n* Define screen map for auth, app home, join-event, profile, admin and modal flows\n* Define reusable components for buttons, inputs, chips, badges, dialogs, sheets, cards and calendar cells\n* Define responsive behavior for phone, tablet and large-screen layouts\n* Preserve feature parity with current webapp while removing web-specific coupling\n\nh2. Backend / integration requirements\n\n* Document required bootstrap payloads for session restore, profile bootstrap and selected-event bootstrap\n* Define deep-link handling contract for invite URLs, temp upgrade flows and password reset flows\n\nh2. Acceptance criteria\n\n* Native teams can implement the entire shell and core UI primitives without reverse-engineering the web code\n* Navigation and theming contracts are documented in issue children\n* All downstream mobile stories can reference this epic as their shell/design baseline\n\nIssue type: Epic\nLabels: design-system, migrated-from-HOB-191, mobile-spec, SYN",
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
      "id": "jira_syn_3",
      "key": "SYN-3",
      "summary": "SYN | Authentication, identity and guest access",
      "description": "Define all account, session and guest-access flows needed to support registered users and registration-free participants across Android and iPhone shared-link entry points.\n\nScope:\n\n* Email/password sign in, Google sign in, sign up and password reset\n* Temporary user sessions and event-linked guest access\n* Guest-to-registered upgrade and session continuity\n* Permission rules for creator-only actions, participant actions and admin roles\n\nFrontend requirements:\n\n* Platform-neutral auth screens and validation behavior\n* Error, loading and recovery states for every auth flow\n* Session restore and sign-out behavior across app restarts\n\nBackend/integration requirements:\n\n* Auth provider integration and callback contracts\n* Temporary user creation, upgrade and cleanup rules\n* Permission model for creator, participant and guest limits\n\nAcceptance criteria:\n\n* Mobile teams can implement the full auth model from child issues\n* Guest and registered flows are described without web-only assumptions\n\nIssue type: Epic\nLabels: auth, migrated-from-HOB-192, mobile-spec, SYN",
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
      "id": "jira_syn_4",
      "key": "SYN-4",
      "summary": "SYN | App shell, navigation and design system",
      "description": "Build the cross-platform application shell and reusable design system that will let the existing Syncfolk web experience be reimplemented consistently for Android and iPhone.\n\nh2. Scope\n\n* App shell, navigation model, top-level routes and guarded screens\n* Cross-platform layout rules, responsive behavior and spacing system\n* Theme system, tokens, reusable UI primitives and accessibility baseline\n* Deep-link entry points for shared event links and auth redirects\n\nh2. Frontend requirements\n\n* Define screen map for auth, app home, join-event, profile, admin and modal flows\n* Define reusable components for buttons, inputs, chips, badges, dialogs, sheets, cards and calendar cells\n* Define responsive behavior for phone, tablet and large-screen layouts\n* Preserve feature parity with current webapp while removing web-specific coupling\n\nh2. Backend / integration requirements\n\n* Document required bootstrap payloads for session restore, profile bootstrap and selected-event bootstrap\n* Define deep-link handling contract for invite URLs, temp upgrade flows and password reset flows\n\nh2. Acceptance criteria\n\n* Native teams can implement the entire shell and core UI primitives without reverse-engineering the web code\n* Navigation and theming contracts are documented in issue children\n* All downstream mobile stories can reference this epic as their shell/design baseline\n\nIssue type: Epic\nLabels: design-system, migrated-from-HOB-191, mobile-spec, SYN",
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
      "id": "jira_syn_5",
      "key": "SYN-5",
      "summary": "SYN | Authentication, identity and guest access",
      "description": "Cross-platform authentication and identity flows for Syncfolk mobile.\n\nScope:\n\n* Email/password sign in\n* Google sign in\n* Sign up and password reset\n* Guest sessions and guest-to-registered upgrade\n* Role and permission handling for creator, participant and admin\n\nAcceptance criteria:\n\n* Android and iPhone teams can implement the identity model from child issues.\n* Guest and registered flows are documented without web-only assumptions.\n\nIssue type: Epic\nLabels: auth, migrated-from-HOB-192, mobile-spec, SYN",
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
      "id": "jira_syn_6",
      "key": "SYN-6",
      "summary": "SYN | Event calendar lifecycle, templates and sharing",
      "description": "Cross-platform event calendar lifecycle for Syncfolk mobile.\n\nScope:\n\n* Create, edit, delete and view event calendars\n* Template-based setup with category and description metadata\n* Registered-only and no-registration share modes\n* Invite link generation, distribution and revocation\n* Event selector and ownership/participant rules\n\nAcceptance criteria:\n\n* Android and iPhone teams can rebuild create/edit/share/join behavior from child issues.\n* Data fields and access rules are captured in downstream issues.\n\nIssue type: Epic\nLabels: events, migrated-from-HOB-193, mobile-spec, sharing, SYN",
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
      "id": "jira_syn_7",
      "key": "SYN-7",
      "summary": "SYN | Voting calendar, day details and batch interactions",
      "description": "Cross-platform voting calendar behavior for Syncfolk mobile.\n\nScope:\n\n* Calendar grid rendering and month navigation\n* Date eligibility rules based on start date, end date, current date and event status\n* Single-day voting, long-press/info access and day detail surfaces\n* Batch voting ranges, drag interactions and clear/reset behavior\n\nAcceptance criteria:\n\n* Android and iPhone teams can rebuild calendar voting from child issues.\n* Date-selection edge cases are captured in downstream issues.\n\nIssue type: Epic\nLabels: calendar, migrated-from-HOB-194, mobile-spec, SYN, voting",
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
      "id": "jira_syn_8",
      "key": "SYN-8",
      "summary": "SYN | Ranking, pinned day and notifications",
      "description": "Cross-platform ranking, pinned day and notification behavior for Syncfolk mobile.\n\nScope:\n\n* Vote ranking computation and presentation\n* Creator-only pinned-day selection and modification\n* Tie handling for top-ranked days\n* Notification center, unread counts, read/delete actions and event-driven notification types\n\nAcceptance criteria:\n\n* Android and iPhone teams can reproduce ranking and pin-day behavior from child issues.\n* Notification-triggering events and payloads are documented in downstream issues.\n\nIssue type: Epic\nLabels: migrated-from-HOB-195, mobile-spec, notifications, ranking, SYN",
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
      "id": "jira_syn_9",
      "key": "SYN-9",
      "summary": "SYN | Profile, friends and administrative operations",
      "description": "Cross-platform profile, friends and admin operations for Syncfolk mobile.\n\nScope:\n\n* Profile screen, profile menu and account preferences\n* Password change and account deletion flow\n* Friend search, requests, accept/decline, favorites and participant social actions\n* Admin dashboard and event/user oversight capabilities\n\nAcceptance criteria:\n\n* Android and iPhone teams can implement profile, social and admin flows from child issues.\n* Destructive actions and permissions are documented in downstream issues.\n\nIssue type: Epic\nLabels: admin, friends, migrated-from-HOB-196, mobile-spec, profile, SYN",
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
      "id": "jira_syn_10",
      "key": "SYN-10",
      "summary": "SYN | Profile, friends and administrative operations",
      "description": "Cross-platform profile, friends and admin operations for Syncfolk mobile.\n\nScope:\n\n* Profile screen, profile menu and account preferences\n* Password change and account deletion flow\n* Friend search, requests, accept/decline, favorites and participant social actions\n* Admin dashboard and event/user oversight capabilities\n\nAcceptance criteria:\n\n* Android and iPhone teams can implement profile, social and admin flows from child issues.\n* Destructive actions and permissions are documented in downstream issues.\n\nIssue type: Epic\nLabels: admin, friends, migrated-from-HOB-196, mobile-spec, profile, SYN",
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
      "id": "jira_syn_11",
      "key": "SYN-11",
      "summary": "SYN | Voting calendar, day details and batch interactions",
      "description": "Cross-platform voting calendar behavior for Syncfolk mobile.\n\nScope:\n\n* Calendar grid rendering and month navigation\n* Date eligibility rules based on start date, end date, current date and event status\n* Single-day voting, long-press/info access and day detail surfaces\n* Batch voting ranges, drag interactions and clear/reset behavior\n\nAcceptance criteria:\n\n* Android and iPhone teams can rebuild calendar voting from child issues.\n* Date-selection edge cases are captured in downstream issues.\n\nIssue type: Epic\nLabels: calendar, migrated-from-HOB-197, mobile-spec, SYN, voting",
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
      "id": "jira_syn_12",
      "key": "SYN-12",
      "summary": "SYN | Ranking, pinned day and notifications",
      "description": "Cross-platform ranking, pinned day and notification behavior for Syncfolk mobile.\n\nScope:\n\n* Vote ranking computation and presentation\n* Creator-only pinned-day selection and modification\n* Tie handling for top-ranked days\n* Notification center, unread counts, read/delete actions and event-driven notification types\n\nAcceptance criteria:\n\n* Android and iPhone teams can reproduce ranking and pin-day behavior from child issues.\n* Notification-triggering events and payloads are documented in downstream issues.\n\nIssue type: Epic\nLabels: migrated-from-HOB-198, mobile-spec, notifications, ranking, SYN",
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
      "id": "jira_syn_13",
      "key": "SYN-13",
      "summary": "ENT | Enterprise absence planning and resource governance mode",
      "description": "h2. Objective\n\nIntroduce a dedicated Syncfolk Enterprise mode for vacation and leave planning, separate from the B2C event-voting experience.\n\nh2. Business problem\n\nMany teams still manage leave planning in shared spreadsheets that are hard to govern, impossible to validate consistently, and weak for API-based reporting, capacity planning, and allocation calculations.\n\nh2. Outcome\n\nProvide a secure enterprise leave planning workspace that supports:\n\n* authenticated, email-invited members only\n* owner and delegated {{resourceAssistant}} governance\n* leave request submission and approval\n* blocked days, mandatory leave days, and per-day capacity rules\n* role-based minimum staffing and maximum leave thresholds\n* reusable templates and batch application of rules\n* enterprise exports and API-ready data structures\n* notifications, audit trail, and coverage/conflict views\n\nh2. Product boundaries\n\nThis epic must produce a dedicated enterprise UX mode, not a cluttered all-in-one hybrid screen. The enterprise space should reuse the Syncfolk calendar strengths where useful, but remove consumer-only constructs such as anonymous participation, share-by-link entry, and voting ranking.\n\nh2. Non-functional expectations\n\n* role-based authorization\n* auditability of approvals and rule changes\n* scalable daily rule evaluation\n* exportability to Excel, XML, and HTML\n* future-ready API surface for reporting and resource allocation integrations\n\nh2. Acceptance criteria\n\n* An enterprise mode exists with clearly separated navigation and behavior from B2C event voting.\n* Enterprise spaces support only registered, invited members.\n* Core leave planning, approval, governance, export, and notification capabilities are covered by child stories.\n* The design is suitable for later native mobile implementation without depending on web-specific assumptions.\n\nIssue type: Epic\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-13",
      "source": "file-import"
    },
    {
      "id": "jira_syn_14",
      "key": "SYN-14",
      "summary": "ENT | Enterprise mode shell, navigation separation and workspace context",
      "description": "h2. User story\n\nAs an enterprise customer, I want a dedicated leave-planning shell that is clearly separated from consumer event voting so that the product stays focused, governed, and easy to learn.\n\nh2. Functional scope\n\n* add enterprise-specific workspace context\n* separate navigation labels, entry points, empty states, and permissions from B2C spaces\n* hide consumer-only capabilities in enterprise spaces: anonymous join, magic link participation, voting ranking, social sharing, guest voting flows\n* show enterprise-specific modules: team members, approval queue, rule templates, coverage/conflict summary, exports, audit log\n* preserve responsive behavior for desktop and mobile\n\nh2. UI expectations\n\n* enterprise spaces must have their own visual cues and terminology\n* page header must show workspace name, owner/admin context, and approval/notification affordances\n* left-side replacement for voting ranking: {{Coverage & Conflict Summary}}\n* summary widget should highlight: pending requests, blocked dates, mandatory leave dates, capacity breaches, role coverage breaches, upcoming approvals\n\nh2. Frontend notes\n\n* reuse calendar primitives where possible\n* use feature flags / space type checks to switch components and actions\n* avoid mixed-mode UI where B2C and enterprise actions appear together\n\nh2. Backend notes\n\n* introduce space type or workspace mode marker\n* enforce server-side capability gating by space type\n\nh2. Acceptance criteria\n\n* Enterprise spaces display enterprise modules only.\n* Consumer-only entry methods and actions are unavailable in enterprise spaces.\n* Coverage & Conflict Summary replaces the voting ranking area.\n* UX remains responsive on desktop and mobile.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-14",
      "source": "file-import"
    },
    {
      "id": "jira_syn_15",
      "key": "SYN-15",
      "summary": "ENT | Registered-only invitation model and enterprise role governance",
      "description": "h2. User story\n\nAs an enterprise workspace owner, I want to invite named users by email and assign controlled roles so that only authenticated members can access and administer leave planning.\n\nh2. Functional scope\n\n* disallow anonymous access, guest flows, and open share links\n* require email invitation + registration + authenticated acceptance\n* support roles: {{owner}}, {{resourceAssistant}}, {{member}}\n* owner can assign or revoke {{resourceAssistant}}\n* owner and {{resourceAssistant}} can invite members\n* owner remains final authority for workspace administration\n* membership status model: invited, active, suspended, removed\n\nh2. Permissions\n\nh3. owner\n\n* manage workspace settings\n* invite/remove members\n* assign/revoke {{resourceAssistant}}\n* configure rules, templates, approvals, exports\n\nh3. resourceAssistant\n\n* manage members operationally\n* process approvals\n* manage rules, templates, notifications, exports per owner policy\n* cannot transfer ownership unless separately specified\n\nh3. member\n\n* submit leave requests\n* view own requests and approved team calendar according to visibility rules\n\nh2. Backend notes\n\n* create enterprise membership and role tables / entities\n* secure all APIs by workspace membership and role checks\n* store invitation token lifecycle and expiry\n\nh2. Acceptance criteria\n\n* Enterprise workspace access requires authenticated membership.\n* No link-only or guest entry path exists.\n* Owner and resourceAssistant permissions are enforced server-side.\n* Invitation, activation, suspension, and removal states are auditable.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-15",
      "source": "file-import"
    },
    {
      "id": "jira_syn_16",
      "key": "SYN-16",
      "summary": "ENT | Leave request lifecycle, approval decisions and operational notifications",
      "description": "h2. User story\n\nAs an employee or delegated approver, I want a structured leave request and approval lifecycle so that requests can be submitted, reviewed, approved, rejected, or adjusted with full traceability.\n\nh2. Functional scope\n\n* member submits leave request with start date, end date, leave type, optional note, optional partial-day metadata\n* request states: draft, submitted, pending approval, approved, rejected, cancelled, auto-rejected, expired\n* owner/resourceAssistant can approve, reject, or create requests on behalf of members\n* optional reason required on rejection or admin override\n* notifications to requester and approvers for create/update/approve/reject/cancel events\n* prevent approvals when blocking rules or capacity rules fail\n\nh2. UX expectations\n\n* request form must surface balance, conflicts, blocked days, and policy warnings before submission\n* approval queue must support filters by status, user, date range, team, role, and workspace\n* day detail view must show approved, pending, and rejected items based on permission\n\nh2. Backend notes\n\n* persist request history and approval actions as immutable audit events\n* evaluate rule engine before final approval\n* support admin-created requests with actor attribution\n\nh2. Acceptance criteria\n\n* Full request lifecycle is available to enterprise users.\n* Approvers receive actionable notifications.\n* Approval decisions are blocked when rules fail.\n* Every state transition is auditable with actor and timestamp.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-16",
      "source": "file-import"
    },
    {
      "id": "jira_syn_17",
      "key": "SYN-17",
      "summary": "ENT | Calendar governance rules for blocked dates, company leave days and daily capacity",
      "description": "h2. User story\n\nAs an owner or resourceAssistant, I want to define day-level governance rules so that leave planning respects business shutdowns, company leave days, and overall daily capacity.\n\nh2. Functional scope\n\n* mark dates or ranges as blocked for leave requests\n* mark dates or ranges as company leave days\n* define maximum people allowed off on a given day\n* support single-day, date-range, and batch rule application\n* surface rule breaches in request and approval flows\n\nh2. Rule behavior\n\n* blocked date: members cannot submit or receive approval for leave on that date\n* company leave date: the date is marked with a dedicated enterprise flag and displayed clearly in calendar and exports\n* max-off rule: request or approval fails when the configured threshold is exceeded\n\nh2. Data and UI notes\n\n* rules need effective dates, scope, creator, modifier, and audit history\n* calendar day cells and side panels should show active enterprise flags\n* batch tooling must allow rule copy/apply across multiple dates\n\nh2. Acceptance criteria\n\n* Owner/resourceAssistant can configure blocked dates, company leave dates, and max-off limits.\n* The rule engine prevents invalid requests and approvals.\n* Rules are visible in enterprise calendar UX and exports.\n* Batch application is supported.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-17",
      "source": "file-import"
    },
    {
      "id": "jira_syn_18",
      "key": "SYN-18",
      "summary": "ENT | Role-based staffing coverage rules, reusable templates and batch application",
      "description": "h2. User story\n\nAs an owner or resourceAssistant, I want to define staffing constraints by role so that leave decisions preserve minimum operational coverage.\n\nh2. Functional scope\n\n* define enterprise roles / job families inside the workspace (examples: Business Analyst, QA, Lead Developer, Senior Developer, Project Manager)\n* assign one or more roles to members based on chosen domain model\n* configure per-day or date-range rules by role:\n** maximum people off for a role\n** minimum people required working for a role\n* save rule sets as reusable templates\n* apply templates in batch to multiple dates\n* allow template versioning and clear effective date visibility\n\nh2. Business rules\n\n* rule conflicts must be validated before save\n* leave request evaluation must consider both global capacity and role-based coverage rules\n* template application must be previewable before commit\n\nh2. UI expectations\n\n* dedicated rule builder\n* batch apply interaction with selected dates and template preview\n* conflict messages must explain which role constraint failed\n\nh2. Acceptance criteria\n\n* Enterprise admins can define roles, assign members, create staffing rules, save templates, and apply them in batch.\n* Requests and approvals fail with clear reasons when a role threshold would be breached.\n* Template application is auditable.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-18",
      "source": "file-import"
    },
    {
      "id": "jira_syn_19",
      "key": "SYN-19",
      "summary": "ENT | Enterprise exports, reporting dataset and integration-ready API surface",
      "description": "h2. User story\n\nAs an enterprise administrator, I want exportable and API-ready leave data so that the workspace can feed reporting, allocation calculations, and downstream HR or BI processes.\n\nh2. Functional scope\n\n* export leave calendar data to Excel, XML, and HTML\n* required export columns:\n** calendar date\n** weekday name\n** names of people on leave for the day\n** count of people planned off for the day\n* support date range, team, role, and workspace filters\n* provide machine-consumable API endpoints for approved requests, pending requests, rules, role coverage, and daily aggregates\n* design payloads so mobile apps and future integrations can reuse the same contract\n\nh2. Technical expectations\n\n* stable IDs and timestamps in export/API outputs\n* locale-safe date formatting strategy\n* explicit separation between display fields and canonical fields\n* authorization checks on export and API scope\n* audit who exported what and when\n\nh2. Acceptance criteria\n\n* Admins can export Excel, XML, and HTML outputs with the required fields.\n* APIs expose normalized enterprise leave planning data for reporting and allocation use cases.\n* Export and API access are permission-controlled and auditable.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-19",
      "source": "file-import"
    },
    {
      "id": "jira_syn_20",
      "key": "SYN-20",
      "summary": "ENT | Coverage and Conflict Summary panel replacing consumer ranking",
      "description": "h2. User story\n\nAs an enterprise owner, resourceAssistant, or approver, I want a Coverage & Conflict Summary panel instead of a voting ranking so that I can immediately see operational risks and pending work.\n\nh2. Functional scope\n\n* replace the B2C ranking panel with an enterprise summary panel\n* show counts for pending leave approvals, blocked dates in the visible range, company leave dates in the visible range, days exceeding max-off limits, days violating role coverage rules, and upcoming requests that need attention\n* support filters for workspace, month, team, role, and request status\n* clicking a summary item opens the corresponding filtered detail list or focuses the affected dates in calendar view\n* show warning severity levels: informational, warning, blocking\n\nh2. UI expectations\n\n* compact card layout on desktop sidebar\n* collapsible summary tray on mobile\n* each metric card must include count, short label, status color, and optional next-action shortcut\n* empty states should be explicit: no pending approvals, no conflicts, no blocked dates this month\n\nh2. Backend notes\n\n* requires pre-aggregated daily conflict data or performant on-demand calculation\n* summary queries must respect workspace visibility and role permissions\n\nh2. Acceptance criteria\n\n* Enterprise spaces no longer show consumer vote ranking.\n* Coverage & Conflict Summary is available on desktop and mobile.\n* Every summary card can drill into actionable data.\n* Counts match underlying calendar, rules, and request data.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-20",
      "source": "file-import"
    },
    {
      "id": "jira_syn_21",
      "key": "SYN-21",
      "summary": "ENT | Approval queue and leave request worklist",
      "description": "Enterprise approval queue for leave requests.\n\nScope:\n\n* pending approval list\n* filters by user, date range, role, team, status\n* approve, reject, cancel, and admin-create actions\n* clear reason display when a request conflicts with rules\n\nAcceptance criteria:\n\n* Approvers can process requests from one worklist.\n* Conflicts are visible before decision.\n* Actions are audited.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-21",
      "source": "file-import"
    },
    {
      "id": "jira_syn_22",
      "key": "SYN-22",
      "summary": "ENT | Workspace member management and role setup",
      "description": "Workspace member management for enterprise mode.\n\nScope:\n\n* list invited and active users\n* assign owner, resourceAssistant, and member roles\n* assign business roles for coverage rules\n* search and filter users by status and role\n* show invitation state and access state\n\nAcceptance criteria:\n\n* Admins can manage enterprise users and roles.\n* Role changes are saved and visible in the workspace.\n* Access is based on assigned role.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-22",
      "source": "file-import"
    },
    {
      "id": "jira_syn_23",
      "key": "SYN-23",
      "summary": "ENT | Enterprise calendar day details and request statuses",
      "description": "Enterprise day detail and status display.\n\nScope:\n\n* open any calendar day and show approved, pending, rejected, and blocked information based on permission\n* show company leave markers, blocked markers, and capacity warnings in day detail\n* show role coverage impact for the day\n* allow approvers to navigate from day detail to request review\n\nAcceptance criteria:\n\n* Day detail is available on desktop and mobile.\n* Enterprise day detail shows status-based information instead of vote information.\n* Day detail links to approval and conflict workflows.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-23",
      "source": "file-import"
    },
    {
      "id": "jira_syn_24",
      "key": "SYN-24",
      "summary": "SYN | Define screen map, route guards and deep-link behavior",
      "description": "h1. ObjectiveSpecify the complete navigation topology of Syncfolk so Android, iPhone and any future client can recreate the same entry points, guarded routes, redirects and modal/sheet launches without depending on the existing React router implementation.h1. Primary actors* Anonymous visitor; registered user; temporary guest user; event creator; event participant; admin user.h1. Functional scope* Inventory all destinations:** Public: landing/auth, reset-password, invite-join landing, temp sign-in activation.** Protected: main event workspace, profile, admin.** Overlay destinations: create event dialog, share dialog, event info modal, day-details modal/sheet, notifications panel, pin-day selection dialog, event unavailable modal.* Define route guard matrix:** anonymous users may access invite link and auth only;** temporary users may access the linked event workspace only;** temporary users are blocked from profile and admin;** admins may access admin screens in addition to normal user flows.* Define cold-start behavior:** if a valid session exists, restore user and resolve last selected event;** if a temp session exists without its event binding, force local sign-out;** if redirect parameters are present, route after auth completion.* Define deep-link behavior:** /join/:token validates token and branches into already-member, guest-join, auth-required, expired and event-inactive outcomes;** /temp/:tempToken restores temporary session for invited guest;** auth callback and password reset callback must preserve post-login redirect intent.h1. UI / wireframe requirements* Navigation spec must include one wireframe block per screen:** header layout (logo, create-event CTA, notification bell, profile access);** left rail / side panel usage on desktop;** bottom-safe and touch-target requirements on mobile;** modal vs full-screen-sheet rule by breakpoint.* The main event workspace must remain calendar-first:** center area reserved for full month grid;** left/right auxiliary panels adapt in width based on preserving full calendar visibility;** no screen should require the user to horizontally scroll to see the active calendar.* Route transition notes must state whether the destination replaces history, pushes history, or opens as overlay.h1. Backend / integration requirements* Define bootstrap contracts required immediately after app startup:** authenticated session payload;** profile + temporary/linked-event flags;** initial event membership list and default-selected event;** admin capability flag.* Define deep-link validation responses:** invalid token;** expired token;** max-use reached;** event deleted/inactive;** invite requires authenticated account;** invite allows anonymous participation.* Define error model for route guards:** HTTP/API error;** permission denial;** stale local state;** concurrent deletion of selected event.h1. Edge cases and non-functional requirements* App must survive refresh, background/foreground restore, token refresh and partially failed bootstrap calls.* All guards must behave deterministically on slow network and offline-resume states.* A protected route must never briefly flash sensitive content before redirecting.* Navigation spec must remain framework-agnostic: no React-only assumptions, no platform-specific widget names in the normative behavior section.h1. Acceptance criteria* Every route, overlay and redirect is listed with purpose, allowed roles, required data and fallback destination.* Deep-link outcomes are fully enumerated and testable.* Mobile teams can implement equivalent navigation in native stacks without reading the web router source.SYN | Define screen map, route guards and deep-link behaviorPurposeDefine the authoritative screen inventory and navigation contract used by every Syncfolk client.Functional scope- Provide route matrix table: route ID, title, allowed roles, entry preconditions, fallback route, analytics name.- Provide wireframe notes for top bar, profile entry, notification bell and create-event CTA placement.UI / interaction requirements- List every screen, modal, sheet and system dialog.- State initial route per identity state and per deep-link entry.- Define back navigation and cancellation behavior on each surface.Wireframe / layout notes- Screen inventory should separate full screens, transient dialogs, bottom sheets and overlays.Backend / platform-neutral technical requirements- Bootstrap endpoint must return session summary, selected event context and unread notification count.- Navigation intents must be serializable so push notifications and deep links resolve to the same destination.- Route guards must be enforceable both client-side and server-side.State model / edge cases- Cold start without session lands on auth.- Cold start with selected event restores event screen if access still valid.- Invite link while logged in as unsupported identity must branch to recoverable CTA.Acceptance criteria- All current web destinations are represented.- No route depends on implicit browser history behavior.\n\nIssue type: Story\nParent: SYN-4 — SYN | App shell, navigation and design system\nLabels: app-shell, mobile-spec, navigation, story, SYN",
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
      "id": "jira_syn_25",
      "key": "SYN-25",
      "summary": "SYN | Define design tokens, themes and reusable UI primitives",
      "description": "h1. ObjectiveDocument the visual design system of Syncfolk so the product can be reproduced consistently across web, Android and iPhone while preserving brand identity and accessibility.h1. Primary actors* Design system maintainers; mobile frontend developers; QA/design review.h1. Functional scope* Define semantic color tokens for:** brand primary gradients;** vote states (good/maybe/bad);** success/warning/destructive;** elevated surfaces, cards, dialogs, borders, overlays and inactive states.* Define typography scale for display, heading, body, label, caption and handwritten quote styles.* Define component primitives used across the application:** buttons, icon buttons, chips, pills, badges, inputs, textareas, dropdowns, radio buttons, switches, dialogs, sheets, cards, calendar cells, ranking rows, notification rows.* Define state map for each primitive:** default, hover, pressed, selected, focused, disabled, destructive, loading.h1. UI / wireframe requirements* For every primitive specify:** size variants;** padding, radius and minimum touch target;** icon placement rules;** truncation and multiline behavior;** contrast targets for light and dark themes.* Calendar-cell style guide must define:** neutral state;** vote-state gradient fill;** disabled state;** pinned-day state;** info icon placement;** count dot placement.* Wireframe notes must define which surfaces are fixed-width cards versus flexible-width containers.h1. Backend / integration requirements* No direct backend behavior, but design spec must annotate components that depend on server-driven flags:** disabled because event is decided;** disabled because deadline passed;** admin-only action;** unread-notification badge count;** temporary-user restrictions.* Define a frontend-friendly state enum contract that backend responses should support.h1. Edge cases and non-functional requirements* Theme spec must cover both light and dark modes for auth, dialogs and core workspace.* All primitives must remain legible under localization expansion and large accessibility text settings.* Handwritten decorative typography may never be used for critical controls or transactional content.h1. Acceptance criteria* A platform team can rebuild every reusable primitive with consistent states and sizing.* The design token list and component-state catalog are sufficient for native and web parity QA.SYN | Define design tokens, themes and reusable UI primitivesPurposeDefine reusable visual language and primitive-component behavior so UI is consistent across platforms.Functional scope- Include wireframe anatomy diagrams for core primitives and containers.- Document calendar-first layout rules and side-panel collapsing priorities.UI / interaction requirements- Catalog tokens for colors, radii, shadows, borders, typography and spacing.- Define components for button, chip, pill, input, textarea, select, card, dialog, panel, calendar cell and badge.- Specify dark and light theme support.Wireframe / layout notes- Provide naming convention for tokens and component variants.Backend / platform-neutral technical requirements- Theme tokens must be platform neutral and exportable.- Components must define state matrices rather than implementation-specific CSS instructions.- Support dynamic type / font scaling within controlled bounds.State model / edge cases- Theme change must not alter data or navigation state.- Disabled controls remain visible where business state requires visibility.Acceptance criteria- A new design library can be built directly from this story and its tasks.\n\nIssue type: Story\nParent: SYN-4 — SYN | App shell, navigation and design system\nLabels: design-system, mobile-spec, story, SYN, ui",
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
      "id": "jira_syn_26",
      "key": "SYN-26",
      "summary": "SYN | Specify login, registration, verification and forgot-password journeys",
      "description": "h1. ObjectiveDescribe every entry, validation and recovery step of the identity experience so the auth surface can be rebuilt consistently across platforms.h1. Primary actors* Anonymous visitor; newly registering user; returning registered user; user completing email activation; user requesting forgotten-password recovery.h1. Functional scope* Support views:** login;** registration;** email verification / activation code entry;** forgot password request;** reset password completion;** Google OAuth sign-in / sign-up intents.* Validation rules:** email format;** password minimum and complexity rules;** display-name requirement for registration;** OTP length and resend cooldown;** user-facing errors for invalid, expired or already-used activation token.* Flow branches:** classic email/password login;** sign-up requiring email activation;** Google-based sign-in;** Google-based sign-up requiring activation if configured;** redirect restoration after successful authentication.h1. UI / wireframe requirements* Auth screen wireframe must define:** left informational/brand panel versus right transaction panel on large screens;** single-column compact layout on mobile;** CTA hierarchy and copy rules;** loading/disabled states for all auth buttons;** OTP input grouping, countdown and resend placement.* The spec must explicitly distinguish informational decorative content from transactional controls.h1. Backend / integration requirements* Document auth provider dependencies:** Supabase Auth or equivalent auth broker;** email verification/activation endpoint;** Google OAuth callback and intent propagation;** password reset token exchange.* Document payload expectations:** sign-in success session;** sign-up pending-verification response;** activation success/failure response;** forgot-password request response;** reset-password completion response.* Define audit events for registration started, activation sent, activation completed, login success/failure and password reset completed.h1. Edge cases and non-functional requirements* User must never be left in an ambiguous state after OAuth callback or activation.* Expired activation links must produce a recoverable flow, not a dead end.* Repeated resend requests must respect cooldown and rate-limit handling.* Copy and validation must be localization-ready.h1. Acceptance criteria* All auth subflows are documented with UI states, validation messages, server interactions and redirect outcomes.* Native teams can reproduce auth screens and recovery behaviors without reading the current Auth.tsx implementation.SYN | Specify login, registration, verification and forgot-password journeysPurposeDefine all registered-user entry flows from unauthenticated state to active signed-in session.Functional scope- Document login screen, registration screen, verification screen and forgot password entry points.- Document loading, success and error feedback placements.UI / interaction requirements- Login and registration must validate inline and at submit.- Verification and resend flows must provide countdown and terminal recovery path.- OAuth and email/password outcomes must converge into the same post-auth bootstrap.Wireframe / layout notes- Sequence diagrams should cover direct login and invite-first authentication.Backend / platform-neutral technical requirements- Auth service must expose precise error codes for invalid credentials, unverified account, blocked account and rate limiting.- Verification state must be persisted and returned during session bootstrap.State model / edge cases- Switching between login and registration preserves safe values only when appropriate.- User may arrive from invite link, then authenticate, then continue to the event.Acceptance criteria- All web auth screens and edge cases are covered.\n\nIssue type: Story\nParent: SYN-5 — SYN | Authentication, identity and guest access\nLabels: auth, identity, mobile-spec, story, SYN",
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
      "id": "jira_syn_27",
      "key": "SYN-27",
      "summary": "SYN | Specify temporary guest session model and guest-to-member upgrade",
      "description": "h1. ObjectiveDescribe the temporary-user identity model that powers registration-free event participation and later upgrade into a normal account.h1. Primary actors* Temporary invited participant; event creator sharing anonymous link; guest upgrading to email/password or Google account.h1. Functional scope* Temporary session model must cover:** creation of a temporary identity from an invite token;** binding of the temp account to a single linked event;** temp access token persistence;** inactivity logout behavior;** prevention of temp-session reuse in unrelated tabs/devices if required by policy.* Upgrade path must cover:** temp participant chooses to register;** event membership and prior votes are retained;** temporary preferences and guest identifiers are migrated or cleaned;** upgrade can happen through email registration or Google.h1. UI / wireframe requirements* Join flow must clearly label registration-free participation and any restrictions versus full account users.* Temporary-user banners or helper states must explain profile/admin limitations.* Upgrade CTA placement must be defined in:** join confirmation;** ongoing event participation;** potentially profile-access attempt for blocked routes.h1. Backend / integration requirements* Document temp-user profile fields:** is_temporary;** linked_event_id;** temp_access_token;** optional pending Google/email activation preferences.* Define server responsibilities for:** issuing temp session;** validating linked-event access;** migrating guest votes/participation on upgrade;** invalidating temp session when linked event is missing or inactive.h1. Edge cases and non-functional requirements* Temporary users must be force-signed-out if their linked event no longer exists or the required temp marker is missing.* Upgrade flow must be idempotent and protect against duplicate account creation.* Event access cannot be broadened accidentally during upgrade.h1. Acceptance criteria* The temporary-user lifecycle is fully described from invite acceptance through upgrade or invalidation.* Native teams can rebuild guest participation and upgrade without relying on hidden local-storage behavior.SYN | Specify temporary guest session model and guest-to-member upgradePurposeDefine the lifecycle of a temporary guest identity from join through upgrade or invalidation.Functional scope- Document guest entry bannering, restricted-menu treatment and upgrade CTA placements.UI / interaction requirements- Guest join must create a temporary subject only when invite policy allows.- Guest users must see only features allowed for temporary identities.- Upgrade flow must clearly explain what data will be preserved.Wireframe / layout notes- Include mapping rules between guest identity and registered account subject.Backend / platform-neutral technical requirements- Guest subject record must have expiry/invalidation semantics.- Votes, event memberships and notification subscriptions must be transferable on upgrade when the same logical actor is confirmed.State model / edge cases- Guest session expired before completing upgrade.- Guest joins multiple eligible events before upgrading.Acceptance criteria- Guest model is implementable without hidden web assumptions.\n\nIssue type: Story\nParent: SYN-5 — SYN | Authentication, identity and guest access\nLabels: auth, guest, mobile-spec, story, SYN",
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
      "id": "jira_syn_28",
      "key": "SYN-28",
      "summary": "SYN | Specify password reset and in-app password change flows",
      "description": "h1. ObjectiveDocument both out-of-band password recovery and in-app password change so user security flows are fully portable.h1. Primary actors* Registered user who forgot password; signed-in user changing password from profile.h1. Functional scope* Forgot-password request:** user enters email;** system confirms request without leaking account existence beyond configured policy;** reset email is issued.* Reset completion:** password reset link/token opens dedicated route;** user sets and confirms new password;** expired/invalid token behavior is recoverable.* In-app password change:** current password may or may not be required per auth provider policy;** new password and confirmation validation;** success toast and session refresh behavior.h1. UI / wireframe requirements* Forgot-password and reset-password pages must be specified separately from standard auth.* Password requirements panel must list live validation rules.* Show/hide password toggles, inline mismatch messaging and final success state must be defined.h1. Backend / integration requirements* Document reset token validation, password update endpoint and session invalidation/refresh policy.* Document any difference between password-capable accounts and social-login-only accounts.* Define audit/security events for password reset requested, reset completed and password changed in-app.h1. Edge cases and non-functional requirements* Prevent weak password acceptance and mismatched confirmation.* Expired reset tokens must redirect into a recoverable re-request flow.* Social-login-only accounts must not see unusable password-change actions without explanatory messaging.h1. Acceptance criteria* Recovery and in-app password flows are fully specified with validation, error handling and server interactions.SYN | Specify password reset and in-app password change flowsPurposeDefine registered-user credential recovery and in-app password maintenance.Functional scope- Document forgot password, reset password and in-profile password change cards.UI / interaction requirements- Forgot password must request email, send reset link and confirm without leaking account existence.- Reset screen must validate token freshness and password policy.- Profile password change must ask for current password unless external provider-only account logic says otherwise.Wireframe / layout notes- Specify password policy in product language and technical validation terms.Backend / platform-neutral technical requirements- Reset token issuance, expiry, single-use behavior and invalidation must be documented.- Password-change endpoint must emit audit event and revoke other sessions if business rule requires.State model / edge cases- Expired token.- Already used token.- Provider-only account without local password.Acceptance criteria- Credential recovery can be built securely on any client platform.\n\nIssue type: Story\nParent: SYN-5 — SYN | Authentication, identity and guest access\nLabels: auth, mobile-spec, security, story, SYN",
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
      "id": "jira_syn_29",
      "key": "SYN-29",
      "summary": "SYN | Specify event creation flow, templates and field validation",
      "description": "h1. ObjectiveDescribe how a user creates a new event calendar, either from templates or from manual input, with full field semantics and validation.h1. Primary actors* Event creator; invited participant receiving the resulting link.h1. Functional scope* Creation entry points:** global create-event CTA;** template-driven quick-start;** blank/custom event setup.* Required fields:** title;** start date;** end date.* Optional/configurable fields:** category;** description with max-length rules;** voting deadline;** default vote mode;** participant-sharing permission;** anonymous-join/share mode.* Date-picker behavior:** only one date popover may be open at a time;** start-date selection may auto-open end-date selection only when end date is not yet set;** popover closes only via explicit close or OK/Save action, not by accidental outside click.h1. UI / wireframe requirements* Create-event dialog wireframe must define:** header, close action, template toggle, form sections, save CTA and cancel behavior;** desktop modal versus mobile full-height sheet adaptation;** field ordering and spacing;** disabled state of submit until required fields are valid.* Template chooser must be collapsed by default behind a dedicated CTA and expand only on demand.* Date fields must show localized labels, selected date summary and validation messaging.h1. Backend / integration requirements* Document event-creation request schema:** title, category, description, start_date, end_date, deadline, allow_participant_sharing, allow_anonymous, default_vote, creator_id.* Document derived fields:** month/year from start_date or visible month context;** is_active default state;** decided_date initially null.* Define validation rules server-side to mirror client validation and reject invalid ranges or impossible deadlines.h1. Edge cases and non-functional requirements* End date may not be earlier than start date.* Deadline rules must be clear when omitted, when equal to event start date and when already elapsed.* Event creation must be atomic with creator membership initialization if that is part of the data model.h1. Acceptance criteria* Creation flow is fully specified, including templates, date controls, validation, save/cancel and persisted fields.* A native team can implement the create flow without reading the current dialog component code.SYN | Specify event creation flow, templates and field validationPurposeDefine complete creation of an event calendar from entry CTA to persisted event and immediate post-create state.Functional scope- Provide wireframes for create modal/screen on mobile and wide layouts.- Document date-picker open/close rules, explicit OK/cancel behavior and no accidental close on misclick.UI / interaction requirements- Support template-based and manual creation.- Fields include title, category, description, start date, end date, optional deadline, share posture and defaults.- Save button active only when required fields valid.Wireframe / layout notes- Document field-level validation matrix including character limits and date order.Backend / platform-neutral technical requirements- Create API must validate chronology, field limits and owner identity.- Template catalog must be retrievable from backend or embedded configuration with versioning.State model / edge cases- Start date selected before end date exists should optionally prompt end date selection next.- Editing draft before save must not mutate persisted event list.Acceptance criteria- Create flow can be recreated exactly including validation and UX safeguards.\n\nIssue type: Story\nParent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing\nLabels: create, events, mobile-spec, story, SYN",
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
      "id": "jira_syn_30",
      "key": "SYN-30",
      "summary": "SYN | Specify event editing, deletion, restart and state transitions",
      "description": "h1. ObjectiveDocument how existing event calendars are edited, deleted, reopened or frozen, including creator-only actions and state transitions.h1. Primary actors* Event creator; participant observing changes; admin if elevated intervention exists.h1. Functional scope* Editing scope:** title, category, description, date range, deadline, sharing mode and other mutable metadata;** immutable versus mutable fields after votes exist must be defined explicitly.* Deletion scope:** creator-triggered event deletion;** participant-facing consequences;** cleanup of share tokens and notifications.* Restart/freeze scope:** restart voting action clears the decided/pinned state when allowed;** decided/pinned or deadline-reached events block further voting changes;** unlock of pinned day may re-enable voting if deadline has not passed.h1. UI / wireframe requirements* Edit-event surface must preserve explicit save and explicit close/cancel separation.* Existing event edit surface must define destructive section placement clearly separated from non-destructive actions.* Restart and delete actions must require confirmation dialogs with irreversible wording where applicable.h1. Backend / integration requirements* Document update payloads and partial-update rules.* Document event deletion cascade or soft-delete behavior for:** event_participants;** event_share_tokens;** votes;** notifications.* Document restart-voting operation and whether it clears decided_date only or any additional frozen-state flags.h1. Edge cases and non-functional requirements* Concurrent editing by creator on multiple devices must be resolved deterministically.* Participants must not be able to mutate creator-only fields.* Historical notifications should preserve event title snapshot even if the event is later deleted.h1. Acceptance criteria* All creator-only event state transitions are specified with user-facing outcomes and data implications.SYN | Specify event editing, deletion, restart and state transitionsPurposeDefine all mutable operations after an event exists, including safe destructive actions.Functional scope- Document edit screen/modal and delete/restart confirmation patterns.UI / interaction requirements- Event owner can edit allowed fields.- Deletion requires explicit confirmation and user-impact messaging.- Restart voting must clear decided state and restore voting if allowed by deadline/state.Wireframe / layout notes- Provide editable vs non-editable field matrix by event state.Backend / platform-neutral technical requirements- Edit API must reject forbidden mutations based on state.- Delete operation must soft delete or hard delete per documented rule and notify affected users.- Restart voting must be auditable.State model / edge cases- Attempt edit after event frozen or deleted.- Owner changes date range while votes already exist.Acceptance criteria- Post-create event management is fully specified.\n\nIssue type: Story\nParent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing\nLabels: edit, events, mobile-spec, story, SYN",
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
      "id": "jira_syn_31",
      "key": "SYN-31",
      "summary": "SYN | Specify event selector, default event and active/inactive visibility",
      "description": "h1. ObjectiveDescribe how users browse, select and restore among multiple event calendars they own or participate in.h1. Primary actors* Creator with multiple events; participant invited to multiple events; temporary guest linked to one event.h1. Functional scope* Event selector must show:** currently selected event;** event category chip or secondary metadata;** participant ratio summary if applicable;** active/inactive/expired status visibility.* Default selected event rules:** restore last selected event if still accessible;** otherwise choose preferred event by active status and recency;** temporary user is forced onto linked event.* Ranking side panel and batch panel must refresh when selected event changes.h1. UI / wireframe requirements* Wireframe must define selector collapsed state, expanded list item anatomy, sort order and truncation rules.* Selected event switch must not crop the main calendar.* Mobile behavior must specify whether selector expands inline or opens as sheet.h1. Backend / integration requirements* Document events-list query including creator-owned and participant-linked events.* Include fields needed for selector rendering and access control.* Document inactive/expired state derivation and sorting inputs.h1. Edge cases and non-functional requirements* If the selected event is deleted remotely, app must recover to a valid event or empty-state.* Temporary users must never see inaccessible events in the selector.h1. Acceptance criteria* Event selection and restoration behavior is fully deterministic across app restarts and role types.SYN | Specify event selector, default event and active/inactive visibilityPurposeDefine how users find, switch and persist currently active events.Functional scope- Document selector placement in header and empty-state treatment when no events exist.UI / interaction requirements- Event selector lists relevant events in deterministic order.- Default event restore occurs after app launch and after auth.- Inactive/deleted/expired events must display according to visibility rules.Wireframe / layout notes- Specify ordering, badges and truncation rules in the selector list.Backend / platform-neutral technical requirements- List API must support paging/filtering if needed.- Client stores last-selected event key but validates access on restore.State model / edge cases- Restored event no longer accessible.- User is member of many events.Acceptance criteria- Selected-event behavior is stable across app restarts and role changes.\n\nIssue type: Story\nParent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing\nLabels: events, mobile-spec, selector, story, SYN",
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
      "id": "jira_syn_32",
      "key": "SYN-32",
      "summary": "SYN | Specify share-link generation, management and distribution",
      "description": "h1. ObjectiveDocument how creators and allowed participants generate, copy, view and revoke invite links for event calendars.h1. Primary actors* Event creator; participant with sharing permission; invited recipient.h1. Functional scope* Share dialog must support:** registered-users-only join mode;** registration-free/anonymous join mode if allowed;** generation of one or more active invite links;** copy link, delete link and share-to-channel actions.* Each link may carry constraints:** allow_anonymous;** optional email restriction;** optional expiry;** max uses;** use count display.* Share UI must provide message text suitable for SMS/text copy and grouped social channel options.h1. UI / wireframe requirements* Share dialog wireframe must define:** header, mode toggle, link-creation CTA, active-link cards, per-link actions and share options.* Social section may collapse secondary channels behind a grouped CTA, but the visual asset must still present official channel branding where available.* Copy success feedback, delete confirmation and empty-state messaging must be defined.h1. Backend / integration requirements* Document event_share_tokens schema and lifecycle:** token generation;** revocation;** expiry check;** use-count increment;** anonymous-vs-auth enforcement.* Document join-event endpoint requirements for token validation and link consumption.h1. Edge cases and non-functional requirements* Revoked or exhausted links must fail safely with explicit user messaging.* Multiple active links for the same event must coexist without corrupting counts.* Participant sharing permission must be evaluated on every share action, not only at initial screen load.h1. Acceptance criteria* Invite creation and consumption are fully specified, including permissions, token lifecycle and UI actions.SYN | Specify share-link generation, management and distributionPurposeDefine the full sharing surface for invite links and channel-oriented distribution.Functional scope- Document share dialog with grouped channels and active-link list.- Document desktop and mobile modal sizing with capped height and internal scrolling.UI / interaction requirements- Owner can create multiple invite links depending on policy.- Share dialog supports copy, delete/revoke and grouped social channels.- Registration-required and guest-allowed links must be visually distinct.Wireframe / layout notes- Specify channel grouping, iconography rules and fallback when a native app is unavailable.Backend / platform-neutral technical requirements- Invite token records require event ID, creator, policy, status, created/updated timestamps and optional usage rules.- Share actions can be client-side wrappers around canonical invite URL.State model / edge cases- Link revoked after being shared.- Guest link used after event is decided or deleted.Acceptance criteria- Invite management and share UX are platform-neutral and complete.\n\nIssue type: Story\nParent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing\nLabels: invite, mobile-spec, sharing, story, SYN",
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
      "id": "jira_syn_33",
      "key": "SYN-33",
      "summary": "SYN | Specify invite join flow for registered and registration-free participants",
      "description": "h1. ObjectiveDescribe the join-event journey from opening a share link through successful participation or graceful rejection.h1. Primary actors* Anonymous invitee; registered user; temporary guest; creator viewing participant result.h1. Functional scope* Join-event must branch into:** loading/validation;** invalid or expired link;** already joined/already has access;** authenticated user join success;** registration-free guest join success;** auth-required because link disallows anonymous;** event unavailable because event is inactive or deleted.* For guests, system may require a lightweight identity creation step before landing them in the event.* On success, the event should be opened immediately or after auth completion according to the validated redirect rule.h1. UI / wireframe requirements* Join page must define status-card variants for each outcome with clear CTA hierarchy.* Loading state, success confirmation, copy/share reminders and upgrade CTA placement must be defined.* Event-unavailable modal content must be specified separately from generic join-error copy.h1. Backend / integration requirements* Define join-event action contracts:** validate token;** join registered user;** issue/restore temporary guest access;** complete email activation if invite-driven registration is used.* Define participant creation idempotency and duplication safeguards.h1. Edge cases and non-functional requirements* Reopening the same link after already joining must not create duplicate participants.* Joining a deleted/inactive event must not result in a partially created temp session.* Guest join must preserve enough context to continue on another screen without requiring re-entry of the link in the same session.h1. Acceptance criteria* Every join outcome is documented with UI, backend contract and post-success navigation.SYN | Specify invite join flow for registered and registration-free participantsPurposeDefine the complete join-event flow from invite link open to event membership and first-usable screen.Functional scope- Document join splash/loading, outcome messages and CTAs.UI / interaction requirements- Registered and guest branches must both be covered.- Outcome states must include success, already member, expired link, unauthorized link type, deleted event and decided/frozen event.- Post-join screen must be deterministic.Wireframe / layout notes- Specify whether a decided event remains viewable after join.Backend / platform-neutral technical requirements- Join endpoint must validate token, membership and policy.- Guest join may mint session and membership atomically.State model / edge cases- Authenticated user opens guest-allowed link.- Guest opens registration-required link.Acceptance criteria- Any invite URL can be handled without ambiguity.\n\nIssue type: Story\nParent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing\nLabels: guest, join-event, mobile-spec, story, SYN",
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
      "id": "jira_syn_34",
      "key": "SYN-34",
      "summary": "SYN | Specify calendar grid rendering, month navigation and date eligibility",
      "description": "h1. ObjectiveDocument the calendar grid as the canonical voting surface, including month math, date eligibility and responsive rendering rules.h1. Primary actors* Creator; participant; temporary guest.h1. Functional scope* Calendar grid must render the selected event month(s) with day-of-week headers and leading/trailing placeholders.* Date eligibility must enforce:** not earlier than event start date;** not later than event end date;** not earlier than current date when the visible event rules disallow past voting;** not editable when decided_date or freeze flag is active;** not editable when deadline has passed.* Navigation must permit month switching when event spans multiple months; navigation controls must be disabled or hidden when not applicable.h1. UI / wireframe requirements* Calendar is the primary content region and must never be horizontally truncated.* Day cells must preserve square-like shape and minimum readable tap size while side panels adapt around it.* Visual states to specify:** empty placeholder cell;** eligible neutral day;** selected good/maybe/bad vote day with gradient fill;** disabled non-eligible day;** current day;** pinned/decided day indicator;** info icon and count dot positions.h1. Backend / integration requirements* Client requires event metadata: start_date, end_date, decided_date, deadline, default_vote and visible month context.* If server precomputes eligibility or freeze status, document those response flags and precedence rules.h1. Edge cases and non-functional requirements* Click, tap and drag eligibility must be identical; a day that is disabled for single click must also be disabled for range drag.* First-week and second-week spacing anomalies must be prohibited by layout rules.* Month switch must preserve current vote view without stale disabled-state artifacts.h1. Acceptance criteria* The month grid, eligibility logic and rendering states are fully specified and testable across breakpoints.SYN | Specify calendar grid rendering, month navigation and date eligibilityPurposeDefine the canonical calendar surface and all date eligibility rules.Functional scope- Provide wireframe for calendar-first layout with left ranking and right batch panels adapting to the calendar width.UI / interaction requirements- Month grid must render leading/trailing placeholders consistently.- Date cells expose state for eligible, ineligible, past, today, selected vote, decided and info-available.- Calendar must stay fully visible; side panels adapt around it.Wireframe / layout notes- Specify spacing normalization so large blank gutters do not appear between side panels and the calendar.Backend / platform-neutral technical requirements- Eligibility engine must combine event start/end, current date, deadline, freeze/decided state and user role.- Calendar dataset may precompute month slices or generate client-side from event boundaries.State model / edge cases- Month starts mid-week.- Current day equals event start.- Date in range but before today.Acceptance criteria- Calendar rendering does not depend on implicit CSS quirks from the web app.\n\nIssue type: Story\nParent: SYN-7 — SYN | Voting calendar, day details and batch interactions\nLabels: calendar, mobile-spec, story, SYN, voting",
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
      "id": "jira_syn_35",
      "key": "SYN-35",
      "summary": "SYN | Specify single-day vote interactions, info icon and long-press details",
      "description": "h1. ObjectiveDescribe how a user inspects a day and applies or removes a vote through tap/click/long-press interactions.h1. Primary actors* Creator; participant; temporary guest.h1. Functional scope* Vote methods:** if an availability mode is currently selected, tapping an eligible day applies that mode;** tapping the same already-selected value again removes the vote if product rules allow toggle-off;** info icon must open details only and must never mutate vote state;** long-press on mobile opens day details without requiring the tiny info icon.* Detail access must exist for every day within the event date range, even when the day is no longer editable because it is in the past or voting is frozen.h1. UI / wireframe requirements* Day details open as dialog on desktop and sheet on mobile unless another platform-specific pattern is mandated.* The info icon must be placed within the day cell hit area but isolated from vote-tap handling.* Long-press threshold, visual feedback and cancellation conditions must be defined.* If the day is ineligible for editing but still within event range, UI must still allow read-only details access.h1. Backend / integration requirements* Day details require aggregated vote counts and participant-by-participant values for that date.* Detail query must return enough data for participant list, creator/friend actions and status counts.h1. Edge cases and non-functional requirements* Clicking info icon must never trigger vote add/remove.* Long-press should not accidentally vote while opening details.* Read-only detail opening must remain available after pinning and after deadline.h1. Acceptance criteria* Single-day interaction model is fully described for desktop and mobile, including info-only actions and read-only cases.SYN | Specify single-day vote interactions, info icon and long-press detailsPurposeDefine single-day voting and detail access without gesture conflicts.Functional scope- Document cell anatomy including info affordance placement and touch target sizes.UI / interaction requirements- Tap/click on day applies currently selected vote value or removes the same value by toggle rule.- Info icon and long-press open details only.- Touch drag initiation threshold must prevent accidental vote writes when user aims for info.Wireframe / layout notes- Specify parity between mouse click, touch tap and long-press.Backend / platform-neutral technical requirements- Vote mutation endpoint must be idempotent for same-value repeated writes.- Details-open interaction must not call vote mutation handlers.State model / edge cases- Long-press on disabled day.- Tap on info icon while batch panel vote value active.- Cell selected on frozen event.Acceptance criteria- Mobile and desktop interactions are unambiguous and parity-tested by spec.\n\nIssue type: Story\nParent: SYN-7 — SYN | Voting calendar, day details and batch interactions\nLabels: calendar, day-details, mobile-spec, story, SYN",
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
      "id": "jira_syn_36",
      "key": "SYN-36",
      "summary": "SYN | Specify drag range voting and batch side-panel behavior",
      "description": "h1. ObjectiveDescribe batch voting through direct drag selection and through the dedicated batch side panel.h1. Primary actors* Creator; participant; temporary guest.h1. Functional scope* Direct drag voting:** user chooses current availability mode;** press/hold + drag across eligible days applies the selected value to each traversed eligible date;** ineligible dates are skipped and do not break the whole operation;** click-drag parity across mouse and touch is mandatory.* Batch side panel:** user chooses vote value, start date and end date;** apply CTA updates all eligible dates in range;** range can be cleared before apply;** full clear-all may delete all current user's votes for the active event.* When event is pinned/decided, batch panel remains visible but all interactive controls are disabled.h1. UI / wireframe requirements* Batch panel must remain visible beside calendar on large screens and move into an accessible stacked/mobile location on small screens.* Disabled state for pinned/decided events must visually keep the panel present but clearly non-interactive.* Drag operation may show transient highlighting but must not require a secondary confirmation.h1. Backend / integration requirements* Define bulk-vote mutation contract:** event_id;** date_from/date_to;** vote_value;** actor identity;** server response with affected row count and skipped dates.* Define clear-all vote deletion contract scoped to actor + event.h1. Edge cases and non-functional requirements* Drag selection must respect same date eligibility rules as single click.* Batch apply must ignore dates outside event range, before today or after deadline/freeze.* Partially successful bulk updates must report skipped dates and still preserve valid updates if that is the chosen policy.h1. Acceptance criteria* Batch side panel and drag-range behavior are fully specified, including disabled locked-state presentation.SYN | Specify drag range voting and batch side-panel behaviorPurposeDefine multi-day selection via drag gestures and batch side-panel voting.Functional scope- Document panel contents, disabled styling and clear/reset button behavior.UI / interaction requirements- Batch panel stays visible even when disabled by decided flag.- Drag across eligible days writes one vote value across the range.- Disabled or out-of-range dates are skipped and do not break the gesture unless specified.Wireframe / layout notes- Specify gesture start/continue/end rules and auto-scroll behavior if any.Backend / platform-neutral technical requirements- Batch mutation endpoint may accept range or expanded date list but contract must define behavior on partial invalid dates.- Decided flag must render panel inert while preserving visual presence.State model / edge cases- Gesture begins on invalid day.- Gesture crosses ineligible/past dates.- Panel visible on narrow screens as drawer/sheet.Acceptance criteria- Range voting and side-panel behavior are completely specified.\n\nIssue type: Story\nParent: SYN-7 — SYN | Voting calendar, day details and batch interactions\nLabels: batch-vote, calendar, mobile-spec, story, SYN",
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
      "id": "jira_syn_37",
      "key": "SYN-37",
      "summary": "SYN | Specify day-details content model and participant social actions",
      "description": "h1. ObjectiveDefine the content and actions shown inside the day-details view for a selected date.h1. Primary actors* Creator; participant; temporary guest; registered user sending friend requests.h1. Functional scope* Day-details content must include:** selected date headline;** aggregated counts for good/maybe/bad;** participant list with individual choice;** optional indicators for creator, friend, favorite or pending friend request.* Social actions inside day details:** send friend request;** mark favorite;** reflect pending/accepted/favorite state;** do not show unsupported actions for temporary users.h1. UI / wireframe requirements* Desktop uses modal; mobile uses bottom or full-height sheet.* Participant rows must define:** avatar/initial;** display name or fallback;** vote badge;** friend/favorite action icons;** disabled/pending states.* Long lists must scroll within the container without causing background layout shifts.h1. Backend / integration requirements* Day-details query must join:** event votes for selected date;** participant profile display data;** friendship/favorite relationship state relative to current user.* Mutations for friend request and favorites must be documented, including optimistic update policy if any.h1. Edge cases and non-functional requirements* Temporary users may be allowed to read participant rows but blocked from social mutations.* Duplicate friend requests must be prevented and surfaced as idempotent.* Deleted user/profile rows in historical events need a fallback display strategy.h1. Acceptance criteria* Day-details is fully specified as a data view and action surface, including social relationship states.SYN | Specify day-details content model and participant social actionsPurposeDefine the day-details surface and all participant-level information/actions available there.Functional scope- Document row anatomy, section order and action placements for add friend / favorite.UI / interaction requirements- Day details show aggregated counts, participant rows, vote values and social actions.- Surface may appear as dialog on wide layouts and bottom sheet/full sheet on phones.- Creator and participant capabilities may differ inside the detail view.Wireframe / layout notes- Specify how guest identities are labeled and how hidden data is redacted.Backend / platform-neutral technical requirements- Day-details endpoint must return counts by vote type, participant list with identity metadata allowed by privacy rules, and social-action eligibility.State model / edge cases- Guest participants without full profile.- Day outside editable range but still viewable.Acceptance criteria- Day details can be rebuilt as a complete feature from the spec.\n\nIssue type: Story\nParent: SYN-7 — SYN | Voting calendar, day details and batch interactions\nLabels: day-details, friends, mobile-spec, story, SYN",
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
      "id": "jira_syn_38",
      "key": "SYN-38",
      "summary": "SYN | Specify personal availability calendar and synchronization into events",
      "description": "h1. ObjectiveDescribe the standalone personal availability calendar that users maintain outside any single event and may copy into eligible events.h1. Primary actors* Registered user maintaining availability; event participant importing personal availability into current event.h1. Functional scope* Personal availability supports:** month navigation;** single-day cycling through good/maybe/bad;** batch range updates in personal context;** copying availability into a selected event.* Personal availability data is independent from any event vote, but can be projected into an event when the event is eligible and not pinned/frozen.* Events available as copy targets must exclude those whose deadline has passed or whose decided_date is set.h1. UI / wireframe requirements* Personal calendar wireframe must define:** month header;** day-cell state colors;** copy-to-event dialog;** batch side controls where applicable.* Copy dialog must let the user choose target event and scope (all/current month) if supported.* Disabled states and no-data messaging must be defined clearly.h1. Backend / integration requirements* Document personal_availability table contract and CRUD mutations.* Document copy operation as server-side batch translation or client-orchestrated copy, including duplicate handling.* Define synchronization boundaries: copying creates/updates event votes but must not establish ongoing live sync after that operation.h1. Edge cases and non-functional requirements* Copy must ignore dates outside event range.* Copy must not override pinned/decided events.* No-data result must return a friendly, deterministic outcome.h1. Acceptance criteria* Personal availability and one-time copy-to-event behavior are fully specified.SYN | Specify personal availability calendar and synchronization into eventsPurposeDefine the separate personal availability calendar and how its data can project into event voting.Functional scope- Document personal calendar screen or panel and copy-to-event flow.UI / interaction requirements- Personal availability is user-owned and spans arbitrary dates.- Projection into an event must respect event state and decided/deadline locks.- Projection cannot overwrite frozen/decided events.Wireframe / layout notes- Specify overwrite/merge rules when target event already has user votes on some dates.Backend / platform-neutral technical requirements- Personal availability data model must be separate from event votes.- Projection operation must audit source dates and target event.State model / edge cases- User selects availability then target event becomes decided.- Projection includes dates outside event range.Acceptance criteria- Personal calendar and projection rules are platform-neutral and complete.\n\nIssue type: Story\nParent: SYN-7 — SYN | Voting calendar, day details and batch interactions\nLabels: availability, mobile-spec, personal-calendar, story, SYN",
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
      "id": "jira_syn_39",
      "key": "SYN-39",
      "summary": "SYN | Specify ranking computation, filtering and ranking-to-calendar navigation",
      "description": "h1. ObjectiveDocument how the ranked day list is calculated, filtered, displayed and linked back to the calendar.h1. Primary actors* Any event participant; creator using rankings to decide final date.h1. Functional scope* Ranking source set:** include only dates inside event range;** exclude dates with no effective positive signal according to product rule;** current implementation expectation: do not surface dates that only received negative/no-go votes.* Ranking score must be deterministic and documented, including tie rules.* Ranking list is capped (e.g. top 10) and clicking an item focuses the corresponding calendar date/day details.h1. UI / wireframe requirements* Ranking row anatomy:** ordinal badge/medal;** formatted date;** compact good/maybe/bad counters;** top-ranked highlighting.* Empty state copy must be specified.* Clicking a ranking row must define the resulting focus behavior: scroll, select day, open details or both.h1. Backend / integration requirements* Document ranking aggregation:** per-date counts;** score formula;** sorting precedence (score, date proximity, chronological fallback, etc.).* If ranking is computed client-side, document exact source query and algorithm.h1. Edge cases and non-functional requirements* Tie ordering must be deterministic and locale-independent.* Ranking must update after vote mutations, event change, pin/unpin and restart.* Dates outside visible month but inside event range must still be rankable and navigable.h1. Acceptance criteria* Ranking behavior and score math are explicit enough for backend, mobile and QA to produce identical lists.SYN | Specify ranking computation, filtering and ranking-to-calendar navigationPurposeDefine how ranking is calculated, filtered and linked back to the calendar.Functional scope- Document ranking panel sizing, medals/order badges and disabled/empty states.UI / interaction requirements- Ranking rows show order, date and vote counts.- Negative-only dates can be excluded by rule.- Selecting a ranking row focuses the calendar on that date/month.Wireframe / layout notes- Specify sort precedence across score, chronology and stable identifiers.Backend / platform-neutral technical requirements- Aggregation endpoint must return deterministic sorted rows and tie metadata.State model / edge cases- Many tied dates.- No positive/maybe votes at all.Acceptance criteria- Ranking behavior can be implemented identically across clients.\n\nIssue type: Story\nParent: SYN-8 — SYN | Ranking, pinned day and notifications\nLabels: mobile-spec, ranking, story, SYN, voting",
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
      "id": "jira_syn_40",
      "key": "SYN-40",
      "summary": "SYN | Specify pinned-day selection, modification and unlock flow",
      "description": "h1. ObjectiveDescribe the creator-only “Nap kitűzése” feature including tie handling, later modification and unlocking to resume voting.h1. Primary actors* Event creator; participants observing frozen state and receiving notification.h1. Functional scope* When no decided_date exists:** creator sees “Nap kitűzése” CTA;** if one highest-ranked day exists, that day may be preselected or directly proposed;** if multiple top-ranked days tie, open a selection dialog listing only tied dates;** default highlighted option is the closest upcoming eligible date among tied options.* When decided_date exists:** creator sees “Kitűzött nap módosítása” CTA;** dialog lists only highest-ranked dates and includes explicit “Feloldás” destructive action to remove decided_date and resume voting if deadline has not passed.* Setting decided_date freezes event voting and personal-availability copy into that event.h1. UI / wireframe requirements* Header layout must reserve a stable slot for:** pin/unpin/modify CTA;** displayed decided-date chip in the designated center area.* Pin dialog requirements:** fixed maximum visible list of five date options with internal scroll for more;** radio selection;** primary save button active only when a date is selected;** close icon and cancel button;** destructive “Feloldás” action only in modify mode.* Notifications and batch panel disabled styling must update immediately after save.h1. Backend / integration requirements* Document operations:** set decided_date;** update decided_date to another tied date;** clear decided_date / unlock.* Document permissions:** creator only;** server must reject participant attempts even if client is stale.* Setting/clearing decided_date must emit corresponding notification events.h1. Edge cases and non-functional requirements* Unlock is forbidden if the event is otherwise hard-closed by deadline/freeze policy.* Dialog must never render unbounded height; only internal list scroll is allowed.* Modify flow must remain available for events that already have decided_date, unless business rules explicitly close it.h1. Acceptance criteria* The full pin/modify/unlock lifecycle is completely specified, including dialog UX, server mutations and frozen-state side effects.SYN | Specify pinned-day selection, modification and unlock flowPurposeDefine creator-only selection, modification and unlocking of a pinned day.Functional scope- Document header placement for pin CTA, decided pill and modify CTA.UI / interaction requirements- When one date leads, default selection is immediate.- When multiple top-ranked dates tie, dialog opens with recommended default and alternative options.- After pinning, voting freezes until unlock if allowed.Wireframe / layout notes- Specify tie dialog visible-row cap and internal scrolling.Backend / platform-neutral technical requirements- Pinned date is persisted on event as decided_date or equivalent.- Unlock operation clears decided_date and regenerates notifications/audit event.State model / edge cases- Event already decided.- Deadline passed so unlock not allowed.- Tie list longer than visible modal area.Acceptance criteria- Pin/modify/unlock can be rebuilt exactly including constraints and notifications.\n\nIssue type: Story\nParent: SYN-8 — SYN | Ranking, pinned day and notifications\nLabels: mobile-spec, notifications, pinned-day, story, SYN",
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
      "id": "jira_syn_41",
      "key": "SYN-41",
      "summary": "SYN | Specify notification center, unread state and row actions",
      "description": "h1. ObjectiveDescribe the notification bell, counter, panel layout and per-row actions for all user-visible notifications.h1. Primary actors* Registered user; temporary guest where notifications are supported.h1. Functional scope* Notification center must support:** bell icon in global header beside profile;** unread counter based on rows not marked seen and not deleted;** list sorted newest first;** per-row mark-as-read and delete actions;** read/unread visual distinction;** explicit close action only; tapping a row does not close the panel.* Panel sizing rule:** show at most five notifications without expanding height;** additional items accessible via internal scroll on desktop and touch scroll on mobile.h1. UI / wireframe requirements* Notification panel wireframe must define:** title row;** close icon;** scroll container;** row anatomy including title, body, timestamp, seen icon, delete icon.* Subtitle under panel title is not required and should be absent unless later reintroduced by design decision.* Only one scrollbar should be visible for the list; no duplicate nested scrollbars.h1. Backend / integration requirements* Notification entity fields:** id;** user_id or temp_user_id;** type;** title/event title snapshot;** body/message;** created_at;** is_read/is_seen;** deleted_at or is_deleted;** related_event_id optional;** payload containing decided date or actor display name where needed.* Query contract must support newest-first pagination.h1. Edge cases and non-functional requirements* Guest users must receive the same supported event notifications as registered participants for events they can still access.* Mark-as-read and delete actions must be idempotent.* Opening the panel must not auto-mark all rows as read unless explicitly specified elsewhere.h1. Acceptance criteria* Notification center behavior, data model and visual states are fully specified for desktop and mobile.SYN | Specify notification center, unread state and row actionsPurposeDefine the notification center surface and behavior.Functional scope- Document panel header, close button, row states, read state styling and per-row actions.UI / interaction requirements- Bell icon sits near profile entry and shows unread badge count.- Panel height is capped to roughly 5 visible rows with internal scrolling.- Row press must not auto-close the panel.Wireframe / layout notes- Specify dual-scroll avoidance and single-scroll ownership in capped panels.Backend / platform-neutral technical requirements- Notification query supports latest-first ordering, unread count and mark-read/delete actions.- Guests receive supported notifications under parity rules.State model / edge cases- Many notifications.- No notifications.- Unread count after delete or mark-read.Acceptance criteria- Notification center UI and behavior are fully specified.\n\nIssue type: Story\nParent: SYN-8 — SYN | Ranking, pinned day and notifications\nLabels: mobile-spec, notifications, story, SYN, ux",
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
      "id": "jira_syn_42",
      "key": "SYN-42",
      "summary": "SYN | Specify event-driven notification triggers and payload content",
      "description": "h1. ObjectiveEnumerate every event that must generate a notification and the exact message payload required for display.h1. Primary actors* Creator, participant, temporary guest, users in friendship workflows.h1. Functional scope* Notification trigger catalog must include at minimum:** pinned day set;** pinned day modified;** pinned day unlocked;** friend request received;** event deleted while the user was participant/guest;** voting restarted by creator;** any additional share/join/admin triggers explicitly chosen by product.* Each trigger must define:** recipients;** title and body template;** timestamp source;** related event id;** whether unread counter increments;** whether guest recipients are supported.h1. UI / wireframe requirements* Message text must contain enough context to be meaningful in the list without opening the event.* Notification body copy should include event title and the changed day/date when relevant.h1. Backend / integration requirements* Define a publishable notification-event contract and where it is emitted from:** event update workflow;** friendship mutation;** delete/restart actions.* Define deduplication rules to avoid duplicate notifications during retries.h1. Edge cases and non-functional requirements* If event title changes after notification creation, row may show either snapshot title or current title; whichever is chosen must be documented consistently.* Deleted events should still allow row rendering with safe fallback text.h1. Acceptance criteria* Trigger-to-payload mapping is fully specified for all supported notification events.SYN | Specify event-driven notification triggers and payload contentPurposeDefine which product events create notifications and the exact payload content.Functional scope- Document message templates and localization placeholders.UI / interaction requirements- Covered triggers include pin, repin, unlock, friendship, event deletion and voting restart.- Notification body must include event name and outcome text.- Guest and registered recipients may differ by event type and membership.Wireframe / layout notes- Provide template variables and actor/recipient visibility rules.Backend / platform-neutral technical requirements- Notification event producer must emit typed payloads with actor, event, target date and timestamps.- Delivery layer must support idempotency.State model / edge cases- Repeated identical operations in short interval.- Recipient removed before delivery.Acceptance criteria- All supported notification events and payloads are implementation-ready.\n\nIssue type: Story\nParent: SYN-8 — SYN | Ranking, pinned day and notifications\nLabels: events, mobile-spec, notifications, story, SYN",
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
      "id": "jira_syn_43",
      "key": "SYN-43",
      "summary": "SYN | Specify profile page, account summary and user preferences",
      "description": "h1. ObjectiveDescribe the profile hub where a full registered user manages account information, availability utilities and preference surfaces.h1. Primary actors* Registered user only.h1. Functional scope* Profile page must aggregate:** account summary/header;** personal availability calendar access or embedded view;** password change;** delete-account section at the very bottom with low visual emphasis relative to primary actions;** any preference toggles supported by the product.* Temporary users are blocked from profile and redirected back to app workspace.h1. UI / wireframe requirements* Profile screen wireframe must define:** section order;** card hierarchy;** responsive stacking;** safe spacing for destructive actions.* Account deletion card must be visually de-emphasized compared to common profile actions and positioned at the bottom of the page.h1. Backend / integration requirements* Define profile payload: display name, email, role flags, is_temporary, preferences, created_at and any derived status shown in profile.* Define update operations for editable preferences if present.h1. Edge cases and non-functional requirements* Social-login-only accounts may have reduced capabilities for password fields and must receive clear messaging.* Profile must gracefully handle partially missing optional data.h1. Acceptance criteria* Profile page structure and section behavior are fully specified for a native rebuild.SYN | Specify profile page, account summary and user preferencesPurposeDefine the profile surface, account summary and user preference behavior.Functional scope- Document section order, spacing and destructive-action placement low on page.UI / interaction requirements- Profile shows account identity, auth method, security actions and other personal sections.- Guests may be blocked from unsupported features with clear CTA to upgrade.Wireframe / layout notes- Provide card ordering and empty-state treatment for each section.Backend / platform-neutral technical requirements- Profile bootstrap endpoint must return account basics, counts and feature flags.State model / edge cases- OAuth-only account without local password.Acceptance criteria- Profile page can be reconstructed exactly.\n\nIssue type: Story\nParent: SYN-10 — SYN | Profile, friends and administrative operations\nLabels: account, mobile-spec, profile, story, SYN",
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
      "id": "jira_syn_44",
      "key": "SYN-44",
      "summary": "SYN | Specify friends, pending requests and favorites management",
      "description": "h1. ObjectiveDescribe the full social graph feature set used across profile and event day-details.h1. Primary actors* Registered user searching by email; user receiving a friend request; user marking favorites.h1. Functional scope* Friend features:** search by email;** send friend request;** receive request;** accept/decline/cancel if supported;** view pending sent and received requests;** favorites list.* Relationship states:** no relationship;** outgoing pending;** incoming pending;** accepted friend;** favorite.* Social actions available from day-details must synchronize with profile lists and notification counts.h1. UI / wireframe requirements* Friends area must define:** search field and search action;** favorites section;** outgoing pending section;** incoming pending section if supported;** per-row action icons and status chips.* Favorite and friend-request icons shown elsewhere in app must visually align with profile state.h1. Backend / integration requirements* Document friendships model:** requester_id;** addressee_id;** status;** timestamps.* Document favorites model:** owner user id;** favorite_user_id.* Define search constraints and privacy safeguards for email-based discovery.h1. Edge cases and non-functional requirements* Duplicate or reciprocal friend requests must resolve deterministically.* Favorite cannot exist for a non-friend unless the product explicitly allows it; whichever rule is chosen must be documented.* Deleted users must be handled gracefully in lists and notifications.h1. Acceptance criteria* Friendship, pending and favorite states are fully specified across profile and event surfaces.SYN | Specify friends, pending requests and favorites managementPurposeDefine friendship, pending-request and favorite management across the product.Functional scope- Document friends list, pending lists and quick actions.UI / interaction requirements- Users can search by email, send requests, accept/decline, favorite and remove favorite.- Social actions also appear in day details.Wireframe / layout notes- Specify de-duplication and anti-spam behavior for repeated requests.Backend / platform-neutral technical requirements- Friendship entity must track lifecycle state and timestamps.State model / edge cases- Request already exists.- User attempts to friend self.Acceptance criteria- Friends/favorites system is fully specified.\n\nIssue type: Story\nParent: SYN-10 — SYN | Profile, friends and administrative operations\nLabels: friends, mobile-spec, social, story, SYN",
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
      "id": "jira_syn_45",
      "key": "SYN-45",
      "summary": "SYN | Specify account deletion and security confirmation workflow",
      "description": "h1. ObjectiveDescribe the irreversible account deletion journey and the associated audit trail.h1. Primary actors* Registered user deleting own account.h1. Functional scope* Delete-account flow must include:** low-emphasis entry point at bottom of profile;** explicit warning copy;** confirmation step;** backend deletion or anonymization policy;** session termination after completion.* account_deletions audit record must capture deletion metadata required by product/legal policy.h1. UI / wireframe requirements* Delete-account card must be visually subordinate to normal profile cards.* Destructive CTA, confirmation dialog and final irreversible confirmation wording must be specified separately.* Success state must clearly explain that the account is deleted/signed out.h1. Backend / integration requirements* Document account_deletions fields and when they are written.* Document data cleanup scope:** profile;** votes;** created events or ownership reassignment policy;** friendships/favorites;** auth account.* Define whether hard delete or soft/anonymized delete is used per table.h1. Edge cases and non-functional requirements* Deletion must fail safely if dependent cleanup cannot complete.* Active guest sessions tied to the user after upgrade must also be invalidated.* Reauthentication may be required before deletion; if so, specify it.h1. Acceptance criteria* Deletion flow is sufficiently detailed for secure implementation and auditability.SYN | Specify account deletion and security confirmation workflowPurposeDefine secure account deletion from profile.Functional scope- Document placement at bottom of profile and confirmation flow.UI / interaction requirements- Deletion must be low-emphasis until intentionally reached.- Confirmation must clearly communicate irreversibility and effects.Wireframe / layout notes- Specify confirmation wording, optional re-auth and post-delete landing state.Backend / platform-neutral technical requirements- Deletion endpoint must be authenticated, audited and cascade/retain data per policy.State model / edge cases- Guest user.- Admin account restrictions if any.Acceptance criteria- Deletion flow is safe and implementable.\n\nIssue type: Story\nParent: SYN-10 — SYN | Profile, friends and administrative operations\nLabels: account, mobile-spec, security, story, SYN",
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
      "id": "jira_syn_46",
      "key": "SYN-46",
      "summary": "SYN | Specify admin dashboard, admin-users and admin-events capabilities",
      "description": "h1. ObjectiveDocument the administrative screens and management operations available only to privileged users.h1. Primary actors* Admin user.h1. Functional scope* Admin module must include:** admin dashboard entry;** user management view;** event management view.* Capabilities to specify:** browse/filter/search users;** inspect user status and temporary flags;** browse/filter/search events;** inspect event ownership, participant counts, active/inactive state, decided_date and deadlines;** any admin remediation or destructive actions currently supported or intentionally excluded.h1. UI / wireframe requirements* Admin IA must define tab or sub-navigation between dashboard, users and events.* Large data sets require searchable/filterable tables or list views.* Destructive admin actions require separate confirmations and audit expectations.h1. Backend / integration requirements* Document admin authorization gate and role claim.* Define admin query endpoints or filters over existing tables.* If admin actions mutate user/event state, document audit requirements.h1. Edge cases and non-functional requirements* Non-admin users must never see or deep-link into admin successfully.* Sensitive user data exposure in admin views must be minimised and documented.h1. Acceptance criteria* Admin surface is sufficiently specified for native/web parity even if some actions are read-only in the first implementation.SYN | Specify admin dashboard, admin-users and admin-events capabilitiesPurposeDefine admin-only operational surfaces.Functional scope- Document admin navigation and list/detail surfaces.UI / interaction requirements- Admin dashboard, users and events views must be restricted.- Admin can inspect health/summary metrics, user details and event details.Wireframe / layout notes- Specify filter sets, sort sets and bulk action boundaries.Backend / platform-neutral technical requirements- Admin APIs require role authorization and audit.State model / edge cases- No data.- Large result sets.Acceptance criteria- Admin module is implementable without web code.\n\nIssue type: Story\nParent: SYN-10 — SYN | Profile, friends and administrative operations\nLabels: admin, mobile-spec, operations, story, SYN",
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
      "id": "jira_syn_47",
      "key": "SYN-47",
      "summary": "SYN | Specify canonical domain model and persistence boundaries for events, memberships, votes, invites, friendships and notifications",
      "description": "SYN | Specify canonical domain model and persistence boundaries for events, memberships, votes, invites, friendships and notificationsPurposeDefine the shared domain vocabulary and entity model so every platform and service uses the same object boundaries, identifiers and lifecycle fields.Functional scope- Define entities: User, GuestIdentity, Session, Event, EventMembership, InviteLink, Vote, PersonalAvailabilityVote, FriendRequest/Friendship, Notification, AuditEvent.- For each entity define required fields, optional fields, ownership, timestamps, soft-delete behavior and indexing needs.- Define derived projections such as ranking row, day detail aggregate and unread notification count.UI / interaction requirements- No UI should invent fields not present in the domain model.- Every displayed badge, chip and counter must map to a defined entity field or derived projection.Wireframe / layout notes- Document serialization rules for date/time, nullable fields and enums.Backend / platform-neutral technical requirements- Provide logical entity-relationship diagram notes.- List which screens read/write each entity.State model / edge cases- Clarify what survives account deletion, event deletion and guest upgrade.- Clarify difference between event vote and personal availability vote.Acceptance criteria- All downstream API stories can reference this as the source of truth for entities.\n\nIssue type: Story\nParent: SYN-4 — SYN | App shell, navigation and design system\nLabels: data-model, mobile-spec, SYN",
      "labels": [
        "data-model",
        "mobile-spec",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-47",
      "source": "file-import"
    },
    {
      "id": "jira_syn_48",
      "key": "SYN-48",
      "summary": "SYN | Specify API contract catalog and error-code taxonomy",
      "description": "SYN | Specify API contract catalog and error-code taxonomyPurposeDefine the backend contract inventory and a unified error model for all clients.Functional scope- Catalog endpoints/actions with request schema, response schema, auth requirement and side effects.- Define shared error envelope and per-feature business error codes.- Define pagination/sorting conventions and optimistic concurrency rules if any.UI / interaction requirements- Every user action must map to a named command/query.- UI copy and branching must be driven by stable error codes, not raw server text.Wireframe / layout notes- Document transport-agnostic rules so REST, GraphQL or RPC can all implement the same semantics.Backend / platform-neutral technical requirements- Provide reference tables rather than implementation-language-specific stubs.State model / edge cases- Network failure vs business rule failure must be separate.Acceptance criteria- A backend can be reimplemented from the catalog without web client code.\n\nIssue type: Story\nParent: SYN-4 — SYN | App shell, navigation and design system\nLabels: api, mobile-spec, SYN",
      "labels": [
        "api",
        "mobile-spec",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-48",
      "source": "file-import"
    },
    {
      "id": "jira_syn_49",
      "key": "SYN-49",
      "summary": "SYN | Specify app shell state machines and transition rules",
      "description": "SYN | Specify app shell state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by App shell.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.\n\nIssue type: Story\nParent: SYN-4 — SYN | App shell, navigation and design system\nLabels: mobile-spec, shell, state-machine, SYN",
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
      "id": "jira_syn_50",
      "key": "SYN-50",
      "summary": "SYN | Specify app shell wireframes, component anatomy and responsive layout notes",
      "description": "SYN | Specify app shell wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for App shell.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.\n\nIssue type: Story\nParent: SYN-4 — SYN | App shell, navigation and design system\nLabels: mobile-spec, shell, SYN, wireframe",
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
      "id": "jira_syn_51",
      "key": "SYN-51",
      "summary": "SYN | Specify identity state machines and transition rules",
      "description": "SYN | Specify identity state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Identity.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.\n\nIssue type: Story\nParent: SYN-5 — SYN | Authentication, identity and guest access\nLabels: auth, mobile-spec, state-machine, SYN",
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
      "id": "jira_syn_52",
      "key": "SYN-52",
      "summary": "SYN | Specify identity wireframes, component anatomy and responsive layout notes",
      "description": "SYN | Specify identity wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Identity.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.\n\nIssue type: Story\nParent: SYN-5 — SYN | Authentication, identity and guest access\nLabels: auth, mobile-spec, SYN, wireframe",
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
      "id": "jira_syn_53",
      "key": "SYN-53",
      "summary": "SYN | Specify event lifecycle state machines and transition rules",
      "description": "SYN | Specify event lifecycle state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Event lifecycle.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.\n\nIssue type: Story\nParent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing\nLabels: events, mobile-spec, state-machine, SYN",
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
      "id": "jira_syn_54",
      "key": "SYN-54",
      "summary": "SYN | Specify event lifecycle wireframes, component anatomy and responsive layout notes",
      "description": "SYN | Specify event lifecycle wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Event lifecycle.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.\n\nIssue type: Story\nParent: SYN-6 — SYN | Event calendar lifecycle, templates and sharing\nLabels: events, mobile-spec, SYN, wireframe",
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
      "id": "jira_syn_55",
      "key": "SYN-55",
      "summary": "SYN | Specify voting calendar state machines and transition rules",
      "description": "SYN | Specify voting calendar state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Voting calendar.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.\n\nIssue type: Story\nParent: SYN-7 — SYN | Voting calendar, day details and batch interactions\nLabels: calendar, mobile-spec, state-machine, SYN",
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
      "id": "jira_syn_56",
      "key": "SYN-56",
      "summary": "SYN | Specify voting calendar wireframes, component anatomy and responsive layout notes",
      "description": "SYN | Specify voting calendar wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Voting calendar.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.\n\nIssue type: Story\nParent: SYN-7 — SYN | Voting calendar, day details and batch interactions\nLabels: calendar, mobile-spec, SYN, wireframe",
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
      "id": "jira_syn_57",
      "key": "SYN-57",
      "summary": "SYN | Specify ranking and notifications state machines and transition rules",
      "description": "SYN | Specify ranking and notifications state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Ranking and notifications.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.\n\nIssue type: Story\nParent: SYN-8 — SYN | Ranking, pinned day and notifications\nLabels: mobile-spec, notifications, state-machine, SYN",
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
      "id": "jira_syn_58",
      "key": "SYN-58",
      "summary": "SYN | Specify ranking and notifications wireframes, component anatomy and responsive layout notes",
      "description": "SYN | Specify ranking and notifications wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Ranking and notifications.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.\n\nIssue type: Story\nParent: SYN-8 — SYN | Ranking, pinned day and notifications\nLabels: mobile-spec, notifications, SYN, wireframe",
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
      "id": "jira_syn_59",
      "key": "SYN-59",
      "summary": "SYN | Specify profile, friends and admin state machines and transition rules",
      "description": "SYN | Specify profile, friends and admin state machines and transition rulesPurposeDefine explicit state machines for the major flows covered by Profile, friends and admin.Functional scope- State machines must be representable as backend guards and client UI rules.- Each transition must list source actor, preconditions, writes and emitted side effects.UI / interaction requirements- Document visible state, hidden state, trigger, allowed transition and blocked transition.- Provide operator/user-visible messaging for blocked transitions.Wireframe / layout notes- State tables should be versionable and referenced by related tasks.Backend / platform-neutral technical requirements- Include state tables for the main entities/surfaces relevant to the epic.State model / edge cases- Terminal states, retry states and recoverable states must be distinguished.Acceptance criteria- No major behavior relies on undocumented implicit state.\n\nIssue type: Story\nParent: SYN-10 — SYN | Profile, friends and administrative operations\nLabels: mobile-spec, profile, state-machine, SYN",
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
      "id": "jira_syn_60",
      "key": "SYN-60",
      "summary": "SYN | Specify profile, friends and admin wireframes, component anatomy and responsive layout notes",
      "description": "SYN | Specify profile, friends and admin wireframes, component anatomy and responsive layout notesPurposeDocument screen-by-screen wireframe detail for Profile, friends and admin.Functional scope- Layout notes must be platform-neutral and driven by logical constraints rather than CSS implementation.UI / interaction requirements- Each major screen or modal must list section order, primary CTA, secondary CTA and destructive CTA placement.- Document safe-area behavior, capped heights, internal scrolling and keyboard overlap handling where relevant.Wireframe / layout notes- Provide one subsection per screen or overlay.Backend / platform-neutral technical requirements- Include component-level anatomy and spacing relationships in narrative form suitable for rebuild on any stack.State model / edge cases- Small phone, large phone, tablet and wide layouts if needed.Acceptance criteria- Designers and engineers can rebuild screens from the narrative wireframe spec.\n\nIssue type: Story\nParent: SYN-10 — SYN | Profile, friends and administrative operations\nLabels: mobile-spec, profile, SYN, wireframe",
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
      "id": "jira_syn_61",
      "key": "SYN-61",
      "summary": "SYN | Specify analytics event catalog, naming rules and product funnels",
      "description": "SYN | Specify analytics event catalog, naming rules and product funnelsPurposeDefine all analytics events needed to observe the rebuilt product consistently across platforms.Functional scope- Document event names, required properties, optional properties and privacy constraints.- Define client-side vs server-side event emission ownership.UI / interaction requirements- Every screen view, key CTA, destructive action and recovery path must emit a named analytics event.- Funnel definitions must cover auth conversion, event creation, invite sharing, join success, voting completion and pinning.Wireframe / layout notes- Specify deduplication rules for repeated opens/closes and idempotent events.Backend / platform-neutral technical requirements- Provide funnel tables and event-property dictionaries.State model / edge cases- Guest flows and registered flows must be distinguishable without storing prohibited personal data.Acceptance criteria- Analytics can be reimplemented on any stack with consistent semantics.\n\nIssue type: Story\nParent: SYN-4 — SYN | App shell, navigation and design system\nLabels: analytics, mobile-spec, SYN",
      "labels": [
        "analytics",
        "mobile-spec",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-61",
      "source": "file-import"
    },
    {
      "id": "jira_syn_62",
      "key": "SYN-62",
      "summary": "SYN | Specify accessibility, localization and content rules",
      "description": "SYN | Specify accessibility, localization and content rulesPurposeEnsure the rebuilt product is operable, readable and localizable across platforms.Functional scope- Specify date/time localization strategy, timezone handling and locale fallback.- Specify content length constraints and truncation/wrapping policy.UI / interaction requirements- Define minimum touch targets, focus order, semantics/labels, screen-reader text and dynamic type handling.- Document copy placeholders and localization requirements for all user-facing templates.Wireframe / layout notes- List all hard-coded copy areas that must be localized.Backend / platform-neutral technical requirements- Provide accessibility notes for dialogs, calendars, toggles, chips and notifications.State model / edge cases- Long localized strings, small screens and assistive technologies.Acceptance criteria- Accessibility and localization are first-class implementation requirements, not afterthoughts.\n\nIssue type: Story\nParent: SYN-4 — SYN | App shell, navigation and design system\nLabels: a11y, i18n, mobile-spec, SYN",
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
      "id": "jira_syn_63",
      "key": "SYN-63",
      "summary": "SYN | Specify security, privacy, audit logging and rate limiting",
      "description": "SYN | Specify security, privacy, audit logging and rate limitingPurposeDefine cross-cutting protection requirements for identity, invitations, votes and admin operations.Functional scope- Document audit events, retention expectations, abuse limits and rate limiting for auth and sharing endpoints.- Define what participant identity details can be shown in day details and notifications.UI / interaction requirements- Sensitive actions must require authenticated authorization.- User-visible privacy boundaries for guest/registered/admin data exposure must be explicit.Wireframe / layout notes- Specify PII handling, logging redaction and abuse detection hooks.Backend / platform-neutral technical requirements- Provide operation-by-operation security notes.State model / edge cases- Invite abuse, brute-force login, repeated request spam and stale tokens.Acceptance criteria- Security-sensitive behavior can be implemented and reviewed against a written spec.\n\nIssue type: Story\nParent: SYN-5 — SYN | Authentication, identity and guest access\nLabels: mobile-spec, security, SYN",
      "labels": [
        "mobile-spec",
        "security",
        "SYN"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-63",
      "source": "file-import"
    },
    {
      "id": "jira_syn_64",
      "key": "SYN-64",
      "summary": "SYN | Task | Build authoritative screen inventory and route matrix",
      "description": "h1. Objective\n\nProduce the authoritative list of screens and overlays for the product.\n\nh1. Deliverables\n\n* Table of route/screen identifiers, ownership, actor access, trigger source and return target.\n* Overlay launch table including create-event, share, day-details, notifications, pin-day and event-unavailable surfaces.\n* History behavior column: replace, push, dismiss-to-parent.\n\nh1. Technical notes\n\n* Do not describe React components as the source of truth; describe user-visible screens and state transitions.\n* Identify which screens require preloaded event data, profile data or token validation before render.\n\nIssue type: Subtask\nParent: SYN-24 — SYN | Define screen map, route guards and deep-link behavior\nLabels: mobile-spec, navigation, SYN, task",
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
      "id": "jira_syn_65",
      "key": "SYN-65",
      "summary": "SYN | Task | Specify invite, auth callback and password-reset deep links",
      "description": "h1. Objective\n\nDefine the deep-link contract for invite-based participation and identity recovery.\n\nh1. Functional requirements\n\n* Map URL inputs, required query params, validation sequence and outcome screens.\n* Preserve redirect target after successful login, registration or activation.\n* Define behavior for stale, malformed or already-used links.\n\nh1. Backend requirements\n\n* Identify server responses and local state changes needed for each deep-link branch.\n* Define analytics events for invite open, invite rejection, join success and activation completion.\n\nIssue type: Subtask\nParent: SYN-24 — SYN | Define screen map, route guards and deep-link behavior\nLabels: deep-link, mobile-spec, navigation, SYN, task",
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
      "id": "jira_syn_66",
      "key": "SYN-66",
      "summary": "SYN | Task | Specify global loading, empty and error shell states",
      "description": "h1. Objective\n\nStandardize application-level skeletons, retries and blocking states.\n\nh1. Scope\n\n* Startup spinner / bootstrap blocking state.\n* Protected-route unauthorized redirect state.\n* Event-deleted / unavailable blocking modal.\n* Retry pattern for fetch failures in main workspace, profile and admin.\n\nh1. UI notes\n\n* Every blocking state must state headline, body copy, primary CTA and secondary CTA.\n* Empty and error states must be defined for desktop and mobile layouts separately where the container differs.\n\nIssue type: Subtask\nParent: SYN-24 — SYN | Define screen map, route guards and deep-link behavior\nLabels: app-shell, mobile-spec, SYN, task, ux",
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
      "id": "jira_syn_67",
      "key": "SYN-67",
      "summary": "SYN | Task | Create token catalog for color, typography, spacing and elevation",
      "description": "SYN | Task | Create token catalog for color, typography, spacing and elevation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nProduce a token table consumable by any client platform.\n\nh1. Deliverables\n\n* Semantic token names, usage intent and fallback mapping.\n* Numeric scale for spacing, radius, border widths and shadow/elevation.\n* Typography table with font families, sizes, weights, line heights and letter spacing.\n\nh1. Constraints\n\n* Token names must be semantic and platform-neutral.\n* Include accessibility notes for contrast-sensitive tokens.\n\nIssue type: Subtask\nParent: SYN-25 — SYN | Define design tokens, themes and reusable UI primitives\nLabels: design-system, mobile-spec, SYN, task, tokens",
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
      "id": "jira_syn_68",
      "key": "SYN-68",
      "summary": "SYN | Task | Define reusable component anatomy and state matrix",
      "description": "SYN | Task | Define reusable component anatomy and state matrix\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nSpecify how each shared control is composed and how it behaves in each state.\n\nh1. Scope\n\n* Buttons and pills including vote selectors.\n* Form controls including validation, helper text and character counter placement.\n* Cards, dialogs, sheets and scrollable panels.\n* Notification rows, ranking rows and share-option tiles.\n\nh1. Acceptance\n\n* Each primitive has a normative anatomy section and a state transition table.\n\nIssue type: Subtask\nParent: SYN-25 — SYN | Define design tokens, themes and reusable UI primitives\nLabels: components, design-system, mobile-spec, SYN, task",
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
      "id": "jira_syn_69",
      "key": "SYN-69",
      "summary": "SYN | Task | Define responsive layout grid and breakpoint rules",
      "description": "SYN | Task | Define responsive layout grid and breakpoint rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nTranslate the product layout into breakpoint-independent rules.\n\nh1. Scope\n\n* Auth split layout and compact layout.\n* Main calendar workspace with calendar-first width priority.\n* Left/right auxiliary panels that shrink before calendar content is cropped.\n* Desktop dialog, mobile sheet and full-screen fallback rules.\n\nh1. Acceptance\n\n* A native or cross-platform team can derive the same component spacing and panel priority from the written rules.\n\nIssue type: Subtask\nParent: SYN-25 — SYN | Define design tokens, themes and reusable UI primitives\nLabels: layout, mobile-spec, responsive, SYN, task",
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
      "id": "jira_syn_70",
      "key": "SYN-70",
      "summary": "SYN | Task | Specify credential login and registration validation",
      "description": "SYN | Task | Specify email/password login and registration validation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the normative field-level behavior for login and registration.\n\nh1. Scope\n\n* Email and password field validation.\n* Display-name field for registration only.\n* Inline validation timing and submit-time validation.\n* Success, failure and throttling messages.\n\nh1. Backend contract\n\n* Required request and response fields for sign-in and sign-up.\n* Mapping of technical auth errors to user-facing error categories.\n\nIssue type: Subtask\nParent: SYN-26 — SYN | Specify login, registration, verification and forgot-password journeys\nLabels: auth, forms, mobile-spec, SYN, task",
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
      "id": "jira_syn_71",
      "key": "SYN-71",
      "summary": "SYN | Task | Specify Google OAuth sign-in and sign-up activation flow",
      "description": "SYN | Task | Specify Google OAuth sign-in and sign-up activation flow\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the exact activation and fallback behavior for Google sign-in / sign-up.\n\nh1. Scope\n\n* Entry from login screen and from registration screen.\n* First-time activation versus returning sign-in.\n* Account-already-exists and email-collision states.\n* Redirect continuation after OAuth completion.\n\nh1. Backend contract\n\n* Required identity payload on callback completion.\n* Mapping of OAuth/provider failures to recoverable UI states.\n\nIssue type: Subtask\nParent: SYN-26 — SYN | Specify login, registration, verification and forgot-password journeys\nLabels: auth, mobile-spec, oauth, SYN, task",
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
      "id": "jira_syn_72",
      "key": "SYN-72",
      "summary": "SYN | Task | Specify OTP verification, resend cooldown and recovery states",
      "description": "SYN | Task | Specify OTP verification, resend cooldown and recovery states\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nSpecify the verification-step behavior used after registration or invite-bound activation.\n\nh1. Scope\n\n* Code entry layout and masking rules.\n* Resend cooldown timer and disabled state.\n* Expired code, wrong code and attempt-limit responses.\n* Recovery path back to sign-in or restart activation.\n\nh1. Acceptance\n\n* The spec clearly defines when verification is required and when already-verified users bypass this screen.\n\nIssue type: Subtask\nParent: SYN-26 — SYN | Specify login, registration, verification and forgot-password journeys\nLabels: auth, mobile-spec, SYN, task, verification",
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
      "id": "jira_syn_73",
      "key": "SYN-73",
      "summary": "SYN | Task | Event template defaults specification",
      "description": "Define reusable event template and default-value behavior.\n\nIssue type: Subtask\nParent: SYN-29 — SYN | Specify event creation flow, templates and field validation",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/SYN-73",
      "source": "file-import"
    },
    {
      "id": "jira_syn_74",
      "key": "SYN-74",
      "summary": "SYN | Task | Temporary session lifecycle specification",
      "description": "Imported from the approved step-2 task list. Covers temporary session creation, restore, and invalidation behavior.\n\nIssue type: Subtask\nParent: SYN-27 — SYN | Specify temporary guest session model and guest-to-member upgrade",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/SYN-74",
      "source": "file-import"
    },
    {
      "id": "jira_syn_75",
      "key": "SYN-75",
      "summary": "SYN | Task | Guest route handling and inactivity logout specification",
      "description": "Imported from the approved step-2 task list. Covers inactivity logout and blocked-route handling for guest users.\n\nIssue type: Subtask\nParent: SYN-27 — SYN | Specify temporary guest session model and guest-to-member upgrade",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/SYN-75",
      "source": "file-import"
    },
    {
      "id": "jira_syn_76",
      "key": "SYN-76",
      "summary": "SYN | Task | Guest account upgrade and migration specification",
      "description": "Imported from the approved step-2 task list. Covers upgrade from guest participation to registered account and related data migration behavior.\n\nIssue type: Subtask\nParent: SYN-27 — SYN | Specify temporary guest session model and guest-to-member upgrade",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/SYN-76",
      "source": "file-import"
    },
    {
      "id": "jira_syn_77",
      "key": "SYN-77",
      "summary": "SYN | Task | Credential reset completion flow specification",
      "description": "Imported from the approved step-2 task list. Covers credential-reset request handling and reset completion screens.\n\nIssue type: Subtask\nParent: SYN-28 — SYN | Specify password reset and in-app password change flows",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/SYN-77",
      "source": "file-import"
    },
    {
      "id": "jira_syn_78",
      "key": "SYN-78",
      "summary": "SYN | Task | Specify profile-based password change card behavior",
      "description": "SYN | Task | Specify profile-based password change card behavior\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the in-profile credential-change surface and exact behavior.\n\nh1. Scope\n\n* Current password, new password and confirmation fields.\n* Strength rules, reuse prevention and mismatch handling.\n* Success feedback and session-security implications after change.\n\nh1. Acceptance\n\n* The spec distinguishes between local validation, server rejection and forced re-auth scenarios.\n\nIssue type: Subtask\nParent: SYN-28 — SYN | Specify password reset and in-app password change flows\nLabels: mobile-spec, password, profile, SYN, task",
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
      "id": "jira_syn_79",
      "key": "SYN-79",
      "summary": "SYN | Task | Specify create-event form validation, character limits and save rules",
      "description": "SYN | Task | Specify create-event form validation, character limits and save rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the create-event form rules with no ambiguity for client and backend teams.\n\nh1. Scope\n\n* Required and optional fields.\n* Character limits and counter behavior.\n* Save-button enabled / disabled conditions.\n* Draft loss prevention and navigation-away behavior if applicable.\n\nh1. Acceptance\n\n* The spec states every server-side and client-side validation condition and the user-facing error message category.\n\nIssue type: Subtask\nParent: SYN-29 — SYN | Specify event creation flow, templates and field validation\nLabels: events, mobile-spec, SYN, task, validation",
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
      "id": "jira_syn_80",
      "key": "SYN-80",
      "summary": "SYN | Task | Specify mutable vs immutable event fields after creation",
      "description": "SYN | Task | Specify mutable vs immutable event fields after creation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine which event properties may still be edited after creation and under which conditions.\n\nh1. Scope\n\n* Editable versus locked fields before and after participants vote.\n* Deadline and decided-state effects on editability.\n* UX for disabled fields and attempted edits.\n\nh1. Acceptance\n\n* The spec resolves every field to mutable, conditionally mutable or immutable status.\n\nIssue type: Subtask\nParent: SYN-30 — SYN | Specify event editing, deletion, restart and state transitions\nLabels: edit, events, mobile-spec, SYN, task",
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
      "id": "jira_syn_81",
      "key": "SYN-81",
      "summary": "SYN | Task | Specify event deletion, participant impact and restart-voting operation",
      "description": "SYN | Task | Specify event deletion, participant impact and restart-voting operation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine deletion and voting restart operations together with downstream effects.\n\nh1. Scope\n\n* Creator confirmation flow and safeguards.\n* Participant notification and access changes after deletion.\n* Restart-voting operation, preserved fields and reset fields.\n* Auditability and irreversible actions.\n\nh1. Acceptance\n\n* The spec fully defines data, notifications and UI consequences for both operations.\n\nIssue type: Subtask\nParent: SYN-30 — SYN | Specify event editing, deletion, restart and state transitions\nLabels: delete, events, mobile-spec, restart, SYN, task",
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
      "id": "jira_syn_82",
      "key": "SYN-82",
      "summary": "SYN | Task | Event list ordering and restore specification",
      "description": "Imported from the approved step-2 task list. Covers event list ordering, sorting, and restore behavior.\n\nIssue type: Subtask\nParent: SYN-31 — SYN | Specify event selector, default event and active/inactive visibility",
      "labels": [],
      "url": "https://hobbeast.atlassian.net/browse/SYN-82",
      "source": "file-import"
    },
    {
      "id": "jira_syn_83",
      "key": "SYN-83",
      "summary": "SYN | Task | Specify selector UI states and empty-state behavior",
      "description": "SYN | Task | Specify selector UI states and empty-state behavior\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the event-selector visual states and user guidance behavior.\n\nh1. Scope\n\n* No events, no access, loading and partial-data states.\n* Placeholder copy and CTA behavior.\n* Selected, hovered, focused and disabled row behavior if applicable.\n\nh1. Acceptance\n\n* The selector presents the same state hierarchy and fallbacks across clients.\n\nIssue type: Subtask\nParent: SYN-31 — SYN | Specify event selector, default event and active/inactive visibility\nLabels: events, mobile-spec, selector, SYN, task, ui",
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
      "id": "jira_syn_84",
      "key": "SYN-84",
      "summary": "SYN | Task | Specify date-picker behavior for start/end/deadline fields",
      "description": "SYN | Task | Specify date-picker behavior for start/end/deadline fields\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine all picker rules for event start, end and decision deadline fields.\n\nh1. Scope\n\n* Allowed ranges and relative ordering constraints.\n* Time-zone / locale presentation assumptions if applicable.\n* Same-day, overnight and invalid-range handling.\n* Manual entry versus picker selection behavior.\n\nh1. Acceptance\n\n* The spec yields the same allowed/blocked date combinations across clients.\n\nIssue type: Subtask\nParent: SYN-29 — SYN | Specify event creation flow, templates and field validation\nLabels: date-picker, events, mobile-spec, SYN, task",
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
      "id": "jira_syn_85",
      "key": "SYN-85",
      "summary": "SYN | Task | Specify invite-token schema, lifecycle and consumption rules",
      "description": "SYN | Task | Specify invite-token schema, lifecycle and consumption rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how share tokens are created, validated, incremented and revoked.\n\nh1. Scope\n\n* Token uniqueness, expiry, use-count and max-use semantics.\n* Access checks for creator and participant-generated links.\n* Anonymous-join flag behavior.\n\nh1. Acceptance\n\n* Backend teams can implement a stable token lifecycle without web-code dependency.\n\nIssue type: Subtask\nParent: SYN-32 — SYN | Specify share-link generation, management and distribution\nLabels: backend, invite, mobile-spec, SYN, task",
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
      "id": "jira_syn_86",
      "key": "SYN-86",
      "summary": "SYN | Task | Specify share dialog content, per-link actions and grouped channel UX",
      "description": "SYN | Task | Specify share dialog content, per-link actions and grouped channel UX\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the share dialog UI in detail.\n\nh1. Scope\n\n* Mode switcher, create-link CTA and active-link cards.\n* Copy, revoke and share actions.\n* Text snippet generation and grouped social channels.\n\nh1. Acceptance\n\n* The interaction model is complete for desktop and mobile.\n\nIssue type: Subtask\nParent: SYN-32 — SYN | Specify share-link generation, management and distribution\nLabels: invite, mobile-spec, SYN, task, ui",
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
      "id": "jira_syn_87",
      "key": "SYN-87",
      "summary": "SYN | Task | Specify creator-vs-participant sharing permission rules",
      "description": "SYN | Task | Specify creator-vs-participant sharing permission rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nMake sharing authorization explicit.\n\nh1. Scope\n\n* Creator default capabilities.\n* Participant sharing when allow_participant_sharing is enabled.\n* Guest restrictions.\n* Server-side enforcement and corresponding UI disable states.\n\nh1. Acceptance\n\n* Unauthorized sharing is impossible even with stale client state.\n\nIssue type: Subtask\nParent: SYN-32 — SYN | Specify share-link generation, management and distribution\nLabels: invite, mobile-spec, permissions, SYN, task",
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
      "id": "jira_syn_88",
      "key": "SYN-88",
      "summary": "SYN | Task | Specify join-event status matrix and outcome-specific CTAs",
      "description": "SYN | Task | Specify join-event status matrix and outcome-specific CTAs\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine all join-event outcomes and their exact copy/CTA structure.\n\nh1. Scope\n\n* Loading, invalid, expired, already-joined, success, auth-required and unavailable states.\n* Primary and secondary actions for each state.\n* Which states may auto-redirect and which require explicit confirmation.\n\nh1. Acceptance\n\n* The status matrix is complete and platform-neutral.\n\nIssue type: Subtask\nParent: SYN-33 — SYN | Specify invite join flow for registered and registration-free participants\nLabels: join-event, mobile-spec, SYN, task, ux",
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
      "id": "jira_syn_89",
      "key": "SYN-89",
      "summary": "SYN | Task | Specify guest join session creation and post-join continuation",
      "description": "SYN | Task | Specify guest join session creation and post-join continuation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the guest join backend and client continuation behavior.\n\nh1. Scope\n\n* Temporary identity creation.\n* Event participant record creation.\n* Redirect into event workspace.\n* Upgrade CTA availability after successful guest join.\n\nh1. Acceptance\n\n* The guest pathway is detailed enough for backend and native implementation.\n\nIssue type: Subtask\nParent: SYN-33 — SYN | Specify invite join flow for registered and registration-free participants\nLabels: backend, guest, join-event, mobile-spec, SYN, task",
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
      "id": "jira_syn_90",
      "key": "SYN-90",
      "summary": "SYN | Task | Specify join-event status matrix and outcome-specific CTAs",
      "description": "SYN | Task | Specify join-event status matrix and outcome-specific CTAs\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine all join-event outcomes and their exact copy/CTA structure.\n\nh1. Scope\n\n* Loading, invalid, expired, already-joined, success, auth-required and unavailable states.\n* Primary and secondary actions for each state.\n* Which states may auto-redirect and which require explicit confirmation.\n\nh1. Acceptance\n\n* The status matrix is complete and platform-neutral.\n\nIssue type: Subtask\nParent: SYN-33 — SYN | Specify invite join flow for registered and registration-free participants\nLabels: join-event, mobile-spec, SYN, task, ux",
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
      "id": "jira_syn_91",
      "key": "SYN-91",
      "summary": "SYN | Task | Specify guest join session creation and post-join continuation",
      "description": "SYN | Task | Specify guest join session creation and post-join continuation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the guest join backend and client continuation behavior.\n\nh1. Scope\n\n* Temporary identity creation.\n* Event participant record creation.\n* Redirect into event workspace.\n* Upgrade CTA availability after successful guest join.\n\nh1. Acceptance\n\n* The guest pathway is detailed enough for backend and native implementation.\n\nIssue type: Subtask\nParent: SYN-33 — SYN | Specify invite join flow for registered and registration-free participants\nLabels: backend, guest, join-event, mobile-spec, SYN, task",
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
      "id": "jira_syn_92",
      "key": "SYN-92",
      "summary": "SYN | Task | Specify month-grid generation, placeholders and navigation controls",
      "description": "SYN | Task | Specify month-grid generation, placeholders and navigation controls\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how visible days and placeholders are constructed for the calendar.\n\nh1. Scope\n\n* First-day offset and leading placeholder cells.\n* Month-to-month navigation when event spans multiple months.\n* Header composition and alignment rules.\n\nh1. Acceptance\n\n* Teams can generate the same visible calendar layout from the written spec.\n\nIssue type: Subtask\nParent: SYN-34 — SYN | Specify calendar grid rendering, month navigation and date eligibility\nLabels: calendar, layout, mobile-spec, SYN, task",
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
      "id": "jira_syn_93",
      "key": "SYN-93",
      "summary": "SYN | Task | Specify eligibility and disabled-state rules for each date",
      "description": "SYN | Task | Specify eligibility and disabled-state rules for each date\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nMake vote eligibility deterministic.\n\nh1. Scope\n\n* Start/end date boundaries.\n* Today/past-date constraints.\n* Decided-date and deadline locks.\n* Guest/participant restrictions if any.\n\nh1. Acceptance\n\n* All client interactions check the same eligibility truth table.\n\nIssue type: Subtask\nParent: SYN-34 — SYN | Specify calendar grid rendering, month navigation and date eligibility\nLabels: calendar, mobile-spec, rules, SYN, task",
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
      "id": "jira_syn_94",
      "key": "SYN-94",
      "summary": "SYN | Task | Specify month-grid generation, placeholders and navigation controls",
      "description": "SYN | Task | Specify month-grid generation, placeholders and navigation controls\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how visible days and placeholders are constructed for the calendar.\n\nh1. Scope\n\n* First-day offset and leading placeholder cells.\n* Month-to-month navigation when event spans multiple months.\n* Header composition and alignment rules.\n\nh1. Acceptance\n\n* Teams can generate the same visible calendar layout from the written spec.\n\nIssue type: Subtask\nParent: SYN-34 — SYN | Specify calendar grid rendering, month navigation and date eligibility\nLabels: calendar, layout, mobile-spec, SYN, task",
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
      "id": "jira_syn_95",
      "key": "SYN-95",
      "summary": "SYN | Task | Specify eligibility and disabled-state rules for each date",
      "description": "SYN | Task | Specify eligibility and disabled-state rules for each date\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nMake vote eligibility deterministic.\n\nh1. Scope\n\n* Start/end date boundaries.\n* Today/past-date constraints.\n* Decided-date and deadline locks.\n* Guest/participant restrictions if any.\n\nh1. Acceptance\n\n* All client interactions check the same eligibility truth table.\n\nIssue type: Subtask\nParent: SYN-34 — SYN | Specify calendar grid rendering, month navigation and date eligibility\nLabels: calendar, mobile-spec, rules, SYN, task",
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
      "id": "jira_syn_96",
      "key": "SYN-96",
      "summary": "SYN | Task | Specify responsive calendar sizing with calendar-first priority",
      "description": "SYN | Task | Specify responsive calendar sizing with calendar-first priority\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how the calendar retains full visibility across resolutions.\n\nh1. Scope\n\n* Side-panel shrink rules.\n* Minimum and preferred calendar width/height.\n* Breakpoint rules that prevent clipping or excessive whitespace.\n\nh1. Acceptance\n\n* The calendar remains fully visible while auxiliary panels resize around it.\n\nIssue type: Subtask\nParent: SYN-34 — SYN | Specify calendar grid rendering, month navigation and date eligibility\nLabels: calendar, mobile-spec, responsive, SYN, task",
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
      "id": "jira_syn_97",
      "key": "SYN-97",
      "summary": "SYN | Task | Specify vote-tap semantics and toggle/remove behavior",
      "description": "SYN | Task | Specify vote-tap semantics and toggle/remove behavior\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine exact state transitions for clicking/tapping a single day.\n\nh1. Scope\n\n* Apply selected mode to empty day.\n* Change existing day from one mode to another.\n* Remove vote when tapping same selected mode, if allowed.\n* Block mutations for frozen/ineligible days.\n\nh1. Acceptance\n\n* State transitions are unambiguous and parity-tested across platforms.\n\nIssue type: Subtask\nParent: SYN-35 — SYN | Specify single-day vote interactions, info icon and long-press details\nLabels: interaction, mobile-spec, SYN, task, voting",
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
      "id": "jira_syn_98",
      "key": "SYN-98",
      "summary": "SYN | Task | Specify info icon, long-press and detail-open interaction separation",
      "description": "SYN | Task | Specify info icon, long-press and detail-open interaction separation\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nEnsure read-only inspection does not conflict with voting interactions.\n\nh1. Scope\n\n* Separate hit areas and event handling.\n* Desktop click on info icon.\n* Mobile long-press behavior and threshold.\n* Read-only detail opening for frozen or past dates still within event range.\n\nh1. Acceptance\n\n* The rules explicitly prevent accidental vote mutation from detail access actions.\n\nIssue type: Subtask\nParent: SYN-35 — SYN | Specify single-day vote interactions, info icon and long-press details\nLabels: day-details, interaction, mobile-spec, SYN, task",
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
      "id": "jira_syn_99",
      "key": "SYN-99",
      "summary": "SYN | Task | Specify behavior after pinning, freeze and deadline lock",
      "description": "SYN | Task | Specify behavior after pinning, freeze and deadline lock\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how day interactions change once further voting is blocked.\n\nh1. Scope\n\n* Which actions remain available when decided_date exists.\n* Read-only detail access for pinned/non-pinned dates.\n* Visual affordances showing frozen state.\n\nh1. Acceptance\n\n* Post-pin behavior is complete and consistent with notification and ranking modules.\n\nIssue type: Subtask\nParent: SYN-35 — SYN | Specify single-day vote interactions, info icon and long-press details\nLabels: freeze, mobile-spec, SYN, task, voting",
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
      "id": "jira_syn_100",
      "key": "SYN-100",
      "summary": "SYN | Task | Specify touch/mouse drag range interaction and guard rules",
      "description": "SYN | Task | Specify touch/mouse drag range interaction and guard rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how range voting works with direct manipulation.\n\nh1. Scope\n\n* Pointer down, pointer move, pointer release lifecycle.\n* Which cells are affected and when duplicates are ignored.\n* Guard rules for disabled and out-of-range dates.\n\nh1. Acceptance\n\n* Touch and mouse follow the same eligibility matrix and produce the same result set.\n\nIssue type: Subtask\nParent: SYN-36 — SYN | Specify drag range voting and batch side-panel behavior\nLabels: batch-vote, drag, mobile-spec, SYN, task",
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
      "id": "jira_syn_101",
      "key": "SYN-101",
      "summary": "SYN | Task | Specify batch side panel controls, disabled state and clear operations",
      "description": "SYN | Task | Specify batch side panel controls, disabled state and clear operations\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the batch panel independently of the current web component.\n\nh1. Scope\n\n* Vote value selector, date fields and apply button rules.\n* Clear range and clear-all actions.\n* Disabled appearance when decided_date/deadline lock is active.\n\nh1. Acceptance\n\n* The panel behavior is fully reproducible on native or web clients.\n\nIssue type: Subtask\nParent: SYN-36 — SYN | Specify drag range voting and batch side-panel behavior\nLabels: batch-vote, mobile-spec, panel, SYN, task",
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
      "id": "jira_syn_102",
      "key": "SYN-102",
      "summary": "SYN | Task | Specify personal-availability copy restrictions into event voting",
      "description": "SYN | Task | Specify personal-availability copy restrictions into event voting\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the boundary between personal calendar data and event voting data.\n\nh1. Scope\n\n* Which personal-availability markings may be copied into an event.\n* Which markings are ignored or blocked.\n* How conflicts with decided dates, deadlines and event range are handled.\n\nh1. Acceptance\n\n* Users cannot accidentally copy unsupported or stale personal-calendar data into event voting.\n\nIssue type: Subtask\nParent: SYN-36 — SYN | Specify drag range voting and batch side-panel behavior\nLabels: batch-vote, mobile-spec, personal-calendar, SYN, task",
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
      "id": "jira_syn_103",
      "key": "SYN-103",
      "summary": "SYN | Task | Specify day-details payload, counts and participant-row anatomy",
      "description": "SYN | Task | Specify day-details payload, counts and participant-row anatomy\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the read-only information model shown when opening day details.\n\nh1. Scope\n\n* Date header and summary counts.\n* Participant-row fields including name, vote type and status indicators.\n* Pagination/virtualization assumptions if a day has many participants.\n\nh1. Acceptance\n\n* Backend payload and row anatomy are complete enough for native or web implementation.\n\nIssue type: Subtask\nParent: SYN-37 — SYN | Specify day-details content model and participant social actions\nLabels: data, day-details, mobile-spec, SYN, task",
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
      "id": "jira_syn_104",
      "key": "SYN-104",
      "summary": "SYN | Task | Specify friend-request and favorite actions from day-details rows",
      "description": "SYN | Task | Specify friend-request and favorite actions from day-details rows\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine social actions initiated from day-details rows.\n\nh1. Scope\n\n* Add/remove favorite from a participant row.\n* Send friend request, pending-request state and already-friends state.\n* Visibility and disable rules for self rows, guest rows or unsupported identities.\n\nh1. Acceptance\n\n* The row-action model is fully specified and consistent with profile/friends modules.\n\nIssue type: Subtask\nParent: SYN-37 — SYN | Specify day-details content model and participant social actions\nLabels: day-details, friends, mobile-spec, SYN, task",
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
      "id": "jira_syn_105",
      "key": "SYN-105",
      "summary": "SYN | Task | Specify personal availability CRUD and month-navigation behavior",
      "description": "SYN | Task | Specify personal availability CRUD and month-navigation behavior\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the user’s private availability calendar behavior.\n\nh1. Scope\n\n* Create, update and remove personal availability markings.\n* Month navigation and persistence of edited state.\n* Offline/retry handling for save failures.\n\nh1. Acceptance\n\n* Personal availability can be implemented without relying on the current web calendar component.\n\nIssue type: Subtask\nParent: SYN-38 — SYN | Specify personal availability calendar and synchronization into events\nLabels: crud, mobile-spec, personal-calendar, SYN, task",
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
      "id": "jira_syn_106",
      "key": "SYN-106",
      "summary": "SYN | Task | Specify copy-to-event flow, target filtering and result messaging",
      "description": "SYN | Task | Specify copy-to-event flow, target filtering and result messaging\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how personal availability is projected into one or more events.\n\nh1. Scope\n\n* Target event selection and filtering rules.\n* Copy preview/result messaging.\n* Conflict and partial-success handling.\n\nh1. Acceptance\n\n* Copying behavior is deterministic and explainable to end users.\n\nIssue type: Subtask\nParent: SYN-38 — SYN | Specify personal availability calendar and synchronization into events\nLabels: copy, mobile-spec, personal-calendar, SYN, task",
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
      "id": "jira_syn_107",
      "key": "SYN-107",
      "summary": "SYN | Task | Specify decided/deadline exclusions for personal-availability projection",
      "description": "SYN | Task | Specify decided/deadline exclusions for personal-availability projection\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine which dates are excluded when copying personal availability into event context.\n\nh1. Scope\n\n* Exclusion of decided dates, closed voting ranges and expired deadlines.\n* Partial projection result behavior.\n* Result messaging and skipped-date explanation.\n\nh1. Acceptance\n\n* The projection rules match event-state restrictions exactly.\n\nIssue type: Subtask\nParent: SYN-38 — SYN | Specify personal availability calendar and synchronization into events\nLabels: mobile-spec, personal-calendar, rules, SYN, task",
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
      "id": "jira_syn_108",
      "key": "SYN-108",
      "summary": "SYN | Task | Specify score formula, tie ordering and exclusion of negative-only dates",
      "description": "SYN | Task | Specify score formula, tie ordering and exclusion of negative-only dates\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the ranking algorithm in a platform-neutral way.\n\nh1. Scope\n\n* Point values by vote type.\n* Ordering when scores tie.\n* Exclusion of dates that only have negative votes or are otherwise disqualified.\n\nh1. Acceptance\n\n* Any client or backend service can reproduce identical ranking output from the written rules.\n\nIssue type: Subtask\nParent: SYN-39 — SYN | Specify ranking computation, filtering and ranking-to-calendar navigation\nLabels: algorithm, mobile-spec, ranking, SYN, task",
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
      "id": "jira_syn_109",
      "key": "SYN-109",
      "summary": "SYN | Task | Specify ranking list UI, medals and empty-state behavior",
      "description": "SYN | Task | Specify ranking list UI, medals and empty-state behavior\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the ranking list as a reusable presentation pattern.\n\nh1. Scope\n\n* Row anatomy, score display and medal treatment for top positions.\n* Empty-state, loading and no-eligible-date states.\n* Desktop/mobile layout adjustments.\n\nh1. Acceptance\n\n* Teams can implement the same ranking surface without depending on existing web markup.\n\nIssue type: Subtask\nParent: SYN-39 — SYN | Specify ranking computation, filtering and ranking-to-calendar navigation\nLabels: mobile-spec, ranking, SYN, task, ui",
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
      "id": "jira_syn_110",
      "key": "SYN-110",
      "summary": "SYN | Task | Specify ranking-row click behavior and calendar focus outcome",
      "description": "SYN | Task | Specify ranking-row click behavior and calendar focus outcome\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine what happens when the user selects a ranked date row.\n\nh1. Scope\n\n* Calendar scroll/focus behavior.\n* Visual highlighting and synchronization with day details.\n* What happens for dates no longer eligible or already pinned.\n\nh1. Acceptance\n\n* Ranking-row selection always leads to the same focused calendar state.\n\nIssue type: Subtask\nParent: SYN-39 — SYN | Specify ranking computation, filtering and ranking-to-calendar navigation\nLabels: calendar-link, mobile-spec, ranking, SYN, task",
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
      "id": "jira_syn_111",
      "key": "SYN-111",
      "summary": "SYN | Task | Specify tie resolution dialog and default suggested date logic",
      "description": "SYN | Task | Specify tie resolution dialog and default suggested date logic\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how the user resolves tied highest-ranked dates.\n\nh1. Scope\n\n* Dialog entry conditions and suggested default date.\n* Row selection rules inside the dialog.\n* Cancel vs confirm outcomes and resulting decided_date.\n\nh1. Acceptance\n\n* Tie resolution is deterministic and consistent with the ranking algorithm.\n\nIssue type: Subtask\nParent: SYN-40 — SYN | Specify pinned-day selection, modification and unlock flow\nLabels: dialog, mobile-spec, pinned-day, SYN, task",
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
      "id": "jira_syn_112",
      "key": "SYN-112",
      "summary": "SYN | Task | Specify freeze behavior after pinning across calendar and batch controls",
      "description": "SYN | Task | Specify freeze behavior after pinning across calendar and batch controls\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the global frozen state after pinning/deciding a date.\n\nh1. Scope\n\n* Calendar cell behavior after a decision is made.\n* Batch-control disabling and explanatory messaging.\n* Read-only affordances that remain available.\n\nh1. Acceptance\n\n* Frozen behavior is consistent across calendar, ranking and batch-vote surfaces.\n\nIssue type: Subtask\nParent: SYN-40 — SYN | Specify pinned-day selection, modification and unlock flow\nLabels: freeze, mobile-spec, pinned-day, SYN, task",
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
      "id": "jira_syn_113",
      "key": "SYN-113",
      "summary": "SYN | Task | Specify decided-date unlock operation and re-enabled voting rules",
      "description": "SYN | Task | Specify decided-date unlock operation and re-enabled voting rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how a previously decided event is returned to editable voting mode.\n\nh1. Scope\n\n* Preconditions and permissions for unlock.\n* Which fields and controls become active again.\n* How ranking and notifications are recalculated or re-issued.\n\nh1. Acceptance\n\n* Unlock behavior is complete and consistent with decision/freeze semantics.\n\nIssue type: Subtask\nParent: SYN-40 — SYN | Specify pinned-day selection, modification and unlock flow\nLabels: mobile-spec, pinned-day, SYN, task, unlock",
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
      "id": "jira_syn_114",
      "key": "SYN-114",
      "summary": "SYN | Task | Specify notification data model, queries and unread counter semantics",
      "description": "SYN | Task | Specify notification data model, queries and unread counter semantics\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine notifications as a stable backend/client contract.\n\nh1. Scope\n\n* Notification entity schema and key fields.\n* Read/unread transitions and unread counter rules.\n* Query ordering, pagination and deduplication assumptions.\n\nh1. Acceptance\n\n* Clients can build the same notification center and badge counts from the written contract.\n\nIssue type: Subtask\nParent: SYN-41 — SYN | Specify notification center, unread state and row actions\nLabels: backend, mobile-spec, notifications, SYN, task",
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
      "id": "jira_syn_115",
      "key": "SYN-115",
      "summary": "SYN | Task | Specify notification panel layout, scroll behavior and row interactions",
      "description": "SYN | Task | Specify notification panel layout, scroll behavior and row interactions\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the notification panel as a reusable interaction surface.\n\nh1. Scope\n\n* Opening/closing behavior and anchor placement.\n* Scrolling, infinite load or pagination behavior.\n* Row click, mark-read timing and navigation outcome.\n\nh1. Acceptance\n\n* The notification surface is fully specified for desktop and mobile clients.\n\nIssue type: Subtask\nParent: SYN-41 — SYN | Specify notification center, unread state and row actions\nLabels: mobile-spec, notifications, SYN, task, ui",
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
      "id": "jira_syn_116",
      "key": "SYN-116",
      "summary": "SYN | Task | Specify notification panel layout, scroll behavior and row interactions",
      "description": "SYN | Task | Specify notification panel layout, scroll behavior and row interactions\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the notification panel as a reusable interaction surface.\n\nh1. Scope\n\n* Opening/closing behavior and anchor placement.\n* Scrolling, infinite load or pagination behavior.\n* Row click, mark-read timing and navigation outcome.\n\nh1. Acceptance\n\n* The notification surface is fully specified for desktop and mobile clients.\n\nIssue type: Subtask\nParent: SYN-41 — SYN | Specify notification center, unread state and row actions\nLabels: mobile-spec, notifications, SYN, task, ui",
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
      "id": "jira_syn_117",
      "key": "SYN-117",
      "summary": "SYN | Task | Specify guest-notification delivery parity and access scoping",
      "description": "SYN | Task | Specify guest-notification delivery parity and access scoping\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine which notifications temporary users can receive and read.\n\nh1. Scope\n\n* Delivery parity vs registered users.\n* Scope restrictions for guest-access sessions.\n* What happens after account upgrade or guest-session invalidation.\n\nh1. Acceptance\n\n* Notification access never exposes data outside the guest’s allowed event scope.\n\nIssue type: Subtask\nParent: SYN-41 — SYN | Specify notification center, unread state and row actions\nLabels: guest, mobile-spec, notifications, SYN, task",
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
      "id": "jira_syn_118",
      "key": "SYN-118",
      "summary": "SYN | Task | Specify pin, repin and unlock notification templates and recipients",
      "description": "SYN | Task | Specify pin, repin and unlock notification templates and recipients\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the notification templates tied to decision-state changes.\n\nh1. Scope\n\n* Pin/decide notification content and recipients.\n* Re-pin notification behavior if the decided date changes.\n* Unlock notification recipients and timing.\n\nh1. Acceptance\n\n* Notification content and delivery rules are complete for all decision transitions.\n\nIssue type: Subtask\nParent: SYN-42 — SYN | Specify event-driven notification triggers and payload content\nLabels: mobile-spec, notifications, pinned-day, SYN, task",
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
      "id": "jira_syn_119",
      "key": "SYN-119",
      "summary": "SYN | Task | Specify friendship and favorite-related notifications",
      "description": "SYN | Task | Specify friendship and favorite-related notifications\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine notifications triggered by social graph actions.\n\nh1. Scope\n\n* Friend request sent/accepted/declined states.\n* Favorite-related notifications if applicable.\n* Deduplication and user-preference impacts.\n\nh1. Acceptance\n\n* Social notifications are fully specified and consistent with the friends/favorites modules.\n\nIssue type: Subtask\nParent: SYN-42 — SYN | Specify event-driven notification triggers and payload content\nLabels: friends, mobile-spec, notifications, SYN, task",
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
      "id": "jira_syn_120",
      "key": "SYN-120",
      "summary": "SYN | Task | Specify event deletion and voting-restart notifications",
      "description": "SYN | Task | Specify event deletion and voting-restart notifications\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine notifications emitted when an event is deleted or voting is restarted.\n\nh1. Scope\n\n* Recipients and message templates for deletion.\n* Recipients and message templates for voting restart.\n* Suppression or deduplication behavior for close-together events.\n\nh1. Acceptance\n\n* Participants always receive the correct event-state change notifications.\n\nIssue type: Subtask\nParent: SYN-42 — SYN | Specify event-driven notification triggers and payload content\nLabels: event-lifecycle, mobile-spec, notifications, SYN, task",
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
      "id": "jira_syn_121",
      "key": "SYN-121",
      "summary": "SYN | Task | Specify profile header, account data fields and section ordering",
      "description": "SYN | Task | Specify profile header, account data fields and section ordering\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the information architecture of the profile screen.\n\nh1. Scope\n\n* Which account fields are visible and editable.\n* Section order and hierarchy.\n* Desktop/mobile layout rules.\n\nh1. Acceptance\n\n* Teams can recreate the profile IA consistently.\n\nIssue type: Subtask\nParent: SYN-43 — SYN | Specify profile page, account summary and user preferences\nLabels: mobile-spec, profile, SYN, task, ui",
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
      "id": "jira_syn_122",
      "key": "SYN-122",
      "summary": "SYN | Task | Specify profile preference storage and blocked temporary-user access",
      "description": "SYN | Task | Specify profile preference storage and blocked temporary-user access\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine preference persistence and profile access restrictions.\n\nh1. Scope\n\n* Temporary-user redirect behavior.\n* Preferences payload structure if settings are stored on profile.\n* Error and loading states for profile bootstrap.\n\nh1. Acceptance\n\n* Access rules and data contract are explicit.\n\nIssue type: Subtask\nParent: SYN-43 — SYN | Specify profile page, account summary and user preferences\nLabels: access, mobile-spec, profile, SYN, task",
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
      "id": "jira_syn_123",
      "key": "SYN-123",
      "summary": "SYN | Task | Specify friend search, request creation and pending-state transitions",
      "description": "SYN | Task | Specify friend search, request creation and pending-state transitions\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine discovery and request initiation.\n\nh1. Scope\n\n* Search by email rules and result handling.\n* Send-request validation and duplicate prevention.\n* Pending-state transitions and cancellation if supported.\n\nh1. Acceptance\n\n* Backend and mobile teams can implement the full friend-request lifecycle.\n\nIssue type: Subtask\nParent: SYN-44 — SYN | Specify friends, pending requests and favorites management\nLabels: friends, mobile-spec, search, SYN, task",
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
      "id": "jira_syn_124",
      "key": "SYN-124",
      "summary": "SYN | Task | Specify favorites list, favorite toggling and cross-surface consistency",
      "description": "SYN | Task | Specify favorites list, favorite toggling and cross-surface consistency\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine favorites as a stable feature across profile, day-details and other surfaces.\n\nh1. Scope\n\n* Favorite add/remove state transitions.\n* Favorites list ordering and empty states.\n* Cross-surface synchronization requirements.\n\nh1. Acceptance\n\n* Favorite state is always consistent regardless of where the mutation occurred.\n\nIssue type: Subtask\nParent: SYN-44 — SYN | Specify friends, pending requests and favorites management\nLabels: favorites, mobile-spec, state, SYN, task",
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
      "id": "jira_syn_125",
      "key": "SYN-125",
      "summary": "SYN | Task | Specify received-request handling and notification coupling",
      "description": "SYN | Task | Specify received-request handling and notification coupling\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the incoming-request management flow.\n\nh1. Scope\n\n* Accept/decline actions and resulting state transitions.\n* Notification side effects for each action.\n* Empty-state, loading and error behavior.\n\nh1. Acceptance\n\n* Request handling is complete and consistent with the notification model.\n\nIssue type: Subtask\nParent: SYN-44 — SYN | Specify friends, pending requests and favorites management\nLabels: friends, mobile-spec, requests, SYN, task",
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
      "id": "jira_syn_126",
      "key": "SYN-126",
      "summary": "SYN | Task | Specify delete-account UI, confirmation copy and placement",
      "description": "SYN | Task | Specify delete-account UI, confirmation copy and placement\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the visible deletion entry point and confirmation UX.\n\nh1. Scope\n\n* Placement inside profile/account area.\n* Confirmation copy and irreversible-action warning.\n* Loading, success and failure messaging.\n\nh1. Acceptance\n\n* Users clearly understand the consequence and the action is not triggered accidentally.\n\nIssue type: Subtask\nParent: SYN-45 — SYN | Specify account deletion and security confirmation workflow\nLabels: account-deletion, mobile-spec, SYN, task, ui",
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
      "id": "jira_syn_127",
      "key": "SYN-127",
      "summary": "SYN | Task | Specify deletion audit record and data-cleanup workflow",
      "description": "SYN | Task | Specify deletion audit record and data-cleanup workflow\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine what happens behind the delete-account action.\n\nh1. Scope\n\n* Audit fields recorded for deletion.\n* Cleanup / soft-delete behavior for events, votes, invitations and social graph edges.\n* Post-deletion session invalidation.\n\nh1. Acceptance\n\n* Backend deletion behavior is explicit and testable.\n\nIssue type: Subtask\nParent: SYN-45 — SYN | Specify account deletion and security confirmation workflow\nLabels: account-deletion, backend, mobile-spec, SYN, task",
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
      "id": "jira_syn_128",
      "key": "SYN-128",
      "summary": "SYN | Task | Specify admin dashboard navigation, summary metrics and empty states",
      "description": "SYN | Task | Specify admin dashboard navigation, summary metrics and empty states\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the high-level admin landing experience.\n\nh1. Scope\n\n* Admin navigation entry and guard rules.\n* Summary metrics/cards and their empty/loading states.\n* No-data and error-state behavior.\n\nh1. Acceptance\n\n* Admin landing behavior is explicit and reproducible on any client.\n\nIssue type: Subtask\nParent: SYN-46 — SYN | Specify admin dashboard, admin-users and admin-events capabilities\nLabels: admin, dashboard, mobile-spec, SYN, task",
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
      "id": "jira_syn_129",
      "key": "SYN-129",
      "summary": "SYN | Task | Specify admin user-management list, filters and detail fields",
      "description": "SYN | Task | Specify admin user-management list, filters and detail fields\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the admin user-management surface.\n\nh1. Scope\n\n* List columns, filters and pagination.\n* Detail drawer/page fields.\n* Empty-state, loading and permission-error behavior.\n\nh1. Acceptance\n\n* Admin teams can implement the same user-management surface on any client.\n\nIssue type: Subtask\nParent: SYN-46 — SYN | Specify admin dashboard, admin-users and admin-events capabilities\nLabels: admin, mobile-spec, SYN, task, users",
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
      "id": "jira_syn_130",
      "key": "SYN-130",
      "summary": "SYN | Task | Specify admin event-management list, filters and detail fields",
      "description": "SYN | Task | Specify admin event-management list, filters and detail fields\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the admin event-management surface.\n\nh1. Scope\n\n* List columns, filters and pagination.\n* Event detail fields and allowed admin actions.\n* Empty-state, loading and permission-error behavior.\n\nh1. Acceptance\n\n* Admin event operations are fully specified for backend and client teams.\n\nIssue type: Subtask\nParent: SYN-46 — SYN | Specify admin dashboard, admin-users and admin-events capabilities\nLabels: admin, events, mobile-spec, SYN, task",
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
      "id": "jira_syn_131",
      "key": "SYN-131",
      "summary": "SYN | Task | Define entity schemas, identifiers, timestamps and soft-delete behavior",
      "description": "SYN | Task | Define entity schemas, identifiers, timestamps and soft-delete behavior\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the foundational domain objects used by Syncfolk.\n\nh1. Scope\n\n* Entities such as user, temporary user, event, event participant, invitation/share token, vote, notification, friend request and favorite.\n* Stable identifiers, created/updated timestamps and deletion semantics.\n* Which records use hard delete vs soft delete.\n\nh1. Acceptance\n\n* The entity model is explicit enough for backend design and client contract generation.\n\nIssue type: Subtask\nParent: SYN-47 — SYN | Specify canonical domain model and persistence boundaries for events, memberships, votes, invites, friendships and notifications\nLabels: backend, entities, mobile-spec, SYN, task",
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
      "id": "jira_syn_132",
      "key": "SYN-132",
      "summary": "SYN | Task | Define cross-entity lifecycle relations and cascade rules",
      "description": "SYN | Task | Define cross-entity lifecycle relations and cascade rules\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine how domain objects affect each other over time.\n\nh1. Scope\n\n* Event deletion impact on votes, invitations, notifications and participant membership.\n* Account deletion impact on social graph and authored records.\n* Temporary-user upgrade/linking impact on identities and related records.\n\nh1. Acceptance\n\n* Lifecycle and cascade rules are explicit and consistent across the whole model.\n\nIssue type: Subtask\nParent: SYN-47 — SYN | Specify canonical domain model and persistence boundaries for events, memberships, votes, invites, friendships and notifications\nLabels: backend, lifecycle, mobile-spec, SYN, task",
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
      "id": "jira_syn_133",
      "key": "SYN-133",
      "summary": "SYN | Task | Define standard response envelope, pagination and mutation result patterns",
      "description": "SYN | Task | Define standard response envelope, pagination and mutation result patterns\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine a consistent API contract style across features.\n\nh1. Scope\n\n* Standard success/error envelope.\n* Cursor/page/limit patterns where lists are paginated.\n* Mutation result payload shape and optimistic-update compatibility.\n\nh1. Acceptance\n\n* API consumers can rely on a uniform contract style across modules.\n\nIssue type: Subtask\nParent: SYN-48 — SYN | Specify API contract catalog and error-code taxonomy\nLabels: api-contract, backend, mobile-spec, SYN, task",
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
      "id": "jira_syn_134",
      "key": "SYN-134",
      "summary": "SYN | Task | Define feature-specific error codes and client recovery actions",
      "description": "SYN | Task | Define feature-specific error codes and client recovery actions\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine stable error categories and recovery expectations per feature.\n\nh1. Scope\n\n* Auth/session errors.\n* Invite/join errors.\n* Voting/calendar errors.\n* Profile/friends/admin errors.\n\nh1. Acceptance\n\n* Every important backend failure has a known client recovery or user-facing fallback.\n\nIssue type: Subtask\nParent: SYN-48 — SYN | Specify API contract catalog and error-code taxonomy\nLabels: backend, errors, mobile-spec, SYN, task",
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
      "id": "jira_syn_135",
      "key": "SYN-135",
      "summary": "SYN | Task | Define app shell state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define app shell state diagrams, triggers and blocked transitions\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the state machine behind the app shell module.\n\nh1. Scope\n\n* Bootstrap, ready, empty, error and blocked states.\n* Triggers that move the shell between states.\n* Explicitly forbidden transitions.\n\nh1. Acceptance\n\n* Engineers can derive the same state diagram without inspecting web source code.\n\nIssue type: Subtask\nParent: SYN-49 — SYN | Specify app shell state machines and transition rules\nLabels: app-shell, mobile-spec, state-diagram, SYN, task",
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
      "id": "jira_syn_136",
      "key": "SYN-136",
      "summary": "SYN | Task | Define app shell screen-by-screen section order, CTA hierarchy and adaptive layout",
      "description": "SYN | Task | Define app shell screen-by-screen section order, CTA hierarchy and adaptive layout\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine normative wireframe ordering rules for the app shell module.\n\nh1. Scope\n\n* Section order per screen.\n* Primary/secondary CTA hierarchy.\n* Adaptive layout notes for mobile vs wider layouts.\n\nh1. Acceptance\n\n* Teams can recreate the app shell layouts consistently without relying on the current web source.\n\nIssue type: Subtask\nParent: SYN-50 — SYN | Specify app shell wireframes, component anatomy and responsive layout notes\nLabels: app-shell, mobile-spec, SYN, task, wireframe",
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
      "id": "jira_syn_137",
      "key": "SYN-137",
      "summary": "SYN | Task | Specify deletion audit record and data-cleanup workflow",
      "description": "SYN | Task | Specify deletion audit record and data-cleanup workflow\n\nImplementation objective\nDefine this implementation area in enough detail that frontend, backend and QA can build and verify it without relying on current web source code.\n\nDetailed requirements\n\n* Cover the exact user-visible behavior implied by the summary.\n* Describe controls, field states, validation messages, loading states, empty states and disabled states.\n* Describe phone and wide-layout behavior if the surface is responsive.\n\nTechnical specification\n\n* List the data fields required by the client and by the backend contract.\n* Define action inputs, outputs, business error codes and side effects.\n* Define analytics events, audit events and notification side effects if applicable.\n\nEdge cases / validation\n\n* Include recovery paths for network failure and business-rule failure.\n* Document whether guest users differ from registered users in this flow.\n\nAcceptance criteria\n\n* Acceptance criteria must be testable against the written spec alone.\n* Permission rules and chronology/date-time rules must be explicit.\n\nh1. Objective\n\nDefine the backend execution path for account deletion.\n\nh1. Scope\n\n* account_deletions audit write.\n* Entity cleanup/anonymization decisions.\n* Session invalidation and final redirect.\n\nh1. Acceptance\n\n* Backend implementation can proceed from this issue without reverse-engineering current behavior.\n\nIssue type: Subtask\nParent: SYN-45 — SYN | Specify account deletion and security confirmation workflow\nLabels: account, backend, mobile-spec, SYN, task",
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
      "id": "jira_syn_138",
      "key": "SYN-138",
      "summary": "SYN | Task | Define identity state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define identity state diagrams, triggers and blocked transitions\n\nImplementation objective\nCreate the detailed state-table appendix for this epic.\n\nDetailed requirements\n\n* List state name, entry trigger, exit trigger, visible UI treatment and guard.\n\nTechnical specification\n\n* Describe emitted audit/notification/analytics side effects per transition.\n\nAcceptance criteria\n\n* A developer can code finite-state logic directly from the table.\n\nIssue type: Subtask\nParent: SYN-51 — SYN | Specify identity state machines and transition rules\nLabels: auth, mobile-spec, state-machine, SYN",
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
      "id": "jira_syn_139",
      "key": "SYN-139",
      "summary": "SYN | Task | Define identity screen-by-screen section order, CTA hierarchy and adaptive layout",
      "description": "SYN | Task | Define identity screen-by-screen section order, CTA hierarchy and adaptive layout\n\nImplementation objective\nProduce the layout appendix for this epic.\n\nDetailed requirements\n\n* For each surface list header, body, footer, panel and modal region in display order.\n\nTechnical specification\n\n* Note required data blocks and placeholder states per region.\n\nAcceptance criteria\n\n* Design and engineering can create wireframes from the issue without reading current code.\n\nIssue type: Subtask\nParent: SYN-52 — SYN | Specify identity wireframes, component anatomy and responsive layout notes\nLabels: auth, mobile-spec, SYN, wireframe",
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
      "id": "jira_syn_140",
      "key": "SYN-140",
      "summary": "SYN | Task | Define event lifecycle state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define event lifecycle state diagrams, triggers and blocked transitions\n\nImplementation objective\nCreate the detailed state-table appendix for this epic.\n\nDetailed requirements\n\n* List state name, entry trigger, exit trigger, visible UI treatment and guard.\n\nTechnical specification\n\n* Describe emitted audit/notification/analytics side effects per transition.\n\nAcceptance criteria\n\n* A developer can code finite-state logic directly from the table.\n\nIssue type: Subtask\nParent: SYN-53 — SYN | Specify event lifecycle state machines and transition rules\nLabels: events, mobile-spec, state-machine, SYN",
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
      "id": "jira_syn_141",
      "key": "SYN-141",
      "summary": "SYN | Task | Define event lifecycle screen-by-screen section order, CTA hierarchy and adaptive layout",
      "description": "SYN | Task | Define event lifecycle screen-by-screen section order, CTA hierarchy and adaptive layout\n\nImplementation objective\nProduce the layout appendix for this epic.\n\nDetailed requirements\n\n* For each surface list header, body, footer, panel and modal region in display order.\n\nTechnical specification\n\n* Note required data blocks and placeholder states per region.\n\nAcceptance criteria\n\n* Design and engineering can create wireframes from the issue without reading current code.\n\nIssue type: Subtask\nParent: SYN-54 — SYN | Specify event lifecycle wireframes, component anatomy and responsive layout notes\nLabels: events, mobile-spec, SYN, wireframe",
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
      "id": "jira_syn_142",
      "key": "SYN-142",
      "summary": "SYN | Task | Define voting calendar state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define voting calendar state diagrams, triggers and blocked transitions\n\nImplementation objective\nCreate the detailed state-table appendix for this epic.\n\nDetailed requirements\n\n* List state name, entry trigger, exit trigger, visible UI treatment and guard.\n\nTechnical specification\n\n* Describe emitted audit/notification/analytics side effects per transition.\n\nAcceptance criteria\n\n* A developer can code finite-state logic directly from the table.\n\nIssue type: Subtask\nParent: SYN-55 — SYN | Specify voting calendar state machines and transition rules\nLabels: calendar, mobile-spec, state-machine, SYN",
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
      "id": "jira_syn_143",
      "key": "SYN-143",
      "summary": "SYN | Task | Define voting calendar screen-by-screen section order, CTA hierarchy and adaptive layout",
      "description": "SYN | Task | Define voting calendar screen-by-screen section order, CTA hierarchy and adaptive layout\n\nImplementation objective\nProduce the layout appendix for this epic.\n\nDetailed requirements\n\n* For each surface list header, body, footer, panel and modal region in display order.\n\nTechnical specification\n\n* Note required data blocks and placeholder states per region.\n\nAcceptance criteria\n\n* Design and engineering can create wireframes from the issue without reading current code.\n\nIssue type: Subtask\nParent: SYN-56 — SYN | Specify voting calendar wireframes, component anatomy and responsive layout notes\nLabels: calendar, mobile-spec, SYN, wireframe",
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
      "id": "jira_syn_144",
      "key": "SYN-144",
      "summary": "SYN | Task | Define ranking and notifications state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define ranking and notifications state diagrams, triggers and blocked transitions\n\nImplementation objective\nCreate the detailed state-table appendix for this epic.\n\nDetailed requirements\n\n* List state name, entry trigger, exit trigger, visible UI treatment and guard.\n\nTechnical specification\n\n* Describe emitted audit/notification/analytics side effects per transition.\n\nAcceptance criteria\n\n* A developer can code finite-state logic directly from the table.\n\nIssue type: Subtask\nParent: SYN-57 — SYN | Specify ranking and notifications state machines and transition rules\nLabels: mobile-spec, notifications, state-machine, SYN",
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
      "id": "jira_syn_145",
      "key": "SYN-145",
      "summary": "SYN | Task | Define ranking and notifications screen-by-screen section order, CTA hierarchy and adaptive layout",
      "description": "SYN | Task | Define ranking and notifications screen-by-screen section order, CTA hierarchy and adaptive layout\n\nImplementation objective\nProduce the layout appendix for this epic.\n\nDetailed requirements\n\n* For each surface list header, body, footer, panel and modal region in display order.\n\nTechnical specification\n\n* Note required data blocks and placeholder states per region.\n\nAcceptance criteria\n\n* Design and engineering can create wireframes from the issue without reading current code.\n\nIssue type: Subtask\nParent: SYN-58 — SYN | Specify ranking and notifications wireframes, component anatomy and responsive layout notes\nLabels: mobile-spec, notifications, SYN, wireframe",
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
      "id": "jira_syn_146",
      "key": "SYN-146",
      "summary": "SYN | Task | Define ranking and notifications state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define ranking and notifications state diagrams, triggers and blocked transitions\n\nImplementation objective\nCreate the detailed state-table appendix for this epic.\n\nDetailed requirements\n\n* List state name, entry trigger, exit trigger, visible UI treatment and guard.\n\nTechnical specification\n\n* Describe emitted audit/notification/analytics side effects per transition.\n\nAcceptance criteria\n\n* A developer can code finite-state logic directly from the table.\n\nIssue type: Subtask\nParent: SYN-57 — SYN | Specify ranking and notifications state machines and transition rules\nLabels: mobile-spec, notifications, state-machine, SYN",
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
      "id": "jira_syn_147",
      "key": "SYN-147",
      "summary": "SYN | Task | Define profile, friends and admin state diagrams, triggers and blocked transitions",
      "description": "SYN | Task | Define profile, friends and admin state diagrams, triggers and blocked transitions\n\nImplementation objective\nCreate the detailed state-table appendix for this epic.\n\nDetailed requirements\n\n* List state name, entry trigger, exit trigger, visible UI treatment and guard.\n\nTechnical specification\n\n* Describe emitted audit/notification/analytics side effects per transition.\n\nAcceptance criteria\n\n* A developer can code finite-state logic directly from the table.\n\nIssue type: Subtask\nParent: SYN-59 — SYN | Specify profile, friends and admin state machines and transition rules\nLabels: mobile-spec, profile, state-machine, SYN",
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
      "id": "jira_syn_148",
      "key": "SYN-148",
      "summary": "SYN | Task | Define profile, friends and admin screen-by-screen section order, CTA hierarchy and adaptive layout",
      "description": "SYN | Task | Define profile, friends and admin screen-by-screen section order, CTA hierarchy and adaptive layout\n\nImplementation objective\nProduce the layout appendix for this epic.\n\nDetailed requirements\n\n* For each surface list header, body, footer, panel and modal region in display order.\n\nTechnical specification\n\n* Note required data blocks and placeholder states per region.\n\nAcceptance criteria\n\n* Design and engineering can create wireframes from the issue without reading current code.\n\nIssue type: Subtask\nParent: SYN-60 — SYN | Specify profile, friends and admin wireframes, component anatomy and responsive layout notes\nLabels: mobile-spec, profile, SYN, wireframe",
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
      "id": "jira_syn_149",
      "key": "SYN-149",
      "summary": "ENT | Approval inbox, filters and bulk decisions",
      "description": "Duplicate of SYN-150. Keep SYN-150 as the active approval inbox story unless later consolidation chooses the other item.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: DUPLICATE, ENTERPRISE",
      "labels": [
        "DUPLICATE",
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-149",
      "source": "file-import"
    },
    {
      "id": "jira_syn_150",
      "key": "SYN-150",
      "summary": "ENT | Approval inbox, filters and bulk decisions",
      "description": "Approval worklist for enterprise leave requests.\n\nScope:\n\n* show pending, approved, rejected, cancelled, and expired requests in one admin inbox\n* filters by requester, team, role, date range, request type, and status\n* approve, reject, and comment from list and detail views\n* support bulk actions for low-risk cases where policy allows\n* show conflict reasons before final decision\n\nAcceptance criteria:\n\n* Owner and resourceAssistant can process requests from one inbox.\n* Filters are available on desktop and mobile.\n* Bulk decision flow is guarded and auditable.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-150",
      "source": "file-import"
    },
    {
      "id": "jira_syn_151",
      "key": "SYN-151",
      "summary": "ENT | Leave types, holidays and work pattern configuration",
      "description": "Enterprise configuration for leave types, holidays, and work patterns.\n\nScope:\n\n* define leave types such as vacation, sick leave, unpaid leave, and custom leave types\n* configure public holidays per workspace or location profile\n* configure working patterns and partial-day options\n* use these settings during request validation, calendar display, and exports\n\nAcceptance criteria:\n\n* Admins can manage leave types, holidays, and work patterns.\n* Validation uses configured values consistently.\n* Calendar and export outputs reflect configuration.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-151",
      "source": "file-import"
    },
    {
      "id": "jira_syn_152",
      "key": "SYN-152",
      "summary": "ENT | Approval chain, substitute approver and escalation rules",
      "description": "Enterprise approval chain, substitute approver, and escalation rules.\n\nScope:\n\n* configure one-step or multi-step approval chains\n* define substitute approvers for owner and resourceAssistant\n* configure escalation when requests stay unanswered too long\n* notify each actor at the correct stage\n* preserve final decision trace and acting user identity\n\nAcceptance criteria:\n\n* Enterprise workspaces support configurable approval chains.\n* Substitute approvers can act when the primary approver is unavailable.\n* Escalation rules notify the right users and keep audit history.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-152",
      "source": "file-import"
    },
    {
      "id": "jira_syn_153",
      "key": "SYN-153",
      "summary": "ENT | Conflict engine and validation messages for request submission",
      "description": "Conflict engine and validation messages for enterprise request submission.\n\nScope:\n\n* evaluate blocked dates, company leave dates, daily max-off limits, role coverage limits, holiday calendars, and work patterns before save or approval\n* classify conflicts as warning or blocking\n* return human-readable reasons and machine-readable codes\n* keep validation consistent across web, mobile, export, and API use cases\n\nAcceptance criteria:\n\n* Users see clear reasons when a request cannot proceed.\n* Validation results are consistent across all clients.\n* Engineers have stable error codes for integrations and automation.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-153",
      "source": "file-import"
    },
    {
      "id": "jira_syn_154",
      "key": "SYN-154",
      "summary": "ENT | Data model and API contract specification for enterprise leave planning",
      "description": "Data model and API contract specification for enterprise leave planning.\n\nScope:\n\n* define core entities: workspace, membership, role, business role, leave request, request decision, daily rule, template, export job, notification, audit event\n* define IDs, timestamps, status enums, and relation rules\n* define API contracts for create, update, approve, reject, cancel, list, export, and summary operations\n* define canonical field names separate from display labels\n\nAcceptance criteria:\n\n* Engineers can implement enterprise APIs from the documented contracts.\n* Mobile and web clients can share the same payload definitions.\n* Reporting and export features use the same canonical data model.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-154",
      "source": "file-import"
    },
    {
      "id": "jira_syn_155",
      "key": "SYN-155",
      "summary": "ENT | Permission matrix and visibility rules for enterprise calendars",
      "description": "Permission matrix and visibility rules for enterprise calendars.\n\nScope:\n\n* define what owner, resourceAssistant, member, and future read-only roles can see and do\n* define which leave details are visible to peers, managers, and admins\n* define export and API access permissions\n* define behavior for suspended, removed, and invited users\n\nAcceptance criteria:\n\n* All enterprise actions have an explicit role-based permission rule.\n* Visibility of leave details is documented and enforceable.\n* Engineers can implement server-side access control from this story.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-155",
      "source": "file-import"
    },
    {
      "id": "jira_syn_156",
      "key": "SYN-156",
      "summary": "ENT | Enterprise wireframes and responsive screen specification",
      "description": "Enterprise wireframes and responsive screen specification.\n\nScope:\n\n* define screen-by-screen layouts for desktop and mobile\n* define the enterprise workspace shell, approval inbox, member directory, rule editor, calendar, exports, and summary panel\n* define modal, drawer, and inline action behavior\n* define empty, loading, error, and no-permission states\n\nAcceptance criteria:\n\n* Designers and engineers can implement enterprise screens without reverse-engineering the consumer webapp.\n* Desktop and mobile variants are both documented.\n* Key interactions are described at wireframe level.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-156",
      "source": "file-import"
    },
    {
      "id": "jira_syn_157",
      "key": "SYN-157",
      "summary": "ENT | Reporting dashboard, staffing analytics and allocation signals",
      "description": "Reporting dashboard, staffing analytics, and allocation signals for enterprise mode.\n\nScope:\n\n* show leave trends, approval throughput, blocked-date usage, company leave usage, max-off breaches, and role coverage risk over time\n* provide team, role, and date filters\n* expose daily and weekly allocation risk indicators for managers\n* support drill-down from chart to affected dates and requests\n\nAcceptance criteria:\n\n* Enterprise users can analyze leave and staffing patterns without exporting first.\n* Analytics align with exported and API data.\n* Managers can identify upcoming coverage risks from the dashboard.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-157",
      "source": "file-import"
    },
    {
      "id": "jira_syn_158",
      "key": "SYN-158",
      "summary": "ENT | Spreadsheet import and migration from shared leave trackers",
      "description": "Spreadsheet import and migration from shared leave trackers.\n\nScope:\n\n* import leave-planning source data from spreadsheet uploads\n* map imported columns to enterprise entities such as member, date, leave type, status, and comment\n* validate imported data before commit\n* provide error report for rejected rows\n* support migration from shared spreadsheet processes into enterprise workspace data\n\nAcceptance criteria:\n\n* Admins can migrate spreadsheet-based leave planning into the enterprise workspace.\n* Invalid rows are reported clearly.\n* Imported data becomes available in calendar, approval, export, and reporting flows.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-158",
      "source": "file-import"
    },
    {
      "id": "jira_syn_159",
      "key": "SYN-159",
      "summary": "ENT | Notification rules for enterprise leave planning",
      "description": "Define enterprise notification rules.\n\nScope:\n\n* list notification events for invitations, leave request actions, approvals, rejections, escalations, rule conflicts, imports, exports, and membership changes\n* define recipients for each event\n* define unread and read behavior\n* define badge count and ordering rules\n* define desktop and mobile notification panel behavior\n\nAcceptance criteria:\n\n* Enterprise notification rules are documented.\n* Read and unread behavior is explicit.\n* Engineers can implement notifications consistently.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-159",
      "source": "file-import"
    },
    {
      "id": "jira_syn_160",
      "key": "SYN-160",
      "summary": "ENT | Audit log, retention rules and compliance-ready history",
      "description": "Enterprise audit and retention specification.\n\nScope:\n\n* define which actions generate immutable audit events: invitation, role change, request create/update/cancel, approval, rejection, escalation, rule change, template apply, export, import, membership removal, admin override\n* define audit event fields: actor, affected user, workspace, affected dates, previous state, new state, timestamp, reason, source screen or API\n* define retention expectations for operational history and audit history\n* define search and filter behavior for audit review\n* define which users can view audit history\n\nAcceptance criteria:\n\n* Important enterprise actions are captured in audit history.\n* Audit history can be filtered and reviewed by authorized users.\n* Retention expectations are documented for implementation and policy alignment.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-160",
      "source": "file-import"
    },
    {
      "id": "jira_syn_161",
      "key": "SYN-161",
      "summary": "ENT | Export schema, filters and scheduled delivery specification",
      "description": "Enterprise export specification.\n\nScope:\n\n* define export formats: Excel, XML, HTML\n* define mandatory exported fields: calendar date, weekday name, names of people on leave, count of people planned off\n* define optional fields for enterprise use: request status, leave type, team, role, approver, blocked or company-leave flags, coverage status\n* define filter options by date range, workspace, team, role, member, request status\n* define manual export and scheduled export behavior\n* define file naming, locale handling, timezone handling, and access permissions\n\nAcceptance criteria:\n\n* Required export fields are documented in a stable schema.\n* Optional enterprise filters and metadata are documented.\n* Engineers can implement export generation and delivery from this story.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-161",
      "source": "file-import"
    },
    {
      "id": "jira_syn_162",
      "key": "SYN-162",
      "summary": "ENT | Rule template library and version handling",
      "description": "Enterprise rule template library.\n\nScope:\n\n* save reusable templates for blocked dates, company leave dates, max-off rules, and role-based coverage rules\n* support create, edit, duplicate, archive, and version handling for templates\n* show a preview before applying a template to selected dates\n* validate conflicts before applying a template\n* define template ownership and visibility inside a workspace\n\nAcceptance criteria:\n\n* Enterprise admins can save and reuse rule templates.\n* Template apply flow includes preview and validation.\n* Version handling is documented for implementation.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-162",
      "source": "file-import"
    },
    {
      "id": "jira_syn_163",
      "key": "SYN-163",
      "summary": "ENT | Team, location and holiday profile setup",
      "description": "Enterprise organization setup.\n\nScope:\n\n* define team and location attributes for members\n* assign holiday profiles by location or workspace setting\n* allow filtering by team and location in calendar, approval, export, and reporting views\n* allow staffing rules to use team and location filters where required\n\nAcceptance criteria:\n\n* Enterprise workspaces can group members by team and location.\n* Holiday profile assignment is documented.\n* Filtering and reporting can use these attributes consistently.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-163",
      "source": "file-import"
    },
    {
      "id": "jira_syn_164",
      "key": "SYN-164",
      "summary": "ENT | Calendar cell states, legends and enterprise visual rules",
      "description": "Enterprise calendar visual specification.\n\nScope:\n\n* define day-cell states for normal working day, approved leave, pending leave, rejected request, blocked date, company leave date, capacity risk, role coverage risk, public holiday, weekend, and today\n* define legends, badges, icons, and color usage for enterprise mode\n* define hover, tap, long-press, and detail-open behavior on desktop and mobile\n* define what information is visible in collapsed day cells versus day detail views\n\nAcceptance criteria:\n\n* Enterprise calendar day states are explicitly documented.\n* Visual rules are consistent across desktop and mobile.\n* Engineers and designers can implement enterprise calendar rendering from this story.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-164",
      "source": "file-import"
    },
    {
      "id": "jira_syn_165",
      "key": "SYN-165",
      "summary": "ENT | Workspace settings and locale configuration",
      "description": "Enterprise workspace settings.\n\nScope:\n\n* define settings for timezone, locale, weekday display, date format, and holiday profile default\n* define how settings influence calendar display, exports, notifications, and request validation\n* define which roles can edit settings\n* define default values for newly created enterprise workspaces\n\nAcceptance criteria:\n\n* Enterprise workspace settings are documented.\n* Calendar, export, and request behavior reflects configured settings.\n* Default values and edit permissions are explicit.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-165",
      "source": "file-import"
    },
    {
      "id": "jira_syn_166",
      "key": "SYN-166",
      "summary": "ENT | Enterprise workflow state tables",
      "description": "Workflow state specification for enterprise leave planning.\n\nScope:\n\n* define request states and decision states\n* define allowed moves between states\n* define which role can trigger each move\n* define validation checks and notification side effects for each move\n* define cancellation, expiry, and override flows\n\nAcceptance criteria:\n\n* Workflow states are documented in an implementation-ready way.\n* Role permissions and side effects are explicit.\n* Engineers can implement deterministic workflow logic from this story.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-166",
      "source": "file-import"
    },
    {
      "id": "jira_syn_167",
      "key": "SYN-167",
      "summary": "ENT | API endpoint catalog with request and response payload definitions",
      "description": "Implementation-level API specification for enterprise leave planning.\n\nScope:\n\n* define endpoint catalog for enterprise workspace bootstrap, member list, invitation send and accept, role assignment, leave request create/update/cancel, approval decision, rule create/update/delete, template create/apply, summary retrieval, export create/download, import upload/validate/commit, notifications fetch/mark read, audit log fetch, and settings update\n* define request payload fields, required versus optional fields, enums, validation rules, and example payloads\n* define response payload fields, pagination model, timestamps, IDs, nested entities, and partial-success behavior where relevant\n* define error response structure with stable machine-readable codes and human-readable messages\n* define idempotency expectations for retriable operations\n* define authentication and authorization expectations per endpoint\n\nAcceptance criteria:\n\n* Engineers can implement enterprise APIs endpoint by endpoint from this story.\n* Web and mobile clients can rely on the same payload definitions.\n* Error and pagination behavior are explicit and testable.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-167",
      "source": "file-import"
    },
    {
      "id": "jira_syn_168",
      "key": "SYN-168",
      "summary": "ENT | Field-level data model and entity relationship specification",
      "description": "Field-level domain model specification for enterprise leave planning.\n\nScope:\n\n* define every core entity and its fields: enterprise workspace, membership, invitation, workspace role assignment, business role assignment, team, location, holiday profile, leave type, working pattern, leave request, request day item if needed, approval decision, daily rule, role coverage rule, template, template version, notification, audit event, export job, import job\n* define data types, nullability, uniqueness, defaults, allowed values, and lifecycle expectations for each field\n* define relationships and cardinality between entities\n* define soft-delete, archive, and history-preservation rules where relevant\n* define canonical naming separate from localized display labels\n* define derived fields and aggregation fields versus stored fields\n\nAcceptance criteria:\n\n* Engineers can build enterprise persistence and DTO models from this story.\n* Relationship and lifecycle rules are explicit.\n* Reporting, API, and export features use the same canonical entity model.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-168",
      "source": "file-import"
    },
    {
      "id": "jira_syn_169",
      "key": "SYN-169",
      "summary": "ENT | Screen-by-screen wireframe appendix for desktop and mobile",
      "description": "Screen-level UX and wireframe appendix for enterprise leave planning.\n\nScope:\n\n* define each enterprise screen and sub-screen with named sections, components, actions, and visible data blocks\n* include desktop and mobile variants for: workspace home, enterprise calendar view, coverage and conflict summary, approval inbox, day detail, request form, member directory, rule editor, template library, export center, import flow, audit log, notifications panel, settings screen\n* define navigation entry points, back behavior, modal versus full-screen behavior, sheet versus drawer behavior, and destructive-action confirmations\n* define loading, empty, error, no-data, and no-permission states for every screen\n* define screen-to-screen transitions and deep-link landing behavior where relevant\n\nAcceptance criteria:\n\n* Designers and engineers can build the enterprise interface screen by screen from this story.\n* Desktop and mobile layouts are both covered.\n* Critical edge states are documented rather than left implicit.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-169",
      "source": "file-import"
    },
    {
      "id": "jira_syn_170",
      "key": "SYN-170",
      "summary": "ENT | Permission matrix by role, action and data visibility",
      "description": "Tabular permission specification for enterprise leave planning.\n\nScope:\n\n* define a complete matrix of actions versus roles: owner, resourceAssistant, member, invited user, suspended user, removed user, and optional future read-only role\n* include actions for workspace settings, member invite, role assignment, request create, request edit, request cancel, request approve, request reject, admin override, rule create and edit, template create and apply, export, import, notification view, audit view, and reporting view\n* define which data is visible by role in calendar cells, day details, approval views, exports, and reports\n* define row-level and field-level visibility where needed\n* define inheritance and override rules if multiple roles or scopes exist in the future\n\nAcceptance criteria:\n\n* Every enterprise action has an explicit permission rule.\n* Visibility of sensitive leave information is documented by role.\n* Engineers can implement access control from this matrix without guessing.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-170",
      "source": "file-import"
    },
    {
      "id": "jira_syn_171",
      "key": "SYN-171",
      "summary": "ENT | Notification event matrix, recipients and payload rules",
      "description": "Tabular notification specification for enterprise leave planning.\n\nScope:\n\n* define event-by-event notification matrix covering invitation, invitation accepted, request submitted, request changed, request approved, request rejected, request cancelled, request expired, approval escalation, blocked-date conflict, max-off conflict, role coverage conflict, rule changed, template applied, export finished, import finished, membership changed, and admin override\n* define recipients for each event and delivery expectations for in-app and email\n* define unread, read, dismissed, and badge-count behavior\n* define sort order, grouping, and duplicate-suppression rules\n* define payload fields needed for notification cards, email templates, and drill-through navigation\n* define visibility rules for who can see which notifications in shared enterprise contexts\n\nAcceptance criteria:\n\n* Enterprise notification behavior is documented as a matrix rather than scattered rules.\n* Recipient, payload, and unread behavior are explicit.\n* Engineers and QA can verify notification behavior against a single source of truth.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-171",
      "source": "file-import"
    },
    {
      "id": "jira_syn_172",
      "key": "SYN-172",
      "summary": "ENT | Spreadsheet import field mapping, validation and error report catalog",
      "description": "Implementation-level import specification for enterprise leave planning.\n\nScope:\n\n* define supported spreadsheet column mappings for member identity, email, date, date range, leave type, request status, comment, role, team, and location where applicable\n* define import modes: dry-run validation, partial accept, full commit\n* define row-level validation rules, duplicate detection rules, unknown member handling, unknown leave type handling, and date parsing rules\n* define import error catalog with stable error codes and human-readable remediation text\n* define generated import summary fields: total rows, accepted rows, rejected rows, warnings, created entities, updated entities\n* define downloadable error report structure for failed rows\n\nAcceptance criteria:\n\n* Engineers can implement spreadsheet import without guessing column semantics.\n* Validation and error handling are documented consistently.\n* Admins receive actionable feedback for failed imports.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-172",
      "source": "file-import"
    },
    {
      "id": "jira_syn_173",
      "key": "SYN-173",
      "summary": "ENT | Reporting KPI definitions and dashboard widget catalog",
      "description": "Implementation-level reporting specification for enterprise mode.\n\nScope:\n\n* define KPI catalog for approval throughput, average approval time, pending approvals, approved days by period, rejected requests by period, blocked-day usage, company leave usage, max-off breaches, role coverage breaches, short-staffed upcoming days, leave by team, leave by role, and leave by user\n* define each dashboard widget: title, metric source, aggregation logic, filters, drill-through target, empty state, and refresh expectations\n* define default dashboard layout for desktop and mobile enterprise views\n* define time windows and comparison modes: current month, next 30 days, quarter, custom range, previous period comparison where applicable\n* define exportability of dashboard data and alignment with API aggregates\n\nAcceptance criteria:\n\n* Reporting KPIs are documented with unambiguous formulas.\n* Widget behavior is documented screen by screen.\n* Managers can rely on dashboard metrics matching export and API data.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-173",
      "source": "file-import"
    },
    {
      "id": "jira_syn_174",
      "key": "SYN-174",
      "summary": "ENT | Enterprise acceptance scenarios and QA matrix",
      "description": "Enterprise acceptance and QA specification.\n\nScope:\n\n* define end-to-end scenarios for owner, resourceAssistant, member, invited user, suspended user, and removed user\n* cover invitation, registration, request submission, approval, rejection, cancellation, escalation, rule conflicts, template application, export, import, notifications, and audit history\n* define expected behavior for web, Android, and iPhone for the same business flows\n* define example workspace and test-data setups for validation\n\nAcceptance criteria:\n\n* QA and engineers can validate enterprise mode from one scenario catalog.\n* Role-based and rule-based flows are covered by explicit scenarios.\n* Cross-platform expected behavior is documented for the same business flow.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-174",
      "source": "file-import"
    },
    {
      "id": "jira_syn_175",
      "key": "SYN-175",
      "summary": "ENT | Mobile parity, responsive behavior and offline-friendly enterprise flows",
      "description": "Enterprise mobile and responsive specification.\n\nScope:\n\n* define which enterprise workflows must behave identically on web, Android, and iPhone\n* define responsive layout priorities for approval inbox, day detail, request form, summary panel, rule editor, notifications, and exports\n* define offline-tolerant and retry behavior for non-destructive actions such as draft request editing and queued fetch refresh\n* define what actions require online validation and what data can be cached for read-only access\n* define conflict handling when stale mobile data meets newer server-side rules\n\nAcceptance criteria:\n\n* Enterprise workflows have explicit mobile parity expectations.\n* Responsive and offline-friendly behavior is documented where needed.\n* Engineers can implement mobile clients without inventing platform-specific business behavior.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-175",
      "source": "file-import"
    },
    {
      "id": "jira_syn_176",
      "key": "SYN-176",
      "summary": "ENT | Security and privacy rules for enterprise leave data",
      "description": "Enterprise security and privacy rules.\n\nScope:\n\n* define handling rules for leave data, approval notes, exported files, and notification content\n* define session expectations and re-check points for sensitive admin actions\n* define least-privilege rules for owner, resourceAssistant, and member roles\n* define export visibility and API access expectations\n* define limited-visibility options for sensitive leave data in shared calendar views\n* define import and export file access rules\n\nAcceptance criteria:\n\n* Enterprise leave data handling rules are documented.\n* Security expectations align with role permissions and export behavior.\n* Engineers have explicit guidance for privacy-sensitive flows.\n\nIssue type: Story\nParent: SYN-13 — ENT | Enterprise absence planning and resource governance mode\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-176",
      "source": "file-import"
    },
    {
      "id": "jira_syn_177",
      "key": "SYN-177",
      "summary": "ENT | Define enterprise workspace bootstrap endpoint and payload",
      "description": "Subtask under the API catalog story.\n\nDeliverables:\n\n* request and response contract for enterprise workspace bootstrap\n* included objects: workspace, current membership, role, settings summary, visible modules, notification counters\n* error behavior for no-access and suspended membership\n\nAcceptance criteria:\n\n* Mobile and web clients can load enterprise mode from this contract.\n* Bootstrap payload is versionable and role-aware.\n\nIssue type: Subtask\nParent: SYN-167 — ENT | API endpoint catalog with request and response payload definitions\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-177",
      "source": "file-import"
    },
    {
      "id": "jira_syn_178",
      "key": "SYN-178",
      "summary": "ENT | Define leave request and approval endpoints with example payloads",
      "description": "Subtask under the API catalog story.\n\nDeliverables:\n\n* endpoint contracts for create request, update request, cancel request, approve, reject, and admin override\n* required fields, enums, examples, and validation errors\n* idempotency and conflict behavior\n\nAcceptance criteria:\n\n* Engineers can implement request/decision APIs from this subtask.\n* Error codes and transition side effects are explicit.\n\nIssue type: Subtask\nParent: SYN-167 — ENT | API endpoint catalog with request and response payload definitions\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-178",
      "source": "file-import"
    },
    {
      "id": "jira_syn_179",
      "key": "SYN-179",
      "summary": "ENT | Define export, import and notification endpoints",
      "description": "Subtask under the API catalog story.\n\nDeliverables:\n\n* endpoint contracts for export create/download, import upload/validate/commit, notifications list/mark read\n* async job handling and status fields where applicable\n* pagination and filtering model\n\nAcceptance criteria:\n\n* Engineers can implement enterprise export/import/notification APIs from this subtask.\n* Async and pagination behavior are explicit.\n\nIssue type: Subtask\nParent: SYN-167 — ENT | API endpoint catalog with request and response payload definitions\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-179",
      "source": "file-import"
    },
    {
      "id": "jira_syn_180",
      "key": "SYN-180",
      "summary": "ENT | Define core enterprise entities and field constraints",
      "description": "Subtask under the field-level data model story.\n\nDeliverables:\n\n* field catalog for workspace, membership, invitation, leave request, approval decision, daily rule, template, notification, audit event, export job, import job\n* data types, nullability, defaults, uniqueness, and enum values\n\nAcceptance criteria:\n\n* Persistence and DTO models can be built from this subtask.\n* Field constraints are explicit and testable.\n\nIssue type: Subtask\nParent: SYN-168 — ENT | Field-level data model and entity relationship specification\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-180",
      "source": "file-import"
    },
    {
      "id": "jira_syn_181",
      "key": "SYN-181",
      "summary": "ENT | Define entity relationships, history preservation and derived fields",
      "description": "Subtask under the field-level data model story.\n\nDeliverables:\n\n* relationship map and cardinality rules\n* soft-delete, archive, and history-preservation rules\n* derived versus stored fields and aggregation ownership\n\nAcceptance criteria:\n\n* Engineers can implement entity relationships without ambiguity.\n* Historical accuracy rules are explicit.\n\nIssue type: Subtask\nParent: SYN-168 — ENT | Field-level data model and entity relationship specification\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-181",
      "source": "file-import"
    },
    {
      "id": "jira_syn_182",
      "key": "SYN-182",
      "summary": "ENT | Define desktop and mobile screen sections for enterprise workspace",
      "description": "Subtask under the wireframe appendix story.\n\nDeliverables:\n\n* section-by-section breakdown for workspace home, calendar, summary panel, approval inbox, request form, member directory, rule editor, export center, notifications, settings\n* desktop and mobile variants\n\nAcceptance criteria:\n\n* Designers and engineers can build named screen sections from this subtask.\n* Responsive priorities are explicit.\n\nIssue type: Subtask\nParent: SYN-169 — ENT | Screen-by-screen wireframe appendix for desktop and mobile\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-182",
      "source": "file-import"
    },
    {
      "id": "jira_syn_183",
      "key": "SYN-183",
      "summary": "ENT | Define action-by-role permission matrix for enterprise workflows",
      "description": "Subtask under the permission matrix story.\n\nDeliverables:\n\n* matrix for owner, resourceAssistant, member, invited, suspended, removed, and optional read-only roles\n* actions: invite, assign role, submit request, edit request, cancel request, approve, reject, override, manage rules, apply templates, export, import, view audit, view reporting\n\nAcceptance criteria:\n\n* Engineers can implement role-based access control from this subtask.\n* No enterprise action remains undocumented by role.\n\nIssue type: Subtask\nParent: SYN-170 — ENT | Permission matrix by role, action and data visibility\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-183",
      "source": "file-import"
    },
    {
      "id": "jira_syn_184",
      "key": "SYN-184",
      "summary": "ENT | Define visibility rules for calendar cells, day details and exports",
      "description": "Subtask under the permission matrix story.\n\nDeliverables:\n\n* field-level and row-level visibility rules for calendar cells, day details, approval views, exports, and reports\n* peer versus admin visibility rules for sensitive leave information\n\nAcceptance criteria:\n\n* Sensitive leave information visibility is explicitly documented.\n* Export and report visibility follows the same rules where required.\n\nIssue type: Subtask\nParent: SYN-170 — ENT | Permission matrix by role, action and data visibility\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-184",
      "source": "file-import"
    },
    {
      "id": "jira_syn_185",
      "key": "SYN-185",
      "summary": "ENT | Define KPI formulas and drill-through behavior for reporting widgets",
      "description": "Subtask under the reporting KPI story.\n\nDeliverables:\n\n* formulas and aggregation logic for approval throughput, avg approval time, pending approvals, blocked-date usage, company leave usage, max-off breaches, role coverage breaches, short-staffed upcoming days, leave by team, leave by role, leave by user\n* drill-through destinations and filter inheritance rules\n\nAcceptance criteria:\n\n* KPIs are reproducible from API/export data.\n* Drill-through behavior is explicit and testable.\n\nIssue type: Subtask\nParent: SYN-173 — ENT | Reporting KPI definitions and dashboard widget catalog\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-185",
      "source": "file-import"
    },
    {
      "id": "jira_syn_186",
      "key": "SYN-186",
      "summary": "ENT | Define spreadsheet import mappings and row-level validation rules",
      "description": "Subtask under the spreadsheet import story.\n\nDeliverables:\n\n* supported column mappings for member identity, email, date/date range, leave type, status, comment, role, team, location\n* row-level validation rules and duplicate detection\n* unknown member and unknown leave type behavior\n\nAcceptance criteria:\n\n* Engineers can implement spreadsheet import validation from this subtask.\n* Column semantics are explicit.\n\nIssue type: Subtask\nParent: SYN-172 — ENT | Spreadsheet import field mapping, validation and error report catalog\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-186",
      "source": "file-import"
    },
    {
      "id": "jira_syn_187",
      "key": "SYN-187",
      "summary": "ENT | Define spreadsheet import mappings and row-level validation rules",
      "description": "Subtask under the spreadsheet import story.\n\nDeliverables:\n\n* supported column mappings for member identity, email, date/date range, leave type, status, comment, role, team, location\n* row-level validation rules and duplicate detection\n* unknown member and unknown leave type behavior\n\nAcceptance criteria:\n\n* Engineers can implement spreadsheet import validation from this subtask.\n* Column semantics are explicit.\n\nIssue type: Subtask\nParent: SYN-172 — ENT | Spreadsheet import field mapping, validation and error report catalog\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-187",
      "source": "file-import"
    },
    {
      "id": "jira_syn_188",
      "key": "SYN-188",
      "summary": "ENT | Define enterprise QA scenario sets and regression-critical flows",
      "description": "Subtask under the enterprise acceptance scenarios story.\n\nDeliverables:\n\n* scenario sets for invitation, registration, request create/update/cancel, approve/reject, escalation, rule conflict, template application, export, import, notifications, audit review\n* regression-critical scenarios for releases\n* cross-platform expected results for web, Android, iPhone\n\nAcceptance criteria:\n\n* QA can execute enterprise regression from this subtask.\n* Cross-platform business expectations are aligned.\n\nIssue type: Subtask\nParent: SYN-174 — ENT | Enterprise acceptance scenarios and QA matrix\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-188",
      "source": "file-import"
    },
    {
      "id": "jira_syn_189",
      "key": "SYN-189",
      "summary": "ENT | Define enterprise acceptance scenarios by role and critical flow",
      "description": "Subtask under the enterprise QA matrix story.\n\nDeliverables:\n\n* acceptance scenarios for owner, resourceAssistant, member, invited, suspended, and removed users\n* role-based normal, edge, and negative flows for invitation, request, approval, conflict, export, import, notifications\n\nAcceptance criteria:\n\n* QA can validate enterprise behavior from these scenarios.\n* Cross-role coverage is explicit.\n\nIssue type: Subtask\nParent: SYN-174 — ENT | Enterprise acceptance scenarios and QA matrix\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-189",
      "source": "file-import"
    },
    {
      "id": "jira_syn_190",
      "key": "SYN-190",
      "summary": "ENT | Define mobile parity and offline-tolerant behavior for enterprise flows",
      "description": "Subtask under the mobile parity story.\n\nDeliverables:\n\n* parity expectations for web, Android, and iPhone across approval inbox, day detail, request form, summary panel, notifications, settings\n* offline-tolerant read-only and retry behavior for safe actions\n* stale-data conflict handling rules\n\nAcceptance criteria:\n\n* Mobile clients can implement the same business behavior as web.\n* Offline and retry behavior are explicit.\n\nIssue type: Subtask\nParent: SYN-175 — ENT | Mobile parity, responsive behavior and offline-friendly enterprise flows\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-190",
      "source": "file-import"
    },
    {
      "id": "jira_syn_191",
      "key": "SYN-191",
      "summary": "ENT | Define mobile parity rules and offline-safe enterprise actions",
      "description": "Subtask under the mobile parity story.\n\nDeliverables:\n\n* parity rules for approval inbox, day detail, request form, summary panel, notifications, settings\n* offline-safe versus online-required actions\n* stale-data conflict handling rules for mobile clients\n\nAcceptance criteria:\n\n* Mobile teams can implement enterprise behavior without web-only assumptions.\n* Offline and retry behavior is explicit where supported.\n\nIssue type: Subtask\nParent: SYN-175 — ENT | Mobile parity, responsive behavior and offline-friendly enterprise flows\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-191",
      "source": "file-import"
    },
    {
      "id": "jira_syn_192",
      "key": "SYN-192",
      "summary": "ENT | Define mobile parity and offline-tolerant behavior for enterprise flows",
      "description": "Subtask under the mobile parity story.\n\nDeliverables:\n\n* parity expectations for web, Android, and iPhone across approval inbox, day detail, request form, summary panel, notifications, settings\n* offline-tolerant read-only and retry behavior for safe actions\n* stale-data conflict handling rules\n\nAcceptance criteria:\n\n* Mobile clients can implement the same business behavior as web.\n* Offline and retry behavior are explicit.\n\nIssue type: Subtask\nParent: SYN-175 — ENT | Mobile parity, responsive behavior and offline-friendly enterprise flows\nLabels: ENTERPRISE",
      "labels": [
        "ENTERPRISE"
      ],
      "url": "https://hobbeast.atlassian.net/browse/SYN-192",
      "source": "file-import"
    }
  ],
  "overview": {
    "applicationDescription": "B2C-first scheduling and event coordination platform with a mature web runtime and a detailed enterprise absence-planning backlog.",
    "techStack": [
      "React + TypeScript web application",
      "Tailwind / shadcn-style component layer",
      "Framer Motion for motion and entry states",
      "date-fns for calendar and time logic",
      "Sonner-style toast feedback"
    ],
    "hostingServices": [
      "Lovable / Vite frontend shell",
      "Vercel-targeted web deployment visibility"
    ],
    "backendServices": [
      "Supabase Auth",
      "Supabase Postgres",
      "Supabase Edge Functions",
      "Google OAuth",
      "Email and social deep-link sharing"
    ],
    "projectStructure": [
      "B2C runtime baseline represented as released web+backend governance units",
      "Enterprise absence-planning represented as unreleased governance units",
      "Shared backend and contract assumptions anchored to Supabase-based flows",
      "All valid Jira issues imported for traceability and grouped into logical feature families"
    ],
    "runtimeNotes": [
      "The uploaded markdown inventories are not a formal release audit; release rows are governance reconstruction units.",
      "All Syncfolk Jira links in this seed are validated against jiraissues.csv and invalid synthetic keys are removed."
    ]
  }
};

const tenants: TenantRecord[] = [{ id: "tenant_releasegovernance", name: "ReleaseGovernance Demo Workspace", plan: "growth", projects: [hobbeastProject, syncfolkProject] }];
export function getTenant(tenantId: string) { return tenants.find((tenant) => tenant.id === tenantId); }
export function getProject(projectId: string) { return tenants.flatMap((tenant) => tenant.projects).find((project) => project.id === projectId); }
