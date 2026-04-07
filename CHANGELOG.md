# ReleaseGovernance - Changelog

Append-only delivery history.

---

## Kötelező changelog rutin

Minden új fejlesztési vagy javítási kör **elején** ezt a teljes fájlt végig kell olvasni.

Kötelező szabályok:
1. A changelogban felsorolt korábbi funkciókat **nem szabad véletlenül kivenni** a kódból vagy regresszióval eltüntetni.
2. Minden új fejlesztést, javítást, importot, seed-frissítést, release- és Jira-governance változást **ehhez a fájlhoz kell hozzáfűzni**.
3. A fájl tartalmát **nem szabad lenullázni, felülírni vagy új changelog fájlba szétszedni**; csak appendelni szabad.
4. Minden új bejegyzéshez tartozzon:
   - dátum vagy timestamp,
   - verzió / scope,
   - Added / Changed / Fixed / Known issues bontás,
   - ha releváns, az érintett projekt vagy surface.
5. Kódmódosítás előtt mindig ellenőrizni kell, hogy a changelogban említett már leszállított funkciók továbbra is megvannak-e.
6. Seed/mock-data és import funkciók módosításakor külön ellenőrizni kell, hogy a korábban dokumentált capability-k, release-ek, integrációk és menüpontok nem vesznek-e el.
7. Jira-validálásnál a changelogot is frissíteni kell, ha a traceability logika vagy a capability/release mapping megváltozik.

## Ajánlott bejegyzésstruktúra

Minden új blokk a következő mintát kövesse:

## [Verzió vagy Unreleased] - YYYY-MM-DD
### Added
### Changed
### Fixed
### Known issues
### Planned next

All notable changes to ReleaseGovernance will be documented in this file.

The format is based on Keep a Changelog and this project follows semantic versioning from the point when live release automation is enabled.

## Versioning references
- `versioning/business_request_01000001.pdf`
- `versioning/ai_dev_prompt_01000001.md`
- `versioning/business_request_01000002.pdf`
- `versioning/ai_dev_prompt_01000002.md`

## Időrendi, duplikációmentes changelog-törzs

## [syncfolk:web-v0.1.0] - 2026-01-05

### Added
- Auth shell, route protection and design-system baseline.
- B2C scheduling core represented as a governed release baseline in the release registry.
- Capability-level mapping that separates shipped B2C scope from unreleased enterprise scope.

### Changed
- Release details can now render matching changelog entries directly from CHANGELOG.md.

### Known issues
- Enterprise absence-planning backlog remains modeled as unreleased future scope rather than live product behavior.

_Forrás: `CHANGELOG (59).md`_

## [hobbeast:web-v0.9.0] - 2026-03-27

### Added
- Normalized places search with provider orchestration and fallback logic.
- External discovery and organizer-facing foundation on the web and shared backend.
- Release governance visibility for Jira-linked delivery clusters and integration-sensitive release rows.

### Known issues
- Some delivery clusters still depend on follow-up parity work between web, backend and Android surfaces.
- Additional backfill and refinement may still be required for external event provider coverage.

_Forrás: `CHANGELOG (59).md`_

## [0.1.0-mvp] - 2026-03-28

### Added
- Multi-tenant B2B web application shell for ReleaseGovernance
- Login placeholder and authenticated session shell
- Workspace and project selector with Hobbeast seeded as the first sample project
- Project dashboard with release center summary, capability summary, parity alerts, integrations and deployment visibility
- Release detail view with surface badges, backend/shared-contract flags and Jira traceability blocks
- Capability registry view
- Integrations hub view for GitHub, Jira, Vercel, Supabase and Lovable references
- Traceability view for requirements-to-release visibility
- Automation starter kit view
- Governance starter files, including release-impact schema and YAML examples
- Governance SQL schema for a dedicated backend model

### Changed
- Defined ReleaseGovernance as a generic platform that can host multiple product projects instead of a Hobbeast-specific internal tool

### Known issues
- Current GitHub-hosted build failed because Next.js typed routes were enabled while navigation links used plain string href values
- Confluence write-back is not yet automated from this environment
- Live GitHub, Jira, Vercel and Supabase ingestion is not yet wired into the MVP

### Planned next
- Wire the app to live Supabase governance tables
- Add real Jira, GitHub and Vercel ingestion
- Enable release-impact validation and parity recommendation workflows end-to-end

_Forrás: `CHANGELOG (84).md`_

## [releasegovernance:web-v0.1.0] - 2026-03-28

### Added
- Multi-tenant B2B web application shell for ReleaseGovernance.
- Workspace and project selector with Hobbeast, Syncfolk and ReleaseGovernance represented in one tenant.
- Project dashboard, release center, capability grouping and traceability screens.
- Release detail view with surface badges, Jira traceability, impact evaluation and CHANGELOG.md rendering.
- Governance starter kit view with CSV export for deployed features that still need Jira backfill.

### Changed
- The ReleaseGovernance project now tracks its own delivered, unreleased and backfill-needed features using the same generic model as Hobbeast and Syncfolk.
- Traceability pages now expose released features with Jira, unreleased Jira-backed work and deployed features without Jira tickets as distinct sections.

### Known issues
- Live GitHub, Jira, Vercel and Supabase ingestion is still represented as backlog, not as active synchronized integrations.
- Governance persistence is still seed-first; local overrides exist, but a durable backend source of truth is not yet wired.

_Forrás: `CHANGELOG (59).md`_

## [hobbeast:mobile-android-v0.19.0] - 2026-03-28

### Added
- Android onboarding and organizer runtime coverage.
- Trip planner persistence and reminder-oriented engagement flow.
- Shared backend and contract-aware release registry visibility.

### Known issues
- Android parity still needs follow-up for some evolving web/provider payload changes.

_Forrás: `CHANGELOG (59).md`_

## [Unreleased] - 2026-03-29

### Added
- Syncfolk seed now imports the full validated Jira issue universe from `jiraissues.csv` as clickable imported Jira records with summary, description and labels preserved.
- Syncfolk capability and release grouping now uses business-logical buckets that separate current B2C runtime coverage from enterprise backlog coverage.
- Changelog governance instructions were added to the top of this file as a mandatory read-first, append-only operating rule set.

### Changed
- Syncfolk Jira linkage now treats `jiraissues.csv` as the authoritative validity source and the uploaded markdown inventories as the authoritative functional interpretation layer.
- The Syncfolk governance seed now partitions the validated Jira set into:
  - implemented B2C/runtime-backed release groupings
  - unreleased/planned enterprise capability and unreleased-release groupings
- All valid imported Syncfolk Jira items now remain available for traceability instead of being aggressively cut down during validation.

### Fixed
- Removed invalid synthetic Syncfolk Jira keys from capability and release traceability mappings by validating them against the uploaded `jiraissues.csv`.
- Prevented loss of valid Jira issues during Syncfolk seed cleanup by restoring the full valid issue universe and grouping it into governance-friendly feature families.
- Preserved existing changelog content while moving the file to an explicit append-only governance model.

### Known issues
- Syncfolk release rows are still governance reconstruction units derived from inventory + Jira inputs, not historical deployment records.
- Live ingestion from the actual Syncfolk repository and deployment stack is still preferable to static seed data.

### Planned next
- Promote the validated Syncfolk import logic from static seed maintenance to first-class project import workflows.
- Add explicit UI filtering so users can switch between shipped capabilities, unreleased capabilities and all grouped Jira-backed work.

_Forrás: `CHANGELOG (84).md`_

## [Unreleased] - 2026-03-29

### Added
- Hobbeast governance validation pack was prepared from the uploaded Hobbeast repo, three Hobbeast inventories and `jiraissues_HOBBEAST.csv`.
- A structured `hobbeast-governance-import.json` baseline was created so Hobbeast can be imported into ReleaseGovernance with releases, capabilities, integrations, parity alerts and the full valid Jira issue universe.
- Repo-validated Hobbeast inventory files were created for feature, detailed feature and connection/release views.

### Changed
- Hobbeast is now interpreted through a stricter evidence hierarchy:
  1. `jiraissues_HOBBEAST.csv` = authoritative issue universe
  2. uploaded current repo = authoritative current-state code evidence
  3. uploaded inventories = authoritative business interpretation starting point, but not automatic runtime proof
- Hobbeast capability and release grouping now separates:
  - repo-evidenced current baseline
  - repo-evidenced but partial readiness/scaffolding
  - planned / parity / documentation / intelligence backlog
- Exact-summary duplicate Jira families are retained in imported traceability, but capability/release mapping uses canonical representatives to avoid double counting.

### Fixed
- Added missing repo-evidenced Hobbeast Jira keys into the validated governance interpretation, especially around discovery/external blending, organizer operations, profile/notifications, places and Mapy core.
- Prevented overclaiming by downgrading advanced analytics, hidden hubs/community intelligence and some AI automation items where the uploaded repo did not provide sufficient direct evidence.
- Preserved the rule that all valid Jira issues remain imported even when only a subset is elevated into current release/capability groupings.

### Known issues
- The uploaded Hobbeast repo still shows remote-schema dependency: some typed backend objects used by the UI/release note are not backed by migrations in the zip.
- Local production build passes, but that does not equal a full runtime or production audit.
- Organizer analytics and hidden-hub/community-intelligence claims remain backlog-heavy relative to the current uploaded repo evidence.

### Planned next
- Merge the Hobbeast import JSON into the ReleaseGovernance seed/import workflow.
- Reconcile remote Supabase schema vs uploaded migrations for organizer-side tables and cache tables.
- Add live ingestion later so Hobbeast can move from documentation-derived governance baseline to live-governed project state.

_Forrás: `CHANGELOG (84).md`_

## [Unreleased] - 2026-03-29 19:20 UTC

### Added
- Hobbeast seed now imports the full validated Jira universe from `jiraissues_HOBBEAST.csv` as clickable imported Jira records with summary, description and labels preserved.
- Hobbeast release grouping now reconstructs released current-workstream baselines and unreleased parity/backlog groups from the uploaded inventories plus validated Jira export.
- Hobbeast capability registry now separates implemented current-workstream domains from Jira/spec-only follow-up domains.

### Changed
- Hobbeast Jira linkage now treats `jiraissues_HOBBEAST.csv` as the authoritative issue-validity source, while the uploaded Hobbeast markdown inventories are used as the authoritative functional interpretation layer. fileciteturn87file14turn87file8turn87file3
- Hobbeast now distributes all 186 valid Jira issues into governance-friendly buckets:
  - 157 issues mapped to released current-workstream groupings
  - 29 issues mapped to unreleased parity / marketplace / documentation follow-up groupings
- Hobbeast dashboard, release center and capability registry are no longer limited to a tiny placeholder set of linked Jira issues.

### Fixed
- Removed the misleading Hobbeast placeholder state where only a handful of Jira links appeared across releases despite a much larger validated Jira export.
- Prevented loss of valid Hobbeast Jira issues by keeping the full validated Jira set in `importedJiraIssues` while separately classifying released vs unreleased domains.
- Preserved Syncfolk data and existing navigation/import functionality while replacing only the Hobbeast governance seed.

### Known issues
- Hobbeast release rows remain governance reconstruction units derived from inventories, repository evidence and Jira exports; they are not asserted as historical production deployment records.
- Live ingestion from the actual Hobbeast repositories, Vercel environments and Jira project is still preferable to static seed data.

### Planned next
- Promote the Hobbeast and Syncfolk validated-seed logic into the first-class import workflow so project imports can build these release/capability splits directly.
- Add UI filtering to switch between shipped capabilities, unreleased capabilities and the full imported Jira universe.

_Forrás: `CHANGELOG (85).md`_

## [Unreleased] - 2026-03-29 22:10 UTC

### Added
- Added a visible backfill lifecycle across dashboard, capabilities, traceability and automation pages.
- Added detection logic that matches imported Jira issues back to deployed-without-Jira candidates via unique tracking labels.
- Added clearer CSV export entry points so Jira backfill creation is reachable from the UI, not only implicit in the data model.

### Changed
- Jira backfill CSV now exports only unresolved deployed-without-Jira candidates.
- Resolved backfill candidates are now shown separately once their tracking labels appear on imported Jira issues.

_Forrás: `CHANGELOG (33).md`_

## [Unreleased] - 2026-03-29 22:20 UTC

### Fixed
- Hardened Jira backfill CSV export in the Automation screen so `labels` can be read safely whether the current data shape provides an array or a plain string.
- Removed a build blocker caused by calling `.join(" ")` on a value that was not always an array.

### Engineering note
- Build-fix patches must normalize heterogeneous seed/import data instead of assuming one exact runtime shape.

_Forrás: `CHANGELOG (31).md`_

## [Unreleased] - 2026-03-30 00:05 UTC

### Added
- Per-project Jira connection settings persistence in the Import Studio. Jira URL, email, token and preview-limit preferences are now stored locally and restored when returning to the same governed project.
- Jira test query workflow with project-locked filtering and a default preview of Jira key, summary, status, type, created and parent fields.

### Fixed
- Import Studio no longer silently forgets Jira credentials after refresh or navigation. Settings must now be explicitly saved and are scoped to the selected project key (RLG / SYN / HOB).
- Jira queries are now forced through the selected ReleaseGovernance project key so Syncfolk cannot accidentally query HOB, Hobbeast cannot accidentally query RLG, etc.
- Restored the canonical `BackfillCandidate` type on `ProjectRecord` so project dashboard/backfill surfaces compile consistently when they read `project.backfillCandidates`.

_Forrás: `CHANGELOG (4).md`_

## [Unreleased] - 2026-03-30 00:20 UTC

### Fixed
- Repaired a type regression where dashboard and backfill-aware pages expected `project.backfillCandidates`, but the shared `ProjectRecord` interface no longer declared that field.
- This fix is intentionally type-only and does not change working Hobbeast or Syncfolk data payloads.

_Forrás: `CHANGELOG (4).md`_

## [Unreleased] - 2026-03-30 06:55 UTC

### Fixed
- Extended the canonical `ImportedJiraIssue` type with optional preview fields (`status`, `issueType`, `created`, `parentKey`) so the Import Studio Jira test table matches the shared TypeScript contract.
- Removed another shared-type regression where UI preview code evolved faster than the central domain interface.

### Engineering note
- When a UI table renders extra imported fields, the shared type must be updated in the same patch as the UI/API change.

_Forrás: `CHANGELOG (37).md`_

## [Unreleased] - 2026-03-30 07:20 UTC

### Added
- Per-project GitHub + hosting release ingestion settings in Import Studio. Each governed project can now store its own repo URL, GitHub token, hosting provider, hosting URL and hosting API key.
- Release candidate fetch workflow that reads the latest GitHub commit, optional CHANGELOG.md entry, optional commit comment and hosting reachability into a candidate row.
- Candidate approval flow with visible required-check fields. Rows with Jira keys move into released releases; rows without Jira keys move into Jira CSV backfill export.

### Changed
- Project pages now read merged project state through local overrides so approved releases and backfill candidates become visible in the UI without editing static seed data.
- Release detail pages now surface stored changelog excerpts and commit comments for detected/approved releases.

### Fixed
- Shared backfill logic is now centralized so Capabilities, Traceability and Automation consume the same normalized backfill state.

_Forrás: `CHANGELOG (43).md`_

## [Unreleased] - 2026-03-30 08:05 UTC

### Added
- Runtime-control YAML is now intended to drive sidebar visibility and project-upload source options.
- Import Studio now exposes a visible **Project Upload** workflow with source selection across Jira, GitHub, hosting and changelog inputs.
- Jira import now accepts base Jira URL + explicit project key in addition to issue URL, project URL and JQL URL.

### Changed
- Jira import search now uses a stronger project-key fallback and returns diagnostics about the search strategy instead of silently behaving like an empty import.
- Import page copy now explicitly advertises the project-upload workflow.

### Fixed
- The `0 imported issues` Jira behavior is now handled through a more robust parser/search strategy instead of assuming every user will paste a project URL.

_Forrás: `CHANGELOG (58).md`_

## [Unreleased] - 2026-03-30 08:25 UTC

### Fixed
- Removed the `node:fs` / `node:path` runtime-control dependency from code that is imported by client-rendered pages. Runtime control is now parsed from an embedded YAML string so webpack does not try to bundle unsupported `node:` scheme imports into the app shell.
- Kept the same runtime-control structure for sidebar and project-upload options while eliminating the Vercel webpack `UnhandledSchemeError`.

### Why this was needed
- The previous approach imported a helper that used `node:fs` and `node:path` from a component path that is included in page bundles.
- In Next.js/Vercel this caused webpack to fail on `node:` scheme resolution during production build.

### Follow-up
- If we later want the YAML file itself to become the single live source of truth at runtime, it must be loaded only on the server side or transformed at build time into a client-safe representation.

_Forrás: `CHANGELOG (7).md`_

## [Unreleased] - 2026-03-30 10:40 UTC

### Added
- Workspace-level **Add a new project** flow on the Projects page.
- Dedicated project-bootstrap modal with separate GitHub, hosting and Jira sections.
- Separate save + test actions for GitHub, hosting and Jira during project bootstrap.
- Project creation from preview so the new project appears as its own dashboard tile and can then be managed like the seeded projects.

### Changed
- Moved **Project Upload** out of the per-project Import page. Brand new projects are now created only from the workspace-level Projects page.
- Kept the existing Import Studio focused on already existing projects.

### Fixed
- Jira preview/import now works with base Jira URL + explicit project key, not only with project/issue/JQL URLs.
- Added missing custom-project persistence so newly created projects can be listed alongside seeded projects.

_Forrás: `CHANGELOG (7).md`_

## [Unreleased] - 2026-03-30 17:20 UTC

### Added
- Release Center now supports **view switching** between a compact Vercel-style list view and a detailed inline view.
- Detailed release view in the Releases page now surfaces the captured **CHANGELOG excerpt** and **deployment comment** for each release row without leaving the list page.
- Added **Push to Jira** preview + apply flow for selected release rows.
- Push-to-Jira includes a lightweight built-in classifier that compares selected deployed releases to already reachable Jira issues, proposes parent issue, summary, issue type and labels, and lets the user edit the generated payload before apply.

### Fixed
- Rebuilt the **Download CSV** function from the actual release rows so it no longer exports an empty or zero-row result.
- CSV export now includes release version, state, status, surfaces, deploy date, source, issue count, deployment comment, release notes and changelog title.

### Validation checklist for this change
- [x] Default Releases screen opens in **list view**
- [x] Detailed inline release mode can be switched on manually
- [x] Row click still opens full release detail page
- [x] Download CSV exports actual visible project release data
- [x] Push-to-Jira can preview selected rows
- [x] Push-to-Jira lets the user edit summary / description / parent / issue type / labels before apply

_Forrás: `CHANGELOG_3 (2).md`_

## [Unreleased] - 2026-03-30 23:55 UTC

### Fixed
- Removed invalid `projectName` prop usage from `AppShell` calls in:
  - `app/projects/[projectId]/automation/page.tsx`
  - `app/projects/[projectId]/releases/page.tsx`

### Why this was needed
- The current `AppShell` prop contract only accepts `children` and optional `projectId`.
- Passing `projectName` caused Next.js / TypeScript production build failure.

### Verification checklist
- [x] `automation/page.tsx` no longer passes `projectName`
- [x] `releases/page.tsx` no longer passes `projectName`
- [x] current project name is still rendered through existing `AppShell` logic
- [x] fix is minimal and does not remove existing features

_Forrás: `CHANGELOG (21).md`_

## [Unreleased] - 2026-03-31 20:40 UTC

### Requirement checklist for this round
- [x] Releases default to a compact list view similar to a deployment registry.
- [x] Release detail keeps the expanded detailed view with changelog excerpt and deployment comment.
- [x] Auto release detection was added so a fresh GitHub commit can surface as a candidate row at the top of the release list.
- [x] Push to Jira preview/apply flow was added from selected release rows.
- [x] Dashboard cards were regrouped into Release / Capabilities / Integrations dashboard sections.
- [x] Release dashboard now contains tracked releases, unreleased groups, backfill candidates and release candidates.
- [x] Capabilities dashboard now groups capabilities with open parity alerts.
- [x] Integrations dashboard is kept as a dedicated grouped section.
- [x] Sidebar no longer exposes separate Releases / Capabilities / Integrations / Traceability entries.
- [x] Header was simplified so the active project name is centered and warning remains on the right.
- [x] Automation CSV export was fixed to export actual backfill candidate rows instead of empty output.
- [x] New versioning PDF + MD pair was generated and linked here.

### Added
- Auto-generated GitHub release candidate detection via `/api/release-detection`.
- Push to Jira preview via `/api/jira/push-preview`.
- Push to Jira apply via `/api/jira/push-apply`.
- Grouped dashboard sections for Release / Capabilities / Integrations.
- Release candidate and backfill candidate support in the shared type system.
- Seeded ReleaseGovernance project data so the governance project itself can demonstrate grouped dashboards and CSV export.

### Changed
- Releases page now supports list/detailed toggle, selection and Push to Jira workflow.
- Release detail page now surfaces changelog excerpt and deployment comment more explicitly.
- Sidebar navigation was simplified to Projects / Dashboard / Automation / Import.

### Fixed
- CSV export now uses real backfill rows instead of generating an empty file when candidates exist.
- Release center now shows a latest auto-detected candidate row instead of remaining stale after new commits.

_Forrás: `CHANGELOG (8).md`_

## [Unreleased] - 2026-04-01 00:45 UTC

### Fixed
- Removed the remaining invalid `projectName` prop usage from:
  - `app/projects/[projectId]/traceability/page.tsx`
- Restored missing helper exports in `lib/project-overrides.ts` used by:
  - `components/import-studio.tsx`
  - `components/project-upload-modal.tsx`
  - `hooks/useTenantWorkspace.ts`
- Added optional fields to `ReleaseCandidate` typing so project upload / release candidate UI can compile safely.

### Why this was needed
- The previous AppShell hotfix was incomplete and the Next.js build still failed on the traceability page.
- The current repo snapshot also contained UI imports whose helper exports were missing, which would have blocked the next build stage.

### Verification checklist
- [x] `traceability/page.tsx` no longer passes `projectName`
- [x] repo-wide scan for `AppShell projectName=` returns no remaining matches in app/components
- [x] missing project upload / release candidate helpers are exported again
- [x] candidate UI handles optional data without type failure

_Forrás: `CHANGELOG (27).md`_

## [Unreleased] - 2026-04-01 18:20 UTC

### Changed
- Simplified the sidebar by removing redundant contextual filler blocks that were taking space away from navigation.
- Removed the duplicated project workspace header strip from project pages.
- Added mobile quick navigation with an explicit Project shortcut so users can get back to the project main page.
- Reworked dashboard stat sections to use two cards per row on mobile for better space efficiency.
- Reworked the releases page so the desktop column header panel is hidden on mobile and each release renders in a compact two-column mobile card layout.

### Verification checklist
- [x] redundant project workspace header removed
- [x] sidebar filler blocks removed
- [x] mobile quick-nav includes Project
- [x] dashboard stat cards render two-per-row on mobile
- [x] releases mobile view no longer wastes space with a standalone header panel

_Forrás: `CHANGELOG (21).md`_

## [Unreleased] - 2026-04-01 18:45 UTC

### Added
- Restored automatic GitHub-driven release candidate detection on the Releases page so new commit/deploy signals can create a new candidate row at the top when settings are present.
- Restored Jira-compatible CSV export for Jira-less release rows.
- Restored Push to Jira preview + apply flow for Jira-less deployed functionality.
- Added mobile-friendly 2-column dashboard cards and a dedicated Project quick-nav button.

### Changed
- Removed redundant workspace/project duplicate header usage from project pages and simplified the shell header to the active project name + warning state.
- Reworked the Releases page so the Vercel-style list view remains the default while keeping a detailed view toggle.
- Reworked mobile release cards into a compact 2-column information layout instead of oversized stacked cards.

### Fixed
- Prevented release-governance layout changes from accidentally removing governance-critical actions (auto release detection, Jira CSV export, Push to Jira).
- Reduced wasted vertical space in mobile dashboard sections by using a denser responsive card grid.
- Removed redundant sidebar/header chrome that had no governance value and consumed space.

### Checklist
- [x] Lista nézet az alapértelmezett a Releases oldalon
- [x] Új deploy/commit esetén automatikus release candidate keletkezhet
- [x] Detailed view megmaradt
- [x] Push to Jira gomb és preview/apply flow elérhető
- [x] Jira backfill CSV export elérhető
- [x] Dashboard három csoportban jelenik meg
- [x] Felesleges kék ikonok / redundáns header eltűntek
- [x] Mobilon a csempék sűrűbben, 2 oszlopban jelennek meg
- [x] Mobilon van Project gomb a visszalépéshez

_Forrás: `CHANGELOG (23).md`_

# 2026-04-03 — ai-delivery preview build fix

## Problem
Preview deployments on the `phase1-foundation-packages-20260402` branch repeatedly failed on Vercel.
The real root cause was not the number of commits, but build-visible delivery artifact files under `ai-delivery/.../app/...` that imported non-existent relative module paths.

## Root cause
- delivery `.tsx` files were included in repository-wide TypeScript checking
- mirrored app-route artifacts referenced `../../../../packages/...` and `../../../../../../packages/...` targets that did not exist at those resolved locations
- each additional commit retriggered a preview deployment on the same still-broken branch, multiplying failures

## Fix
- build-safe alias resolution support was added for the missing delivery module paths
- the preview branch recovered and later Vercel preview deployments reached READY state

## Governance impact
This incident establishes a new delivery rule:
AI delivery code artifacts committed inside build-visible repository paths must either be build-safe, have valid import resolution, or stay outside the main build/typecheck scope.

_Forrás: `CHANGELOG.ai-delivery.2026-04-03.build-fix.md`_

## [1.0.1] - 2026-04-03

### 🔒 Governance sync guardrails
- A shared governance pack common_admin és append-only changelog szabályai helyi szinten is visszahivatkozva.
- A governance subtree szinkronoknál tilos a helyi changelog történet romboló felülírása.

---

_Forrás: `CHANGELOG.md`_

## [1.0.2] — 2026-04-03

### 🔧 Governance sync
- `.governance/controller.md` kiegészítve a canonical governance controller hiányzó szekcióival: `Common Admin canonical-source rule` és `Append-only changelog rule`.
- Összhang helyreállítva a Hobbeast és Pubapp controller fájlokkal.

_Forrás: `CHANGELOG.md`_

## [releasegovernance:platform-v0.2.0] - unreleased

### Planned
- Live toolchain ingestion and deployment visibility for GitHub, Jira, Vercel and Supabase.
- Persisted governance data model with stronger tenant isolation.
- CI-enforced release operations, validation workflows and CODEOWNERS-ready rollout.

---
## [1.0.3] - 2026-04-06

### Added
- Release dashboard now renders auto-detected `releaseCandidates` as a first-class section with approve action, so new commit/deploy detections no longer remain hidden in local override storage.
- Jira backfill CSV export now prioritizes unresolved `backfillCandidates`, ensuring the exported CSV remains populated even when Jira-less release rows are not the authoritative backlog source.
- Project dashboard now follows the requested grouped structure: Release dashboard, Capabilities dashboard, Integrations dashboard.
- New versioning pair added for this delivery: `versioning/v1.0.3_26040601_business-request-summary.pdf` and `versioning/v1.0.3_26040601_ai-dev-prompt.md`.

### Changed
- Sidebar navigation simplified to project-level grouping; separate Releases / Capabilities / Integrations buttons removed from the project nav in favor of a single Project dashboard entry plus Import and Automation.
- Header layout updated so the active project name is centered and the deployment warning badge remains on the right.
- Release detection now passes the latest governed release date to avoid unnecessary duplicate candidate creation when the newest commit is not newer than the latest shipped release row.
- Runtime project resolution now merges custom uploaded projects with seed projects consistently across shell and detail routes.

### Fixed
- Release detail page now reads the merged governed project state instead of seed-only data, so approved/imported runtime releases can be opened reliably.
- Automation page now resolves project state through the runtime project hook instead of seed-only lookup.
- Mobile navigation keeps a direct `Project` quick button while preserving access to Import and Automation.
## [1.0.4] - 2026-04-07

### Added
- Introduced a shared Integrations module utility (`lib/integrations.ts`) that standardizes canonical integration identity, inventory deduplication, category grouping, and normalized integration testing behavior across projects.
- Added a project-scoped Integrations test API route (`/api/projects/[projectId]/integrations/test`) supporting single-card and test-all execution with per-item results.
- Added versioning artifacts for this delivery:
  - `versioning/v1.0.4_26040701_business-request-summary.md`
  - `versioning/v1.0.4_26040701_business-request-summary.pdf`
  - `versioning/v1.0.4_26040701_ai-dev-prompt.md`
  - `versioning/v1.0.4_26040701_final-coder-prompt.md`

### Changed
- Integrations UI now renders canonical inventory cards only once (unless explicitly separated by `instanceKey`), grouped under explicit category sections with stable ordering.
- Integration contract now includes endpoint metadata (`endpointName`, `endpointUrl`, `resourceLocation`) and normalized test result fields.
- Integrations page now includes both per-card "Test integration" and page-level "Test all" actions with explicit loading/success/failure feedback.
- Project override merge/import logic now applies shared canonical integration deduplication instead of id-only dedupe.

### Fixed
- Removed silent integration test failures by exposing explicit error states per-card and for bulk runs.
- HTTP integration checks now capture actual status codes and classify 2xx as success; non-HTTP/no-endpoint checks now return readable operational failures.
