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
