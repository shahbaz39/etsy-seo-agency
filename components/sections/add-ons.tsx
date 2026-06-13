"use client";

import { motion } from "framer-motion";
import {
  Pin,
  Rocket,
  Store,
  Palette,
  ShoppingBag,
  Package,
  Instagram,
  Search,
  Target,
  Megaphone,
  Crown,
  Check,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "./services";
import { WHATSAPP_URL } from "@/lib/contact";

type AddOn = {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  includes: string[];
  bestFor?: string[];
};

const addOns: AddOn[] = [
  {
    Icon: Pin,
    title: "Pinterest Marketing",
    desc: "Drive massive organic traffic to your Etsy or Shopify store with Pinterest growth strategies.",
    includes: [
      "Pinterest account setup",
      "SEO-optimized pins",
      "Viral pin design",
      "Pinterest keyword research",
      "Monthly traffic strategy",
      "Product pin scheduling",
      "Organic audience growth",
      "Etsy-to-Pinterest funnel setup",
    ],
    bestFor: ["Organic traffic", "Passive sales", "Brand visibility"],
  },
  {
    Icon: Rocket,
    title: "Etsy Business Startup",
    desc: "Start your Etsy business professionally from day one — niche, products, and suppliers covered.",
    includes: [
      "Profitable niche selection",
      "Winning product research",
      "Product sourcing guidance",
      "Supplier recommendations",
      "Digital product ideas",
      "Handmade product strategy",
      "Leather business sourcing",
      "Print-on-demand guidance",
      "Market research",
      "Competitor analysis",
    ],
    bestFor: ["Beginners", "New Etsy sellers", "Brand startups"],
  },
  {
    Icon: Store,
    title: "Etsy Full Shop Creation",
    desc: "We build your complete Etsy shop professionally — set up for maximum conversion from day one.",
    includes: [
      "Full Etsy shop setup",
      "SEO-friendly shop structure",
      "Listings upload",
      "Titles & tags optimization",
      "Shop policies setup",
      "About section writing",
      "Categories setup",
      "Banner & branding placement",
      "Payment & shipping guidance",
    ],
  },
  {
    Icon: Palette,
    title: "Etsy Graphic Designing",
    desc: "Premium branding designs that make your Etsy store look trustworthy and high-end.",
    includes: [
      "Etsy shop banner design",
      "Etsy logo design",
      "Listing thumbnail design",
      "Product mockups",
      "Brand color setup",
      "Highlight icons",
      "Social media branding",
    ],
  },
  {
    Icon: ShoppingBag,
    title: "Shopify Store Creation",
    desc: "Launch a high-converting Shopify store for your personal brand or e-commerce business.",
    includes: [
      "Complete Shopify store setup",
      "Premium theme customization",
      "Mobile responsive design",
      "Product uploading",
      "Navigation setup",
      "Policy pages setup",
      "Payment gateway setup",
      "Essential apps installation",
      "Basic SEO optimization",
    ],
    bestFor: ["Personal brands", "Dropshipping", "Fashion stores", "POD businesses"],
  },
  {
    Icon: Package,
    title: "Shopify Product Uploading",
    desc: "We professionally upload and optimize your products so you can focus on growth.",
    includes: [
      "Product uploading",
      "SEO titles & descriptions",
      "Collections setup",
      "Pricing setup",
      "Product variants",
      "Tags & categories",
      "Product images optimization",
    ],
  },
  {
    Icon: Instagram,
    title: "Instagram Marketing & Brand Authority",
    desc: "Build trust, authority, and a real audience around your e-commerce brand on Instagram.",
    includes: [
      "Instagram page optimization",
      "Bio optimization",
      "Content strategy",
      "Hashtag research",
      "Organic growth strategy",
      "Engagement improvement",
      "Brand visibility growth",
      "Audience building",
      "Reels strategy",
      "Follower growth guidance",
    ],
    bestFor: ["Brand authority", "Social proof", "Customer trust", "Traffic generation"],
  },
  {
    Icon: Search,
    title: "E-commerce Product Research",
    desc: "Find winning products with high demand, healthy margins, and scaling potential.",
    includes: [
      "Trending product research",
      "Competitor analysis",
      "Profit margin analysis",
      "Demand validation",
      "Viral product research",
      "Low-competition opportunities",
      "Product scaling strategy",
    ],
  },
  {
    Icon: Target,
    title: "Conversion Optimization",
    desc: "Turn more visitors into buyers with conversion-focused improvements across listings.",
    includes: [
      "Listing conversion analysis",
      "CTA optimization",
      "Thumbnail improvement strategy",
      "Product positioning",
      "Offer optimization",
      "Buyer psychology improvements",
    ],
  },
  {
    Icon: Megaphone,
    title: "Etsy Ads Management",
    desc: "Scale your Etsy sales profitably with optimized ad campaigns and bid strategy.",
    includes: [
      "Etsy Ads setup",
      "Budget optimization",
      "ROAS improvement",
      "Keyword targeting",
      "Winning listing promotion",
      "Ad performance monitoring",
      "CPC optimization strategy",
    ],
  },
];

const fullService = {
  title: "Full E-commerce Growth Support",
  desc: "A complete done-for-you solution for serious Etsy & Shopify sellers ready to scale.",
  includes: [
    "Etsy SEO",
    "Marketing",
    "Branding",
    "Traffic growth",
    "Store management",
    "Product research",
    "Ads optimization",
    "Pinterest marketing",
    "Instagram growth",
    "Long-term scaling strategy",
  ],
};

export function AddOns() {
  return (
    <section id="add-ons" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Add-on services"
          title={
            <>
              Complete{" "}
              <span className="gradient-text">e-commerce growth solutions</span>
            </>
          }
          description="Take your Etsy or Shopify business to the next level with services designed for serious growth — pick what you need or bundle the lot."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-default bg-card p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-warm-grad opacity-0 blur-2xl transition duration-500 group-hover:opacity-20" />

              <div className="relative flex items-center gap-3">
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] dark:bg-brand-500/10 dark:ring-brand-500/20">
                  <s.Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold tracking-tight">
                  {s.title}
                </h3>
              </div>

              <p className="relative mt-3 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>

              <ul className="relative mt-4 space-y-1.5">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs">
                    <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-brand-600" />
                    <span className="text-charcoal-600 dark:text-charcoal-100">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {s.bestFor && (
                <div className="relative mt-auto border-t border-default pt-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted">
                    Best for
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {s.bestFor.map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center rounded-full bg-brand-50/70 px-2 py-0.5 text-[10px] font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Full service hero band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-default p-px shadow-glow"
        >
          <div className="absolute inset-0 bg-warm-grad opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_70%)]" />

          <div className="relative grid gap-8 rounded-[23px] p-8 md:grid-cols-[1.05fr,1.4fr] md:p-12">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-medium backdrop-blur">
                <Crown className="h-3.5 w-3.5" />
                Complete package
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {fullService.title}
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/85 md:text-base">
                {fullService.desc}
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-brand-700 shadow-soft transition hover:shadow-glow"
              >
                Talk to us about full service
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {fullService.includes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white backdrop-blur"
                >
                  <Check className="h-3.5 w-3.5 flex-none" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
