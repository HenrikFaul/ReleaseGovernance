# CHANGELOG

Read this whole file before starting work. Do not remove previously delivered functionality from the codebase. New changes must always be appended with timestamp and context. Never replace the file contents with only the newest change.

## [Unreleased] - 2026-03-29 23:10 UTC

### Fixed
- Reintroduced the Jira backfill feature in a compile-safe way by adding a canonical `lib/backfill.ts` helper and wiring Capabilities, Traceability and Automation pages to the same normalized source.
- Fixed a scoping regression where the Capabilities screen referenced `backfill` without defining it in the page scope.
- Centralized label normalization so backfill matching, UI badge rendering and CSV export do not drift apart.

### Notes
- This patch intentionally avoids touching the already working Hobbeast and Syncfolk governance data beyond optional backfill counts.
- Root-level documentation/export artifacts should be reviewed separately from runtime build fixes.
