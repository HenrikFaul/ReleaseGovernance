# Hobbeast – validated detailed feature inventory

## How this file differs from the original detailed inventory
This validated version keeps the original business + technical spirit, but changes the evidence model:

- `jiraissues_HOBBEAST.csv` = authoritative source for which Jira keys are real
- the uploaded current repo = authoritative source for what is currently evidenced in code
- broader markdown claims are kept only where the uploaded repo or repo docs support them
- exact-summary duplicate Jira families stay in traceability, but capability/release mapping uses a canonical representative to avoid double counting

## Evidence level legend
- **Repo-evidenced** = directly supported by files in the uploaded repo
- **Repo-evidenced but partial** = some scaffolding/UI is present, but not enough to claim a full runtime
- **Jira/spec only in current upload** = present in Jira and/or earlier narrative, but not strongly evidenced by the uploaded repo

## Detailed matrix

| ID | Feature domain | Business feature | Technical interpretation in the current uploaded repo | Current repo status | Releváns Jira |
|---|---|---|---|---|---|
| HOB-V-01 | Discovery | Discovery filters, source blending and event search | `src/pages/Events.tsx` implements source filter, search, distance filter, category-driven logic and blending of internal + external events. | Repo-evidenced | `HOB-1, HOB-3, HOB-4, HOB-11, HOB-12, HOB-13, HOB-29, HOB-35` |
| HOB-V-02 | Account / profile | Auth, OTP verification, password reset and profile preferences | `src/pages/Auth.tsx` and `src/pages/Profile.tsx` show real auth, OTP verification, reset-password, privacy and profile editing behavior. | Repo-evidenced | `HOB-8, HOB-21, HOB-26, HOB-31, HOB-37` |
| HOB-V-03 | Notifications / retention | Notification bell, preferences and upcoming-event reminder posture | The repo has `notifications` + `notification_preferences` handling, bell dropdown and reminder-oriented UI modules; scheduled reminder automation is still limited. | Repo-evidenced but partial | `HOB-8, HOB-21` |
| HOB-V-04 | Event lifecycle | First-party event creation, editing and detail lifecycle | Create/edit/detail flows exist, including validation, normalized place fields and first-party event handling. | Repo-evidenced | `HOB-27, HOB-32, HOB-34` |
| HOB-V-05 | RSVP / participation | Waitlist-aware participation lifecycle | Join/leave logic and waitlist-aware behavior are present in event detail / participant flows. | Repo-evidenced | `HOB-5, HOB-15, HOB-16` |
| HOB-V-06 | Organizer runtime | Organizer mode and attendee workspace | Organizer mode entry, attendee workspace, note drawer, status transitions, CSV export and message persistence exist in the repo. | Repo-evidenced | `HOB-2, HOB-14, HOB-17, HOB-18, HOB-38, HOB-43` |
| HOB-V-07 | Check-in | Invite-code / check-in admin flow | Organizer dashboard clearly supports operational participant-state handling. Invite-code/check-in flow is evidenced; QR-specific implementation is not strong enough to call fully shipped. | Repo-evidenced but partial | `HOB-41` |
| HOB-V-08 | External events | Ticketmaster + SeatGeek cache/sync + Eventbrite import path | The repo contains `external_events`, Ticketmaster/SeatGeek edge functions and an Eventbrite admin path. | Repo-evidenced | `HOB-4, HOB-11, HOB-12, HOB-13` |
| HOB-V-09 | Places | Geoapify/TomTom normalized venue discovery | `place-search` edge function + UI wrappers implement normalized provider-independent places logic. | Repo-evidenced | `HOB-141, HOB-142, HOB-143, HOB-144, HOB-145, HOB-148, HOB-149` |
| HOB-V-10 | Trip planning core | Mapy route planning, map UX, elevation and persistence | The repo contains Mapy planner UI, route rendering, elevation, persistence and read-only detail display. | Repo-evidenced | `HOB-85, HOB-87, HOB-88, HOB-89, HOB-90, HOB-91, HOB-93, HOB-94, HOB-95, HOB-96, HOB-97` |
| HOB-V-11 | Trip planning AI readiness | Schema, audit/quota and proposal scaffolding | AI-oriented request/response schema, quota/audit types and proposal helpers exist, but they should be interpreted as readiness rather than a shipped autonomous runtime. | Repo-evidenced but partial | `HOB-86, HOB-98, HOB-99, HOB-102` |
| HOB-V-12 | Backend foundation | Supabase schema and operational foundations | Core migrations exist for the main app paths. Some typed remote tables used by the UI/release note are not backed by migrations in the uploaded zip, so the correct health is warning. | Repo-evidenced but partial | `HOB-28, HOB-36` |
| HOB-V-13 | Organizer analytics | Source-aware analytics and organizer insight layer | Not strongly evidenced in the current upload. Keep as planned. | Jira/spec only in current upload | `HOB-6, HOB-19, HOB-24, HOB-203` |
| HOB-V-14 | Community intelligence | Hidden hubs / community pulse / opportunities | Not evidenced in the current upload. Keep as planned. | Jira/spec only in current upload | `HOB-162, HOB-176, HOB-205` |
| HOB-V-15 | Venue / partner mode | Venue capability model and partner profile layer | Not evidenced in the current upload as a dedicated runtime. | Jira/spec only in current upload | `HOB-7, HOB-20, HOB-39` |
| HOB-V-16 | Parity / docs | Cross-surface parity, contract backfill and documentation | Important governance backlog, but not current runtime. | Jira/spec only in current upload | `HOB-199, HOB-200, HOB-201, HOB-202, HOB-203, HOB-204, HOB-205, HOB-207, HOB-211` |

## Duplicate Jira handling used by this validated pack
- `HOB-140` / `HOB-141` → canonical representative: `HOB-141`
- `HOB-208` / `HOB-209` / `HOB-210` / `HOB-211` → canonical representative: `HOB-211`
- `HOB-205` / `HOB-206` → canonical representative: `HOB-205`

## Current best-fit management conclusion
The current uploaded Hobbeast repo is strongest on:
- web flows
- organizer operations
- external-event integration
- normalized places
- Mapy trip planning
- Supabase-backed product foundations

The main gap is **not** “nothing exists”, but rather:
- advanced runtime analytics / intelligence claims being broader than the current repo evidence
- parity / documentation / release-governance follow-up still needing explicit closure
