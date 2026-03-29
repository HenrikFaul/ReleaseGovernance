import fs from "node:fs";
import path from "node:path";

export interface ChangelogEntry {
  projectSlug: string;
  releaseVersion: string;
  date?: string;
  title: string;
  sections: { heading: string; bullets: string[]; prose: string[] }[];
}

function readChangelogFile(): string {
  const candidates = [
    path.join(process.cwd(), "CHANGELOG.md"),
    path.join(process.cwd(), "..", "CHANGELOG.md")
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return fs.readFileSync(candidate, "utf8");
    }
  }

  return "";
}

function normalizeVersion(value: string): string {
  const trimmed = value.trim();
  const projectPrefixed = trimmed.includes(":") ? trimmed.split(":").slice(-1)[0] : trimmed;
  const withoutBrackets = projectPrefixed.replace(/^\[|\]$/g, "");
  if (/^\d+\.\d+\.\d+/.test(withoutBrackets)) return `web-v${withoutBrackets}`;
  return withoutBrackets;
}

export function getChangelogEntries(): ChangelogEntry[] {
  const markdown = readChangelogFile();
  if (!markdown) return [];

  const lines = markdown.split(/\r?\n/);
  const entries: ChangelogEntry[] = [];
  let current: ChangelogEntry | null = null;
  let currentSection: ChangelogEntry["sections"][number] | null = null;

  for (const line of lines) {
    const entryMatch = line.match(/^## \[(.+?)\](?:\s*-\s*(.+))?$/);
    if (entryMatch) {
      if (current) entries.push(current);
      const rawTitle = entryMatch[1].trim();
      const split = rawTitle.includes(":") ? rawTitle.split(/:(.+)/) : ["releasegovernance", rawTitle];

      current = {
        projectSlug: split[0].trim().toLowerCase(),
        releaseVersion: normalizeVersion((split[1] ?? rawTitle).trim()),
        date: entryMatch[2]?.trim(),
        title: rawTitle,
        sections: []
      };
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

    const prose = line.trim();
    if (prose) currentSection.prose.push(prose);
  }

  if (current) entries.push(current);
  return entries;
}

export function getChangelogEntry(projectSlug: string, releaseVersion: string): ChangelogEntry | undefined {
  const normalizedProject = projectSlug.toLowerCase();
  const normalizedVersion = normalizeVersion(releaseVersion);

  return getChangelogEntries().find((entry) => {
    if (entry.projectSlug !== normalizedProject) return false;
    if (entry.releaseVersion === normalizedVersion) return true;
    return normalizeVersion(entry.title) === normalizedVersion;
  });
}
