import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ContactButton } from "@/components/ui/contact-button";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Craftrank — Rank Higher on Etsy & Grow Your Sales",
  description:
    "Craftrank is a premium SEO agency for Etsy sellers. We deliver more traffic, higher rankings, and sustained revenue growth. Get a free Etsy SEO audit today.",
  keywords: [
    "Craftrank",
    "Etsy SEO agency",
    "Etsy keyword research",
    "Etsy listing optimization",
    "Etsy ads management",
    "Etsy shop growth",
  ],
  openGraph: {
    title: "Craftrank — Rank Higher on Etsy & Grow Your Sales",
    description:
      "Premium Etsy SEO services for sellers who want more traffic, higher rankings, and sustained revenue growth.",
    type: "website",
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
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable}`}
    >
      <body className="font-sans antialiased">
        <Providers>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <ContactButton />
        </Providers>
      </body>
    </html>
  );
}
