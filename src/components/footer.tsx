import useSmoothScroll from "@/hooks/useSmoothScroll";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleSmoothScroll = useSmoothScroll(0);

  const quickLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact Us" },
  ];

  const legalLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ];

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: "info@softsell.com" },
    { icon: <Phone className="h-5 w-5" />, text: "+1 (555) 123-4567" },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "123 Tech Plaza, Suite 400, San Francisco, CA 94105",
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      href: "#",
      label: "Twitter",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      href: "#",
      label: "Facebook",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      href: "#",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/80 pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-indigo-200/10 dark:bg-indigo-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-purple-200/10 dark:bg-purple-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        {/* Newsletter section */}
        <div className="mb-16 p-8 rounded-xl bg-white/80 dark:bg-gray-900/50 shadow-sm border border-border/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest industry insights and
                updates on software license resale opportunities.
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col sm:flex-row gap-3 w-full">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          <div className="md:col-span-5">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] mb-4">
              SoftSell
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming unused software licenses into immediate cash value
              for businesses around the globe. Our platform connects sellers
              with buyers to maximize the value of your software investments.
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 text-muted-foreground hover:text-accent hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-sm"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              Quick Links
              <ArrowUpRight className="ml-1 h-4 w-4 text-accent" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors flex items-center group"
                    onClick={handleSmoothScroll}
                    data-offset={link.href === "#how-it-works" ? "80" : "0"}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              Contact Us
              <ArrowUpRight className="ml-1 h-4 w-4 text-accent" />
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 p-2 rounded-full bg-accent/10 text-accent">
                    {item.icon}
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} SoftSell. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
