import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, CheckCircle2, Users, FileText, BarChart3 } from "lucide-react";

const Qualidade = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-troiton-400">Qualidade</span> e Compliance
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Implementamos sistemas de gestão da qualidade e compliance que garantem 
                excelência operacional e conformidade com regulamentações nacionais e internacionais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                  alt="Gestão da Qualidade"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-troiton-400">
                  Excelência em Cada Processo
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Desenvolvemos e implementamos sistemas robustos de qualidade que não apenas 
                  atendem aos mais rigorosos padrões, mas também impulsionam a melhoria 
                  contínua e a inovação em sua organização.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-troiton-500 hover:bg-troiton-600">
                    Avaliar Compliance
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Certificações e Normas</h2>
              <p className="text-xl text-gray-300">Especialistas em implementação de padrões internacionais</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-xl text-center">
                <Award className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-blue-300">ISO 9001</h3>
                <p className="text-blue-100">
                  Sistema de Gestão da Qualidade focado na satisfação do cliente 
                  e melhoria contínua dos processos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-xl text-center">
                <Shield className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-green-300">ISO 27001</h3>
                <p className="text-green-100">
                  Gestão de Segurança da Informação para proteção de dados 
                  e conformidade com LGPD e GDPR.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-xl text-center">
                <FileText className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-purple-300">SOX & COBIT</h3>
                <p className="text-purple-100">
                  Controles internos e governança de TI para empresas de 
                  capital aberto e organizações regulamentadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia Six Sigma */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-troiton-400 mb-6">
                  Six Sigma & Lean Manufacturing
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Aplicamos metodologias comprovadas para eliminar defeitos, reduzir 
                  variabilidade e otimizar processos, garantindo qualidade superior 
                  e redução de custos.
                </p>
                <div className="space-y-4">
                  {[
                    { phase: "Define", desc: "Definição clara de problemas e objetivos" },
                    { phase: "Measure", desc: "Medição e coleta de dados precisos" },
                    { phase: "Analyze", desc: "Análise estatística de causas raiz" },
                    { phase: "Improve", desc: "Implementação de soluções eficazes" },
                    { phase: "Control", desc: "Controle e sustentação das melhorias" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-troiton-500 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <span className="font-semibold text-troiton-400">{item.phase}:</span>
                        <span className="text-gray-300 ml-2">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Six Sigma Methodology"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Compliance Regulatório</h2>
              <p className="text-xl text-gray-300">Conformidade com as principais regulamentações</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "LGPD", desc: "Lei Geral de Proteção de Dados", icon: Shield },
                { title: "SOX", desc: "Sarbanes-Oxley Act", icon: FileText },
                { title: "GDPR", desc: "General Data Protection Regulation", icon: Users },
                { title: "Basel III", desc: "Regulamentação Bancária", icon: BarChart3 },
                { title: "ANVISA", desc: "Regulamentação Sanitária", icon: CheckCircle2 },
                { title: "ANATEL", desc: "Regulamentação Telecomunicações", icon: Shield },
                { title: "CVM", desc: "Comissão de Valores Mobiliários", icon: FileText },
                { title: "BACEN", desc: "Banco Central do Brasil", icon: BarChart3 }
              ].map((reg, index) => {
                const Icon = reg.icon;
                return (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                    <Icon className="w-8 h-8 text-troiton-400 mb-3" />
                    <h3 className="text-lg font-semibold text-troiton-400 mb-2">{reg.title}</h3>
                    <p className="text-gray-300 text-sm">{reg.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Benefícios da Qualidade"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-troiton-400 mb-6">
                  Resultados Mensuráveis
                </h2>
                <div className="space-y-4">
                  {[
                    "Redução de 90% em não-conformidades",
                    "Aumento de 35% na satisfação do cliente",
                    "Diminuição de 50% em retrabalho",
                    "Melhoria de 25% na eficiência operacional",
                    "Conformidade 100% com auditorias",
                    "Redução de riscos regulatórios e multas"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-troiton-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-troiton-500 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Garanta a Excelência da sua Operação
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Implemente sistemas de qualidade e compliance que protegem seu 
              negócio e impulsionam o crescimento sustentável.
            </p>
            <Button size="lg" className="bg-white text-troiton-600 hover:bg-gray-100">
              Solicitar Auditoria de Qualidade
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Qualidade;