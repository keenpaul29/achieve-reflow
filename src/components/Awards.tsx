import { TrophyIcon, AcademicCapIcon, StarIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Awards() {
  const awards = [
    {
      title: "Best Forex Broker",
      year: "2023",
      issuer: "Global Forex Awards",
      icon: TrophyIcon,
      variant: "primary",
    },
    {
      title: "Most Transparent Broker",
      year: "2023", 
      issuer: "World Finance Awards",
      icon: TrophyIcon,
      variant: "primary",
    },
    {
      title: "Best Trading Platform",
      year: "2023",
      issuer: "Forex Expo Dubai", 
      icon: TrophyIcon,
      variant: "accent",
    },
    {
      title: "Top CFD Broker",
      year: "2023",
      issuer: "International Business Magazine",
      icon: TrophyIcon,
      variant: "primary",
    },
  ];

  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "primary":
        return {
          iconBg: "bg-primary",
          iconText: "text-primary-foreground",
          badgeBg: "bg-primary/10",
          badgeText: "text-primary",
          border: "border-primary/20",
          hoverBorder: "hover:border-primary/40",
        };
      case "secondary":
        return {
          iconBg: "bg-secondary",
          iconText: "text-secondary-foreground", 
          badgeBg: "bg-secondary/10",
          badgeText: "text-secondary-foreground",
          border: "border-secondary/20",
          hoverBorder: "hover:border-secondary/40",
        };
      case "accent":
        return {
          iconBg: "bg-accent",
          iconText: "text-accent-foreground",
          badgeBg: "bg-accent/10", 
          badgeText: "text-accent",
          border: "border-accent/20",
          hoverBorder: "hover:border-accent/40",
        };
      default:
        return {
          iconBg: "bg-primary",
          iconText: "text-primary-foreground",
          badgeBg: "bg-primary/10",
          badgeText: "text-primary",
          border: "border-primary/20",
          hoverBorder: "hover:border-primary/40",
        };
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
            <TrophyIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            Industry Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            Award-Winning
            <span className="block text-gradient">
              Excellence
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Recognized globally for our commitment to innovation, transparency, and exceptional trading experiences.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            const styles = getVariantStyles(award.variant);
            
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`group h-full bg-card backdrop-blur-sm border ${styles.border} ${styles.hoverBorder} shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 rounded-2xl sm:rounded-3xl overflow-hidden`}>
                  {/* Card Header with Icon */}
                  <CardHeader className="pt-6 sm:pt-8 pb-3 sm:pb-4">
                    <div className={`mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl ${styles.iconBg} flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${styles.iconText}`} />
                    </div>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8 text-center">
                    <div className="space-y-3 sm:space-y-4">
                      {/* Award Title */}
                      <div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-card-foreground mb-2 leading-tight">
                          {award.title}
                        </h3>
                        <div className={`inline-block px-2 sm:px-3 py-1 rounded-full ${styles.badgeBg} ${styles.badgeText} text-xs sm:text-sm font-semibold border ${styles.border}`}>
                          {award.year}
                        </div>
                      </div>
                      
                      {/* Issuer */}
                      <div className="pt-1 sm:pt-2">
                        <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                          {award.issuer}
                        </p>
                      </div>
                    </div>
                  </CardContent>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 ${styles.iconBg} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`} />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="mt-12 sm:mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-4 sm:px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">4+</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Major Awards</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">2023</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Recognition Year</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">Global</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Recognition</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
