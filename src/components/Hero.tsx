import { ArrowRight, Database, Server, Globe, Lock, Code, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import troitonAuroraVideo from '@/assets/TroitonAurora.mp4';

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
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={troitonAuroraVideo} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-troiton-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-troiton-300 rounded-full animate-pulse animation-delay-4000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center pt-32 -mt-6">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Tagline */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-primary font-medium tracking-wide text-sm uppercase">
              TRANSFORMAMOS O FUTURO DOS NEGÓCIOS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight tracking-tight">
            <span className="block">INOVAÇÃO</span>
            <span className="block bg-gradient-to-r from-primary via-troiton-300 to-troiton-500 bg-clip-text text-transparent">
              ALÉM DO
            </span>
            <span className="block">ESPERADO</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-gray-300 mb-6 max-w-xl mx-auto leading-relaxed font-light">
            Desenhar, estruturar e implementar soluções tecnológicas que otimizam operações e garantem escalabilidade — com agilidade, inteligência e foco em governança.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-white text-black hover:bg-gray-100 transition-all duration-200 px-6 py-2 rounded-lg text-sm font-medium"
            >
              Iniciar Transformação <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection('servicos')}
              className="border border-white/40 text-white hover:bg-white/10 transition-all duration-200 px-6 py-2 rounded-lg text-sm font-medium"
            >
              Nossos Serviços
            </button>
          </div>

          {/* Tech Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            {[
              { icon: <Database className="w-6 h-6 text-primary" />, label: 'ERP' },
              { icon: <Server className="w-6 h-6 text-primary" />, label: 'INFRAESTRUTURA' },
              { icon: <Globe className="w-6 h-6 text-primary" />, label: 'CLOUD' },
              { icon: <Lock className="w-6 h-6 text-primary" />, label: 'SEGURANÇA' },
              { icon: <Code className="w-6 h-6 text-primary" />, label: 'DESENVOLVIMENTO' },
              { icon: <Zap className="w-6 h-6 text-primary" />, label: 'AUTOMAÇÃO' }
            ].map(({ icon, label }, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center mb-2 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                  {icon}
                </div>
                <span className="text-xs text-gray-300 font-medium tracking-wide">{label}</span>
              </div>
            ))}
          </div>

          {/* Extra Tagline Below */}
          <p className="text-xs text-white/60 mt-2 tracking-wider font-light uppercase">
            Inovação & Transformação
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 pointer-events-none">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
