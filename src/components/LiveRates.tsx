import React, { useEffect, useRef, useState } from 'react';

type Rate = { pair: string; value: number; change: number };

function formatValue(v: number) {
  return v.toFixed(4);
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
  ];

  const [rates, setRates] = useState<Rate[]>(initial);
  const tickerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<number | null>(null);

  // simulate live updates by nudging values randomly every 1.5s
  useEffect(() => {
    const id = setInterval(() => {
      setRates((prev) =>
        prev.map((r) => {
          const delta = (Math.random() - 0.5) * (r.value > 10 ? 0.2 : 0.0005);
          const next = +(r.value + delta).toFixed(r.value > 10 ? 2 : 4);
          const change = +((next - r.value) / r.value * 100).toFixed(2);
          return { ...r, value: next, change };
        })
      );
    }, 1500);

    return () => clearInterval(id);
  }, []);

  // pause animation on hover
  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    const onEnter = () => (el.style.animationPlayState = 'paused');
    const onLeave = () => (el.style.animationPlayState = 'running');
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // duplicate track for seamless scroll
  const items = [...rates, ...rates];

  return (
    <section className="py-12 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden">
          <div
            ref={tickerRef}
            className="flex whitespace-nowrap animate-marquee"
            style={{ gap: '4rem' }}
          >
            {items.map((r, i) => (
              <div key={r.pair + '-' + i} className="flex items-center">
                <div className="text-lg font-semibold text-foreground mr-3">{r.pair}</div>
                <div className="text-lg font-mono text-muted-foreground mr-3">{formatValue(r.value)}</div>
                <div className={`text-lg font-semibold ${r.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {r.change >= 0 ? `▲` : `▼`} {Math.abs(r.change)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
