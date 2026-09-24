"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  highlight: string;
  pillar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Hire Gurkha rebuilt our legacy payment processing frontend in 6 weeks flat. The code quality, speed, and communication were unmatched. Our conversion rate instantly jumped 38%.",
    author: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Pay Solutions",
    rating: 5,
    highlight: "+38% Checkout Conversion",
    pillar: "Software Engineering",
  },
  {
    quote:
      "Unlike previous agencies who gave us empty reports, Hire Gurkha scaled our Google Search PPC and Meta ads to a consistent 4.4x ROAS while cutting our customer acquisition cost in half.",
    author: "Elena Rostova",
    role: "VP of Growth & Marketing",
    company: "Luminary Goods Co.",
    rating: 5,
    highlight: "4.4x ROAS Scaled",
    pillar: "Digital Marketing",
  },
  {
    quote:
      "The Gurkha team launched our iOS and Android Telehealth apps simultaneously with zero security vulnerabilities. They are our go-to engineering partner for complex cloud initiatives.",
    author: "Dr. Aris Thorne",
    role: "Founder & CEO",
    company: "Veda Health Tech",
    rating: 5,
    highlight: "450k+ Active Mobile Users",
    pillar: "Mobile Engineering",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#161F2C] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A800]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Badge variant="dark" className="mb-3">
              Verified Client Endorsements
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
              What Founders & CTOs Say.
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-xl bg-[#253142] hover:bg-[#35445A] text-white transition-colors border border-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-xl bg-[#253142] hover:bg-[#35445A] text-white transition-colors border border-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-2xl bg-[#253142]/90 border border-white/10 relative overflow-hidden"
            >
              <Quote className="w-16 h-16 text-[#F5A800]/15 absolute top-6 right-6 pointer-events-none" />

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F5A800] text-[#F5A800]" />
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5A800] bg-[#F5A800]/10 px-3 py-1 rounded-full border border-[#F5A800]/20">
                  {testimonials[currentIndex].highlight}
                </span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-8 font-sans">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <div className="text-lg font-bold text-white font-display">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-slate-300 font-medium">
                    {testimonials[currentIndex].role} —{" "}
                    <span className="text-[#F5A800]">
                      {testimonials[currentIndex].company}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-4 h-4 text-[#F5A800]" />
                  <span>Verified Engagement</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};
