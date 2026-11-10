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
  Radio, 
  Brain, 
  Bot, 
  Leaf, 
  Layers, 
  Award, 
  BookOpen, 
  Users, 
  Flame, 
  Shield 
} from "lucide-react";
import Footer from "@/components/Footer";
import { playHaptic } from "@/lib/audio";

export default function AboutUsPage() {
  const domains = [
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      icon: Brain,
      summary: "Predictive models, neural architectures, computer vision, and edge intelligence running on physical hardware.",
      tags: ["Deep Learning", "Computer Vision", "TinyML"],
      link: "/projects#ai-ml",
    },
    {
      id: "robotics",
      name: "Robotics & Automation",
      icon: Bot,
      summary: "Autonomous mechanical systems, kinematic actuation, closed-loop feedback, and intelligent motor controllers.",
      tags: ["Kinematics", "Autonomous Control", "Sensors & Actuators"],
      link: "/projects",
    },
    {
      id: "drones",
      name: "Drones & UAV Systems",
      icon: Compass,
      summary: "Autonomous flight dynamics, aerial telemetry, custom airframes, and embedded flight stabilization.",
      tags: ["Flight Dynamics", "UAV Telemetry", "Embedded Avionics"],
      link: "/projects",
    },
    {
      id: "rf-wireless",
      name: "RF & Antenna Design",
      icon: Radio,
      summary: "Electromagnetic propagation, antenna design, software-defined radio (SDR), and high-frequency communications.",
      tags: ["Software-Defined Radio", "Antenna Arrays", "Signal Processing"],
      link: "/projects#rf-wireless",
    },
    {
      id: "electronics-iot",
      name: "Electronics, IoT & Silicon",
      icon: Layers,
      summary: "Circuit schematics, multi-layer PCB layout, microcontroller firmware, and connected sensor telemetry.",
      tags: ["PCB Layout", "Microcontrollers", "Industrial IoT"],
      link: "/projects#electronics-embedded",
    },
    {
      id: "sustainability",
      name: "Sustainable & Green Tech",
      icon: Leaf,
      summary: "Clean energy monitoring, automated environmental rigs, urban farming, and microclimate telemetry.",
      tags: ["Clean Tech", "Environmental Sensing", "Closed-Loop Automation"],
      link: "/projects#scientific-research",
    },
  ];

  const highlights = [
    {
      step: "01",
      title: "Hands-on From Day 1",
      desc: "No waiting until your final year to touch hardware. Start building with real microcontrollers, sensors, and radios from your very first week.",
      icon: Cpu,
    },
    {
      step: "02",
      title: "Senior Paper Mentorship",
      desc: "Direct 1-on-1 guidance from seniors on formulating research questions, running empirical tests, and drafting peer-reviewed publications.",
      icon: BookOpen,
    },
    {
      step: "03",
      title: "Hackathons & Honors",
      desc: "Collaborative sprint teams representing MSIT at national symposiums, hackathons, and premier technical competitions.",
      icon: Award,
    },
    {
      step: "04",
      title: "Portfolio That Matters",
      desc: "Graduate beyond pure grades. Build a standout engineering portfolio of tangible prototypes and verified research contributions.",
      icon: Sparkles,
    },
  ];

  const metrics = [
    { value: "Day 1", label: "Hardware Access", desc: "Immediate benchwork" },
    { value: "06", label: "Core Domains", desc: "AI, Robotics, Drones, RF, IoT & Green Tech" },
    { value: "100+", label: "Students Mentored", desc: "Hands-on engineering intensives" },
    { value: "0%", label: "Gatekeeping", desc: "No prior experience required" },
  ];

  return (
    <>
      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#080406]">
        {/* Ambient Warm Burgundy Illumination */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none opacity-25 z-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 35%, rgba(223, 170, 162, 0.22) 0%, rgba(62, 20, 24, 0.45) 50%, transparent 80%)",
            filter: "blur(110px)",
          }}
        />

        <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 relative z-10">
          
          {/* Breadcrumb Navigation */}
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
          {/* 1. HERO SPREAD: STATEMENT OF IDENTITY & ETHOS             */}
          {/* ========================================================= */}
          <div className="max-w-5xl mb-20 sm:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Melerigamy LAB · MSIT New Delhi</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-ink mb-6 leading-[1.08] tracking-tight">
              Build more than just your CGPA.
            </h1>

            <p className="font-sans text-lg sm:text-2xl text-ink-secondary/95 font-light leading-relaxed max-w-4xl border-l-2 border-accent/40 pl-6 sm:pl-8 mb-8">
              A collaborative student research lab at Maharaja Surajmal Institute of Technology. We empower curious first-year engineers to construct physical hardware, publish research, and master cutting-edge technologies from Day 1.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-3.5 py-1.5 rounded-lg bg-surface/70 border border-white/[0.08] text-xs font-mono text-ink-secondary">
                ✦ Zero Prior Experience Required
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-surface/70 border border-white/[0.08] text-xs font-mono text-ink-secondary">
                ✦ First-Principles Mentorship
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-surface/70 border border-white/[0.08] text-xs font-mono text-ink-secondary">
                ✦ Real Lab Benchwork
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. MINIMALIST METRICS MATRIX                              */}
          {/* ========================================================= */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24 sm:mb-32">
            {metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#0e070a] border border-white/[0.08] hover:border-accent/35 transition-colors flex flex-col justify-between shadow-xl shadow-black/60"
              >
                <div>
                  <span className="font-serif text-3xl sm:text-5xl text-accent font-light leading-none block mb-3">
                    {m.value}
                  </span>
                  <span className="font-mono text-xs text-ink uppercase tracking-wider block font-medium">
                    {m.label}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-muted font-sans font-light mt-4 block border-t border-border-subtle pt-3">
                  {m.desc}
                </span>
              </motion.div>
            ))}
          </section>

          {/* ========================================================= */}
          {/* 3. DUAL ETHOS CARDS: THE METHOD & THE MINDSET             */}
          {/* ========================================================= */}
          <section className="mb-24 sm:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Card 1: The Method */}
              <div className="bg-[#0e070a] border border-white/[0.08] hover:border-accent/35 rounded-2xl p-8 sm:p-10 flex flex-col justify-between gap-6 shadow-xl shadow-black/60 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent uppercase tracking-widest font-medium">
                      01 // The Method
                    </span>
                    <Cpu className="w-5 h-5 text-accent/80" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal leading-tight">
                    Hands-On Engineering, Zero Rote Abstraction
                  </h3>
                  <p className="font-sans text-sm text-ink-secondary/90 leading-relaxed font-light">
                    Engineering cannot be learned from slide decks alone. We reject the waiting game: first-year students work directly with microcontrollers, circuit netlists, radio transceivers, and intelligent neural runtimes from their very first semester.
                  </p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-border-subtle text-xs font-mono text-muted">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Real hardware prototyping from Day 1</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Open lab culture with shared components and benches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Focus on practical deployment over textbook memorization</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: The Mindset */}
              <div className="bg-[#0e070a] border border-white/[0.08] hover:border-accent/35 rounded-2xl p-8 sm:p-10 flex flex-col justify-between gap-6 shadow-xl shadow-black/60 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent uppercase tracking-widest font-medium">
                      02 // The Mindset
                    </span>
                    <Flame className="w-5 h-5 text-accent/80" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal leading-tight">
                    Train Like You Never Win. Play Like You Never Lost.
                  </h3>
                  <p className="font-sans text-sm text-ink-secondary/90 leading-relaxed font-light">
                    In the lab, we train with relentless rigor—auditing circuits, reading research papers, and debugging down to the bit. When competing or defending papers on national stages, we execute with fearless confidence.
                  </p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-border-subtle text-xs font-mono text-muted">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Oral defense at symposiums (ICAIA 2025)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>National platforms: NCSC, RBVP & CSIR-NPL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>High-velocity hackathon collaboration sprints</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 4. THE SIX RESEARCH & INNOVATION DOMAINS                  */}
          {/* ========================================================= */}
          <section className="mb-24 sm:mb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium block mb-2">
                  Research Horizons
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
                  Six Domains We Explore
                </h2>
              </div>
              <p className="text-muted text-xs sm:text-sm max-w-[45ch] leading-relaxed font-sans">
                Interdisciplinary teams linking software intelligence directly to physical electronics, flight dynamics, and wireless telemetry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {domains.map((dom) => {
                const DomainIcon = dom.icon;

                return (
                  <Link
                    key={dom.id}
                    href={dom.link}
                    onClick={() => playHaptic(520, 0.02)}
                    className="bg-[#0e070a] border border-white/[0.08] hover:border-accent/40 rounded-2xl p-7 sm:p-8 flex flex-col justify-between gap-6 shadow-xl shadow-black/70 hover:shadow-[0_16px_40px_rgba(0,0,0,0.85),0_0_24px_rgba(223,170,162,0.12)] transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-accent/40 transition-colors">
                        <DomainIcon className="w-5 h-5 text-accent" />
                      </div>

                      <h3 className="font-serif text-2xl text-ink group-hover:text-accent transition-colors leading-tight font-normal">
                        {dom.name}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-ink-secondary/85 leading-relaxed font-light">
                        {dom.summary}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-border-subtle">
                      <div className="flex flex-wrap gap-1.5">
                        {dom.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.06] text-ink/75 font-mono text-[10px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted group-hover:text-accent transition-colors">
                        <span>View Portfolio Work</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* ========================================================= */}
          {/* 5. WHAT MEMBERS EXPERIENCE (THE APPRENTICESHIP ROADMAP)    */}
          {/* ========================================================= */}
          <section className="mb-24 sm:mb-32">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium block mb-2">
                Why Join Us
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink mb-4 leading-tight">
                What You Gain as a Member
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Everything required to transform from an eager freshman into an autonomous, publication-grade systems builder.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item) => {
                const ItemIcon = item.icon;

                return (
                  <div
                    key={item.step}
                    className="p-6 sm:p-7 rounded-2xl bg-[#0e070a] border border-white/[0.08] hover:border-accent/35 transition-colors flex flex-col justify-between gap-6 shadow-xl shadow-black/50"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-accent font-medium">
                          {item.step}
                        </span>
                        <ItemIcon className="w-4 h-4 text-accent/80" />
                      </div>

                      <h3 className="font-serif text-xl text-ink font-normal leading-snug">
                        {item.title}
                      </h3>

                      <p className="font-sans text-xs text-ink-secondary/85 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-muted">
                      <span>Curated Milestone</span>
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ========================================================= */}
          {/* 6. FRESHERS INVITATION CALLOUT CARD                       */}
          {/* ========================================================= */}
          <section className="bg-gradient-to-br from-[#130b0e] via-[#0d070a] to-[#11080c] border border-border-wine/50 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl shadow-black/80 relative overflow-hidden group">
            <div
              className="absolute top-0 right-0 w-[450px] h-[450px] pointer-events-none opacity-30 z-0"
              style={{
                background:
                  "radial-gradient(circle at 100% 0%, rgba(223, 170, 162, 0.25) 0%, transparent 70%)",
              }}
            />

            <div className="max-w-2xl relative z-10 space-y-3.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-accent/15 border border-accent/40 text-accent font-mono text-xs font-medium">
                <span>Invitation to Freshers · No Prior Experience Needed</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-normal leading-tight">
                Your research journey begins here.
              </h2>

              <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed font-light">
                All first-year engineering students who are curious and eager to build are welcome. Whether you wish to design antennae, train intelligent agents, or assemble autonomous robots, Melerigamy LAB is built for you.
              </p>

              <div className="pt-2 text-xs font-mono text-muted space-y-1">
                <p>Melerigamy LAB · Maharaja Surajmal Institute of Technology (MSIT)</p>
                <p>Led by Ishaan Chaturvedi & Core Stewards</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 relative z-10">
              <Link
                href="mailto:melerigamy.research@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent hover:text-ink px-7 py-4 rounded-full border border-accent/40 bg-accent/[0.12] hover:bg-accent/[0.22] transition-all shadow-lg shadow-black/40"
              >
                <span>Connect With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-ink hover:text-accent px-7 py-4 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.04] transition-all"
              >
                <span>Explore Works</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
