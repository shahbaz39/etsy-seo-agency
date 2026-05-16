"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Play, TrendingUp, Search, Sparkles, Star } from "lucide-react";
import { SplitWords } from "@/components/ui/split-words";
import { Magnetic } from "@/components/ui/magnetic";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!root.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-hero-glow]", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to("[data-hero-grid]", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to("[data-hero-mockup]", {
        yPercent: -8,
        scale: 0.985,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom 30%",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden pt-10 pb-20 md:pt-20 md:pb-32"
    >
      <div data-hero-glow className="absolute inset-0 -z-10 bg-hero-glow" />
      <div data-hero-grid className="absolute inset-0 -z-10 grid-bg" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-50/60 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-300/20 dark:bg-brand-500/10 dark:text-brand-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Trusted by 500+ Etsy shops worldwide
          </motion.span>

          <SplitWords
            as="h1"
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl"
            segments={[
              { text: "Rank Higher on Etsy &" },
              { text: "Grow Your Sales", className: "gradient-text" },
            ]}
            delay={0.2}
            stagger={0.055}
            duration={1.1}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg"
          >
            We optimize your Etsy listings, keywords, and ads so your products
            get discovered, ranked, and converted — month after month.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Magnetic>
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-full bg-warm-grad px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:brightness-110"
              >
                Get Free SEO Audit
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <a
              href="#results"
              className="group inline-flex items-center gap-2 rounded-full border border-default bg-card px-6 py-3 text-sm font-medium transition hover:bg-cream-100 dark:hover:bg-charcoal-800"
            >
              <Play className="h-4 w-4 text-brand-600" />
              View Results
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-8 flex items-center justify-center gap-6 text-xs text-muted"
          >
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-brand-400 text-brand-400" />
              ))}
              <span className="ml-1.5">4.9 / 5 from 200+ reviews</span>
            </div>
            <div className="hidden sm:block">No contracts · Cancel anytime</div>
          </motion.div>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <motion.div
      data-hero-mockup
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 max-w-5xl"
    >
      <div className="relative rounded-2xl border border-default bg-card shadow-soft">
        <div className="flex items-center gap-1.5 border-b border-default px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-charcoal-100 dark:bg-charcoal-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-charcoal-100 dark:bg-charcoal-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-charcoal-100 dark:bg-charcoal-600" />
          <div className="ml-4 hidden flex-1 items-center rounded-md bg-cream-100 px-3 py-1 text-[11px] text-muted dark:bg-charcoal-800 sm:flex">
            etsy.com/shop/your-shop · Dashboard
          </div>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-3">
          <div className="rounded-xl border border-default p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted">Visits (30d)</span>
              <TrendingUp className="h-4 w-4 text-brand-600" />
            </div>
            <div className="mt-2 font-display text-2xl font-semibold">48,210</div>
            <div className="mt-1 text-xs text-emerald-600">+128% vs last period</div>
            <SparkBars />
          </div>

          <div className="rounded-xl border border-default p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted">Top Keyword Rank</span>
              <Search className="h-4 w-4 text-brand-600" />
            </div>
            <div className="mt-2 font-display text-2xl font-semibold">#3</div>
            <div className="mt-1 text-xs text-emerald-600">↑ from #41 (28d)</div>
            <RankBars />
          </div>

          <div className="rounded-xl border border-default p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted">Revenue (MTD)</span>
              <span className="text-xs font-medium text-brand-600">USD</span>
            </div>
            <div className="mt-2 font-display text-2xl font-semibold">$24,830</div>
            <div className="mt-1 text-xs text-emerald-600">+94% MoM</div>
            <SparkLine />
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 -top-8 hidden md:block"
      >
        <div className="glass rounded-2xl px-4 py-3 shadow-soft">
          <div className="text-[11px] uppercase tracking-wider text-muted">SEO Score</div>
          <div className="mt-1 flex items-center gap-2">
            <div className="font-display text-xl font-semibold">96</div>
            <div className="text-xs text-emerald-600">Excellent</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 -bottom-8 hidden md:block"
      >
        <div className="glass rounded-2xl px-4 py-3 shadow-soft">
          <div className="text-[11px] uppercase tracking-wider text-muted">New sale</div>
          <div className="mt-1 flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <div className="text-sm font-medium">+ $128.00</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SparkBars() {
  const heights = [30, 45, 38, 60, 50, 78, 92];
  return (
    <div className="mt-4 flex items-end gap-1.5">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-warm-grad opacity-90"
          style={{ height: `${h}%`, minHeight: "10px" }}
        />
      ))}
    </div>
  );
}

function RankBars() {
  const ranks = [41, 28, 16, 11, 8, 5, 3];
  const max = 41;
  return (
    <div className="mt-4 space-y-1.5">
      {ranks.slice(-3).map((r, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-cream-200 dark:bg-charcoal-800">
            <div
              className="h-full rounded-full bg-warm-grad"
              style={{ width: `${100 - (r / max) * 100}%` }}
            />
          </div>
          <span className="w-8 text-right text-[11px] text-muted">#{r}</span>
        </div>
      ))}
    </div>
  );
}

function SparkLine() {
  return (
    <svg
      viewBox="0 0 120 40"
      className="mt-4 h-10 w-full"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F76B1C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F76B1C" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 32 L20 28 L40 30 L60 18 L80 22 L100 10 L120 6 L120 40 L0 40 Z"
        fill="url(#lineGrad)"
      />
      <path
        d="M0 32 L20 28 L40 30 L60 18 L80 22 L100 10 L120 6"
        stroke="#F76B1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
