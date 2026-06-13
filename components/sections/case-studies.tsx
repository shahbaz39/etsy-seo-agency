"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Store,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Camera,
} from "lucide-react";
import { SectionHeader } from "./services";

type Metric = {
  label: string;
  value: string;
  highlight?: boolean;
};

type Case = {
  key: string;
  caseNumber: string;
  title: string;
  shop: string;
  shopUrl?: string;
  isReal: boolean;
  niche: string;
  category: string;
  avatar: string;
  managed: string;
  source: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  metrics: Metric[];
  strategy: string[];
  outcome: string;
};

const cases: Case[] = [
  {
    key: "growth-eu",
    caseNumber: "01",
    title: "From visibility to consistent sales growth",
    shop: "European Etsy seller",
    isReal: false,
    niche: "Multi-category catalog · €236.7K revenue",
    category: "Multi-category",
    avatar: "EU",
    managed: "Crossed 1,000 sales milestone",
    source: "Etsy Shop Manager · Lifetime stats",
    image: {
      src: "/case-studies/image2.jpg",
      width: 1600,
      height: 987,
      alt: "Etsy Shop Manager dashboard showing 1.5M total views, 479.6K visits, 1,109 orders, EUR 236.7K revenue.",
    },
    metrics: [
      { label: "Total views", value: "1.5M+" },
      { label: "Visits", value: "479,600+" },
      { label: "Orders", value: "1,109" },
      { label: "Revenue", value: "€236,700+", highlight: true },
    ],
    strategy: [
      "Advanced Etsy keyword research",
      "SEO-optimized titles & tag structure",
      "Listing structure optimization",
      "Conversion-focused descriptions",
      "Competitor analysis · shop-wide SEO",
    ],
    outcome: "Sustainable organic growth · stronger Etsy search visibility",
  },
  {
    key: "ads-roas",
    caseNumber: "02",
    title: "Etsy Ads + SEO success — 100× ROAS",
    shop: "US Etsy seller",
    isReal: false,
    niche: "SEO + Etsy Ads case · single-day stats",
    category: "Ads + SEO",
    avatar: "US",
    managed: "SEO foundation before paid scale",
    source: "Etsy Ads dashboard · Single-day stats",
    image: {
      src: "/case-studies/image1.jpg",
      width: 1600,
      height: 988,
      alt: "Etsy Ads dashboard showing 2,751 views, 46 clicks, 2 orders, USD 602.52 revenue, USD 6 spend, 100.42 ROAS.",
    },
    metrics: [
      { label: "Ad views", value: "2,751" },
      { label: "Clicks", value: "46" },
      { label: "Revenue", value: "$602.52" },
      { label: "ROAS", value: "100.42×", highlight: true },
    ],
    strategy: [
      "SEO foundation built first",
      "Targeted keywords on every listing",
      "Conversion-focused descriptions",
      "Strategic Etsy Ads bid tuning",
      "Listing-level budget allocation",
    ],
    outcome: "$602.52 revenue from just $6 ad spend · 100.42× ROAS",
  },
  {
    key: "weekly-premium",
    caseNumber: "03",
    title: "Driving consistent weekly revenue for premium listings",
    shop: "US Etsy seller",
    isReal: false,
    niche: "Premium product line · $4.8K / week",
    category: "Premium",
    avatar: "PR",
    managed: "Consistent weekly performance",
    source: "Etsy Shop Dashboard · Weekly stats",
    image: {
      src: "/case-studies/image6.png",
      width: 2048,
      height: 1216,
      alt: "Etsy shop dashboard showing 7,026 total views, 4,124 visits, 20 orders, US$4,833 revenue for a single week.",
    },
    metrics: [
      { label: "Weekly revenue", value: "$4,833", highlight: true },
      { label: "Orders / week", value: "20" },
      { label: "Visits / week", value: "4,100" },
      { label: "Views / week", value: "7,000" },
    ],
    strategy: [
      "Top-tier listing maintenance",
      "Active search-trend monitoring",
      "Continuous tag refinement",
      "Intent-driven keyword targeting",
    ],
    outcome: "Predictable weekly revenue · intent-driven traffic that converts",
  },
  {
    key: "omra",
    caseNumber: "04",
    title: "Transforming stagnant listings into steady sales",
    shop: "OMRAHOMEDECOR",
    shopUrl: "https://www.etsy.com/shop/OMRAHOMEDECOR",
    isReal: true,
    niche: "Home & Living · Bedding",
    category: "Home & Living",
    avatar: "OM",
    managed: "346 active listings · 5y 6m on Etsy",
    source: "eRank shop analytics",
    image: {
      src: "/case-studies/image5.png",
      width: 2048,
      height: 1057,
      alt: "eRank analytics for OMRAHOMEDECOR showing 346 active listings, 930 total sales, Top 9.1% Etsy sales rank.",
    },
    metrics: [
      { label: "Total sales", value: "930" },
      { label: "Etsy percentile", value: "Top 9.1%", highlight: true },
      { label: "Sales (30d)", value: "120" },
      { label: "Avg / day", value: "~4" },
    ],
    strategy: [
      "Deep shop-wide SEO audit",
      "Low-competition tag extraction",
      "Title & tag rewrite per listing",
      "Image ALT text aligned to search intent",
    ],
    outcome: "Consistent upward trend · steady 4 sales/day organic",
  },
  {
    key: "saanvi",
    caseNumber: "05",
    title: "Scaling an established brand to the Top 4%",
    shop: "SAANVISINCE1988",
    shopUrl: "https://www.etsy.com/shop/SAANVISINCE1988",
    isReal: true,
    niche: "Established global brand · Top 3.8%",
    category: "Established brand",
    avatar: "SA",
    managed: "286 listings · scaling without paid ads",
    source: "eRank shop analytics",
    image: {
      src: "/case-studies/image3.png",
      width: 2048,
      height: 1047,
      alt: "eRank analytics for SAANVISINCE1988 showing 286 active listings, 3,318 total sales, Top 3.8% Etsy sales rank, Global Rank 194,025.",
    },
    metrics: [
      { label: "Total sales", value: "3,318" },
      { label: "Etsy percentile", value: "Top 3.8%", highlight: true },
      { label: "Sales (30d)", value: "330" },
      { label: "Avg / day", value: "~11" },
    ],
    strategy: [
      "Refined top-performing listings",
      "Long-tail keywords on underperformers",
      "CTR-optimized titles",
      "Competitor-driven tag restructure",
    ],
    outcome: "Top 3.8% globally · 11 organic sales/day · global rank 194,025",
  },
  {
    key: "layred",
    caseNumber: "06",
    title: "High conversion rate with minimal listings",
    shop: "LayredStudio",
    shopUrl: "https://www.etsy.com/shop/LayredStudio",
    isReal: true,
    niche: "Home & Living · Lighting",
    category: "Lighting",
    avatar: "LA",
    managed: "Only 19 active listings · 3 years on Etsy",
    source: "eRank shop analytics",
    image: {
      src: "/case-studies/image4.png",
      width: 2048,
      height: 1052,
      alt: "eRank analytics for LayredStudio showing 19 active listings, 841 total sales, Top 9.6% Etsy sales rank.",
    },
    metrics: [
      { label: "Total sales", value: "841" },
      { label: "Active listings", value: "19" },
      { label: "Etsy percentile", value: "Top 9.6%", highlight: true },
      { label: "Avg / day", value: "~9" },
    ],
    strategy: [
      "Quality-over-quantity philosophy",
      "Hyper-targeted keywords",
      "Etsy-guideline-perfect optimization",
      "Visibility & CVR maximization",
    ],
    outcome: "841 sales from just 19 listings · 9 sales/day",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-soft-grad opacity-40 dark:opacity-[0.06]" />
      <div className="container">
        <SectionHeader
          eyebrow="Case studies"
          title={
            <>
              Six Etsy shops,{" "}
              <span className="gradient-text">six real dashboards</span>
            </>
          }
          description="Every claim below is backed by a live screenshot from Etsy Shop Manager, Etsy Ads, or eRank — the same tools we share with clients every week."
        />

        <div className="mt-14 space-y-8 lg:mt-20 lg:space-y-0">
          {cases.map((c, i) => (
            <div
              key={c.key}
              className="lg:sticky"
              style={{ top: `calc(5rem + ${i * 0.55}rem)` }}
            >
              <CaseCard c={c} index={i} />
            </div>
          ))}
          {/* spacer so the last card has scroll room after sticking */}
          <div className="hidden lg:block lg:h-[40vh]" />
        </div>
      </div>
    </section>
  );
}

function CaseCard({ c, index }: { c: Case; index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-default bg-card shadow-soft transition-shadow duration-300 hover:shadow-glow/40">
      {/* Card chrome — slimmed */}
      <div className="flex items-center gap-2.5 border-b border-default px-4 py-2 md:px-5">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-charcoal-100 dark:bg-charcoal-600" />
          <span className="h-2 w-2 rounded-full bg-charcoal-100 dark:bg-charcoal-600" />
          <span className="h-2 w-2 rounded-full bg-charcoal-100 dark:bg-charcoal-600" />
        </div>
        <div className="flex flex-1 items-center justify-between gap-3 rounded bg-cream-100 px-2.5 py-0.5 text-[10px] text-muted dark:bg-charcoal-800">
          <span className="inline-flex items-center gap-1.5 truncate">
            <Camera className="h-3 w-3 flex-none" />
            {c.source}
          </span>
          <span className="hidden flex-none sm:inline">
            {c.isReal ? "Live · verified" : "Anonymized · NDA"}
          </span>
        </div>
      </div>

      {/* Title strip — compact single row */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-default px-4 py-2.5 md:px-5">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-warm-grad font-display text-[11px] font-semibold text-white shadow-glow">
            {c.caseNumber}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-600">
              Case {c.caseNumber}
            </span>
            <h3 className="font-display text-sm font-semibold tracking-tight md:text-[15px]">
              {c.title}
            </h3>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/60 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Currently scaling
        </span>
      </div>

      {/* Body: info LEFT, screenshot RIGHT on desktop. Stacked on mobile (image first). */}
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        {/* Screenshot side: top on mobile, right on desktop */}
        <div className="relative flex items-center justify-center bg-charcoal-50 p-3 dark:bg-charcoal-900/60 lg:order-2 lg:border-l lg:border-default lg:p-4">
          <Image
            src={c.image.src}
            alt={c.image.alt}
            width={c.image.width}
            height={c.image.height}
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-auto w-full rounded-md shadow-sm ring-1 ring-black/5 lg:max-h-[340px] lg:w-auto lg:object-contain"
          />
        </div>

        {/* Info side: below image on mobile, left on desktop */}
        <div className="space-y-3 border-t border-default p-4 lg:order-1 lg:border-t-0 lg:p-5">
          {/* Shop card */}
          <div className="relative overflow-hidden rounded-xl border border-default bg-cream-50 p-3 dark:bg-charcoal-900/40">
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-warm-grad opacity-20 blur-2xl" />

            <div className="relative flex items-start gap-2.5">
              <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-warm-grad text-[11px] font-semibold text-white shadow-glow">
                {c.avatar}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <Store className="h-3 w-3 text-muted" />
                  <span className="text-[10px] uppercase tracking-wider text-muted">
                    {c.category}
                  </span>
                </div>
                <h4 className="truncate font-display text-sm font-semibold tracking-tight">
                  {c.shop}
                </h4>
                <p className="truncate text-[11px] text-muted">{c.niche}</p>
              </div>
              {c.isReal && c.shopUrl ? (
                <a
                  href={c.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-none items-center gap-1 text-[10px] font-medium text-brand-600 hover:text-brand-700"
                >
                  Live shop
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span className="inline-flex flex-none items-center rounded-full bg-charcoal-100 px-1.5 py-0.5 text-[9px] font-medium text-muted dark:bg-charcoal-800">
                  NDA
                </span>
              )}
            </div>

            <div className="relative mt-2 flex items-center gap-1.5 text-[10px] text-muted">
              <Calendar className="h-3 w-3 flex-none" />
              <span className="truncate">{c.managed}</span>
            </div>
          </div>

          {/* Strategy */}
          <div className="rounded-xl border border-default p-3">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted">
              <Sparkles className="h-3 w-3 text-brand-600" />
              What we did
            </div>
            <ul className="mt-2 grid gap-x-3 gap-y-1 sm:grid-cols-2 lg:grid-cols-2">
              {c.strategy.map((step) => (
                <li key={step} className="flex items-start gap-1.5 text-[11px] leading-snug">
                  <CheckCircle2 className="mt-0.5 h-3 w-3 flex-none text-brand-600" />
                  <span className="text-charcoal-600 dark:text-charcoal-100">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics 2x2 */}
          <div className="grid grid-cols-2 gap-2">
            {c.metrics.map((m) => (
              <MetricTile key={m.label} m={m} />
            ))}
          </div>

          {/* Outcome */}
          <div className="relative overflow-hidden rounded-xl border border-default p-3">
            <div className="absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-warm-grad opacity-10 blur-2xl" />
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted">
              <ArrowUpRight className="h-3 w-3 text-brand-600" />
              Outcome
            </div>
            <p className="mt-0.5 font-display text-[13px] font-semibold leading-snug tracking-tight">
              {c.outcome}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function MetricTile({ m }: { m: Metric }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border px-3 py-2 ${
        m.highlight
          ? "border-brand-200/70 bg-brand-50/40 dark:border-brand-300/20 dark:bg-brand-500/[0.06]"
          : "border-default"
      }`}
    >
      {m.highlight && (
        <div className="absolute -right-6 -top-6 h-14 w-14 rounded-full bg-warm-grad opacity-20 blur-xl" />
      )}
      <div className="text-[9px] uppercase tracking-wider text-muted">
        {m.label}
      </div>
      <div
        className={`font-display text-lg font-semibold leading-tight tracking-tight md:text-xl ${
          m.highlight ? "gradient-text" : ""
        }`}
      >
        {m.value}
      </div>
    </div>
  );
}
