import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // Update with your actual domain
  title: {
    default: "Carl Åberg | Full Stack Developer",
    template: "%s | Carl Åberg"
  },
  description: "Full Stack Developer specializing in React, Next.js, and TypeScript. Former chef turned developer, creating efficient and user-friendly web applications.",
  keywords: ["Carl Åberg", "Full Stack Developer", "React", "Next.js", "TypeScript", "Web Developer", "Portfolio", "Front-end Developer"],
  authors: [{ name: "Carl Åberg", url: "https://your-domain.com" }],
  creator: "Carl Åberg",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Carl Åberg Portfolio",
    title: "Carl Åberg | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and TypeScript. Former chef turned developer, creating efficient and user-friendly web applications.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Carl Åberg - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carl Åberg | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and TypeScript. Former chef turned developer.",
    images: ["/opengraph-image"],
    creator: "@yourtwitterhandle", // Update with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const finalTheme = theme || systemTheme;
                if (finalTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
