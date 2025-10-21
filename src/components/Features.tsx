import { BarChart3, Lock, Smartphone, Headphones, Globe, Wallet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Charting",
      description: "Professional-grade charts with 100+ technical indicators and drawing tools"
    },
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "Multi-layer encryption and 2FA to keep your funds and data secure"
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Trade on the go with our powerful mobile apps for iOS and Android"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team available around the clock to assist you"
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Access to forex, stocks, commodities, and cryptocurrencies"
    },
    {
      icon: Wallet,
      title: "Fast Withdrawals",
      description: "Quick and easy withdrawals processed within 24 hours"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(28,141,190,0.08),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">Wwallbot</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to succeed in the financial markets, 
            all in one powerful platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch auto-rows-fr">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover-lift border-2 border-primary/10 hover:border-primary/30 bg-card/80 backdrop-blur-sm animate-fade-up flex flex-col h-full overflow-hidden min-h-[220px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-4 pt-6 px-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center transition-transform duration-300 border border-primary/20 group-hover:scale-110">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl transition-colors group-hover:text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 mt-auto">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
