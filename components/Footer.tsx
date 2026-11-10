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
              An autonomous, student-led technical collective and research guild exploring RF, intelligence, silicon, and empirical science.
            </p>
          </div>

          {/* Research Disciplines */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
              Disciplines
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-muted">
              <li><Link href="/projects#rf-wireless" className="hover:text-ink transition-colors">Radio Frequency & Wireless</Link></li>
              <li><Link href="/projects#ai-ml" className="hover:text-ink transition-colors">Artificial Intelligence & ML</Link></li>
              <li><Link href="/projects#electronics-embedded" className="hover:text-ink transition-colors">Electronics & Embedded Systems</Link></li>
              <li><Link href="/projects#higher-mathematics" className="hover:text-ink transition-colors">Higher Mathematics & Theory</Link></li>
              <li><Link href="/projects#cybersecurity-systems" className="hover:text-ink transition-colors">Cybersecurity & Hardware Security</Link></li>
              <li><Link href="/projects#scientific-research" className="hover:text-ink transition-colors">Scientific Research & Instrumentation</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-muted">
              <li><Link href="/" className="hover:text-ink transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-ink transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-ink transition-colors">Projects</Link></li>
              <li><Link href="/sessions" className="hover:text-ink transition-colors">Sessions</Link></li>
              <li><Link href="/achievements" className="hover:text-ink transition-colors">Achievements</Link></li>
              <li><Link href="/#founders" className="hover:text-ink transition-colors">Founders</Link></li>
            </ul>
          </div>

          {/* Founding Members */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
              Founders
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

        {/* Bottom Colophon Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted font-mono">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Melerigamy</span>
            <span>·</span>
            <span>Autonomous Student Research Collective</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
