"use client";

import { motion, Variants } from "framer-motion";

export default function SplitText({
  children,
  delay = 0,
  className = "",
}: {
  children: string;
  delay?: number;
  className?: string;
}) {
  const words = children.split(" ");

  // Container variants to stagger children
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  // Child variants for individual word slide-ups with a premium cubic-bezier ease
  const childVariants: Variants = {
    hidden: {
      y: "115%",
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1], // Elegant luxury deceleration ease (easeOutExpo)
      },
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden mr-[0.24em] py-[0.1em] -my-[0.1em]"
        >
          <motion.span
            variants={childVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
