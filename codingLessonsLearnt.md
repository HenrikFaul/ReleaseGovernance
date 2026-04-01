# codingLessonsLearnt

Mindig ezzel kell kezdeni a fejlesztést: munka előtt olvasd végig ezt a fájlt elejétől a végéig. Olvasd végig a CHANGELOG.md-t is. Az itt felsorolt hibákat nem szabad újra elkövetni. Minden új típusú hibát ehhez a fájlhoz kell hozzáappendelni, nem új fájlba írni, és nem szabad a régi tanulságokat törölni.

## Kötelező javítási módszertan minden új hibánál vagy üzleti kérésnél
1. Azonosítsd pontosan a build/runtime/log hibát.
2. Gyűjts össze a szükséges technikai tudást megbízható dokumentációból.
3. Válassz minimális kockázatú javítási stratégiát.
4. Ellenőrizd, hogy a javítás nem rontja el a korábban működő funkciókat.
5. A javítás után appendeld a tanulságot ebbe a fájlba.
6. A CHANGELOG-ba is appendelve kerüljön be a javítás.

## Kötelező szerkezet minden új bejegyzésnél
- Tünet / log
- Kiváltó ok
- Javítás
- Megelőzés
- Ellenőrzés

### [037] AppShell prop contractot nem szabad megsérteni
- **Tünet / log:** `Property 'projectName' does not exist on type ...` build hiba az automation és releases oldalon.
- **Kiváltó ok:** az `AppShell` csak `children` és opcionális `projectId` propot fogad, mégis `projectName` prop került átadásra.
- **Javítás:** a hibás `projectName` propot el kell távolítani, és csak `projectId` maradjon átadva.
- **Megelőzés:** komponens használat előtt mindig ellenőrizni kell az aktuális prop típust, különösen hotfix közben.
- **Ellenőrzés:** keress rá a repo-ban az `AppShell projectName=` mintára, és szüntesd meg mindenhol.


### [038] AppShell prop contract maradék előfordulásait repo-szinten kell kiszedni
- **Tünet / log:** `Property 'projectName' does not exist on type ...` build hiba a `traceability/page.tsx` oldalon.
- **Kiváltó ok:** a korábbi hotfix nem futott végig a teljes repo-n, csak néhány ismert oldalt javított.
- **Javítás:** a `traceability/page.tsx` fájlban is el kell távolítani a `projectName` propot, majd teljes repo-szintű mintakeresést kell futtatni.
- **Megelőzés:** azonos komponens-szerződés hibánál mindig teljes mintakereséssel kell zárni a javítást, nem csak a logban elsőként látható fájlra.
- **Ellenőrzés:** `rg -n "AppShell .*projectName=|projectName=\{" app components` ne adjon találatot.

### [039] Ne hagyj hiányzó exportokat a használt helper API körül
- **Tünet / log:** import figyelmeztetések / build hibák `approveReleaseCandidate`, `writeProjectUploadDraft`, `createProjectFromUpload`, `readCustomProjects` hiánya miatt.
- **Kiváltó ok:** a komponensek már a runtime project upload és release candidate flow-ra hivatkoztak, de a hozzájuk tartozó helper exportok hiányoztak a `lib/project-overrides.ts` fájlból.
- **Javítás:** a hiányzó exportokat implementálni kell minimális, működő localStorage-alapú viselkedéssel.
- **Megelőzés:** új UI flow hozzáadása után mindig ellenőrizni kell, hogy a hivatkozott helper függvények tényleg exportálva vannak-e.
- **Ellenőrzés:** repo build és célzott keresés az importált, de nem exportált symbolokra.
