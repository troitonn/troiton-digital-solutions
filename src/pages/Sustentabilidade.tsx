import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Sustentabilidade = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-troiton-400 mb-8">Sustentabilidade</h1>
          <div className="max-w-4xl">
            <p className="text-lg mb-6">
              Comprometidos com práticas sustentáveis, desenvolvemos soluções que respeitam 
              o meio ambiente e promovem responsabilidade social.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Meio Ambiente</h3>
                <p>Soluções tecnológicas que reduzem o impacto ambiental e promovem eficiência energética.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Responsabilidade Social</h3>
                <p>Projetos que geram impacto positivo na comunidade e sociedade.</p>
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

export default Sustentabilidade;