import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const features = [
    { icon: TrendingUp, text: "Advanced Analytics" },
    { icon: Shield, text: "Secure Trading" },
    { icon: Zap, text: "Instant Execution" },
  ];

  const marketRows = [
    { pair: "EUR/USD", value: "1.0856", change: "+0.32%" },
    { pair: "GBP/USD", value: "1.2634", change: "+0.18%" },
    { pair: "USD/JPY", value: "149.82", change: "-0.15%" },
  ];

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    featuresSection?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div 
            className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm border border-primary/10 backdrop-blur-sm"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            ✨ Trade Smart. Grow Fast.
          </motion.div>
          
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Elevate Your Trading
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary-foreground animate-gradient-x">
              With Smarter Tools
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            Real-time data, instant execution, and enterprise-grade security. Built for ambitious traders.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="group shadow-lg shadow-primary/30 px-8 py-4 text-lg font-bold">
              Start Trading Now
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1.5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg font-bold border-2 border-white/80 text-white hover:bg-white/10 hover:text-white" 
              onClick={scrollToFeatures}
            >
              Explore Features
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={feature.text} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{feature.text}</div>
                    <div className="text-xs text-gray-400">{i === 0 ? 'Live signals' : i === 1 ? 'Protected funds' : 'Fast fills'}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
