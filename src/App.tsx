
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tecnologias" element={<Technologies />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/apresentacao" element={<Apresentacao />} />
          <Route path="/estrategia" element={<Estrategia />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/sustentabilidade" element={<Sustentabilidade />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/inovacao" element={<Inovacao />} />
          <Route path="/tecnologia/ia" element={<TecnologiaIA />} />
          <Route path="/tecnologia/cloud" element={<TecnologiaCloud />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
