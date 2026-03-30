### [020] User-entered integration credentials must survive UI refreshes unless explicitly cleared
- **Tünet / log:** Jira token, email and URL eltűnt a frissítés után az Import Studio felületről.
- **Kiváltó ok:** az űrlapállapot csak React state-ben élt, nem volt per-project persistálás a böngészőben.
- **Javítás:** explicit Save Jira settings gomb + localStorage alapú per-project mentés (`releasegovernance.jiraSettings.<projectId>`), és mountkor visszatöltés.
- **Megelőzés:** külső integrációs beállításoknál külön dönteni kell: ephemeral state vagy persisted state. Ha a felhasználó kézzel tokent/emailt ad meg, ne veszítsd el navigáció vagy refresh hatására.
- **Ellenőrzés:** kézzel teszteld: beállítás megadása → Save → refresh → mezők újratöltődnek-e.

### [021] Jira lekérdezéseket mindig projektkulcshoz kell kötni a governed project szerint
- **Tünet / log:** ugyanaz az Import Studio több projekten használható, ezért rossz Jira projektből is be lehetne húzni issue-kat.
- **Kiváltó ok:** a Jira import URL-t elfogadta explicit governed-project enforcement nélkül.
- **Javítás:** a selected project `jiraProjectKey` kötelező input lett az API-nak; issue/project/JQL import mind project-locked szűrőt kap.
- **Megelőzés:** multi-project governance appban minden külső lekérdezést tenant/project contexthez kell kötni, nem elég a felhasználó által megadott URL-ben bízni.
- **Ellenőrzés:** HOB projekt oldalon csak HOB issue-k jöhetnek vissza; SYN oldalon csak SYN; RLG oldalon csak RLG.

### [022] Shared domain interface regresszió: UI már használ mezőt, de a közös típusból kikerül
- **Tünet / log:** `Property 'backfillCandidates' does not exist on type 'ProjectRecord'.` build hiba az `app/projects/[projectId]/page.tsx` fájlban.
- **Kiváltó ok:** a backfill feature több oldalon már a `project.backfillCandidates` mezőre épült, de a `lib/types.ts` aktuális `ProjectRecord` interfészéből ez a mező hiányzott.
- **Javítás:** a `BackfillCandidate` interfészt és a `backfillCandidates?: BackfillCandidate[]` mezőt vissza kell vezetni a közös típusrétegbe.
- **Megelőzés:** ha egy shared domain mezőt több képernyő is használ, minden type-only patch után ellenőrizni kell, hogy a `lib/types.ts` továbbra is tartalmazza-e a mezőt.
- **Ellenőrzés:** keress rá a repo-ban a `backfillCandidates` használataira, és ellenőrizd, hogy a shared interface deklarálja-e a mezőt, mielőtt új buildet indítasz.
