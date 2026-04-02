import type { Release, ReleaseSurface } from "./entities";

export interface ReleaseApprovalCheck {
  key: string;
  label: string;
  passed: boolean;
  detail?: string;
}

export interface ReleaseApprovalEvaluation {
  canApprove: boolean;
  checks: ReleaseApprovalCheck[];
}

function atLeastOneSurface(surfaces: ReleaseSurface[]): ReleaseApprovalCheck {
  return {
    key: "surface_presence",
    label: "At least one impacted surface exists",
    passed: surfaces.length > 0,
    detail: surfaces.length > 0 ? `${surfaces.length} surface(s) linked` : "No release surfaces linked",
  };
}

function hasSource(release: Release): ReleaseApprovalCheck {
  const passed = Boolean(release.source?.kind && (release.source.label || release.source.repository || release.source.url));
  return {
    key: "source_presence",
    label: "Source metadata is present",
    passed,
    detail: passed ? "Release source is populated" : "Missing meaningful source metadata",
  };
}

function hasNotes(release: Release): ReleaseApprovalCheck {
  const passed = Boolean(release.releaseNotes?.trim());
  return {
    key: "release_notes",
    label: "Release notes are present",
    passed,
    detail: passed ? "Release notes available" : "Release notes missing",
  };
}

function confidenceIsKnown(release: Release): ReleaseApprovalCheck {
  const passed = typeof release.confidenceScore === "number";
  return {
    key: "confidence_score",
    label: "Confidence score is known",
    passed,
    detail: passed ? `Score: ${release.confidenceScore}` : "Confidence score missing",
  };
}

export function evaluateReleaseForApproval(
  release: Release,
  surfaces: ReleaseSurface[],
): ReleaseApprovalEvaluation {
  const checks = [
    hasSource(release),
    hasNotes(release),
    confidenceIsKnown(release),
    atLeastOneSurface(surfaces),
  ];

  return {
    canApprove: checks.every((item) => item.passed),
    checks,
  };
}
