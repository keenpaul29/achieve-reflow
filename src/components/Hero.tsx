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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(28,141,190,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(28,141,190,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-block animate-glow">
              <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-semibold backdrop-blur-sm">
                ✨ Trade Smart. Grow Fast.
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
              Master the
              <span className="block text-gradient animate-glow mt-2">
                Financial Markets
              </span>
              <span className="block mt-2">with Confidence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
              Experience next-generation trading with advanced tools, real-time analytics, 
              and unparalleled security. Your success is our mission.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="group shadow-xl shadow-primary/20">
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                Explore Features
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.text} 
                  className="flex items-center gap-3 animate-slide-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl opacity-30" />
            <Card className="relative p-8 glass-effect hover-lift border-2 border-primary/10">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-primary/20">
                  <h3 className="text-xl font-bold">Market Overview</h3>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-semibold">
                    +2.4%
                  </span>
                </div>
                
                <div className="space-y-3">
                  {[
                    { pair: "EUR/USD", value: "1.0856", change: "+0.32%" },
                    { pair: "GBP/USD", value: "1.2634", change: "+0.18%" },
                    { pair: "USD/JPY", value: "149.82", change: "-0.15%" },
                  ].map((item, index) => (
                    <div 
                      key={item.pair} 
                      className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-primary/5 hover:border-primary/20 transition-all duration-300 hover:scale-[1.02]"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div>
                        <p className="font-bold text-base">{item.pair}</p>
                        <p className="text-sm text-muted-foreground font-medium">{item.value}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-sm font-bold ${
                        item.change.startsWith('+') 
                          ? 'bg-green-500/10 text-green-500' 
                          : 'bg-red-500/10 text-red-500'
                      }`}>
                        {item.change}
                      </span>
                    </div>
                  ))}
                </div>

                <Button className="w-full" variant="secondary" size="lg">
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
