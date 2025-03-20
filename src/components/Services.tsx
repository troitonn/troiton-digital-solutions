
import { useState, useEffect, useRef } from 'react';
import { Server, Shield, Headset, BarChart, Lightbulb, Code } from 'lucide-react';
import { cn } from "@/lib/utils";

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
    bgClass: "from-blue-600/80 to-blue-800/90"
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
    bgClass: "from-purple-600/80 to-purple-800/90"
  },
  {
    id: 3,
    title: "ITSM e Service Desk",
    icon: <Headset className="h-10 w-10 text-white" />,
    description: "Oferecemos suporte técnico profissional e implementamos soluções de gerenciamento de serviços de TI.",
    items: [
      "Implantação e otimização de Zoho Desk e Zoho Projects",
      "Estruturação de atendimento e suporte técnico empresarial"
    ],
    bgClass: "from-red-600/80 to-red-800/90"
  },
  {
    id: 4,
    title: "Análise e Integração de Dados",
    icon: <BarChart className="h-10 w-10 text-white" />,
    description: "Transformamos seus dados em insights acionáveis para tomada de decisões estratégicas.",
    items: [
      "Criação de dashboards e relatórios no Power BI",
      "Gestão de dados para tomada de decisão estratégica",
      "Automação de processos com Excel e fonte de dados"
    ],
    bgClass: "from-emerald-600/80 to-emerald-800/90"
  },
  {
    id: 5,
    title: "Consultoria em Tecnologia e Digitalização",
    icon: <Lightbulb className="h-10 w-10 text-white" />,
    description: "Auxiliamos empresas na transformação digital com soluções personalizadas.",
    items: [
      "Transformação digital para empresas",
      "Criação de site e e-mail profissional",
      "Mapeamento de serviços e otimização de processos"
    ],
    bgClass: "from-amber-600/80 to-amber-800/90"
  },
  {
    id: 6,
    title: "Desenvolvimento e Implementação de Soluções",
    icon: <Code className="h-10 w-10 text-white" />,
    description: "Desenvolvemos e implementamos soluções tecnológicas conforme as necessidades do seu negócio.",
    items: [
      "Implementação de soluções para e-commerce e CRM",
      "Otimização de processos administrativos com tecnologia",
      "Automação de fluxos de trabalho e integração de sistemas"
    ],
    bgClass: "from-indigo-600/80 to-indigo-800/90"
  }
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
      className="py-24 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-troiton-950/80 to-black -z-10"></div>
      
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service) => (
            <div
              key={service.id}
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-700 transform group relative",
                visibleCards.includes(service.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card glowing border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-troiton-400 via-blue-500 to-troiton-500 rounded-2xl opacity-30 blur-[2px] group-hover:opacity-90 group-hover:blur-[1px] transition-all duration-300"></div>
              
              {/* Card content */}
              <div className={cn(
                "relative rounded-2xl p-6 h-full border border-white/10 backdrop-blur-sm bg-gradient-to-br",
                service.bgClass,
                hoveredCard === service.id ? "scale-[1.02] transition-transform duration-300" : ""
              )}>
                <div className="flex flex-col h-full space-y-4">
                  {/* Icon container */}
                  <div className="bg-black/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-50"></div>
                    {service.icon}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-200 text-sm flex-grow">{service.description}</p>

                  <div className="mt-2">
                    <div className="w-16 h-1 bg-gradient-to-r from-white/40 to-transparent rounded-full mb-4"></div>
                    <ul className="space-y-2">
                      {service.items.map((item, index) => (
                        <li key={index} className="flex items-start group/item">
                          <div className="mr-2 mt-1 bg-white/20 rounded-full p-1 flex-shrink-0 transition-all duration-300 group-hover/item:bg-white/40">
                            <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-200 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Animated indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-troiton-400 to-blue-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
