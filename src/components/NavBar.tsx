// troiton-navbar.tsx
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const dropdownData = {
  negocios: {
    items: [
      { title: 'Consultoria em Tecnologia', link: '/consultoria', img: 'https://images.unsplash.com/photo-1581090700227-1e8a1ebc87e3?auto=format&fit=crop&w=500&q=60' },
      { title: 'Automação Industrial', link: '/automacao', img: 'https://images.unsplash.com/photo-1581090700117-0b18a8ba8e1f?auto=format&fit=crop&w=500&q=60' },
    ],
  },
  eficiencia: {
    items: [
      { title: 'Eficiência Energética', link: '/eficiencia-energetica', img: 'https://images.unsplash.com/photo-1616627989390-fd7f35a09b9a?auto=format&fit=crop&w=500&q=60' },
      { title: 'Gestão de Projetos', link: '/gestao-projetos', img: 'https://images.unsplash.com/photo-1603354350317-6cc4b1037b78?auto=format&fit=crop&w=500&q=60' },
    ],
  },
};

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
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

  const renderDropdown = (key: string) => {
    const { items } = dropdownData[key];
    return (
      <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-md p-4 min-w-[400px] flex gap-4 z-40">
        {items.map((item, idx) => (
          <Link key={idx} to={item.link} className="flex flex-col hover:opacity-90">
            <img src={item.img} alt={item.title} className="w-36 h-24 object-cover rounded-md mb-1" />
            <span className="text-gray-800 text-sm font-medium">{item.title}</span>
          </Link>
        ))}
      </div>
    );
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

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 ml-auto mr-8 text-sm font-medium text-white uppercase tracking-wide relative">
          <Link to="/" className={cn('group relative', location.pathname === '/' ? 'text-green-400' : 'text-white')}>INÍCIO</Link>

          <div className="relative" onMouseEnter={() => setOpenDropdown('negocios')} onMouseLeave={() => setOpenDropdown(null)}>
            <button className="flex items-center gap-1 group relative">
              NEGÓCIOS E PRODUTOS <ChevronDown size={16} />
            </button>
            {openDropdown === 'negocios' && renderDropdown('negocios')}
          </div>

          <div className="relative" onMouseEnter={() => setOpenDropdown('eficiencia')} onMouseLeave={() => setOpenDropdown(null)}>
            <button className="flex items-center gap-1 group relative">
              EFICIÊNCIA OPERACIONAL <ChevronDown size={16} />
            </button>
            {openDropdown === 'eficiencia' && renderDropdown('eficiencia')}
          </div>

          <Link to="/sobre" className={cn('group relative', location.pathname === '/sobre' ? 'text-green-400' : 'text-white')}>SOBRE</Link>

          <button onClick={() => scrollToSection('vagas')} className="group relative text-white">OPORTUNIDADES PROFISSIONAIS</button>
          <button onClick={() => scrollToSection('contato')} className="group relative text-white">CONTATO</button>
        </div>

        <button onClick={() => scrollToSection('contato')} className="hidden md:block bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md font-semibold text-sm uppercase">
          FALE CONOSCO
        </button>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 bg-black/95 backdrop-blur-md z-40 pt-20 px-4 md:hidden transform transition-transform duration-300 ease-in-out',
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="flex flex-col space-y-6 items-center text-lg text-white">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>INÍCIO</Link>
          <Link to="/consultoria" onClick={() => setIsMobileMenuOpen(false)}>Consultoria em Tecnologia</Link>
          <Link to="/automacao" onClick={() => setIsMobileMenuOpen(false)}>Automação Industrial</Link>
          <Link to="/eficiencia-energetica" onClick={() => setIsMobileMenuOpen(false)}>Eficiência Energética</Link>
          <Link to="/gestao-projetos" onClick={() => setIsMobileMenuOpen(false)}>Gestão de Projetos</Link>
          <Link to="/sobre" onClick={() => setIsMobileMenuOpen(false)}>SOBRE</Link>
          <button onClick={() => { scrollToSection('vagas'); setIsMobileMenuOpen(false); }}>OPORTUNIDADES</button>
          <button onClick={() => { scrollToSection('contato'); setIsMobileMenuOpen(false); }}>CONTATO</button>
          <button onClick={() => { scrollToSection('contato'); setIsMobileMenuOpen(false); }} className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md font-semibold">
            FALE CONOSCO
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
