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
    },
    {
      quote:
        "After downsizing our team, we had excess licenses that were just sitting idle. SoftSell not only found buyers quickly but also handled all the transfer documentation which saved us considerable time and effort.",
      author: "Michael Chen",
      position: "Finance Director",
      company: "Nova Technologies",
      initials: "MC",
    },
  ];

  return (
    <section id="testimonials" className="section bg-muted/50">
      <div className="container">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-card">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg
                      className="h-8 w-8 text-[#6366f1] opacity-50"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback className="bg-[#ede9fe] text-[#5b21b6] dark:bg-[#4c1d95] dark:text-[#ddd6fe]">
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
      </div>
    </section>
  );
};

export default Testimonials;
