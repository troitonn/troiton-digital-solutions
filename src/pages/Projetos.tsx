import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Projetos = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-troiton-400 mb-8">Projetos e Implantação</h1>
          <div className="max-w-4xl">
            <p className="text-lg mb-6">
              Gerenciamos projetos complexos de transformação digital com metodologias ágeis 
              e foco em resultados mensuráveis.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">Gestão Ágil</h3>
                <p>Metodologias modernas para entrega rápida e eficiente.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">Implantação</h3>
                <p>Processo estruturado para garantir sucesso na implementação.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">Suporte</h3>
                <p>Acompanhamento contínuo pós-implantação.</p>
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

export default Projetos;