import FadeUp from "../animations/FadeUp";
import SplitText from "../animations/SplitText";

export default function SectionHeader({
  overline,
  headline,
  subcopy,
  align = "left",
  className = ""
}: {
  overline: string;
  headline: string;
  subcopy?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}>
      <FadeUp delay={0.05}>
        <span className="font-mono text-brand-red uppercase tracking-widest text-[11px] mb-3 block">
          {overline}
        </span>
      </FadeUp>
      <h2 className={`font-display font-bold text-brand-white ${align === "center" ? "text-4xl md:text-[44px]" : "text-4xl md:text-[38px]"} leading-tight`}>
        <SplitText>{headline}</SplitText>
      </h2>
      {subcopy && (
        <FadeUp delay={0.25}>
          <p className={`font-body text-brand-white/60 text-16px md:text-[20px] mt-4 ${align === "center" ? "max-w-xl mx-auto" : "max-w-2xl"} leading-relaxed`}>
            {subcopy}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
