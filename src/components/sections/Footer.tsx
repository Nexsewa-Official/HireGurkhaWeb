"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F1621] text-white pt-16 pb-12 border-t border-white/10 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="light" size="lg" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Hire Gurkha LLC is a high-velocity software development and performance digital marketing agency. We engineer bulletproof digital products and execute data-backed growth strategies.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#F5A800]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for New Projects & Sprints</span>
            </div>
          </div>

          {/* Software Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5A800] mb-4">
              Software Engineering
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web Applications
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom SaaS Platforms
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cloud DevOps & AWS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  API & Microservices
                </a>
              </li>
            </ul>
          </div>

          {/* Marketing Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5A800] mb-4">
              Digital Marketing
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Technical SEO Dominance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  High-ROAS PPC (Google & Meta)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Content & Lead Funnels
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Conversion Rate Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Brand Strategy & Identity
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5A800] mb-4">
              Company & Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Verified Case Studies
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Why Hire Gurkha
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Schedule Consultation
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-6">
              {/* LinkedIn SVG */}
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Twitter/X SVG */}
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub SVG */}
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Hire Gurkha LLC. All rights reserved. Built with precision and discipline.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#F5A800] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
