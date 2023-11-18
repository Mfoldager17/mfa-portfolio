import "./globals.css";
import type { Metadata } from "next";
import { StyledEngineProvider } from "@mui/material";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/admin/SessionProvider";

export const metadata: Metadata = {

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>

      <html lang="en">
        <body className="flex flex-col min-h-screen place-content-center items-center bg-gradient-to-r from-stone-500 to-stone-700 text-stone-300">
          <StyledEngineProvider injectFirst>
            {children}
            <br />
            <Footer />
          </StyledEngineProvider>
        </body>
      </html >
    </SessionProvider>
  )
}
