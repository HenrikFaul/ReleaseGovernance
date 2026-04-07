import { NextRequest, NextResponse } from "next/server";
import { IntegrationRef } from "@/lib/types";
import { normalizeIntegrationInventory, runIntegrationTest } from "@/lib/integrations";

type TestRequestBody = {
  mode: "single" | "all";
  integrationId?: string;
  integrations: IntegrationRef[];
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as TestRequestBody;
    const integrations = normalizeIntegrationInventory(Array.isArray(body.integrations) ? body.integrations : []);

    if (!integrations.length) {
      return NextResponse.json({ error: "No integrations provided." }, { status: 400 });
    }

    if (body.mode === "single") {
      const target = integrations.find((integration) => integration.id === body.integrationId);
      if (!target) return NextResponse.json({ error: "Integration not found." }, { status: 404 });
      const result = await runIntegrationTest(target, "single");
      return NextResponse.json({ mode: "single", results: { [target.id]: result } });
    }

    const results = await Promise.all(
      integrations.map(async (integration) => ({ id: integration.id, result: await runIntegrationTest(integration, "all") })),
    );

    return NextResponse.json({
      mode: "all",
      results: Object.fromEntries(results.map((entry) => [entry.id, entry.result])),
    });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Integration test failed." }, { status: 500 });
  }
}
