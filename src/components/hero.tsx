import { ArrowRight, CheckCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Hero = () => {
  const highlights = [
    "No upfront fees",
    "Secure transactions",
    "24-hour valuation",
  ];

  return (
    <section className="section pt-24 md:pt-32 overflow-hidden relative">
      {/* Background gradient elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>

      <div className="container relative">
        <Badge variant="outline" className="mb-6 mx-auto md:mx-0 block w-fit">
          Software License Resale Specialists
        </Badge>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="animate-in font-extrabold tracking-tight">
              Transform Unused Software <br />
              <span className="bg-clip-text text-transparent hero-gradient">
                Into Cash
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto md:mx-0">
              SoftSell helps businesses recover value from their unused or
              excess software licenses with transparent, secure, and efficient
              resale solutions.
            </p>

            {/* Highlights */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Button size="lg" className="text-base font-medium group">
                <a href="#contact" className="flex items-center gap-2">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium"
              >
                <a href="#how-it-works">Learn How It Works</a>
              </Button>
            </div>
          </div>

          <div className="flex-1 hidden md:flex justify-center">
            <div className="w-full max-w-[500px] h-[400px] bg-gradient-to-br from-[#e0e7ff] to-[#ede9fe] dark:from-[#312e81]/30 dark:to-[#4c1d95]/30 rounded-xl flex items-center justify-center p-8 animate-float shadow-lg">
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-xl flex items-center justify-center p-6 relative glass-card">
                <div className="absolute top-6 left-6 w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="absolute top-6 left-12 w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="absolute top-6 left-18 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4f46e5] to-[#7c3aed]">
                    $250,000+
                  </div>
                  <div className="text-lg">Recovered value for our clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
