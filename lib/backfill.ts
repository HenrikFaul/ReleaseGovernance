import { BackfillCandidate, ImportedJiraIssue, ProjectRecord } from "@/lib/types";

export interface ResolvedBackfillCandidate {
  candidate: BackfillCandidate;
  matchingIssues: ImportedJiraIssue[];
}

export function normalizeBackfillLabels(values: string[] | string | undefined) {
  if (Array.isArray(values)) return values.filter(Boolean);
  if (typeof values === "string" && values.trim()) return values.split(/\s+/).filter(Boolean);
  return [];
}

function normalize(values: string[] | string | undefined) {
  return new Set(normalizeBackfillLabels(values).map((value) => value.trim().toLowerCase()).filter(Boolean));
}

export function findMatchingJiraIssues(candidate: BackfillCandidate, issues: ImportedJiraIssue[]) {
  const candidateLabels = normalize(candidate.labels);
  if (!candidateLabels.size) return [];
  return issues.filter((issue) => {
    const issueLabels = normalize(issue.labels);
    for (const label of candidateLabels) {
      if (issueLabels.has(label)) return true;
    }
    return false;
  });
}

export function summarizeBackfill(project: ProjectRecord) {
  const issues = project.importedJiraIssues ?? [];
  const candidates = project.backfillCandidates ?? [];
  const resolved: ResolvedBackfillCandidate[] = [];
  const unresolved: BackfillCandidate[] = [];

  for (const candidate of candidates) {
    const matchingIssues = findMatchingJiraIssues(candidate, issues);
    if (matchingIssues.length) resolved.push({ candidate, matchingIssues });
    else unresolved.push(candidate);
  }

  return {
    unresolved,
    resolved,
    csvRows: unresolved.map((candidate) => ({
      issueType: candidate.issueType,
      summary: candidate.summary,
      description: candidate.description,
      parent: candidate.parent,
      labels: normalizeBackfillLabels(candidate.labels).join(" "),
    })),
  };
}
