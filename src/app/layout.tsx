import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Om Sonawane | AI Automation & Web Developer",
  description:
    "Portfolio of Om Sonawane, a Computer Engineering Student building AI voice agents, business automation systems, and full-stack web experiences.",
  keywords: [
    "Om Sonawane",
    "AI Voice Agents",
    "Business Automation",
    "Web Developer",
    "Full Stack Developer",
    "Computer Engineering Student",
  ],
  authors: [{ name: "Om Sonawane" }],
  openGraph: {
    title: "Om Sonawane | AI Automation & Web Developer",
    description:
      "Building intelligent solutions for a smarter tomorrow — AI voice agents, automation systems, and modern web development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Sonawane | AI Automation & Web Developer",
    description:
      "Building intelligent solutions for a smarter tomorrow — AI voice agents, automation systems, and modern web development.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-void text-white antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}