import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Processos = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-troiton-400 mb-6">Criação de Processos</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Desenvolvemos processos eficientes e padronizados que otimizam operações e 
                garantem qualidade consistente em sua organização.
              </p>
            </div>

            {/* Benefícios */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-troiton-400">Por que criar processos?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-troiton-500 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Padronização</h3>
                      <p className="text-gray-300">Uniformidade na execução de tarefas e qualidade consistente dos resultados.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-troiton-500 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Eficiência</h3>
                      <p className="text-gray-300">Redução de desperdícios e otimização do uso de recursos.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-troiton-500 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Escalabilidade</h3>
                      <p className="text-gray-300">Capacidade de crescer mantendo a qualidade e controle.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-troiton-400">Resultados Esperados</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Redução de Erros</span>
                    <span className="text-troiton-400 font-bold">-70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Aumento de Produtividade</span>
                    <span className="text-troiton-400 font-bold">+45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Tempo de Treinamento</span>
                    <span className="text-troiton-400 font-bold">-60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Satisfação da Equipe</span>
                    <span className="text-troiton-400 font-bold">+35%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metodologia */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-troiton-400">Nossa Metodologia BPM</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-blue-900 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-bold mb-4 text-blue-300">Mapeamento</h3>
                  <p className="text-blue-100">Identificação e documentação de todos os processos atuais da organização.</p>
                </div>
                <div className="bg-green-900 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">Otimização</h3>
                  <p className="text-green-100">Análise crítica e redesenho para eliminar gargalos e ineficiências.</p>
                </div>
                <div className="bg-purple-900 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Automatização</h3>
                  <p className="text-purple-100">Implementação de ferramentas para automatizar tarefas repetitivas.</p>
                </div>
              </div>
            </div>

            {/* Tipos de Processos */}
            <div className="bg-gray-900 p-8 rounded-2xl mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-troiton-400">Tipos de Processos que Criamos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold mb-2 text-troiton-400">Operacionais</h3>
                  <p className="text-gray-300 text-sm">Processos core do negócio que agregam valor direto ao cliente.</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold mb-2 text-troiton-400">Gerenciais</h3>
                  <p className="text-gray-300 text-sm">Processos de planejamento, controle e tomada de decisão.</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold mb-2 text-troiton-400">Suporte</h3>
                  <p className="text-gray-300 text-sm">Processos que apoiam a execução dos processos principais.</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold mb-2 text-troiton-400">Conformidade</h3>
                  <p className="text-gray-300 text-sm">Processos para garantir aderência a normas e regulamentações.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-troiton-400">Vamos organizar seus processos?</h3>
              <p className="text-gray-300 mb-6">Entre em contato e descubra como nossos processos podem transformar sua operação.</p>
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Iniciar Projeto
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

export default Processos;