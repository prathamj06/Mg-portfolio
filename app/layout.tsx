import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { PageTransitionProvider } from "@/context/PageTransitionContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melerigamy — Technical Community & Research Guild",
  description: "An unofficial technical collective of 30+ first-year students exploring RF, AI/ML, electronics, mathematics, cybersecurity, and scientific research.",
  icons: {
    icon: "/assets/melerigamy-emblem.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans text-ink bg-bg antialiased selection:bg-accent selection:text-bg">
        <PageTransitionProvider>
          <ScrollProgress />
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </PageTransitionProvider>
      </body>
    </html>
  );
}
