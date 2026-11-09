"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Maximize2, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  Cpu, 
  Binary, 
  Shield, 
  Atom,
  Layers,
  BookOpen
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { COMMUNITY_DATA, Domain } from "@/lib/data";
import { playHaptic } from "@/lib/audio";

interface DrivePhoto {
  src: string;
  alt: string;
  tag: string;
  title: string;
  desc: string;
}

export default function AboutUsPage() {
  const [selectedImage, setSelectedImage] = useState<DrivePhoto | null>(null);

  // 10 authentic lab photos from Google Drive
  const drivePhotos: DrivePhoto[] = [
    {
      src: "/assets/drive/robotics-chassis.jpg",
      alt: "Autonomous Robotics Rover Chassis & Power Distribution",
      tag: "Plate 01 · Robotics",
      title: "Autonomous Rover Chassis & Power Bus",
      desc: "Custom mechanical rover chassis with dual-actuator suspension, motor drivers, and regulated DC power bus.",
    },
    {
      src: "/assets/drive/digital-circuit-board.jpg",
      alt: "Digital Electronics Logic Prototyping & Test Bench",
      tag: "Plate 02 · Silicon & Logic",
      title: "Logic Circuit Prototyping & Bench Testing",
      desc: "Breadboard verification of digital logic gates, clock generators, and mixed-signal interface circuits.",
    },
    {
      src: "/assets/drive/comm-system-setup.jpg",
      alt: "Communication Systems & RF Receiver Antenna Setup",
      tag: "Plate 03 · RF Communications",
      title: "RF Receiver Antenna & Demodulation Link",
      desc: "Tuned RF communication apparatus for high-frequency signal capture, telemetry extraction, and spectrum analysis.",
    },
    {
      src: "/assets/drive/esp32-module.jpg",
      alt: "ESP32 Custom Embedded Hardware & Microcontroller Unit",
      tag: "Plate 04 · Embedded Systems",
      title: "ESP32 Embedded Firmware & Hardware Platform",
      desc: "Low-power microcontroller unit running custom firmware routines for wireless telemetry and network auditing.",
    },
    {
      src: "/assets/drive/aiot-urban-farm-1.jpg",
      alt: "AIoT Based Urban Hydroponic Farming Rig",
      tag: "Plate 05 · Environmental IoT",
      title: "AIoT Urban Farming & Microclimate Array",
      desc: "Closed-loop automated agricultural rig monitoring soil moisture, nutrient dosers, and environmental temperature.",
    },
    {
      src: "/assets/drive/water-filtration-rig.jpg",
      alt: "Multi-Stage Physical Water Filtration & Purification Rig",
      tag: "Plate 06 · Clean Tech",
      title: "Multi-Stage Water Filtration System",
      desc: "Empirical filtration apparatus evaluating physical sediment filtration, flow rates, and water treatment methods.",
    },
    {
      src: "/assets/drive/water-sensor-kit.jpg",
      alt: "Water Quality Testing Kit & Sensing Instrumentation",
      tag: "Plate 07 · Instrumentation",
      title: "Field Water Quality Testing & Sensor Kit",
      desc: "Portable sensor kit measuring dissolved solids (TDS), pH balance, and electrical conductivity in aqueous solutions.",
    },
    {
      src: "/assets/drive/robotics-rover-mech.jpg",
      alt: "Robotics Rover Wheel Actuator & Drive Mechanism",
      tag: "Plate 08 · Robotics",
      title: "Drive Actuator & Gearbox Integration",
      desc: "Precision mechanical gearing and brushless motor integration for autonomous all-terrain robotics maneuvering.",
    },
    {
      src: "/assets/drive/aiot-urban-farm-2.jpg",
      alt: "AIoT Automated Greenhouse Cultivation Bench",
      tag: "Plate 09 · Automation",
      title: "Automated Greenhouse Telemetry",
      desc: "Sensor deployment for environmental analytics, ambient light logging, and microcontroller closed-loop irrigation.",
    },
    {
      src: "/assets/drive/aqi-dashboard.png",
      alt: "Air Quality Index (AQI) Sensor Telemetry Dashboard",
      tag: "Plate 10 · Telemetry",
      title: "AQI Environmental Telemetry Interface",
      desc: "Real-time air quality index monitoring pipeline logging particulate matter (PM2.5/PM10), VOCs, and atmospheric humidity.",
    },
  ];

  const row1 = drivePhotos.slice(0, 5);
  const row2 = drivePhotos.slice(5, 10);

  const pillars = [
    {
      tenet: "TENET 01",
      title: "First-Principles Inquiry",
      desc: "Demystifying deep engineering without prepackaged black-box abstractions. Fellows construct neural autodiff engines from scratch in C, route impedance-controlled differential RF traces, and synthesize pipelined RISC-V cores from fundamental boolean logic.",
    },
    {
      tenet: "TENET 02",
      title: "Senior Guidance & Research Publishing",
      desc: "Direct apprenticeship on architecting real-world systems. Founders and domain leads conduct weekly paper readings, guide undergraduate members in drafting scientific preprints, and navigate peer-reviewed symposium submissions.",
    },
    {
      tenet: "TENET 03",
      title: "Hands-on Benchwork & Open Hardware",
      desc: "We reject theoretical detachment. All circuit netlists, DSP pipelines, and firmware routines are published publicly. Physical laboratory instruments—oscilloscopes, USRP SDRs, and spectrum analyzers—are accessible to first-year members from day one.",
    },
  ];

  const coreMetrics = [
    { value: "30+", label: "Undergraduate Fellows", sub: "Active across all 6 research domains" },
    { value: "06", label: "Disciplines of Study", sub: "Bridging math, physics & hardware" },
    { value: "14", label: "Open Prototypes", sub: "From SDR radar to edge TinyML" },
    { value: "100%", label: "First-Principles", sub: "Zero-gatekeeping freshman culture" },
  ];

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#080406]">
        {/* Ambient Radial Illumination */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none opacity-25 z-0"
          style={{
            background: "radial-gradient(ellipse 65% 50% at 50% 35%, rgba(223, 170, 162, 0.22) 0%, rgba(62, 20, 24, 0.45) 50%, transparent 80%)",
            filter: "blur(110px)",
          }}
        />

        <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 relative z-10">
          
          {/* Path-based Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em]">
              <li>
                <Link
                  href="/"
                  onClick={() => playHaptic(440, 0.03)}
                  className="text-muted hover:text-accent transition-colors flex items-center gap-1.5 py-1"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-border-strong select-none text-[11px]">/</li>
              <li className="text-accent font-medium py-1">
                <span>About</span>
              </li>
            </ol>
          </nav>

          {/* ========================================================= */}
          {/* 1. HERO SPREAD: IN-DEPTH PHILOSOPHY & FOUNDING ORIGIN    */}
          {/* ========================================================= */}
          <div className="max-w-5xl mb-16 sm:mb-20">

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-ink mb-8 leading-[1.08] tracking-tight">
              An autonomous guild dedicated to deep engineering & empirical science.
            </h1>

            <div className="space-y-6 text-ink-secondary text-base sm:text-xl leading-relaxed font-light max-w-4xl border-l-2 border-accent/40 pl-6 sm:pl-8">
              <p>
                <strong className="text-ink font-medium">Melerigamy</strong> is an unofficial, autonomous student technical collective composed of 30+ undergraduate researchers. Founded by Ishaan Chaturvedi, Dhruv Ghoshal, and Keshav Gupta, the guild was created to dismantle the artificial divide between theoretical science and physical bench engineering.
              </p>
              <p>
                In standard engineering pedagogy, curious students are frequently subjected to years of rote abstractions, disconnected from real instruments and physical circuits until their final year. Melerigamy operates on an inverted model: first-year undergraduates are placed directly in front of software-defined radios, logic analyzers, and automatic differentiation engines from their very first semester.
              </p>
              <p>
                We maintain an unyielding commitment to reproducible science: every schematic, logic synthesis script, and machine learning runtime engineered at our benches is released freely into the open-source commons.
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. ATELIER TELEMETRY & CREDENTIALS MATRIX                 */}
          {/* ========================================================= */}
          <section className="mb-20 sm:mb-24">
            <div className="bg-surface/60 border border-border-subtle rounded-2xl p-8 sm:p-12 backdrop-blur-md shadow-2xl shadow-black/60">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-border-subtle pb-6 mb-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium block mb-1">
                    Atelier Telemetry
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-ink">
                    Empirical Cohort Metrics
                  </h2>
                </div>
                <span className="font-mono text-xs text-muted">
                  Est. 2024 · Autonomous Research Guild
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {coreMetrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col gap-1 p-5 rounded-xl bg-bg/60 border border-border-subtle/80">
                    <span className="font-serif text-4xl sm:text-5xl text-accent font-light leading-none">
                      {m.value}
                    </span>
                    <span className="font-serif text-base text-ink leading-tight mt-2">
                      {m.label}
                    </span>
                    <span className="font-mono text-xs text-muted leading-tight mt-0.5">
                      {m.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 3. THREE CORE OPERATING TENETS                            */}
          {/* ========================================================= */}
          <section className="mb-24 sm:mb-28">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium block mb-2">
                Operational Pedagogy
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink mb-4 leading-tight">
                The Three Pillars of the Atelier.
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Our culture is designed to foster fearless curiosity, intellectual honesty, and tangible hardware mastery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-surface/50 border border-border-subtle hover:border-accent/35 rounded-2xl p-8 sm:p-9 flex flex-col justify-between gap-6 transition-colors shadow-xl shadow-black/40"
                >
                  <div className="flex flex-col gap-3.5">
                    <span className="font-mono text-xs text-accent/80 font-medium tracking-wider">
                      {pillar.tenet}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm text-ink-secondary/90 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-muted">
                    <span>Peer-Verified Benchmark</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* ========================================================= */}
        {/* 4. LAB PHOTO RIBBONS (WITH REDUCED SIDE VIGNETTES!)        */}
        {/* ========================================================= */}
        <section className="w-full my-12 sm:my-16 py-10 bg-[#0b0608]/70 border-y border-white/[0.06] overflow-hidden relative select-none">
          <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
              <span className="text-accent">✦</span>
              <span>Photographic Plates · Real Benchwork & Apparatus</span>
            </div>
            <span className="font-mono text-[11px] text-accent/70 hidden sm:inline-block">
              Click Any Specimen to Inspect High-Res
            </span>
          </div>

          {/* REDUCED SIDE VIGNETTES: Very narrow, subtle edge blend as requested */}
          <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-12 bg-gradient-to-r from-[#080406]/60 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-12 bg-gradient-to-l from-[#080406]/60 to-transparent z-20 pointer-events-none" />

          {/* Row 1: Smooth Infinite Glide */}
          <div className="flex gap-5 sm:gap-7 w-max animate-marquee mb-4 sm:mb-6 hover:[animation-play-state:paused] py-2">
            {[...row1, ...row1, ...row1].map((photo, idx) => (
              <div
                key={`about-row1-${idx}`}
                onClick={() => {
                  setSelectedImage(photo);
                  playHaptic(640, 0.04);
                }}
                className="group relative w-[300px] sm:w-[390px] lg:w-[430px] aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] hover:border-accent/50 transition-all duration-500 shadow-xl shadow-black/80 cursor-pointer shrink-0"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 300px, (max-width: 1200px) 390px, 430px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-mono text-[10px] text-accent tracking-wider uppercase">
                  {photo.tag}
                </div>

                <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-ink/70 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-accent" />
                </div>

                <div className="absolute bottom-3.5 left-4 right-4">
                  <h4 className="font-serif text-sm sm:text-base text-ink font-normal leading-tight group-hover:text-accent transition-colors">
                    {photo.title}
                  </h4>
                  <p className="font-sans text-[11px] text-ink-secondary/75 line-clamp-1 mt-0.5">
                    {photo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Reverse Direction Glide */}
          <div className="flex gap-5 sm:gap-7 w-max animate-marquee-reverse hover:[animation-play-state:paused] py-2">
            {[...row2, ...row2, ...row2].map((photo, idx) => (
              <div
                key={`about-row2-${idx}`}
                onClick={() => {
                  setSelectedImage(photo);
                  playHaptic(640, 0.04);
                }}
                className="group relative w-[300px] sm:w-[390px] lg:w-[430px] aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] hover:border-accent/50 transition-all duration-500 shadow-xl shadow-black/80 cursor-pointer shrink-0"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 300px, (max-width: 1200px) 390px, 430px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-mono text-[10px] text-accent tracking-wider uppercase">
                  {photo.tag}
                </div>

                <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-ink/70 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-accent" />
                </div>

                <div className="absolute bottom-3.5 left-4 right-4">
                  <h4 className="font-serif text-sm sm:text-base text-ink font-normal leading-tight group-hover:text-accent transition-colors">
                    {photo.title}
                  </h4>
                  <p className="font-sans text-[11px] text-ink-secondary/75 line-clamp-1 mt-0.5">
                    {photo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 relative z-10">

          {/* ========================================================= */}
          {/* 5. THE SIX RESEARCH DOMAINS (FULL ACADEMIC COMPENDIUM)    */}
          {/* ========================================================= */}
          <section className="mb-24 sm:mb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-border-subtle pb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium block mb-2">
                  Academic Disciplines
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
                  Six Interconnected Fields of Investigation
                </h2>
              </div>
              <p className="text-muted text-sm sm:text-base max-w-[50ch] leading-relaxed">
                Operating without bureaucratic departmental walls, our fellows link abstract mathematics directly to silicon fabrication and electromagnetic waves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {COMMUNITY_DATA.domains.map((domain, idx) => (
                <article
                  key={domain.id}
                  className="bg-surface/50 border border-border-subtle hover:border-border-strong hover:bg-surface/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between gap-6 transition-all group"
                >
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-accent bg-wine-dark/80 border border-border-wine px-2.5 py-0.5 rounded text-[11px]">
                        {domain.code}
                      </span>
                      <span className="text-muted text-[11px]">Curator: {domain.lead.split(" ")[0]}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-ink leading-snug group-hover:text-accent transition-colors">
                      {domain.name}
                    </h3>

                    <p className="text-ink-secondary text-sm leading-relaxed">
                      {domain.summary}
                    </p>

                    <ul className="flex flex-col gap-1.5 pt-3 border-t border-border-subtle text-xs text-muted font-mono">
                      {domain.keyTopics.slice(0, 3).map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2 truncate">
                          <span className="text-accent">✦</span>
                          <span className="truncate">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-bg border border-border-subtle rounded-lg p-3 flex flex-col gap-1 font-mono text-xs">
                    <span className="text-[10px] text-muted uppercase tracking-wider">{domain.equationLabel}</span>
                    <code className="text-accent text-[11px] truncate">{domain.equation}</code>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ========================================================= */}
          {/* 6. CALL TO ACTION: BROWSE PROJECTS OR INITIATION           */}
          {/* ========================================================= */}
          <section className="bg-surface border border-border-wine/40 rounded-3xl p-8 sm:p-14 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl shadow-black/70">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium block mb-2">
                Laboratory Initiation
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal mb-3">
                Explore our active hardware systems or join the collective.
              </h3>
              <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
                Whether you wish to inspect open-source netlists, audit cryptographic primitives, or participate in our weekly paper reading teardowns, Melerigamy welcomes rigorous inquiry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/#projects"
                onClick={() => playHaptic(640, 0.04)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent hover:text-ink px-6 py-4 rounded-full border border-accent/35 bg-accent/[0.1] hover:bg-accent/[0.2] transition-all"
              >
                <span>View Prototypes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/#join"
                onClick={() => playHaptic(640, 0.04)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-ink hover:text-accent px-6 py-4 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.04] transition-all"
              >
                <span>Initiation Protocol</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#110a0d] border border-white/20 rounded-2xl overflow-hidden shadow-2xl shadow-black p-4 sm:p-5 cursor-default"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full bg-black/75 border border-white/20 flex items-center justify-center text-ink hover:text-accent transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden bg-black/80 border border-white/10">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="pt-4 px-2 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">
                    {selectedImage.tag}
                  </span>
                  <span className="text-border-strong">·</span>
                  <span className="font-mono text-[11px] text-muted">Laboratory Verified Artifact</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal">
                  {selectedImage.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed max-w-2xl">
                  {selectedImage.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
