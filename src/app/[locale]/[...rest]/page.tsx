import { notFound } from "next/navigation";

/** Any unknown URL under /en or /hi renders the localised 404 inside the site layout. */
export default function CatchAll() {
  notFound();
}
