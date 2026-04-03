# Suggested bridge migration order

1. The current mock-data shape should not feed the UI directly.
2. First introduce a bridge:
   - legacy project -> runtime aggregate
   - legacy tenant -> runtime aggregate
3. Then move hooks toward gateway and aggregate-based reads.
4. Only after that, shift route by route toward persistence-backed adapters.

## Why
This reduces regression risk while preserving the currently working release and Jira flows.
