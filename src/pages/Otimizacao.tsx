import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, Zap, CheckCircle } from "lucide-react";

const Otimizacao = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-troiton-400">Otimização</span> Operacional
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transforme suas operações com soluções inteligentes que eliminam gargalos, 
                reduzem custos e maximizam a eficiência dos seus processos empresariais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Otimização de processos"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-troiton-400">
                  Eficiência que Transforma Resultados
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Nossa abordagem sistemática identifica oportunidades de melhoria em toda 
                  a cadeia operacional, implementando soluções que geram impacto mensurável 
                  no desempenho e na produtividade.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-troiton-500 hover:bg-troiton-600">
                    Solicitar Diagnóstico
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Nossa Metodologia</h2>
              <p className="text-xl text-gray-300">Processo estruturado para maximizar resultados</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-xl text-center">
                <Target className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-blue-300">Diagnóstico</h3>
                <p className="text-blue-100">
                  Mapeamento completo dos processos atuais, identificação de gargalos 
                  e análise de oportunidades de melhoria.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-xl text-center">
                <TrendingUp className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-green-300">Otimização</h3>
                <p className="text-green-100">
                  Redesenho de processos com foco em eficiência, eliminação de 
                  desperdícios e automação de tarefas repetitivas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-xl text-center">
                <Zap className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-purple-300">Implementação</h3>
                <p className="text-purple-100">
                  Execução das melhorias com acompanhamento contínuo e 
                  mensuração de resultados através de KPIs específicos.
                </p>
              </div>
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
                <h2 className="text-4xl font-bold text-troiton-400 mb-6">
                  Benefícios Comprovados
                </h2>
                <div className="space-y-4">
                  {[
                    "Redução de até 40% no tempo de execução de processos",
                    "Diminuição de custos operacionais em 25-35%",
                    "Aumento da produtividade da equipe",
                    "Melhoria na qualidade dos produtos/serviços",
                    "Maior satisfação dos clientes",
                    "Compliance automático com regulamentações"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-troiton-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
                  alt="Resultados de otimização"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Aplicação */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Áreas de Aplicação</h2>
              <p className="text-xl text-gray-300">Soluções personalizadas para cada setor</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Manufatura", desc: "Lean Manufacturing e automação industrial" },
                { title: "Logística", desc: "Supply chain e gestão de estoque" },
                { title: "Atendimento", desc: "Customer service e relacionamento" },
                { title: "Financeiro", desc: "Controladoria e análise de custos" },
                { title: "Vendas", desc: "CRM e pipeline de vendas" },
                { title: "RH", desc: "Gestão de pessoas e performance" },
                { title: "TI", desc: "Infraestrutura e desenvolvimento" },
                { title: "Qualidade", desc: "Controle e garantia da qualidade" }
              ].map((area, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="text-lg font-semibold text-troiton-400 mb-2">{area.title}</h3>
                  <p className="text-gray-300 text-sm">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-troiton-500 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pronto para Otimizar suas Operações?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Agende uma consultoria gratuita e descubra como podemos 
              transformar a eficiência da sua empresa.
            </p>
            <Button size="lg" className="bg-white text-troiton-600 hover:bg-gray-100">
              Agendar Consultoria Gratuita
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

export default Otimizacao;