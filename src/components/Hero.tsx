import { ArrowRightIcon, ArrowTrendingUpIcon, ShieldCheckIcon, BoltIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const features = [
    { icon: ArrowTrendingUpIcon, text: "Advanced Analytics" },
    { icon: ShieldCheckIcon, text: "Secure Trading" },
    { icon: BoltIcon, text: "Instant Execution" },
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
    <section className="relative pt-20 sm:pt-24 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0" 
        autoPlay 
        muted 
        loop 
        playsInline
        disablePictureInPicture = {true}
        src="/hero_video.mp4"
      />
        {/* <source src="/hero_video.mp4" type="video/mp4" /> */}
      

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div 
            className="inline-block bg-primary/10 text-primary font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-primary/10 backdrop-blur-sm"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            ✨ Trade Smart. Grow Fast.
          </motion.div>
          
          <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white px-4">
            Elevate Your Trading
            <span className="block mt-1 sm:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary-foreground animate-gradient-x">
              With Smarter Tools
            </span>
          </h1>
          
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-300 px-4">
            Real-time data, instant execution, and enterprise-grade security. Built for ambitious traders.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <Button size="lg" className="group shadow-lg shadow-primary/30 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold w-full sm:w-auto">
              Start Trading Now
              <ArrowRightIcon className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1.5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold border border-gray-300/80 text-[#1799C4] hover:bg-white/10 hover:text-white w-full sm:w-auto" 
              onClick={scrollToFeatures}
            >
              Explore Features
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={feature.text} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/10 flex-shrink-0">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm font-semibold text-white">{feature.text}</div>
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
