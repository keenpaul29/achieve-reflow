import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Traders", value: "250K+" },
    { icon: TrendingUp, label: "Daily Volume", value: "$5B+" },
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: Target, label: "Markets", value: "200+" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We continuously push boundaries to deliver cutting-edge trading technology"
    },
    {
      title: "Transparency",
      description: "Clear pricing, honest communication, and no hidden fees"
    },
    {
      title: "Security",
      description: "Your funds and data are protected with bank-level security measures"
    },
    {
      title: "Excellence",
      description: "We strive for perfection in everything we do, from execution to support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About Vwalbot
              </h1>
              <p className="text-xl text-muted-foreground">
                Empowering traders worldwide with innovative technology, 
                transparent practices, and unwavering commitment to your success.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded with a vision to democratize access to financial markets, 
                  Vwalbot has grown from a small startup to a leading trading platform 
                  serving hundreds of thousands of traders worldwide.
                </p>
                <p>
                  Our journey began with a simple question: Why should professional-grade 
                  trading tools be limited to institutional investors? We set out to build 
                  a platform that combines institutional-level technology with user-friendly 
                  design, making advanced trading accessible to everyone.
                </p>
                <p>
                  Today, we're proud to serve a global community of traders, from beginners 
                  taking their first steps in the markets to seasoned professionals executing 
                  complex strategies. Our commitment remains unchanged: to provide the best 
                  trading experience possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
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
};

export default About;
