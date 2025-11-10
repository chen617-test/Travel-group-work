import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guidy - Your Travel Guide",
  description: "Discover curated travel experiences and connect with local guides for authentic journeys across China.",
  keywords: ["Guidy", "Travel", "Local Guides", "Tourism", "China Travel", "Travel Planning"],
  authors: [{ name: "Guidy Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Guidy - Your Travel Guide",
    description: "Discover curated travel experiences and connect with local guides",
    url: "https://guidy.com",
    siteName: "Guidy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guidy - Your Travel Guide",
    description: "Discover curated travel experiences and connect with local guides",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
