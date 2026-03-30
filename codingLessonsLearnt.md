# codingLessonsLearnt

Mindig ezzel kell kezdeni a fejlesztést: munka előtt olvasd végig ezt a fájlt elejétől a végéig. Az itt felsorolt hibákat nem szabad újra elkövetni. Minden új típusú hibát ehhez a fájlhoz kell hozzáappendelni, nem új fájlba írni, és nem szabad a régi tanulságokat törölni.

Kötelező szerkezet minden új bejegyzésnél:
- Tünet / log
- Kiváltó ok
- Javítás
- Megelőzés
- Ellenőrzés

### [023] UI preview mezők és a shared import típus szétcsúszása
- **Tünet / log:** `Property 'status' does not exist on type 'ImportedJiraIssue'.` hiba az `components/import-studio.tsx` fájlban, ugyanígy érintheti az `issueType`, `created`, `parentKey` mezőket is.
- **Kiváltó ok:** a Jira test/import preview táblához új mezők kerültek be a UI-ba és/vagy API válaszba, de a közös `ImportedJiraIssue` interfész nem lett velük együtt bővítve.
- **Javítás:** a shared típusrétegben (`lib/types.ts`) az `ImportedJiraIssue`-hoz hozzá kell adni az opcionális preview mezőket: `status`, `issueType`, `created`, `parentKey`.
- **Megelőzés:** minden import-/preview-feature patchnél együtt kell kezelni a hármast: API route -> shared type -> UI consumer. Egyik sem változhat külön a másik kettő nélkül.
- **Ellenőrzés:** keresd végig a repo-t `ImportedJiraIssue` használatokra és nézd meg, hogy a renderelt mezők mind szerepelnek-e az interfészben, mielőtt buildet indítasz.

### [024] Ismétlődő shared-type regressziók
- **Tünet / log:** sorozatban jelentkeztek hibák, ahol a UI már használt közös domain mezőket, de a shared type layer nem tartotta velük a lépést (`ProjectImportBundle`, `backfillCandidates`, `ImportedJiraIssue.status`).
- **Kiváltó ok:** feature javítások során a shared contract ellenőrzés kimaradt.
- **Javítás:** minden patch végén legyen kötelező shared-contract audit a módosított domain objektumokra.
- **Megelőzés:** patch checklistbe vedd fel: "módosult-e shared interface?" és "minden consumer ugyanazt a canonical típust használja-e?".
- **Ellenőrzés:** build előtt külön nézd át a `lib/types.ts`-t azokhoz az objektumokhoz, amelyek körül az adott hibajegy/patch mozgott.
