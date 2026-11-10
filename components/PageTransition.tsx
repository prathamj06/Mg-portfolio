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
  const { direction, transitionCount } = usePageTransition();

  // Coplanar horizontal slide at the EXACT SAME LEVEL:
  // Strictly NO scale (scale = 1), NO 3D z-depth, NO backside-to-front depth.
  //
  // Every time someone lands on the landing page (cold visit, refresh, navigation, or clicking MG),
  // it performs the smooth horizontal transition at the exact same level!
  const xDistance = 80;
  const enterX = direction === 1 ? -xDistance : xDistance;
  const exitX = direction === 1 ? xDistance : -xDistance;

  // Key combines pathname and transitionCount so that every visit or re-click triggers the transition
  const transitionKey = `${pathname}-${transitionCount}`;

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Top Directional Telemetry Shimmer */}
      <motion.div
        key={`shimmer-${transitionKey}`}
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

      <AnimatePresence mode="popLayout" initial={true}>
        <motion.div
          key={transitionKey}
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
