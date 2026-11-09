# Melerigamy — Official Web Platform (Next.js & Tailwind CSS)

An understated, contemporary, and premium web application built for **Melerigamy**, an unofficial student research collective of 30+ first-year undergraduate students exploring Radio Frequency (RF), Artificial Intelligence & Machine Learning, Embedded Electronics & FPGA, Higher Mathematics, Cybersecurity, and Scientific Instrumentation.

Rebuilt from the ground up using **Next.js (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✦ Tech Stack & Architecture

- **Framework:** Next.js 14 (App Router, Server & Client Components)
- **Styling:** Tailwind CSS with custom design tokens, fluid typography, and dark mode
- **Animations:** Framer Motion (staggered scroll reveals, layout animations, spring scroll progress)
- **Typography:** `@next/font/google` with *Cormorant Garamond* (classical Roman serif), *Plus Jakarta Sans*, and *JetBrains Mono*
- **Icons:** Lucide React
- **Audio Feedback:** Synthesized UI acoustic feedback via the Web Audio API

---

## ✦ Project Structure

```
MG/
├── app/
│   ├── layout.tsx             # Root layout with Google fonts and metadata
│   ├── page.tsx               # Main application assembling all sections
│   └── globals.css            # Tailwind directives, radial ambient background & grain overlay
├── components/
│   ├── Navbar.tsx             # Sticky navigation with blur transition, Command Palette trigger & audio toggle
│   ├── ScrollProgress.tsx     # Hairline starlight scroll progress bar (Framer Motion spring)
│   ├── Hero.tsx               # Editorial headline, metrics bar, CTA buttons & Signal Viewport
│   ├── SignalViewport.tsx     # Interactive 60fps HTML5 Canvas resonator with live pointer modulation
│   ├── About.tsx              # Clean origin, ethos, 3 foundational pillars & brand insignia card
│   ├── Domains.tsx            # 6 core research domains with code badges, topics & LaTeX formulas
│   ├── Projects.tsx           # Filterable flagship project cards with architecture modals
│   ├── Sessions.tsx           # Timeline of seminars & lab teardowns with syllabus modals
│   ├── Founders.tsx           # Profiles of Ishaan, Dhruv, and Keshav with verified LinkedIn links
│   ├── Directory.tsx          # 30+ member searchable & filterable directory with profile modals
│   ├── Join.tsx               # Initiation info, direct email/discord, and interactive interest form
│   ├── Footer.tsx             # Clean colophon, research domains, community links, founder links
│   └── CommandPalette.tsx     # Global Ctrl+K / Cmd+K search dialog
├── lib/
│   ├── data.ts                # Type-safe central data store for all community content
│   └── audio.ts               # Synthesizer utility for optional laboratory UI acoustic feedback
├── public/
│   └── assets/
│       └── melerigamy-emblem.jpg # Official brand insignia
├── tailwind.config.ts         # Obsidian ground, champagne starlight palette & font tokens
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── next.config.mjs            # Next.js configuration
```

---

## ✦ Development & Build Commands

### Run Development Server
```bash
npm run dev
```
Starts development server at `http://localhost:3000`.

### Build for Production
```bash
npm run build
```
Creates an optimized static / server production build.

### Start Production Server
```bash
npm run start
```
Runs the production server at `http://localhost:3000`.
