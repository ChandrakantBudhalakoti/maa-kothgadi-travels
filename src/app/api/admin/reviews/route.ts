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

  const body = (await request.json().catch(() => null)) as { id?: unknown; ids?: unknown; status?: unknown } | null;
  const status = body?.status as ReviewStatus;
  // Accept a single id, or a list of ids for bulk approve / reject.
  const ids = Array.isArray(body?.ids) ? body.ids : typeof body?.id === "string" ? [body.id] : [];
  if (!["pending", "approved", "rejected"].includes(status) || ids.length === 0 || ids.length > 500 || !ids.every((i) => typeof i === "string")) {
    return NextResponse.json({ error: "invalid" }, { status: 400, headers: noStore });
  }
  try {
    let updated = 0;
    for (const id of ids as string[]) if (await setStatus(id, status)) updated++;
    if (updated === 0) return NextResponse.json({ error: "not_found" }, { status: 404, headers: noStore });
    for (const locale of locales) {
      revalidatePath(`/${locale}/reviews`);
      revalidatePath(`/${locale}`);
    }
    return NextResponse.json({ ok: true, updated }, { headers: noStore });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "server" }, { status: 500, headers: noStore });
  }
}
