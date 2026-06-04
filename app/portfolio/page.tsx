import FadeUp from "@/components/animations/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import ParallaxImage from "@/components/animations/ParallaxImage";
import ParallaxContainer from "@/components/animations/ParallaxContainer";

const projects = [
  {
    tag: "BRAND STRATEGY",
    title: "Legacy Brand Repositioning",
    description: "A 20-year-old South India retail brand repositioned for digital-first audiences in a highly competitive market.",
    outcome: "40% increase in brand recognition within 6 months.",
    image: "/project-1.png",
    imageSide: "left"
  },
  {
    tag: "PERSONAL BRAND",
    title: "Founder Personal Brand Launch",
    description: "From zero online presence to a consistently growing authority platform across Instagram and LinkedIn.",
    outcome: "50K+ engaged followers. Consistent inbound from CXO audience.",
    image: "/project-1.png",
    imageSide: "right"
  },
  {
    tag: "DIGITAL",
    title: "Digital Transformation Roadmap",
    description: "A 12-month digital adoption strategy for a traditional B2B business entering online sales for the first time.",
    outcome: "30% operational efficiency gain. New revenue channel launched.",
    image: "/project-1.png",
    imageSide: "left"
  },
  {
    tag: "MARKETING",
    title: "Product Launch Campaign Strategy",
    description: "End-to-end campaign architecture for a product entering a saturated category with no existing brand equity.",
    outcome: "Campaign exceeded target reach by 2.4x.",
    image: "/project-1.png",
    imageSide: "right"
  }
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-brand-black  py-12 md:py-16 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            overline="SELECTED WORK"
            headline="Work that has moved brands forward."
            align="left"
            className="md:text-center md:items-center"
          />
        </div>
      </section>

      <section className="bg-brand-black py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col">
          {projects.map((project, index) => (
            <FadeUp key={project.title} delay={0.1}>
              <div className={`flex flex-col md:flex-row border-b border-brand-white/[0.06] py-12 gap-16 md:gap-20 items-center ${project.imageSide === "right" ? "md:flex-row-reverse" : ""}`}>
                
                {/* Image Column wrapped in Parallax container for subtle speed shifts */}
                <div className="w-full md:w-[48%] flex-shrink-0">
                  <ParallaxContainer speed={index % 2 === 0 ? -12 : 12}>
                    <ParallaxImage 
                      src={project.image}
                      alt={project.title}
                      aspectRatio="aspect-video"
                    />
                  </ParallaxContainer>
                  <div className="h-[2px] w-12 bg-brand-red mt-5" />
                </div>

                {/* Text Info Column wrapped in slight opposing parallax for active depth */}
                <div className="flex flex-col justify-center gap-4 w-full md:w-[52%] text-left">
                  <Tag className="w-fit">{project.tag}</Tag>
                  <h3 className="font-display font-semibold text-brand-white text-[32px] md:text-[38px] leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-body text-brand-white/60 text-[15px] leading-relaxed max-w-lg mt-2">
                    {project.description}
                  </p>
                  <div className="font-body font-medium text-brand-white text-[15px] mt-3">
                    {/* <span className="text-brand-red mr-2 font-mono">&rarr;</span> */}
                    {project.outcome}
                  </div>
                  <div className="mt-4">
                    <Button href="/contact" variant="ghost" className="text-[13px] text-brand-red hover:underline !px-0">
                      Discuss a Similar Project 
                    </Button>
                  </div>
                </div>

              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="bg-brand-black py-12 md:py-28 text-center border-t border-brand-white/[0.06] px-6 relative overflow-hidden">
        <FadeUp>
          <h2 className="font-display font-semibold text-brand-white text-[38px] leading-tight">
            Interested in working together?
          </h2>
          <p className="font-body text-brand-white/60 text-[16px] mt-4 max-w-xl mx-auto">
            Let's talk about your brand and your goals. Expect a response within 48 hours.
          </p>
          <div className="mt-10">
            <Button href="/contact">
              Get In Touch
            </Button>
          </div>
        </FadeUp>
        
        {/* Subtle ambient light depth details */}
        <div className="absolute top-[20%] left-[-10%] w-[30vw] h-[30vw] bg-brand-red/3 rounded-full blur-[90px] pointer-events-none -z-10" />
      </section>
    </>
  );
}
