import type { RuntimeProjectAggregate } from "./workspace-runtime";

export function getCurrentRelease(project: RuntimeProjectAggregate) {
  return project.releases.find((release) => release.releaseStatus === "current") ?? null;
}

export function getCandidateReleases(project: RuntimeProjectAggregate) {
  return project.releases.filter((release) => release.releaseStatus === "candidate");
}

export function getUnreleasedReleases(project: RuntimeProjectAggregate) {
  return project.releases.filter((release) => release.releaseStatus === "unreleased");
}

export function getOpenParityAlerts(project: RuntimeProjectAggregate) {
  return project.parityAlerts.filter((alert) => alert.state !== "resolved");
}

export function getHealthyIntegrations(project: RuntimeProjectAggregate) {
  return project.integrations.filter((integration) => integration.healthState === "healthy");
}

export function getJiraArtifactsForCapability(project: RuntimeProjectAggregate, capabilityId: string) {
  return project.jiraArtifacts.filter((artifact) => artifact.linkedCapabilityId === capabilityId);
}

export function getJiraArtifactsForRelease(project: RuntimeProjectAggregate, releaseId: string) {
  return project.jiraArtifacts.filter((artifact) => artifact.linkedReleaseId === releaseId);
}
