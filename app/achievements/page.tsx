"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Award,
  BookOpen,
  Cpu,
  Users,
  Shield,
  ExternalLink,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Radio,
  CheckCircle2,
  Calendar,
  Building2,
  Compass
} from "lucide-react";
import { COMMUNITY_DATA, Achievement } from "@/lib/data";
import { playHaptic } from "@/lib/audio";
import Footer from "@/components/Footer";

export default function AchievementsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const categories = [
    { label: "All Milestones (9)", id: "all" },
    { label: "Research & Defense (3)", id: "research" },
    { label: "National Honors (2)", id: "national" },
    { label: "Hardware Systems (2)", id: "hardware" },
    { label: "Community & Mentorship (2)", id: "mentorship" },
  ];

  const q = searchQuery.toLowerCase().trim();
  const filteredAchievements = (COMMUNITY_DATA.achievements || []).filter((a) => {
    const matchesCategory = selectedCategory === "all" || a.category === selectedCategory;
    const matchesSearch =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.issuer.toLowerCase().includes(q) ||
      a.abstract.toLowerCase().includes(q) ||
      a.badge.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const handleOpenAchievement = (a: Achievement) => {
    setSelectedAchievement(a);
    playHaptic(640, 0.04);
  };

  const handleCloseAchievement = () => {
    setSelectedAchievement(null);
    playHaptic(380, 0.03);
  };

  const stats = [
    { value: "100+", label: "Students Mentored", desc: "Hands-on hardware & Web3 training" },
    { value: "ICAIA '25", label: "Peer-Reviewed", desc: "Formal conference oral defense" },
    { value: "03", label: "National Labs", desc: "DRDO LRDE, DIPR & CSIR-NPL" },
    { value: "02", label: "National Honors", desc: "NCSC & Ministry of Education (RBVP)" },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "research":
        return BookOpen;
      case "national":
        return Award;
      case "hardware":
        return Cpu;
      case "mentorship":
        return Users;
      default:
        return Sparkles;
    }
  };

  return (
    <>
      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#080406]">
        {/* Ambient Warm Burgundy Illumination */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none opacity-25 z-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 35%, rgba(223, 170, 162, 0.25) 0%, rgba(62, 20, 24, 0.45) 50%, transparent 80%)",
            filter: "blur(110px)",
          }}
        />

        <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 relative z-10">
          
          {/* Path Breadcrumb */}
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
                <span>Achievements</span>
              </li>
            </ol>
          </nav>

          {/* Section Heading */}
          <div className="max-w-5xl mb-16 sm:mb-20">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-ink mb-6 leading-[1.08] tracking-tight">
              Milestones, honors & empirical impact.
            </h1>
            <p className="font-sans text-lg sm:text-2xl text-ink-secondary/95 font-light leading-relaxed max-w-4xl border-l-2 border-accent/40 pl-6 sm:pl-8">
              A comprehensive record of peer-reviewed conference defenses, national scientific awards, defense laboratory immersions, and hands-on mentorship led by Melerigamy.
            </p>
          </div>

          {/* Telemetry Counter Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="p-5 sm:p-6 rounded-2xl bg-surface/75 border border-white/[0.08] backdrop-blur-md flex flex-col gap-1 shadow-lg shadow-black/40 hover:border-accent/30 transition-colors"
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

          {/* Controls: Search & Category Tabs */}
          <div className="space-y-6 mb-12">
            {/* Search Input Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by milestone, organization, research domain, or keyword..."
                className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-surface/80 border border-white/[0.08] text-ink font-sans text-sm placeholder:text-muted/60 focus:outline-none focus:border-accent/60 transition-colors backdrop-blur-md shadow-lg shadow-black/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink p-1 rounded transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 pt-1 border-b border-border-subtle pb-6">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      playHaptic(520, 0.02);
                      setSelectedCategory(cat.id);
                    }}
                    className={`px-4 py-2 rounded-lg font-mono text-xs transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-accent/15 border border-accent/50 text-accent font-medium shadow-md shadow-accent/5"
                        : "bg-surface/50 border border-white/[0.05] text-ink-secondary hover:text-ink hover:bg-surface hover:border-white/10"
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
            {filteredAchievements.map((item, idx) => {
              const CategoryIcon = getCategoryIcon(item.category);

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  onClick={() => handleOpenAchievement(item)}
                  className="bg-[#0e070a] hover:bg-[#13080e] border border-white/[0.08] hover:border-accent/40 rounded-2xl p-7 sm:p-8 flex flex-col justify-between gap-6 shadow-xl shadow-black/70 hover:shadow-[0_16px_40px_rgba(0,0,0,0.85),0_0_24px_rgba(223,170,162,0.12)] transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1.5 group cursor-pointer relative overflow-hidden"
                >
                  {/* Card Rim Light */}
                  <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/35 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-4">
                    {/* Header: Category Badge + Year Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-accent font-mono text-[11px] tracking-wide">
                        <CategoryIcon className="w-3 h-3 text-accent" />
                        <span>{item.categoryLabel}</span>
                      </div>
                      <span className="font-mono text-xs text-muted">
                        {item.year}
                      </span>
                    </div>

                    {/* Title & Issuer */}
                    <div>
                      <h3 className="font-serif text-2xl text-ink group-hover:text-accent transition-colors leading-tight font-normal">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs text-ink-secondary/80 mt-1.5 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-accent/70 shrink-0" />
                        <span className="truncate">{item.issuer}</span>
                      </p>
                    </div>

                    {/* Abstract Narrative */}
                    <p className="font-sans text-xs sm:text-sm text-ink-secondary/90 leading-relaxed font-light line-clamp-3">
                      {item.abstract}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/[0.06] text-ink/75 font-mono text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Metrics & Action */}
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between gap-3 text-xs font-mono">
                    <span className="text-accent/90 text-[11px] font-medium tracking-wide">
                      {item.metrics}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted group-hover:text-accent transition-colors">
                      <span>Inspect Dossier</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {filteredAchievements.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl bg-surface/30 my-12">
              <Sparkles className="w-8 h-8 text-muted mx-auto mb-3" />
              <p className="text-ink font-serif text-lg mb-1">No matching milestones located</p>
              <p className="text-muted text-xs font-sans">
                Try revising your search keyword or switching the category filter.
              </p>
            </div>
          )}

          {/* Initiation & Callout Banner */}
          <section className="bg-gradient-to-br from-[#130b0e] via-[#0d070a] to-[#11080c] border border-border-wine/50 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl shadow-black/80 relative overflow-hidden group">
            <div
              className="absolute top-0 right-0 w-[450px] h-[450px] pointer-events-none opacity-30 z-0"
              style={{
                background:
                  "radial-gradient(circle at 100% 0%, rgba(223, 170, 162, 0.25) 0%, transparent 70%)",
              }}
            />

            <div className="max-w-2xl relative z-10 space-y-3">
              <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight">
                Collaborate with our research and systems teams.
              </h3>
              <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
                Whether you represent an academic institution, research laboratory, or technology collective interested in peer symposiums, Melerigamy welcomes formal inquiry and technical dialogue.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 relative z-10">
              <Link
                href="mailto:melerigamy.research@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent hover:text-ink px-6 py-3.5 rounded-full border border-accent/35 bg-accent/[0.1] hover:bg-accent/[0.2] transition-all shadow-lg shadow-black/40"
              >
                <span>Initiate Research Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

        </div>
      </main>

      {/* Achievement Dossier Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseAchievement}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl bg-[#0f080b] border border-white/[0.12] rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black overflow-hidden z-10 max-h-[90vh] flex flex-col justify-between"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseAchievement}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-muted hover:text-ink transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="overflow-y-auto pr-2 space-y-6">
                {/* Meta Top */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-md bg-accent/15 border border-accent/40 text-accent font-mono text-xs font-medium">
                    {selectedAchievement.badge}
                  </span>
                  <span className="text-muted font-mono text-xs flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedAchievement.year}</span>
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight">
                    {selectedAchievement.title}
                  </h2>
                  <p className="font-mono text-xs text-accent/90 mt-2 flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{selectedAchievement.issuer}</span>
                  </p>
                </div>

                {/* Narrative Overview */}
                <div className="space-y-3">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    Technical Abstract & Overview
                  </h4>
                  <p className="font-sans text-sm text-ink-secondary/95 leading-relaxed font-light">
                    {selectedAchievement.details?.overview || selectedAchievement.abstract}
                  </p>
                </div>

                {/* Technical Highlights */}
                {selectedAchievement.details?.highlights && (
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      Key Highlights & Accomplishments
                    </h4>
                    <ul className="space-y-2">
                      {selectedAchievement.details.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs text-ink/90 font-sans leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Relevance to Melerigamy */}
                {selectedAchievement.details?.relevance && (
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent block">
                      Institutional Relevance
                    </span>
                    <p className="font-sans text-xs text-ink-secondary/90 leading-relaxed font-light">
                      {selectedAchievement.details.relevance}
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted block">
                    Domain & Technology Toolchains
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedAchievement.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-ink/80 font-mono text-[10px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-muted">
                  Metric: <strong className="text-accent font-medium">{selectedAchievement.metrics}</strong>
                </span>
                <button
                  onClick={handleCloseAchievement}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-ink transition-colors"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
