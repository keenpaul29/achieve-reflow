import { Monitor, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Platforms() {
  const platforms = [
    {
      icon: <Monitor className="w-12 h-12 text-primary" />,
      name: "MetaTrader 5",
      description: "The world's most popular trading platform with advanced charting and analysis tools.",
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      name: "WebTrader",
      description: "Trade from any browser with our powerful and intuitive web-based platform.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      name: "Mobile App",
      description: "Stay connected to the markets on the go with our fully-featured mobile app.",
    },
  ];

  return (
    <section className="py-28 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
            Powerful <span className="text-primary">Trading Platforms</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trade with confidence using our suite of advanced and intuitive trading platforms.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-card border border-border rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                {platform.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{platform.name}</h3>
              <p className="text-muted-foreground mb-6">{platform.description}</p>
              <Button>Explore Platform</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
