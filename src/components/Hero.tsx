import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-5 overflow-hidden">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">Projetos tecnológicos</span> que impulsionam seu negócio
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
              <div className="relative glass-card rounded-xl p-8 border border-troiton-500/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center p-4 bg-troiton-900/50 rounded-lg border border-troiton-700/30 transition-all duration-300 hover:border-troiton-500/50 hover:bg-troiton-800/30">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-troiton-500 to-blue-500 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Gestão de Projetos</h3>
                    <p className="text-gray-400 text-center">Implementamos projetos tecnológicos com metodologias ágeis</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-troiton-900/50 rounded-lg border border-troiton-700/30 transition-all duration-300 hover:border-troiton-500/50 hover:bg-troiton-800/30">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-troiton-500 to-blue-500 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Segurança Digital</h3>
                    <p className="text-gray-400 text-center">Protegemos seus dados com soluções avançadas de segurança</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-troiton-900/50 rounded-lg border border-troiton-700/30 transition-all duration-300 hover:border-troiton-500/50 hover:bg-troiton-800/30">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-troiton-500 to-blue-500 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Implantação</h3>
                    <p className="text-gray-400 text-center">Implantamos soluções customizadas para seu negócio</p>
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
