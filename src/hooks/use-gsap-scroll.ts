import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide scroll animations. Mount once at the root.
 * Honors prefers-reduced-motion.
 */
export function useGsapScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      // Headings — fade + rise as they enter
      gsap.utils.toArray<HTMLElement>("main h2").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Eyebrow / section taglines
      gsap.utils
        .toArray<HTMLElement>('main p.text-xs.uppercase, main p[class*="tracking-["]')
        .forEach((el) => {
          gsap.from(el, {
            x: -20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          });
        });

      // Cards / articles — staggered reveal per parent grid
      gsap.utils
        .toArray<HTMLElement>("main section")
        .forEach((section) => {
          const cards = section.querySelectorAll<HTMLElement>(
            "article, [data-animate-card]"
          );
          if (cards.length > 1) {
            gsap.from(cards, {
              y: 50,
              opacity: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });

      // Subtle parallax on decorative gradient overlays
      gsap.utils
        .toArray<HTMLElement>('main [aria-hidden]')
        .forEach((el) => {
          if (!(typeof el.className === "string") || !el.className.includes("absolute")) return;
          gsap.to(el, {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

      // Gold divider lines — scale in
      gsap.utils
        .toArray<HTMLElement>("main .h-px.bg-gold, main .bg-gradient-to-r")
        .forEach((el) => {
          gsap.from(el, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          });
        });

      // Stats / large display numbers — count-in feel
      gsap.utils
        .toArray<HTMLElement>('main .font-display.text-3xl, main .font-display.text-4xl, main .font-display.text-5xl, main .font-display.text-6xl')
        .forEach((el) => {
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });
        });
    });

    // Refresh after fonts/images settle
    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 300);
    window.addEventListener("load", refresh);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);
}
