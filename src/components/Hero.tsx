
import { ArrowRight, Database, Server, Globe, Lock, Code, Zap, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import auroraHero from '@/assets/aurora-hero.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${auroraHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-troiton-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-troiton-300 rounded-full animate-pulse animation-delay-4000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Tag line with Sparkle */}
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full mb-12 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-medium tracking-wide">TRANSFORMAMOS O FUTURO DOS NEGÓCIOS</span>
          </div>
          
          {/* Main Heading - Mane.com Style */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-none tracking-tight">
            <span className="block">INOVAÇÃO</span>
            <span className="block bg-gradient-to-r from-primary via-troiton-300 to-troiton-500 bg-clip-text text-transparent">
              ALÉM DO
            </span>
            <span className="block">ESPERADO</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Desenhar, estruturar e implementar soluções tecnológicas que otimizam operações e garantem escalabilidade — com agilidade, inteligência e foco em governança.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contato')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg group"
            >
              Iniciar Transformação
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('servicos')}
              className="border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm"
            >
              Nossos Serviços
            </Button>
          </div>
          
          {/* Technology Icons */}
          <div className="flex flex-wrap justify-center gap-12 mb-8">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center mb-4 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                <Database className="w-10 h-10 text-primary" />
              </div>
              <span className="text-sm text-gray-300 font-medium tracking-wide">ERP</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center mb-4 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                <Server className="w-10 h-10 text-primary" />
              </div>
              <span className="text-sm text-gray-300 font-medium tracking-wide">INFRAESTRUTURA</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center mb-4 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <span className="text-sm text-gray-300 font-medium tracking-wide">CLOUD</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center mb-4 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <span className="text-sm text-gray-300 font-medium tracking-wide">SEGURANÇA</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center mb-4 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                <Code className="w-10 h-10 text-primary" />
              </div>
              <span className="text-sm text-gray-300 font-medium tracking-wide">DESENVOLVIMENTO</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center mb-4 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <span className="text-sm text-gray-300 font-medium tracking-wide">AUTOMAÇÃO</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
