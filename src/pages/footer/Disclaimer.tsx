import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Disclaimer = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Disclaimer</motion.h1>
          <motion.div
            className="bg-card/60 backdrop-blur-sm border border-border/20 rounded-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground">
                Note: Trading involves risk. Nothing on this site constitutes investment advice or a solicitation to buy or sell any instrument.
              </p>

              <div className="space-y-8 mt-8">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Risk Warning</h3>
                  <p>Trading involves risk. Nothing on this site constitutes investment advice or a solicitation to buy or sell any instrument.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Performance</h3>
                  <p>Past performance is not indicative of future results. Regional restrictions may apply.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Trademarks</h3>
                  <p>All trademarks and logos are property of their respective owners.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Disclaimer;
