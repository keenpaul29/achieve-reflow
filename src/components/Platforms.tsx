import { useState } from "react";
import { ComputerDesktopIcon, DevicePhoneMobileIcon, GlobeAltIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from 'react-image-webp'

export function Platforms() {
  const [activeTab, setActiveTab] = useState("mt5");
  const platforms = [
    {
      value: "mt5",
      name: "MetaTrader 5",
      icon: <ComputerDesktopIcon className="w-6 h-6 mr-2" />,
      description: "The world's most popular trading platform, offering advanced charting, analysis tools, and automated trading capabilities.",
      features: [
        "Advanced technical analysis tools",
        "Multiple order types",
        "Automated trading with EAs",
        "Real-time market data",
      ],
      image: <Image webp="/mt5trader.webp" alt="MetaTrader 5" />
    },
    {
      value: "webtrader",
      name: "WebTrader",
      icon: <GlobeAltIcon className="w-6 h-6 mr-2" />,
      description: "Trade from any browser with our powerful and intuitive web-based platform, no download required.",
      features: [
        "Full trading functionality",
        "Cross-platform compatibility",
        "Secure and reliable",
        "User-friendly interface",
      ],
      image: <Image webp="/webtrader.webp" alt="WebTrader" />
    },
    {
      value: "mobile",
      name: "Mobile App",
      icon: <DevicePhoneMobileIcon className="w-6 h-6 mr-2" />,
      description: "Stay connected to the markets on the go with our fully-featured mobile app for iOS and Android.",
      features: [
        "Trade anytime, anywhere",
        "Instant notifications",
        "Full account management",
        "Interactive charts",
      ],
      image: <Image webp={"/mobile_app.webp"} alt="Mobile App" />
    },
  ];

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_40%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Trade on <span className="text-gradient">World-Class</span> Platforms
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Our suite of platforms is designed for reliability, speed, and a superior trading experience across all your devices.
          </p>
        </motion.div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="relative grid w-full grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto h-auto p-1 sm:p-2 rounded-xl bg-muted/50">
            {platforms.map((platform) => (
              <TabsTrigger key={platform.value} value={platform.value} className="relative z-10 flex items-center justify-center py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300">
                <span className="hidden sm:inline text-white">{platform.icon}</span>
                <span className="sm:hidden text-white">{platform.icon}</span>
                <span className="ml-1 sm:ml-2 text-white">{platform.name}</span>
              </TabsTrigger>
            ))}
            <motion.div
              layoutId="active-platform-indicator"
              className="absolute inset-0 z-0 p-1 sm:p-2"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="bg-primary text-primary-foreground rounded-xl h-full w-full" />
            </motion.div>
          </TabsList>

          <AnimatePresence mode="wait">
            {platforms.map((platform) =>
              activeTab === platform.value ? (
                <TabsContent key={platform.value} value={platform.value} className="mt-8 sm:mt-12">
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Card className="border-none bg-transparent">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                          <div className="space-y-4 sm:space-y-6 text-left order-2 lg:order-1">
                            <h3 className="text-2xl sm:text-3xl font-bold">{platform.name}</h3>
                            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">{platform.description}</p>
                            <ul className="space-y-2 sm:space-y-3">
                              {platform.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 sm:gap-3">
                                  <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                                  <span className="text-sm sm:text-base font-medium">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button size="lg" className="rounded-full font-semibold group w-full sm:w-auto">
                              Learn More
                              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </Button>
                          </div>
                          <motion.div 
                            className="bg-card/50 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-border/20 order-1 lg:order-2"
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                          >
                            {platform.image}
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
