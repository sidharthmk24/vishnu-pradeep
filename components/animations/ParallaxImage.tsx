"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxImage({
  src,
  alt = "",
  className = "",
  aspectRatio = "aspect-video",
}: {
  src: string;
  alt?: string;
  className?: string;
  aspectRatio?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Shifts the image slowly inside its clipping boundaries (scaled to 1.15 to hide boundary edges)
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative ${aspectRatio} w-full border border-brand-white/10 ${className}`}
    >
      <motion.div
        style={{ y, scale: 1.15 }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        
        {/* Subtle premium dark ambient gradient overlay for luxury contrast integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
}
