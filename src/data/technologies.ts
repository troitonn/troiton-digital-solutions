
export interface Technology {
  name: string;
  logo: string;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  technologies: Technology[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "erp",
    title: "ERP e Gestão",
    technologies: [
      { name: "SGBR", logo: "/lovable-uploads/671119a9-5256-42a1-8af9-e2f4ed1ba90a.png" },
      { name: "C-Plus", logo: "/placeholder.svg" },
      { name: "Omie", logo: "/placeholder.svg" },
      { name: "Bendito", logo: "/placeholder.svg" },
      { name: "Imobzi", logo: "/placeholder.svg" },
      { name: "Group Software", logo: "/placeholder.svg" },
      { name: "Bling", logo: "/placeholder.svg" },
      { name: "Tiny", logo: "/placeholder.svg" },
      { name: "LOPQV", logo: "/placeholder.svg" },
      { name: "Asaas", logo: "/placeholder.svg" },
    ]
  },
  {
    id: "cloud",
    title: "Nuvem & Infraestrutura",
    technologies: [
      { name: "AWS", logo: "/lovable-uploads/55c83889-d425-4a18-bc18-79a5602c2404.png" },
      { name: "Google Cloud", logo: "/lovable-uploads/e0a1ab00-eb31-4024-9180-7dca29532d4f.png" },
      { name: "Microsoft 365", logo: "/lovable-uploads/b9aa4db3-6f0d-42c5-989e-b206e0517677.png" },
      { name: "Acronis", logo: "/lovable-uploads/1856a44a-a940-40cc-aeb7-a08a736c50cb.png" },
      { name: "VMware", logo: "/placeholder.svg" },
      { name: "WBA", logo: "/placeholder.svg" },
      { name: "Unifi", logo: "/placeholder.svg" },
      { name: "OpenVPN Cloud", logo: "/placeholder.svg" },
    ]
  },
  {
    id: "collaboration",
    title: "Colaboração e Produtividade",
    technologies: [
      { name: "Google Workspace", logo: "/placeholder.svg" },
      { name: "Microsoft SharePoint", logo: "/placeholder.svg" },
      { name: "Planner", logo: "/placeholder.svg" },
      { name: "Google Drive", logo: "/lovable-uploads/75265e63-edd7-4f8a-8cc1-ebffde112ef3.png" },
      { name: "Zoho WorkDrive", logo: "/placeholder.svg" },
      { name: "LibreOffice", logo: "/placeholder.svg" },
      { name: "Zoho One", logo: "/lovable-uploads/121f760b-1ed1-4856-92dc-7f302e192ca6.png" },
      { name: "Zoho Cliq", logo: "/placeholder.svg" },
      { name: "Visual Studio Code", logo: "/placeholder.svg" },
    ]
  },
  {
    id: "security",
    title: "Segurança e Suporte",
    technologies: [
      { name: "Bitdefender GravityZone", logo: "/placeholder.svg" },
      { name: "Sophos", logo: "/placeholder.svg" },
      { name: "Tenable Nessus", logo: "/placeholder.svg" },
      { name: "TeamViewer", logo: "/placeholder.svg" },
      { name: "GoTo", logo: "/placeholder.svg" },
      { name: "Cloudflare", logo: "/placeholder.svg" },
      { name: "Dollybar", logo: "/placeholder.svg" },
      { name: "Zoho Assist", logo: "/placeholder.svg" },
      { name: "gNIX", logo: "/placeholder.svg" },
    ]
  },
  {
    id: "projects",
    title: "Projetos e Automação",
    technologies: [
      { name: "Jira", logo: "/lovable-uploads/e0a1ab00-eb31-4024-9180-7dca29532d4f.png" },
      { name: "Monday.com", logo: "/placeholder.svg" },
      { name: "Asana", logo: "/placeholder.svg" },
      { name: "Bitrix24", logo: "/placeholder.svg" },
      { name: "Libre Projects", logo: "/placeholder.svg" },
      { name: "Milvus", logo: "/placeholder.svg" },
    ]
  },
  {
    id: "marketing",
    title: "Marketing & Comunicação",
    technologies: [
      { name: "Google Ads", logo: "/placeholder.svg" },
      { name: "Mailchimp", logo: "/placeholder.svg" },
    ]
  },
  {
    id: "bi",
    title: "BI e Visualização de Dados",
    technologies: [
      { name: "Power BI", logo: "/lovable-uploads/75265e63-edd7-4f8a-8cc1-ebffde112ef3.png" },
      { name: "Kibana (Elasticsearch)", logo: "/placeholder.svg" },
    ]
  }
];
