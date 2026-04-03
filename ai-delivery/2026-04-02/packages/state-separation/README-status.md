# State separation package status

This state separation package is staged delivery content for ReleaseGovernance Phase 1.
It exists to separate fixture data, local drafts, runtime overrides and future persistent gateway reads.

Integration rule:
- localStorage must not remain runtime truth
- preserve current UI while migrating
- move gradually toward gateway-backed reads
