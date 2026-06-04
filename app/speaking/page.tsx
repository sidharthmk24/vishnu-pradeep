"use client";
import { useState } from "react";
import FadeUp from "@/components/animations/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import { Check } from "lucide-react";

const topics = [
  {
    title: "Brand Strategy & Positioning for Growth",
    description: "Why most brands fail to scale — and the positioning moves that actually work. Built from real agency and client experience."
  },
  {
    title: "Why Most Marketing Doesn't Build Brands",
    description: "The difference between marketing activity and brand building, and a practical framework for closing that gap."
  },
  {
    title: "Digital Transformation for Traditional Businesses",
    description: "A grounded roadmap for businesses that need to go digital without losing what already works."
  },
  {
    title: "The Founder's Brand: Show Up or Be Forgotten",
    description: "Why your personal brand is your most underleveraged business asset — and how to build it with intent."
  }
];

export default function SpeakingPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    organization: "",
    eventName: "",
    eventDate: "",
    typeOfTalk: "Keynote",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-brand-black py-36 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            overline="ON STAGE & ON SCREEN"
            headline="Bringing clarity to rooms that need it."
            subcopy="I speak on brand strategy, marketing, digital transformation, and founder mindset. Practical. Direct. No filler."
            align="center"
          />
        </div>
      </section>

      <section className="bg-brand-black py-24 px-6 lg:px-8 border-t border-brand-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            overline="WHAT I SPEAK ON"
            headline="Topics built for business audiences."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <FadeUp key={topic.title} delay={index * 0.1} className="group h-full">
                <div className="bg-brand-card p-10 h-full border-l-[3px] border-l-brand-red transition-transform duration-200 group-hover:-translate-y-1">
                  <h3 className="font-display font-bold text-brand-white text-[22px]">
                    {topic.title}
                  </h3>
                  <p className="font-body text-brand-white/55 text-[14px] leading-relaxed mt-3">
                    {topic.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-24 px-6 lg:px-8 border-t border-brand-white/[0.06]">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            overline="INVITE ME TO SPEAK"
            headline="Let's talk about your event."
            subcopy="Fill in the form below and I'll get back to you within 48 hours to discuss your event."
            className="mb-12"
          />

          {submitted ? (
            <FadeUp className="text-center py-20 bg-brand-card">
              <Check className="text-brand-red mx-auto mb-6" size={36} />
              <h3 className="font-display font-bold text-brand-white text-[28px]">
                Message received.
              </h3>
              <p className="font-body text-brand-white/60 text-[16px] mt-3">
                I'll get back to you within 48 hours.
              </p>
            </FadeUp>
          ) : (
            <FadeUp>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-brand-white/45 text-[11px] uppercase tracking-widest block mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-brand-card border border-brand-white/10 py-3 px-4 text-brand-white font-body text-[15px] rounded-none focus:border-brand-red focus:outline-none transition-colors duration-200"
                      value={formState.fullName}
                      onChange={e => setFormState({...formState, fullName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-brand-white/45 text-[11px] uppercase tracking-widest block mb-2">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full bg-brand-card border border-brand-white/10 py-3 px-4 text-brand-white font-body text-[15px] rounded-none focus:border-brand-red focus:outline-none transition-colors duration-200"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-brand-white/45 text-[11px] uppercase tracking-widest block mb-2">
                      Organization
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-brand-card border border-brand-white/10 py-3 px-4 text-brand-white font-body text-[15px] rounded-none focus:border-brand-red focus:outline-none transition-colors duration-200"
                      value={formState.organization}
                      onChange={e => setFormState({...formState, organization: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-brand-white/45 text-[11px] uppercase tracking-widest block mb-2">
                      Event Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-brand-card border border-brand-white/10 py-3 px-4 text-brand-white font-body text-[15px] rounded-none focus:border-brand-red focus:outline-none transition-colors duration-200"
                      value={formState.eventName}
                      onChange={e => setFormState({...formState, eventName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-brand-white/45 text-[11px] uppercase tracking-widest block mb-2">
                      Event Date
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full bg-brand-card border border-brand-white/10 py-3 px-4 text-brand-white font-body text-[15px] rounded-none focus:border-brand-red focus:outline-none transition-colors duration-200"
                      value={formState.eventDate}
                      onChange={e => setFormState({...formState, eventDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-brand-white/45 text-[11px] uppercase tracking-widest block mb-2">
                      Type of Talk
                    </label>
                    <select
                      className="w-full bg-brand-card border border-brand-white/10 py-3 px-4 text-brand-white font-body text-[15px] rounded-none focus:border-brand-red focus:outline-none transition-colors duration-200 appearance-none"
                      value={formState.typeOfTalk}
                      onChange={e => setFormState({...formState, typeOfTalk: e.target.value})}
                    >
                      <option>Keynote</option>
                      <option>Panel</option>
                      <option>Workshop</option>
                      <option>Webinar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-brand-white/45 text-[11px] uppercase tracking-widest block mb-2">
                    Message / Brief
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-brand-card border border-brand-white/10 py-3 px-4 text-brand-white font-body text-[15px] rounded-none focus:border-brand-red focus:outline-none transition-colors duration-200 resize-none"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-red text-brand-white font-body font-medium text-[15px] py-4 mt-2 hover:bg-brand-red-hv transition-colors duration-200 rounded-none"
                >
                  Send Inquiry 
                </button>
              </form>
            </FadeUp>
          )}
        </div>
      </section>
    </>
  );
}
