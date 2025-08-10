import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap, Target, TrendingUp, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';
const TurningPoint = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
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
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background matching Hero section style */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500 to-transparent"></div>
      </div>

      {/* Animated Orbs like Hero section */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-troiton-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="inline-flex items-center bg-troiton-900/50 border border-troiton-700/50 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium mb-8 text-troiton-400 mx-auto">
              <span className="w-2 h-2 bg-troiton-500 rounded-full mr-3 animate-pulse"></span>
              Excelência & Inovação
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight mx-auto max-w-5xl md:text-5xl">
              <span className="text-white">Transformamos</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400"> desafios</span>
              <br />
              <span className="text-white">em </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-troiton-400">oportunidades</span>
            </h2>
            
            <p className="text-gray-300 mb-10 max-w-3xl text-center font-medium text-lg mx-auto leading-relaxed">
              Na Troiton Projects, cada solução é cuidadosamente elaborada para gerar resultados excepcionais. 
              Combinamos experiência técnica sólida com visão estratégica para transformar sua empresa 
              através de soluções tecnológicas de ponta.
            </p>

            <div className={`mt-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="bg-gradient-to-r from-troiton-600 to-blue-600 hover:from-troiton-500 hover:to-blue-500 text-white px-12 py-6 rounded-full font-semibold text-lg group relative overflow-hidden shadow-2xl hover:shadow-troiton-500/25 transition-all duration-300 border border-troiton-500/20"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                <span className="relative inline-flex items-center">
                  Iniciar Transformação
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-3 gap-8 mt-24 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Target className="w-14 h-14 text-troiton-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-4 text-center">Estratégia Focada</h3>
            <p className="text-gray-300 text-center leading-relaxed">Desenvolvemos soluções estratégicas com foco em resultados mensuráveis e impacto real no crescimento sustentável do seu negócio.</p>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Zap className="w-14 h-14 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-4 text-center">Tecnologia Avançada</h3>
            <p className="text-gray-300 text-center leading-relaxed">Utilizamos as mais modernas tecnologias e práticas de segurança para manter sua empresa na vanguarda da inovação.</p>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <TrendingUp className="w-14 h-14 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-4 text-center">Resultados Duradouros</h3>
            <p className="text-gray-300 text-center leading-relaxed">Nossas soluções são arquitetadas para evoluir e escalar junto com sua empresa, garantindo crescimento contínuo.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default TurningPoint;
