import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Help = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Help Center</motion.h1>
          <div className="max-w-3xl mb-8">
            <Input placeholder="Search articles..." className="bg-background/50 border-border/30" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[{
              t:"Getting Started",
              d:"Create your account, verify identity, and fund your wallet."
            },{
              t:"Deposits & Withdrawals",
              d:"Supported methods, limits, and processing times."
            },{
              t:"Platform",
              d:"Orders, charts, and troubleshooting common issues."
            },{
              t:"Security",
              d:"2FA, device safety, and account protection tips."
            }].map((a)=> (
              <Card key={a.t} className="bg-card/60 backdrop-blur-sm border border-border/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{a.t}</h3>
                  <p className="text-muted-foreground">{a.d}</p>
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

export default Help;


