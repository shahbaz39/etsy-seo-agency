"use client";

import { useRef, type ReactNode, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  start?: string;
  once?: boolean;
};

export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  y = 28,
  duration = 1,
  start = "top 85%",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const Tag = as as keyof JSX.IntrinsicElements;

  useLayoutEffect(() => {
    setMounted(true);
    if (!ref.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      gsap.set(ref.current, { opacity: 1, y: 0, clipPath: "none" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(ref.current, {
        opacity: 0,
        y,
        clipPath: "inset(0 0 100% 0)",
      });
      gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        duration,
        delay,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [delay, duration, start, once, y]);

  return (
    // @ts-expect-error — dynamic tag
    <Tag
      ref={ref}
      className={cn(className)}
      style={mounted ? undefined : { opacity: 0 }}
    >
      {children}
    </Tag>
  );
}
