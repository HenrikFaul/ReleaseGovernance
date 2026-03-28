import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReleaseGovernance",
  description: "Cross-platform release governance and traceability cockpit",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
