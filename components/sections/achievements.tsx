"use client";

import { motion } from "framer-motion";
import { Trophy, Globe2, Award, Flag } from "lucide-react";
import { SectionHeader } from "./services";

const badges = [
  {
    Icon: Flag,
    label: "Top 0.1%",
    sub: "within India",
    tone: "from-brand-500/20 to-brand-300/0",
  },
  {
    Icon: Globe2,
    label: "Top 3–10%",
    sub: "of all Etsy sellers globally",
    tone: "from-emerald-500/20 to-emerald-300/0",
  },
  {
    Icon: Award,
    label: "1,000+",
    sub: "sales milestones unlocked",
    tone: "from-violet-500/20 to-violet-300/0",
  },
  {
    Icon: Trophy,
    label: "100×",
    sub: "ROAS on Etsy Ads (peak)",
    tone: "from-amber-500/20 to-amber-300/0",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-default bg-card shadow-soft">
          <div className="absolute inset-0 bg-soft-grad opacity-40 dark:opacity-[0.04]" />
          <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-warm-grad opacity-20 blur-3xl" />
          <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-warm-grad opacity-10 blur-3xl" />

          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1.05fr,1.4fr] lg:p-16">
            <div>
              <SectionHeader
                eyebrow="Our achievements"
                title={
                  <>
                    Celebrating{" "}
                    <span className="gradient-text">
                      authentic client success
                    </span>
                  </>
                }
                description="We focus on sustainable, long-term SEO strategies that deliver real, measurable results — not vanity metrics."
                align="left"
              />

              <motion.blockquote
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 max-w-xl border-l-2 border-brand-300 pl-4 text-base leading-relaxed text-charcoal-600 dark:text-charcoal-100 md:text-lg"
              >
                Our approach has successfully pushed multiple client shops into
                the{" "}
                <span className="font-semibold gradient-text">
                  Top 0.1% within India
                </span>
                , while consistently placing them among the{" "}
                <span className="font-semibold gradient-text">
                  Top 3–10% of all Etsy sellers worldwide
                </span>
                .
              </motion.blockquote>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {badges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-default bg-card p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div
                    className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${b.tone} blur-2xl transition duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] dark:bg-brand-500/10 dark:ring-brand-500/20">
                      <b.Icon className="h-5 w-5" />
                    </span>
                    <div className="mt-4 font-display text-3xl font-semibold tracking-tight gradient-text md:text-4xl">
                      {b.label}
                    </div>
                    <div className="mt-1 text-sm text-muted">{b.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
