import { ReleaseItem, Surface } from "@/lib/types";

export interface ImpactEvaluation {
  releaseId: string;
  parityNeeded: boolean;
  affectedSurfaces: Surface[];
  reasons: string[];
  complianceStatus: "ready" | "needs-follow-up" | "blocked";
}

export function evaluateReleaseImpact(release: ReleaseItem): ImpactEvaluation {
  const affectedSurfaces = new Set<Surface>(release.surfaces);
  const reasons: string[] = [];

  if (release.backendChanged || release.sharedContractChanged || release.schemaChanged) {
    ["web", "mobile-android", "mobile-ios"].forEach((surface) => affectedSurfaces.add(surface as Surface));
    reasons.push("Backend or shared contract changed, so all client surfaces should be reviewed for compatibility.");
  }

  if (release.integrationsChanged.length > 0) {
    reasons.push(`Integration scope changed: ${release.integrationsChanged.join(", ")}.`);
    if (!release.surfaces.includes("backend")) {
      affectedSurfaces.add("backend");
    }
  }

  const parityNeeded = affectedSurfaces.size > release.surfaces.length;
  const complianceStatus = release.jiraBackfillRequired ? "blocked" : parityNeeded ? "needs-follow-up" : "ready";

  return {
    releaseId: release.id,
    parityNeeded,
    affectedSurfaces: Array.from(affectedSurfaces),
    reasons,
    complianceStatus,
  };
}
