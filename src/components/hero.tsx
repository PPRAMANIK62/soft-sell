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
    <section className="section pt-24 md:pt-32 overflow-hidden relative">
      {/* Background gradient elements */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.8,
          transition: { duration: 1.5, ease: "easeOut" },
        }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.8,
          transition: { duration: 1.5, delay: 0.3, ease: "easeOut" },
        }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge variant="outline" className="mb-6 mx-auto md:mx-0 block w-fit">
            Software License Resale Specialists
          </Badge>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
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
                className="bg-clip-text text-transparent hero-gradient"
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
              className="text-xl text-muted-foreground max-w-[600px] mx-auto md:mx-0"
              variants={fadeIn("up", 0.1, 0.6)}
            >
              SoftSell helps businesses recover value from their unused or
              excess software licenses with transparent, secure, and efficient
              resale solutions.
            </motion.p>

            {/* Highlights */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
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
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
              variants={fadeIn("up", 0.6, 0.6)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="text-base font-medium group">
                  <a
                    href="#contact"
                    className="flex items-center gap-2"
                    onClick={handleSmoothScroll}
                  >
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
          </motion.div>

          <motion.div
            className="flex-1 hidden md:flex justify-center"
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
              className="w-full max-w-[500px] h-[400px] bg-gradient-to-br from-[#e0e7ff] to-[#ede9fe] dark:from-[#312e81]/30 dark:to-[#4c1d95]/30 rounded-xl flex items-center justify-center p-8 shadow-lg"
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
                className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-xl flex items-center justify-center p-6 relative glass-card"
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
                  className="absolute top-6 left-6 w-3 h-3 bg-red-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                />
                <motion.div
                  className="absolute top-6 left-12 w-3 h-3 bg-yellow-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                />
                <motion.div
                  className="absolute top-6 left-18 w-3 h-3 bg-green-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                />
                <div className="text-center space-y-4">
                  <motion.div
                    className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4f46e5] to-[#7c3aed]"
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
