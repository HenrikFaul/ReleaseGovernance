# Bridge migration order

1. Do not let the UI depend directly on legacy mock-data shapes.
2. Introduce a bridge:
   - legacy tenant to runtime workspace
   - legacy project to runtime project
3. Move hooks toward runtime aggregate shape.
4. Only after that, connect persistence-backed adapters.

Reason:
This reduces regression risk while preserving current release and Jira flows.
