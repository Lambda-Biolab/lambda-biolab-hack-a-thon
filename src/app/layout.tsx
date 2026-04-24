import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/config/site";

const themeInitScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.classList.add(t);}catch(e){}`;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400"],
});

const OG_IMAGE = `${site.url}${site.ogImagePath}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: site.locale,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Lambda Hack Basel — May 16–17, 2026. Five tracks. Real lab. Open science.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [OG_IMAGE],
  },
  keywords: [
    "hackathon",
    "Basel",
    "Switzerland",
    "biology",
    "bioengineering",
    "synthetic biology",
    "Lambda Biolab",
    "biohacking",
    "DIY lab",
    "BSL-1",
  ],
  authors: [{ name: site.org.name, url: site.org.github }],
  creator: site.org.name,
  publisher: site.org.name,
};

const csp = [
  "default-src 'self'",
  "img-src 'self' data: https://*.basemaps.cartocdn.com",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "font-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
].join("; ");

const { venue } = site.event;
const address = {
  "@type": "PostalAddress",
  streetAddress: venue.streetAddress,
  postalCode: venue.postalCode,
  addressLocality: venue.addressLocality,
  addressCountry: venue.addressCountry,
};

// JSON-LD structured data for AI search + Google Rich Results.
// Event schema lets the hackathon surface in Event panels, AI Overviews,
// and calendar integrations. Organization schema anchors Lambda Biolab
// as the host with canonical sameAs links.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      "@id": `${site.url}/#event`,
      name: site.name,
      description: site.description,
      startDate: site.event.startDate,
      endDate: site.event.endDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      isAccessibleForFree: true,
      url: site.url,
      image: [OG_IMAGE],
      location: {
        "@type": "Place",
        name: venue.name,
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: venue.coordinates[0],
          longitude: venue.coordinates[1],
        },
      },
      organizer: { "@id": `${site.url}/#organization` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "CHF",
        availability: "https://schema.org/InStock",
        url: site.event.registrationUrl,
        validFrom: "2026-01-01T00:00:00+01:00",
      },
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.org.name,
      description: site.org.tagline,
      url: site.org.website,
      email: site.org.email,
      foundingDate: site.org.foundingYear,
      address,
      sameAs: [site.org.github, site.org.linkedin, site.org.linktree],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <link rel="canonical" href={site.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-t1 font-sans">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
