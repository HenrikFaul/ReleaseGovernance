import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { hostingProvider, hostingUrl, hostingApiKey } = await request.json();
    if (!hostingProvider || !hostingUrl) {
      return NextResponse.json({ error: "hostingProvider and hostingUrl are required." }, { status: 400 });
    }
    if (hostingProvider === "supabase") {
      const target = `${String(hostingUrl).replace(/\/$/, "")}/auth/v1/settings`;
      const res = await fetch(target, { headers: { ...(hostingApiKey ? { apikey: hostingApiKey, Authorization: `Bearer ${hostingApiKey}` } : {}) }, cache: "no-store" });
      return NextResponse.json({ ok: res.status < 500, summary: `Supabase probe ${res.status}` });
    }
    const res = await fetch(hostingUrl, { headers: hostingApiKey ? { Authorization: `Bearer ${hostingApiKey}` } : {}, cache: "no-store" });
    return NextResponse.json({ ok: res.status < 500, summary: `${hostingProvider} probe ${res.status}` });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Hosting test failed." }, { status: 500 });
  }
}
