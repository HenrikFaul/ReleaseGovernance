### [015] Non-exported local seed symbol used as API/page dependency
- **Tünet / log:** `Module '"@/lib/mock-data"' declares 'tenants' locally, but it is not exported.` build hiba az `app/api/projects/route.ts` és `app/projects/page.tsx` fájlokban.
- **Kiváltó ok:** a fogyasztó oldalak közvetlenül a `tenants` lokális seedváltozót importálták, miközben a seed refaktor után az már nem volt megbízható publikus felületként használható.
- **Javítás:** a közvetlen `tenants` import helyett stabil gettert kell használni (`getTenant("tenant_releasegovernance")`), és az API shape-et ott kell visszaépíteni.
- **Megelőzés:** seed/mock-data fájlban ne importálj közvetlenül lokális tömböket több helyről, ha már létezik getter/helper. A publikus adat-hozzáféréshez csak explicit exportált függvényt vagy konstans API-t használj.
- **Ellenőrzés:** keresd a repo-ban a `import { tenants } from "@/lib/mock-data"` mintát; build előtt minden ilyen hivatkozást ki kell váltani stabil publikus getterrel.

### [016] Build fix és capability/data cleanup keverése regresszióveszéllyel
- **Tünet / log:** egy buildhibás körben könnyű lenne a `mock-data.ts` nagy adatrétegéhez is hozzányúlni, ami újabb seed-, Jira- vagy capability-regressziót okozhat.
- **Kiváltó ok:** nincs elválasztva a tisztán technikai build blocker javítás a domain-adattisztítási változtatástól.
- **Javítás:** buildfix körben csak a buildblokkoló import/typing/runtime törést javítsd; capability/Jira seed tisztítást külön patchben kezeld.
- **Megelőzés:** minden patch elején döntsd el: `build fix`, `data cleanup`, `UI fix`, `feature work`. Ne keverd őket ugyanabba a minimális javítócsomagba, ha nem muszáj.
- **Ellenőrzés:** a patch scope-ja legyen egy mondatban megfogalmazható; ha több független probléma keveredik, bontsd külön patch-ekre.
