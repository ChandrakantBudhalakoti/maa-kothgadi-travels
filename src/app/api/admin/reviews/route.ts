import { timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { listAll, setStatus } from "@/lib/reviews-store";
import { locales } from "@/i18n/config";
import type { ReviewStatus } from "@/types/review";

function authorised(request: NextRequest): boolean | null {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) return null; // not configured
  const given = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

const noStore = { "Cache-Control": "no-store" };

export async function GET(request: NextRequest) {
  const ok = authorised(request);
  if (ok === null) return NextResponse.json({ error: "admin_not_configured" }, { status: 503, headers: noStore });
  if (!ok) return NextResponse.json({ error: "unauthorised" }, { status: 401, headers: noStore });
  try {
    return NextResponse.json({ reviews: await listAll() }, { headers: noStore });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "server" }, { status: 500, headers: noStore });
  }
}

export async function PATCH(request: NextRequest) {
  const ok = authorised(request);
  if (ok === null) return NextResponse.json({ error: "admin_not_configured" }, { status: 503, headers: noStore });
  if (!ok) return NextResponse.json({ error: "unauthorised" }, { status: 401, headers: noStore });

  const body = (await request.json().catch(() => null)) as { id?: unknown; status?: unknown } | null;
  const status = body?.status as ReviewStatus;
  if (typeof body?.id !== "string" || !["pending", "approved", "rejected"].includes(status)) {
    return NextResponse.json({ error: "invalid" }, { status: 400, headers: noStore });
  }
  try {
    const found = await setStatus(body.id, status);
    if (!found) return NextResponse.json({ error: "not_found" }, { status: 404, headers: noStore });
    for (const locale of locales) {
      revalidatePath(`/${locale}/reviews`);
      revalidatePath(`/${locale}`);
    }
    return NextResponse.json({ ok: true }, { headers: noStore });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "server" }, { status: 500, headers: noStore });
  }
}
