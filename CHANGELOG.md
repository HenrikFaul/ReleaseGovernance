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


## [Unreleased] - 2026-04-01 00:45 UTC

### Fixed
- Removed the remaining invalid `projectName` prop usage from:
  - `app/projects/[projectId]/traceability/page.tsx`
- Restored missing helper exports in `lib/project-overrides.ts` used by:
  - `components/import-studio.tsx`
  - `components/project-upload-modal.tsx`
  - `hooks/useTenantWorkspace.ts`
- Added optional fields to `ReleaseCandidate` typing so project upload / release candidate UI can compile safely.

### Why this was needed
- The previous AppShell hotfix was incomplete and the Next.js build still failed on the traceability page.
- The current repo snapshot also contained UI imports whose helper exports were missing, which would have blocked the next build stage.

### Verification checklist
- [x] `traceability/page.tsx` no longer passes `projectName`
- [x] repo-wide scan for `AppShell projectName=` returns no remaining matches in app/components
- [x] missing project upload / release candidate helpers are exported again
- [x] candidate UI handles optional data without type failure
