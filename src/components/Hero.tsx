import { ArrowRight, Database, Server, Globe, Lock, Code, Zap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import troitonAuroraVideo from '@/assets/TroitonAurora.mp4';
import fallbackImage from '@/assets/fallback-hero.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
    // Preload video immediately for faster loading
    setLoadVideo(true);
  }, []);

  useEffect(() => {
    if (loadVideo && videoRef.current) {
      // Enhanced video loading with iOS Safari support
      const video = videoRef.current;
      video.load();
      
      // Better iOS Safari autoplay support
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          // If autoplay fails, try with muted
          video.muted = true;
          try {
            await video.play();
          } catch (secondError) {
            // Final fallback - show poster image
            console.warn('Video autoplay not supported');
          }
        }
      };
      
      // Use user interaction or timeout for iOS
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        // For iOS, try playing after a small delay
        setTimeout(playVideo, 100);
      } else {
        playVideo();
      }
    }
  }, [loadVideo]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {loadVideo && (
        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          poster={fallbackImage}
          className="absolute inset-0 w-full h-full object-cover"
          crossOrigin="anonymous"
        >
          <source src={troitonAuroraVideo} type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-troiton-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-troiton-300 rounded-full animate-pulse animation-delay-4000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-6 text-center pt-32 -mt-6">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-white font-medium tracking-wide text-xs uppercase">
              Transformamos o Futuro dos Negócios
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight tracking-tight">
            <span className="block">INOVAÇÃO</span>
            <span className="block bg-gradient-to-r from-primary via-troiton-300 to-troiton-500 bg-clip-text text-transparent">
              ALÉM DO
            </span>
            <span className="block">ESPERADO</span>
          </h1>

          <p className="text-sm md:text-base text-gray-300 mb-6 max-w-xl mx-auto leading-relaxed font-light">
            Desenhar, estruturar e implementar soluções tecnológicas que otimizam operações e garantem escalabilidade — com agilidade, inteligência e foco em governança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-white text-black hover:bg-gray-100 transition-all duration-200 px-6 py-2 rounded-lg text-sm font-medium"
            >
              Iniciar Transformação <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection('servicos')}
              className="border border-white/40 text-white hover:bg-white/10 transition-all duration-200 px-6 py-2 rounded-lg text-sm font-medium"
            >
              Nossos Serviços
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 sm:mb-24">
            {[
              { icon: <Database className="w-4 h-4 sm:w-5 h-5 text-primary" />, label: 'ERP' },
              { icon: <Server className="w-4 h-4 sm:w-5 h-5 text-primary" />, label: 'INFRAESTRUTURA' },
              { icon: <Globe className="w-4 h-4 sm:w-5 h-5 text-primary" />, label: 'CLOUD' },
              { icon: <Lock className="w-4 h-4 sm:w-5 h-5 text-primary" />, label: 'SEGURANÇA' },
              { icon: <Code className="w-4 h-4 sm:w-5 h-5 text-primary" />, label: 'DESENVOLVIMENTO' },
              { icon: <Zap className="w-4 h-4 sm:w-5 h-5 text-primary" />, label: 'AUTOMAÇÃO' },
            ].map(({ icon, label }, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center mb-2 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                  {icon}
                </div>
                <span className="text-xs text-gray-300 font-medium tracking-wide">{label}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/60 mt-2 tracking-wider font-light uppercase">
            Inovação & Transformação
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 pointer-events-none">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
