import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Indicadores = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-troiton-400 mb-6">Análise de Indicadores</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transforme dados em insights estratégicos com nossa expertise em análise de KPIs 
                e métricas de performance empresarial.
              </p>
            </div>

            {/* Serviços */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">KPIs Estratégicos</h3>
                <p className="text-blue-100 mb-4">Definição e monitoramento de indicadores-chave de performance alinhados aos objetivos de negócio.</p>
                <ul className="text-blue-100 text-sm space-y-1">
                  <li>• ROI e rentabilidade</li>
                  <li>• Satisfação do cliente</li>
                  <li>• Produtividade operacional</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-green-300">Dashboards Executivos</h3>
                <p className="text-green-100 mb-4">Visualizações interativas que facilitam a tomada de decisão em tempo real.</p>
                <ul className="text-green-100 text-sm space-y-1">
                  <li>• Painéis em tempo real</li>
                  <li>• Alertas automáticos</li>
                  <li>• Relatórios personalizados</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Análise Preditiva</h3>
                <p className="text-purple-100 mb-4">Modelos estatísticos para prever tendências e comportamentos futuros.</p>
                <ul className="text-purple-100 text-sm space-y-1">
                  <li>• Forecasting de vendas</li>
                  <li>• Análise de tendências</li>
                  <li>• Modelagem estatística</li>
                </ul>
              </div>
            </div>

            {/* Metodologia */}
            <div className="bg-gray-900 p-8 rounded-2xl mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-troiton-400">Nossa Metodologia</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-troiton-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-troiton-400">Diagnóstico</h3>
                  <p className="text-gray-300 text-sm">Análise da situação atual e identificação de gaps.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-troiton-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-troiton-400">Definição</h3>
                  <p className="text-gray-300 text-sm">Estabelecimento de KPIs e métricas relevantes.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-troiton-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-troiton-400">Implementação</h3>
                  <p className="text-gray-300 text-sm">Configuração de sistemas de coleta e análise.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-troiton-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-troiton-400">Monitoramento</h3>
                  <p className="text-gray-300 text-sm">Acompanhamento contínuo e ajustes necessários.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-troiton-400">Pronto para medir o que importa?</h3>
              <p className="text-gray-300 mb-6">Vamos desenvolver um sistema de indicadores que impulsione seus resultados.</p>
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Solicitar Consultoria
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Indicadores;