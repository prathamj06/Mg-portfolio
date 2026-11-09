"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { playHaptic } from "@/lib/audio";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";

  const navLinks = [
    { name: "About", href: "/#about", id: "about" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Sessions", href: "/#sessions", id: "sessions" },
    { name: "Founders", href: "/#founders", id: "founders" },
    { name: "Directory", href: "/#directory", id: "directory" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (isHome) {
        const sections = navLinks.map((link) => document.getElementById(link.id));
        const scrollPosition = window.scrollY + 140;

        let current = "";
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            current = navLinks[i].id;
            break;
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (link: typeof navLinks[0]) => {
    playHaptic(580, 0.03);
    setMobileMenuOpen(false);

    if (isHome) {
      const target = document.getElementById(link.id);
      if (target) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      router.push(link.href);
    }
  };

  const scrollToTop = () => {
    playHaptic(440, 0.03);
    if (isHome) {
      setActiveSection("");
      setHoveredSection(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none transition-all duration-500">
      {/* Desktop Floating Architectural Vessel */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto relative hidden md:flex items-center gap-1 pl-3 pr-2.5 py-1.5 rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0709]/90 backdrop-blur-xl border border-white/[0.12] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.85),0_0_1px_1px_rgba(223,170,162,0.14)]"
            : "bg-[#0d0709]/65 backdrop-blur-md border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        }`}
      >
        {/* Subtle Top Rim Light */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/35 to-transparent pointer-events-none" />

        {/* Left: Brand Monogram Link to Home */}
        <div className="flex items-center pr-2">
          <button
            type="button"
            onClick={scrollToTop}
            className="font-serif text-sm font-semibold tracking-wider text-accent hover:text-ink transition-colors px-2.5 py-1 rounded-full hover:bg-white/[0.04] cursor-pointer"
            aria-label="Melerigamy Home"
          >
            MG
          </button>
          <span className="h-3.5 w-[1px] bg-border-subtle ml-1.5" />
        </div>

        {/* Navigation Links with Perfectly Centered Active & Hover Pills */}
        <div 
          className="flex items-center gap-1"
          onMouseLeave={() => setHoveredSection(null)}
        >
          {navLinks.map((link) => {
            const isActive = isHome && activeSection === link.id;
            const isHovered = hoveredSection === link.id;

            return (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link)}
                onMouseEnter={() => setHoveredSection(link.id)}
                className={`relative px-4 sm:px-4.5 py-2 rounded-full font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 z-10 flex items-center justify-center text-center cursor-pointer ${
                  isActive
                    ? "text-accent font-medium"
                    : isHovered
                    ? "text-ink"
                    : "text-ink-secondary/75 hover:text-ink"
                }`}
              >
                {/* Active Indicator Glow */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-accent/[0.14] border border-accent/30 shadow-[0_0_12px_rgba(223,170,162,0.12)] -z-10"
                  />
                )}

                {/* Hover Indicator Highlight */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="hoverNavPill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-white/[0.05] border border-white/[0.08] -z-10"
                  />
                )}

                <span className="relative z-10">{link.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Dedicated About Us / Initiation Link */}
        <div className="flex items-center pl-1">
          <span className="h-3.5 w-[1px] bg-border-subtle mr-2" />
          <Link
            href="/about"
            onClick={() => playHaptic(680, 0.04)}
            className={`font-mono text-[11px] uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full transition-all ${
              pathname === "/about"
                ? "bg-accent/20 text-accent border border-accent/40 font-medium"
                : "text-accent bg-accent/[0.1] hover:bg-accent/[0.18] border border-accent/25 hover:border-accent/40"
            }`}
          >
            About Us
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Floating Pill */}
      <div className="md:hidden pointer-events-auto w-full max-w-sm flex flex-col items-center">
        <div
          className={`w-full flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-500 ${
            scrolled || mobileMenuOpen
              ? "bg-[#0d0709]/92 backdrop-blur-xl border border-white/[0.12] shadow-xl shadow-black/80"
              : "bg-[#0d0709]/70 backdrop-blur-md border border-white/[0.08]"
          }`}
        >
          <button
            type="button"
            onClick={() => {
              scrollToTop();
              setMobileMenuOpen(false);
            }}
            className="font-serif text-base font-semibold tracking-wider text-accent hover:text-ink transition-colors px-1 cursor-pointer"
            aria-label="Melerigamy Home"
          >
            MG
          </button>

          <button
            onClick={() => {
              playHaptic(360, 0.03);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-ink bg-white/[0.04] hover:bg-white/[0.08] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Mobile Dropdown Vessel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full mt-2 p-2.5 rounded-2xl bg-[#0e070a]/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/90 flex flex-col gap-1 text-center"
            >
              {navLinks.map((link) => {
                const isActive = isHome && activeSection === link.id;
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleNavClick(link)}
                    className={`font-mono text-xs uppercase tracking-[0.2em] py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-accent/15 text-accent border border-accent/25"
                        : "text-ink-secondary/80 hover:text-ink hover:bg-white/[0.04]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] text-accent/60">→</span>
                  </button>
                );
              })}

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 font-mono text-xs uppercase tracking-[0.2em] py-2.5 px-4 rounded-xl bg-accent/20 text-accent border border-accent/35 flex items-center justify-between"
              >
                <span>Full About Us Page</span>
                <span className="text-[10px]">✦</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
