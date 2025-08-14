// components/NavBar.tsx
import { useState, useEffect, lazy, Suspense } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Lazy load do MegaMenuCards (apenas quando o dropdown abrir)
const MegaMenuCards = lazy(() => import('./MegaMenuCards'));

const dropdownItems = [
  { label: "NEGÓCIOS E PRODUTOS", category: "Negócios e Produtos", id: "produtos" },
  { label: "OPERAÇÕES", category: "Operações", id: "operacoes" },
  { label: "TECNOLOGIA", category: "Tecnologia", id: "tecnologia" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Scroll mais leve com rAF
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // estado inicial
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fechar menu mobile ao trocar de rota
  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  // Impedir scroll do body quando o menu mobile estiver aberto
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : original || '';
    return () => { document.body.style.overflow = original; };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out motion-reduce:transition-none",
        isScrolled
          ? "bg-black/80 md:backdrop-blur-md md:border-b md:border-troiton-800/50 py-3"
          : "bg-black/80 md:bg-transparent py-3 md:py-6"
      )}
      role="navigation"
      aria-label="Principal"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group" aria-label="Ir para a página inicial">
          {/* WebP + fallback PNG, dimensões pequenas para evitar layout shift */}
          <picture>
            <source srcSet="/lovable-uploads/logo-troiton.webp" type="image/webp" />
            <img
              src="/lovable-uploads/8c305a3c-3e8f-4fc6-ad19-b4636b961ab1.png"
              alt="Troiton Logo"
              className="h-14 mr-2 w-auto"
              loading="lazy"
              decoding="async"
              width={168}
              height={56}
            />
          </picture>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 ml-auto mr-8 relative">
          {dropdownItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.category)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm h-12 flex items-center"
                aria-haspopup="true"
                aria-expanded={activeDropdown === item.category}
                aria-controls={`dropdown-${item.id}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
              </button>

              {activeDropdown === item.category && (
                <div
                  id={`dropdown-${item.id}`}
                  className="fixed left-1/2 -translate-x-1/2 top-20 w-[95vw] max-w-6xl bg-white text-black shadow-2xl rounded-xl z-[9999] border border-gray-200"
                >
                  <Suspense fallback={<div className="p-8 text-center text-sm text-gray-600">Carregando…</div>}>
                    <MegaMenuCards category={item.category} />
                  </Suspense>
                </div>
              )}
            </div>
          ))}

          <Link
            to="/sobre"
            className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm h-12 flex items-center"
          >
            SOBRE
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="/vagas"
            className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm h-12 flex items-center"
          >
            #SEJATROITON+
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </Link>
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
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir/fechar menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (sem blur; fundo sólido) */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 bg-black/95 z-40 pt-20 px-4 md:hidden transform transition-transform duration-300 ease-in-out motion-reduce:transition-none",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 items-center text-lg">
          {dropdownItems.map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}`}
              className="w-full text-center py-4 border-b border-troiton-800/30 text-white hover:text-troiton-400 hover:bg-troiton-900/30 rounded-lg transition-all duration-200 uppercase tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/sobre"
            className="w-full text-center py-4 border-b border-troiton-800/30 text-white hover:text-troiton-400 hover:bg-troiton-900/30 rounded-lg transition-all duration-200 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            SOBRE
          </Link>

          <Link
            to="/vagas"
            className="w-full text-center py-4 border-b border-troiton-800/30 text-white hover:text-troiton-400 hover:bg-troiton-900/30 rounded-lg transition-all duration-200 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            #SEJATROITON+
          </Link>

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
