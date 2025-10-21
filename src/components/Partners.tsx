import React from 'react';

export function Partners() {
  const partners = [
    "Barclays",
    "J.P. Morgan",
    "Goldman Sachs",
    "Citibank",
    "HSBC",
    "Deutsche Bank",
  ];

  return (
    <section className="py-28 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
            Trusted <span className="text-primary">Partners & Providers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our network of top-tier liquidity providers ensures competitive pricing and reliable execution.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {partners.map((partner) => (
            <div key={partner} className="text-3xl font-bold text-muted-foreground grayscale hover:grayscale-0 transition-all duration-300">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
