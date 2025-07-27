import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useImageLazyLoad } from "@/hooks/useImageLazyLoad";

const Apresentacao = () => {
  const { handleImageLoad } = useImageLazyLoad();

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10"></div>
        <img
          src="/lovable-uploads/18314ecc-70d3-488a-8b4a-cb2981c0cca5.png"
          alt="Apresentação Corporativa"
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={handleImageLoad}
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-white mb-6">
            Apresentação <span className="text-troiton-400">Corporativa</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Conheça nossa trajetória, missão e visão para o futuro da tecnologia e sustentabilidade empresarial.
          </p>
          <button className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Conhecer Nossa História
          </button>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-6">
          {/* Mission & Vision Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Missão e Visão</h2>
              <p className="text-lg text-gray-300">Os pilares que guiam nossa jornada empresarial</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-green-900/80 to-emerald-900/80 p-8 rounded-2xl backdrop-blur-sm border border-green-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-300">Nossa Missão</h3>
                </div>
                <p className="text-green-100 mb-6 text-lg leading-relaxed">
                  Transformar negócios através de soluções tecnológicas sustentáveis e inovadoras, promovendo o crescimento responsável e o impacto positivo na sociedade.
                </p>
                <ul className="space-y-3 text-green-100">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Inovação constante e disruptiva
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Sustentabilidade em todas as operações
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Excelência operacional e qualidade
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/80 to-indigo-900/80 p-8 rounded-2xl backdrop-blur-sm border border-blue-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300">Nossa Visão</h3>
                </div>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  Ser reconhecida como referência global em transformação digital sustentável, liderando a revolução tecnológica responsável.
                </p>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Liderança tecnológica mundial
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Impacto social positivo significativo
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Crescimento sustentável e escalável
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-troiton-400 mb-4">Nossos Valores</h2>
              <p className="text-lg text-gray-300">Os princípios que norteiam todas as nossas decisões</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-r from-troiton-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Inovação</h3>
                <p className="text-gray-300">Buscamos constantemente novas formas de resolver problemas e criar valor para nossos clientes.</p>
              </div>

              <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Sustentabilidade</h3>
                <p className="text-gray-300">Comprometidos com práticas que preservem o meio ambiente e promovam o desenvolvimento sustentável.</p>
              </div>

              <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Colaboração</h3>
                <p className="text-gray-300">Trabalhamos juntos, valorizando a diversidade e construindo relacionamentos duradouros.</p>
              </div>
            </div>
          </div>

          {/* Company Overview */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-troiton-400 mb-6">Nossa Trajetória</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Desde nossa fundação, temos nos dedicado a criar soluções tecnológicas que não apenas atendem às necessidades do presente, mas antecipam os desafios do futuro.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Nossa abordagem integrada combina expertise técnica, visão estratégica e compromisso com a sustentabilidade para entregar resultados excepcionais.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-troiton-400 mb-2">500+</div>
                    <div className="text-gray-300">Projetos Concluídos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-troiton-400 mb-2">50+</div>
                    <div className="text-gray-300">Empresas Atendidas</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/ae407725-16d6-41d7-b593-3182dfd6c8c7.png"
                  alt="Nossa equipe"
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

export default Apresentacao;