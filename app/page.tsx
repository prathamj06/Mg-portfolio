"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Founders from "@/components/Founders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Founders />
      </main>

      <Footer />
    </>
  );
}
