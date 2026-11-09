"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { playHaptic } from "@/lib/audio";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  // Pixel-based cursor coordinates for snappy, full-bleed tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorOpacity = useMotionValue(0);

  // Snappy, responsive spring: eliminates lag while preserving smoothness
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D perspective tilt on text derived from window center
  const [windowSize, setWindowSize] = useState({ w: 1440, h: 900 });

  const textTiltX = useTransform(
    smoothY,
    [0, windowSize.h],
    [3.5, -3.5]
  );
  const textTiltY = useTransform(
    smoothX,
    [0, windowSize.w],
    [-4, 4]
  );

  useEffect(() => {
    setMounted(true);
    const updateSize = () => {
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    };

    updateSize();

    const handleMouseMove = (e: MouseEvent) => {
      cursorOpacity.set(1);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("resize", updateSize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, cursorOpacity]);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#070405] select-none"
    >
      {/* 1. Cinematic Studio Overhead Spotlight Beam — Adaptive Full-Width Centered */}
      <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-[90vw] max-w-[1150px] h-[85vh] origin-top flex flex-col items-center"
        >
          <svg
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Linear beam gradient running down the exact center axis */}
              <linearGradient
                id="beamGradient"
                x1="400"
                y1="0"
                x2="400"
                y2="800"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#f5ebe1" stopOpacity="0.25" />
                <stop offset="25%" stopColor="#dfaaa2" stopOpacity="0.14" />
                <stop offset="55%" stopColor="#3e1418" stopOpacity="0.32" />
                <stop offset="90%" stopColor="#070405" stopOpacity="0" />
              </linearGradient>
              <filter id="beamBlur" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="38" />
              </filter>
            </defs>

            {/* Symmetrical conical beam: Apex at (400,0), Base at (160,800) and (640,800) */}
            <polygon
              points="400,0 640,800 160,800"
              fill="url(#beamGradient)"
              filter="url(#beamBlur)"
            />
          </svg>

          {/* Overhead Light Fixture / Aperture Flare */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 w-64 h-16 bg-accent/25 rounded-full blur-xl pointer-events-none"
          />
        </motion.div>
      </div>

      {/* 2. Permanent Soft Volumetric Glow (Adaptive behind Wordmark) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-[85vw] max-w-[1200px] h-[360px] sm:h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(223, 170, 162, 0.16) 0%, rgba(62, 20, 24, 0.42) 42%, transparent 75%)",
            filter: "blur(65px)",
          }}
        />
      </div>

      {/* 3. Interactive Cursor Torchlight — Snappy, zero dead-zones on left/right/top/bottom */}
      {mounted && (
        <motion.div
          style={{
            left: smoothX,
            top: smoothY,
            x: "-50%",
            y: "-50%",
            opacity: cursorOpacity,
          }}
          className="fixed w-[520px] h-[520px] rounded-full pointer-events-none z-0"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(223, 170, 162, 0.14) 0%, rgba(62, 20, 24, 0.26) 38%, transparent 70%)",
              filter: "blur(48px)",
            }}
          />
        </motion.div>
      )}

      {/* 4. Central Wordmark: Melerigamy with Adaptive Viewport Scaling */}
      <div className="relative z-10 w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 flex flex-col items-center justify-center text-center">
        <motion.div
          style={{
            rotateX: textTiltX,
            rotateY: textTiltY,
            transformPerspective: 1200,
          }}
          className="relative cursor-default flex items-center justify-center max-w-full"
        >
          {/* Main Title Typography — Adaptive Viewport Clamp */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 26,
              scale: 0.94,
              filter: "blur(18px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25,
            }}
            onAnimationComplete={() => {
              playHaptic(520, 0.04);
            }}
            className="font-serif text-[clamp(2.75rem,8.8vw,10.5rem)] font-normal select-none tracking-[0.22em] -mr-[0.22em] uppercase py-3 leading-none inline-block text-transparent bg-clip-text whitespace-nowrap"
          >
            {/* 
              Single Text Element:
              - 500% background width with a single specular peak at 50%.
              - backgroundPosition sweeps from 85% to 15% (smooth left-to-right).
              - Traverses only 70% span, mathematically preventing any second sweep from entering.
              - Only ONE text node in DOM = completely eliminates doubled text or ghosting artifacts.
            */}
            <motion.span
              animate={{
                backgroundPosition: ["72% 0", "28% 0"],
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 1.2,
                duration: 5.5,
                ease: [0.25, 1, 0.35, 1],
                delay: 1.4,
              }}
              className="inline-block text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #f6efeb 0%, #dfaaa2 25%, #f6efeb 44%, #ffffff 49%, #ffffff 51%, #fbe7e4 54%, #dfaaa2 62%, #f6efeb 80%, #dfaaa2 100%)",
                backgroundSize: "500% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 35px rgba(223, 170, 162, 0.28))",
              }}
            >
              MELERIGAMY
            </motion.span>
          </motion.h1>
        </motion.div>
      </div>

      {/* 5. Understated Scroll Prompt Indicator (100% Centered) */}
      <div className="absolute bottom-8 sm:bottom-12 inset-x-0 flex justify-center z-10 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-2.5 text-muted hover:text-accent transition-colors"
        >
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 group cursor-pointer"
            aria-label="Scroll to About"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted group-hover:text-accent transition-colors">
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[1px] h-6 bg-gradient-to-b from-accent/60 to-transparent"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}