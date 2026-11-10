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
      name: "Artificial Intelligence & Machine Learning (AI–ML)",
      icon: Brain,
      summary: "Neural architectures, computer vision, edge AI inference on physical microcontrollers, and intelligent automated decision systems.",
      tags: ["Deep Learning", "Edge AI / TinyML", "Computer Vision"],
      link: "/projects#ai-ml",
    },
    {
      id: "sustainability",
      name: "Sustainable and Green Technologies",
      icon: Leaf,
      summary: "Closed-loop environmental telemetry, automated urban farming rigs, water quality instrumentation, and clean energy monitoring.",
      tags: ["Clean Tech", "Environmental IoT", "Closed-Loop Automation"],
      link: "/projects#scientific-research",
    },
    {
      id: "comm-systems",
      name: "Communication & Signal Processing Systems",
      icon: Radio,
      summary: "Wireless transceiver architectures, digital signal processing (DSP), modulation schemes, and high-frequency telemetry links.",
      tags: ["Signal Processing", "Wireless Comms", "Software-Defined Radio"],
      link: "/projects#rf-wireless",
    },
    {
      id: "antenna-em",
      name: "Antenna Design and Electromagnetics",
      icon: Compass,
      summary: "Electromagnetic wave propagation, planar microstrip antennas, impedance matching networks, and RF simulation modeling.",
      tags: ["Electromagnetics", "Antenna Arrays", "RF Modeling"],
      link: "/projects#rf-wireless",
    },
    {
      id: "robotics-automation",
      name: "Robotics and Intelligent Automation",
      icon: Bot,
      summary: "Autonomous mechanical actuation, kinematics, closed-loop sensor-motor feedback, and intelligent industrial automation rigs.",
      tags: ["Kinematics", "Autonomous Actuation", "Robotic Control"],
      link: "/projects",
    },
    {
      id: "electronics-iot",
      name: "Electronics, IoT & Embedded Systems",
      icon: Layers,
      summary: "Schematic capture, multi-layer PCB design, low-power microcontroller firmware, and connected industrial IoT sensor mesh.",
      tags: ["PCB Layout", "Embedded C/C++", "Industrial IoT"],
      link: "/projects#electronics-embedded",
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
      desc: "Undergraduates trained across hands-on electronics, robotics, and emerging tech intensives.",
    },
    {
      tag: "SPECTRUM",
      value: "06",
      label: "Core Domains",
      desc: "Specialized focus areas spanning AI–ML, RF & antennas, robotics, and green technologies.",
    },
    {
      tag: "APPRENTICESHIP",
      value: "1:1",
      label: "Senior Stewardship",
      desc: "Dedicated personal mentorship for project builds, hackathons, and conference publications.",
    },
    {
      tag: "ACCESS",
      value: "Zero",
      label: "Prerequisites",
      desc: "Curiosity and discipline precede credentials. Every student starts directly at the lab bench.",
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
              An interdisciplinary engineering collective and project incubator at Maharaja Surajmal Institute of Technology. We immerse students in emerging technologies, guiding them step-by-step to build real hardware and software projects, compete in hackathons, and pursue groundbreaking research from Day 1.
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

                      <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink font-light tracking-tight group-hover:text-accent transition-colors whitespace-nowrap shrink-0">
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
          {/* 3. DUAL EDITORIAL MANIFESTO: THE COLLECTIVE & THE DOCTRINE*/}
          {/* ========================================================= */}
          <section className="mb-24 sm:mb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-medium block mb-2">
                  Operating Philosophy
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
                  Two Pillars of the Collective
                </h2>
              </div>
              <p className="text-muted text-xs sm:text-sm max-w-[48ch] leading-relaxed font-sans">
                More than an academic cell: an open collective exposing students to emerging technologies and mentoring them through real-world engineering builds.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Panel I: The Creative Collective */}
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
                      Pillar I · The Creative Collective
                    </span>
                    <Cpu className="w-4 h-4 text-accent/70" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-ink font-normal leading-snug">
                    Emerging Tech Exposure &amp; Guided Project Builds
                  </h3>

                  <p className="font-sans text-sm sm:text-[15px] text-ink-secondary/90 leading-relaxed font-light">
                    Melerigamy is not confined to abstract theory or classroom slides. We are an active technical collective founded to immerse undergraduates in emerging technology domains. Through hands-on senior guidance, students learn to design schematics, solder circuit netlists, write firmware, and turn original ideas into functional hardware and software systems.
                  </p>
                </div>

                <div className="space-y-4 pt-8 mt-8 border-t border-white/[0.06] relative z-10">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-lg text-accent/80 font-light italic shrink-0">01</span>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">Guided Hands-On Builds</h4>
                        <p className="font-sans text-xs text-muted font-light mt-0.5">Step-by-step senior mentorship through circuit design, multi-layer PCB layout, embedded code, and hardware assembly.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-lg text-accent/80 font-light italic shrink-0">02</span>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">Emerging Technical Spaces</h4>
                        <p className="font-sans text-xs text-muted font-light mt-0.5">Demystifying next-gen domains: IoT networks, robotics actuation, software-defined radio, and machine learning models.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-lg text-accent/80 font-light italic shrink-0">03</span>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">Industrial &amp; Practical Exposure</h4>
                        <p className="font-sans text-xs text-muted font-light mt-0.5">Real lab benchwork with shared oscilloscopes, development kits, and prototyping rigs connecting students with industry standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel II: The Competitive & Innovation Doctrine */}
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
                    In the workshop, we maintain relentless humility and craftsmanship—mastering new frameworks, debugging traces down to the bit, and learning through iterations. But when entering external arenas—national hackathons, technical symposiums, or paper defense panels—our teams execute with calm, uncompromising poise.
                  </p>
                </div>

                <div className="space-y-4 pt-8 mt-8 border-t border-white/[0.06] relative z-10">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-lg text-accent/80 font-light italic shrink-0">01</span>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">Hackathons &amp; Sprints</h4>
                        <p className="font-sans text-xs text-muted font-light mt-0.5">High-intensity team collaboration translating multidisciplinary ideas into working prototypes within competitive 36-hour sprints.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-lg text-accent/80 font-light italic shrink-0">02</span>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">Research &amp; Symposium Defense</h4>
                        <p className="font-sans text-xs text-muted font-light mt-0.5">Guiding students to co-author and defend research papers at international IEEE symposiums (ICAIA) and national science platforms (NCSC, RBVP).</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-lg text-accent/80 font-light italic shrink-0">03</span>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-medium">Tangible Portfolio Impact</h4>
                        <p className="font-sans text-xs text-muted font-light mt-0.5">Empowering undergraduates to build demonstrable physical and digital systems that stand far above conventional grade metrics.</p>
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
          <section className="mb-12 sm:mb-16">
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

        </div>
      </main>

      <Footer />
    </>
  );
}
