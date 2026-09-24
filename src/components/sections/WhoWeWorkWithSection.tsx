"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Building2, Globe2, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

const segments = [
  {
    icon: Rocket,
    badge: "High-Growth Startups",
    title: "Zero-to-One MVP & Speed-to-Market",
    target: "Pre-Seed to Series A Startups needing rapid execution.",
    deliverables: [
      "Rapid 6-8 week MVP Engineering Sprints",
      "Investor-Ready Tech & Architecture",
      "Initial Customer Acquisition Campaign Launch",
      "Scalable Cloud Foundation (AWS/GCP)",
    ],
    fit: "Best for teams that need senior engineering velocity without hiring full-time in-house dev teams.",
  },
  {
    icon: Building2,
    badge: "Mid-Market & SMEs",
    title: "System Modernization & Scaled Acquisition",
    target: "Established companies ($2M-$20M Revenue) seeking digital dominance.",
    deliverables: [
      "Legacy Web/Mobile App Refactoring",
      "High-ROAS Paid Ads & Organic SEO Engines",
      "Automated Workflow & ERP/CRM Integration",
      "Sub-second Website UX Optimization",
    ],
    fit: "Best for growing businesses struggling with stagnant marketing ROAS or outdated legacy software.",
  },
  {
    icon: Globe2,
    badge: "Global Enterprises",
    title: "Dedicated Engineering Units & Scale",
    target: "Enterprise organizations requiring specialized agile pods.",
    deliverables: [
      "Dedicated Full-Stack & DevOps Squads",
      "Enterprise SLA & 24/7 Monitoring",
      "Custom Microservice & API Gateways",
      "Strict SOC2 & Security Compliance",
    ],
    fit: "Best for enterprise leaders needing disciplined execution on complex, mission-critical initiatives.",
  },
];

export const WhoWeWorkWithSection = () => {
  return (
    <section className="py-24 bg-[#161F2C] text-white relative">
      <Container>
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="dark" className="mb-3">
            Tailored Engagement Models
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Who We Deliver Value For.
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            We adapt our engineering team structure and performance marketing playbooks to match your company&apos;s growth stage.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, idx) => {
            const IconComponent = segment.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#253142] rounded-2xl p-8 border border-white/10 hover:border-[#F5A800]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#161F2C] text-[#F5A800]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F5A800] bg-[#F5A800]/10 px-3 py-1 rounded-full border border-[#F5A800]/20">
                      {segment.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-[#F5A800] transition-colors">
                    {segment.title}
                  </h3>

                  <p className="text-slate-300 text-sm mb-6 font-medium">
                    {segment.target}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Core Engagement Package:
                    </span>
                    {segment.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-[#F5A800] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-slate-400 italic mb-4">
                    {segment.fit}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#F5A800] hover:text-white transition-colors"
                  >
                    <span>View {segment.badge} Strategy</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
