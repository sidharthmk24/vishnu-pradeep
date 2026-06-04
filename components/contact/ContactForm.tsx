"use client";

import { useState } from "react";
import { Check, AlertCircle, Loader2 } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "Under $5k/mo",
    message: "",
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to send inquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <FadeUp className="bg-brand-card border border-brand-white/[0.06] p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="h-16 w-16 bg-brand-red/10 flex items-center justify-center mb-6">
          <Check className="text-brand-red" size={32} />
        </div>
        <h3 className="font-display font-bold text-brand-white text-[28px] md:text-[34px] leading-tight">
          Inquiry Received.
        </h3>
        <p className="font-body text-brand-white/60 text-[15px] md:text-[16px] leading-relaxed mt-4 max-w-md mx-auto">
          I personally review every strategic inquiry. Expect a direct response from me within 48 hours to discuss your business challenges.
        </p>
      </FadeUp>
    );
  }

  return (
    <FadeUp>
      <form onSubmit={handleSubmit} className="bg-brand-card border border-brand-white/[0.06] p-8 md:p-10 flex flex-col gap-6">
        
        {error && (
          <div className="bg-brand-red/10 border-l-[3px] border-l-brand-red p-4 flex items-start gap-3">
            <AlertCircle className="text-brand-red flex-shrink-0 mt-0.5" size={18} />
            <p className="font-body text-brand-white text-[14px] leading-relaxed">
              {error}
            </p>
          </div>
        )}

        <div>
          <label htmlFor="name" className="font-mono text-brand-white/45 text-[11px] uppercase tracking-widest block mb-2">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="name"
            required
            type="text"
            placeholder="Vishnu Pradeep"
            className="w-full bg-brand-black border border-brand-white/10 py-3.5 px-4 text-brand-white font-body text-[15px] rounded-none focus:border-brand-red focus:outline-none transition-colors duration-200"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            disabled={submitting}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="font-mono text-brand-white/45 text-[11px] uppercase tracking-widest block mb-2">
              Email Address <span className="text-brand-red">*</span>
            </label>
            <input
              id="email"
              required
              type="email"
              placeholder="founder@company.com"
              className="w-full bg-brand-black border border-brand-white/10 py-3.5 px-4 text-brand-white font-body text-[15px] rounded-none focus:border-brand-red focus:outline-none transition-colors duration-200"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              disabled={submitting}
            />
          </div>
          <div>
            <label htmlFor="company" className="font-mono text-brand-white/45 text-[11px] uppercase tracking-widest block mb-2">
              Company Name <span className="text-brand-red">*</span>
            </label>
            <input
              id="company"
              required
              type="text"
              placeholder="Acme Corp"
              className="w-full bg-brand-black border border-brand-white/10 py-3.5 px-4 text-brand-white font-body text-[15px] rounded-none focus:border-brand-red focus:outline-none transition-colors duration-200"
              value={formState.company}
              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
              disabled={submitting}
            />
          </div>
        </div>

        {/* <div>
          <label htmlFor="budget" className="font-mono text-brand-white/45 text-[11px] uppercase tracking-widest block mb-2">
            Approximate Monthly Marketing Budget
          </label>
          <div className="relative">
            <select
              id="budget"
              className="w-full bg-brand-black border border-brand-white/10 py-3.5 px-4 text-brand-white font-body text-[15px] rounded-none focus:border-brand-red focus:outline-none transition-colors duration-200 appearance-none cursor-pointer"
              value={formState.budget}
              onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
              disabled={submitting}
            >
              <option value="Under $5k/mo">Under $5,000 / month</option>
              <option value="$5k - $10k/mo">$5,000 - $10,000 / month</option>
              <option value="$10k - $25k/mo">$10,000 - $25,000 / month</option>
              <option value="$25k+/mo">$25,000+ / month</option>
              <option value="Project-based">Project-based / Strategic Advisory Only</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-white/45">
              <span className="text-[12px]">&darr;</span>
            </div>
          </div>
        </div> */}

        <div>
          <label htmlFor="message" className="font-mono text-brand-white/45 text-[11px] uppercase tracking-widest block mb-2">
            What is the primary business challenge you are facing? <span className="text-brand-red">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Tell me about your brand, current roadblocks, and what outcome you are looking to achieve."
            className="w-full bg-brand-black border border-brand-white/10 py-3.5 px-4 text-brand-white font-body text-[15px] rounded-none focus:border-brand-red focus:outline-none transition-colors duration-200 resize-none"
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            disabled={submitting}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-brand-red hover:bg-brand-red-hv text-brand-white font-body font-medium text-[15px] py-4 transition-colors duration-200 rounded-none flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed uppercase tracking-wider"
        >
          {submitting ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              Sending Inquiry...
            </>
          ) : (
            <>
              Start a Conversation  
            </>
          )}
        </button>
      </form>
    </FadeUp>
  );
}
