import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Estrategia = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-troiton-400 mb-8">Estratégia Empresarial</h1>
          <div className="max-w-4xl">
            <p className="text-lg mb-6">
              Desenvolvemos estratégias personalizadas para acelerar o crescimento do seu negócio 
              através de análise de mercado e planejamento estratégico.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-troiton-400 mb-4">Análise de Mercado</h3>
                <p>Identificamos oportunidades e riscos para posicionar sua empresa estrategicamente.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-troiton-400 mb-4">Planejamento Estratégico</h3>
                <p>Criamos roadmaps detalhados para alcançar seus objetivos de negócio.</p>
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