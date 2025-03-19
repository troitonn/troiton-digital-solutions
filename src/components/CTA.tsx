
import { ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-troiton-800 to-troiton-600 text-white"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua empresa com tecnologia?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossas soluções podem impulsionar seu negócio para o próximo nível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contato" 
              className="bg-white text-troiton-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium flex items-center justify-center transition-colors btn-animation"
            >
              Fale com um especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#servicos" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium flex items-center justify-center transition-colors"
            >
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
