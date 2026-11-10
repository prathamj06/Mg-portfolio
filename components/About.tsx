"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Maximize2,
  X,
  ArrowRight
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

  // 8 authentic lab photos downloaded directly from Google Drive
  const drivePhotos: DrivePhoto[] = [
    {
      src: "/assets/drive/digital-circuit-board.jpg",
      alt: "Digital Electronics Logic Prototyping & Test Bench",
      tag: "Silicon & Logic",
      title: "Logic Circuit Prototyping & Bench Testing",
      desc: "Breadboard verification of digital logic gates, clock generators, and mixed-signal interface circuits.",
    },
    {
      src: "/assets/drive/comm-system-setup.jpg",
      alt: "Communication Systems & RF Receiver Antenna Setup",
      tag: "RF Communications",
      title: "RF Receiver Antenna & Demodulation Link",
      desc: "Tuned RF communication apparatus for high-frequency signal capture, telemetry extraction, and spectrum analysis.",
    },
    {
      src: "/assets/drive/esp32-module.jpg",
      alt: "ESP32 Custom Embedded Hardware & Microcontroller Unit",
      tag: "Embedded Systems",
      title: "ESP32 Embedded Firmware & Hardware Platform",
      desc: "Low-power microcontroller unit running custom firmware routines for wireless telemetry and network auditing.",
    },
    {
      src: "/assets/drive/aiot-urban-farm-1.jpg",
      alt: "AIoT Based Urban Hydroponic Farming Rig",
      tag: "Environmental IoT",
      title: "AIoT Urban Farming & Microclimate Array",
      desc: "Closed-loop automated agricultural rig monitoring soil moisture, nutrient dosers, and environmental temperature.",
    },
    {
      src: "/assets/drive/water-filtration-rig.jpg",
      alt: "Multi-Stage Physical Water Filtration & Purification Rig",
      tag: "Clean Tech",
      title: "Multi-Stage Water Filtration System",
      desc: "Empirical filtration apparatus evaluating physical sediment filtration, flow rates, and water treatment methods.",
    },
    {
      src: "/assets/drive/water-sensor-kit.jpg",
      alt: "Water Quality Testing Kit & Sensing Instrumentation",
      tag: "Instrumentation",
      title: "Field Water Quality Testing & Sensor Kit",
      desc: "Portable sensor kit measuring dissolved solids (TDS), pH balance, and electrical conductivity in aqueous solutions.",
    },
    {
      src: "/assets/drive/aiot-urban-farm-2.jpg",
      alt: "AIoT Automated Greenhouse Cultivation Bench",
      tag: "Automation",
      title: "Automated Greenhouse Telemetry",
      desc: "Sensor deployment for environmental analytics, ambient light logging, and microcontroller closed-loop irrigation.",
    },
    {
      src: "/assets/drive/aqi-dashboard.png",
      alt: "Air Quality Index (AQI) Sensor Telemetry Dashboard",
      tag: "Telemetry",
      title: "AQI Environmental Telemetry Interface",
      desc: "Real-time air quality index monitoring pipeline logging particulate matter (PM2.5/PM10), VOCs, and atmospheric humidity.",
    },
  ];

  const row1 = drivePhotos.slice(0, 4);
  const row2 = drivePhotos.slice(4, 8);

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
      className="scroll-mt-24 pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 relative overflow-hidden bg-[#080406]"
    >
      {/* Ambient Radial Illumination */}
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] pointer-events-none opacity-25 z-0"
        style={{
          background: "radial-gradient(ellipse 65% 50% at 50% 35%, rgba(223, 170, 162, 0.24) 0%, rgba(62, 20, 24, 0.45) 50%, transparent 80%)",
          filter: "blur(110px)",
        }}
      />
      
      <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* ========================================================= */}
        {/* 1. COMMANDING MAIN HEADLINE & EDITORIAL EXPLAINER SPREAD   */}
        {/* ========================================================= */}
        <div className="max-w-5xl mb-14 sm:mb-18">
          
          {/* MASSIVE HEROIC TITLE: "About Melerigamy" */}
          {/* Added overflow-visible, leading-[1.12], and pb-4/pb-6 so 'g' descender is 100% visible */}
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(3.1rem,7.8vw,8rem)] font-normal text-ink leading-[1.12] sm:leading-[1.15] tracking-[-0.01em] mb-6 select-none overflow-visible"
          >
            <span className="inline-block pt-1 pb-4 sm:pb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f7eae5] to-[#dfaaa2]">
              About Melerigamy
            </span>
          </motion.h2>

          {/* ELEGANT COMPACT EXPLAINER PARAGRAPH */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
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
      <div className="w-full my-6 sm:my-10 py-8 bg-[#0b0608]/70 border-y border-white/[0.06] overflow-hidden relative select-none">
        {/* Gallery Section Label */}
        <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
            <span className="text-accent">✦</span>
            <span>Laboratory Hardware Specimens & Field Artifacts</span>
          </div>
          <span className="font-mono text-[11px] text-accent/70 hidden sm:inline-block">
            8 Laboratory Archives // Hover to Pause
          </span>
        </div>

        {/* Reduced Edge Vignette Masks: Very thin, subtle edge blend */}
        <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-12 bg-gradient-to-r from-[#080406]/60 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-12 bg-gradient-to-l from-[#080406]/60 to-transparent z-20 pointer-events-none" />

        {/* Kinetic Ribbon: Row 1 (Moving Left) */}
        <div className="flex gap-5 sm:gap-7 w-max animate-marquee mb-4 sm:mb-6 hover:[animation-play-state:paused] py-2">
          {[...row1, ...row1, ...row1].map((photo, idx) => (
                        <div
              key={`row1-${idx}`}
              onClick={() => handleOpenPhoto(photo)}
              className="group relative w-[300px] sm:w-[390px] lg:w-[430px] aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0608] border border-white/[0.08] hover:border-accent/50 transition-all duration-700 shadow-xl shadow-black/80 hover:shadow-[0_0_30px_rgba(223,170,162,0.16)] cursor-pointer shrink-0"
            >
              {/* Media Container with Glitch Chroma on Hover */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 300px, (max-width: 1200px) 390px, 430px"
                  className="object-cover transition-all duration-700 ease-out filter grayscale-[80%] sepia-[22%] contrast-[112%] brightness-[84%] group-hover:filter-none group-hover:scale-[1.04]"
                />

                {/* Theme-Matching Wine / Oxblood Color Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#160608]/90 via-[#320f15]/50 to-[#dfaaa2]/20 mix-blend-color transition-opacity duration-700 ease-out group-hover:opacity-0 pointer-events-none" />
                <div className="absolute inset-0 bg-[#3e1418]/30 mix-blend-multiply transition-opacity duration-700 ease-out group-hover:opacity-0 pointer-events-none" />

                {/* Precision Dot-Matrix Halftone */}
                <div className="photo-dot-grid absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out opacity-85 group-hover:opacity-0" />

                {/* Subtle Radial Vignette Flare on Hover */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                  style={{
                    boxShadow: "inset 0 0 24px rgba(223, 170, 162, 0.14)",
                  }}
                />
              </div>

              {/* Bottom Gradient for Text Legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-75 group-hover:opacity-45 transition-opacity duration-700 pointer-events-none z-10" />

              {/* Top Tag Pill */}
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 group-hover:border-accent/40 font-mono text-[10px] text-accent tracking-wider uppercase transition-colors z-20">
                {photo.tag}
              </div>

              {/* Expand Hint Icon */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-ink/70 opacity-0 group-hover:opacity-100 group-hover:border-accent/40 transition-all duration-300 z-20 group-hover:scale-105">
                <Maximize2 className="w-3.5 h-3.5 text-accent" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-3.5 left-4 right-4 z-20">
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
        <div className="flex gap-5 sm:gap-7 w-max animate-marquee-reverse hover:[animation-play-state:paused] py-2">
          {[...row2, ...row2, ...row2].map((photo, idx) => (
                        <div
              key={`row2-${idx}`}
              onClick={() => handleOpenPhoto(photo)}
              className="group relative w-[300px] sm:w-[390px] lg:w-[430px] aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0608] border border-white/[0.08] hover:border-accent/50 transition-all duration-700 shadow-xl shadow-black/80 hover:shadow-[0_0_30px_rgba(223,170,162,0.16)] cursor-pointer shrink-0"
            >
              {/* Media Container with Glitch Chroma on Hover */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 300px, (max-width: 1200px) 390px, 430px"
                  className="object-cover transition-all duration-700 ease-out filter grayscale-[80%] sepia-[22%] contrast-[112%] brightness-[84%] group-hover:filter-none group-hover:scale-[1.04]"
                />

                {/* Theme-Matching Wine / Oxblood Color Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#160608]/90 via-[#320f15]/50 to-[#dfaaa2]/20 mix-blend-color transition-opacity duration-700 ease-out group-hover:opacity-0 pointer-events-none" />
                <div className="absolute inset-0 bg-[#3e1418]/30 mix-blend-multiply transition-opacity duration-700 ease-out group-hover:opacity-0 pointer-events-none" />

                {/* Precision Dot-Matrix Halftone */}
                <div className="photo-dot-grid absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out opacity-85 group-hover:opacity-0" />

                {/* Subtle Radial Vignette Flare on Hover */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                  style={{
                    boxShadow: "inset 0 0 24px rgba(223, 170, 162, 0.14)",
                  }}
                />
              </div>

              {/* Bottom Gradient for Text Legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-75 group-hover:opacity-45 transition-opacity duration-700 pointer-events-none z-10" />

              {/* Top Tag Pill */}
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 group-hover:border-accent/40 font-mono text-[10px] text-accent tracking-wider uppercase transition-colors z-20">
                {photo.tag}
              </div>

              {/* Expand Hint Icon */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-ink/70 opacity-0 group-hover:opacity-100 group-hover:border-accent/40 transition-all duration-300 z-20 group-hover:scale-105">
                <Maximize2 className="w-3.5 h-3.5 text-accent" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-3.5 left-4 right-4 z-20">
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
      {/* 3. MORE BUTTON (REDIRECTS TO DEDICATED ABOUT US PAGE)     */}
      {/* ========================================================= */}
      <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 mt-10 sm:mt-14 flex justify-center relative z-10">
        <Link
          href="/about"
          onClick={() => playHaptic(640, 0.04)}
          className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full border border-accent/35 bg-accent/[0.08] hover:bg-accent/[0.18] hover:border-accent/60 text-ink font-mono text-xs uppercase tracking-[0.22em] transition-all duration-300 group shadow-xl shadow-black/60"
        >
          <span>More About Melerigamy</span>
          <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1.5 transition-transform" />
        </Link>
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
