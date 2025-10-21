import React from 'react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-4">
        <div className="bg-card border border-border rounded-xl p-12 text-center shadow-lg">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
            Begin Your <span className="text-primary">Trading Journey</span> Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            Experience the financial markets with a trusted broker. Open an account to get started.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              Register Now
            </Button>
            <Button size="lg" variant="outline">
              Try Demo Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
