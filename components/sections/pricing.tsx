"use client";

import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Zap,
  Rocket,
  Crown,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "./services";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/contact";

type Plan = {
  key: string;
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
  price: string | null;
  priceSub?: string;
  tagline: string;
  desc: string;
  includes: string[];
  bestFor?: string[];
  cta: string;
  highlight?: boolean;
  custom?: boolean;
};

const plans: Plan[] = [
  {
    key: "basic",
    Icon: Zap,
    name: "Basic SEO Boost",
    price: "$25",
    tagline: "SEO for 5 Etsy listings + keyword research",
    desc: "Perfect for new Etsy sellers who want better rankings and optimized listings.",
    includes: [
      "SEO optimization for 5 listings",
      "Deep keyword research",
      "Optimized SEO titles",
      "13 high-ranking tags per listing",
      "Conversion-focused descriptions",
      "Basic competitor research",
      "SEO score improvement",
    ],
    cta: "Get started",
  },
  {
    key: "pro",
    Icon: Rocket,
    name: "Pro SEO Growth Pack",
    price: "$45",
    tagline: "SEO for 10 listings + FREE shop audit",
    desc: "Designed for growing Etsy stores that need stronger visibility and traffic.",
    includes: [
      "SEO optimization for 10 listings",
      "Advanced keyword research",
      "SEO titles + tags optimization",
      "High-converting descriptions",
      "FREE complete shop audit",
      "Competitor analysis",
      "Category & attribute optimization",
      "Ranking improvement strategy",
      "Traffic growth optimization",
      "Etsy algorithm optimization",
    ],
    bestFor: ["Growing shops", "Traffic struggles", "Consistent growth"],
    cta: "Choose Pro",
    highlight: true,
  },
  {
    key: "skyrocket",
    Icon: Sparkles,
    name: "Skyrocket Etsy SEO",
    price: "$90",
    tagline: "SEO for 20 listings + full shop SEO + growth strategy",
    desc: "A complete Etsy SEO solution for serious sellers ready to scale.",
    includes: [
      "SEO optimization for 20 listings",
      "Full Etsy shop SEO",
      "Deep competitor research",
      "Advanced keyword strategy",
      "High-converting SEO copywriting",
      "Etsy Ads improvement strategy",
      "Store optimization for higher conversion",
      "Shop structure optimization",
      "Product ranking strategy",
      "5× revenue growth strategy",
      "Priority support",
      "Post-delivery guidance",
    ],
    bestFor: ["Established shops", "Etsy Ads sellers", "Aggressive growth"],
    cta: "Go Skyrocket",
  },
  {
    key: "custom",
    Icon: Crown,
    name: "Custom Full Shop Management",
    price: null,
    priceSub: "Custom monthly pricing",
    tagline: "Complete done-for-you Etsy growth & marketing",
    desc: "We handle everything needed to scale your shop profitably — built around your listings, ads budget, and scope.",
    includes: [
      "Full Etsy shop SEO",
      "Complete listing optimization",
      "Pinterest marketing strategy",
      "Pinterest traffic growth",
      "Etsy Ads management & optimization",
      "Full shop management",
      "Product research",
      "Competitor analysis",
      "Store branding optimization",
      "Conversion rate optimization",
      "Daily shop monitoring",
      "Revenue growth strategy",
      "SEO maintenance",
      "Listing uploads & optimization",
      "Trend research",
      "Etsy algorithm optimization",
      "Shop performance reporting",
      "Organic traffic growth",
      "Customer attraction strategy",
      "Scaling strategy for long-term growth",
    ],
    cta: "Request a quote",
    custom: true,
  },
];

const tags = [
  { Icon: ShieldCheck, label: "14-day satisfaction guarantee" },
  { Icon: Sparkles, label: "No long contracts" },
  { Icon: Check, label: "Cancel anytime" },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Etsy SEO plans for{" "}
              <span className="gradient-text">every stage</span>
            </>
          }
          description="Pick a package that matches where your shop is today — from a quick 5-listing boost to full done-for-you management."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "relative rounded-2xl border p-px transition duration-300 hover:-translate-y-1",
                p.highlight
                  ? "border-transparent bg-warm-grad shadow-glow"
                  : "border-default shadow-card"
              )}
            >
              <div className="relative flex h-full flex-col rounded-[15px] bg-card p-6">
                {p.highlight && (
                  <span className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-warm-grad px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-glow">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1",
                      p.highlight
                        ? "bg-warm-grad text-white ring-transparent shadow-glow"
                        : "bg-brand-50 text-brand-600 ring-brand-100 dark:bg-brand-500/10 dark:ring-brand-500/20"
                    )}
                  >
                    <p.Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-brand-600">
                      {p.custom ? "Done-for-you" : "Package"}
                    </div>
                    <h3 className="font-display text-base font-semibold tracking-tight">
                      {p.name}
                    </h3>
                  </div>
                </div>

                <div className="mt-4">
                  {p.price ? (
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl font-semibold tracking-tight">
                        {p.price}
                      </span>
                      <span className="text-xs text-muted">/ package</span>
                    </div>
                  ) : (
                    <div>
                      <div className="font-display text-2xl font-semibold tracking-tight gradient-text md:text-3xl">
                        Custom
                      </div>
                      {p.priceSub && (
                        <div className="text-[11px] text-muted">{p.priceSub}</div>
                      )}
                    </div>
                  )}
                </div>

                <p className="mt-3 text-xs font-medium text-brand-700 dark:text-brand-300">
                  {p.tagline}
                </p>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>

                <ul
                  className={cn(
                    "mt-5",
                    p.includes.length > 12
                      ? "grid grid-cols-1 gap-x-3 gap-y-2 sm:grid-cols-2"
                      : "space-y-2"
                  )}
                >
                  {p.includes.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-charcoal-600 dark:text-charcoal-100">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  {p.bestFor && (
                    <div className="border-t border-default pt-4">
                      <div className="text-[10px] uppercase tracking-wider text-muted">
                        Best for
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {p.bestFor.map((b) => (
                          <span
                            key={b}
                            className="inline-flex rounded-full bg-brand-50/70 px-2 py-0.5 text-[10px] font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition",
                      p.highlight
                        ? "bg-warm-grad text-white shadow-glow hover:brightness-110"
                        : "border border-default bg-card hover:bg-cream-100 dark:hover:bg-charcoal-800"
                    )}
                  >
                    {p.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-muted">
          {tags.map(({ Icon, label }) => (
            <div key={label} className="inline-flex items-center gap-1.5">
              <Icon className="h-3.5 w-3.5 text-brand-600" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
