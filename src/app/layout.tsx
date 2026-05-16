import type { Metadata } from "next";
import { Playfair_Display, Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: "Raghu Organic Farm — Pure. Organic. Fresh.",
  description:
    "Welcome to Raghu Organic Farm. Experience the joy of organic farming, pick fresh produce, and reconnect with nature. Visit our farm or shop our farm-fresh products.",
  keywords: [
    "organic farm",
    "farm visit",
    "organic produce",
    "farm fresh",
    "sustainable farming",
    "raghu farm",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${libre.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
