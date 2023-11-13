import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-stone-500 to-stone-700 text-stone-300 m-3">
        {children}
      </body>
    </html >
  )
}
