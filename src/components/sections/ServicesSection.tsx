"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Smartphone,
  Cpu,
  Cloud,
  Search,
  Target,
  Share2,
  Palette,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

interface ServiceItem {
  id: string;
  pillar: "software" | "marketing";
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  tags: string[];
  kpi: string;
  kpiLabel: string;
  icon: React.ElementType;
}

const services: ServiceItem[] = [
  // Software Pillar
  {
    id: "web-dev",
    pillar: "software",
    title: "High-Performance Web Development",
    subtitle: "Speed, Security & SEO Infrastructure",
    description:
      "Modern Next.js & React web applications engineered for sub-second load speeds, bank-grade security, and seamless scale.",
    outcomes: [
      "Sub-100ms Time-to-First-Byte (TTFB)",
      "Built with Next.js App Router & TypeScript",
      "Headless CMS & API-first integration",
    ],
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    kpi: "99.99%",
    kpiLabel: "Uptime SLA",
    icon: Code,
  },
  {
    id: "mobile-dev",
    pillar: "software",
    title: "Mobile App Engineering",
    subtitle: "iOS & Android Cross-Platform Mastery",
    description:
      "Native-level performance for iOS and Android apps built with Flutter and React Native. Smooth animations, offline support, and biometrics.",
    outcomes: [
      "60 FPS smooth rendering & zero jank",
      "Biometric auth & encrypted local storage",
      "App Store & Play Store deployment pipeline",
    ],
    tags: ["Flutter", "React Native", "iOS", "Android", "Firebase"],
    kpi: "4.9 ★",
    kpiLabel: "Avg Store Rating",
    icon: Smartphone,
  },
  {
    id: "saas-custom",
    pillar: "software",
    title: "Custom SaaS & Enterprise Software",
    subtitle: "Complex Workflows & Multi-Tenant Architecture",
    description:
      "Tailor-made cloud software platforms, ERP integrations, and automated internal tools designed to eliminate operational friction.",
    outcomes: [
      "Scalable multi-tenant cloud databases",
      "Automated billing & Stripe/Paddle sync",
      "Role-based access control (RBAC)",
    ],
    tags: ["PostgreSQL", "GraphQL", "REST APIs", "Microservices", "Docker"],
    kpi: "3.5x",
    kpiLabel: "Efficiency Gain",
    icon: Cpu,
  },
  {
    id: "devops-cloud",
    pillar: "software",
    title: "Cloud Infrastructure & DevOps",
    subtitle: "AWS, GCP & Automated CI/CD Pipelines",
    description:
      "Resilient cloud architecture with automated deployments, containerization, real-time monitoring, and instant failovers.",
    outcomes: [
      "Zero-downtime continuous deployment",
      "Infrastructure as Code (Terraform)",
      "Automated cost optimization & autoscaling",
    ],
    tags: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    kpi: "65%",
    kpiLabel: "Lower Infra Costs",
    icon: Cloud,
  },

  // Marketing Pillar
  {
    id: "seo-dominance",
    pillar: "marketing",
    title: "Technical & Organic SEO Dominance",
    subtitle: "Rank Top for High-Intent Commercial Queries",
    description:
      "Data-backed SEO strategies combining technical site audits, schema architecture, and high-authority link engineering.",
    outcomes: [
      "Core Web Vitals green score optimization",
      "High-converting commercial intent keyword targeting",
      "Programmatic SEO & content scaling",
    ],
    tags: ["Technical SEO", "Schema Markup", "Content Strategy", "Ahrefs"],
    kpi: "+280%",
    kpiLabel: "Organic Traffic YoY",
    icon: Search,
  },
  {
    id: "paid-ads-ppc",
    pillar: "marketing",
    title: "High-ROAS Paid Acquisition (PPC)",
    subtitle: "Google Search, Meta & LinkedIn Ads Management",
    description:
      "Precision-targeted ad campaigns built on tight conversion tracking, rigorous A/B ad creative testing, and audience retargeting.",
    outcomes: [
      "Server-side conversion tracking setup",
      "Ad copy & landing page message matching",
      "Continuous bid optimization & fraud filtering",
    ],
    tags: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4 Analytics"],
    kpi: "4.2x",
    kpiLabel: "Average Campaign ROAS",
    icon: Target,
  },
  {
    id: "social-content",
    pillar: "marketing",
    title: "Content Engineering & Social Growth",
    subtitle: "Authority Building & Lead Magnet Funnels",
    description:
      "Strategic content assets that position your brand as the industry leader and consistently attract qualified inbound leads.",
    outcomes: [
      "Long-form thought leadership & whitepapers",
      "Multi-channel content repurposing engine",
      "Automated email lead nurturing sequences",
    ],
    tags: ["Content Writing", "Copywriting", "Email Automation", "Brand Assets"],
    kpi: "3.8x",
    kpiLabel: "Inbound Pipeline Growth",
    icon: Share2,
  },
  {
    id: "brand-identity",
    pillar: "marketing",
    title: "Strategic Branding & CRO Design",
    subtitle: "Conversion-Focused UI/UX & Visual Identity",
    description:
      "Visual identity and website UX designed specifically to turn first-time visitors into paying clients and retained partners.",
    outcomes: [
      "High-converting landing page design",
      "Comprehensive visual brand guidelines",
      "Frictionless checkout & booking flows",
    ],
    tags: ["Figma UX/UI", "Brand System", "Conversion Rate Optimization"],
    kpi: "+45%",
    kpiLabel: "Checkout Conversion",
    icon: Palette,
  },
];

export const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "software" | "marketing">("all");

  const filteredServices = services.filter(
    (s) => activeFilter === "all" || s.pillar === activeFilter
  );

  return (
    <section id="services" className="py-24 bg-[#F8FAFC] text-[#0F172A] relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Badge variant="gold" className="mb-3">
              Dual Operational Pillars
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#161F2C] font-display">
              Outcome-Driven Services.
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-xl">
              We don&apos;t sell fluff or hours. We engineer software systems and execute growth marketing designed strictly to increase enterprise value.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex p-1.5 rounded-xl bg-slate-200/80 border border-slate-300">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeFilter === "all"
                  ? "bg-[#161F2C] text-white shadow-sm"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              All Services ({services.length})
            </button>
            <button
              onClick={() => setActiveFilter("software")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeFilter === "software"
                  ? "bg-[#161F2C] text-[#F5A800] shadow-sm"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Software Engineering
            </button>
            <button
              onClick={() => setActiveFilter("marketing")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeFilter === "marketing"
                  ? "bg-[#161F2C] text-[#F5A800] shadow-sm"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Digital Growth & Marketing
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={service.id}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#F5A800]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Accent Corner Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#161F2C] group-hover:bg-[#F5A800] transition-colors" />

                  <div>
                    {/* Header line */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="p-3.5 rounded-xl bg-[#161F2C] text-[#F5A800] shadow-md group-hover:scale-105 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-[#161F2C] font-display">
                          {service.kpi}
                        </div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {service.kpiLabel}
                        </div>
                      </div>
                    </div>

                    {/* Subtitle Badge */}
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B87C00] mb-2 block">
                      {service.subtitle}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#161F2C] mb-3 group-hover:text-[#D98F00] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                      {service.description}
                    </p>

                    {/* Outcomes List */}
                    <div className="space-y-2.5 mb-8">
                      {service.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#F5A800] shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA link */}
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#161F2C] hover:text-[#D98F00] transition-colors group/link"
                    >
                      <span>Discuss {service.title}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};
