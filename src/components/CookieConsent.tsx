
import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/95 backdrop-blur-md border-t border-troiton-500/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cookie className="h-6 w-6 text-troiton-400 flex-shrink-0" />
            <div className="text-white">
              <p className="text-sm">
                Utilizamos cookies para melhorar sua experiência em nosso site e personalizar conteúdo. 
                <a href="#" className="text-troiton-400 hover:text-troiton-300 underline ml-1">
                  Saiba mais sobre nossa política de privacidade
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Recusar
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-gradient-to-r from-troiton-600 to-troiton-500 hover:from-troiton-500 hover:to-troiton-400"
            >
              Aceitar Cookies
            </Button>
            <button
              onClick={declineCookies}
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
