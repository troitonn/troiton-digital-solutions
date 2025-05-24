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
            <div className="inline-flex items-center bg-troiton-900/50 border border-troiton-700/50 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6 text-troiton-400 mx-auto">
              <span className="w-2 h-2 bg-troiton-500 rounded-full mr-2 animate-pulse"></span>
              Inovação & Transformação
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight mx-auto max-w-4xl md:text-5xl">
              <span className="text-white">Cada solução é um</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">ponto de virada</span>
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-4xl text-center font-medium text-base mx-auto">
              Tudo começa with um ponto de virada. Na Troiton Projects, 
              transformamos desafios empresariais em oportunidades de crescimento 
              através de soluções tecnológicas inovadoras e estratégias digitais eficazes.
            </p>

            <div className={`mt-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-troiton-600 to-blue-600 hover:from-troiton-500 hover:to-blue-500 text-white px-10 py-5 rounded-full font-medium text-lg group relative overflow-hidden shadow-2xl hover:shadow-troiton-500/25 transition-all duration-300">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                <span className="relative inline-flex items-center">
                  Inicie sua transformação
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-3 gap-8 mt-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Target className="w-14 h-14 text-troiton-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-4 text-center">Foco no Resultado</h3>
            <p className="text-gray-300 text-center leading-relaxed">Cada projeto é desenvolvido com foco em resultados mensuráveis e impacto real no crescimento do seu negócio.</p>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Zap className="w-14 h-14 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-4 text-center">Inovação &amp; Cybersecurity</h3>
            <p className="text-gray-300 text-center leading-relaxed">Utilizamos tecnologia para manter sua empresa sempre à frente da concorrência.</p>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <TrendingUp className="w-14 h-14 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-4 text-center">Crescimento Sustentável</h3>
            <p className="text-gray-300 text-center leading-relaxed">Nossas soluções são projetadas para escalar junto com o crescimento da sua empresa.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default TurningPoint;