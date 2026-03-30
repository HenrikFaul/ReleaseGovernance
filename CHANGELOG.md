# CHANGELOG

Read this whole file before starting work. Do not remove previously delivered functionality from the codebase. New changes must always be appended with timestamp and context. Never replace the file contents with only the newest change.

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
