import { CheckCircle, DollarSign, FileCheck } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <FileCheck size={48} className="text-[#4f46e5] dark:text-[#818cf8]" />
      ),
      title: "Upload License",
      description:
        "Securely submit your software licenses and package details through our encrypted portal.",
      badge: "Step 1",
    },
    {
      icon: (
        <CheckCircle size={48} className="text-[#7c3aed] dark:text-[#a78bfa]" />
      ),
      title: "Get Valuation",
      description:
        "Our expert team analyzes the current market and provides a competitive valuation within 24 hours.",
      badge: "Step 2",
    },
    {
      icon: (
        <DollarSign size={48} className="text-[#4f46e5] dark:text-[#818cf8]" />
      ),
      title: "Get Paid",
      description:
        "Accept our offer and receive payment through your preferred method within 3 business days.",
      badge: "Step 3",
    },
  ];

  return (
    <section id="how-it-works" className="section bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            Simple Process
          </Badge>
          <h2 className="mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Our streamlined process makes it easy to sell your unused software
            licenses and recover value quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connected line between steps for desktop */}
          <div className="hidden md:block absolute top-32 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-0.5 bg-border z-0"></div>

          {steps.map((step, index) => (
            <Card
              key={index}
              className="card-hover relative z-10 bg-card border border-border"
            >
              <CardContent className="pt-6 px-6 pb-8 flex flex-col items-center text-center">
                <div className="mb-6 p-3 rounded-full bg-background">
                  {step.icon}
                </div>
                <Badge className="mb-2">{step.badge}</Badge>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
