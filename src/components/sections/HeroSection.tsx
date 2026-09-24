"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Sparkles, TrendingUp, Code2, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";

const stats = [
  { label: "Client Revenue Generated", value: "$45M+", suffix: "USD", icon: TrendingUp },
  { label: "On-Time Engineering Delivery", value: "99.4%", suffix: "Rate", icon: ShieldCheck },
  { label: "Products & Systems Built", value: "120+", suffix: "Deploys", icon: Code2 },
  { label: "Global Client Satisfaction", value: "98.7%", suffix: "NPS", icon: Award },
];

export const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#161F2C] text-white overflow-hidden hero-pattern">
      {/* Decorative Brand Geometry & Subtle Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F5A800]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#253142]/40 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-[#F5A800] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5A800] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5A800]"></span>
            </span>
            <span>Disciplined Execution: Software Engineering & Performance Growth</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] font-display"
          >
            Engineering Digital Dominance.{" "}
            <span className="block mt-2 text-[#F5A800]">
              Built for Speed & Measurable ROI.
            </span>
          </motion.h1>

          {/* Subtitle / Positioning Statement */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Hire Gurkha LLC combines rigorous custom software engineering with targeted performance marketing. We build scalable platforms and execute high-conversion campaigns that drive real revenue.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#F5A800] hover:bg-[#E59A00] text-[#161F2C] font-bold text-base shadow-xl hover:shadow-2xl hover:shadow-[#F5A800]/30 transition-all duration-200"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/15 transition-all duration-200"
            >
              <span>Explore Verified Work</span>
            </a>
          </motion.div>

          {/* Guarantee Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-400"
          >
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#F5A800]" /> 100% Dedicated Senior Talent
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#F5A800]" /> Clear Milestone Guarantees
            </span>
          </motion.div>
        </div>

        {/* High-Impact Proof Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#F5A800]/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between text-slate-400 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#F5A800]">
                    {stat.suffix}
                  </span>
                  <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-[#F5A800] transition-colors" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
