import { Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4f46e5] to-[#7c3aed]">
            SoftSell
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            How It Works
          </a>
          <a
            href="#why-choose-us"
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            Why Choose Us
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" className="hidden md:flex">
            <a href="#contact">Get Started</a>
          </Button>
          <Button asChild className="hidden md:flex">
            <a href="#contact">Get a Quote</a>
          </Button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40">
          <div className="container py-4 flex flex-col space-y-4">
            <a
              href="#how-it-works"
              className="text-sm font-medium transition-colors hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#why-choose-us"
              className="text-sm font-medium transition-colors hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2 flex gap-2">
              <Button asChild variant="ghost" className="flex-1">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </a>
              </Button>
              <Button asChild className="flex-1">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Get a Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
