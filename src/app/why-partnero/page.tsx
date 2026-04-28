"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Search, Zap, BarChart, TrendingUp, Handshake } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const points = [
  { icon: <Building2 className="w-8 h-8 text-primary" />, title: "Industry-Focused Systems", desc: "Built exclusively for real estate — not generic SaaS. Every process is designed for builder sales workflows." },
  { icon: <Search className="w-8 h-8 text-primary" />, title: "Transparent Execution", desc: "Daily reports, recorded calls, and complete visibility into every action taken on your enquiries." },
  { icon: <Zap className="w-8 h-8 text-primary" />, title: "Faster Response Process", desc: "We respond to new enquiries within minutes, not hours — because speed-to-lead matters in real estate." },
  { icon: <BarChart className="w-8 h-8 text-primary" />, title: "Better Accountability", desc: "Named operators, tracked KPIs, and weekly review meetings. No black boxes." },
  { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "Higher Enquiry Conversion", desc: "Structured follow-up cadence and qualification frameworks that turn cold enquiries into site visits." },
  { icon: <Handshake className="w-8 h-8 text-primary" />, title: "Premium Builder Support", desc: "Dedicated account managers, priority support, and strategic advisory from real estate operations experts." },
];

const without = [
  "Enquiries sitting in spreadsheets",
  "Follow-ups happening randomly",
  "No clarity on conversion rates",
  "Sales team working without structure",
  "Marketing spend with no attribution",
];

const withPartnero = [
  "Every enquiry tracked in CRM",
  "Systematic follow-up within minutes",
  "Weekly conversion dashboards",
  "Structured team with clear KPIs",
  "Full campaign ROI reporting",
];

export default function WhyPartnero() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-light-bg to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">Why Partnero</motion.span>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-navy mt-3">
              Why Builders Choose Partnero
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-text leading-relaxed">
              We&apos;re not another marketing agency. We&apos;re an operations company that embeds into your sales process and takes ownership of results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all border border-border/50 hover:border-primary/20">
                <span className="mb-4 block">{p.icon}</span>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">{p.title}</h3>
                <p className="text-text text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-light-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">The Difference</span>
              <h2 className="font-heading font-bold text-3xl text-navy mt-3">Before & After Partnero</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} className="bg-white rounded-xl p-8 border border-error/20">
                <h3 className="font-heading font-semibold text-xl text-navy mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-error/10 text-error flex items-center justify-center text-sm">✕</span>
                  Without Partnero
                </h3>
                <ul className="space-y-4">
                  {without.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text text-sm">
                      <span className="text-error mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-xl p-8 border border-success/20">
                <h3 className="font-heading font-semibold text-xl text-navy mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center text-sm">✓</span>
                  With Partnero
                </h3>
                <ul className="space-y-4">
                  {withPartnero.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text text-sm">
                      <span className="text-success mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-white">See the Difference Yourself</h2>
          <p className="mt-4 text-white/60">Book a free consultation and get a personalized sales audit.</p>
          <Link href="/contact" className="inline-block mt-8 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25">
            Start Convo
          </Link>
        </div>
      </section>
    </>
  );
}
