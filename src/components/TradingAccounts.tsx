import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function TradingAccounts() {
  const accounts = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for beginners",
      features: [
        "Demo account access",
        "Basic educational resources",
        "Email support",
        "Mobile app access",
        "5 market instruments"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$500",
      description: "For serious traders",
      features: [
        "All Starter features",
        "Advanced charting tools",
        "Priority support 24/7",
        "50+ market instruments",
        "Lower spreads",
        "Personal account manager"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "$5,000",
      description: "Maximum performance",
      features: [
        "All Professional features",
        "Institutional-grade tools",
        "VIP support",
        "Unlimited instruments",
        "Lowest spreads",
        "Dedicated account manager",
        "Exclusive market insights"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Trading Account
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect account type that matches your trading goals and experience level
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {accounts.map((account, index) => (
            <Card 
              key={account.name}
              className={`relative animate-fade-up ${
                account.popular 
                  ? "border-primary shadow-xl scale-105" 
                  : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {account.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{account.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{account.price}</span>
                  <span className="text-muted-foreground"> min. deposit</span>
                </div>
                <CardDescription>{account.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {account.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={account.popular ? "default" : "outline"}
                >
                  Open Account
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
