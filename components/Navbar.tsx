"use client";

import { useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { playHaptic } from "@/lib/audio";
import { usePageTransition, NAV_ORDER } from "@/context/PageTransitionContext";

interface NavLinkItem {
  name: string;
  href: string;
  id: string;
}

function MagneticNavLink({
  link,
  mouseX,
  isActive,
  isHovered,
  onClick,
  onHover,
  onLeave,
}: {
  link: NavLinkItem;
  mouseX: MotionValue<number>;
  isActive: boolean;
  isHovered: boolean;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  // Proximity distance calculation from cursor to center of this nav item
  // Gracefully handles Infinity and NaN when mouse leaves the dock
  const distance = useTransform(mouseX, (val: number) => {
    if (!ref.current || val === Infinity || isNaN(val)) return 1000;
    const bounds = ref.current.getBoundingClientRect();
    return Math.abs(val - (bounds.x + bounds.width / 2));
  });

  // Scale factor: refined magnetic dock magnification
  // Direct hover (0px) => 1.08x (subtle luxury lift, prevents highlight collision)
  // Adjacent proximity (50px) => 1.03x
  // Resting threshold (>= 100px) => exactly 1.0x (clamped)
  const targetScale = useTransform(
    distance,
    [0, 50, 100],
    [1.08, 1.03, 1.0],
    { clamp: true }
  );

  const scale = useSpring(targetScale, {
    stiffness: 380,
    damping: 26,
    mass: 0.1,
  });

  return (
    <motion.button
      ref={ref}
      type="button"
      style={{ scale }}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative px-4 py-2 rounded-full font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 z-10 flex items-center justify-center text-center cursor-pointer select-none origin-center transform-gpu ${
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
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 30,
            mass: 1.1,
          }}
          className={`absolute inset-0 rounded-full transition-colors duration-200 -z-10 pointer-events-none ${
            isHovered
              ? "bg-accent/[0.20] border border-accent/45 shadow-[0_0_16px_rgba(223,170,162,0.22)]"
              : "bg-accent/[0.14] border border-accent/30 shadow-[0_0_12px_rgba(223,170,162,0.12)]"
          }`}
        />
      )}

      {/* Hover Indicator Highlight: Clean local fade to prevent sliding over active pills on different pages */}
      <AnimatePresence>
        {isHovered && !isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-white/[0.05] border border-white/[0.08] -z-10 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <span className="relative z-10 whitespace-nowrap leading-none">{link.name}</span>
    </motion.button>
  );
}

function MagneticMonogram({
  mouseX,
  onClick,
}: {
  mouseX: MotionValue<number>;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    if (!ref.current || val === Infinity || isNaN(val)) return 1000;
    const bounds = ref.current.getBoundingClientRect();
    return Math.abs(val - (bounds.x + bounds.width / 2));
  });

  const targetScale = useTransform(
    distance,
    [0, 50, 100],
    [1.08, 1.03, 1.0],
    { clamp: true }
  );

  const scale = useSpring(targetScale, {
    stiffness: 380,
    damping: 26,
    mass: 0.1,
  });

  return (
    <motion.button
      ref={ref}
      type="button"
      style={{ scale }}
      onClick={onClick}
      className="font-serif text-sm font-semibold tracking-wider text-accent hover:text-ink transition-colors px-3 py-1.5 rounded-full hover:bg-white/[0.04] cursor-pointer origin-center transform-gpu flex items-center justify-center select-none leading-none"
      aria-label="Melerigamy Home"
    >
      MG
    </motion.button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { setDirection } = usePageTransition();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDockHovered, setIsDockHovered] = useState(false);

  // Mouse coordinate for magnetic dock magnification physics
  const mouseX = useMotionValue(Infinity);

  // "Founders" is removed from the header as requested.
  // "About", "Projects", "Sessions", "Directory" are the 4 primary links to separate pages.
  const navLinks: NavLinkItem[] = [
    { name: "About", href: "/about", id: "about" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Sessions", href: "/sessions", id: "sessions" },
    { name: "Directory", href: "/directory", id: "directory" },
  ];

  // Spring-animated dock vessel magnification that scales smoothly in tandem with options
  const dockScale = useSpring(isDockHovered ? 1.018 : 1.0, {
    stiffness: 350,
    damping: 26,
    mass: 0.15,
  });

  const handleNavClick = (link: NavLinkItem) => {
    playHaptic(580, 0.03);
    setMobileMenuOpen(false);

    if (pathname !== link.href) {
      window.scrollTo(0, 0);
      const fromIndex = NAV_ORDER[pathname] ?? 0;
      const toIndex = NAV_ORDER[link.href] ?? 0;
      // If navigating to option on right: toIndex > fromIndex => 1 (left to right)
      // If navigating to option on left: toIndex < fromIndex => -1 (right to left)
      setDirection(toIndex >= fromIndex ? 1 : -1);
      router.push(link.href);
    }
  };

  const handleHomeClick = () => {
    playHaptic(440, 0.03);
    setMobileMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
      const fromIndex = NAV_ORDER[pathname] ?? 0;
      const toIndex = 0;
      // Going to Home (MG) at index 0 from any other page is navigating to the left
      setDirection(toIndex >= fromIndex ? 1 : -1);
      router.push("/");
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none transition-all duration-500">
      {/* Desktop Floating Architectural Vessel with Magnetic Dock Proximity */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={(e) => {
          mouseX.set(e.clientX);
          if (!isDockHovered) setIsDockHovered(true);
        }}
        onMouseEnter={() => setIsDockHovered(true)}
        onMouseLeave={() => {
          mouseX.set(Infinity);
          setHoveredSection(null);
          setIsDockHovered(false);
        }}
        style={{
          scale: dockScale,
        }}
        className={`pointer-events-auto relative hidden md:flex items-center rounded-full bg-[#0d0709]/92 backdrop-blur-xl border px-3.5 py-1.5 transition-colors duration-300 origin-center transform-gpu ${
          isDockHovered
            ? "border-white/[0.22] shadow-[0_20px_50px_-8px_rgba(0,0,0,0.95),0_0_24px_1px_rgba(223,170,162,0.22)]"
            : "border-white/[0.12] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.85),0_0_1px_1px_rgba(223,170,162,0.12)]"
        }`}
      >
        {/* Subtle Top Rim Light that brightens on dock hover */}
        <div
          className={`absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent pointer-events-none transition-opacity duration-300 ${
            isDockHovered ? "opacity-100" : "opacity-60"
          }`}
        />

        {/* Unified Magnetic Row: Monogram + Baseline Divider + Navigation Options */}
        <div className="flex items-center gap-2">
          <MagneticMonogram mouseX={mouseX} onClick={handleHomeClick} />
          <span className="h-3.5 w-[1px] bg-white/15 mx-1.5 select-none pointer-events-none self-center" />

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const isHovered = hoveredSection === link.id;

            return (
              <MagneticNavLink
                key={link.name}
                link={link}
                mouseX={mouseX}
                isActive={isActive}
                isHovered={isHovered}
                onClick={() => handleNavClick(link)}
                onHover={() => setHoveredSection(link.id)}
                onLeave={() =>
                  setHoveredSection((prev) => (prev === link.id ? null : prev))
                }
              />
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Floating Pill */}
      <div className="md:hidden pointer-events-auto w-full max-w-sm flex flex-col items-center">
        <div className="w-full flex items-center justify-between px-5 py-2.5 rounded-full bg-[#0d0709]/92 backdrop-blur-xl border border-white/[0.12] shadow-xl shadow-black/80">
          <button
            type="button"
            onClick={handleHomeClick}
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
                const isActive = pathname === link.href;
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
