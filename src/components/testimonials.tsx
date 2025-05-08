import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";
import {
  MotionBackground,
  MotionBlob,
  MotionCard,
  MotionHeader,
  MotionSection,
} from "./motion";
import { Avatar, AvatarFallback } from "./ui/avatar";
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
        "The team at SoftSell made the entire process painless. We had Microsoft licenses sitting unused after downsizing, and they found buyers within a week. The extra capital helped us invest in new growth initiatives.",
      author: "Michael Rodriguez",
      position: "Finance Director",
      company: "Nexus Technologies",
      initials: "MR",
      amount: "$42,800",
      stars: 5,
      color:
        "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30",
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
    <MotionSection
      id="testimonials"
      className="bg-muted/50"
      staggerAmount={0.1}
      delayChildren={0.1}
    >
      {/* Background decorative elements */}
      <MotionBackground>
        <MotionBlob
          className="absolute top-1/3 -right-24 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl"
          animate="move"
          x={[0, 10, 0]}
          duration={8}
        />
        <MotionBlob
          className="absolute bottom-1/3 -left-24 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"
          animate="move"
          x={[0, -10, 0]}
          duration={8}
        />
      </MotionBackground>

      <MotionHeader
        badge="Success Stories"
        title="What Our Clients Say"
        description="Don't just take our word for it – hear from businesses that have successfully recovered value through SoftSell."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <MotionCard
            key={index}
            index={index}
            delay={0.3}
            direction="up"
            hoverY={-10}
            hoverShadow="0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          >
            <Card
              className={`shadow-sm border ${testimonial.borderColor} ${testimonial.color} overflow-hidden`}
            >
              <CardContent className="p-8 relative">
                {/* Highlight badge */}
                <motion.div
                  className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold py-1 px-3 rounded-bl-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    transition: {
                      delay: index * 0.1 + 0.5,
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                >
                  Recovered: {testimonial.amount}
                </motion.div>

                <div className="flex flex-col h-full">
                  {/* Star rating */}
                  <motion.div
                    className="flex mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: index * 0.1 + 0.6,
                        },
                      },
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3 },
                          },
                        }}
                      >
                        <StarIcon
                          className={`h-5 w-5 ${
                            i < testimonial.stars
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote icon */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 0.5,
                      scale: 1,
                      transition: {
                        delay: index * 0.1 + 0.7,
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    }}
                  >
                    <svg
                      className="h-8 w-8 text-accent opacity-50"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </motion.div>

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
          </MotionCard>
        ))}
      </div>
    </MotionSection>
  );
};

export default Testimonials;
