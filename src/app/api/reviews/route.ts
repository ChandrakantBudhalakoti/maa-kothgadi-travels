import { NextResponse, type NextRequest } from "next/server";
import { createReview, reviewsEnabled } from "@/lib/reviews-store";
import { parseReview, rateLimited } from "@/lib/validation";

export async function POST(request: NextRequest) {
  if (!reviewsEnabled) return NextResponse.json({ error: "unavailable" }, { status: 503 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success to bots.
  if (typeof (body as { website?: unknown })?.website === "string" && (body as { website: string }).website) {
    return NextResponse.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  const parsed = parseReview(body);
  if (!parsed.ok) return NextResponse.json({ error: "invalid", field: parsed.field }, { status: 422 });

  try {
    await createReview(parsed.value);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("createReview failed", error);
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}
