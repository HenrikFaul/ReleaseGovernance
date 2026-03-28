# ReleaseGovernance

ReleaseGovernance is a multi-tenant B2B governance web application for teams shipping software across web, Android, iPhone and shared backend surfaces.

## What this MVP contains

- authentication shell and workspace/project selector
- project dashboard with release center, parity alerts and integration summary
- release detail view with Jira traceability and delivered capabilities
- capability registry
- integration registry
- traceability and parity follow-up view
- automation starter kit view
- governance SQL schema
- release-impact and registry starter files
- GitHub validation workflow starter

## Product model

This app is not Hobbeast-specific. Hobbeast is seeded as the first project example under a generic tenant/workspace model.

## Local run

```bash
npm install
npm run dev
```

## Deployment

Recommended target: Vercel.

Suggested production domain: `releasegovernance.dev`

## Source-of-truth model

- Jira = requirement and work traceability
- GitHub = code, releases and pull requests
- Supabase migrations = backend truth
- ReleaseGovernance = cross-tool impact and parity truth

## Next build steps

- replace mock data with Supabase-backed project data
- wire real GitHub, Jira, Vercel and Supabase ingestion jobs
- add RBAC and audit log
- add release creation and approval workflow
