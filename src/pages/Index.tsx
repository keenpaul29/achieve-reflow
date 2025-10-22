import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { TradingAccounts } from "@/components/TradingAccounts";
import { Partners } from "@/components/Partners";
import { LiveRates } from "@/components/LiveRates";
import { HeroStats } from "@/components/HeroStats";
import { Awards } from "@/components/Awards";
import { Platforms } from "@/components/Platforms";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <LiveRates />
      <HeroStats />
      <Features />
      <Awards />
      <TradingAccounts />
      <Platforms />
      <HowItWorks />
      <Partners />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
