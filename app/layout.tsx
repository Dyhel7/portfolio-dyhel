import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import Intro from "./components/Intro";
import CustomCursor from "./components/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dyhel — Network Engineer Portfolio",
  description:
    "Portofolio Dyhel, NOC Support dan Network Engineer yang mempelajari MikroTik, GPON, FTTH, monitoring jaringan, dan OLT ZTE C320.",
  keywords: [
    "Dyhel",
    "Network Engineer",
    "NOC Support",
    "MikroTik",
    "GPON",
    "FTTH",
    "OLT ZTE C320",
  ],
  authors: [{ name: "Dyhel" }],
  openGraph: {
    title: "Dyhel — Network Engineer Portfolio",
    description:
      "Portofolio Network Engineer, MikroTik, GPON, FTTH, dan NOC Support.",
    type: "website",
    locale: "id_ID",
    siteName: "Dyhel Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
  className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
>
  <CustomCursor />
  <Intro />
  {children}
</body>
    </html>
  );
}