
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8 text-troiton-500 flex justify-center">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M5.63605 18.364C2.12132 14.8492 2.12132 9.15076 5.63605 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63605 18.364Z" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! A página que você está procurando não foi encontrada.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center bg-troiton-600 hover:bg-troiton-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
