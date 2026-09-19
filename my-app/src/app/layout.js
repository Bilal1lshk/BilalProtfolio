
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "BilalProtfolio",
  verification: {
    google: "xROAJVgKDmEhC14XIsNC3pRCy42UG3ooyXboA2skxg4"
  },
  description: "Bilal is an AI-driven web developer crafting custom portfolio sites, smart web apps, and automation-first digital products with polished design and modern UX.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}