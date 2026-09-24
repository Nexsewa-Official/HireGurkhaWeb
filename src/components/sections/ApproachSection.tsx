"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Cpu, Layers, Activity, Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

const steps = [
  {
    number: "01",
    title: "Deep Audit & Strategic Discovery",
    duration: "Week 1",
    icon: Compass,
    summary:
      "We dissect your technical codebases, traffic bottlenecks, and market positioning before writing a single line of code or launching ads.",
    deliverables: [
      "Technical Debt & Code Audit",
      "Competitive SEO & Conversion Funnel Benchmark",
      "Defined Milestone KPIs & Sprint Roadmap",
    ],
  },
  {
    number: "02",
    title: "Architectural & Campaign Blueprinting",
    duration: "Week 2",
    icon: Cpu,
    summary:
      "Every architecture diagram, database schema, and campaign funnel is mapped for high velocity and scalability.",
    deliverables: [
      "Production-Ready System Architecture",
      "High-Converting UI/UX Design System",
      "Ad Targeting & Content Messaging Matrices",
    ],
  },
  {
    number: "03",
    title: "Precision Execution & Sprint Build",
    duration: "Weeks 3–6",
    icon: Layers,
    summary:
      "Bi-weekly sprint demos, automated unit testing, and real-time client Slack channels ensure absolute delivery transparency.",
    deliverables: [
      "Sub-second Web/Mobile App Builds",
      "Clean TypeScript & Automated CI/CD",
      "Omnichannel Campaign Launching",
    ],
  },
  {
    number: "04",
    title: "Continuous Optimization & Revenue Scale",
    duration: "Ongoing Partnership",
    icon: Activity,
    summary:
      "Post-launch telemetry, load testing, A/B ad creative iterations, and proactive system upgrades to guarantee long-term dominance.",
    deliverables: [
      "Real-time Analytics & Conversion Dashboards",
      "ROAS & CAC Optimization Sprints",
      "Proactive Security & Infrastructure Upgrades",
    ],
  },
];

export const ApproachSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="approach" className="py-24 bg-[#161F2C] text-white relative overflow-hidden">
      {/* Background Subtle Geometry */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F5A800]/5 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="dark" className="mb-3">
            The Gurkha Engineering Ethos
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Built on Discipline, Precision & Reliability.
          </h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Named in honor of world-renowned Gurkha resolve, our operating model leaves zero room for missed deadlines or bloated code. We deliver on time, under budget, and built to withstand scale.
          </p>
        </div>

        {/* Desktop & Mobile Interactive Step Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  whileHover={{ x: 4 }}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#253142] border-[#F5A800] shadow-lg shadow-[#F5A800]/10"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-sm font-extrabold font-display px-2.5 py-1 rounded ${
                          isActive
                            ? "bg-[#F5A800] text-[#161F2C]"
                            : "bg-white/10 text-slate-400"
                        }`}
                      >
                        {step.number}
                      </span>
                      <h3
                        className={`text-lg font-bold transition-colors ${
                          isActive ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <IconComponent
                      className={`w-5 h-5 ${
                        isActive ? "text-[#F5A800]" : "text-slate-500"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Step Detail Display Box */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-2xl bg-[#253142]/80 border border-white/10 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F5A800] bg-[#F5A800]/10 px-3 py-1 rounded-full border border-[#F5A800]/20">
                  Phase {steps[activeStep].number} • {steps[activeStep].duration}
                </span>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Guaranteed Deliverables
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
                {steps[activeStep].title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-8">
                {steps[activeStep].summary}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Key Sprint Outputs:
                </h4>
                {steps[activeStep].deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                    <div className="p-1 rounded-full bg-[#F5A800] text-[#161F2C]">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 flex items-center justify-between border-t border-white/10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#F5A800] hover:text-white transition-colors"
                >
                  <span>Start Phase 1 Discovery</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-2 rounded-full transition-all ${
                        activeStep === i
                          ? "w-8 bg-[#F5A800]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
