# CHANGELOG

Read this whole file before starting work. Do not remove previously delivered functionality from the codebase. New changes must always be appended with timestamp and context. Never replace the file contents with only the newest change.

## [Unreleased] - 2026-03-30 08:25 UTC

### Fixed
- Removed the `node:fs` / `node:path` runtime-control dependency from code that is imported by client-rendered pages. Runtime control is now parsed from an embedded YAML string so webpack does not try to bundle unsupported `node:` scheme imports into the app shell.
- Kept the same runtime-control structure for sidebar and project-upload options while eliminating the Vercel webpack `UnhandledSchemeError`.

### Why this was needed
- The previous approach imported a helper that used `node:fs` and `node:path` from a component path that is included in page bundles.
- In Next.js/Vercel this caused webpack to fail on `node:` scheme resolution during production build.

### Follow-up
- If we later want the YAML file itself to become the single live source of truth at runtime, it must be loaded only on the server side or transformed at build time into a client-safe representation.
