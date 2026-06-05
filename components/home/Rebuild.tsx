import FadeUp from "../animations/FadeUp";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

export default function Rebuild() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-brand-black border-y border-brand-white/[0.06] group">
      {/* Background Ambient Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] bg-brand-red/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[40vw] h-[40vw] bg-brand-white/[0.015] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Row 1: Strategic Intro & Symptoms Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">
          
          {/* Strategy Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp delay={0.1}>
              <SectionHeader
                overline="Brand Rebuild"
                headline="When your brand no longer reflects what you actually deliver."
                className="mb-8"
              />

              <div className="font-body font-light text-brand-white/80 text-[17px] md:text-[20px] leading-[1.6] flex flex-col gap-6 max-w-[720px]">
                <p>
                  A rebrand is not about a new logo or a fresh coat of paint. It is about fixing the gap between how your brand shows up and the level of work you are actually doing. That gap costs you the right clients.
                </p>
                <p>
                  I work directly with founders and business owners to identify where the positioning has drifted, clear out what no longer fits, and rebuild a brand that reflects where the business is today — and where it is going.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Symptoms Right Column */}
          <div className="lg:col-span-5 w-full self-stretch">
            <FadeUp delay={0.2} className="sticky top-28">
              <div className="border border-brand-white/10 bg-brand-card/30 p-8 relative rounded-none w-full hover:border-brand-white/20 transition-colors duration-500">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-red" />
                <h4 className="font-mono text-brand-red text-[11px] tracking-[0.2em] uppercase mb-6 font-medium">
                  Outgrown Brand Symptoms
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="font-mono text-brand-red text-[13px] mt-0.5">01</span>
                    <p className="font-body font-light text-brand-white/70 text-[16px] leading-relaxed">
                      You are chasing enterprise deals, but your website still looks like a sub-scale startup.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-mono text-brand-red text-[13px] mt-0.5">02</span>
                    <p className="font-body font-light text-brand-white/70 text-[16px] leading-relaxed">
                      Your team spends time explaining what you do instead of letting the brand do the heavy lifting.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-mono text-brand-red text-[13px] mt-0.5">03</span>
                    <p className="font-body font-light text-brand-white/70 text-[16px] leading-relaxed">
                      You fail to command a price premium because your digital presence lacks operational authority.
                    </p>
                  </li>
                </ul>
              </div>
            </FadeUp>
          </div>

        </div>

        {/* Row 2: Process Steps (Horizontal 3-Column Grid) */}
        <div className="border-t border-brand-white/[0.06] pt-16">
          <FadeUp delay={0.25}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <h3 className="font-mono text-brand-white/40 text-[12px] tracking-[0.25em] uppercase">The Rebuild Roadmap</h3>
              <div className="h-[1px] flex-grow bg-brand-white/[0.06] hidden md:block" />
            </div>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <FadeUp delay={0.3} className="h-full">
              <div className="group relative p-8 border border-brand-white/10 bg-brand-card/10 hover:border-brand-red/30 hover:bg-brand-card/30 hover:shadow-[0_8px_30px_rgba(225,49,49,0.02)] transition-all duration-500 flex flex-col justify-between h-full rounded-none">
                <div>
                  <div className="flex justify-between items-baseline mb-6 border-b border-brand-white/10 pb-4">
                    <span className="font-mono text-brand-red text-sm font-semibold tracking-widest uppercase">Phase 01</span>
                    <span className="font-mono text-brand-white/20 text-[10px] uppercase tracking-wider">Audit</span>
                  </div>
                  <h3 className="font-display font-medium text-brand-white text-xl  mb-3 tracking-wide">Brand Audit</h3>
                  <p className="font-body font-light text-brand-white/50 text-[16px] leading-relaxed">
                    I go through every client-facing touchpoint — website, social, pitch decks, collateral — and identify exactly where the messaging is working against you. No assumptions. Just what the brand is actually saying versus what it should be.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Step 2 */}
            <FadeUp delay={0.4} className="h-full">
              <div className="group relative p-8 border border-brand-white/10 bg-brand-card/10 hover:border-brand-red/30 hover:bg-brand-card/30 hover:shadow-[0_8px_30px_rgba(225,49,49,0.02)] transition-all duration-500 flex flex-col justify-between h-full rounded-none">
                <div>
                  <div className="flex justify-between items-baseline mb-6 border-b border-brand-white/10 pb-4">
                    <span className="font-mono text-brand-red text-sm font-semibold tracking-widest uppercase">Phase 02</span>
                    <span className="font-mono text-brand-white/20 text-[10px] uppercase tracking-wider">Reconstruct</span>
                  </div>
                  <h3 className="font-display text-brand-white text-xl font-medium mb-3 tracking-wide">Rebuild the Foundation</h3>
                  <p className="font-body text-brand-white/50 text-[14px] leading-relaxed">
                    New positioning, new visual direction, new narrative. Built from what the business actually does — not from what looked good three years ago. Direct, clean, and built to hold up at every level of the market you are targeting.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Step 3 */}
            <FadeUp delay={0.5} className="h-full">
              <div className="group relative p-8 border border-brand-white/10 bg-brand-card/10 hover:border-brand-red/30 hover:bg-brand-card/30 hover:shadow-[0_8px_30px_rgba(225,49,49,0.02)] transition-all duration-500 flex flex-col justify-between h-full rounded-none">
                <div>
                  <div className="flex justify-between items-baseline mb-6 border-b border-brand-white/10 pb-4">
                    <span className="font-mono text-brand-red text-sm font-semibold tracking-widest uppercase">Phase 03</span>
                    <span className="font-mono text-brand-white/20 text-[10px] uppercase tracking-wider">Deployment</span>
                  </div>
                  <h3 className="font-display text-brand-white text-xl font-medium mb-3 tracking-wide">Roll Out Across Platforms</h3>
                  <p className="font-body text-brand-white/50 text-[14px] leading-relaxed">
                    The new brand goes live consistently — website, social profiles, pitch decks, and any other place your clients see you first. One unified story, everywhere it matters.
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>

        {/* Row 3: CTA Button */}
        <div className="mt-16 text-center">
          <FadeUp delay={0.6}>
            <a target="_blank" href="https://brand-audit-ten.vercel.app/"  className="border border-brand-white/30 text-brand-white hover:bg-brand-white hover:text-brand-black px-10 py-4 transition-all duration-200"  >
              Audit Your Brand
            </a>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}