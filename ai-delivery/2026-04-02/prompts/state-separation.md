# State separation

Separate these concerns in ReleaseGovernance:
- fixture seed data
- local draft state
- temporary runtime override
- persistent runtime gateway

Rules:
- localStorage must not be runtime truth
- existing working UI must not break
- legacy mock-data usage should be replaced gradually through a bridge layer

Expected output:
- fixtures layer
- drafts layer
- runtime aggregate shape
- runtime gateway interface
