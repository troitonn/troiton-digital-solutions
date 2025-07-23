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

  // Fecha menu mobile ao trocar rota
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
      // Navega para homepage com hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-black/80 backdrop-blur-md border-b border-troiton-800/50 py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="/lovable-uploads/8c305a3c-3e8f-4fc6-ad19-b4636b961ab1.png" 
            alt="Troiton Projects Logo" 
            className="h-14 mr-2"
          />
        </Link>
        
        {/* Navegação Desktop */}
        <div className="hidden md:flex space-x-10 ml-auto mr-8">
          <Link 
            to="/" 
            className={cn(
              "text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm",
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
            className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm flex flex-col items-start leading-tight"
          >
            <span>NEGÓCIOS</span>
            <span>E PRODUTOS</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </button>
          
          <Link 
            to="/sobre"
            className={cn(
              "text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm",
              location.pathname === "/sobre" && "text-troiton-400"
            )}
          >
            SOBRE
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-troiton-500 transition-all",
              location.pathname === "/sobre" ? "w-full" : "w-0 group-hover:w-full"
            )}></span>
          </Link>
          
          <Link 
            to="/tecnologias" 
            className={cn(
              "text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm flex flex-col items-start leading-tight",
              location.pathname === "/tecnologias" && "text-troiton-400"
            )}
          >
            <span>EFICIÊNCIA</span>
            <span>OPERACIONAL</span>
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-troiton-500 transition-all",
              location.pathname === "/tecnologias" ? "w-full" : "w-0 group-hover:w-full"
            )}></span>
          </Link>
          
          <button 
            onClick={() => scrollToSection('vagas')}
            className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm"
          >
            OPORTUNIDADES PROFISSIONAIS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </button>
          
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm"
          >
            CONTATO
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </button>
        </div>
        
        <button 
          className="hidden md:block bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-8 py-3 rounded-md font-medium transition-colors relative group overflow-hidden uppercase tracking-wide text-sm"
          onClick={() => scrollToSection('contato')}
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
          <span className="relative">FALE CONOSCO</span>
        </button>
        
        {/* Botão menu mobile */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Menu mobile */}
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
            onClick={() => {
              scrollToSection('servicos');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
          >
            NEGÓCIOS E PRODUTOS
          </button>
          <Link 
            to="/sobre"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            SOBRE
          </Link>
          <Link 
            to="/tecnologias"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            EFICIÊNCIA OPERACIONAL
          </Link>
          <button 
            onClick={() => {
              scrollToSection('vagas');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
          >
            OPORTUNIDADES PROFISSIONAIS
          </button>
          <button 
            onClick={() => {
              scrollToSection('contato');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
          >
            CONTATO
          </button>
          <button 
            className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-6 py-3 rounded-md font-medium w-full transition-colors uppercase tracking-wide"
            onClick={() => {
              scrollToSection('contato');
              setIsMobileMenuOpen(false);
            }}
          >
            FALE CONOSCO
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
