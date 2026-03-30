# CHANGELOG

Read this whole file before starting work. Do not remove previously delivered functionality from the codebase. New changes must always be appended with timestamp and context. Never replace the file contents with only the newest change.

## [Unreleased] - 2026-03-30 06:55 UTC

### Fixed
- Extended the canonical `ImportedJiraIssue` type with optional preview fields (`status`, `issueType`, `created`, `parentKey`) so the Import Studio Jira test table matches the shared TypeScript contract.
- Removed another shared-type regression where UI preview code evolved faster than the central domain interface.

### Engineering note
- When a UI table renders extra imported fields, the shared type must be updated in the same patch as the UI/API change.
