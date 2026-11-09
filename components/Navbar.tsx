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
}: {
  link: NavLinkItem;
  mouseX: MotionValue<number>;
  isActive: boolean;
  isHovered: boolean;
  onClick: () => void;
  onHover: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  // Proximity distance calculation from cursor to center of this nav item
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 80 };
    return val - (bounds.x + bounds.width / 2);
  });

  // Scale factor: smooth magnetic dock magnification (peaks at 1.14x when cursor is over it)
  const scaleSync = useTransform(distance, [-130, 0, 130], [1, 1.14, 1]);
  const scale = useSpring(scaleSync, {
    stiffness: 320,
    damping: 22,
    mass: 0.15,
  });

  // Subtle magnetic Y lift when hovered
  const ySync = useTransform(distance, [-130, 0, 130], [0, -2, 0]);
  const y = useSpring(ySync, {
    stiffness: 320,
    damping: 22,
    mass: 0.15,
  });

  return (
    <motion.button
      ref={ref}
      type="button"
      style={{ scale, y }}
      onClick={onClick}
      onMouseEnter={onHover}
      className={`relative px-4 sm:px-4.5 py-2 rounded-full font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 z-10 flex items-center justify-center text-center cursor-pointer select-none ${
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
            stiffness: 340,
            damping: 30,
            mass: 0.8,
          }}
          className="absolute inset-0 rounded-full bg-accent/[0.14] border border-accent/30 shadow-[0_0_12px_rgba(223,170,162,0.12)] -z-10"
        />
      )}

      {/* Hover Indicator Highlight */}
      {isHovered && !isActive && (
        <motion.div
          layoutId="hoverNavPill"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 32,
          }}
          className="absolute inset-0 rounded-full bg-white/[0.05] border border-white/[0.08] -z-10 pointer-events-none"
        />
      )}

      <span className="relative z-10">{link.name}</span>
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

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 40 };
    return val - (bounds.x + bounds.width / 2);
  });

  const scaleSync = useTransform(distance, [-130, 0, 130], [1, 1.15, 1]);
  const scale = useSpring(scaleSync, {
    stiffness: 320,
    damping: 22,
    mass: 0.15,
  });

  return (
    <motion.button
      ref={ref}
      type="button"
      style={{ scale }}
      onClick={onClick}
      className="font-serif text-sm font-semibold tracking-wider text-accent hover:text-ink transition-colors px-2.5 py-1 rounded-full hover:bg-white/[0.04] cursor-pointer"
      aria-label="Melerigamy Home"
    >
      MG
    </motion.button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleNavClick = (link: NavLinkItem) => {
    playHaptic(580, 0.03);
    setMobileMenuOpen(false);

    if (pathname !== link.href) {
      router.push(link.href);
    }
  };

  const handleHomeClick = () => {
    playHaptic(440, 0.03);
    setMobileMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
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
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => {
          mouseX.set(Infinity);
          setHoveredSection(null);
        }}
        className="pointer-events-auto relative hidden md:flex items-center gap-1 pl-3 pr-2.5 py-1.5 rounded-full bg-[#0d0709]/90 backdrop-blur-xl border border-white/[0.12] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.85),0_0_1px_1px_rgba(223,170,162,0.14)]"
      >
        {/* Subtle Top Rim Light */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/35 to-transparent pointer-events-none" />

        {/* Left: Brand Monogram Link to Home with Magnetic Scaling */}
        <div className="flex items-center pr-2">
          <MagneticMonogram mouseX={mouseX} onClick={handleHomeClick} />
          <span className="h-3.5 w-[1px] bg-border-subtle ml-1.5" />
        </div>

        {/* Navigation Links with Componentry Magnetic Proximity Physics & Active Glow */}
        <div className="flex items-center gap-1">
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
