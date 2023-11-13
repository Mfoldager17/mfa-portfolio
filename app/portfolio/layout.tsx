import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";

export const metadata: Metadata = {
    title: "Mathias | Personal Portfolio",
    description: "Portfolio of Mathias Foldager Andersen",
};


export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        <ThemeContextProvider>
            <NavBar />
            {children}
            <Footer />
            <Toaster position="bottom-center" />
            <ThemeSwitch />
        </ThemeContextProvider>
    </section>



}