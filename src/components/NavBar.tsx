// Navbar adaptado com dropdown estilo Klabin, mantendo sua estrutura
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const dropdownItems = [
  {
    title: 'NEGÓCIOS E PRODUTOS',
    image: 'https://images.unsplash.com/photo-1581090700227-1e8a0c2988b9?fit=crop&w=600&q=80',
    links: [
      { name: 'Serviços', id: 'servicos' },
      { name: 'Projetos Recentes', id: 'projetos' },
    ],
  },
  {
    title: 'EFICIÊNCIA OPERACIONAL',
    image: 'https://images.unsplash.com/photo-1581092580497-74c3dcac5d3f?fit=crop&w=600&q=80',
    links: [
      { name: 'Tecnologias', path: '/tecnologias' },
      { name: 'Processos', id: 'eficiencia' },
    ],
  },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-troiton-800/50 py-3' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img src="/lovable-uploads/8c305a3c-3e8f-4fc6-ad19-b4636b961ab1.png" alt="Troiton Projects Logo" className="h-14 mr-2" />
        </Link>

        <div className="hidden md:flex space-x-10 ml-auto mr-8">
          <Link to="/" className={cn('text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm', location.pathname === '/' && 'text-troiton-400')}>
            INÍCIO
            <span className={cn('absolute -bottom-1 left-0 h-0.5 bg-troiton-500 transition-all', location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full')}></span>
          </Link>

          {dropdownItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button className="text-gray-300 hover:text-troiton-400 font-medium uppercase tracking-wide text-sm flex items-center gap-1">
                {item.title} <ChevronDown size={14} />
              </button>
              {hoveredIndex === index && (
                <div className="absolute top-10 left-0 bg-white text-black w-[600px] rounded shadow-lg p-4 grid grid-cols-2 gap-4 z-50">
                  <div className="space-y-2">
                    {item.links.map((link, idx) => (
                      link.path ? (
                        <Link
                          key={idx}
                          to={link.path}
                          className="block text-sm hover:text-green-600"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <button
                          key={idx}
                          onClick={() => scrollToSection(link.id)}
                          className="block text-sm text-left hover:text-green-600"
                        >
                          {link.name}
                        </button>
                      )
                    ))}
                  </div>
                  <img
                    src={item.image}
                    alt="submenu"
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
              )}
            </div>
          ))}

          <Link to="/sobre" className={cn('text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm', location.pathname === '/sobre' && 'text-troiton-400')}>
            SOBRE
            <span className={cn('absolute -bottom-1 left-0 h-0.5 bg-troiton-500 transition-all', location.pathname === '/sobre' ? 'w-full' : 'w-0 group-hover:w-full')}></span>
          </Link>

          <button onClick={() => scrollToSection('vagas')} className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm">
            OPORTUNIDADES PROFISSIONAIS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </button>

          <button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm">
            CONTATO
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </button>
        </div>

        <button className="hidden md:block bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-8 py-3 rounded-md font-medium transition-colors relative group overflow-hidden uppercase tracking-wide text-sm" onClick={() => scrollToSection('contato')}>
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
          <span className="relative">FALE CONOSCO</span>
        </button>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={cn('fixed inset-0 bg-black/95 backdrop-blur-md z-40 pt-20 px-4 md:hidden transform transition-transform duration-300 ease-in-out', isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full')}>
        <div className="flex flex-col space-y-6 items-center text-lg">
          <Link to="/" className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide" onClick={() => setIsMobileMenuOpen(false)}>
            INÍCIO
          </Link>
          {dropdownItems.map((item, index) => (
            <div key={index} className="w-full">
              <p className="text-green-500 text-center font-bold mb-2">{item.title}</p>
              {item.links.map((link, i) => (
                link.path ? (
                  <Link
                    key={i}
                    to={link.path}
                    className="block py-1 text-sm text-center text-gray-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={i}
                    onClick={() => {
                      scrollToSection(link.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block py-1 text-sm w-full text-center text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </button>
                )
              ))}
            </div>
          ))}
          <Link to="/sobre" className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide" onClick={() => setIsMobileMenuOpen(false)}>
            SOBRE
          </Link>
          <button onClick={() => { scrollToSection('vagas'); setIsMobileMenuOpen(false); }} className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide">
            OPORTUNIDADES PROFISSIONAIS
          </button>
          <button onClick={() => { scrollToSection('contato'); setIsMobileMenuOpen(false); }} className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide">
            CONTATO
          </button>
          <button className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-6 py-3 rounded-md font-medium w-full transition-colors uppercase tracking-wide" onClick={() => { scrollToSection('contato'); setIsMobileMenuOpen(false); }}>
            FALE CONOSCO
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
