"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Home, ArrowRight, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/why-partnero", label: "Why Partnero" },
  { href: "/for-builders", label: "For Builders" },
  { href: "/for-sellers", label: "For Sellers" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  const handleRouteChoice = (path: string) => {
    setShowModal(false);
    setMobileOpen(false);
    router.push(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-dark shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span
              className={`font-heading font-bold text-xl transition-colors ${
                scrolled ? "text-white" : "text-navy"
              }`}
            >
              Partnero
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10 ${
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-text hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              id="start-convo-desktop"
              onClick={() => setShowModal(true)}
              className="ml-4 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
            >
              Start Convo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-white" : "bg-navy"
              } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-white" : "bg-navy"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-white" : "bg-navy"
              } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-navy z-50 p-6 lg:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-heading font-bold text-xl text-white">
                  Partnero
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/60 hover:text-white text-2xl"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  id="start-convo-mobile"
                  onClick={() => setShowModal(true)}
                  className="mt-4 px-5 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg text-center transition-all cursor-pointer"
                >
                  Start Convo
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* "Are you a Builder or Seller?" Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4">
                  <div>
                    <h2 className="font-heading font-bold text-xl text-navy">
                      How can we help you?
                    </h2>
                    <p className="text-text text-sm mt-1">
                      Select the option that best describes you.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-8 h-8 rounded-full bg-light-bg hover:bg-border/50 flex items-center justify-center text-text hover:text-navy transition-colors"
                    aria-label="Close dialog"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Options */}
                <div className="px-6 pb-6 space-y-3">
                  {/* Builder option */}
                  <button
                    id="modal-builder-option"
                    onClick={() => handleRouteChoice("/for-builders")}
                    className="w-full flex items-start gap-4 p-5 rounded-xl border-2 border-border/50 hover:border-primary bg-light-bg/50 hover:bg-primary/5 transition-all group text-left cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Building2 className="w-6 h-6 text-navy group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading font-semibold text-navy text-base">
                          I&apos;m a Builder / Developer
                        </h3>
                        <ArrowRight className="w-4 h-4 text-text/40 group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-text text-sm mt-1 leading-relaxed">
                        I sell apartments, villas, plots, or manage multi-unit real estate projects and need help with lead management, sales support, and conversions.
                      </p>
                    </div>
                  </button>

                  {/* Seller option */}
                  <button
                    id="modal-seller-option"
                    onClick={() => handleRouteChoice("/for-sellers")}
                    className="w-full flex items-start gap-4 p-5 rounded-xl border-2 border-border/50 hover:border-primary bg-light-bg/50 hover:bg-primary/5 transition-all group text-left cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Home className="w-6 h-6 text-navy group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading font-semibold text-navy text-base">
                          I Want to Sell My Property
                        </h3>
                        <ArrowRight className="w-4 h-4 text-text/40 group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-text text-sm mt-1 leading-relaxed">
                        I own a single flat, villa, land, independent house, or commercial unit and need expert help to sell it at the right price.
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
