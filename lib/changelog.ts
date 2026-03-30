import { ReleaseChangelogExcerpt } from "@/lib/types";

export function parseLatestProjectChangelog(markdown: string, projectSlug: string): ReleaseChangelogExcerpt | undefined {
  if (!markdown.trim()) return undefined;
  const lines = markdown.split(/\r?\n/);
  const entries: Array<{ projectSlug: string; title: string; date?: string; sections: ReleaseChangelogExcerpt["sections"] }> = [];
  let current: any = null;
  let currentSection: any = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const entryMatch = line.match(/^##\s+\[(.+?)\](?:\s*-\s*(.+))?$/);
    if (entryMatch) {
      if (current) entries.push(current);
      const rawTitle = entryMatch[1].trim();
      const split = rawTitle.includes(":") ? rawTitle.split(/:(.+)/) : [projectSlug, rawTitle];
      current = { projectSlug: split[0].trim().toLowerCase(), title: split[1] ? split[1].trim() : rawTitle, date: entryMatch[2]?.trim(), sections: [] };
      currentSection = null;
      continue;
    }
    if (!current) continue;
    const sectionMatch = line.match(/^###\s+(.+)$/);
    if (sectionMatch) {
      currentSection = { heading: sectionMatch[1].trim(), bullets: [], prose: [] };
      current.sections.push(currentSection);
      continue;
    }
    if (!currentSection) continue;
    const bulletMatch = line.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      currentSection.bullets.push(bulletMatch[1].trim());
      continue;
    }
    if (line.trim()) currentSection.prose.push(line.trim());
  }

  if (current) entries.push(current);
  const match = entries.find((entry) => entry.projectSlug === projectSlug.toLowerCase()) ?? entries[0];
  if (!match) return undefined;
  return { title: match.title, date: match.date, sections: match.sections };
}
