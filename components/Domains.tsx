"use client";

import { motion } from "framer-motion";
import { COMMUNITY_DATA, Domain } from "@/lib/data";

export default function Domains() {
  return (
    <section id="domains" className="scroll-mt-24 py-24 sm:py-32 relative">
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
            <span>RESEARCH DOMAINS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink mb-4 leading-tight">
            Six interconnected fields of investigation.
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-[64ch] leading-relaxed">
            Bridging abstract mathematics and theoretical physics with physical radio frequency hardware, silicon logic, and machine learning pipelines.
          </p>
        </motion.div>

        {/* 6 Domain Cards — Adaptive Fluid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {COMMUNITY_DATA.domains.map((d: Domain, idx: number) => (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface border border-border-subtle hover:border-border-strong hover:bg-surface-elevated rounded-xl p-7 sm:p-8 xl:p-9 flex flex-col justify-between gap-6 transition-all group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-accent bg-wine-dark/80 border border-border-wine px-2 py-0.5 rounded text-[11px]">
                    {d.code}
                  </span>
                  <span className="text-muted text-[11px]">Lead: {d.lead.split(" ")[0]}</span>
                </div>

                <h3 className="font-serif text-2xl text-ink leading-snug group-hover:text-accent transition-colors">
                  {d.name}
                </h3>

                <p className="text-ink-secondary text-sm leading-relaxed">
                  {d.summary}
                </p>

                <ul className="flex flex-col gap-1.5 pt-3 border-t border-border-subtle text-xs text-muted">
                  {d.keyTopics.slice(0, 3).map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2">
                      <span className="text-accent">·</span>
                      <span className="truncate">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Equation Box */}
              <div className="bg-bg border border-border-subtle rounded p-3 flex flex-col gap-1 text-xs font-mono">
                <span className="text-[10px] text-muted uppercase tracking-wider">{d.equationLabel}</span>
                <code className="text-accent text-[11px] truncate">{d.equation}</code>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
