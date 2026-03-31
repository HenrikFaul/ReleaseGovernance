import { NextRequest, NextResponse } from "next/server";
import { parseJiraUrl } from "@/lib/jira-import";

type Draft = {
  id: string;
  summary: string;
  description: string;
  labels: string[];
  issueType: string;
  parentKey?: string;
};

function authHeader(email: string, token: string) {
  return `Basic ${Buffer.from(`${email}:${token}`).toString("base64")}`;
}

function toAdf(description: string) {
  const lines = description.split(/\r?\n/);
  const content = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      content.push({ type: "paragraph", content: [] });
      continue;
    }
    content.push({
      type: "paragraph",
      content: [{ type: "text", text: trimmed }],
    });
  }

  return {
    version: 1,
    type: "doc",
    content,
  };
}

async function createIssue(base: string, email: string, token: string, payload: Record<string, unknown>) {
  const res = await fetch(`${base}/rest/api/3/issue`, {
    method: "POST",
    headers: {
      Authorization: authHeader(email, token),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = parseJiraUrl(body.jiraUrl);
    const projectKey = String(body.projectKey ?? "").toUpperCase();
    const email = String(body.jiraEmail ?? "");
    const token = String(body.jiraToken ?? "");
    const drafts: Draft[] = Array.isArray(body.drafts) ? body.drafts : [];

    if (!projectKey || !email || !token) {
      return NextResponse.json({ error: "projectKey, jiraEmail and jiraToken are required." }, { status: 400 });
    }

    const created = [];
    const failed = [];

    for (const draft of drafts) {
      const fields: Record<string, unknown> = {
        project: { key: projectKey },
        summary: draft.summary,
        issuetype: { name: draft.issueType || "Story" },
        labels: draft.labels ?? [],
        description: toAdf(draft.description ?? ""),
      };

      if (draft.parentKey) {
        fields.parent = { key: draft.parentKey };
      }

      let result = await createIssue(parsed.base, email, token, { fields });

      if (!result.ok && draft.parentKey) {
        const retryFields = { ...fields };
        delete retryFields.parent;
        result = await createIssue(parsed.base, email, token, { fields: retryFields });
      }

      if (result.ok) {
        created.push({
          id: draft.id,
          key: result.data.key,
          self: result.data.self,
        });
      } else {
        failed.push({
          id: draft.id,
          summary: draft.summary,
          status: result.status,
          error: result.data,
        });
      }
    }

    return NextResponse.json({ created, failed });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Push-to-Jira apply failed." },
      { status: 500 }
    );
  }
}
