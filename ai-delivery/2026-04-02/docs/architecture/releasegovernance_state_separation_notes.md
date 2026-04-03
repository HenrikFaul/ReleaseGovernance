# ReleaseGovernance state separation notes

## Problem
Several different data roles were too close together in the current app:
- seed and fixture data
- local draft state
- temporary runtime override state
- actual business truth

## What this package does
1. separates fixture thinking
2. separates draft storage
3. separates temporary runtime overrides
4. introduces a runtime aggregate shape
5. introduces a runtime gateway interface

## Why that matters
The UI can later depend on the same aggregate shape whether the source is fixture-backed or persistence-backed.
