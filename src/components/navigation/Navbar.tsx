"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Approach", href: "#approach" },
  { name: "Case Studies", href: "#work" },
  { name: "Why Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#161F2C]/90 backdrop-blur-md shadow-xl py-3 border-b border-white/10"
          : "bg-[#161F2C] py-5 border-b border-white/5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center gap-2 group"
          >
            <Logo variant="light" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive ? "text-[#F5A800]" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F5A800] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-[#F5A800] transition-colors flex items-center gap-1"
            >
              <span>Response SLA: &lt; 24h</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F5A800] hover:bg-[#E59A00] text-[#161F2C] font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-[#F5A800]/25 transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#161F2C] border-b border-white/10 overflow-hidden"
          >
            <Container className="py-6 flex flex-col gap-4">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-medium text-slate-200 hover:text-[#F5A800] py-2 border-b border-white/5 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                ))}
              </nav>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="w-full text-center py-3 rounded-lg bg-[#F5A800] text-[#161F2C] font-semibold text-base shadow-md"
                >
                  Book Free Consultation
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
