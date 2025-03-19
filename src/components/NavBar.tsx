
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <a href="#" className="flex items-center group">
          <img 
            src="/lovable-uploads/8c305a3c-3e8f-4fc6-ad19-b4636b961ab1.png" 
            alt="Troiton Projects Logo" 
            className="h-10 mr-2"
          />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group">
            Início
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#servicos" className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group">
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#sobre" className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group">
            Sobre
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#contato" className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group">
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </a>
        </div>
        
        <button className="hidden md:block bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-6 py-2 rounded-md font-medium transition-colors relative group overflow-hidden">
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
          <a 
            href="#inicio" 
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Início
          </a>
          <a 
            href="#servicos" 
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Serviços
          </a>
          <a 
            href="#sobre" 
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre
          </a>
          <a 
            href="#contato" 
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contato
          </a>
          <button className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-6 py-3 rounded-md font-medium w-full transition-colors">
            Fale Conosco
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
