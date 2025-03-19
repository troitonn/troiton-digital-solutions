
import { useEffect, useState, useRef } from 'react';

const About = () => {
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
      id="sobre"
      ref={sectionRef}
      className="py-20"
      style={{
        background: "linear-gradient(135deg, rgba(235,255,245,1) 0%, rgba(255,255,255,1) 100%)"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-troiton-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-troiton-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Sobre a Troiton Projects" 
                className="rounded-lg shadow-xl relative z-10 object-cover w-full max-w-lg"
                loading="lazy"
              />
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <span className="inline-block bg-troiton-100 text-troiton-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformando empresas através da tecnologia
            </h2>
            <p className="text-gray-700 mb-6">
              A Troiton Projects nasceu com a missão de oferecer soluções tecnológicas que realmente transformam a forma como as empresas operam. Combinamos expertise técnica com uma abordagem consultiva para entregar resultados concretos.
            </p>
            <p className="text-gray-700 mb-8">
              Nossa equipe é composta por profissionais experientes e apaixonados por tecnologia, sempre em busca das melhores soluções para nossos clientes. Acreditamos que a tecnologia deve ser uma aliada no crescimento do seu negócio, não um obstáculo.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-troiton-600 font-bold text-3xl mb-2">+100</div>
                <p className="text-gray-600">Projetos concluídos com sucesso</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-troiton-600 font-bold text-3xl mb-2">+50</div>
                <p className="text-gray-600">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
