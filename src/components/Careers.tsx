import { ArrowRight, Rocket, Users, TrendingUp, Shield, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import careersImage from '@/assets/careers-professional-team.jpg';

const Careers = () => {
  return (
    <section id="vagas" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${careersImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60"></div>
      
      {/* Gradient borders to blend with background */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNzRhZTMiIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-6 z-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-4 sm:mb-6">
              <span className="text-primary font-medium text-xs sm:text-sm tracking-wide">#VenhaSerTroiton</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 leading-tight px-4">
              Inovação se constrói com
              <span className="block bg-gradient-to-r from-primary to-troiton-300 bg-clip-text text-transparent">
                pessoas incríveis
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              Na Troiton, somos movidos por propósito, tecnologia e o desejo constante de superar expectativas. 
              Se você busca crescer, aprender e fazer parte de projetos que transformam negócios com inteligência e agilidade, 
              <strong className="text-white"> seu lugar é aqui.</strong>
            </p>
          </div>

          {/* Why Join Us */}
          <div className="mb-12 sm:mb-16 px-4">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <Rocket className="w-5 h-5 sm:w-6 h-6 text-primary mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center">
                Por que fazer parte da Troiton?
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Projetos desafiadores",
                  description: "com impacto real"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Cultura colaborativa",
                  description: "e horizontal"
                },
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "Desenvolvimento contínuo",
                  description: "e espaço para inovar"
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Ambiente que valoriza",
                  description: "autonomia e responsabilidade"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Tecnologia, segurança",
                  description: "e transformação no centro de tudo"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-10 h-10 sm:w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2 text-white">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center px-4">
            <div className="bg-gradient-to-r from-primary/20 to-troiton-600/20 border border-primary/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse mr-0 sm:mr-3 mb-2 sm:mb-0"></div>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center">
                  <strong className="text-white">Estamos sempre em busca</strong> de talentos que compartilham do nosso espírito inovador.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center sm:items-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.location.href = 'mailto:vagas@troiton.com.br'}
                >
                  Enviar Currículo
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 h-5" />
                </Button>
                
                <div className="text-xs sm:text-sm text-gray-400 sm:ml-4">
                  📩 <a href="mailto:vagas@troiton.com.br" className="text-primary hover:text-primary/80 transition-colors">
                    vagas@troiton.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
