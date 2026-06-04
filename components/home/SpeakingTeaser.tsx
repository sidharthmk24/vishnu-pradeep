import FadeUp from "../animations/FadeUp";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { ArrowRight, Mic } from "lucide-react";

const topics = [
  "Brand Strategy & Positioning for Growth",
  "Why Most Marketing Doesn't Build Brands",
  "Digital Transformation for Traditional Businesses",
  "The Founder's Brand: Show Up or Be Forgotten"
];

export default function SpeakingTeaser() {
  return (
    <section className="relative bg-brand-black py-14 md:py-22 container mx-auto px-6 lg:px-20  overflow-hidden">
      {/* Background ambient glow */}
      {/* <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" /> */}

      <div className="relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-16 md:gap-16">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <FadeUp delay={0.1}>
              <SectionHeader
                overline="ON STAGE"
                headline="Bringing clarity to rooms that need it."
                subcopy="I speak on brand strategy, marketing, digital transformation, and founder mindset. Practical, direct, built for business audiences."
              />
              <div className="mt-10">
                <Button href="/contact" variant="primary" className="group flex items-center gap-2">
                  {/* <Mic className="w-[18px] h-[18px]" /> */}
                  Invite Me to Speak 
                  {/* <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" /> */}
                </Button>
              </div>
            </FadeUp>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {topics.map((topic, index) => (
              <FadeUp key={index} delay={0.2 + index * 0.1}>
                <div
                  className="group relative flex items-center gap-5 border border-brand-white/10 p-5 md:p-6 bg-brand-card/50 backdrop-blur-sm hover:bg-brand-white/[0.03] transition-all duration-300 hover:border-brand-red/40 overflow-hidden cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-red/0 via-brand-red/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                  
                  <div className="w-12 h-12 rounded-full bg-brand-white/5 border border-brand-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/10 group-hover:border-brand-red/30 transition-colors duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                     <span className="font-mono text-brand-white/50 group-hover:text-brand-red transition-colors text-[13px]">
                        0{index + 1}
                     </span>
                  </div>
                  
                  <span className="font-body font-medium text-brand-white/90 text-[16px] md:text-[17px] group-hover:text-brand-white transition-colors duration-300">
                    {topic}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
