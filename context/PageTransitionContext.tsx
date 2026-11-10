"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export const NAV_ORDER: Record<string, number> = {
  "/": 0,
  "/about": 1,
  "/projects": 2,
  "/sessions": 3,
  "/directory": 4,
};

interface PageTransitionContextType {
  direction: number; // 1 = left to right, -1 = right to left
  setDirection: (dir: number) => void;
  transitionCount: number;
  triggerTransition: (dir?: number) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  direction: 1,
  setDirection: () => {},
  transitionCount: 0,
  triggerTransition: () => {},
});

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null);
  const [direction, setDirection] = useState<number>(1);
  const [transitionCount, setTransitionCount] = useState<number>(0);

  const triggerTransition = (dir?: number) => {
    if (dir !== undefined) {
      setDirection(dir);
    }
    setTransitionCount((prev) => prev + 1);
  };

  useEffect(() => {
    // When landing on initial mount (cold load or refresh)
    if (prevPathRef.current === null) {
      prevPathRef.current = pathname;
      // Landing on Home ("/") gets smooth entrance transition (left to right)
      setDirection(1);
      return;
    }

    if (prevPathRef.current !== pathname) {
      const prevIndex = NAV_ORDER[prevPathRef.current] ?? 0;
      const currIndex = NAV_ORDER[pathname] ?? 0;

      // If navigating to option on right: currIndex > prevIndex => direction = 1
      // If navigating to option on left: currIndex < prevIndex => direction = -1
      setDirection(currIndex >= prevIndex ? 1 : -1);
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  return (
    <PageTransitionContext.Provider
      value={{ direction, setDirection, transitionCount, triggerTransition }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
}

export const usePageTransition = () => useContext(PageTransitionContext);
