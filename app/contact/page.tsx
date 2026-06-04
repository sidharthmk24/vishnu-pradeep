import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/contact/ContactForm";
import FadeUp from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "Contact Vishnu Pradeep — Start a Conversation",
  description: "Get in touch directly with Vishnu Pradeep for branding, marketing strategy, and founder advisory. South India based consulting.",
};

const trustSignals = [
  {
    title: "Direct Practitioner Access",
    description: "You deal directly with me. No junior account managers, no layers of bureaucracy, and no cookie-cutter solutions. We sit down, analyze your business reality, and build what actually works."
  },
  {
    title: "15+ Years of Real Context",
    description: "Built on real, hands-on experience in agency operations, media production, and scaling brands across South India. Genuinely tested frameworks, not academic buzzwords."
  },
  {
    title: "High-Intent Partnerships",
    description: "I partner exclusively with business owners, founders, and CXOs who are ready to make serious brand decisions and have the operational capacity to execute."
  }
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-black min-h-screen py-14 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Trust Signals */}
            <div className="w-full lg:w-[45%] flex flex-col gap-10">
              <SectionHeader
                overline="START A CONVERSATION"
                headline="Let's build strategy that actually sells."
                subcopy="Every project starts with a direct conversation. Tell me about your business roadblocks, and we will take it from there."
              />

              <div className="flex flex-col gap-8 mt-4">
                {trustSignals.map((signal, index) => (
                  <FadeUp key={signal.title} delay={0.1 + index * 0.08}>
                    <div className="border-l-[2px] border-l-brand-red pl-5">
                      <h3 className="font-body font-semibold text-brand-white text-[17px]">
                        {signal.title}
                      </h3>
                      <p className="font-body text-brand-white/50 text-[14px] leading-relaxed mt-2">
                        {signal.description}
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>

              {/* Direct Info */}
              <FadeUp delay={0.4} className="border-t border-brand-white/[0.06] pt-8 flex flex-col sm:flex-row gap-8 sm:gap-16">
                <div>
                  <span className="font-mono text-brand-white/45 text-[10px] uppercase tracking-widest block mb-1">
                    Direct Email
                  </span>
                  <a
                    href="mailto:vishnu@vishnupradeep.in"
                    className="font-body font-medium text-brand-white hover:text-brand-red transition-colors duration-200 text-[15px]"
                  >
                    vishnu@vishnupradeep.in
                  </a>
                </div>
                <div>
                  <span className="font-mono text-brand-white/45 text-[10px] uppercase tracking-widest block mb-1">
                    Based In
                  </span>
                  <span className="font-body font-medium text-brand-white text-[15px]">
                    South India
                  </span>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full lg:w-[55%] lg:sticky lg:top-32">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
