import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@Wwallbot.com",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.1),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Get in Touch
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Have questions? Our team is here to help you succeed. 
                Reach out anytime and we'll get back to you as soon as possible.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div key={info.title} variants={itemVariants}>
                    <Card className="text-center bg-card/60 backdrop-blur-sm border border-border/20 hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="pt-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                          <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                        </div>
                        <h3 className="font-semibold mb-2 text-foreground">{info.title}</h3>
                        <p className="text-foreground font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/60 backdrop-blur-sm border border-border/20">
                  <CardContent className="pt-6">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName" 
                            placeholder="John" 
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="bg-background/50 border-border/30"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Doe" 
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="bg-background/50 border-border/30"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-background/50 border-border/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          placeholder="How can we help?" 
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-background/50 border-border/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-background/50 border-border/30"
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.p 
                className="text-center text-sm text-muted-foreground mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </motion.p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Frequently Asked Questions</h2>
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
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
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="bg-card/60 backdrop-blur-sm border border-border/20 hover:shadow-lg transition-all duration-300">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold mb-2 text-foreground">{faq.q}</h3>
                        <p className="text-muted-foreground">{faq.a}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Map / Offices */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.08),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.h2 
              className="text-4xl font-bold mb-8 text-center text-foreground"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Offices
            </motion.h2>
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden border border-border/20 bg-card/60 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="aspect-[16/10] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9933.460422579!2d-0.1276474!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2f2c6b7c3d:0x2c8b0b0b0b0b0b0b!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s&markers=51.5014,-0.1419&markers=51.5055,-0.0754&markers=51.5054,-0.0235"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="London Office Locations"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
