import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center" initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>Terms of Service</motion.h1>
          <motion.div 
            className="bg-card/60 backdrop-blur-sm border border-border/20 rounded-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground">
                By using Wwallbot, you agree to these Terms and all policies referenced herein.
              </p>
              
              <div className="space-y-8 mt-8">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Acceptance</h3>
                  <p>By using Wwallbot, you agree to these Terms and all policies referenced herein.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Eligibility</h3>
                  <p>You must be of legal age and comply with applicable laws and sanctions.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Risk Disclosure</h3>
                  <p>Trading CFDs and Forex carries risk of loss. You may lose more than your deposit.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Accounts</h3>
                  <p>Keep credentials secure. We may suspend accounts for suspicious activity.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Limitation of Liability</h3>
                  <p>We are not liable for indirect or consequential damages beyond statutory limits.</p>
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

export default Terms;
