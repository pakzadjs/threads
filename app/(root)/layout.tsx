import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads Application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
