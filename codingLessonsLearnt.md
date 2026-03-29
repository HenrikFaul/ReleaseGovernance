### [017] Heterogeneous `labels` shape in backfill candidates
- **Tünet / log:** `Property 'join' does not exist on type 'string'.` hiba az `app/projects/[projectId]/automation/page.tsx` fájlban.
- **Kiváltó ok:** a backfill candidate `labels` mezője nem minden esetben tömbként volt kezelhető; legalább egy adatútvonal stringet adott vissza.
- **Javítás:** be kell vezetni egy `normalizeLabels(...)` segédfüggvényt, ami kezeli a `string[] | string | undefined` alakot, és csak ezután szabad CSV-be írni.
- **Megelőzés:** importált/seedelt adatoknál soha ne feltételezd, hogy egy mező shape-je minden patch után ugyanaz maradt. CSV-export, traceability és UI lista előtt normalizáld a bemenetet.
- **Ellenőrzés:** build előtt keress rá azokra a helyekre, ahol `.join(`, `.map(` vagy `.length` fut opcionális vagy importált mezőkön, és ellenőrizd a tényleges típust.
