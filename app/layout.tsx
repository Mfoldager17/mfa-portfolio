/** @format */

import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathias | Personal Portfolio",
  description: "Portfolio of Mathias Foldager Andersen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        id="home"
        className={`${inter.className} bg-gradient-to-r from-slate-300  to-red-50 text-gray-600 relative bg-opacity-50 h-[5000px] pt-28 sm:pt-36`}

      >
        <Header />
        {children}
      </body>

    </html>
  );
}
