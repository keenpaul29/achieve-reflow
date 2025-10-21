import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Hero() {
  const features = [
    { icon: TrendingUp, text: "Advanced Analytics" },
    { icon: Shield, text: "Secure Trading" },
    { icon: Zap, text: "Instant Execution" },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Trade Smart. Grow Fast.
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Master the
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Markets
              </span>
              with Confidence
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Experience next-generation trading with advanced tools, real-time analytics, 
              and unparalleled security. Your success is our mission.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Features
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <Card className="p-8 backdrop-blur-sm bg-card/50 border-2">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b">
                  <h3 className="text-xl font-semibold">Market Overview</h3>
                  <span className="text-sm text-green-500 font-medium">+2.4%</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { pair: "EUR/USD", value: "1.0856", change: "+0.32%" },
                    { pair: "GBP/USD", value: "1.2634", change: "+0.18%" },
                    { pair: "USD/JPY", value: "149.82", change: "-0.15%" },
                  ].map((item) => (
                    <div key={item.pair} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-semibold">{item.pair}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                      <span className={`text-sm font-medium ${
                        item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {item.change}
                      </span>
                    </div>
                  ))}
                </div>

                <Button className="w-full" variant="secondary">
                  View All Markets
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
