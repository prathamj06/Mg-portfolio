import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0607",
          subtle: "#100a0c",
        },
        surface: {
          DEFAULT: "#150d10",
          elevated: "#1d1216",
          hover: "#25181e",
          active: "#2e1e25",
        },
        wine: {
          dark: "#200a0e",
          rich: "#3e1418", // Extracted from monograph bottom field
          deep: "#4e1a20",
          accent: "#8b2e3a",
        },
        ink: {
          DEFAULT: "#f6efeb", // Extracted from monograph parchment text
          secondary: "#c4b4ae",
        },
        muted: "#88756f",
        subtle: "#544642",
        accent: {
          DEFAULT: "#dfaaa2", // Refined warm rose-parchment
          light: "#f2d3cd",
          parchment: "#f5ebe1", // Extracted from monograph top field
          dim: "rgba(223, 170, 162, 0.1)",
        },
        border: {
          subtle: "rgba(223, 170, 162, 0.08)",
          strong: "rgba(223, 170, 162, 0.22)",
          wine: "rgba(139, 46, 58, 0.35)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
