
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
          ? "bg-white bg-opacity-80 shadow-md backdrop-blur-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-troiton-700">
            TROITON<span className="text-troiton-500">PROJECTS</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-800 hover:text-troiton-500 font-medium transition-colors">Início</a>
          <a href="#servicos" className="text-gray-800 hover:text-troiton-500 font-medium transition-colors">Serviços</a>
          <a href="#sobre" className="text-gray-800 hover:text-troiton-500 font-medium transition-colors">Sobre</a>
          <a href="#contato" className="text-gray-800 hover:text-troiton-500 font-medium transition-colors">Contato</a>
        </div>
        
        <button className="hidden md:block bg-troiton-600 hover:bg-troiton-700 text-white px-6 py-2 rounded-md font-medium transition-colors btn-animation">
          Fale Conosco
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 items-center text-lg">
          <a 
            href="#inicio" 
            className="w-full text-center py-3 border-b border-gray-100 text-gray-800 hover:text-troiton-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Início
          </a>
          <a 
            href="#servicos" 
            className="w-full text-center py-3 border-b border-gray-100 text-gray-800 hover:text-troiton-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Serviços
          </a>
          <a 
            href="#sobre" 
            className="w-full text-center py-3 border-b border-gray-100 text-gray-800 hover:text-troiton-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre
          </a>
          <a 
            href="#contato" 
            className="w-full text-center py-3 border-b border-gray-100 text-gray-800 hover:text-troiton-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contato
          </a>
          <button className="bg-troiton-600 hover:bg-troiton-700 text-white px-6 py-3 rounded-md font-medium w-full transition-colors">
            Fale Conosco
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
