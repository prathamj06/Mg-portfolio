"use client";

import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Domains from "@/components/Domains";
import Sessions from "@/components/Sessions";
import Founders from "@/components/Founders";
import Directory from "@/components/Directory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Domains />
        <Sessions />
        <Founders />
        <Directory />
      </main>

      <Footer />
    </>
  );
}