import type React from "react"
import type { Metadata } from "next"
import "./globals.css";
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Chaitanya Kumar Jadaun | Enthusiastic B.Tech Student",
  description:
    "Portfolio of Chaitanya Kumar Jadaun, a B.Tech student specializing in Electronics and Communication Engineering (VLSI).",
  keywords: [
    "Chaitanya Kumar Jadaun",
    "B.Tech Student",
    "Web Developer",
    "Electronics and Communication",
    "VLSI",
    "React",
    "Python",
  ],
  authors: [{ name: "Chaitanya Kumar Jadaun" }],
  creator: "Chaitanya Kumar Jadaun",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chaitanyajadaun.vercel.app",
    title: "Chaitanya Kumar Jadaun | Portfolio",
    description:
      "Portfolio of Chaitanya Kumar Jadaun, a B.Tech student specializing in VLSI and Web Development.",
    siteName: "Chaitanya Kumar Jadaun Portfolio",
    images: [
      {
        url: "/favicon.svg",
        width: 512,
        height: 512,
        alt: "Chaitanya Kumar Jadaun Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}