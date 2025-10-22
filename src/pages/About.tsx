import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Users, Target, Award, TrendingUp, Lightbulb, Eye, Shield, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, label: "Active Traders", value: "250K+" },
    { icon: TrendingUp, label: "Daily Volume", value: "$5B+" },
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: Target, label: "Markets", value: "200+" }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push boundaries to deliver cutting-edge trading technology"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear pricing, honest communication, and no hidden fees"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Your funds and data are protected with bank-level security measures"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We strive for perfection in everything we do, from execution to support"
    }
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
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                About Wwallbot
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Empowering traders worldwide with innovative technology, 
                transparent practices, and unwavering commitment to your success.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div key={stat.label} variants={itemVariants}>
                    <Card className="text-center bg-card/60 backdrop-blur-sm border border-border/20 hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="pt-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                          <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                        </div>
                        <div className="text-3xl font-bold mb-2 text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground bg-card/50 p-8 rounded-2xl border border-border/20">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  Founded with a vision to democratize access to financial markets, 
                  Wwallbot has grown from a small startup to a leading trading platform 
                  serving hundreds of thousands of traders worldwide.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Our journey began with a simple question: Why should professional-grade 
                  trading tools be limited to institutional investors? We set out to build 
                  a platform that combines institutional-level technology with user-friendly 
                  design, making advanced trading accessible to everyone.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Today, we're proud to serve a global community of traders, from beginners 
                  taking their first steps in the markets to seasoned professionals executing 
                  complex strategies. Our commitment remains unchanged: to provide the best 
                  trading experience possible.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-foreground"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Values
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div key={value.title} variants={itemVariants}>
                    <Card className="bg-card/60 backdrop-blur-sm border border-border/20 hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="pt-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-foreground">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
