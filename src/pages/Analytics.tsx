import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-troiton-400 mb-8">Analytics e Dashboards</h1>
          <div className="max-w-4xl">
            <p className="text-lg mb-6">
              Transforme dados em insights acionáveis com nossas soluções de analytics avançadas 
              e dashboards interativos personalizados.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-troiton-400 mb-4">Business Intelligence</h3>
                <p>Dashboards intuitivos que facilitam a tomada de decisões estratégicas.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-troiton-400 mb-4">Análise Preditiva</h3>
                <p>Modelos de machine learning para prever tendências e comportamentos.</p>
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

export default Analytics;