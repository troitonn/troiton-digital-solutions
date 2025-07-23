"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import MegaMenuCards from "./MegaMenuCards";

const menuItems = [
  {
    label: "Nossa Essência",
    href: "/nossa-essencia"
  },
  {
    label: "Eficiência Operacional",
    category: "Eficiência Operacional"
  },
  {
    label: "Negócios e Produtos",
    category: "Negócios e Produtos"
  },
  {
    label: "Sustentabilidade",
    href: "/sustentabilidade"
  },
  {
    label: "Reputação",
    href: "/reputacao"
  },
  {
    label: "Relacionamento",
    href: "/relacionamento"
  }
];

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <nav className="bg-[#003E1F] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <img src="/logo.svg" alt="Logo Troiton" className="h-10" />
          </Link>
          <div className="flex space-x-6 items-center">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveCategory(item.category || null)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {item.href ? (
                  <Link href={item.href} className="hover:underline text-sm font-medium">
                    {item.label}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 hover:underline text-sm font-medium">
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                )}

                {item.category && activeCategory === item.category && (
                  <div className="absolute left-0 mt-2 z-50 w-[1000px]">
                    <MegaMenuCards category={item.category} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
