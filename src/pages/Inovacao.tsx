import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Inovacao = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-troiton-400 mb-8">Inovação e Processos</h1>
          <div className="max-w-4xl">
            <p className="text-lg mb-6">
              Impulsionamos a inovação através da modernização de processos e implementação 
              de tecnologias disruptivas.
            </p>
            <div className="space-y-6 mt-12">
              <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Design Thinking</h3>
                <p>Metodologia centrada no usuário para criação de soluções inovadoras.</p>
              </div>
              <div className="bg-gradient-to-r from-blue-900 to-cyan-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Automação Inteligente</h3>
                <p>RPA e IA para automatizar processos complexos e repetitivos.</p>
              </div>
              <div className="bg-gradient-to-r from-green-900 to-teal-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Lean Six Sigma</h3>
                <p>Eliminação de desperdícios e melhoria contínua da qualidade.</p>
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

export default Inovacao;