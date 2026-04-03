# ReleaseGovernance consolidated prompt pack

## 0. Kötelező előfeltétel minden fejlesztési kör előtt
1. Olvasd végig a `codingLessonsLearnt.md` fájlt elejétől a végéig.
2. Olvasd végig a `CHANGELOG.md` fájlt.
3. Olvasd végig a legfrissebb `ai-delivery/2026-04-02/` prompt és baseline fájlokat.
4. A már működő funkciókat tilos regresszióba vinni.
5. Csak ellenőrzött kész elem pipálható checklistben.

---

## 1. Master execution prompt
A ReleaseGovernance alkalmazást a governance/controller/design/lessons szabályok szerint kell fullstackben újraalapozni. A fejlesztés során:
- a seed/mock-first működést fokozatosan le kell váltani,
- a localStorage truth szerepet draft-only szerepre kell szűkíteni,
- a release/capability/integration/parity/Jira domain modellt explicit elsőrangú entitásokra kell bontani,
- a UI-t workflow-first cockpit irányba kell vinni,
- a meglévő működő release center, Jira preview/apply, CSV export és import funkciók nem sérülhetnek.

---

## 2. Phase 1 foundation prompt
Készíts Phase 1 foundation réteget az alábbi sorrendben:
1. domain enumok és entitások
2. persistence repository interface-ek
3. draft vs persistent state szeparáció
4. Supabase foundation séma
5. release approval szabályok

Kimeneti elvárás:
- `lib/domain/*`
- `lib/persistence/*`
- `supabase/migrations/*`
- dokumentált architektúra döntések

---

## 3. State separation prompt
Refaktoráld a jelenlegi runtime adatkezelést úgy, hogy külön legyen:
- fixture/seed adat
- local draft state
- temporary runtime override
- későbbi persistent runtime gateway

A UI ne közvetlenül a legacy/mock struktúrára támaszkodjon, hanem köztes aggregate/gateway alakra.

---

## 4. Legacy bridge prompt
Készíts bridge réteget a jelenlegi legacy mock-data shape és az új runtime aggregate között.
Szükséges elemek:
- legacy tenant -> runtime workspace mapper
- legacy project -> runtime project mapper
- summary selectorok
- runtime hook bridge

A cél a fokozatos átállás törés nélkül.

---

## 5. Shell / IA starter prompt
Készíts workflow-first shell és IA starter scaffoldot.
Új first-class route irányok:
- portfolio
- overview
- parity
- traceability
- automation

A jelenlegi működő route-okat nem szabad azonnal lecserélni; az új struktúra először scaffoldként épüljön be.

---

## 6. Regresszióvédelmi prompt
Minden fejlesztési kör végén ellenőrizd külön:
- `/login`
- `/projects`
- `/projects/[projectId]`
- `/projects/[projectId]/releases`
- `/projects/[projectId]/releases/[releaseId]`
- `/projects/[projectId]/capabilities`
- `/projects/[projectId]/integrations`
- `/projects/[projectId]/import`
- `POST /api/release-detection`
- `POST /api/jira/push-preview`
- `POST /api/jira/push-apply`
- `POST /api/project-upload/preview`

A release oldalon külön kötelező:
- auto release candidate detection
- Jira CSV export
- Push to Jira preview/apply
- list view
- detailed view
- release detail link

---

## 7. Készre jelölési szabály
Egy feature csak akkor jelölhető késznek, ha:
1. implementálva lett,
2. ténylegesen ellenőrizve lett,
3. nem sérti a governance szabályokat,
4. nem ront el meglévő működést,
5. a kapcsolódó route / build / type / state működés is rendben van.
