"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from "framer-motion";
import { playHaptic } from "@/lib/audio";

export interface DockItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  badge?: number | string;
}

export interface MagneticDockProps {
  items: DockItem[];
  iconSize?: number;
  maxScale?: number;
  magneticDistance?: number;
  showLabels?: boolean;
  position?: "top" | "bottom" | "left" | "right";
  variant?: "glass" | "solid" | "transparent";
  className?: string;
}

function DockIcon({
  item,
  mouseX,
  iconSize = 44,
  maxScale = 1.32,
  magneticDistance = 140,
  showLabels = true,
  position = "top",
}: {
  item: DockItem;
  mouseX: MotionValue<number>;
  iconSize?: number;
  maxScale?: number;
  magneticDistance?: number;
  showLabels?: boolean;
  position?: "top" | "bottom" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Compute horizontal distance from cursor to center of this icon
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: iconSize,
    };
    return val - (bounds.x + bounds.width / 2);
  });

  // Calculate target scale based on proximity to cursor
  const targetScale = useTransform(
    distance,
    [-magneticDistance, 0, magneticDistance],
    [1, maxScale, 1]
  );

  // Apply smooth spring physics
  const springScale = useSpring(targetScale, {
    stiffness: 340,
    damping: 24,
    mass: 0.15,
  });

  const handleClick = (e: React.MouseEvent) => {
    playHaptic(580, 0.03);
    if (item.onClick) {
      item.onClick();
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playHaptic(420, 0.015);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const content = (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative flex flex-col items-center justify-center cursor-pointer select-none group"
    >
      <motion.div
        style={{
          width: iconSize,
          height: iconSize,
          scale: springScale,
        }}
        className={`relative flex items-center justify-center rounded-2xl transition-colors duration-300 ${
          item.isActive
            ? "bg-accent/20 text-accent border border-accent/40 shadow-[0_0_16px_rgba(223,170,162,0.22)]"
            : "bg-white/[0.04] text-ink-secondary hover:text-ink hover:bg-white/[0.09] border border-white/[0.08] hover:border-white/[0.18]"
        }`}
      >
        {/* Icon slot */}
        <div className="w-5 h-5 flex items-center justify-center transition-transform duration-200">
          {item.icon}
        </div>

        {/* Optional Badge */}
        {item.badge !== undefined && (
          <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-accent text-bg text-[9px] font-mono font-bold flex items-center justify-center">
            {item.badge}
          </span>
        )}

        {/* Active Ambient Glow */}
        {item.isActive && (
          <span className="absolute inset-0 rounded-2xl bg-accent/15 blur-sm -z-10 pointer-events-none" />
        )}
      </motion.div>

      {/* Desktop Active Indicator Dot under the icon */}
      <div className="hidden md:flex h-1.5 items-center justify-center mt-1">
        {item.isActive ? (
          <motion.span
            layoutId="activeDockDot"
            className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(223,170,162,0.8)]"
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
          />
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-transparent" />
        )}
      </div>

      {/* Mobile Mini Label: visible on smaller touch screens */}
      <span
        className={`md:hidden font-mono text-[9px] uppercase tracking-wider mt-1 transition-colors ${
          item.isActive ? "text-accent font-medium" : "text-muted"
        }`}
      >
        {item.label}
      </span>

      {/* Floating Tooltip Label (Desktop Hover) */}
      {showLabels && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{
                opacity: 0,
                y: position === "top" ? 8 : -8,
                scale: 0.92,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: position === "top" ? 6 : -6,
                scale: 0.92,
              }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className={`hidden md:block absolute left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#130b0e]/95 border border-white/15 backdrop-blur-md shadow-2xl text-ink font-mono text-[11px] uppercase tracking-[0.16em] whitespace-nowrap pointer-events-none z-50 ${
                position === "top" ? "top-full mt-2.5" : "bottom-full mb-2.5"
              }`}
            >
              <span>{item.label}</span>
              {item.isActive && (
                <span className="ml-1.5 text-accent text-[9px]">✦</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );

  if (item.href) {
    return (
      <Link href={item.href} aria-label={item.label}>
        {content}
      </Link>
    );
  }

  return content;
}

export function MagneticDock({
  items,
  iconSize = 44,
  maxScale = 1.32,
  magneticDistance = 140,
  showLabels = true,
  position = "top",
  variant = "glass",
  className = "",
}: MagneticDockProps) {
  const mouseX = useMotionValue(Infinity);

  const variantStyles = {
    glass:
      "bg-[#0d0709]/85 backdrop-blur-xl border border-white/[0.12] shadow-[0_16px_40px_-8px_rgba(0,0,0,0.85),0_0_1px_1px_rgba(223,170,162,0.14)]",
    solid: "bg-[#110a0d] border border-white/15 shadow-2xl",
    transparent: "bg-transparent border border-transparent",
  };

  return (
    <motion.nav
      role="navigation"
      aria-label="Main Navigation Dock"
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${variantStyles[variant]} ${className}`}
    >
      {/* Subtle Top Rim Light */}
      <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent pointer-events-none" />

      {items.map((item) => (
        <DockIcon
          key={item.id}
          item={item}
          mouseX={mouseX}
          iconSize={iconSize}
          maxScale={maxScale}
          magneticDistance={magneticDistance}
          showLabels={showLabels}
          position={position}
        />
      ))}
    </motion.nav>
  );
}
