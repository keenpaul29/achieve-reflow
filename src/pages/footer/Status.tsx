import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Status = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>System Status</motion.h1>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {[{n:"API", s:"Operational"},{n:"Web App", s:"Operational"},{n:"Market Data", s:"Degraded"}].map((x)=> (
              <Card key={x.n} className="bg-card/60 backdrop-blur-sm border border-border/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{x.n}</span>
                    <span className={`text-sm ${x.s==="Operational"?"text-green-500":"text-yellow-500"}`}>{x.s}</span>
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

export default Status;


