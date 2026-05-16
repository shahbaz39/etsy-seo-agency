"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL, EMAIL_URL, EMAIL } from "@/lib/contact";

export function ContactButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 md:bottom-7 md:right-7">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="glass w-72 overflow-hidden rounded-2xl border border-default shadow-soft"
          >
            <div className="px-4 pt-4 pb-2">
              <p className="font-display text-sm font-semibold tracking-tight">
                Talk to Craftrank
              </p>
              <p className="mt-1 text-xs text-muted">
                We usually reply within a few hours.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 transition hover:bg-cream-100 dark:hover:bg-charcoal-800"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white shadow-soft">
                <MessageCircle className="h-4 w-4" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-medium">WhatsApp</span>
                <span className="block text-xs text-muted">
                  Chat with us instantly
                </span>
              </span>
            </a>

            <a
              href={EMAIL_URL}
              className="group flex items-center gap-3 border-t border-default px-4 py-3 transition hover:bg-cream-100 dark:hover:bg-charcoal-800"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-warm-grad text-white shadow-glow">
                <Mail className="h-4 w-4" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-medium">Email us</span>
                <span className="block text-xs text-muted">{EMAIL}</span>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="group inline-flex h-14 items-center gap-2 rounded-full bg-warm-grad pl-5 pr-5 text-sm font-medium text-white shadow-glow transition hover:brightness-110 active:scale-[0.98]"
      >
        <span className="relative inline-flex h-5 w-5 items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute"
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="msg"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute"
              >
                <MessageCircle className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
        <span>{open ? "Close" : "Contact us"}</span>
      </button>
    </div>
  );
}
