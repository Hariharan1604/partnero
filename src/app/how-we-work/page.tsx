"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Building2, ClipboardList, TrendingUp, Rocket } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const timeline = [
  { step: 1, title: "Audit Current Sales Process", desc: "We deep-dive into your existing sales workflow — CRM usage, team structure, follow-up cadence, and conversion data to identify bottlenecks.", icon: <Search className="w-8 h-8 text-primary" /> },
  { step: 2, title: "Build Workflow Systems", desc: "Design and implement structured workflows — lead assignment rules, follow-up sequences, escalation protocols, and reporting templates.", icon: <Building2 className="w-8 h-8 text-primary" /> },
  { step: 3, title: "Manage Enquiries Daily", desc: "Our operations team takes over daily lead management — calling, qualifying, scheduling site visits, and updating your CRM in real-time.", icon: <ClipboardList className="w-8 h-8 text-primary" /> },
  { step: 4, title: "Optimize Conversion", desc: "Analyze funnel data weekly, A/B test messaging, refine follow-up timing, and coach your sales team on objection handling.", icon: <TrendingUp className="w-8 h-8 text-primary" /> },
  { step: 5, title: "Scale Growth with Reporting", desc: "Comprehensive weekly and monthly reports with actionable insights — plus strategic recommendations to scale what&apos;s working.", icon: <Rocket className="w-8 h-8 text-primary" /> },
];

export default function HowWeWork() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-light-bg to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">Our Process</motion.span>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-navy mt-3">
              How We Work With Builders
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-text leading-relaxed">
              A proven 5-step framework that takes your sales operations from chaotic to systematic.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((t) => (
                <motion.div key={t.step} variants={fadeUp} className="flex gap-6 md:gap-10">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-primary text-white font-heading font-bold text-lg flex items-center justify-center shadow-lg shadow-primary/25">
                      {t.step}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 card-shadow border border-border/50 flex-1">
                    <span className="mb-4 block">{t.icon}</span>
                    <h3 className="font-heading font-semibold text-xl text-navy mb-2">{t.title}</h3>
                    <p className="text-text text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-white/60">Book a free consultation and we&apos;ll audit your current sales process.</p>
          <Link href="/contact" className="inline-block mt-8 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25">
            Start Convo
          </Link>
        </div>
      </section>
    </>
  );
}
