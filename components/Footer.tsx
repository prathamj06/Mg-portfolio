import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
              An unofficial, student-led technical and research community exploring RF, intelligence, silicon, and empirical science.
            </p>
            <span className="font-mono text-[11px] text-accent">
              FOLIO 01 // 08 · 30+ FIRST-YEAR UNDERGRADUATES
            </span>
          </div>

          {/* Research Domains */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
              Disciplines
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-muted">
              <li><Link href="#domains" className="hover:text-ink transition-colors">RF & Wireless Systems</Link></li>
              <li><Link href="#domains" className="hover:text-ink transition-colors">Machine Learning & Autodiff</Link></li>
              <li><Link href="#domains" className="hover:text-ink transition-colors">Electronics & FPGA Logic</Link></li>
              <li><Link href="#domains" className="hover:text-ink transition-colors">Higher Mathematics</Link></li>
              <li><Link href="#domains" className="hover:text-ink transition-colors">Cybersecurity & Firmware</Link></li>
              <li><Link href="#domains" className="hover:text-ink transition-colors">Scientific Research</Link></li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-muted">
              <li><Link href="#about" className="hover:text-ink transition-colors">About & Culture</Link></li>
              <li><Link href="#domains" className="hover:text-ink transition-colors">Disciplines</Link></li>
              <li><Link href="#sessions" className="hover:text-ink transition-colors">Sessions Archive</Link></li>
              <li><Link href="#founders" className="hover:text-ink transition-colors">Founding Stewards</Link></li>
              <li><Link href="#directory" className="hover:text-ink transition-colors">Members Directory</Link></li>
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
            </ul>
          </div>
        </div>

        {/* Monograph Motto Inscription */}
        <div className="py-5 border-t border-border-subtle text-center">
          <p className="font-serif italic text-xs text-accent/90 tracking-wide">
            &ldquo;Investigating the science behind technology, experimenting with its applications, and building across disciplines.&rdquo;
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            <span>© 2025–2026 Melerigamy Technical Community.</span>
            <span className="text-subtle"> Unofficial Student Collective.</span>
          </div>
          <div className="font-mono text-[11px] text-muted">
            Monograph Edition · Next.js · Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
