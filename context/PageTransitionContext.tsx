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
  direction: number; // 1 = left to right (clicked right option), -1 = right to left (clicked left option), 0 = initial
  setDirection: (dir: number) => void;
  isInitialLoad: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  direction: 1,
  setDirection: () => {},
  isInitialLoad: true,
});

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null);
  const [direction, setDirection] = useState<number>(0);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    // Initial mount: do not apply sideways displacement
    if (prevPathRef.current === null) {
      prevPathRef.current = pathname;
      setIsInitialLoad(false);
      return;
    }

    if (prevPathRef.current !== pathname) {
      const prevIndex = NAV_ORDER[prevPathRef.current] ?? 0;
      const currIndex = NAV_ORDER[pathname] ?? 0;

      // If clicked right side option (currIndex > prevIndex) => direction = 1 (left to right transition)
      // If clicked left side option (currIndex < prevIndex) => direction = -1 (right to left transition)
      setDirection(currIndex >= prevIndex ? 1 : -1);
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  return (
    <PageTransitionContext.Provider value={{ direction, setDirection, isInitialLoad }}>
      {children}
    </PageTransitionContext.Provider>
  );
}

export const usePageTransition = () => useContext(PageTransitionContext);
