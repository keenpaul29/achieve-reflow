import React from 'react';

export function HeroStats() {
  const stats = [
    { label: 'Trades executed', value: '1B+' },
    { label: 'Auto-approved withdrawals', value: '90.1%' },
    { label: 'Spreads from', value: '0.12 pips' },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="p-8 bg-white/3 backdrop-blur-md rounded-2xl border border-primary/8 shadow-lg">
              <div className="text-3xl md:text-4xl font-extrabold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
