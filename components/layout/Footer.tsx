import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-white/[0.06] pt-20 pb-10 relative overflow-hidden">
      {/* Ambient Red Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <span className="font-display font-bold text-brand-white text-3xl md:text-4xl mb-4">
              Vishnu Pradeep
            </span>
            <span className="font-mono text-brand-white/40 text-[12px] tracking-[0.2em] uppercase leading-relaxed max-w-[300px]">
              Marketer & Creative Strategist based in South India.
            </span>
          </div>

          

          {/* Links & Socials Mobile Wrapper */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-7 gap-8 md:gap-0 w-full">
            {/* Links Col */}
            <div className="md:col-span-4 flex flex-col items-start text-left">
              <h4 className="font-mono text-brand-white text-[11px] tracking-[0.2em] uppercase mb-6 border-b border-brand-red/30 pb-3 inline-block">Explore</h4>
              <div className="flex flex-col gap-4">
                <Link href="/portfolio" className="group font-body text-brand-white/60 text-[15px] hover:text-brand-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3">
                  {/* <span className="w-1.5 h-1.5 rounded-full bg-brand-white/10 group-hover:bg-brand-red transition-colors duration-300" /> */}
                  Portfolio
                </Link>
                <Link href="/contact" className="group font-body text-brand-white/60 text-[15px] hover:text-brand-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3">
                  {/* <span className="w-1.5 h-1.5 rounded-full bg-brand-white/10 group-hover:bg-brand-red transition-colors duration-300" /> */}
                  Contact
                </Link>
              </div>
            </div>

            {/* Socials Col */}
            <div className="md:col-span-3 flex flex-col items-start text-left">
              <h4 className="font-mono text-brand-white text-[11px] tracking-[0.2em] uppercase mb-6 border-b border-brand-red/30 pb-3 inline-block">Connect</h4>
              <div className="flex gap-4">
                <Link href="https://www.instagram.com/flavoursof.vishnu" className="w-11 h-11 rounded-full bg-brand-white/[0.03] border border-brand-white/[0.06] flex items-center justify-center text-brand-white/60 hover:text-brand-white hover:bg-brand-red hover:border-brand-red transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group" aria-label="Instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/in/vishnu-pradeep93/" className="w-11 h-11 rounded-full bg-brand-white/[0.03] border border-brand-white/[0.06] flex items-center justify-center text-brand-white/60 hover:text-brand-white hover:bg-brand-red hover:border-brand-red transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group" aria-label="LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-brand-white/[0.06] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left md:text-auto">
          <span className="font-mono text-brand-white/40 text-[11px] tracking-[0.1em] uppercase">
            © {new Date().getFullYear()} Vishnu Pradeep. All rights reserved.
          </span>
          <span className="font-mono text-brand-white/20 text-[10px] tracking-[0.2em] uppercase">
            Designed to scale.
          </span>
        </div>
      </div>
    </footer>
  );
}
