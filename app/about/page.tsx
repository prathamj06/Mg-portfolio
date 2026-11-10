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
    {
      tag: "COMMUNITY",
      value: "100+",
      label: "Engineers Cultivated",
      desc: "Undergraduates trained across hands-on electronics, robotics, and edge computing intensives.",
    },
    {
      tag: "SPECTRUM",
      value: "06",
      label: "Research Horizons",
      desc: "Specialized ateliers spanning high-frequency RF systems to autonomous neural runtime agents.",
    },
    {
      tag: "APPRENTICESHIP",
      value: "1 : 1",
      label: "Senior Stewardship",
      desc: "Dedicated personal mentorship for conference publications, patent filings, and symposium defense.",
    },
    {
      tag: "ACCESS",
      value: "Zero",
      label: "Prerequisites",
      desc: "Curiosity and discipline precede credentials. Every engineer begins directly at the lab bench.",
    },
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
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-ink mb-6 leading-[1.08] tracking-tight">
              Build more than just your CGPA.
            </h1>

            <p className="font-sans text-lg sm:text-2xl text-ink-secondary/95 font-light leading-relaxed max-w-4xl border-l-2 border-accent/40 pl-6 sm:pl-8">
              A collaborative student research lab at Maharaja Surajmal Institute of Technology. We empower curious first-year engineers to construct physical hardware, publish research, and master cutting-edge technologies from Day 1.
            </p>
          </div>

          {/* ========================================================= */}
          {/* 2. ARCHIVAL METRICS LEDGER                                */}
          {/* ========================================================= */}
          <section className="mb-24 sm:mb-32">
            <div className="rounded-2xl bg-[#0c0608]/90 border border-white/[0.08] backdrop-blur-md overflow-hidden shadow-2xl shadow-black/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
                {metrics.map((m, idx) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="p-8 sm:p-9 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors relative"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-[0.25em] text-accent/80 uppercase font-medium">
                          {m.tag}
                        </span>
                        <span className="font-mono text-[10px] text-muted/60">
                          0{idx + 1}
                        </span>
                      </div>

                      <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink font-light tracking-tight group-hover:text-accent transition-colors">
                        {m.value}
                      </div>

                      <div className="font-mono text-xs uppercase tracking-wider text-ink/90 font-medium">
                        {m.label}
                      </div>
                    </div>

                    <p className="font-sans text-xs text-muted leading-relaxed font-light mt-6 pt-5 border-t border-white/[0.06]">
                      {m.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 3. DUAL EDITORIAL MANIFESTO: THE WORKSHOP & THE DOCTRINE  */}
          {/* ========================================================= */}
          <section className="mb-24 sm:mb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-medium block mb-2">
                  Operating Philosophy
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
                  Two Pillars of the Lab
                </h2>
              </div>
              <p className="text-muted text-xs sm:text-sm max-w-[45ch] leading-relaxed font-sans">
                The duality of our culture: relentless private craftsmanship in the workshop, paired with fearless audacity on public stages.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Panel I: The Workshop */}
              <div className="bg-gradient-to-b from-[#0e070a] to-[#0a0507] border border-white/[0.08] hover:border-accent/30 rounded-2xl p-8 sm:p-11 flex flex-col justify-between shadow-2xl shadow-black/70 transition-all duration-300 relative group overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    background: "radial-gradient(circle at 100% 0%, rgba(223, 170, 162, 0.4) 0%, transparent 70%)",
                  }}
                />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-accent uppercase tracking-[0.25em] font-medium">
                      Pillar I · The Workshop
                    </span>
                    <Cpu className="w-4 h-4 text-accent/70" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-ink font-normal leading-snug">
                    Where Software Meets Physical Consequence
                  </h3>

                  <p className="font-sans text-sm sm:text-[15px] text-ink-secondary/90 leading-relaxed font-light">
                    Modern engineering education has largely retreated behind glass screens and abstract simulators. We restore physical tangibility: circuit boards carrying real current, RF waves propagating across open air, and autonomous algorithms bound by microsecond latency. In this lab, theory is only verified when it physically operates.
                  </p>
                </div>

                <div className="space-y-4 pt-8 mt-8 border-t border-white/[0.06] relative z-10">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-lg text-accent/80 font-light italic shrink-0">01</span>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">Empirical Prototyping</h4>
                        <p className="font-sans text-xs text-muted font-light mt-0.5">Rapid transition from schematic capture to custom PCB fabrication and live breadboarding.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-lg text-accent/80 font-light italic shrink-0">02</span>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">Shared Bench Instrumentation</h4>
                        <p className="font-sans text-xs text-muted font-light mt-0.5">Direct undergraduate access to oscilloscopes, logic analyzers, and SDR transceivers.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-lg text-accent/80 font-light italic shrink-0">03</span>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">Independent Inquiries</h4>
                        <p className="font-sans text-xs text-muted font-light mt-0.5">Students formulate real research questions rather than following canned laboratory manuals.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel II: The Doctrine */}
              <div className="bg-gradient-to-b from-[#0e070a] to-[#0a0507] border border-white/[0.08] hover:border-accent/30 rounded-2xl p-8 sm:p-11 flex flex-col justify-between shadow-2xl shadow-black/70 transition-all duration-300 relative group overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    background: "radial-gradient(circle at 100% 0%, rgba(223, 170, 162, 0.4) 0%, transparent 70%)",
                  }}
                />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-accent uppercase tracking-[0.25em] font-medium">
                      Pillar II · The Doctrine
                    </span>
                    <Flame className="w-4 h-4 text-accent/70" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-ink font-normal leading-snug italic">
                    &ldquo;Train Like You Never Win. Play Like You Never Lost.&rdquo;
                  </h3>

                  <p className="font-sans text-sm sm:text-[15px] text-ink-secondary/90 leading-relaxed font-light">
                    During research cycles, we practice unsparing technical discipline—auditing signal traces, reading IEEE transactions, and stress-testing edge failures. Yet when presenting before academic faculties, defense laboratories, or national hackathon juries, our teams execute with calm, uncompromising poise.
                  </p>
                </div>

                <div className="space-y-4 pt-8 mt-8 border-t border-white/[0.06] relative z-10">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-lg text-accent/80 font-light italic shrink-0">01</span>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">Oral Academic Defense</h4>
                        <p className="font-sans text-xs text-muted font-light mt-0.5">Training first-year researchers to defend empirical results at conferences such as ICAIA 2025.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-lg text-accent/80 font-light italic shrink-0">02</span>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">National Platforms</h4>
                        <p className="font-sans text-xs text-muted font-light mt-0.5">Representing MSIT across premier competitive circuits including NCSC, RBVP, and CSIR-NPL.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-lg text-accent/80 font-light italic shrink-0">03</span>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">High-Velocity Sprints</h4>
                        <p className="font-sans text-xs text-muted font-light mt-0.5">Translating multidisciplinary engineering concepts into functional hardware within 36 hours.</p>
                      </div>
                    </div>
                  </div>
                </div>
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
