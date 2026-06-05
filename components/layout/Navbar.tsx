"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    // { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-200 border-b border-brand-white/[0.06] ${
        isScrolled ? "bg-brand-black/90 backdrop-blur-sm" : "bg-brand-black"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-display font-semibold text-brand-white text-[18px]">
            Vishnu Pradeep
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-[16px] font-light transition-colors duration-200 hover:text-brand-red ${
                      isActive ? "text-brand-white" : "text-brand-white/80"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-red"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/contact"
              className="bg-brand-red text-brand-white font-medium text-[16px] px-5 py-2 hover:bg-brand-red-hv transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-brand-white p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brand-black flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-brand-white p-2"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-medium ${
                  pathname === "/" ? "text-brand-red" : "text-brand-white"
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-medium ${
                    pathname === link.href ? "text-brand-red" : "text-brand-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-brand-red text-brand-white font-medium text-lg px-8 py-3 hover:bg-brand-red-hv transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
