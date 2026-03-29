# Hobbeast governance validation notes

## Inputs used
- uploaded repo: `hobbeast-main.zip`
- uploaded inventories:
  - `hobbeast_feature_inventory (1).md`
  - `hobbeast_feature_inventory_detailed (1).md`
  - `hobbeast_connection_and_release_inventory (1).md`
- uploaded Jira export: `jiraissues_HOBBEAST.csv`
- current project-wide governance templates:
  - `CHANGELOG.md`
  - `codingLessonsLearnt.md`

## What I validated

### 1. Jira key validity in the uploaded Hobbeast markdown files
- Result: **all currently referenced `HOB-*` keys are valid against the uploaded Jira CSV**
- Invalid keys removed because they do not exist in the CSV: **none**

### 2. Missing repo-evidenced Jira keys added into the validated Hobbeast inventories
These keys were not invalid before — they were just **missing from the uploaded Hobbeast inventories despite being strongly evidenced by the current uploaded repo**:

- `HOB-3` — Story: A fő eseményszűrők állapotkezelése legyen konzisztens és perzisztens
- `HOB-4` — Epic: External event integrations and marketplace expansion
- `HOB-5` — Epic: RSVP, ticketing and check-in lifecycle
- `HOB-11` — Story: Improve external event rendering and blending in the main events list
- `HOB-12` — Story: Integrate Ticketmaster sync and normalization into the external event ingestion pipeline
- `HOB-13` — Story: Integrate SeatGeek as a second external event source
- `HOB-14` — Story: Add attendee management tools for event organizers
- `HOB-15` — Story: Add capacity and waitlist handling to event participation
- `HOB-16` — Story: Add richer RSVP states and participation lifecycle
- `HOB-17` — Story: Add organizer-side attendee detail workspace and operator actions
- `HOB-18` — Story: Add event update, reminder and attendee communication tools
- `HOB-21` — Story: Add PWA, reminders and calendar-oriented retention features
- `HOB-26` — Epic: Core account, onboarding and profile management
- `HOB-29` — Epic: Core location, address and distance infrastructure
- `HOB-31` — Story: Implement onboarding, profile basics and preference editing
- `HOB-32` — Story: Implement native event creation flow and validation rules
- `HOB-34` — Story: Implement shared address autocomplete and location normalization
- `HOB-35` — Story: Implement profile-based distance filtering foundations
- `HOB-37` — Story: Implement profile privacy, location sharing and preference persistence
- `HOB-41` — Story: Build QR and invite-code based organizer check-in admin flow
- `HOB-43` — Story: Add attendee export and segmented organizer messaging workflow
- `HOB-85` — Mapy.com trip planning core integration
- `HOB-87` — Story: Select and implement web map renderer for Mapy.com trip planning
- `HOB-88` — Story: Build address and POI search UX with Mapy suggest and geocoding
- `HOB-89` — Story: Implement map click and reverse geocoding point selection
- `HOB-90` — Story: Implement route planning with start, end and waypoints
- `HOB-91` — Story: Render route geometry, markers and route summary on interactive map
- `HOB-93` — Story: Add elevation profile for hiking and biking routes
- `HOB-95` — Story: Implement Mapy attribution and provider-compliant trip planning UI
- `HOB-96` — Story: Add Mapy route open and share actions for saved trip plans
- `HOB-97` — Story: Add robust error handling and observability for Mapy trip planning
- `HOB-143` — Story: Implement Geoapify as the primary places, geocoding and reverse geocoding provider
- `HOB-144` — Story: Implement TomTom as premium POI enrichment and fallback layer for venue discovery
- `HOB-145` — Story: Implement normalized deduplication and merge rules for Geoapify and TomTom place results

### 3. Claims that were downgraded from broader markdown interpretation to current-upload reality
The uploaded source markdowns mixed broader historical/mobile/backend claims with the **current uploaded web repo**.  
In the validated pack, the following areas are treated more cautiously:

- `HOB-6`, `HOB-19`, `HOB-24`: organizer analytics / source-aware analytics are **not evidenced as a full current runtime** in the uploaded repo
- `HOB-162`, `HOB-176`: hidden hub / community intelligence is **not evidenced in the uploaded repo**
- `HOB-199`..`HOB-205`, `HOB-207`, `HOB-211`: these remain **planned parity / documentation / backfill** items, not current shipped runtime
- `HOB-86`, `HOB-98`, `HOB-99`, `HOB-102`: AI trip-planning readiness is treated as **scaffolding / readiness**, not as a fully shipped runtime flow

### 4. Duplicate Jira families detected in the authoritative CSV
These are all valid Jira issues, so they stay in the imported Jira universe.  
However, the **capability and release mapping** should use a canonical representative to avoid visual double counting:

- `HOB-140, HOB-141` → canonical: `HOB-141` (HOB-141 is the one referenced by the child stories and existing inventories.)
- `HOB-208, HOB-209, HOB-210, HOB-211` → canonical: `HOB-211` (HOB-211 is the member already referenced in the inventories and is the cleanest representative for governance mapping.)
- `HOB-205, HOB-206` → canonical: `HOB-205` (HOB-205 is the member already referenced in the inventories.)

### 5. Repo build / release evidence check
- Local `npm run build` on the uploaded repo: **passed**
- Repo release note found: `docs/RELEASE_v0.9.0.md`
- Important nuance: a green frontend build is **not** the same as a full production or schema audit

### 6. Most important current-state interpretation
The validated Hobbeast governance baseline should be read as:

- **current baseline** = a real web + Supabase baseline with external-event, place-search, trip-planning and organizer-flow progress
- **warning deployment health** = because the upload is not a full production audit and some UI-typed backend objects are not backed by migrations in the zip
- **planned / unreleased** = parity stories, documentation backfill, hidden hubs/community intelligence, full analytics interpretation, and AI automation hardening

## Recommended ReleaseGovernance import posture
- Keep **all valid CSV issues** as imported Jira traceability records
- Use the validated capability groups and releases from `hobbeast-governance-import.json`
- Do **not** count duplicate-summary Jira families twice in release/capability counters
- Keep deployment state at **warning**, not **healthy**
