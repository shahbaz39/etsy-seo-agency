"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView, useMotionValue, useTransform, animate, motion } from "framer-motion";
import { useEffect } from "react";
import { SectionHeader } from "./services";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    label: "Avg. traffic growth",
    value: 312,
    suffix: "%",
    desc: "Across active retainers in the last 12 months.",
  },
  {
    label: "Revenue generated",
    value: 18.4,
    suffix: "M",
    prefix: "$",
    desc: "Tracked attributable revenue for our clients.",
  },
  {
    label: "Listings optimized",
    value: 12800,
    suffix: "+",
    desc: "Hand-optimized listings across 500+ shops.",
  },
  {
    label: "Client success rate",
    value: 98,
    suffix: "%",
    desc: "Shops that hit their growth target in 90 days.",
  },
];

export function Results() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!gridRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-stat-card]");
      if (prefersReduced) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }
      gsap.set(cards, { opacity: 0, y: 32 });
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
        stagger: { each: 0.08, from: "start" },
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="results" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Results that compound"
          title={
            <>
              Real numbers from{" "}
              <span className="gradient-text">real Etsy shops</span>
            </>
          }
          description="We measure what matters: impressions, rank, conversion rate, and revenue. Here's what our portfolio looks like in aggregate."
        />

        <div
          ref={gridRef}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              data-stat-card
              key={s.label}
              className="group relative overflow-hidden rounded-2xl border border-default bg-card p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-warm-grad opacity-10 blur-2xl transition duration-500 group-hover:opacity-30" />
              <div className="text-sm text-muted">{s.label}</div>
              <div className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                <Counter
                  to={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.value % 1 !== 0 ? 1 : 0}
                />
              </div>
              <p className="mt-3 text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    v >= 1000 && !decimals
      ? Math.round(v).toLocaleString()
      : v.toFixed(decimals)
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, to, count]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span className="gradient-text">{prefix}</span>
      <motion.span className="gradient-text">{rounded}</motion.span>
      <span className="gradient-text">{suffix}</span>
    </span>
  );
}
