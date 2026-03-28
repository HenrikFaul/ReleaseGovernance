# ReleaseGovernance MVP summary

## What is included
- Multi-tenant B2B webapp scaffold in Next.js
- Sign-in shell and workspace/project selection
- Hobbeast seeded as first project context
- Project dashboard
- Release center and release detail views
- Capability registry
- Integrations hub
- Traceability view
- Automation starter kit view
- Governance SQL schema for Supabase
- Release impact JSON schema and YAML example
- Capability and integration registry starter files
- GitHub Action validation starter and CODEOWNERS template

## Jira documentation created in RLG
- RLG-1 Epic: Governance platform foundation and tenant/project model
- RLG-2 Epic: Impact engine, parity alerts and governance compliance
- RLG-3 Epic: Release center, capability registry and traceability
- RLG-4 Epic: External integrations, ingestion and deployment visibility
- RLG-5 Epic: Policy files, automation templates and release operations
- RLG-6 Story: Build authenticated workspace and project selection shell
- RLG-7 Story: Build project dashboard with release center, capability registry and parity alerts
- RLG-8 Story: Build release detail view with surfaces, backend impact and Jira traceability
- RLG-9 Story: Implement impact engine and parity recommendation logic
- RLG-10 Story: Build integrations hub for GitHub, Jira, Vercel, Supabase and Lovable references
- RLG-11 Story: Ship release-impact standard, capability registry schema and starter automation templates

## Important current limitations
- Uses seeded mock data for the UI; live GitHub/Jira/Vercel/Supabase ingestion is not wired yet
- Authentication is a placeholder shell; replace with Supabase Auth or SSO
- The included GitHub Action is a starter validator, not yet a full parity engine workflow
- No deployment was performed from here
