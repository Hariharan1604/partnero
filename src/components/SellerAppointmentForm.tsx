"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

const propertyTypes = [
  "Flat / Apartment",
  "Villa",
  "Independent House",
  "Land / Plot",
  "Commercial Unit",
  "Resale Property",
];

const callTimes = [
  "Morning (9am – 12pm)",
  "Afternoon (12pm – 3pm)",
  "Evening (3pm – 6pm)",
  "Any Time",
];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-border/60 bg-white text-navy placeholder-text/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all";
const labelClass = "block text-sm font-medium text-navy mb-1.5";

export default function SellerAppointmentForm() {
  const [form, setForm] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    propertyType: "",
    propertyLocation: "",
    expectedPrice: "",
    preferredCallTime: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/seller-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Submission failed");
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 px-6"
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-navy mb-3">
          Appointment Booked!
        </h3>
        <p className="text-text max-w-md leading-relaxed">
          Thank you! Our team will review your property details and reach out
          during your preferred call time. We look forward to helping you sell
          smarter.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="e.g. Ramesh Kumar"
            value={form.fullName}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="mobileNumber" className={labelClass}>
            Mobile Number <span className="text-primary">*</span>
          </label>
          <input
            id="mobileNumber"
            name="mobileNumber"
            type="tel"
            placeholder="+91 9150889019"
            value={form.mobileNumber}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="sellerEmail" className={labelClass}>
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            id="sellerEmail"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Property Type */}
        <div>
          <label htmlFor="propertyType" className={labelClass}>
            Property Type <span className="text-primary">*</span>
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="" disabled>
              Select property type
            </option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Property Location */}
        <div>
          <label htmlFor="propertyLocation" className={labelClass}>
            Property Location <span className="text-primary">*</span>
          </label>
          <input
            id="propertyLocation"
            name="propertyLocation"
            type="text"
            placeholder="e.g. Anna Nagar, Chennai"
            value={form.propertyLocation}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Expected Price */}
        <div>
          <label htmlFor="expectedPrice" className={labelClass}>
            Expected Price <span className="text-primary">*</span>
          </label>
          <input
            id="expectedPrice"
            name="expectedPrice"
            type="text"
            placeholder="e.g. ₹75 Lakhs"
            value={form.expectedPrice}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      {/* Preferred Call Time */}
      <div>
        <label htmlFor="preferredCallTime" className={labelClass}>
          Preferred Call Time <span className="text-primary">*</span>
        </label>
        <select
          id="preferredCallTime"
          name="preferredCallTime"
          value={form.preferredCallTime}
          onChange={handleChange}
          required
          className={inputClass}
        >
          <option value="" disabled>
            Select preferred time
          </option>
          {callTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="sellerMessage" className={labelClass}>
          Additional Details{" "}
          <span className="text-text/50 font-normal">(Optional)</span>
        </label>
        <textarea
          id="sellerMessage"
          name="message"
          rows={4}
          placeholder="Any extra information about your property..."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 px-4 py-3 rounded-lg">
          {error}
        </p>
      )}

      <button
        id="seller-appointment-submit"
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Booking Appointment...
          </>
        ) : (
          "Book My Appointment"
        )}
      </button>
    </form>
  );
}
