import { CheckCircleIcon, StarIcon, BoltIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
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
      popular: false,
      icon: StarIcon,
      gradient: "from-blue-500/20 to-cyan-500/20"
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
      popular: true,
      icon: BoltIcon,
      gradient: "from-primary/30 to-primary/10"
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
      popular: false,
      icon: AcademicCapIcon,
      gradient: "from-amber-500/20 to-orange-500/20"
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
    <section className="py-12 sm:py-16 md:py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground px-4">
            Choose Your Trading Account
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Select the perfect account type for your trading needs and experience level.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {accounts.map((account) => {
            const IconComponent = account.icon;
            return (
              <motion.div key={account.name} variants={itemVariants} className="h-full">
                <Card
                  className={`relative h-full transition-all duration-300 hover:shadow-lg ${
                    account.popular
                      ? "border-2 border-primary shadow-lg"
                      : "border border-border hover:border-primary/50"
                  }`}
                >
                  {account.popular && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-primary text-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pt-6 sm:pt-8 pb-4 sm:pb-6 px-4 sm:px-6">
                    <div className="mx-auto mb-3 sm:mb-4 p-2 sm:p-3 rounded-full bg-primary/10 w-fit">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-bold">{account.name}</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-muted-foreground">
                      {account.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{account.price}</div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Minimum Deposit</p>
                    </div>
                    
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {account.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircleIcon className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      className={`w-full text-sm sm:text-base ${
                        account.popular 
                          ? "bg-primary hover:bg-primary/90" 
                          : "border-primary text-primary hover:bg-primary hover:text-white"
                      }`}
                      variant={account.popular ? "default" : "outline"}
                      size="sm"
                      onClick={() => window.location.href = "https://client.wwallbot.com/accounts/signUp"}
                    >
                      {account.popular ? "Get Started" : "Open Account"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}