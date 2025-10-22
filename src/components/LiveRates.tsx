import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

type Rate = { pair: string; value: number; change: number };

function formatValue(v: number) {
  return v.toFixed(v > 10 ? 2 : 4);
}

export function LiveRates() {
  const initial: Rate[] = [
    { pair: 'EUR/USD', value: 1.1655, change: 0.32 },
    { pair: 'GBP/USD', value: 1.3410, change: 0.18 },
    { pair: 'USD/JPY', value: 149.82, change: -0.15 },
    { pair: 'AUD/USD', value: 0.6488, change: 0.05 },
    { pair: 'USD/CAD', value: 1.3650, change: -0.08 },
    { pair: 'USD/CHF', value: 0.9015, change: 0.12 },
    { pair: 'NZD/USD', value: 0.5920, change: 0.03 },
    { pair: 'XAU/USD', value: 2350.55, change: 0.45 },
  ];

  const [rates, setRates] = useState<Rate[]>(initial);
  const tickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setRates((prev) =>
        prev.map((r) => {
          const delta = (Math.random() - 0.5) * (r.value > 100 ? 0.5 : 0.0005);
          const next = +(r.value + delta).toFixed(r.value > 100 ? 2 : 4);
          const change = +((next - r.value) / r.value * 100).toFixed(2);
          return { ...r, value: next, change };
        })
      );
    }, 1500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    const onEnter = () => el.style.animationPlayState = 'paused';
    const onLeave = () => el.style.animationPlayState = 'running';
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const items = [...rates, ...rates, ...rates];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
            Live <span className="text-gradient">Market</span> Data
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-2 px-4">
            Stay updated with real-time forex rates streaming directly from the global markets.
          </p>
        </div>
        <div className="relative overflow-hidden group mask-gradient">
          <div
            ref={tickerRef}
            className="flex whitespace-nowrap animate-marquee"
          >
            {items.map((r, i) => (
              <div key={r.pair + '-' + i} className="flex items-center mx-2 sm:mx-4">
                <div className="flex items-center p-3 sm:p-4 rounded-lg bg-card/50 border border-border/20 min-w-[200px] sm:min-w-[260px] shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50">
                  <div className="flex-grow">
                    <div className="text-sm sm:text-lg font-bold text-foreground">{r.pair}</div>
                    <div className="text-base sm:text-xl font-mono text-muted-foreground transition-colors duration-300">{formatValue(r.value)}</div>
                  </div>
                  <div className={`flex items-center text-sm sm:text-lg font-semibold ${r.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {r.change >= 0 ? <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> : <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />}
                    {Math.abs(r.change)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 80s linear infinite;
        }
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
