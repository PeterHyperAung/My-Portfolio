import type { Metadata } from "next";
import Navbar from "@/app/(default)/_components/general/navbar";
import Footer from "./_components/general/footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Min Phone Aung's Portfolio",
  description: "Min Phone Aung's website portoflio for web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
