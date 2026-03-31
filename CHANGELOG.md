# Changelog

Read this whole file before starting work. Do not remove previously delivered functionality from the codebase. New changes must always be appended with timestamp and context. Never replace the file contents with only the newest change.

## Versioning references
- `versioning/business_request_01000001.pdf`
- `versioning/ai_dev_prompt_01000001.md`
- `versioning/business_request_01000002.pdf`
- `versioning/ai_dev_prompt_01000002.md`

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

## [0.1.0-mvp] - 2026-03-28

### Added
- Multi-tenant B2B web application shell for ReleaseGovernance.
- Login placeholder and authenticated session shell.
- Workspace and project selector with seeded governed projects.
- Project dashboard with release center summary, capability summary, parity alerts and integrations visibility.
- Release detail view with surface badges, backend/shared-contract flags and Jira traceability blocks.
- Capability registry view.
- Integrations hub view for GitHub, Jira, Vercel, Supabase and Lovable references.
- Traceability view for requirements-to-release visibility.
- Automation starter kit view.
