# Hobbeast governance baseline for ReleaseGovernance

## What was imported
This seed refreshes **Hobbeast** as a governed project in the ReleaseGovernance workspace using a stricter, repo-validated interpretation than the earlier demo baseline.

The imported structure is aligned to the current ReleaseGovernance model:
- project card / workspace presence
- dashboard summary
- release center baseline
- capability registry
- integration registry
- parity alerts
- Jira traceability

## How the model was derived
The Hobbeast validation pack was built from:
1. the uploaded Jira export (`jiraissues_HOBBEAST.csv`) as the authoritative issue universe
2. the three uploaded Hobbeast inventories as the authoritative functional interpretation starting point
3. the uploaded current Hobbeast repo (`hobbeast-main.zip`) as the authoritative current-code evidence source
4. the repo release note (`docs/RELEASE_v0.9.0.md`) and Lovable memory files for current-surface evidence

## Imported interpretation
Because the upload is **not a formal production release audit**, the ReleaseGovernance seed uses a **repo-validated governance baseline** approach:

- the current shipped/runtime baseline is represented as one **web + Supabase baseline release**
- Mapy AI readiness is represented as **partial / readiness scaffolding**, not as a fake shipped AI release
- parity/documentation/community-intelligence items remain **planned capabilities / unreleased releases**
- all valid Jira issues remain imported for traceability, even if only a subset is elevated into the release/capability baseline
- exact-summary duplicate Jira families are retained in traceability, but only one canonical key is used in capability/release mapping to avoid double counting

## Seeded current runtime baseline
### Release
- `web-supabase-baseline-v0.9.0`

### Delivered or repo-evidenced capability groups
- discovery, filters and external event blending
- account, onboarding, profile and lightweight retention
- first-party event lifecycle and RSVP fundamentals
- organizer mode, attendee operations and messaging persistence
- Supabase schema and operational foundation
- Geoapify/TomTom normalized places and venue selection
- Mapy route planning, elevation and persisted trip continuity

### Partial current-repo capability groups
- Mapy AI / automation readiness and governance scaffolding

### Planned but not current-runtime capability groups
- organizer analytics and source-aware insight layer
- hidden hubs and community intelligence
- venue mode and partner experience
- parity, contract backfill and documentation cleanup

## Why deployment status is warning
The safest governance seed status is still **warning**, because:
- the uploaded repo builds locally, but that is not the same as a full production audit
- the repo depends on remote Supabase contract objects that are referenced in types/UI but are not all backed by migrations in the uploaded zip
- the source markdowns contained broader claims than the currently uploaded web repo can prove on their own
- parity/documentation follow-up issues are still open and strategically important

## Suggested next real step
Use `hobbeast-governance-import.json` as the import-ready baseline, then connect the real Hobbeast runtime stack directly (GitHub + deployment + Supabase schema introspection) so the project can move from a documentation-derived baseline to live governed state.
