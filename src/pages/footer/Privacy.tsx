import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Privacy Policy</motion.h1>
            <motion.div 
              className="bg-card/60 backdrop-blur-sm border border-border/20 rounded-lg p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground">
                  We value your privacy. This policy explains what data we collect, why we collect it, and how we safeguard it.
                </p>
                
                <div className="space-y-8 mt-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Data We Collect</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start"><span className="text-primary mr-2 mt-1">&#10003;</span> Account information and KYC documents</li>
                      <li className="flex items-start"><span className="text-primary mr-2 mt-1">&#10003;</span> Trading activity and platform usage analytics</li>
                      <li className="flex items-start"><span className="text-primary mr-2 mt-1">&#10003;</span> Device, cookie and log data for security</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">How We Use Data</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start"><span className="text-primary mr-2 mt-1">&#10003;</span> To provide and improve Wwallbot services</li>
                      <li className="flex items-start"><span className="text-primary mr-2 mt-1">&#10003;</span> To comply with AML/KYC and regulatory requirements</li>
                      <li className="flex items-start"><span className="text-primary mr-2 mt-1">&#10003;</span> To prevent fraud and ensure platform security</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Retention & Security</h3>
                    <p>Data is retained only as long as needed and stored with bank-level encryption and access controls.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Your Rights</h3>
                    <p>You may request access, correction, or deletion of your personal data subject to legal obligations.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">Contact</h3>
                    <p>For privacy inquiries, contact <a href="mailto:privacy@wwallbot.com" className="text-primary hover:underline">privacy@wwallbot.com</a>.</p>
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
};

export default Privacy;
