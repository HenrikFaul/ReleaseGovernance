export interface DraftProjectUploadState {
  projectName?: string;
  projectDescription?: string;
  jiraUrl?: string;
  jiraProjectKey?: string;
  repoUrl?: string;
  hostingProvider?: "vercel" | "supabase" | "custom";
  hostingUrl?: string;
  selectedSources?: string[];
}

const KEY = "releasegovernance.draft.project-upload";

export function readDraftProjectUploadState(): DraftProjectUploadState {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function writeDraftProjectUploadState(value: DraftProjectUploadState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(value));
}

export function clearDraftProjectUploadState(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
