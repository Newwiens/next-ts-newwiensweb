import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Newwiensweb | Web Designer & Deverloper",
  description: "Portfolio Thang Nguyen",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}h-full antialiased`}>
      <body className="flex min-h-screen flex-col bg-white text-black">
        {/* Navbar */}
        <Navbar />

        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
