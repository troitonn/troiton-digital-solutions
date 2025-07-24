import React from "react";
import indicadoresImg from '@/assets/23084167882082.jpg';
import processosImg from '@/assets/36748616061539.jpg';
import performanceImg from '@/assets/plantas-que-crescem-no-solo.jpg';
import projetosImg from '@/assets/representacao-da-experiencia-utilizador-e-design-da-interface (1).jpg';
import segurancaImg from '@/assets/administradores-de-sistemas-em-centros-de-dados-integrando-ferramentas-de-automacao-impulsionadas-por-ia.jpg';
import dadosImg from '@/assets/23084167882082.jpg';
import consultoriaImg from '@/assets/plantas-que-crescem-no-solo.jpg';
import desenvolvimentoImg from '@/assets/23084167882082.jpg';

const data = {
  "Eficiência Operacional": [
    {
      title: "Análise de Indicadores e KPIs",
      description: "Gestão de KPIs, criação de processos, análise de dados e otimização de resultados.",
      image: indicadoresImg,
      href: "/eficiencia/indicadores"
    },
    {
      title: "Criação e Otimização de Processos",
      description: "Mapeamento, melhoria contínua e implementação de processos eficientes.",
      image: processosImg,
      href: "/eficiencia/processos"
    },
    {
      title: "Gestão e Performance",
      description: "Controle de resultados com governança, segurança e agilidade.",
      image: performanceImg,
      href: "/eficiencia/performance"
    }
  ],
  "Negócios e Produtos": [
    {
      title: "Implantação de Projetos",
      description: "Implementação e migração de ERPs, integração via API e gestão de projetos de TI.",
      image: projetosImg,
      href: "/produtos/projetos"
    },
    {
      title: "Segurança da Informação",
      description: "Firewalls, backups, VPNs e políticas de segurança cibernética.",
      image: segurancaImg,
      href: "/produtos/seguranca"
    },
    {
      title: "Análise e Integração de Dados",
      description: "Dashboards no Power BI, automações com Excel, e gestão de dados estratégica.",
      image: dadosImg,
      href: "/produtos/dados"
    },
    {
      title: "Consultoria e Digitalização",
      description: "Transformação digital com criação de sites, e-mail profissional e TI estratégica.",
      image: consultoriaImg,
      href: "/produtos/consultoria"
    },
    {
      title: "Desenvolvimento e Automação",
      description: "Soluções customizadas para e-commerce, CRM e automação de processos.",
      image: desenvolvimentoImg,
      href: "/produtos/desenvolvimento"
    }
  ]
};

export default function MegaMenuCards({ category }) {
  const items = data[category] || [];

  return (
    <div className="bg-white shadow-lg rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 text-black">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="hover:shadow-md rounded-xl overflow-hidden bg-gray-50 transition duration-200"
        >
          <div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
