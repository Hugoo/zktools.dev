import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "@/components/NavBar";

import "./globals.css";
import "react-json-view-lite/dist/index.css";
import Script from "next/script";
import { PresetProvider } from "@/contexts/PresetContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🤫🔍 ZKtools.dev - Zero Knowledge Tools for Developers",
  description: "Zero Knowledge Tools for Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script strategy="beforeInteractive" src="/snarkjs.min.js" />
      </head>
      <body className={inter.className}>
        <NavBar />
        <main id="content">
          <div className="max-w-[85rem] mx-auto min-h-screen bg-white border-x-gray-200 py-10 px-4 sm:px-6 lg:px-8 xl:border-x">
            <PresetProvider>{children}</PresetProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
