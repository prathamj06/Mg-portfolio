"use client";

import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { COMMUNITY_DATA, Founder } from "@/lib/data";

export default function Founders() {
  return (
    <section id="founders" className="scroll-mt-24 py-24 sm:py-32 relative">
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
            <span>FOUNDING MEMBERS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink mb-4 leading-tight">
            The stewards guiding Melerigamy&apos;s research.
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-[62ch] leading-relaxed">
            The founders conduct technical sessions, direct research initiatives, and mentor first-year members through their independent prototypes.
          </p>
        </motion.div>

        {/* 3 Founders Cards — Adaptive Fluid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8 xl:gap-10">
          {COMMUNITY_DATA.founders.map((f: Founder, idx: number) => (
            <motion.article
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface border border-border-subtle hover:border-border-strong hover:bg-surface-elevated rounded-xl p-8 sm:p-9 xl:p-10 flex flex-col justify-between gap-7 transition-all group shadow-xl shadow-black/50"
            >
              <div className="flex flex-col gap-3.5">
                <div>
                  <span className="font-mono text-[11px] text-accent uppercase tracking-wider block mb-1">
                    {f.role}
                  </span>
                  <h3 className="font-serif text-3xl text-ink group-hover:text-accent transition-colors leading-tight">
                    {f.name}
                  </h3>
                  <span className="text-xs text-muted block mt-0.5">{f.specialization}</span>
                </div>

                <p className="text-ink-secondary text-sm leading-relaxed">
                  {f.bio}
                </p>

                <div className="bg-bg border border-border-subtle rounded p-3 flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                    Research Focus
                  </span>
                  <ul className="flex flex-col gap-1 text-xs text-ink">
                    {f.focusAreas.slice(0, 3).map((area, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-2">
                        <span className="text-accent text-[10px]">✦</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-muted">
                  <span className="text-accent font-mono text-[11px]">Active:</span> {f.currentProject}
                </div>
              </div>

              {/* LinkedIn Link */}
              <div className="pt-4 border-t border-border-subtle">
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-mono text-ink-secondary hover:text-accent bg-bg hover:bg-wine-rich/60 border border-border-subtle hover:border-border-wine px-3.5 py-2 rounded transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-accent" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
