import { useState } from "react";
import { Monitor, Smartphone, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence, Variants } from "framer-motion";

export function Platforms() {
  const [activeTab, setActiveTab] = useState("mt5");
  const platforms = [
    {
      value: "mt5",
      name: "MetaTrader 5",
      icon: <Monitor className="w-6 h-6 mr-2" />,
      description: "The world's most popular trading platform, offering advanced charting, analysis tools, and automated trading capabilities.",
      features: [
        "Advanced technical analysis tools",
        "Multiple order types",
        "Automated trading with EAs",
        "Real-time market data",
      ],
      image: "/platforms/metatrader.png"
    },
    {
      value: "webtrader",
      name: "WebTrader",
      icon: <Globe className="w-6 h-6 mr-2" />,
      description: "Trade from any browser with our powerful and intuitive web-based platform, no download required.",
      features: [
        "Full trading functionality",
        "Cross-platform compatibility",
        "Secure and reliable",
        "User-friendly interface",
      ],
      image: "/platforms/webtrader.png"
    },
    {
      value: "mobile",
      name: "Mobile App",
      icon: <Smartphone className="w-6 h-6 mr-2" />,
      description: "Stay connected to the markets on the go with our fully-featured mobile app for iOS and Android.",
      features: [
        "Trade anytime, anywhere",
        "Instant notifications",
        "Full account management",
        "Interactive charts",
      ],
      image: "/platforms/mobileapp.png"
    },
  ];

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_40%)]" />
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trade on <span className="text-gradient">World-Class</span> Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our suite of platforms is designed for reliability, speed, and a superior trading experience across all your devices.
          </p>
        </motion.div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="relative grid w-full grid-cols-3 max-w-2xl mx-auto h-auto p-2 rounded-full bg-muted/50">
            {platforms.map((platform) => (
              <TabsTrigger key={platform.value} value={platform.value} className="relative z-10 flex items-center justify-center py-3 rounded-full text-sm font-semibold transition-colors duration-300">
                {platform.icon}
                {platform.name}
              </TabsTrigger>
            ))}
            <motion.div
              layoutId="active-platform-indicator"
              className="absolute inset-0 z-0 p-2"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="bg-primary text-primary-foreground rounded-full h-full w-full" />
            </motion.div>
          </TabsList>

          <AnimatePresence mode="wait">
            {platforms.map((platform) =>
              activeTab === platform.value ? (
                <TabsContent key={platform.value} value={platform.value} className="mt-12">
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Card className="border-none bg-transparent">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                          <div className="space-y-6 text-left">
                            <h3 className="text-3xl font-bold">{platform.name}</h3>
                            <p className="text-muted-foreground text-lg">{platform.description}</p>
                            <ul className="space-y-3">
                              {platform.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                  <CheckCircle2 className="h-5 w-5 text-primary" />
                                  <span className="font-medium">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button size="lg" className="rounded-full font-semibold group">
                              Learn More
                              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </Button>
                          </div>
                          <motion.div 
                            className="bg-card/50 p-4 rounded-2xl shadow-lg border border-border/20"
                            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                          >
                            <img 
                              src={platform.image} 
                              alt={platform.name} 
                              className="rounded-xl w-full h-auto aspect-video object-cover"
                            />
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ) : null
            )}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
