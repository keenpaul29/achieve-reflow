import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GlobeAltIcon, ShieldCheckIcon, DevicePhoneMobileIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from 'react-image-webp';

const WebTrader = () => {
  const features = [
    {
      icon: GlobeAltIcon,
      title: "Browser-Based Trading",
      description: "Trade directly from your web browser without any downloads or installations required."
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure & Reliable",
      description: "Bank-level security with SSL encryption and secure data transmission protocols."
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Cross-Platform Access",
      description: "Access your trading account from any device with a modern web browser."
    },
    {
      icon: CheckCircleIcon,
      title: "Full Trading Functionality",
      description: "Complete trading toolkit with charts, analysis tools, and order management."
    }
  ];

  const advantages = [
    "No software installation required",
    "Automatic updates and maintenance",
    "Compatible with Windows, macOS, Linux",
    "Works on Chrome, Firefox, Safari, Edge",
    "Real-time market data and execution",
    "Advanced charting with technical indicators",
    "One-click trading and order management",
    "Portfolio tracking and performance analytics",
    "Economic calendar integration",
    "24/7 customer support access"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.1),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                WebTrader Platform
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Powerful web-based trading platform that gives you full access to global markets
                from any browser, anywhere in the world.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button size="lg" className="group">
                  Start Trading Online
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Platform Image */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border border-border/20">
                <CardContent className="p-6">
                  <Image webp="/webtrader.webp" alt="WebTrader Interface" className="w-full rounded-lg" />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.h2
              className="text-4xl font-bold mb-12 text-center text-foreground"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Key Features
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={feature.title} variants={itemVariants}>
                    <Card className="bg-card/60 backdrop-blur-sm border border-border/20 hover:shadow-xl transition-all duration-300 group h-full">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                          <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                        </div>
                        <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-muted/30 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-4xl font-bold mb-12 text-center text-foreground"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Platform Advantages
              </motion.h2>
              <motion.div
                className="grid md:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card/60 backdrop-blur-sm border border-border/20 hover:shadow-lg transition-all duration-300"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{advantage}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-4xl font-bold mb-12 text-center text-foreground"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                System Requirements
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-card/60 backdrop-blur-sm border border-border/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Minimum Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Operating System:</span>
                      <span className="font-medium">Any OS with modern browser</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Browser:</span>
                      <span className="font-medium">Chrome 80+, Firefox 75+, Safari 13+, Edge 80+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">RAM:</span>
                      <span className="font-medium">2 GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Internet:</span>
                      <span className="font-medium">Stable broadband connection</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border border-border/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Recommended</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Operating System:</span>
                      <span className="font-medium">Windows 10+, macOS 10.15+, Linux</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Browser:</span>
                      <span className="font-medium">Latest Chrome or Firefox</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">RAM:</span>
                      <span className="font-medium">4 GB+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Display:</span>
                      <span className="font-medium">1920x1080 resolution</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.1),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="max-w-3xl mx-auto text-center p-12 bg-gradient-to-br from-primary/10 to-accent/10 border border-border/20 backdrop-blur-sm">
                <motion.h2
                  className="text-3xl font-bold mb-4 text-foreground"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  Start Trading with WebTrader
                </motion.h2>
                <motion.p
                  className="text-lg text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Access our powerful web-based platform instantly. No downloads, no installations,
                  just pure trading power at your fingertips.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <Button size="lg" className="group">
                    Launch WebTrader
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-border/30 hover:bg-primary/10">
                    Try Demo
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebTrader;
