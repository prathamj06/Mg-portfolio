"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Maximize2,
  X,
  ArrowRight,
  Radio,
  Cpu,
  Layers,
  Sparkles
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

  // 3 Hero laboratory specimens uploaded from real benchwork
  const featuredSpecimens: DrivePhoto[] = [
    {
      src: "/assets/drone-telemetry-h12.jpg",
      alt: "ArduPilot H12 Ground Control Station & Quadcopter Telemetry",
      tag: "Fig. 01 · Flight Telemetry",
      title: "ArduPilot H12 Ground Station & UAV Telemetry",
      desc: "Real-time dual-joystick ground control station establishing bi-directional telemetry links, GPS coordinates, and flight envelope testing with autonomous quadcopter airframe.",
    },
    {
      src: "/assets/pixhawk-drone-lab.jpg",
      alt: "Pixhawk 2.4.8 Autopilot & GPS Mast Avionics",
      tag: "Fig. 02 · Avionics & Guidance",
      title: "Pixhawk 2.4.8 Autopilot & Sensor Rig",
      desc: "Benchtop calibration of 32-bit Pixhawk flight controller, compass mast, power distribution bus, and brushless ESC harness.",
    },
    {
      src: "/assets/workshop-fabrication-collage.jpg",
      alt: "Workshop Mechatronics & Control Panel Instrumentation",
      tag: "Fig. 03 · Rapid Fabrication",
      title: "Mechatronics, Metalworking & Control Suite",
      desc: "Field fabrication suite featuring pneumatic filtration manifold ducting, high-voltage DIN-rail enclosure wiring, angle grinding, and pilot console instrumentation.",
    },
  ];

  // Authentic lab photos from active benchwork & Google Drive
  const drivePhotos: DrivePhoto[] = [
    ...featuredSpecimens,
    {
      src: "/assets/drive/robotics-chassis.jpg",
      alt: "Autonomous Robotics Rover Chassis & Power Distribution",
      tag: "Plate 04 · Robotics",
      title: "Autonomous Rover Chassis & Power Bus",
      desc: "Custom mechanical rover chassis with dual-actuator suspension, motor drivers, and regulated DC power bus.",
    },
    {
      src: "/assets/drive/digital-circuit-board.jpg",
      alt: "Digital Electronics Logic Prototyping & Test Bench",
      tag: "Plate 05 · Silicon & Logic",
      title: "Logic Circuit Prototyping & Bench Testing",
      desc: "Breadboard verification of digital logic gates, clock generators, and mixed-signal interface circuits.",
    },
    {
      src: "/assets/drive/comm-system-setup.jpg",
      alt: "Communication Systems & RF Receiver Antenna Setup",
      tag: "Plate 06 · RF Communications",
      title: "RF Receiver Antenna & Demodulation Link",
      desc: "Tuned RF communication apparatus for high-frequency signal capture, telemetry extraction, and spectrum analysis.",
    },
    {
      src: "/assets/drive/esp32-module.jpg",
      alt: "ESP32 Custom Embedded Hardware & Microcontroller Unit",
      tag: "Plate 07 · Embedded Systems",
      title: "ESP32 Embedded Firmware & Hardware Platform",
      desc: "Low-power microcontroller unit running custom firmware routines for wireless telemetry and network auditing.",
    },
    {
      src: "/assets/drive/aiot-urban-farm-1.jpg",
      alt: "AIoT Based Urban Hydroponic Farming Rig",
      tag: "Plate 08 · Environmental IoT",
      title: "AIoT Urban Farming & Microclimate Array",
      desc: "Closed-loop automated agricultural rig monitoring soil moisture, nutrient dosers, and environmental temperature.",
    },
    {
      src: "/assets/drive/water-filtration-rig.jpg",
      alt: "Multi-Stage Physical Water Filtration & Purification Rig",
      tag: "Plate 09 · Clean Tech",
      title: "Multi-Stage Water Filtration System",
      desc: "Empirical filtration apparatus evaluating physical sediment filtration, flow rates, and water treatment methods.",
    },
    {
      src: "/assets/drive/water-sensor-kit.jpg",
      alt: "Water Quality Testing Kit & Sensing Instrumentation",
      tag: "Plate 10 · Instrumentation",
      title: "Field Water Quality Testing & Sensor Kit",
      desc: "Portable sensor kit measuring dissolved solids (TDS), pH balance, and electrical conductivity in aqueous solutions.",
    },
    {
      src: "/assets/drive/robotics-rover-mech.jpg",
      alt: "Robotics Rover Wheel Actuator & Drive Mechanism",
      tag: "Plate 11 · Robotics",
      title: "Drive Actuator & Gearbox Integration",
      desc: "Precision mechanical gearing and brushless motor integration for autonomous all-terrain robotics maneuvering.",
    },
    {
      src: "/assets/drive/aiot-urban-farm-2.jpg",
      alt: "AIoT Automated Greenhouse Cultivation Bench",
      tag: "Plate 12 · Automation",
      title: "Automated Greenhouse Telemetry",
      desc: "Sensor deployment for environmental analytics, ambient light logging, and microcontroller closed-loop irrigation.",
    },
    {
      src: "/assets/drive/aqi-dashboard.png",
      alt: "Air Quality Index (AQI) Sensor Telemetry Dashboard",
      tag: "Plate 13 · Telemetry",
      title: "AQI Environmental Telemetry Interface",
      desc: "Real-time air quality index monitoring pipeline logging particulate matter (PM2.5/PM10), VOCs, and atmospheric humidity.",
    },
  ];

  const row1 = drivePhotos.slice(0, 7);
  const row2 = drivePhotos.slice(7);

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
        {/* 1. EDITORIAL SPREAD: PROSE & AUTHENTIC HARDWARE SPECIMENS */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start mb-16 sm:mb-24">
          
          {/* Left Column (5 Cols): Typography & Research Tenets */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/25 bg-accent/5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  The Research Collective
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-[clamp(2.75rem,5.5vw,5.5rem)] font-normal text-ink leading-[1.08] tracking-tight mb-6">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f7eae5] to-[#dfaaa2]">
                  About Melerigamy
                </span>
              </h2>

              {/* Explainer Quote */}
              <div className="relative pl-5 border-l-2 border-accent/40 mb-8">
                <p className="font-sans text-base sm:text-lg text-ink-secondary/95 font-light leading-relaxed">
                  An autonomous, student-led technical collective and research guild. Grounded in first-principles inquiry, 30+ undergraduate fellows bridge abstract mathematics, radio frequency electromagnetics, silicon logic, and physical instrumentation—turning curiosity into verifiable hardware and reproducible science.
                </p>
              </div>

              {/* Research Tenets Pills */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-accent/30 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Radio className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">
                      01 // RF & Electromagnetics
                    </h4>
                    <p className="font-sans text-xs text-ink-secondary/80 mt-0.5 leading-relaxed">
                      Custom receiver chains, satellite telemetry capture, and spectrum demodulation down to baseband.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-accent/30 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">
                      02 // Autonomous Avionics
                    </h4>
                    <p className="font-sans text-xs text-ink-secondary/80 mt-0.5 leading-relaxed">
                      ArduPilot flight envelopes, Pixhawk guidance controllers, and custom airframe telemetry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-accent/30 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">
                      03 // Rapid Fabrication & Metalwork
                    </h4>
                    <p className="font-sans text-xs text-ink-secondary/80 mt-0.5 leading-relaxed">
                      DIN rail switchgear assemblies, custom pneumatic manifolds, and structural metalwork.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Read Monograph Link */}
            <div>
              <Link
                href="/about"
                onClick={() => playHaptic(640, 0.04)}
                className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-accent hover:text-ink px-6 py-3.5 rounded-full border border-accent/35 bg-accent/[0.08] hover:bg-accent/[0.18] hover:border-accent/60 transition-all group"
              >
                <span>Read Full Monograph</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column (7 Cols): Luxury Specimen Composition */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-5 sm:gap-6"
          >
            {/* Top Primary Featured Specimen: Drone Telemetry H12 */}
            <div
              onClick={() => handleOpenPhoto(featuredSpecimens[0])}
              className="group relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.1] hover:border-accent/50 transition-all duration-500 shadow-2xl shadow-black/90 cursor-pointer"
            >
              <Image
                src={featuredSpecimens[0].src}
                alt={featuredSpecimens[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10 opacity-75 group-hover:opacity-60 transition-opacity" />

              {/* Top Meta Pill */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-black/75 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 font-mono text-[10px] text-accent tracking-widest uppercase">
                  {featuredSpecimens[0].tag}
                </span>
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-mono text-[10px] text-ink-secondary/80 tracking-wider uppercase hidden sm:inline-block">
                  ArduPilot Ground Console
                </span>
              </div>

              {/* Expand Hint Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-accent" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-center gap-2 text-accent/80 font-mono text-[10px] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Live Field Telemetry & UAV Envelope</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal leading-tight group-hover:text-accent transition-colors">
                  {featuredSpecimens[0].title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ink-secondary/85 line-clamp-2 mt-1 max-w-xl">
                  {featuredSpecimens[0].desc}
                </p>
              </div>
            </div>

            {/* Bottom Two Paired Secondary Specimens (Side by Side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Secondary Specimen 1: Pixhawk Flight Controller */}
              <div
                onClick={() => handleOpenPhoto(featuredSpecimens[1])}
                className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] hover:border-accent/50 transition-all duration-500 shadow-2xl shadow-black/90 cursor-pointer"
              >
                <Image
                  src={featuredSpecimens[1].src}
                  alt={featuredSpecimens[1].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 opacity-75 group-hover:opacity-60 transition-opacity" />

                {/* Top Meta Pill */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-mono text-[9px] text-accent tracking-widest uppercase">
                  {featuredSpecimens[1].tag}
                </div>

                {/* Expand Hint Icon */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-accent" />
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h4 className="font-serif text-base sm:text-lg text-ink font-normal leading-tight group-hover:text-accent transition-colors">
                    {featuredSpecimens[1].title}
                  </h4>
                  <p className="font-sans text-[11px] text-ink-secondary/75 line-clamp-2 mt-1">
                    {featuredSpecimens[1].desc}
                  </p>
                </div>
              </div>

              {/* Secondary Specimen 2: Workshop Metalwork & Controls Collage */}
              <div
                onClick={() => handleOpenPhoto(featuredSpecimens[2])}
                className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] hover:border-accent/50 transition-all duration-500 shadow-2xl shadow-black/90 cursor-pointer"
              >
                <Image
                  src={featuredSpecimens[2].src}
                  alt={featuredSpecimens[2].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 opacity-75 group-hover:opacity-60 transition-opacity" />

                {/* Top Meta Pill */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-mono text-[9px] text-accent tracking-widest uppercase">
                  {featuredSpecimens[2].tag}
                </div>

                {/* Expand Hint Icon */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-accent" />
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h4 className="font-serif text-base sm:text-lg text-ink font-normal leading-tight group-hover:text-accent transition-colors">
                    {featuredSpecimens[2].title}
                  </h4>
                  <p className="font-sans text-[11px] text-ink-secondary/75 line-clamp-2 mt-1">
                    {featuredSpecimens[2].desc}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* 2. LUXURY KINETIC PHOTO GALLERY (13 AUTHENTIC PLATES)     */}
      {/* ========================================================= */}
      <div className="w-full my-6 sm:my-10 py-8 bg-[#0b0608]/70 border-y border-white/[0.06] overflow-hidden relative select-none">
        {/* Gallery Section Label */}
        <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
            <span className="text-accent">✦</span>
            <span>Laboratory Hardware Specimens & Field Artifacts</span>
          </div>
          <span className="font-mono text-[11px] text-accent/70 hidden sm:inline-block">
            13 Authentic Plates // Hover to Pause
          </span>
        </div>

        {/* Edge Vignette Masks: Thin, subtle edge blend */}
        <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-12 bg-gradient-to-r from-[#080406]/60 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-12 bg-gradient-to-l from-[#080406]/60 to-transparent z-20 pointer-events-none" />

        {/* Kinetic Ribbon: Row 1 (Moving Left) */}
        <div className="flex gap-5 sm:gap-7 w-max animate-marquee mb-4 sm:mb-6 hover:[animation-play-state:paused] py-2">
          {[...row1, ...row1, ...row1].map((photo, idx) => (
            <div
              key={`row1-${idx}`}
              onClick={() => handleOpenPhoto(photo)}
              className="group relative w-[300px] sm:w-[390px] lg:w-[430px] aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] hover:border-accent/50 transition-all duration-500 shadow-xl shadow-black/80 cursor-pointer shrink-0"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 390px, 430px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

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
        <div className="flex gap-5 sm:gap-7 w-max animate-marquee-reverse hover:[animation-play-state:paused] py-2">
          {[...row2, ...row2, ...row2].map((photo, idx) => (
            <div
              key={`row2-${idx}`}
              onClick={() => handleOpenPhoto(photo)}
              className="group relative w-[300px] sm:w-[390px] lg:w-[430px] aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] hover:border-accent/50 transition-all duration-500 shadow-xl shadow-black/80 cursor-pointer shrink-0"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 390px, 430px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

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
