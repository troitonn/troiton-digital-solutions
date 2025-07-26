import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const TecnologiaIA = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-troiton-400 mb-8">Inteligência Artificial</h1>
          <div className="max-w-4xl">
            <p className="text-lg mb-6">
              Implementamos soluções de IA que transformam dados em inteligência competitiva, 
              automatizando processos e otimizando operações.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">Machine Learning</h3>
                <p>Algoritmos preditivos para análise avançada de dados.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">NLP</h3>
                <p>Processamento de linguagem natural para automação.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-troiton-400 mb-4">Computer Vision</h3>
                <p>Reconhecimento e análise de imagens automatizada.</p>
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

export default TecnologiaIA;