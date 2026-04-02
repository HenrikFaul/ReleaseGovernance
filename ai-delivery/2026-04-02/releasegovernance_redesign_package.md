# ReleaseGovernance fullstack újratervezési csomag

## Státuszkezelési szabály
Ez a fájl a ReleaseGovernance újratervezési és fejlesztési csomag hivatalos végrehajtási alapja.

**Kötelező szabályok a végrehajtás során:**
- csak azt a tételt szabad kipipálni, amelyről ténylegesen ellenőrizve lett, hogy elkészült;
- a pipálás előtt ellenőrizni kell, hogy az adott elem megfelel-e a governance/controller/design/lessons elveknek;
- semmilyen már jól működő funkció nem sérülhet;
- minden fejlesztési lépésnél regressziós kockázatot kell vizsgálni;
- a checklist nem státuszjelentésre, hanem validált készültségkövetésre szolgál.

**Validált kész állapot definíciója:**
Egy elem csak akkor jelölhető késznek, ha:
1. implementálva lett,
2. a kapcsolódó működés ellenőrizve lett,
3. nem sérti a controller/design/lessons szabályokat,
4. nem ront el korábban működő funkciót,
5. ahol releváns, a route / build / type / UI / state működés is ellenőrizve lett.

---

## Kötelező governance alapok
A végrehajtásnak ezekkel összhangban kell történnie:
- `.governance/controller.md`
- `.governance/design-master-rules.md`
- `.governance/codingLessonsLearnt.md`
- helyi `CHANGELOG.md`
- szükség esetén `versioning/` artefaktumok

**Kötelező működési elvek összefoglalva:**
- a már működő funkciók nem sérülhetnek;
- a legkisebb regressziós kockázatú megoldást kell választani;
- UI/design érintettségnél mobile-first és auditált design megközelítés kell;
- a design nem boríthatja fel az adatmodellt, route-okat, auth flow-kat és backend szerződéseket;
- végén build/lint/typecheck/test/smoke ellenőrzés kell, ahol elérhető.

---

## Újratervezési cél
A jelenlegi ReleaseGovernance MVP teljes értékű, perzisztens, többprojektes governance platformmá fejlesztése úgy, hogy:
- megszűnjön a seed/mock-first működés dominanciája,
- a release, capability, integration, Jira traceability és parity logika konzisztens domain modellen fusson,
- az UI shell modern, mobile-first, workflow-first és auditálható legyen,
- az automatizmusok stabil backend workflow-ként működjenek,
- a rendszer később enterprise mélységig bővíthető maradjon.

---

## Jelenlegi állapot diagnózis

### Erősségek
- [ ] A fő domainfogalmak már kirajzolódtak
- [ ] Van működő Next.js app shell
- [ ] Van projektlista és projekt dashboard alap
- [ ] Van release center alap
- [ ] Van import irány
- [ ] Van project upload irány
- [ ] Van release detection kezdemény
- [ ] Van Jira push preview kezdemény

### Fő problémák
- [ ] A rendszer központi adatforrása még seedelt mock-data
- [ ] A kliensoldali localStorage override túl nagy szerepet kap
- [ ] Nincs valódi perzisztens multi-tenant governance adatmodell
- [ ] A backend egy része még thin route + fetch + client state logika
- [ ] A release detection még túl heurisztikus
- [ ] A Jira push még nem auditált governance workflow
- [ ] A capability jelenleg nem elsőrangú, release-kapcsolt entitás
- [ ] Az integrations hub még inkább inventory, mint health/config központ
- [ ] Az IA dashboard-heavy, nem elég workflow-first

---

## Célarchitektúra

### Termék szerkezete
A terméket 5 nagy domain workspace köré kell szervezni:
- [ ] Workspace / Portfolio
- [ ] Projects
- [ ] Releases
- [ ] Capabilities & parity
- [ ] Integrations & automation

### Fő user flow
- [ ] Workspace kiválasztás
- [ ] Projekt megnyitása
- [ ] Projekt governance overview
- [ ] Release intake vagy detection
- [ ] Release review
- [ ] Impact & parity review
- [ ] Jira traceability review
- [ ] Approval / push / closeout

---

## Új information architecture

### Globális elsődleges navigáció
- [ ] Workspace switcher
- [ ] Portfolio
- [ ] Projects
- [ ] Release inbox
- [ ] Capability registry
- [ ] Integration registry
- [ ] Automation runs
- [ ] Audit log
- [ ] Settings

### Projekt szintű másodlagos navigáció
- [ ] Overview
- [ ] Releases
- [ ] Capabilities
- [ ] Parity
- [ ] Jira traceability
- [ ] Integrations
- [ ] Imports
- [ ] Automation
- [ ] Settings

---

## Új domain modell

### Workspace
- [ ] workspace entitás definiálva
- [ ] workspace persistence kialakítva

### Project
- [ ] project entitás definiálva
- [ ] workspace-project kapcsolat definiálva
- [ ] project lifecycle/state mezők kialakítva

### Release
- [ ] release entitás definiálva
- [ ] release state és status külön kezelve
- [ ] source metadata kialakítva
- [ ] approval state kialakítva
- [ ] confidence score kialakítva

### Release surface
- [ ] release-surface mapping kialakítva
- [ ] impact level és parity requirement modellezve

### Capability
- [ ] capability entitás definiálva
- [ ] lifecycle és parity mezők kialakítva

### Capability release mapping
- [ ] capability-release kapcsolat definiálva
- [ ] surface státusz és evidence kapcsolva

### Integration
- [ ] integration entitás definiálva
- [ ] state / health / environment mezők kialakítva

### Jira artifact
- [ ] Jira artifact/link entitás definiálva
- [ ] release és capability linkelés támogatott

### Parity alert
- [ ] parity alert entitás definiálva
- [ ] severity / owner / state mezők kialakítva

### Audit event
- [ ] audit event entitás definiálva
- [ ] before/after payload támogatás kialakítva

---

## Új backend architektúra

### Stack döntések
- [ ] Next.js App Router frontend megmarad / validálva
- [ ] Route handler BFF réteg kijelölve
- [ ] Supabase/Postgres perzisztencia célarchitektúra rögzítve
- [ ] Supabase Auth / RBAC terv rögzítve
- [ ] külső integrációkhoz futási modell kijelölve
- [ ] audit/event réteg terve rögzítve

### Rétegek
- [ ] API/BFF layer definiálva
- [ ] Domain service layer definiálva
- [ ] Provider adapter layer definiálva
- [ ] Persistence layer definiálva
- [ ] Audit/event layer definiálva

### Provider adapterek
- [ ] Jira adapter
- [ ] GitHub adapter
- [ ] Vercel adapter
- [ ] Supabase hosting adapter
- [ ] Markdown import adapter
- [ ] CSV import adapter
- [ ] Excel import adapter
- [ ] Changelog parser adapter

### Fontos szabály
- [ ] Provider raw response közvetlen UI-kötése megszüntetve
- [ ] raw ingest -> normalization -> domain mapping -> audit trail lánc kialakítva

---

## Workflow-k

### A. Project onboarding workflow
- [ ] Project basics lépés
- [ ] Source systems megadása
- [ ] Connectivity test
- [ ] Preview
- [ ] Normalization
- [ ] Governance project létrehozás
- [ ] Initial baseline létrehozás

### B. Release detection workflow
- [ ] Repo source lekérdezés
- [ ] Commit / tag / release / changelog ingest
- [ ] Deployment source ellenőrzés
- [ ] Candidate generation
- [ ] Confidence scoring
- [ ] Manual review queue
- [ ] Approval vagy reject
- [ ] Approved release persistálás

### C. Jira push workflow
- [ ] Candidate rows kiválasztása
- [ ] Existing Jira link analysis
- [ ] Suggested parent/story/task mapping
- [ ] Editable preview
- [ ] Validation
- [ ] Apply
- [ ] External link persistálás
- [ ] Audit mentés

### D. Import workflow
- [ ] File ingest
- [ ] Schema detection
- [ ] Dry-run mapping
- [ ] Error report
- [ ] Merge strategy
- [ ] Apply
- [ ] Audit log

---

## UI újratervezési elvek

### Fő elv
- [ ] A cockpit workflow-first logikára átszervezve
- [ ] Nem dashboard-halmozás, hanem irányított munkaútvonalak
- [ ] Mobile-first audit teljesítve
- [ ] Overflow és responsive audit teljesítve
- [ ] Empty / loading / error state minden kritikus képernyőn

### Fő képernyők

#### 1. Portfolio / Workspace home
- [ ] projekt lista
- [ ] workspace release posture
- [ ] open parity alerts
- [ ] pending automation actions
- [ ] recently changed integrations

#### 2. Project overview
- [ ] current release
- [ ] pending release candidates
- [ ] capability posture
- [ ] parity summary
- [ ] integration health
- [ ] audit summary
- [ ] next actions panel

#### 3. Release inbox
- [ ] candidate / current / unreleased szegmensek
- [ ] bulk select
- [ ] review drawer
- [ ] source evidence panel
- [ ] Jira readiness panel

#### 4. Release detail
- [ ] release identity
- [ ] surfaces
- [ ] changelog evidence
- [ ] deployment evidence
- [ ] impacted capabilities
- [ ] linked Jira issues
- [ ] parity alerts
- [ ] audit timeline

#### 5. Capability registry
- [ ] capability lista
- [ ] tenant/channel/surface filter
- [ ] first release / current posture / Jira lineage

#### 6. Parity board
- [ ] source surface -> affected surface nézet
- [ ] severity lane-ek
- [ ] owner/state kezelés
- [ ] release- és capability-kapcsolatok

#### 7. Integrations hub
- [ ] provider cards
- [ ] health state
- [ ] credential/config completeness
- [ ] last sync
- [ ] environment sensitivity
- [ ] retry/test action

#### 8. Automation center
- [ ] release detection runs
- [ ] import runs
- [ ] Jira push runs
- [ ] failures / retries
- [ ] execution log

---

## Design system javaslat

### Layout
- [ ] 12 oszlopos desktop grid
- [ ] 8pt spacing rendszer
- [ ] maximum 1 elsődleges CTA blokk területenként
- [ ] sticky context header
- [ ] mobilon prioritás-alapú condensed nav

### Komponensek
- [ ] AppShell
- [ ] WorkspaceHeader
- [ ] ProjectContextBar
- [ ] MetricCard
- [ ] StatusBadge
- [ ] SurfaceBadge
- [ ] EvidencePanel
- [ ] ReviewDrawer
- [ ] DiffCard
- [ ] EmptyState
- [ ] ErrorState
- [ ] ActivityTimeline
- [ ] BulkActionBar
- [ ] FilterBar

### Responsive szabályok
- [ ] 375px nézet validálva
- [ ] minden táblázat mobil fallback listanézettel
- [ ] review drawer mobilon full-screen sheet
- [ ] hosszú stringek wrap + copy action

---

## Adatminőség és governance szabályok

### Kötelező release candidate mezők
- [ ] source
- [ ] detected_at
- [ ] version
- [ ] legalább egy surface
- [ ] release notes vagy commit message
- [ ] confidence score

### Kötelező review pontok approved release előtt
- [ ] source validáció
- [ ] duplikációellenőrzés
- [ ] parity impact check
- [ ] Jira linkage check
- [ ] audit event mentés

---

## Fázisos implementáció

### Phase 1 — Foundation stabilization
- [ ] mock/localStorage logika leváltása perzisztens adattárolásra
- [ ] domain model és Supabase schema
- [ ] repository structure rendezése
- [ ] app shell és IA refactor
- [ ] seeded data -> fixture / migration stratégia

### Phase 2 — Real release workflows
- [ ] project onboarding wizard
- [ ] real release candidate pipeline
- [ ] release inbox
- [ ] release approval flow
- [ ] audit log foundation

### Phase 3 — Capability and parity governance
- [ ] capability registry persistent modellel
- [ ] capability-release mapping
- [ ] parity board
- [ ] cross-surface alert rules

### Phase 4 — Integrations and automation
- [ ] integration registry + health checks
- [ ] Jira push preview/apply hardening
- [ ] GitHub/Vercel/Supabase adapterek
- [ ] automation run history

### Phase 5 — Governance maturity
- [ ] role model
- [ ] approval policies
- [ ] notifications
- [ ] reporting/export
- [ ] enterprise workspace support

---

## Javasolt új repo-struktúra
- [ ] `app/(auth)`
- [ ] `app/(workspace)/portfolio`
- [ ] `app/(workspace)/projects/[projectId]/overview`
- [ ] `app/(workspace)/projects/[projectId]/releases`
- [ ] `app/(workspace)/projects/[projectId]/capabilities`
- [ ] `app/(workspace)/projects/[projectId]/parity`
- [ ] `app/(workspace)/projects/[projectId]/traceability`
- [ ] `app/(workspace)/projects/[projectId]/integrations`
- [ ] `app/(workspace)/projects/[projectId]/imports`
- [ ] `app/(workspace)/projects/[projectId]/automation`
- [ ] `app/(workspace)/projects/[projectId]/settings`
- [ ] `components/shell`
- [ ] `components/dashboard`
- [ ] `components/releases`
- [ ] `components/capabilities`
- [ ] `components/parity`
- [ ] `components/integrations`
- [ ] `components/imports`
- [ ] `components/forms`
- [ ] `components/feedback`
- [ ] `lib/domain`
- [ ] `lib/providers`
- [ ] `lib/persistence`
- [ ] `lib/mappers`
- [ ] `lib/validation`
- [ ] `lib/audit`
- [ ] `schemas`
- [ ] `supabase/migrations`
- [ ] `supabase/functions`
- [ ] `docs/architecture`
- [ ] `docs/ux`
- [ ] `docs/governance`

---

## Legfontosabb redesign döntések
- [ ] A mock-data nem first-class runtime source
- [ ] A localStorage override csak draft/offline segédfunkció
- [ ] A release detail a fő igazságfelület
- [ ] A capability release-kötött elsőrangú entitás
- [ ] Az integrations hub health + sync + completeness központ
- [ ] A Jira push governált approval workflow

---

## Elfogadási kritériumok
- [ ] új projekt valódi perzisztens onboardinggal létrehozható
- [ ] release candidate automatikusan generálható és review-zható
- [ ] approved release auditáltan mentődik
- [ ] capability és release között explicit kapcsolat van
- [ ] parity alert szabályból vagy review-ból keletkezik
- [ ] Jira push preview és apply auditálható
- [ ] mobilon nincs overflow
- [ ] minden fő workflow használható

---

## Végrehajtási szabály a további fejlesztési csomagokhoz
Minden további fejlesztési csomag készítésekor:
1. ezt a fájlt kell baseline-ként használni;
2. csak ellenőrzött kész elemek pipálhatók;
3. minden kör végén vissza kell nézni, mi készült el ténylegesen;
4. a pipálás feltétele a governance szerinti megfelelőség;
5. ha valami részben kész, az NEM pipálható.
