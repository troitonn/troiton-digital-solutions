import { useState, useRef, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Target, Zap, Play, Sprout, Cpu, Shield, Globe, ChevronRight, Star, MapPin, Clock } from 'lucide-react';
import auroraAbout from '@/assets/aurora-about.jpg';
import ceoImage from '@/assets/ceo-alexsandro4.jpg';
import agroTech from '@/assets/agro-technology.jpg';
import fintechOffice from '@/assets/fintech-office.jpg';
import realEstateTech from '@/assets/real-estate-tech.jpg';
import careerWorkspace from '@/assets/career-workspace.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
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

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-black text-white flex w-full">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-troiton-900/20 via-black to-black -z-10"></div>
        <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-10 -z-10"></div>

        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-40">
            <SidebarTrigger className="ml-4 text-white hover:bg-white/10 p-2 rounded-lg transition-colors" />
            <div className="flex-1 flex justify-center">
              <div className="text-white font-semibold">Sobre Nós - Troiton</div>
            </div>
          </header>

          <main className="flex-1">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${auroraAbout})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-8">
              <span className="text-primary font-medium">Quem Somos</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Transformamos
              <span className="block bg-gradient-to-r from-primary to-troiton-300 bg-clip-text text-transparent">
                o Futuro
              </span>
              dos Negócios
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Na Troiton, acreditamos que a tecnologia é o motor que impulsiona negócios além do esperado.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={sectionRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 mb-20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed text-center mb-8">
                Com uma abordagem centrada em resultado e segurança, nossa missão é desenhar, estruturar e implementar soluções tecnológicas que otimizam operações e garantem escalabilidade — tudo com agilidade, inteligência e foco em governança.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Foco em Resultados</h3>
                  <p className="text-gray-400">Soluções que geram impacto real e mensurável nos negócios.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Agilidade</h3>
                  <p className="text-gray-400">Implementação rápida com qualidade e precisão técnica.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Excelência</h3>
                  <p className="text-gray-400">Padrões elevados em segurança, governança e performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
                  <span className="text-primary font-medium">Liderança</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Alexsandro Braga
                </h2>

                <div className="text-xl text-primary mb-8">CEO</div>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Liderada por <strong className="text-white">Alexsandro Braga</strong>, nosso CEO, a Troiton se posiciona como uma empresa de tecnologia com DNA em projetos, infraestrutura e transformação digital.
                  </p>

                  <p>
                    Com uma trajetória que começou com vendas ambulantes e evoluiu até assumir cargos em empresas de tecnologia, Alexsandro carrega uma <strong className="text-white">visão estratégica diferenciada</strong>: unir profundidade técnica com sensibilidade humana.
                  </p>

                  <p>
                    Formado em <strong className="text-white">Defesa Cibernética</strong>, certificado por instituições como IBM, USP, Cisco e Acronis, e com atuação direta em setores como factorings, Fintechs, advocacias, imobiliárias e contabilidades, Alexsandro aplica sua expertise diariamente em projetos que envolvem desde ITSM e ERPs até segurança cibernética e integração de dados.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-troiton-600/20 rounded-3xl blur-2xl"></div>
                  <img 
                    src={ceoImage}
                    alt="Alexsandro Braga - CEO da Troiton"
                    className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-300">
              Aqui, não entregamos apenas tecnologia. Entregamos visão, planejamento e transformação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Precisão</h3>
              <p className="text-gray-400">Cada projeto é executado com precisão cirúrgica e atenção aos detalhes.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Parceria</h3>
              <p className="text-gray-400">Construímos relacionamentos duradouros baseados em confiança mútua.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Inovação</h3>
              <p className="text-gray-400">Sempre na vanguarda das tecnologias emergentes e melhores práticas.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excelência</h3>
              <p className="text-gray-400">Comprometimento com a qualidade superior em todas as entregas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-troiton-900/10 to-primary/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Setores que <span className="bg-gradient-to-r from-primary to-troiton-300 bg-clip-text text-transparent">Transformamos</span>
            </h2>
            <p className="text-xl text-gray-300">
              Nossa expertise tecnológica impacta diferentes segmentos do mercado brasileiro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group industry-card rounded-2xl p-8 glow-on-hover relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src={agroTech} alt="Agronegócio" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-troiton-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sprout className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-center">Agronegócio</h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  Soluções para gestão agrícola, controle de safras e automação de processos rurais.
                </p>
              </div>
            </div>

            <div className="group industry-card rounded-2xl p-8 glow-on-hover relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src={fintechOffice} alt="Fintechs" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-troiton-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-center">Fintechs</h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  Infraestrutura segura e escalável para startups e empresas financeiras.
                </p>
              </div>
            </div>

            <div className="group industry-card rounded-2xl p-8 glow-on-hover relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src={realEstateTech} alt="Imobiliárias" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-troiton-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-center">Imobiliárias</h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  CRMs inteligentes e automação de vendas para o mercado imobiliário.
                </p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-troiton-600/10 border border-primary/20">
              <div className="aspect-video bg-black/50 flex items-center justify-center relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-12 h-12 text-primary fill-current" />
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">Nossa Visão em Ação</h3>
                  <p className="text-gray-300">Conheça os resultados que entregamos para nossos clientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venha Ser Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={careerWorkspace}
            alt="Technology workspace" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-primary/20"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-primary/20 border border-primary/30 rounded-full mb-8">
              <Star className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary font-medium">Venha Ser Troiton</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Faça Parte da
              <span className="block bg-gradient-to-r from-primary to-troiton-300 bg-clip-text text-transparent">
                Revolução Tecnológica
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Junte-se a uma equipe apaixonada por transformar o futuro dos negócios através da tecnologia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-3">Projetos Desafiadores</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Trabalhe em soluções que impactam empresas de diferentes setores, desde startups até grandes corporações.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-3">Equipe Colaborativa</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Faça parte de um time diverso, onde cada pessoa contribui com suas experiências únicas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-3">Crescimento Acelerado</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Desenvolva suas habilidades em um ambiente que valoriza a evolução profissional contínua.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-serif font-bold mb-6 text-center">Posições Abertas</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div>
                    <h4 className="font-semibold text-white mb-1">Desenvolvedor Full Stack</h4>
                    <div className="flex items-center text-sm text-gray-400 space-x-4">
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Remoto</span>
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />Full-time</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div>
                    <h4 className="font-semibold text-white mb-1">Especialista em DevOps</h4>
                    <div className="flex items-center text-sm text-gray-400 space-x-4">
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Híbrido</span>
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />Full-time</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div>
                    <h4 className="font-semibold text-white mb-1">Analista de Segurança</h4>
                    <div className="flex items-center text-sm text-gray-400 space-x-4">
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Presencial</span>
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />Full-time</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold w-full">
                  Ver Todas as Vagas
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-primary/20 to-troiton-600/20 border border-primary/30 rounded-3xl p-12 hover:bg-gradient-to-r hover:from-primary/30 hover:to-troiton-600/30 transition-all duration-500">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Pronto para Transformar seu Negócio?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Descubra como podemos impulsionar sua empresa para o próximo nível com tecnologia de ponta.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold group">
                Fale Conosco
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

          <Footer />
          <WhatsAppButton />
          <CookieConsent />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default About;
