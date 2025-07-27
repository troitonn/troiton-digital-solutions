import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, FileText } from "lucide-react";

const TecnologiaSeguranca = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-troiton-400">Segurança</span> da Informação
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Protegemos seus dados e sistemas com soluções avançadas de cibersegurança, 
                garantindo conformidade com LGPD, ISO 27001 e as melhores práticas internacionais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Segurança da Informação"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-troiton-400">
                  Proteção Total para seu Negócio
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Em um mundo digital cada vez mais vulnerável, implementamos camadas 
                  múltiplas de segurança que protegem informações críticas, garantem 
                  continuidade dos negócios e mantêm a confiança dos seus clientes.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-troiton-500 hover:bg-troiton-600">
                    Avaliar Segurança
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços de Segurança */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Soluções de Cibersegurança</h2>
              <p className="text-xl text-gray-300">Proteção abrangente contra ameaças digitais</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-xl text-center">
                <Shield className="w-12 h-12 text-red-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-red-300">Firewall & UTM</h3>
                <p className="text-red-100">
                  Proteção perimetral avançada com firewall de nova geração, 
                  prevenção de intrusão e filtragem de conteúdo.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-xl text-center">
                <Eye className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-blue-300">SOC & SIEM</h3>
                <p className="text-blue-100">
                  Centro de operações de segurança com monitoramento 24x7 
                  e análise inteligente de eventos de segurança.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-xl text-center">
                <Lock className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-green-300">Criptografia</h3>
                <p className="text-green-100">
                  Proteção de dados em trânsito e em repouso com algoritmos 
                  de criptografia de grau militar e gestão de chaves.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-xl text-center">
                <Users className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-purple-300">IAM & SSO</h3>
                <p className="text-purple-100">
                  Gestão de identidades e acesso com autenticação multifator, 
                  single sign-on e controle granular de permissões.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-900 to-orange-800 p-8 rounded-xl text-center">
                <AlertTriangle className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-yellow-300">Backup & DR</h3>
                <p className="text-yellow-100">
                  Soluções de backup automatizado e planos de recuperação 
                  de desastres para garantir continuidade dos negócios.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900 to-teal-800 p-8 rounded-xl text-center">
                <FileText className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Auditoria & Compliance</h3>
                <p className="text-cyan-100">
                  Auditorias de segurança, análise de vulnerabilidades 
                  e adequação a normas regulatórias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance LGPD */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-troiton-400 mb-6">
                  Conformidade LGPD
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Implementamos um programa completo de adequação à Lei Geral de 
                  Proteção de Dados, incluindo mapeamento de dados, políticas de 
                  privacidade e controles técnicos necessários.
                </p>
                <div className="space-y-4">
                  {[
                    "Mapeamento e inventário de dados pessoais",
                    "Implementação de controles de acesso e criptografia",
                    "Desenvolvimento de políticas e procedimentos",
                    "Treinamento de equipes e conscientização",
                    "Relatórios de impacto à proteção de dados",
                    "Resposta a incidentes e notificação à ANPD"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-troiton-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
                  alt="LGPD Compliance"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teste de Penetração */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Testes de Penetração</h2>
              <p className="text-xl text-gray-300">Avaliação proativa de vulnerabilidades</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-troiton-400 mb-4">Web Applications</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Teste OWASP Top 10</li>
                  <li>• Análise de código fonte</li>
                  <li>• Teste de APIs REST/GraphQL</li>
                  <li>• Validação de autenticação</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-troiton-400 mb-4">Infraestrutura</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Scan de vulnerabilidades</li>
                  <li>• Teste de configuração</li>
                  <li>• Análise de rede interna</li>
                  <li>• Avaliação de serviços</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-troiton-400 mb-4">Social Engineering</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Phishing simulado</li>
                  <li>• Teste de conscientização</li>
                  <li>• Engenharia social por telefone</li>
                  <li>• Teste físico de acesso</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Certificações e Normas</h2>
              <p className="text-xl text-gray-300">Conformidade com padrões internacionais</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "ISO 27001", desc: "Sistema de Gestão de Segurança da Informação" },
                { title: "LGPD", desc: "Lei Geral de Proteção de Dados" },
                { title: "SOC 2", desc: "Service Organization Control" },
                { title: "PCI DSS", desc: "Payment Card Industry Data Security" },
                { title: "NIST", desc: "National Institute of Standards and Technology" },
                { title: "COBIT", desc: "Control Objectives for Information Technologies" },
                { title: "ITIL", desc: "Information Technology Infrastructure Library" },
                { title: "CIS Controls", desc: "Center for Internet Security Controls" }
              ].map((cert, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
                  <h3 className="text-lg font-semibold text-troiton-400 mb-2">{cert.title}</h3>
                  <p className="text-gray-300 text-sm">{cert.desc}</p>
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
              Proteja seu Negócio Hoje
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Não espere um incidente acontecer. Implemente uma estratégia 
              robusta de cibersegurança e garanta a proteção total dos seus dados.
            </p>
            <Button size="lg" className="bg-white text-troiton-600 hover:bg-gray-100">
              Solicitar Assessment de Segurança
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

export default TecnologiaSeguranca;