import { NextResponse } from "next/server";
import { evaluateReleaseImpact } from "@/lib/impact-engine";
import { getProject } from "@/lib/mock-data";

export async function GET(_: Request, { params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId);
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
  const results = project.releases.map((release) => evaluateReleaseImpact(release));
  return NextResponse.json({ projectId: params.projectId, results });
}
