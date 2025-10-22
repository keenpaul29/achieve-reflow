import { BarChart3, Lock, Smartphone, Headphones, Globe, Wallet, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
export function Features() {
  const features = [
    {
      icon: BarChart3,
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
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.1),transparent_40%)] animate-pulse-slow" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 tracking-wide">
            CORE FEATURES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trade Smarter with <span className="text-gradient">Wwallbot</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform is engineered for performance, reliability, and user experience, giving you the edge you need to navigate the markets.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-primary/20 rounded-xl overflow-hidden">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/80 to-accent/60 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg font-bold transition-colors group-hover:text-primary">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
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
