"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";
import Button from "../ui/Button";

const projects = [
  {
    num: "01",
    tag: "BRAND STRATEGY",
    title: "The Cost of Consensus: Rebuilding a Legacy B2B Brand",
    description: "How a 20-year-old firm unlocked 40% higher conversion rates by shedding consensus-driven marketing and re-anchoring their positioning around high-ticket operational authority.",
    href: "/case-studies/cost-of-consensus",
    image: "/project-1.png",
  },
  {
    num: "02",
    tag: "DIGITAL TRANSFORMATION",
    title: "Shedding the Legacy: Transitioning to Digital-First",
    description: "A case study on migrating traditional customer-acquisition channels to digital positioning systems without losing brand equity or legacy client relationships.",
    href: "/case-studies/digital-first",
    image: "/project-1.png",
  },
  {
    num: "03",
    tag: "FOUNDER BRAND",
    title: "The Founder Leverage: Accelerating B2B Deal-Flow",
    description: "How we turned a silent tech founder into a visible industry authority, driving direct consulting inquiries and deal-flow without increasing ad spend.",
    href: "/case-studies/founder-leverage",
    image: "/project-1.png",
  }
];

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="bg-brand-black py-14 md:py-22 container mx-auto px-6 lg:px-20  relative">
      <div className="">

        {/* Section Header */}
        <SectionHeader
          overline="Thought Leadership"
          headline="Case Studies & Insights"
          subcopy="Real work, real strategy, real numbers. Insights drawn from rebuilding brands and scaling marketing systems in the real world."
          className="mb-20"
        />

        {/* Bespoke Sticky Split-Showcase Container */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">

          {/* LEFT SIDE: Sticky Image Viewport (45% Width) */}
          <div className="hidden lg:flex lg:w-[45%] lg:sticky lg:top-32 z-20 flex-col gap-6">
            <div className="relative aspect-[4/3] w-full border border-brand-white/10 bg-brand-card overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)]">

              {/* Premium Cross-fading Image Canvas */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 1.05, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    fill
                    sizes="(max-width: 1024px) 0vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  {/* Luxury ambient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Project Index Tracker */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-brand-red text-[12px] tracking-widest font-semibold">
                ACTIVE FOCUS
              </span>
              <div className="h-[1px] flex-grow bg-brand-white/10" />
              <span className="font-mono text-brand-white/45 text-[12px]">
                {projects[activeProject].num} / 03
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Scrollable Project List (55% Width) */}
          <div className="w-full lg:w-[55%] flex flex-col lg:border-t border-brand-white/10">
            {projects.map((project, index) => {
              const isActive = activeProject === index;
              return (
                <div
                  key={project.title}
                  onMouseEnter={() => setActiveProject(index)}
                  className="flex flex-col border-t lg:border-t-0 border-b border-brand-white/10 py-10 transition-all duration-300 relative group lg:cursor-pointer"
                >
                  {/* Background interactive hover glow strip */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-brand-white/[0.01] to-transparent -z-10 origin-left scale-x-0 transition-transform duration-300 hidden lg:block ${isActive ? "scale-x-100" : ""}`} />

                  {/* Top metadata line */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-brand-red text-[11px] uppercase tracking-widest">
                      {project.tag}
                    </span>
                    <span className={`font-mono text-[11px] transition-colors duration-200 text-brand-red font-semibold ${isActive ? "lg:text-brand-red lg:font-semibold" : "lg:text-brand-white/30 lg:font-normal"}`}>
                      {project.num}
                    </span>
                  </div>

                  {/* Large Project title shifting on active */}
                  <Link href={project.href} className="block select-none w-fit">
                    <h3 className={`font-display font-normal text-[26px] md:text-[30px] transition-all duration-300 leading-tight text-brand-white max-w-[85%] ${isActive ? "lg:translate-x-2 lg:text-brand-white" : "lg:text-brand-white/50"}`}>
                      {project.title}
                    </h3>
                  </Link>

                  {/* Expandable description block (Always open on Mobile, Accordion on Desktop) */}
                  <div className={`grid transition-all duration-300 ease-in-out grid-rows-[1fr] opacity-100 mt-6 ${isActive ? "lg:grid-rows-[1fr] lg:opacity-100 lg:mt-4" : "lg:grid-rows-[0fr] lg:opacity-0 lg:mt-0"}`}>
                    <div className="overflow-hidden">

                      {/* Mobile Inline Image (Hidden on Desktop) */}
                      <div className="block lg:hidden relative aspect-[4/3] sm:aspect-[16/9] w-full mb-6 border border-brand-white/10 bg-brand-card overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 0vw"
                          className="object-cover"
                        />
                      </div>

                      <p className="font-body font-light text-brand-white/60 text-[16px] leading-relaxed max-w-xl">
                        {project.description}
                      </p>
                      <div className="mt-5 flex gap-4">
                        <Button href={project.href} variant="ghost" className="text-[13px] text-brand-red hover:underline !px-0">
                          View Case Details
                        </Button>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Showcase CTA */}
        <div className="mt-24 text-center">
          <Button href="/case-studies" variant="secondary" className="  text-[11px] py-4 px-8">
            View All Case Studies
          </Button>
        </div>

      </div>
    </section>
  );
}
