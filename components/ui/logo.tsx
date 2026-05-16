import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl bg-warm-grad shadow-glow",
        className ?? "h-9 w-9"
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[55%] w-[55%]"
      >
        <rect x="4" y="14" width="3.2" height="6" rx="1.6" fill="white" opacity="0.95" />
        <rect x="10.4" y="9" width="3.2" height="11" rx="1.6" fill="white" opacity="0.95" />
        <rect x="16.8" y="4" width="3.2" height="16" rx="1.6" fill="white" />
        <path
          d="M16.5 5.5 L18.4 3.6 L20.3 5.5"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-base font-semibold tracking-tight",
        className
      )}
    >
      Craft<span className="gradient-text">rank</span>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <LogoMark />
      <Wordmark />
    </span>
  );
}
