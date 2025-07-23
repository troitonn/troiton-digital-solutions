import React, { useState } from "react";
import MegaMenuCards from "./MegaMenuCards";

export default function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (category: string) => setActiveDropdown(category);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className="relative z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-green-700">
          TROITON
        </a>
        <div className="flex gap-8">
          {["Eficiência Operacional", "Negócios e Produtos"].map((category) => (
            <div
              key={category}
              className="relative"
              onMouseEnter={() => handleMouseEnter(category)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-sm font-semibold text-gray-800 hover:text-green-700 transition">
                {category}
              </button>
              {activeDropdown === category && (
                <div className="absolute left-0 top-full w-[950px] bg-[url('/assets/fundo-abstrato-verde.jpg')] bg-cover bg-no-repeat text-black p-6 shadow-lg rounded-xl">
                  <MegaMenuCards category={category} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
