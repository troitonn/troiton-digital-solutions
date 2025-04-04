
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToContact = () => {
    window.location.href = '/#contato';
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-black/80 backdrop-blur-md border-b border-troiton-800/50 py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="/lovable-uploads/8c305a3c-3e8f-4fc6-ad19-b4636b961ab1.png" 
            alt="Troiton Projects Logo" 
            className="h-16 mr-2"
          />
        </Link>
        
        {/* Desktop Navigation - INCREASED SPACING HERE */}
        <div className="hidden md:flex space-x-12">
          <Link to="/" className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group">
            Início
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/#servicos" className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group">
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/#sobre" className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group">
            Sobre
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/tecnologias" className={cn(
            "text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group",
            location.pathname === "/tecnologias" && "text-troiton-400"
          )}>
            Tecnologias
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-troiton-500 transition-all",
              location.pathname === "/tecnologias" ? "w-full" : "w-0 group-hover:w-full"
            )}></span>
          </Link>
          <Link to="/#contato" className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group">
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </Link>
        </div>
        
        <button 
          className="hidden md:block bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-6 py-2 rounded-md font-medium transition-colors relative group overflow-hidden"
          onClick={navigateToContact}
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
          <span className="relative">Fale Conosco</span>
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
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
          <Link 
            to="/"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            to="/#servicos"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Serviços
          </Link>
          <Link 
            to="/#sobre"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link 
            to="/tecnologias"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tecnologias
          </Link>
          <Link 
            to="/#contato"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contato
          </Link>
          <button 
            className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-6 py-3 rounded-md font-medium w-full transition-colors"
            onClick={() => {
              setIsMobileMenuOpen(false);
              navigateToContact();
            }}
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
