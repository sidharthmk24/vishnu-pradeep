import FadeUp from "../animations/FadeUp";
import SectionHeader from "../ui/SectionHeader";
import ParallaxContainer from "../animations/ParallaxContainer";

const values = [
  {
    num: "01",
    title: "Direct Access",
    description: "No junior managers, layers of bureaucracy, or cookie-cutter templates. You deal directly with a senior practitioner to sit down, analyze, and build."
  },
  {
    num: "02",
    title: "15+ Years Context",
    description: "Built on real, hands-on experience in agency operations, media production, and scaling brands across South India. Genuinely tested frameworks, zero academic hype."
  },
  {
    num: "03",
    title: "High-Intent Fits",
    description: "I partner exclusively with business owners, founders, and CXOs who are past the survival phase and serious about investing in brand equity."
  },
  {
    num: "04",
    title: "Outcome-Driven",
    description: "Every engagement and strategic recommendation connects directly to a concrete business result. No advisory fluff or inspiration for its own sake."
  }
];

export default function BrandValues() {
  return (
    <section className="bg-brand-black py-16 md:py-22  relative overflow-hidden">
      
      {/* Decorative subtle floating grid lines behind cards */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <SectionHeader
          overline="WHAT I STAND FOR"
          headline="The principles behind every engagement."
          className="mb-24"
        />

        {/* Asymmetrical Collage Staggered Grid with Scroll-linked Floating Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 items-start">
          {values.map((value, index) => {
            // Apply unique vertical offsets to break grid uniformity
            const offsetClasses = [
              "md:translate-y-0",
              "md:translate-y-12",
              "md:-translate-y-6",
              "md:translate-y-6"
            ];

            // Apply asymmetrical floating parallax speeds to make them drift independently
            const floatingSpeeds = [
              -12,  // Drifts slightly faster upward
              18,   // Drifts slower
              -22,  // Drifts faster upward
              8     // Drifts slightly slower
            ];

            return (
              <ParallaxContainer
                key={value.title}
                speed={floatingSpeeds[index]}
                className="h-full"
              >
                <FadeUp
                  delay={index * 0.08}
                  className={`h-full block ${offsetClasses[index]}`}
                >
                  <div className="bg-brand-card p-6 h-full border border-brand-white/[0.06] hover:border-brand-red/30 transition-all duration-300 relative group overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                    
                    {/* Large elegant background watermarked numbers inside each value drawer */}
                    <span className="font-display font-semibold text-brand-white/[0.02] text-[110px] absolute right-4 bottom-[-10px] select-none pointer-events-none transition-all duration-500 group-hover:text-brand-red/[0.04] group-hover:scale-105 origin-right">
                      {value.num}
                    </span>

                    <span className="font-mono text-brand-red text-[11px] uppercase tracking-widest block mb-4">
                      PRINCIPLE
                    </span>

                    <h3 className="font-body font-semibold text-brand-white text-[20px] mb-3 relative z-10 group-hover:text-brand-red transition-colors duration-200">
                      {value.title}
                    </h3>
                    
                    <p className="font-body text-brand-white/50 text-[16px] leading-relaxed relative z-10">
                      {value.description}
                    </p>

                    <div className="h-[2px] w-6 bg-brand-red/30 group-hover:bg-brand-red group-hover:w-12 transition-all duration-300 mt-6" />
                  </div>
                </FadeUp>
              </ParallaxContainer>
            );
          })}
        </div>

      </div>
    </section>
  );
}
