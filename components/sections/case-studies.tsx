"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Eye,
  ShoppingBag,
  Star,
  Target,
  Megaphone,
  Calendar,
  Store,
} from "lucide-react";
import { SectionHeader } from "./services";

type RankPoint = { kw: string; from: number; to: number };

type Case = {
  shop: string;
  avatar: string;
  niche: string;
  managedSince: string;
  reviewCount: string;
  rating: number;
  before: {
    visits: number;
    revenue: number;
    conversion: number;
    roas: number;
    favorites: number;
  };
  after: {
    visits: number;
    revenue: number;
    conversion: number;
    roas: number;
    favorites: number;
  };
  revenueSeries: number[];
  topRanks: RankPoint[];
  outcome: string;
  tag: string;
};

const cases: Case[] = [
  {
    shop: "LunaCraft Studio",
    avatar: "LC",
    niche: "Handmade silver jewelry",
    managedSince: "Account managed since Jan 2025",
    reviewCount: "1,842",
    rating: 4.9,
    before: {
      visits: 2100,
      revenue: 3200,
      conversion: 1.4,
      roas: 1.2,
      favorites: 380,
    },
    after: {
      visits: 11400,
      revenue: 24900,
      conversion: 3.8,
      roas: 4.6,
      favorites: 2940,
    },
    revenueSeries: [3.2, 4.1, 5.8, 7.4, 9.9, 13.2, 17.6, 21.4, 24.9],
    topRanks: [
      { kw: "minimalist silver necklace", from: 48, to: 4 },
      { kw: "dainty stacking ring", from: 36, to: 2 },
      { kw: "personalized bar necklace", from: 71, to: 7 },
    ],
    outcome: "+678% monthly revenue · 14 head terms on page 1",
    tag: "Jewelry",
  },
  {
    shop: "Northwind Prints",
    avatar: "NW",
    niche: "Wall art & art prints",
    managedSince: "Account managed since Mar 2025",
    reviewCount: "2,310",
    rating: 4.8,
    before: {
      visits: 850,
      revenue: 1100,
      conversion: 0.9,
      roas: 0.8,
      favorites: 220,
    },
    after: {
      visits: 9820,
      revenue: 18400,
      conversion: 4.2,
      roas: 5.1,
      favorites: 3110,
    },
    revenueSeries: [1.1, 1.6, 2.4, 4.0, 6.8, 10.1, 13.4, 16.2, 18.4],
    topRanks: [
      { kw: "modern abstract wall art", from: 62, to: 2 },
      { kw: "scandinavian print set", from: 44, to: 5 },
      { kw: "boho gallery wall", from: 80, to: 9 },
    ],
    outcome: "+1,256% traffic in 90 days · 2× return customers",
    tag: "Prints",
  },
  {
    shop: "Atelier Wren",
    avatar: "AW",
    niche: "Personalized wedding gifts",
    managedSince: "Account managed since Oct 2024",
    reviewCount: "5,420",
    rating: 5.0,
    before: {
      visits: 4500,
      revenue: 8700,
      conversion: 1.8,
      roas: 1.5,
      favorites: 1200,
    },
    after: {
      visits: 22300,
      revenue: 61200,
      conversion: 4.6,
      roas: 6.8,
      favorites: 8740,
    },
    revenueSeries: [8.7, 11.0, 16.4, 24.8, 34.6, 42.1, 49.7, 55.4, 61.2],
    topRanks: [
      { kw: "personalized wedding gift", from: 22, to: 1 },
      { kw: "custom couples portrait", from: 14, to: 1 },
      { kw: "engraved wedding keepsake", from: 31, to: 3 },
    ],
    outcome: "#1 on Etsy for 14 head terms · 7× revenue YoY",
    tag: "Gifts",
  },
];

export function CaseStudies() {
  const [active, setActive] = useState(0);
  const current = cases[active];

  return (
    <section id="case-studies" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-soft-grad opacity-40 dark:opacity-[0.06]" />
      <div className="container">
        <SectionHeader
          eyebrow="Case studies"
          title={
            <>
              Real Etsy shops,{" "}
              <span className="gradient-text">real account management</span>
            </>
          }
          description="A live look inside three accounts we manage — the same dashboards, charts, and rank movement we share with clients every week."
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {cases.map((c, i) => (
            <button
              key={c.shop}
              type="button"
              onClick={() => setActive(i)}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                i === active
                  ? "border-brand-300 bg-warm-grad text-white shadow-glow"
                  : "border-default bg-card text-charcoal-600 hover:text-brand-600 dark:text-charcoal-100"
              }`}
            >
              <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${
                i === active ? "bg-white/20 text-white" : "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
              }`}>
                {c.avatar}
              </span>
              {c.shop}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.shop}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <Dashboard c={current} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Dashboard({ c }: { c: Case }) {
  const visitsLift = pct(c.before.visits, c.after.visits);
  const revLift = pct(c.before.revenue, c.after.revenue);
  const cvrLift = pct(c.before.conversion, c.after.conversion);
  const roasLift = pct(c.before.roas, c.after.roas);

  return (
    <div className="overflow-hidden rounded-3xl border border-default bg-card shadow-soft">
      <div className="flex items-center gap-1.5 border-b border-default px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-charcoal-100 dark:bg-charcoal-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-charcoal-100 dark:bg-charcoal-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-charcoal-100 dark:bg-charcoal-600" />
        <div className="ml-4 flex flex-1 items-center justify-between gap-3 rounded-md bg-cream-100 px-3 py-1 text-[11px] text-muted dark:bg-charcoal-800">
          <span>etsy.com/your/shops/{c.shop.toLowerCase().replace(/\s+/g, "")}/stats</span>
          <span className="hidden sm:inline">Last 9 months · USD</span>
        </div>
      </div>

      <div className="grid gap-6 p-5 md:p-7 lg:grid-cols-[1.1fr,1.5fr]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-default bg-cream-50 p-5 dark:bg-charcoal-900/40">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-warm-grad text-sm font-semibold text-white shadow-glow">
                {c.avatar}
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Store className="h-3.5 w-3.5 text-muted" />
                  <span className="text-[11px] uppercase tracking-wider text-muted">
                    {c.tag}
                  </span>
                </div>
                <h3 className="truncate font-display text-lg font-semibold tracking-tight">
                  {c.shop}
                </h3>
                <p className="text-xs text-muted">{c.niche}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <Mini
                label="Rating"
                value={
                  <span className="inline-flex items-center gap-1">
                    {c.rating}
                    <Star className="h-3 w-3 fill-brand-400 text-brand-400" />
                  </span>
                }
              />
              <Mini label="Reviews" value={c.reviewCount} />
              <Mini label="Favorites" value={fmt(c.after.favorites)} />
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-muted">
              <Calendar className="h-3.5 w-3.5" />
              {c.managedSince}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatCard
              Icon={Eye}
              label="Monthly visits"
              before={fmt(c.before.visits)}
              after={fmt(c.after.visits)}
              lift={visitsLift}
            />
            <StatCard
              Icon={ShoppingBag}
              label="Monthly revenue"
              before={`$${fmt(c.before.revenue)}`}
              after={`$${fmt(c.after.revenue)}`}
              lift={revLift}
            />
            <StatCard
              Icon={Target}
              label="Conversion rate"
              before={`${c.before.conversion}%`}
              after={`${c.after.conversion}%`}
              lift={cvrLift}
            />
            <StatCard
              Icon={Megaphone}
              label="Etsy Ads ROAS"
              before={`${c.before.roas}×`}
              after={`${c.after.roas}×`}
              lift={roasLift}
            />
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-default p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted">
                  Revenue trend
                </div>
                <div className="mt-1 font-display text-2xl font-semibold">
                  ${fmt(c.after.revenue)}
                  <span className="ml-2 align-middle text-xs font-medium text-emerald-600">
                    ↑ {revLift}%
                  </span>
                </div>
              </div>
              <Legend />
            </div>
            <RevenueChart series={c.revenueSeries} />
          </div>

          <div className="rounded-2xl border border-default p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-wider text-muted">
                Top keyword rank movement (last 90 days)
              </div>
              <TrendingUp className="h-4 w-4 text-brand-600" />
            </div>
            <div className="mt-4 space-y-3">
              {c.topRanks.map((r) => (
                <RankRow key={r.kw} r={r} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-default bg-cream-50/70 px-5 py-4 dark:bg-charcoal-900/40 md:px-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-warm-grad text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-muted">
                Outcome
              </div>
              <div className="font-display text-sm font-semibold">
                {c.outcome}
              </div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Active retainer
          </span>
        </div>
      </div>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted">{label}</div>
      <div className="mt-0.5 text-sm font-semibold">{value}</div>
    </div>
  );
}

function StatCard({
  Icon,
  label,
  before,
  after,
  lift,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  before: string;
  after: string;
  lift: number;
}) {
  return (
    <div className="rounded-xl border border-default p-3.5">
      <div className="flex items-center justify-between">
        <Icon className="h-3.5 w-3.5 text-brand-600" />
        <span className="text-[10px] font-medium text-emerald-600">
          ↑ {lift}%
        </span>
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-wider text-muted">
        {label}
      </div>
      <div className="mt-1 font-display text-base font-semibold">{after}</div>
      <div className="mt-0.5 text-[10px] text-muted">from {before}</div>
    </div>
  );
}

function RankRow({ r }: { r: RankPoint }) {
  const max = Math.max(r.from, 80);
  const fromPct = 100 - (r.from / max) * 100;
  const toPct = 100 - (r.to / max) * 100;
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="truncate pr-2 text-charcoal-600 dark:text-charcoal-100">
          {r.kw}
        </span>
        <span className="flex-none text-muted">
          <span className="line-through">#{r.from}</span>{" "}
          <span className="font-semibold text-emerald-600">→ #{r.to}</span>
        </span>
      </div>
      <div className="relative mt-1.5 h-1.5 rounded-full bg-cream-200 dark:bg-charcoal-800">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-charcoal-200/80 dark:bg-charcoal-700"
          style={{ width: `${fromPct}%` }}
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-warm-grad"
          style={{ width: `${toPct}%` }}
        />
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="hidden items-center gap-3 text-[10px] text-muted sm:flex">
      <span className="inline-flex items-center gap-1.5">
        <span className="h-1.5 w-3 rounded-full bg-warm-grad" />
        Revenue
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-1.5 w-3 rounded-full bg-charcoal-200 dark:bg-charcoal-700" />
        Baseline
      </span>
    </div>
  );
}

function RevenueChart({ series }: { series: number[] }) {
  const max = Math.max(...series) * 1.1;
  const w = 320;
  const h = 120;
  const step = w / (series.length - 1);
  const pts = series.map((v, i) => {
    const x = i * step;
    const y = h - (v / max) * h;
    return [x, y] as const;
  });
  const linePath = pts
    .map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`))
    .join(" ");
  const areaPath = `${linePath} L ${w} ${h} L 0 ${h} Z`;
  const labels = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];

  return (
    <div className="mt-4">
      <svg
        viewBox={`0 0 ${w} ${h + 20}`}
        className="h-32 w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="revFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F76B1C" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F76B1C" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((t) => (
          <line
            key={t}
            x1="0"
            x2={w}
            y1={h * t}
            y2={h * t}
            stroke="currentColor"
            strokeOpacity="0.06"
            strokeDasharray="2 4"
          />
        ))}
        <path d={areaPath} fill="url(#revFill)" />
        <path
          d={linePath}
          fill="none"
          stroke="#F76B1C"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {pts.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === pts.length - 1 ? 3.5 : 2}
            fill="#F76B1C"
            stroke="#fff"
            strokeWidth={i === pts.length - 1 ? 2 : 1}
          />
        ))}
      </svg>
      <div className="mt-2 flex justify-between text-[10px] text-muted">
        {labels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

function pct(from: number, to: number) {
  if (from === 0) return 100;
  return Math.round(((to - from) / from) * 100);
}

function fmt(n: number) {
  return n.toLocaleString();
}
