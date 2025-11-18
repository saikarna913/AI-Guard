import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Usage from "./pages/Usage";
import API from "./pages/API";
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Datasets from "./pages/Datasets";
import Experiments from "./pages/Experiments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* HashRouter ALWAYS works on GitHub Pages */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/api" element={<API />} />
          <Route path="/datasets" element={<Datasets />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
