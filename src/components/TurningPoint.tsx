
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
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
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-troiton-950/90 via-black to-black -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center opacity-10 -z-10"></div>
      
      {/* Animated particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-troiton-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-30 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-4000"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="inline-flex items-center bg-troiton-900/50 border border-troiton-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 text-troiton-400">
              <Zap className="w-4 h-4 mr-2" />
              Transformação Digital
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Cada solução é um</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 via-blue-400 to-purple-400">
                ponto de virada
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Tudo começa com um ponto de virada. Na Troiton Projects, 
              transformamos desafios em oportunidades através de soluções 
              tecnológicas inovadoras que revolucionam seu negócio.
            </p>
          </div>

          {/* Features Grid */}
          <div className={`grid md:grid-cols-3 gap-8 mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <Target className="w-12 h-12 text-troiton-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Foco no Resultado</h3>
              <p className="text-gray-300">Cada projeto é desenvolvido com foco em resultados mensuráveis e impacto real no seu negócio.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Inovação Constante</h3>
              <p className="text-gray-300">Utilizamos as mais avançadas tecnologias para manter sua empresa sempre à frente da concorrência.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Crescimento Sustentável</h3>
              <p className="text-gray-300">Nossas soluções são projetadas para escalar junto com o crescimento da sua empresa.</p>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-troiton-600 to-blue-600 hover:from-troiton-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg group relative overflow-hidden"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
              <span className="relative inline-flex items-center">
                Inicie sua transformação
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurningPoint;
