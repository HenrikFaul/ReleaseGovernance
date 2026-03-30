import { NextResponse } from "next/server";
import { getRuntimeControl } from "@/lib/runtime-control";

export async function GET() {
  return NextResponse.json(getRuntimeControl());
}
