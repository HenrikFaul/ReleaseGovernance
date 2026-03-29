import { AppShell } from "@/components/app-shell";
import { SectionHeader } from "@/components/ui";
import { ImportStudio } from "@/components/import-studio";

export default function ImportPage({ params }: { params: { projectId: string } }) {
  return (
    <AppShell projectId={params.projectId}>
      <div className="space-y-6">
        <SectionHeader eyebrow="Import studio" title="Import releases, capabilities, integrations and Jira work" description="Upload Markdown, CSV or Excel inventories, or import Jira issues by URL or project URL. Imported data is mapped into the current project's governance hierarchy." />
        <ImportStudio projectId={params.projectId} />
      </div>
    </AppShell>
  );
}
