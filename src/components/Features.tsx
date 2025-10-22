import { Lock, Smartphone, Headphones, Globe, Wallet, Zap, TrendingUp, Shield, Clock, DollarSign, Users, Target, Activity, Calculator } from "lucide-react";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
export function Features() {
  const features = [
    {
      icon: ChartBarIcon,
      title: "Advanced Charting",
      description: "Professional-grade charts with 100+ technical indicators and drawing tools."
    },
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "Multi-layer encryption and 2FA to keep your funds and data secure."
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Trade on the go with our powerful mobile apps for iOS and Android."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team available around the clock to assist you."
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Access to forex, stocks, commodities, and cryptocurrencies."
    },
    {
      icon: Wallet,
      title: "Fast Withdrawals",
      description: "Quick and easy withdrawals processed within 24 hours."
    },
    {
      icon: Zap,
      title: "Lightning Execution",
      description: "Experience ultra-low latency and rapid order execution."
    },
    {
      icon: TrendingUp,
      title: "Copy Trading",
      description: "Follow and copy successful traders' strategies automatically."
    },
    {
      icon: Shield,
      title: "Negative Balance Protection",
      description: "Your account balance will never go below zero, protecting your capital."
    },
    {
      icon: Clock,
      title: "24/5 Market Access",
      description: "Trade forex markets 24 hours a day, 5 days a week with continuous liquidity."
    },
    {
      icon: DollarSign,
      title: "Competitive Spreads",
      description: "Tight spreads starting from 0.1 pips on major currency pairs."
    },
    {
      icon: Users,
      title: "Social Trading",
      description: "Connect with a community of traders and share insights and strategies."
    },
    {
      icon: Target,
      title: "Risk Management Tools",
      description: "Advanced stop-loss, take-profit, and position sizing tools for safer trading."
    },
    {
      icon: Activity,
      title: "Real-Time Analytics",
      description: "Live market data, economic calendar, and trading signals to inform your decisions."
    },
    {
      icon: Calculator,
      title: "Margin Calculator",
      description: "Calculate required margin, pip values, and potential profits before placing trades."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.1),transparent_40%)] animate-pulse-slow" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-wide">
            CORE FEATURES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Trade Smarter with <span className="text-gradient">Wwallbot</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Our platform is engineered for performance, reliability, and user experience, giving you the edge you need to navigate the markets.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 shadow-lg hover:shadow-primary/20 rounded-xl overflow-hidden">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/80 to-accent/60 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md flex-shrink-0">
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-base sm:text-lg font-bold transition-colors group-hover:text-primary leading-tight">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
