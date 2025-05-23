import useSmoothScroll from "@/hooks/useSmoothScroll";
import { Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSmoothScroll = useSmoothScroll(0);

  const navLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a
            className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] bg-clip-text text-xl font-bold text-transparent"
            href="#"
          >
            SoftSell
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-accent text-sm font-medium transition-colors"
              onClick={handleSmoothScroll}
              data-offset={
                link.href === "#how-it-works" || link.href === "#testimonials"
                  ? "80"
                  : "0"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" className="hidden md:flex">
            <a href="#contact" onClick={handleSmoothScroll}>
              Get Started
            </a>
          </Button>
          <Button asChild className="hidden md:flex">
            <a href="#contact" onClick={handleSmoothScroll}>
              Get a Quote
            </a>
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
        <div className="border-border/40 border-t md:hidden">
          <div className="container flex flex-col space-y-4 py-4">
            {/* Theme toggle in mobile menu */}
            <div className="border-border/40 mb-2 flex items-center justify-between border-b pb-2">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>

            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-accent text-sm font-medium transition-colors"
                data-offset={link.href === "#how-it-works" ? "80" : "0"}
                onClick={(e) => {
                  handleSmoothScroll(e);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}

            <div className="flex gap-2 pt-2">
              <Button asChild variant="ghost" className="flex-1">
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleSmoothScroll(e);
                    setIsMenuOpen(false);
                  }}
                >
                  Get Started
                </a>
              </Button>
              <Button asChild className="flex-1">
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleSmoothScroll(e);
                    setIsMenuOpen(false);
                  }}
                >
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
