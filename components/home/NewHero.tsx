import Image from "next/image";
import Button from "../ui/Button";

export default function NewHero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-brand-black overflow-hidden flex flex-col">
      {/* Red ambient glow behind the image */}
      {/* <div className="absolute right-0 bottom-0 w-[50vw] h-[50vw] bg-brand-red/20 rounded-full blur-[150px] pointer-events-none translate-x-1/4 translate-y-1/4" /> */}

      <div className="container mx-auto px-6 lg:px-20 w-full flex-grow relative z-10 flex flex-col justify-between lg:justify-center pt-12 lg:pt-0">
        
        {/* Left Content (Text on top for mobile, left for desktop) */}
        <div className="w-full lg:w-[65%] flex flex-col justify-center pb-0 lg:pb-20 lg:py-0 relative z-20 text-center lg:text-left items-center lg:items-start flex-grow lg:flex-grow-0">
          <h1 className="font-display font-medium text-brand-white text-3xl md:text-6xl lg:text-7xl leading-[1.30] mb-6 lg:mb-4 whitespace-nowrap lg:whitespace-normal">
            Strategy that <span className="text-brand-red">builds.</span>
            <br />
            Creativity that <span className="text-brand-red">sells.</span>
          </h1>

          <p className="font-body font-thin text-brand-white/80 text-[14px] sm:text-[18px] md:text-[20px] max-w-full lg:max-w-[60%] leading-[1.6] mb-0 lg:mb-10 mx-auto lg:mx-0">
            Helping founders and business leaders<br className="block lg:hidden" />
            build brands that scale<br className="block lg:hidden" />
            15+ years of real-world agency<br />
            experience, not theory.
          </p>

          <div className=" flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-5 w-full sm:w-auto hidden lg:flex">
            <Button href="/contact" variant="primary" className="font-semibold text-[15px] px-8 py-3.5 w-full sm:w-auto">
              Work With Me
            </Button>
            <Button href="/portfolio" variant="secondary" className="font-semibold text-[15px] px-8 py-3.5 w-full sm:w-auto">
              See My Work
            </Button>
          </div>
        </div>

        {/* Mobile Image (Visible only on small screens, stacked on bottom) */}
        <div className="w-full flex lg:hidden justify-center items-end relative h-[45vh] min-h-[350px] z-10 mt-0 mb-10">
          <div className="relative w-full h-full max-w-[400px]">
            <Image
              src="/Hero-new.png"
              alt="Vishnu Pradeep"
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
            {/* Gradient mask to blend the bottom of the image into the background */}
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#161616] via-[#161616]/70 to-transparent z-10" />
            
            {/* Mobile Buttons placed on the image */}
            <div className="absolute -bottom-8 left-0 right-0 flex flex-col sm:flex-row items-center justify-center gap-3 z-20">
              <Button href="/contact" variant="primary" className="font-semibold text-[14px] px-6 py-3 w-[90%] sm:w-auto shadow-[0_4px_20px_rgba(225,49,49,0.25)]">
                Work With Me
              </Button>
              <Button href="/portfolio" variant="secondary" className="font-semibold text-[14px] px-6 py-3 w-[90%] sm:w-auto backdrop-blur-md bg-brand-black/20">
                See My Work
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image - Absolute positioned for perfect bottom alignment (Hidden on mobile) */}
        <div className="hidden lg:flex absolute bottom-0 right-0 lg:right-0 w-full lg:w-[55%] h-[60%] lg:h-[95%] pointer-events-none items-end justify-center lg:justify-end z-10">
          <div className="relative w-full h-full max-w-[500px] lg:max-w-[700px]">
            <Image
              src="/Hero-new.png"
              alt="Vishnu Pradeep"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Gradient mask to blend the bottom of the image into the background */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#161616] to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
