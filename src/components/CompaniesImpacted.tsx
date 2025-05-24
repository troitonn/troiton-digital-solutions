
import { useState, useEffect, useRef } from 'react';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

const CompaniesImpacted = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          
          // Animate counter
          let current = 0;
          const target = 50;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 50);
        }
      },
      { threshold: 0.1 }
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

  const companies = [
    "TechCorp Solutions", "Inovação Digital Ltda", "Sistemas Avançados S/A", 
    "DataFlow Tecnologia", "SmartBusiness Corp", "CloudTech Solutions",
    "Automação Empresarial", "Gestão Inteligente Ltda", "ProcessPro Systems",
    "DigitalFlow Corp", "TechInnovate Solutions", "SmartSystems Brasil"
  ];

  const stats = [
    { icon: Building2, number: "+50", label: "Empresas Impactadas", color: "text-troiton-400" },
    { icon: Users, number: "+200", label: "Profissionais Capacitados", color: "text-blue-400" },
    { icon: Award, number: "+100", label: "Projetos Entregues", color: "text-purple-400" },
    { icon: TrendingUp, number: "95%", label: "Taxa de Sucesso", color: "text-emerald-400" }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-troiton-950/30 to-black"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center bg-troiton-900/50 border border-troiton-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 text-troiton-400">
            <Award className="w-4 h-4 mr-2" />
            Resultados Comprovados
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Mais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">{count}+ empresas</span> já transformaram seus negócios
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Empresas de diversos segmentos confiam na Troiton Projects para impulsionar sua transformação digital e alcançar resultados extraordinários.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Companies Grid */}
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Algumas empresas que confiam em nossas soluções
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-troiton-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-troiton-400" />
                </div>
                <p className="text-white font-medium text-sm">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Image */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Equipe corporativa trabalhando com tecnologia"
              className="w-full h-64 md:h-80 object-cover rounded-2xl opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <p className="text-white font-semibold text-lg mb-2">
                "A parceria com a Troiton Projects revolucionou nossa operação"
              </p>
              <p className="text-gray-300 text-sm">
                CEO, TechCorp Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesImpacted;
