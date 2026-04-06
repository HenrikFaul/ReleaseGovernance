## Read-first működési szabályok
# codingLessonsLearnt

Mindig ezzel kell kezdeni a fejlesztést: munka előtt olvasd végig ezt a fájlt elejétől a végéig, majd olvasd végig a CHANGELOG.md-t és a versioning mappában lévő legutóbbi business_request / ai_dev_prompt fájlokat is. A korábban dokumentált hibákat nem szabad újra elkövetni. Minden új típusú hibát ehhez a fájlhoz kell hozzáappendelni.

## Rövid ellenőrző lista minden átadás előtt
- [ ] Elolvastam ezt a fájlt a fejlesztési kör elején.
- [ ] Elolvastam a CHANGELOG-ot.
- [ ] Elolvastam a releváns versioning fájlokat.
- [ ] A módosítás nem hozza vissza a korábbi typedRoutes / props / type export hibákat.
- [ ] A sidebar menü megfelel a projekt nélküli és projekt-specifikus állapotoknak.
- [ ] Az import funkció megvan és elérhető.
- [ ] A release oldal továbbra is Vercel-szerű.
- [ ] A push-to-jira és csv funkciók nem tűntek el.
- [ ] A build lefutott vagy legalább célzottan ellenőriztem a módosított töréspontokat.

## Időrendi, duplikációmentes lessons törzs

### [004] AppShell prop felület és hívóhelyek szétcsúszása
- **Tünet / log:** `Property 'projectName' does not exist on type ...` az `automation/page.tsx` oldalon.
- **Kiváltó ok:** a page komponens átadta a `projectName` propot, de az `AppShell` típusa ezt nem fogadta.
- **Javítás:** az `AppShell` opcionálisan felvette a `projectName` propot.
- **Megelőzés:** shared layout komponens propfelületének változásakor minden hívóhelyet vagy a layout típusát együtt kell frissíteni.
- **Ellenőrzés:** keresés a repo-ban az adott komponens összes használatára.

_Első azonosított forrásidő: 2026-03-29 16:25:20 | Forrásvonal: `codingLessonsLearnt (64).md` (004); `codingLessonsLearnt (61).md` (004); `codingLessonsLearnt (60).md` (004)_

### [007] Hamis / invalid Jira key-ek bekerülése seed adatokba
- **Tünet / log:** olyan Jira kulcsok jelentek meg (pl. `SYN-600`, `SYN-711`, `SYN-730`), amelyek nem léteztek a valós Jira exportban.
- **Kiváltó ok:** a markdown inventorykben szereplő hivatkozások egy részét validálatlanul emeltük át seedbe, és néhány kulcs csak logikai klaszterként vagy backlog-származék jelölésként szerepelt.
- **Javítás:** a markdownból jövő kulcsokat a `jiraissues.csv` ellen kell validálni, és csak a ténylegesen létező issue-k maradhatnak Jira linkként.
- **Megelőzés:** soha ne kerüljön seedbe validálatlan Jira key.
- **Ellenőrzés:** a seedben szereplő összes `SYN-*` vagy más kulcs legyen összevetve a CSV exporttal.

_Első azonosított forrásidő: 2026-03-29 16:25:20 | Forrásvonal: `codingLessonsLearnt (64).md` (007); `codingLessonsLearnt (61).md` (007); `codingLessonsLearnt (60).md` (007)_

### [009] Hatalmas kézi mock-data seedben szintaktikai string hiba
- **Tünet / log:** `Unterminated string constant`, majd `Expected ',', got 'h2'` a `lib/mock-data.ts` fájlban.
- **Kiváltó ok:** több soros Jira description nyers szövege JSON/TS stringként került be escape nélkül, ezért a sortörés megszakította a stringet.
- **Javítás:** a hosszú descriptionöket vagy template stringként kell biztonságosan escape-elni, vagy előbb normalizálni egy soros formára. A mostani javításnál a buildbiztos `mock-data.ts` verzióra kellett visszaállni.
- **Megelőzés:** nagy mennyiségű seed adatot ne kézzel, nyers több soros idézőjeles stringekkel illessz be. Használj serializer/normalizer lépést.
- **Ellenőrzés:** `npm run build` kötelező minden nagy `mock-data.ts` módosítás után; emellett regex-es keresés a több soron át nyitva maradt `"description": "` mintákra.

_Első azonosított forrásidő: 2026-03-29 16:25:20 | Forrásvonal: `codingLessonsLearnt (64).md` (009); `codingLessonsLearnt (61).md` (009); `codingLessonsLearnt (60).md` (009)_

### [002] Hiányzó TypeScript exportok az import funkcióban
- **Tünet / log:** `Module '@/lib/types' has no exported member 'ProjectImportBundle'`.
- **Kiváltó ok:** az import funkció már használta a `ProjectImportBundle`, `ImportedJiraIssue`, `ProjectOverride` és kapcsolódó mezőket, de a `lib/types.ts` nem tartalmazta ezeket.
- **Javítás:** a hiányzó típusok exportálása a `lib/types.ts`-ből, valamint a kapcsolódó mezők (`releaseState`, `importedJiraIssues`, `description`, `url`) felvétele.
- **Megelőzés:** új feature rétegnél először a központi típusfájlt kell frissíteni, csak utána a komponenseket.
- **Ellenőrzés:** `tsc` / `next build`, valamint az importáló fájlok célzott átnézése.

_Első azonosított forrásidő: 2026-03-29 16:25:20 | Forrásvonal: `codingLessonsLearnt (64).md` (002); `codingLessonsLearnt (61).md` (002); `codingLessonsLearnt (60).md` (002)_

### [003] Hiányzó dependency az import funkcióhoz
- **Tünet / log:** build vagy runtime hiba az `xlsx` használatakor.
- **Kiváltó ok:** az Excel import/logika bekerült, de a `package.json` nem tartalmazta az `xlsx` csomagot.
- **Javítás:** `xlsx` dependency felvétele a `package.json`-ba.
- **Megelőzés:** minden új külső importot ellenőrizni kell, hogy szerepel-e a dependency listában.
- **Ellenőrzés:** `npm install`, majd `npm run build`.

_Első azonosított forrásidő: 2026-03-29 16:25:20 | Forrásvonal: `codingLessonsLearnt (64).md` (003); `codingLessonsLearnt (61).md` (003); `codingLessonsLearnt (60).md` (003)_

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

_Első azonosított forrásidő: 2026-03-29 16:25:20 | Forrásvonal: `codingLessonsLearnt (64).md` (012); `codingLessonsLearnt (61).md` (012); `codingLessonsLearnt (60).md` (012)_

### [005] Import menü regresszió a sidebarban
- **Tünet / log:** eltűnt az `Import` menüpont, így nem volt elérhető az MD / CSV / XLSX template letöltés és import.
- **Kiváltó ok:** egy későbbi patch egy régebbi `app-shell` verziót írt vissza, amelyből hiányzott az import navigation item.
- **Javítás:** az `Import` menüpont visszahelyezése a projekt-specifikus navigation listába.
- **Megelőzés:** shared shell módosításakor mindig hasonlítsd össze a menü teljes feature-listáját az aktuális elvárt funkciókkal.
- **Ellenőrzés:** vizuális ellenőrzés projekt kiválasztás után, plusz sidebar snapshot összevetés.

_Első azonosított forrásidő: 2026-03-29 16:25:20 | Forrásvonal: `codingLessonsLearnt (64).md` (005); `codingLessonsLearnt (61).md` (005); `codingLessonsLearnt (60).md` (005)_

### [008] Jira validálás utáni túl-agresszív levágás
- **Tünet / log:** a seedben túl kevés Jira issue maradt, pedig a feltöltött `jiraissues.csv` sokkal több valid jegyet tartalmazott.
- **Kiváltó ok:** csak a markdownokban explicit említett kulcsokat validáltuk, de a CSV-ben lévő további valid issue-kat nem emeltük vissza capability / unreleased csoportokba.
- **Javítás:** a valid CSV issue-kat teljes körűen be kell emelni, és üzleti-logikai capability csoportokba kell rendezni, még akkor is, ha nem mind szerepel a markdownokban.
- **Megelőzés:** forrásprioritás: 1) valid Jira CSV, 2) markdown inventory, 3) logikai grouping.
- **Ellenőrzés:** a valid issue-k száma ne essen vissza indokolatlanul a CSV-hez képest.

_Első azonosított forrásidő: 2026-03-29 16:25:20 | Forrásvonal: `codingLessonsLearnt (64).md` (008); `codingLessonsLearnt (61).md` (008); `codingLessonsLearnt (60).md` (008)_

### [001] Next.js typedRoutes típushiba a Link href mezőn
- **Tünet / log:** `Type 'string' is not assignable to type 'UrlObject | RouteImpl<string>'` a `components/app-shell.tsx` fájlban.
- **Kiváltó ok:** a `typedRoutes` kísérleti Next.js beállítás aktív volt, miközben a navigáció dinamikus string útvonalakat adott át a `Link` komponensnek.
- **Javítás:** a `typedRoutes` eltávolítása / kikapcsolása a `next.config.mjs`-ben.
- **Megelőzés:** ha typed routes aktív, akkor minden `href`-et route-kompatibilis típussal kell kezelni; ha a projekt sok dinamikus stringes útvonalat használ, ne legyen bekapcsolva.
- **Ellenőrzés:** `npm run build` és külön ellenőrzés a `Link href` használatokra.

_Első azonosított forrásidő: 2026-03-29 16:25:20 | Forrásvonal: `codingLessonsLearnt (64).md` (001); `codingLessonsLearnt (61).md` (001); `codingLessonsLearnt (60).md` (001)_

### [006] Projektválasztó nézetben hibásan látható projekt-almenük
- **Tünet / log:** Dashboard / Releases / Capabilities / Integrations / Traceability / Automation menük már a projektválasztó képernyőn is látszódtak.
- **Kiváltó ok:** a navigation logika nem különítette el a projekt nélküli és projekt-specifikus állapotot.
- **Javítás:** ha nincs kiválasztott `projectId`, csak a `Projects` menüpont maradjon.
- **Megelőzés:** a shellben legyen explicit üres-state navigáció projekt nélküli állapotra.
- **Ellenőrzés:** `/projects` oldalon ne legyenek projekt-specifikus menük.

_Első azonosított forrásidő: 2026-03-29 16:25:20 | Forrásvonal: `codingLessonsLearnt (64).md` (006); `codingLessonsLearnt (61).md` (006); `codingLessonsLearnt (60).md` (006)_

### [010] README / általános projektinfók hiánya a dashboardon
- **Tünet / log:** a dashboard csak száraz governance számokat mutatott, de nem jelent meg tech stack, hosting, backend és projektleírás.
- **Kiváltó ok:** a dashboard modellt nem bővítettük `overview` résszel, és a seedből hiányzott a README-szerű általános blokk.
- **Javítás:** `ProjectOverview` szerkezet és dashboard megjelenítés bevezetése.
- **Megelőzés:** minden új projekt seednél legyen külön `overview` blokk.
- **Ellenőrzés:** a projekt dashboard mindig mutasson legalább leírást, tech stacket, hostingot és backend szolgáltatásokat.

_Első azonosított forrásidő: 2026-03-29 16:25:20 | Forrásvonal: `codingLessonsLearnt (64).md` (010); `codingLessonsLearnt (61).md` (010); `codingLessonsLearnt (60).md` (010)_

### [011] Release oldal nem Vercel-szerű, nehezen áttekinthető lista
- **Tünet / log:** a release-ek nem soros registryként jelentek meg, hanem kevésbé áttekinthető blokkokban, illetve az unreleased rész nem volt konzisztens.
- **Kiváltó ok:** a kezdeti scaffold nem deployment-registry szemléletű volt.
- **Javítás:** a release oldal Vercel-szerű soros listává alakítása státusz, source, issue count, deployment comment és Jira linkage mezőkkel.
- **Megelőzés:** a release center nézetet deployment-first mintára kell tervezni.
- **Ellenőrzés:** egy release sorból azonnal látszódjon verzió, státusz, source, deploy idő, Jira linkage.

_Első azonosított forrásidő: 2026-03-29 16:25:20 | Forrásvonal: `codingLessonsLearnt (64).md` (011); `codingLessonsLearnt (61).md` (011); `codingLessonsLearnt (60).md` (011)_

### [016] Build fix és capability/data cleanup keverése regresszióveszéllyel
- **Tünet / log:** egy buildhibás körben könnyű lenne a `mock-data.ts` nagy adatrétegéhez is hozzányúlni, ami újabb seed-, Jira- vagy capability-regressziót okozhat.
- **Kiváltó ok:** nincs elválasztva a tisztán technikai build blocker javítás a domain-adattisztítási változtatástól.
- **Javítás:** buildfix körben csak a buildblokkoló import/typing/runtime törést javítsd; capability/Jira seed tisztítást külön patchben kezeld.
- **Megelőzés:** minden patch elején döntsd el: `build fix`, `data cleanup`, `UI fix`, `feature work`. Ne keverd őket ugyanabba a minimális javítócsomagba, ha nem muszáj.
- **Ellenőrzés:** a patch scope-ja legyen egy mondatban megfogalmazható; ha több független probléma keveredik, bontsd külön patch-ekre.

_Első azonosított forrásidő: 2026-03-29 19:16:28 | Forrásvonal: `codingLessonsLearnt (62).md` (016)_

### [015] Non-exported local seed symbol used as API/page dependency
- **Tünet / log:** `Module '"@/lib/mock-data"' declares 'tenants' locally, but it is not exported.` build hiba az `app/api/projects/route.ts` és `app/projects/page.tsx` fájlokban.
- **Kiváltó ok:** a fogyasztó oldalak közvetlenül a `tenants` lokális seedváltozót importálták, miközben a seed refaktor után az már nem volt megbízható publikus felületként használható.
- **Javítás:** a közvetlen `tenants` import helyett stabil gettert kell használni (`getTenant("tenant_releasegovernance")`), és az API shape-et ott kell visszaépíteni.
- **Megelőzés:** seed/mock-data fájlban ne importálj közvetlenül lokális tömböket több helyről, ha már létezik getter/helper. A publikus adat-hozzáféréshez csak explicit exportált függvényt vagy konstans API-t használj.
- **Ellenőrzés:** keresd a repo-ban a `import { tenants } from "@/lib/mock-data"` mintát; build előtt minden ilyen hivatkozást ki kell váltani stabil publikus getterrel.

_Első azonosított forrásidő: 2026-03-29 19:16:28 | Forrásvonal: `codingLessonsLearnt (62).md` (015)_

### [018] A zöld build nem egyenlő a release-igazsággal
- **Tünet / log:** a Hobbeast feltöltött repo lokálisan lebuildelt, mégsem lenne őszinte automatikusan `healthy` release-állapotot adni neki.
- **Kiváltó ok:** a build csak a frontend bundle-konzisztenciát ellenőrzi; nem bizonyítja a production deployt, a remote schema teljességét vagy a runtime integrációk tényleges környezeti működését.
- **Javítás:** a governance seedben külön kezeld:
  - build health,
  - schema completeness,
  - production/release confidence.
- **Megelőzés:** soha ne azonosítsd a „build passed” állapotot a „shipped and healthy” állapottal.
- **Ellenőrzés:** ha nincs teljes runtime/prod audit, a deployment státusz maradjon `warning`.

_Első azonosított forrásidő: 2026-03-29 20:48:36 | Forrásvonal: `codingLessonsLearnt (61).md` (018)_

### [013] Authoritative Jira source hierarchy rossz kezelése
- **Tünet / log:** a Syncfolk seedben fals Jira key-ek maradtak bent, majd egy későbbi javításnál túl kevés valid Jira issue maradt meg.
- **Kiváltó ok:** a markdown inventoryk Jira hivatkozásai részben nem valós kulcsok voltak, miközben a tényleges authoritative forrás a `jiraissues.csv`. Először validálatlanul kerültek be kulcsok, utána pedig túl agresszíven csak a markdownban szereplő valid kulcsok maradtak bent.
- **Javítás:** forráshierarchia rögzítése: `jiraissues.csv` az authoritative issue source, a markdown inventoryk az authoritative funkcionális értelmezési források. A seedben minden valid CSV issue-nak bent kell maradnia, és a markdown csak a grouping / implemented-vs-planned értelmezést adhatja.
- **Megelőzés:** Jira key-eket soha ne a markdownból tekints authoritative-nak. Először a valid CSV issue universe-t kell felépíteni, utána arra kell ráilleszteni a markdown business groupinget.
- **Ellenőrzés:** a seedben szereplő összes Jira key legyen részhalmaza a CSV-nek, és a CSV összes valid issue-ja legyen lefedve imported Jira issue-ként vagy grouping szinten.

_Első azonosított forrásidő: 2026-03-29 20:48:36 | Forrásvonal: `codingLessonsLearnt (61).md` (013)_

### [014] Changelog append-only governance hiánya
- **Tünet / log:** új fejlesztési körökben nem volt egyértelműen rögzítve, hogy a korábbi leszállított funkciókat nem szabad regresszióval kivenni, és a changeloghoz hozzá kell appendelni minden új változást.
- **Kiváltó ok:** a changelogot korábban pusztán release note-ként kezeltük, nem pedig fejlesztési governance dokumentumként.
- **Javítás:** a `CHANGELOG.md` tetejére kötelező “how to use” blokk került, amely előírja az olvasási, appendelési és regresszió-ellenőrzési szabályokat.
- **Megelőzés:** minden fejlesztési kör elején olvasd el a changelogot is a coding lessons mellett.
- **Ellenőrzés:** új patch átadása előtt legyen frissítve a changelog Added / Changed / Fixed blokkja, és ne hiányozzon belőle a mostani kör.

_Első azonosított forrásidő: 2026-03-29 20:48:36 | Forrásvonal: `codingLessonsLearnt (61).md` (014)_

### [015] Current repo evidence must override broader historical markdown claims
- **Tünet / log:** a Hobbeast inventory md-k több olyan területet is „implemented” vagy nagyon előrehaladott állapotúnak mutattak (pl. hidden hubs, fejlettebb analytics), amelyeket a most feltöltött aktuális repo nem támasztott alá közvetlenül.
- **Kiváltó ok:** a dokumentáció több korábbi workstream-értelmezést és backlog-visszavezetést kevert a jelenlegi feltöltött web repo állapotával.
- **Javítás:** evidence-tier modell bevezetése:
  1. Jira CSV = létező issue-univerzum,
  2. feltöltött repo = jelenlegi kódbizonyíték,
  3. md inventory = üzleti értelmezési réteg, de nem automatikus runtime-bizonyíték.
- **Megelőzés:** ha a user kódbázist is ad, akkor minden „implemented” állítást a feltöltött repo alapján újra kell validálni.
- **Ellenőrzés:** minden current-runtime claimhez legyen konkrét repo-evidence (fájl, migration, edge function, page vagy builderedmény).

_Első azonosított forrásidő: 2026-03-29 20:48:36 | Forrásvonal: `codingLessonsLearnt (61).md` (015)_

### [017] Exact-summary duplicate Jira családok kettős számolást okozhatnak
- **Tünet / log:** a Hobbeast CSV-ben több azonos summary-jú, de külön Jira key-jű issue-család van (pl. `HOB-140/HOB-141`, `HOB-208..211`, `HOB-205/HOB-206`).
- **Kiváltó ok:** ismételt issue-létrehozás / backfill során több azonos tartalmú jegy is létrejött.
- **Javítás:** minden valid issue maradjon bent imported Jira traceability-ként, de a capability/release mappinghez egy canonical representative key-t kell választani.
- **Megelőzés:** CSV import után mindig futtasd le a duplicate-summary ellenőrzést.
- **Ellenőrzés:** a release és capability számlálók ne duplázzanak csak azért, mert azonos summary több key alatt is létezik.

_Első azonosított forrásidő: 2026-03-29 20:48:36 | Forrásvonal: `codingLessonsLearnt (61).md` (017)_

### [016] Nem elég, hogy a Jira kulcs valid – a coverage teljességét is ellenőrizni kell
- **Tünet / log:** a Hobbeast md-kben szereplő Jira kulcsok ugyan validak voltak, de sok jelenlegi repo által már bizonyított story-szintű issue hiányzott belőlük.
- **Kiváltó ok:** az eredeti inventoryk inkább epic- és nagyblokk-szinten foglalták össze az állapotot, ezért a ténylegesen elkészült story-k egy része nem jelent meg bennük.
- **Javítás:** a validált pack hozzáadta a hiányzó repo-evidenced story-kat a capability/release értelmezéshez.
- **Megelőzés:** Jira-validálás után mindig csinálj egy második lépést: repo-evidenced feature family → hiányzó releváns Jira storyk.
- **Ellenőrzés:** ha egy feature bizonyítottan ott van a repo-ban, akkor legyen legalább az epicje és a fő story-jai bent a governance mappingben.

_Első azonosított forrásidő: 2026-03-29 20:48:36 | Forrásvonal: `codingLessonsLearnt (61).md` (016)_

### [018] Implemented-vs-unreleased classification must use inventories, not naïve epic completion assumptions
- **Tünet / log:** könnyű lenne minden issue-t egyszerűen root epic szerint releasednek vagy unreleasednek tekinteni, ami félrevezető capability képet adna.
- **Kiváltó ok:** a Jira státuszok és epic-hierarchiák önmagukban nem fedik pontosan a jelenlegi workstream valós állapotát; a Hobbeast inventoryk külön jelzik, hogy több domain implemented/current workstream, míg a parity/documentation follow-up Jira/spec only.
- **Javítás:** a markdown inventoryk alapján kell kijelölni az implemented/current-workstream domain roots-okat, és a parity/documentation stories-t külön unreleased capability/release csoportokba kell tenni még akkor is, ha parentjük egy implemented domain alatt van.
- **Megelőzés:** mindig rögzítsd a forráshierarchiát: 1) valid Jira CSV/export, 2) detailed markdown inventory functional interpretation, 3) repository/runtime evidence, 4) logikai grouping.
- **Ellenőrzés:** parity és documentation follow-up issue-k ne szivárogjanak vissza released csoportokba csak azért, mert parentjük egy implemented root alatt van.

_Első azonosított forrásidő: 2026-03-29 21:30:08 | Forrásvonal: `codingLessonsLearnt (60).md` (018)_

### [017] Placeholder Hobbeast Jira linkage left in seed despite full validated export existing
- **Tünet / log:** a Hobbeast release oldal csak néhány Jira issue-t mutatott, miközben a feltöltött `jiraissues_HOBBEAST.csv` 186 valid issue-t tartalmazott.
- **Kiváltó ok:** a Hobbeast seed régi placeholder release-linkeket tartott meg, és nem lett ugyanazzal a teljes-validációs logikával újraépítve, mint a Syncfolk.
- **Javítás:** a Hobbeast seedet újra kellett építeni úgy, hogy a `jiraissues_HOBBEAST.csv` legyen az authoritative issue source, az uploaded Hobbeast markdown inventoryk pedig a released-vs-unreleased funkcionális értelmezést adják. Az összes valid issue maradjon bent `importedJiraIssues` alatt, miközben a released/current-workstream és unreleased/spec-only csoportosítás külön történik meg.
- **Megelőzés:** ha egy projekthez teljes Jira export áll rendelkezésre, nem maradhatnak a seedben kézi placeholder Jira-linkek. A seed akkor kész, ha a validált issue-universe teljes száma és a grouping számai egyeznek a tervezett logikával.
- **Ellenőrzés:** számold meg a valid Jira issue-kat a CSV-ben, és ellenőrizd, hogy ugyanennyi issue szerepel-e `importedJiraIssues` alatt. Külön ellenőrizd a released és unreleased csoportok unióját is.

_Első azonosított forrásidő: 2026-03-29 21:30:08 | Forrásvonal: `codingLessonsLearnt (60).md` (017)_

### [003] Backfill exportnál kötelező Jira-import mezők hiánya
- **Tünet / log:** a generált CSV nem vagy nehezen importálható Jira-ba.
- **Kiváltó ok:** a deployed-without-Jira lista csak megjelenítési adatot tartalmazott, de nem volt benne import-kompatibilis `summary`, `description`, `parent` és azonosító label.
- **Javítás:** külön `backfillCandidates` struktúrát kell fenntartani, és abból exportálni a CSV-t.
- **Megelőzés:** minden backfill-lista eleve importcélú adatmodellel készüljön.
- **Ellenőrzés:** a CSV oszlopai legalább `Issue Type`, `Summary`, `Description`, `Parent`, `Labels` legyenek.

_Első azonosított forrásidő: 2026-03-29 23:42:34 | Forrásvonal: `codingLessonsLearnt (59).md` (003); `codingLessonsLearnt (58).md` (003)_

### [002] Changelog parser fallback nélkül könnyen néma hibát okoz
- **Tünet / log:** release detail oldalon eltűnnek a changelog információk, ha a verzió formátuma nem pontosan egyezik.
- **Kiváltó ok:** a changelog entry és a release version eltérő formátumban szerepelhet.
- **Javítás:** normalizálni kell a verzióformátumot és fallbacket kell hagyni a seeded `releaseNotes` számára.
- **Megelőzés:** a changelog parser mindig normalizáljon és ne csak exact string matchre támaszkodjon.
- **Ellenőrzés:** Hobbeast, Syncfolk és ReleaseGovernance release detail oldalon is jelenjen meg a megfelelő bejegyzés vagy a seed fallback.

_Első azonosított forrásidő: 2026-03-29 23:42:34 | Forrásvonal: `codingLessonsLearnt (59).md` (002); `codingLessonsLearnt (58).md` (002)_

### [001] Release state és status keveredése
- **Tünet / log:** a release listák vagy dashboardok rosszul számolták a released / unreleased elemeket.
- **Kiváltó ok:** egyes helyeken a `status`, más helyeken a `releaseState` lett használva ugyanarra a célra.
- **Javítás:** a released / unreleased bontást mindenhol a `releaseState` alapján kell számolni, a `status` pedig csak UI-jellegű címke maradjon (`current`, `old`, `unreleased`).
- **Megelőzés:** új release logika bevezetésekor explicit el kell dönteni, melyik mező üzleti státusz és melyik megjelenítési státusz.
- **Ellenőrzés:** a dashboard, releases oldal és capability grouping ugyanazt az osztályozást adja ugyanarra az adathalmazra.

_Első azonosított forrásidő: 2026-03-29 23:42:34 | Forrásvonal: `codingLessonsLearnt (59).md` (001); `codingLessonsLearnt (58).md` (001)_

### [004] Összes Jira ticket és összes shipped feature külön kezelése
- **Tünet / log:** vagy a Jira exportból hiányzott néhány ticket a felületről, vagy a kódból detektált feature-ek maradtak ki a governance nézetből.
- **Kiváltó ok:** a release mapping és az imported Jira catalog külön életet élt.
- **Javítás:** a traceability oldalon külön kell mutatni a released Jira-linked worköt, az unreleased Jira worköt és a Jira nélküli backfill-jelölteket.
- **Megelőzés:** traceability nézet tervezésekor három külön halmazzal kell számolni.
- **Ellenőrzés:** az összes importált Jira elem és az összes backfill candidate látszódjon valamilyen szekcióban.

_Első azonosított forrásidő: 2026-03-29 23:42:34 | Forrásvonal: `codingLessonsLearnt (59).md` (004); `codingLessonsLearnt (58).md` (004)_

### [017] Hidden governance functionality is effectively missing functionality
- **Tünet / visszajelzés:** a backfill logika részben megvolt az adatokban, de a felhasználó nem látta a gombot, az export utat és a resolved/unresolved állapotot a felületen.
- **Kiváltó ok:** túl sok governance viselkedés maradt implicit a mock-data vagy CSV export szintjén, és nem lett elég egyértelmű UI-belépési pont hozzá.
- **Javítás:** a backfill életciklust külön, láthatóan kell megjeleníteni a dashboardon, a capabilities oldalon, a traceability oldalon és az automation oldalon is.
- **Megelőzés:** ha egy funkcióhoz több lépéses operatív folyamat tartozik (pl. export -> Jira import -> visszaimport -> státuszváltás), annak legyen UI-szintű belépési pontja és státuszkijelzése, ne csak adatmodellje.
- **Ellenőrzés:** release előtt végig kell kattintani, hogy a felhasználó a képernyőről el tudja-e indítani a folyamatot, és látja-e a "mi történt már / mi hiányzik még" állapotot.

_Első azonosított forrásidő: 2026-03-30 00:07:46 | Forrásvonal: `codingLessonsLearnt (58).md` (017)_

### [018] Derived view-model referenced outside its scope (`backfill`)
- **Tünet / log:** `Cannot find name 'backfill'.` hiba az `app/projects/[projectId]/capabilities/page.tsx` fájlban.
- **Kiváltó ok:** a `sectionedCapabilities(...)` helper refaktor után a JSX továbbra is a `backfill` derived state-re hivatkozott, miközben az már nem létezett a page scope-ban.
- **Javítás:** a `const backfill = summarizeBackfill(project)` derivációt a page komponens lokális scope-jában kell létrehozni, ahol a JSX használja.
- **Megelőzés:** refaktor után mindig ellenőrizni kell, hogy a JSX-ben hivatkozott derived state változók (`summary`, `stats`, `backfill`, `grouped`, `rows`) még ugyanabban a scope-ban léteznek-e.
- **Ellenőrzés:** keresd a fájlban a JSX-ben használt azonosítókat, és győződj meg róla, hogy mindegyik vagy prop, vagy lokális const, vagy import.

_Első azonosított forrásidő: 2026-03-30 00:55:04 | Forrásvonal: `codingLessonsLearnt (56).md` (018)_

### [017] Heterogeneous `labels` shape in backfill candidates
- **Tünet / log:** `Property 'join' does not exist on type 'string'.` hiba az `app/projects/[projectId]/automation/page.tsx` fájlban.
- **Kiváltó ok:** a backfill candidate `labels` mezője nem minden esetben tömbként volt kezelhető; legalább egy adatútvonal stringet adott vissza.
- **Javítás:** be kell vezetni egy `normalizeLabels(...)` vagy közös backfill helper függvényt, ami kezeli a `string[] | string | undefined` alakot, és csak ezután szabad CSV-be írni.
- **Megelőzés:** importált/seedelt adatoknál soha ne feltételezd, hogy egy mező shape-je minden patch után ugyanaz maradt. CSV-export, traceability és UI lista előtt normalizáld a bemenetet.
- **Ellenőrzés:** build előtt keress rá azokra a helyekre, ahol `.join(`, `.map(` vagy `.length` fut opcionális vagy importált mezőkön, és ellenőrizd a tényleges típust.

_Első azonosított forrásidő: 2026-03-30 00:55:04 | Forrásvonal: `codingLessonsLearnt (56).md` (017)_

### [019] Közös domain-logikát ne másolj több képernyőre eltérően
- **Tünet / log:** ugyanaz a backfill/labels logika külön workaroundokkal jelent meg több oldalon, ami ismétlődő regressziókhoz vezetett.
- **Kiváltó ok:** a normalizálás és matching szabályok nem közös helperben éltek.
- **Javítás:** a `lib/backfill.ts` legyen az egyetlen canonical hely a labels-normalizálásra, matchingre és CSV-row képzésre.
- **Megelőzés:** ha ugyanazt a domain mezőt (`labels`, `jiraKeys`, `releases`) több képernyő is használja, vigyél be közös helper modult.
- **Ellenőrzés:** patch előtt keress rá a domain mező összes használatára, és nézd meg, hogy ugyanazt a canonical helper-t használja-e minden fogyasztó.

_Első azonosított forrásidő: 2026-03-30 00:55:04 | Forrásvonal: `codingLessonsLearnt (56).md` (019)_

### [021] Jira lekérdezéseket mindig projektkulcshoz kell kötni a governed project szerint
- **Tünet / log:** ugyanaz az Import Studio több projekten használható, ezért rossz Jira projektből is be lehetne húzni issue-kat.
- **Kiváltó ok:** a Jira import URL-t elfogadta explicit governed-project enforcement nélkül.
- **Javítás:** a selected project `jiraProjectKey` kötelező input lett az API-nak; issue/project/JQL import mind project-locked szűrőt kap.
- **Megelőzés:** multi-project governance appban minden külső lekérdezést tenant/project contexthez kell kötni, nem elég a felhasználó által megadott URL-ben bízni.
- **Ellenőrzés:** HOB projekt oldalon csak HOB issue-k jöhetnek vissza; SYN oldalon csak SYN; RLG oldalon csak RLG.

_Első azonosított forrásidő: 2026-03-30 06:35:32 | Forrásvonal: `codingLessonsLearnt (55).md` (021); `codingLessonsLearnt (54).md` (021)_

### [020] User-entered integration credentials must survive UI refreshes unless explicitly cleared
- **Tünet / log:** Jira token, email and URL eltűnt a frissítés után az Import Studio felületről.
- **Kiváltó ok:** az űrlapállapot csak React state-ben élt, nem volt per-project persistálás a böngészőben.
- **Javítás:** explicit Save Jira settings gomb + localStorage alapú per-project mentés (`releasegovernance.jiraSettings.<projectId>`), és mountkor visszatöltés.
- **Megelőzés:** külső integrációs beállításoknál külön dönteni kell: ephemeral state vagy persisted state. Ha a felhasználó kézzel tokent/emailt ad meg, ne veszítsd el navigáció vagy refresh hatására.
- **Ellenőrzés:** kézzel teszteld: beállítás megadása → Save → refresh → mezők újratöltődnek-e.

_Első azonosított forrásidő: 2026-03-30 06:35:32 | Forrásvonal: `codingLessonsLearnt (55).md` (020); `codingLessonsLearnt (54).md` (020)_

### [022] Shared domain interface regresszió: UI már használ mezőt, de a közös típusból kikerül
- **Tünet / log:** `Property 'backfillCandidates' does not exist on type 'ProjectRecord'.` build hiba az `app/projects/[projectId]/page.tsx` fájlban.
- **Kiváltó ok:** a backfill feature több oldalon már a `project.backfillCandidates` mezőre épült, de a `lib/types.ts` aktuális `ProjectRecord` interfészéből ez a mező hiányzott.
- **Javítás:** a `BackfillCandidate` interfészt és a `backfillCandidates?: BackfillCandidate[]` mezőt vissza kell vezetni a közös típusrétegbe.
- **Megelőzés:** ha egy shared domain mezőt több képernyő is használ, minden type-only patch után ellenőrizni kell, hogy a `lib/types.ts` továbbra is tartalmazza-e a mezőt.
- **Ellenőrzés:** keress rá a repo-ban a `backfillCandidates` használataira, és ellenőrizd, hogy a shared interface deklarálja-e a mezőt, mielőtt új buildet indítasz.

_Első azonosított forrásidő: 2026-03-30 06:53:52 | Forrásvonal: `codingLessonsLearnt (54).md` (022)_

### [024] Ismétlődő shared-type regressziók
- **Tünet / log:** sorozatban jelentkeztek hibák, ahol a UI már használt közös domain mezőket, de a shared type layer nem tartotta velük a lépést (`ProjectImportBundle`, `backfillCandidates`, `ImportedJiraIssue.status`).
- **Kiváltó ok:** feature javítások során a shared contract ellenőrzés kimaradt.
- **Javítás:** minden patch végén legyen kötelező shared-contract audit a módosított domain objektumokra.
- **Megelőzés:** patch checklistbe vedd fel: "módosult-e shared interface?" és "minden consumer ugyanazt a canonical típust használja-e?".
- **Ellenőrzés:** build előtt külön nézd át a `lib/types.ts`-t azokhoz az objektumokhoz, amelyek körül az adott hibajegy/patch mozgott.

_Első azonosított forrásidő: 2026-03-30 07:04:04 | Forrásvonal: `codingLessonsLearnt (53).md` (024)_

### [023] UI preview mezők és a shared import típus szétcsúszása
- **Tünet / log:** `Property 'status' does not exist on type 'ImportedJiraIssue'.` hiba az `components/import-studio.tsx` fájlban, ugyanígy érintheti az `issueType`, `created`, `parentKey` mezőket is.
- **Kiváltó ok:** a Jira test/import preview táblához új mezők kerültek be a UI-ba és/vagy API válaszba, de a közös `ImportedJiraIssue` interfész nem lett velük együtt bővítve.
- **Javítás:** a shared típusrétegben (`lib/types.ts`) az `ImportedJiraIssue`-hoz hozzá kell adni az opcionális preview mezőket: `status`, `issueType`, `created`, `parentKey`.
- **Megelőzés:** minden import-/preview-feature patchnél együtt kell kezelni a hármast: API route -> shared type -> UI consumer. Egyik sem változhat külön a másik kettő nélkül.
- **Ellenőrzés:** keresd végig a repo-t `ImportedJiraIssue` használatokra és nézd meg, hogy a renderelt mezők mind szerepelnek-e az interfészben, mielőtt buildet indítasz.

_Első azonosított forrásidő: 2026-03-30 07:04:04 | Forrásvonal: `codingLessonsLearnt (53).md` (023)_

### [027] External repo + hosting credentials are project-scoped settings, not global app state
- **Tünet / log:** without per-project persistence, Hobbeast credentials can overwrite Syncfolk or ReleaseGovernance credentials.
- **Kiváltó ok:** using a single global form state for multi-project integrations.
- **Javítás:** persist GitHub/hosting settings under a project-specific storage key and restore them when returning to the project.
- **Megelőzés:** all external integration settings in ReleaseGovernance must be namespaced by `projectId`.
- **Ellenőrzés:** save different GitHub/hosting settings for HOB, SYN and RLG, refresh, and verify each project restores its own values.

_Első azonosított forrásidő: 2026-03-30 12:16:42 | Forrásvonal: `codingLessonsLearnt (52).md` (027)_

### [026] Feature detection pipelines need a staging step before they touch official release rows
- **Tünet / log:** if fetched GitHub/hosting data goes straight to Releases, there is no human checkpoint and incomplete metadata can pollute the governance registry.
- **Kiváltó ok:** missing candidate layer between raw external data and approved governance rows.
- **Javítás:** create a release-candidate stage with explicit required-check fields and a `Jóváhagy` action that routes the row either to Releases or Jira CSV backfill.
- **Megelőzés:** any external ingestion (GitHub, hosting, deployment provider) must land in a reviewable candidate state first.
- **Ellenőrzés:** fetched release candidates must show required checks, green-filled fields and approval routing to the correct destination.

_Első azonosított forrásidő: 2026-03-30 12:16:42 | Forrásvonal: `codingLessonsLearnt (52).md` (026)_

### [025] Local override state must be used on project pages that need to reflect approvals
- **Tünet / log:** approved releases or backfill candidates would not appear on pages that still rendered only seeded mock data.
- **Kiváltó ok:** server/static pages used `getProject(...)` directly and ignored local override state written by import/approval workflows.
- **Javítás:** pages that need to reflect approvals must read merged state through `useProjectRecord(...)`, which combines base project data with local overrides.
- **Megelőzés:** every new workflow that writes project-local approval/import state must check all consumer pages and make sure they render merged state, not only the static seed.
- **Ellenőrzés:** approve a release candidate and verify it appears on Dashboard, Releases, Release detail, Traceability, Automation and Capabilities without manually editing `mock-data.ts`.

_Első azonosított forrásidő: 2026-03-30 12:16:42 | Forrásvonal: `codingLessonsLearnt (52).md` (025)_

### [033] Avoid slash-opacity utility classes inside Tailwind `@apply` blocks for global CSS patches
- **Tünet / log:** Next/Tailwind build failed with messages like `The \`bg-white/92\` class does not exist` and `The \`lg:bg-slate-950/96\` class does not exist` while compiling `app/globals.css`.
- **Kiváltó ok:** a redesign patch `@apply` blokkokban használt tört opacitású utility osztályokat (`bg-white/92`, `bg-slate-950/96`, `border-white/70`, stb.), amelyeket a PostCSS/Tailwind feldolgozás ebben a kontextusban nem kezelt stabilan.
- **Javítás:** az ilyen stílusokat sima CSS deklarációkra kell bontani (`background-color: rgba(...)`, `border-color: rgba(...)`), és az `@apply`-ban csak biztosan támogatott utility osztályokat szabad hagyni.
- **Megelőzés:** ha globális CSS-ben vagy komponens-szintű utility aggregációban dolgozol, kerüld a slash-opacity utility-ket az `@apply`-ban; használd őket inkább közvetlen JSX className-ben vagy sima CSS tulajdonságként.
- **Ellenőrzés:** minden globális redesign patch után futtasd le a production buildet, és külön ellenőrizd az `app/globals.css`-hez kapcsolódó Tailwind/PostCSS hibákat.

_Első azonosított forrásidő: 2026-03-31 11:18:36 | Forrásvonal: `codingLessonsLearnt (50).md` (033)_

### [031] Never import Node-only modules into code that can flow into client/page bundles
- **Tünet / log:** Vercel build failed with `UnhandledSchemeError: Reading from "node:path" is not handled by plugins` and the import trace showed `./lib/runtime-control.ts -> ./components/app-shell.tsx -> ./app/projects/[projectId]/page.tsx`.
- **Kiváltó ok:** a runtime-control helper `node:fs` és `node:path` importokat használt, miközben egy olyan komponensből volt importálva, ami page bundle-be került.
- **Javítás:** a runtime-control olvasást build-safe, client-safe megoldásra kell cserélni. Ebben a fixben azonos szerkezetű embedded YAML stringből történik a parse, így nincs `node:` import a bundle útvonalon.
- **Megelőzés:** minden új util/helper esetén az első kérdés legyen: bekerülhet-e közvetlenül vagy közvetve a kliensbundle-be? Ha igen, tilos `node:*`, `fs`, `path` vagy más server-only API használata.
- **Ellenőrzés:** minden olyan fájlnál, amit komponens vagy page importál, futtasd végig fejben az import trace-t. Ha client/page útvonalra kerülhet, nem használhat Node-only modult.

_Első azonosított forrásidő: 2026-03-31 11:18:36 | Forrásvonal: `codingLessonsLearnt (50).md` (031); `codingLessonsLearnt (49).md` (031); `codingLessonsLearnt (48).md` (031); `codingLessonsLearnt (24).md` (031)_

### [032] Read the lessons file before each patch and classify the failure type first
- **Tünet / log:** ugyanaz a hibatípus részben visszatért, pedig a lessons file már jelezte, hogy a patch csak akkor kész, ha ténylegesen build-safe.
- **Kiváltó ok:** a javítás megtervezése megtörtént, de a `server-only vs client-safe` ellenőrzés nem volt elég szigorú a patch készítése előtt.
- **Javítás:** a patch előtt explicit módon osztályozni kell a hibát: `syntax`, `types`, `server-only import`, `runtime regression`, `data regression`, stb.
- **Megelőzés:** a lessons file-ból kötelező checklist legyen: 1) import trace ellenőrzés, 2) client/server boundary ellenőrzés, 3) minimális fix scope.
- **Ellenőrzés:** mielőtt kiadsz patch-et, nézd meg, hogy a javított fájl importlánca tartalmaz-e Node-only modult.

_Első azonosított forrásidő: 2026-03-31 11:18:36 | Forrásvonal: `codingLessonsLearnt (50).md` (032); `codingLessonsLearnt (49).md` (032); `codingLessonsLearnt (48).md` (032); `codingLessonsLearnt (24).md` (032)_

### [035] Jira import must not depend on a single URL pattern
- **Tünet / log:** a Jira import 0 találatot adott vissza több projektben.
- **Kiváltó ok:** a flow túl sokat feltételezett a bemenet URL formájáról.
- **Javítás:** legyen első osztályú támogatás a base Jira URL + explicit project key kombinációra is, az issue/project/JQL URL-ek mellett.
- **Megelőzés:** külső rendszer integrációnál mindig legyen explicit fallback paraméter.
- **Ellenőrzés:** tesztelj négy bemenettel: issue URL, project URL, JQL URL, base URL + project key.

_Első azonosított forrásidő: 2026-03-31 13:50:02 | Forrásvonal: `codingLessonsLearnt (49).md` (035); `codingLessonsLearnt (48).md` (035)_

### [033] New project bootstrap must live at workspace level, not inside an existing project
- **Tünet / log:** a felhasználó jogosan jelezte, hogy az új projekt feltöltése rossz helyen jelent meg: egy meglévő projekt Import menüjében, nem pedig a workspace/project-selector szinten.
- **Kiváltó ok:** a Project Upload és az existing-project import külön használati esete nem lett elég szigorúan elválasztva.
- **Javítás:** az Add a new project workflow-t a Projects oldalra, külön felugró ablakba kell tenni. Az Import oldal maradjon meglévő projektekhez.
- **Megelőzés:** minden új funkciónál először döntsd el, hogy `workspace-level`, `project-level`, vagy `release-level` művelet-e.
- **Ellenőrzés:** új projekt létrehozása csak a Projects oldalról indulhat; meglévő projekt import csak kiválasztott projekten belül érhető el.

_Első azonosított forrásidő: 2026-03-31 13:50:02 | Forrásvonal: `codingLessonsLearnt (49).md` (033); `codingLessonsLearnt (48).md` (033)_

### [036] Persist new-project drafts and created projects separately from per-project overrides
- **Tünet / log:** az új projekt bootstrap nem tud tartósan saját csempét létrehozni, ha csak a meglévő per-project override storage-t használjuk.
- **Kiváltó ok:** az override storage egy már létező projectId-re van optimalizálva, nem új projektek létrehozására.
- **Javítás:** külön localStorage kulcsokat kell használni az újonnan létrehozott projektekhez és a project-upload draft adatokhoz.
- **Megelőzés:** különítsd el a `new project creation` és az `existing project mutation` use case-eket adatszinten is.
- **Ellenőrzés:** új projekt létrehozás után újra megnyitva a Projects oldalt is látszódnia kell a projekt csempéjének.

_Első azonosított forrásidő: 2026-03-31 13:50:02 | Forrásvonal: `codingLessonsLearnt (49).md` (036); `codingLessonsLearnt (48).md` (036)_

### [034] Test and save actions must be separated per integration section
- **Tünet / log:** a felhasználó külön-külön mentést és tesztet vár GitHubhoz, hostinghoz és Jirához.
- **Kiváltó ok:** a kezdeti implementáció túlzottan egyetlen közös importszekcióként kezelte ezeket.
- **Javítás:** minden integrációs szekcióhoz külön Save és Test gomb kell.
- **Megelőzés:** ha külön hitelesítési és kapcsolódási logikák vannak, az UI-nak is külön kell kezelnie őket.
- **Ellenőrzés:** GitHub, hosting és Jira külön-külön tesztelhető és külön menthető a modálon belül.

_Első azonosított forrásidő: 2026-03-31 13:50:02 | Forrásvonal: `codingLessonsLearnt (49).md` (034); `codingLessonsLearnt (48).md` (034)_

### [037] Export actions must be driven from the real in-memory rows, not a stale or filtered zero-length source
- **Tünet / log:** a Download CSV funkció 0 soros vagy üres eredményt adott, miközben a Releases oldalon láthatóan voltak release sorok.
- **Kiváltó ok:** az export logika nem közvetlenül a projekt aktuális `releases` tömbjéből épült, vagy hibásan másik / üres adatsorra támaszkodott.
- **Javítás:** az export CSV-t közvetlenül a `project.releases` adataiból kell generálni, és ki kell írni a tényleges exportált sorszámot is.
- **Megelőzés:** minden export funkciónál a renderelt / aktív adatszerkezet legyen az egyetlen forrás.
- **Ellenőrzés:** export után egyeznie kell a sorok számának a projekt aktuális release darabszámával.

_Első azonosított forrásidő: 2026-03-31 20:41:22 | Forrásvonal: `codingLessonsLearnt (48).md` (037)_

### [038] List view and detailed view are different presentation modes, not different data sources
- **Tünet / log:** a Releases oldalon a felhasználó alapértelmezett kompakt listát kért, és csak opcionálisan részletes inline nézetet.
- **Kiváltó ok:** könnyű külön adatlogikát írni a két nézethez, ami később eltérésekhez vezet.
- **Javítás:** a list és detailed nézet ugyanazt a release adathalmazt használja, csak más prezentációval.
- **Megelőzés:** nézetváltásnál mindig ugyanazt a rekordforrást használd.
- **Ellenőrzés:** ugyanazok a release-ek jelenjenek meg mindkét nézetben, azonos kiválasztási és navigációs működéssel.

_Első azonosított forrásidő: 2026-03-31 20:41:22 | Forrásvonal: `codingLessonsLearnt (48).md` (038)_

### [039] Push-to-Jira must be preview-first and editable before apply
- **Tünet / log:** a felhasználó nem automatikus vak feltöltést kért, hanem AI-szerű előkészítést, szerkeszthető parent / summary / description / labels javaslatokkal.
- **Kiváltó ok:** közvetlen create-issue flow túl veszélyes lenne.
- **Javítás:** először preview route kell, amely a release-eket összeveti az elérhető Jira issue-kkal, javaslatot készít, majd csak külön apply lépés hoz létre issue-kat.
- **Megelőzés:** destruktív vagy külső rendszert módosító műveletnél mindig legyen előnézeti/szerkesztési fázis.
- **Ellenőrzés:** Push to Jira gomb után szerkeszthető preview jelenjen meg, és csak az Apply push to Jira hajtson végre create műveletet.

_Első azonosított forrásidő: 2026-03-31 20:41:22 | Forrásvonal: `codingLessonsLearnt (48).md` (039)_

### [037] AppShell prop contractot nem szabad megsérteni
- **Tünet / log:** `Property 'projectName' does not exist on type ...` build hiba az automation és releases oldalon.
- **Kiváltó ok:** az `AppShell` csak `children` és opcionális `projectId` propot fogad, mégis `projectName` prop került átadásra.
- **Javítás:** a hibás `projectName` propot el kell távolítani, és csak `projectId` maradjon átadva.
- **Megelőzés:** komponens használat előtt mindig ellenőrizni kell az aktuális prop típust, különösen hotfix közben.
- **Ellenőrzés:** keress rá a repo-ban az `AppShell projectName=` mintára, és szüntesd meg mindenhol.

_Első azonosított forrásidő: 2026-04-01 01:52:56 | Forrásvonal: `codingLessonsLearnt (45).md` (037); `codingLessonsLearnt (12).md` (037); `codingLessonsLearnt (6).md` (037)_

### [029] Jira import must support base URL + project key
- **Tünet / log:** az import funkció minden projektben 0 issue-t adott vissza.
- **Kiváltó ok:** a route túl sokat feltételezett a bemeneti Jira URL formátumáról, és nem kezelte stabilan a base URL + explicit project key használatot.
- **Javítás:** a Jira import kapott erősített URL-parse + projectKey fallback logikát és többféle Jira keresési stratégiát.
- **Megelőzés:** minden külső URL-alapú importnál biztosítani kell explicit, formátumtól független fallback paramétereket.
- **Ellenőrzés:** teszteld külön issue URL-lel, project URL-lel, JQL URL-lel és sima base URL + project key kombinációval.

_Első azonosított forrásidő: 2026-04-06 18:14:26 | Forrásvonal: `codingLessonsLearnt (21).md` (029)_

### [028] Planned patch is not the same as downloadable patch
- **Tünet / log:** a felhasználó jogosan jelezte, hogy csak egy felsorolást lát a módosítandó fájlokról, de nincs ténylegesen letölthető zip.
- **Kiváltó ok:** a javítás meg volt tervezve, de a fájlok nem lettek ténylegesen legenerálva és átadva.
- **Javítás:** a következő körben mindig ténylegesen generálni kell a módosított fájlokat és zipet.
- **Megelőzés:** soha ne mondd, hogy kész a patch, ha a letölthető artifact még nem létezik.
- **Ellenőrzés:** a válasz előtt mindig legyen konkrét sandbox link a zipre.

_Első azonosított forrásidő: 2026-04-06 18:14:26 | Forrásvonal: `codingLessonsLearnt (21).md` (028)_

### [030] Runtime-control documentation must be wired to runtime behavior
- **Tünet / log:** a vezérlő YAML és a leírás elkészült, de a live oldalon nem látszott az új projekt-upload funkcionalitás.
- **Kiváltó ok:** a dokumentációs/config réteg nem volt ténylegesen bekötve az UI-ba.
- **Javítás:** a sidebar és az import wizard opciói most runtime-control olvasáson keresztül működnek.
- **Megelőzés:** ha egy fájlról azt állítjuk, hogy vezérli a működést, azt legalább egy route vagy komponens ténylegesen olvassa is.
- **Ellenőrzés:** módosítsd a runtime-control YAML egy látható elemét, majd ellenőrizd, hogy az UI reagál rá.

_Első azonosított forrásidő: 2026-04-06 18:14:26 | Forrásvonal: `codingLessonsLearnt (21).md` (030)_

### [038] Mobile layouts must avoid duplicated chrome and single-column stat waste
- **Tünet / log:** mobil nézetben a felső workspace header duplikálta a projektinformációt, a stat csempék indokolatlanul 1 oszlopban jelentek meg, és a release fejlécblokk feleslegesen sok helyet foglalt.
- **Kiváltó ok:** desktop-first layout maradt aktív mobilon is, illetve a mobilra nem volt külön sűrített megjelenítés.
- **Javítás:** el kell távolítani a redundáns project header blokkot, a stat csempéket mobilon 2 oszlopos gridbe kell tenni, és a release oldalon a táblafejlécet mobilon el kell rejteni külön mobilkártyás elrendezéssel.
- **Megelőzés:** minden dashboard és release oldalnál külön ellenőrizni kell a mobil breakpointot, különösen a duplikált információkat és a grid oszlopok számát.
- **Ellenőrzés:** mobil nézetben legyen 2 csempe / sor a dashboard blokkokban, a release lista ne mutasson külön üres fejlécpanelt, és legyen Projects + Project navigáció gyorsan elérhetően.

_Első azonosított forrásidő: 2026-04-06 18:15:24 | Forrásvonal: `codingLessonsLearnt (12).md` (038)_

### [013] Auto-detected release row must not depend on manual seed refresh
- **Tünet / log:** új commitok történtek, de a release listában nem jelent meg új sor.
- **Kiváltó ok:** a release center csak seedelt mock adatot olvasott, nem volt automatikus commit alapú detektálás.
- **Javítás:** külön GitHub release detection API route került be, és a Releases oldal betöltéskor automatikusan lekéri a legfrissebb commitból képezett candidate sort.
- **Megelőzés:** deployment registry jellegű nézetnél mindig legyen élő detektálási útvonal, ne csak statikus seed.
- **Ellenőrzés:** új commit után a Releases lista tetején candidate sor jelenjen meg.

_Első azonosított forrásidő: 2026-04-06 18:15:26 | Forrásvonal: `codingLessonsLearnt (8).md` (013)_

### [014] CSV exportot mindig a tényleges sorforrásból kell generálni
- **Tünet / log:** a Download CSV 0 sort adott vissza, miközben a felületen létező jelölteknek kellett volna látszaniuk.
- **Kiváltó ok:** az export logika nem ugyanabból az adatforrásból dolgozott, mint a képernyő.
- **Javítás:** az export most ugyanabból a backfill candidate listából épít CSV-t, amit az oldal is megjelenít.
- **Megelőzés:** export funkciónál mindig a megjelenített adathalmaz legyen a forrás.
- **Ellenőrzés:** a kimeneti CSV sorszáma egyezzen a képernyőn mutatott rows számmal.

_Első azonosított forrásidő: 2026-04-06 18:15:26 | Forrásvonal: `codingLessonsLearnt (8).md` (014)_

### [015] Dashboard regroupingnél a navigációs következményeket is együtt kell módosítani
- **Tünet / log:** a dashboard átrendezési igény mellett a régi külön menüpontok bent maradtak volna, ami kettős navigációs modellt eredményez.
- **Kiváltó ok:** a dashboard és a sidebar külön lett kezelve.
- **Javítás:** a dashboard csoportosítás bevezetésével párhuzamosan a sidebarból kikerültek a külön Releases / Capabilities / Integrations / Traceability elemek.
- **Megelőzés:** dashboard-struktúra változásakor mindig ellenőrizni kell a teljes navigációs modellt.
- **Ellenőrzés:** a sidebar csak a megmaradó funkciókat mutassa, a csoportosított dashboardok pedig külön gombbal nyíljanak meg.

_Első azonosított forrásidő: 2026-04-06 18:15:26 | Forrásvonal: `codingLessonsLearnt (8).md` (015)_

### [015] Funkcióvesztés layout javítás közben
- **Tünet / log:** mobil layout javítás után eltűnt vagy nem volt elérhető a release auto-detection, a Jira backfill CSV letöltés és a Push to Jira.
- **Kiváltó ok:** a fókusz túl szűken a vizuális layoutra került, és a release oldal interaktív governance funkciói nem maradtak benne az új komponensverzióban.
- **Javítás:** a release oldal layoutját úgy kell javítani, hogy közben a release auto-generation, Jira CSV export és Push to Jira preview/apply flow is megmaradjon vagy visszakerüljön.
- **Megelőzés:** minden layout patch előtt explicit funkció-megőrzési checklist kell a release oldalhoz: auto release, csv export, push to jira, list/detailed view, release detail link.
- **Ellenőrzés:** mobilon és desktopon is ellenőrizni kell, hogy a gombok látszanak és a műveletek tényleg futnak.

_Első azonosított forrásidő: 2026-04-06 18:15:26 | Forrásvonal: `codingLessonsLearnt (9).md` (015); `codingLessonsLearnt.md` (015)_

### [017] Mobil quick-navból nem tűnhet el a Project visszalépés
- **Tünet / log:** mobil nézetben hiányzott a Project gomb, így nehézkes lett a visszalépés a projekt főoldalára.
- **Kiváltó ok:** a bottom navigation túl agresszíven leegyszerűsödött.
- **Javítás:** project-specifikus oldalon legyen külön Project gyorsgomb mobilon.
- **Megelőzés:** a bottom navnál külön ellenőrizni kell a legfontosabb visszalépési útvonalakat.
- **Ellenőrzés:** projekt alatt mobilon látszódjon a Projects és a Project gomb is.

_Első azonosított forrásidő: 2026-04-06 18:15:26 | Forrásvonal: `codingLessonsLearnt (9).md` (017); `codingLessonsLearnt.md` (017)_

### [016] Mobilon túl széles stat kártyák és redundáns header
- **Tünet / log:** mobil nézetben a dashboard kártyák egyesével, túl nagy függőleges helyet foglaltak, és a headerben duplikált információ jelent meg.
- **Kiváltó ok:** a grid mobil breakpointon 1 oszlopos maradt, és a workspace/header blokk duplikálta a projektinformációt.
- **Javítás:** mobilon 2 oszlopos stat-card grid kell, a fölösleges header blokkot pedig el kell távolítani.
- **Megelőzés:** minden dashboard blokkot mobilon is külön screenshot-alapú QA-val kell ellenőrizni.
- **Ellenőrzés:** legalább két statcard férjen el egymás mellett mobilon, és ne legyen fölösleges extra header panel.

_Első azonosított forrásidő: 2026-04-06 18:15:26 | Forrásvonal: `codingLessonsLearnt (9).md` (016); `codingLessonsLearnt.md` (016)_

### [038] AppShell prop contract maradék előfordulásait repo-szinten kell kiszedni
- **Tünet / log:** `Property 'projectName' does not exist on type ...` build hiba a `traceability/page.tsx` oldalon.
- **Kiváltó ok:** a korábbi hotfix nem futott végig a teljes repo-n, csak néhány ismert oldalt javított.
- **Javítás:** a `traceability/page.tsx` fájlban is el kell távolítani a `projectName` propot, majd teljes repo-szintű mintakeresést kell futtatni.
- **Megelőzés:** azonos komponens-szerződés hibánál mindig teljes mintakereséssel kell zárni a javítást, nem csak a logban elsőként látható fájlra.
- **Ellenőrzés:** `rg -n "AppShell .*projectName=|projectName=\{" app components` ne adjon találatot.

_Első azonosított forrásidő: 2026-04-06 18:15:28 | Forrásvonal: `codingLessonsLearnt (6).md` (038)_

### [039] Ne hagyj hiányzó exportokat a használt helper API körül
- **Tünet / log:** import figyelmeztetések / build hibák `approveReleaseCandidate`, `writeProjectUploadDraft`, `createProjectFromUpload`, `readCustomProjects` hiánya miatt.
- **Kiváltó ok:** a komponensek már a runtime project upload és release candidate flow-ra hivatkoztak, de a hozzájuk tartozó helper exportok hiányoztak a `lib/project-overrides.ts` fájlból.
- **Javítás:** a hiányzó exportokat implementálni kell minimális, működő localStorage-alapú viselkedéssel.
- **Megelőzés:** új UI flow hozzáadása után mindig ellenőrizni kell, hogy a hivatkozott helper függvények tényleg exportálva vannak-e.
- **Ellenőrzés:** repo build és célzott keresés az importált, de nem exportált symbolokra.

_Első azonosított forrásidő: 2026-04-06 18:15:28 | Forrásvonal: `codingLessonsLearnt (6).md` (039)_

## Local lessons
# 2026-04-03 — Build-safe delivery artifacts under repository-visible paths

Lesson:
- If AI delivery or governance artifacts are committed as `.ts` or `.tsx` files inside repository-visible paths, they can be picked up by TypeScript validation even when they are not part of the runtime app.
- Mirrored or illustrative app routes under `ai-delivery/.../app/...` must not reference non-existent relative imports.
- If delivery code is intentionally non-runtime scaffolding, it must either be build-safe, have valid import resolution, or be placed where the main app build and typecheck do not interpret it as source.
- Repeated single-file commits do not create the root cause by themselves; they only multiply failing preview deployments when the branch state is already build-broken.

Required practice:
1. Before pushing build-visible delivery `.ts/.tsx` artifacts, verify relative imports.
2. If delivery artifact imports point outside their actual folder structure, add build-safe alias modules or keep the artifacts out of typechecked source scope.
3. Treat `ai-delivery` code artifacts as potentially typechecked unless proven otherwise.
4. When a preview branch starts failing repeatedly, diagnose the first real module-resolution or typecheck error instead of assuming the number of commits is the root cause.

### [040] Release candidate rows can exist in storage without appearing on the release page
- **Tünet:** új deploy / commit után a release detection létrehoz release candidate rekordot, de a release oldalon nem jelenik meg új sor.
- **Gyökérok:** a detection logika a `releaseCandidates` tömböt frissítette, miközben a release UI csak a `releases` listát renderelte.
- **Javítás:** a release dashboardnak külön, első osztályú szekcióban kell megjelenítenie a `releaseCandidates` elemeket, és jóváhagyási művelettel kell tudnia azokat governed release-szé alakítani.
- **Megelőzés:** ha egy új állapot külön adattárolóba kerül, mindig ellenőrizni kell, hogy van-e hozzá tényleges UI kirajzolás és user action.
- **Ellenőrzés:** release detection után a candidate szekcióban ténylegesen látszódjon az új elem, és az approve művelet után kerüljön át a governed release listába.

_Első azonosított forrásidő: 2026-04-06 | Forrásvonal: jelen fejlesztési kör_

### [041] Jira CSV exportnál az unresolved backfill lista az elsődleges forrás
- **Tünet:** a Download Jira CSV 0 soros vagy félrevezetően üres lehetett, miközben tényleges backfill igény létezett.
- **Gyökérok:** az export kizárólag Jira-link nélküli release sorokból épült, nem a kanonikus unresolved `backfillCandidates` listából.
- **Javítás:** exportnál először az unresolved backfill candidate-ekből kell CSV-t képezni, és csak fallbackként szabad Jira-less release sorokra támaszkodni.
- **Megelőzés:** exportnál mindig a valódi üzleti backlog-forrást kell elsődlegessé tenni, nem a UI-ban éppen látható egyik részhalmazt.
- **Ellenőrzés:** unresolved backfill candidate-ek megléte esetén a CSV export ne legyen üres.

_Első azonosított forrásidő: 2026-04-06 | Forrásvonal: jelen fejlesztési kör_

### [042] Runtime létrehozott projektek nem támaszkodhatnak seed-only route feloldásra
- **Tünet:** a workspace listában látható volt a feltöltéssel létrehozott projekt, de egyes részletes oldalak vagy a shell fejléc nem tudta ugyanazt a projektet feloldani.
- **Gyökérok:** a workspace hook már olvasta a localStorage-s custom projekteket, de néhány route és layout továbbra is csak a seed `getProject()` forrást használta.
- **Javítás:** a merged project feloldásnál a custom projekteknek ugyanúgy részt kell venniük a route/shell lookupban, mint a seed projekteknek.
- **Megelőzés:** ha a rendszer runtime-ban is tud új entitást létrehozni, akkor minden részletes oldalnál és közös layoutnál tilos seed-only adatforrásra hagyatkozni.
- **Ellenőrzés:** upload/import után a projekt dashboard, automation oldal és detail route-ok is ugyanazt a projektet oldják fel.

_Első azonosított forrásidő: 2026-04-06 | Forrásvonal: jelen fejlesztési kör_

### [043] Release detail page must use merged governed state
- **Tünet:** importált vagy release candidate-ből jóváhagyott release rekord nem mindig volt megnyitható a detail oldalon.
- **Gyökérok:** a release detail page seed-only project lookupkal működött, így nem látta a runtime override-okkal bővített release-listát.
- **Javítás:** a detail oldalnak ugyanazt a merged governed state-et kell használnia, mint a listaoldalnak.
- **Megelőzés:** override-olt governance entitásokhoz tartozó detail route-oknál mindig ugyanazt a merged adatforrást kell használni, mint a listanézetben.
- **Ellenőrzés:** approve/import után az új release detail oldala közvetlen linken is megnyitható legyen.

_Első azonosított forrásidő: 2026-04-06 | Forrásvonal: jelen fejlesztési kör_
