import type { Metadata, Viewport } from "next";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { portfolio } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/metadata";

const siteUrl = getSiteUrl();
const title = "Ardit Avdiu — Full-Stack Developer";
const description =
  "Full-stack developer focused on AI-powered products. Explore Ardit Avdiu’s work across mobile, web, backend systems, and reliable AI applications.";

export const metadata: Metadata = {
  ...(siteUrl
    ? { metadataBase: siteUrl, alternates: { canonical: siteUrl.href } }
    : {}),
  title: { default: title, template: "%s — Ardit Avdiu" },
  description,
  applicationName: "Ardit Avdiu Portfolio",
  authors: [{ name: "Ardit Avdiu", url: portfolio.github }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Ardit Avdiu",
    ...(siteUrl ? { url: siteUrl.href } : {}),
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#111210",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    description,
    ...(siteUrl ? { url: siteUrl.href } : {}),
    sameAs: [portfolio.github, portfolio.linkedin],
    knowsAbout: [
      "Full-stack development",
      "AI-powered applications",
      "React",
      "TypeScript",
      "PostgreSQL",
    ],
  };
  return (
    <html lang="en">
      <body id="top">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
