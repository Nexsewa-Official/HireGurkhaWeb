"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    servicePillar: "both",
    budget: "$10k - $25k",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit consultation request.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC] text-[#0F172A] relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & SLA */}
          <div className="lg:col-span-5">
            <Badge variant="gold" className="mb-3">
              Direct Access & SLA Guarantee
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#161F2C] font-display">
              Let&apos;s Build & Scale Your Product.
            </h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Schedule a technical strategy call with our engineering leadership or request a preliminary quote. We reply within 24 hours with zero fluff.
            </p>

            {/* Direct Details Box */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 rounded-lg bg-[#161F2C] text-[#F5A800]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Email
                  </div>
                  <a
                    href="mailto:contact@hiregurkha.com"
                    className="text-base font-bold text-[#161F2C] hover:text-[#D98F00] transition-colors"
                  >
                    contact@hiregurkha.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 rounded-lg bg-[#161F2C] text-[#F5A800]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Line
                  </div>
                  <a
                    href="tel:+18005554875"
                    className="text-base font-bold text-[#161F2C] hover:text-[#D98F00] transition-colors"
                  >
                    +1 (800) 555-GURKHA
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 rounded-lg bg-[#161F2C] text-[#F5A800]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Response Time SLA
                  </div>
                  <div className="text-base font-bold text-[#161F2C]">
                    Under 24 Hours (Guaranteed)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 rounded-lg bg-[#161F2C] text-[#F5A800]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Corporate Headquarters
                  </div>
                  <div className="text-base font-bold text-[#161F2C]">
                    Hire Gurkha LLC, United States
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#F5A800]" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#161F2C] font-display">
                    Strategy Session Requested!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Our senior strategy lead will review your project brief and reply within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        servicePillar: "both",
                        budget: "$10k - $25k",
                        message: "",
                      });
                    }}
                    className="mt-4"
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[#161F2C] font-display">
                      Book Free Consultation
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">
                      * All details kept strictly confidential
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600 font-semibold mb-4">
                      {errorMessage}
                    </div>
                  )}

                  {/* Primary Service Toggle */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Which Service Area Do You Need?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "software", label: "Software Dev" },
                        { id: "marketing", label: "Digital Growth" },
                        { id: "both", label: "Both (Full Suite)" },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setFormData({ ...formData, servicePillar: item.id })}
                          className={`py-3 px-3 rounded-lg text-xs font-bold border transition-all ${formData.servicePillar === item.id
                              ? "bg-[#161F2C] text-[#F5A800] border-[#161F2C] shadow-md"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F5A800] text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F5A800] text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F5A800] text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F5A800] text-sm text-slate-800 bg-white"
                      >
                        <option value="< $10k">&lt; $10,000</option>
                        <option value="$10k - $25k">$10,000 – $25,000</option>
                        <option value="$25k - $50k">$25,000 – $50,000</option>
                        <option value="$50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Objectives & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your product goals, technical stack, target timelines, or marketing targets..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F5A800] text-sm text-slate-800"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    fullWidth
                  >
                    <span>Request Strategy Consultation</span>
                    <Send className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> NDA Available
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-4 h-4 text-[#F5A800]" /> 100% Free Initial Assessment
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
