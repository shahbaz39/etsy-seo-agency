import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { LogoMark, Wordmark } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20 border-t border-default">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="#" aria-label="Craftrank — Etsy SEO agency" className="flex items-center gap-2">
              <LogoMark />
              <Wordmark />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Craftrank is a premium SEO agency built exclusively for Etsy
              sellers — driving sustainable traffic, higher rankings, and
              consistent revenue growth.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-default bg-card text-charcoal-600 transition hover:text-brand-600 dark:text-charcoal-100"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><a href="#services" className="hover:text-brand-600">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-brand-600">Keyword Research</a></li>
              <li><a href="#services" className="hover:text-brand-600">Listing Optimization</a></li>
              <li><a href="#services" className="hover:text-brand-600">Etsy Ads</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><a href="#results" className="hover:text-brand-600">Results</a></li>
              <li><a href="#process" className="hover:text-brand-600">Process</a></li>
              <li><a href="#testimonials" className="hover:text-brand-600">Testimonials</a></li>
              <li><a href="#cta" className="hover:text-brand-600">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-default pt-6 text-xs text-muted md:flex-row md:items-center">
          <p>© {year} Craftrank. All rights reserved.</p>
          <p>
            Not affiliated with Etsy, Inc. Etsy is a registered trademark of Etsy, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
