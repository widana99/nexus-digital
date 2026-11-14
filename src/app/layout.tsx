import type { Metadata, Viewport } from "next";
import { Newsreader, Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  variable: "--font-newsreader",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FBFAF7",
};

export const metadata: Metadata = {
  title: {
    default: "PT Nexus Digital Strategy | Strategi di Balik Setiap Dampak Publik",
    template: "%s | PT Nexus Digital Strategy",
  },
  description:
    "Mitra komunikasi digital strategis yang merancang, mengorkestrasi, dan mengukur kampanye komunikasi publik melalui ekosistem kreator multi-tier dan campaign intelligence.",
  keywords: [
    "komunikasi publik pemerintah",
    "digital public relations",
    "kampanye creator Indonesia",
    "strategi komunikasi digital kementerian",
    "digital strategy Indonesia",
    "GPR Indonesia",
  ],
  icons: {
    icon: [
      { url: "/logos/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/logos/nexus-mark-x.svg", type: "image/svg+xml" },
    ],
    apple: "/logos/favicon-192x192.png",
  },
  openGraph: {
    title: "PT Nexus Digital Strategy | Strategi di Balik Setiap Dampak Publik",
    description:
      "Mitra komunikasi digital strategis yang merancang, mengorkestrasi, dan mengukur kampanye komunikasi publik.",
    url: "https://nexusdigital.id",
    siteName: "PT Nexus Digital Strategy",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${schibsted.variable} ${ibmMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FBFAF7] text-[#161616] flex flex-col font-sans selection:bg-[#031F44] selection:text-[#FBFAF7]">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
