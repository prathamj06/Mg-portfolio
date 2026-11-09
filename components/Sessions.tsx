"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { COMMUNITY_DATA, Session } from "@/lib/data";
import { playHaptic } from "@/lib/audio";

export default function Sessions() {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const handleOpenModal = (s: Session) => {
    setSelectedSession(s);
    playHaptic(640, 0.04);
  };

  const handleCloseModal = () => {
    setSelectedSession(null);
    playHaptic(380, 0.03);
  };

  return (
    <section id="sessions" className="scroll-mt-24 py-24 sm:py-32 relative">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-3">
            <span>✦</span>
            <span>SEMINARS & WORKSHOPS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink mb-4 leading-tight">
            Knowledge-sharing sessions & teardowns.
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-[62ch] leading-relaxed">
            Weekly technical masterclasses and paper readings where founders guide first-year cohorts through physical and mathematical topics.
          </p>
        </motion.div>

        {/* Sessions Timeline — Fluid Adaptive Rows */}
        <div className="flex flex-col gap-4">
          {COMMUNITY_DATA.sessions.map((s, idx) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface border border-border-subtle hover:border-border-strong hover:bg-surface-elevated rounded-xl p-6 sm:p-7 xl:p-8 grid grid-cols-1 md:grid-cols-[160px_1fr_auto] gap-4 md:gap-10 items-center transition-all group"
            >
              <div className="flex flex-col gap-1 font-mono text-xs">
                <span className="text-accent">{s.date}</span>
                <span className="text-muted text-[11px]">{s.domain}</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif text-xl sm:text-2xl text-ink group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-ink-secondary text-sm line-clamp-1">
                  {s.summary}
                </p>
                <span className="text-xs text-muted">
                  Led by: <strong className="text-ink font-medium">{s.speaker}</strong> ({s.role})
                </span>
              </div>

              <div>
                <button
                  onClick={() => handleOpenModal(s)}
                  className="text-xs font-mono text-ink hover:text-accent border border-border-subtle hover:border-border-strong px-3 py-1.5 rounded transition-all whitespace-nowrap bg-bg"
                >
                  Syllabus & Notes
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Session Modal */}
      <AnimatePresence>
        {selectedSession && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface border border-border-strong rounded-xl max-w-[620px] w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl shadow-black/80 flex flex-col gap-5"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 w-8 h-8 rounded border border-border-subtle hover:border-border-strong text-muted hover:text-ink flex items-center justify-center transition-all bg-bg/80"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between pr-8 text-xs font-mono">
                <span className="text-accent bg-wine-rich/80 border border-border-wine px-2.5 py-0.5 rounded">{selectedSession.date} · {selectedSession.type}</span>
                <span className="text-muted">{selectedSession.domain}</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink leading-tight mb-1">
                  {selectedSession.title}
                </h3>
                <span className="text-xs text-muted">
                  Conducted by: <strong className="text-ink font-medium">{selectedSession.speaker}</strong> ({selectedSession.role})
                </span>
              </div>

              <div className="bg-bg border border-border-subtle rounded p-4 text-sm text-ink-secondary leading-relaxed">
                <div className="font-mono text-[10px] text-muted uppercase tracking-wider mb-1">Overview</div>
                <p>{selectedSession.summary}</p>
              </div>

              <div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2">Core Topics Covered</div>
                <ul className="flex flex-col gap-2 text-sm text-ink">
                  {selectedSession.topics.map((t, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-accent">✦</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs text-muted">
                <span>Lab access provided to first-year cohorts.</span>
                <button
                  onClick={() => alert("Session slide decks and lab notebooks are archived in the private student repository.")}
                  className="text-xs font-mono border border-border-subtle hover:border-border-strong px-3 py-1.5 rounded text-ink hover:text-accent transition-all bg-bg"
                >
                  Archive Access
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
