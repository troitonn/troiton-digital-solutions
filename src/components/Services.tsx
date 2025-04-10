
import { useState, useEffect, useRef } from 'react';
import { Server, Shield, BarChart, Lightbulb, Code } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const serviceCategories = [
  {
    id: 1,
    title: "Implantação e Gestão de Projetos de TI",
    icon: <Server className="h-10 w-10 text-white" />,
    description: "Implementamos e gerenciamos projetos de TI completos para sua empresa, incluindo ERPs e integrações de sistemas.",
    items: [
      "Implementação e migração de ERPs (OMIE, SGBR, IMOBZI)",
      "Integração de sistemas via API e CNAB para emissão de boletos"
    ],
    color: "from-blue-500/80 to-indigo-600/80"
  },
  {
    id: 2,
    title: "Segurança da Informação e Cibersegurança",
    icon: <Shield className="h-10 w-10 text-white" />,
    description: "Protegemos seus dados e infraestrutura com soluções avançadas de segurança da informação.",
    items: [
      "Implementação e gerenciamento de Firewalls",
      "Gestão de backups e recuperação de desastres",
      "Configuração de VPN´s e redes seguras"
    ],
    color: "from-purple-500/80 to-violet-600/80"
  },
  {
    id: 3,
    title: "Análise e Integração de Dados",
    icon: <BarChart className="h-10 w-10 text-white" />,
    description: "Transformamos seus dados em insights acionáveis para tomada de decisões estratégicas.",
    items: [
      "Criação de dashboards e relatórios no Power BI",
      "Gestão de dados para tomada de decisão estratégica",
      "Automação de processos com Excel e fonte de dados"
    ],
    color: "from-emerald-500/80 to-teal-600/80"
  },
  {
    id: 4,
    title: "Consultoria em Tecnologia e Digitalização",
    icon: <Lightbulb className="h-10 w-10 text-white" />,
    description: "Auxiliamos empresas na transformação digital com soluções personalizadas.",
    items: [
      "Transformação digital para empresas",
      "Criação de site e e-mail profissional",
      "Mapeamento de serviços e otimização de processos"
    ],
    color: "from-amber-500/80 to-yellow-600/80"
  },
  {
    id: 5,
    title: "Desenvolvimento e Implementação de Soluções",
    icon: <Code className="h-10 w-10 text-white" />,
    description: "Desenvolvemos e implementamos soluções tecnológicas conforme as necessidades do seu negócio.",
    items: [
      "Implementação de soluções para e-commerce e CRM",
      "Otimização de processos administrativos com tecnologia",
      "Automação de fluxos de trabalho e integração de sistemas"
    ],
    color: "from-cyan-500/80 to-blue-600/80"
  }
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Staggered animation for cards
          serviceCategories.forEach((category, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, category.id]);
            }, 150 * index);
          });
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

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-troiton-950/80 to-black -z-10"></div>
      <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(90deg,#000_10px,transparent_1%)_center,linear-gradient(#000_10px,transparent_1%)_center,rgba(0,0,0,0.2)] bg-[size:12px_12px] opacity-20 -z-10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow opacity-50 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-5 py-1.5 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r from-troiton-500/20 to-blue-500/20 text-troiton-400 border border-troiton-500/30">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Soluções completas para sua empresa
          </h2>
          <p className="text-gray-300 text-lg">
            Oferecemos uma ampla gama de serviços de TI para atender todas as necessidades do seu negócio, desde implantação de sistemas até segurança e consultoria especializada.
          </p>
        </div>

        {/* Improved services grid with max-width and better centering */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceCategories.map((service, index) => (
              <div 
                key={service.id}
                className={cn(
                  "transform transition-all duration-700 ease-out",
                  visibleCards.includes(service.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                )}
                style={{ 
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div 
                  className={cn(
                    "h-full group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:translate-y-[-8px]",
                    activeIndex === service.id ? "scale-105 z-10 shadow-2xl" : "shadow-lg"
                  )}
                  onMouseEnter={() => setActiveIndex(service.id)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Enhanced glassmorphism effect with alternating colors */}
                  <div 
                    className={cn(
                      "absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br",
                      service.color
                    )}
                  ></div>
                  
                  {/* Improved mirrored transparent layer */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm border border-white/15 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Enhanced icon area with better transparent mirrored effect */}
                    <div className="p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 bg-white/15 backdrop-blur-lg border border-white/25 group-hover:border-white/40 transition-all duration-300 shadow-lg">
                      <div className="transform group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/95 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/85 mb-5 transition-colors group-hover:text-white/95">
                      {service.description}
                    </p>
                    
                    {/* Enhanced feature items */}
                    <div className="mt-auto">
                      <div className="h-px w-full bg-white/25 mb-5 group-hover:bg-white/30 transition-colors"></div>
                      <ul className="space-y-3">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-white/90 group-hover:text-white/100 transition-colors">
                            <span className="w-2 h-2 rounded-full bg-white mt-1.5 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Improved button with better mirror effect */}
                    <div className="mt-7 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <Button
                        className="w-full bg-white/15 hover:bg-white/25 backdrop-blur-lg border border-white/25 text-white shadow-md"
                        variant="outline"
                        onClick={() => scrollToContact()}
                      >
                        Saiba mais
                        <svg className="ml-1.5 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Enhanced decorative elements with better mirror effect */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 backdrop-blur-xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/15 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 backdrop-blur-xl rounded-full translate-y-1/2 -translate-x-1/2 group-hover:bg-white/15 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced CTA section with fixed click handler */}
        <div className="mt-20 text-center">
          <div className="inline-block transition-all duration-300 hover:scale-105">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-10 py-4 rounded-full font-medium relative group overflow-hidden shadow-xl"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
              <span className="relative inline-flex items-center text-lg">
                Ver todos os serviços
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      
      <style>
        {`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite;
        }
        `}
      </style>
    </section>
  );
};

export default Services;
