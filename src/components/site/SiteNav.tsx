import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import siteConfig from "@/data/site-config.json";

const links = siteConfig.navigation;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--midnight-deep)]/95 md:bg-[color:var(--midnight-deep)]/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <Link to="/" aria-label="AICSSYC 2026 — Home" className="flex items-center">
          <img
            src="/logo.png"
            alt="AICSSYC 2026"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const isHash = l.href.startsWith("#");
            return isHash ? (
              <Link
                key={l.href}
                to="/"
                hash={l.href.slice(1)}
                className="text-sm text-ivory/75 hover:text-ivory transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ivory/75 hover:text-ivory transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all group-hover:w-full" />
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/"
            hash="tickets"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-midnight-deep shadow-[0_0_20px_rgba(212,166,60,0.3)] hover:shadow-[0_0_30px_rgba(212,166,60,0.5)] hover:bg-gold-soft transition-all duration-300"
          >
            Secure your spot
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
          </Link>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ivory p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[color:var(--midnight-deep)] border-t border-white/5 overflow-hidden"
          >
            <div className="container-editorial py-6 flex flex-col gap-4">
              {links.map((l) => {
                const isHash = l.href.startsWith("#");
                return isHash ? (
                  <Link
                    key={l.href}
                    to="/"
                    hash={l.href.slice(1)}
                    onClick={() => setOpen(false)}
                    className="text-ivory/85 text-lg font-display"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-ivory/85 text-lg font-display"
                  >
                    {l.label}
                  </a>
                );
              })}
              <Link
                to="/"
                hash="tickets"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-midnight-deep shadow-[0_0_20px_rgba(212,166,60,0.3)]"
              >
                Secure your spot →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
