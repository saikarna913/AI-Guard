import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    {/* Use Vite's BASE_URL so the router works correctly when served from a subpath
      (e.g. GitHub Pages project site at /AI-Guard/). import.meta.env.BASE_URL
      is set from `base` in vite.config.ts. */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/api" element={<API />} />
          <Route path="/datasets" element={<Datasets />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
