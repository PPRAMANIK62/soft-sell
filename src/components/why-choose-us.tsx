import { Award, CheckCircle, Rocket, Shield, Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Award className="h-12 w-12 text-[#4f46e5] dark:text-[#818cf8]" />,
      title: "Expert Valuation",
      description:
        "Our team of license experts ensures you receive the maximum value for your software assets.",
      color: "bg-indigo-50 dark:bg-indigo-950/30",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
      hoverBg: "hover:bg-indigo-100/70 dark:hover:bg-indigo-900/20",
    },
    {
      icon: <Shield className="h-12 w-12 text-[#7c3aed] dark:text-[#a78bfa]" />,
      title: "Secure Transactions",
      description:
        "End-to-end encrypted process with compliant transfer methods that protect your business.",
      color: "bg-purple-50 dark:bg-purple-950/30",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      hoverBg: "hover:bg-purple-100/70 dark:hover:bg-purple-900/20",
    },
    {
      icon: <Rocket className="h-12 w-12 text-[#4f46e5] dark:text-[#818cf8]" />,
      title: "Fast Turnaround",
      description:
        "From submission to payment in as little as 3 business days, speeding up your cash flow.",
      color: "bg-blue-50 dark:bg-blue-950/30",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      hoverBg: "hover:bg-blue-100/70 dark:hover:bg-blue-900/20",
    },
    {
      icon: <Star className="h-12 w-12 text-[#7c3aed] dark:text-[#a78bfa]" />,
      title: "Global Network",
      description:
        "Access to international buyers willing to pay premium prices for quality software licenses.",
      color: "bg-violet-50 dark:bg-violet-950/30",
      iconBg: "bg-violet-100 dark:bg-violet-900/30",
      hoverBg: "hover:bg-violet-100/70 dark:hover:bg-violet-900/20",
    },
  ];

  const guarantees = [
    "100% Secure Transactions",
    "No Payment Until You Approve",
    "Transparent Pricing",
    "Dedicated Account Manager",
  ];

  return (
    <section id="why-choose-us" className="section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
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
              className={`p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 ${benefit.color} ${benefit.hoverBg} shadow-sm transform hover:-translate-y-1`}
            >
              <div
                className={`mb-6 p-4 rounded-full ${benefit.iconBg} shadow-sm`}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Added guarantees section */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100/50 dark:border-indigo-800/20 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-semibold mb-2">Our Guarantee</h3>
              <p className="text-muted-foreground">
                We stand behind our service with a commitment to transparency,
                security, and customer satisfaction.
              </p>
              <Button className="mt-4" asChild>
                <a href="#contact">Get Started Today</a>
              </Button>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/80 dark:bg-gray-900/50 p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
