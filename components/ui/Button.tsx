import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-body font-medium text-[15px] px-8 py-3.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-none";

  const variants = {
    primary: "bg-brand-red text-brand-white hover:bg-brand-red-hv hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(225,49,49,0.3)]",
    secondary: "border border-brand-white/30 text-brand-white hover:bg-brand-white hover:text-brand-black hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.06)]",
    ghost: "text-brand-red hover:underline px-0 py-0 hover:text-brand-red-hv",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
