"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";
import { tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

type Values = Record<"name" | "phone" | "trip" | "date" | "pickup" | "drop" | "vehicle" | "pax" | "details", string>;
type Errors = Partial<Record<keyof Values, string>>;

/** Today as YYYY-MM-DD in the visitor's own timezone. */
function localToday() {
  return new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

const input = "mt-1.5 w-full rounded-xl border border-forest-800/25 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-forest-700";
const invalid = "border-red-700";

export function BookingForm({ locale, vehicleNames }: { locale: Locale; vehicleNames: string[] }) {
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  const f = ui.form;
  const [minDate] = useState(localToday);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const today = localToday();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const v: Values = {
      name: (d.name ?? "").trim(),
      phone: (d.phone ?? "").trim(),
      trip: d.trip ?? "",
      date: d.date ?? "",
      pickup: (d.pickup ?? "").trim(),
      drop: (d.drop ?? "").trim(),
      vehicle: d.vehicle ?? "",
      pax: d.pax ?? "",
      details: (d.details ?? "").trim(),
    };
    const required = tr(f.required, locale);
    const next: Errors = {};
    if (!v.name) next.name = required;
    if (!v.phone) next.phone = required;
    else if (!/^\+?[\d\s-]{10,16}$/.test(v.phone)) next.phone = tr(f.phoneInvalid, locale);
    if (!v.trip) next.trip = required;
    if (!v.date) next.date = required;
    else if (v.date < today) next.date = tr(f.dateInvalid, locale);
    if (!v.pickup) next.pickup = required;
    if (!v.drop) next.drop = required;
    setErrors(next);
    if (Object.keys(next).length) {
      (e.currentTarget.querySelector(`[name="${Object.keys(next)[0]}"]`) as HTMLElement | null)?.focus();
      return;
    }

    const L = f.waLabels[locale];
    const lines = [
      tr(f.waIntro, locale),
      "",
      `${L.name}: ${v.name}`,
      `${L.phone}: ${v.phone}`,
      `${L.trip}: ${v.trip}`,
      `${L.date}: ${v.date}`,
      `${L.pickup}: ${v.pickup}`,
      `${L.drop}: ${v.drop}`,
      `${L.vehicle}: ${v.vehicle || tr(f.anyVehicle, locale)}`,
      `${L.pax}: ${v.pax || "-"}`,
      ...(v.details ? [`${L.details}: ${v.details}`] : []),
    ];
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setOpened(true);
  }

  const field = (key: keyof Values, label: string, control: (props: { id: string; "aria-invalid": boolean; "aria-describedby"?: string }) => React.ReactNode, full = false) => {
    const id = `bf-${key}`;
    const err = errors[key];
    return (
      <div className={full ? "sm:col-span-2" : ""}>
        <label htmlFor={id} className="text-sm font-semibold text-forest-900">
          {label}
        </label>
        {control({ id, "aria-invalid": Boolean(err), "aria-describedby": err ? `${id}-err` : undefined })}
        {err && (
          <p id={`${id}-err`} className="mt-1.5 text-sm font-medium text-red-700">
            {err}
          </p>
        )}
      </div>
    );
  };

  const cls = (k: keyof Values) => `${input} ${errors[k] ? invalid : ""}`;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {field("name", tr(f.name, locale), (p) => <input {...p} name="name" autoComplete="name" className={cls("name")} />)}
      {field("phone", tr(f.phone, locale), (p) => <input {...p} name="phone" type="tel" inputMode="tel" autoComplete="tel" className={cls("phone")} placeholder="+91 98765 43210" />)}
      {field("trip", tr(f.tripType, locale), (p) => (
        <select {...p} name="trip" defaultValue="" className={cls("trip")}>
          <option value="" disabled>
            {tr(f.choose, locale)}
          </option>
          {f.trips[locale].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      ))}
      {field("date", tr(f.date, locale), (p) => <input {...p} name="date" type="date" min={minDate} className={cls("date")} />)}
      {field("pickup", tr(f.pickup, locale), (p) => <input {...p} name="pickup" autoComplete="off" className={cls("pickup")} />)}
      {field("drop", tr(f.drop, locale), (p) => <input {...p} name="drop" autoComplete="off" className={cls("drop")} />)}
      {field("vehicle", tr(f.vehicle, locale), (p) => (
        <select {...p} name="vehicle" defaultValue="" className={cls("vehicle")}>
          <option value="">{tr(f.anyVehicle, locale)}</option>
          {vehicleNames.map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      ))}
      {field("pax", tr(f.passengers, locale), (p) => (
        <select {...p} name="pax" defaultValue="" className={cls("pax")}>
          <option value="">{tr(f.choose, locale)}</option>
          {f.pax[locale].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      ))}
      {field("details", tr(f.details, locale), (p) => <textarea {...p} name="details" rows={3} maxLength={500} className={cls("details")} placeholder={tr(f.detailsPh, locale)} />, true)}

      <div className="sm:col-span-2">
        <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#128c4a] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0e7a40] sm:w-auto">
          <MessageCircle aria-hidden width={19} height={19} />
          {tr(f.submit, locale)}
        </button>
        <p className="mt-3 text-sm text-ink-soft">{tr(f.note, locale)}</p>
        {opened && (
          <p role="status" className="mt-2 text-sm font-semibold text-forest-700">
            {tr(f.opened, locale)}
          </p>
        )}
      </div>
    </form>
  );
}
