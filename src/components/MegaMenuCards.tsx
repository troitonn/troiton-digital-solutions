import negociosImg from "/lovable-uploads/18314ecc-70d3-488a-8b4a-cb2981c0cca5.png";
import sustentabilidadeImg from "/lovable-uploads/d98affc2-7384-4c0e-a3c3-e6d4f9ebd973.png";
import tecnologiaImg from "/lovable-uploads/ae407725-16d6-41d7-b593-3182dfd6c8c7.png";
import analyticsImg from "/lovable-uploads/56457c2f-2b9b-4b3b-a5c0-a06041fb3de2.png";
import inovacaoImg from "/lovable-uploads/20a0eef9-dd29-490f-b016-1b9be7fe9c6c.png";

const dropdownData = {
  "Negócios e Produtos": {
    links: [
      { title: "Apresentação", href: "/apresentacao" },
      { title: "Estratégia", href: "/estrategia" },
      { title: "Projetos e Implantação", href: "/projetos" },
      { title: "Consultoria Estratégica", href: "/consultoria" },
      { title: "Doações e Patrocínios", href: "/doacoes" },
      { title: "Comunidade e Sociedade", href: "/comunidade" },
    ],
    visuals: [
      { title: "Estratégia Empresarial", image: negociosImg, href: "/estrategia" },
      { title: "Sustentabilidade", image: sustentabilidadeImg, href: "/sustentabilidade" },
    ]
  },

  "Operações": {
    links: [
      { title: "Análise de Indicadores", href: "/indicadores" },
      { title: "Criação de Processos", href: "/processos" },
      { title: "Gestão de Performance", href: "/performance" },
      { title: "Otimização Operacional", href: "/otimizacao" },
      { title: "Qualidade e Compliance", href: "/qualidade" },
    ],
    visuals: [
      { title: "Analytics e Dashboards", image: analyticsImg, href: "/analytics" },
      { title: "Inovação e Processos", image: inovacaoImg, href: "/inovacao" },
    ]
  },

  "Tecnologia": {
    links: [
      { title: "Estruturas tecnológica", href: "/tecnologias" },
      { title: "Inteligência Artificial", href: "/tecnologia/ia" },
      { title: "Infraestrutura e Cloud", href: "/tecnologia/cloud" },
      { title: "Power BI e Dashboards", href: "/tecnologia/powerbi" },
      { title: "Desenvolvimento de Software", href: "/tecnologia/desenvolvimento" },
      { title: "Segurança da Informação", href: "/tecnologia/seguranca" },
      { title: "Automação de Processos", href: "/tecnologia/automacao" },
    ],
    visuals: [
      { title: "Tecnologia Avançada", image: tecnologiaImg, href: "/tecnologia/ia" },
      { title: "Inovação Digital", image: inovacaoImg, href: "/tecnologia/cloud" },
    ]
  }
};

export default function MegaMenuCards({ category }) {
  const { links = [], visuals = [] } = dropdownData[category] || {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-xl shadow-xl w-full max-w-7xl mx-auto">
      {/* Textos à esquerda */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-green-900">Explore:</h4>
        <ul className="space-y-2">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="text-green-900 hover:text-green-600 font-medium transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Imagens à direita */}
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visuals.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-44 brightness-90 group-hover:brightness-100 transition duration-300"
              loading="lazy"
              decoding="async"
              style={{ willChange: 'transform' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
              <span className="text-white text-sm font-semibold drop-shadow-md">
                {item.title}
              </span>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}