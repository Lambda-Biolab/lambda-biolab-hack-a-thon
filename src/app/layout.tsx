import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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

const SITE_URL = "https://lambda-biolab.github.io/lambda-biolab-hack-a-thon";
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const TITLE = "Lambda Hack Basel — May 16–17, 2026";
const DESCRIPTION =
  "Five tracks. One basement. Zero gatekeeping. A scrappy hackathon at the intersection of biology, computation, hardware, and everything else.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Lambda Hack Basel",
    locale: "en_CH",
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
    title: TITLE,
    description: DESCRIPTION,
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
  authors: [{ name: "Lambda Biolab", url: "https://github.com/Lambda-Biolab" }],
  creator: "Lambda Biolab",
  publisher: "Lambda Biolab",
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
