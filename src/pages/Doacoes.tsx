import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Doacoes = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-troiton-400 mb-6">Doações e Patrocínios</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Investimos em projetos sociais e iniciativas que geram impacto positivo na sociedade, 
                promovendo transformação através da tecnologia e educação.
              </p>
            </div>

            {/* Programas de Doação */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-white">Educação Digital</h2>
                <p className="text-green-100 mb-6">
                  Apoiamos programas de capacitação em tecnologia para jovens em situação de vulnerabilidade social.
                </p>
                <ul className="space-y-3 text-green-100">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Cursos de programação gratuitos
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Bolsas de estudo em tecnologia
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Mentoria profissional
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-white">Inovação Social</h2>
                <p className="text-blue-100 mb-6">
                  Patrocinamos startups e projetos que utilizam tecnologia para resolver problemas sociais.
                </p>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Aceleração de startups sociais
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Funding para projetos de impacto
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Consultoria pro bono
                  </li>
                </ul>
              </div>
            </div>

            {/* Impacto */}
            <div className="bg-gray-900 p-8 rounded-2xl mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-troiton-400">Nosso Impacto</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-troiton-400 mb-2">500+</div>
                  <div className="text-gray-300">Jovens capacitados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-troiton-400 mb-2">50+</div>
                  <div className="text-gray-300">Projetos apoiados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-troiton-400 mb-2">R$ 2M+</div>
                  <div className="text-gray-300">Investidos em impacto social</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-troiton-400 mb-2">15</div>
                  <div className="text-gray-300">Comunidades beneficiadas</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-troiton-400">Tem um projeto social?</h3>
              <p className="text-gray-300 mb-6">Entre em contato conosco e vamos conversar sobre como podemos apoiar sua iniciativa.</p>
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Enviar Proposta
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

export default Doacoes;