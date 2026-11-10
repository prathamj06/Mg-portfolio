"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { COMMUNITY_DATA } from "@/lib/data";
import { playHaptic } from "@/lib/audio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const searchableItems = [
    { title: "Home: Overview & Introduction", category: "Navigation", target: "#hero" },
    { title: "About: Origin, Ethos & Mentorship", category: "Navigation", target: "/about" },
    { title: "Domains: 6 Research Fields", category: "Navigation", target: "/projects" },
    { title: "Projects: Flagship Technical Works", category: "Navigation", target: "/projects" },
    { title: "Sessions: Knowledge Workshops & Seminars", category: "Navigation", target: "/sessions" },
    { title: "Founders: Ishaan, Dhruv & Keshav", category: "Navigation", target: "/#founders" },
    { title: "Achievements: Honors & Milestones", category: "Navigation", target: "/achievements" },
    { title: "Join: Community Application", category: "Navigation", target: "/#initiation" },

    ...COMMUNITY_DATA.domains.map((d) => ({
      title: `${d.name} (${d.code})`,
      category: "Domain",
      target: `/projects`,
    })),

    ...COMMUNITY_DATA.projects.map((p) => ({
      title: p.title,
      category: "Project",
      target: `/projects`,
    })),

    ...COMMUNITY_DATA.founders.map((f) => ({
      title: `${f.name} (${f.specialization})`,
      category: "Founder",
      target: `/#founders`,
    })),

    ...(COMMUNITY_DATA.achievements || []).map((a) => ({
      title: `${a.title} (${a.issuer})`,
      category: "Achievement",
      target: `/achievements`,
    })),
  ];

  const q = query.toLowerCase().trim();
  const results = q
    ? searchableItems
        .filter(
          (item) =>
            item.title.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
        )
        .slice(0, 10)
    : searchableItems.slice(0, 8);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results[selectedIndex]) {
          executeItem(results[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  const executeItem = (item: typeof searchableItems[0]) => {
    onClose();
    playHaptic(420, 0.03);
    if (item.target.startsWith("/")) {
      window.location.href = item.target;
      return;
    }
    const el = document.querySelector(item.target);
    if (el) {
      const navH = 68;
      const y = el.getBoundingClientRect().top + window.pageYOffset - navH;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface border border-border-strong rounded-lg max-w-[560px] w-full overflow-hidden shadow-2xl shadow-black/85 flex flex-col"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border-subtle">
              <Search className="w-4 h-4 text-accent" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to member, domain, project, or section..."
                className="bg-transparent border-none outline-none text-ink text-sm w-full placeholder:text-muted"
              />
            </div>

            {/* Results List */}
            <ul className="max-h-[360px] overflow-y-auto p-2 flex flex-col gap-1">
              {results.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => executeItem(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2 rounded text-xs cursor-pointer transition-colors ${
                    selectedIndex === idx ? "bg-surface-hover text-ink" : "text-ink-secondary"
                  }`}
                >
                  <span className="truncate pr-4">{item.title}</span>
                  <span className="font-mono text-[10px] text-accent flex-shrink-0">
                    {item.category}
                  </span>
                </li>
              ))}
            </ul>

            {/* Footer Hints */}
            <div className="flex justify-between px-4 py-2 bg-bg border-t border-border-subtle text-[11px] font-mono text-muted">
              <span>Use ↑ ↓ to navigate</span>
              <span>Press Enter to select</span>
              <span>Esc to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
