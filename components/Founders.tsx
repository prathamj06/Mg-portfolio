"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Github, ArrowRight, ArrowUpRight } from "lucide-react";
import { COMMUNITY_DATA, Founder } from "@/lib/data";

export default function Founders() {
  const founderPhotoMap: Record<
    string,
    { image: string; objectPosition: string }
  > = {
    "ishaan-chaturvedi": {
      image: "/assets/founders/ishaan-chaturvedi.jpg",
      objectPosition: "82% 40%",
    },
    "dhruv-ghoshal": {
      image: "/assets/founders/dhruv-ghoshal.jpg",
      objectPosition: "38% 50%",
    },
    "keshav-gupta": {
      image: "/assets/founders/keshav-gupta.jpg",
      objectPosition: "50% 25%",
    },
  };

  return (
    <section id="founders" className="scroll-mt-24 py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-[#080406]">
      {/* Subtle Warm Burgundy Ambient Glow */}
      <div
        className="absolute top-1/4 right-0 w-[550px] h-[650px] pointer-events-none opacity-20 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 100% 50%, rgba(62, 20, 24, 0.6) 0%, transparent 75%)",
          filter: "blur(80px)",
        }}
      />

      <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mb-14 sm:mb-18"
        >
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink mb-4 leading-[1.12] tracking-tight">
            The minds shaping Melerigamy&apos;s engineering and technical craft.
          </h2>

          <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed max-w-3xl">
            The founders lead hands-on hardware builds, run deep engineering intensives, and mentor undergraduate fellows from first-principles inquiry to production-grade physical systems.
          </p>
        </motion.div>

        {/* 3 Founders: Redesigned Specimen Cards (GPU-Accelerated Smooth Performance) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {COMMUNITY_DATA.founders.map((f: Founder, idx: number) => {
            const photo = founderPhotoMap[f.id] || {
              image: "/assets/founders/ishaan-chaturvedi.jpg",
              objectPosition: "center",
            };

            return (
              <motion.article
                key={f.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#0e070a] hover:bg-[#12080d] border border-white/[0.08] hover:border-accent/40 rounded-2xl p-7 sm:p-8 xl:p-9 flex flex-col justify-between gap-7 shadow-xl shadow-black/80 hover:shadow-[0_16px_40px_rgba(0,0,0,0.85),0_0_24px_rgba(223,170,162,0.12)] transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1.5 group relative overflow-hidden transform-gpu"
              >
                {/* Subtle Card Header Rim Light */}
                <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col gap-5">
                  {/* Founder Authentic Photograph Frame with Archival Photo Effect */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/60 border border-white/[0.08] group-hover:border-accent/40 transition-colors shadow-lg">
                    <Image
                      src={photo.image}
                      alt={f.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-all duration-700 ease-out filter grayscale-[80%] sepia-[22%] contrast-[112%] brightness-[84%] group-hover:filter-none group-hover:scale-[1.04]"
                      style={{ objectPosition: photo.objectPosition }}
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

                    {/* Subtle bottom gradient vignette */}
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0e070a] via-[#0e070a]/40 to-transparent pointer-events-none z-10" />
                  </div>

                  {/* Name & Specialization */}
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-ink group-hover:text-accent transition-colors leading-tight font-normal">
                      {f.name}
                    </h3>
                    <span className="font-mono text-xs text-accent/80 block mt-1 tracking-wide">
                      {f.specialization}
                    </span>
                  </div>

                  {/* Bio Narrative */}
                  <p className="font-sans text-xs sm:text-sm text-ink-secondary/90 leading-relaxed font-light">
                    {f.bio}
                  </p>

                  {/* Core Disciplines & Toolchains */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] text-muted uppercase tracking-widest block">
                      Core Disciplines & Toolchains
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {f.focusAreas.map((area, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-ink/80 font-mono text-[10px] tracking-wide group-hover:border-accent/20 transition-colors"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Profiles & Actions */}
                <div className="pt-4 border-t border-border-subtle flex items-center justify-between gap-3">
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary hover:text-accent bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent/35 px-4 py-2 rounded-lg transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-accent" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-muted group-hover:text-accent transition-colors" />
                  </a>

                  {f.github && (
                    <a
                      href={f.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary hover:text-ink bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 px-4 py-2 rounded-lg transition-all"
                      aria-label={`${f.name} GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* LABORATORY INITIATION (Added below founder description)     */}
        {/* ========================================================= */}
        <motion.section
          id="initiation"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 lg:mt-28 scroll-mt-24 bg-gradient-to-br from-[#130b0e] via-[#0d070a] to-[#11080c] border border-border-wine/50 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl shadow-black/80 relative overflow-hidden group"
        >
          {/* Subtle Ambient Radial Flare */}
          <div
            className="absolute top-0 right-0 w-[450px] h-[450px] pointer-events-none opacity-30 z-0"
            style={{
              background:
                "radial-gradient(circle at 100% 0%, rgba(223, 170, 162, 0.25) 0%, transparent 70%)",
            }}
          />

          <div className="max-w-2xl relative z-10 space-y-3">
            <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight">
              Explore our active hardware systems or join the collective.
            </h3>

            <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
              Whether you wish to inspect open-source netlists, audit cryptographic primitives, or participate in our weekly paper reading teardowns, Melerigamy welcomes rigorous inquiry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 relative z-10">
            <Link
              href="mailto:melerigamy.research@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent hover:text-ink px-6 py-3.5 rounded-full border border-accent/35 bg-accent/[0.1] hover:bg-accent/[0.2] transition-all shadow-lg shadow-black/40"
            >
              <span>Initiation Protocol</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="https://github.com/melerigamy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-ink hover:text-accent px-6 py-3.5 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.04] transition-all"
            >
              <span>View Open Netlists</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.section>

      </div>
    </section>
  );
}
