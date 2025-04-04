
import { useEffect, useState, useRef } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { technologyCategories } from '@/data/technologies';
import { TechnologySection } from '@/components/TechnologySection';
import { Button } from '@/components/ui/button';

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
              top: element.offsetTop - 80, // Account for fixed header
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-troiton-900/20 via-black to-black -z-10"></div>
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMDI5MWMiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10 -z-10"></div>
      
      <NavBar />
      
      {/* Hero section for Technologies page */}
      <div
        ref={headerRef}
        className={`py-28 px-4 relative overflow-hidden transition-all duration-1000 ${
          isHeaderVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Animated background elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow opacity-50 -z-10"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow opacity-50 -z-10"></div>
        
        <div className="container mx-auto text-center max-w-4xl">
          <span className="inline-block px-5 py-1.5 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r from-troiton-500/20 to-blue-500/20 text-troiton-400 border border-troiton-500/30">
            Tecnologias
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Experiência com Diversas Plataformas de Mercado
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Atuamos com um ecossistema completo de plataformas e tecnologias líderes de mercado. Nossa equipe domina ferramentas de gestão, nuvem, colaboração, segurança, automação e desenvolvimento, garantindo soluções integradas, eficientes e personalizadas.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              className="bg-troiton-600 hover:bg-troiton-700 text-white px-8 py-6 rounded-full flex items-center justify-center h-auto text-lg"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Fale com nossa equipe
            </Button>
          </div>
        </div>
      </div>
      
      {/* Technology categories */}
      <div className="container mx-auto px-4 py-16">
        {technologyCategories.map((category) => (
          <TechnologySection key={category.id} category={category} />
        ))}
        
        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-troiton-800/80 to-troiton-900/80 p-10 rounded-3xl border border-troiton-700/50 backdrop-blur-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Precisa de soluções tecnológicas para sua empresa?</h3>
            <p className="text-gray-300 mb-8">
              Nossa equipe está pronta para ajudá-lo a escolher as melhores ferramentas e implementá-las de forma eficiente para impulsionar seu negócio.
            </p>
            <Button
              className="bg-white hover:bg-gray-200 text-troiton-800 px-8 py-6 rounded-full flex items-center justify-center h-auto text-lg mx-auto"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Technologies;
