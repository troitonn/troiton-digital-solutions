
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

        {/* Centered services grid with max-width */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
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
                    "h-full group relative overflow-hidden rounded-2xl transition-all duration-300",
                    activeIndex === service.id ? "scale-105 z-10" : ""
                  )}
                  onMouseEnter={() => setActiveIndex(service.id)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Glassmorphism effect with alternating colors */}
                  <div 
                    className={cn(
                      "absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br",
                      service.color
                    )}
                  ></div>
                  
                  {/* Mirrored transparent layer */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm border border-white/10 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Icon area with transparent mirrored effect */}
                    <div className="p-3 rounded-full w-16 h-16 flex items-center justify-center mb-5 bg-white/10 backdrop-blur-md border border-white/20 group-hover:border-white/30 transition-all duration-300">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/80 mb-5">
                      {service.description}
                    </p>
                    
                    {/* Feature items */}
                    <div className="mt-auto">
                      <div className="h-px w-full bg-white/20 mb-5"></div>
                      <ul className="space-y-3">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-white/90">
                            <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 mr-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Learn more button with mirror effect */}
                    <div className="mt-6 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <Button
                        className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white"
                        variant="outline"
                        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Saiba mais
                        <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Decorative elements with mirror effect */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 backdrop-blur-lg rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 backdrop-blur-lg rounded-full translate-y-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA section */}
        <div className="mt-16 text-center">
          <div className="inline-block transition-all duration-300 hover:scale-105">
            <a href="#contato" className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-8 py-3 rounded-full font-medium relative group overflow-hidden">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-72 group-hover:h-72 opacity-10"></span>
              <span className="relative inline-flex items-center">
                Ver todos os serviços
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
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
