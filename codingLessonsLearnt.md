# codingLessonsLearnt

Mindig ezzel kell kezdeni a fejlesztést: munka előtt olvasd végig ezt a fájlt elejétől a végéig. Az itt felsorolt hibákat nem szabad újra elkövetni. Minden új típusú hibát ehhez a fájlhoz kell hozzáappendelni, nem új fájlba írni, és nem szabad a régi tanulságokat törölni.

Kötelező szerkezet minden új bejegyzésnél:
- Tünet / log
- Kiváltó ok
- Javítás
- Megelőzés
- Ellenőrzés

### [031] Never import Node-only modules into code that can flow into client/page bundles
- **Tünet / log:** Vercel build failed with `UnhandledSchemeError: Reading from "node:path" is not handled by plugins` and the import trace showed `./lib/runtime-control.ts -> ./components/app-shell.tsx -> ./app/projects/[projectId]/page.tsx`.
- **Kiváltó ok:** a runtime-control helper `node:fs` és `node:path` importokat használt, miközben egy olyan komponensből volt importálva, ami page bundle-be került.
- **Javítás:** a runtime-control olvasást build-safe, client-safe megoldásra kell cserélni. Ebben a fixben azonos szerkezetű embedded YAML stringből történik a parse, így nincs `node:` import a bundle útvonalon.
- **Megelőzés:** minden új util/helper esetén az első kérdés legyen: bekerülhet-e közvetlenül vagy közvetve a kliensbundle-be? Ha igen, tilos `node:*`, `fs`, `path` vagy más server-only API használata.
- **Ellenőrzés:** minden olyan fájlnál, amit komponens vagy page importál, futtasd végig fejben az import trace-t. Ha client/page útvonalra kerülhet, nem használhat Node-only modult.

### [032] Read the lessons file before each patch and classify the failure type first
- **Tünet / log:** ugyanaz a hibatípus részben visszatért, pedig a lessons file már jelezte, hogy a patch csak akkor kész, ha ténylegesen build-safe.
- **Kiváltó ok:** a javítás megtervezése megtörtént, de a `server-only vs client-safe` ellenőrzés nem volt elég szigorú a patch készítése előtt.
- **Javítás:** a patch előtt explicit módon osztályozni kell a hibát: `syntax`, `types`, `server-only import`, `runtime regression`, `data regression`, stb.
- **Megelőzés:** a lessons file-ból kötelező checklist legyen: 1) import trace ellenőrzés, 2) client/server boundary ellenőrzés, 3) minimális fix scope.
- **Ellenőrzés:** mielőtt kiadsz patch-et, nézd meg, hogy a javított fájl importlánca tartalmaz-e Node-only modult.

### [033] New project bootstrap must live at workspace level, not inside an existing project
- **Tünet / log:** a felhasználó jogosan jelezte, hogy az új projekt feltöltése rossz helyen jelent meg: egy meglévő projekt Import menüjében, nem pedig a workspace/project-selector szinten.
- **Kiváltó ok:** a Project Upload és az existing-project import külön használati esete nem lett elég szigorúan elválasztva.
- **Javítás:** az Add a new project workflow-t a Projects oldalra, külön felugró ablakba kell tenni. Az Import oldal maradjon meglévő projektekhez.
- **Megelőzés:** minden új funkciónál először döntsd el, hogy `workspace-level`, `project-level`, vagy `release-level` művelet-e.
- **Ellenőrzés:** új projekt létrehozása csak a Projects oldalról indulhat; meglévő projekt import csak kiválasztott projekten belül érhető el.

### [034] Test and save actions must be separated per integration section
- **Tünet / log:** a felhasználó külön-külön mentést és tesztet vár GitHubhoz, hostinghoz és Jirához.
- **Kiváltó ok:** a kezdeti implementáció túlzottan egyetlen közös importszekcióként kezelte ezeket.
- **Javítás:** minden integrációs szekcióhoz külön Save és Test gomb kell.
- **Megelőzés:** ha külön hitelesítési és kapcsolódási logikák vannak, az UI-nak is külön kell kezelnie őket.
- **Ellenőrzés:** GitHub, hosting és Jira külön-külön tesztelhető és külön menthető a modálon belül.

### [035] Jira import must not depend on a single URL pattern
- **Tünet / log:** a Jira import 0 találatot adott vissza több projektben.
- **Kiváltó ok:** a flow túl sokat feltételezett a bemenet URL formájáról.
- **Javítás:** legyen első osztályú támogatás a base Jira URL + explicit project key kombinációra is, az issue/project/JQL URL-ek mellett.
- **Megelőzés:** külső rendszer integrációnál mindig legyen explicit fallback paraméter.
- **Ellenőrzés:** tesztelj négy bemenettel: issue URL, project URL, JQL URL, base URL + project key.

### [036] Persist new-project drafts and created projects separately from per-project overrides
- **Tünet / log:** az új projekt bootstrap nem tud tartósan saját csempét létrehozni, ha csak a meglévő per-project override storage-t használjuk.
- **Kiváltó ok:** az override storage egy már létező projectId-re van optimalizálva, nem új projektek létrehozására.
- **Javítás:** külön localStorage kulcsokat kell használni az újonnan létrehozott projektekhez és a project-upload draft adatokhoz.
- **Megelőzés:** különítsd el a `new project creation` és az `existing project mutation` use case-eket adatszinten is.
- **Ellenőrzés:** új projekt létrehozás után újra megnyitva a Projects oldalt is látszódnia kell a projekt csempéjének.

### [037] Export actions must be driven from the real in-memory rows, not a stale or filtered zero-length source
- **Tünet / log:** a Download CSV funkció 0 soros vagy üres eredményt adott, miközben a Releases oldalon láthatóan voltak release sorok.
- **Kiváltó ok:** az export logika nem közvetlenül a projekt aktuális `releases` tömbjéből épült, vagy hibásan másik / üres adatsorra támaszkodott.
- **Javítás:** az export CSV-t közvetlenül a `project.releases` adataiból kell generálni, és ki kell írni a tényleges exportált sorszámot is.
- **Megelőzés:** minden export funkciónál a renderelt / aktív adatszerkezet legyen az egyetlen forrás.
- **Ellenőrzés:** export után egyeznie kell a sorok számának a projekt aktuális release darabszámával.

### [038] List view and detailed view are different presentation modes, not different data sources
- **Tünet / log:** a Releases oldalon a felhasználó alapértelmezett kompakt listát kért, és csak opcionálisan részletes inline nézetet.
- **Kiváltó ok:** könnyű külön adatlogikát írni a két nézethez, ami később eltérésekhez vezet.
- **Javítás:** a list és detailed nézet ugyanazt a release adathalmazt használja, csak más prezentációval.
- **Megelőzés:** nézetváltásnál mindig ugyanazt a rekordforrást használd.
- **Ellenőrzés:** ugyanazok a release-ek jelenjenek meg mindkét nézetben, azonos kiválasztási és navigációs működéssel.

### [039] Push-to-Jira must be preview-first and editable before apply
- **Tünet / log:** a felhasználó nem automatikus vak feltöltést kért, hanem AI-szerű előkészítést, szerkeszthető parent / summary / description / labels javaslatokkal.
- **Kiváltó ok:** közvetlen create-issue flow túl veszélyes lenne.
- **Javítás:** először preview route kell, amely a release-eket összeveti az elérhető Jira issue-kkal, javaslatot készít, majd csak külön apply lépés hoz létre issue-kat.
- **Megelőzés:** destruktív vagy külső rendszert módosító műveletnél mindig legyen előnézeti/szerkesztési fázis.
- **Ellenőrzés:** Push to Jira gomb után szerkeszthető preview jelenjen meg, és csak az Apply push to Jira hajtson végre create műveletet.
