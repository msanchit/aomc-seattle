import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";

export const metadata: Metadata = {
  title: "AOMC Seattle — Acupuncture & Oriental Medicine Center",
  description:
    "The Acupuncture & Oriental Medicine Center is the largest acupuncture center in Seattle, providing primary care for acupuncture, Chinese herbal medicine, and alternative medicine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
