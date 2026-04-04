# 2026-04-03 — ai-delivery preview build fix

## Problem
Preview deployments on the `phase1-foundation-packages-20260402` branch repeatedly failed on Vercel.
The real root cause was not the number of commits, but build-visible delivery artifact files under `ai-delivery/.../app/...` that imported non-existent relative module paths.

## Root cause
- delivery `.tsx` files were included in repository-wide TypeScript checking
- mirrored app-route artifacts referenced `../../../../packages/...` and `../../../../../../packages/...` targets that did not exist at those resolved locations
- each additional commit retriggered a preview deployment on the same still-broken branch, multiplying failures

## Fix
- build-safe alias resolution support was added for the missing delivery module paths
- the preview branch recovered and later Vercel preview deployments reached READY state

## Governance impact
This incident establishes a new delivery rule:
AI delivery code artifacts committed inside build-visible repository paths must either be build-safe, have valid import resolution, or stay outside the main build/typecheck scope.
