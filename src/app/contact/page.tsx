"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const contactActions = [
  {
    id: "contact-email",
    icon: Mail,
    label: "Email Us",
    value: "admin@partner-o.com",
    href: "mailto:admin@partner-o.com",
    desc: "We reply within 4 business hours",
    accent: "from-primary to-primary-dark",
  },
  {
    id: "contact-call",
    icon: Phone,
    label: "Call Us",
    value: "+91 9150889019",
    href: "tel:+919150889019",
    desc: "Mon – Sat, 9am to 7pm",
    accent: "from-navy to-navy-light",
  },
  {
    id: "contact-whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919150889019",
    desc: "Fastest way to reach us",
    accent: "from-emerald-600 to-emerald-700",
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-light-bg to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.span variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-navy mt-3">
              Let&apos;s Connect
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-text leading-relaxed">
              Reach out to the Partnero team directly — pick the channel that works best for you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Actions */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactActions.map((action) => (
              <motion.a
                key={action.id}
                id={action.id}
                href={action.href}
                target={action.href.startsWith("https") ? "_blank" : undefined}
                rel={action.href.startsWith("https") ? "noopener noreferrer" : undefined}
                variants={fadeUp}
                className={`relative overflow-hidden flex flex-col items-start gap-5 rounded-2xl bg-gradient-to-br ${action.accent} p-8 text-white group transition-transform hover:-translate-y-1 hover:shadow-xl cursor-pointer`}
              >
                {/* Blob decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <div className="relative w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <action.icon className="w-7 h-7 text-white" />
                </div>

                <div className="relative">
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">
                    {action.label}
                  </p>
                  <p className="font-heading font-bold text-xl text-white mb-1">{action.value}</p>
                  <p className="text-white/60 text-sm">{action.desc}</p>
                </div>

                <span className="relative mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 group-hover:text-white group-hover:gap-2.5 transition-all">
                  {action.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Office Address */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mt-10 flex items-start gap-5 bg-light-bg rounded-2xl p-8 border border-border/50"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-navy mb-1">Office Address</h2>
              <p className="text-text leading-relaxed">
                Partnero Real Estate Growth Operations<br />
                Chennai, Tamil Nadu, India
              </p>
              <p className="text-text/60 text-sm mt-2">
                Monday – Saturday &nbsp;·&nbsp; 9:00 AM – 7:00 PM IST
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
