import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/root/footer";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/root/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arhum Yasin | Portfolio",
  description: "Frontend Developer portfolio of Arhum Yasin showcasing modern UI, React, Next.js, Tailwind CSS, animations, and responsive web experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      {/* <head>
        <link rel="icon" href="./Myicon.png" />
      </head> */}
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
