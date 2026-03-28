# ReleaseGovernance architecture

## Goal
Create a reusable governance layer that sits above Jira, GitHub, Vercel and Supabase and answers:
- what shipped
- on which surface
- with which backend or contract impact
- from which Jira work
- which other clients need parity follow-up

## High-level modules
- Auth and workspace shell
- Project dashboard
- Release center
- Capability registry
- Impact engine
- Integrations hub
- Traceability workspace
- Automation starter kit

## Deployment model
- Frontend: Next.js web app on Vercel
- Data: Supabase governance schema
- Ingestion: GitHub, Jira, Vercel, Supabase sync jobs or webhooks
- Design reference: Lovable metadata or project links only
