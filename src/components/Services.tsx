
import { useState, useEffect, useRef } from 'react';
import { Server, Shield, Headset, BarChart, Lightbulb, Code } from 'lucide-react';

const serviceCategories = [
  {
    id: 1,
    title: "Implantação e Gestão de Projetos de TI",
    icon: <Server className="h-12 w-12 text-troiton-500" />,
    description: "Implementamos e gerenciamos projetos de TI completos para sua empresa, incluindo ERPs e integrações de sistemas.",
    items: [
      "Implementação e migração de ERPs (OMIE, SGBR, IMOBZI)",
      "Integração de sistemas via API e CNAB para emissão de boletos"
    ]
  },
  {
    id: 2,
    title: "Segurança da Informação e Cibersegurança",
    icon: <Shield className="h-12 w-12 text-troiton-500" />,
    description: "Protegemos seus dados e infraestrutura com soluções avançadas de segurança da informação.",
    items: [
      "Implementação e gerenciamento de Firewalls",
      "Gestão de backups e recuperação de desastres (Acronis Cloud)",
      "Configuração de VPN´s e redes seguras SITE-TO-SITE, L2TP, OPENVPN"
    ]
  },
  {
    id: 3,
    title: "ITSM e Service Desk",
    icon: <Headset className="h-12 w-12 text-troiton-500" />,
    description: "Oferecemos suporte técnico profissional e implementamos soluções de gerenciamento de serviços de TI.",
    items: [
      "Implantação e otimização de Zoho Desk e Zoho Projects",
      "Estruturação de atendimento e suporte técnico empresarial"
    ]
  },
  {
    id: 4,
    title: "Análise e Integração de Dados",
    icon: <BarChart className="h-12 w-12 text-troiton-500" />,
    description: "Transformamos seus dados em insights acionáveis para tomada de decisões estratégicas.",
    items: [
      "Criação de dashboards e relatórios no Power BI",
      "Gestão de dados para tomada de decisão estratégica",
      "Automação de processos com Excel e fonte de dados"
    ]
  },
  {
    id: 5,
    title: "Consultoria em Tecnologia e Digitalização",
    icon: <Lightbulb className="h-12 w-12 text-troiton-500" />,
    description: "Auxiliamos empresas na transformação digital com soluções personalizadas.",
    items: [
      "Transformação digital para empresas",
      "Criação de site e e-mail profissional",
      "Mapeamento de serviços e otimização de processos",
      "Geração de contratos e implementação de processos internos digitais",
      "Gestão de mídias digitais e conteúdo para redes sociais"
    ]
  },
  {
    id: 6,
    title: "Desenvolvimento e Implementação de Soluções",
    icon: <Code className="h-12 w-12 text-troiton-500" />,
    description: "Desenvolvemos e implementamos soluções tecnológicas conforme as necessidades do seu negócio.",
    items: [
      "Implementação de soluções para e-commerce e CRM",
      "Otimização de processos administrativos com tecnologia",
      "Automação de fluxos de trabalho e integração de sistemas"
    ]
  }
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setVisibleCards(serviceCategories.map(category => category.id));
          }, 300);
          return () => clearTimeout(timer);
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
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-troiton-100 text-troiton-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções completas para sua empresa
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços de TI para atender todas as necessidades do seu negócio, desde implantação de sistemas até segurança e consultoria especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className={`service-card bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-1000 ${
                visibleCards.includes(category.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="mb-6">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 bg-troiton-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-troiton-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
