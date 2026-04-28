"use client";

import { motion } from "framer-motion";
import { Home, CheckCircle, AlertTriangle, Users } from "lucide-react";
import SellerAppointmentForm from "@/components/SellerAppointmentForm";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const whatWeHelp = [
  "Flats & Apartments",
  "Independent Villas",
  "Independent Houses",
  "Land & Plots",
  "Resale Properties",
  "Commercial Units",
];

const howWeWork = [
  {
    step: "01",
    title: "Property Review",
    desc: "We understand your property, pricing, and target buyer profile.",
  },
  {
    step: "02",
    title: "Marketing Strategy",
    desc: "We craft a tailored listing strategy across portals and networks.",
  },
  {
    step: "03",
    title: "Buyer Handling",
    desc: "Our team qualifies enquiries, schedules visits, and guides negotiations.",
  },
  {
    step: "04",
    title: "Successful Closure",
    desc: "We assist right through to documentation and final handover.",
  },
];

export default function ForSellers() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-light-bg via-white to-primary/5" />
        <div className="absolute top-16 right-0 w-[480px] h-[480px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Home className="w-4 h-4" />
                Individual Property Sellers
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight"
            >
              Sell Your Property{" "}
              <span className="gradient-text">Smarter</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-text leading-relaxed max-w-2xl"
            >
              We help owners sell flats, villas, land, and resale properties with expert strategy, professional marketing, and guided buyer handling — so you get the right price, faster.
            </motion.p>

            {/* Disclaimer */}
            <motion.div
              variants={fadeUp}
              className="mt-8 inline-flex items-start gap-3 px-5 py-4 rounded-xl border border-amber-200 bg-amber-50"
            >
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Note:</strong> This service is for <strong>single property owners only</strong>, not builders or project developers. If you have a multi-unit project,{" "}
                <a href="/for-builders" className="underline underline-offset-2 font-medium">visit our Builders page</a>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Help You Sell */}
      <section className="py-14 md:py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">
              Property Types
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-4xl text-navy mt-3">
              We Help You Sell
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-text max-w-xl mx-auto">
              One property. Every type. Our experts know the market for each.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {whatWeHelp.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex flex-col items-center gap-2 bg-white rounded-xl py-6 px-4 text-center card-shadow border border-border/50 hover:border-primary/20 hover:card-shadow-hover transition-all duration-300 group"
              >
                <CheckCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-navy leading-snug">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Process
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-4xl text-navy mt-3">
              How We Get Your Property Sold
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {howWeWork.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="bg-white rounded-xl p-6 card-shadow border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary font-heading font-bold text-lg flex items-center justify-center mb-5">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">{step.title}</h3>
                <p className="text-text text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 md:py-24 bg-light-bg" id="book-appointment">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Book an Appointment
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl text-navy">
              Talk to Our Property Experts
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-text">
              Fill in your property details and our team will call you at your preferred time — no obligation, no pressure.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white rounded-2xl p-6 sm:p-10 card-shadow border border-border/50"
          >
            <SellerAppointmentForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
