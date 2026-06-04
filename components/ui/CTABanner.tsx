import FadeUp from "../animations/FadeUp";
import Button from "./Button";

export default function CTABanner({
  headline = "Ready to build a brand that actually sells?",
  subcopy = "Let's talk about your business, your positioning, and where you want to go. I personally respond to all serious consulting inquiries within 48 hours.",
  buttonText = "Start a Conversation",
  buttonHref = "/contact"
}: {
  headline?: string;
  subcopy?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="bg-brand-black py-14 md:py-28 relative overflow-hidden px-6 border-t border-brand-white/[0.06]">
      <div className=" container  max-w-5xl mx-auto">
        
        {/* Seamless Dark Editorial CTA Canvas */}
        <div className="bg-brand-card px-6 md:px-20 py-12 md:py-20 relative overflow-hidden border border-brand-white/[0.06] border-l-[3px] border-l-brand-red shadow-[0_15px_45px_rgba(0,0,0,0.4)] flex flex-col items-center text-center">
          
          {/* Subtle Tactile Mesh Dot Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none z-0" />
          
          {/* Ambient Lighting Gradients inside the dark panel */}
          <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none z-0" />

          {/* Structured Text Content */}
          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            
            <FadeUp delay={0.05}>
              <span className="font-mono text-brand-red uppercase tracking-widest text-[11px] font-semibold block mb-5">
                NEXT STEP
              </span>
            </FadeUp>

            {/* Premium editorial headline matching rest of the site */}
            <FadeUp delay={0.15}>
              <h2 className="font-display font-semibold text-brand-white text-[clamp(32px,5vw,50px)] leading-[1.15] tracking-tight max-w-2xl">
                Ready to build strategy that <span className="font-display italic text-brand-red font-medium border-b-[2px] border-brand-red/30 pb-1">actually sells?</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="font-body text-brand-white/55 text-[15px] md:text-[16px] mt-6 leading-relaxed max-w-xl mx-auto">
                {subcopy}
              </p>
            </FadeUp>

            {/* Standard primary red button with lift transitions and red glows */}
            <FadeUp delay={0.35} className="mt-10">
              <Button
                href={buttonHref}
                variant="primary"
                className="uppercase tracking-wider text-[12px] font-semibold py-4 px-10"
              >
                {buttonText} 
              </Button>
            </FadeUp>

          </div>

        </div>

      </div>
    </section>
  );
}
