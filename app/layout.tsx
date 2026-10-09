import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Oswald } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/contexts/ModeContext";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainOverlay from "@/components/ui/GrainOverlay";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://haresh-sainaath.live";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Haresh Sainaath - Systems-first Engineer",
    template: "%s · Haresh Sainaath",
  },
  description:
    "Portfolio of Haresh Sainaath - AI & ML engineering student building scalable systems with Next.js, React, and modern web tech. Performance-driven, design-aware, product-minded.",
  applicationName: "Haresh Sainaath - Portfolio",
  authors: [{ name: "Haresh Sainaath" }],
  creator: "Haresh Sainaath",
  publisher: "Haresh Sainaath",
  keywords: [
    "Haresh Sainaath",
    "portfolio",
    "Next.js",
    "React",
    "AI engineer",
    "ML engineer",
    "frontend engineer",
    "systems engineering",
    "product engineer",
    "India",
  ],
  category: "technology",
  openGraph: {
    title: "Haresh Sainaath - Systems-first Engineer",
    description:
      "Building scalable systems, not just screens. Performance-driven engineering with Next.js, React, and modern web technologies.",
    url: siteUrl,
    siteName: "Haresh Sainaath",
    images: [
      {
        url: "/thumbnail/generated/llm-forgebot-cover-2026-10.webp",
        width: 1200,
        height: 630,
        alt: "Haresh Sainaath - Systems-first Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haresh Sainaath - Systems-first Engineer",
    description:
      "Building scalable systems, not just screens. Performance-driven engineering with Next.js, React, and modern web technologies.",
    images: ["/thumbnail/generated/llm-forgebot-cover-2026-10.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable}`}
    >
      <body className="antialiased font-sans bg-[#050505] text-white selection:bg-white/20">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <GrainOverlay />
        <SmoothScroll>
          <ModeProvider>
            <CustomCursor />
            <div id="main">{children}</div>
          </ModeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
