# Foundation notes

Why this package exists:
- the current app already has domain hints, but runtime truth is not stable
- seed/mock data is still dominant
- local overrides carry too much responsibility
- workflow logic is only partially backed by server routes

This package separates:
1. domain truth
2. persistent truth
3. local draft state

It is intended as staged integration material, not as proof that runtime integration is already complete.
