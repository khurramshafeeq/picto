// import "primereact/resources/themes/lara-light-indigo/theme.css"; // Choose your theme
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import ScrollToTop from "@/app/_components/ScrollToTop";

import { Work_Sans } from "next/font/google";

const worksans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Home | Portfolio",
  },
  description:
    "A free, responsive personal portfolio template built with Next.js. Perfect for developers and designers.",
  other: {
    "google-site-verification": "hGgJ7ZV9h3yw2n1zthtkDYAPJGaponAGhqWXlFvtPvA",
  },
  keywords: [
    "Next.js portfolio",
    "nextjs",
    "free portfolio template",
    "developer portfolio",
    "personal website",
    "tailwindcss template",
  ],
  authors: [
    { name: "Khurram Shafeeq", url: "https://khurramshafeeq.vercel.app/" },
  ],
  creator: "Khurram Shafeeq",
  publisher: "Khurram Shafeeq",
  metadataBase: new URL("https://khurramshafeeq.vercel.app/"),

  openGraph: {
    title: "Home | Portfolio",
    description:
      "A free, responsive personal portfolio template built with Next.js. Perfect for developers and designers.",
    url: "https://khurramshafeeq.vercel.app/",
    siteName: "Free Picto Portfolio Template",
    images: [
      {
        url: "/og-image.jpg", // stored in public folder
        width: 1920,
        height: 1005,
        alt: "Portfolio Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Home | Portfolio",
    description: "Portfolio of my work",
    creator: "@Khurram_shafeeq",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${worksans.className}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
