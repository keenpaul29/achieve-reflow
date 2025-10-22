import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Careers = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>Careers</motion.h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">Join a global team building best‑in‑class trading technology.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[{t:"Senior React Engineer",l:"Remote",s:"Full‑time"},{t:"Quant Researcher",l:"London",s:"Full‑time"}].map((r)=> (
              <Card key={r.t} className="bg-card/60 backdrop-blur-sm border border-border/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{r.t}</h3>
                      <p className="text-sm text-muted-foreground">{r.l} • {r.s}</p>
                    </div>
                    <Button>Apply</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Careers;


