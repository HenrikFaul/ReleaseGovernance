# ReleaseGovernance development prompt - 01000003

## Kötelező előfeltétel
1. Olvasd végig a codingLessonsLearnt.md-t.
2. Olvasd végig a CHANGELOG.md-t.
3. Ellenőrizd, hogy a korábbi működő release-funkciók megmaradnak.

## E kör fókusza
- auto release candidate sor új deploy / commit után
- Vercel-szerű release lista megőrzése
- Jira backfill CSV export visszaállítása
- Push to Jira preview + apply visszaállítása
- mobil dashboard sűrítése
- redundáns header eltávolítása
- mobil Project gyorsgomb visszaállítása

## QA checklist
- [ ] Auto release detection működik
- [ ] CSV export nem 0 soros és Jira-kompatibilis
- [ ] Push to Jira preview működik
- [ ] Push to Jira apply működik
- [ ] Mobil dashboard 2 oszlopos
- [ ] Nincs fölösleges header panel
- [ ] Mobilon elérhető a Project gomb
- [ ] A release lista továbbra is Vercel-szerű
