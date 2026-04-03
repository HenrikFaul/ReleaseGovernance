# ReleaseGovernance – jelenlegi app és route inventory (validált)

## Cél
Ez a dokumentum a jelenlegi repó **ellenőrzött** route- és képernyőinventorát rögzíti.
Csak azok az elemek szerepelnek itt tényként, amelyeket a jelenlegi kódban közvetlenül ellenőriztem.

## Ellenőrzési szabály
- Ez a dokumentum baseline a shell/IA refactor előtt.
- A felsorolt működő route-ok és API-végpontok regresszióvédett elemek.
- Amit itt “ellenőrzöttként” jelölök, azt a refactor során nem szabad véletlenül eltüntetni vagy elérhetetlenné tenni.

---

## 1. Globális app route-ok

### 1.1 Root route
- [x] `/`
- **Viselkedés**: redirect a `/login` oldalra

### 1.2 Login
- [x] `/login`
- **Típus**: entry/auth shell
- **Jelenlegi szerep**:
  - belépési felület
  - placeholder auth UX
  - “Continue to workspace” átvezetés a `/projects` oldalra

### 1.3 Workspace / projects
- [x] `/projects`
- **Típus**: workspace-level oldal
- **Jelenlegi szerep**:
  - tenant/workspace nézet
  - projektlista
  - “Add a new project” modal indítása
  - custom + seed projectek összefűzött megjelenítése

---

## 2. Projekt szintű app route-ok

### 2.1 Projekt dashboard
- [x] `/projects/[projectId]`
- **Típus**: projekt overview/dashboard
- **Jelenlegi szerep**:
  - projekt headline
  - release dashboard blokk
  - capabilities dashboard blokk
  - integrations dashboard blokk

### 2.2 Releases
- [x] `/projects/[projectId]/releases`
- **Típus**: projekt release center
- **Jelenlegi szerep**:
  - list view / detailed view
  - deployed és unreleased release-ek megjelenítése
  - Jira CSV export
  - Push to Jira preview indítás
  - automatikus release candidate detection triggerelése

### 2.3 Release detail
- [x] `/projects/[projectId]/releases/[releaseId]`

### 2.4 Capabilities
- [x] `/projects/[projectId]/capabilities`

### 2.5 Integrations
- [x] `/projects/[projectId]/integrations`

### 2.6 Import
- [x] `/projects/[projectId]/import`

### 2.7 Automation
- [ ] `/projects/[projectId]/automation`
- nav alapján hivatkozott, ebben a körben közvetlenül nem ellenőriztem route fájlként

---

## 3. Validált API route inventory
- [x] `POST /api/release-detection`
- [x] `POST /api/jira/import`
- [x] `POST /api/jira/push-preview`
- [x] `POST /api/jira/push-apply`
- [x] `POST /api/github/test`
- [x] `POST /api/hosting/test`
- [x] `POST /api/project-upload/preview`

---

## 4. Következtetés
- [x] stabil app shell alap van
- [x] a projekt szintű release/capability/integration/import oldalak ténylegesen léteznek
- [x] a release detail oldal jó kiindulás a canonical review page-hez
- [x] a jelenlegi architektúra még erősen seed + local override központú
- [x] az API réteg thin workflow adapterként működik
