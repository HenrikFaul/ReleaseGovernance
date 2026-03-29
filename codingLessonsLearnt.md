# codingLessonsLearnt

Mindig ezzel kell kezdeni a fejlesztést: munka előtt olvasd végig ezt a fájlt elejétől a végéig. Az itt felsorolt hibákat nem szabad újra elkövetni. Minden új típusú hibát ehhez a fájlhoz kell hozzáappendelni, nem új fájlba írni, és nem szabad a régi tanulságokat törölni.

Kötelező szerkezet minden új bejegyzésnél:
- Tünet / log
- Kiváltó ok
- Javítás
- Megelőzés
- Ellenőrzés

### [017] Heterogeneous `labels` shape in backfill candidates
- **Tünet / log:** `Property 'join' does not exist on type 'string'.` hiba az `app/projects/[projectId]/automation/page.tsx` fájlban.
- **Kiváltó ok:** a backfill candidate `labels` mezője nem minden esetben tömbként volt kezelhető; legalább egy adatútvonal stringet adott vissza.
- **Javítás:** be kell vezetni egy `normalizeLabels(...)` vagy közös backfill helper függvényt, ami kezeli a `string[] | string | undefined` alakot, és csak ezután szabad CSV-be írni.
- **Megelőzés:** importált/seedelt adatoknál soha ne feltételezd, hogy egy mező shape-je minden patch után ugyanaz maradt. CSV-export, traceability és UI lista előtt normalizáld a bemenetet.
- **Ellenőrzés:** build előtt keress rá azokra a helyekre, ahol `.join(`, `.map(` vagy `.length` fut opcionális vagy importált mezőkön, és ellenőrizd a tényleges típust.

### [018] Derived view-model referenced outside its scope (`backfill`)
- **Tünet / log:** `Cannot find name 'backfill'.` hiba az `app/projects/[projectId]/capabilities/page.tsx` fájlban.
- **Kiváltó ok:** a `sectionedCapabilities(...)` helper refaktor után a JSX továbbra is a `backfill` derived state-re hivatkozott, miközben az már nem létezett a page scope-ban.
- **Javítás:** a `const backfill = summarizeBackfill(project)` derivációt a page komponens lokális scope-jában kell létrehozni, ahol a JSX használja.
- **Megelőzés:** refaktor után mindig ellenőrizni kell, hogy a JSX-ben hivatkozott derived state változók (`summary`, `stats`, `backfill`, `grouped`, `rows`) még ugyanabban a scope-ban léteznek-e.
- **Ellenőrzés:** keresd a fájlban a JSX-ben használt azonosítókat, és győződj meg róla, hogy mindegyik vagy prop, vagy lokális const, vagy import.

### [019] Közös domain-logikát ne másolj több képernyőre eltérően
- **Tünet / log:** ugyanaz a backfill/labels logika külön workaroundokkal jelent meg több oldalon, ami ismétlődő regressziókhoz vezetett.
- **Kiváltó ok:** a normalizálás és matching szabályok nem közös helperben éltek.
- **Javítás:** a `lib/backfill.ts` legyen az egyetlen canonical hely a labels-normalizálásra, matchingre és CSV-row képzésre.
- **Megelőzés:** ha ugyanazt a domain mezőt (`labels`, `jiraKeys`, `releases`) több képernyő is használja, vigyél be közös helper modult.
- **Ellenőrzés:** patch előtt keress rá a domain mező összes használatára, és nézd meg, hogy ugyanazt a canonical helper-t használja-e minden fogyasztó.
