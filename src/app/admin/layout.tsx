import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Review moderation",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
