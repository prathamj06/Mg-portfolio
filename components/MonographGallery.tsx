"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Cpu, Radio, ShieldAlert, Sparkles } from "lucide-react";
import { playHaptic } from "@/lib/audio";

interface Artifact {
  id: string;
  fig: string;
  title: string;
  discipline: string;
  image: string;
  details: string;
  specs: Record<string, string>;
}

const ARTIFACTS: Artifact[] = [
  {
    id: "fig-01a",
    fig: "FIG. 01.A",
    title: "Enclosure Sub-System & Thermal Integration",
    discipline: "Hardware & Thermal Architecture",
    image: "/assets/fig-01a-thermal.jpg",
    details: "Custom custom-milled high-density aluminum heatsink chassis with active thermal dissipation for edge embedded computing nodes under full continuous workload.",
    specs: {
      Cooling: "Active forced-air convection + ATOM thermal sink",
      Target: "Edge compute core running continuous sensor inference",
      Integration: "Modular vibration-isolated chassis rail",
    },
  },
  {
    id: "fig-01b",
    fig: "FIG. 01.B",
    title: "ESP32 & Multi-Sensor Acquisition Prototype",
    discipline: "Embedded Systems & Signal Capture",
    image: "/assets/fig-01b-esp32.jpg",
    details: "Multi-channel analog signal acquisition breadboard with integrated power regulation, low-noise amplifiers, and wireless telemetry broadcast.",
    specs: {
      Microcontroller: "ESP32 Tensilica dual-core with custom C firmware",
      Sampling: "Multi-channel 12-bit ADC with hardware filtering",
      Telemetry: "Low-latency UDP stream over dedicated 2.4 GHz mesh",
    },
  },
  {
    id: "fig-02",
    fig: "FIG. 02",
    title: "Multirotor UAV & ArduPilot Telemetry Station",
    discipline: "Autonomous Flight & Telemetry",
    image: "/assets/fig-02-uav.jpg",
    details: "Custom autonomous multirotor drone platform integrated with ArduPilot flight stack and real-time handheld ground telemetry console for spatial data capture.",
    specs: {
      Autopilot: "ArduPilot on STM32 H7 flight controller",
      GroundStation: "Custom touchscreen telemetry terminal with live GPS tracking",
      Payload: "Coherent RF spectrum sensing & atmospheric sensor pod",
    },
  },
  {
    id: "monograph-full",
    fig: "PLATE 01",
    title: "Monograph I — Official Publication Plate",
    discipline: "Community Research Publication",
    image: "/assets/monograph-cover.jpg",
    details: "The founding monograph establishing Melerigamy's interdisciplinary research ethos across computing, engineering, mathematics, and experimental science.",
    specs: {
      Volume: "Monograph I, Folio 01 // 08",
      Design: "Academic print edition on warm parchment with oxblood framing",
      Focus: "Peer-led first-principles investigation & hardware prototyping",
    },
  },
];

export default function MonographGallery() {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact>(ARTIFACTS[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleSelect = (art: Artifact) => {
    setSelectedArtifact(art);
    playHaptic(500, 0.03);
  };

  return (
    <section id="monograph" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Editorial Transition Quote (From Monograph I) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 pt-6"
        >
          <div className="flex items-center justify-center gap-3 font-mono text-[11px] text-accent uppercase tracking-widest mb-4">
            <span>RESEARCH</span>
            <span className="text-border-strong">·</span>
            <span>COMPUTING</span>
            <span className="text-border-strong">·</span>
            <span>ENGINEERING</span>
            <span className="text-border-strong">·</span>
            <span>MATHEMATICS</span>
          </div>
          <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-accent-parchment leading-relaxed font-normal">
            &ldquo;Investigating the science behind technology, experimenting with its applications, and building across disciplines.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-muted">
            <div className="h-[1px] w-16 bg-border-subtle" />
            <span className="text-accent text-xs">◇</span>
            <div className="h-[1px] w-16 bg-border-subtle" />
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-3">
            <span>✦</span>
            <span>MONOGRAPH I ARTIFACTS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink mb-3 leading-tight">
                Authentic laboratory prototypes.
              </h2>
              <p className="text-muted text-base max-w-[54ch] leading-relaxed">
                Direct photographic evidence of ongoing student research from Monograph I — bridging physical atoms, silicon, and autonomous field telemetry.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-accent">
              <span>FOLIO 01 // 08</span>
              <span className="text-border-strong">·</span>
              <span className="text-muted">PEER VERIFIED</span>
            </div>
          </div>
        </motion.div>

        {/* Componentry-style Interactive Case Study Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          {/* Main Visual Frame with Zoom Trigger */}
          <div className="bg-surface border border-border-subtle hover:border-border-strong rounded-xl p-6 flex flex-col gap-5 transition-all shadow-2xl shadow-black/70">
            <div className="flex items-center justify-between font-mono text-xs text-muted border-b border-border-subtle pb-3">
              <span className="text-accent font-semibold">{selectedArtifact.fig}</span>
              <span className="uppercase text-[11px] tracking-wider">{selectedArtifact.discipline}</span>
              <button
                onClick={() => setLightboxOpen(true)}
                className="hover:text-accent flex items-center gap-1.5 transition-colors"
                title="Fullscreen inspection"
              >
                <span>Inspect</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div
              onClick={() => setLightboxOpen(true)}
              className="relative w-full h-[320px] sm:h-[400px] rounded-lg overflow-hidden border border-white/5 bg-black cursor-pointer group"
            >
              <Image
                src={selectedArtifact.image}
                alt={selectedArtifact.title}
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono text-xs text-accent bg-wine-rich/90 px-3 py-1 rounded border border-border-wine backdrop-blur-sm">
                  Click to inspect full resolution
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-serif text-2xl text-ink leading-snug">
                {selectedArtifact.title}
              </h3>
              <p className="text-ink-secondary text-sm leading-relaxed">
                {selectedArtifact.details}
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-border-subtle">
                {Object.entries(selectedArtifact.specs).map(([k, v]) => (
                  <div key={k} className="bg-bg border border-border-subtle rounded p-2.5 flex flex-col gap-0.5">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-wider">{k}</span>
                    <span className="font-mono text-xs text-ink truncate">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Selector Deck: Componentry Layered Tabs */}
          <div className="flex flex-col gap-4">
            <div className="font-mono text-xs text-muted tracking-wider uppercase mb-1">
              Select Monograph Plate
            </div>

            {ARTIFACTS.map((art) => {
              const isSelected = selectedArtifact.id === art.id;
              return (
                <button
                  key={art.id}
                  onClick={() => handleSelect(art)}
                  className={`text-left p-4 rounded-xl border transition-all flex items-center gap-4 ${
                    isSelected
                      ? "bg-wine-rich/70 border-accent/40 shadow-lg shadow-wine-dark/40"
                      : "bg-surface hover:bg-surface-elevated border-border-subtle hover:border-border-strong"
                  }`}
                >
                  <div className="relative w-16 h-16 rounded overflow-hidden border border-border-subtle flex-shrink-0 bg-black">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className={isSelected ? "text-accent font-semibold" : "text-muted"}>
                        {art.fig}
                      </span>
                      <span className="text-muted text-[10px]">{art.discipline.split("&")[0]}</span>
                    </div>
                    <h4 className="font-serif text-base text-ink truncate leading-tight">
                      {art.title}
                    </h4>
                    <p className="text-xs text-ink-secondary/80 line-clamp-1 mt-0.5">
                      {art.details}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-surface border border-border-strong rounded-xl overflow-hidden flex flex-col p-6 shadow-2xl"
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded border border-border-subtle text-muted hover:text-ink flex items-center justify-center transition-colors bg-bg/80 z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative w-full h-[60vh] bg-black rounded overflow-hidden">
                <Image
                  src={selectedArtifact.image}
                  alt={selectedArtifact.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4 flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
                <div>
                  <span className="text-accent font-semibold">{selectedArtifact.fig}:</span>{" "}
                  <span className="text-ink">{selectedArtifact.title}</span>
                </div>
                <span className="text-muted">{selectedArtifact.discipline}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
