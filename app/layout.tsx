import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sithum-raveesha.vercel.app/"),
  title: "Sithum Raveesha - Portfolio",
  description:
    "Frontend & Mobile App Developer from SriLanka with 2+ years of expertise. Software Engineer. Specializing mobile apps, Web, UX, and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Sithum Raveesha",
    "Next.js",
    "React",
    "ReactNative",
    "Android",
  ],
  openGraph: {
    title: "Sithum Raveesha - Portfolio",
    description:
      "Frontend & Mobile App Developer from SriLanka with 2+ years of expertise. Software Engineer. Specializing mobile apps, Web, UX, and JavaScript technologies.",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "https://sithum-raveesha.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
