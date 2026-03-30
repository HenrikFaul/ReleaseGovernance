# CHANGELOG

Read this whole file before starting work. Do not remove previously delivered functionality from the codebase. New changes must always be appended with timestamp and context. Never replace the file contents with only the newest change.

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
