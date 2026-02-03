import { GlowingEffect } from "./glowing-effect";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function GlowingButton({
  children,
  variant = "primary",
  className,
  ...props
}: GlowingButtonProps) {
  const baseStyles = "relative px-8 py-4 rounded-full font-light tracking-wider transition-all duration-500 overflow-hidden group/btn";

  const variantStyles = {
    primary: "bg-gold text-black hover:shadow-[0_0_40px_rgba(212,197,176,0.6),0_0_80px_rgba(212,197,176,0.3)] hover:scale-105 active:scale-95",
    secondary: "bg-transparent border-2 border-gold text-gold hover:bg-gold/10 hover:shadow-[0_0_30px_rgba(212,197,176,0.4)] hover:scale-105 active:scale-95"
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-shimmer transition-opacity duration-500"></div>

      <div className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-full bg-gold/30 blur-xl animate-pulse-glow" style={{backgroundImage: 'linear-gradient(to right, transparent, #D4C5B0, transparent)'}}></div>
      </div>

      <GlowingEffect
        spread={50}
        glow={true}
        disabled={false}
        proximity={120}
        inactiveZone={0.01}
        borderWidth={3}
        variant="default"
        blur={8}
      />

      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </button>
  );
}
