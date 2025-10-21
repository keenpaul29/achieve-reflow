import React from 'react';

import { Briefcase, DollarSign, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Register and Verify",
      desc: "Complete our simple and secure registration process to create your trading account.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Fund Your Account",
      desc: "Choose from a variety of convenient payment methods to deposit funds into your account.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Start Trading Forex",
      desc: "Access the global forex market and start trading with our advanced platforms and tools.",
    },
  ];

  return (
    <section className="py-28 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
            Start Trading in <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow our streamlined process to get your trading account up and running in no time.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2" />
          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="w-24 h-24 rounded-full bg-card border-4 border-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
