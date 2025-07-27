import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe, Database, Cpu, Zap } from "lucide-react";

const TecnologiaDesenvolvimento = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-troiton-400">Desenvolvimento</span> de Software
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Criamos soluções tecnológicas sob medida, desde aplicações web e mobile 
                até sistemas corporativos complexos, utilizando as tecnologias mais modernas do mercado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Desenvolvimento de Software"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-troiton-400">
                  Tecnologia que Impulsiona Negócios
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Nossa equipe de desenvolvedores especialistas entrega soluções escaláveis, 
                  seguras e inovadoras que transformam ideias em produtos digitais de sucesso, 
                  sempre alinhados aos objetivos estratégicos da sua empresa.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-troiton-500 hover:bg-troiton-600">
                    Iniciar Projeto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Nossas Especialidades</h2>
              <p className="text-xl text-gray-300">Soluções completas para todas as suas necessidades tecnológicas</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-xl text-center">
                <Globe className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-blue-300">Aplicações Web</h3>
                <p className="text-blue-100">
                  Desenvolvimento de sistemas web modernos com React, Angular, Vue.js 
                  e as mais avançadas tecnologias front-end e back-end.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-xl text-center">
                <Smartphone className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-green-300">Apps Mobile</h3>
                <p className="text-green-100">
                  Aplicativos nativos e híbridos para iOS e Android utilizando 
                  React Native, Flutter e desenvolvimento nativo.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-xl text-center">
                <Database className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-purple-300">APIs & Backend</h3>
                <p className="text-purple-100">
                  Arquiteturas robustas com Node.js, Python, Java e .NET, 
                  incluindo microserviços e integração de sistemas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-xl text-center">
                <Code className="w-12 h-12 text-red-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-red-300">Sistemas Corporativos</h3>
                <p className="text-red-100">
                  ERPs, CRMs e sistemas de gestão personalizados para 
                  otimizar processos empresariais específicos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-900 to-orange-800 p-8 rounded-xl text-center">
                <Cpu className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-yellow-300">IoT & Embarcados</h3>
                <p className="text-yellow-100">
                  Desenvolvimento para dispositivos IoT, sistemas embarcados 
                  e integração com hardware especializado.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900 to-teal-800 p-8 rounded-xl text-center">
                <Zap className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-cyan-300">DevOps & Cloud</h3>
                <p className="text-cyan-100">
                  Implementação de CI/CD, containerização com Docker/Kubernetes 
                  e deploy em ambientes cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologias Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Stack Tecnológico</h2>
              <p className="text-xl text-gray-300">Utilizamos as tecnologias mais modernas e confiáveis</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">Frontend</h3>
                <div className="space-y-2">
                  {["React", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"].map((tech, index) => (
                    <div key={index} className="bg-gray-800 px-3 py-2 rounded text-sm">{tech}</div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">Backend</h3>
                <div className="space-y-2">
                  {["Node.js", "Python", "Java", ".NET", "PHP", "Go"].map((tech, index) => (
                    <div key={index} className="bg-gray-800 px-3 py-2 rounded text-sm">{tech}</div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">Database</h3>
                <div className="space-y-2">
                  {["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB", "Oracle"].map((tech, index) => (
                    <div key={index} className="bg-gray-800 px-3 py-2 rounded text-sm">{tech}</div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">Cloud & DevOps</h3>
                <div className="space-y-2">
                  {["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform"].map((tech, index) => (
                    <div key={index} className="bg-gray-800 px-3 py-2 rounded text-sm">{tech}</div>
                  ))}
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-troiton-400 mb-6">
                  Metodologia Ágil
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Utilizamos práticas ágeis como Scrum e Kanban para entregar 
                  valor de forma incremental, garantindo transparência total 
                  e flexibilidade para adaptações durante o desenvolvimento.
                </p>
                <div className="space-y-4">
                  {[
                    { phase: "Discovery", desc: "Análise de requisitos e planejamento" },
                    { phase: "Design", desc: "Prototipação e arquitetura do sistema" },
                    { phase: "Development", desc: "Desenvolvimento incremental em sprints" },
                    { phase: "Testing", desc: "Testes automatizados e manuais" },
                    { phase: "Deploy", desc: "Entrega contínua e monitoramento" },
                    { phase: "Support", desc: "Manutenção e evolução contínua" }
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
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Metodologia Ágil"
                  className="rounded-xl shadow-2xl"
                />
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
              Transforme sua Ideia em Realidade
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Conte com nossa expertise para desenvolver a solução tecnológica 
              que sua empresa precisa para se destacar no mercado.
            </p>
            <Button size="lg" className="bg-white text-troiton-600 hover:bg-gray-100">
              Solicitar Orçamento
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

export default TecnologiaDesenvolvimento;