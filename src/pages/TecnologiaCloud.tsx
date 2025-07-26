import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const TecnologiaCloud = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-troiton-400 mb-8">Infraestrutura e Cloud</h1>
          <div className="max-w-4xl">
            <p className="text-lg mb-6">
              Migramos e otimizamos infraestruturas para a nuvem, garantindo escalabilidade, 
              segurança e redução de custos operacionais.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-troiton-400 mb-4">Cloud Migration</h3>
                <p>Migração segura e eficiente para AWS, Azure ou Google Cloud.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-troiton-400 mb-4">DevOps</h3>
                <p>Automação de deploy e monitoramento contínuo de aplicações.</p>
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

export default TecnologiaCloud;