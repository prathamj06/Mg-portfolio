"use client";

import React, { useContext, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePageTransition } from "@/context/PageTransitionContext";

function FrozenRoute({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { direction, isInitialLoad } = usePageTransition();

  // Coplanar horizontal slide at the EXACT SAME LEVEL:
  // Strictly NO scale (scale = 1), NO 3D z-depth, NO backside-to-front depth.
  //
  // When direction === 1 (clicked right-side option from header):
  // - Current page exits: slides from x: 0 to x: 80px (moving to the right, fading out)
  // - Next page enters: slides from x: -80px to x: 0 (moving to the right, fading in)
  // Both pages glide together from left to right at the exact same level!
  //
  // When direction === -1 (clicked left-side option on header):
  // - Current page exits: slides from x: 0 to x: -80px (moving to the left, fading out)
  // - Next page enters: slides from x: +80px to x: 0 (moving to the left, fading in)
  // Both pages glide together from right to left at the exact same level!

  const xDistance = 80;
  const enterX = isInitialLoad || direction === 0 ? 0 : direction === 1 ? -xDistance : xDistance;
  const exitX = direction === 1 ? xDistance : -xDistance;

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Top Directional Telemetry Shimmer */}
      <motion.div
        key={`shimmer-${direction}-${pathname}`}
        initial={{ opacity: 0.6, scaleX: 0 }}
        animate={{ opacity: 0, scaleX: 1 }}
        style={{
          originX: direction === 1 ? 0 : 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="fixed top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent pointer-events-none z-50 transform-gpu"
      />

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={pathname}
          initial={{
            x: enterX,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: exitX,
            opacity: 0,
          }}
          transition={{
            duration: 0.52,
            ease: [0.25, 1, 0.5, 1], // Smooth luxury cubic-bezier, coplanar 2D
          }}
          className="w-full flex flex-col"
        >
          <FrozenRoute>{children}</FrozenRoute>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
