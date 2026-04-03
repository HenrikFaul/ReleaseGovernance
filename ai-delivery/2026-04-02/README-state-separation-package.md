# ReleaseGovernance Phase 1 State Separation Package

This package separates the currently mixed concerns of fixture data, local drafts, temporary runtime overrides and future persistent gateway-backed reads.

## Goal
- fixture and seed data should live separately
- local draft storage should live separately
- runtime access should go through aggregate and gateway shapes
- future persistence integration should be introduced with lower regression risk
