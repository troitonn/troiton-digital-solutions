import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Consultoria = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-troiton-400 mb-8">Consultoria Estratégica</h1>
          <div className="max-w-4xl">
            <p className="text-lg mb-6">
              Nossos consultores especializados trabalham lado a lado com sua equipe para 
              identificar oportunidades de melhoria e implementar soluções eficazes.
            </p>
            <div className="space-y-8 mt-12">
              <div className="border-l-4 border-troiton-500 pl-6">
                <h3 className="text-xl font-semibold mb-3">Diagnóstico Empresarial</h3>
                <p>Análise completa dos processos e identificação de gargalos.</p>
              </div>
              <div className="border-l-4 border-troiton-500 pl-6">
                <h3 className="text-xl font-semibold mb-3">Otimização de Processos</h3>
                <p>Redesenho de workflows para máxima eficiência operacional.</p>
              </div>
              <div className="border-l-4 border-troiton-500 pl-6">
                <h3 className="text-xl font-semibold mb-3">Transformação Digital</h3>
                <p>Implementação de tecnologias para modernizar sua operação.</p>
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

export default Consultoria;