# CHANGELOG

Read this whole file before starting work. Do not remove previously delivered functionality from the codebase. New changes must always be appended with timestamp and context. Never replace the file contents with only the newest change.

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
