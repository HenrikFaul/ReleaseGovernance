# codingLessonsLearnt

Mindig ezzel kell kezdeni a fejlesztést: munka előtt olvasd végig ezt a fájlt elejétől a végéig. Az itt felsorolt hibákat nem szabad újra elkövetni. Minden új típusú hibát ehhez a fájlhoz kell hozzáappendelni, nem új fájlba írni, és nem szabad a régi tanulságokat törölni.

Kötelező szerkezet minden új bejegyzésnél:
- Tünet / log
- Kiváltó ok
- Javítás
- Megelőzés
- Ellenőrzés

### [028] Planned patch is not the same as downloadable patch
- **Tünet / log:** a felhasználó jogosan jelezte, hogy csak egy felsorolást lát a módosítandó fájlokról, de nincs ténylegesen letölthető zip.
- **Kiváltó ok:** a javítás meg volt tervezve, de a fájlok nem lettek ténylegesen legenerálva és átadva.
- **Javítás:** a következő körben mindig ténylegesen generálni kell a módosított fájlokat és zipet.
- **Megelőzés:** soha ne mondd, hogy kész a patch, ha a letölthető artifact még nem létezik.
- **Ellenőrzés:** a válasz előtt mindig legyen konkrét sandbox link a zipre.

### [029] Jira import must support base URL + project key
- **Tünet / log:** az import funkció minden projektben 0 issue-t adott vissza.
- **Kiváltó ok:** a route túl sokat feltételezett a bemeneti Jira URL formátumáról, és nem kezelte stabilan a base URL + explicit project key használatot.
- **Javítás:** a Jira import kapott erősített URL-parse + projectKey fallback logikát és többféle Jira keresési stratégiát.
- **Megelőzés:** minden külső URL-alapú importnál biztosítani kell explicit, formátumtól független fallback paramétereket.
- **Ellenőrzés:** teszteld külön issue URL-lel, project URL-lel, JQL URL-lel és sima base URL + project key kombinációval.

### [030] Runtime-control documentation must be wired to runtime behavior
- **Tünet / log:** a vezérlő YAML és a leírás elkészült, de a live oldalon nem látszott az új projekt-upload funkcionalitás.
- **Kiváltó ok:** a dokumentációs/config réteg nem volt ténylegesen bekötve az UI-ba.
- **Javítás:** a sidebar és az import wizard opciói most runtime-control olvasáson keresztül működnek.
- **Megelőzés:** ha egy fájlról azt állítjuk, hogy vezérli a működést, azt legalább egy route vagy komponens ténylegesen olvassa is.
- **Ellenőrzés:** módosítsd a runtime-control YAML egy látható elemét, majd ellenőrizd, hogy az UI reagál rá.
