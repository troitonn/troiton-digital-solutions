import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Technologies from "./pages/Technologies";
import About from "./pages/About";
import Apresentacao from "./pages/Apresentacao";
import Estrategia from "./pages/Estrategia";
import Projetos from "./pages/Projetos";
import Consultoria from "./pages/Consultoria";
import Sustentabilidade from "./pages/Sustentabilidade";
import Analytics from "./pages/Analytics";
import Inovacao from "./pages/Inovacao";
import TecnologiaIA from "./pages/TecnologiaIA";
import TecnologiaCloud from "./pages/TecnologiaCloud";
import TecnologiaPowerBI from "./pages/TecnologiaPowerBI";
import TecnologiaDesenvolvimento from "./pages/TecnologiaDesenvolvimento";
import TecnologiaSeguranca from "./pages/TecnologiaSeguranca";
import TecnologiaAutomacao from "./pages/TecnologiaAutomacao";
import Otimizacao from "./pages/Otimizacao";
import Qualidade from "./pages/Qualidade";
import Doacoes from "./pages/Doacoes";
import Comunidade from "./pages/Comunidade";
import Indicadores from "./pages/Indicadores";
import Processos from "./pages/Processos"; // rota de Operações
import Performance from "./pages/Performance";

// Componentes
import Careers from "./components/Careers";
import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tecnologia" element={<Technologies />} />
          <Route path="/about" element={<About />} />
          <Route path="/operacoes" element={<Processos />} /> {/* Atualizado */}
          <Route path="/apresentacao" element={<Apresentacao />} />
          <Route path="/estrategia" element={<Estrategia />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/sustentabilidade" element={<Sustentabilidade />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/indicadores" element={<Indicadores />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/inovacao" element={<Inovacao />} />
          <Route path="/tecnologia/ia" element={<TecnologiaIA />} />
          <Route path="/tecnologia/cloud" element={<TecnologiaCloud />} />
          <Route path="/tecnologia/powerbi" element={<TecnologiaPowerBI />} />
          <Route path="/tecnologia/desenvolvimento" element={<TecnologiaDesenvolvimento />} />
          <Route path="/tecnologia/seguranca" element={<TecnologiaSeguranca />} />
          <Route path="/tecnologia/automacao" element={<TecnologiaAutomacao />} />
          <Route path="/otimizacao" element={<Otimizacao />} />
          <Route path="/qualidade" element={<Qualidade />} />

          <Route path="/careers" element={<Careers />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
