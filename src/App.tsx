import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Trading from "./pages/Trading";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/footer/Privacy";
import Terms from "./pages/footer/Terms";
// import Cookies from "./pages/footer/Cookies";
import Disclaimer from "./pages/footer/Disclaimer";
import Help from "./pages/footer/Help";
import FAQ from "./pages/footer/FAQ";
import Status from "./pages/footer/Status";
import Careers from "./pages/footer/Careers";
import Press from "./pages/footer/Press";
import Blog from "./pages/footer/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="Wwallbot-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* <Route path="/cookies" element={<Cookies />} /> */}
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/help" element={<Help />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/status" element={<Status />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
