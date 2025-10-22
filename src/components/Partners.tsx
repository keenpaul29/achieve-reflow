export function Partners() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_40%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Liquidity</span> Providers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We partner with top-tier financial institutions to provide you with deep liquidity, ensuring competitive pricing and reliable execution.
          </p>
        </div>
        <div className="flex justify-center animate-fade-up">
          <div className="bg-card/50 p-8 rounded-2xl border border-border/20 transition-all duration-300 hover:shadow-lg">
            <img 
              src="/logos-removebg.png" 
              alt="Partner logos" 
              className="w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
