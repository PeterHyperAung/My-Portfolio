import type { Metadata } from "next";
import Navbar from "@/app/(default)/_components/general/navbar";
import Footer from "./_components/general/footer";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        {/* Open Graph tags */}
        <meta property="og:title" content="Min Phone Aung's Portfolio" />
        <meta
          property="og:description"
          content="A passionate developer who love crafting the web with JavaScript, TypeScript, React, Node, Next.js and Laravel."
        />
        <meta property="og:image" content="/" />
        <meta property="og:url" content="https://www.minphoneaung.me/" />
        {/* Twitter tags */}
        <meta name="twitter:card" content="Min Phone Aung's website image" />
        <meta name="twitter:site" content="@PeterHyper_Aung" />
        <meta name="twitter:creator" content="@PeterHyper_Aung" />
        <meta name="twitter:title" content="Min Phone Aung's Portfolio" />
        <meta
          name="twitter:description"
          content="A passionate developer who love crafting the web with JavaScript, TypeScript, React, Node, Next.js and Laravel."
        />
        <meta
          name="twitter:image"
          content="https://www.yoursite.com/images/twitter-image.jpg"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
