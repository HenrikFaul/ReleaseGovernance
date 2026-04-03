import type { RuntimeProjectAggregate } from "./workspace-runtime";
import {
  getCandidateReleases,
  getCurrentRelease,
  getOpenParityAlerts,
  getUnreleasedReleases,
} from "./runtime-selectors";

export interface ProjectRuntimeSummary {
  trackedReleaseCount: number;
  candidateReleaseCount: number;
  unreleasedReleaseCount: number;
  capabilityCount: number;
  openParityAlertCount: number;
  integrationCount: number;
  currentReleaseVersion: string | null;
}

export function buildProjectRuntimeSummary(project: RuntimeProjectAggregate): ProjectRuntimeSummary {
  return {
    trackedReleaseCount: project.releases.filter((release) => release.releaseStatus !== "unreleased").length,
    candidateReleaseCount: getCandidateReleases(project).length,
    unreleasedReleaseCount: getUnreleasedReleases(project).length,
    capabilityCount: project.capabilities.length,
    openParityAlertCount: getOpenParityAlerts(project).length,
    integrationCount: project.integrations.length,
    currentReleaseVersion: getCurrentRelease(project)?.version ?? null,
  };
}
