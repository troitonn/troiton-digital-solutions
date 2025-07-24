import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import DropdownMenu from './DropdownMenu'; // novo componente com layout 2 colunas

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const dropdownItems = [
    { label: "NEGÓCIOS E PRODUTOS", category: "Negócios e Produtos" },
    { label: "OPERAÇÕES", category: "Eficiência Operacional" },
    { label: "TECNOLOGIA", category: "Tecnologia" }
  ];

  return (
    <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300", isScrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-700 py-3" : "bg-transparent py-6")}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img src="/lovable-uploads/8c305a3c-3e8f-4fc6-ad19-b4636b961ab1.png" alt="Troiton Projects Logo" className="h-14" loading="eager" />
        </Link>

        <div className="hidden md:flex space-x-10 ml-auto mr-8 relative">
          {dropdownItems.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => setActiveDropdown(item.category)} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="text-green-900 hover:text-green-700 font-semibold transition-colors relative group uppercase tracking-wide text-sm flex flex-col items-start leading-tight">
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </button>
              {activeDropdown === item.category && (
                <div className="fixed left-1/2 transform -translate-x-1/2 top-20 w-[95vw] max-w-6xl bg-white text-black p-4 md:p-6 shadow-2xl rounded-xl z-[9999] border border-gray-200">
                  <DropdownMenu category={item.category} />
                </div>
              )}
            </div>
          ))}

          <Link to="/sobre" className={cn("text-green-900 hover:text-green-700 font-semibold transition-colors uppercase tracking-wide text-sm", location.pathname === "/sobre" && "text-green-700")}>SOBRE</Link>

          <Link to="/vagas" className="text-green-900 hover:text-green-700 font-semibold transition-colors uppercase tracking-wide text-sm">#SEJATROITON+</Link>
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu permanece igual */}
    </nav>
  );
};

export default NavBar;
