
import { ArrowRight, Zap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      {
        threshold: 0.1,
      }
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-troiton-900/20 to-black"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      {/* Animated Orbs */}
      <div className="absolute -top-20 left-20 w-60 h-60 bg-troiton-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="inline-flex items-center bg-troiton-900/50 border border-troiton-700/50 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6 text-troiton-400">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Acelere sua transformação digital
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">transformar</span> sua empresa com tecnologia?
          </h2>
          
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossas soluções podem impulsionar seu negócio para o próximo nível.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contato" 
              className="group relative bg-gradient-to-r from-troiton-600 to-troiton-500 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-troiton-500/20 overflow-hidden"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative">Fale com um especialista</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#servicos" 
              className="group relative border border-troiton-500/50 hover:border-troiton-400 text-troiton-400 px-8 py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300 hover:bg-troiton-900/30"
            >
              <span className="relative">Conheça nossos serviços</span>
            </a>
          </div>
          
          {/* Futuristic Decorative Element */}
          <div className="mt-16 relative">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500 to-transparent"></div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-black border-2 border-troiton-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
