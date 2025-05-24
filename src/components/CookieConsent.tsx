
import { useState, useEffect } from 'react';
import { X, Cookie, Shield, Eye } from 'lucide-react';
import { Button } from './ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 shadow-2xl backdrop-blur-xl">
        <div className="container mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-troiton-500/20 p-3 rounded-lg flex-shrink-0">
                <Cookie className="h-6 w-6 text-troiton-400" />
              </div>
              
              <div className="text-white space-y-2">
                <h3 className="font-semibold text-lg">Gestão de Cookies e Privacidade</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                  Utilizamos cookies essenciais e de análise para otimizar sua experiência de navegação. 
                  Nossos cookies nos ajudam a entender como você interage com nossos serviços tecnológicos 
                  e melhorar continuamente nossa plataforma.
                </p>
                
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    <span>Dados Seguros</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    <span>Transparência Total</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={declineCookies}
                className="text-slate-400 hover:text-white transition-colors text-sm px-4 py-2 border border-slate-600 rounded-md hover:border-slate-500"
              >
                Apenas Essenciais
              </button>
              
              <Button
                onClick={acceptCookies}
                className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-troiton-500/25"
              >
                Aceitar Cookies
              </Button>
              
              <button
                onClick={declineCookies}
                className="text-slate-400 hover:text-white p-2 rounded-md hover:bg-slate-700/50 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
