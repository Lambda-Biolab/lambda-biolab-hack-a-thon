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

export const metadata: Metadata = {
  title: "Lambda Hack Basel — May 16–17, 2026",
  description:
    "Five tracks. One basement. Zero gatekeeping. A scrappy hackathon at the intersection of biology, computation, hardware, and everything else.",
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
      <body className="min-h-full flex flex-col bg-bg text-t1 font-sans">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
