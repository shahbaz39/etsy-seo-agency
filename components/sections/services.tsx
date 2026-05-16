"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  Tags,
  FileEdit,
  Megaphone,
  ClipboardCheck,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: Search,
    title: "Etsy SEO Optimization",
    desc: "On-page SEO tuned to Etsy's algorithm — titles, tags, attributes, and categories aligned to real buyer search intent so your listings rank where it matters.",
  },
  {
    icon: Tags,
    title: "Etsy Keyword Research",
    desc: "Data-driven keywords pulled from real Etsy search behavior — long-tail, seasonal, and high-conversion terms mapped to every listing in your shop.",
  },
  {
    icon: FileEdit,
    title: "Etsy Listing Optimization",
    desc: "Listing titles, descriptions, tags, and bullet flow rewritten to lift Etsy CTR and turn shoppers into buyers — photo and thumbnail strategy included.",
  },
  {
    icon: Megaphone,
    title: "Etsy Ads Management",
    desc: "Profitable Etsy Ads campaigns: bid strategy, listing-level budget allocation, negative-listing pruning, and weekly ROAS reporting.",
  },
  {
    icon: ClipboardCheck,
    title: "Etsy Shop Audit",
    desc: "60-point Etsy shop audit covering SEO, branding, photography, policies, shipping profiles, and conversion — delivered with a prioritized fix list.",
  },
  {
    icon: Target,
    title: "Etsy Conversion Optimization",
    desc: "A/B testing on Etsy listing photos, pricing, and copy — plus reviews and badge strategy — to compound revenue from the Etsy traffic you already have.",
  },
];

export function Services() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!gridRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-service-card]");
      if (prefersReduced) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }
      gsap.set(cards, { opacity: 0, y: 28 });
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: { each: 0.07, from: "start" },
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="What we do"
          title={
            <>
              End-to-end services to{" "}
              <span className="gradient-text">scale your shop</span>
            </>
          }
          description="Everything you need to rank higher, convert better, and grow predictably — under one strategic roof."
        />

        <div ref={gridRef} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              data-service-card
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-default bg-card p-6 shadow-card transition duration-300 will-change-transform hover:-translate-y-1.5 hover:shadow-soft"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-300/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-warm-grad opacity-0 blur-2xl transition duration-500 group-hover:opacity-20" />

              <div className="relative flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] dark:bg-brand-500/10 dark:ring-brand-500/20">
                  <s.icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600" />
              </div>

              <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal as="div" duration={0.7}>
          <span className="inline-flex items-center rounded-full border border-brand-200/60 bg-brand-50/60 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-300/20 dark:bg-brand-500/10 dark:text-brand-300">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={0.08}
        duration={1}
        className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl"
      >
        {title}
      </Reveal>
      {description && (
        <Reveal
          as="p"
          delay={0.18}
          duration={0.9}
          className="mt-3 text-base text-muted md:text-lg"
        >
          {description}
        </Reveal>
      )}
    </div>
  );
}
