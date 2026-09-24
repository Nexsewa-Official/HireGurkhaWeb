"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  metric: string;
  metricLabel: string;
  title: string;
  challenge: string;
  solution: string;
  impacts: string[];
  techStack: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "fintech-saas",
    client: "Apex Pay Solutions",
    industry: "Fintech & Payments",
    metric: "$14.2M",
    metricLabel: "ARR Scaled in 12 Months",
    title: "Re-Engineering Legacy Core to Multi-Tenant Next.js Microservices",
    challenge:
      "Legacy monolithic infrastructure was suffering from 4.2-second page render times, weekly API downtime during peak transaction volume, and poor Google organic visibility.",
    solution:
      "Hire Gurkha rebuilt the core dashboard in Next.js App Router, migrated billing API to AWS ECS, and implemented technical programmatic SEO.",
    impacts: [
      "Render time dropped from 4.2s to 120ms",
      "API Uptime achieved 99.99% SLA across 4M daily calls",
      "Organic B2B lead acquisition grew by 320% in 6 months",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "AWS ECS", "PostgreSQL"],
  },
  {
    id: "ecom-growth",
    client: "Luminary Goods Co.",
    industry: "E-Commerce & Retail",
    metric: "4.4x",
    metricLabel: "Blended Return on Ad Spend (ROAS)",
    title: "Omnichannel Paid Media & Conversion Rate Overhaul",
    challenge:
      "Stagnant paid social ROAS (1.3x), high customer acquisition cost ($84/customer), and 72% cart abandonment rate on Shopify store.",
    solution:
      "Deployed high-intent Google Search PPC, retargeting funnels, and optimized checkout UX with server-side conversion tracking (CAPI).",
    impacts: [
      "Customer Acquisition Cost (CAC) reduced by 48%",
      "Checkout conversion rate boosted from 1.8% to 4.1%",
      "Scaled monthly ad budget 5x profitably",
    ],
    techStack: ["Google Ads", "Meta CAPI", "Shopify Plus", "GA4", "Klaviyo"],
  },
  {
    id: "healthtech-mobile",
    client: "Veda Health Tech",
    industry: "Healthcare & MedTech",
    metric: "450k+",
    metricLabel: "Active Monthly Mobile Users",
    title: "Cross-Platform HIPAA-Compliant Telehealth App",
    challenge:
      "Required a unified iOS & Android application with HIPAA encryption, live video consultations, and offline electronic health record (EHR) sync.",
    solution:
      "Engineered a cross-platform Flutter mobile app backed by secure AWS WebSockets and WebRTC video integration.",
    impacts: [
      "Shipped both iOS & Android apps in under 14 weeks",
      "Achieved 4.9 star rating across 8,000+ app store reviews",
      "Zero data security compliance violations",
    ],
    techStack: ["Flutter", "WebRTC", "AWS Lambda", "GraphQL", "DynamoDB"],
  },
];

export const ProofSection = () => {
  return (
    <section id="work" className="py-24 bg-[#F8FAFC] text-[#0F172A] relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Badge variant="gold" className="mb-3">
              Verified Case Studies
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#161F2C] font-display">
              Proof Over Promises.
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-xl">
              Real results delivered for real companies. Here is how our dual discipline of engineering and performance marketing moves the needle.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#161F2C] text-white hover:bg-[#253142] font-semibold text-sm transition-all"
          >
            <span>Request Full Portfolio PDF</span>
            <ArrowUpRight className="w-4 h-4 text-[#F5A800]" />
          </a>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column: Metric & Branding */}
              <div className="lg:col-span-4 bg-[#161F2C] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5A800]/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F5A800] bg-[#F5A800]/10 px-3 py-1 rounded-full border border-[#F5A800]/20">
                      {study.industry}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-400">
                    {study.client}
                  </h4>
                </div>

                <div className="my-8">
                  <div className="text-4xl sm:text-5xl font-black text-[#F5A800] font-display tracking-tight">
                    {study.metric}
                  </div>
                  <div className="text-sm font-semibold text-slate-300 mt-1">
                    {study.metricLabel}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-6 border-t border-white/10">
                  {study.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-white/10 text-slate-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Challenge, Solution, Impact */}
              <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#161F2C] mb-6 font-display">
                    {study.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {/* Challenge */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-2">
                        <ShieldAlert className="w-4 h-4" />
                        <span>The Bottleneck</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#B87C00] uppercase tracking-wider mb-2">
                        <Cpu className="w-4 h-4" />
                        <span>The Gurkha Solution</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact Points */}
                  <div className="space-y-3 mb-8">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Verified Impact Breakdown:
                    </h5>
                    {study.impacts.map((impact, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                        <TrendingUp className="w-4 h-4 text-[#F5A800] shrink-0" />
                        <span>{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer link */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Full architectural case study available on request.
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#161F2C] hover:text-[#D98F00] transition-colors"
                  >
                    <span>Achieve Similar Results</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
