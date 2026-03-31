# ReleaseGovernance development prompt - 01000002

## Azonosító
- versioning_id: `01000002`
- verzió-prefix: `01`

## Kötelező fejlesztési előfeltétel
1. Olvasd végig a `codingLessonsLearnt.md` teljes tartalmát.
2. Olvasd végig a `CHANGELOG.md` teljes tartalmát.
3. Az új üzleti kérést appendeld a changeloghoz checklist formában.
4. Regresszió ellenőrzéssel védd a meglévő működő funkciókat.

## Megértett üzleti kérés
- Releases oldalon alapértelmezett lista nézet kell, Vercel-szerű deployment registry megjelenítéssel.
- Új commit/deploy után automatikusan meg kell jelenjen egy új release candidate sor a lista tetején.
- A detailed view megmaradjon váltható nézetként, és tartalmazza a release-hez tartozó CHANGELOG kivonatot és deployment commentet.
- Készüljön el a Push to Jira funkció preview + apply folyamattal.
- A Push to Jira a meglévő Jira issue-k alapján parent / issue type / labels / summary / description javaslatot adjon.
- A preview szerkeszthető legyen, és csak Apply után történjen meg a Jira create/update.
- A projekt dashboard új csoportosítást kapjon: Release dashboard, Capabilities dashboard, Integrations dashboard.
- A Release dashboard tartalmazza: Tracked releases, Unreleased groups, Backfill candidates, Release candidates.
- A Capabilities dashboard tartalmazza: Capabilities, Open parity alerts.
- Az Integrations külön csoportban jelenjen meg.
- A bal oldali menüből kikerülnek a külön Releases, Capabilities, Integrations és Traceability gombok.
- A header közepén az aktív projekt neve jelenjen meg, jobb oldalon a warning jelzés maradjon.
- A Scope-aware navigation és Governance UI vNext elemeket el kell távolítani.
- A codingLessonsLearnt.md és CHANGELOG.md fejlesztés előtt kötelezően beolvasandó.
- A changelogot appendelni kell, és az új versioning fájlokra hivatkoznia kell.

## Kötelező implementációs checklist
- [ ] Releases lista nézet alapértelmezett
- [ ] Auto release candidate sor a lista tetején
- [ ] Detailed view működik
- [ ] CHANGELOG kivonat és deployment comment megjelenik release detailben
- [ ] Push to Jira preview működik
- [ ] Push to Jira apply működik
- [ ] Dashboard 3 csoportba rendezve
- [ ] Sidebar egyszerűsítés kész
- [ ] Header frissítés kész
- [ ] CHANGELOG hivatkozik a versioning fájlokra

## CHANGELOG hivatkozás
- `versioning/business_request_{uid}.pdf`
- `versioning/ai_dev_prompt_{uid}.md`
