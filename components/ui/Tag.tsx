export default function Tag({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`font-mono text-brand-red uppercase tracking-widest text-[10px] ${className}`}>
      {children}
    </span>
  );
}
