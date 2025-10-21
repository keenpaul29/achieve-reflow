import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Hero() {
  const features = [
    { icon: TrendingUp, text: "Advanced Analytics" },
    { icon: Shield, text: "Secure Trading" },
    { icon: Zap, text: "Instant Execution" },
  ];

  const marketRows = [
    { pair: "EUR/USD", value: "1.0856", change: "+0.32%" },
    { pair: "GBP/USD", value: "1.2634", change: "+0.18%" },
    { pair: "USD/JPY", value: "149.82", change: "-0.15%" },
  ];

  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      {/* Background video (behind everything) */}
      <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline>
        <source src="/hero_video.mp4" type="video/mp4" />
        {/* optionally add webm/source fallbacks here */}
      </video>

      {/* Decorative blobs (above video but below overlay/content) */}
      <div className="absolute -left-40 -top-16 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl opacity-40 z-5 pointer-events-none" />
      <div className="absolute -right-40 -bottom-10 w-96 h-96 rounded-full bg-gradient-to-tr from-accent/15 to-primary/10 blur-3xl opacity-30 z-5 pointer-events-none" />

      {/* Dim overlay to keep text readable (between blobs and content) */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      <div className="my-24 container mx-auto px-4 relative z-20">
        <div className="flex justify-center items-center min-h-[420px]">
          {/* Glassmorphism panel so video shows through */}
          <div className="relative w-full max-w-5xl p-8 rounded-3xl bg-white/6 border border-white/6 backdrop-blur-sm shadow-lg">
            {/* Left: Headline + CTAs */}
            <div className="space-y-6">
              <div className="inline-flex justify-center items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-4 py-2 border border-primary/10 backdrop-blur-sm">
                <span className="text-sm font-semibold text-primary">✨ Trade Smart. Grow Fast.</span>
                <span className="ml-1 inline-block w-px h-5 bg-primary/10" />
                <span className="text-xs text-muted-foreground">Tools, Insights, Security</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Elevate your trading
                <span className="block text-gradient mt-2">with smarter tools</span>
                <span className="block mt-2 text-xl font-medium text-muted-foreground">Real-time data. Instant execution. Built for growth.</span>
              </h1>

              <p className="max-w-xl text-lg text-muted-foreground">
                Seamless charts, powerful analytics, and enterprise-grade security to help you trade confidently.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Button size="lg" className="group shadow-xl shadow-primary/20 px-6 py-3">
                  Start Trading Now
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="px-5 py-3">
                  Explore Features
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.text} className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{feature.text}</div>
                        <div className="text-xs text-muted-foreground">{i === 0 ? 'Live signals' : i === 1 ? 'Protected funds' : 'Fast fills'}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
