"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Sessions from "@/components/Sessions";
import Founders from "@/components/Founders";
import Directory from "@/components/Directory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Sessions />
        <Founders />
        <Directory />
      </main>

      <Footer />
    </>
  );
}
