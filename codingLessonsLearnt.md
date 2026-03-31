# codingLessonsLearnt

## Kötelező fejlesztési rutin

Minden új fejlesztési, javítási vagy refaktorálási kör elején ezt a fájlt kell először átnézni.

Kötelező szabályok:
1. Mielőtt bármilyen kódmódosítást készítesz, olvasd végig ezt a fájlt.
2. Mielőtt új patch-et adsz át, ellenőrizd, hogy a mostani változtatás nem hozza-e vissza valamelyik korábbi hibát.
3. Új hibatípus esetén nem új fájlt kell létrehozni, hanem ezt a fájlt kell bővíteni.
4. A fájl tartalmát nem szabad felülírni vagy lenullázni; csak appendelni szabad az új tanulságokat.
5. Minden hibához hozzá kell írni: tünet, kiváltó ok, javítás, megelőzés, ellenőrzés.
6. Release / dashboard / navigation módosítás előtt a teljes működési útvonalat össze kell olvasni a changeloggal és az üzleti requirement PDF/MD párral.

## Meglévő tanulságok

### [013] Auto-detected release row must not depend on manual seed refresh
- **Tünet / log:** új commitok történtek, de a release listában nem jelent meg új sor.
- **Kiváltó ok:** a release center csak seedelt mock adatot olvasott, nem volt automatikus commit alapú detektálás.
- **Javítás:** külön GitHub release detection API route került be, és a Releases oldal betöltéskor automatikusan lekéri a legfrissebb commitból képezett candidate sort.
- **Megelőzés:** deployment registry jellegű nézetnél mindig legyen élő detektálási útvonal, ne csak statikus seed.
- **Ellenőrzés:** új commit után a Releases lista tetején candidate sor jelenjen meg.

### [014] CSV exportot mindig a tényleges sorforrásból kell generálni
- **Tünet / log:** a Download CSV 0 sort adott vissza, miközben a felületen létező jelölteknek kellett volna látszaniuk.
- **Kiváltó ok:** az export logika nem ugyanabból az adatforrásból dolgozott, mint a képernyő.
- **Javítás:** az export most ugyanabból a backfill candidate listából épít CSV-t, amit az oldal is megjelenít.
- **Megelőzés:** export funkciónál mindig a megjelenített adathalmaz legyen a forrás.
- **Ellenőrzés:** a kimeneti CSV sorszáma egyezzen a képernyőn mutatott rows számmal.

### [015] Dashboard regroupingnél a navigációs következményeket is együtt kell módosítani
- **Tünet / log:** a dashboard átrendezési igény mellett a régi külön menüpontok bent maradtak volna, ami kettős navigációs modellt eredményez.
- **Kiváltó ok:** a dashboard és a sidebar külön lett kezelve.
- **Javítás:** a dashboard csoportosítás bevezetésével párhuzamosan a sidebarból kikerültek a külön Releases / Capabilities / Integrations / Traceability elemek.
- **Megelőzés:** dashboard-struktúra változásakor mindig ellenőrizni kell a teljes navigációs modellt.
- **Ellenőrzés:** a sidebar csak a megmaradó funkciókat mutassa, a csoportosított dashboardok pedig külön gombbal nyíljanak meg.
