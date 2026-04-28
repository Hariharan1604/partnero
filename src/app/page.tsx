"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  TrendingUp,
  BarChart3,
  RefreshCcw,
  Target,
  PhoneCall,
  Settings,
  Megaphone,
  Building2,
  Home as HomeIcon,
  ArrowRight,
} from "lucide-react";

const stats = [
  { label: "Faster Follow-ups", value: "3×", icon: Zap },
  { label: "Better Conversion Rates", value: "40%", icon: TrendingUp },
  { label: "Transparent Reporting", value: "100%", icon: BarChart3 },
  { label: "Sales Process Optimization", value: "360°", icon: RefreshCcw },
];

const services = [
  { title: "Lead Management", desc: "Capture, organize, and track every enquiry from first contact to final booking.", icon: Target },
  { title: "Sales Support", desc: "Dedicated telecallers and sales process managers to handle your pipeline daily.", icon: PhoneCall },
  { title: "CRM Setup", desc: "Configure and manage CRM tools tailored for your real estate workflow.", icon: Settings },
  { title: "Marketing Operations", desc: "Execute campaigns, manage budgets, and track performance across channels.", icon: Megaphone },
  { title: "Analytics Reporting", desc: "Real-time dashboards and weekly reports to measure what matters.", icon: BarChart3 },
];

const steps = [
  { title: "Audit", desc: "We analyze your current sales process and identify gaps." },
  { title: "Build", desc: "We design workflow systems tailored to your projects." },
  { title: "Execute", desc: "We manage enquiries, follow-ups, and conversions daily." },
];

const whoWeHelp = [
  {
    icon: Building2,
    tag: "Builders & Developers",
    headline: "For Project Sales at Scale",
    desc: "Manage project enquiries, improve conversions, and grow bookings across apartments, villas, plotted developments, and multiple units.",
    cta: "For Builders / Developers",
    href: "/for-builders",
    accent: "from-navy to-navy-light",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    icon: HomeIcon,
    tag: "Individual Property Sellers",
    headline: "Sell Your Single Property",
    desc: "Sell your flat, villa, land, independent house, or commercial unit with expert strategy, marketing, and guided buyer handling.",
    cta: "Sell My Property",
    href: "/for-sellers",
    accent: "from-primary to-primary-dark",
    tagColor: "bg-white/20 text-white",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light-bg via-white to-primary/5" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-16 md:pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Real Estate Sales Systems — For Builders &amp; Individual Sellers
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight"
            >
              Real Estate Sales Systems{" "}
              <span className="gradient-text">That Drive Growth</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-text leading-relaxed max-w-2xl"
            >
              Whether you&apos;re a builder managing a large project or an owner
              selling a single property — we have the right system for you.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                id="hero-cta-builders"
                href="/for-builders"
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                For Builders
              </Link>
              <Link
                id="hero-cta-sellers"
                href="/for-sellers"
                className="w-full sm:w-auto text-center px-8 py-3.5 border-2 border-navy/10 hover:border-primary text-navy font-semibold rounded-lg transition-all hover:bg-primary/5"
              >
                Sell My Property
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 md:py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">
              Who We Help
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-4xl text-navy mt-3">
              Two Paths. One Trusted Partner.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-text max-w-2xl mx-auto">
              Partnero works with both large-scale builders and individual property owners — each with a dedicated service track designed for their needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {whoWeHelp.map((card) => (
              <motion.div
                key={card.tag}
                variants={fadeUp}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.accent} p-8 sm:p-10 text-white group`}
              >
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />

                <div className="relative">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 ${card.tagColor}`}>
                    <card.icon className="w-3.5 h-3.5" />
                    {card.tag}
                  </span>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-white">
                    {card.headline}
                  </h3>
                  <p className="text-white/75 leading-relaxed mb-8 text-sm sm:text-base">
                    {card.desc}
                  </p>

                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold text-sm transition-all group-hover:gap-3"
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <span className="mb-4 flex justify-center text-white"><s.icon className="w-8 h-8" /></span>
                <p className="text-2xl sm:text-3xl font-heading font-bold text-white">{s.value}</p>
                <p className="text-white/60 text-xs sm:text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">
              What We Do
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-4xl text-navy mt-3">
              End-to-End Sales Operations
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-text max-w-2xl mx-auto">
              From lead capture to final booking — we manage every step of the sales pipeline so you can focus on what matters most.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-primary/20 group"
              >
                <span className="mb-4 block text-primary group-hover:scale-110 transition-transform"><s.icon className="w-8 h-8" /></span>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">{s.title}</h3>
                <p className="text-text text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Preview */}
      <section className="py-16 md:py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <div className="text-center mb-16">
              <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">
                Our Process
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-4xl text-navy mt-3">
                Simple. Systematic. Scalable.
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s, i) => (
                <motion.div key={s.title} variants={fadeUp} className="relative text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary font-heading font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-navy mb-2">{s.title}</h3>
                  <p className="text-text text-sm">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-border" />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                See Full Process
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-navy to-navy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-4xl text-white">
              Ready to Make Your Move?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
              Whether you&apos;re a builder scaling a project or an owner ready to sell — Partnero is your growth partner.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                id="cta-for-builders"
                href="/for-builders"
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                For Builders
              </Link>
              <Link
                id="cta-sell-property"
                href="/for-sellers"
                className="w-full sm:w-auto text-center px-8 py-3.5 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all"
              >
                Sell My Property
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
