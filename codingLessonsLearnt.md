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

### [015] Funkcióvesztés layout javítás közben
- **Tünet / log:** mobil layout javítás után eltűnt vagy nem volt elérhető a release auto-detection, a Jira backfill CSV letöltés és a Push to Jira.
- **Kiváltó ok:** a fókusz túl szűken a vizuális layoutra került, és a release oldal interaktív governance funkciói nem maradtak benne az új komponensverzióban.
- **Javítás:** a release oldal layoutját úgy kell javítani, hogy közben a release auto-generation, Jira CSV export és Push to Jira preview/apply flow is megmaradjon vagy visszakerüljön.
- **Megelőzés:** minden layout patch előtt explicit funkció-megőrzési checklist kell a release oldalhoz: auto release, csv export, push to jira, list/detailed view, release detail link.
- **Ellenőrzés:** mobilon és desktopon is ellenőrizni kell, hogy a gombok látszanak és a műveletek tényleg futnak.

### [016] Mobilon túl széles stat kártyák és redundáns header
- **Tünet / log:** mobil nézetben a dashboard kártyák egyesével, túl nagy függőleges helyet foglaltak, és a headerben duplikált információ jelent meg.
- **Kiváltó ok:** a grid mobil breakpointon 1 oszlopos maradt, és a workspace/header blokk duplikálta a projektinformációt.
- **Javítás:** mobilon 2 oszlopos stat-card grid kell, a fölösleges header blokkot pedig el kell távolítani.
- **Megelőzés:** minden dashboard blokkot mobilon is külön screenshot-alapú QA-val kell ellenőrizni.
- **Ellenőrzés:** legalább két statcard férjen el egymás mellett mobilon, és ne legyen fölösleges extra header panel.

### [017] Mobil quick-navból nem tűnhet el a Project visszalépés
- **Tünet / log:** mobil nézetben hiányzott a Project gomb, így nehézkes lett a visszalépés a projekt főoldalára.
- **Kiváltó ok:** a bottom navigation túl agresszíven leegyszerűsödött.
- **Javítás:** project-specifikus oldalon legyen külön Project gyorsgomb mobilon.
- **Megelőzés:** a bottom navnál külön ellenőrizni kell a legfontosabb visszalépési útvonalakat.
- **Ellenőrzés:** projekt alatt mobilon látszódjon a Projects és a Project gomb is.
