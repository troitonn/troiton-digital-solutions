
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
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

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    } else if (location.pathname !== '/') {
      // If we're not on the homepage, navigate to homepage first
      window.location.href = `/#${sectionId}`;
    }
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
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12">
          <Link 
            to="/" 
            className={cn(
              "text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide",
              location.pathname === "/" && "text-troiton-400"
            )}
          >
            INÍCIO
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-troiton-500 transition-all",
              location.pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
            )}></span>
          </Link>
          
          <button 
            onClick={() => scrollToSection('servicos')}
            className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide"
          >
            NEGÓCIOS E PRODUTOS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </button>
          
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide"
          >
            SOBRE
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </button>
          
          <Link 
            to="/tecnologias" 
            className={cn(
              "text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide",
              location.pathname === "/tecnologias" && "text-troiton-400"
            )}
          >
            EFICIÊNCIA OPERACIONAL
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-troiton-500 transition-all",
              location.pathname === "/tecnologias" ? "w-full" : "w-0 group-hover:w-full"
            )}></span>
          </Link>
          
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide"
          >
            CONTATO
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </button>
        </div>
        
        <button 
          className="hidden md:block bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-6 py-2 rounded-md font-medium transition-colors relative group overflow-hidden uppercase tracking-wide"
          onClick={() => scrollToSection('contato')}
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
          <span className="relative">FALE CONOSCO</span>
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
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            INÍCIO
          </Link>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
          >
            NEGÓCIOS E PRODUTOS
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
          >
            SOBRE
          </button>
          <Link 
            to="/tecnologias"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            EFICIÊNCIA OPERACIONAL
          </Link>
          <button 
            onClick={() => scrollToSection('contato')}
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
          >
            CONTATO
          </button>
          <button 
            className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-6 py-3 rounded-md font-medium w-full transition-colors uppercase tracking-wide"
            onClick={() => scrollToSection('contato')}
          >
            FALE CONOSCO
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
