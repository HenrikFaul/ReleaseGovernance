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

## Meglévő tanulságok

### [001] Release state és status keveredése
- **Tünet / log:** a release listák vagy dashboardok rosszul számolták a released / unreleased elemeket.
- **Kiváltó ok:** egyes helyeken a `status`, más helyeken a `releaseState` lett használva ugyanarra a célra.
- **Javítás:** a released / unreleased bontást mindenhol a `releaseState` alapján kell számolni, a `status` pedig csak UI-jellegű címke maradjon (`current`, `old`, `unreleased`).
- **Megelőzés:** új release logika bevezetésekor explicit el kell dönteni, melyik mező üzleti státusz és melyik megjelenítési státusz.
- **Ellenőrzés:** a dashboard, releases oldal és capability grouping ugyanazt az osztályozást adja ugyanarra az adathalmazra.

### [002] Changelog parser fallback nélkül könnyen néma hibát okoz
- **Tünet / log:** release detail oldalon eltűnnek a changelog információk, ha a verzió formátuma nem pontosan egyezik.
- **Kiváltó ok:** a changelog entry és a release version eltérő formátumban szerepelhet.
- **Javítás:** normalizálni kell a verzióformátumot és fallbacket kell hagyni a seeded `releaseNotes` számára.
- **Megelőzés:** a changelog parser mindig normalizáljon és ne csak exact string matchre támaszkodjon.
- **Ellenőrzés:** Hobbeast, Syncfolk és ReleaseGovernance release detail oldalon is jelenjen meg a megfelelő bejegyzés vagy a seed fallback.

### [003] Backfill exportnál kötelező Jira-import mezők hiánya
- **Tünet / log:** a generált CSV nem vagy nehezen importálható Jira-ba.
- **Kiváltó ok:** a deployed-without-Jira lista csak megjelenítési adatot tartalmazott, de nem volt benne import-kompatibilis `summary`, `description`, `parent` és azonosító label.
- **Javítás:** külön `backfillCandidates` struktúrát kell fenntartani, és abból exportálni a CSV-t.
- **Megelőzés:** minden backfill-lista eleve importcélú adatmodellel készüljön.
- **Ellenőrzés:** a CSV oszlopai legalább `Issue Type`, `Summary`, `Description`, `Parent`, `Labels` legyenek.

### [004] Összes Jira ticket és összes shipped feature külön kezelése
- **Tünet / log:** vagy a Jira exportból hiányzott néhány ticket a felületről, vagy a kódból detektált feature-ek maradtak ki a governance nézetből.
- **Kiváltó ok:** a release mapping és az imported Jira catalog külön életet élt.
- **Javítás:** a traceability oldalon külön kell mutatni a released Jira-linked worköt, az unreleased Jira worköt és a Jira nélküli backfill-jelölteket.
- **Megelőzés:** traceability nézet tervezésekor három külön halmazzal kell számolni.
- **Ellenőrzés:** az összes importált Jira elem és az összes backfill candidate látszódjon valamilyen szekcióban.

### [017] Hidden governance functionality is effectively missing functionality
- **Tünet / visszajelzés:** a backfill logika részben megvolt az adatokban, de a felhasználó nem látta a gombot, az export utat és a resolved/unresolved állapotot a felületen.
- **Kiváltó ok:** túl sok governance viselkedés maradt implicit a mock-data vagy CSV export szintjén, és nem lett elég egyértelmű UI-belépési pont hozzá.
- **Javítás:** a backfill életciklust külön, láthatóan kell megjeleníteni a dashboardon, a capabilities oldalon, a traceability oldalon és az automation oldalon is.
- **Megelőzés:** ha egy funkcióhoz több lépéses operatív folyamat tartozik (pl. export -> Jira import -> visszaimport -> státuszváltás), annak legyen UI-szintű belépési pontja és státuszkijelzése, ne csak adatmodellje.
- **Ellenőrzés:** release előtt végig kell kattintani, hogy a felhasználó a képernyőről el tudja-e indítani a folyamatot, és látja-e a "mi történt már / mi hiányzik még" állapotot.
