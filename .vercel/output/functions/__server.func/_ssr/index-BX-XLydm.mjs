import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Root, C as Close, P as Portal, a as Content, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { f as faqs } from "./router-BzW46Z8U.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { X, M as Menu, L as Linkedin, C as Check, P as Plus, a as Mail, I as Instagram, b as Phone } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const navigation = [{ "label": "About", "href": "#about" }, { "label": "Themes", "href": "#themes" }, { "label": "Speakers", "href": "#speakers" }, { "label": "Agenda", "href": "#agenda" }, { "label": "Passes", "href": "#tickets" }, { "label": "Contact", "href": "#contact" }, { "label": "FAQ", "href": "#faq" }];
const siteConfig = {
  navigation
};
const links = siteConfig.navigation;
function SiteNav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -24, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[color:var(--midnight-deep)]/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial flex items-center justify-between h-16 md:h-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", "aria-label": "AICSSYC 2026 — Home", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/logo.png",
              alt: "AICSSYC 2026",
              className: "h-12 md:h-14 w-auto object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: l.href,
              className: "text-sm text-ivory/75 hover:text-ivory transition-colors relative group",
              children: [
                l.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all group-hover:w-full" })
              ]
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#tickets", className: "text-sm text-ivory/80 hover:text-ivory", children: "Register" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#tickets",
                className: "inline-flex items-center gap-2 rounded-sm bg-gold px-4 py-2 text-sm font-medium text-ivory hover:bg-gold-soft transition",
                children: [
                  "Get pass",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Open menu",
              onClick: () => setOpen((v) => !v),
              className: "lg:hidden text-ivory p-2",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "lg:hidden bg-[color:var(--midnight-deep)] border-t border-white/5 overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial py-6 flex flex-col gap-4", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "text-ivory/85 text-lg font-display",
                  children: l.label
                },
                l.href
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#tickets",
                  onClick: () => setOpen(false),
                  className: "mt-2 inline-flex w-fit items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-sm font-medium text-ivory",
                  children: "Get pass →"
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
const tagline = "IEEE Computer Society · SYP Flagship";
const dates = "8 — 11 October";
const year = "2026";
const venueName = "TP Ganesan Auditorium";
const venueLocation = "SRM IST, Kattankulathur";
const themeLine1 = "Where Agents";
const themeLine2 = "Meet Humans";
const heroData = {
  tagline,
  dates,
  year,
  venueName,
  venueLocation,
  themeLine1,
  themeLine2
};
function NetworkCanvas() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(28, Math.floor(w * h / 14e3));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6
      }));
    };
    resize();
    window.addEventListener("resize", resize);
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const max = 140;
          if (d2 < max * max) {
            const alpha = 1 - Math.sqrt(d2) / max;
            ctx.strokeStyle = `rgba(212, 166, 60, ${alpha * 0.28})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = "rgba(248, 247, 242, 0.7)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref, className: "absolute inset-0 h-full w-full", "aria-hidden": true });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen overflow-hidden text-ivory grain", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 opacity-30",
        style: { background: "var(--gradient-atmosphere)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial relative pt-32 md:pt-40 pb-20 lg:pb-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7 },
            className: "inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-slate-mist mb-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-gold" }),
              heroData.tagline
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 30, filter: "blur(14px)" },
            animate: { opacity: 1, y: 0, filter: "blur(0px)" },
            transition: { duration: 1.1, delay: 0.05, ease: [0.22, 1, 0.36, 1] },
            className: "font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.02em] text-balance",
            children: [
              "All India",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Computer Society",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "editorial-italic text-gold", children: [
                "Student & Young",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Professional"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Congress 2026"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.25 },
            className: "mt-12 flex flex-wrap items-center gap-x-10 gap-y-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.28em] text-gold/80", children: "Dates" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 font-display text-2xl text-ivory leading-tight", children: [
                  heroData.dates,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/60", children: heroData.year })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-px bg-white/15" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.28em] text-gold/80", children: "Venue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-ivory leading-tight", children: heroData.venueName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/70 text-sm", children: heroData.venueLocation })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.35 },
            className: "mt-12 flex flex-wrap items-center gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://konfhub.com/aicssyc-2026",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-medium text-ivory hover:bg-gold-soft transition",
                  children: [
                    "Register now",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#agenda",
                  className: "inline-flex items-center gap-2 text-sm text-ivory/80 hover:text-ivory transition border-b border-ivory/20 hover:border-gold pb-1",
                  children: "View congress timeline →"
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.96 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          className: "relative aspect-square w-full max-w-[560px] mx-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border border-white/10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-8 rounded-full border border-white/10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-20 rounded-full border border-gold/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NetworkCanvas, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-gold/80", children: "Theme · 2026" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-3xl md:text-4xl text-ivory mt-3 leading-[1.05]", children: [
                "Where ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "editorial-italic font-normal text-gold", children: heroData.themeLine1.replace("Where ", "") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                heroData.themeLine2
              ] })
            ] }) })
          ]
        }
      )
    ] })
  ] });
}
const EASE = [0.22, 1, 0.36, 1];
const groupVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
};
const headingVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(14px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: EASE }
  }
};
const bodyVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE }
  }
};
const viewport = { once: true, amount: 0.2 };
function RevealGroup({ children, className, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: "hidden",
      whileInView: "show",
      viewport,
      variants: groupVariants,
      className,
      ...rest,
      children
    }
  );
}
function Heading({
  as: Tag = "h2",
  children,
  className
}) {
  const MotionTag = motion[Tag];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MotionTag, { variants: headingVariants, className, children });
}
function Body({ children, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: bodyVariants, className, children });
}
function CardGrid({
  children,
  className,
  stagger = 0.1
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: "hidden",
      whileInView: "show",
      viewport,
      variants: {
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } }
      },
      className,
      children
    }
  );
}
const legacyVariant = (dir, distance) => {
  const base = { opacity: 0 };
  switch (dir) {
    case "up":
      return { hidden: { ...base, y: distance }, show: { opacity: 1, y: 0 } };
    case "down":
      return { hidden: { ...base, y: -distance }, show: { opacity: 1, y: 0 } };
    case "left":
      return { hidden: { ...base, x: distance }, show: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { ...base, x: -distance }, show: { opacity: 1, x: 0 } };
    case "scale":
      return { hidden: { ...base, scale: 0.86 }, show: { opacity: 1, scale: 1 } };
    case "blur":
      return {
        hidden: { ...base, filter: "blur(14px)", y: distance },
        show: { opacity: 1, filter: "blur(0px)", y: 0 }
      };
  }
};
function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  distance = 48,
  once = true,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once, amount: 0.25 },
      variants: legacyVariant(direction, distance),
      transition: { duration, delay, ease: EASE },
      children
    }
  );
}
const aboutData = [
  {
    v: "300+",
    l: "Delegates"
  },
  {
    v: "20+",
    l: "States represented"
  },
  {
    v: "4",
    l: "Programme days"
  },
  {
    v: "National",
    l: "IEEE CS flagship"
  }
];
const markers = aboutData;
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative section-rhythm bg-transparent overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-editorial relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-24 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { direction: "up", distance: 32, className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald", children: "Chapter 01" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          "aria-hidden": true,
          className: "display-mega text-ivory/[0.06] select-none mt-4",
          style: { lineHeight: 0.85 },
          children: "01"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-display italic text-xl text-ivory/70 max-w-xs", children: "India's flagship IEEE Computer Society Congress." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealGroup, { className: "lg:pt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Heading, { className: "font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance", children: [
        "More than a conference —",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "editorial-italic text-emerald", children: " a national gathering" }),
        " of ideas, innovation, culture and community."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Body, { className: "mt-10 prose-measure text-[17px] leading-[1.75] text-ivory/75 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "AICSSYC brings together students, young professionals, researchers, entrepreneurs, industry leaders and IEEE volunteers from across the country to exchange knowledge, build meaningful connections and celebrate the future of computing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Across four days of keynotes, workshops, technical sessions, leadership experiences, networking opportunities and cultural showcases, delegates become part of a community shaping the next generation of technology and innovation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 hairline-top pt-8", children: markers.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl md:text-4xl text-ivory leading-none", children: m.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[10px] uppercase tracking-[0.22em] text-slate-mist", children: m.l })
      ] }, m.l)) })
    ] })
  ] }) }) });
}
const themesData = [
  {
    title: "Research & Academia",
    blurb: "Advancing research methodologies, publication excellence and academic impact.",
    topics: [
      "Applied research showcases",
      "Paper presentations",
      "Academic collaborations",
      "Student research tracks"
    ]
  },
  {
    title: "AI & Intelligent Systems",
    blurb: "Exploring LLMs, computer vision, reinforcement learning and AI infrastructure.",
    topics: [
      "LLMs & multimodal models",
      "Computer vision & RL",
      "Neural architectures",
      "AI infrastructure"
    ]
  },
  {
    title: "Agents & Human Interaction",
    blurb: "Human–AI collaboration, multi-agent systems and interaction design.",
    topics: [
      "Agentic workflows",
      "Multi-agent systems",
      "Intelligent interfaces",
      "Alignment & trust"
    ]
  },
  {
    title: "Entrepreneurship & Innovation",
    blurb: "Startups, venture creation, product-market fit and scaling technology ventures.",
    topics: [
      "Startup showcase",
      "Founder Q&A",
      "Product-market fit",
      "Scaling ventures"
    ]
  },
  {
    title: "Management & Strategy",
    blurb: "Technology leadership, operational excellence and engineering management.",
    topics: [
      "Tech leadership",
      "Operational excellence",
      "Engineering management",
      "Organisational growth"
    ]
  },
  {
    title: "Finance & Digital Economy",
    blurb: "FinTech, digital assets, Web3 and the future of financial infrastructure.",
    topics: [
      "FinTech architecture",
      "Digital assets & Web3",
      "Digital payments",
      "Future financial infrastructure"
    ]
  }
];
const themes = themesData;
function Themes() {
  const [active, setActive] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "themes", className: "relative section-rhythm bg-midnight text-ivory grain overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 opacity-70",
        style: { background: "var(--gradient-atmosphere)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -top-6 left-0 right-0 text-center display-mega text-ivory/[0.04] select-none whitespace-nowrap",
        children: "PROGRAMME"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { direction: "up", distance: 32, className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-gold", children: "Programme · Six tracks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-balance", children: [
          "One coherent argument",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "editorial-italic text-gold", children: " about what to build," }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "told across six tracks."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "hairline-top", children: themes.map((t, i) => {
          const isActive = active === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "border-b border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onMouseEnter: () => setActive(i),
              onFocus: () => setActive(i),
              onClick: () => setActive(i),
              "aria-expanded": isActive,
              className: "group w-full flex items-baseline gap-6 py-6 md:py-7 text-left transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `font-mono text-xs tracking-widest w-8 transition-colors ${isActive ? "text-gold" : "text-ivory/40"}`,
                    children: [
                      "0",
                      i + 1
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `flex-1 font-display text-2xl md:text-[1.9rem] leading-tight tracking-tight transition-all ${isActive ? "text-ivory translate-x-1" : "text-ivory/55 group-hover:text-ivory/85"}`,
                    children: t.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    className: `hidden md:inline-block h-px transition-all duration-500 ${isActive ? "w-12 bg-gold" : "w-4 bg-ivory/20"}`
                  }
                )
              ]
            }
          ) }, t.title);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative lg:pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase tracking-[0.28em] text-gold", children: [
                "Track 0",
                active + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-3xl md:text-4xl text-ivory leading-tight text-balance", children: themes[active].title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-editorial italic text-xl text-ivory/85 leading-snug prose-narrow", children: themes[active].blurb }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 grid grid-cols-2 gap-x-6 gap-y-3 prose-measure", children: themes[active].topics.map((tp) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-ivory/85 text-sm leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-1 rounded-full bg-gold flex-shrink-0" }),
                tp
              ] }, tp)) })
            ]
          },
          active
        ) }) })
      ] })
    ] })
  ] });
}
const featured$1 = { "name": "Shivam Shivam", "role": "AI Architect / AI Innovation Leader", "topic": "ZS Associates", "initials": "SS", "photo": "shivam", "linkedin": "https://www.linkedin.com/in/shivamshivam96/" };
const speakers = [{ "name": "Utkarsh Siddharth", "org": "Co-Founder & CTO", "focus": "Equartis Technologies", "initials": "US", "photo": "utkarsh", "linkedin": "https://www.linkedin.com/in/utkarsh-siddharth-5bb11b126/" }, { "name": "Eric Berkowitz", "org": "Director Of Membership", "focus": "IEEE Computer Society", "initials": "EB", "photo": "eric", "linkedin": "https://www.linkedin.com/in/ericberkowitz/" }, { "name": "Andrew Seely", "org": "Chair, IEEE U.S. Government Community of Interest", "focus": "IEEE Computer Society", "initials": "AS", "photo": "andrew", "linkedin": "https://www.linkedin.com/in/andrewseelytampa/" }, { "name": "Nikky Kumar Jha", "org": "Founder & CEO", "focus": "Saptkrishi (Sabjikothi)", "initials": "NJ", "photo": "nikky", "linkedin": "https://www.linkedin.com/in/nikkykumarjha/" }];
const speakersData = {
  featured: featured$1,
  speakers
};
const photoMap = {
  andrew: "/andrew.jpeg",
  eric: "/eric.jpeg",
  utkarsh: "/utkarsh.jpeg",
  shivam: "/shivam.jpeg",
  nikky: "/nikky.jpeg"
};
const featured = speakersData.featured;
const speakerPool = [
  {
    name: featured.name,
    org: featured.role,
    focus: featured.topic,
    initials: featured.initials,
    photo: featured.photo,
    linkedin: featured.linkedin
  },
  ...speakersData.speakers
];
const displayOrder = ["eric", "andrew", "shivam", "utkarsh", "nikky"];
const allSpeakers = displayOrder.map((key) => speakerPool.find((s) => s.photo === key)).filter((s) => Boolean(s));
function Avatar({ initials, photo, name }) {
  const photoUrl = photo ? photoMap[photo] : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-emerald via-midnight to-midnight-deep flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 opacity-30", style: { background: "var(--gradient-atmosphere)" } }),
    photoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: photoUrl,
        alt: `Portrait of ${name}`,
        loading: "lazy",
        className: "relative h-full w-full object-cover object-center grayscale-[0.15] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative font-display text-5xl md:text-6xl text-gold/90 tracking-tight", children: initials })
  ] });
}
function Speakers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "speakers", className: "relative section-rhythm bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { direction: "up", distance: 32, className: "max-w-3xl mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald", children: "The voices" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance", children: [
        "Researchers, founders & engineers",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "editorial-italic text-emerald", children: " shaping the conversation." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardGrid, { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12 md:gap-x-10", stagger: 0.08, children: allSpeakers.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: itemVariants,
        className: "group relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { initials: s.initials, photo: s.photo, name: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-ivory leading-tight", children: s.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ivory/65 mt-1.5 leading-snug", children: s.org }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: s.linkedin,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `LinkedIn — ${s.name}`,
                className: "mt-3 inline-flex items-center gap-1.5 text-[11px] text-ivory/55 hover:text-gold transition",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 11 }),
                  " Profile"
                ]
              }
            )
          ] })
        ]
      },
      s.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", distance: 24, className: "mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl rounded-2xl border border-ivory/10 bg-midnight-deep/40 backdrop-blur-sm px-8 py-12 md:px-14 md:py-16 text-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 opacity-40 pointer-events-none", style: { background: "var(--gradient-atmosphere)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.3em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex h-2 w-2 items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                "aria-hidden": true,
                className: "absolute inline-flex h-2 w-2 rounded-full bg-gold",
                animate: { scale: [1, 2.4], opacity: [0.55, 0] },
                transition: { duration: 2.4, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                className: "relative inline-flex h-2 w-2 rounded-full bg-gold",
                animate: { opacity: [0.85, 1, 0.85], scale: [1, 1.08, 1] },
                transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
              }
            )
          ] }),
          "Lineup expanding"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-5 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05] tracking-tight text-ivory", children: [
          "The stage is still being set.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block editorial-italic text-emerald mt-1", children: "More voices, soon revealed." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm md:text-base text-ivory/70 prose-measure mx-auto leading-relaxed", children: "Each week, new names join the AICSSYC 2026 stage — researchers, founders, policymakers and IEEE leaders shaping the next decade of computing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#tickets",
            className: "group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-ivory border-b border-ivory/30 hover:border-gold hover:text-gold pb-1 transition",
            children: [
              "Be first to know",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
            ]
          }
        )
      ] })
    ] }) })
  ] }) });
}
const days$1 = [{ "label": "Day 0", "date": "8 October 2026 · Inaugural Day", "title": "Inauguration & opening keynotes", "venue": "TP Ganesan Auditorium", "blocks": [{ "title": "Inauguration Ceremony", "kind": "Ceremony", "room": "Main hall" }, { "title": "Keynote Session I", "kind": "Keynote", "room": "Main hall" }, { "title": "Keynote Session II", "kind": "Keynote", "room": "Main hall" }, { "title": "Expert Panel Discussion", "kind": "Panel", "room": "Main hall" }, { "title": "Networking Dinner", "kind": "Reception", "room": "On site" }] }, { "label": "Day 1", "date": "9 October 2026 · Innovation & Knowledge Exchange", "title": "Technical tracks, expo & cultural evening", "venue": "Multiple halls", "blocks": [{ "title": "Technical Tracks", "kind": "Sessions", "room": "Tracks A–D" }, { "title": "Innovation Expo", "kind": "Showcase", "room": "Expo Hall" }, { "title": "Chapter Presentations", "kind": "Plenary", "room": "Main hall" }, { "title": "Interactive Event Space", "kind": "Open programme", "room": "Open area" }, { "title": "Cultural Evening", "kind": "Reception", "room": "Open lawns" }, { "title": "Networking Activities", "kind": "Networking", "room": "On site" }] }, { "label": "Day 2", "date": "10 October 2026 · Industry & Startup Focus", "title": "Showcases, technical sessions & valedictory", "venue": "Multiple halls", "blocks": [{ "title": "Startup Showcase", "kind": "Showcase", "room": "Hall B" }, { "title": "Industrial Showcase", "kind": "Showcase", "room": "Hall C" }, { "title": "Technical Sessions", "kind": "Sessions", "room": "Tracks A–D" }, { "title": "Interactive Event Space", "kind": "Open programme", "room": "Open area" }, { "title": "Valedictory Ceremony", "kind": "Ceremony", "room": "Main hall" }] }, { "label": "Day 3", "date": "11 October 2026 · Heritage Experience", "title": "Heritage visit & cultural exploration", "venue": "Off-site", "blocks": [{ "title": "Heritage Visit", "kind": "Excursion", "room": "Off-site" }, { "title": "Community Networking", "kind": "Networking", "room": "Off-site" }, { "title": "Cultural Exploration", "kind": "Excursion", "room": "Off-site" }] }];
const timelineData = {
  days: days$1
};
const days = timelineData.days;
function shortDate(raw) {
  const datePart = raw.split("·")[0].trim();
  const [dayNum, month] = datePart.split(" ");
  return `${dayNum} ${month ? month.slice(0, 3) : ""}`.trim();
}
function dayTheme(raw) {
  const parts = raw.split("·");
  return parts.length > 1 ? parts.slice(1).join("·").trim() : "";
}
function Agenda() {
  const [day, setDay] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "agenda", className: "relative section-rhythm bg-[color:var(--muted)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealGroup, { className: "grid md:grid-cols-[1.4fr_1fr] items-end gap-10 mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Heading, { className: "font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance", children: [
        "The delegate",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "editorial-italic text-emerald", children: " journey," }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "day by day."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Body, { className: "text-sm text-ivory/65 md:justify-self-end max-w-xs", children: "Indicative schedule — final agenda subject to change." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-16 md:top-20 z-20 -mx-6 md:-mx-10 px-6 md:px-10 py-4 bg-[color:var(--muted)]/95 backdrop-blur border-y border-ivory/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": "Select congress day",
          className: "relative mx-auto grid w-full max-w-2xl grid-cols-4 gap-1 p-1 rounded-full border border-ivory/15 bg-midnight/40",
          children: days.map((d, i) => {
            const active = day === i;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                role: "tab",
                "aria-selected": active,
                "aria-label": `${d.label} — ${d.date}`,
                onClick: () => setDay(i),
                className: `relative z-10 flex min-w-0 flex-col items-center justify-center text-center px-2 sm:px-3 py-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${active ? "text-midnight" : "text-ivory/80 hover:text-ivory"}`,
                children: [
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      layoutId: "agenda-day-pill",
                      className: "absolute inset-0 -z-10 rounded-full bg-gold shadow-[var(--shadow-gold)]",
                      transition: { type: "spring", stiffness: 500, damping: 38 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `block text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium leading-none ${active ? "text-midnight/70" : "text-gold/80"}`,
                      children: d.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[11px] sm:text-sm mt-1 font-medium whitespace-nowrap", children: shortDate(d.date) })
                ]
              },
              d.label
            );
          })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-center text-xs sm:text-sm text-ivory/70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: days[day].label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-ivory/40", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dayTheme(days[day].date) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.4 },
        className: "mt-12 grid lg:grid-cols-[280px_1fr] gap-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-emerald", children: days[day].label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl text-ivory leading-tight text-balance", children: days[day].title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-ivory/80 text-sm", children: [
              days[day].blocks.length,
              " programmed blocks · Venue: ",
              days[day].venue,
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l border-ivory/15", children: days[day].blocks.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative pl-8 pb-6 last:pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[5px] top-3 h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-ivory" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-transparent border border-ivory/10 p-5 hover:border-ivory/30 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.18em] text-emerald bg-emerald/10 px-2 py-0.5 rounded-sm", children: b.kind }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-ivory/75", children: b.room })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-ivory leading-tight", children: b.title })
            ] })
          ] }, i)) })
        ]
      },
      day
    ) })
  ] }) });
}
const benefits = [
  {
    n: "01",
    title: "Career advancement",
    body: "Direct conversations with hiring leaders, recruiters and senior engineers from across India."
  },
  {
    n: "02",
    title: "Research opportunities",
    body: "Publication-ready feedback, mentorship pathways and lab introductions for student researchers."
  },
  {
    n: "03",
    title: "Industry exposure",
    body: "First-look access to what shipping teams at top product companies are actually building."
  },
  {
    n: "04",
    title: "Entrepreneurship pathways",
    body: "Founder Q&As, investor introductions and co-founder matchmaking through the Startup Showcase."
  },
  {
    n: "05",
    title: "Leadership development",
    body: "Engineering-management tracks and chapter-leadership sessions for office-bearers."
  },
  {
    n: "06",
    title: "National IEEE network",
    body: "A four-day window into the IEEE Computer Society ecosystem and chapters from every region."
  }
];
function WhyAttend() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative section-rhythm bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", distance: 32, className: "max-w-3xl mb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance", children: [
      "Six reasons delegates fly in",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "editorial-italic text-emerald", children: " from every corner of the country." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardGrid, { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-12 md:gap-x-16", stagger: 0.08, children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { variants: itemVariants, className: "group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs tracking-widest text-gold/80", children: b.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-2xl md:text-[1.65rem] text-ivory leading-tight text-balance", children: b.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-ivory/65 text-[15px] leading-[1.7] prose-narrow", children: b.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-px w-12 bg-ivory/15 group-hover:w-24 group-hover:bg-gold transition-all duration-500" })
    ] }, b.title)) })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogClose = Close;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const baseFeatures$1 = ["Full event access", "Technical tracks, keynotes & Innovation Expo", "Delegate kit, meals & networking events", "Participation certificate"];
const accommodationFee = 2e3;
const tiers$1 = [{ "id": "ieee-cs", "name": "IEEE Computer Society Member", "tagline": "Reserved for active IEEE Computer Society members.", "basePrice": 1e3, "requirement": "Valid IEEE CS Membership ID required and verified prior to approval.", "popular": true, "registerUrl": "https://konfhub.com/checkout/aicssyc-2026?ticketId=104339%7C1%3B&selectedCode=EARLYBIRD", "registerUrlWithAccommodation": "https://konfhub.com/checkout/aicssyc-2026?ticketId=104342%7C1%3B&selectedCode=EARLYBIRD" }, { "id": "ieee", "name": "IEEE Member", "tagline": "For active IEEE members who are not IEEE CS members.", "basePrice": 1500, "requirement": "Valid IEEE Membership ID required and verified prior to approval.", "registerUrl": "https://konfhub.com/checkout/aicssyc-2026?ticketId=104340%7C1%3B&selectedCode=EARLYBIRD", "registerUrlWithAccommodation": "https://konfhub.com/checkout/aicssyc-2026?ticketId=104343%7C1%3B&selectedCode=EARLYBIRD" }, { "id": "general", "name": "General Admission", "tagline": "Open to students, professionals, researchers and technology enthusiasts.", "basePrice": 2e3, "registerUrl": "https://konfhub.com/checkout/aicssyc-2026?ticketId=104341%7C1%3B&selectedCode=EARLYBIRD", "registerUrlWithAccommodation": "https://konfhub.com/checkout/aicssyc-2026?ticketId=104344%7C1%3B&selectedCode=EARLYBIRD" }];
const ticketsData = {
  baseFeatures: baseFeatures$1,
  accommodationFee,
  tiers: tiers$1
};
const tiers = ticketsData.tiers;
const baseFeatures = ticketsData.baseFeatures;
const ACCOMMODATION_FEE = ticketsData.accommodationFee;
const WIDGET_PARAMS = "desc=false&bg=FBF7EC&secondaryBg=F3ECD7&ticketBg=FFFFFF&borderCl=E2D6B0&fontColor=1A1F2C&ticketCl=1A1F2C&btnColor=8A6A1F&fontFamily=Hind&borderRadius=10&widget_type=quick";
function buildWidgetUrl(ticketId) {
  if (ticketId) {
    return `https://konfhub.com/widget/aicssyc-2026?${WIDGET_PARAMS}&screen=2&tickets=${ticketId}&ticketId=${ticketId}%7C1`;
  }
  return `https://konfhub.com/widget/aicssyc-2026?${WIDGET_PARAMS}&screen=1`;
}
function Tickets() {
  const [accommodation, setAccommodation] = reactExports.useState(false);
  const [activeTier, setActiveTier] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "tickets",
      className: "relative section-rhythm bg-midnight/60 text-ivory grain overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 opacity-60",
            style: { background: "var(--gradient-atmosphere)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealGroup, { className: "grid lg:grid-cols-[1.3fr_1fr] items-end gap-10 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Heading, { className: "font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-balance", children: [
              "Three passes.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "editorial-italic text-gold", children: " One congress." })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Body, { className: "text-ivory/65 max-w-sm md:justify-self-end text-[15px] leading-[1.7]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Every pass includes full event access, technical tracks, keynotes, Innovation Expo, delegate kit, meals, networking events and a participation certificate." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/10 bg-midnight-deep/55 p-5 md:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-gold", children: "Optional add-on" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 font-display text-xl text-ivory", children: [
                "SRM IST campus accommodation",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/75 text-base ml-2", children: "+ ₹2,000" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                role: "switch",
                "aria-checked": accommodation,
                "aria-label": "Toggle SRM IST campus accommodation add-on",
                onClick: () => setAccommodation((v) => !v),
                className: `relative inline-flex h-9 w-[180px] items-center rounded-sm border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-deep ${accommodation ? "bg-gold border-gold text-ivory" : "bg-transparent border-white/20 text-ivory"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `absolute top-1 bottom-1 w-[86px] rounded-sm transition-all ${accommodation ? "left-[90px] bg-midnight/60" : "left-1 bg-white/15"}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 flex-1 text-center text-xs font-medium uppercase tracking-[0.16em] text-ivory", children: "No stay" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `relative z-10 flex-1 text-center text-xs font-medium uppercase tracking-[0.16em] ${accommodation ? "text-gold" : "text-ivory/75"}`,
                      children: "+ Stay"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: tiers.map((t) => {
            const price = t.basePrice + (accommodation ? ACCOMMODATION_FEE : 0);
            const features = accommodation ? [...baseFeatures, "SRM IST campus accommodation included"] : baseFeatures;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.article,
              {
                initial: { opacity: 0, y: 50, scale: 0.92 },
                whileInView: { opacity: 1, y: 0, scale: 1 },
                viewport: { once: true, amount: 0.2 },
                transition: {
                  duration: 0.8,
                  delay: tiers.indexOf(t) * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                },
                whileHover: { y: -10, transition: { duration: 0.3 } },
                "aria-labelledby": `tier-${t.id}-title`,
                className: `relative p-8 md:p-10 border flex flex-col ${t.popular ? "bg-transparent text-ivory border-gold shadow-[var(--shadow-gold)]" : "bg-midnight-deep/55 border-white/10 text-ivory"}`,
                children: [
                  t.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-8 bg-gold text-ivory text-[10px] uppercase tracking-[0.22em] px-3 py-1", children: "Most subsidised" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      id: `tier-${t.id}-title`,
                      className: "font-display text-2xl md:text-[1.7rem] leading-tight text-ivory",
                      children: t.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ivory/80", children: t.tagline }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-baseline gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-5xl", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Price: " }),
                      "₹",
                      price.toLocaleString("en-IN")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-ivory/75", children: "/ person" })
                  ] }),
                  accommodation && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-ivory/75", children: "Includes ₹2,000 accommodation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3 flex-1", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-3 text-sm leading-relaxed",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Check,
                          {
                            size: 16,
                            "aria-hidden": true,
                            className: `mt-0.5 flex-shrink-0 ${t.popular ? "text-emerald" : "text-gold"}`
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/85", children: f })
                      ]
                    },
                    f
                  )) }),
                  t.requirement && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: `mt-6 text-xs leading-relaxed border-l-2 pl-3 ${t.popular ? "border-emerald text-ivory/80" : "border-gold text-ivory/80"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-[0.16em] block mb-1", children: "Requirement" }),
                        t.requirement
                      ]
                    }
                  ),
                  t.registerUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: accommodation && t.registerUrlWithAccommodation ? t.registerUrlWithAccommodation : t.registerUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `Register for ${t.name} (opens KonfHub checkout in a new tab)`,
                      className: `mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-deep ${t.popular ? "bg-midnight/60 text-ivory hover:bg-midnight-deep/70" : "bg-gold text-ivory hover:bg-gold-soft"}`,
                      children: [
                        "Register",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
                      ]
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setActiveTier(t),
                      "aria-label": `Register for ${t.name}`,
                      className: `mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-deep ${t.popular ? "bg-midnight/60 text-ivory hover:bg-midnight-deep/70" : "bg-gold text-ivory hover:bg-gold-soft"}`,
                      children: [
                        "Register",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
                      ]
                    }
                  )
                ]
              },
              t.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Dialog,
          {
            open: activeTier !== null,
            onOpenChange: (open) => !open && setActiveTier(null),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DialogContent,
              {
                className: "max-w-2xl p-0 gap-0 overflow-hidden border-gold/30 bg-midnight-deep text-ivory shadow-[var(--shadow-gold)] [&>button]:hidden",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "aria-hidden": true,
                      className: "pointer-events-none absolute inset-0 opacity-50",
                      style: { background: "var(--gradient-atmosphere)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { className: "relative px-6 pt-6 pb-4 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-gold", children: "Secure registration" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "mt-2 font-display text-xl md:text-2xl text-ivory leading-tight", children: activeTier?.name ?? "Register" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "mt-1 text-sm text-ivory/75", children: activeTier?.tagline ?? "Complete your registration via KonfHub." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DialogClose,
                      {
                        "aria-label": "Close registration dialog",
                        className: "inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-ivory/80 hover:bg-white/5 hover:text-ivory transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18, "aria-hidden": true })
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative p-4 md:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[12px] overflow-hidden bg-[#FBF7EC] ring-1 ring-gold/40 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)]", children: activeTier && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "iframe",
                    {
                      src: buildWidgetUrl(activeTier.ticketId),
                      title: `Register for ${activeTier.name} — AICSSYC 2026`,
                      width: "100%",
                      height: "560",
                      allow: "payment",
                      className: "block w-full border-0 bg-[#FBF7EC]"
                    },
                    activeTier.id
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-6 py-3 border-t border-white/10 text-[11px] text-ivory/60 flex items-center justify-between gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Powered by KonfHub · Secure checkout" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://konfhub.com/aicssyc-2026",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gold hover:text-gold-soft underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm",
                        children: "Open full page ↗"
                      }
                    )
                  ] })
                ]
              }
            )
          }
        )
      ]
    }
  );
}
const partners$1 = [];
const partnersData = {
  partners: partners$1
};
const partners = partnersData.partners;
function Sponsors() {
  const hasPartners = partners.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sponsors", className: "relative section-rhythm bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", distance: 32, className: "max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance", children: [
      "Partners &",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "editorial-italic text-emerald", children: " sponsor lineup." })
    ] }) }),
    hasPartners ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-ivory/10 border border-ivory/15", children: partners.map((p) => {
      const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[3/2] flex flex-col items-center justify-center gap-2 bg-midnight-deep/55 hover:bg-midnight-deep/75 transition p-6 text-center", children: [
        p.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.logo, alt: p.name, className: "max-h-12 w-auto object-contain opacity-90" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl text-ivory leading-tight", children: p.name }),
        p.tier && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.22em] text-gold", children: p.tier })
      ] });
      return p.url ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: p.url, target: "_blank", rel: "noopener noreferrer", "aria-label": p.name, children: inner }, p.name) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: inner }, p.name);
    }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid md:grid-cols-[1fr_auto] items-end gap-10 hairline-top pt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-editorial italic text-2xl md:text-3xl text-ivory/85 leading-snug prose-measure", children: "Founding partners, principal sponsors and programme partners for the 2026 edition will be unveiled in the coming weeks." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "mailto:ieeecomputersocietysrmist@gmail.com",
          className: "group inline-flex items-center gap-2 text-sm text-ivory border-b border-ivory/30 hover:border-gold pb-1 transition whitespace-nowrap",
          children: [
            "Become a sponsor",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
          ]
        }
      )
    ] })
  ] }) });
}
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "relative section-rhythm bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial grid lg:grid-cols-[0.7fr_1.3fr] gap-16 lg:gap-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { direction: "up", distance: 32, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance", children: [
        "Practical",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "editorial-italic text-emerald", children: "questions, answered." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-sm text-ivory/70 leading-relaxed prose-narrow", children: [
        "Anything else? Email",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "mailto:ieeecomputersocietysrmist@gmail.com",
            className: "text-ivory border-b border-ivory/30 hover:border-gold pb-0.5",
            children: "the organising team"
          }
        ),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline-top border-b border-white/10", children: faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-white/8 last:border-b-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setOpen(isOpen ? null : i),
            "aria-expanded": isOpen,
            className: "w-full flex items-start justify-between gap-6 py-7 text-left group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl md:text-2xl text-ivory leading-snug text-balance pr-2", children: f.q }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `flex-shrink-0 h-9 w-9 inline-flex items-center justify-center border border-ivory/20 transition-all ${isOpen ? "bg-gold text-midnight border-gold rotate-45" : "text-ivory group-hover:border-gold/60"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pb-8 pr-16 text-ivory/70 leading-[1.75] prose-measure", children: f.a })
          }
        ) })
      ] }, f.q);
    }) })
  ] }) });
}
const contactData = [
  {
    name: "Ushnish Ghosal",
    role: "Chair",
    phone: "+91 78109 82910",
    phoneHref: "+917810982910",
    email: "ug9320@srmist.edu.in"
  },
  {
    name: "Aayushman Kathayat",
    role: "Vice Chair",
    phone: "+91 94563 62388",
    phoneHref: "+919456362388",
    email: "ak1320@srmist.edu.in"
  },
  {
    name: "Krishna Aggarwal",
    role: "Secretary",
    phone: "+91 97182 12195",
    phoneHref: "+919718212195",
    email: "ka2937@srmist.edu.in"
  },
  {
    name: "Atharv Dorle",
    role: "Technical Head",
    phone: "+91 83197 73605",
    phoneHref: "+918319773605",
    email: "ad3638@srmist.edu.in"
  }
];
const pointsOfContact = contactData;
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative section-rhythm bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { direction: "up", distance: 32, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance", children: [
          "Get in touch",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "editorial-italic text-emerald", children: "with the organisers." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-ivory/70 leading-[1.75] prose-narrow", children: "For delegate queries, partnership requests, press or institutional collaboration — the AICSSYC 2026 team responds within two working days." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", distance: 24, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "hairline-top", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "mailto:ieeecomputersocietysrmist@gmail.com",
            className: "group flex items-start justify-between gap-6 py-8 transition hover:pl-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-start gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 20, className: "text-gold mt-1.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase tracking-[0.28em] text-gold/80", children: "Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-2 font-display text-lg md:text-xl text-ivory break-words", children: "ieeecomputersocietysrmist@gmail.com" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/60 group-hover:text-gold transition-transform group-hover:translate-x-1 mt-2", children: "→" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.instagram.com/ieeecs_srmist/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group flex items-start justify-between gap-6 py-8 transition hover:pl-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-start gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 20, className: "text-emerald mt-1.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase tracking-[0.28em] text-emerald", children: "Instagram" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-2 font-display text-lg md:text-xl text-ivory", children: "@ieeecs_srmist" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/60 group-hover:text-emerald transition-transform group-hover:translate-x-1 mt-2", children: "→" })
            ]
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", distance: 28, delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24 lg:mt-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-8 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-[clamp(1.4rem,2.6vw,2.25rem)] leading-[1.05] tracking-tight text-ivory", children: [
          "Points of contact",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block editorial-italic text-emerald text-base md:text-lg mt-2", children: "speak to the team directly." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block text-[10px] uppercase tracking-[0.28em] text-gold/80", children: "Direct line" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: pointsOfContact.map((poc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          className: "group relative overflow-hidden rounded-sm border border-ivory/10 bg-midnight-deep/40 backdrop-blur-sm p-6 transition hover:border-gold/40",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.28em] text-gold/80", children: poc.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-xl text-ivory truncate", children: poc.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-ivory/10 pt-5 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `tel:${poc.phoneHref}`,
                  className: "flex items-center gap-3 text-ivory/85 transition hover:text-gold",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "text-gold shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-wide text-sm", children: poc.phone })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `mailto:${poc.email}`,
                  className: "flex items-center gap-3 text-ivory/70 transition hover:text-emerald",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14, className: "text-emerald shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm truncate", children: poc.email })
                  ]
                }
              )
            ] })
          ]
        },
        poc.name
      )) })
    ] }) })
  ] }) });
}
function CallToAction() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "join",
      className: "relative bg-midnight-deep/70 text-ivory grain overflow-hidden border-t border-white/8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 opacity-80",
            style: { background: "var(--gradient-atmosphere)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-editorial relative py-32 md:py-48 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { direction: "up", distance: 32, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.32em] text-gold", children: "8 — 11 October 2026 · Kattankulathur" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-10 font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.02em] text-balance", children: [
            "Where ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "editorial-italic font-normal text-gold", children: "Agents" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Meet Humans."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 flex flex-wrap items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://konfhub.com/aicssyc-2026",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-medium text-ivory hover:bg-gold-soft transition",
                children: [
                  "Register now",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#sponsors",
                className: "inline-flex items-center gap-2 text-sm text-ivory/80 hover:text-ivory border-b border-ivory/20 hover:border-gold pb-1 transition",
                children: "Become a sponsor →"
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}
const quickNav = siteConfig.navigation;
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative bg-midnight-deep/85 text-ivory grain overflow-hidden border-t border-white/10 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial py-16 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 md:gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "AICSSYC 2026", className: "h-14 w-auto object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs uppercase tracking-[0.24em] text-gold/80", children: "A flagship of" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-lg text-ivory/90", children: "IEEE Computer Society SYP" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.24em] text-slate-mist mb-5", children: "Venue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-ivory text-sm leading-relaxed", children: [
            "TP Ganesan Auditorium",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "SRM IST, Kattankulathur",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Tamil Nadu, India"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-ivory/70", children: "8 – 11 October 2026" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.24em] text-slate-mist mb-5", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:ieeecomputersocietysrmist@gmail.com", className: "text-ivory/75 hover:text-gold break-words transition", children: "ieeecomputersocietysrmist@gmail.com" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/ieeecs_srmist/", target: "_blank", rel: "noopener noreferrer", className: "text-ivory/75 hover:text-gold transition", children: "@ieeecs_srmist" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.24em] text-slate-mist mb-5", children: "Navigate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: quickNav.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "text-ivory/75 hover:text-gold transition", children: l.label }) }, l.href)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-ivory/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 AICSSYC · IEEE Computer Society SYP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-ivory transition", children: "Code of conduct" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-ivory transition", children: "Privacy" })
        ] })
      ] })
    ] })
  ] });
}
function Index() {
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-ivory min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Themes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Speakers, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Agenda, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyAttend, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tickets, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sponsors, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CallToAction, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
