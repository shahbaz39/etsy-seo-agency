"use client";

import {
  createElement,
  useRef,
  useState,
  useLayoutEffect,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealTag =
  | "div"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "li";

type RevealProps = {
  children: ReactNode;
  as?: RevealTag;
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

  return createElement(
    as,
    {
      ref,
      className: cn(className),
      style: mounted ? undefined : { opacity: 0 },
    },
    children
  );
}
