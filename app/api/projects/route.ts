import { NextResponse } from "next/server";
import { getTenant } from "@/lib/mock-data";

export async function GET() {
  const tenant = getTenant("tenant_releasegovernance");
  return NextResponse.json({ tenants: tenant ? [tenant] : [] });
}
