import { useEffect, useState, useRef } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { allTechnologies } from '@/data/technologies';
import { TechnologySection } from '@/components/TechnologySection';
import { Button } from '@/components/ui/button';
import { ArrowDown, Database, Globe, Lock, Server, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
const Technologies = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsHeaderVisible(true);

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              // Account for fixed header
              behavior: 'smooth'
            });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  const scrollToContact = () => {
    window.location.href = '/#contato';
  };
  return <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-troiton-900/40 via-black to-black -z-10"></div>
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMDI5MWMiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10 -z-10"></div>
      
      <NavBar />
      
      {/* Hero section for Technologies page */}
      <div ref={headerRef} className={`py-28 px-4 relative overflow-hidden transition-all duration-1000 ${isHeaderVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Animated background elements - adding the same effects as in Home */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-troiton-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto text-center max-w-4xl my-[20px]">
          <span className="inline-block px-5 py-1.5 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r from-troiton-500/20 to-blue-500/20 text-troiton-400 border border-troiton-500/30">
            Soluções Tecnológicas
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-troiton-400 to-blue-400 bg-clip-text text-transparent">Experiência</span> <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">com Tecnologias Líderes de Mercado</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Trabalhamos com um ecossistema completo de plataformas e tecnologias modernas para oferecer as melhores soluções para o seu negócio.
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Button className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-6 py-2 rounded-full flex items-center justify-center h-auto text-base" onClick={scrollToContact}>
              Fale com nossa equipe
            </Button>
            <Button className="bg-transparent border border-troiton-500/50 hover:bg-troiton-900/30 text-white px-6 py-2 rounded-full flex items-center justify-center h-auto text-base mt-4 sm:mt-0" variant="outline" onClick={() => {
            const techSection = document.getElementById('tech-showcase');
            techSection?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              Ver tecnologias <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Technology icons */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex justify-center flex-wrap gap-8 mb-16">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-troiton-700 to-troiton-900 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-troiton-700/20">
              <Database className="h-8 w-8 text-troiton-300" />
            </div>
            <span className="text-troiton-100 font-medium">ERP</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-troiton-700 to-troiton-900 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-troiton-700/20">
              <Server className="h-8 w-8 text-troiton-300" />
            </div>
            <span className="text-troiton-100 font-medium">Infraestrutura</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-troiton-700 to-troiton-900 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-troiton-700/20">
              <Globe className="h-8 w-8 text-troiton-300" />
            </div>
            <span className="text-troiton-100 font-medium">Cloud</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-troiton-700 to-troiton-900 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-troiton-700/20">
              <Lock className="h-8 w-8 text-troiton-300" />
            </div>
            <span className="text-troiton-100 font-medium">Segurança</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-troiton-700 to-troiton-900 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-troiton-700/20">
              <Code className="h-8 w-8 text-troiton-300" />
            </div>
            <span className="text-troiton-100 font-medium">Desenvolvimento</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-troiton-700 to-troiton-900 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-troiton-700/20">
              <Zap className="h-8 w-8 text-troiton-300" />
            </div>
            <span className="text-troiton-100 font-medium">Automação</span>
          </div>
        </div>
        
        {/* Tech showcase divider with updated text */}
        <div id="tech-showcase" className="relative py-8">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500/50 to-transparent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white via-troiton-100 to-white bg-clip-text text-transparent">Tecnologias e Ecossistemas</h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">Conheça as plataformas e soluções que temos experiêcias para ambientes tecnológicos.</p>
        </div>

        {/* Technology showcase - all logos in one section */}
        <TechnologySection technologies={allTechnologies} />
        
        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-troiton-800/80 to-troiton-900/80 p-10 rounded-3xl border border-troiton-700/50 backdrop-blur-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Precisando de soluções tecnológicas?</h3>
            <p className="text-gray-300 mb-8">
              Nossa equipe está pronta para ajudá-lo a escolher e implementar as melhores ferramentas para impulsionar seu negócio.
            </p>
            <Button className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-troiton-800 px-6 py-2 rounded-full flex items-center justify-center h-auto text-base mx-auto" onClick={scrollToContact}>
              Entre em contato agora
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>;
};
export default Technologies;