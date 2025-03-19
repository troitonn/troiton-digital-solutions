
import { useState, useEffect, useRef } from 'react';
import { Server, Shield, Headset, BarChart, Lightbulb, Code } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const serviceCategories = [
  {
    id: 1,
    title: "Implantação e Gestão de Projetos de TI",
    icon: <Server className="h-12 w-12 text-white" />,
    description: "Implementamos e gerenciamos projetos de TI completos para sua empresa, incluindo ERPs e integrações de sistemas.",
    items: [
      "Implementação e migração de ERPs (OMIE, SGBR, IMOBZI)",
      "Integração de sistemas via API e CNAB para emissão de boletos"
    ],
    bgColor: "from-troiton-800 to-troiton-700"
  },
  {
    id: 2,
    title: "Segurança da Informação e Cibersegurança",
    icon: <Shield className="h-12 w-12 text-white" />,
    description: "Protegemos seus dados e infraestrutura com soluções avançadas de segurança da informação.",
    items: [
      "Implementação e gerenciamento de Firewalls",
      "Gestão de backups e recuperação de desastres (Acronis Cloud)",
      "Configuração de VPN´s e redes seguras SITE-TO-SITE, L2TP, OPENVPN"
    ],
    bgColor: "from-troiton-700 to-troiton-600"
  },
  {
    id: 3,
    title: "ITSM e Service Desk",
    icon: <Headset className="h-12 w-12 text-white" />,
    description: "Oferecemos suporte técnico profissional e implementamos soluções de gerenciamento de serviços de TI.",
    items: [
      "Implantação e otimização de Zoho Desk e Zoho Projects",
      "Estruturação de atendimento e suporte técnico empresarial"
    ],
    bgColor: "from-troiton-600 to-troiton-500"
  },
  {
    id: 4,
    title: "Análise e Integração de Dados",
    icon: <BarChart className="h-12 w-12 text-white" />,
    description: "Transformamos seus dados em insights acionáveis para tomada de decisões estratégicas.",
    items: [
      "Criação de dashboards e relatórios no Power BI",
      "Gestão de dados para tomada de decisão estratégica",
      "Automação de processos com Excel e fonte de dados"
    ],
    bgColor: "from-troiton-500 to-troiton-400"
  },
  {
    id: 5,
    title: "Consultoria em Tecnologia e Digitalização",
    icon: <Lightbulb className="h-12 w-12 text-white" />,
    description: "Auxiliamos empresas na transformação digital com soluções personalizadas.",
    items: [
      "Transformação digital para empresas",
      "Criação de site e e-mail profissional",
      "Mapeamento de serviços e otimização de processos",
      "Geração de contratos e implementação de processos internos digitais",
      "Gestão de mídias digitais e conteúdo para redes sociais"
    ],
    bgColor: "from-troiton-600 to-troiton-500"
  },
  {
    id: 6,
    title: "Desenvolvimento e Implementação de Soluções",
    icon: <Code className="h-12 w-12 text-white" />,
    description: "Desenvolvemos e implementamos soluções tecnológicas conforme as necessidades do seu negócio.",
    items: [
      "Implementação de soluções para e-commerce e CRM",
      "Otimização de processos administrativos com tecnologia",
      "Automação de fluxos de trabalho e integração de sistemas"
    ],
    bgColor: "from-troiton-700 to-troiton-600"
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
            }, 200 * index);
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
          <span className="inline-block bg-troiton-100 text-troiton-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
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
          {serviceCategories.map((category) => (
            <Card
              key={category.id}
              className={cn(
                "overflow-hidden border-0 shadow-xl transition-all duration-500 h-full",
                visibleCards.includes(category.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={cn(
                "bg-gradient-to-br h-full flex flex-col",
                category.bgColor,
                hoveredCard === category.id ? "scale-[1.02] transition-transform duration-300" : ""
              )}>
                <div className="p-8 flex flex-col h-full">
                  <div className="bg-black/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                    {category.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
                  <p className="text-gray-200 mb-6">{category.description}</p>

                  <CardContent className="p-0 flex-grow">
                    <ul className="space-y-3">
                      {category.items.map((item, index) => (
                        <li key={index} className="flex items-start group">
                          <div className="mr-2 mt-1 bg-white/20 rounded-full p-1 flex-shrink-0 transition-all duration-300 group-hover:bg-white/30">
                            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-200 text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <div className={cn(
                    "mt-6 w-full h-1 bg-white/10 rounded-full overflow-hidden transition-all duration-500",
                    hoveredCard === category.id ? "opacity-100" : "opacity-0"
                  )}>
                    <div className="h-full bg-white/30 animate-pulse rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
