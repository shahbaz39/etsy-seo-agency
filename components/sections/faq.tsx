"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "./services";

const faqs = [
  {
    q: "How quickly will I see results?",
    a: "Most shops see measurable rank improvements within 2–4 weeks of optimization. Meaningful revenue lift typically lands in months 2–3, with compounding gains beyond that as Etsy's algorithm rewards sustained quality signals.",
  },
  {
    q: "Do you guarantee a rank #1 position?",
    a: "No reputable agency can guarantee a specific Etsy rank — anyone who does is misleading you. What we guarantee is process: data-driven keyword work, on-page optimization, and transparent reporting against agreed KPIs.",
  },
  {
    q: "What's included in the free SEO audit?",
    a: "A 60-point review of your shop covering listing SEO, branding, photography, conversion, pricing, and policy compliance. You get a written report and a 30-minute strategy call — no obligation.",
  },
  {
    q: "Do I keep ownership of the work?",
    a: "Absolutely. Every listing rewrite, keyword sheet, and asset we produce belongs to you and stays in your shop if you ever leave.",
  },
  {
    q: "Can you work with shops outside the US?",
    a: "Yes — we work with Etsy sellers globally. We've delivered SEO programs for shops in the UK, EU, Australia, Canada, and beyond.",
  },
  {
    q: "How does billing work?",
    a: "Monthly retainers, billed in advance. No contracts, no setup fees. Cancel anytime with 14 days' notice and you'll never be charged again.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="gradient-text">answered</span>
            </>
          }
          description="Everything you need to know before getting started."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-default rounded-2xl border border-default bg-card shadow-card">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  item,
  index,
}: {
  item: { q: string; a: string };
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="font-display text-base font-semibold tracking-tight">
          {item.q}
        </span>
        <span
          className={`inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 transition dark:bg-brand-500/10 ${
            open ? "rotate-45" : ""
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
