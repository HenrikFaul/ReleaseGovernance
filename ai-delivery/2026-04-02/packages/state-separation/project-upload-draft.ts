export interface ProjectUploadDraft {
  projectName?: string;
  projectDescription?: string;
  jiraUrl?: string;
  jiraProjectKey?: string;
  jiraEmail?: string;
  jiraPreviewLimit?: number;
  jiraQueryAll?: boolean;
  repoUrl?: string;
  hostingProvider?: "vercel" | "supabase" | "custom";
  hostingUrl?: string;
  selectedSources?: string[];
}

const KEY = "releasegovernance.draft.project-upload";

export function readProjectUploadDraft(): ProjectUploadDraft {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function writeProjectUploadDraft(draft: ProjectUploadDraft): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(draft));
}

export function clearProjectUploadDraft(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
