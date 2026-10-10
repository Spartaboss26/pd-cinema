import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Reel Time — Free Public Domain Classics",
  description:
    "Watch free public domain movie classics — horror, noir, sci-fi, silent films and more. No signup, no fees.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#0a0a0a] text-neutral-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-neutral-800 mt-16 py-8 text-center text-sm text-neutral-500">
          <p>
            All films are in the public domain. Streams provided by the Internet
            Archive.
          </p>
          <p className="mt-1">Reel Time — free classics, forever.</p>
        </footer>
      </body>
    </html>
  );
}
