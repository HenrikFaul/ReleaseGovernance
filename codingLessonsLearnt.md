# codingLessonsLearnt

Mindig ezzel kell kezdeni a fejlesztést: munka előtt olvasd végig ezt a fájlt elejétől a végéig. Az itt felsorolt hibákat nem szabad újra elkövetni. Minden új típusú hibát ehhez a fájlhoz kell hozzáappendelni, nem új fájlba írni, és nem szabad a régi tanulságokat törölni.

Kötelező szerkezet minden új bejegyzésnél:
- Tünet / log
- Kiváltó ok
- Javítás
- Megelőzés
- Ellenőrzés

### [025] Local override state must be used on project pages that need to reflect approvals
- **Tünet / log:** approved releases or backfill candidates would not appear on pages that still rendered only seeded mock data.
- **Kiváltó ok:** server/static pages used `getProject(...)` directly and ignored local override state written by import/approval workflows.
- **Javítás:** pages that need to reflect approvals must read merged state through `useProjectRecord(...)`, which combines base project data with local overrides.
- **Megelőzés:** every new workflow that writes project-local approval/import state must check all consumer pages and make sure they render merged state, not only the static seed.
- **Ellenőrzés:** approve a release candidate and verify it appears on Dashboard, Releases, Release detail, Traceability, Automation and Capabilities without manually editing `mock-data.ts`.

### [026] Feature detection pipelines need a staging step before they touch official release rows
- **Tünet / log:** if fetched GitHub/hosting data goes straight to Releases, there is no human checkpoint and incomplete metadata can pollute the governance registry.
- **Kiváltó ok:** missing candidate layer between raw external data and approved governance rows.
- **Javítás:** create a release-candidate stage with explicit required-check fields and a `Jóváhagy` action that routes the row either to Releases or Jira CSV backfill.
- **Megelőzés:** any external ingestion (GitHub, hosting, deployment provider) must land in a reviewable candidate state first.
- **Ellenőrzés:** fetched release candidates must show required checks, green-filled fields and approval routing to the correct destination.

### [027] External repo + hosting credentials are project-scoped settings, not global app state
- **Tünet / log:** without per-project persistence, Hobbeast credentials can overwrite Syncfolk or ReleaseGovernance credentials.
- **Kiváltó ok:** using a single global form state for multi-project integrations.
- **Javítás:** persist GitHub/hosting settings under a project-specific storage key and restore them when returning to the project.
- **Megelőzés:** all external integration settings in ReleaseGovernance must be namespaced by `projectId`.
- **Ellenőrzés:** save different GitHub/hosting settings for HOB, SYN and RLG, refresh, and verify each project restores its own values.
