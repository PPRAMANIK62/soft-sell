import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "SoftSell helped us recover over $75,000 from unused enterprise software licenses that we thought were sunk costs. The process was straightforward and their valuation exceeded our expectations.",
      author: "Sarah Thompson",
      position: "CTO",
      company: "GrowthMetrics Inc.",
      initials: "ST",
      amount: "$75,000",
      stars: 5,
      color:
        "bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30",
      borderColor: "border-indigo-100 dark:border-indigo-800/30",
    },
    {
      quote:
        "After downsizing our team, we had excess licenses that were just sitting idle. SoftSell not only found buyers quickly but also handled all the transfer documentation which saved us considerable time and effort.",
      author: "Michael Chen",
      position: "Finance Director",
      company: "Nova Technologies",
      initials: "MC",
      amount: "$42,500",
      stars: 5,
      color:
        "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30",
      borderColor: "border-purple-100 dark:border-purple-800/30",
    },
    {
      quote:
        "We were skeptical at first, but SoftSell delivered exactly what they promised. Their team was professional, responsive, and got us a great deal on our unused Adobe licenses.",
      author: "Jennifer Patel",
      position: "Operations Manager",
      company: "Bright Solutions",
      initials: "JP",
      amount: "$31,200",
      stars: 4,
      color:
        "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
      borderColor: "border-blue-100 dark:border-blue-800/30",
    },
  ];

  return (
    <section
      id="testimonials"
      className="section bg-muted/50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            Success Stories
          </Badge>
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Don't just take our word for it – hear from businesses that have
            successfully recovered value through SoftSell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`card-hover shadow-sm border ${testimonial.borderColor} ${testimonial.color} overflow-hidden`}
            >
              <CardContent className="p-8 relative">
                {/* Highlight badge */}
                <div className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold py-1 px-3 rounded-bl-lg shadow-md">
                  Recovered: {testimonial.amount}
                </div>

                <div className="flex flex-col h-full">
                  {/* Star rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.stars
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <div className="mb-4">
                    <svg
                      className="h-8 w-8 text-accent opacity-50"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>

                  {/* Testimonial quote */}
                  <p className="text-base mb-6 flex-grow">
                    {testimonial.quote}
                  </p>

                  {/* Author info */}
                  <div className="flex items-center pt-4 border-t border-border/40">
                    <Avatar className="h-12 w-12 mr-4 ring-2 ring-accent/20">
                      <AvatarFallback className="bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700 dark:from-indigo-900 dark:to-purple-900 dark:text-indigo-300">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-900/50 shadow-sm border border-border/40">
            <div className="text-4xl font-bold text-accent mb-2">$1.2M+</div>
            <p className="text-muted-foreground">Total value recovered</p>
          </div>
          <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-900/50 shadow-sm border border-border/40">
            <div className="text-4xl font-bold text-accent mb-2">200+</div>
            <p className="text-muted-foreground">Satisfied clients</p>
          </div>
          <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-900/50 shadow-sm border border-border/40">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <p className="text-muted-foreground">Client satisfaction rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
