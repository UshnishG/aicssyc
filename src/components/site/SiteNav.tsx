import { useEffect, useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import siteConfig from "@/data/site-config.json";

const links = siteConfig.navigation;

// Extract hash IDs for active section tracking
const sectionIds = links
  .filter((l) => l.href.startsWith("#"))
  .map((l) => l.href.slice(1));

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll listener for header appearance
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionMap = new Map<string, number>();

    const update = () => {
      let best = "";
      let bestRatio = -1;
      sectionMap.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = id;
        }
      });
      setActiveSection(best);
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          sectionMap.set(id, entry.intersectionRatio);
          update();
        },
        { threshold: [0, 0.1, 0.25, 0.5], rootMargin: "-15% 0px -15% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);

  const NavLink = ({
    href,
    label,
    mobile = false,
    onClick,
  }: {
    href: string;
    label: string;
    mobile?: boolean;
    onClick?: () => void;
  }) => {
    const isHash = href.startsWith("#");
    const id = isHash ? href.slice(1) : "";
    const isActive = id && activeSection === id;

    const className = mobile
      ? `flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 group ${
          isActive
            ? "bg-gold/15 text-gold border border-gold/25"
            : "text-ivory/80 hover:text-ivory hover:bg-white/5 border border-transparent"
        }`
      : `relative text-[0.8rem] font-medium tracking-wide transition-colors duration-200 py-1 whitespace-nowrap ${
          isActive ? "text-gold" : "text-ivory/70 hover:text-ivory"
        }`;

    const content = mobile ? (
      <>
        <span>{label}</span>
        <ChevronRight
          size={14}
          className={`transition-transform duration-200 ${isActive ? "text-gold translate-x-0.5" : "text-ivory/30 group-hover:translate-x-0.5"}`}
        />
      </>
    ) : (
      <>
        {label}
        <span
          className={`absolute -bottom-1 left-0 h-px transition-all duration-300 bg-gold ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </>
    );

    if (isHash) {
      return (
        <Link
          to="/"
          hash={id}
          className={`${className} group`}
          onClick={onClick}
        >
          {content}
        </Link>
      );
    }

    return (
      <a href={href} className={`${className} group`} onClick={onClick}>
        {content}
      </a>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[color:var(--midnight-deep)]/92 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-editorial flex items-center justify-between h-14 md:h-16">
          {/* ── Brand logos ── */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link to="/" aria-label="AICSSYC 2026 — Home" className="flex items-center shrink-0">
              <img
                src="/logo.png"
                alt="AICSSYC 2026"
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </Link>
            <div className="h-5 w-px bg-white/20 shrink-0" />
            <a
              href="https://www.srmist.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center shrink-0"
            >
              <img
                src="/srm.png"
                alt="SRM IST"
                className="h-5 sm:h-6 md:h-7 w-auto object-contain"
              />
            </a>
          </div>

          {/* ── Desktop nav ── */}
          <nav
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 overflow-x-auto no-scrollbar"
            aria-label="Main navigation"
          >
            {links.map((l) => (
              <div key={l.href} className="px-2.5 xl:px-3">
                <NavLink href={l.href} label={l.label} />
              </div>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-2 shrink-0 ml-2">
            <Link
              to="/ambassador"
              className="inline-flex items-center gap-1.5 rounded-full border border-ivory/20 bg-ivory/5 px-3.5 xl:px-4 py-1.5 text-[0.75rem] xl:text-xs font-medium text-ivory hover:bg-ivory/10 hover:border-ivory/35 transition-all duration-200 whitespace-nowrap"
            >
              Ambassador
            </Link>
            <Link
              to="/"
              hash="tickets"
              className="group inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 xl:px-5 py-1.5 text-[0.75rem] xl:text-xs font-semibold text-midnight-deep shadow-[0_0_18px_rgba(212,166,60,0.3)] hover:shadow-[0_0_28px_rgba(212,166,60,0.5)] hover:bg-gold-soft transition-all duration-300 whitespace-nowrap"
            >
              Get Tickets
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
            </Link>
          </div>

          {/* ── Mobile menu toggle ── */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-ivory hover:bg-white/10 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer overlay ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(85vw,340px)] lg:hidden flex flex-col bg-[color:var(--midnight-deep)] border-l border-white/[0.07] shadow-2xl overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-14 border-b border-white/[0.07] shrink-0">
                <Link to="/" onClick={closeMenu} className="flex items-center">
                  <img src="/logo.png" alt="AICSSYC 2026" className="h-7 w-auto object-contain" />
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-ivory/70 hover:text-ivory hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Gradient accent strip */}
              <div className="h-px bg-gradient-to-r from-gold/40 via-emerald/30 to-transparent shrink-0" />

              {/* Nav links */}
              <div className="flex-1 px-4 py-5 flex flex-col gap-1">
                <p className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-ivory/35 px-4 mb-2">
                  Navigation
                </p>
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <NavLink href={l.href} label={l.label} mobile onClick={closeMenu} />
                  </motion.div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="px-4 pb-8 pt-4 border-t border-white/[0.07] flex flex-col gap-2.5 shrink-0">
                <p className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-ivory/35 px-4 mb-1">
                  Quick Actions
                </p>
                <Link
                  to="/ambassador"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ivory/20 bg-ivory/5 px-5 py-3 text-sm font-medium text-ivory hover:bg-ivory/10 hover:border-ivory/35 transition-all"
                >
                  Become an Ambassador
                </Link>
                <Link
                  to="/"
                  hash="tickets"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-midnight-deep shadow-[0_0_20px_rgba(212,166,60,0.35)] hover:bg-gold-soft transition-all"
                >
                  Secure Your Spot →
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
