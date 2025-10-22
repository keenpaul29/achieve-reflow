import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Cookies = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Cookie Policy</motion.h1>
          <motion.div 
            className="bg-card/60 backdrop-blur-sm border border-border/20 rounded-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground">
                Cookies are small text files stored on your device to remember preferences and improve security.
              </p>
              
              <div className="space-y-8 mt-8">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">What Are Cookies?</h3>
                  <p>Cookies are small text files stored on your device to remember preferences and improve security.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Types We Use</h3>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start"><span className="text-primary mr-2 mt-1">&#10003;</span> Necessary: authentication and session management</li>
                    <li className="flex items-start"><span className="text-primary mr-2 mt-1">&#10003;</span> Analytics: usage metrics to improve features</li>
                    <li className="flex items-start"><span className="text-primary mr-2 mt-1">&#10003;</span> Marketing: only with your consent</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Managing Cookies</h3>
                  <p>You can control cookies in your browser settings and through in-app preferences.</p>
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

export default Cookies;
