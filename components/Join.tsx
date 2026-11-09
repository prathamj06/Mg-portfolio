"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { playHaptic } from "@/lib/audio";

export default function Join() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "Radio Frequency",
    note: "",
  });

  const domainsList = [
    "Radio Frequency",
    "AI & Machine Learning",
    "Electronics & FPGA",
    "Higher Mathematics",
    "Cybersecurity & Systems",
    "Scientific Research",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please provide your name and email.");
      return;
    }
    playHaptic(880, 0.06);
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-surface border border-border-subtle hover:border-border-strong rounded-2xl p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-colors shadow-2xl shadow-black/60"
        >
          {/* Information Column */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase">
              <span>✦</span>
              <span>INITIATION & INQUIRY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-ink leading-tight">
              Join our technical collective.
            </h2>

            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
              Melerigamy welcomes curious undergraduate students eager to investigate physical science, radio communications, custom silicon, and mathematics. No prerequisites required—only dedication to first-principles inquiry.
            </p>

            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-ink-secondary">
              <li className="flex gap-2.5">
                <span className="text-accent">✦</span>
                <p><strong className="text-ink">Freshers-First:</strong> Direct mentorship from founders with access to lab equipment.</p>
              </li>
              <li className="flex gap-2.5">
                <span className="text-accent">✦</span>
                <p><strong className="text-ink">Open Science:</strong> All circuit netlists, DSP pipelines, and firmware released publicly.</p>
              </li>
              <li className="flex gap-2.5">
                <span className="text-accent">✦</span>
                <p><strong className="text-ink">Weekly Cohorts:</strong> Interactive teardowns, math seminars, and reading groups.</p>
              </li>
            </ul>

            <div className="flex flex-col gap-2.5 pt-6 border-t border-border-subtle text-xs">
              <span className="font-mono text-[10px] text-muted uppercase tracking-wider">Direct Channels</span>
              <a href="mailto:melerigamy.research@gmail.com" className="flex items-center gap-2 text-ink hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                <span>melerigamy.research@gmail.com</span>
              </a>
              <a href="https://discord.gg/melerigamy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink hover:text-accent transition-colors">
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>Melerigamy Student Discussion Server</span>
              </a>
            </div>
          </div>

          {/* Minimal Form Column */}
          <div className="bg-bg/60 border border-border-subtle rounded-xl p-6 sm:p-8 flex flex-col gap-5">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center gap-3">
                <span className="text-accent text-3xl">✦</span>
                <h3 className="font-serif text-2xl text-ink">Inquiry Recorded</h3>
                <p className="text-muted text-xs max-w-[34ch] leading-relaxed">
                  Thank you, {formData.name}. Our founding stewards review all submissions personally and will reach out via email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-mono text-accent hover:underline"
                >
                  Submit another inquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-ink mb-1">Express Your Curiosity</h3>
                  <p className="text-muted text-xs">Connect directly with our community stewards.</p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-ink font-mono">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aryaman Sen"
                    className="bg-bg border border-border-subtle focus:border-accent text-ink text-xs px-3.5 py-2.5 rounded outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-ink font-mono">University Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. aryaman@university.edu"
                    className="bg-bg border border-border-subtle focus:border-accent text-ink text-xs px-3.5 py-2.5 rounded outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-ink font-mono">Primary Technical Discipline</label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="bg-bg border border-border-subtle focus:border-accent text-ink text-xs px-3.5 py-2.5 rounded outline-none transition-colors"
                  >
                    {domainsList.map((d) => (
                      <option key={d} value={d} className="bg-surface text-ink">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-ink font-mono">What concept or project do you want to explore?</label>
                  <textarea
                    rows={2}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Tell us what you are currently building or reading..."
                    className="bg-bg border border-border-subtle focus:border-accent text-ink text-xs px-3.5 py-2.5 rounded outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full inline-flex items-center justify-center gap-2 bg-wine-rich hover:bg-wine-deep text-ink border border-border-wine py-2.5 rounded text-xs font-mono tracking-wider transition-all shadow-md shadow-wine-dark/40"
                >
                  <span>Transmit Application</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
