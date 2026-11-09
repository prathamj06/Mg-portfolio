"use client";

import { usePathname } from "next/navigation";
import { BookOpen, Cpu, Radio, Users } from "lucide-react";
import { MagneticDock, DockItem } from "@/components/ui/magnetic-dock";

export default function Navbar() {
  const pathname = usePathname();

  const items: DockItem[] = [
    {
      id: "home",
      label: "Home",
      icon: (
        <span className="font-serif text-sm font-semibold tracking-wider text-accent">
          MG
        </span>
      ),
      href: "/",
      isActive: pathname === "/",
    },
    {
      id: "about",
      label: "About",
      icon: <BookOpen className="w-4 h-4" />,
      href: "/about",
      isActive: pathname === "/about",
    },
    {
      id: "projects",
      label: "Projects",
      icon: <Cpu className="w-4 h-4" />,
      href: "/projects",
      isActive: pathname === "/projects",
    },
    {
      id: "sessions",
      label: "Sessions",
      icon: <Radio className="w-4 h-4" />,
      href: "/sessions",
      isActive: pathname === "/sessions",
    },
    {
      id: "directory",
      label: "Directory",
      icon: <Users className="w-4 h-4" />,
      href: "/directory",
      isActive: pathname === "/directory",
    },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-3.5 sm:pt-5 px-4 pointer-events-none transition-all duration-300">
      <div className="pointer-events-auto">
        <MagneticDock
          items={items}
          iconSize={42}
          maxScale={1.32}
          magneticDistance={140}
          showLabels={true}
          position="top"
          variant="glass"
        />
      </div>
    </header>
  );
}
