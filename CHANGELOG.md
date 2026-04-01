# CHANGELOG

Read this whole file before starting work. Do not remove previously delivered functionality from the codebase. New changes must always be appended with timestamp and context. Never replace the file contents with only the newest change.

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
