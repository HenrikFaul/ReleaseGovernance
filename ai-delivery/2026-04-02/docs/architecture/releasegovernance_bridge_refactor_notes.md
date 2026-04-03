# ReleaseGovernance bridge refactor notes

## What this is
This is a transitional bridge between the new Phase 1 foundation domain and the current legacy and mock runtime shapes.

## Why it is needed
Several UI areas currently depend directly on legacy structures.
Switching those directly to persistence-backed sources would create too much regression risk.

## Bridge strategy
- legacy shape to runtime aggregate
- runtime aggregate to selectors and summaries
- UI migration toward selectors
- later replace gateway implementation with persistence-backed adapters
