"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
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
import Footer from "@/components/Footer";
import { COMMUNITY_DATA, Domain } from "@/lib/data";
import { playHaptic } from "@/lib/audio";

export default function AboutUsPage() {
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

          {/* ========================================================= */}
          {/* 4. THE SIX RESEARCH DOMAINS (FULL ACADEMIC COMPENDIUM)    */}
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

        </div>
      </main>

      <Footer />
    </>
  );
}
