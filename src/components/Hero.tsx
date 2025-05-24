
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-[100px] overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500 to-transparent"></div>
      </div>

      {/* Corporate Background Images */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
          alt="Tecnologia e programação"
          className="absolute top-0 right-0 w-1/3 h-1/2 object-cover opacity-5"
        />
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
          alt="Circuitos tecnológicos"
          className="absolute bottom-0 left-0 w-1/3 h-1/2 object-cover opacity-5"
        />
      </div>

      {/* Animated Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-troiton-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="inline-flex items-center bg-troiton-900/50 border border-troiton-700/50 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6 text-troiton-400 mx-auto">
              <span className="w-2 h-2 bg-troiton-500 rounded-full mr-2 animate-pulse"></span>
              Inovação em TI para sua empresa
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight mx-auto max-w-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">Projetos tecnológicos</span> que impulsionam seu negócio
            </h1>
            <p className="text-gray-400 mb-8 max-w-4xl text-center font-medium text-base mx-auto">
              A Troiton Projects oferece serviços completos de TI para transformar digitalmente sua empresa, desde implementação de sistemas até segurança e consultoria especializada.
            </p>
            
          </div>
          
          <div className={`mt-16 max-w-2xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} delay-300`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-troiton-500 to-blue-500 rounded-lg blur-sm opacity-30"></div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
