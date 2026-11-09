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
  X
} from "lucide-react";

export default function About() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    tag: string;
    title: string;
    desc: string;
  } | null>(null);

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

  const galleryImages = [
    {
      src: "/assets/drone-telemetry-h12.jpg",
      alt: "Student wiring quadcopter with handheld H12 ground control telemetry station",
      tag: "Plate 01 · Autonomous Flight",
      title: "H12 Ground Control Station & Quadcopter Integration",
      desc: "Fellow calibrating flight telemetry, ArduPilot mapping pipelines, and motor ESCs on an autonomous aerial platform.",
    },
    {
      src: "/assets/pixhawk-drone-lab.jpg",
      alt: "Close-up of Pixhawk 2.4.8 flight controller and GPS telemetry mast",
      tag: "Plate 02 · Embedded Avionics",
      title: "Pixhawk 2.4.8 Flight Controller & Sensor Bus",
      desc: "Hardware wiring of the auxiliary power distribution, GPS mast, and telemetry modules for high-reliability navigation.",
    },
    {
      src: "/assets/workshop-fabrication-collage.jpg",
      alt: "Laboratory fabrication collage showing angle grinding, power supply wiring, and industrial control panels",
      tag: "Plate 03 · Hardware Fabrication",
      title: "Physical Benchwork & Systems Engineering",
      desc: "Hands-on workshop fabrication: power cabinet harnesses, pneumatic manifold assembly, angle grinding, and control consoles.",
    },
  ];

  const headlineWords = [
    "A", "collaborative", "community", "for", "innovation,",
    "technology,", "and", "academic", "growth."
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-[#080406]"
    >
      {/* Subtle Warm Burgundy Ambient Glow */}
      <div
        className="absolute top-1/3 left-0 -translate-y-1/2 w-[600px] h-[700px] pointer-events-none opacity-20 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 0% 50%, rgba(62, 20, 24, 0.6) 0%, transparent 75%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[600px] pointer-events-none opacity-15 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 100% 50%, rgba(62, 20, 24, 0.5) 0%, transparent 75%)",
          filter: "blur(80px)",
        }}
      />

      <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header: Word-by-Word Scroll Revealing Animation */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/25 bg-accent/5 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              About Melerigamy · Student Community
            </span>
          </motion.div>

          {/* Staggered Word Reveal on Scroll */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-normal text-ink leading-[1.14] tracking-tight">
            {headlineWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0 align-top">
                <motion.span
                  className="inline-block"
                  initial={{ y: "115%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.65,
                    delay: 0.035 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-sans text-base sm:text-lg text-ink-secondary leading-relaxed max-w-3xl"
          >
            Melerigamy is an autonomous student group dedicated to building a strong foundation in applied science, hardware engineering, and real-world problem solving. We bring together curious students across disciplines to collaborate, build meaningful projects, and explore cutting-edge technologies from day one.
          </motion.p>
        </div>

        {/* 2-Column Balanced Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Domains, Pillars, and Redesigned Community Ethos (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Domains We Work On (Clean, No Repetitive Tags, Scroll Reveal) */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-accent/90">
                  Domains We Work On
                </span>
                <span className="h-[1px] flex-1 bg-border-subtle" />
                <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
                  6 Disciplines
                </span>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {domains.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.5, delay: 0.05 * idx, ease: [0.16, 1, 0.3, 1] }}
                      className="p-4 rounded-xl border border-border-subtle bg-surface/40 hover:bg-surface/80 hover:border-accent/30 transition-all duration-300 flex items-center gap-3.5 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
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

            {/* How We Work / Core Pillars */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-accent/90">
                  Our Approach & Foundation
                </span>
                <span className="h-[1px] flex-1 bg-border-subtle" />
              </motion.div>

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

          {/* Right Column: Luxury Architectural Photo Specimen Layout (5 cols) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            
            {/* Gallery Header Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between pb-2 text-[11px] font-mono border-b border-border-subtle"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-subtle" />
                <span className="text-accent tracking-widest uppercase">
                  Benchwork Artifacts
                </span>
              </div>
              <span className="text-muted tracking-wider uppercase text-[10px]">
                3 Lab Plates
              </span>
            </motion.div>

            {/* Primary Hero Image (Quadcopter Wiring & Handheld H12 Telemetry Station) */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(galleryImages[0])}
              className="group relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-black/60 border border-white/10 hover:border-accent/40 transition-all duration-500 shadow-2xl shadow-black/80 cursor-pointer"
            >
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Top Tag Pill */}
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-mono text-[10px] text-accent tracking-wider uppercase">
                {galleryImages[0].tag}
              </div>

              {/* Expand Hint */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-ink/70 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Subtle Overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                <div>
                  <h4 className="font-serif text-sm sm:text-base text-ink font-normal leading-tight">
                    {galleryImages[0].title}
                  </h4>
                  <p className="font-sans text-[11px] text-ink-secondary/80 line-clamp-1 mt-0.5">
                    {galleryImages[0].desc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Secondary Dual-Tile Grid (Pixhawk Close-up & Workshop Fabrication) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              
              {/* Tile 2: Pixhawk Avionics */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedImage(galleryImages[1])}
                className="group relative w-full aspect-square rounded-xl overflow-hidden bg-black/60 border border-white/10 hover:border-accent/40 transition-all duration-500 shadow-xl shadow-black/70 cursor-pointer"
              >
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono text-[9px] text-accent tracking-wider uppercase">
                  Plate 02
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="font-serif text-xs text-ink font-normal block leading-snug">
                    Pixhawk 2.4.8
                  </span>
                  <span className="font-mono text-[9px] text-muted block truncate">
                    Avionics Telemetry
                  </span>
                </div>
              </motion.div>

              {/* Tile 3: Workshop Fabrication Collage */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedImage(galleryImages[2])}
                className="group relative w-full aspect-square rounded-xl overflow-hidden bg-black/60 border border-white/10 hover:border-accent/40 transition-all duration-500 shadow-xl shadow-black/70 cursor-pointer"
              >
                <Image
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono text-[9px] text-accent tracking-wider uppercase">
                  Plate 03
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="font-serif text-xs text-ink font-normal block leading-snug">
                    Hardware Fabrication
                  </span>
                  <span className="font-mono text-[9px] text-muted block truncate">
                    Systems Benchwork
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Subtle Gallery Caption */}
            <div className="pt-2 text-center sm:text-left font-mono text-[10px] text-muted">
              Authentic hardware prototypes and laboratory fabrication by undergraduate fellows.
            </div>

          </div>

        </div>

      </div>

      {/* Componentry-Style Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#120a0d] border border-white/15 rounded-2xl overflow-hidden shadow-2xl shadow-black p-3 sm:p-4 cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-ink hover:text-accent transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden bg-black/80 border border-white/5">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="pt-4 px-2 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">
                    {selectedImage.tag}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-ink font-normal">
                  {selectedImage.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
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
