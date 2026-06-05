import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import { caseStudiesData } from "@/data/case-studies";
import CTABanner from "@/components/ui/CTABanner";

// Force dynamic or static params if needed, but default is fine here
export function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const study = caseStudiesData.find(s => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  // Very basic markdown-like parsing for the content
  const sections = study.content
    .split('## ')
    .filter(Boolean)
    .map(section => {
      const [title, ...bodyLines] = section.split('\n');
      return { 
        title: title.trim(), 
        body: bodyLines.join('\n').trim() 
      };
    });

  return (
    <main className="bg-brand-black min-h-screen selection:bg-brand-red selection:text-brand-white pt-24">
      
      {/* Background Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-red/[0.03] rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative z-10 pt-8 pb-16">
        <div className="container mx-auto px-6 lg:px-20 max-w-5xl">
          <FadeUp>
            <Link 
              href="/case-studies" 
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-brand-white/40 hover:text-brand-white transition-colors mb-12 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Link>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[11px] uppercase tracking-widest text-brand-red border border-brand-red/20 bg-brand-red/[0.02] px-3 py-1 rounded-full">
                {study.category}
              </span>
              <span className="font-mono text-[10px] text-brand-white/30 uppercase tracking-widest">
                {study.date} • {study.readTime}
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-brand-white font-medium leading-[1.1] tracking-tight mb-8">
              {study.headline}
            </h1>
            
            <p className="font-body font-light text-brand-white/60 text-xl leading-relaxed max-w-3xl border-l-2 border-brand-red/30 pl-6 py-2">
              "{study.takeaway}"
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative z-10 mb-20">
        <div className="container mx-auto px-6 lg:px-20">
          <FadeUp delay={0.2}>
            <div className="relative w-full aspect-[21/9] md:aspect-[24/9] border border-brand-white/10 overflow-hidden bg-brand-black/40">
              <Image 
                src={study.image} 
                alt={study.headline} 
                fill 
                className="object-cover opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative z-10 pb-32">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
          <div className="flex flex-col gap-16 md:gap-24">
            {sections.map((section, index) => (
              <FadeUp key={section.title} delay={0.1 * index}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                  <div className="md:col-span-4">
                    <h2 className="font-display text-2xl md:text-3xl text-brand-white font-medium sticky top-32">
                      {section.title}
                    </h2>
                  </div>
                  <div className="md:col-span-8">
                    {/* Render bold text simply using dangerouslySetInnerHTML or naive replacement, but for safety and simplicity, we'll just format basic paragraphs */}
                    <div className="font-body font-light text-brand-white/70 text-[17px] md:text-[18px] leading-relaxed flex flex-col gap-6">
                      {section.body.split('\n\n').map((paragraph, pIndex) => {
                        // Handle basic bold markdown `**text**` by replacing it with a span (naive implementation)
                        const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<span class="font-medium text-brand-white">$1</span>');
                        
                        return (
                          <p 
                            key={pIndex} 
                            dangerouslySetInnerHTML={{ __html: formattedParagraph }} 
                            className={paragraph.match(/^[0-9]\./) ? "pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-brand-red before:rounded-full" : ""}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTABanner />

    </main>
  );
}
