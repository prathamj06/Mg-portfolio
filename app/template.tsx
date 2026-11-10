"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { usePageTransition } from "@/context/PageTransitionContext";

export default function Template({ children }: { children: React.ReactNode }) {
  const { direction, isInitialLoad } = usePageTransition();

  useEffect(() => {
    // Reset window scroll position to the top instantly on page change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // When clicking an option to the right in the header (direction === 1):
  // Transition is from left to right: starts at -50px (left) and glides smoothly to 0px (right).
  // When clicking an option to the left in the header (direction === -1):
  // Transition is from right to left: starts at 50px (right) and glides smoothly to 0px (left).
  // On initial cold visit/refresh: clean luxury fade without sideways displacement.
  const initialX = isInitialLoad || direction === 0 ? 0 : direction === 1 ? -50 : 50;

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Subtle Telemetry Laser Shimmer across top rim on page entry */}
      <motion.div
        key={`laser-${direction}`}
        initial={{ opacity: 0.8, scaleX: 0 }}
        animate={{ opacity: 0, scaleX: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent/70 to-transparent pointer-events-none z-50 origin-center"
      />

      {/* Direction-Aware Smooth Page Motion Container */}
      <motion.div
        initial={{ x: initialX, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1], // Bespoke luxury cubic-bezier easeOut
        }}
        className="w-full flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}
