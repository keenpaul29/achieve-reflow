import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function TradingAccounts() {
  const accounts = [
    {
      name: "Standard Account",
      price: "$100",
      description: "Ideal for new traders entering the forex market.",
      features: [
        "Access to 25+ currency pairs",
        "Leverage up to 1:500",
        "Spreads from 1.2 pips",
        "24/5 customer support",
        "Educational webinars and tutorials"
      ],
      popular: false
    },
    {
      name: "Pro Account",
      price: "$1,000",
      description: "For experienced traders seeking advanced features.",
      features: [
        "Access to 50+ currency pairs",
        "Raw spreads from 0.0 pips",
        "Commission from $3.50 per lot",
        "Dedicated account manager",
        "Advanced trading tools and indicators"
      ],
      popular: true
    },
    {
      name: "VIP Account",
      price: "$10,000",
      description: "Exclusive benefits for high-volume traders.",
      features: [
        "Access to all currency pairs, indices, and commodities",
        "Customizable leverage",
        "Zero commission on trades",
        "Personalized trading strategies",
        "Invitations to exclusive events"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
            Choose Your <span className="text-primary">Trading Account</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a range of account types to suit every trader, from novice to professional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {accounts.map((account) => (
            <Card
              key={account.name}
              className={`flex flex-col rounded-xl border ${
                account.popular
                  ? "border-primary shadow-2xl shadow-primary/10"
                  : "border-border"
              } bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}
            >
              <CardHeader className="text-center border-b border-border pb-6">
                <CardTitle className="text-2xl font-bold">{account.name}</CardTitle>
                <CardDescription>{account.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-8">
                <div className="text-center mb-8">
                  <span className="text-5xl font-extrabold text-primary">{account.price}</span>
                  <span className="text-muted-foreground">/min deposit</span>
                </div>
                <ul className="space-y-4">
                  {account.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-8 pt-0">
                <Button
                  className="w-full"
                  size="lg"
                  variant={account.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
