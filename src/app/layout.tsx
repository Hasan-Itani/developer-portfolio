import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header, Footer } from "@/components/layout";
import { Motion } from "@/components/motion";
import { site } from "@/content/site";
import "./globals.css";
const geist = localFont({
  src: "./fonts/geist-latin-wght-normal.woff2",
  variable: "--font-body",
  display: "swap",
});
const mono = localFont({
  src: "./fonts/geist-mono-latin-wght-normal.woff2",
  variable: "--font-code",
  display: "swap",
});
const display = localFont({
  src: "./fonts/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-display",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Hasan Itani — Full-Stack Software Engineer",
    template: "%s — Hasan Itani",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hasan Itani — Software & Interaction",
    description: site.description,
    url: site.url,
    siteName: "Hasan Itani",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: process.env.VERCEL_ENV === "production",
    follow: process.env.VERCEL_ENV === "production",
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
      className={`${geist.variable} ${mono.variable} ${display.variable}`}
    >
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Motion>
          <Header />
          {children}
          <Footer />
        </Motion>
      </body>
    </html>
  );
}
