import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Server, Shield, Briefcase, User, Box, Code, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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

  // Estado para controlar qual menu dropdown está aberto
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
    setOpenDropdown(null);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
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

  // Fecha dropdown ao clicar fora
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Componente dropdown simples
  const DropdownMenu = ({
    title,
    items,
    id,
  }: {
    title: string;
    items: typeof negociosProdutos;
    id: string;
  }) => (
    <div
      className="relative"
      onMouseEnter={() => setOpenDropdown(id)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        className={cn(
          "text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm flex items-center gap-1",
          openDropdown === id ? "text-troiton-400" : ""
        )}
      >
        {title}
        <svg
          className="w-3 h-3 text-current"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-0.5 bg-troiton-500 transition-all w-0 group-hover:w-full",
            openDropdown === id && "w-full"
          )}
        ></span>
      </button>

      {/* Painel dropdown */}
      {openDropdown === id && (
        <div className="absolute left-0 mt-2 w-[28rem] bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {items.map(({ title, description, href, icon: Icon }) => (
              <Link
                key={href}
                to={href}
                className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition"
                onClick={() => setOpenDropdown(null)}
              >
                <Icon className="text-troiton-500 w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-gray-500 text-sm">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav
      ref={navRef}
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

        {/* Menu desktop */}
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

          <DropdownMenu title="NEGÓCIOS E PRODUTOS" items={negociosProdutos} id="negocios" />
          <DropdownMenu title="SOBRE" items={sobre} id="sobre" />
          <DropdownMenu title="EFICIÊNCIA OPERACIONAL" items={eficienciaOperacional} id="eficiencia" />

          <button
            onClick={() => scrollToSection("vagas")}
            className="text-gray-300 hover:text-troiton-400 font-medium transition-colors relative group uppercase tracking-wide text-sm"
          >
            OPORTUNIDADES PROFISSIONAIS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-troiton-500 transition-all group-hover:w-full"></span>
          </button>

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

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-md z-40 pt-20 px-4 md:hidden transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 items-center text-lg">
          <Link
            to="/"
            className="w-full text-center py-3 border-b border-troit
