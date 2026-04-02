# Legacy bridge

Build a bridge from legacy mock-data structures to the new runtime aggregate.

Needed parts:
- legacy tenant to runtime workspace mapper
- legacy project to runtime project mapper
- shared selectors
- summary builder
- bridge-ready hooks

Goal:
Move the UI away from direct legacy shape usage without breaking the current working release and Jira flows.
