# ReleaseGovernance – validált kiinduló állapot és Phase 1 fejlesztési csomag

## 1. Mire támaszkodva készült ez a csomag
Ez a csomag az alábbi források alapján készült:
- `controller.md`
- `design-master-rules.md`
- `codingLessonsLearnt-2.md`
- a repó aktuális `CHANGELOG.md`
- a repó jelenlegi implementációjának kézi ellenőrzése

## 2. Ellenőrzött jelenlegi állapot
Az alábbi pontok **ténylegesen ellenőrizve** lettek a jelenlegi repóban, ezért ezek már meglévő állapotként kezelendők és nem sérülhetnek.

### 2.1. Már igazoltan meglévő alapok
- [x] Next.js App Router alapú webalkalmazás van
- [x] Van külön root layout és külön login route
- [x] A `/` route a `/login` oldalra irányít
- [x] Létezik működő AppShell komponens
- [x] Van workspace / projects oldal
- [x] Van projekt dashboard oldal
- [x] Van releases oldal
- [x] Van import oldal
- [x] Van project upload modal
- [x] Van kliens oldali workspace hook
- [x] Van projekt-összefűzés seed + override logikával
- [x] Van release detection API route
- [x] Van Jira push preview API route
- [x] Van jelenlegi changelog kezelési gyakorlat a repóban

### 2.2. Már igazoltan meglévő domain/MVP elemek
- [x] Seedelt project / release / capability / integration / parity / Jira issue domain már létezik
- [x] A project dashboard 3 fő governance blokkra bontott
- [x] A release centerben van list view és detailed view
- [x] Van Jira CSV export gomb
- [x] Van Push to Jira preview/apply flow
- [x] Van automatikus release candidate detektálás kezdeménye
- [x] Van mobile-oriented shell/navigation törekvés
- [x] Van globális UI utility/CSS foundation

## 3. Igazolt hiányok / újraalapozandó területek
Az alábbiakat a jelenlegi állapot alapján **nem tekintem késznek**:

- [ ] valódi perzisztens multi-tenant backend modell
- [ ] seed/mock-first működés leváltása
- [ ] localStorage-first override háttérbe tolása draft szerepre
- [ ] release, capability és parity explicit relációs modellje
- [ ] auditált approval workflow
- [ ] integration health / last sync / completeness modell
- [ ] valódi workflow-first IA
- [ ] tartós automation run history
- [ ] strukturált RBAC/governance policy réteg
- [ ] teljes Supabase persistence foundation

## 4. Kötelező megóvandó jelenlegi működések
Az alábbiak regresszióvédett tételek:
- [x] login entry
- [x] projects lista
- [x] project dashboard
- [x] releases list + detailed view toggle
- [x] auto release candidate detection lehetősége
- [x] Jira CSV export
- [x] Push to Jira preview/apply flow
- [x] import studio route
- [x] project upload modal
- [x] mobilon sűrített dashboard/release layout törekvés

---

# 5. Phase 1 – Foundation stabilization fejlesztési csomag

## 5.1. Phase 1 cél
A jelenlegi seed/mock-first MVP-ből olyan stabil alapot készíteni, amelyre a későbbi valódi release/capability/parity/automation workflow-k már alacsony regressziós kockázattal ráépíthetők.

## 5.2. Phase 1 fő eredménye
A Phase 1 akkor tekinthető késznek, ha:
- van tiszta domain-alap,
- van perzisztens adattárolási terv és séma,
- a shell és route-struktúra már az új IA irányába áll,
- a seedelt és draft jellegű adatok szerepe szétválik,
- a jelenlegi működő release/Jira funkciók nem sérülnek.
