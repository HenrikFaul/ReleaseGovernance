export function getProjectOverviewHref(projectId: string): string {
  return `/projects/${projectId}/overview`;
}

export function getLegacyProjectDashboardHref(projectId: string): string {
  return `/projects/${projectId}`;
}
