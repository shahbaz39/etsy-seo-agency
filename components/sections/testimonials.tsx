"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeader } from "./services";

const PHOTO_BASE = "https://images.unsplash.com/photo-";
const PHOTO_PARAMS = "?w=160&h=160&fit=crop&crop=faces&auto=format&q=80";

const testimonials = [
  {
    name: "Mia Hollander",
    shop: "LunaCraft Studio · Etsy seller",
    service: "Etsy SEO Optimization",
    avatar: "MH",
    photo: `${PHOTO_BASE}1494790108377-be9c29b29330${PHOTO_PARAMS}`,
    rating: 5,
    quote:
      "Their Etsy SEO work completely changed our search visibility. We went from page 6 to page 1 on our biggest terms in four months — and we've stayed there. Best decision I made for my Etsy shop.",
  },
  {
    name: "Owen Park",
    shop: "Northwind Prints · Etsy seller",
    service: "Etsy Shop Audit",
    avatar: "OP",
    photo: `${PHOTO_BASE}1500648767791-00dcc994a43e${PHOTO_PARAMS}`,
    rating: 5,
    quote:
      "The 60-point Etsy shop audit was worth the entire engagement on its own. Every fix they flagged — tags, shipping profiles, photo order — moved a real metric within weeks.",
  },
  {
    name: "Sasha Reeve",
    shop: "Atelier Wren · Etsy seller",
    service: "Etsy Keyword Research",
    avatar: "SR",
    photo: `${PHOTO_BASE}1438761681033-6461ffad8d80${PHOTO_PARAMS}`,
    rating: 5,
    quote:
      "Their keyword research is the real deal. They handed me a sheet of long-tail Etsy terms I'd never have found on my own — and three of them now drive most of my monthly revenue.",
  },
  {
    name: "Daniel Vega",
    shop: "Forge & Field · Etsy seller",
    service: "Etsy Listing Optimization",
    avatar: "DV",
    photo: `${PHOTO_BASE}1472099645785-5658abf4ff4e${PHOTO_PARAMS}`,
    rating: 5,
    quote:
      "They rewrote 48 of my Etsy listings — titles, tags, descriptions, the lot. Click-through doubled, conversion lifted, and the weekly reports made every change crystal clear.",
  },
  {
    name: "Priya Anand",
    shop: "Petal & Press · Etsy seller",
    service: "Etsy Ads Management",
    avatar: "PA",
    photo: `${PHOTO_BASE}1544005313-94ddf0286df2${PHOTO_PARAMS}`,
    rating: 5,
    quote:
      "Etsy Ads were burning cash before they took over. They restructured bids listing-by-listing and 3x'd our ROAS in 60 days. The ad management alone pays for the retainer.",
  },
  {
    name: "Tomás Linville",
    shop: "Hollow Pine Co. · Etsy seller",
    service: "Etsy Conversion Optimization",
    avatar: "TL",
    photo: `${PHOTO_BASE}1507003211169-0a1dd7228f2d${PHOTO_PARAMS}`,
    rating: 5,
    quote:
      "We were getting Etsy traffic but not sales. Their conversion work — photo A/B tests, pricing tweaks, review strategy — lifted our conversion rate from 1.8% to 4.6% in one quarter.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="What clients say"
          title={
            <>
              Loved by{" "}
              <span className="gradient-text">Etsy sellers</span>{" "}
              everywhere
            </>
          }
          description="A small selection of reviews from shops who've trusted us with their growth."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-default glass p-6 shadow-card"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-brand-400 text-brand-400"
                    />
                  ))}
                </div>
                <span className="inline-flex items-center rounded-full border border-brand-200/60 bg-brand-50/70 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand-700 dark:border-brand-300/20 dark:bg-brand-500/10 dark:text-brand-300">
                  {t.service}
                </span>
              </div>

              <blockquote className="mt-4 text-sm leading-relaxed">
                "{t.quote}"
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3">
                <span className="relative inline-flex h-11 w-11 flex-none items-center justify-center overflow-hidden rounded-full bg-warm-grad text-xs font-semibold text-white shadow-glow ring-2 ring-white/70 dark:ring-charcoal-900">
                  <span aria-hidden className="absolute inset-0 flex items-center justify-center">
                    {t.avatar}
                  </span>
                  <img
                    src={t.photo}
                    alt={t.name}
                    width={44}
                    height={44}
                    loading="lazy"
                    decoding="async"
                    className="relative h-full w-full object-cover"
                  />
                </span>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted">{t.shop}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
