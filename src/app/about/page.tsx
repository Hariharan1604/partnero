"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, ClipboardList, Laptop, Rocket } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const values = [
  { icon: Users, title: "People", desc: "Trained telecallers, sales managers, and CRM operators dedicated to your projects." },
  { icon: ClipboardList, title: "Process", desc: "Proven frameworks for lead tracking, follow-ups, and conversion workflows." },
  { icon: Laptop, title: "Technology", desc: "CRM tools, automation, analytics dashboards, and communication platforms." },
  { icon: Rocket, title: "Execution", desc: "Daily operations management — calls, follow-ups, site visits, and reporting." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-gradient-to-br from-light-bg to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">About Partnero</motion.span>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-navy mt-3">
              We Build Sales Systems for Real Estate
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-text leading-relaxed">
              Partnero is a real estate growth operations company. We don&apos;t generate random leads — we manage and convert the builder&apos;s existing enquiries into revenue through systems, strategy, technology, and execution.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">Our Mission</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl text-navy mt-3">
                Helping Builders Scale Sales Professionally
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-text leading-relaxed">
                Most builders have enquiries but lack systems to convert them. Sales teams are unstructured, follow-ups are missed, and there&apos;s no accountability on conversions.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 text-text leading-relaxed">
                Partnero exists to fix this. We bring structure, technology, and disciplined execution to builder sales teams — so every enquiry gets the attention it deserves.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
              <p className="font-heading font-bold text-5xl text-navy mb-4">&ldquo;</p>
              <p className="text-navy text-lg italic leading-relaxed">
                We don&apos;t just consult. We embed ourselves into your sales operation and run it like our own business.
              </p>
              <p className="mt-6 text-primary font-semibold">— Partnero Team</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* People + Process + Tech + Execution */}
      <section className="py-16 md:py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12 md:mb-16">
            <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">Our Philosophy</motion.span>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-4xl text-navy mt-3">
              Four Pillars of Growth
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="bg-white rounded-xl p-8 card-shadow text-center hover:card-shadow-hover transition-all border border-border/50">
                <span className="mb-4 flex justify-center text-primary"><v.icon className="w-10 h-10" /></span>
                <h3 className="font-heading font-semibold text-xl text-navy mb-2">{v.title}</h3>
                <p className="text-text text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-white">Want to Know More?</h2>
          <p className="mt-4 text-white/60">Talk to our growth team and see how we can help you scale.</p>
          <Link href="/contact" className="inline-block mt-8 w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25">
            Start Convo
          </Link>
        </div>
      </section>
    </>
  );
}
