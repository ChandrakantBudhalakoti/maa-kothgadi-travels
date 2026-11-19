import "server-only";
import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import type { PublicReview, Review, ReviewStatus, ReviewSummary } from "@/types/review";

/**
 * Review storage.
 *  - Production: Upstash Redis (free via the Vercel Marketplace), talked to over its REST API.
 *    The token only ever lives on the server. Each review is one small JSON value in a hash.
 *  - Local development without Redis: a JSON file in ./.data (never used in production).
 */

// Vercel's Upstash integration injects KV_REST_API_*; Upstash directly uses UPSTASH_REDIS_REST_*.
const REDIS_URL = (process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL)?.replace(/\/$/, "");
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const useRedis = Boolean(REDIS_URL && REDIS_TOKEN);
const useFile = !useRedis && process.env.NODE_ENV !== "production";
const FILE = path.join(process.cwd(), ".data", "reviews.json");
const KEY = "mk:reviews";

export const reviewsEnabled = useRedis || useFile;

/** `cached` reads may be reused for 60s (public pages); everything else is always fresh. */
async function redis<T = unknown>(cached: boolean, ...command: (string | number)[]): Promise<T> {
  const res = await fetch(REDIS_URL!, {
    method: "POST",
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    ...(cached ? { next: { revalidate: 60 } } : { cache: "no-store" as const }),
  });
  if (!res.ok) throw new Error(`Redis ${res.status}`);
  const json = (await res.json()) as { result: T; error?: string };
  if (json.error) throw new Error(json.error);
  return json.result;
}

async function redisAll(cached: boolean): Promise<Review[]> {
  const flat = (await redis<string[]>(cached, "HGETALL", KEY)) ?? [];
  const list: Review[] = [];
  for (let i = 1; i < flat.length; i += 2) {
    try {
      list.push(JSON.parse(flat[i]) as Review);
    } catch {
      /* skip a corrupt entry */
    }
  }
  return list;
}

async function readFile(): Promise<Review[]> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8")) as Review[];
  } catch {
    return [];
  }
}
async function writeFile(list: Review[]) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(list, null, 2));
}

const newestFirst = (a: Review, b: Review) => b.createdAt.localeCompare(a.createdAt);
const toPublic = ({ id, rating, name, text, lang, createdAt }: Review): PublicReview => ({ id, rating, name, text, lang, createdAt });

export async function listAll(cached = false): Promise<Review[]> {
  if (useRedis) return (await redisAll(cached)).sort(newestFirst);
  if (useFile) return (await readFile()).sort(newestFirst);
  return [];
}

export async function listApproved(): Promise<PublicReview[]> {
  try {
    return (await listAll(true)).filter((r) => r.status === "approved").slice(0, 100).map(toPublic);
  } catch (error) {
    console.error("listApproved failed", error);
    return [];
  }
}

export async function createReview(input: { rating: number; name: string; text: string; lang: "en" | "hi" }): Promise<void> {
  const review: Review = { id: randomUUID(), ...input, status: "pending", createdAt: new Date().toISOString() };
  if (useRedis) {
    await redis(false, "HSET", KEY, review.id, JSON.stringify(review));
    return;
  }
  if (useFile) {
    const list = await readFile();
    list.push(review);
    await writeFile(list);
    return;
  }
  throw new Error("Reviews storage is not configured");
}

export async function setStatus(id: string, status: ReviewStatus): Promise<boolean> {
  if (useRedis) {
    const raw = await redis<string | null>(false, "HGET", KEY, id);
    if (!raw) return false;
    const review = JSON.parse(raw) as Review;
    await redis(false, "HSET", KEY, id, JSON.stringify({ ...review, status }));
    return true;
  }
  if (useFile) {
    const list = await readFile();
    const hit = list.find((r) => r.id === id);
    if (!hit) return false;
    hit.status = status;
    await writeFile(list);
    return true;
  }
  return false;
}

/** Average and count, computed only from the approved reviews passed in. */
export function summarize(list: Pick<Review, "rating">[]): ReviewSummary {
  if (!list.length) return { count: 0, average: null };
  const total = list.reduce((sum, r) => sum + r.rating, 0);
  return { count: list.length, average: Math.round((total / list.length) * 10) / 10 };
}
