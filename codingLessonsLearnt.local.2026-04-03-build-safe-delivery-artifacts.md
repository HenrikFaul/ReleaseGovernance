# 2026-04-03 — Build-safe delivery artifacts under repository-visible paths

Lesson:
- If AI delivery or governance artifacts are committed as `.ts` or `.tsx` files inside repository-visible paths, they can be picked up by TypeScript validation even when they are not part of the runtime app.
- Mirrored or illustrative app routes under `ai-delivery/.../app/...` must not reference non-existent relative imports.
- If delivery code is intentionally non-runtime scaffolding, it must either be build-safe, have valid import resolution, or be placed where the main app build and typecheck do not interpret it as source.
- Repeated single-file commits do not create the root cause by themselves; they only multiply failing preview deployments when the branch state is already build-broken.

Required practice:
1. Before pushing build-visible delivery `.ts/.tsx` artifacts, verify relative imports.
2. If delivery artifact imports point outside their actual folder structure, add build-safe alias modules or keep the artifacts out of typechecked source scope.
3. Treat `ai-delivery` code artifacts as potentially typechecked unless proven otherwise.
4. When a preview branch starts failing repeatedly, diagnose the first real module-resolution or typecheck error instead of assuming the number of commits is the root cause.
