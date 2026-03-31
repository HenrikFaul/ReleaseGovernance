import { NextRequest, NextResponse } from "next/server";

function parseBaseJiraUrl(raw: string) {
  const url = new URL(raw);
  return `${url.protocol}//${url.host}`;
}

function jiraDescriptionDocument(text: string) {
  return {
    type: "doc",
    version: 1,
    content: text.split(/\n\n+/).map((paragraph) => ({
      type: "paragraph",
      content: [{ type: "text", text: paragraph.slice(0, 32000) }],
    })),
  };
}

async function jiraCreateIssue(base: string, email: string, apiToken: string, payload: any) {
  const auth = Buffer.from(`${email}:${apiToken}`).toString("base64");
  const res = await fetch(`${base}/rest/api/3/issue`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.errorMessages?.join(" ") || `Jira create failed (${res.status})`);
  return data;
}

export async function POST(request: NextRequest) {
  try {
    const { jiraUrl, email, apiToken, projectKey, drafts } = await request.json();
    if (!jiraUrl || !email || !apiToken || !projectKey) {
      return NextResponse.json({ error: "jiraUrl, email, apiToken and projectKey are required." }, { status: 400 });
    }
    if (!Array.isArray(drafts) || !drafts.length) {
      return NextResponse.json({ error: "No Jira drafts supplied." }, { status: 400 });
    }

    const base = parseBaseJiraUrl(jiraUrl);
    const created = [];

    for (const draft of drafts) {
      const fields: any = {
        project: { key: projectKey },
        summary: draft.summary,
        description: jiraDescriptionDocument(draft.description),
        issuetype: { name: draft.issueType || "Story" },
        labels: draft.labels ?? [],
      };
      if (draft.parentKey) fields.parent = { key: draft.parentKey };
      const data = await jiraCreateIssue(base, email, apiToken, { fields });
      created.push({ key: data.key, id: data.id, self: data.self, sourceReleaseVersion: draft.releaseVersion });
    }

    return NextResponse.json({ created });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Push to Jira apply failed." }, { status: 500 });
  }
}
