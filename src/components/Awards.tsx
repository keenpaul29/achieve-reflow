import { Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Awards() {
  const awards = [
    {
      title: "Best Forex Broker 2023",
      issuer: "Global Forex Awards",
    },
    {
      title: "Most Transparent Broker 2023",
      issuer: "World Finance Awards",
    },
    {
      title: "Best Trading Platform 2023",
      issuer: "Forex Expo Dubai",
    },
    {
      title: "Top CFD Broker 2023",
      issuer: "International Business Magazine",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.1),transparent_40%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industry <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence has been consistently acknowledged by prestigious industry awards.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <Card 
              key={award.title}
              className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl text-center transition-all duration-300 hover:shadow-xl hover:border-primary/50 group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pt-8">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/20 mb-4 transition-all duration-300 group-hover:scale-110">
                  <Trophy className="w-10 h-10 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-8">
                <CardTitle className="text-lg font-semibold text-foreground mb-2 h-14 flex items-center justify-center">{award.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{award.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
