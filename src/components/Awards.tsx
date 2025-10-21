import { Trophy } from "lucide-react";

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
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
            Recognized for <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to providing a superior trading experience has been acknowledged by industry leaders.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award) => (
            <div
              key={award.title}
              className="bg-card border border-border rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
