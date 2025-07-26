import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Performance = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-troiton-400 mb-6">Gestão de Performance</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Maximize o potencial da sua equipe com sistemas de avaliação de performance 
                baseados em dados e metodologias comprovadas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-red-300">OKRs</h3>
                <p className="text-red-100">Implementação de Objectives and Key Results para alinhamento estratégico.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Feedback 360°</h3>
                <p className="text-blue-100">Avaliações multidirecionais para desenvolvimento integral da equipe.</p>
              </div>
              <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-green-300">Analytics</h3>
                <p className="text-green-100">Dashboards de performance com insights acionáveis em tempo real.</p>
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

export default Performance;