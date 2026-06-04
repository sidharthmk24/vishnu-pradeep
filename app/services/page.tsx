import FadeUp from "@/components/animations/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";

const services = [
  {
    title: "Brand Strategy & Positioning",
    description: "From full brand audits to positioning frameworks and messaging architecture — built from 15+ years of real experience, not templates."
  },
  {
    title: "Marketing & Campaign Strategy",
    description: "Campaign architecture, digital marketing planning, and the frameworks that close the gap between marketing activity and brand outcomes."
  },
  {
    title: "Personal Brand Building for Founders",
    description: "You are the brand. I help founders show up with clarity, consistency, and authority — across platforms and in every room."
  },
  {
    title: "Digital Transformation Consulting",
    description: "Helping traditional businesses adopt digital strategy and tools without losing what already works."
  }
];

const fits = [
  {
    title: "Business Owners",
    description: "Past survival. Ready to invest in brand and growth."
  },
  {
    title: "Startup Founders",
    description: "Scaling fast. Need strategy, not guesswork."
  },
  {
    title: "CXOs & Leaders",
    description: "Navigating brand, digital, and scale decisions."
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-black py-36 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            overline="WORK WITH ME"
            headline="Strategy that moves businesses forward."
            subcopy="I work with a focused number of clients. If you're a founder or business leader serious about brand and growth, this is where we start."
            align="center"
          />
        </div>
      </section>

      <section className="bg-brand-black py-24 px-6 lg:px-8 border-t border-brand-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeUp key={service.title} delay={index * 0.1} className="group h-full">
              <div className="bg-brand-card p-10 h-full border-l-[3px] border-l-brand-red transition-transform duration-200 group-hover:-translate-y-1">
                <h3 className="font-display font-bold text-brand-white text-[24px]">
                  {service.title}
                </h3>
                <p className="font-body text-brand-white/55 text-[15px] leading-relaxed mt-3">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Button href="/contact" variant="ghost" className="text-[13px] text-brand-red hover:underline !px-0">
                    Learn More 
                  </Button>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="bg-brand-black py-24 px-6 lg:px-8 border-t border-brand-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            overline="THE RIGHT FIT"
            headline="Built for leaders making serious decisions."
            className="mb-10"
          />

          <div className="flex flex-col">
            {fits.map((fit, index) => (
              <FadeUp key={fit.title} delay={index * 0.1}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-7 border-b border-brand-white/[0.06] gap-4 sm:gap-8">
                  <div className="border-l-[2px] border-l-brand-red pl-5">
                    <h3 className="font-body font-medium text-brand-white text-[18px]">
                      {fit.title}
                    </h3>
                  </div>
                  <p className="font-body text-brand-white/50 text-[15px] sm:max-w-sm sm:text-right">
                    {fit.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        headline="Let's talk about your brand."
        subcopy="Fill in the form and I'll get back to you within 48 hours."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
