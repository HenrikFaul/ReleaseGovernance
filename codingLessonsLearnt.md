# codingLessonsLearnt

## Kötelező fejlesztési rutin

Minden új fejlesztési, javítási vagy refaktorálási kör **elején** ezt a fájlt kell először átnézni.

Kötelező szabályok:
1. Mielőtt bármilyen kódmódosítást készítesz, olvasd végig ezt a fájlt.
2. Mielőtt új patch-et adsz át, ellenőrizd, hogy a mostani változtatás nem hozza-e vissza valamelyik korábbi hibát.
3. Új hibatípus esetén **nem új fájlt** kell létrehozni, hanem ezt a fájlt kell bővíteni.
4. A fájl tartalmát **nem szabad felülírni vagy lenullázni**; csak appendelni szabad az új tanulságokat.
5. Minden hibához hozzá kell írni:
   - a hiba rövid neve
   - tünet / pontos hibaüzenet
   - kiváltó ok
   - javítás módja
   - megelőzési szabály
   - ellenőrzési lépés
6. Nagy seed/mock-data módosítások előtt mindig külön szintaktikai ellenőrzést kell végezni, különösen hosszú stringeknél és nagy kézi másolásoknál.
7. TypeScript típusmódosítás után minden importáló fájlt össze kell vetni a típusdefiníciókkal.
8. Ha egy UI-shell vagy shared komponens prop felülete változik, minden hívóhelyet vagy a shell típusát is hozzá kell igazítani.
9. Adatimport vagy seed-generálás esetén validálni kell az outputot build-kompatibilitás és domain-konzisztencia szempontból is.

## Ajánlott bejegyzésstruktúra

Minden új hiba a következő struktúrában kerüljön be:

### [Sorszám] Hiba neve
- **Tünet / log:**
- **Kiváltó ok:**
- **Javítás:**
- **Megelőzés:**
- **Ellenőrzés:**

---

## Meglévő tanulságok

### [001] Next.js typedRoutes típushiba a Link href mezőn
- **Tünet / log:** `Type 'string' is not assignable to type 'UrlObject | RouteImpl<string>'` a `components/app-shell.tsx` fájlban.
- **Kiváltó ok:** a `typedRoutes` kísérleti Next.js beállítás aktív volt, miközben a navigáció dinamikus string útvonalakat adott át a `Link` komponensnek.
- **Javítás:** a `typedRoutes` eltávolítása / kikapcsolása a `next.config.mjs`-ben.
- **Megelőzés:** ha typed routes aktív, akkor minden `href`-et route-kompatibilis típussal kell kezelni; ha a projekt sok dinamikus stringes útvonalat használ, ne legyen bekapcsolva.
- **Ellenőrzés:** `npm run build` és külön ellenőrzés a `Link href` használatokra.

### [002] Hiányzó TypeScript exportok az import funkcióban
- **Tünet / log:** `Module '@/lib/types' has no exported member 'ProjectImportBundle'`.
- **Kiváltó ok:** az import funkció már használta a `ProjectImportBundle`, `ImportedJiraIssue`, `ProjectOverride` és kapcsolódó mezőket, de a `lib/types.ts` nem tartalmazta ezeket.
- **Javítás:** a hiányzó típusok exportálása a `lib/types.ts`-ből, valamint a kapcsolódó mezők (`releaseState`, `importedJiraIssues`, `description`, `url`) felvétele.
- **Megelőzés:** új feature rétegnél először a központi típusfájlt kell frissíteni, csak utána a komponenseket.
- **Ellenőrzés:** `tsc` / `next build`, valamint az importáló fájlok célzott átnézése.

### [003] Hiányzó dependency az import funkcióhoz
- **Tünet / log:** build vagy runtime hiba az `xlsx` használatakor.
- **Kiváltó ok:** az Excel import/logika bekerült, de a `package.json` nem tartalmazta az `xlsx` csomagot.
- **Javítás:** `xlsx` dependency felvétele a `package.json`-ba.
- **Megelőzés:** minden új külső importot ellenőrizni kell, hogy szerepel-e a dependency listában.
- **Ellenőrzés:** `npm install`, majd `npm run build`.

### [004] AppShell prop felület és hívóhelyek szétcsúszása
- **Tünet / log:** `Property 'projectName' does not exist on type ...` az `automation/page.tsx` oldalon.
- **Kiváltó ok:** a page komponens átadta a `projectName` propot, de az `AppShell` típusa ezt nem fogadta.
- **Javítás:** az `AppShell` opcionálisan felvette a `projectName` propot.
- **Megelőzés:** shared layout komponens propfelületének változásakor minden hívóhelyet vagy a layout típusát együtt kell frissíteni.
- **Ellenőrzés:** keresés a repo-ban az adott komponens összes használatára.

### [005] Import menü regresszió a sidebarban
- **Tünet / log:** eltűnt az `Import` menüpont, így nem volt elérhető az MD / CSV / XLSX template letöltés és import.
- **Kiváltó ok:** egy későbbi patch egy régebbi `app-shell` verziót írt vissza, amelyből hiányzott az import navigation item.
- **Javítás:** az `Import` menüpont visszahelyezése a projekt-specifikus navigation listába.
- **Megelőzés:** shared shell módosításakor mindig hasonlítsd össze a menü teljes feature-listáját az aktuális elvárt funkciókkal.
- **Ellenőrzés:** vizuális ellenőrzés projekt kiválasztás után, plusz sidebar snapshot összevetés.

### [006] Projektválasztó nézetben hibásan látható projekt-almenük
- **Tünet / log:** Dashboard / Releases / Capabilities / Integrations / Traceability / Automation menük már a projektválasztó képernyőn is látszódtak.
- **Kiváltó ok:** a navigation logika nem különítette el a projekt nélküli és projekt-specifikus állapotot.
- **Javítás:** ha nincs kiválasztott `projectId`, csak a `Projects` menüpont maradjon.
- **Megelőzés:** a shellben legyen explicit üres-state navigáció projekt nélküli állapotra.
- **Ellenőrzés:** `/projects` oldalon ne legyenek projekt-specifikus menük.

### [007] Hamis / invalid Jira key-ek bekerülése seed adatokba
- **Tünet / log:** olyan Jira kulcsok jelentek meg (pl. `SYN-600`, `SYN-711`, `SYN-730`), amelyek nem léteztek a valós Jira exportban.
- **Kiváltó ok:** a markdown inventorykben szereplő hivatkozások egy részét validálatlanul emeltük át seedbe, és néhány kulcs csak logikai klaszterként vagy backlog-származék jelölésként szerepelt.
- **Javítás:** a markdownból jövő kulcsokat a `jiraissues.csv` ellen kell validálni, és csak a ténylegesen létező issue-k maradhatnak Jira linkként.
- **Megelőzés:** soha ne kerüljön seedbe validálatlan Jira key.
- **Ellenőrzés:** a seedben szereplő összes `SYN-*` vagy más kulcs legyen összevetve a CSV exporttal.

### [008] Jira validálás utáni túl-agresszív levágás
- **Tünet / log:** a seedben túl kevés Jira issue maradt, pedig a feltöltött `jiraissues.csv` sokkal több valid jegyet tartalmazott.
- **Kiváltó ok:** csak a markdownokban explicit említett kulcsokat validáltuk, de a CSV-ben lévő további valid issue-kat nem emeltük vissza capability / unreleased csoportokba.
- **Javítás:** a valid CSV issue-kat teljes körűen be kell emelni, és üzleti-logikai capability csoportokba kell rendezni, még akkor is, ha nem mind szerepel a markdownokban.
- **Megelőzés:** forrásprioritás: 1) valid Jira CSV, 2) markdown inventory, 3) logikai grouping.
- **Ellenőrzés:** a valid issue-k száma ne essen vissza indokolatlanul a CSV-hez képest.

### [009] Hatalmas kézi mock-data seedben szintaktikai string hiba
- **Tünet / log:** `Unterminated string constant`, majd `Expected ',', got 'h2'` a `lib/mock-data.ts` fájlban.
- **Kiváltó ok:** több soros Jira description nyers szövege JSON/TS stringként került be escape nélkül, ezért a sortörés megszakította a stringet.
- **Javítás:** a hosszú descriptionöket vagy template stringként kell biztonságosan escape-elni, vagy előbb normalizálni egy soros formára. A mostani javításnál a buildbiztos `mock-data.ts` verzióra kellett visszaállni.
- **Megelőzés:** nagy mennyiségű seed adatot ne kézzel, nyers több soros idézőjeles stringekkel illessz be. Használj serializer/normalizer lépést.
- **Ellenőrzés:** `npm run build` kötelező minden nagy `mock-data.ts` módosítás után; emellett regex-es keresés a több soron át nyitva maradt `"description": "` mintákra.

### [010] README / általános projektinfók hiánya a dashboardon
- **Tünet / log:** a dashboard csak száraz governance számokat mutatott, de nem jelent meg tech stack, hosting, backend és projektleírás.
- **Kiváltó ok:** a dashboard modellt nem bővítettük `overview` résszel, és a seedből hiányzott a README-szerű általános blokk.
- **Javítás:** `ProjectOverview` szerkezet és dashboard megjelenítés bevezetése.
- **Megelőzés:** minden új projekt seednél legyen külön `overview` blokk.
- **Ellenőrzés:** a projekt dashboard mindig mutasson legalább leírást, tech stacket, hostingot és backend szolgáltatásokat.

### [011] Release oldal nem Vercel-szerű, nehezen áttekinthető lista
- **Tünet / log:** a release-ek nem soros registryként jelentek meg, hanem kevésbé áttekinthető blokkokban, illetve az unreleased rész nem volt konzisztens.
- **Kiváltó ok:** a kezdeti scaffold nem deployment-registry szemléletű volt.
- **Javítás:** a release oldal Vercel-szerű soros listává alakítása státusz, source, issue count, deployment comment és Jira linkage mezőkkel.
- **Megelőzés:** a release center nézetet deployment-first mintára kell tervezni.
- **Ellenőrzés:** egy release sorból azonnal látszódjon verzió, státusz, source, deploy idő, Jira linkage.

### [012] Import funkció csak traceability-be tett Jira elemeket, capabilities-be nem
- **Tünet / log:** a Jira import megtörtént, de a capability nézet nem kapott belőle hasznos csoportosítható elemeket.
- **Kiváltó ok:** az import réteg csak `importedJiraIssues` szintre írta az adatot.
- **Javítás:** a Jira importált issue-k capability candidate-ként is megjeleníthetők legyenek a capability nézetben.
- **Megelőzés:** import feature tervezésekor mindig ellenőrizni kell, hogy az adat mely nézetekben hasznosul.
- **Ellenőrzés:** import után Traceability és Capabilities oldalon is látszódjon a hatás.

---

## Rövid ellenőrző lista minden átadás előtt
- [ ] Elolvastam ezt a fájlt a fejlesztési kör elején.
- [ ] A módosítás nem hozza vissza a korábbi typedRoutes / props / type export hibákat.
- [ ] A sidebar menü megfelel a projekt nélküli és projekt-specifikus állapotoknak.
- [ ] Az import funkció megvan és elérhető.
- [ ] A seed/mock-data fájl szintaktikailag biztonságos.
- [ ] A Jira key-ek validáltak.
- [ ] A valid Jira issue-k nem lettek indokolatlanul levágva.
- [ ] A build lefutott vagy legalább célzottan ellenőriztem a módosított töréspontokat.
