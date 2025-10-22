import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";

export function TradingAccounts() {
  const accounts = [
    {
      name: "Standard",
      price: "$100",
      description: "Ideal for new traders entering the forex market.",
      features: [
        "Access to 25+ currency pairs",
        "Leverage up to 1:500",
        "Spreads from 1.2 pips",
        "24/5 customer support",
        "Educational webinars"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$1,000",
      description: "For experienced traders seeking advanced features.",
      features: [
        "Access to 50+ currency pairs",
        "Raw spreads from 0.0 pips",
        "Low commission structure",
        "Dedicated account manager",
        "Advanced trading tools"
      ],
      popular: true
    },
    {
      name: "VIP",
      price: "$10,000",
      description: "Exclusive benefits for high-volume traders.",
      features: [
        "All currency pairs & indices",
        "Customizable leverage",
        "Zero commission on trades",
        "Personalized strategies",
        "Exclusive event invitations"
      ],
      popular: false
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(28,141,190,0.1),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(28,141,190,0.1),transparent_40%)]" />
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find the <span className="text-gradient">Perfect Account</span> for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a range of account types to suit every trader, from novice to professional.
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {accounts.map((account) => (
            <motion.div key={account.name} variants={itemVariants} className="h-full">
              <Card
                className={`flex flex-col h-full rounded-2xl bg-card/60 backdrop-blur-lg border relative overflow-hidden transition-all duration-300 group hover:shadow-2xl ${
                  account.popular
                    ? "border-primary/50 hover:border-primary/80 shadow-primary/20"
                    : "border-border/30 hover:border-border/60"
                }`}
              >
                {account.popular && (
                  <Badge variant="default" className="absolute top-4 right-4 bg-gradient-accent text-primary-foreground shadow-md">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pt-8 pb-4">
                  <CardTitle className="text-2xl font-bold mb-2">{account.name}</CardTitle>
                  <CardDescription className="px-4">{account.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-6 flex flex-col">
                  <div className="text-center my-4">
                    <span className="text-5xl font-bold text-primary">{account.price}</span>
                    <p className="text-sm text-muted-foreground mt-1">Minimum Deposit</p>
                  </div>
                  <ul className="space-y-3 text-sm flex-grow my-6">
                    {account.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-auto rounded-full font-semibold transition-all duration-300 group-hover:scale-105"
                    size="lg"
                    variant={account.popular ? "default" : "outline"}
                  >
                    Open Account
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
