export interface RuntimeProjectOverride {
  projectId: string;
  releaseIds?: string[];
  capabilityIds?: string[];
  jiraArtifactIds?: string[];
  parityAlertIds?: string[];
}

const PREFIX = "releasegovernance.runtime-override.";

export function readRuntimeProjectOverride(projectId: string): RuntimeProjectOverride | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(`${PREFIX}${projectId}`);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function writeRuntimeProjectOverride(projectId: string, value: RuntimeProjectOverride): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(`${PREFIX}${projectId}`, JSON.stringify(value));
}

export function clearRuntimeProjectOverride(projectId: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(`${PREFIX}${projectId}`);
}
