import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Partnero — Sales Systems for Real Estate Growth",
    template: "%s | Partnero",
  },
  description:
    "Partnero helps builders manage leads, improve follow-ups, run marketing operations, and convert more buyers into bookings. Real estate growth partner India.",
  keywords: [
    "real estate sales management company",
    "builder lead management India",
    "builder sales outsourcing Chennai",
    "real estate growth partner India",
  ],
  openGraph: {
    title: "Partnero — Sales Systems for Real Estate Growth",
    description:
      "We help builders manage leads, improve follow-ups, and convert more buyers into bookings.",
    url: "https://www.partner-o.com/",
    siteName: "Partnero",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
