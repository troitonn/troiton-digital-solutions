
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(235,255,245,1) 100%)"
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2325af5d' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <span className="inline-block bg-troiton-100 text-troiton-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
              Inovação em TI para sua empresa
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Soluções de tecnologia que <span className="gradient-text">impulsionam</span> seu negócio
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              A Troiton Projects oferece serviços completos de TI para transformar digitalmente sua empresa, desde implementação de sistemas até segurança e consultoria especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#servicos" className="bg-troiton-600 hover:bg-troiton-700 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center transition-colors btn-animation">
                Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contato" className="border-2 border-troiton-600 text-troiton-700 hover:bg-troiton-50 px-8 py-3 rounded-md font-medium flex items-center justify-center transition-colors">
                Fale Conosco
              </a>
            </div>
          </div>
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-troiton-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-troiton-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Serviços de TI" 
                  className="rounded-lg shadow-2xl object-cover w-full max-w-lg mx-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
