"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { COMMUNITY_DATA, Project } from "@/lib/data";
import { playHaptic } from "@/lib/audio";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: "All Projects", id: "all" },
    { label: "RF & SDR", id: "rf-wireless" },
    { label: "TinyML", id: "ai-ml" },
    { label: "FPGA & Silicon", id: "electronics-embedded" },
    { label: "Topology", id: "higher-mathematics" },
    { label: "Cryptography", id: "cybersecurity-systems" },
    { label: "Instrumentation", id: "scientific-research" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? COMMUNITY_DATA.projects
      : COMMUNITY_DATA.projects.filter((p) => p.domainId === activeFilter);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    playHaptic(640, 0.04);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    playHaptic(380, 0.03);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header & Filter Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-3">
              <span>✦</span>
              <span>TECHNICAL PORTFOLIO</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink mb-3 leading-tight">
              Hardware prototypes & software.
            </h2>
            <p className="text-muted text-base max-w-[54ch] leading-relaxed">
              Open-source systems engineered across passive SDR radar, microcontroller neural kernels, FPGA soft cores, and post-quantum cryptographic primitives.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex gap-2 flex-wrap" role="tablist" aria-label="Filter Projects">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setActiveFilter(f.id);
                  playHaptic(460, 0.025);
                }}
                className={`text-xs font-mono px-3 py-1.5 rounded transition-all ${
                  activeFilter === f.id
                    ? "bg-wine-rich text-accent border border-border-wine font-medium shadow-sm"
                    : "bg-surface text-muted hover:text-ink border border-border-subtle hover:border-border-strong"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.08 }}
                className="bg-surface border border-border-subtle hover:border-border-strong hover:bg-surface-elevated rounded-xl p-7 flex flex-col justify-between gap-5 transition-all group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-accent bg-wine-dark/80 border border-border-wine px-2.5 py-0.5 rounded text-[11px]">{p.badge}</span>
                    <span className="text-muted text-[11px]">{p.status}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-ink leading-snug group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-ink-secondary text-sm leading-relaxed">
                    {p.abstract}
                  </p>
                </div>

                {/* Performance Metric Pill */}
                <div className="font-mono text-xs text-ink bg-bg border border-border-subtle px-3 py-2 rounded">
                  {p.metrics}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs">
                  <span className="text-muted">
                    Lead: <strong className="text-ink-secondary font-medium">{p.lead}</strong>
                  </span>
                  <button
                    onClick={() => handleOpenModal(p)}
                    className="text-xs font-mono text-ink hover:text-accent border border-border-subtle hover:border-border-strong px-3 py-1.5 rounded transition-all"
                  >
                    Specs & Architecture →
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Architecture & Specs Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface border border-border-strong rounded-xl max-w-[640px] w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl shadow-black/80 flex flex-col gap-5"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 w-8 h-8 rounded border border-border-subtle hover:border-border-strong text-muted hover:text-ink flex items-center justify-center transition-all bg-bg/80"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between pr-8 text-xs font-mono">
                <span className="text-accent bg-wine-rich/80 border border-border-wine px-2.5 py-0.5 rounded">{selectedProject.badge}</span>
                <span className="text-muted">{selectedProject.status}</span>
              </div>

              <div>
                <h3 className="font-serif text-3xl text-ink mb-1">{selectedProject.title}</h3>
                <span className="font-mono text-xs text-accent">Domain: {selectedProject.domain}</span>
              </div>

              {/* Technical Abstract */}
              <div className="bg-bg border border-border-subtle rounded p-4 text-sm leading-relaxed text-ink-secondary">
                <div className="font-mono text-[10px] text-muted uppercase tracking-wider mb-1">Technical Abstract</div>
                <p>{selectedProject.abstract}</p>
              </div>

              {/* Architecture & Specs */}
              <div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2">Specifications</div>
                <div className="bg-bg border border-border-subtle rounded p-4 flex flex-col gap-2 text-xs">
                  {Object.entries(selectedProject.technicalSpecs).map(([key, val]) => (
                    <div key={key} className="flex justify-between gap-4">
                      <span className="text-muted capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                      <span className="text-ink font-mono text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaborators & Links */}
              <div className="flex items-center justify-between pt-4 border-t border-border-subtle flex-wrap gap-3">
                <div className="text-xs text-muted">
                  Researchers: <span className="text-ink">{selectedProject.lead}, {selectedProject.collaborators.join(", ")}</span>
                </div>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono bg-wine-rich hover:bg-wine-deep text-ink border border-border-wine px-3.5 py-2 rounded transition-all"
                >
                  <span>Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 text-accent" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
