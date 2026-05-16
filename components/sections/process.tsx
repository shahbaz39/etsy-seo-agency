"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardCheck, Search, FileEdit, TrendingUp } from "lucide-react";
import { SectionHeader } from "./services";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    n: "01",
    icon: ClipboardCheck,
    title: "Audit",
    desc: "We benchmark your shop against top performers in your niche — SEO, branding, conversion, and policies.",
  },
  {
    n: "02",
    icon: Search,
    title: "Research",
    desc: "Deep keyword research using real Etsy search data to identify head terms and long-tail goldmines.",
  },
  {
    n: "03",
    icon: FileEdit,
    title: "Optimization",
    desc: "We rewrite listings, restructure tags, and tune attributes — each change tracked against impact.",
  },
  {
    n: "04",
    icon: TrendingUp,
    title: "Growth",
    desc: "Ongoing iteration, ad management, and reporting — compounding gains month after month.",
  },
];

export function Process() {
  const root = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!root.current || !pinRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const desktop = window.matchMedia("(min-width: 1024px)");

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set("[data-step]", { opacity: 1, y: 0 });
        gsap.set("[data-progress-fill]", { scaleX: 1 });
        return;
      }

      const stepEls = gsap.utils.toArray<HTMLElement>("[data-step]");
      const iconEls = gsap.utils.toArray<HTMLElement>("[data-step-icon]");

      gsap.set(stepEls, { opacity: 0.2, y: 12 });
      gsap.set(iconEls, { scale: 0.92 });
      gsap.set("[data-progress-fill]", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      if (!desktop.matches) {
        // Mobile / tablet: sequential reveal, no pin.
        stepEls.forEach((el, i) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          });
          gsap.to(iconEls[i], {
            scale: 1,
            duration: 0.6,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          });
        });
        gsap.to("[data-progress-fill]", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        });
        return;
      }

      // Desktop: pin only the steps row, sit it comfortably in viewport mid.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top 32%",
          end: "+=1600",
          scrub: 0.8,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      tl.to("[data-progress-fill]", { scaleX: 1, ease: "none" }, 0);

      stepEls.forEach((el, i) => {
        const t = i / stepEls.length;
        tl.to(
          el,
          { opacity: 1, y: 0, duration: 0.4, ease: "expo.out" },
          t
        ).to(
          iconEls[i],
          { scale: 1.08, duration: 0.3, ease: "back.out(2)" },
          t
        );
        if (i > 0) {
          tl.to(
            iconEls[i - 1],
            { scale: 1, duration: 0.3, ease: "power2.out" },
            t
          );
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={root} className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="How we work"
          title={
            <>
              A proven{" "}
              <span className="gradient-text">4-step process</span>
            </>
          }
          description="A repeatable system refined across hundreds of Etsy shops — designed to compound results, not chase trends."
        />

        <div ref={pinRef} className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-charcoal-100/70 dark:bg-charcoal-800 lg:block" />
          <div
            data-progress-fill
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-warm-grad lg:block"
            style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
          />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((s) => (
              <div data-step key={s.n} className="relative">
                <div
                  data-step-icon
                  className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-default bg-card shadow-card"
                >
                  <s.icon className="h-6 w-6 text-brand-600" />
                </div>
                <div className="mt-5 text-xs font-semibold tracking-[0.2em] text-brand-600">
                  STEP {s.n}
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
