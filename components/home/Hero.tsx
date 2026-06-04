"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  const { scrollY } = useScroll();
  const [hoveredText, setHoveredText] = useState<"strategy" | "creativity" | null>(null);

  // Subtle vertical parallax scrolling speed for background glows and floating cards
  const yBgLeft = useTransform(scrollY, [0, 1000], [0, -150]);
  const yBgRight = useTransform(scrollY, [0, 1000], [0, 120]);

  const yCardLeft = useTransform(scrollY, [0, 1000], [0, -90]);
  const yCardRight = useTransform(scrollY, [0, 1000], [0, 70]);
  const yCardBottom = useTransform(scrollY, [0, 1000], [0, -40]);

  // Cursor tracking for premium radial spotlight and 3D floating effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  // Floating 3D card tilt offsets based on mouse position
  const cardTiltX = useSpring(useTransform(mouseX, [0, 1920], [-12, 12]), springConfig);
  const cardTiltY = useSpring(useTransform(mouseY, [0, 1080], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const tickerItems = [
    "Brand Strategy & Positioning",
    "Creative Campaigns That Scale",
    "Founder Authority Architecture",
    "D2C & B2B Growth Leverage",
    "15+ Years Real-World Experience",
    "Based In South India",
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-brand-black flex flex-col justify-center items-center text-center px-6 pt-10 pb-30 md:pt-28 md:pb-40 relative overflow-hidden group"
    >
      {/* CSS Keyframe definition for self-contained, portable, high-performance marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
      `}} />

      {/* Subtle Blueprint Grid Overlay with radial mask fading */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-20" />

      {/* Dynamic Cursor Spotlight Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-10 transition-all duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(${hoveredText ? "750px" : "600px"} circle at ${spotlightX}px ${spotlightY}px, ${hoveredText === "strategy" ? "rgba(225, 49, 49, 0.12)" : hoveredText === "creativity" ? "rgba(225, 49, 49, 0.12)" : "rgba(225, 49, 49, 0.08)"}, transparent 80%)`,
        }}
      />

      {/* Premium Subtle Ambient Background Orbs */}
      <motion.div
        style={{ y: yBgLeft }}
        className="absolute top-[15%] left-[5%] w-[45vw] h-[45vw] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none -z-30"
      />
      <motion.div
        style={{ y: yBgRight }}
        className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] bg-brand-red/3 rounded-full blur-[120px] pointer-events-none -z-30"
      />

      {/* Interactive 3D Floating Expertise Cards (Hidden on mobile/tablet, visually striking on desktop) */}

      {/* Card A: Top-Left */}
      <motion.div
        style={{ y: yCardLeft, x: cardTiltX, rotateY: cardTiltX, rotateX: cardTiltY }}
        animate={{
          scale: hoveredText === "strategy" ? 1.08 : 1,
          borderColor: hoveredText === "strategy" ? "rgba(225, 49, 49, 0.4)" : "rgba(255, 255, 255, 0.1)",
          backgroundColor: hoveredText === "strategy" ? "rgba(31, 31, 31, 0.6)" : "rgba(31, 31, 31, 0.3)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="hidden lg:flex absolute top-[12%] left-[8%] z-10 items-center justify-center gap-3 backdrop-blur-md border w-[230px] px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-none transition-colors duration-300"
      >
        <div className={`w-1.5 h-1.5 rotate-45 transition-colors duration-300 ${hoveredText === "strategy" ? "bg-brand-white" : "bg-brand-red"}`} />
        <span className="font-mono text-[9px] text-brand-white/80 tracking-widest uppercase">
          POSITIONING BLUEPRINT / 15Y
        </span>
      </motion.div>

      {/* Card B: Middle-Right */}
      <motion.div
        style={{ y: yCardRight, x: useTransform(cardTiltX, (v) => -v * 1.2), rotateY: cardTiltX, rotateX: cardTiltY }}
        animate={{
          scale: hoveredText === "creativity" ? 1.08 : 1,
          borderColor: hoveredText === "creativity" ? "rgba(225, 49, 49, 0.4)" : "rgba(255, 255, 255, 0.1)",
          backgroundColor: hoveredText === "creativity" ? "rgba(31, 31, 31, 0.6)" : "rgba(31, 31, 31, 0.3)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="hidden lg:flex absolute top-[12%] right-[7%] z-10 items-center justify-center gap-3 backdrop-blur-md border w-[230px] px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-none transition-colors duration-300"
      >
        <div className={`w-1.5 h-1.5 rotate-45 transition-colors duration-300 ${hoveredText === "creativity" ? "bg-brand-white animate-none" : "bg-brand-red animate-pulse"}`} />
        <span className="font-mono text-[9px] text-brand-white/80 tracking-widest uppercase">
          100+ CLIENT CAMPAIGNS
        </span>
      </motion.div>

      <motion.div
        style={{ y: yCardBottom, x: useTransform(cardTiltX, (v) => v * 0.8), rotateY: cardTiltX, rotateX: cardTiltY }}
        className="hidden lg:flex absolute bottom-[40%] right-[7%] z-10 items-center justify-center gap-3 backdrop-blur-md bg-brand-card/30 border border-brand-white/10 w-[230px] px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-none hover:border-brand-red/40 transition-colors duration-300"
      >
        <div className="w-1.5 h-1.5 bg-brand-red rotate-45" />
        <span className="font-mono text-[9px] text-brand-white/80 tracking-widest uppercase">
          15+ YEARS EXPERIENCE
        </span>
      </motion.div>

      {/* Card C: Bottom-Left */}
      <motion.div
        style={{ y: yCardBottom, x: useTransform(cardTiltX, (v) => v * 0.8), rotateY: cardTiltX, rotateX: cardTiltY }}
        className="hidden lg:flex absolute bottom-[40%] left-[8%] z-10 items-center justify-center gap-3 backdrop-blur-md bg-brand-card/30 border border-brand-white/10 w-[230px] px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-none hover:border-brand-red/40 transition-colors duration-300"
      >
        <div className="w-1.5 h-1.5 bg-brand-red rotate-45" />
        <span className="font-mono text-[9px] text-brand-white/80 tracking-widest uppercase">
          D2C & B2B GROWTH LEVERAGE
        </span>
      </motion.div>

      {/* Glassmorphic Availability Badge */}
      {/* <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 border border-brand-white/10 bg-brand-white/[0.03] backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 select-none"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse shadow-[0_0_8px_#e13131]" />
        <span className="font-mono text-[9px] text-brand-white/80 tracking-widest uppercase">
          AVAILABLE FOR SELECTIVE CAMPAIGNS
        </span>
      </motion.div> */}

      {/* Premium Staggered Red Divider */}
      {/* <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-12 h-[2px] bg-brand-red mx-auto mb-6 origin-center"
      /> */}

      {/* Interactive Design Coordinate Label */}
      {/* <div className="overflow-hidden mb-2">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 select-none"
        >
          <span className="font-mono text-[8px] text-brand-white/30 tracking-[0.2em] uppercase">[ SYSTEMS // 01 ]</span>
        </motion.div>
      </div> */}

      {/* Overline drift entry */}
      <div className="overflow-hidden mb-5">
        <motion.span
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-brand-red uppercase tracking-widest text-[11px] block font-semibold select-none"
        >
          MARKETER & CREATIVE STRATEGIST — SOUTH INDIA
        </motion.span>
      </div>

      {/* Bespoke masked line-by-line editorial heading slide up with interactive word overrides */}
      <h1 className="font-display font-bold text-brand-white text-[clamp(44px,6.8vw,86px)] leading-[1.08] max-w-5xl mx-auto flex flex-col items-center select-none">
        <span className="block overflow-hidden py-1">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Strategy that{" "}
            <span
              onMouseEnter={() => setHoveredText("strategy")}
              onMouseLeave={() => setHoveredText(null)}
              className="font-display italic text-brand-red tracking-wide pr-2 relative inline-block cursor-pointer transition-all duration-500 group/word"
            >
              builds
              {/* Luxury micro-glow background overlay */}
              {/* <span className="absolute -inset-x-3 inset-y-0 bg-brand-red/10 blur-[8px] rounded-md opacity-0 group-hover/word:opacity-100 transition-opacity duration-500 -z-10" /> */}
              {/* Luxury animated underline */}
              {/* <span className="absolute bottom-2 left-0 w-full h-[2px] bg-brand-red origin-left scale-x-0 group-hover/word:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" /> */}
            </span>
            .
          </motion.span>
        </span>
        <span className="block overflow-hidden py-1">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Creativity that{" "}
            <span
              onMouseEnter={() => setHoveredText("creativity")}
              onMouseLeave={() => setHoveredText(null)}
              className="font-display italic text-brand-red tracking-wide pr-2 relative inline-block cursor-pointer transition-all duration-500  group/word"
            >
              sells
              {/* Luxury micro-glow background overlay */}
              {/* <span className="absolute -inset-x-3 inset-y-0 bg-brand-red/10 blur-[8px] rounded-md opacity-0 group-hover/word:opacity-100 transition-opacity duration-500 -z-10" /> */}
              {/* Luxury animated underline */}
              {/* <span className="absolute bottom-2 left-0 w-full h-[2px] bg-brand-red origin-left scale-x-0 group-hover/word:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" /> */}
            </span>
            .
          </motion.span>
        </span>
      </h1>

      {/* Description drift entry */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.58, ease: "easeOut" }}
        className="font-body text-brand-white/70 text-[16px] md:text-[19px] max-w-2xl mx-auto leading-relaxed mt-8 tracking-wide font-light"
      >
        Helping founders and business leaders build brands that scale  <br />
        <span className="text-brand-white font-normal border-b border-brand-white/20 pb-0.5">
          15+ years of real-world agency experience
        </span>
        , not theory.
      </motion.p>

      {/* Interactive buttons staggered reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full sm:w-auto relative z-20"
      >
        <Button href="/contact" variant="primary" className="w-full sm:w-auto uppercase tracking-wider text-[11px] font-semibold py-4 px-9 border border-brand-red">
          Work With Me
        </Button>
        <Button href="/portfolio" variant="secondary" className="w-full sm:w-auto uppercase tracking-wider text-[11px] font-semibold py-4 px-9">
          See My Work
        </Button>
      </motion.div>

      {/* Micro-animating minimalist scroll indicator */}
      {/* <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity duration-300 pointer-events-none hidden md:flex select-none">
        <span className="font-mono text-[8px] text-brand-white/40 tracking-widest uppercase">SCROLL</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-brand-white/20 to-transparent relative overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-[1px] h-4 bg-brand-red"
          />
        </div>
      </div> */}

      {/* Infinite slow-scrolling capabilities ticker */}
      <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-brand-white/[0.06] bg-brand-black/50 backdrop-blur-md overflow-hidden pointer-events-none select-none">
        <div className="animate-marquee flex gap-16 whitespace-nowrap">
          {/* Main items */}
          <div className="flex gap-16 items-center">
            {tickerItems.map((item, idx) => (
              <span key={idx} className="flex items-center gap-16 font-mono text-[10px] text-brand-white/40 tracking-widest uppercase">
                {item}
                <span className="w-1.5 h-1.5 rotate-45 bg-brand-red/60 block" />
              </span>
            ))}
          </div>
          {/* Duplicated items for seamless looping */}
          <div className="flex gap-16 items-center">
            {tickerItems.map((item, idx) => (
              <span key={`dup-${idx}`} className="flex items-center gap-16 font-mono text-[10px] text-brand-white/40 tracking-widest uppercase">
                {item}
                <span className="w-1.5 h-1.5 rotate-45 bg-brand-red/60 block" />
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}


