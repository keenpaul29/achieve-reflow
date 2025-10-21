import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@vwalbot.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Trading Street, Financial District",
      description: "New York, NY 10004"
    },
    {
      icon: Clock,
      title: "Trading Hours",
      content: "24/5 Market Access",
      description: "Sunday 5PM - Friday 5PM EST"
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
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions? Our team is here to help you succeed. 
                Reach out anytime and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-foreground font-medium mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <p className="text-center text-sm text-muted-foreground mt-6">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How long does it take to open an account?",
                    a: "Account opening typically takes 5-10 minutes. Once you submit your documents, verification usually completes within 24 hours."
                  },
                  {
                    q: "What is the minimum deposit?",
                    a: "The minimum deposit varies by account type. Our Starter account has no minimum, while Professional requires $500 and Elite requires $5,000."
                  },
                  {
                    q: "Are my funds protected?",
                    a: "Yes, client funds are held in segregated accounts with tier-1 banks and protected by investor compensation schemes up to applicable limits."
                  },
                  {
                    q: "Can I withdraw my funds anytime?",
                    a: "Yes, you can withdraw your funds at any time. Withdrawal requests are typically processed within 24 hours on business days."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
