/** @format */

import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ChangeTheme from "@/components/Change-theme";

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
        className={`${inter.className}  bg-gradient-to-r  from-slate-100 to-stone-300 text-gray-600 relative bg-opacity-50 pt-28 sm:pt-36`}

      >
        <NavBar />
        {children}
        <Footer />
        <Toaster position="bottom-center" />
        <ChangeTheme />
      </body>

    </html>
  );
}
