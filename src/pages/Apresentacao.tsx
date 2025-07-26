import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Apresentacao = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-troiton-400 mb-8">Apresentação</h1>
          <div className="max-w-4xl">
            <p className="text-lg mb-6">
              A Troiton é uma empresa de consultoria e tecnologia especializada em transformação digital 
              e otimização de processos empresariais.
            </p>
            <p className="text-lg mb-6">
              Com anos de experiência no mercado, oferecemos soluções inovadoras que impulsionam 
              o crescimento sustentável dos nossos clientes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Apresentacao;