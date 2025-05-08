import useSmoothScroll from "@/hooks/useSmoothScroll";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Hero = () => {
  const handleSmoothScroll = useSmoothScroll(0);

  const highlights = [
    "No upfront fees",
    "Secure transactions",
    "24-hour valuation",
  ];

  return (
    <section className="section relative overflow-hidden pt-24 md:pt-32">
      {/* Background gradient elements */}
      <motion.div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/20"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.8,
          transition: { duration: 1.5, ease: "easeOut" },
        }}
      />
      <motion.div
        className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/20"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.8,
          transition: { duration: 1.5, delay: 0.3, ease: "easeOut" },
        }}
      />

      <div className="relative container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge variant="outline" className="mx-auto mb-6 block w-fit md:mx-0">
            Software License Resale Specialists
          </Badge>
        </motion.div>

        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <motion.div
            className="flex-1 space-y-6 text-center md:text-left"
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-extrabold tracking-tight"
              variants={fadeIn("up", 0, 0.6)}
            >
              Transform Unused Software <br />
              <motion.span
                className="hero-gradient bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.4,
                    ease: "easeOut",
                  },
                }}
              >
                Into Cash
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground mx-auto max-w-[600px] text-xl md:mx-0"
              variants={fadeIn("up", 0.1, 0.6)}
            >
              SoftSell helps businesses recover value from their unused or
              excess software licenses with transparent, secure, and efficient
              resale solutions.
            </motion.p>

            {/* Highlights */}
            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
              variants={staggerContainer(0.1, 0.4)}
              initial="hidden"
              animate="visible"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  variants={fadeIn("right", index * 0.1, 0.5)}
                >
                  <CheckCircle className="text-accent h-5 w-5" />
                  <span className="text-sm font-medium">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col justify-center gap-4 pt-4 sm:flex-row md:justify-start"
              variants={fadeIn("up", 0.6, 0.6)}
            >
              <Button size="lg" className="group text-base font-medium">
                <a
                  href="#contact"
                  className="flex items-center gap-2"
                  onClick={handleSmoothScroll}
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium"
              >
                <a
                  href="#how-it-works"
                  onClick={handleSmoothScroll}
                  data-offset="80"
                >
                  Learn How It Works
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden flex-1 justify-center md:flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              },
            }}
          >
            <motion.div
              className="flex h-[400px] w-full max-w-[500px] items-center justify-center rounded-xl bg-gradient-to-br from-[#e0e7ff] to-[#ede9fe] p-8 shadow-lg dark:from-[#312e81]/30 dark:to-[#4c1d95]/30"
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
              }}
            >
              <motion.div
                className="glass-card relative flex h-full w-full items-center justify-center rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.6,
                    ease: "easeOut",
                  },
                }}
              >
                <motion.div
                  className="absolute top-6 left-6 h-3 w-3 rounded-full bg-red-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                />
                <motion.div
                  className="absolute top-6 left-12 h-3 w-3 rounded-full bg-yellow-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                />
                <motion.div
                  className="absolute top-6 left-18 h-3 w-3 rounded-full bg-green-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                />
                <div className="space-y-4 text-center">
                  <motion.div
                    className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] bg-clip-text text-5xl font-bold text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: 1.1,
                        ease: "easeOut",
                      },
                    }}
                  >
                    $250,000+
                  </motion.div>
                  <motion.div
                    className="text-lg"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        delay: 1.3,
                        ease: "easeOut",
                      },
                    }}
                  >
                    Recovered value for our clients
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
