import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ExtensionErrorFilter } from "@/components/ExtensionErrorFilter";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hire Gurkha LLC | High-Velocity Software Development & Digital Marketing Agency",
  description:
    "Hire Gurkha LLC delivers engineering precision and high-ROAS digital marketing for startups, SMEs, and enterprises. Built on discipline, speed, and proven results.",
  keywords: [
    "Hire Gurkha",
    "Hire Gurkha LLC",
    "Software Development Agency",
    "Digital Marketing Agency",
    "Custom Web Development",
    "Mobile App Engineering",
    "SEO & PPC Management",
    "DevOps Services",
    "SaaS Product Development",
  ],
  authors: [{ name: "Hire Gurkha LLC" }],
  openGraph: {
    title: "Hire Gurkha LLC | Software Engineering & Digital Growth Agency",
    description:
      "Proof-driven software engineering and strategic performance marketing for ambitious companies worldwide.",
    url: "https://hiregurkha.com",
    siteName: "Hire Gurkha LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Gurkha LLC | Software & Digital Marketing Agency",
    description:
      "Engineering discipline meets performance growth. Web & Mobile Apps, Custom SaaS, SEO & Paid Media.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#F5A800] selection:text-[#161F2C]"
        suppressHydrationWarning
      >
        <ExtensionErrorFilter />
        {children}
      </body>
    </html>
  );
}
