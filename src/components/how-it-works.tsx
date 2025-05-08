import useSmoothScroll from "@/hooks/useSmoothScroll";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle,
  DollarSign,
  FileCheck,
} from "lucide-react";
import { MotionCard, MotionHeader, MotionIcon, MotionSection } from "./motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const HowItWorks = () => {
  const handleSmoothScroll = useSmoothScroll(0);
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
    <MotionSection
      id="how-it-works"
      className="bg-muted/50"
      staggerAmount={0.1}
      delayChildren={0.1}
    >
      <MotionHeader
        badge="Simple Process"
        title="How It Works"
        description="Our streamlined process makes it easy to sell your unused software licenses and recover value quickly."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((step, index) => (
          <MotionCard
            key={index}
            index={index}
            delay={0.2}
            direction="up"
            hoverY={-10}
          >
            <Card
              className={`relative z-10 bg-gradient-to-br ${step.color} border ${step.borderColor} shadow-sm`}
            >
              <CardContent className="pt-6 px-6 pb-8 flex flex-col items-center text-center">
                <MotionIcon
                  className={`mb-6 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-sm`}
                  hoverRotate={5}
                  hoverScale={1.1}
                >
                  {step.icon}
                </MotionIcon>
                <Badge className="mb-2">{step.badge}</Badge>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>

                {/* Arrow indicator for next step (except last) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute -right-7.5 top-1/2 transform -translate-y-1/2 z-20"
                    animate={{
                      x: [0, 5, 0],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
                      <ArrowRight className="h-5 w-5 text-accent" />
                    </div>
                  </motion.div>
                )}
                {index < steps.length - 1 && (
                  <motion.div
                    className="md:hidden absolute -bottom-11 transform -translate-y-1/2 z-20"
                    animate={{
                      y: [0, 5, 0],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
                      <ArrowDown className="h-5 w-5 text-accent" />
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </MotionCard>
        ))}
      </div>

      <MotionCard
        className="mt-12 text-center"
        delay={0.8}
        direction="up"
        hoverEffect={false}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild size="lg" className="group">
            <a
              href="#contact"
              className="flex items-center gap-2"
              onClick={handleSmoothScroll}
            >
              Start the Process
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </MotionCard>
    </MotionSection>
  );
};

export default HowItWorks;
