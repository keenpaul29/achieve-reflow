import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const quotes = [
    {
      name: "John D.",
      location: "New York, USA",
      text: "The platform is incredibly fast and reliable. I've seen a significant improvement in my trading performance since switching to Wwallbot.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Maria G.",
      location: "London, UK",
      text: "Excellent customer service and tight spreads. I highly recommend them to any serious forex trader.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Kenji T.",
      location: "Tokyo, Japan",
      text: "A trustworthy broker with a wide range of currency pairs. The mobile app is a game-changer for trading on the go.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
      name: "Sophie L.",
      location: "Paris, France",
      text: "The educational resources are top-notch. They've helped me develop my trading strategies and confidence.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Ahmed A.",
      location: "Dubai, UAE",
      text: "Fast withdrawals and a seamless deposit process. Wwallbot is a broker you can trust with your funds.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/81.jpg"
    },
  ];

  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.1),transparent_40%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our clients' success stories are a testament to our commitment to providing a world-class trading experience.
          </p>
        </div>
        
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          <CarouselContent>
            {quotes.map((q, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full bg-card/60 backdrop-blur-lg border border-border/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 group">
                    <CardContent className="p-8 flex flex-col flex-grow">
                      <Quote className="w-10 h-10 text-primary/50 mb-4 transition-transform duration-300 group-hover:scale-110" />
                      <p className="text-base text-foreground flex-grow mb-6">"{q.text}"</p>
                      <div className="flex items-center mt-auto">
                        <Avatar className="h-12 w-12 mr-4 transition-transform duration-300 group-hover:scale-105">
                          <AvatarFallback>{q.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                          <p className="font-bold text-foreground">{q.name}</p>
                          <p className="text-sm text-muted-foreground">{q.location}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold text-yellow-400 mr-1">{q.rating}</span>
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
