import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Vignesh Krishnan",
      location: "Chennai",
      rating: 5,
      text: "My valuable feedback it is one of the best service to go on which will be more helpful for.the future the guidence from sathyan.G from Chennai has provided a good solution for my life and for my family sathyan.G has given me one of the best option for my upcoming life.",
      investment: "SIP Investor since 2018",
    },
    {
      name: "Priya Venkatesh",
      location: "Adyar, Chennai",
      rating: 5,
      text: "Best in class Financial Advisors in South India, expertised in advising about investment in major asset classes and insurance solutions both life and general. Provide state of art Financial services to individuals and corporates. Specialists in advising people in Medical fraternity. More than 300 crores of assets under management with 2500 clients all-over south India.",
      investment: "Retirement Planning Client",
    },
    {
      name: "Sundar Raman",
      location: "Anna Nagar, Chennai",
      rating: 5,
      text: "What sets Shree apart is their local presence and understanding of Chennai families. They don't just sell funds; they educate and empower. My entire family now invests through them. Highly recommended!",
      investment: "Family Wealth Management",
    },
    {
      name: "Kavitha Subramanian",
      location: "Velachery, Chennai",
      rating: 5,
      text: "Started my SIP journey with just ₹3,000 per month on their advice. Today, after 7 years, I have a portfolio worth over ₹6 lakhs! Their goal-based planning approach really works. Thank you, Shree team!",
      investment: "SIP Investor since 2017",
    },
  ];

  const videoTestimonials = [
    {
      id: "cI3YidsHVWc",
      title: "Shree Consultants Gave Me A Peace Of Mind With My Finances",
      author: "Dr Jayant",
    },
    {
      id: "e4Tzh_MnO_s",
      title: "My Shree Consultants Portfolio Helped Fund My Son's Wedding!",
      author: "Dr. Murali Krishnaswamy",
    },
    {
      id: "fZhJpqEGtSI",
      title: "I Have Made The Right Decision To Choose Shree Consultants",
      author: "Sridharan Sankaran",
    },
  ];

  const trustpilotReviews = [
    {
      name: "Mohan Krishnan",
      rating: 5,
      date: "2 days ago",
      text: "Excellent support by Relationship Manager, Ms Sigappi. She guided me through the process patiently and politely.",
      verified: true,
    },
    {
      name: "Ramu Sakthivel.",
      rating: 5,
      date: "1 week ago",
      text: "Hi, i am really happy to be a client of Shree Consultancy. Mr.Vignesh has made sure any queries to be answered and get me the financial services whatever I have requested.I would like to continue the relationship with your company. Thanks for the efforts you guys taking for all the clients request..",
      verified: true,
    },
    {
      name: "Monisha Jayakuma.",
      rating: 5,
      date: "1 weeks ago",
      text: "Very patiently explained the things and cleared all our confusion regarding the insurance and guided us to pick the correct one based on our requirements",
      verified: true,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See why families across Chennai trust Shree Mutual Fund Services
          </p>
        </div>

        <Tabs defaultValue="written" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="written">Written</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="trustpilot">Trustpilot</TabsTrigger>
          </TabsList>

          {/* Written Testimonials */}
          <TabsContent value="written">
            <div className="max-w-4xl mx-auto relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-card to-secondary/30">
                        <CardContent className="p-12">
                          <Quote className="w-16 h-16 text-primary/20 mb-6" />
                          
                          <div className="flex mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                            ))}
                          </div>

                          <p className="text-xl text-foreground leading-relaxed mb-8 italic">
                            "{testimonial.text}"
                          </p>

                          <div className="flex items-center justify-between border-t border-border pt-6">
                            <div>
                              <h4 className="text-xl font-bold text-foreground mb-1">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-1">
                                {testimonial.location}
                              </p>
                              <p className="text-sm text-primary font-semibold">
                                {testimonial.investment}
                              </p>
                            </div>
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-white">
                              {testimonial.name.charAt(0)}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full w-12 h-12 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full w-12 h-12 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Video Testimonials */}
          <TabsContent value="video">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {videoTestimonials.map((video, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{video.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Trustpilot Reviews */}
          <TabsContent value="trustpilot">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-12">
                <img 
                  src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg" 
                  alt="Trustpilot" 
                  className="h-8 invert dark:invert-0"
                />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                {trustpilotReviews.map((review, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-bold text-lg">{review.name}</h4>
                            {review.verified && (
                              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                Verified
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-foreground leading-relaxed">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                 <Button
    variant="outline"
    className="rounded-full"
    onClick={() => window.open("https://www.trustpilot.com/review/shreeconsultants.in", "_blank")}
    >

                  View All Reviews on Trustpilot
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Testimonials;
