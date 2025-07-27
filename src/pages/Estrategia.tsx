import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useImageLazyLoad } from "@/hooks/useImageLazyLoad";

const Estrategia = () => {
  const { handleImageLoad } = useImageLazyLoad();

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10"></div>
        <img
          src="/lovable-uploads/18314ecc-70d3-488a-8b4a-cb2981c0cca5.png"
          alt="Estratégia Empresarial"
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={handleImageLoad}
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-white mb-6">
            Estratégia <span className="text-troiton-400">Empresarial</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Desenvolvemos estratégias customizadas para impulsionar o crescimento sustentável e a competitividade do seu negócio no mercado global.
          </p>
          <button className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Desenvolver Estratégia
          </button>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-6">
          {/* Strategic Services */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Nossos Serviços Estratégicos</h2>
              <p className="text-lg text-gray-300">Soluções abrangentes para acelerar o crescimento do seu negócio</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 p-8 rounded-2xl backdrop-blur-sm border border-purple-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-300">Planejamento Estratégico</h3>
                </div>
                <p className="text-purple-100 mb-6 text-lg leading-relaxed">
                  Criamos planos estratégicos robustos que definem objetivos claros e caminhos eficientes para alcançar o sucesso empresarial sustentável.
                </p>
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Análise profunda de mercado e concorrência
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Definição de objetivos SMART
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Roadmap detalhado de implementação
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    KPIs e métricas de acompanhamento
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/80 to-red-900/80 p-8 rounded-2xl backdrop-blur-sm border border-orange-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-300">Transformação Digital</h3>
                </div>
                <p className="text-orange-100 mb-6 text-lg leading-relaxed">
                  Modernizamos processos e sistemas empresariais para a era digital, garantindo competitividade e eficiência operacional.
                </p>
                <ul className="space-y-3 text-orange-100">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    Digitalização completa de processos
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    Automação inteligente e IA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    Desenvolvimento de cultura digital
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    Integração de sistemas legados
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strategic Approach */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Nossa Abordagem Estratégica</h2>
              <p className="text-lg text-gray-300">Metodologia comprovada para resultados excepcionais</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-r from-troiton-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Diagnóstico</h3>
                <p className="text-gray-300">Análise completa da situação atual da empresa e identificação de oportunidades.</p>
              </div>

              <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Planejamento</h3>
                <p className="text-gray-300">Desenvolvimento de estratégias personalizadas e roadmap de implementação.</p>
              </div>

              <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Execução</h3>
                <p className="text-gray-300">Implementação das estratégias com acompanhamento e ajustes contínuos.</p>
              </div>

              <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Otimização</h3>
                <p className="text-gray-300">Monitoramento de resultados e otimização contínua para máxima eficácia.</p>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-troiton-400 mb-6">Resultados Comprovados</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Nossas estratégias têm ajudado empresas de diversos setores a alcançar crescimento exponencial e sustentável, superando desafios complexos do mercado.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                    <div className="text-3xl font-bold text-troiton-400 mb-2">300%</div>
                    <div className="text-gray-300">Crescimento Médio</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                    <div className="text-3xl font-bold text-troiton-400 mb-2">85%</div>
                    <div className="text-gray-300">Taxa de Sucesso</div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Ver Casos de Sucesso
                </button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/d98affc2-7384-4c0e-a3c3-e6d4f9ebd973.png"
                  alt="Estratégia de Sucesso"
                  className="rounded-2xl shadow-2xl"
                  onLoad={handleImageLoad}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Estrategia;