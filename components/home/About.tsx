import FadeUp from "../animations/FadeUp";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

export default function About() {
  return (
    <section className="bg-brand-black container mx-auto py-16 md:py-22 px-6 lg:px-20 relative overflow-hidden group">
      {/* Premium Ambient Glows */}
      {/* <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" /> */}
      {/* <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-brand-white/[0.03] rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 group-hover:scale-105" /> */}

      <div className=" relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Typographic Focus */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp delay={0.1}>
              <SectionHeader 
                overline="About The Strategist"
                headline="A practitioner, not a theorist."
                className="mb-10"
              />
              
              <div className="font-body font-light text-brand-white/75 text-[18px] md:text-[20px] leading-[1.6] flex flex-col gap-6 max-w-[720px]">
                <p>
                  I’ve spent 15+ years working across media, branding, and marketing — building brands from the inside, not observing from the outside. Today, I lead a branding and marketing agency based in South India.
                </p>
                <p>
                  I work directly with business owners, startup founders, and CXOs who are past the survival phase and are now facing critical decisions around brand positioning, marketing strategy, and organizational scale.
                </p>
              
              </div>

              <div className="mt-12 flex items-center gap-6">
                <Button href="/contact" variant="primary" className="text-[15px] px-8 py-3.5">
                  Start a Conversation
                </Button>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Premium Interactive Bento Layout */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-full">
            
            {/* Top Full Width Box */}
            <FadeUp delay={0.2} className="col-span-2 group/bento cursor-default">
              <div className="h-full relative p-8 md:p-10 border border-brand-white/10 bg-[#161616]/80 backdrop-blur-md overflow-hidden hover:border-brand-red/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/10 rounded-full blur-[40px] group-hover/bento:bg-brand-red/20 transition-all duration-700 ease-out translate-x-1/3 -translate-y-1/3" />
                
                <div className="font-mono text-brand-red text-6xl md:text-7xl mb-4 font-light tracking-tighter">15<span className="text-4xl text-brand-red/70">+</span></div>
                <h3 className="font-display text-brand-white text-2xl md:text-3xl mb-3">Years of Mastery</h3>
                <p className="font-body text-brand-white/60 text-[15px] md:text-[16px] leading-relaxed max-w-sm relative z-10">
                  Building brands from the inside across media, branding, and modern marketing.
                </p>
              </div>
            </FadeUp>

            {/* Bottom Left Box */}
            <FadeUp delay={0.3} className="col-span-1 group/bento cursor-default">
              <div className="h-full relative p-6 md:p-8 border border-brand-white/10 bg-[#161616]/80 backdrop-blur-md overflow-hidden hover:bg-brand-white/[0.03] transition-colors duration-500 flex flex-col justify-between min-h-[220px]">
                <div className="w-12 h-12 rounded-full border border-brand-white/10 flex items-center justify-center mb-8 group-hover/bento:border-brand-white/30 transition-colors duration-500">
                  <div className="w-2 h-2 bg-brand-white rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display text-brand-white text-xl md:text-2xl mb-2">Scale</h3>
                  <p className="font-body text-brand-white/50 text-[13px] md:text-[14px] leading-relaxed">
                    Guiding founders & CXOs past the survival phase.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Bottom Right Box */}
            <FadeUp delay={0.4} className="col-span-1 group/bento cursor-default">
              <div className="h-full relative p-6 md:p-8 border border-brand-white/10 bg-brand-red/[0.02] backdrop-blur-md overflow-hidden hover:border-brand-red/40 hover:bg-brand-red/[0.05] transition-colors duration-500 flex flex-col justify-between min-h-[220px]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(225,49,49,0.15)_0%,transparent_70%)] opacity-0 group-hover/bento:opacity-100 transition-opacity duration-700" />
                <div className="font-mono text-brand-red/80 text-[11px] mb-8 tracking-widest uppercase">Agency</div>
                <div className="relative z-10">
                  <h3 className="font-display text-brand-white text-xl md:text-2xl mb-2">South India</h3>
                  <p className="font-body text-brand-white/50 text-[13px] md:text-[14px] leading-relaxed">
                    Leading a branding and marketing agency.
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </div>
    </section>
  );
}
