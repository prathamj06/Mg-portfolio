"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { usePageTransition } from "@/context/PageTransitionContext";

export default function Template({ children }: { children: React.ReactNode }) {
  const { direction, isInitialLoad } = usePageTransition();

  useEffect(() => {
    // Reset window scroll position to the top smoothly on page change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // When clicking an option to the right in the header (direction === 1):
  // Transition is from left to right: starts at -70px (left) and glides smoothly into place at 0px (right).
  // When clicking an option to the left in the header (direction === -1):
  // Transition is from right to left: starts at +70px (right) and glides smoothly into place at 0px (left).
  // On initial cold visit/refresh: clean luxury fade without sideways displacement.
  const initialX = isInitialLoad || direction === 0 ? 0 : direction === 1 ? -70 : 70;
  const initialScale = isInitialLoad || direction === 0 ? 1 : 0.994;

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Soft Directional Telemetry Laser Shimmer along top rim */}
      <motion.div
        key={`laser-${direction}`}
        initial={{ opacity: 0.6, scaleX: 0 }}
        animate={{ opacity: 0, scaleX: 1 }}
        style={{
          originX: direction === 1 ? 0 : 1,
        }}
        transition={{
          duration: 0.85,
          ease: [0.25, 1, 0.5, 1], // Smooth luxury easeOut
        }}
        className="fixed top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent pointer-events-none z-50 transform-gpu"
      />

      {/* Direction-Aware Silky Smooth Page Motion Container */}
      <motion.div
        initial={{
          x: initialX,
          opacity: 0,
          scale: initialScale,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.72,
          ease: [0.25, 1, 0.5, 1], // Luxurious, velvety cubic-bezier curve that avoids sudden snapping
        }}
        className="w-full flex flex-col transform-gpu"
      >
        {children}
      </motion.div>
    </div>
  );
}
