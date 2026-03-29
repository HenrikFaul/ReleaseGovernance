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

## [Unreleased] - 2026-03-29 19:20 UTC

### Added
- Hobbeast seed now imports the full validated Jira universe from `jiraissues_HOBBEAST.csv` as clickable imported Jira records with summary, description and labels preserved.
- Hobbeast release grouping now reconstructs released current-workstream baselines and unreleased parity/backlog groups from the uploaded inventories plus validated Jira export.
- Hobbeast capability registry now separates implemented current-workstream domains from Jira/spec-only follow-up domains.

### Changed
- Hobbeast Jira linkage now treats `jiraissues_HOBBEAST.csv` as the authoritative issue-validity source, while the uploaded Hobbeast markdown inventories are used as the authoritative functional interpretation layer. fileciteturn87file14turn87file8turn87file3
- Hobbeast now distributes all 186 valid Jira issues into governance-friendly buckets:
  - 157 issues mapped to released current-workstream groupings
  - 29 issues mapped to unreleased parity / marketplace / documentation follow-up groupings
- Hobbeast dashboard, release center and capability registry are no longer limited to a tiny placeholder set of linked Jira issues.

### Fixed
- Removed the misleading Hobbeast placeholder state where only a handful of Jira links appeared across releases despite a much larger validated Jira export.
- Prevented loss of valid Hobbeast Jira issues by keeping the full validated Jira set in `importedJiraIssues` while separately classifying released vs unreleased domains.
- Preserved Syncfolk data and existing navigation/import functionality while replacing only the Hobbeast governance seed.

### Known issues
- Hobbeast release rows remain governance reconstruction units derived from inventories, repository evidence and Jira exports; they are not asserted as historical production deployment records.
- Live ingestion from the actual Hobbeast repositories, Vercel environments and Jira project is still preferable to static seed data.

### Planned next
- Promote the Hobbeast and Syncfolk validated-seed logic into the first-class import workflow so project imports can build these release/capability splits directly.
- Add UI filtering to switch between shipped capabilities, unreleased capabilities and the full imported Jira universe.
