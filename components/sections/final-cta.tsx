"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import { Magnetic } from "@/components/ui/magnetic";

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-default p-px shadow-glow"
        >
          <div className="absolute inset-0 bg-warm-grad opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_70%)]" />

          <div className="relative rounded-[23px] p-10 text-center md:p-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Limited audit slots this month
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Ready to grow your Etsy shop?
              <br />
              <span className="text-white/85">Let's make it happen.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
              Book your free Etsy SEO audit and get a clear, no-fluff plan for
              what to fix first — built specifically for your shop.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Magnetic>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-700 shadow-soft transition hover:shadow-glow"
                >
                  Book Your Free Etsy Audit
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
              </Magnetic>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-6 text-xs text-white/75">
              No credit card required · Audit delivered in 48 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
