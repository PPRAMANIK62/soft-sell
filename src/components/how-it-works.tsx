import { ArrowDown, ArrowRight, CheckCircle, DollarSign, FileCheck } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
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
      color:
        "from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800/30",
    },
    {
      icon: (
        <CheckCircle size={48} className="text-[#7c3aed] dark:text-[#a78bfa]" />
      ),
      title: "Get Valuation",
      description:
        "Our expert team analyzes the current market and provides a competitive valuation within 24 hours.",
      badge: "Step 2",
      color:
        "from-purple-50 to-violet-100 dark:from-purple-950/20 dark:to-violet-900/20",
      borderColor: "border-violet-200 dark:border-violet-800/30",
    },
    {
      icon: (
        <DollarSign size={48} className="text-[#4f46e5] dark:text-[#818cf8]" />
      ),
      title: "Get Paid",
      description:
        "Accept our offer and receive payment through your preferred method within 3 business days.",
      badge: "Step 3",
      color:
        "from-indigo-50 to-blue-100 dark:from-indigo-950/20 dark:to-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800/30",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="section bg-muted/50 relative overflow-hidden"
    >
      <div className="container relative">
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
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`card-hover relative z-10 bg-gradient-to-br ${step.color} border ${step.borderColor} shadow-sm`}
            >
              <CardContent className="pt-6 px-6 pb-8 flex flex-col items-center text-center">
                <div className="mb-6 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-sm">
                  {step.icon}
                </div>
                <Badge className="mb-2">{step.badge}</Badge>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>

                {/* Arrow indicator for next step (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-7.5 top-1/2 transform -translate-y-1/2 z-20">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
                      <ArrowRight className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                )}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-11 transform -translate-y-1/2 z-20">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
                      <ArrowDown className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="group">
            <a href="#contact" className="flex items-center gap-2">
              Start the Process
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
