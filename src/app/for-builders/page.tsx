"use client";

import { motion } from "framer-motion";
import BuilderEnquiryForm from "@/components/BuilderEnquiryForm";
import { XCircle, Clock, TrendingDown, FileX, AlertCircle, Settings, Home, BarChart, Handshake, Rocket } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const problems = [
  { icon: XCircle, text: "Missed enquiries" },
  { icon: Clock, text: "Slow follow-ups" },
  { icon: TrendingDown, text: "Weak conversion" },
  { icon: FileX, text: "Poor reporting" },
  { icon: AlertCircle, text: "Team inefficiency" },
];

const benefits = [
  { icon: Settings, text: "Better systems" },
  { icon: Home, text: "More bookings" },
  { icon: BarChart, text: "Clear processes" },
  { icon: Handshake, text: "Dedicated support" },
  { icon: Rocket, text: "Growth-focused execution" },
];

export default function ForBuilders() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-gradient-to-br from-light-bg to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">For Builders / Developers</motion.span>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-navy mt-3">
              Built for Builders &amp; Developers Who Want Better Sales Results
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-text leading-relaxed">
              We help builders and project developers manage project enquiries, improve follow-ups, run marketing operations, and convert more buyers into bookings — across apartments, villas, and plotted developments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Problems + Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Problems */}
            <motion.div variants={fadeUp} className="bg-white rounded-xl p-8 card-shadow border border-border/50">
              <h2 className="font-heading font-semibold text-2xl text-navy mb-6">Problems We Solve</h2>
              <ul className="space-y-4">
                {problems.map((p) => (
                  <li key={p.text} className="flex items-center gap-3 text-text">
                    <span className="text-error flex shrink-0"><p.icon className="w-5 h-5" /></span>
                    <span>{p.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Benefits */}
            <motion.div variants={fadeUp} className="bg-white rounded-xl p-8 card-shadow border border-border/50">
              <h2 className="font-heading font-semibold text-2xl text-navy mb-6">What You Get</h2>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b.text} className="flex items-center gap-3 text-text">
                    <span className="text-success flex shrink-0"><b.icon className="w-5 h-5" /></span>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Builder Enquiry Form */}
      <section className="py-16 md:py-24 bg-light-bg" id="apply">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">Apply for Partnership</motion.span>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl text-navy mt-3">
              Partner With Partnero
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-text">
              Fill in your details and our growth team will reach out within 24 hours.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-6 sm:p-8 card-shadow border border-border/50">
            <BuilderEnquiryForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
