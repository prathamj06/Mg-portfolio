import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-[#0a0607] pt-20 pb-14 mt-20 relative">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded border border-border-strong overflow-hidden bg-surface flex items-center justify-center">
                <Image
                  src="/assets/melerigamy-emblem.jpg"
                  alt="Melerigamy Emblem"
                  width={28}
                  height={28}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-serif text-xl tracking-[0.08em] text-ink font-normal">
                MELERIGAMY
              </span>
            </div>
            <p className="text-muted text-xs leading-relaxed max-w-[34ch]">
              An autonomous, student-led technical collective and research guild exploring RF, intelligence, silicon, and empirical science.
            </p>
            <span className="font-mono text-[11px] text-accent">
              FOLIO 01 // 08 · 30+ FIRST-YEAR UNDERGRADUATES
            </span>
          </div>

          {/* Research Disciplines */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
                Disciplines
              </h4>
              <Link href="/about" className="text-[10px] font-mono text-accent/70 hover:text-accent flex items-center gap-0.5">
                <span>In About Us</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </Link>
            </div>
            <ul className="flex flex-col gap-2 text-xs text-muted">
              <li><Link href="/about" className="hover:text-ink transition-colors">RF & Wireless Systems</Link></li>
              <li><Link href="/about" className="hover:text-ink transition-colors">Machine Learning & Autodiff</Link></li>
              <li><Link href="/about" className="hover:text-ink transition-colors">Electronics & FPGA Logic</Link></li>
              <li><Link href="/about" className="hover:text-ink transition-colors">Higher Mathematics</Link></li>
              <li><Link href="/about" className="hover:text-ink transition-colors">Cybersecurity & Firmware</Link></li>
              <li><Link href="/about" className="hover:text-ink transition-colors">Scientific Research</Link></li>
            </ul>
          </div>

          {/* Navigation & Archives */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-muted">
              <li><Link href="/about" className="hover:text-ink transition-colors">About Us (Full Monograph)</Link></li>
              <li><Link href="/#projects" className="hover:text-ink transition-colors">Technical Portfolio</Link></li>
              <li><Link href="/#sessions" className="hover:text-ink transition-colors">Sessions Archive</Link></li>
              <li><Link href="/#founders" className="hover:text-ink transition-colors">Founding Stewards</Link></li>
              <li><Link href="/#directory" className="hover:text-ink transition-colors">Members Directory</Link></li>
            </ul>
          </div>

          {/* Founding Members */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
              Founding Stewards
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted">
              <li>
                <a
                  href="https://www.linkedin.com/in/ishaan-chaturvedi-972948310/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
                >
                  <span>Ishaan Chaturvedi</span>
                  <ExternalLink className="w-3 h-3 text-accent" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dhruv-ghosal-841353247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
                >
                  <span>Dhruv Ghoshal</span>
                  <ExternalLink className="w-3 h-3 text-accent" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/keshav-gupta-83201431a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
                >
                  <span>Keshav Gupta</span>
                  <ExternalLink className="w-3 h-3 text-accent" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://github.com/melerigamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-ink transition-colors font-mono text-[11px]"
                >
                  <span>github.com/melerigamy</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted font-mono">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Melerigamy</span>
            <span>·</span>
            <span>Autonomous Student Research Collective</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-accent transition-colors">Atelier Monograph</Link>
            <span>·</span>
            <a href="mailto:melerigamy.research@gmail.com" className="hover:text-accent transition-colors">
              Dispatch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
