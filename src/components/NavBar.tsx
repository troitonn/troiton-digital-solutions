import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu as HeadlessMenu } from "@headlessui/react";
import { Menu, X, Server, Shield, Briefcase, User, Box, Code, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Dados dos menus com ícones e descrições, baseados no seu site
const negociosProdutos = [
  {
    title: "Consultoria e Projetos",
    description: "Soluções customizadas para o seu negócio.",
    href: "/consultoria",
    icon: Server,
  },
  {
    title: "Integrações e APIs",
    description: "Conectando sistemas de forma eficiente.",
    href: "/integracoes",
    icon: Code,
  },
  {
    title: "Produtos Turnkey",
    description: "Produtos prontos para acelerar seu negócio.",
    href: "/produtos",
    icon: Box,
  },
];

const eficienciaOperacional = [
  {
    title: "Infraestrutura Gerenciada",
    description: "Servidores, redes e cloud com alta disponibilidade.",
    href: "/infraestrutura",
    icon: Server,
  },
  {
    title: "Cibersegurança Estratégica",
    description: "Proteção e monitoramento 24/7.",
    href: "/seguranca",
    icon: Shield,
  },
  {
    title: "Suporte e Monitoramento",
    description: "Acompanhamento contínuo para máxima eficiência.",
    href: "/suporte",
    icon: Briefcase,
  },
];

const oportunidadesProfissionais = [
  {
    title: "Trabalhe Conosco",
    description: "Junte-se ao time Troiton.",
    href: "/carreiras",
    icon: User,
  },
  {
    title: "Envie seu Currículo",
    description: "Estamos sempre buscando talentos.",
    href: "/envie-curriculo",
    icon: Mail,
  },
];

const sobre = [
  {
    title: "Quem Somos",
    description: "Nossa missão e valores.",
    href: "/sobre",
    icon: User,
  },
  {
    title: "Clientes",
    description: "Veja quem confia na Troiton.",
    href: "/clientes",
    icon: Briefcase,
  },
  {
    title: "Contato",
    description: "Fale conosco para saber mais.",
    href: "/contato",
    icon: Phone,
  },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // scrollToSection permanece igual (usado em botões)
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    } else if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    }
  };

  // Render do menu dropdown para desktop
  function MenuDropdown({
    title,
    items,
  }: {
    title: string;
    items: typeof negociosProdutos;
  }) {
    return (
      <HeadlessMenu as="div" className="relative">
        <HeadlessMenu.Button
          className={cn(
            "text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm",
            "flex items-center"
          )}
        >
          {title}
          <svg
            className="ml-1 h-3 w-3 text-gray-300 group-hover:text-troiton-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span
            className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-troiton-500 transition-all",
              "group-hover:w-full"
            )}
          ></span>
        </HeadlessMenu.Button>

        <HeadlessMenu.Items
          className="absolute top-full left-0 mt-2 w-screen max-w-lg bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
        >
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map(({ title, description, href, icon: Icon }) => (
              <HeadlessMenu.Item key={href}>
                {({ active }) => (
                  <Link
                    to={href}
                    className={cn(
                      "flex items-start p-3 rounded-md transition",
                      active ? "bg-troiton-50" : "hover:bg-gray-50"
                    )}
                  >
                    <Icon className="h-6 w-6 text-troiton-500 flex-shrink-0 mr-3" />
                    <div>
                      <p className="text-gray-900 font-semibold">{title}</p>
                      <p className="mt-1 text-gray-500 text-sm">{description}</p>
                    </div>
                  </Link>
                )}
              </HeadlessMenu.Item>
            ))}
          </div>
        </HeadlessMenu.Items>
      </HeadlessMenu>
    );
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-troiton-800/50 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img
            src="/lovable-uploads/8c305a3c-3e8f-4fc6-ad19-b4636b961ab1.png"
            alt="Troiton Projects Logo"
            className="h-14 mr-2"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 ml-auto mr-8 items-center">
          <Link
            to="/"
            className={cn(
              "text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm",
              location.pathname === "/" && "text-troiton-400"
            )}
          >
            INÍCIO
            <span
              className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-troiton-500 transition-all",
                location.pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              )}
            ></span>
          </Link>

          <MenuDropdown title="NEGÓCIOS E PRODUTOS" items={negociosProdutos} />
          <MenuDropdown title="SOBRE" items={sobre} />
          <MenuDropdown title="EFICIÊNCIA OPERACIONAL" items={eficienciaOperacional} />

          <HeadlessMenu as="div" className="relative">
            <HeadlessMenu.Button
              onClick={() => scrollToSection("vagas")}
              className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm"
            >
              OPORTUNIDADES PROFISSIONAIS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
            </HeadlessMenu.Button>
          </HeadlessMenu>

          <button
            onClick={() => scrollToSection("contato")}
            className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm"
          >
            CONTATO
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </button>
        </div>

        {/* Botão Fale Conosco */}
        <button
          className="hidden md:block bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-8 py-3 rounded-md font-medium transition-colors relative group overflow-hidden uppercase tracking-wide text-sm"
          onClick={() => scrollToSection("contato")}
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
          <span className="relative">FALE CONOSCO</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-md z-40 pt-20 px-4 md:hidden transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 items-center text-lg">
          <Link
            to="/"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            INÍCIO
          </Link>
          {/* No mobile, só links normais para os menus */}
          <Link
            to="/consultoria"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            NEGÓCIOS E PRODUTOS
          </Link>
          <Link
            to="/sobre"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            SOBRE
          </Link>
          <Link
            to="/infraestrutura"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            EFICIÊNCIA OPERACIONAL
          </Link>
          <Link
            to="/carreiras"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            OPORTUNIDADES PROFISSIONAIS
          </Link>
          <Link
            to="/contato"
            className="w-full text-center py-3 border-b border-troiton-800/50 text-gray-300 hover:text-troiton-400 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTATO
          </Link>
          <button
            className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-6 py-3 rounded-md font-medium w-full transition-colors uppercase tracking-wide"
            onClick={() => scrollToSection("contato")}
          >
            FALE CONOSCO
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
