import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Comunidade = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-troiton-400 mb-6">Comunidade e Sociedade</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Construímos pontes entre tecnologia e sociedade, promovendo inclusão digital e 
                desenvolvimento sustentável em nossas comunidades.
              </p>
            </div>

            {/* Iniciativas */}
            <div className="space-y-12 mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-troiton-400">Inclusão Digital</h2>
                  <p className="text-gray-300 mb-6">
                    Levamos tecnologia para comunidades carentes através de centros de inclusão digital 
                    e programas de alfabetização tecnológica.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-troiton-500 rounded-full mr-3"></div>
                      Centros comunitários de tecnologia
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-troiton-500 rounded-full mr-3"></div>
                      Oficinas de informática básica
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-troiton-500 rounded-full mr-3"></div>
                      Doação de equipamentos
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-indigo-900 p-8 rounded-2xl">
                  <div className="text-4xl font-bold text-purple-300 mb-2">1000+</div>
                  <div className="text-purple-100">Pessoas capacitadas digitalmente</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-green-900 to-teal-900 p-8 rounded-2xl order-2 md:order-1">
                  <div className="text-4xl font-bold text-green-300 mb-2">25</div>
                  <div className="text-green-100">Comunidades atendidas</div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-4 text-troiton-400">Desenvolvimento Local</h2>
                  <p className="text-gray-300 mb-6">
                    Apoiamos o desenvolvimento econômico local através da capacitação empreendedora 
                    e digitalização de pequenos negócios.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-troiton-500 rounded-full mr-3"></div>
                      Capacitação em empreendedorismo digital
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-troiton-500 rounded-full mr-3"></div>
                      Criação de e-commerce gratuito
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-troiton-500 rounded-full mr-3"></div>
                      Mentoria para pequenos negócios
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Parcerias */}
            <div className="bg-gray-900 p-8 rounded-2xl mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-troiton-400">Nossas Parcerias</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-troiton-400">ONGs Locais</h3>
                  <p className="text-gray-300">Colaboramos com organizações que conhecem as necessidades da comunidade.</p>
                </div>
                <div className="text-center p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-troiton-400">Escolas Públicas</h3>
                  <p className="text-gray-300">Levamos educação tecnológica para estudantes de escolas públicas.</p>
                </div>
                <div className="text-center p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-troiton-400">Governo Municipal</h3>
                  <p className="text-gray-300">Trabalhamos junto ao poder público em políticas de inclusão digital.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-troiton-400">Faça parte da nossa comunidade</h3>
              <p className="text-gray-300 mb-6">Junte-se a nós na construção de uma sociedade mais conectada e inclusiva.</p>
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Participar
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

export default Comunidade;