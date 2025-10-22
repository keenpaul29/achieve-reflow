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
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.15),transparent_30%)] -z-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-wide">
            GET STARTED
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Begin Your Trading Journey in <span className="text-gradient">3 Easy Steps</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Our streamlined process ensures you can get your trading account up and running in minutes.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop timeline line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border/20 rounded-full" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={step.title}
                className="relative flex flex-col lg:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Content - Mobile: centered, Desktop: alternating sides */}
                <div className={`w-full lg:w-5/12 text-center lg:text-left ${isEven ? 'lg:pr-16' : 'lg:pl-16 lg:order-2'}`}>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{step.desc}</p>
                </div>
                
                {/* Icon circle - Mobile: centered, Desktop: center */}
                <div className="relative z-10 my-6 lg:my-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shadow-lg">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-primary/80 to-accent/60 flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs sm:text-sm font-bold border-2 sm:border-4 border-background">
                    {index + 1}
                  </div>
                </div>
                
                {/* Desktop spacer */}
                <div className={`hidden lg:block w-5/12 ${isEven ? 'order-2' : ''}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
