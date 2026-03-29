# Changelog

All notable changes to ReleaseGovernance and the seeded tracked projects are documented in this file.

The format loosely follows Keep a Changelog. Release detail pages match entries by the pattern `[project-slug:release-version]`.

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

## [releasegovernance:platform-v0.2.0] - unreleased

### Planned
- Live toolchain ingestion and deployment visibility for GitHub, Jira, Vercel and Supabase.
- Persisted governance data model with stronger tenant isolation.
- CI-enforced release operations, validation workflows and CODEOWNERS-ready rollout.

## [hobbeast:web-v0.9.0] - 2026-03-27

### Added
- Normalized places search with provider orchestration and fallback logic.
- External discovery and organizer-facing foundation on the web and shared backend.
- Release governance visibility for Jira-linked delivery clusters and integration-sensitive release rows.

### Known issues
- Some delivery clusters still depend on follow-up parity work between web, backend and Android surfaces.
- Additional backfill and refinement may still be required for external event provider coverage.

## [hobbeast:mobile-android-v0.19.0] - 2026-03-28

### Added
- Android onboarding and organizer runtime coverage.
- Trip planner persistence and reminder-oriented engagement flow.
- Shared backend and contract-aware release registry visibility.

### Known issues
- Android parity still needs follow-up for some evolving web/provider payload changes.

## [syncfolk:web-v0.1.0] - 2026-01-05

### Added
- Auth shell, route protection and design-system baseline.
- B2C scheduling core represented as a governed release baseline in the release registry.
- Capability-level mapping that separates shipped B2C scope from unreleased enterprise scope.

### Changed
- Release details can now render matching changelog entries directly from CHANGELOG.md.

### Known issues
- Enterprise absence-planning backlog remains modeled as unreleased future scope rather than live product behavior.

## [Unreleased] - 2026-03-29 22:10 UTC

### Added
- Added a visible backfill lifecycle across dashboard, capabilities, traceability and automation pages.
- Added detection logic that matches imported Jira issues back to deployed-without-Jira candidates via unique tracking labels.
- Added clearer CSV export entry points so Jira backfill creation is reachable from the UI, not only implicit in the data model.

### Changed
- Jira backfill CSV now exports only unresolved deployed-without-Jira candidates.
- Resolved backfill candidates are now shown separately once their tracking labels appear on imported Jira issues.
