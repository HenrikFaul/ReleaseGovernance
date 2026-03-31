import { NextRequest, NextResponse } from "next/server";

function parseRepo(raw: string) {
  const trimmed = raw.trim();
  if (/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(trimmed)) {
    const [owner, repo] = trimmed.replace(/\.git$/, "").split("/");
    return { owner, repo };
  }
  const url = new URL(trimmed);
  const parts = url.pathname.replace(/^\//, "").replace(/\.git$/, "").split("/");
  if (url.hostname !== "github.com" || parts.length < 2) throw new Error("Use a GitHub repository URL like https://github.com/owner/repo or owner/repo");
  return { owner: parts[0], repo: parts[1] };
}

export async function POST(request: NextRequest) {
  try {
    const { repoUrl, githubToken } = await request.json();
    if (!repoUrl) return NextResponse.json({ error: "repoUrl is required." }, { status: 400 });
    const { owner, repo } = parseRepo(repoUrl);
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "releasegovernance", ...(githubToken ? { Authorization: `Bearer ${githubToken}` } : {}) },
      cache: "no-store",
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return NextResponse.json({ error: `GitHub request failed (${res.status}) ${text}` }, { status: 500 });
    }
    const data: any = await res.json();
    return NextResponse.json({ ok: true, owner, repo, defaultBranch: data.default_branch, visibility: data.private ? "private" : "public", description: data.description ?? "" });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "GitHub test failed." }, { status: 500 });
  }
}
