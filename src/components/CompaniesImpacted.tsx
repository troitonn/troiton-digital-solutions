import { useState, useEffect, useRef } from 'react';
import { Building2, Users, Award, TrendingUp, Star, Globe, Zap } from 'lucide-react';
const CompaniesImpacted = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
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
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  }];

  return <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background matching initial site design */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-troiton-500 to-transparent"></div>
      </div>
      
      {/* Animated Orbs like initial design */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-troiton-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center bg-troiton-900/50 border border-troiton-700/50 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6 text-troiton-400 mx-auto">
            <span className="w-2 h-2 bg-troiton-500 rounded-full mr-2 animate-pulse"></span>
            Pontos de impacto
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight mx-auto max-w-4xl md:text-5xl">
            <span className="text-white">Mais de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">
              {count}+ empresas
            </span>
            <br />
            <span className="text-white">impactadas </span>
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-4xl text-center font-medium text-base mx-auto">
            Empresas de diversos segmentos confiam na Troiton Projects para impulsionar sua transformação digital 
            e alcançar resultados extraordinários através de soluções tecnológicas inovadoras.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {stats.map((stat, index) => <div key={index} className="text-center group">
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative">
                  <stat.icon className={`w-16 h-16 mx-auto mb-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3">{stat.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            </div>)}
        </div>

        {/* Companies Grid */}
        <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Algumas empresas que confiam em nossas soluções
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => <div key={index} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-troiton-500/30 to-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-troiton-400" />
                </div>
                <p className="text-white font-medium text-sm leading-tight">{company}</p>
              </div>)}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            O que nossos clientes dizem
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="group">
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="relative h-64">
                    <img src={testimonial.image} alt={`Equipe da ${testimonial.company}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
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
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default CompaniesImpacted;
