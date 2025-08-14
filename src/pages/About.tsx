import { useEffect, useRef, useState } from 'react';
import { Rocket, Users, Shield, Code, TrendingUp, Package } from 'lucide-react';
import aboutImage from '@/assets/about-company.jpg';

const About = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  const sectionRefs = {
    mission: useRef<HTMLDivElement>(null),
    values: useRef<HTMLDivElement>(null),
    business: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.includes(id);

  return (
    <section id="sobre" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutImage})` }}
      />
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container mx-auto px-6 z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Sobre a Troiton
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos movidos por propósito, inovação e tecnologia. Nossa missão é transformar negócios e criar soluções de impacto.
          </p>
        </div>

        {/* Missão */}
        <div
          id="mission"
          ref={sectionRefs.mission}
          className={`mb-16 transition-all duration-1000 ${
            isVisible('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
            <Rocket className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Missão</h3>
            <p className="text-gray-400">
              Entregar soluções inteligentes que conectam tecnologia, negócios e pessoas, gerando valor real e duradouro.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div
          id="values"
          ref={sectionRefs.values}
          className={`mb-16 transition-all duration-1000 ${
            isVisible('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Colaboração</h3>
              <p className="text-gray-400">Trabalhamos juntos para alcançar grandes resultados.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Integridade</h3>
              <p className="text-gray-400">Agimos com ética, respeito e transparência em todas as relações.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
              <Code className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Inovação</h3>
              <p className="text-gray-400">Buscamos constantemente novas formas de resolver problemas.</p>
            </div>
          </div>
        </div>

        {/* Negócios & Produtos */}
        <div
          id="business"
          ref={sectionRefs.business}
          className={`mb-16 transition-all duration-1000 ${
            isVisible('business') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
              Negócios & Produtos
            </h2>
            <p className="text-lg text-gray-300">
              Oferecemos soluções integradas para impulsionar empresas e entregar produtos inovadores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Negócios</h3>
              <p className="text-gray-400">
                Estratégias e consultoria para maximizar resultados e gerar crescimento sustentável.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Produtos</h3>
              <p className="text-gray-400">
                Desenvolvimento de soluções tecnológicas sob medida, com foco em inovação e escalabilidade.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          id="cta"
          ref={sectionRefs.cta}
          className={`text-center transition-all duration-1000 ${
            isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            Vamos construir o futuro juntos?
          </h3>
          <p className="text-gray-300 mb-6">
            Entre em contato e descubra como podemos transformar ideias em realidade.
          </p>
          <a
            href="mailto:contato@troiton.com.br"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
