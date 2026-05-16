"use client";

import { Fragment, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type Segment = { text: string; className?: string };

type SplitWordsProps = {
  segments: Segment[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  stagger?: number;
  duration?: number;
};

export function SplitWords({
  segments,
  className,
  as = "h1",
  delay = 0.1,
  stagger = 0.07,
  duration = 1,
}: SplitWordsProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as;

  useLayoutEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const words = ref.current!.querySelectorAll<HTMLElement>("[data-word]");
      if (!words.length) return;

      if (prefersReduced) {
        gsap.set(words, { yPercent: 0, opacity: 1 });
        return;
      }

      gsap.set(words, { yPercent: 110, opacity: 0 });
      gsap.to(words, {
        yPercent: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: "expo.out",
      });
    }, ref);

    return () => ctx.revert();
  }, [delay, stagger, duration]);

  return (
    // @ts-expect-error — dynamic tag
    <Tag
      ref={ref}
      className={cn(className)}
      aria-label={segments.map((s) => s.text).join(" ")}
    >
      {segments.map((seg, segIdx) => {
        const words = seg.text.split(/(\s+)/).filter(Boolean);
        return (
          <Fragment key={segIdx}>
            {words.map((w, i) => {
              if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
              return (
                <span
                  key={i}
                  className="inline-block overflow-hidden align-bottom pb-[0.12em]"
                  aria-hidden
                >
                  <span
                    data-word
                    className={cn(
                      "inline-block will-change-transform",
                      seg.className
                    )}
                  >
                    {w}
                  </span>
                </span>
              );
            })}
            {segIdx < segments.length - 1 && " "}
          </Fragment>
        );
      })}
    </Tag>
  );
}
