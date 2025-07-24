import indicadoresImg from "@/assets/indicadores-compressed.jpg";
import performanceImg from "@/assets/performance-compressed.jpg";
import consultoriaImg from "@/assets/consultoria-optimized.jpg";
import segurancaImg from "@/assets/seguranca-optimized.jpg";
import dadosImg from "@/assets/dados-optimized.jpg";
import plantasImg from "@/assets/plantas-que-crescem-no-solo.jpg";
import automacaoImg from "@/assets/administradores-de-sistemas-em-centros-de-dados-integrando-ferramentas-de-automacao-impulsionadas-por-ia.jpg";
import representacaoUX from "@/assets/representacao-da-experiencia-utilizador-e-design-da-interface (1).jpg";

const dropdownData = {
  "Eficiência Operacional": {
    links: [
      { title: "Análise de Indicadores", href: "/eficiencia/indicadores" },
      { title: "Criação de Processos", href: "/eficiencia/processos" },
      { title: "Gestão de Performance", href: "/eficiencia/performance" },
    ],
    visuals: [
      { title: "Indicadores e KPIs", image: indicadoresImg, href: "/eficiencia/indicadores" },
      { title: "Performance de Equipes", image: performanceImg, href: "/eficiencia/performance" },
    ]
  },

  "Negócios e Produtos": {
    links: [
      { title: "Projetos e Implantação", href: "/produtos/projetos" },
      { title: "Segurança da Informação", href: "/produtos/seguranca" },
      { title: "Consultoria Estratégica", href: "/produtos/consultoria" },
    ],
    visuals: [
      { title: "Consultoria Digital", image: consultoriaImg, href: "/produtos/consultoria" },
      { title: "Segurança e Infraestrutura", image: segurancaImg, href: "/produtos/seguranca" },
    ]
  },

  "Tecnologia": {
    links: [
      { title: "Inteligência Artificial", href: "/tecnologia/ia" },
      { title: "Infraestrutura e Cloud", href: "/tecnologia/cloud" },
      { title: "Power BI e Dashboards", href: "/tecnologia/powerbi" },
    ],
    visuals: [
      { title: "IA e Automação", image: automacaoImg, href: "/tecnologia/ia" },
      { title: "Dashboards Automatizados", image: representacaoUX, href: "/tecnologia/powerbi" },
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
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-44 brightness-90 group-hover:brightness-100 transition duration-300"
            />
            <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
              {item.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
