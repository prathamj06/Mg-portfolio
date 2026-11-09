"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Linkedin, Github } from "lucide-react";
import { COMMUNITY_DATA, Member } from "@/lib/data";
import { playHaptic } from "@/lib/audio";

export default function Directory() {
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

  return (
    <section id="directory" className="scroll-mt-24 py-24 sm:py-32 relative">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-14"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-3">
            <span>✦</span>
            <span>STUDENT ROSTER</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink mb-4 leading-tight">
            Directory of first-year cohort members.
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-[62ch] leading-relaxed">
            30+ undergraduate researchers mastering physical instruments, mathematical modeling, and collaborative prototype development.
          </p>
        </motion.div>

        {/* Directory Controls */}
        <div className="bg-surface border border-border-subtle rounded-xl p-5 flex flex-col gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex items-center gap-3 bg-bg border border-border-subtle rounded-lg px-4 py-2.5">
            <Search className="w-4 h-4 text-accent" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, skill (GNU Radio, KiCad, PyTorch, Rust), or project..."
              className="bg-transparent border-none outline-none text-ink text-sm w-full placeholder:text-muted"
            />
          </div>

          {/* Domain Tabs */}
          <div className="flex gap-2 flex-wrap" role="tablist">
            {domainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedDomain(tab.id);
                  playHaptic(480, 0.025);
                }}
                className={`text-xs font-mono px-3 py-1.5 rounded transition-all ${
                  selectedDomain === tab.id
                    ? "bg-wine-rich text-accent border border-border-wine font-medium shadow-sm"
                    : "bg-bg text-muted hover:text-ink border border-border-subtle hover:border-border-strong"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="font-mono text-xs text-muted mb-6">
          Showing {filteredMembers.length} of {COMMUNITY_DATA.members.length} First-Year Members
        </div>

        {/* Members Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((m, idx) => (
              <motion.article
                layout
                key={m.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.04 }}
                onClick={() => handleOpenMember(m)}
                className="bg-surface border border-border-subtle hover:border-border-strong hover:bg-surface-elevated rounded-xl p-5 flex flex-col justify-between gap-4 cursor-pointer transition-all group shadow-sm"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-accent bg-wine-dark/80 border border-border-wine px-2 py-0.5 rounded w-fit">
                    {m.domain}
                  </span>
                  <h3 className="font-serif text-xl text-ink group-hover:text-accent transition-colors leading-snug">
                    {m.name}
                  </h3>
                  <p className="text-ink-secondary text-xs leading-relaxed line-clamp-2">
                    {m.focus}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-1">
                    {m.skills.slice(0, 3).map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[10px] text-muted bg-bg border border-border-subtle px-1.5 py-0.5 rounded"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-muted">
                  <span className="text-[11px] font-mono">{m.cohort.split(" ")[0]}</span>
                  <span className="font-mono text-[11px] text-accent group-hover:translate-x-0.5 transition-transform">
                    Profile →
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Member Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface border border-border-strong rounded-xl max-w-[600px] w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl shadow-black/80 flex flex-col gap-5"
            >
              <button
                onClick={handleCloseMember}
                className="absolute top-5 right-5 w-8 h-8 rounded border border-border-subtle hover:border-border-strong text-muted hover:text-ink flex items-center justify-center transition-all bg-bg/80"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between pr-8 text-xs font-mono">
                <span className="text-accent bg-wine-rich/80 border border-border-wine px-2.5 py-0.5 rounded">{selectedMember.domain}</span>
                <span className="text-muted">{selectedMember.cohort}</span>
              </div>

              <div>
                <h3 className="font-serif text-3xl text-ink mb-1">{selectedMember.name}</h3>
                <span className="font-mono text-xs text-accent">{selectedMember.focus}</span>
              </div>

              {/* Bio */}
              <div className="bg-bg border border-border-subtle rounded p-4 text-sm text-ink-secondary leading-relaxed">
                <div className="font-mono text-[10px] text-muted uppercase tracking-wider mb-1">Academic Profile</div>
                <p>{selectedMember.bio}</p>
              </div>

              {/* Project & Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-elevated border border-border-subtle rounded p-3.5">
                  <div className="font-mono text-[10px] text-muted uppercase tracking-wider mb-1">Active Project</div>
                  <div className="text-xs text-ink font-medium">{selectedMember.activeProject}</div>
                </div>
                <div className="bg-surface-elevated border border-border-subtle rounded p-3.5">
                  <div className="font-mono text-[10px] text-muted uppercase tracking-wider mb-1">Key Skills</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedMember.skills.map((s, idx) => (
                      <span key={idx} className="font-mono text-[10px] text-ink bg-bg border border-border-subtle px-1.5 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                <span className="text-xs text-muted font-mono">Melerigamy Collective</span>
                <div className="flex gap-2">
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono border border-border-subtle hover:border-border-strong text-ink px-3 py-1.5 rounded transition-all bg-bg"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-accent" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={selectedMember.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono bg-wine-rich hover:bg-wine-deep text-ink border border-border-wine px-3 py-1.5 rounded transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-accent" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
