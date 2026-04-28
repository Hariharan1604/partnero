"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Settings, PhoneCall, Repeat, Megaphone, TrendingUp, BarChart, HardHat } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const allServices = [
  { icon: <Target className="w-8 h-8 text-primary" />, title: "Lead Management", desc: "Capture, organize, and prioritize every enquiry. No lead falls through the cracks with our systematic tracking and assignment process." },
  { icon: <Settings className="w-8 h-8 text-primary" />, title: "CRM Operations", desc: "We set up and manage CRM platforms tailored for real estate — tracking pipelines, stages, and every customer interaction." },
  { icon: <PhoneCall className="w-8 h-8 text-primary" />, title: "Sales Team Support", desc: "Dedicated telecallers and sales managers who handle your pipeline daily — calling, qualifying, and scheduling site visits." },
  { icon: <Repeat className="w-8 h-8 text-primary" />, title: "Customer Follow-up Systems", desc: "Structured follow-up sequences via calls, WhatsApp, and email — ensuring no enquiry goes cold." },
  { icon: <Megaphone className="w-8 h-8 text-primary" />, title: "Marketing Campaign Execution", desc: "End-to-end campaign management — from ad setup to lead attribution, budget tracking, and performance reporting." },
  { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "Booking Funnel Optimization", desc: "Analyze and optimize every step from enquiry to site visit to booking — reducing drop-offs at each stage." },
  { icon: <BarChart className="w-8 h-8 text-primary" />, title: "Reporting Dashboards", desc: "Weekly and monthly reports with clear metrics — enquiries, follow-ups, site visits, bookings, and conversion rates." },
  { icon: <HardHat className="w-8 h-8 text-primary" />, title: "Builder Consulting", desc: "Strategic advisory on sales team structure, pricing strategy, project positioning, and market-ready launch planning." },
];

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-light-bg to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</motion.span>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-navy mt-3">
              Everything You Need to Scale Real Estate Sales
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-text leading-relaxed">
              Partnero combines people, process, technology, and execution to help builders scale sales professionally.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allServices.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-primary/20 group">
                <span className="mb-4 block group-hover:scale-110 transition-transform">{s.icon}</span>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">{s.title}</h3>
                <p className="text-text text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-white">Need a Custom Solution?</h2>
          <p className="mt-4 text-white/60">Every builder is different. Let&apos;s discuss what works best for your projects.</p>
          <Link href="/contact" className="inline-block mt-8 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25">
            Start Convo
          </Link>
        </div>
      </section>
    </>
  );
}
