## [Unreleased] - 2026-03-29 18:31 UTC

### Fixed
- Removed the hard dependency on importing a local `tenants` symbol from `lib/mock-data.ts` in project listing/API surfaces. The app now reads the default workspace through `getTenant("tenant_releasegovernance")`, which is more stable against seed refactors.
- Preserved the current sidebar, import workflow and project-specific navigation while fixing the projects API/page build blocker.

### Known issues
- Syncfolk capability cleanliness and Jira-validation quality must continue to be treated as a separate data-governance concern from build-only fixes. Build patches must not silently rewrite or degrade capability/release mappings.

### Planned next
- Keep capability cleanup isolated from build-fix patches.
- After the build is green, continue validating Syncfolk capability/release/Jira mapping against `jiraissues.csv` and the uploaded markdown inventories.
