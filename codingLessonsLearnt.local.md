# codingLessonsLearnt.local

# Ide appendelődnek az adott repo saját új tanulságai.

## 2026-04-07 — Integrations canonicalization and explicit test-state lesson
- Integration deduplication should not rely on `id` alone in multi-source imports; always prefer a canonical provider identity key (`canonicalKey`) plus optional `instanceKey` when distinct configured instances are genuinely required.
- Test actions in governance UIs must always expose explicit loading/success/failure states at both item and bulk levels; silent failures hide operational risk.
- Grouping should be data-driven from a machine-readable category field and rendered via shared module utilities to prevent cross-project drift.
