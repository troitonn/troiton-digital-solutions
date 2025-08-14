import { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { allTechnologies } from '@/data/technologies';
import { TechnologySection } from '@/components/TechnologySection';
import { Button } from '@/components/ui/button';
import { ArrowDown, Database, Globe, Lock, Server, Code, Zap, Cog } from 'lucide-react';

const Technologies = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHeaderVisible(true);
  }, []);

  const scrollToContact = () => window.location.href = '/#contato';

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-troiton-900/40 via-black to-black -z-10"></div>
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-10 -z-10"></div>

      <NavBar />

      <div ref={headerRef} className={`py-28 px-4 relative overflow-hidden transition-all duration-1000 ${isHeaderVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto text-center max-w-4xl my-[60px]">
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
              document.getElementById('tech-showcase')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Ver tecnologias <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative my-0 py-0">
        <div className="flex justify-center flex-wrap gap-8 mb-16">
          <IconItem icon={<Database className="h-8 w-8 text-troiton-300" />} label="ERP" />
          <IconItem icon={<Server className="h-8 w-8 text-troiton-300" />} label="Infraestrutura" />
          <IconItem icon={<Globe className="h-8 w-8 text-troiton-300" />} label="Cloud" />
          <IconItem icon={<Lock className="h-8 w-8 text-troiton-300" />} label="Segurança" />
          <IconItem icon={<Code className="h-8 w-8 text-troiton-300" />} label="Desenvolvimento" />
          <IconItem icon={<Zap className="h-8 w-8 text-troiton-300" />} label="Automação" />
          <IconItem icon={<Cog className="h-8 w-8 text-troiton-300" />} label="Operações" />
        </div>

        <div id="tech-showcase" className="relative py-8">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500/50 to-transparent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white via-troiton-100 to-white bg-clip-text text-transparent my-[7px]">
            Tecnologias e Ecossistemas
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Conheça as plataformas e soluções que temos experiências para ambientes tecnológicos.
          </p>
        </div>

        <TechnologySection technologies={allTechnologies} />

        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-troiton-800/80 to-troiton-900/80 p-10 rounded-3xl border border-troiton-700/50 backdrop-blur-lg my-[40px]">
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
    </div>
  );
};

const IconItem = ({ icon, label }: { icon: JSX.Element, label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 bg-gradient-to-br from-troiton-700 to-troiton-900 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-troiton-700/20">
      {icon}
    </div>
    <span className="text-troiton-100 font-medium">{label}</span>
  </div>
);

export default Technologies;
