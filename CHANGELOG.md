# Changelog

## Kötelező changelog rutin

Minden új fejlesztési vagy javítási kör **elején** ezt a teljes fájlt végig kell olvasni.

Kötelező szabályok:
1. A changelogban felsorolt korábbi funkciókat **nem szabad véletlenül kivenni** a kódból vagy regresszióval eltüntetni.
2. Minden új fejlesztést, javítást, importot, seed-frissítést, release- és Jira-governance változást **ehhez a fájlhoz kell hozzáfűzni**.
3. A fájl tartalmát **nem szabad lenullázni, felülírni vagy új changelog fájlba szétszedni**; csak appendelni szabad.
4. Minden új bejegyzéshez tartozzon:
   - dátum vagy timestamp,
   - verzió / scope,
   - Added / Changed / Fixed / Known issues bontás,
   - ha releváns, az érintett projekt vagy surface.
5. Kódmódosítás előtt mindig ellenőrizni kell, hogy a changelogban említett már leszállított funkciók továbbra is megvannak-e.
6. Seed/mock-data és import funkciók módosításakor külön ellenőrizni kell, hogy a korábban dokumentált capability-k, release-ek, integrációk és menüpontok nem vesznek-e el.
7. Jira-validálásnál a changelogot is frissíteni kell, ha a traceability logika vagy a capability/release mapping megváltozik.

## Ajánlott bejegyzésstruktúra

Minden új blokk a következő mintát kövesse:

## [Verzió vagy Unreleased] - YYYY-MM-DD
### Added
### Changed
### Fixed
### Known issues
### Planned next

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

## [Unreleased] - 2026-03-29

### Added
- Syncfolk seed now imports the full validated Jira issue universe from `jiraissues.csv` as clickable imported Jira records with summary, description and labels preserved.
- Syncfolk capability and release grouping now uses business-logical buckets that separate current B2C runtime coverage from enterprise backlog coverage.
- Changelog governance instructions were added to the top of this file as a mandatory read-first, append-only operating rule set.

### Changed
- Syncfolk Jira linkage now treats `jiraissues.csv` as the authoritative validity source and the uploaded markdown inventories as the authoritative functional interpretation layer. fileciteturn86file0turn86file3
- The Syncfolk governance seed now partitions the validated Jira set into:
  - implemented B2C/runtime-backed release groupings
  - unreleased/planned enterprise capability and unreleased-release groupings
- All valid imported Syncfolk Jira items now remain available for traceability instead of being aggressively cut down during validation.

### Fixed
- Removed invalid synthetic Syncfolk Jira keys from capability and release traceability mappings by validating them against the uploaded `jiraissues.csv`.
- Prevented loss of valid Jira issues during Syncfolk seed cleanup by restoring the full valid issue universe and grouping it into governance-friendly feature families.
- Preserved existing changelog content while moving the file to an explicit append-only governance model.

### Known issues
- Syncfolk release rows are still governance reconstruction units derived from inventory + Jira inputs, not historical deployment records.
- Live ingestion from the actual Syncfolk repository and deployment stack is still preferable to static seed data.

### Planned next
- Promote the validated Syncfolk import logic from static seed maintenance to first-class project import workflows.
- Add explicit UI filtering so users can switch between shipped capabilities, unreleased capabilities and all grouped Jira-backed work.
