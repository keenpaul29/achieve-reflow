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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Vwalbot?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in the financial markets, 
            all in one powerful platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
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
