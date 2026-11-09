"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  X, 
  Linkedin, 
  Github, 
  User, 
  Cpu, 
  ExternalLink,
  ArrowRight,
  Sparkles,
  BookOpen
} from "lucide-react";
import { COMMUNITY_DATA, Member } from "@/lib/data";
import { playHaptic } from "@/lib/audio";
import Footer from "@/components/Footer";

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const domainTabs = [
    { label: "All Cohort (32)", id: "all" },
    { label: "RF & Wireless (6)", id: "rf-wireless" },
    { label: "AI & ML (6)", id: "ai-ml" },
    { label: "Electronics & FPGA (6)", id: "electronics-embedded" },
    { label: "Higher Math (5)", id: "higher-mathematics" },
    { label: "Cybersecurity (5)", id: "cybersecurity-systems" },
    { label: "Scientific Research (5)", id: "scientific-research" },
  ];

  const q = searchQuery.toLowerCase().trim();
  const filteredMembers = COMMUNITY_DATA.members.filter((m) => {
    const matchesDomain = selectedDomain === "all" || m.domainId === selectedDomain;
    const matchesSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.focus.toLowerCase().includes(q) ||
      m.activeProject.toLowerCase().includes(q) ||
      m.skills.some((s) => s.toLowerCase().includes(q));
    return matchesDomain && matchesSearch;
  });

  const handleOpenMember = (m: Member) => {
    setSelectedMember(m);
    playHaptic(640, 0.04);
  };

  const handleCloseMember = () => {
    setSelectedMember(null);
    playHaptic(380, 0.03);
  };

  const stats = [
    { value: "32", label: "Cohort Fellows", desc: "First-year researchers across domains" },
    { value: "06", label: "Core Divisions", desc: "Specialized lab teams" },
    { value: "100%", label: "First-Principles", desc: "Zero prerequisite gatekeeping" },
    { value: "14", label: "Active Deployments", desc: "Collaborative student prototypes" },
  ];

  return (
    <>
      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#080406]">
        {/* Ambient Radial Illumination */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none opacity-25 z-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 35%, rgba(223, 170, 162, 0.22) 0%, rgba(62, 20, 24, 0.45) 50%, transparent 80%)",
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
                <span>Directory</span>
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="max-w-5xl mb-16 sm:mb-20">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-ink mb-6 leading-[1.08] tracking-tight">
              Autonomous student researchers.
            </h1>
            <p className="font-sans text-lg sm:text-2xl text-ink-secondary/95 font-light leading-relaxed max-w-4xl border-l-2 border-accent/40 pl-6 sm:pl-8">
              A directory of 32 first-year undergraduate fellows conducting empirical investigations across radio frequency engineering, machine learning runtimes, discrete mathematics, and physical instrumentation.
            </p>
          </div>

          {/* Metrics Telemetry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="p-5 sm:p-6 rounded-2xl bg-surface/75 border border-white/[0.08] backdrop-blur-md flex flex-col gap-1 shadow-lg shadow-black/40"
              >
                <span className="font-serif text-3xl sm:text-4xl text-accent font-light leading-none">
                  {s.value}
                </span>
                <span className="font-mono text-xs text-ink uppercase tracking-wider mt-2">
                  {s.label}
                </span>
                <span className="text-[11px] text-muted font-sans font-light">
                  {s.desc}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Controls: Domain Filter Tabs & Search Input */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 pb-6 border-b border-white/[0.08]">
            <div className="flex gap-2 flex-wrap" role="tablist" aria-label="Filter Members">
              {domainTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedDomain(tab.id);
                    playHaptic(460, 0.025);
                  }}
                  className={`text-xs font-mono px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                    selectedDomain === tab.id
                      ? "bg-accent/20 text-accent border border-accent/40 font-medium shadow-md shadow-accent/10"
                      : "bg-surface/60 text-muted hover:text-ink border border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search fellows, skills, projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface/80 border border-white/[0.08] text-xs font-mono text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink text-xs font-mono"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Members Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredMembers.map((m, idx) => (
              <motion.article
                key={m.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (idx % 8) * 0.04 }}
                onClick={() => handleOpenMember(m)}
                className="group relative bg-[#0e070a]/90 hover:bg-[#130a0e] border border-white/[0.08] hover:border-accent/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/50 cursor-pointer"
              >
                <div>
                  {/* Top Bar: Domain & Cohort */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="font-mono text-[10px] text-accent tracking-wider uppercase px-2 py-0.5 rounded bg-accent/[0.08] border border-accent/20 truncate max-w-[170px]">
                      {m.domain}
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      {m.cohort}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal group-hover:text-accent transition-colors leading-snug mb-2">
                    {m.name}
                  </h3>

                  {/* Focus */}
                  <p className="font-mono text-xs text-ink-secondary/90 leading-relaxed mb-4">
                    {m.focus}
                  </p>

                  {/* Active Project */}
                  <div className="mb-4 p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                    <span className="text-[10px] font-mono text-muted block mb-0.5 uppercase tracking-wider">
                      Active Deployment:
                    </span>
                    <span className="text-xs font-mono text-accent font-medium line-clamp-1">
                      {m.activeProject}
                    </span>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex gap-1.5 flex-wrap mb-4">
                    {m.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-muted border border-white/[0.06]"
                      >
                        {s}
                      </span>
                    ))}
                    {m.skills.length > 3 && (
                      <span className="text-[10px] font-mono text-muted self-center">
                        +{m.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-accent group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Inspect Dossier</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {m.github && (
                      <a
                        href={m.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-muted hover:text-ink flex items-center justify-center transition-colors"
                        title="GitHub Profile"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-muted hover:text-ink flex items-center justify-center transition-colors"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-mono text-sm text-muted">
                No fellows matched your search criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedDomain("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-accent/15 text-accent border border-accent/30 font-mono text-xs uppercase tracking-wider"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Member Dossier Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseMember}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#110a0d] border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 cursor-default"
            >
              <button
                onClick={handleCloseMember}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-ink hover:text-accent transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
                <span>✦</span>
                <span>{selectedMember.domain} · {selectedMember.cohort}</span>
              </div>

              <h3 className="font-serif text-3xl text-ink font-normal mb-1">
                {selectedMember.name}
              </h3>

              <p className="font-mono text-xs text-accent mb-5">
                {selectedMember.focus}
              </p>

              <p className="text-muted text-sm leading-relaxed mb-6 font-light">
                {selectedMember.bio}
              </p>

              <div className="mb-6 p-3 rounded-xl bg-black/60 border border-white/10">
                <span className="text-[10px] font-mono text-muted block mb-1 uppercase tracking-wider">
                  Active Project Assignment:
                </span>
                <span className="text-sm font-mono text-accent font-medium">
                  {selectedMember.activeProject}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="font-mono text-xs text-muted uppercase tracking-wider">
                  Specialized Technical Competencies
                </h4>
                <div className="flex gap-1.5 flex-wrap">
                  {selectedMember.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 font-mono text-xs text-ink-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-muted">Laboratory Profiles</span>
                <div className="flex items-center gap-2">
                  {selectedMember.github && (
                    <a
                      href={selectedMember.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-ink font-mono text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent font-mono text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
