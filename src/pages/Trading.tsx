import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DollarSign, TrendingUp, Coins, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Trading = () => {
  const markets = [
    {
      icon: DollarSign,
      title: "Forex",
      description: "Trade 60+ currency pairs with tight spreads",
      pairs: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD"],
      spread: "From 0.1 pips"
    },
    {
      icon: TrendingUp,
      title: "Stocks",
      description: "Access global stock markets",
      pairs: ["Apple", "Tesla", "Amazon", "Google"],
      spread: "Commission-free"
    },
    {
      icon: Coins,
      title: "Commodities",
      description: "Trade gold, oil, and more",
      pairs: ["Gold", "Silver", "Oil", "Natural Gas"],
      spread: "From 0.3 pips"
    },
    {
      icon: LineChart,
      title: "Indices",
      description: "Major global stock indices",
      pairs: ["S&P 500", "NASDAQ", "DAX", "FTSE 100"],
      spread: "From 0.5 points"
    }
  ];

  const tradingFeatures = [
    "Real-time market data",
    "Advanced charting tools",
    "One-click trading",
    "Stop loss & take profit",
    "Trailing stops",
    "Market depth",
    "Economic calendar",
    "Risk management tools"
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Trade Global Markets
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Access forex, stocks, commodities, and indices with competitive spreads 
                and lightning-fast execution.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button size="lg" className="group">
                  Start Trading Now
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Markets Section */}
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
              Available Markets
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {markets.map((market, index) => {
                const Icon = market.icon;
                return (
                  <motion.div key={market.title} variants={itemVariants}>
                    <Card className="bg-card/60 backdrop-blur-sm border border-border/20 hover:shadow-xl transition-all duration-300 group">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                          <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                        </div>
                        <CardTitle className="text-2xl text-foreground">{market.title}</CardTitle>
                        <CardDescription className="text-base">{market.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-sm font-medium mb-2 text-foreground">Popular instruments:</p>
                          <div className="flex flex-wrap gap-2">
                            {market.pairs.map((pair) => (
                              <span 
                                key={pair}
                                className="px-3 py-1 rounded-full bg-muted text-sm text-foreground transition-all duration-300 group-hover:bg-primary/20"
                              >
                                {pair}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-border/20">
                          <span className="text-sm text-muted-foreground">Spread</span>
                          <span className="font-semibold text-primary">{market.spread}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Trading Features */}
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
                Trading Features
              </motion.h2>
              <motion.div 
                className="grid md:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {tradingFeatures.map((feature, index) => (
                  <motion.div 
                    key={feature}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card/60 backdrop-blur-sm border border-border/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-3 h-3 rounded-full bg-primary transition-all duration-300 group-hover:scale-125" />
                    <span className="font-medium text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Platforms Compare */}
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
              Account Types
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[{
                n:"Starter", p:"$0", f:["Spreads from 1.2 pips","No commission","Standard support"]
              },{
                n:"Professional", p:"$500", f:["Raw spreads","$3 commission","Priority support"]
              },{
                n:"Elite", p:"$5,000", f:["Custom leverage","0 commission","Dedicated manager"]
              }].map((a)=> (
                <motion.div key={a.n} variants={itemVariants}>
                  <Card className="bg-card/60 backdrop-blur-sm border border-border/20 hover:shadow-xl transition-all">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground">{a.n}</CardTitle>
                      <CardDescription className="text-base">Minimum deposit</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-4xl font-bold text-primary">{a.p}</div>
                      <ul className="space-y-2">
                        {a.f.map((x)=> (
                          <li key={x} className="text-sm text-foreground">• {x}</li>
                        ))}
                      </ul>
                      <Button className="w-full">Open {a.n}</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                  Ready to Start Trading?
                </motion.h2>
                <motion.p 
                  className="text-lg text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Open your account today and get access to all markets with a single platform.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <Button size="lg" className="group">
                    Create Account
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-border/30 hover:bg-primary/10">
                    Try Demo Account
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

export default Trading;
