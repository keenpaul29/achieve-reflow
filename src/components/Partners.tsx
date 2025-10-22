export function Partners() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_40%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Our <span className="text-gradient">Liquidity</span> Providers
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            We partner with top-tier financial institutions to provide you with deep liquidity, ensuring competitive pricing and reliable execution.
          </p>
        </div>
        <div className="animate-fade-up">
          <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden group">
            <div className="mask-gradient">
              <div className="inline-flex whitespace-nowrap animate-logos group-hover:[animation-play-state:paused] leading-none">
                <img src="/logos.png" alt="Partner logos" draggable={false} className="block shrink-0 h-10 sm:h-12 lg:h-14 opacity-90 select-none pointer-events-none" />
                <img src="/logos.png" alt="" aria-hidden draggable={false} className="block shrink-0 h-10 sm:h-12 lg:h-14 opacity-90 select-none pointer-events-none" />
                <img src="/logos.png" alt="" aria-hidden draggable={false} className="block shrink-0 h-10 sm:h-12 lg:h-14 opacity-90 select-none pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes logos-marquee {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-33.333%,0,0); }
        }
        .animate-logos {
          animation: logos-marquee 10s linear infinite;
          will-change: transform;
        }
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
                  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      `}</style>
    </section>
  );
}
