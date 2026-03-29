# Hobbeast feature inventory – validated against Jira CSV and current uploaded repo

## Validation delta summary
- Existing `HOB-*` references in the uploaded markdown files: **all valid against `jiraissues_HOBBEAST.csv`**
- Invalid Jira keys removed: **none**
- Missing repo-evidenced keys added into the validated interpretation: `HOB-3, HOB-4, HOB-5, HOB-11, HOB-12, HOB-13, HOB-14, HOB-15, HOB-16, HOB-17, HOB-18, HOB-21, HOB-26, HOB-29, HOB-31, HOB-32, HOB-34, HOB-35, HOB-37, HOB-41, HOB-43, HOB-85, HOB-87, HOB-88, HOB-89, HOB-90, HOB-91, HOB-93, HOB-95, HOB-96, HOB-97, HOB-143, HOB-144, HOB-145`
- Current upload should be read with three evidence levels:
  - **Repo-evidenced in current upload**
  - **Repo-evidenced but partial**
  - **Jira/spec only in current upload**

## Current repo-evidenced Hobbeast feature groups

| Business feature | Current uploaded repo evidence | Integrations / surfaces | Current repo status | Releváns Jira |
|---|---|---|---|---|
| Discovery, filters and external event blending | Events/Explore pages show source filters, search, distance filtering, category logic and external-event blending from `external_events` plus Eventbrite search. | Webapp; Supabase; Ticketmaster; SeatGeek; Eventbrite | Repo-evidenced | `HOB-1, HOB-3, HOB-4, HOB-11, HOB-12, HOB-13, HOB-29, HOB-35` |
| Account, onboarding, profile and lightweight retention | Auth page has OTP verification and password reset; Profile has privacy/preferences; notification bell/preferences and upcoming-event reminder UI are present. | Webapp; Supabase Auth; Supabase Realtime | Repo-evidenced, with reminder workflow partial | `HOB-8, HOB-21, HOB-26, HOB-31, HOB-37` |
| First-party event lifecycle and RSVP fundamentals | Create/edit/detail flow, join/leave, waitlist-aware participation and normalized address/place binding are present. | Webapp; Supabase | Repo-evidenced | `HOB-5, HOB-15, HOB-16, HOB-27, HOB-32, HOB-34` |
| Organizer mode and attendee operations | Organizer mode entry, roster, status transitions, notes, invite-code handling, CSV export and message persistence are present in the organizer dashboard. | Webapp; Supabase | Repo-evidenced, QR/delivery automation partial | `HOB-2, HOB-14, HOB-17, HOB-18, HOB-38, HOB-41, HOB-43` |
| Supabase schema and operational foundation | Core migrations exist for profiles, events, participants, notifications, external events and trip plans. | Shared backend | Repo-evidenced, but remote-schema drift risk remains | `HOB-28, HOB-36` |
| Geoapify/TomTom normalized places | The place-search edge function and UI wrappers implement normalized place search, geocode, reverse geocode, merge/dedup and selected-place persistence. | Edge Functions; Webapp; Geoapify; TomTom | Repo-evidenced | `HOB-141, HOB-142, HOB-143, HOB-144, HOB-145, HOB-148, HOB-149` |
| Mapy trip planning core | Mapy route planning, map rendering, elevation, persisted trip plans, attribution and route open/share behavior are present. | Edge Functions; Webapp; Mapy.com | Repo-evidenced | `HOB-85, HOB-87, HOB-88, HOB-89, HOB-90, HOB-91, HOB-93, HOB-94, HOB-95, HOB-96, HOB-97` |
| Mapy AI / automation readiness | AI-oriented schema, service, audit/quota and proposal helpers exist as scaffolding. | Library / shared contract | Repo-evidenced but partial | `HOB-86, HOB-98, HOB-99, HOB-102` |

## Jira/spec only or not evidenced in the current uploaded repo

| Business feature | Why not counted as current runtime | Releváns Jira |
|---|---|---|
| Organizer analytics / source-aware insight | Current upload does not show a full organizer analytics runtime comparable to the broader markdown claims. | `HOB-6, HOB-19, HOB-24, HOB-203` |
| Hidden hubs / community intelligence | No direct repo evidence for `hidden_hubs`, `community_pulses`, `organizer_opportunities` or similar runtime objects. | `HOB-162, HOB-176, HOB-205` |
| Venue mode / partner experience | Place/venue selection exists, but not a dedicated venue mode or partner-profile layer. | `HOB-7, HOB-20, HOB-39` |
| Parity and documentation backfill | Important backlog and governance work, but not current shipped runtime. | `HOB-199, HOB-200, HOB-201, HOB-202, HOB-203, HOB-204, HOB-205, HOB-207, HOB-211` |

## Practical governance reading
The safest Hobbeast reading for ReleaseGovernance is:

- **current baseline** = web + Supabase baseline with strong progress on discovery, organizer ops, places and trip planning
- **partial current** = Mapy AI readiness and some reminder / QR / delivery nuances
- **planned** = analytics, hidden hubs/community intelligence, venue mode, parity/backfill/documentation
