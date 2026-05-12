import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Tri Master Solusindo | Tax & Accounting Consultant",
  description: "Firma konsultan pajak dan akuntansi untuk korporasi dan bisnis kelas menengah ke atas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-background text-foreground selection:bg-accent/30">
        <Navbar />
        <main>{children}</main>
        {/* Footer will be added later */}
      </body>
    </html>
  );
}

