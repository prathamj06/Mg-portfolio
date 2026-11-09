"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ExternalLink, 
  Search, 
  Calendar, 
  User, 
  BookOpen, 
  ArrowRight,
  FileText,
  Sparkles
} from "lucide-react";
import { COMMUNITY_DATA, Session } from "@/lib/data";
import { playHaptic } from "@/lib/audio";
import Footer from "@/components/Footer";

export default function SessionsPage() {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("all");

  const domainTabs = [
    { label: "All Sessions (8)", id: "all" },
    { label: "RF & SDR", id: "RF Communications" },
    { label: "AI & Autodiff", id: "Deep Learning" },
    { label: "Electronics & HDL", id: "Digital Electronics" },
    { label: "Higher Math", id: "Topology & Geometry" },
    { label: "Cybersecurity", id: "Applied Cryptography" },
  ];

  const q = searchQuery.toLowerCase().trim();
  const filteredSessions = COMMUNITY_DATA.sessions.filter((s) => {
    const matchesDomain =
      selectedDomain === "all" || s.domain.toLowerCase().includes(selectedDomain.toLowerCase());
    const matchesQuery =
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.speaker.toLowerCase().includes(q) ||
      s.domain.toLowerCase().includes(q) ||
      s.summary.toLowerCase().includes(q) ||
      s.topics.some((t) => t.toLowerCase().includes(q));
    return matchesDomain && matchesQuery;
  });

  const handleOpenModal = (s: Session) => {
    setSelectedSession(s);
    playHaptic(640, 0.04);
  };

  const handleCloseModal = () => {
    setSelectedSession(null);
    playHaptic(380, 0.03);
  };

  const stats = [
    { value: "08", label: "Completed Seminars", desc: "Rigorous first-principles workshops" },
    { value: "100%", label: "Notes & Decks Archived", desc: "Permanent open-access repository" },
    { value: "06", label: "Core Research Pillars", desc: "From RF hardware to manifold theory" },
    { value: "2.5h", label: "Avg Session Length", desc: "In-depth lecture + live bench lab" },
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
                <span>Sessions</span>
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="max-w-5xl mb-16 sm:mb-20">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-ink mb-6 leading-[1.08] tracking-tight">
              Knowledge-sharing sessions & teardowns.
            </h1>
            <p className="font-sans text-lg sm:text-2xl text-ink-secondary/95 font-light leading-relaxed max-w-4xl border-l-2 border-accent/40 pl-6 sm:pl-8">
              Weekly technical masterclasses, laboratory teardowns, and paper readings where founders guide first-year cohorts through physical instrumentation and mathematical proofs.
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

          {/* Controls: Domain Filter Tabs & Search */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 pb-6 border-b border-white/[0.08]">
            <div className="flex gap-2 flex-wrap" role="tablist" aria-label="Filter Sessions">
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
                placeholder="Search sessions, topics, speakers..."
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

          {/* Sessions List */}
          <div className="flex flex-col gap-4">
            {filteredSessions.map((s, idx) => (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (idx % 6) * 0.05 }}
                className="bg-[#0e070a]/90 hover:bg-[#130a0e] border border-white/[0.08] hover:border-accent/40 rounded-2xl p-6 sm:p-7 xl:p-8 grid grid-cols-1 lg:grid-cols-[180px_1fr_auto] gap-6 lg:gap-10 items-center transition-all duration-300 group shadow-xl shadow-black/50"
              >
                {/* Left Meta: Date & Domain */}
                <div className="flex flex-col gap-1.5 font-mono text-xs">
                  <span className="text-accent font-medium">{s.date}</span>
                  <span className="text-muted text-[11px] uppercase tracking-wider">{s.domain}</span>
                  <span className="text-[10px] text-accent/70 px-2 py-0.5 rounded bg-accent/[0.08] border border-accent/20 w-max mt-1">
                    {s.type}
                  </span>
                </div>

                {/* Center Content: Title, Speaker & Summary */}
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-serif text-2xl text-ink font-normal group-hover:text-accent transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-xs text-muted">
                    <User className="w-3.5 h-3.5 text-accent" />
                    <span className="text-ink-secondary">{s.speaker}</span>
                    <span className="text-border-strong">·</span>
                    <span className="text-[11px]">{s.role}</span>
                  </div>
                  <p className="text-muted text-xs sm:text-sm font-sans font-light leading-relaxed max-w-3xl">
                    {s.summary}
                  </p>
                  <div className="flex gap-1.5 flex-wrap mt-1">
                    {s.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-muted border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action: Inspect Button */}
                <div className="flex lg:flex-col items-center lg:items-end justify-between gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(s)}
                    className="font-mono text-xs uppercase tracking-wider text-accent hover:text-ink px-4 py-2 rounded-xl bg-accent/[0.1] hover:bg-accent/[0.2] border border-accent/25 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Notes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={s.slidesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      playHaptic(520, 0.02);
                    }}
                    className="text-[11px] font-mono text-muted hover:text-accent flex items-center gap-1 transition-colors"
                  >
                    <span>Slide Deck</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredSessions.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-mono text-sm text-muted">
                No sessions found matching your criteria.
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

      {/* Session Details Modal */}
      <AnimatePresence>
        {selectedSession && (
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
                <span>{selectedSession.domain} · {selectedSession.date}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal mb-3">
                {selectedSession.title}
              </h3>

              <div className="flex items-center gap-2 font-mono text-xs text-muted mb-6 pb-4 border-b border-white/10">
                <span className="text-accent font-medium">{selectedSession.speaker}</span>
                <span className="text-border-strong">·</span>
                <span>{selectedSession.role}</span>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
                  Session Abstract & Synthesis
                </h4>
                <p className="text-muted text-sm leading-relaxed font-light">
                  {selectedSession.summary}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
                  Covered Topics & Equations
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {selectedSession.topics.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-black/60 border border-white/10 font-mono text-xs text-ink-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                <a
                  href={selectedSession.slidesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-bg font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors"
                >
                  <span>Open Slide Deck</span>
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
