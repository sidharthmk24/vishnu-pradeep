"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Compass, Megaphone, UserCircle, Zap, ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const services = [
  {
    num: "01",
    title: "Brand Strategy & Positioning",
    description: "From full brand audits to positioning frameworks and messaging architecture — built from 15+ years of real experience, not templates.",
    ctaHref: "/contact",
    icon: Compass
  },
  {
    num: "02",
    title: "Marketing & Campaign Strategy",
    description: "Campaign architecture, digital marketing planning, and the frameworks that close the gap between marketing activity and brand outcomes.",
    ctaHref: "/contact",
    icon: Megaphone
  },
  {
    num: "03",
    title: "Personal Brand Building for Founders",
    description: "You are the brand. I help founders show up with clarity, consistency, and authority — across platforms and in every room.",
    ctaHref: "/contact",
    icon: UserCircle
  },
  {
    num: "04",
    title: "Digital Transformation Consulting",
    description: "Helping traditional businesses adopt digital strategy and tools without losing what already works.",
    ctaHref: "/contact",
    icon: Zap
  }
];

export default function ServicesPreview() {
  return (
    <section className="bg-brand-black py-14 md:py-22 container  mx-auto px-6 lg:px-20   relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className=" relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          overline="WHAT I DO"
          headline="Build. Position. Scale."
          subcopy="Services built around one target outcome — moving your business forward with clarity and strategic leverage."
          className="mb-20"
        />

        {/* Premium Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                key={service.title}
                className="group relative bg-brand-card p-6 md:p-12 flex flex-col justify-between border border-brand-white/[0.06] overflow-hidden transition-all duration-500 hover:border-brand-red/30 hover:shadow-[0_0_40px_rgba(225,49,49,0.05)]"
              >
                {/* Background Number Watermark */}
                <span className="absolute -right-4 -top-8 font-display font-bold text-[180px] leading-none text-brand-white/[0.02] group-hover:text-brand-red/[0.03] transition-colors duration-700 pointer-events-none select-none z-0">
                  {service.num}
                </span>

                <div className="flex flex-col gap-8 relative z-10">
                  {/* Top Row: Icon & Number */}
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-full bg-brand-white/[0.03] flex items-center justify-center text-brand-white/50 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-brand-white transition-all duration-500 ease-out border border-brand-white/[0.05] group-hover:border-brand-red">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    {/* <span className="font-mono text-[13px] text-brand-white/30 group-hover:text-brand-red transition-colors duration-500">
                      {service.num}
                    </span> */}
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="font-display font-bold text-[24px] md:text-[28px] leading-tight text-brand-white group-hover:text-brand-red transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="font-body text-brand-white/55 text-[15px] leading-relaxed mt-4 max-w-[90%]">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: CTA */}
                <div className="mt-12 relative z-10 flex items-center w-full">
                  <div className="h-[1px] flex-grow bg-brand-white/[0.06] group-hover:bg-brand-red/20 transition-colors duration-500 mr-6" />
                  <Link
                    href={service.ctaHref}
                    className="text-[13px] text-brand-white/60 group-hover:text-brand-red font-mono uppercase tracking-widest flex items-center gap-2 whitespace-nowrap transition-colors duration-500"
                  >
                    Start Conversation 
                    <ArrowRight size={16} className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
