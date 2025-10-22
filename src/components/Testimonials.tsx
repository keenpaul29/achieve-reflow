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
    <section className="py-16 sm:py-20 md:py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,141,190,0.1),transparent_40%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
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
              <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full bg-card/60 backdrop-blur-lg border border-border/30 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 group">
                    <CardContent className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                      <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/50 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110" />
                      <p className="text-sm sm:text-base text-foreground flex-grow mb-4 sm:mb-6">"{q.text}"</p>
                      <div className="flex items-center mt-auto">
                        <Avatar className="h-10 w-10 sm:h-12 sm:w-12 mr-3 sm:mr-4 transition-transform duration-300 group-hover:scale-105">
                          <AvatarFallback className="text-xs sm:text-sm">{q.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                          <p className="text-sm sm:text-base font-bold text-foreground">{q.name}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{q.location}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm sm:text-base font-bold text-yellow-400 mr-1">{q.rating}</span>
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-8 sm:-left-12 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden sm:flex -right-8 sm:-right-12 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
