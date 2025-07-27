import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Cpu, Workflow, Settings, Zap, BarChart3 } from "lucide-react";

const TecnologiaAutomacao = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-troiton-400">Automação</span> de Processos
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transforme processos manuais em fluxos automatizados inteligentes usando RPA, 
                IA e integração de sistemas para maximizar eficiência e reduzir custos operacionais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Automação de Processos"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-troiton-400">
                  Eficiência Operacional Inteligente
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Implementamos soluções de automação que eliminam tarefas repetitivas, 
                  reduzem erros humanos e liberam sua equipe para atividades estratégicas, 
                  gerando ROI mensurável em poucos meses.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-troiton-500 hover:bg-troiton-600">
                    Avaliar Processos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Automação */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Soluções de Automação</h2>
              <p className="text-xl text-gray-300">Tecnologias avançadas para cada necessidade</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-xl text-center">
                <Bot className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-blue-300">RPA (Robotic Process Automation)</h3>
                <p className="text-blue-100">
                  Robôs de software que executam tarefas repetitivas com precisão, 
                  integrando sistemas legados e aplicações modernas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-xl text-center">
                <Cpu className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-green-300">IA & Machine Learning</h3>
                <p className="text-green-100">
                  Automação inteligente com processamento de linguagem natural, 
                  reconhecimento de padrões e tomada de decisão automatizada.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-xl text-center">
                <Workflow className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-purple-300">Workflow Automation</h3>
                <p className="text-purple-100">
                  Orquestração de processos complexos com aprovações automáticas, 
                  notificações e integração entre departamentos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-xl text-center">
                <Settings className="w-12 h-12 text-red-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-red-300">API Integration</h3>
                <p className="text-red-100">
                  Conectividade total entre sistemas através de APIs, 
                  webhooks e middleware para fluxo contínuo de dados.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-900 to-orange-800 p-8 rounded-xl text-center">
                <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-yellow-300">Business Rules Engine</h3>
                <p className="text-yellow-100">
                  Automatização de regras de negócio complexas com motor 
                  de decisão configurável e auditoria completa.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900 to-teal-800 p-8 rounded-xl text-center">
                <BarChart3 className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Process Mining</h3>
                <p className="text-cyan-100">
                  Descoberta e análise de processos existentes através de 
                  dados para identificar oportunidades de automação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Casos de Uso</h2>
              <p className="text-xl text-gray-300">Processos que podem ser automatizados</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-troiton-400">Financeiro</h3>
                <div className="space-y-3">
                  {[
                    "Processamento de faturas e pagamentos",
                    "Conciliação bancária automática",
                    "Relatórios financeiros periódicos",
                    "Cobrança e follow-up de clientes",
                    "Análise de crédito e aprovações"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-troiton-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-troiton-400">Recursos Humanos</h3>
                <div className="space-y-3">
                  {[
                    "Onboarding de funcionários",
                    "Processamento de folha de pagamento",
                    "Gestão de férias e licenças",
                    "Avaliações de performance",
                    "Recrutamento e seleção"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-troiton-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-troiton-400">Atendimento ao Cliente</h3>
                <div className="space-y-3">
                  {[
                    "Triagem e roteamento de tickets",
                    "Respostas automáticas via chatbot",
                    "Escalação inteligente de chamados",
                    "Pesquisas de satisfação",
                    "Atualizações de status automáticas"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-troiton-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-troiton-400">Operações</h3>
                <div className="space-y-3">
                  {[
                    "Gestão de estoque e reposição",
                    "Processamento de pedidos",
                    "Monitoramento de SLA",
                    "Relatórios operacionais",
                    "Backup e manutenção de sistemas"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-troiton-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI e Benefícios */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="ROI da Automação"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-troiton-400 mb-6">
                  ROI Comprovado
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Nossos clientes experimentam resultados mensuráveis em poucos meses, 
                  com retorno do investimento entre 200% a 500% no primeiro ano.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-troiton-400 mb-2">85%</div>
                    <div className="text-sm text-gray-300">Redução no tempo de processamento</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-troiton-400 mb-2">95%</div>
                    <div className="text-sm text-gray-300">Diminuição de erros manuais</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-troiton-400 mb-2">40%</div>
                    <div className="text-sm text-gray-300">Economia em custos operacionais</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-troiton-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-300">Operação contínua sem pausas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ferramentas */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Tecnologias Utilizadas</h2>
              <p className="text-xl text-gray-300">Ferramentas líderes de mercado</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">RPA Platforms</h3>
                <div className="space-y-2">
                  {["UiPath", "Automation Anywhere", "Blue Prism", "Microsoft Power Automate", "Nintex", "Zapier"].map((tool, index) => (
                    <div key={index} className="bg-gray-800 px-3 py-2 rounded text-sm">{tool}</div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">AI & ML</h3>
                <div className="space-y-2">
                  {["TensorFlow", "PyTorch", "Azure Cognitive Services", "AWS AI/ML", "Google AI Platform", "OpenAI"].map((tool, index) => (
                    <div key={index} className="bg-gray-800 px-3 py-2 rounded text-sm">{tool}</div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">Integration</h3>
                <div className="space-y-2">
                  {["MuleSoft", "Apache Kafka", "REST APIs", "GraphQL", "Webhooks", "iPaaS Solutions"].map((tool, index) => (
                    <div key={index} className="bg-gray-800 px-3 py-2 rounded text-sm">{tool}</div>
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
              Automatize Agora e Colha os Resultados
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Identifique processos que podem ser automatizados em sua empresa 
              e comece a gerar economia e eficiência imediatamente.
            </p>
            <Button size="lg" className="bg-white text-troiton-600 hover:bg-gray-100">
              Agendar Assessment Gratuito
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

export default TecnologiaAutomacao;