# Hire Gurkha LLC — Corporate Website Implementation Plan

## Overview
A high-converting, proof-driven single-page application (SPA) built with Next.js 14+ (App Router, TypeScript, Tailwind CSS v4, Framer Motion) for Hire Gurkha LLC. The design reflects precision, authority, and reliability through custom typography, asymmetric layouts, and exact logo color extraction.

---

## Todo Checklist

### Phase 1: Foundation & Design System Setup
- [x] Initialize Next.js 16 App Router with TypeScript & Tailwind CSS v4
- [x] Install core dependencies (`framer-motion`, `lucide-react`, `lenis`, `clsx`, `tailwind-merge`)
- [x] Configure custom typography (`Plus Jakarta Sans` & `Space Grotesk` via `next/font`)
- [x] Define brand color tokens extracted directly from Hire Gurkha logo:
  - `--brand-navy`: `#161F2C` (Primary Charcoal/Dark Slate)
  - `--brand-navy-light`: `#253142`
  - `--brand-gold`: `#F5A800` (Warm Gold/Amber Primary Accent)
  - `--brand-gold-dark`: `#D98F00`
  - `--brand-bg-offwhite`: `#F8FAFC`
  - `--brand-card`: `#FFFFFF`
- [x] Create reusable UI components (Button, Badge, Card, Container)

### Phase 2: Core Components & Navigation
- [x] Recreate high-precision vector Hire Gurkha Logo component (with signature 'G' arrow and amber 'i' accent block)
- [x] Implement Sticky Navigation Bar:
  - Anchor link indicator for `#services`, `#approach`, `#work`, `#about`, `#contact`
  - "Book a Call" CTA button with hover micro-animation
  - Responsive Mobile Navigation Drawer with backdrop blur

### Phase 3: Hero & Stats Section
- [x] Build high-impact Hero Section:
  - Punchy, proof-driven headline: "Engineering Digital Dominance: High-Velocity Software & Data-Driven Marketing"
  - Staggered entrance animation using Framer Motion
  - Dual expertise pills (Software Engineering + Digital Marketing)
  - Primary CTA ("Schedule Strategy Call") and Secondary CTA ("Explore Verified Work")
- [x] Build Proof-Driven Stats Strip ($45M+ Client Revenue, 99.4% On-Time Delivery, 120+ Products Delivered, 98.7% NPS)

### Phase 4: Services Section (Two Dual Pillars)
- [x] Create interactive dual-pillar layout:
  - **Pillar 1: Software Development & Engineering** (Web Apps, Mobile Apps, Custom SaaS, Cloud & DevOps)
  - **Pillar 2: Digital Marketing & Growth** (SEO Dominance, High-ROAS PPC, Content Engineering, Performance Branding)
- [x] Outcome-driven service cards with concrete KPIs, technology tags, and interactive pillar switcher

### Phase 5: Approach & Ethos ("How We Work")
- [x] Implement 4-step framework anchored in Gurkha principles (Discipline, Precision, Reliability):
  1. Discovery & Deep Audit
  2. Architecture & Strategic Blueprint
  3. Precision Build & Rapid Deployment
  4. Continuous Optimization & Scale
- [x] Interactive step progression UI with scroll-linked highlights

### Phase 6: Proof & Case Studies
- [x] Build Case Studies Showcase (3 outcome-focused real-world scenarios):
  - FinTech MVP to Series A Platform ($14.2M ARR Scaled)
  - Global E-Commerce Omnichannel Growth (4.4x ROAS)
  - Healthcare Telehealth Mobile App (450k+ Active Users)
- [x] Visual metric badges, challenge/solution breakdowns, and tech stack tags

### Phase 7: Target Client Segments & Differentiators
- [x] Create "Who We Work With" section (Startups, SMEs, Enterprises)
- [x] Build "Why Hire Gurkha" section featuring an honest "Good Fit vs Not a Fit" comparison matrix

### Phase 8: Testimonials & Social Proof
- [x] Interactive Client Testimonial Carousel / Proof Grid with verified ratings and impact figures

### Phase 9: Contact & Consultation Section
- [x] Build functional interactive Contact Form with field validation & instant status response
- [x] Direct contact details (Email, Phone, HQ, 24h Response Time SLA)

### Phase 10: Footer & Smooth Scrolling
- [x] Build comprehensive Footer with sitemap links, social icons, and live availability badge
- [x] Integrate Smooth Scroll (native CSS & Lenis support) for anchor navigation and micro-animations fine-tuning

### Phase 11: QA, Responsiveness & Performance
- [x] Test across device breakpoints (Mobile 375px, Tablet 768px, Laptop 1024px, Desktop 1440px, Ultra-wide 1920px)
- [x] Audit accessibility, meta SEO tags, and animation performance (`prefers-reduced-motion`)
- [x] Verified zero-error production build (`npm run build`)
