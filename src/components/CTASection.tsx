import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)] animate-pulse-slow" />
          <div className="relative bg-background/80 backdrop-blur-lg rounded-2xl p-12 text-center animate-fade-up shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Ready to Start Your <span className="text-gradient">Trading Journey</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Join thousands of traders who trust Wwallbot for its reliability, advanced tools, and exceptional support. Open your account today and unlock your trading potential.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" className="rounded-full font-semibold group glow-border animate-pulse-subtle">
                Open Live Account <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full font-semibold bg-transparent border-2 border-white/50 hover:bg-white/10 hover:border-white">
                Try Free Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
