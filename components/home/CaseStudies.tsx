import Link from "next/link";
import FadeUp from "../animations/FadeUp";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    category: "Brand Strategy",
    headline: "The Cost of Consensus: Rebuilding a Legacy B2B Brand",
    teaser: "How a 20-year-old firm unlocked 40% higher conversion rates by shedding consensus-driven marketing and re-anchoring their positioning around high-ticket operational authority.",
    takeaway: "A brand that tries to speak to everyone ends up speaking to no one. Consensus dilutes differentiation.",
    readTime: "6 min read",
    href: "/case-studies/cost-of-consensus",
  },
  {
    category: "Digital Transformation",
    headline: "Shedding the Legacy: Transitioning to Digital-First Operations",
    teaser: "A case study on migrating traditional customer-acquisition channels to digital positioning systems without losing brand equity or legacy client relationships.",
    takeaway: "Transformation isn't about buying new software; it is about rewriting the brand narrative to support digital scale.",
    readTime: "8 min read",
    href: "/case-studies/digital-first",
  },
  {
    category: "Founder Brand Building",
    headline: "The Founder Leverage: Accelerating B2B Deal-Flow",
    teaser: "How we turned a silent tech founder into a visible industry authority, driving direct consulting inquiries and deal-flow without increasing ad spend.",
    takeaway: "In high-ticket B2B sales, founders are the primary brand. People buy from people, not corporations.",
    readTime: "5 min read",
    href: "/case-studies/founder-leverage",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative bg-brand-black py-20 md:py-28 overflow-hidden border-y border-brand-white/[0.06]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          overline="Thought Leadership"
          headline="Case Studies & Insights"
          subcopy="Real work, real strategy, real numbers. Insights drawn from rebuilding brands and scaling marketing systems in the real world."
          className="mb-16"
        />

        {/* Rows Wrapper */}
        <div className="border-t border-brand-white/[0.08] flex flex-col w-full">
          {caseStudies.map((study, index) => (
            <FadeUp key={study.headline} delay={index * 0.1}>
              <Link
                href={study.href}
                className="group block border-b border-brand-white/[0.08] hover:bg-brand-white/[0.015] hover:border-brand-white/20 transition-all duration-300 relative rounded-none text-left px-4 md:px-6 -mx-4 md:-mx-6 py-9 md:py-11"
              >
                {/* Vertical Red Growing Line Indicator on Hover */}
                <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-brand-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Left Column: Row Number */}
                  <div className="lg:col-span-1 hidden lg:block font-mono text-[24px] md:text-[28px] text-brand-white/20 group-hover:text-brand-white transition-colors duration-300 leading-none pt-1">
                    0{index + 1}
                  </div>

                  {/* Center Column: Content (Headline, Teaser, Takeaway) */}
                  <div className="lg:col-span-8 flex flex-col items-start">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider mb-3.5">
                      <span className="text-brand-red font-semibold">{study.category}</span>
                      <span className="text-brand-white/20">•</span>
                      <span className="text-brand-white/35">{study.readTime}</span>
                    </div>

                    <h3 className="font-display text-brand-white text-xl md:text-[22px] font-medium mb-3 group-hover:text-brand-red transition-colors duration-300 tracking-wide leading-snug">
                      {study.headline}
                    </h3>
                    
                    <p className="font-body text-brand-white/50 text-[14px] leading-relaxed mb-4 max-w-4xl">
                      {study.teaser}
                    </p>
                    
                    {/* Editorial Takeaway Panel */}
                    <div className="border-l border-brand-red/20 group-hover:border-brand-red/50 pl-4 py-0.5 mt-4 transition-colors duration-300">
                      <p className="font-body text-brand-white/60 text-[13.5px] leading-relaxed italic">
                        <span className="text-brand-white font-medium not-italic">Key Takeaway:</span> {study.takeaway}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Action Link */}
                  <div className="lg:col-span-3 flex items-center lg:justify-end font-mono text-[11px] uppercase tracking-widest text-brand-white/40 group-hover:text-brand-white transition-colors duration-300 mt-4 lg:mt-1.5">
                    <span className="inline-flex items-center gap-2 group-hover:text-brand-red border-b border-transparent group-hover:border-brand-red/30 pb-1 transition-all duration-300">
                      Read Insight <ArrowRight size={14} className="text-brand-white/20 group-hover:text-brand-red group-hover:translate-x-1.5 transition-all duration-300" />
                    </span>
                  </div>

                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <FadeUp delay={0.4}>
            <Button href="/case-studies" variant="secondary" className="px-10 py-4 font-semibold text-[15px]">
              View All Case Studies
            </Button>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}
