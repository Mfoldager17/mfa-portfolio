import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";

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
        className={`${inter.className}  bg-gray-300 text-gray-600 relative bg-opacity-50 pt-28 sm:pt-36 dark:bg-slate-900 dark:text-gray-300 dark:bg-opacity-90`}

      >
        <div className="absolute top-0 left-0 -z-10 bg-cyan-100 dark:bg-cyan-100 h-96 pr-[50%] dark:blur-[8rem] blur-[10rem] lg:blur-[10rem] dark:md:blur-[10rem] dark:lg:blur-[15rem] rounded-full"></div>
        <div className="absolute top-0 right-0 -z-10 bg-pink-100 dark:sm:bg-lime-100 dark:bg-lime-100 h-96 pl-[50%] blur-[11rem] md:blur-[9rem] dark:blur-[7rem] dark:lg:blur-[15rem] lg:blur-[15rem] rounded-full"></div>
        <ThemeContextProvider>
          <NavBar />
          {children}
          <Footer />
          <Toaster position="bottom-center" />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>

    </html>
  );
}
