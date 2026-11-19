"use client";

import { useCallback, useState, type FormEvent } from "react";
import type { Review, ReviewStatus } from "@/types/review";

const tabs: ReviewStatus[] = ["pending", "approved", "rejected"];

/** Owner-only moderation. The token is checked on the server for every request and kept only in this tab's memory. */
export default function AdminPage() {
  const [token, setToken] = useState("");
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [tab, setTab] = useState<ReviewStatus>("pending");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [confirm, setConfirm] = useState<ReviewStatus | null>(null);

  const load = useCallback(async (t: string) => {
    setBusy(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/reviews", { headers: { Authorization: `Bearer ${t}` }, cache: "no-store" });
      if (res.status === 401) return setMessage("Wrong password.");
      if (res.status === 503) return setMessage("Moderation is not configured. Set ADMIN_TOKEN on the server.");
      if (!res.ok) return setMessage("Could not load reviews.");
      setReviews(((await res.json()) as { reviews: Review[] }).reviews);
    } catch {
      setMessage("Network error.");
    } finally {
      setBusy(false);
    }
  }, []);

  /** Change one review, or many at once (bulk approve / reject). */
  async function change(ids: string[], status: ReviewStatus) {
    setBusy(true);
    setMessage("");
    setConfirm(null);
    const res = await fetch("/api/admin/reviews", {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ ids, status }),
    });
    setBusy(false);
    if (!res.ok) return setMessage("Could not update the review(s). Please try again.");
    const set = new Set(ids);
    setReviews((list) => list?.map((r) => (set.has(r.id) ? { ...r, status } : r)) ?? null);
  }

  function onLogin(e: FormEvent) {
    e.preventDefault();
    void load(token);
  }

  if (!reviews) {
    return (
      <main className="mx-auto max-w-md px-6 py-24">
        <h1 className="text-3xl font-semibold text-forest-900">Review moderation</h1>
        <form onSubmit={onLogin} className="mt-8 space-y-4">
          <label htmlFor="token" className="block text-sm font-semibold">
            Admin password
          </label>
          <input id="token" type="password" autoComplete="current-password" value={token} onChange={(e) => setToken(e.target.value)} className="w-full rounded-xl border border-forest-800/25 bg-white px-4 py-3" />
          <button disabled={busy || !token} className="rounded-full bg-forest-800 px-6 py-3 font-semibold text-cream-50 disabled:opacity-60">
            Sign in
          </button>
          {message && (
            <p role="alert" className="text-sm font-medium text-red-700">
              {message}
            </p>
          )}
        </form>
      </main>
    );
  }

  const shown = reviews.filter((r) => r.status === tab);
  const approved = reviews.filter((r) => r.status === "approved");
  const avg = approved.length ? (approved.reduce((s, r) => s + r.rating, 0) / approved.length).toFixed(1) : "-";

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-forest-900">Review moderation</h1>
      <p className="mt-2 text-ink-soft">
        Public rating: <strong>{avg}</strong> from {approved.length} approved review{approved.length === 1 ? "" : "s"}.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <div role="tablist" className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => { setTab(t); setConfirm(null); }} className={`rounded-full px-5 py-2.5 text-sm font-semibold capitalize ${tab === t ? "bg-forest-800 text-cream-50" : "bg-cream-100 text-forest-900"}`}>
            {t} ({reviews.filter((r) => r.status === t).length})
          </button>
        ))}
        </div>
        <button type="button" disabled={busy} onClick={() => load(token)} className="inline-flex items-center gap-2 rounded-full border border-forest-800/30 px-5 py-2.5 text-sm font-semibold text-forest-900 hover:bg-forest-900 hover:text-cream-50 disabled:opacity-60">
          <span aria-hidden>&#8635;</span>
          {busy ? "Refreshing…" : "Refresh"}
        </button>
      </div>

      {message && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-700">
          {message}
        </p>
      )}

      {shown.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl bg-cream-100 p-4">
          {confirm ? (
            <>
              <p className="font-semibold">
                {confirm === "approved" ? "Approve" : confirm === "rejected" ? "Reject" : "Move to pending"} all {shown.length} {tab} review{shown.length === 1 ? "" : "s"}?
              </p>
              <button disabled={busy} onClick={() => change(shown.map((r) => r.id), confirm)} className="rounded-full bg-forest-800 px-5 py-2.5 text-sm font-semibold text-cream-50 disabled:opacity-60">
                Yes, confirm
              </button>
              <button disabled={busy} onClick={() => setConfirm(null)} className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-forest-900">
                Cancel
              </button>
            </>
          ) : (
            <>
              <span className="text-sm text-ink-soft">All {shown.length} in this tab:</span>
              {tab !== "approved" && (
                <button disabled={busy} onClick={() => setConfirm("approved")} className="rounded-full bg-[#128c4a] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60">
                  Approve all
                </button>
              )}
              {tab !== "rejected" && (
                <button disabled={busy} onClick={() => setConfirm("rejected")} className="rounded-full bg-red-700 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60">
                  Reject all
                </button>
              )}
            </>
          )}
        </div>
      )}

      <ul className="mt-6 space-y-4">
        {shown.length === 0 && <li className="text-ink-soft">Nothing here.</li>}
        {shown.map((r) => (
          <li key={r.id} className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-forest-900/5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold">
                {r.name} <span className="font-normal text-ink-soft">· {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)} · {r.lang === "hi" ? "Hinglish" : "English"}</span>
              </p>
              <time className="text-sm text-ink-soft" dateTime={r.createdAt}>
                {new Date(r.createdAt).toLocaleString("en-IN")}
              </time>
            </div>
            <p className="mt-3 whitespace-pre-line">{r.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tabs
                .filter((s) => s !== r.status)
                .map((s) => (
                  <button key={s} disabled={busy} onClick={() => change([r.id], s)} className={`rounded-full px-4 py-2 text-sm font-semibold capitalize disabled:opacity-60 ${s === "approved" ? "bg-[#128c4a] text-white" : s === "rejected" ? "bg-red-700 text-white" : "bg-cream-200 text-forest-900"}`}>
                    {s === "approved" ? "Approve" : s === "rejected" ? "Reject" : "Move to pending"}
                  </button>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
