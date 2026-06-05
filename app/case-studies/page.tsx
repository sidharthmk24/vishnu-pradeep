import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

import { caseStudiesData as caseStudies } from "@/data/case-studies";


export default function CaseStudiesPage() {
  return (
    <main className="bg-brand-black min-h-screen selection:bg-brand-red selection:text-brand-white pt-24 pb-32">
      
      {/* Background Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-red/[0.03] rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative z-10 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-5xl">
            <FadeUp>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-brand-red"></div>
                <span className="font-mono text-brand-red uppercase tracking-widest text-[11px] md:text-[13px] font-semibold">
                  Field Notes & Analysis
                </span>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-[80px] text-brand-white font-medium leading-[1.05] tracking-tight mb-8 md:mb-10">
                Decoding the anatomy of <br className="hidden md:block"/>
                <span className="text-brand-white/40 italic font-light">breakthrough brands.</span>
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="font-body text-brand-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
                Case studies, strategic teardowns, and actionable insights from the frontlines of digital transformation and brand building. Real work, real numbers.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Filters (Visual Only for now to add premium feel) */}
      <section className="relative z-10 border-y border-brand-white/[0.06] bg-brand-black/50 backdrop-blur-sm top-0 md:top-24 mt-8 md:mt-0 md:mb-12">
        <div className="container mx-auto px-6 lg:px-20 overflow-x-auto no-scrollbar py-4 md:py-5 flex items-center gap-8 font-mono text-[11px] md:text-xs uppercase tracking-widest whitespace-nowrap">
          <span className="text-brand-red font-semibold cursor-pointer">All Insights</span>
          <span className="text-brand-white/40 hover:text-brand-white transition-colors cursor-pointer">Brand Strategy</span>
          <span className="text-brand-white/40 hover:text-brand-white transition-colors cursor-pointer">Digital Transformation</span>
          <span className="text-brand-white/40 hover:text-brand-white transition-colors cursor-pointer">Go-to-Market</span>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <FadeUp key={study.headline} delay={index * 0.1}>
                <Link href={`/case-studies/${study.slug}`} className="group block h-full">
                  <div className="h-full border border-brand-white/10 bg-brand-black/40 flex flex-col relative overflow-hidden transition-all duration-500 hover:border-brand-white/20 hover:bg-brand-white/[0.02]">
                    
                    {/* Subtle hover gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                    
                    {/* Image Area */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-brand-white/10 z-10">
                      <Image 
                        src={study.image}
                        alt={study.headline}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-black/30 group-hover:bg-brand-black/10 transition-colors duration-500" />
                    </div>

                    {/* Content Area */}
                    <div className="p-8 lg:p-10 flex flex-col flex-grow relative z-10">
                      {/* Top Meta */}
                      <div className="flex justify-between items-start mb-10">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-brand-white/40">{study.date}</span>
                        <span className="px-3 py-1 bg-brand-white/[0.03] rounded-full font-mono text-[10px] uppercase tracking-wider text-brand-red border border-brand-white/[0.05]">{study.category}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className="font-display font-medium text-2xl lg:text-[28px] leading-[1.25] text-brand-white mb-5 group-hover:text-brand-white transition-colors duration-500">
                          {study.headline}
                        </h3>
                        <p className="font-body font-light text-brand-white/60 text-[15px] lg:text-[16px] leading-relaxed mb-10 line-clamp-2">
                          {study.teaser}
                        </p>
                      </div>

                      {/* Bottom section (Action) */}
                      <div className="mt-auto pt-6 border-t border-brand-white/[0.06]">
                        <div className="flex justify-between items-center">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-brand-white/30 flex items-center gap-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            {study.readTime}
                          </span>
                          <span className="font-mono text-[11px] uppercase tracking-widest text-brand-red flex items-center gap-2 group-hover:text-brand-white transition-colors duration-300">
                            Read More <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 pt-10 pb-20 border-t border-brand-white/[0.06]">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl text-brand-white font-medium mb-6">
              Have a project in mind?
            </h2>
            <p className="font-body text-brand-white/50 text-[15px] md:text-[17px] mb-10 max-w-xl mx-auto">
              Let's discuss how we can transform your brand and accelerate your growth trajectory.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center h-14 px-10 bg-brand-white text-brand-black font-semibold text-sm tracking-wide rounded-none hover:bg-brand-red hover:text-brand-white transition-all duration-300 gap-3 group"
            >
              Start the Conversation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
