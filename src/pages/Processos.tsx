import { useState, useEffect, useRef } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Award, Users, Target, TrendingUp, Shield, ArrowRight, Star, Clock, BarChart3 } from 'lucide-react';
import auroraVideo from "@/assets/TroitonAurora.mp4";
const Processos = () => {
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
  return <div className="min-h-screen bg-black text-white overflow-hidden">
      <NavBar />
      
      {/* Hero Section with Aurora Video Background */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={auroraVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
        </div>

        {/* Animated Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-troiton-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-troiton-900/50 border border-troiton-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 text-troiton-400">
              <Award className="w-4 h-4 mr-2" />
              Certificação ISO 9001 • BPM Nivel 5
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Criação de</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">Processos Eficientes</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Desenvolvemos processos padronizados que otimizam operações, eliminam desperdícios 
              e garantem qualidade consistente. Transforme sua organização com nossa metodologia BPM comprovada.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button onClick={() => document.getElementById('contato')?.scrollIntoView({
              behavior: 'smooth'
            })} className="bg-gradient-to-r from-troiton-600 to-blue-600 hover:from-troiton-500 hover:to-blue-500 text-white px-10 py-4 rounded-full font-medium text-lg group relative overflow-hidden shadow-2xl hover:shadow-troiton-500/25 transition-all duration-300">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                <span className="relative inline-flex items-center">
                  Iniciar Transformação
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              
              <div className="flex items-center text-gray-300">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 bg-gradient-to-r from-troiton-500 to-blue-500 rounded-full border-2 border-black"></div>)}
                </div>
                <span className="text-sm">+500 empresas transformadas</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
              <div className="text-center">
                <div className="text-3xl font-bold text-troiton-400">90%</div>
                <div className="text-sm text-gray-400">Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">5+</div>
                <div className="text-sm text-gray-400">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">500+</div>
                <div className="text-sm text-gray-400">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">24h</div>
                <div className="text-sm text-gray-400">Tempo de Resposta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-black">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            
            {/* Benefícios com Credibilidade */}
            <section ref={sectionRef} className="mb-20">
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                    Por que <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">criar processos?</span>
                  </h2>
                  <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                    Nossa metodologia comprovada transforma operações e gera resultados mensuráveis
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Benefícios */}
                  <div className="space-y-8">
                    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-r from-troiton-500 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">Padronização</h3>
                          <p className="text-gray-300">Uniformidade na execução de tarefas e qualidade consistente dos resultados.</p>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">Eficiência</h3>
                          <p className="text-gray-300">Redução de desperdícios e otimização do uso de recursos.</p>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">Escalabilidade</h3>
                          <p className="text-gray-300">Capacidade de crescer mantendo a qualidade e controle.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Resultados com Credibilidade */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                    <div className="flex items-center mb-6">
                      <Shield className="w-8 h-8 text-troiton-400 mr-3" />
                      <h3 className="text-2xl font-bold text-white">Resultados Comprovados</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                        <div>
                          <span className="text-gray-300 text-sm">Redução de Erros</span>
                          <div className="text-xs text-gray-500 mt-1">Validado em +200 projetos</div>
                        </div>
                        <span className="text-3xl font-bold text-red-400">-70%</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                        <div>
                          <span className="text-gray-300 text-sm">Aumento de Produtividade</span>
                          <div className="text-xs text-gray-500 mt-1">Média dos últimos 3 anos</div>
                        </div>
                        <span className="text-3xl font-bold text-green-400">+45%</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                        <div>
                          <span className="text-gray-300 text-sm">Tempo de Treinamento</span>
                          <div className="text-xs text-gray-500 mt-1">Com nossa documentação</div>
                        </div>
                        <span className="text-3xl font-bold text-blue-400">-60%</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                        <div>
                          <span className="text-gray-300 text-sm">Satisfação da Equipe</span>
                          <div className="text-xs text-gray-500 mt-1">Pesquisa pós-implementação</div>
                        </div>
                        <span className="text-3xl font-bold text-purple-400">+35%</span>
                      </div>
                    </div>

                    {/* Certificações */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          ISO 9001
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          BPMN 2.0
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Six Sigma
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Metodologia BPM */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">Metodologia BPM</span>
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                  Processo estruturado em 3 etapas fundamentais para garantir sucesso
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm border border-blue-700/30 p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors">
                    <Target className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">Mapeamento</h3>
                  <p className="text-blue-100 mb-4">Identificação e documentação detalhada de todos os processos atuais da organização.</p>
                  <div className="text-sm text-blue-300 opacity-75">
                    <Clock className="w-4 h-4 inline mr-1" />
                    2-4 semanas
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-green-900/50 to-green-800/50 backdrop-blur-sm border border-green-700/30 p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-colors">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-300">Otimização</h3>
                  <p className="text-green-100 mb-4">Análise crítica e redesenho estratégico para eliminar gargalos e ineficiências.</p>
                  <div className="text-sm text-green-300 opacity-75">
                    <Clock className="w-4 h-4 inline mr-1" />
                    3-6 semanas
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm border border-purple-700/30 p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30 transition-colors">
                    <ArrowRight className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">Automatização</h3>
                  <p className="text-purple-100 mb-4">Implementação de ferramentas e tecnologias para automatizar tarefas repetitivas.</p>
                  <div className="text-sm text-purple-300 opacity-75">
                    <Clock className="w-4 h-4 inline mr-1" />
                    4-8 semanas
                  </div>
                </div>
              </div>
            </section>

            {/* Tipos de Processos */}
            <section className="mb-20">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 p-12 rounded-3xl">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                  Tipos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">Processos</span> que Criamos
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-gradient-to-r from-troiton-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-troiton-400">Operacionais</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Processos core do negócio que agregam valor direto ao cliente.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-green-400">Gerenciais</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Processos de planejamento, controle e tomada de decisão estratégica.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">Suporte</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Processos que apoiam e viabilizam a execução dos processos principais.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-orange-400">Conformidade</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Processos para garantir aderência a normas e regulamentações.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Final */}
            <section className="text-center py-20">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-blue-400">organizar</span> seus processos?
                </h3>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Entre em contato e descubra como nossos processos podem transformar sua operação 
                  e gerar resultados mensuráveis para sua empresa.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button onClick={() => document.getElementById('contato')?.scrollIntoView({
                  behavior: 'smooth'
                })} className="bg-gradient-to-r from-troiton-600 to-blue-600 hover:from-troiton-500 hover:to-blue-500 text-white px-12 py-4 rounded-full font-medium text-lg group relative overflow-hidden shadow-2xl hover:shadow-troiton-500/25 transition-all duration-300">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                    <span className="relative inline-flex items-center">
                      Iniciar Projeto
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                  
                  <div className="text-gray-400 text-sm">
                    <span className="block">Consultoria gratuita</span>
                    <span className="text-troiton-400">Primeira análise sem custo</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>;
};
export default Processos;