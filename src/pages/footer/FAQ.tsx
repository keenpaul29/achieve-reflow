import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>FAQ</motion.h1>
          <div className="space-y-4 max-w-3xl">
            {[{
              q:"How do I open an account?",
              a:"Click Create Account and complete verification."
            },{
              q:"What are the fees?",
              a:"We offer tight spreads; see the pricing page for details."
            },{
              q:"Is my data secure?",
              a:"Yes. We use TLS 1.3, HSMs, and segregated infrastructure."
            }].map((f)=> (
              <Card key={f.q} className="bg-card/60 backdrop-blur-sm border border-border/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-foreground">{f.q}</h3>
                  <p className="text-muted-foreground">{f.a}</p>
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

export default FAQ;


