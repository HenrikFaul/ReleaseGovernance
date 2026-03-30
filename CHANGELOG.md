## [Unreleased] - 2026-03-30 00:05 UTC

### Added
- Per-project Jira connection settings persistence in the Import Studio. Jira URL, email, token and preview-limit preferences are now stored locally and restored when returning to the same governed project.
- Jira test query workflow with project-locked filtering and a default preview of Jira key, summary, status, type, created and parent fields.

### Fixed
- Import Studio no longer silently forgets Jira credentials after refresh or navigation. Settings must now be explicitly saved and are scoped to the selected project key (RLG / SYN / HOB).
- Jira queries are now forced through the selected ReleaseGovernance project key so Syncfolk cannot accidentally query HOB, Hobbeast cannot accidentally query RLG, etc.
- Restored the canonical `BackfillCandidate` type on `ProjectRecord` so project dashboard/backfill surfaces compile consistently when they read `project.backfillCandidates`.

## [Unreleased] - 2026-03-30 00:20 UTC

### Fixed
- Repaired a type regression where dashboard and backfill-aware pages expected `project.backfillCandidates`, but the shared `ProjectRecord` interface no longer declared that field.
- This fix is intentionally type-only and does not change working Hobbeast or Syncfolk data payloads.
