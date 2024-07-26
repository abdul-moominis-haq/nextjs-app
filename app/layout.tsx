import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Fullstack Next.js",
  description: "A fullstack Next.js for Administrative Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >{children}</body>
    </html>
  );
}
