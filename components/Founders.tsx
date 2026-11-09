"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Github, ArrowRight, ArrowUpRight, Radio, Cpu, ShieldCheck } from "lucide-react";
import { COMMUNITY_DATA, Founder } from "@/lib/data";

export default function Founders() {
  const monogramMap: Record<string, { initials: string; icon: typeof Radio; discipline: string }> = {
    "ishaan-chaturvedi": { initials: "IC", icon: Radio, discipline: "01 // RF & DSP" },
    "dhruv-ghoshal": { initials: "DG", icon: Cpu, discipline: "02 // AI & MATH" },
    "keshav-gupta": { initials: "KG", icon: ShieldCheck, discipline: "03 // SILICON & SEC" },
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
        
        {/* Section Header: Luxury Masked Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/25 bg-accent/5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Founding Stewards
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink mb-4 leading-[1.12] tracking-tight">
            The stewards guiding Melerigamy&apos;s research.
          </h2>

          <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed max-w-3xl">
            The founders conduct technical sessions, direct hardware benchwork, and mentor first-year members through their independent prototypes and research papers.
          </p>
        </motion.div>

        {/* 3 Founders: Editorial Luxury Specimen Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {COMMUNITY_DATA.founders.map((f: Founder, idx: number) => {
            const meta = monogramMap[f.id] || { initials: "MG", icon: Cpu, discipline: `0${idx + 1} // TECH` };
            const DisciplineIcon = meta.icon;

            return (
              <motion.article
                key={f.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0e070a]/70 hover:bg-[#130b0e]/90 border border-white/[0.08] hover:border-accent/35 rounded-2xl p-7 sm:p-8 xl:p-9 flex flex-col justify-between gap-8 transition-all duration-500 group shadow-2xl shadow-black/70 backdrop-blur-md relative overflow-hidden"
              >
                {/* Subtle Card Header Rim Light */}
                <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col gap-6">
                  
                  {/* Top Seal & Discipline Marker */}
                  <div className="flex items-center justify-between pb-4 border-b border-border-subtle/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-accent/25 bg-accent/5 flex items-center justify-center font-serif text-sm font-semibold text-accent shadow-[0_0_10px_rgba(223,170,162,0.15)] group-hover:scale-105 transition-transform">
                        {meta.initials}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-accent block">
                          {f.role}
                        </span>
                        <span className="font-mono text-[9px] text-muted tracking-wider uppercase">
                          Steward
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted tracking-widest uppercase">
                      <DisciplineIcon className="w-3.5 h-3.5 text-accent/70" />
                      <span>{meta.discipline}</span>
                    </div>
                  </div>

                  {/* Name & Specialization */}
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-ink group-hover:text-accent transition-colors leading-tight font-normal">
                      {f.name}
                    </h3>
                    <span className="font-mono text-xs text-ink-secondary/80 block mt-1">
                      {f.specialization}
                    </span>
                  </div>

                  {/* Bio Narrative */}
                  <p className="font-sans text-xs sm:text-sm text-ink-secondary/90 leading-relaxed">
                    {f.bio}
                  </p>

                  {/* Research Focus Chips */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest block">
                      Core Investigations
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {f.focusAreas.map((area, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-ink/80 font-mono text-[10px] tracking-wide group-hover:border-white/10 transition-colors"
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
                    className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary hover:text-accent bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-accent/30 px-3.5 py-2 rounded-lg transition-all"
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
                      className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary hover:text-ink bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] px-3.5 py-2 rounded-lg transition-all"
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
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-accent/25 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Laboratory Initiation · Open Intake
              </span>
            </div>

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
