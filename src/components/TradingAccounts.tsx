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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Account Types
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-gradient">Trading Account</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Select the perfect account type that matches your trading goals and experience level
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {accounts.map((account, index) => (
            <Card 
              key={account.name}
              className={`relative overflow-hidden animate-fade-up ${
                account.popular 
                  ? "border-2 border-primary shadow-2xl shadow-primary/20 scale-105 bg-gradient-to-b from-primary/5 to-transparent" 
                  : "border-2 border-primary/10 hover-lift"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {account.popular && (
                <>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Most Popular
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
                </>
              )}
              
              <CardHeader className="text-center pb-8 pt-10 relative">
                <CardTitle className="text-2xl mb-4">{account.name}</CardTitle>
                <div className="mb-3">
                  <span className="text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    {account.price}
                  </span>
                  <span className="text-muted-foreground block mt-2 text-sm font-medium">
                    minimum deposit
                  </span>
                </div>
                <CardDescription className="text-base">{account.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3.5">
                  {account.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 p-0.5 rounded-full bg-primary/20">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  size="lg"
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
