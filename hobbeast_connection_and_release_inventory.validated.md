# Hobbeast – validated connection, backend contract and release inventory

## Why this validated version exists
The original connection/release inventory was useful, but it mixed:
- current uploaded repo reality
- broader earlier workstream claims
- Jira backlog intentions

This validated version keeps the same purpose, but interprets every item through the lens of the **uploaded repo + Jira CSV + repo release note**.

## 1. Connection / integration inventory

| Connection / integration | Functional role | Current uploaded repo evidence | Current status | Releváns Jira |
|---|---|---|---|---|
| Supabase Auth | auth, signup, OTP verify, password reset, session handling | `src/pages/Auth.tsx`, `src/hooks/useAuth.tsx` | Implemented | `HOB-26, HOB-31` |
| Supabase Postgres – core app schema | profiles, events, participants, notifications, external events, trip plans | migrations under `supabase/migrations`, generated Supabase types | Implemented with warning | `HOB-28, HOB-36, HOB-94` |
| Supabase Realtime / notifications | notification bell and unread state | `src/hooks/useNotifications.tsx`, notification migrations | Implemented | `HOB-8, HOB-21` |
| Supabase Edge Function – `place-search` | normalized venue discovery | `supabase/functions/place-search/index.ts` | Implemented | `HOB-141, HOB-142, HOB-143, HOB-144, HOB-145` |
| Supabase Edge Function – `mapy-routing` | route and elevation proxy | `supabase/functions/mapy-routing/index.ts` | Implemented | `HOB-85, HOB-90, HOB-93, HOB-94` |
| Supabase Edge Functions – external sync | Ticketmaster / SeatGeek search + sync | `sync-ticketmaster-events`, `sync-seatgeek-events`, `sync-external-events` | Implemented | `HOB-4, HOB-12, HOB-13` |
| Supabase Edge Function – `eventbrite-import` | Eventbrite admin import/search path | `supabase/functions/eventbrite-import/index.ts` | Implemented but partial | `HOB-4` |
| Geoapify | primary place search/geocoding provider | place-search edge function | Implemented | `HOB-141, HOB-143` |
| TomTom | POI enrichment / fallback | place-search edge function | Implemented | `HOB-141, HOB-144` |
| Mapy.com | trip planning, elevation, route continuity | Mapy client libs, planner component, edge proxy | Implemented with warning | `HOB-85, HOB-87..97` |
| Ticketmaster | external event source | edge functions + normalization libs | Implemented | `HOB-4, HOB-12` |
| SeatGeek | external event source | edge functions + normalization libs | Implemented | `HOB-4, HOB-13` |
| Eventbrite | external event source / admin import | admin import UI + edge function | Implemented but partial | `HOB-4` |
| Lovable / Vite web surface | current web delivery scaffold | repo structure, README, `.lovable` memory | Implemented | — |

## 2. Shared backend contract inventory

| Contract element | What it means product-wise | What it means technically in the uploaded repo | Current status | Releváns Jira |
|---|---|---|---|---|
| `profiles` | user profile, preferences, privacy | core profile object | Implemented | `HOB-26, HOB-31, HOB-37` |
| `events` | first-party event lifecycle | create/edit/detail base object | Implemented | `HOB-27, HOB-32` |
| `event_participants` | RSVP / waitlist / operational state | participant list + state transitions | Implemented | `HOB-5, HOB-14, HOB-15, HOB-16, HOB-17` |
| `external_events` | cached external marketplace events | separate external cache table | Implemented | `HOB-4, HOB-11, HOB-12, HOB-13` |
| `notifications` + preferences | retention / lightweight re-engagement | notification bell + preference-backed read state | Implemented | `HOB-8, HOB-21` |
| `event_trip_plans` | event-linked route continuity | persisted trip plan table + helpers | Implemented | `HOB-85, HOB-94` |
| `organizer_messages` / `organizer_audit_log` | organizer operational logging and message persistence | referenced in UI, generated types and release note; matching migrations are not present in the uploaded zip | Partial / remote-contract dependency | `HOB-18, HOB-43` |
| AI trip-planning request/response schema | automation-ready route contract | library-level schema / audit / proposal helpers | Partial | `HOB-86, HOB-98, HOB-99, HOB-102` |
| hidden hubs / community pulse objects | intelligence layer | not evidenced in uploaded repo | Planned only | `HOB-162, HOB-176` |

## 3. Release inventory

| Area | Current status | Honest reading |
|---|---|---|
| Repo build | Green locally | `npm run build` passes on the uploaded repo |
| Repo release note | Present | `docs/RELEASE_v0.9.0.md` provides a useful baseline, but it is not a formal production audit |
| Web surface | Strong current progress | Discovery, event lifecycle, organizer runtime, places and trip planning are materially present |
| Supabase foundation | Present with drift risk | Core migrations exist, but some typed remote objects used by the UI are not backed by migrations in the zip |
| External integrations | Strong current progress | Ticketmaster, SeatGeek, Eventbrite, Geoapify, TomTom and Mapy paths are all visible in the upload |
| Advanced analytics / intelligence | Not current-runtime-proven | Keep as planned/governance items, not as shipped runtime |
| Parity / documentation | Backlog/governance | Still important and should stay visible in ReleaseGovernance |

## 4. Main drift and release risks

### 4.1. Broader markdown claims vs current repo evidence
The uploaded markdowns described a larger interpreted runtime than the uploaded current repo can independently prove.  
This is why the validated pack separates **repo-evidenced current runtime** from **planned / not currently evidenced**.

### 4.2. Remote-schema dependency
The uploaded repo references certain Supabase contract objects (notably organizer-side tables) through generated types and UI, but those tables are not fully represented by migrations in the zip.  
This means:
- frontend build confidence is real,
- but backend completeness confidence is still only **warning**.

### 4.3. Duplicate Jira families
The authoritative Jira CSV contains duplicate exact-summary issue families.  
All are valid traceability records, but release/capability mapping must use canonical representatives.

### 4.4. Advanced-intelligence overclaim risk
Hidden hubs, community pulse and richer organizer analytics should not be shown as current shipped runtime until direct repo/runtime evidence exists.

## 5. Recommended governance usage
Use this validated inventory when you need to:
1. show what Hobbeast currently has in the uploaded repo
2. keep all valid Jira issues imported without overclaiming shipped runtime
3. separate current web/Supabase progress from parity/docs/intelligence follow-up
4. seed Hobbeast cleanly into ReleaseGovernance with a safer `warning` deployment posture
