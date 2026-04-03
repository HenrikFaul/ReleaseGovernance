# State separation notes

Problem addressed:
- fixture seed data
- local draft state
- runtime override state
- business truth

These were too close together.

This package prepares a cleaner split so the UI can gradually move toward a gateway-backed aggregate model without breaking the currently working routes.
