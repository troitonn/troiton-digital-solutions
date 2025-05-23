export interface Technology {
  name: string;
  logo: string;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  technologies: Technology[];
}

export const allTechnologies: Technology[] = [
  // Removed 1st icon (SGBR)
  // Removed icon 2 and 3 (AWS and Google Cloud) as they were duplicated
  // Removed 4th icon (Microsoft 365)
  // Removed 5th icon (Acronis)
  { name: "Google Drive", logo: "/lovable-uploads/555265e63-edd7-4f8a-8cc1-ebffde112ef3.png" },
  // Removed 7th icon (Zoho One)
  { name: "Jira", logo: "/lovable-uploads/e0a1ab00-eb31-4024-9180-7dca29532d4f.png" },
  { name: "Power BI", logo: "/lovable-uploads/75265e63-edd7-4f8a-8cc1-ebffde112ef3.png" },
  // Removed icon 11 (SharePoint)
  { name: "Acronis", logo: "/lovable-uploads/10f91e21-c491-47f1-9efc-098240288821.png" },
  { name: "Acron Logo", logo: "/lovable-uploads/50dc8cc8-a733-4c55-8621-9f69624f7e5e.png" },
  { name: "Bitrix24", logo: "/lovable-uploads/a2215204-07b9-4447-aaf9-7f397d90fb57.png" },
  { name: "C++", logo: "/lovable-uploads/01f6f6de-47d9-4cd3-848d-52cd88a16978.png" },
  { name: "Dolibarr", logo: "/lovable-uploads/012a1b9a-d013-4505-8e64-ef3694ebbd9e.png" },
  { name: "Google Workspace", logo: "/lovable-uploads/8d3b2d8c-b9e2-4242-9810-f9175bf075a3.png" },
  // Removed 15th icon (Imobzi)
  { name: "Loupen", logo: "/lovable-uploads/4304f4c4-5ff9-44e1-ac12-9c9805a77926.png" },
  { name: "Milvus", logo: "/lovable-uploads/ffad071d-ee47-414a-b289-095a662f7f61.png" },
  { name: "Omie", logo: "/lovable-uploads/136748c8-b915-4e26-b105-6f66662f5270.png" },
  { name: "Project Libre", logo: "/lovable-uploads/dd1b1365-ef7b-4373-9e88-c5f24db921ac.png" },
  { name: "SGBR", logo: "/lovable-uploads/92fc62f9-3bdb-483d-9fdd-423fff28e7b0.png" },
  { name: "Ubiquiti", logo: "/lovable-uploads/b4c1fd29-d8db-40a8-990e-5cfc48931821.png" },
  { name: "Tiny", logo: "/lovable-uploads/282c53cc-23af-426d-8153-64b890043872.png" },
  { name: "Nodejs", logo: "/lovable-uploads/6767dd27-6270-4570-81df-94061e44210a.png" },
  // Adding the new technology logos
  { name: "GitHub", logo: "/lovable-uploads/e0bdf00c-8f68-44e0-aa89-0662b059daa5.png" },
  { name: "OpenVPN", logo: "/lovable-uploads/8c43c99b-799a-48b0-a9f9-e7870444bf91.png" },
  { name: "Bitdefender", logo: "/lovable-uploads/e7c1d380-7b28-42f3-aea7-7835309c5462.png" },
  { name: "Nginx", logo: "/lovable-uploads/cd2d1a60-e200-404f-b677-2ee7f836e584.png" },
  { name: "AzureDevOps", logo: "/lovable-uploads/becf6c4e-4263-4cf3-9ee0-bf7a30c73b48.png" },
  { name: "Kubernetes", logo: "/lovable-uploads/bd8d295e-7c6b-4698-b020-4a2980ad09f4.png" },
  { name: "Zoho Assist", logo: "/lovable-uploads/afdb623f-5517-441a-a452-06302831df27.png" },
  { name: "Sendgrid", logo: "/lovable-uploads/0a317704-6b5f-4930-a788-e9e8f2e192c2.png" },
  { name: "Asana", logo: "/lovable-uploads/5899f857-7f90-4f0c-85fb-c4201ca62874.png" },
  { name: "VMware", logo: "/lovable-uploads/a59f6550-e85d-4eb1-8e15-a59793fabf73.png" },
  { name: "Davinci", logo: "/lovable-uploads/e06f9bcb-1830-4c0c-abab-0cd230803392.png" },
  { name: "Power BI", logo: "/lovable-uploads/62541b5d-6f28-453f-bf9e-19bb5d81d7ab.png" },
  { name: "SharePoint", logo: "/lovable-uploads/37dc06d6-22f1-4128-963f-4a8137e88d2d.png" },
  { name: "Microsoft 365", logo: "/lovable-uploads/b672025c-c14f-411e-a72e-375bf5e8905c.png" },
  { name: "Google", logo: "/lovable-uploads/93dc45cf-6aff-493d-8d67-1372060aa9a2.png" },
  { name: "Google Cloud", logo: "/lovable-uploads/fc00fcb5-15de-4ac2-8c11-0010876c42b9.png" },
];

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
