import { Briefcase, DollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      icon: Briefcase,
      title: "Register & Verify",
      desc: "Complete our simple and secure registration process to create your trading account.",
    },
    {
      icon: DollarSign,
      title: "Fund Your Account",
      desc: "Choose from a variety of convenient payment methods to deposit funds.",
    },
    {
      icon: TrendingUp,
      title: "Start Trading",
      desc: "Access global markets and start trading with our advanced platforms and tools.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.15),transparent_30%)] -z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 tracking-wide">
            GET STARTED
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Begin Your Trading Journey in <span className="text-gradient">3 Easy Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures you can get your trading account up and running in minutes.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border/20 rounded-full" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={step.title}
                className="relative flex items-center justify-center mb-16 last:mb-0"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16 md:order-2'}`}>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
                
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-24 h-24 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/80 to-accent/60 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold border-4 border-background">
                    {index + 1}
                  </div>
                </div>
                
                <div className={`hidden md:block w-5/12 ${isEven ? 'order-2' : ''}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
