"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ExternalLink, 
  Search, 
  Cpu, 
  Radio, 
  Binary, 
  Shield, 
  Atom, 
  Sparkles,
  GitBranch,
  Layers,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { COMMUNITY_DATA, Project } from "@/lib/data";
import { playHaptic } from "@/lib/audio";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: "All Disciplines (14)", id: "all" },
    { label: "RF & SDR (3)", id: "rf-wireless" },
    { label: "TinyML (2)", id: "ai-ml" },
    { label: "FPGA & Silicon (3)", id: "electronics-embedded" },
    { label: "Topology & Math (2)", id: "higher-mathematics" },
    { label: "Cryptography (2)", id: "cybersecurity-systems" },
    { label: "Instrumentation (2)", id: "scientific-research" },
  ];

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
    const matchesFilter = activeFilter === "all" || p.domainId === activeFilter;
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.domain.toLowerCase().includes(q) ||
      p.lead.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.abstract.toLowerCase().includes(q);
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
    { value: "14", label: "Active Prototypes", desc: "Open-source bench builds" },
    { value: "06", label: "Research Domains", desc: "Cross-disciplinary convergence" },
    { value: "100%", label: "Reproducible Science", desc: "Public HDL, schematics & code" },
    { value: "30+", label: "Undergrad Stewards", desc: "Direct hardware hands-on" },
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
                <span>Projects</span>
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="max-w-5xl mb-16 sm:mb-20">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-ink mb-6 leading-[1.08] tracking-tight">
              Hardware prototypes & software.
            </h1>
            <p className="font-sans text-lg sm:text-2xl text-ink-secondary/95 font-light leading-relaxed max-w-4xl border-l-2 border-accent/40 pl-6 sm:pl-8">
              Open-source systems engineered across passive SDR radar, microcontroller neural kernels, FPGA soft cores, and post-quantum cryptographic primitives.
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

          {/* Controls: Filter Pills & Search Input */}
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
                      : "bg-surface/60 text-muted hover:text-ink border border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search projects, tags, specs..."
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

          {/* Projects Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((p, idx) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (idx % 6) * 0.05 }}
                className="group relative bg-[#0e070a]/90 hover:bg-[#130a0e] border border-white/[0.08] hover:border-accent/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/60"
              >
                <div>
                  {/* Top Bar: Badge & Lead */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="font-mono text-[10px] text-accent tracking-widest uppercase px-2.5 py-1 rounded-md bg-accent/[0.1] border border-accent/25">
                      {p.domain}
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      Lead: <span className="text-ink-secondary">{p.lead}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl text-ink font-normal mb-3 group-hover:text-accent transition-colors leading-snug">
                    {p.title}
                  </h3>

                  {/* Abstract */}
                  <p className="text-muted text-xs sm:text-sm font-sans font-light leading-relaxed mb-6 line-clamp-3">
                    {p.abstract}
                  </p>

                  {/* Technical Specs Key-Value Table */}
                  <div className="rounded-xl bg-black/40 border border-white/[0.05] p-3 mb-6 space-y-2 font-mono text-[11px]">
                    {Object.entries(p.technicalSpecs).slice(0, 3).map(([key, val]) => (
                      <div key={key} className="flex items-center justify-between gap-2">
                        <span className="text-muted capitalize">{key}:</span>
                        <span className="text-accent font-medium">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tag Chips */}
                  <div className="flex gap-1.5 flex-wrap mb-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-muted border border-white/[0.06]"
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
                    className="text-muted hover:text-ink transition-colors flex items-center gap-1 text-xs font-mono"
                    title="View Source on GitHub"
                  >
                    <span>Source</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-mono text-sm text-muted">
                No projects matched your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-accent/15 text-accent border border-accent/30 font-mono text-xs uppercase tracking-wider"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Deep-Dive Technical Spec Modal */}
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

              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
                <span>✦</span>
                <span>{selectedProject.domain}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 font-light">
                {selectedProject.abstract}
              </p>

              {/* Full Specs Table */}
              <div className="mb-6">
                <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-3">
                  Technical Specifications
                </h4>
                <div className="rounded-xl bg-black/60 border border-white/10 p-4 space-y-2.5 font-mono text-xs">
                  {Object.entries(selectedProject.technicalSpecs).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between border-b border-white/[0.04] pb-2 last:border-0 last:pb-0">
                      <span className="text-muted capitalize">{key}</span>
                      <span className="text-ink font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaborators & Meta */}
              <div className="mb-6 space-y-2 text-xs font-mono">
                <div>
                  <span className="text-muted">Lead: </span>
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
              <div className="pt-4 border-t border-white/10 flex justify-end">
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
