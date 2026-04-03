# Shared Dev Governance Controller

This repository is governed by the central pack from `HenrikFaul/governance`.

## Non-negotiable rules
1. Never break already working functionality.
2. Read `.governance/agent_execution_rules.md`, `.governance/codingLessonsLearnt.md`, and the local `CHANGELOG.md` before implementation.
3. Prefer the smallest regression-risk solution.
4. Validate with build, lint, typecheck, tests, and route-specific smoke checks where available.
5. Append new repo-specific lessons to `codingLessonsLearnt.local.md` only; the collector will merge them back to the shared repo.
6. When required by the repo, update `CHANGELOG.md` and the `versioning/` documentation pair.
7. Keep AI instruction files generated from this controller and do not hand-edit them.
8. Treat clear user requests as execution instructions for related non-destructive Jira, GitHub, changelog, governance, and documentation steps.

## Required delivery checklist
- Read execution rules + lessons + changelog
- Identify root cause
- Compare at least 2 solution options when risk is non-trivial
- Implement with checklist discipline
- Re-check that previously working features still work
- Update changelog and versioning artifacts when applicable

## Files
- Shared execution rules: `.governance/agent_execution_rules.md`
- Shared lessons: `.governance/codingLessonsLearnt.md`
- Shared versioning rules: `.governance/versioning-guidelines.md`
- Shared prompt wording: `.governance/business_process_automation_prompts.md`
- Local lessons append target: `codingLessonsLearnt.local.md`


## Additional local enforcement
- Local `CHANGELOG.md` files must remain append-only.
- Common admin capability changes must be sourced from the canonical `HenrikFaul/governance/common_admin/` model before local rollout.
