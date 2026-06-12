import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Toaster } from "sonner";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gerdtrust.in"),

  title: "GERD Trust | Gugan Educational and Rural Development Trust",

  description:
    "GERD Trust empowers rural communities through education, healthcare, livelihood support, and environmental sustainability in Pudukkottai District, Tamil Nadu.",

  keywords: [
    "GERD Trust",
    "NGO Tamil Nadu",
    "Pudukkottai Trust",
    "Educational Trust",
    "Rural Development",
    "Charitable Trust",
    "Ponnamaravathy NGO",
  ],

  authors: [{ name: "GERD Trust" }],
  creator: "GERD Trust",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "GERD Trust | Gugan Educational and Rural Development Trust",
    description:
      "GERD Trust empowers rural communities through education, healthcare, livelihood support, and environmental sustainability in Pudukkottai District, Tamil Nadu.",
    url: "https://www.gerdtrust.in",
    siteName: "GERD Trust",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "GERD Trust Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GERD Trust | Gugan Educational and Rural Development Trust",
    description:
      "Building Better Futures Together in Pudukkottai District.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-gray-50 text-slate-900`}
      >
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />


        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={4000}
        />
      </body>
    </html>
  );
}
