# ReleaseGovernance Phase 1 foundation notes

## Why this package comes first
In the current system the domain is visible, but runtime truth is not stable yet:
- seeded mock-data is still dominant
- localStorage override carries too much responsibility
- workflows are only partially backed by real backend logic

Therefore the first step is not just UI repaint, but stable domain and persistence foundation.

## What this package separates
1. Domain truth
2. Persistent truth
3. Draft and local temporary state

## Conscious decisions
- local draft store may remain, but only as draft state
- new repository interfaces are persistence-ready
- release approval gets explicit rule logic
- release, source, surface, capability, integration, Jira, parity and audit are treated as first-class entities
