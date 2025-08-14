import { ArrowRight, Rocket, Users, TrendingUp, Shield, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import careersImage from '@/assets/careers-professional-team.jpg';

const Careers = () => {
  return (
    <section id="vagas" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${careersImage})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60"></div>

      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-6 z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 bg-primary/20 border border-primary/30 rounded-full mb-4 sm:mb-6">
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
              <strong className="text-white"> Seu lugar é aqui.</strong>
            </p>
          </div>

          <div className="mb-12 sm:mb-16 px-4">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center">
                Por que fazer parte da Troiton?
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[ 
                { icon: <TrendingUp className="w-6 h-6" />, title: "Projetos
