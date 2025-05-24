
import { useState, useEffect, useRef } from 'react';
import { Building2, Users, Award, TrendingUp, Star, Globe, Zap } from 'lucide-react';

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
    "DigitalFlow Corp", "TechInnovate Solutions", "SmartSystems Brasil",
    "AI Solutions Group", "NextGen Technologies", "Innovation Hub Corp",
    "Digital Transform Ltd", "Future Systems Inc", "Tech Excellence SA"
  ];

  const stats = [
    { icon: Building2, number: "+50", label: "Empresas Impactadas", color: "text-troiton-400", bgColor: "from-troiton-500/20 to-troiton-600/20" },
    { icon: Users, number: "+200", label: "Profissionais Capacitados", color: "text-blue-400", bgColor: "from-blue-500/20 to-blue-600/20" },
    { icon: Award, number: "+100", label: "Projetos Entregues", color: "text-purple-400", bgColor: "from-purple-500/20 to-purple-600/20" },
    { icon: TrendingUp, number: "95%", label: "Taxa de Sucesso", color: "text-emerald-400", bgColor: "from-emerald-500/20 to-emerald-600/20" }
  ];

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      quote: "A Troiton Projects revolucionou nossa operação com soluções de IA que aumentaram nossa eficiência em 40%",
      author: "CEO, TechCorp Solutions",
      company: "TechCorp Solutions"
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      quote: "Implementação perfeita de sistemas que transformaram nossa gestão empresarial completamente",
      author: "CTO, Inovação Digital",
      company: "Inovação Digital Ltda"
    },
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      quote: "Automação inteligente que nos colocou à frente da concorrência no mercado digital",
      author: "Diretor de TI, SmartBusiness",
      company: "SmartBusiness Corp"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Enhanced floating background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90"></div>
      </div>
      
      {/* Floating elements with improved animation */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-troiton-400/60 rounded-full animate-pulse opacity-80"></div>
      <div className="absolute top-60 right-32 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse animation-delay-2000 opacity-70"></div>
      <div className="absolute bottom-40 left-1/3 w-5 h-5 bg-purple-400/60 rounded-full animate-pulse animation-delay-4000 opacity-60"></div>
      <div className="absolute top-40 left-1/2 w-2 h-2 bg-emerald-400/60 rounded-full animate-pulse animation-delay-3000 opacity-90"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-troiton-900/60 to-blue-900/60 border border-troiton-700/50 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8 text-troiton-300">
            <Star className="w-5 h-5 mr-3 text-troiton-400" />
            Resultados Comprovados
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Mais de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 via-blue-400 to-purple-400 animate-gradient-animation bg-200%">
              {count}+ empresas
            </span>
            <br />
            <span className="text-white">já transformaram seus negócios</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Empresas de diversos segmentos confiam na Troiton Projects para impulsionar sua transformação digital 
            e alcançar resultados extraordinários através de soluções tecnológicas inovadoras.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative">
                  <stat.icon className={`w-16 h-16 mx-auto mb-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3">{stat.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Companies Grid with enhanced design */}
        <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Algumas empresas que confiam em nossas soluções
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-troiton-500/30 to-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-troiton-400" />
                </div>
                <p className="text-white font-medium text-sm leading-tight">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            O que nossos clientes dizem
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="relative h-64">
                    <img 
                      src={testimonial.image} 
                      alt={`Equipe da ${testimonial.company}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-white font-medium text-lg mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div>
                      <p className="text-troiton-400 font-semibold mb-1">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesImpacted;
