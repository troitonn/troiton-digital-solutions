import React from "react";
import indicadoresImg from "@/assets/indicadores-compressed.jpg";
import processosImg from "@/assets/processos-compressed.jpg";
import performanceImg from "@/assets/performance-compressed.jpg";
import projetosImg from "@/assets/projetos-compressed.jpg";
import segurancaImg from "@/assets/seguranca-compressed.jpg";
import dadosImg from "@/assets/dados-compressed.jpg";
import consultoriaImg from "@/assets/consultoria-compressed.jpg";
import desenvolvimentoImg from "@/assets/desenvolvimento-compressed.jpg";

const data = {
  "Eficiência Operacional": [
    {
      title: "Análise de Indicadores e KPIs",
      description: "Gestão de KPIs, criação de processos, análise de dados e otimização de resultados.",
      image: indicadoresImg,
      href: "/eficiencia/indicadores",
    },
    {
      title: "Criação e Otimização de Processos",
      description: "Mapeamento, melhoria contínua e implementação de processos eficientes.",
      image: processosImg,
      href: "/eficiencia/processos",
    },
    {
      title: "Gestão e Performance",
      description: "Controle de resultados com governança, segurança e agilidade.",
      image: performanceImg,
      href: "/eficiencia/performance",
    },
  ],
  "Negócios e Produtos": [
    {
      title: "Implantação de Projetos",
      description: "Implementação e migração de ERPs, integração via API e gestão de projetos de TI.",
      image: projetosImg,
      href: "/produtos/projetos",
    },
    {
      title: "Segurança da Informação",
      description: "Firewalls, backups, VPNs e políticas de segurança cibernética.",
      image: segurancaImg,
      href: "/produtos/seguranca",
    },
    {
      title: "Análise e Integração de Dados",
      description: "Dashboards no Power BI, automações com Excel, e gestão de dados estratégica.",
      image: dadosImg,
      href: "/produtos/dados",
    },
    {
      title: "Consultoria e Digitalização",
      description: "Transformação digital com criação de sites, e-mail profissional e TI estratégica.",
      image: consultoriaImg,
      href: "/produtos/consultoria",
    },
    {
      title: "Desenvolvimento e Automação",
      description: "Soluções customizadas para e-commerce, CRM e automação de processos.",
      image: desenvolvimentoImg,
      href: "/produtos/desenvolvimento",
    },
  ],
};

export default function MegaMenuCards({ category }) {
  const items = data[category] || [];

  return (
    <div className="bg-white shadow-xl rounded-xl p-4 md:p-6 text-black w-full overflow-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="hover:shadow-lg rounded-lg bg-gray-50 overflow-hidden transition duration-200 transform hover:scale-105 block"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                style={{ 
                  minHeight: '100px',
                  backgroundColor: '#f3f4f6'
                }}
              />
            </div>
            <div className="p-2 md:p-3">
              <h3 className="text-xs md:text-sm font-bold mb-1 line-clamp-2 leading-tight">{item.title}</h3>
              <p className="text-xs text-gray-600 line-clamp-2 leading-tight">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
