"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Leaf, 
  Radio, 
  Compass, 
  Bot, 
  Cpu, 
  CheckCircle2,
  Maximize2,
  X,
  ArrowUpRight
} from "lucide-react";
import { playHaptic } from "@/lib/audio";

interface DrivePhoto {
  src: string;
  alt: string;
  tag: string;
  title: string;
  desc: string;
}

export default function About() {
  const [selectedImage, setSelectedImage] = useState<DrivePhoto | null>(null);

  // Curated genuine lab photos downloaded directly from Google Drive
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

  // Split into two counter-scrolling ribbons for a luxury multi-plane cinematic motion
  const row1 = drivePhotos.slice(0, 5);
  const row2 = drivePhotos.slice(5, 10);

  const domains = [
    {
      icon: Sparkles,
      title: "Artificial Intelligence & Machine Learning (AI–ML)",
    },
    {
      icon: Leaf,
      title: "Sustainable & Green Technologies",
    },
    {
      icon: Radio,
      title: "Communication & Signal Processing Systems",
    },
    {
      icon: Compass,
      title: "Antenna Design & Electromagnetics",
    },
    {
      icon: Bot,
      title: "Robotics & Intelligent Automation",
    },
    {
      icon: Cpu,
      title: "Electronics, IoT & Embedded Systems",
    },
  ];

  const pillars = [
    {
      title: "Foundational Learning From Scratch",
      desc: "Demystifying advanced engineering concepts from first principles, providing members with a solid foundation regardless of their starting point.",
    },
    {
      title: "Senior Guidance on Projects & Publishing",
      desc: "Direct mentorship on architecting real-world projects, drafting scientific papers, and navigating peer-reviewed publications.",
    },
    {
      title: "Hands-on Sessions & Collaboration",
      desc: "Regular laboratory prototyping, brainstorming meets, and interdisciplinary teamwork across hardware and software benches.",
    },
    {
      title: "Competitions, Innovations & Publications",
      desc: "Forming dedicated teams for engineering competitions, deep-tech challenges, and developing novel innovations.",
    },
    {
      title: "Early Portfolio & Real-World Exposure",
      desc: "Cultivating a verifiable portfolio of working prototypes, published research, and tangible technical problem-solving experience.",
    },
  ];

  const handleOpenPhoto = (photo: DrivePhoto) => {
    setSelectedImage(photo);
    playHaptic(640, 0.04);
  };

  const handleClosePhoto = () => {
    setSelectedImage(null);
    playHaptic(380, 0.03);
  };

  return (
    <section
      id="about"
      className="scroll-mt-24 pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 relative overflow-hidden bg-[#080406]"
    >
      {/* Ambient Radial Illumination */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[550px] pointer-events-none opacity-25 z-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(223, 170, 162, 0.22) 0%, rgba(62, 20, 24, 0.45) 45%, transparent 80%)",
          filter: "blur(100px)",
        }}
      />
      
      <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* ========================================================= */}
        {/* 1. DOMINANT MAIN HEADLINE: "About Melerigamy"              */}
        {/* ========================================================= */}
        <div className="max-w-5xl mb-16 sm:mb-20">
          
          {/* Subtle Monogram Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/[0.08] mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent font-medium">
              Autonomous Student Research Collective
            </span>
          </motion.div>

          {/* MASSIVE HEROIC TITLE: "About Melerigamy" */}
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.75rem,7.5vw,7.5rem)] font-normal text-ink leading-[0.98] tracking-[-0.01em] mb-8 select-none"
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f7eae5] to-[#dfaaa2]">
              About Melerigamy
            </span>
          </motion.h2>

          {/* ELEGANT COMPACT EXPLAINER PARAGRAPH */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-6 border-l-2 border-accent/40"
          >
            <p className="font-sans text-lg sm:text-2xl text-ink-secondary/95 font-light leading-relaxed max-w-4xl">
              An autonomous, student-led technical collective and research guild. Grounded in first-principles inquiry, 30+ undergraduate fellows bridge abstract mathematics, radio frequency electromagnetics, silicon logic, and physical instrumentation—turning curiosity into verifiable hardware and reproducible science.
            </p>
          </motion.div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* 2. LUXURY KINETIC PHOTO GALLERY (FROM GOOGLE DRIVE)       */}
      {/* ========================================================= */}
      <div className="w-full my-12 sm:my-16 overflow-hidden relative select-none">
        {/* Gallery Section Label */}
        <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
            <span className="text-accent">✦</span>
            <span>Laboratory Hardware Specimens & Field Artifacts</span>
          </div>
          <span className="font-mono text-[11px] text-accent/70 hidden sm:inline-block">
            10 Authentic Plates // Drag or Hover to Pause
          </span>
        </div>

        {/* Soft Architectural Edge Gradient Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-[#080406] via-[#080406]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-[#080406] via-[#080406]/80 to-transparent z-20 pointer-events-none" />

        {/* Kinetic Ribbon: Row 1 (Moving Left) */}
        <div className="flex gap-4 sm:gap-6 w-max animate-marquee mb-4 sm:mb-6 hover:[animation-play-state:paused] py-2">
          {[...row1, ...row1, ...row1].map((photo, idx) => (
            <div
              key={`row1-${idx}`}
              onClick={() => handleOpenPhoto(photo)}
              className="group relative w-[290px] sm:w-[380px] lg:w-[420px] aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] hover:border-accent/50 transition-all duration-500 shadow-xl shadow-black/80 cursor-pointer shrink-0"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 290px, (max-width: 1200px) 380px, 420px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

              {/* Top Tag Pill */}
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-mono text-[10px] text-accent tracking-wider uppercase">
                {photo.tag}
              </div>

              {/* Expand Hint Icon */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-ink/70 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-accent" />
              </div>

              {/* Bottom Details */}
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

        {/* Kinetic Ribbon: Row 2 (Moving Right) */}
        <div className="flex gap-4 sm:gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused] py-2">
          {[...row2, ...row2, ...row2].map((photo, idx) => (
            <div
              key={`row2-${idx}`}
              onClick={() => handleOpenPhoto(photo)}
              className="group relative w-[290px] sm:w-[380px] lg:w-[420px] aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] hover:border-accent/50 transition-all duration-500 shadow-xl shadow-black/80 cursor-pointer shrink-0"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 290px, (max-width: 1200px) 380px, 420px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

              {/* Top Tag Pill */}
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-mono text-[10px] text-accent tracking-wider uppercase">
                {photo.tag}
              </div>

              {/* Expand Hint Icon */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-ink/70 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-accent" />
              </div>

              {/* Bottom Details */}
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
      </div>

      {/* ========================================================= */}
      {/* 3. SUBSTANCE: DISCIPLINES & FOUNDATIONAL PILLARS           */}
      {/* ========================================================= */}
      <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 mt-16 sm:mt-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-18 items-start">
          
          {/* Left Column: 6 Disciplines Overview (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-accent font-medium">
                Core Engineering Disciplines
              </span>
              <span className="h-[1px] flex-1 bg-border-subtle" />
              <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
                6 Frontiers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {domains.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: 0.05 * idx, ease: [0.16, 1, 0.3, 1] }}
                    className="p-4 rounded-xl border border-border-subtle bg-surface/40 hover:bg-surface/80 hover:border-accent/35 transition-all duration-300 flex items-center gap-3.5 group shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-sans text-sm text-ink group-hover:text-accent transition-colors font-medium leading-snug">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 5 Foundational Pillars (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-accent font-medium">
                Our Operating Ethos & Pedagogy
              </span>
              <span className="h-[1px] flex-1 bg-border-subtle" />
            </div>

            <div className="grid grid-cols-1 gap-3">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: 0.05 * idx, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4 rounded-xl border border-border-subtle/80 bg-surface/30 hover:bg-surface/50 transition-colors flex items-start gap-3.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-sans text-sm text-ink font-medium leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="font-sans text-xs text-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* 4. LIGHTBOX MODAL FOR EXPANDED HIGH-RES VIEWING           */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClosePhoto}
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
              {/* Close Button */}
              <button
                onClick={handleClosePhoto}
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
    </section>
  );
}
