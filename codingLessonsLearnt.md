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
