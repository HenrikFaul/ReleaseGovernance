# Phase 1 foundation prompt

A feladat a ReleaseGovernance alkalmazás Phase 1 foundation újraalapozása.

## Kötelező szabályok
- előbb olvasd végig a `codingLessonsLearnt.md`-t és a `CHANGELOG.md`-t
- a meglévő működő route-ok és governance funkciók nem sérülhetnek
- csak minimális regressziós kockázatú megoldás választható
- a módosítások append-only szemlélettel dokumentálandók

## Implementálandó elemek
1. új domain enumok
2. új domain entitások
3. repository interface-ek
4. draft vs persistent state alapszabály
5. release approval evaluation logika
6. Supabase foundation schema

## Elvárt output
- tiszta `lib/domain` alap
- tiszta `lib/persistence` alap
- első migrációs fájl
- külön architektúra jegyzet

## Nem cél ebben a körben
- a teljes UI átvezetése
- azonnali mock-data leváltás minden route-on
- végleges auth/RLS policy kiépítés
