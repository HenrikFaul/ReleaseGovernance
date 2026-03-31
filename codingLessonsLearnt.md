# codingLessonsLearnt

Mindig ezzel kell kezdeni a fejlesztést: munka előtt olvasd végig ezt a fájlt elejétől a végéig. Az itt felsorolt hibákat nem szabad újra elkövetni. Minden új típusú hibát ehhez a fájlhoz kell hozzáappendelni, nem új fájlba írni, és nem szabad a régi tanulságokat törölni.

Kötelező szerkezet minden új bejegyzésnél:
- Tünet / log
- Kiváltó ok
- Javítás
- Megelőzés
- Ellenőrzés

### [031] Never import Node-only modules into code that can flow into client/page bundles
- **Tünet / log:** Vercel build failed with `UnhandledSchemeError: Reading from "node:path" is not handled by plugins` and the import trace showed `./lib/runtime-control.ts -> ./components/app-shell.tsx -> ./app/projects/[projectId]/page.tsx`.
- **Kiváltó ok:** a runtime-control helper `node:fs` és `node:path` importokat használt, miközben egy olyan komponensből volt importálva, ami page bundle-be került.
- **Javítás:** a runtime-control olvasást build-safe, client-safe megoldásra kell cserélni. Ebben a fixben azonos szerkezetű embedded YAML stringből történik a parse, így nincs `node:` import a bundle útvonalon.
- **Megelőzés:** minden új util/helper esetén az első kérdés legyen: bekerülhet-e közvetlenül vagy közvetve a kliensbundle-be? Ha igen, tilos `node:*`, `fs`, `path` vagy más server-only API használata.
- **Ellenőrzés:** minden olyan fájlnál, amit komponens vagy page importál, futtasd végig fejben az import trace-t. Ha client/page útvonalra kerülhet, nem használhat Node-only modult.

### [032] Read the lessons file before each patch and classify the failure type first
- **Tünet / log:** ugyanaz a hibatípus részben visszatért, pedig a lessons file már jelezte, hogy a patch csak akkor kész, ha ténylegesen build-safe.
- **Kiváltó ok:** a javítás megtervezése megtörtént, de a `server-only vs client-safe` ellenőrzés nem volt elég szigorú a patch készítése előtt.
- **Javítás:** a patch előtt explicit módon osztályozni kell a hibát: `syntax`, `types`, `server-only import`, `runtime regression`, `data regression`, stb.
- **Megelőzés:** a lessons file-ból kötelező checklist legyen: 1) import trace ellenőrzés, 2) client/server boundary ellenőrzés, 3) minimális fix scope.
- **Ellenőrzés:** mielőtt kiadsz patch-et, nézd meg, hogy a javított fájl importlánca tartalmaz-e Node-only modult.

### [033] Avoid slash-opacity utility classes inside Tailwind `@apply` blocks for global CSS patches
- **Tünet / log:** Next/Tailwind build failed with messages like `The \`bg-white/92\` class does not exist` and `The \`lg:bg-slate-950/96\` class does not exist` while compiling `app/globals.css`.
- **Kiváltó ok:** a redesign patch `@apply` blokkokban használt tört opacitású utility osztályokat (`bg-white/92`, `bg-slate-950/96`, `border-white/70`, stb.), amelyeket a PostCSS/Tailwind feldolgozás ebben a kontextusban nem kezelt stabilan.
- **Javítás:** az ilyen stílusokat sima CSS deklarációkra kell bontani (`background-color: rgba(...)`, `border-color: rgba(...)`), és az `@apply`-ban csak biztosan támogatott utility osztályokat szabad hagyni.
- **Megelőzés:** ha globális CSS-ben vagy komponens-szintű utility aggregációban dolgozol, kerüld a slash-opacity utility-ket az `@apply`-ban; használd őket inkább közvetlen JSX className-ben vagy sima CSS tulajdonságként.
- **Ellenőrzés:** minden globális redesign patch után futtasd le a production buildet, és külön ellenőrizd az `app/globals.css`-hez kapcsolódó Tailwind/PostCSS hibákat.
