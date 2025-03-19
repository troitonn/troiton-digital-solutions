
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      {/* Animated Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-troiton-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="text-center max-w-md relative">
        <div className="mb-8 text-red-500 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-red-500 opacity-20 blur-sm"></div>
            <div className="bg-black/50 border border-red-500/30 rounded-full p-6 relative">
              <AlertTriangle size={60} className="animate-pulse" />
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-troiton-500 to-red-500 rounded-lg blur-sm opacity-30"></div>
          <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
            <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-troiton-400 to-red-400">404</h1>
            <p className="text-xl text-gray-300 mb-8">
              Oops! A página que você está procurando não foi encontrada.
            </p>
            <a 
              href="/" 
              className="group relative bg-gradient-to-r from-troiton-600 to-troiton-500 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-troiton-500/20 overflow-hidden"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span className="relative">Voltar para a página inicial</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
