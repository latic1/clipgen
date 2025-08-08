import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "ClipGen - AI-Powered Video Clipping Platform",
  description: "Transform long videos into viral clips automatically. Upload or paste YouTube links to generate engaging short-form content with AI-powered speaker detection and styled subtitles.",
  keywords: ["video clipping", "AI video editing", "podcast clips", "YouTube to TikTok", "video automation", "content creation"],
  authors: [{ name: "ClipGen" }],
  creator: "ClipGen",
  publisher: "ClipGen",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clipgen.ai",
    title: "ClipGen - AI-Powered Video Clipping Platform",
    description: "Transform long videos into viral clips automatically. Upload or paste YouTube links to generate engaging short-form content.",
    siteName: "ClipGen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClipGen - AI Video Clipping Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClipGen - AI-Powered Video Clipping Platform",
    description: "Transform long videos into viral clips automatically with AI.",
    images: ["/og-image.png"],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  manifest: "/site.webmanifest",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
