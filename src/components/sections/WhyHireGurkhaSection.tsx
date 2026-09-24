"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Shield, Zap, Target, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

const goodFits = [
  "You need engineering teams that hit tight sprint milestones without hand-holding.",
  "You value clear ROI metrics, high conversion rates, and sub-second page performance.",
  "You require senior developers & marketers who communicate with total transparency.",
  "You are looking for long-term strategic partners, not temporary order-takers.",
  "You want fixed milestone commitments backed by SLA guarantees.",
];

const badFits = [
  "You are looking for the absolute cheapest offshore bid regardless of code quality.",
  "You prefer vague 'vanity' marketing metrics like impressions over revenue.",
  "You expect full enterprise software built in 3 days without discovery.",
  "You do not have a budget allocated for serious marketing scaling or code architecture.",
];

export const WhyHireGurkhaSection = () => {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC] text-[#0F172A] relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-3">
            Honest Qualification
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#161F2C] font-display">
            Are We The Right Fit For You?
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            We protect our reputation and your investment by ensuring alignment before accepting any project contract.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* We Are A Great Fit If */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-emerald-500/30 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-[#161F2C] font-display">
                  We Are A Great Fit If...
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                {goodFits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded bg-emerald-100 text-emerald-700 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 bg-emerald-50/50 -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-6 rounded-b-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Core Promise: High Velocity + Bulletproof Code Quality
              </span>
            </div>
          </motion.div>

          {/* We Are NOT A Fit If */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-full bg-red-500/20 text-red-400">
                  <X className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  We Are NOT A Fit If...
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                {badFits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded bg-red-500/20 text-red-400 shrink-0">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 bg-white/5 -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-6 rounded-b-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Philosophy: We only take projects where we can deliver 5x+ ROI value
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
