# Governance operating model

## Required metadata per governed change
- surfaces affected
- backend/shared-contract/schema flags
- integration changes
- Jira links or backfill-required flag
- parity required updates
- release notes summary

## Enforced files
- `.release/release-impact.yaml`
- `governance/capabilities.yaml`
- `governance/integrations.yaml`

## Release readiness
A change is not release-ready when:
- Jira linkage is missing and backfill is not explicitly declared
- backend/shared-contract changed but no parity review is recorded
- integration changes are not declared
- release notes are missing
