// components/NavBar.tsx
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import MegaMenuCards from './MegaMenuCards';

const dropdownItems = [
  { label: "NEGÓCIOS E PRODUTOS", category: "Negócios e Produtos", id: "produtos" },
  { label: "OPERAÇÕES", category: "Eficiência Operacional", id: "operacoes" },
  { label: "TECNOLOGIA", category: "Tecnologia", id: "tecnologia" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-troiton-800/50 py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img
            src="/lovable-uploads/HOME.jpg"
            alt="Troiton Logo"
            className="h-14 mr-2"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 ml-auto mr-8 relative">
          {dropdownItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.category)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm flex flex-col items-start leading-tight">
                <span>{item.label.split(' ')[0]}</span>
                <span>{item.label.split(' ')[1]}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
              </button>
              {activeDropdown === item.category && (
                <div className="fixed left-1/2 transform -translate-x-1/2 top-20 w-[95vw] max-w-6xl bg-white text-black p-4 md:p-6 shadow-2xl rounded-xl z-[9999] border border-gray-200 mx-auto">
                  <MegaMenuCards category={item.category} />
                </div>
              )}
            </div>
          ))}

          <Link to="/sobre" className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm">SOBRE</Link>

          <Link to="/vagas" className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm">#SEJATROITON+</Link>
        </div>

        {/* Botão de contato */}
        <button
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden md:block bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-8 py-3 rounded-md font-medium transition-colors relative group overflow-hidden uppercase tracking-wide text-sm"
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
          <span className="relative">FALE CONOSCO</span>
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-md z-40 pt-20 px-4 md:hidden transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 items-center text-lg">
          {dropdownItems.map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}`}
              className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link to="/sobre" className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide">SOBRE</Link>
          <Link to="/vagas" className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide">#SEJATROITON+</Link>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-6 py-3 rounded-md font-medium w-full transition-colors uppercase tracking-wide"
          >
            FALE CONOSCO
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
