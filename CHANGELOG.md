## [Unreleased] - 2026-03-29 22:20 UTC

### Fixed
- Hardened Jira backfill CSV export in the Automation screen so `labels` can be read safely whether the current data shape provides an array or a plain string.
- Removed a build blocker caused by calling `.join(" ")` on a value that was not always an array.

### Engineering note
- Build-fix patches must normalize heterogeneous seed/import data instead of assuming one exact runtime shape.
