import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import MegaMenuCards from './MegaMenuCards';

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fecha o menu mobile ao navegar
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          TROITON
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Início
          </Link>
          <MegaMenuCards />
          <Link to="/contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 pb-4">
          <Link to="/" className="block py-2 text-sm font-medium hover:text-primary">
            Início
          </Link>
          <MegaMenuCards isMobile />
          <Link to="/contato" className="block py-2 text-sm font-medium hover:text-primary">
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
