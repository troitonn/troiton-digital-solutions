import { useEffect, useState, useRef } from 'react';
import { CircuitBoard, Database, Server } from 'lucide-react';
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
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
  return <section id="sobre" ref={sectionRef} className="py-20 relative">
      {/* Futuristic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-troiton-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative bg-black border border-troiton-800/50 rounded-lg overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-troiton-500 to-blue-500"></div>
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Sobre a Troiton Projects" className="rounded-lg object-cover w-full max-w-lg opacity-70 hover:opacity-90 transition-opacity" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-troiton-500 rounded-full animate-pulse"></span>
                    <p className="text-xs text-gray-400">Sistema ativo</p>
                  </div>
                  <p className="text-xs text-gray-400">Troiton.Projects.v2.3</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="inline-flex items-center bg-troiton-900/50 border border-troiton-700/50 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-4 text-troiton-400">
              <span className="w-2 h-2 bg-troiton-500 rounded-full mr-2 animate-pulse"></span>
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Transformando empresas através da <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">tecnologia</span>
            </h2>
            <p className="text-gray-400 mb-6">
              A Troiton Projects nasceu com a missão de oferecer soluções tecnológicas que realmente transformam a forma como as empresas operam. Combinamos expertise técnica com uma abordagem consultiva para entregar resultados concretos.
            </p>
            <p className="text-gray-400 mb-8">
              Nossa equipe é composta por profissionais experientes e apaixonados por tecnologia, sempre em busca das melhores soluções para nossos clientes. Acreditamos que a tecnologia deve ser uma aliada no crescimento do seu negócio, não um obstáculo.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black/40 border border-troiton-800/50 p-6 rounded-lg relative group hover:bg-troiton-900/20 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-1 bg-troiton-500 rounded-t-lg"></div>
                <div className="flex items-center space-x-2 mb-2">
                  <CircuitBoard className="text-troiton-400" size={20} />
                  <div className="text-troiton-400 font-bold text-3xl">+50</div>
                </div>
                <p className="text-gray-400">Projetos concluídos com sucesso</p>
              </div>
              <div className="bg-black/40 border border-troiton-800/50 p-6 rounded-lg relative group hover:bg-troiton-900/20 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 rounded-t-lg"></div>
                <div className="flex items-center space-x-2 mb-2">
                  <Server className="text-blue-400" size={20} />
                  <div className="text-blue-400 font-bold text-3xl">+10</div>
                </div>
                <p className="text-gray-400">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;