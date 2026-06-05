import type { Metadata } from "next";
import { Libre_Caslon_Text, Open_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-libre-caslon-next",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans-next",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Vishnu Pradeep — Marketer & Creative Strategist",
  description: "   Helping founders and business leaders build brands that scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreCaslon.variable} ${openSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
