
import { ArrowRight, Code, Database, Layers } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500 to-transparent"></div>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Soluções <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">tecnológicas</span> que impulsionam seu negócio
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              A Troiton Projects oferece serviços completos de TI para transformar digitalmente sua empresa, desde implementação de sistemas até segurança e consultoria especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#servicos" className="group relative bg-gradient-to-r from-troiton-600 to-troiton-500 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-troiton-500/20 overflow-hidden">
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative">Nossos Serviços</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contato" className="group relative border border-troiton-500/50 hover:border-troiton-400 text-troiton-400 px-8 py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300 hover:bg-troiton-900/30">
                <span className="relative">Fale Conosco</span>
              </a>
            </div>
          </div>
          
          <div className={`mt-16 max-w-2xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} delay-300`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-troiton-500 to-blue-500 rounded-lg blur-sm opacity-30"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-troiton-500 to-blue-500 rounded-t-lg"></div>
                <div className="flex items-center px-4 py-2 border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-400">terminal@troiton:~</div>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="flex items-start mb-2">
                    <span className="text-troiton-500 mr-2">$</span>
                    <span className="text-gray-300">initialize_project</span>
                  </div>
                  <div className="flex items-start mb-2">
                    <span className="text-gray-400 ml-4">Loading modules...</span>
                  </div>
                  <div className="flex items-start mb-2">
                    <span className="text-gray-400 ml-4 flex items-center">
                      <Code className="w-4 h-4 mr-2 text-blue-400" />
                      <span>Development</span>
                      <span className="ml-2 text-troiton-400">✓</span>
                    </span>
                  </div>
                  <div className="flex items-start mb-2">
                    <span className="text-gray-400 ml-4 flex items-center">
                      <Database className="w-4 h-4 mr-2 text-purple-400" />
                      <span>Infrastructure</span>
                      <span className="ml-2 text-troiton-400">✓</span>
                    </span>
                  </div>
                  <div className="flex items-start mb-2">
                    <span className="text-gray-400 ml-4 flex items-center">
                      <Layers className="w-4 h-4 mr-2 text-yellow-400" />
                      <span>Integration</span>
                      <span className="ml-2 text-troiton-400">✓</span>
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-troiton-500 mr-2">$</span>
                    <span className="text-gray-300">launch --mode=production</span>
                    <span className="ml-2 animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
