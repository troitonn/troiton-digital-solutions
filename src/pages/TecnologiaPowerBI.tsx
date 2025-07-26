import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const TecnologiaPowerBI = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-troiton-400 mb-6">Power BI e Dashboards</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transforme seus dados em insights visuais poderosos com dashboards interativos 
                e relatórios dinâmicos no Power BI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gradient-to-br from-orange-900 to-red-900 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-orange-300">Dashboards Executivos</h2>
                <p className="text-orange-100 mb-6">Painéis estratégicos para tomada de decisão ágil e baseada em dados.</p>
                <ul className="space-y-2 text-orange-100">
                  <li>• KPIs em tempo real</li>
                  <li>• Alertas automáticos</li>
                  <li>• Drill-down interativo</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-blue-300">Relatórios Personalizados</h2>
                <p className="text-blue-100 mb-6">Relatórios sob medida para cada área da sua empresa.</p>
                <ul className="space-y-2 text-blue-100">
                  <li>• Financeiro e contábil</li>
                  <li>• Vendas e marketing</li>
                  <li>• Operações e logística</li>
                </ul>
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

export default TecnologiaPowerBI;