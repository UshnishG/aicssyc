import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-BGzK3osa.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    console.error("[ErrorBoundary]", error);
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AICSSYC 2026 — IEEE CS SYP Congress" },
      { name: "description", content: "AICSSYC 2026 — the IEEE Computer Society SYP Congress at SRM IST, Kattankulathur, 8–11 October 2026." },
      { name: "author", content: "IEEE Computer Society SYP" },
      { property: "og:title", content: "AICSSYC 2026 — IEEE CS SYP Congress" },
      { property: "og:description", content: "IEEE CS SYP Congress 2026 · SRM IST, Kattankulathur · 8–11 October. Theme: Where Agents Meet Humans." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "AICSSYC 2026" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AICSSYC 2026 — IEEE CS SYP Congress" },
      { name: "twitter:description", content: "IEEE CS SYP Congress 2026 · SRM IST · 8–11 October. Where Agents Meet Humans." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/tnH5r0AXJUMgyPdGMorfcJMcPXC3/social-images/social-1780612835820-Logo_-_AICSSYC.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/tnH5r0AXJUMgyPdGMorfcJMcPXC3/social-images/social-1780612835820-Logo_-_AICSSYC.webp" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const BASE_URL = "https://aicssyc.vercel.app";
const Route$1 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [{ path: "/", changefreq: "weekly", priority: "1.0" }];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const faqs = [
  {
    q: "How is IEEE membership verified for subsidised passes?",
    a: "A valid IEEE membership ID — or an IEEE Computer Society membership ID for the lowest tier — must be entered at registration. Verification happens before your pass is approved; please use the same name as on your IEEE profile."
  },
  {
    q: "Is accommodation included with the pass?",
    a: "Accommodation is an optional ₹2,000 add-on that can be toggled on at checkout. It covers SRM IST campus accommodation for the core programme nights."
  },
  {
    q: "What's covered for delegates travelling from outside Tamil Nadu?",
    a: "Travel to Chennai is at the delegate's own arrangement. Once on campus, transport between programme venues is provided. The team can help coordinate group arrivals from major IEEE chapters — write in advance."
  },
  {
    q: "Are meals included across all four days?",
    a: "Lunch, dinner and tea breaks are included across the core programme. Day 2 dinner is provided as optional packets. Day 3 (heritage visit) includes lunch only."
  },
  {
    q: "What about the Day 3 heritage visit — is it optional?",
    a: "It is part of every pass. Day 3 is a guided heritage and cultural exploration off-site, with lunch included and breakfast on your own."
  },
  {
    q: "Will I get a participation certificate?",
    a: "Yes. Every delegate receives a digital participation certificate after the congress. Speakers, panelists and competition winners receive separate recognition."
  },
  {
    q: "What is the refund policy?",
    a: "Passes are non-refundable once approved, but transferable to another verified delegate of the same tier up to fourteen days before the congress. Write to the organisers to request a transfer."
  },
  {
    q: "I have a dietary or accessibility requirement — what should I do?",
    a: "Email the organisers as soon as you've registered with the specifics. The venue is wheelchair-accessible and we accommodate dietary preferences when notified in advance."
  }
];
const $$splitComponentImporter = () => import("./index-BX-XLydm.mjs");
const title = "AICSSYC 2026 — IEEE CS SYP Congress at SRM IST";
const description = "IEEE Computer Society SYP Congress 2026 at SRM IST, Kattankulathur. Theme: Where Agents Meet Humans. 8–11 October 2026.";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title
    }, {
      name: "description",
      content: description
    }, {
      property: "og:title",
      content: "AICSSYC 2026 — IEEE CS SYP Congress"
    }, {
      property: "og:description",
      content: description
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://aicssyc.vercel.app/"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: "https://aicssyc.vercel.app/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        name: "AICSSYC 2026 — IEEE Computer Society SYP Congress",
        startDate: "2026-10-08",
        endDate: "2026-10-11",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "TP Ganesan Auditorium, SRM Institute of Science and Technology",
          address: "Kattankulathur, Tamil Nadu, India"
        },
        description
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$1.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  faqs as f,
  router as r
};
