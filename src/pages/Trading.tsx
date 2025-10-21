import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DollarSign, TrendingUp, Coins, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Trade Global Markets
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access forex, stocks, commodities, and indices with competitive spreads 
                and lightning-fast execution.
              </p>
              <Button size="lg">
                Start Trading Now
              </Button>
            </div>
          </div>
        </section>

        {/* Markets Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Available Markets</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {markets.map((market, index) => (
                <Card 
                  key={market.title}
                  className="animate-fade-up hover:shadow-xl transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <market.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{market.title}</CardTitle>
                    <CardDescription className="text-base">{market.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Popular instruments:</p>
                      <div className="flex flex-wrap gap-2">
                        {market.pairs.map((pair) => (
                          <span 
                            key={pair}
                            className="px-3 py-1 rounded-full bg-muted text-sm"
                          >
                            {pair}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <span className="text-sm text-muted-foreground">Spread</span>
                      <span className="font-semibold text-primary">{market.spread}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trading Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Trading Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tradingFeatures.map((feature, index) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto text-center p-12 bg-gradient-to-br from-primary/10 to-accent/10">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Open your account today and get access to all markets with a single platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Create Account</Button>
                <Button size="lg" variant="outline">Try Demo Account</Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Trading;
