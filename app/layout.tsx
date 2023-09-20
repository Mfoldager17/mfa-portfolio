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
        className={`${inter.className}  bg-gray-100 text-gray-600 relative bg-opacity-50 pt-28 sm:pt-36 dark:bg-slate-900 dark:text-gray-300 dark:bg-opacity-90`}

      >
        <div className="bg-slate-400 absolute top-[-5rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
        <div className="bg-green-50 absolute top-[-5rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-green-100"></div>

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
