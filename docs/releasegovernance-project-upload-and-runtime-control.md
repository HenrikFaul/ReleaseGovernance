# ReleaseGovernance – Project Upload, Menu, Data Model and Runtime Control Guide

## Kötelező olvasási sorrend minden új projektbetöltés vagy nagyobb módosítás előtt

**Ez a dokumentum a ReleaseGovernance projektbetöltési és működési alapszabálya.**
Minden új projekt seedelése, importálása, capability/release csoportosítása vagy UI-viselkedés módosítása előtt **kötelező** az alábbi fájlokat ebben a sorrendben végigolvasni:

1. `codingLessonsLearnt.md`
2. `CHANGELOG.md`
3. `releasegovernance-runtime-control.yaml`
4. a betöltendő projekt forrásai:
   - markdown inventory(k)
   - Jira export / Jira direct import
   - GitHub repo és changelog
   - Vercel / Supabase / egyéb hosting metaadatok

**Szabályok:**
- A `CHANGELOG.md` és a `codingLessonsLearnt.md` **append-only** fájlok.
- Új munka előtt végig kell olvasni őket.
- A korábban leszállított funkciókat nem szabad új seedeléssel vagy regresszív mock-data frissítéssel eltávolítani.
- Ha új hiba jelenik meg, azt **mindig ugyanabba a `codingLessonsLearnt.md` fájlba kell appendelni**.
- Ha új szállítás történik, azt **mindig ugyanabba a `CHANGELOG.md` fájlba kell appendelni**.
- Új projekt feltöltésekor a cél mindig az, hogy:
  - **minden valid Jira issue bent maradjon**,
  - **egy valid Jira se vesszen el**,
  - **csak invalid Jira key essen ki**,
  - az implementált részek **release-ekbe**,
  - a még nem implementált, de valid backlog elemek **capabilities / unreleased** részbe kerüljenek.

---

## 1. Mi ez a dokumentum?

Ez a dokumentum két célt szolgál egyszerre:

1. **Human-readable playbook**: pontosan leírja, hogyan kell egy új projektet betölteni a ReleaseGovernance-be.
2. **Runtime contract**: a vele együtt kiadott `releasegovernance-runtime-control.yaml` fájl a menük, importforrások, csoportosítási szabályok, validációs és megjelenítési logika kanonikus konfigurációja.

Ez azt jelenti, hogy a jövőbeli célállapotban:
- ha a YAML-ban változik a menüstruktúra, a láthatósági szabály vagy az importforrás-prioritás,
- akkor a webappnak ez alapján kell működnie.

---

## 2. Menürendszer és navigáció – pontos működés

### 2.1. Globális állapot: nincs kiválasztott projekt
Ha a felhasználó még nem választott projektet, a bal oldali sávban **csak ez lehet látható**:

- `Projects`

**Nem látszódhat** ilyenkor:
- Dashboard
- Releases
- Capabilities
- Integrations
- Traceability
- Automation
- Import

Indok:
- ezek a nézetek mindig projektfüggők
- amíg nincs projektkontektsztus, addig az ilyen menük félrevezetők

### 2.2. Projekt kiválasztása után
Amint a user kiválaszt egy projektet, a bal oldali menüben ezeknek kell megjelenniük:

1. `Projects`
2. `Dashboard`
3. `Releases`
4. `Capabilities`
5. `Integrations`
6. `Traceability`
7. `Automation`
8. `Import`

### 2.3. Projektkontektsztus szabály
A menük **mindig a kiválasztott projektre szűrten** működnek.

Példa:
- ha `Hobbeast` van kiválasztva, akkor a Releases csak Hobbeast release-eket mutathat
- ha `Syncfolk` van kiválasztva, akkor a Capabilities csak Syncfolk capability-ket mutathat

---

## 3. Az egyes menük részletes leírása

## 3.1. Projects
### Cél
A workspace összes elérhető projektjének áttekintése és kiválasztása.

### Mit tartalmazzon?
Minden projektkártyán legalább:
- projekt neve
- rövid leírás
- deployment posture / health (`healthy`, `warning`, `failing`)
- felületek:
  - web
  - android
  - ios
  - shared backend
- kapcsolódó Jira project key
- opcionálisan domain / repo / hosting jelzés

### Működés
- kártyára kattintás -> projekt dashboard
- itt még nincs capability/release részletezés, csak belépés

---

## 3.2. Dashboard
### Cél
Gyors, vezetői és operatív állapotkép a kiválasztott projektről.

### Mit kell tartalmaznia?
Kötelező blokkok:
- `Released versions`
- `Unreleased groups`
- `Capabilities`
- `Open parity alerts`
- `Imported Jira items`

### Kötelező általános információs blokk
A dashboardon meg kell jeleníteni a README / tech summary jellegű projektinformációkat is:
- application description
- tech stack
- hosting services
- backend services
- project structure
- runtime notes

### Latest release posture blokk
Tartalmazza:
- aktuális vagy legutóbbi releváns release
- surfaces
- backend/shared-contract/schema flags
- integration touchpoints
- deployment comment
- impact engine summary

### Open parity alerts blokk
Mutassa:
- source surface
- affected surface
- severity
- reason
- Jira tracking link

---

## 3.3. Releases
### Cél
Az összes leszállított és nem leszállított fejlesztési egység nyomon követése.

### Kötelező két fő szekció
- `Released`
- `Unreleased`

### A Released lista soronként kötelező mezői
- release version
- surfaces
- status (`current`, `old`)
- deploy date
- source kind
- source repository / owner
- issue count
- deployment comment
- Jira linked (`Yes` / `No`)

### A release sor kattintásra megnyíló részletes nézete
Kötelező részek:
- release header
- delivered capabilities
- Jira traceability
- impact evaluation
- visszalépési link a release listára
- a release verzió látható legyen önmagában is

### Jira traceability megjelenítési forma
Nem csak key jelenjen meg, hanem:
- Jira key
- Summary
- status
- kattintható URL

### Release tartalmi szabály
A release-ekbe azok a capability-k és Jira issue-k kerülnek, amelyekre legalább az alábbiak közül **egy implementációs bizonyíték** megvan:
- repo evidence
- changelog evidence
- hosting/deploy evidence
- markdown inventory explicit `implemented` / `current workstream` jelzés
- API/backend contract evidence
- approved release candidate

### Unreleased szekció
Ide kerül:
- valid Jira backlog, ha nincs implementációs/release bizonyíték
- parity follow-up
- documentation backfill
- enterprise roadmap
- staging-only / draft group

---

## 3.4. Capabilities
### Cél
A projekt összes üzleti-logikai funkciójának strukturált, release-ektől független nyilvántartása.

### Capability kötelező mezői
- capability id
- capability name
- summary
- description
- tenant:
  - `B2C`
  - `Enterprise`
  - `Both`
- channel:
  - `Webapp`
  - `Mobile`
  - `Both`
- status by surface
- parity status
- integrations
- Jira keys
- optional first release by surface

### Kritikus működési szabály
A Capabilities-ben:
- **minden valid Jira-ból származó, még nem released funkció szerepeljen**
- az implementált, de komplexebb capability-k is maradhatnak itt, ha a release-ekbe is hivatkozva vannak
- **soha ne legyen benne invalid Jira key**

### Jira-alapú capability csoportosítás szabály
Ha a markdown nem mondja meg pontosan a funkciócsoportokat, akkor:
1. a valid Jira issue-k summary + description + labels alapján kell csoportosítani
2. üzleti-logikai egységekbe kell szervezni
3. tenant szerint kell címkézni
4. implemented vs unreleased státuszt külön kell jelölni

---

## 3.5. Integrations
### Cél
A projekt összes külső és belső kapcsolati pontjának nyilvántartása.

### Kötelező integration típusok
- source-control
- planning
- deployment
- backend
- external-api
- design
- documentation

### Minden integration rekord tartalmazza
- id
- name
- category
- state (`connected`, `attention`, `planned`)
- environmentSensitive flag
- notes
- optional URL

### Példák
- GitHub
- Jira
- Vercel
- Supabase
- Geoapify
- TomTom
- Mapy
- Lovable

### Szabály
Ha egy integráció csak backlogban létezik, akkor is látszódhat, de `planned` vagy `attention` státusszal.

---

## 3.6. Traceability
### Cél
Összekötni:
- release-eket
- capability-ket
- Jira issue-kat
- parity alertokat
- backfill candidate-eket

### Kötelező elemek
- imported Jira issues listája
- capability -> Jira mapping
- release -> Jira mapping
- parity alert -> Jira mapping
- backfill candidates

### A megjelenő Jira issue-k kötelező mezői
- issue key
- summary
- description
- labels
- URL
- status
- issue type
- created
- parent key

---

## 3.7. Automation
### Cél
Megmutatni a governance működési modelljét és a starter automatizmusokat.

### Kötelező tartalom
- release-impact standard
- capability registry standard
- integration registry standard
- GitHub Actions starter
- CODEOWNERS irány
- Release Please / CI governance irány
- required checks / gating magyarázat

---

## 3.8. Import
### Cél
A projekt betöltésének és újra-betöltésének vezérelt helye.

### Kötelező funkciók
- MD import
- CSV import
- Excel import
- Jira import
- Project Upload wizard
- template letöltés:
  - MD
  - CSV
  - XLSX

### Fontos szabály
A három fájlformátumnak ugyanazt a canonical data modelt kell használnia.

---

## 4. Project Upload – általános módszer

Ez a menüpont külön folyamatként is létezhet az Import részen belül.

## 4.1. Project Upload wizard lépések
### Step 1 – Basic project identity
Kérje be:
- project name
- slug
- domain
- Jira project key
- optional Lovable project URL
- repo URLs:
  - web
  - android
  - ios

### Step 2 – Source selection
Menüből lehessen kiválasztani, mely forrásokat akarjuk felhasználni:
- Markdown inventory
- CSV export
- Excel import sheet
- Jira project
- GitHub repo
- Vercel project
- Supabase backend
- Changelog files
- manual notes

### Step 3 – Credentials / connections
Adható legyen meg:
- Jira URL
- Jira email
- Jira API token
- GitHub repo URL
- GitHub token
- hosting provider
- hosting URL
- hosting API key
- optional Supabase reference / URL

### Step 4 – Normalization preview
A rendszer mutassa meg külön:
- releases
- unreleased groups
- capabilities
- integrations
- imported Jira issues
- release candidates
- parity alerts (ha számítható)

### Step 5 – Apply
A kiválasztott projekt alá bekerülnek a normalizált adatok.

---

## 5. Forráshierarchia – mi az authoritative source?

### 5.1. Jira
**Authoritative issue universe**
- direct Jira import vagy Jira CSV
- csak ez validálhat Jira key-t

### 5.2. Markdown inventoryk
**Authoritative business interpretation**
- implemented vs spec-only
- release grouping hints
- capability domain grouping
- tenant and channel meaning

### 5.3. GitHub repo
**Authoritative code evidence**
- mi tűnik ténylegesen implementáltnak
- mely feature-khez van file/code/runtime struktúra

### 5.4. Changelog
**Authoritative release evidence**
- ha feature changelogban van és release-hez köthető, az erős release-jel

### 5.5. Hosting (Vercel / Supabase / etc.)
**Authoritative deployment evidence**
- deploy date
- current vs old
- build/deploy source metadata

---

## 6. Besorolási szabály – mi Released és mi Unreleased?

## 6.1. Released
Valami akkor released csoportba kerülhet, ha:
- van rá valid Jira
- és van rá implementációs vagy release bizonyíték

Bizonyíték lehet:
- repo evidence
- changelog entry
- hosting deployment relation
- md inventory explicit “implemented/current workstream”
- backend object / migration / contract that is already applied

## 6.2. Unreleased
Valami akkor unreleased:
- valid Jira issue
- de nincs bizonyíték arra, hogy implementált / leszállított
- vagy explicit backlog/parity/documentation follow-up
- vagy enterprise future scope

---

## 7. Capability grouping szabályok új projekt esetén

Ha nincs kész capability-térkép:
1. valid Jira issue-kat össze kell gyűjteni
2. md inventoryból a business domain-eket ki kell nyerni
3. summary + description + labels alapján capability klasztereket kell létrehozni
4. minden klaszterhez:
   - tenant
   - channel
   - statusBySurface
   - parityStatus
   - integrations
   - jiraKeys
5. ami implementált, azt release-be is be kell kötni
6. ami nem implementált, capability/unreleased marad

---

## 8. Template / canonical import modell

A canonical oszlopok legyenek ezek:
- `record_type`
- `id`
- `name`
- `summary`
- `description`
- `status`
- `version`
- `release_state`
- `surface`
- `tenant`
- `channel`
- `integrations`
- `jira_keys`
- `jira_summary`
- `jira_description`
- `jira_labels`
- `deploy_date`
- `source_kind`
- `source_repository`
- `source_owner`
- `deployment_comment`
- `parity_status`
- `backend_changed`
- `shared_contract_changed`
- `schema_changed`
- `url`

Ezt a mezőkészletet használja:
- MD
- CSV
- XLSX

---

## 9. A jövőbeli működés vezérlése

A `releasegovernance-runtime-control.yaml` legyen a viselkedés vezérlőfájl.

Ha benne változik:
- menük láthatósága
- importforrás-prioritás
- authoritative source sorrend
- release classification rules
- capability grouping rules
- traceability display rules
- import wizard lépései

akkor a site működésének is ezt kell követnie.

---

## 10. Kötelező fejlesztési szabály a jövőre

Minden új projekt import, reseed vagy governance módosítás előtt:
1. olvasd el a `codingLessonsLearnt.md`-t
2. olvasd el a `CHANGELOG.md`-t
3. olvasd el ezt a dokumentumot
4. olvasd el a `releasegovernance-runtime-control.yaml`-t
5. csak utána nyúlj seedhez, importhoz vagy megjelenítési logikához

Ez a dokumentum a jövőbeli projektbetöltés és viselkedés **kötelező operating playbookja**.
