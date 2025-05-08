import { Award, Rocket, Shield, Star } from "lucide-react";
import { Badge } from "./ui/badge";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Award className="h-10 w-10 text-[#4f46e5] dark:text-[#818cf8]" />,
      title: "Expert Valuation",
      description:
        "Our team of license experts ensures you receive the maximum value for your software assets.",
    },
    {
      icon: <Shield className="h-10 w-10 text-[#7c3aed] dark:text-[#a78bfa]" />,
      title: "Secure Transactions",
      description:
        "End-to-end encrypted process with compliant transfer methods that protect your business.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-[#4f46e5] dark:text-[#818cf8]" />,
      title: "Fast Turnaround",
      description:
        "From submission to payment in as little as 3 business days, speeding up your cash flow.",
    },
    {
      icon: <Star className="h-10 w-10 text-[#7c3aed] dark:text-[#a78bfa]" />,
      title: "Global Network",
      description:
        "Access to international buyers willing to pay premium prices for quality software licenses.",
    },
  ];

  return (
    <section id="why-choose-us" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            Our Advantages
          </Badge>
          <h2 className="mb-4">Why Choose SoftSell</h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            We've helped hundreds of businesses recover millions in software
            investments through our trusted resale platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl flex flex-col items-center text-center card-hover border border-border/60 bg-card"
            >
              <div className="mb-4 p-3 rounded-full bg-background">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
