"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ExternalLink, 
  Search, 
  Cpu, 
  Radio, 
  Bot, 
  Leaf, 
  Layers, 
  Compass, 
  Brain, 
  Sparkles,
  GitBranch,
  ArrowRight,
  ArrowUpRight,
  SlidersHorizontal,
  CheckCircle2
} from "lucide-react";
import { COMMUNITY_DATA, Project } from "@/lib/data";
import { playHaptic } from "@/lib/audio";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: `All Systems (${COMMUNITY_DATA.projects.length})`, id: "all" },
    { label: "AI & Machine Learning", id: "ai-ml" },
    { label: "Sustainable & Green Tech", id: "sustainable-tech" },
    { label: "Communication & Signal Processing", id: "communication-dsp" },
    { label: "Antenna Design & Electromagnetics", id: "antenna-electromagnetics" },
    { label: "Robotics & Intelligent Automation", id: "robotics-automation" },
    { label: "Electronics, IoT & Embedded", id: "electronics-embedded" },
  ];

  // Hash synchronization
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        if (filters.some((f) => f.id === hash)) {
          setActiveFilter(hash);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const q = searchQuery.toLowerCase().trim();
  const filteredProjects = COMMUNITY_DATA.projects.filter((p) => {
    const matchesFilter =
      activeFilter === "all" ||
      p.domainId === activeFilter ||
      (activeFilter === "antenna-electromagnetics" &&
        p.tags.some((t) => t.toLowerCase().includes("antenna") || t.toLowerCase().includes("radar"))) ||
      (activeFilter === "ai-ml" &&
        p.tags.some((t) => t.toLowerCase().includes("ai") || t.toLowerCase().includes("jetson")));

    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.domain.toLowerCase().includes(q) ||
      p.lead.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.abstract.toLowerCase().includes(q) ||
      Object.values(p.technicalSpecs).some((v) => v.toLowerCase().includes(q));

    return matchesFilter && matchesQuery;
  });

  const handleOpenModal = (p: Project) => {
    setSelectedProject(p);
    playHaptic(640, 0.04);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    playHaptic(380, 0.03);
  };

  const stats = [
    { tag: "INVENTORY", value: `${COMMUNITY_DATA.projects.length}`, label: "Engineered Systems", desc: "Physical laboratory builds & deployable firmware" },
    { tag: "SPECTRUM", value: "06", label: "Core Disciplines", desc: "AI, Green Tech, DSP, Antennas, Robotics, IoT" },
    { tag: "INTEGRITY", value: "100%", label: "Open Science", desc: "Public schematics, BOMs, codebases & docs" },
    { tag: "MENTORSHIP", value: "1:1", label: "Apprentice Model", desc: "First-principles guidance directly from day one" },
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
                <span>Projects</span>
              </li>
            </ol>
          </nav>

          {/* Page Hero Header */}
          <div className="max-w-5xl mb-16 sm:mb-20">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-ink mb-6 leading-[1.08] tracking-tight">
              Hardware Prototypes &amp; Systems.
            </h1>
            <p className="font-sans text-lg sm:text-2xl text-ink-secondary/95 font-light leading-relaxed max-w-4xl border-l-2 border-accent/40 pl-6 sm:pl-8">
              An open-access engineering catalog of 13 verified physical builds, high-frequency RF apparatuses, autonomous robotics, and edge AI architectures developed by Melerigamy fellows at MSIT.
            </p>
          </div>

          {/* Archival Metrics Telemetry Ledger */}
          <section className="mb-16 sm:mb-20">
            <div className="rounded-2xl bg-[#0c0608]/90 border border-white/[0.08] backdrop-blur-md overflow-hidden shadow-2xl shadow-black/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
                {stats.map((s, idx) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                    className="p-7 sm:p-8 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-[0.25em] text-accent/80 uppercase font-medium">
                          {s.tag}
                        </span>
                        <span className="font-mono text-[10px] text-muted/60">
                          0{idx + 1}
                        </span>
                      </div>

                      <div className="font-serif text-4xl sm:text-5xl text-ink font-light tracking-tight group-hover:text-accent transition-colors whitespace-nowrap shrink-0">
                        {s.value}
                      </div>

                      <div className="font-mono text-xs uppercase tracking-wider text-ink/90 font-medium">
                        {s.label}
                      </div>
                    </div>

                    <p className="font-sans text-xs text-muted leading-relaxed font-light mt-5 pt-4 border-t border-white/[0.06]">
                      {s.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Controls: Domain Filter Tabs & Live Search Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 pb-6 border-b border-white/[0.08]">
            {/* Filter Pills */}
            <div className="flex gap-2 flex-wrap" role="tablist" aria-label="Filter Projects">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setActiveFilter(f.id);
                    playHaptic(460, 0.025);
                  }}
                  className={`text-xs font-mono px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                    activeFilter === f.id
                      ? "bg-accent/20 text-accent border border-accent/40 font-medium shadow-md shadow-accent/10"
                      : "bg-[#0e070a] text-muted hover:text-ink border border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Live Search & Count */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <span className="hidden sm:inline-block font-mono text-[11px] text-muted whitespace-nowrap">
                {filteredProjects.length} / {COMMUNITY_DATA.projects.length} Systems
              </span>

              <div className="relative w-full lg:w-80">
                <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Filter by IC, sensor, protocol..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#0e070a] border border-white/[0.08] text-xs font-mono text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent/50 transition-colors"
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
          </div>

          {/* Exhibition Project Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((p, idx) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (idx % 6) * 0.05 }}
                className="group relative bg-[#0e070a] hover:bg-[#12080d] border border-white/[0.08] hover:border-accent/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/70 hover:shadow-[0_16px_40px_rgba(0,0,0,0.85),0_0_24px_rgba(223,170,162,0.12)]"
              >
                <div>
                  {/* Photo Frame (if available) */}
                  {p.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black/60 border border-white/[0.06] mb-5">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover grayscale contrast-110 opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e070a] via-transparent to-transparent opacity-90" />
                      <div className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-black/70 border border-white/10 text-accent backdrop-blur-sm">
                        Lab Artifact
                      </div>
                    </div>
                  )}

                  {/* Top Bar: Domain Code & Status */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-mono text-[10px] text-accent tracking-widest uppercase px-2.5 py-1 rounded-md bg-accent/[0.1] border border-accent/25">
                      {p.domain}
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      {p.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal mb-3 group-hover:text-accent transition-colors leading-snug">
                    {p.title}
                  </h3>

                  {/* Abstract / Engineering Description */}
                  <p className="text-muted text-xs sm:text-sm font-sans font-light leading-relaxed mb-6 line-clamp-3">
                    {p.abstract}
                  </p>

                  {/* Technical Specs Key-Value Table */}
                  <div className="rounded-xl bg-black/40 border border-white/[0.05] p-3.5 mb-6 space-y-2 font-mono text-[11px]">
                    {Object.entries(p.technicalSpecs).slice(0, 3).map(([key, val]) => (
                      <div key={key} className="flex items-center justify-between gap-2 border-b border-white/[0.04] pb-1.5 last:border-0 last:pb-0">
                        <span className="text-muted capitalize">
                          {key.replace(/([A-Z])/g, " $1")}:
                        </span>
                        <span className="text-accent/90 font-medium text-right truncate max-w-[55%]">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tag Chips */}
                  <div className="flex gap-1.5 flex-wrap mb-6">
                    {p.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-muted border border-white/[0.06]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(p)}
                    className="font-mono text-xs uppercase tracking-wider text-accent hover:text-ink flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      playHaptic(520, 0.02);
                    }}
                    className="text-muted hover:text-ink transition-colors flex items-center gap-1.5 text-xs font-mono"
                    title="Open GitHub Repository"
                  >
                    <span>Repository</span>
                    <ExternalLink className="w-3 h-3 text-accent/80" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-24 text-center rounded-2xl bg-[#0c0608] border border-white/[0.08] p-8">
              <p className="font-mono text-sm text-muted">
                No systems found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-5 py-2.5 rounded-full bg-accent/15 text-accent border border-accent/30 font-mono text-xs uppercase tracking-wider hover:bg-accent/25 transition-all"
              >
                Reset Exploration Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Deep-Dive Technical Spec Dossier Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#110a0d] border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 cursor-default max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-ink hover:text-accent transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Image Header (if exists) */}
              {selectedProject.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black border border-white/10 mb-6">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110a0d] via-transparent to-transparent" />
                </div>
              )}

              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
                <span>✦</span>
                <span>{selectedProject.domain}</span>
                <span className="text-muted/60">·</span>
                <span className="text-muted">{selectedProject.status}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-ink-secondary text-sm sm:text-base leading-relaxed mb-6 font-light">
                {selectedProject.abstract}
              </p>

              {/* Full Specs Table */}
              <div className="mb-6">
                <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-3">
                  System Specifications &amp; Parameters
                </h4>
                <div className="rounded-xl bg-black/60 border border-white/10 p-4 space-y-2.5 font-mono text-xs">
                  {Object.entries(selectedProject.technicalSpecs).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between border-b border-white/[0.04] pb-2 last:border-0 last:pb-0">
                      <span className="text-muted capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <span className="text-ink font-medium text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metric Callout */}
              <div className="mb-6 p-4 rounded-xl bg-accent/[0.08] border border-accent/20 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-accent shrink-0" />
                <span className="font-sans text-xs text-ink-secondary">
                  <strong className="text-accent font-mono uppercase tracking-wider mr-1.5">Bench Performance:</strong>
                  {selectedProject.metrics}
                </span>
              </div>

              {/* Collaborators & Meta */}
              <div className="mb-6 space-y-2 text-xs font-mono">
                <div>
                  <span className="text-muted">Lead Steward: </span>
                  <span className="text-accent">{selectedProject.lead}</span>
                </div>
                {selectedProject.collaborators.length > 0 && (
                  <div>
                    <span className="text-muted">Collaborators: </span>
                    <span className="text-ink-secondary">
                      {selectedProject.collaborators.join(", ")}
                    </span>
                  </div>
                )}
              </div>

              {/* External Source Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="font-mono text-xs text-muted hover:text-ink transition-colors"
                >
                  Close Dossier
                </button>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-bg font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors"
                >
                  <span>Open GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
