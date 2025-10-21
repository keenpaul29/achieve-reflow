import React from 'react';

import { Star } from "lucide-react";

export function Testimonials() {
  const quotes = [
    {
      name: "John D.",
      location: "New York, USA",
      text: "The platform is incredibly fast and reliable. I've seen a significant improvement in my trading performance since switching to this broker.",
      rating: 3
    },
    {
      name: "Maria G.",
      location: "London, UK",
      text: "Excellent customer service and tight spreads. I highly recommend them to any serious forex trader.",
      rating: 4
    },
    {
      name: "Kenji T.",
      location: "Tokyo, Japan",
      text: "A trustworthy broker with a wide range of currency pairs. The mobile app is a game-changer for trading on the go.",
      rating: 4
    },
  ];

  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
            Trusted by <span className="text-primary">Traders Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our clients' success stories are a testament to our commitment to providing a world-class trading experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((q) => (
            <div
              key={q.name}
              className="bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < q.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-lg text-foreground mb-6">"{q.text}"</p>
              <div>
                <p className="text-lg font-bold text-foreground">{q.name}</p>
                <p className="text-muted-foreground">{q.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
