import { AppShell } from "@/components/app-shell";
import { SectionHeader } from "@/components/ui";
import { ImportStudio } from "@/components/import-studio";
import { getRuntimeControl } from "@/lib/runtime-control";

export default function ImportPage({ params }: { params: { projectId: string } }) {
  const control = getRuntimeControl();
  const extra = control.projectUpload.enabled
    ? " Project Upload is enabled for this workspace and can use Jira, GitHub, hosting and changelog inputs."
    : "";
  return (
    <AppShell projectId={params.projectId}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Import studio" title="Import releases, capabilities, integrations and Jira work" description={`Upload Markdown, CSV or Excel inventories, or import Jira issues by URL/project URL/base URL + project key.${extra}`} />
        <ImportStudio projectId={params.projectId} />
      </div>
    </AppShell>
  );
}
