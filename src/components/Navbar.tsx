import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, Rocket, Sparkles, ChevronRight, MessageSquareCode } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onRegisterClick: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Who We Are", href: "#who-we-are" },
    { label: "Focus Areas", href: "#focus-areas" },
    { label: "Syllabus", href: "#syllabus" },
    { label: "Success Stories", href: "#success-stories" },
    { label: "Community", href: "#community" },
    { label: "FAQs", href: "#faqs" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 90; // Adjust for sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" id="site-header">
      {/* Dynamic Announcement Bar */}
      <div className="bg-brand-orange text-white text-xs font-semibold py-2 px-4 flex justify-between items-center relative overflow-hidden transition-all duration-300">
        <div className="absolute inset-0 bg-white/10 animate-pulse pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-[11px] sm:text-xs tracking-wide">
          <span className="flex items-center gap-1.5 font-medium">
            <Rocket className="w-3.5 h-3.5 text-yellow-200 animate-bounce" />
            Get tech insights, career tips &amp; digital skills updates from Your Techie Hub.
          </span>
          <button
            onClick={onRegisterClick}
            className="inline-flex items-center gap-1 text-[10px] sm:text-xs uppercase bg-white text-brand-navy hover:bg-brand-navy hover:text-white px-2.5 py-0.5 rounded-full font-bold transition-all duration-300 shadow-sm border border-transparent whitespace-nowrap active:scale-95"
          >
            Join Our Newsletter
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-brand-navy/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
            : "bg-brand-navy py-5"
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex-shrink-0" onClick={(e) => handleLinkClick(e, "#hero")}>
              <Logo size="md" light={true} variant="horizontal" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-white/80 hover:text-brand-orange font-medium text-sm transition-colors duration-200 py-2 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#footer"
                onClick={(e) => handleLinkClick(e, "#footer")}
                className="text-white hover:text-brand-orange font-semibold text-sm transition-colors duration-200 flex items-center gap-2"
              >
                <MessageSquareCode className="w-4 h-4 text-brand-orange" />
                Contact Us
              </a>
              <button
                onClick={onRegisterClick}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-extrabold text-sm px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-orange/20 border border-brand-orange/10"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={onRegisterClick}
                className="bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-md transition-all active:scale-95"
              >
                Enroll
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/90 hover:text-white p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-brand-navy/98 border-t border-white/5 overflow-hidden"
              id="mobile-menu"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="block px-3 py-2 rounded-lg text-base font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/10 space-y-3 px-3">
                  <a
                    href="#footer"
                    onClick={(e) => handleLinkClick(e, "#footer")}
                    className="flex items-center gap-2 text-white/90 font-medium py-2 rounded-lg"
                  >
                    <MessageSquareCode className="w-5 h-5 text-brand-orange" />
                    Contact Support
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onRegisterClick();
                    }}
                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md active:scale-95 text-center block"
                  >
                    Be a Techie (Enroll Now)
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
