# Changelog

All notable changes to ReleaseGovernance will be documented in this file.

The format is based on Keep a Changelog and this project follows semantic versioning from the point when live release automation is enabled.

## [0.1.0-mvp] - 2026-03-28

### Added
- Multi-tenant B2B web application shell for ReleaseGovernance
- Login placeholder and authenticated session shell
- Workspace and project selector with Hobbeast seeded as the first sample project
- Project dashboard with release center summary, capability summary, parity alerts, integrations and deployment visibility
- Release detail view with surface badges, backend/shared-contract flags and Jira traceability blocks
- Capability registry view
- Integrations hub view for GitHub, Jira, Vercel, Supabase and Lovable references
- Traceability view for requirements-to-release visibility
- Automation starter kit view
- Governance starter files, including release-impact schema and YAML examples
- Governance SQL schema for a dedicated backend model

### Changed
- Defined ReleaseGovernance as a generic platform that can host multiple product projects instead of a Hobbeast-specific internal tool

### Known issues
- Current GitHub-hosted build failed because Next.js typed routes were enabled while navigation links used plain string href values
- Confluence write-back is not yet automated from this environment
- Live GitHub, Jira, Vercel and Supabase ingestion is not yet wired into the MVP

### Planned next
- Wire the app to live Supabase governance tables
- Add real Jira, GitHub and Vercel ingestion
- Enable release-impact validation and parity recommendation workflows end-to-end
