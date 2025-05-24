
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap, Target, TrendingUp, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';

const TurningPoint = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black"
    >
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-troiton-900/10 to-transparent"></div>
      </div>
      
      {/* Floating particles with enhanced animations */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-troiton-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-2000 opacity-80"></div>
      <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-pulse animation-delay-4000 opacity-50"></div>
      <div className="absolute top-60 right-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse animation-delay-3000 opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="inline-flex items-center bg-gradient-to-r from-troiton-900/60 to-blue-900/60 border border-troiton-700/50 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8 text-troiton-300">
              <Lightbulb className="w-5 h-5 mr-3 text-troiton-400" />
              Inovação & Transformação
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Cada solução é um</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 via-blue-400 to-purple-400 animate-gradient-animation bg-200%">
                ponto de virada
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Tudo começa com um ponto de virada. Na Troiton Projects, 
              transformamos desafios empresariais em oportunidades de crescimento 
              através de soluções tecnológicas inovadoras e estratégias digitais eficazes.
            </p>

            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-troiton-600 to-blue-600 hover:from-troiton-500 hover:to-blue-500 text-white px-10 py-5 rounded-full font-medium text-lg group relative overflow-hidden shadow-2xl hover:shadow-troiton-500/25 transition-all duration-300"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                <span className="relative inline-flex items-center">
                  Inicie sua transformação
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-troiton-500/20 to-blue-500/20 rounded-3xl transform rotate-3 scale-105 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Equipe tecnológica trabalhando em soluções inovadoras"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">95%</div>
                  <div className="text-sm text-gray-300">Taxa de Sucesso</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-3 gap-8 mt-20 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Target className="w-14 h-14 text-troiton-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-4 text-center">Foco no Resultado</h3>
            <p className="text-gray-300 text-center leading-relaxed">Cada projeto é desenvolvido com foco em resultados mensuráveis e impacto real no crescimento do seu negócio.</p>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Zap className="w-14 h-14 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-4 text-center">Inovação Constante</h3>
            <p className="text-gray-300 text-center leading-relaxed">Utilizamos as mais avançadas tecnologias para manter sua empresa sempre à frente da concorrência.</p>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <TrendingUp className="w-14 h-14 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-4 text-center">Crescimento Sustentável</h3>
            <p className="text-gray-300 text-center leading-relaxed">Nossas soluções são projetadas para escalar junto com o crescimento da sua empresa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurningPoint;
