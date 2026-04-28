"use client";

import { useState } from "react";

interface FormData {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  projects: string;
  monthlyEnquiries: string;
  teamSize: string;
  message: string;
}

const initial: FormData = {
  companyName: "", contactPerson: "", phone: "", email: "",
  city: "", projects: "", monthlyEnquiries: "", teamSize: "", message: "",
};

export default function BuilderEnquiryForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.companyName) e.companyName = "Required";
    if (!form.contactPerson) e.contactPerson = "Required";
    if (!form.phone || form.phone.length < 10) e.phone = "Valid phone required";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.city) e.city = "Required";
    if (!form.projects) e.projects = "Required";
    if (!form.monthlyEnquiries) e.monthlyEnquiries = "Required";
    if (!form.teamSize) e.teamSize = "Required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    try {
      const res = await fetch("/api/builder-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setSuccess(true); setForm(initial); }
      else setErrors({ submit: "Something went wrong." });
    } catch { setErrors({ submit: "Network error. Try again." }); }
    finally { setLoading(false); }
  };

  const ic = (f: string) =>
    `w-full px-4 py-3 rounded-lg border ${errors[f] ? "border-error" : "border-border"} bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`;

  if (success) {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="font-heading font-bold text-2xl text-navy mb-2">Thank You!</h3>
        <p className="text-text">Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {([
          ["companyName", "Company Name", "text", "Your company name"],
          ["contactPerson", "Contact Person", "text", "Your name"],
          ["phone", "Mobile Number", "tel", "+91 9150889019"],
          ["email", "Email", "email", "you@company.com"],
          ["city", "City", "text", "Chennai"],
          ["projects", "Number of Projects", "text", "e.g., 5"],
          ["monthlyEnquiries", "Monthly Enquiries", "text", "e.g., 200"],
          ["teamSize", "Current Sales Team Size", "text", "e.g., 10"],
        ] as const).map(([key, label, type, ph]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-navy mb-1.5">{label} *</label>
            <input type={type} className={ic(key)} value={form[key]} onChange={set(key)} placeholder={ph} />
            {errors[key] && <p className="text-error text-xs mt-1">{errors[key]}</p>}
          </div>
        ))}
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">Message</label>
        <textarea className={ic("message")} rows={4} value={form.message} onChange={set("message")} placeholder="Tell us about your requirements..." />
      </div>
      {errors.submit && <p className="text-error text-sm">{errors.submit}</p>}
      <button type="submit" disabled={loading} className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 flex items-center justify-center gap-2">
        {loading ? (<><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Submitting...</>) : "Apply Now"}
      </button>
    </form>
  );
}
