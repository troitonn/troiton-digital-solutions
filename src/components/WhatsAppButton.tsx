
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);
  
  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5511943614110?text=Olá!%20Estou%20interessado%20em%20seus%20serviços.', '_blank');
  };
  
  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex items-center"
        aria-label="Contato via WhatsApp"
      >
        {/* Tooltip */}
        <span className="absolute right-16 whitespace-nowrap bg-white text-gray-800 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium shadow-lg">
          Fale conosco
        </span>
        
        {/* Button with mirrored effect */}
        <div className="relative overflow-hidden rounded-full p-4 bg-gradient-to-br from-troiton-500 to-troiton-600 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110">
          {/* Mirror/glass effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none"></div>
          
          {/* Icon */}
          <MessageCircle className="h-6 w-6 text-white relative z-10" />
          
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-75"></span>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
