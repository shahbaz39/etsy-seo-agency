"use client";

import { useRef, type ReactNode, useLayoutEffect } from "react";
import { gsap } from "gsap";

export function Magnetic({
  children,
  strength = 0.35,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const wrap = useRef<HTMLSpanElement | null>(null);
  const target = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const el = wrap.current;
    const tgt = target.current;
    if (!el || !tgt) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const xTo = gsap.quickTo(tgt, "x", { duration: 0.55, ease: "expo.out" });
    const yTo = gsap.quickTo(tgt, "y", { duration: 0.55, ease: "expo.out" });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      xTo(x * strength);
      yTo(y * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <span ref={wrap} className="inline-block">
      <span ref={target} className="inline-block will-change-transform">
        {children}
      </span>
    </span>
  );
}
