import useSmoothScroll from "@/hooks/useSmoothScroll";
import { motion } from "framer-motion";
import { Award, CheckCircle, Rocket, Shield, Star } from "lucide-react";
import { MotionCard, MotionHeader, MotionIcon, MotionSection } from "./motion";
import { Button } from "./ui/button";

const WhyChooseUs = () => {
  const handleSmoothScroll = useSmoothScroll(0);
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
    <MotionSection id="why-choose-us" staggerAmount={0.1} delayChildren={0.1}>
      <MotionHeader
        badge="Our Advantages"
        title="Why Choose SoftSell"
        description="We've helped hundreds of businesses recover millions in software investments through our trusted resale platform."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <MotionCard
            key={index}
            className={`p-6 rounded-xl flex flex-col items-center text-center ${benefit.color} ${benefit.hoverBg} shadow-sm`}
            index={index}
            delay={0.1}
            direction="up"
            hoverY={-10}
            hoverShadow="0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          >
            <MotionIcon
              className={`mb-6 p-4 rounded-full ${benefit.iconBg} shadow-sm`}
              hoverRotate={5}
              hoverScale={1.1}
            >
              {benefit.icon}
            </MotionIcon>
            <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </MotionCard>
        ))}
      </div>

      {/* Added guarantees section */}
      <MotionCard
        className="mt-16 p-8 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100/50 dark:border-indigo-800/20 shadow-sm"
        delay={0.6}
        direction="up"
        hoverY={-5}
        hoverShadow="0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold mb-2">Our Guarantee</h3>
            <p className="text-muted-foreground">
              We stand behind our service with a commitment to transparency,
              security, and customer satisfaction.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4"
            >
              <Button asChild>
                <a href="#contact" onClick={handleSmoothScroll}>
                  Get Started Today
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guarantees.map((guarantee, index) => (
              <MotionCard
                key={index}
                className="flex items-center gap-3 bg-white/80 dark:bg-gray-900/50 p-4 rounded-lg shadow-sm"
                index={index}
                delay={0.3}
                direction="right"
                hoverScale={1.03}
                hoverY={0}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.8,
                  }}
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                </motion.div>
                <span className="font-medium">{guarantee}</span>
              </MotionCard>
            ))}
          </div>
        </div>
      </MotionCard>
    </MotionSection>
  );
};

export default WhyChooseUs;
