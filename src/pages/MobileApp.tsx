import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DevicePhoneMobileIcon, BellIcon, ChartBarIcon, ShieldCheckIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from 'react-image-webp';

const MobileApp = () => {
  const features = [
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile-First Design",
      description: "Optimized interface designed specifically for mobile devices with intuitive touch controls."
    },
    {
      icon: BellIcon,
      title: "Instant Notifications",
      description: "Real-time alerts for price movements, order executions, and market news."
    },
    {
      icon: ChartBarIcon,
      title: "Interactive Charts",
      description: "Advanced charting tools with technical indicators and drawing tools on mobile."
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure Trading",
      description: "Bank-level security with biometric authentication and encrypted data transmission."
    }
  ];

  const capabilities = [
    "Full trading functionality on mobile",
    "Real-time market data and quotes",
    "One-click trading execution",
    "Advanced order types (limit, stop, market)",
    "Portfolio tracking and analytics",
    "Economic calendar and news feed",
    "Multiple account management",
    "24/7 market access",
    "Touch-optimized interface",
    "Offline mode for analysis"
  ];

  const supportedDevices = [
    { name: "iOS", version: "iOS 12.0+", store: "App Store" },
    { name: "Android", version: "Android 8.0+", store: "Google Play" }
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
                Mobile Trading App
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Trade on the go with our powerful mobile app. Access global markets,
                execute trades, and manage your portfolio from anywhere in the world.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group">
                    Download for iOS
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-border/30 hover:bg-primary/10">
                    Download for Android
                  </Button>
                </div>
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
                  <Image webp="/mobile_app.webp" alt="Mobile App Interface" className="w-full rounded-lg" />
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

        {/* Capabilities Section */}
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
                Trading Capabilities
              </motion.h2>
              <motion.div
                className="grid md:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card/60 backdrop-blur-sm border border-border/20 hover:shadow-lg transition-all duration-300"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{capability}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Supported Devices */}
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
                Supported Devices
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                {supportedDevices.map((device, index) => (
                  <Card key={device.name} className="bg-card/60 backdrop-blur-sm border border-border/20">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground flex items-center gap-3">
                        <DevicePhoneMobileIcon className="h-6 w-6 text-primary" />
                        {device.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Minimum Version</p>
                        <p className="font-medium text-foreground">{device.version}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Available on</p>
                        <p className="font-medium text-foreground">{device.store}</p>
                      </div>
                      <Button className="w-full">
                        Download for {device.name}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 bg-muted/30 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-4xl font-bold mb-8 text-foreground"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Security & Privacy
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Your security is our top priority. Our mobile app incorporates multiple layers of protection
                to keep your trading activities and personal information safe.
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Biometric Authentication",
                    description: "Fingerprint and Face ID support for secure login"
                  },
                  {
                    title: "End-to-End Encryption",
                    description: "All data transmissions are encrypted and secure"
                  },
                  {
                    title: "Session Management",
                    description: "Automatic logout and session timeout protection"
                  }
                ].map((security, index) => (
                  <Card key={security.title} className="bg-card/60 backdrop-blur-sm border border-border/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{security.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{security.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
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
                  Trade Anywhere, Anytime
                </motion.h2>
                <motion.p
                  className="text-lg text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Download our mobile app and never miss a trading opportunity.
                  Full market access in the palm of your hand.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <Button size="lg" className="group">
                    Download Mobile App
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-border/30 hover:bg-primary/10">
                    Learn More
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

export default MobileApp;
