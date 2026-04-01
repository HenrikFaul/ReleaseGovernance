import { NextRequest, NextResponse } from "next/server";

function authHeader(email: string, token: string) {
  return "Basic " + Buffer.from(`${email}:${token}`).toString("base64");
}

async function createJiraIssue(baseUrl: string, email: string, apiToken: string, projectKey: string, draft: any) {
  const payload: any = {
    fields: {
      project: { key: projectKey },
      summary: draft.summary,
      description: {
        type: "doc",
        version: 1,
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: draft.description }],
          },
        ],
      },
      issuetype: { name: draft.issueType || "Story" },
      labels: draft.labels || [],
    },
  };

  if (draft.parentKey) {
    payload.fields.parent = { key: draft.parentKey };
  }

  const res = await fetch(`${baseUrl}/rest/api/3/issue`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: authHeader(email, apiToken),
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Jira create failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return {
    releaseId: draft.releaseId,
    key: data.key,
    summary: draft.summary,
    url: `${baseUrl}/browse/${data.key}`,
  };
}

export async function POST(request: NextRequest) {
  try {
    const { jiraUrl, email, apiToken, projectKey, drafts } = await request.json();
    if (!jiraUrl || !email || !apiToken || !projectKey) {
      return NextResponse.json({ error: "Missing Jira credentials or project key." }, { status: 400 });
    }

    const baseUrl = String(jiraUrl).replace(/\/$/, "");
    const created = [];
    for (const draft of drafts || []) {
      created.push(await createJiraIssue(baseUrl, email, apiToken, projectKey, draft));
    }

    return NextResponse.json({ created });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Push apply failed." },
      { status: 500 }
    );
  }
}
