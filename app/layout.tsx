import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bits - HRV-Powered Task Manager",
  description: "Work with your energy, not against it. Bits uses HRV data to recommend the perfect task for your energy level—preventing burnout while maximizing productivity.",
  keywords: "productivity, HRV, focus, deep work, burnout, energy, cognitive load, task manager, health, mindfulness",
  authors: [{ name: "Bits" }],
  openGraph: {
    title: "Bits - HRV-Powered Task Manager",
    description: "Work with your energy, not against it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
