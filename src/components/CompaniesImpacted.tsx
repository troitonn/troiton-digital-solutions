
import { useState, useEffect, useRef } from 'react';
import { Building2, Users, Award, TrendingUp, Star, Globe, Zap } from 'lucide-react';

const CompaniesImpacted = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);

        // Animate counter
        let current = 0;
        const target = 50;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 50);
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

  const testimonials = [{
    image: "/lovable-uploads/5bfc3cea-28a7-4dbe-ac86-88f8cc7af007.png",
    quote: "Talento unico! Especialista atraves de seus servicos trouxe um grande ganho para AMS em processos interno! sem dizer site, apresentaçao da minha Cia. Qualidades sempre com uma combinaçao unica de um olho aguçado para direçao geral mercado e uma compreesao aguçada das necessidades expectativas especificas do cliente. Ele e super talentoso, energetico, disciplinado e divertido!!",
    author: "Antonio Marcos",
    company: "Socio Proprietario da AMS Negocios e intermediações LTDA",
    link: "https://amsintermedicacao.com.br"
  }, {
    image: "/lovable-uploads/5133ebe4-7afd-45aa-9617-8713e8d841dd.png",
    quote: "Profissional dedicado e comprometido. Entende a necessidade do cliente de forma clara e objetiva. A entrega superou minhas expectativas em todos os projetos que foram desenvolvidos. Super recomendo.",
    author: "Veruska Ferreirinha",
    company: "Management Partner - Unica Solucoes",
    link: "https://unica-solucoes.com"
  }, {
    image: "/lovable-uploads/4c5ca2aa-f359-4eaa-8ec4-c721c1a6edd6.png",
    quote: "Facilidade de enxergar processos falhos em empresas que necessitam de escalabilidade. Seu trabalho com a Evostack tem sido de grande Valia e recomendamos ele para algumas empresas que precisam aumentar sua eficiência. Ele atua desde processos a gestão.",
    author: "Leticia Fita",
    company: "CEO - EVOSTACK",
    link: "https://evostack.com.br"
  }];

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Background matching initial site design */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500 to-transparent"></div>
      </div>
      
      {/* Animated Orbs like initial design */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-troiton-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center bg-troiton-900/50 border border-troiton-700/50 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6 text-troiton-400 mx-auto">
            <span className="w-2 h-2 bg-troiton-500 rounded-full mr-2 animate-pulse"></span>
            Pontos de impacto
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight mx-auto max-w-4xl md:text-5xl">
            <span className="text-white">Mais de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">
              {count}+ empresas
            </span>
            <br />
            <span className="text-white">transformaram seus negócios</span>
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-4xl text-center font-medium text-base mx-auto">
            Empresas de diversos segmentos confiam na Troiton Projects para impulsionar sua transformação digital 
            e alcançar resultados extraordinários através de soluções tecnológicas inovadoras.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            O que nossos clientes dizem
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <a 
                key={index} 
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                  <div className="relative h-64">
                    <img 
                      src={testimonial.image} 
                      alt={`Equipe da ${testimonial.company}`} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  
                    <div className="p-8">
                    
                    <p className="text-white font-medium text-lg mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div>
                      <p className="text-troiton-400 font-semibold mb-1">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesImpacted;
